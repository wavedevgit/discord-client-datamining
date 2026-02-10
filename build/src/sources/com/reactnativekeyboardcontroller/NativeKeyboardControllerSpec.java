package com.reactnativekeyboardcontroller;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.turbomodule.core.interfaces.TurboModule;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class NativeKeyboardControllerSpec extends ReactContextBaseJavaModule implements TurboModule {
    public static final String NAME = "KeyboardController";

    public NativeKeyboardControllerSpec(ReactApplicationContext reactApplicationContext) {
        super(reactApplicationContext);
    }

    @ReactMethod
    @gb.a
    public abstract void addListener(String str);

    @ReactMethod
    @gb.a
    public abstract void dismiss(boolean z10, boolean z11);

    @Override // com.facebook.react.bridge.NativeModule
    public String getName() {
        return NAME;
    }

    @ReactMethod
    @gb.a
    public abstract void preload();

    @ReactMethod
    @gb.a
    public abstract void removeListeners(double d10);

    @ReactMethod
    @gb.a
    public abstract void setDefaultMode();

    @ReactMethod
    @gb.a
    public abstract void setFocusTo(String str);

    @ReactMethod
    @gb.a
    public abstract void setInputMode(double d10);
}
