const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mailer = require('./routes/mailer/mailer.js');

app.use(bodyParser.json());
app.use(cors());

const PORT = 3000;

app.post('/user-form', async (req, res) => {
  const lineBreak = '%0D%0A';
  const message = {
    from: 'AdvekonSpb',
    to: req.body.email,
    subject: 'Адвекон- предоставляет юридические услуги, с целью возврата средств от недобросовестных брокеров',
    text: `
    Здравствуйте! Вас приветствует риск-менеджер юридического компании «Адвекон» по делам о возврате средств от брокера-мошенника.
    
    Сразу, хочу обратить Ваше внимание:
    мы работаем БЕЗ ПРЕДОПЛАТЫ  (если у Вас требуют предоплату - будьте бдительны - это 100% МОШЕННИКИ !!!)
    
    ЕСЛИ ВЫ ЗАИНТЕРЕСОВАНЫ В ВОЗВРАТЕ ДЕНЕЖНЫХ СРЕДСТВ,
    то прошу предварительно ответить на нижеуказанные вопросы:
    
    - Ваш номер телефона, по которому с Вами можно связаться, чтобы нам было комфортнее взаимодействовать;
    
    - подавали ли ранее на возврат средств в свой банк, где открыты карта/счет?
    
    - какая сумма была переведена брокеру-мошеннику?
    
    С уважением, 
    
    Риск-менеджер по делам о возврате средств от брокера мошенника на рынке финансовых услуг
    
    email: advekonspb.info@gmail.com
    
    По любым интересующим Вас вопросам Вы поможете написать нам на:
    
    WhatsApp- 
    Viber-
      +7 900 965 16 62
      +7 991 279 13 86
    `
  }
  const userData = {
    from: 'AdvekonSpb',
    to: 'advekonspb.info@gmail.com',
    subject: new Date(),
    text: `
      ${new Date()}
      ${Object.entries(req.body).toString()}
    `
  }
  await mailer(message);
  mailer(userData);
  res.send('hello bitch');
});

app.use(express.static(__dirname + '/public/'));

app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));

app.listen(PORT, () => console.log(`listerning on port: ${PORT}`));

