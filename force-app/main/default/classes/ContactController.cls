public with sharing class ContactController {

    @AuraEnabled(cacheable = true)
    public static List<contact> getcontactList(string searchkey){
        string mykeyword = '%' + searchkey + '%';
        list<contact> contactList = New List<contact>();
       /* contactList = [select Id,Name,Email,Phone from contact where name like :mykeyword];
        return;*/
        for(contact conlst : [select Id,Name,firstName,Lastname,Email,Phone from contact where name like :mykeyword]){
            contactList.add(conlst);
        }
        if(contactList.size() == 0){
            throw new AuraHandledException('No Record Found');
        }
        else{
            return contactList;
        }
    }
    
}