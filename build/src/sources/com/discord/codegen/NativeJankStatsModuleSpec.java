package com.discord.codegen;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.turbomodule.core.interfaces.TurboModule;
import fb.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class NativeJankStatsModuleSpec extends ReactContextBaseJavaModule implements TurboModule {
    public static final String NAME = "NativeJankStatsModule";

    public NativeJankStatsModuleSpec(ReactApplicationContext reactApplicationContext) {
        super(reactApplicationContext);
    }

    @Override // com.facebook.react.bridge.NativeModule
    public String getName() {
        return NAME;
    }

    @ReactMethod(isBlockingSynchronousMethod = true)
    @a
    public abstract WritableMap requestReport();

    @ReactMethod
    @a
    public abstract void setJankHeuristicMultiplier(double d10);

    @ReactMethod
    @a
    public abstract void startTracking();

    @ReactMethod
    @a
    public abstract void stopTracking();
}
