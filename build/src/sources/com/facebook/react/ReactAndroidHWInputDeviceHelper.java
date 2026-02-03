package com.facebook.react;

import android.view.KeyEvent;
import android.view.View;
import com.facebook.react.bridge.WritableNativeMap;
import com.facebook.react.uimanager.ViewProps;
import java.util.Map;
import kotlin.Metadata;
import kotlin.collections.o0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u00006\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0004\b\u0000\u0018\u0000 \u00152\u00020\u0001:\u0001\u0015B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\u000e\u0010\b\u001a\u00020\t2\u0006\u0010\n\u001a\u00020\u000bJ\u000e\u0010\f\u001a\u00020\t2\u0006\u0010\r\u001a\u00020\u000eJ\u0006\u0010\u000f\u001a\u00020\tJ$\u0010\u0010\u001a\u00020\t2\b\u0010\u0011\u001a\u0004\u0018\u00010\u00122\u0006\u0010\u0013\u001a\u00020\u00072\b\b\u0002\u0010\u0014\u001a\u00020\u0007H\u0002R\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0007X\u0082\u000e¢\u0006\u0002\n\u0000¨\u0006\u0016"}, d2 = {"Lcom/facebook/react/ReactAndroidHWInputDeviceHelper;", "", "reactRootView", "Lcom/facebook/react/ReactRootView;", "<init>", "(Lcom/facebook/react/ReactRootView;)V", "lastFocusedViewId", "", "handleKeyEvent", "", "ev", "Landroid/view/KeyEvent;", "onFocusChanged", "newFocusedView", "Landroid/view/View;", "clearFocus", "dispatchEvent", "eventType", "", "targetViewId", "eventKeyAction", "Companion", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ReactAndroidHWInputDeviceHelper {
    @NotNull
    private static final Companion Companion = new Companion(null);
    @NotNull
    private static final Map<Integer, String> KEY_EVENTS_ACTIONS = o0.m(lr.v.a(23, "select"), lr.v.a(66, "select"), lr.v.a(62, "select"), lr.v.a(85, "playPause"), lr.v.a(89, "rewind"), lr.v.a(90, "fastForward"), lr.v.a(86, "stop"), lr.v.a(87, "next"), lr.v.a(88, "previous"), lr.v.a(19, "up"), lr.v.a(22, ViewProps.RIGHT), lr.v.a(20, "down"), lr.v.a(21, ViewProps.LEFT), lr.v.a(165, "info"), lr.v.a(82, "menu"));
    private int lastFocusedViewId;
    @NotNull
    private final ReactRootView reactRootView;

    @Metadata(d1 = {"\u0000\u001a\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010$\n\u0002\u0010\b\n\u0002\u0010\u000e\n\u0000\b\u0082\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u001a\u0010\u0004\u001a\u000e\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00020\u00070\u0005X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\b"}, d2 = {"Lcom/facebook/react/ReactAndroidHWInputDeviceHelper$Companion;", "", "<init>", "()V", "KEY_EVENTS_ACTIONS", "", "", "", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    public ReactAndroidHWInputDeviceHelper(@NotNull ReactRootView reactRootView) {
        Intrinsics.checkNotNullParameter(reactRootView, "reactRootView");
        this.reactRootView = reactRootView;
        this.lastFocusedViewId = -1;
    }

    private final void dispatchEvent(String str, int i10, int i11) {
        WritableNativeMap writableNativeMap = new WritableNativeMap();
        writableNativeMap.putString("eventType", str);
        writableNativeMap.putInt("eventKeyAction", i11);
        if (i10 != -1) {
            writableNativeMap.putInt("tag", i10);
        }
        this.reactRootView.sendEvent("onHWKeyEvent", writableNativeMap);
    }

    static /* synthetic */ void dispatchEvent$default(ReactAndroidHWInputDeviceHelper reactAndroidHWInputDeviceHelper, String str, int i10, int i11, int i12, Object obj) {
        if ((i12 & 4) != 0) {
            i11 = -1;
        }
        reactAndroidHWInputDeviceHelper.dispatchEvent(str, i10, i11);
    }

    public final void clearFocus() {
        ReactAndroidHWInputDeviceHelper reactAndroidHWInputDeviceHelper;
        int i10 = this.lastFocusedViewId;
        if (i10 != -1) {
            reactAndroidHWInputDeviceHelper = this;
            dispatchEvent$default(reactAndroidHWInputDeviceHelper, "blur", i10, 0, 4, null);
        } else {
            reactAndroidHWInputDeviceHelper = this;
        }
        reactAndroidHWInputDeviceHelper.lastFocusedViewId = -1;
    }

    public final void handleKeyEvent(@NotNull KeyEvent ev2) {
        Intrinsics.checkNotNullParameter(ev2, "ev");
        int keyCode = ev2.getKeyCode();
        int action = ev2.getAction();
        if (action == 1 || action == 0) {
            Map<Integer, String> map = KEY_EVENTS_ACTIONS;
            if (map.containsKey(Integer.valueOf(keyCode))) {
                dispatchEvent(map.get(Integer.valueOf(keyCode)), this.lastFocusedViewId, action);
            }
        }
    }

    public final void onFocusChanged(@NotNull View newFocusedView) {
        ReactAndroidHWInputDeviceHelper reactAndroidHWInputDeviceHelper;
        Intrinsics.checkNotNullParameter(newFocusedView, "newFocusedView");
        if (this.lastFocusedViewId == newFocusedView.getId()) {
            return;
        }
        int i10 = this.lastFocusedViewId;
        if (i10 != -1) {
            reactAndroidHWInputDeviceHelper = this;
            dispatchEvent$default(reactAndroidHWInputDeviceHelper, "blur", i10, 0, 4, null);
        } else {
            reactAndroidHWInputDeviceHelper = this;
        }
        reactAndroidHWInputDeviceHelper.lastFocusedViewId = newFocusedView.getId();
        dispatchEvent$default(reactAndroidHWInputDeviceHelper, "focus", newFocusedView.getId(), 0, 4, null);
    }
}
