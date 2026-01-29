package com.discord.codegen;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.turbomodule.core.interfaces.TurboModule;
import fb.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class NativeMobileVoiceOverlayModuleSpec extends ReactContextBaseJavaModule implements TurboModule {
    public static final String NAME = "NativeMobileVoiceOverlayModule";

    public NativeMobileVoiceOverlayModuleSpec(ReactApplicationContext reactApplicationContext) {
        super(reactApplicationContext);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void emitOnChannelQueryUpdate(String str) {
        this.mEventEmitterCallback.invoke("onChannelQueryUpdate", str);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void emitOnLayoutTrashed() {
        this.mEventEmitterCallback.invoke("onLayoutTrashed");
    }

    @ReactMethod
    @a
    public abstract void enableOverlay(Promise promise);

    @Override // com.facebook.react.bridge.NativeModule
    public String getName() {
        return NAME;
    }

    @ReactMethod
    @a
    public abstract void hideOverlay();

    @ReactMethod
    @a
    public abstract void setData(ReadableMap readableMap);

    @ReactMethod
    @a
    public abstract void showOverlay(ReadableMap readableMap);
}
