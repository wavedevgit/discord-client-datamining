package com.facebook.react.uimanager;

import android.widget.ImageView;
import com.facebook.react.uimanager.events.TouchEventType;
import com.facebook.react.views.textinput.ReactContentSizeChangedEvent;
import com.facebook.react.views.textinput.ReactTextChangedEvent;
import java.util.Map;
import kotlin.Metadata;
import kotlin.Pair;
import kotlin.collections.o0;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\u0018\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010$\n\u0002\u0010\u000e\n\u0002\b\u0003\bÀ\u0002\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u001c\u0010\u0004\u001a\u000e\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00020\u00010\u00058\u0006X\u0087\u0004¢\u0006\u0002\n\u0000R\u001c\u0010\u0007\u001a\u000e\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00020\u00010\u00058\u0006X\u0087\u0004¢\u0006\u0002\n\u0000R\u001c\u0010\b\u001a\u000e\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00020\u00010\u00058\u0006X\u0087\u0004¢\u0006\u0002\n\u0000¨\u0006\t"}, d2 = {"Lcom/facebook/react/uimanager/UIManagerModuleConstants;", "", "<init>", "()V", "bubblingEventTypeConstants", "", "", "directEventTypeConstants", "constants", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class UIManagerModuleConstants {
    @NotNull
    public static final UIManagerModuleConstants INSTANCE = new UIManagerModuleConstants();
    @NotNull
    public static final Map<String, Object> bubblingEventTypeConstants;
    @NotNull
    public static final Map<String, Object> constants;
    @NotNull
    public static final Map<String, Object> directEventTypeConstants;

    static {
        Pair a10 = jr.v.a(ReactTextChangedEvent.EVENT_NAME, o0.f(jr.v.a("phasedRegistrationNames", o0.m(jr.v.a("bubbled", "onChange"), jr.v.a("captured", "onChangeCapture")))));
        Pair a11 = jr.v.a("topSelect", o0.f(jr.v.a("phasedRegistrationNames", o0.m(jr.v.a("bubbled", "onSelect"), jr.v.a("captured", "onSelectCapture")))));
        TouchEventType.Companion companion = TouchEventType.Companion;
        bubblingEventTypeConstants = o0.m(a10, a11, jr.v.a(companion.getJSEventName(TouchEventType.START), o0.f(jr.v.a("phasedRegistrationNames", o0.m(jr.v.a("bubbled", "onTouchStart"), jr.v.a("captured", "onTouchStartCapture"))))), jr.v.a(companion.getJSEventName(TouchEventType.MOVE), o0.f(jr.v.a("phasedRegistrationNames", o0.m(jr.v.a("bubbled", "onTouchMove"), jr.v.a("captured", "onTouchMoveCapture"))))), jr.v.a(companion.getJSEventName(TouchEventType.END), o0.f(jr.v.a("phasedRegistrationNames", o0.m(jr.v.a("bubbled", "onTouchEnd"), jr.v.a("captured", "onTouchEndCapture"))))), jr.v.a(companion.getJSEventName(TouchEventType.CANCEL), o0.f(jr.v.a("phasedRegistrationNames", o0.m(jr.v.a("bubbled", "onTouchCancel"), jr.v.a("captured", "onTouchCancelCapture"))))));
        directEventTypeConstants = o0.m(jr.v.a(ReactContentSizeChangedEvent.EVENT_NAME, o0.f(jr.v.a("registrationName", "onContentSizeChange"))), jr.v.a("topLayout", o0.f(jr.v.a("registrationName", "onLayout"))), jr.v.a("topLoadingError", o0.f(jr.v.a("registrationName", "onLoadingError"))), jr.v.a("topLoadingFinish", o0.f(jr.v.a("registrationName", "onLoadingFinish"))), jr.v.a("topLoadingStart", o0.f(jr.v.a("registrationName", "onLoadingStart"))), jr.v.a("topSelectionChange", o0.f(jr.v.a("registrationName", "onSelectionChange"))), jr.v.a("topMessage", o0.f(jr.v.a("registrationName", "onMessage"))), jr.v.a("topScrollBeginDrag", o0.f(jr.v.a("registrationName", "onScrollBeginDrag"))), jr.v.a("topScrollEndDrag", o0.f(jr.v.a("registrationName", "onScrollEndDrag"))), jr.v.a("topScroll", o0.f(jr.v.a("registrationName", "onScroll"))), jr.v.a("topMomentumScrollBegin", o0.f(jr.v.a("registrationName", "onMomentumScrollBegin"))), jr.v.a("topMomentumScrollEnd", o0.f(jr.v.a("registrationName", "onMomentumScrollEnd"))));
        constants = o0.m(jr.v.a("UIView", o0.f(jr.v.a("ContentMode", o0.m(jr.v.a("ScaleAspectFit", Integer.valueOf(ImageView.ScaleType.FIT_CENTER.ordinal())), jr.v.a("ScaleAspectFill", Integer.valueOf(ImageView.ScaleType.CENTER_CROP.ordinal())), jr.v.a("ScaleAspectCenter", Integer.valueOf(ImageView.ScaleType.CENTER_INSIDE.ordinal())))))), jr.v.a("StyleConstants", o0.f(jr.v.a("PointerEventsValues", o0.m(jr.v.a(ViewProps.NONE, Integer.valueOf(PointerEvents.NONE.ordinal())), jr.v.a("boxNone", Integer.valueOf(PointerEvents.BOX_NONE.ordinal())), jr.v.a("boxOnly", Integer.valueOf(PointerEvents.BOX_ONLY.ordinal())), jr.v.a("unspecified", Integer.valueOf(PointerEvents.AUTO.ordinal())))))), jr.v.a("AccessibilityEventTypes", o0.m(jr.v.a("typeWindowStateChanged", 32), jr.v.a("typeViewFocused", 8), jr.v.a("typeViewClicked", 1))));
    }

    private UIManagerModuleConstants() {
    }
}
