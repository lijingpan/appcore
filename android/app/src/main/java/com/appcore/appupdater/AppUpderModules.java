package com.appcore.appupdater;

import android.util.Log;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.github.javiersantos.appupdater.AppUpdater;
import com.github.javiersantos.appupdater.enums.Display;
import com.github.javiersantos.appupdater.enums.UpdateFrom;

/**
 * Created by Admin on 2018/12/5.
 */

public class AppUpderModules extends ReactContextBaseJavaModule {

    public AppUpderModules(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "appupder";
    }

    @ReactMethod
    public void CheckUpder() {
        try {
            Log.i("111", "开始监听");

            new AppUpdater(getCurrentActivity())
                    .setUpdateFrom(UpdateFrom.JSON)
                    .setUpdateJSON("http://web-api.chesudi.com/update.json")
                    .setDisplay(Display.DIALOG)
                    .setButtonDoNotShowAgain(null)
                    .setButtonDismiss(null)
                    .setCancelable(false)
                    .start();
            Log.i("111", "结束监听");
        } catch (Exception ex) {
            Log.i("111", "异常信息:"+ex.getMessage());
        }

    }

}
