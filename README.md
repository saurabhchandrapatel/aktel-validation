Aktel Form Validation
================

Licensed under the MIT license

A simple Aktel Form Validation can be used to validate data in HTML forms before sending off the content to a server.

   add class to your input field . 
        
        - required : for not blank field
        - name : for people or any name.
        - email : for email validation
        - url : for url with http/https/ftp/ftps etc
        - phone : phone no validation.
        - credit_card : creadit card.
        - number : for number
        - pincodein : india pic code
        - pincodeUS : US pin code 
        - pincodeCA : pin code for Canada
        - date : date formate i.e 10/10/2012 or 10.10.2001 or 10-10-2001
        - checked : to check checkbox.
        - radiochecked : to radio button
        
        

Demo
=====

* http://www.aktel.in/github/aktel-validation/example/



Example
========

        <input type="text" class="required credit_card" name="credit_card" value="" />
        
        <input id="name" type="text" class="required name" name="name" value="" />
        
        <input id="email" type="text" class="required email" name="email" value="" />
        
        <input id="phone" type="text" class="required phone" name="phone" value="" />
