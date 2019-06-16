package com.tweetbox;

import com.facebook.react.ReactActivity;
// My Customization Starts
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;
// My Customization Ends

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "TweetBox";
    }

    // My Customization Starts
    @Override
    protected ReactActivityDelegate createReactActivityDelegate() {
      return new ReactActivityDeleaingate(this, getMainComponentName()) {
        @Override
        protected ReactRootView createRootView() {
         return new RNGestureHandlerEnabledRootView(MainActivity.this);
        }
      };
    }
    // My Customization Ends
}
