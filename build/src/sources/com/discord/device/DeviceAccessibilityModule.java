package com.discord.device;

import android.app.Activity;
import android.view.View;
import com.discord.codegen.NativeDeviceAccessibilityModuleSpec;
import com.discord.device.utils.DeviceFocusLockManager;
import com.discord.device.utils.DeviceReducedMotion;
import com.discord.misc.utilities.threading.ThreadUtilsKt;
import com.discord.react.utilities.FindViewByReactTagKt;
import com.discord.react.utilities.NativeArrayExtensionsKt;
import com.discord.react.utilities.ReactContextFindViewKt;
import com.facebook.react.bridge.BaseJavaModule;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReadableArray;
import java.util.ArrayList;
import java.util.Iterator;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.collections.m0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.ranges.IntRange;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000<\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0010\u0006\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0002\b\u0000\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\u0010\u0010\b\u001a\u00020\t2\u0006\u0010\n\u001a\u00020\u000bH\u0016J\u0018\u0010\f\u001a\u00020\t2\u0006\u0010\r\u001a\u00020\u000e2\u0006\u0010\u000f\u001a\u00020\u0010H\u0016J\u0018\u0010\u0011\u001a\u00020\t2\u0006\u0010\u0012\u001a\u00020\u00132\u0006\u0010\u0014\u001a\u00020\u0015H\u0016J\b\u0010\u0016\u001a\u00020\tH\u0016R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0006\u0010\u0007¨\u0006\u0017"}, d2 = {"Lcom/discord/device/DeviceAccessibilityModule;", "Lcom/discord/codegen/NativeDeviceAccessibilityModuleSpec;", "reactContext", "Lcom/facebook/react/bridge/ReactApplicationContext;", "<init>", "(Lcom/facebook/react/bridge/ReactApplicationContext;)V", "getReactContext", "()Lcom/facebook/react/bridge/ReactApplicationContext;", "handleSetPrefersReducedMotion", "", "prefersReducedMotion", "", "setAccessibilityFocus", "tag", "", BaseJavaModule.METHOD_TYPE_PROMISE, "Lcom/facebook/react/bridge/Promise;", "enableFocusLock", "nativeIds", "Lcom/facebook/react/bridge/ReadableArray;", "focus", "", "disableFocusLock", "device_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nDeviceAccessibilityModule.kt\nKotlin\n*S Kotlin\n*F\n+ 1 DeviceAccessibilityModule.kt\ncom/discord/device/DeviceAccessibilityModule\n+ 2 ThreadUtils.kt\ncom/discord/misc/utilities/threading/ThreadUtilsKt\n+ 3 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n+ 4 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,54:1\n25#2,8:55\n1617#3,9:63\n1869#3:72\n1870#3:74\n1626#3:75\n1#4:73\n*S KotlinDebug\n*F\n+ 1 DeviceAccessibilityModule.kt\ncom/discord/device/DeviceAccessibilityModule\n*L\n25#1:55,8\n44#1:63,9\n44#1:72\n44#1:74\n44#1:75\n44#1:73\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class DeviceAccessibilityModule extends NativeDeviceAccessibilityModuleSpec {
    @NotNull
    private final ReactApplicationContext reactContext;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public DeviceAccessibilityModule(@NotNull ReactApplicationContext reactContext) {
        super(reactContext);
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        this.reactContext = reactContext;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void disableFocusLock$lambda$5() {
        DeviceFocusLockManager.INSTANCE.disableFocusLock();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void enableFocusLock$lambda$4(ReadableArray readableArray, DeviceAccessibilityModule deviceAccessibilityModule) {
        DeviceFocusLockManager deviceFocusLockManager = DeviceFocusLockManager.INSTANCE;
        IntRange sizeRange = NativeArrayExtensionsKt.sizeRange(readableArray);
        ArrayList arrayList = new ArrayList();
        Iterator it = sizeRange.iterator();
        while (it.hasNext()) {
            int nextInt = ((m0) it).nextInt();
            ReactApplicationContext reactApplicationContext = deviceAccessibilityModule.getReactApplicationContext();
            Intrinsics.checkNotNullExpressionValue(reactApplicationContext, "getReactApplicationContext(...)");
            String string = readableArray.getString(nextInt);
            Intrinsics.checkNotNull(string);
            View findView = ReactContextFindViewKt.findView(reactApplicationContext, string);
            if (findView != null) {
                arrayList.add(findView);
            }
        }
        deviceFocusLockManager.enableFocusLock(arrayList);
    }

    @Override // com.discord.codegen.NativeDeviceAccessibilityModuleSpec
    public void disableFocusLock() {
        Activity currentActivity = this.reactContext.getCurrentActivity();
        if (currentActivity != null) {
            currentActivity.runOnUiThread(new Runnable() { // from class: com.discord.device.b
                @Override // java.lang.Runnable
                public final void run() {
                    DeviceAccessibilityModule.disableFocusLock$lambda$5();
                }
            });
        }
    }

    @Override // com.discord.codegen.NativeDeviceAccessibilityModuleSpec
    public void enableFocusLock(@NotNull final ReadableArray nativeIds, boolean z10) {
        Intrinsics.checkNotNullParameter(nativeIds, "nativeIds");
        Activity currentActivity = this.reactContext.getCurrentActivity();
        if (currentActivity != null) {
            currentActivity.runOnUiThread(new Runnable() { // from class: com.discord.device.a
                @Override // java.lang.Runnable
                public final void run() {
                    DeviceAccessibilityModule.enableFocusLock$lambda$4(ReadableArray.this, this);
                }
            });
        }
    }

    @NotNull
    public final ReactApplicationContext getReactContext() {
        return this.reactContext;
    }

    @Override // com.discord.codegen.NativeDeviceAccessibilityModuleSpec
    public void handleSetPrefersReducedMotion(@NotNull String prefersReducedMotion) {
        Intrinsics.checkNotNullParameter(prefersReducedMotion, "prefersReducedMotion");
        DeviceReducedMotion.INSTANCE.setMotionPreference$device_release(prefersReducedMotion);
    }

    @Override // com.discord.codegen.NativeDeviceAccessibilityModuleSpec
    public void setAccessibilityFocus(final double d10, @NotNull final Promise promise) {
        Intrinsics.checkNotNullParameter(promise, "promise");
        if (ThreadUtilsKt.isOnMainThread()) {
            ReactApplicationContext reactApplicationContext = getReactApplicationContext();
            Intrinsics.checkNotNullExpressionValue(reactApplicationContext, "access$getReactApplicationContext(...)");
            View findViewByReactTag = FindViewByReactTagKt.findViewByReactTag(reactApplicationContext, (int) d10, new DeviceAccessibilityModule$setAccessibilityFocus$1$1(promise));
            if (findViewByReactTag != null) {
                findViewByReactTag.sendAccessibilityEvent(8);
                Unit unit = Unit.f31988a;
                promise.resolve("");
                return;
            }
            return;
        }
        ThreadUtilsKt.getUiHandler().post(new Runnable() { // from class: com.discord.device.DeviceAccessibilityModule$setAccessibilityFocus$$inlined$postOrRunOnMainThread$1
            @Override // java.lang.Runnable
            public final void run() {
                ReactApplicationContext reactApplicationContext2 = DeviceAccessibilityModule.this.getReactApplicationContext();
                Intrinsics.checkNotNullExpressionValue(reactApplicationContext2, "access$getReactApplicationContext(...)");
                View findViewByReactTag2 = FindViewByReactTagKt.findViewByReactTag(reactApplicationContext2, (int) d10, new DeviceAccessibilityModule$setAccessibilityFocus$1$1(promise));
                if (findViewByReactTag2 != null) {
                    findViewByReactTag2.sendAccessibilityEvent(8);
                    Unit unit2 = Unit.f31988a;
                    promise.resolve("");
                }
            }
        });
    }
}
