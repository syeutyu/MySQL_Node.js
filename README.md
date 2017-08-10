# Node.js_MySQL Quick Start Repo

## 암호화 방식에 대하여
> 현재 내가 알아본 암호화 모듈은 두가지가 있다
> 1. Crypto 
>> Crypto : sha1, sha512 등 다양한 방식으로 암호화가 가능하다 또한 base64를 통하여 인코딩, 디코딩이 가능하며 같은 값이 입력되면 같은 암호화 값이 출력된다.
>> 단점으로는 salt라는 unique한 값을 주지 않으면 쉽게 암호화를 해제할수가있다.

> 2. bcrypt

>> bcrpt : hashSync()라는 메소드를 이용해서 암호화가 가능하다 그렇지만 같은 값을