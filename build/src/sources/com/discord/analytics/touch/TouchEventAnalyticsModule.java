package com.discord.analytics.touch;

import android.app.Activity;
import androidx.recyclerview.widget.RecyclerView;
import com.discord.codegen.NativeTouchEventAnalyticsModuleSpec;
import com.discord.crash_reporting.TelemetryRing;
import com.discord.logging.Log;
import com.facebook.react.bridge.ReactApplicationContext;
import java.util.Map;
import jr.v;
import kotlin.Metadata;
import kotlin.Pair;
import kotlin.collections.CollectionsKt;
import kotlin.collections.o0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000,\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\u0018\u0000 \u00102\u00020\u00012\u00020\u0002:\u0001\u0010B\u000f\u0012\u0006\u0010\u0003\u001a\u00020\u0004¢\u0006\u0004\b\u0005\u0010\u0006J\b\u0010\t\u001a\u00020\nH\u0016J\b\u0010\u000b\u001a\u00020\nH\u0016J\u0010\u0010\f\u001a\u00020\n2\u0006\u0010\r\u001a\u00020\u000eH\u0016J\b\u0010\u000f\u001a\u00020\nH\u0016R\u000e\u0010\u0007\u001a\u00020\bX\u0082\u000e¢\u0006\u0002\n\u0000¨\u0006\u0011"}, d2 = {"Lcom/discord/analytics/touch/TouchEventAnalyticsModule;", "Lcom/discord/codegen/NativeTouchEventAnalyticsModuleSpec;", "Lcom/discord/analytics/touch/OnEventRecognizedListener;", "reactContext", "Lcom/facebook/react/bridge/ReactApplicationContext;", "<init>", "(Lcom/facebook/react/bridge/ReactApplicationContext;)V", "isEnabled", "", "enableTouchLogging", "", "disableTouchLogging", "onEventRecognized", "event", "Lcom/discord/analytics/touch/TouchEventDetails;", "invalidate", "Companion", "analytics_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class TouchEventAnalyticsModule extends NativeTouchEventAnalyticsModuleSpec implements OnEventRecognizedListener {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private static final String MAIN_ACTIVITY_CLASS_NAME = "com.discord.main.MainActivity";
    @NotNull
    private static final String TAG = "TouchEventAnalyticsModule";
    private boolean isEnabled;

    @Metadata(d1 = {"\u0000\u0014\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000¨\u0006\u0007"}, d2 = {"Lcom/discord/analytics/touch/TouchEventAnalyticsModule$Companion;", "", "<init>", "()V", "TAG", "", "MAIN_ACTIVITY_CLASS_NAME", "analytics_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public TouchEventAnalyticsModule(@NotNull ReactApplicationContext reactContext) {
        super(reactContext);
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
    }

    @Override // com.discord.codegen.NativeTouchEventAnalyticsModuleSpec
    public void disableTouchLogging() {
        try {
            if (!this.isEnabled) {
                return;
            }
            TouchLogger touchLogger = TouchLogger.INSTANCE;
            touchLogger.unregisterListener(this);
            touchLogger.disable();
            this.isEnabled = false;
            Log.i$default(Log.INSTANCE, TAG, "Touch logging disabled via TurboModule", (Throwable) null, 4, (Object) null);
        } catch (Exception e10) {
            Log.INSTANCE.e(TAG, "Failed to disable touch logging", e10);
        }
    }

    @Override // com.discord.codegen.NativeTouchEventAnalyticsModuleSpec
    public void enableTouchLogging() {
        try {
            if (this.isEnabled) {
                return;
            }
            Activity currentActivity = getReactApplicationContext().getCurrentActivity();
            if (currentActivity == null) {
                currentActivity = getReactApplicationContext().getCurrentActivity();
            }
            if (currentActivity == null) {
                Log.w$default(Log.INSTANCE, TAG, "Cannot enable touch logging: no current activity", (Throwable) null, 4, (Object) null);
                return;
            }
            String name = currentActivity.getClass().getName();
            if (!Intrinsics.areEqual(name, MAIN_ACTIVITY_CLASS_NAME)) {
                Log log = Log.INSTANCE;
                Log.w$default(log, TAG, "Enabling touch logging on non-main activity: " + name, (Throwable) null, 4, (Object) null);
            }
            boolean z10 = false;
            try {
                TouchLogger touchLogger = TouchLogger.INSTANCE;
                touchLogger.registerListener(this);
                z10 = true;
                touchLogger.enable(currentActivity);
                this.isEnabled = true;
                Log.i$default(Log.INSTANCE, TAG, "Touch logging enabled via TurboModule", (Throwable) null, 4, (Object) null);
            } catch (Exception e10) {
                if (z10) {
                    try {
                        TouchLogger.INSTANCE.unregisterListener(this);
                    } catch (Exception unused) {
                    }
                }
                throw e10;
            }
        } catch (Exception e11) {
            Log.INSTANCE.e(TAG, "Failed to enable touch logging", e11);
        }
    }

    @Override // com.facebook.react.bridge.BaseJavaModule, com.facebook.react.bridge.NativeModule, com.facebook.react.turbomodule.core.interfaces.TurboModule
    public void invalidate() {
        try {
            TouchLogger.INSTANCE.unregisterListener(this);
        } catch (Exception unused) {
        }
        try {
            if (this.isEnabled) {
                TouchLogger.INSTANCE.disable();
                this.isEnabled = false;
            }
        } catch (Exception unused2) {
        }
        super.invalidate();
    }

    @Override // com.discord.analytics.touch.OnEventRecognizedListener
    public void onEventRecognized(@NotNull TouchEventDetails event) {
        String truncate;
        String truncate2;
        Intrinsics.checkNotNullParameter(event, "event");
        if (!this.isEnabled) {
            return;
        }
        try {
            Pair a10 = v.a("touch_action_type", event.getEventType());
            Pair a11 = v.a("client_timestamp_ms", Long.valueOf(event.getTimestamp()));
            Pair a12 = v.a("screen_x", Integer.valueOf(event.getScreenX()));
            Pair a13 = v.a("screen_y", Integer.valueOf(event.getScreenY()));
            Pair a14 = v.a("view_x", Integer.valueOf(event.getViewX()));
            Pair a15 = v.a("view_y", Integer.valueOf(event.getViewY()));
            Pair a16 = v.a("total_memory_mb", Integer.valueOf(event.getTotalMemoryMB()));
            truncate = TouchEventAnalyticsModuleKt.truncate(event.getMemoryBreakdown(), RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT);
            Pair a17 = v.a("memory_breakdown", truncate);
            truncate2 = TouchEventAnalyticsModuleKt.truncate(event.getViewHierarchy(), RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT);
            Map<String, ? extends Object> m10 = o0.m(a10, a11, a12, a13, a14, a15, a16, a17, v.a("view_hierarchy", truncate2), v.a("gesture", event.getGesture()), v.a("window_name", event.getWindowName()), v.a("hit_test_duration_us", event.getHitTestDurationUs()), v.a("distance", event.getDistance()), v.a("duration_ms", event.getDurationMs()), v.a("velocity", event.getVelocity()), v.a("scale_factor", event.getScaleFactor()));
            TelemetryRing telemetryRing = TelemetryRing.INSTANCE;
            long timestamp = event.getTimestamp();
            String gesture = event.getGesture();
            if (gesture == null) {
                gesture = event.getEventType();
            }
            telemetryRing.append("touch_event", timestamp, gesture, m10, CollectionsKt.e("ZOOMED"));
        } catch (Exception e10) {
            Log.INSTANCE.e(TAG, "Failed to append touch event to TelemetryRing", e10);
        }
    }
}
