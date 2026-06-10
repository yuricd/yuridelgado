---
title: "The pros and cons of mobile development"
date: 2026-06-10
tags: ["Mobile", "Android", "iOS", "Expo", "React Native"]
excerpt: "Lessons from a year building and publishing OrbiGuide on Google Play and the App Store: store fees, review hurdles, compatibility, regulations, and when native apps are worth it over the web."
---

Since I was 15, I've been developing for the web because that's the most democratic and accessible way to share information. It doesn't require the audience to download or install anything. Everybody has a browser, and in the last few years new features and APIs have come to browsers, closing the gap between mobile and web experiences. PWAs were a big step in that direction too. However, there are still some things that can only be created on mobile apps, or at least with a decent mobile UX.

It's been a year now since I created [OrbiGuide](https://orbiguide.com/?ref=yuridelgado.dev). My original plan was to make it a web app, but it requires functionality that is better supported at the device level. Also, PWAs on iOS devices are more limited.

After careful thought, I decided to make it a mobile app, available for both Android and iOS. The good part is: ~99% of the world's mobile devices run either Android or iOS. Audience coverage: ✅.  
Unlike installing PWAs, which isn't a common procedure, people are pretty familiar with downloading apps on their phones. The installation experience: ✅.  
Being closer to the hardware lets me access useful features and APIs, hence providing a better product: ✅.

One might think mobile apps are the clear winner. Here's a list of things I learned while developing, publishing, and maintaining a mobile app.

_All the numbers and prices here are as of this writing_

## A subscription is required

Google Play: a one-time fee of $25, which makes sense given the infrastructure and review costs.
Apple App Store: the annual fee is $99. In my view, that's a bit steep.

## You get a profit partner

I'm not talking about the government. Both Google Play Store and Apple App Store have greedy fees. As of this writing, the numbers are:

### Google Play Store

- **In-App Purchases (IAP):** The standard commission is 20% for new installs (down from 30%, the rate when I published OrbiGuide).
- **Subscriptions:** The rate is 10% for recurring subscriptions.
- **Billing Fee:** If you use Google Play Billing, an additional 5% fee applies in the US, UK, and EEA.
  - _Effective Total:_ 25% for IAPs and 15% for subscriptions using Google's processor.

I learned that I could apply for a reduced rate because I'm a solo dev with only one app earning less than $1 million annually. I obviously did that, reducing the rate to a flat **15%**.

### Apple App Store

- **Standard Commission:** 30% on all digital goods and subscriptions (Year 1).
- **Subscriptions (Year 2+):** Drops to 15% automatically after a subscriber remains active for 12 months.
- **Small Business Program:** Similarly to Google, developers earning under $1 million annually pay 15% on all transactions (including Year 1 subscriptions).

Effectively, 15% of the app's revenue goes to them, not to mention the restrictions on using external payment links in the app. Each country has its own regulations now, but it could be up to 27% if you used external payment links.

## Submission process can be a nightmare

Once you have created your app and built it for both Android and iOS you can't just publish them like you would with a web app. No. You need to fill out a bunch of forms regarding the kind of content you have, app information, privacy policy, license agreements, certificates, test user credentials, etc. Each country has its own regulations, so if you decide to make your app globally available, be aware that you may have to comply with different (changing) rules.
After they accept the information you provided, then you can add a cool icon, a description, some screenshots (following their specific standards), add your bundle, and submit it. If you get approved on the first try, congrats! For me it took a couple of submissions. They usually complain about something, especially Apple.
Every update you do that requires a new build must pass through this review process.

If you are used to web apps that have a much smoother delivery process, you might get frustrated.

## Compatibility issues

A few months after I launched my app, Android announced that apps should support 16 KB page sizes, and a couple of dependencies of OrbiGuide were not compatible with that change. I had less than two months to make it compatible somehow, otherwise my app would have new releases blocked. It took me a lot of research, docs, playing with Kotlin versions, and manually tweaking dependencies' code to make it work.
I've never faced any issues with iOS on that matter though. But it's important to mention that compatibility issues between Android and iOS are very common, especially if you use specific APIs like OrbiGuide does. You always have to test new features on both devices.

## Regulation concerns

Every other month I receive an email regarding changes in taxes, aging policies, or other regulations in countries that my app is available in.
The last one I received was this:

> Texas' App Store Accountability Act, [Texas SB 2420](https://c.gle/AOExmq0kjydetN33EO24LtvsmovdYHtVaTmzhyhRxkPw3kdfCWbEljDbgl7MV8ZC5cQPrRlLFY9kjBGIx1F83H9uIP5Lw3okHwD4sEd_A6-wDJIEaa5Yettp-0z6uOWUG8gtadBEHfzy_aKx23axQ5G5Fdv5LPLkW9hreAeD-YKbhEdHqOv5DlY6Umwm4tbMfjg2cWSO45Lmi7Bwt10)

In summary, it mandates strict age verification and parental consent requirements for mobile app stores operating in Texas. You can receive such notices from any country, state, or city that decides to impose a new law or regulation.

## First app requires multiple testers before being published

Google Play Store requires at least 12 opt-in testers to use your app for 14 continuous days before you can publish your first app as an individual developer. You're excited and want to show your app to the world, but hold on. First, get 12 people to test your app and wait 14 days.

## A third-party may be required to streamline billing

Each app store has its own billing platform and rules. Figuring that out by yourself and integrating with them may be unnecessarily difficult. Solutions like RevenueCat handle that for you, and compared to the stores' fees, it's worth it.

## Compiling and testing is more difficult

iOS apps must be compiled and tested on Apple devices, like MacBooks. I'm a Linux user, so having to switch to a separate laptop just to do that is annoying. I also had to get an iPhone to allow me to test more easily. Of course I could have relied solely on the iOS Simulator, but having a physical device on the spot was the experience I wanted to have.

The process of building and preparing the bundle to submit takes time and involves several steps. To help me with that I decided to use Expo. The build and submission processes for both Android and iOS were much easier with it. Downsides: if you want more speed and quota, you'll have to pay; it's another vendor that locks you in. And talking about lock-in...

### Leaving them is difficult

If you've decided to build a mobile app but don't want to be held hostage to those companies, what options do you have besides a PWA?

1. Sideloading: distribute the APK (Android) directly on your website. IPA (Apple) can't be easily distributed in this way though. It requires a signature with a valid certificate. It's a more complex setup, but it's possible.
2. Alternative app stores: for Android, other marketplaces like Amazon AppStore, Samsung Galaxy Store, or F-Droid can host and handle updates. For Apple, as far as I know only third-party sideloading options are available, which I have never tested myself.
   Essentially, if you want to publish your app as a real product and reach people, you'll end up being in their clutches.

## Final thoughts

My conclusion could be that mobile development sucks. That's not entirely false, but there are some good aspects to it as well.

Due to the strict review process, apps tend to have higher quality and be more secure. People are more likely to trust an app distributed by an app store rather than a random APK they can download from a website.

The costs are not negligible: there are subscription fees, access to Apple devices, and high revenue cuts. They create barriers to entry and make it harder to keep an app published.

Bottom line for me is: if I want to put something out and have full control of it, go web. If I need native mobile functionality, PWA might be sufficient. If I really need to have a mobile app in the app stores, a business plan + a really good incentive to do it is mandatory.
