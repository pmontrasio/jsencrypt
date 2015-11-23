var keySizes = [128, 256, 512, 1024, 2048];
var pbkeys = [
"-----BEGIN PUBLIC KEY-----\
MCwwDQYJKoZIhvcNAQEBBQADGwAwGAIRAMJYzPtURyEUNRX7j6bQhg8CAwEAAQ==\
-----END PUBLIC KEY-----",
"-----BEGIN PUBLIC KEY-----\
MDwwDQYJKoZIhvcNAQEBBQADKwAwKAIhAKqSOLiJmFJZ9VaqAWbUGQLPK1dzkMUM\
i/fTISSSdKxZAgMBAAE=\
-----END PUBLIC KEY-----",
"-----BEGIN PUBLIC KEY-----\
MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAOt7ZGR2Jb3aAe8xTWN/z9e5KL0MTn34\
gtCweIbnCc9BE+0z6WJVhnXRBgukdmB7iidrQInZDcDNxiZGFjI8ubMCAwEAAQ==\
-----END PUBLIC KEY-----",
"-----BEGIN PUBLIC KEY-----\
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCyuL7vgD69afw7jYLnJdbDPWr5\
BIlt8lmt9IfzjOYJ/YJkTrAuk/ZEEOvuPA4TVflOCuwJtT6oZlb8E8HOh82j5LVM\
XFDzkHpjzBfO9OaT66j7RPADdxRpsGUmk2pEHoLk/EXK0lTtsGv0i8OFDVSyxjuf\
SCUGerkpV/+uafgJqwIDAQAB\
-----END PUBLIC KEY-----",
"-----BEGIN PUBLIC KEY-----\
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA6lauoxL3cnY2R9uYUQ/O\
xW+S7QOKZa8edcO/frEy3XIm8Q+q7XvNAxonYeBFnHZRkcEKfTj+uOQ7pLxpG7jQ\
+UggHfKyj5+zGOy/P8MUjca5NrWf+lXibohkzspJ5BgbJVpdem1ZmFDWkZkqrA4x\
7lCOBJQk6hzUoOHDh6dn/z9IqmAPq+PwTjwl8MgyBy/Nsk+8oBJOXAg8R0SZ/E32\
JSSYdn/ft4nYCvrOGJeNm03meIp1v40Z4HRdWM78T9nvNdNL26iYr6jMRdfuGeV2\
LsZaxx1SjGvzy4YZfV+huWesjj7qoe5v4pM0oG8CbfUpHDnzuMZ9R/7bEcmUQnN0\
YwIDAQAB\
-----END PUBLIC KEY-----"
];

