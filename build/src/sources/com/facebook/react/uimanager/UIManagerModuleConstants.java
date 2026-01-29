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
        Pair a10 = ir.v.a(ReactTextChangedEvent.EVENT_NAME, o0.f(ir.v.a("phasedRegistrationNames", o0.m(ir.v.a("bubbled", "onChange"), ir.v.a("captured", "onChangeCapture")))));
        Pair a11 = ir.v.a("topSelect", o0.f(ir.v.a("phasedRegistrationNames", o0.m(ir.v.a("bubbled", "onSelect"), ir.v.a("captured", "onSelectCapture")))));
        TouchEventType.Companion companion = TouchEventType.Companion;
        bubblingEventTypeConstants = o0.m(a10, a11, ir.v.a(companion.getJSEventName(TouchEventType.START), o0.f(ir.v.a("phasedRegistrationNames", o0.m(ir.v.a("bubbled", "onTouchStart"), ir.v.a("captured", "onTouchStartCapture"))))), ir.v.a(companion.getJSEventName(TouchEventType.MOVE), o0.f(ir.v.a("phasedRegistrationNames", o0.m(ir.v.a("bubbled", "onTouchMove"), ir.v.a("captured", "onTouchMoveCapture"))))), ir.v.a(companion.getJSEventName(TouchEventType.END), o0.f(ir.v.a("phasedRegistrationNames", o0.m(ir.v.a("bubbled", "onTouchEnd"), ir.v.a("captured", "onTouchEndCapture"))))), ir.v.a(companion.getJSEventName(TouchEventType.CANCEL), o0.f(ir.v.a("phasedRegistrationNames", o0.m(ir.v.a("bubbled", "onTouchCancel"), ir.v.a("captured", "onTouchCancelCapture"))))));
        directEventTypeConstants = o0.m(ir.v.a(ReactContentSizeChangedEvent.EVENT_NAME, o0.f(ir.v.a("registrationName", "onContentSizeChange"))), ir.v.a("topLayout", o0.f(ir.v.a("registrationName", "onLayout"))), ir.v.a("topLoadingError", o0.f(ir.v.a("registrationName", "onLoadingError"))), ir.v.a("topLoadingFinish", o0.f(ir.v.a("registrationName", "onLoadingFinish"))), ir.v.a("topLoadingStart", o0.f(ir.v.a("registrationName", "onLoadingStart"))), ir.v.a("topSelectionChange", o0.f(ir.v.a("registrationName", "onSelectionChange"))), ir.v.a("topMessage", o0.f(ir.v.a("registrationName", "onMessage"))), ir.v.a("topScrollBeginDrag", o0.f(ir.v.a("registrationName", "onScrollBeginDrag"))), ir.v.a("topScrollEndDrag", o0.f(ir.v.a("registrationName", "onScrollEndDrag"))), ir.v.a("topScroll", o0.f(ir.v.a("registrationName", "onScroll"))), ir.v.a("topMomentumScrollBegin", o0.f(ir.v.a("registrationName", "onMomentumScrollBegin"))), ir.v.a("topMomentumScrollEnd", o0.f(ir.v.a("registrationName", "onMomentumScrollEnd"))));
        constants = o0.m(ir.v.a("UIView", o0.f(ir.v.a("ContentMode", o0.m(ir.v.a("ScaleAspectFit", Integer.valueOf(ImageView.ScaleType.FIT_CENTER.ordinal())), ir.v.a("ScaleAspectFill", Integer.valueOf(ImageView.ScaleType.CENTER_CROP.ordinal())), ir.v.a("ScaleAspectCenter", Integer.valueOf(ImageView.ScaleType.CENTER_INSIDE.ordinal())))))), ir.v.a("StyleConstants", o0.f(ir.v.a("PointerEventsValues", o0.m(ir.v.a(ViewProps.NONE, Integer.valueOf(PointerEvents.NONE.ordinal())), ir.v.a("boxNone", Integer.valueOf(PointerEvents.BOX_NONE.ordinal())), ir.v.a("boxOnly", Integer.valueOf(PointerEvents.BOX_ONLY.ordinal())), ir.v.a("unspecified", Integer.valueOf(PointerEvents.AUTO.ordinal())))))), ir.v.a("AccessibilityEventTypes", o0.m(ir.v.a("typeWindowStateChanged", 32), ir.v.a("typeViewFocused", 8), ir.v.a("typeViewClicked", 1))));
    }

    private UIManagerModuleConstants() {
    }
}
