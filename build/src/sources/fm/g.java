package fm;

import android.app.UiModeManager;
import android.content.Context;
import android.os.Build;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.UIManagerHelper;
import com.facebook.react.uimanager.events.Event;
import com.facebook.react.uimanager.events.EventDispatcher;
import im.p;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class g {
    public static final void a(ThemedReactContext themedReactContext, int i10, Event event) {
        Intrinsics.checkNotNullParameter(event, "event");
        Intrinsics.checkNotNull(themedReactContext, "null cannot be cast to non-null type com.facebook.react.bridge.ReactContext");
        EventDispatcher eventDispatcherForReactTag = UIManagerHelper.getEventDispatcherForReactTag(themedReactContext, i10);
        if (eventDispatcherForReactTag != null) {
            eventDispatcherForReactTag.dispatchEvent(event);
        }
    }

    public static final void b(ThemedReactContext themedReactContext, String event, WritableMap params) {
        ReactApplicationContext reactApplicationContext;
        DeviceEventManagerModule.RCTDeviceEventEmitter rCTDeviceEventEmitter;
        Intrinsics.checkNotNullParameter(event, "event");
        Intrinsics.checkNotNullParameter(params, "params");
        if (themedReactContext != null && (reactApplicationContext = themedReactContext.getReactApplicationContext()) != null && (rCTDeviceEventEmitter = (DeviceEventManagerModule.RCTDeviceEventEmitter) reactApplicationContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)) != null) {
            rCTDeviceEventEmitter.emit(event, params);
        }
        jm.a.b(jm.a.f32253a, "ThemedReactContext", event, null, 4, null);
    }

    public static final String c(ThemedReactContext themedReactContext) {
        if (themedReactContext == null) {
            return "default";
        }
        if (d(themedReactContext)) {
            return "dark";
        }
        return "light";
    }

    private static final boolean d(Context context) {
        UiModeManager uiModeManager;
        if (Build.VERSION.SDK_INT >= 29) {
            Object systemService = context.getSystemService("uimode");
            if (systemService instanceof UiModeManager) {
                uiModeManager = (UiModeManager) systemService;
            } else {
                uiModeManager = null;
            }
            if (uiModeManager != null && uiModeManager.getNightMode() == 2) {
                return true;
            }
        }
        return false;
    }

    public static final void e(ThemedReactContext themedReactContext) {
        Intrinsics.checkNotNullParameter(themedReactContext, "<this>");
        new p(themedReactContext);
    }
}