var prkeys = [
"-----BEGIN RSA PRIVATE KEY-----\
MGQCAQACEQDCWMz7VEchFDUV+4+m0IYPAgMBAAECEBRARpPF02eZ0fSeC7z1P4EC\
CQDih/7h09mLQQIJANug/jPgzE1PAgkAxUrYa+pMT4ECCQCd460bin4VDQIJANdx\
V5Pdim/H\
-----END RSA PRIVATE KEY-----",
"-----BEGIN RSA PRIVATE KEY-----\
MIGqAgEAAiEAqpI4uImYUln1VqoBZtQZAs8rV3OQxQyL99MhJJJ0rFkCAwEAAQIg\
AMaNb3lgse8qyGwZeYg5XOIBGEstbBHGR4moDB7CfWkCEQDcWO73QkRCx4cgXyRo\
8itzAhEAxit+llKWGIBOZBSpkBKuAwIRAJwZdNE95NXaPGQ2grjGNvkCEBuQmT8X\
pcEqt7y8EwnzTzkCEEIIS4UUKS8ZDrxtOmYcgdA=\
-----END RSA PRIVATE KEY-----",
"-----BEGIN RSA PRIVATE KEY-----\
MIIBOgIBAAJBAOt7ZGR2Jb3aAe8xTWN/z9e5KL0MTn34gtCweIbnCc9BE+0z6WJV\
hnXRBgukdmB7iidrQInZDcDNxiZGFjI8ubMCAwEAAQJAONQmfjglE5QxM1BqpMCL\
oDwHINh/eNcoesSb0bKgI2vSpbehdxTfVZ6P+i+U1CVRy2xUryWBu5pyOotyEdtS\
QQIhAPldH+5H0G9klbwjJu2L85ZW1QbHWOLrtiLWK14rfwWdAiEA8b+xc/ATCSvw\
vesWWP0GwW524zRqZh7VX+XU2Xpqw48CIHtLhEI41+J8BV0ktFa34BTxkhrr7hMl\
IMVQx9ikAQYxAiEA3AWqvSlQOfW6+y8+PKm1f1FJdQpcmCsR6mDkczceenMCIApw\
Y30Gma+YVSrIkkyd6lZMv+zxSNaBAblzm2o9Abfx\
-----END RSA PRIVATE KEY-----",
"-----BEGIN RSA PRIVATE KEY-----\
MIICWwIBAAKBgQCyuL7vgD69afw7jYLnJdbDPWr5BIlt8lmt9IfzjOYJ/YJkTrAu\
k/ZEEOvuPA4TVflOCuwJtT6oZlb8E8HOh82j5LVMXFDzkHpjzBfO9OaT66j7RPAD\
dxRpsGUmk2pEHoLk/EXK0lTtsGv0i8OFDVSyxjufSCUGerkpV/+uafgJqwIDAQAB\
AoGAcwdvdO0A9J6zhoz1NNro2G6+XBosbgRu7gSWQA5uvP1aoD75LHF1LqgJgiNL\
F+zc8fsbor/x3SdJUyNQOSK1GnUtpnNXZV50XVk9mdJAWdgVWDcDUdKm7oQ2fbkv\
hjcTFZHUErXMi3zOQrWv5x5sd948Koq0Kg0ohIrOf8uhkQkCQQDX4IK8BHdfuNdz\
BohKsMFLdtQL06Lwz68qfplnFyQCKG+2zC2ALrkNAK/83x/+dFT84CiWzVDF5bFD\
TUMq+CYHAkEA0/Bfs9eXG5UnchvcMiNx6xlxtO9jT3Q5ZwVjjBly0QvdmXYRIcVi\
QF+D0pbNfi+YseNPLX/oJQDnbzYEbEK2PQJAJkQcyHk+M9CPGEujIyI70UWqBsKo\
EmmuEilIxfZbIqrKSqvcsOkXUk+54mgmwrMaUYzmhPy2Aa5agqSScG52RwJAGKK+\
XSdYV0p1NVxrsiBQo6VnhEK3Zor6CTGlKqnioM4iSi5hO224SAdSSW5iIKLjuvnT\
QFS35WU/gbvjs7nleQJAVSGtjX2HK4/yVU7dX+BCBiSrlReshr0So31l8fufydLw\
ahh8P6K19o8ysVAvZEnUECUlIR2Afpq5yabOCIkpbA==\
-----END RSA PRIVATE KEY-----",
"-----BEGIN RSA PRIVATE KEY-----\
MIIEpAIBAAKCAQEA6lauoxL3cnY2R9uYUQ/OxW+S7QOKZa8edcO/frEy3XIm8Q+q\
7XvNAxonYeBFnHZRkcEKfTj+uOQ7pLxpG7jQ+UggHfKyj5+zGOy/P8MUjca5NrWf\
+lXibohkzspJ5BgbJVpdem1ZmFDWkZkqrA4x7lCOBJQk6hzUoOHDh6dn/z9IqmAP\
q+PwTjwl8MgyBy/Nsk+8oBJOXAg8R0SZ/E32JSSYdn/ft4nYCvrOGJeNm03meIp1\
v40Z4HRdWM78T9nvNdNL26iYr6jMRdfuGeV2LsZaxx1SjGvzy4YZfV+huWesjj7q\
oe5v4pM0oG8CbfUpHDnzuMZ9R/7bEcmUQnN0YwIDAQABAoIBAH/GyizDT8fK62gd\
Nh2lR/LiFrREBPfTGAHQvZ8AUiLrdo5lI6egpLX3UdgNqQdagLnAD88d/86jLF50\
Gb/y84epq1GJH5Iu20JQ/StwXMm9vQo22MdwgyoQFx+mr8m+1zZz4pq5+2uRUJ5N\
bTYp+1Hd/MJEYSiClfIviCV0w8EqHlVWv3ewJraBCPRb9TXGYEjoiyToLYtcIE9U\
4Em/XeB0BdOleaEAi58sBTIdLUlwiV35SsEwe0JwFhMukhr7J31907g7rtHmKAZ/\
9cBVI+1cDHsh7rnDHT5zrzixMDVisjgGKPYCEAzycE6bUEXwnWaR67vQkfU3FSdm\
Uq9UTpECgYEA/gYcTc8zBYOyJZ/9cwLHMFNTmEIm5fpEJ0xLFwnL5LsirZzUwsBr\
jau5Kc9d4c9kZ4SktsS9Kg9DtBLBuhwpUzvXqjBvcdiV1ZHy4fue12mEWvBE14qP\
HHru7vP8Jryw7CdghFvT9XMmcirwiQbcXW11sNT13CkXPQVCc6RFV9kCgYEA7Cle\
SyWZqugOUG0RfCxdR/Yt2gKV3GzX9sgPVAFcd7q6/HRGvuaN5D8QjWzc3FAWF5xQ\
kWvgpZYB0CvgrQoflpPWq/Z9qpYToWXqlyFtwSHFmbBNGgv8f4DllX18jCP1RfWb\
C46O8pgnq28dICdakIA2s5fpbqcpKfZo3eHK5JsCgYEAlXbA9qNgkPERRAQkG6TZ\
0LxmpmLeAllD+p9wW0jfWGEnoWFy6nhPkFcnJsuloLTnjeVFCWkvKG0819pldH0X\
b6r5VWEUYbcfSj+K2p6zsmmaf+t5hh034XkP1zdl+ODzdLAioR5q07QCPhC34NhR\
lwNNyVM0qmrfCn9qvyI7ztkCgYEAxC89iPnMZWDvezqQGvKT71MAFiqtqfa1lenu\
ad/TnBcAfPZvSukmmKUXMBVuiIrzP1v4xkWy0nwCN5grxjQxt5pK7IIRNSQFXL/Y\
mQIJNjbC+4CtHGU2tgkzL/OWAqlgeWSmD3y3Haru0Yi1zl9C6eXJC3q4TdcJ6DUu\
Opz3Ot8CgYBBRYVkQ3xGJwewMC8ngbWRRf2fhjWJkHneo9ZLfNvSTyVjmKqDScz/\
S20S6PxZ++a3jaJiUP7ou1mO5mAVdhd3Y98HhMUz5HbZTdSg5B17x700xpN4YlBx\
YduZv6bZjeAfu9t/rcLOlIWjYYnpt3wT33KqIw0L1XUaVFzbzLE0gA==\
-----END RSA PRIVATE KEY-----"
];

