/* eslint-disable */
import React from 'react';
import { FaApple, FaFacebook, FaGithub, FaGoogle, FaTwitter } from 'react-icons/fa';
import { useOAuthLogin } from './useOauthLogin';

interface SocialMediaLoginButtonProps {
  provider: 'apple' | 'twitter' | 'facebook' | 'github' | 'google';
  icon: React.ReactNode;
  testId: string;
}

const SocialMediaLoginButton: React.FunctionComponent<SocialMediaLoginButtonProps> = ({ provider, icon, testId }) => {  const { isPending, signInWithOAuth } = useOAuthLogin(provider);

const getIconColor = () => {
  // Add logic to return the respective color for each social media provider
  switch (provider) {
    case 'apple':
      return '#000000'; // black color
    case 'twitter':
      return '#1DA1F2'; // Twitter blue
    case 'facebook':
      return '#1877F2'; // Facebook blue
    case 'github':
      return '#000000'; // black color
    case 'google':
      return '#fd5344'; // Google blue
    default:

      return '#000000'; // default to black
  }
};
  return (

    <button
      onClick={() => void signInWithOAuth()}
      disabled={isPending}
      className="social-media-login-button" // Add any additional styling here
      type="button"
      data-testid={testId}
    >
    <span style={{fontSize: '28px', color: getIconColor() }}>{icon}</span>

    </button>
  );
};

export const AppleLoginButton = () => (
  <SocialMediaLoginButton provider="apple" icon={<FaApple />} testId="apple-login-button" />
);

export const TwitterLoginButton = () => (
  <SocialMediaLoginButton provider="twitter" icon={<FaTwitter />} testId="twitter-login-button" />
);

export const FacebookLoginButton = () => (
  <SocialMediaLoginButton provider="facebook" icon={<FaFacebook />} testId="facebook-login-button" />
);

export const GithubLoginButton = () => (
  <SocialMediaLoginButton provider="github" icon={<FaGithub />} testId="github-login-button" />
);

export const GoogleLoginButton = () => (
  <SocialMediaLoginButton provider="google" icon={<FaGoogle />} testId="github-login-button" />
);

/* eslint-enable */
