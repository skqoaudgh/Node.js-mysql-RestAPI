# Node.js-mysql-RestAPI
Rest API made with Node.js and mysql

## ER-Diagram
![1](https://user-images.githubusercontent.com/10339017/60396693-caf95300-9b7f-11e9-922a-56cce53d4637.PNG)

## API
### student
  * GET [/] : 전체 학생 정보
  * GET [/id] : 학번이 id인 학생의 정보
  * POST [/] : 학생 정보 입력
  * DELETE [/] : 학생 정보 삭제
  * PUT [/id] : 학번이 id인 학생의 정보 수정
  
 ### professor
  * GET [/] : 전체 교수 정보
  * GET [/id] : 교수번호가 id인 교수의 정보
  * POST [/] : 교수 정보 입력
  * DELETE [/] : 교수 정보 삭제
  * PUT [/id] : 교수번호가 id인 교수의 정보 수정
  
   ### course
  * GET [/] : 전체 강의 정보
  * GET [/id] : 학번이 id인 학생이 신청한 강의 정보
  * POST [/] : 수강신청
  * DELETE [/id] : 수강번호가 id인 수강신청 삭제