/*
var noPaddingCipherTexts = [
  "mXGtCjdS3vPpIOS8WK0wNg==",

  "Y66dZpqXG6bA+bvCtCRc7X3O2Jy2obOtdGJhTFVkZ2I=",

  "135p1keLPbju+agEWySGi7Z9kqF9XjvvZZDcTLVfaWphWB92BoF4PoKzG7fJ\nvxjiL6ziS6qtPRWk0Gu3tSgPSA==",

  "giJ9gPTUHCkMXztexPIQK/kuHE2phzgY6RfROZnsPNWFhMFZPPxpvwNEJg3J\nTsGNr5wYBQlXDBPyXmRa+3lf3nQLDUQrFYR9aBeCDDxHtIKjB4gKXWYSROEK\nA1MufpAMOE2Qcx6SUGAFqGHl/MtCzysldHEkYAG38lHyn22qftE=",

  "giJ9gPTUHCkMXztexPIQK/kuHE2phzgY6RfROZnsPNWFhMFZPPxpvwNEJg3J\nTsGNr5wYBQlXDBPyXmRa+3lf3nQLDUQrFYR9aBeCDDxHtIKjB4gKXWYSROEK\nA1MufpAMOE2Qcx6SUGAFqGHl/MtCzysldHEkYAG38lHyn22qftE=",

  "MpduiUvYGDpGW09PckpbAauLMD4y2XBr55QtbLnF5mN4Hgq/5CklHPNpTkVv\nVsPT/Mg/lYlM+N6LA8OQwXZwJx2VsXdef3p3XMDsR4DesKxwHl8HraZX1t9R\nmEcgfQ0SbTeU0zOrXJorrb7AfkRAfqnck1jJuFX+6+3HOe4gIiRbwulYJADY\ndStbg+XyQyD5ypMd/IcILcQL34+8umKeUfRVui5LF+CwMQPLsgqtUi+gsTox\nwSZtiiwaClJXtM7gPJOLVWMGOIpISmbt+EYq4GUIhuhr1EcBHcdr9Tc6ZJNA\nsraz/s2a7NEvvs1g/SHeChvebKdxBUBuAGbrAu/7PA=="
];
*/

