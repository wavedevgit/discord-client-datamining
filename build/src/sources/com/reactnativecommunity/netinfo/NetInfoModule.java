package com.reactnativecommunity.netinfo;

import am.b;
import am.f;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;
import com.reactnativecommunity.netinfo.a;
@ReactModule(name = NetInfoModule.NAME)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class NetInfoModule extends ReactContextBaseJavaModule implements a.InterfaceC0194a {
    public static final String NAME = "RNCNetInfo";
    private final a mAmazonConnectivityChecker;
    private final b mConnectivityReceiver;
    private int numberOfListeners;

    public NetInfoModule(ReactApplicationContext reactApplicationContext) {
        super(reactApplicationContext);
        this.numberOfListeners = 0;
        this.mConnectivityReceiver = new f(reactApplicationContext);
        this.mAmazonConnectivityChecker = new a(reactApplicationContext, this);
    }

    @ReactMethod
    public void addListener(String str) {
        this.numberOfListeners++;
        this.mConnectivityReceiver.f707e = true;
    }

    @ReactMethod
    public void getCurrentState(String str, Promise promise) {
        this.mConnectivityReceiver.d(str, promise);
    }

    @Override // com.facebook.react.bridge.NativeModule
    public String getName() {
        return NAME;
    }

    @Override // com.facebook.react.bridge.BaseJavaModule, com.facebook.react.bridge.NativeModule, com.facebook.react.turbomodule.core.interfaces.TurboModule
    public void initialize() {
        this.mConnectivityReceiver.g();
        this.mAmazonConnectivityChecker.g();
    }

    @Override // com.facebook.react.bridge.BaseJavaModule, com.facebook.react.bridge.NativeModule, com.facebook.react.turbomodule.core.interfaces.TurboModule
    public void invalidate() {
        this.mAmazonConnectivityChecker.k();
        this.mConnectivityReceiver.j();
        this.mConnectivityReceiver.f707e = false;
    }

    @Override // com.reactnativecommunity.netinfo.a.InterfaceC0194a
    public void onAmazonFireDeviceConnectivityChanged(boolean z10) {
        this.mConnectivityReceiver.i(z10);
    }

    @Override // com.facebook.react.bridge.NativeModule
    public void onCatalystInstanceDestroy() {
        invalidate();
    }

    @ReactMethod
    public void removeListeners(Integer num) {
        int intValue = this.numberOfListeners - num.intValue();
        this.numberOfListeners = intValue;
        if (intValue == 0) {
            this.mConnectivityReceiver.f707e = false;
        }
    }
}
