import slug from 'slug';
import {theUrl as baseUrl} from './config'
import base64 from 'base-64'

export default function User(name, email, website) {
	return {		name,		email,		website	}
}

export function createUrl(name)
{
	return `${baseUrl}/usrs/${slug(name)}`;
}

export function gravatar(email)
{
	const base64Name = base64.encode(email);
	const photoURL = 'https://www.gravatar.com/avatar/' + base64Name;
	
	return photoURL;
}