var noPaddingCipherTexts = [
  'eBo02EKVlkc4TsEkM+/Dbg==',
  'DPNiM+NiLzYuS3HBRF/hoGnpAgt43a2dX1mO3DqFmCI=',
  'DFqElqtYt14Ly9T1EVDJPJH19gDCruYOHoAd1MyFoh2CLg+lu64nd9783pga8MnBqYqYV/KIskk/mXpm1JyE9A==',
  'KUh5JYD/TaAo0mtt7JRR9uorw/nAnIbUqluxnzpprA/2HbNefj6dDIZmN8GSlGLEMy8Tnsy5+5k+whAivSY2RBOPeyZJfJnkLTNxAPYZD+wZMJPbwDnzv0zHUsz325Z0ExbH785GDM0cUOCLkUhB0NhvVZpCX6tQYTTZCWAXoEE=',
  'ib4LFMlbeIkt3S8bs+oOW0NsX4RaIcaQXW28QlOiNkn/FRwVlLD3MsOu2fCiC2wjkfwkJeJ6rr2sTyrU2qmj9vXhn5t06MXjOYMAmkhiaJeE/Yz8nTIWMLzkK8J5ouKdnP+TjZ0Lmg5XjvB2TbQm1rsnQUlg4nR/wahDFIPw1sPKDc6IIkW285d3N/EW8gvKUdcv3NLIwuJZLuRVtcdd7Zsh16DvXwaGwzi6aB6jGsdmDjhWL6iR2dNl7L4OB7dM3WmXtcyZNd6EvxczclhrcBjjJVFmaAYjXF1xgqyUExbpTKGZpDHe4xTTX6vpHe7WKvnzc4nFKeUEAPzmpY/JkQ=='
];

$.each(keySizes, function(index, keySize) {
  var jse = new JSEncrypt({default_key_size: keySize});
  var openssl_private_key = prkeys[index];
  describe("JSEncrypt no padding - " + keySize + " bit", function () {

    jse.setPrivateKey(openssl_private_key);

    it("should decrypt to 'hello'", function () {
      var encrypted = noPaddingCipherTexts[index];
      var decrypted = jse.decryptNoPadding(encrypted);
      expect(decrypted.substr(0, 5)).to.be("hello");
    });
  });
});

