package com.discord.device;

import android.content.Context;
import android.os.Build;
import com.discord.codegen.NativeDeviceModuleSpec;
import com.discord.device.react_events.MetricsSize;
import com.discord.device.utils.DeviceHardwareInfoKt;
import com.discord.device.utils.DeviceMetrics;
import com.discord.device.utils.DevicePerformance;
import com.discord.device.utils.IsGestureNavigationEnabledKt;
import com.discord.device.utils.IsTabletKt;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.WritableNativeMap;
import java.util.Map;
import java.util.TimeZone;
import kotlin.Metadata;
import kotlin.Pair;
import kotlin.collections.o0;
import kotlin.jvm.internal.Intrinsics;
import lr.v;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u00000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010%\n\u0002\u0010\u000e\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0006\n\u0000\b\u0000\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\u001e\u0010\u0006\u001a\u0018\u0012\u0004\u0012\u00020\b\u0012\u000e\b\u0001\u0012\n \n*\u0004\u0018\u00010\t0\t0\u0007H\u0014J\b\u0010\u000b\u001a\u00020\fH\u0016J\b\u0010\r\u001a\u00020\fH\u0016J\b\u0010\u000e\u001a\u00020\u000fH\u0016R\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u0010"}, d2 = {"Lcom/discord/device/DeviceModule;", "Lcom/discord/codegen/NativeDeviceModuleSpec;", "reactContext", "Lcom/facebook/react/bridge/ReactApplicationContext;", "<init>", "(Lcom/facebook/react/bridge/ReactApplicationContext;)V", "getTypedExportedConstants", "", "", "", "kotlin.jvm.PlatformType", "getScreenSize", "Lcom/facebook/react/bridge/WritableNativeMap;", "getWindowSize", "getMediaPerformanceClass", "", "device_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class DeviceModule extends NativeDeviceModuleSpec {
    @NotNull
    private final ReactApplicationContext reactContext;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public DeviceModule(@NotNull ReactApplicationContext reactContext) {
        super(reactContext);
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        this.reactContext = reactContext;
    }

    @Override // com.discord.codegen.NativeDeviceModuleSpec
    public double getMediaPerformanceClass() {
        DevicePerformance devicePerformance = DevicePerformance.INSTANCE;
        devicePerformance.initializePlayServicesDevicePerformance(this.reactContext);
        return devicePerformance.getMediaPerformanceClass();
    }

    @Override // com.discord.codegen.NativeDeviceModuleSpec
    @NotNull
    protected Map<String, ? extends Object> getTypedExportedConstants() {
        Pair a10 = v.a("systemVersion", String.valueOf(Build.VERSION.SDK_INT));
        Pair a11 = v.a("device", Build.DEVICE);
        Pair a12 = v.a("deviceModel", Build.MODEL);
        Pair a13 = v.a("deviceBrand", Build.BRAND);
        Pair a14 = v.a("deviceProduct", Build.PRODUCT);
        Pair a15 = v.a("deviceManufacturer", Build.MANUFACTURER);
        Pair a16 = v.a("isGestureNavigationEnabled", Boolean.valueOf(IsGestureNavigationEnabledKt.isGestureNavigationEnabled(this.reactContext)));
        Pair a17 = v.a("smallestScreenWidth", Integer.valueOf(IsTabletKt.smallestScreenWidthDp(this.reactContext)));
        Pair a18 = v.a("socName", DeviceHardwareInfoKt.socName());
        Context applicationContext = this.reactContext.getApplicationContext();
        Intrinsics.checkNotNullExpressionValue(applicationContext, "getApplicationContext(...)");
        return o0.n(a10, a11, a12, a13, a14, a15, a16, a17, a18, v.a("ramSize", DeviceHardwareInfoKt.ramSize(applicationContext)), v.a("maxCpuFreq", DeviceHardwareInfoKt.maxCpuFreq()), v.a("timeZone", TimeZone.getDefault().getID()));
    }

    @Override // com.discord.codegen.NativeDeviceModuleSpec
    @NotNull
    public WritableNativeMap getScreenSize() {
        WritableNativeMap serialize;
        MetricsSize screenSize = DeviceMetrics.INSTANCE.getScreenSize(this.reactContext.getCurrentActivity());
        return (screenSize == null || (serialize = screenSize.serialize()) == null) ? MetricsSize.Companion.createScreenFallback() : serialize;
    }

    @Override // com.discord.codegen.NativeDeviceModuleSpec
    @NotNull
    public WritableNativeMap getWindowSize() {
        WritableNativeMap serialize;
        MetricsSize windowSize = DeviceMetrics.INSTANCE.getWindowSize(this.reactContext.getCurrentActivity());
        return (windowSize == null || (serialize = windowSize.serialize()) == null) ? MetricsSize.Companion.createWindowFallback() : serialize;
    }
}
