package io.sentry.react;

import androidx.annotation.NonNull;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class RNSentryModule extends NativeRNSentrySpec {
    private final n impl;

    /* JADX INFO: Access modifiers changed from: package-private */
    public RNSentryModule(ReactApplicationContext reactApplicationContext) {
        super(reactApplicationContext);
        this.impl = new n(reactApplicationContext);
    }

    @Override // io.sentry.react.NativeRNSentrySpec
    public void addBreadcrumb(ReadableMap readableMap) {
        this.impl.l(readableMap);
    }

    @Override // io.sentry.react.NativeRNSentrySpec
    public void addListener(String str) {
        this.impl.m(str);
    }

    @Override // io.sentry.react.NativeRNSentrySpec
    public void captureEnvelope(String str, ReadableMap readableMap, Promise promise) {
        this.impl.o(str, readableMap, promise);
    }

    @Override // io.sentry.react.NativeRNSentrySpec
    public void captureReplay(boolean z10, Promise promise) {
        this.impl.p(z10, promise);
    }

    @Override // io.sentry.react.NativeRNSentrySpec
    public void captureScreenshot(Promise promise) {
        this.impl.q(promise);
    }

    @Override // io.sentry.react.NativeRNSentrySpec
    public void clearBreadcrumbs() {
        this.impl.s();
    }

    @Override // io.sentry.react.NativeRNSentrySpec
    public void closeNativeSdk(Promise promise) {
        this.impl.t(promise);
    }

    @Override // io.sentry.react.NativeRNSentrySpec
    public void crash() {
        this.impl.u();
    }

    @Override // io.sentry.react.NativeRNSentrySpec
    public void crashedLastRun(Promise promise) {
        this.impl.v(promise);
    }

    @Override // io.sentry.react.NativeRNSentrySpec
    public void disableNativeFramesTracking() {
        this.impl.x();
    }

    @Override // io.sentry.react.NativeRNSentrySpec
    public void enableNativeFramesTracking() {
        this.impl.y();
    }

    @Override // io.sentry.react.NativeRNSentrySpec
    public void encodeToBase64(ReadableArray readableArray, Promise promise) {
        this.impl.z(readableArray, promise);
    }

    @Override // io.sentry.react.NativeRNSentrySpec
    public void fetchModules(Promise promise) {
        this.impl.A(promise);
    }

    @Override // io.sentry.react.NativeRNSentrySpec
    public void fetchNativeAppStart(Promise promise) {
        this.impl.B(promise);
    }

    @Override // io.sentry.react.NativeRNSentrySpec
    public void fetchNativeDeviceContexts(Promise promise) {
        this.impl.D(promise);
    }

    @Override // io.sentry.react.NativeRNSentrySpec
    public void fetchNativeFrames(Promise promise) {
        this.impl.F(promise);
    }

    @Override // io.sentry.react.NativeRNSentrySpec
    public void fetchNativeLogAttributes(Promise promise) {
        this.impl.G(promise);
    }

    @Override // io.sentry.react.NativeRNSentrySpec
    public String fetchNativePackageName() {
        return this.impl.I();
    }

    @Override // io.sentry.react.NativeRNSentrySpec
    public void fetchNativeRelease(Promise promise) {
        this.impl.J(promise);
    }

    @Override // io.sentry.react.NativeRNSentrySpec
    public void fetchNativeSdkInfo(Promise promise) {
        this.impl.K(promise);
    }

    @Override // io.sentry.react.NativeRNSentrySpec
    public WritableMap fetchNativeStackFramesBy(ReadableArray readableArray) {
        return null;
    }

    @Override // io.sentry.react.NativeRNSentrySpec
    public void fetchViewHierarchy(Promise promise) {
        this.impl.L(promise);
    }

    @Override // io.sentry.react.NativeRNSentrySpec
    public String getCurrentReplayId() {
        return this.impl.O();
    }

    @Override // io.sentry.react.NativeRNSentrySpec
    public void getDataFromUri(String str, Promise promise) {
        this.impl.P(str, promise);
    }

    @Override // io.sentry.react.NativeRNSentrySpec, com.facebook.react.bridge.NativeModule
    @NonNull
    public String getName() {
        return NativeRNSentrySpec.NAME;
    }

    @Override // io.sentry.react.NativeRNSentrySpec
    public void getNewScreenTimeToDisplay(Promise promise) {
        this.impl.Q(promise);
    }

    @Override // io.sentry.react.NativeRNSentrySpec
    public void initNativeReactNavigationNewFrameTracking(Promise promise) {
        this.impl.a0(promise);
    }

    @Override // io.sentry.react.NativeRNSentrySpec
    public void initNativeSdk(ReadableMap readableMap, Promise promise) {
        this.impl.b0(readableMap, promise);
    }

    @Override // io.sentry.react.NativeRNSentrySpec
    public void popTimeToDisplayFor(String str, Promise promise) {
        this.impl.k0(str, promise);
    }

    @Override // io.sentry.react.NativeRNSentrySpec
    public void removeListeners(double d10) {
        this.impl.m0(d10);
    }

    @Override // io.sentry.react.NativeRNSentrySpec
    public boolean setActiveSpanId(String str) {
        return this.impl.n0(str);
    }

    @Override // io.sentry.react.NativeRNSentrySpec
    public void setContext(String str, ReadableMap readableMap) {
        this.impl.o0(str, readableMap);
    }

    @Override // io.sentry.react.NativeRNSentrySpec
    public void setExtra(String str, String str2) {
        this.impl.r0(str, str2);
    }

    @Override // io.sentry.react.NativeRNSentrySpec
    public void setTag(String str, String str2) {
        this.impl.s0(str, str2);
    }

    @Override // io.sentry.react.NativeRNSentrySpec
    public void setUser(ReadableMap readableMap, ReadableMap readableMap2) {
        this.impl.t0(readableMap, readableMap2);
    }

    @Override // io.sentry.react.NativeRNSentrySpec
    public WritableMap startProfiling(boolean z10) {
        return this.impl.u0(z10);
    }

    @Override // io.sentry.react.NativeRNSentrySpec
    public WritableMap stopProfiling() {
        return this.impl.v0();
    }
}
