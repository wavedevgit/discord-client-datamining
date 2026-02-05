package jm;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.UIManagerHelper;
import com.facebook.react.uimanager.events.Event;
import com.facebook.react.uimanager.events.EventDispatcher;
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
        nm.a.c(nm.a.f41373a, "ThemedReactContext", event, null, 4, null);
    }

    public static final String c(ThemedReactContext themedReactContext) {
        if (themedReactContext == null || !a.c(themedReactContext)) {
            return "light";
        }
        return "dark";
    }

    public static final void d(ThemedReactContext themedReactContext, int i10) {
        WritableArray createArray = Arguments.createArray();
        Intrinsics.checkNotNullExpressionValue(createArray, "createArray(...)");
        createArray.pushInt(new int[]{i10}[0]);
        WritableMap createMap = Arguments.createMap();
        Intrinsics.checkNotNullExpressionValue(createMap, "createMap(...)");
        createMap.putArray("tags", createArray);
        b(themedReactContext, "onUserDrivenAnimationEnded", createMap);
    }
}
