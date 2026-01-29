package com.discord.codegen;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.turbomodule.core.interfaces.TurboModule;
import fb.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class NativeSafeAreaInsetsModuleSpec extends ReactContextBaseJavaModule implements TurboModule {
    public static final String NAME = "NativeSafeAreaInsetsModule";

    public NativeSafeAreaInsetsModuleSpec(ReactApplicationContext reactApplicationContext) {
        super(reactApplicationContext);
    }

    @ReactMethod(isBlockingSynchronousMethod = true)
    @a
    public abstract double getImeInsets(boolean z10);

    @Override // com.facebook.react.bridge.NativeModule
    public String getName() {
        return NAME;
    }

    @ReactMethod(isBlockingSynchronousMethod = true)
    @a
    public abstract WritableMap getStableSafeAreaInsets();

    @ReactMethod
    @a
    public abstract void setNavigationBarContrastEnforced(boolean z10);

    @ReactMethod
    @a
    public abstract void setNavigationBarVisible(boolean z10);

    @ReactMethod
    @a
    public abstract void setStatusBarVisible(boolean z10);
}
