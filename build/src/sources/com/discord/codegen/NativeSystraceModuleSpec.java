package com.discord.codegen;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.turbomodule.core.interfaces.TurboModule;
import fb.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class NativeSystraceModuleSpec extends ReactContextBaseJavaModule implements TurboModule {
    public static final String NAME = "NativeSystraceModule";

    public NativeSystraceModuleSpec(ReactApplicationContext reactApplicationContext) {
        super(reactApplicationContext);
    }

    @ReactMethod(isBlockingSynchronousMethod = true)
    @a
    public abstract double beginAsyncEvent(String str);

    @ReactMethod
    @a
    public abstract void beginEvent(String str);

    @ReactMethod
    @a
    public abstract void counterEvent(String str, double d10);

    @ReactMethod
    @a
    public abstract void endAsyncEvent(String str, double d10);

    @ReactMethod
    @a
    public abstract void endEvent();

    @Override // com.facebook.react.bridge.NativeModule
    public String getName() {
        return NAME;
    }

    @ReactMethod(isBlockingSynchronousMethod = true)
    @a
    public abstract boolean isEnabled();
}
