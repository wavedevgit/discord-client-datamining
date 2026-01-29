package io.sentry.react;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.turbomodule.core.interfaces.TurboModule;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class NativeRNSentrySpec extends ReactContextBaseJavaModule implements TurboModule {
    public static final String NAME = "RNSentry";

    public NativeRNSentrySpec(ReactApplicationContext reactApplicationContext) {
        super(reactApplicationContext);
    }

    @ReactMethod
    @fb.a
    public abstract void addBreadcrumb(ReadableMap readableMap);

    @ReactMethod
    @fb.a
    public abstract void addListener(String str);

    @ReactMethod
    @fb.a
    public abstract void captureEnvelope(String str, ReadableMap readableMap, Promise promise);

    @ReactMethod
    @fb.a
    public abstract void captureReplay(boolean z10, Promise promise);

    @ReactMethod
    @fb.a
    public abstract void captureScreenshot(Promise promise);

    @ReactMethod
    @fb.a
    public abstract void clearBreadcrumbs();

    @ReactMethod
    @fb.a
    public abstract void closeNativeSdk(Promise promise);

    @ReactMethod
    @fb.a
    public abstract void crash();

    @ReactMethod
    @fb.a
    public abstract void crashedLastRun(Promise promise);

    @ReactMethod
    @fb.a
    public abstract void disableNativeFramesTracking();

    @ReactMethod
    @fb.a
    public abstract void enableNativeFramesTracking();

    @ReactMethod
    @fb.a
    public abstract void encodeToBase64(ReadableArray readableArray, Promise promise);

    @ReactMethod
    @fb.a
    public abstract void fetchModules(Promise promise);

    @ReactMethod
    @fb.a
    public abstract void fetchNativeAppStart(Promise promise);

    @ReactMethod
    @fb.a
    public abstract void fetchNativeDeviceContexts(Promise promise);

    @ReactMethod
    @fb.a
    public abstract void fetchNativeFrames(Promise promise);

    @ReactMethod
    @fb.a
    public abstract void fetchNativeLogAttributes(Promise promise);

    @ReactMethod(isBlockingSynchronousMethod = true)
    @fb.a
    public abstract String fetchNativePackageName();

    @ReactMethod
    @fb.a
    public abstract void fetchNativeRelease(Promise promise);

    @ReactMethod
    @fb.a
    public abstract void fetchNativeSdkInfo(Promise promise);

    @ReactMethod(isBlockingSynchronousMethod = true)
    @fb.a
    public abstract WritableMap fetchNativeStackFramesBy(ReadableArray readableArray);

    @ReactMethod
    @fb.a
    public abstract void fetchViewHierarchy(Promise promise);

    @ReactMethod(isBlockingSynchronousMethod = true)
    @fb.a
    public abstract String getCurrentReplayId();

    @ReactMethod
    @fb.a
    public abstract void getDataFromUri(String str, Promise promise);

    @Override // com.facebook.react.bridge.NativeModule
    public String getName() {
        return NAME;
    }

    @ReactMethod
    @fb.a
    public abstract void getNewScreenTimeToDisplay(Promise promise);

    @ReactMethod
    @fb.a
    public abstract void initNativeReactNavigationNewFrameTracking(Promise promise);

    @ReactMethod
    @fb.a
    public abstract void initNativeSdk(ReadableMap readableMap, Promise promise);

    @ReactMethod
    @fb.a
    public abstract void popTimeToDisplayFor(String str, Promise promise);

    @ReactMethod
    @fb.a
    public abstract void removeListeners(double d10);

    @ReactMethod(isBlockingSynchronousMethod = true)
    @fb.a
    public abstract boolean setActiveSpanId(String str);

    @ReactMethod
    @fb.a
    public abstract void setContext(String str, ReadableMap readableMap);

    @ReactMethod
    @fb.a
    public abstract void setExtra(String str, String str2);

    @ReactMethod
    @fb.a
    public abstract void setTag(String str, String str2);

    @ReactMethod
    @fb.a
    public abstract void setUser(ReadableMap readableMap, ReadableMap readableMap2);

    @ReactMethod(isBlockingSynchronousMethod = true)
    @fb.a
    public abstract WritableMap startProfiling(boolean z10);

    @ReactMethod(isBlockingSynchronousMethod = true)
    @fb.a
    public abstract WritableMap stopProfiling();
}
