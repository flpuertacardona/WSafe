﻿namespace WSafe.Web.Helpers
{
    public interface IMailHelper
    {
        void SendMail(string to, string subject, string body);
    }
}
