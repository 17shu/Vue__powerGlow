import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../app'; // 假設你的 Express 應用文件名為 app.js

const should = chai.should();

chai.use(chaiHttp);

describe('API Tests', () => {
  // 測試 GET 請求
  it('it should GET all the items', (done) => {
    chai.request(server)
        .get('/api/data')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          done();
        });
  });



  // 你可以根據需要添加更多測試
});
