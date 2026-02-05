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
        Pair a10 = or.v.a(ReactTextChangedEvent.EVENT_NAME, o0.f(or.v.a("phasedRegistrationNames", o0.m(or.v.a("bubbled", "onChange"), or.v.a("captured", "onChangeCapture")))));
        Pair a11 = or.v.a("topSelect", o0.f(or.v.a("phasedRegistrationNames", o0.m(or.v.a("bubbled", "onSelect"), or.v.a("captured", "onSelectCapture")))));
        TouchEventType.Companion companion = TouchEventType.Companion;
        bubblingEventTypeConstants = o0.m(a10, a11, or.v.a(companion.getJSEventName(TouchEventType.START), o0.f(or.v.a("phasedRegistrationNames", o0.m(or.v.a("bubbled", "onTouchStart"), or.v.a("captured", "onTouchStartCapture"))))), or.v.a(companion.getJSEventName(TouchEventType.MOVE), o0.f(or.v.a("phasedRegistrationNames", o0.m(or.v.a("bubbled", "onTouchMove"), or.v.a("captured", "onTouchMoveCapture"))))), or.v.a(companion.getJSEventName(TouchEventType.END), o0.f(or.v.a("phasedRegistrationNames", o0.m(or.v.a("bubbled", "onTouchEnd"), or.v.a("captured", "onTouchEndCapture"))))), or.v.a(companion.getJSEventName(TouchEventType.CANCEL), o0.f(or.v.a("phasedRegistrationNames", o0.m(or.v.a("bubbled", "onTouchCancel"), or.v.a("captured", "onTouchCancelCapture"))))));
        directEventTypeConstants = o0.m(or.v.a(ReactContentSizeChangedEvent.EVENT_NAME, o0.f(or.v.a("registrationName", "onContentSizeChange"))), or.v.a("topLayout", o0.f(or.v.a("registrationName", "onLayout"))), or.v.a("topLoadingError", o0.f(or.v.a("registrationName", "onLoadingError"))), or.v.a("topLoadingFinish", o0.f(or.v.a("registrationName", "onLoadingFinish"))), or.v.a("topLoadingStart", o0.f(or.v.a("registrationName", "onLoadingStart"))), or.v.a("topSelectionChange", o0.f(or.v.a("registrationName", "onSelectionChange"))), or.v.a("topMessage", o0.f(or.v.a("registrationName", "onMessage"))), or.v.a("topScrollBeginDrag", o0.f(or.v.a("registrationName", "onScrollBeginDrag"))), or.v.a("topScrollEndDrag", o0.f(or.v.a("registrationName", "onScrollEndDrag"))), or.v.a("topScroll", o0.f(or.v.a("registrationName", "onScroll"))), or.v.a("topMomentumScrollBegin", o0.f(or.v.a("registrationName", "onMomentumScrollBegin"))), or.v.a("topMomentumScrollEnd", o0.f(or.v.a("registrationName", "onMomentumScrollEnd"))));
        constants = o0.m(or.v.a("UIView", o0.f(or.v.a("ContentMode", o0.m(or.v.a("ScaleAspectFit", Integer.valueOf(ImageView.ScaleType.FIT_CENTER.ordinal())), or.v.a("ScaleAspectFill", Integer.valueOf(ImageView.ScaleType.CENTER_CROP.ordinal())), or.v.a("ScaleAspectCenter", Integer.valueOf(ImageView.ScaleType.CENTER_INSIDE.ordinal())))))), or.v.a("StyleConstants", o0.f(or.v.a("PointerEventsValues", o0.m(or.v.a(ViewProps.NONE, Integer.valueOf(PointerEvents.NONE.ordinal())), or.v.a("boxNone", Integer.valueOf(PointerEvents.BOX_NONE.ordinal())), or.v.a("boxOnly", Integer.valueOf(PointerEvents.BOX_ONLY.ordinal())), or.v.a("unspecified", Integer.valueOf(PointerEvents.AUTO.ordinal())))))), or.v.a("AccessibilityEventTypes", o0.m(or.v.a("typeWindowStateChanged", 32), or.v.a("typeViewFocused", 8), or.v.a("typeViewClicked", 1))));
    }

    private UIManagerModuleConstants() {
    }
}
