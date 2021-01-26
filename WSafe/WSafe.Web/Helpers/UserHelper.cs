using Microsoft.AspNetCore.Identity;
using System;
using System.Threading.Tasks;
using WSafe.Web.Data;
using WSafe.Web.Models;

namespace WSafe.Web.Helpers
{
    public class UserHelper : IUserHelper
    {
        public Task<User> AddUser(AddUserView view, string role)
        {
            throw new NotImplementedException();
        }

        public Task<IdentityResult> AddUserAsync(User user, string password)
        {
            throw new NotImplementedException();
        }

        public Task AddUserToRoleAsync(User user, string roleName)
        {
            throw new NotImplementedException();
        }

        public Task<IdentityResult> ChangePasswordAsync(User user, string oldPassword, string newPassword)
        {
            throw new NotImplementedException();
        }

        public Task CheckRoleAsync(string roleName)
        {
            throw new NotImplementedException();
        }

        public Task<IdentityResult> ConfirmEmailAsync(User user, string token)
        {
            throw new NotImplementedException();
        }

        public Task<bool> DeleteUserAsync(string email)
        {
            throw new NotImplementedException();
        }

        public Task<string> GenerateEmailConfirmationTokenAsync(User user)
        {
            throw new NotImplementedException();
        }

        public Task<string> GeneratePasswordResetTokenAsync(User user)
        {
            throw new NotImplementedException();
        }

        public Task<User> GetUserByEmailAsync(string email)
        {
            throw new NotImplementedException();
        }

        public Task<User> GetUserByIdAsync(string userId)
        {
            throw new NotImplementedException();
        }

        public Task<bool> IsUserInRoleAsync(User user, string roleName)
        {
            throw new NotImplementedException();
        }

        public Task<SignInResult> LoginAsync(LoginView model)
        {
            throw new NotImplementedException();
        }

        public Task LogoutAsync()
        {
            throw new NotImplementedException();
        }

        public Task<IdentityResult> ResetPasswordAsync(User user, string token, string password)
        {
            throw new NotImplementedException();
        }

        public Task<IdentityResult> UpdateUserAsync(User user)
        {
            throw new NotImplementedException();
        }

        public Task<SignInResult> ValidatePasswordAsync(User user, string password)
        {
            throw new NotImplementedException();
        }
    }
}
