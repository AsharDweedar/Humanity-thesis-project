import 'react-native';
import React from 'react';


import App from '../App';

import SignUp from '../client/signUp';

import OrgSignUp from '../client/orgSignUp';

import UserSignUp from '../client/userSignUp';

import SignIn from '../client/signIn';

import logInOrgs from '../client/logInOrgs';

import logInUseres from '../client/logInUsers';

import Navbar from '../client/navbar';

import Orgprofile from '../client/orgprofile';

import OrgEditProf from '../client/orgEditProf';

import Createevents from '../client/createevents';

import MyEvents from '../client/myEvents';

import Userprofile from '../client/userprofile';

import UserEditProf from '../client/userEditProf';

import Entryevent from '../client/entryevent';

import List from '../client/list';

import EventPageOrg from '../client/EventPageOrg';

import EventPage from '../client/EventPage';


import renderer from 'react-test-renderer';

	
describe('Client test',() =>{
	
    it('shows main component', () =>{
    	const tree = renderer.create(
      	<App />
    	).toJSON();

    	expect(tree).toMatchSnapshot();
    });

    it('After user/org press on Signup should see a new component to choose he/she vulantair or organization ', () =>{
      const tree = renderer.create(
        <SignUp />
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });

    it('After user/org press on Org Signup should see a new component to fill orgnization informations and press Signup', () =>{
      const tree = renderer.create(
        <OrgSignUp />
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });

    it('After user/org press on user Signup should see a new component to fill his informations and press Signup', () =>{
      const tree = renderer.create(
        <UserSignUp />
      ).toJSON();

      expect(tree).toMatchSnapshot();
    }); 

    it('After user/org press on Signin should see a new component to choose he/she vulantair or organization ', () =>{
      const tree = renderer.create(
        <SignIn />
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });

    it('After user/org press on Org Signin should see a new component to fill orgnization informations and press Signin', () =>{
      const tree = renderer.create(
        <logInOrgs />
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });

    it('After User press on User Signin should see a new component to fill his informations and press Signin', () =>{
      const tree = renderer.create(
        <logInUseres />
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });

    xit('After user/org press on Sign in should see the navbar', () =>{
      const tree = renderer.create(
        <Navbar />
      ).toJSON();

      expect(tree).toMatchSnapshot();
    }); 

    xit('After org press on Sign in should see orgnization profile', () =>{
      const tree = renderer.create(
        <Orgprofile />
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });

    it('After org press on edit profile should see new component to fill the new informations', () =>{
      const tree = renderer.create(
        <OrgEditProf />
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });

    it('After org press on create event should see new component to fill the new event informations', () =>{
      const tree = renderer.create(
        <Createevents />
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });

    it('After org press on creat new event should see new component to fill event infos and press submit', () =>{
      const tree = renderer.create(
        <Createevents />
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });

    it('After org/user press on my events button should see org/user events', () =>{
      const tree = renderer.create(
        <MyEvents />
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });

    xit('After User fill his info and press on Sign in should see his profile', () =>{
      const tree = renderer.create(
        <Userprofile />
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });

    it('After user press on edit profile should see new component to fill the new informations', () =>{
      const tree = renderer.create(
        <UserEditProf />
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });

    xit('the events in list event should come from entry event component and show them with list component', () =>{
      const tree = renderer.create(
        <Entryevent />
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });

    it('After user/org press on Events from navbar should see the events', () =>{
      const tree = renderer.create(
        <List />
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });

    xit('After org press on Event name from should see new page for this corrent event and it can delte it', () =>{
      const tree = renderer.create(
        <EventPageOrg />
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });

    xit('when user/org press on current event should seee the rest of event informations', () =>{
      const tree = renderer.create(
        <EventPage />
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });

});