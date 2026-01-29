package com.discord.codegen;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.turbomodule.core.interfaces.TurboModule;
import fb.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class NativeTTIModuleSpec extends ReactContextBaseJavaModule implements TurboModule {
    public static final String NAME = "NativeTTIModule";

    public NativeTTIModuleSpec(ReactApplicationContext reactApplicationContext) {
        super(reactApplicationContext);
    }

    @ReactMethod(isBlockingSynchronousMethod = true)
    @a
    public abstract String getLaunchScenario();

    @ReactMethod(isBlockingSynchronousMethod = true)
    @a
    public abstract Double getMainActivityCreationTime();

    @Override // com.facebook.react.bridge.NativeModule
    public String getName() {
        return NAME;
    }

    @ReactMethod(isBlockingSynchronousMethod = true)
    @a
    public abstract boolean getWasBroadcastReceiverStartedBefore();

    @ReactMethod(isBlockingSynchronousMethod = true)
    @a
    public abstract boolean getWasServiceStartedBefore();

    @ReactMethod(isBlockingSynchronousMethod = true)
    @a
    public abstract boolean wasInitializeCompleteWhenActivityOpened();

    @ReactMethod(isBlockingSynchronousMethod = true)
    @a
    public abstract boolean wasLaunchedViaShortcut();
}