$.each(keySizes, function(index, keySize){

    var jse = new JSEncrypt({default_key_size:keySize});
    var openssl_public_key = pbkeys[index];
    var openssl_private_key = prkeys[index];

    describe('JSEncrypt - '+keySize+' bit', function(){

        //this.timeout(0); //Timout for test cases, zero means infinite. Needed for key sizes > 1024

        describe('#getKey()', function(){

            it('should be '+keySize+' bit long', function () {

                var key = jse.getKey();
                var length = key.n.bitLength();
                length = length%2===0 ? length: length+1;
                expect(length).to.equal(keySize);

            });

        });

        describe('#encrypt() | #decrypt()', function(){

            //Tom Wu's RSA Object use paddingpkcs #1, type 2
            var maxLength = (((jse.getKey().n.bitLength()+7)>>3)-11);
            var maxLengthBit = maxLength << 3;

            it('should encrypt/decrypt up to '+maxLengthBit+' bit', function () {

                var test = [];
                for (var i=0; i<maxLength;i++)
                    test.push('a');
                test = test.join('');

                var encrypted = jse.encrypt(test);
                expect(encrypted).to.be.ok();

                var decrypted = jse.decrypt(encrypted);
                expect(decrypted).to.be(test);

            });

            it('should fail to encrypt more than '+maxLengthBit+' bit', function(){

                var test = [];
                for (var i=0; i<(maxLength+1);i++)
                    test.push('a');
                test = test.join('');

                var encrypted = jse.encrypt(test);
                expect(encrypted).to.not.be.ok();

            });

        });

        describe('#getPublicKey()', function(){

            var pkey = jse.getPublicKey();

            it('should be a non-empty string', function(){

                expect(pkey).to.be.a('string');
                expect(pkey).to.not.be.empty();

            });

            it('should contain public header and footer and be wrapped at 64 chars', function(){
                //For small bit keys, the public key may contain only one line
                var regex = /-----BEGIN PUBLIC KEY-----\n((.{64}\n)+(.{1,64}\n)?)|(.{1,64}\n)-----END PUBLIC KEY-----/;
                expect(pkey).to.match(regex);

            });

        });

        describe('#getPrivateKey()', function(){

            var pkey = jse.getPrivateKey();

            it('should be a non-empty string', function(){

                expect(pkey).to.be.a('string');
                expect(pkey).to.not.be.empty();

            });

            it('should contain private header and footer and be wrapped at 64 chars', function(){

                var regex = /-----BEGIN RSA PRIVATE KEY-----\n(.{64}\n)+(.{1,64}\n)?-----END RSA PRIVATE KEY-----/;
                expect(pkey).to.match(regex);

            });

        });

        describe('#getPublicKeyB64()', function(){

            var pkey = jse.getPublicKeyB64();

            it('should be a non-empty string', function(){

                expect(pkey).to.be.a('string');
                expect(pkey).to.not.be.empty();

            });

            it('should not contain public header and footer,one line, base64 encoded', function(){

                //regex to match base64 encoded string, reference:
                //http://stackoverflow.com/a/5885097/1446321
                var regex = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$/;
                expect(pkey).to.match(regex);

            });

        });

        describe('#getPrivateKeyB64()', function(){

            var pkey = jse.getPrivateKeyB64();

            it('should be a non-empty string', function(){

                expect(pkey).to.be.a('string');
                expect(pkey).to.not.be.empty();

            });

            it('should not contain private header and footer,one line, base64 encoded', function(){

                //regex to match base64 encoded string, reference:
                //http://stackoverflow.com/a/5885097/1446321
                var regex = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$/;
                expect(pkey).to.match(regex);

            });

        });

        describe('#setPrivateKey()', function(){

            var tmp = new JSEncrypt();
            tmp.setPrivateKey(openssl_private_key);

            it('should correctly set the private key parameters',function(){

                var params = ['n', 'e', 'd', 'p', 'q', 'dmp1', 'dmq1', 'coeff'];
                expect(tmp.key).to.be.ok();
                expect(tmp.key).to.have.keys(params);
                $.each(params, function(index,value){
                    expect(tmp.key[value]).to.be.ok();
                });

            });

            it('should both encrypt and decrypt',function(){

               var test = 'test';
               var enc = tmp.encrypt(test);
               expect(enc).to.be.ok();
               var dec = tmp.decrypt(enc);
               expect(dec).to.be(test);

            });

        });

        describe('#setPublicKey()', function(){

            var tmp = new JSEncrypt();
            tmp.setPublicKey(openssl_public_key);

            it('should correctly set the public key parameters',function(){

                var pub_params = ['n', 'e'];
                var priv_params = ['d', 'p', 'q', 'dmp1', 'dmq1', 'coeff'];
                expect(tmp.key).to.be.ok();
                expect(tmp.key).to.have.keys(pub_params);
                $.each(pub_params, function(index,value){
                    expect(tmp.key[value]).to.be.ok();
                });
                $.each(priv_params, function(index,value){
                    expect(tmp.key[value]).to.not.be.ok();
                });

            });

            it('should only encrypt',function(){

               var test = 'test';
               var enc = tmp.encrypt(test);
               var dec = tmp.decrypt(enc);
               expect(enc).to.be.ok();
               expect(dec).to.not.be.ok();

            });

        });

    });

});
