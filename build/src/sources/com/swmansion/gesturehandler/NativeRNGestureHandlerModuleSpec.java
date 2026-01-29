package com.swmansion.gesturehandler;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.turbomodule.core.interfaces.TurboModule;
import fb.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class NativeRNGestureHandlerModuleSpec extends ReactContextBaseJavaModule implements TurboModule {
    public static final String NAME = "RNGestureHandlerModule";

    public NativeRNGestureHandlerModuleSpec(ReactApplicationContext reactApplicationContext) {
        super(reactApplicationContext);
    }

    @ReactMethod
    @a
    public abstract void attachGestureHandler(double d10, double d11, double d12);

    @ReactMethod
    @a
    public abstract void createGestureHandler(String str, double d10, ReadableMap readableMap);

    @ReactMethod
    @a
    public abstract void dropGestureHandler(double d10);

    @ReactMethod
    @a
    public abstract void flushOperations();

    @Override // com.facebook.react.bridge.NativeModule
    public String getName() {
        return "RNGestureHandlerModule";
    }

    @ReactMethod
    @a
    public abstract void handleClearJSResponder();

    @ReactMethod
    @a
    public abstract void handleSetJSResponder(double d10, boolean z10);

    @ReactMethod(isBlockingSynchronousMethod = true)
    @a
    public abstract boolean install();

    @ReactMethod
    @a
    public abstract void updateGestureHandler(double d10, ReadableMap readableMap);
}
