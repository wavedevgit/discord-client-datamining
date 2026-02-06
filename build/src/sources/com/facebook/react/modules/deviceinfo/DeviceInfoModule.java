package com.facebook.react.modules.deviceinfo;

import android.content.res.Configuration;
import android.content.res.Resources;
import com.facebook.fbreact.specs.NativeDeviceInfoSpec;
import com.facebook.react.bridge.LifecycleEventListener;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactNoCrashSoftException;
import com.facebook.react.bridge.ReactSoftExceptionLogger;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.uimanager.DisplayMetricsHolder;
import com.facebook.react.views.view.WindowUtilKt;
import java.util.Map;
import kotlin.Metadata;
import kotlin.collections.o0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
import qr.v;
@ReactModule(name = "DeviceInfo")
@Metadata(d1 = {"\u00008\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0007\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010$\n\u0002\u0010\u000e\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0006\b\u0001\u0018\u0000 \u00152\u00020\u00012\u00020\u0002:\u0001\u0015B\u000f\u0012\u0006\u0010\u0003\u001a\u00020\u0004¢\u0006\u0004\b\u0005\u0010\u0006J\u0014\u0010\u000b\u001a\u000e\u0012\u0004\u0012\u00020\r\u0012\u0004\u0012\u00020\u000e0\fH\u0016J\b\u0010\u000f\u001a\u00020\u0010H\u0016J\b\u0010\u0011\u001a\u00020\u0010H\u0016J\b\u0010\u0012\u001a\u00020\u0010H\u0016J\u0006\u0010\u0013\u001a\u00020\u0010J\b\u0010\u0014\u001a\u00020\u0010H\u0016R\u000e\u0010\u0007\u001a\u00020\bX\u0082\u000e¢\u0006\u0002\n\u0000R\u0010\u0010\t\u001a\u0004\u0018\u00010\nX\u0082\u000e¢\u0006\u0002\n\u0000¨\u0006\u0016"}, d2 = {"Lcom/facebook/react/modules/deviceinfo/DeviceInfoModule;", "Lcom/facebook/fbreact/specs/NativeDeviceInfoSpec;", "Lcom/facebook/react/bridge/LifecycleEventListener;", "reactContext", "Lcom/facebook/react/bridge/ReactApplicationContext;", "<init>", "(Lcom/facebook/react/bridge/ReactApplicationContext;)V", "fontScale", "", "previousDisplayMetrics", "Lcom/facebook/react/bridge/ReadableMap;", "getTypedExportedConstants", "", "", "", "onHostResume", "", "onHostPause", "onHostDestroy", "emitUpdateDimensionsEvent", "invalidate", "Companion", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class DeviceInfoModule extends NativeDeviceInfoSpec implements LifecycleEventListener {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    public static final String NAME = "DeviceInfo";
    private float fontScale;
    private ReadableMap previousDisplayMetrics;

    @Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000¨\u0006\u0006"}, d2 = {"Lcom/facebook/react/modules/deviceinfo/DeviceInfoModule$Companion;", "", "<init>", "()V", "NAME", "", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public DeviceInfoModule(@NotNull ReactApplicationContext reactContext) {
        super(reactContext);
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        this.fontScale = reactContext.getResources().getConfiguration().fontScale;
        DisplayMetricsHolder.initDisplayMetricsIfNotInitialized(reactContext);
        reactContext.addLifecycleEventListener(this);
    }

    public final void emitUpdateDimensionsEvent() {
        ReactApplicationContext reactApplicationContext = getReactApplicationContext();
        if (reactApplicationContext.hasActiveReactInstance()) {
            WritableMap displayMetricsWritableMap = DisplayMetricsHolder.getDisplayMetricsWritableMap(this.fontScale);
            ReadableMap readableMap = this.previousDisplayMetrics;
            if (readableMap == null) {
                this.previousDisplayMetrics = displayMetricsWritableMap.copy();
                return;
            } else if (!Intrinsics.areEqual(displayMetricsWritableMap, readableMap)) {
                this.previousDisplayMetrics = displayMetricsWritableMap.copy();
                reactApplicationContext.emitDeviceEvent("didUpdateDimensions", displayMetricsWritableMap);
                return;
            } else {
                return;
            }
        }
        ReactSoftExceptionLogger.logSoftException("DeviceInfo", new ReactNoCrashSoftException("No active CatalystInstance, cannot emitUpdateDimensionsEvent"));
    }

    @Override // com.facebook.fbreact.specs.NativeDeviceInfoSpec
    @NotNull
    public Map<String, Object> getTypedExportedConstants() {
        WritableMap displayMetricsWritableMap = DisplayMetricsHolder.getDisplayMetricsWritableMap(this.fontScale);
        this.previousDisplayMetrics = displayMetricsWritableMap.copy();
        return o0.m(v.a("Dimensions", displayMetricsWritableMap.toHashMap()), v.a("isEdgeToEdge", Boolean.valueOf(WindowUtilKt.isEdgeToEdgeFeatureFlagOn())));
    }

    @Override // com.facebook.react.bridge.BaseJavaModule, com.facebook.react.bridge.NativeModule, com.facebook.react.turbomodule.core.interfaces.TurboModule
    public void invalidate() {
        super.invalidate();
        getReactApplicationContext().removeLifecycleEventListener(this);
    }

    @Override // com.facebook.react.bridge.LifecycleEventListener
    public void onHostDestroy() {
    }

    @Override // com.facebook.react.bridge.LifecycleEventListener
    public void onHostPause() {
    }

    @Override // com.facebook.react.bridge.LifecycleEventListener
    public void onHostResume() {
        Float f10;
        Configuration configuration;
        Resources resources = getReactApplicationContext().getResources();
        if (resources != null && (configuration = resources.getConfiguration()) != null) {
            f10 = Float.valueOf(configuration.fontScale);
        } else {
            f10 = null;
        }
        if (f10 != null && !Intrinsics.areEqual(f10, this.fontScale)) {
            this.fontScale = f10.floatValue();
            emitUpdateDimensionsEvent();
        }
    }
}
