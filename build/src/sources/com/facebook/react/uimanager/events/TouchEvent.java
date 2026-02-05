package com.facebook.react.uimanager.events;

import android.view.MotionEvent;
import androidx.core.util.Pools$SynchronizedPool;
import com.facebook.react.bridge.ReactSoftExceptionLogger;
import com.facebook.react.bridge.SoftAssertions;
import com.facebook.react.uimanager.common.ViewUtil;
import com.facebook.react.uimanager.events.TouchEventType;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import or.p;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000^\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\n\n\u0000\n\u0002\u0010\u0007\n\u0002\b\b\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0010\t\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\u0018\u0000 *2\b\u0012\u0004\u0012\u00020\u00000\u0001:\u0001*B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0006\u0010\u0011\u001a\u00020\u0005J\u0006\u0010\u0012\u001a\u00020\u0007JJ\u0010\u0013\u001a\u00020\u00142\u0006\u0010\u0015\u001a\u00020\u00162\u0006\u0010\u0017\u001a\u00020\u00162\b\u0010\u0006\u001a\u0004\u0018\u00010\u00072\u0006\u0010\u0018\u001a\u00020\u00052\u0006\u0010\u0019\u001a\u00020\u001a2\u0006\u0010\f\u001a\u00020\u000b2\u0006\u0010\u000f\u001a\u00020\u000b2\u0006\u0010\u001b\u001a\u00020\u001cH\u0002J\b\u0010\u001d\u001a\u00020\u0014H\u0016J\b\u0010\u001e\u001a\u00020\u001fH\u0016J\b\u0010 \u001a\u00020!H\u0016J\b\u0010\"\u001a\u00020\tH\u0016J\u0010\u0010#\u001a\u00020\u00142\u0006\u0010$\u001a\u00020%H\u0017J\u0010\u0010&\u001a\u00020\u00142\u0006\u0010$\u001a\u00020'H\u0016J\b\u0010(\u001a\u00020\u0016H\u0016J\b\u0010)\u001a\u00020!H\u0002R\u0010\u0010\u0004\u001a\u0004\u0018\u00010\u0005X\u0082\u000e¢\u0006\u0002\n\u0000R\u0010\u0010\u0006\u001a\u0004\u0018\u00010\u0007X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\b\u001a\u00020\tX\u0082\u000e¢\u0006\u0002\n\u0000R\u001e\u0010\f\u001a\u00020\u000b2\u0006\u0010\n\u001a\u00020\u000b@BX\u0086\u000e¢\u0006\b\n\u0000\u001a\u0004\b\r\u0010\u000eR\u001e\u0010\u000f\u001a\u00020\u000b2\u0006\u0010\n\u001a\u00020\u000b@BX\u0086\u000e¢\u0006\b\n\u0000\u001a\u0004\b\u0010\u0010\u000e¨\u0006+"}, d2 = {"Lcom/facebook/react/uimanager/events/TouchEvent;", "Lcom/facebook/react/uimanager/events/Event;", "<init>", "()V", "motionEvent", "Landroid/view/MotionEvent;", "touchEventType", "Lcom/facebook/react/uimanager/events/TouchEventType;", "coalescingKey", "", "value", "", "viewX", "getViewX", "()F", "viewY", "getViewY", "getMotionEvent", "getTouchEventType", "init", "", "surfaceId", "", "viewTag", "motionEventToCopy", "gestureStartTime", "", "touchEventCoalescingKeyHelper", "Lcom/facebook/react/uimanager/events/TouchEventCoalescingKeyHelper;", "onDispose", "getEventName", "", "canCoalesce", "", "getCoalescingKey", "dispatch", "rctEventEmitter", "Lcom/facebook/react/uimanager/events/RCTEventEmitter;", "dispatchModern", "Lcom/facebook/react/uimanager/events/RCTModernEventEmitter;", "getEventCategory", "verifyMotionEvent", "Companion", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class TouchEvent extends Event<TouchEvent> {
    private static final int TOUCH_EVENTS_POOL_SIZE = 3;
    public static final long UNSET = Long.MIN_VALUE;
    private short coalescingKey;
    private MotionEvent motionEvent;
    private TouchEventType touchEventType;
    private float viewX;
    private float viewY;
    @NotNull
    public static final Companion Companion = new Companion(null);
    private static final String TAG = TouchEvent.class.getSimpleName();
    @NotNull
    private static final Pools$SynchronizedPool EVENTS_POOL = new Pools$SynchronizedPool(3);

    @Metadata(d1 = {"\u0000J\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\t\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0007\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003JD\u0010\u000e\u001a\u00020\u000b2\u0006\u0010\u000f\u001a\u00020\b2\b\u0010\u0010\u001a\u0004\u0018\u00010\u00112\b\u0010\u0012\u001a\u0004\u0018\u00010\u00132\u0006\u0010\u0014\u001a\u00020\r2\u0006\u0010\u0015\u001a\u00020\u00162\u0006\u0010\u0017\u001a\u00020\u00162\u0006\u0010\u0018\u001a\u00020\u0019H\u0007JL\u0010\u000e\u001a\u00020\u000b2\u0006\u0010\u001a\u001a\u00020\b2\u0006\u0010\u000f\u001a\u00020\b2\b\u0010\u0010\u001a\u0004\u0018\u00010\u00112\b\u0010\u0012\u001a\u0004\u0018\u00010\u00132\u0006\u0010\u0014\u001a\u00020\r2\u0006\u0010\u0015\u001a\u00020\u00162\u0006\u0010\u0017\u001a\u00020\u00162\u0006\u0010\u0018\u001a\u00020\u0019H\u0007R\u0016\u0010\u0004\u001a\n \u0006*\u0004\u0018\u00010\u00050\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0007\u001a\u00020\bX\u0082T¢\u0006\u0002\n\u0000R\u0014\u0010\t\u001a\b\u0012\u0004\u0012\u00020\u000b0\nX\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\f\u001a\u00020\rX\u0086T¢\u0006\u0002\n\u0000¨\u0006\u001b"}, d2 = {"Lcom/facebook/react/uimanager/events/TouchEvent$Companion;", "", "<init>", "()V", "TAG", "", "kotlin.jvm.PlatformType", "TOUCH_EVENTS_POOL_SIZE", "", "EVENTS_POOL", "Landroidx/core/util/Pools$SynchronizedPool;", "Lcom/facebook/react/uimanager/events/TouchEvent;", "UNSET", "", "obtain", "viewTag", "touchEventType", "Lcom/facebook/react/uimanager/events/TouchEventType;", "motionEventToCopy", "Landroid/view/MotionEvent;", "gestureStartTime", "viewX", "", "viewY", "touchEventCoalescingKeyHelper", "Lcom/facebook/react/uimanager/events/TouchEventCoalescingKeyHelper;", "surfaceId", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @or.c
        @NotNull
        public final TouchEvent obtain(int i10, TouchEventType touchEventType, MotionEvent motionEvent, long j10, float f10, float f11, @NotNull TouchEventCoalescingKeyHelper touchEventCoalescingKeyHelper) {
            Intrinsics.checkNotNullParameter(touchEventCoalescingKeyHelper, "touchEventCoalescingKeyHelper");
            return obtain(-1, i10, touchEventType, (MotionEvent) db.a.c(motionEvent), j10, f10, f11, touchEventCoalescingKeyHelper);
        }

        private Companion() {
        }

        @NotNull
        public final TouchEvent obtain(int i10, int i11, TouchEventType touchEventType, MotionEvent motionEvent, long j10, float f10, float f11, @NotNull TouchEventCoalescingKeyHelper touchEventCoalescingKeyHelper) {
            Intrinsics.checkNotNullParameter(touchEventCoalescingKeyHelper, "touchEventCoalescingKeyHelper");
            TouchEvent touchEvent = (TouchEvent) TouchEvent.EVENTS_POOL.acquire();
            if (touchEvent == null) {
                touchEvent = new TouchEvent(null);
            }
            TouchEvent touchEvent2 = touchEvent;
            Object c10 = db.a.c(motionEvent);
            Intrinsics.checkNotNullExpressionValue(c10, "assertNotNull(...)");
            touchEvent2.init(i10, i11, touchEventType, (MotionEvent) c10, j10, f10, f11, touchEventCoalescingKeyHelper);
            return touchEvent2;
        }
    }

    @Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public /* synthetic */ class WhenMappings {
        public static final /* synthetic */ int[] $EnumSwitchMapping$0;

        static {
            int[] iArr = new int[TouchEventType.values().length];
            try {
                iArr[TouchEventType.START.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[TouchEventType.END.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[TouchEventType.CANCEL.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[TouchEventType.MOVE.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            $EnumSwitchMapping$0 = iArr;
        }
    }

    public /* synthetic */ TouchEvent(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void init(int i10, int i11, TouchEventType touchEventType, MotionEvent motionEvent, long j10, float f10, float f11, TouchEventCoalescingKeyHelper touchEventCoalescingKeyHelper) {
        boolean z10;
        super.init(i10, i11, motionEvent.getEventTime());
        short s10 = 0;
        if (j10 != Long.MIN_VALUE) {
            z10 = true;
        } else {
            z10 = false;
        }
        SoftAssertions.assertCondition(z10, "Gesture start time must be initialized");
        int action = motionEvent.getAction() & SetSpanOperation.SPAN_MAX_PRIORITY;
        if (action != 0) {
            if (action != 1) {
                if (action != 2) {
                    if (action != 3) {
                        if (action == 5 || action == 6) {
                            touchEventCoalescingKeyHelper.incrementCoalescingKey(j10);
                        }
                    } else {
                        touchEventCoalescingKeyHelper.removeCoalescingKey(j10);
                    }
                } else {
                    s10 = touchEventCoalescingKeyHelper.getCoalescingKey(j10);
                }
            } else {
                touchEventCoalescingKeyHelper.removeCoalescingKey(j10);
            }
        } else {
            touchEventCoalescingKeyHelper.addCoalescingKey(j10);
        }
        this.motionEvent = MotionEvent.obtain(motionEvent);
        this.touchEventType = touchEventType;
        this.coalescingKey = s10;
        this.viewX = f10;
        this.viewY = f11;
    }

    @NotNull
    public static final TouchEvent obtain(int i10, int i11, TouchEventType touchEventType, MotionEvent motionEvent, long j10, float f10, float f11, @NotNull TouchEventCoalescingKeyHelper touchEventCoalescingKeyHelper) {
        return Companion.obtain(i10, i11, touchEventType, motionEvent, j10, f10, f11, touchEventCoalescingKeyHelper);
    }

    private final boolean verifyMotionEvent() {
        if (this.motionEvent == null) {
            String TAG2 = TAG;
            Intrinsics.checkNotNullExpressionValue(TAG2, "TAG");
            ReactSoftExceptionLogger.logSoftException(TAG2, new IllegalStateException("Cannot dispatch a TouchEvent that has no MotionEvent; the TouchEvent has been recycled"));
            return false;
        }
        return true;
    }

    @Override // com.facebook.react.uimanager.events.Event
    public boolean canCoalesce() {
        int i10;
        TouchEventType touchEventType = (TouchEventType) db.a.c(this.touchEventType);
        if (touchEventType == null) {
            i10 = -1;
        } else {
            i10 = WhenMappings.$EnumSwitchMapping$0[touchEventType.ordinal()];
        }
        if (i10 != 1 && i10 != 2 && i10 != 3) {
            if (i10 == 4) {
                return true;
            }
            TouchEventType touchEventType2 = this.touchEventType;
            throw new RuntimeException("Unknown touch event type: " + touchEventType2);
        }
        return false;
    }

    @Override // com.facebook.react.uimanager.events.Event
    @or.c
    public void dispatch(@NotNull RCTEventEmitter rctEventEmitter) {
        Intrinsics.checkNotNullParameter(rctEventEmitter, "rctEventEmitter");
        if (verifyMotionEvent()) {
            TouchesHelper.sendTouchesLegacy(rctEventEmitter, this);
        }
    }

    @Override // com.facebook.react.uimanager.events.Event
    public void dispatchModern(@NotNull RCTModernEventEmitter rctEventEmitter) {
        Intrinsics.checkNotNullParameter(rctEventEmitter, "rctEventEmitter");
        if (verifyMotionEvent()) {
            int uIManagerType = ViewUtil.getUIManagerType(getViewTag(), getSurfaceId());
            if (uIManagerType != 1) {
                if (uIManagerType != 2) {
                    return;
                }
                TouchesHelper.sendTouchEvent(rctEventEmitter, this);
                return;
            }
            TouchesHelper.sendTouchesLegacy(rctEventEmitter, this);
        }
    }

    @Override // com.facebook.react.uimanager.events.Event
    public short getCoalescingKey() {
        return this.coalescingKey;
    }

    @Override // com.facebook.react.uimanager.events.Event
    public int getEventCategory() {
        TouchEventType touchEventType = this.touchEventType;
        if (touchEventType == null) {
            return 2;
        }
        int i10 = WhenMappings.$EnumSwitchMapping$0[touchEventType.ordinal()];
        if (i10 != 1) {
            if (i10 == 2 || i10 == 3) {
                return 1;
            }
            if (i10 == 4) {
                return 4;
            }
            throw new p();
        }
        return 0;
    }

    @Override // com.facebook.react.uimanager.events.Event
    @NotNull
    public String getEventName() {
        TouchEventType.Companion companion = TouchEventType.Companion;
        Object c10 = db.a.c(this.touchEventType);
        Intrinsics.checkNotNullExpressionValue(c10, "assertNotNull(...)");
        return companion.getJSEventName((TouchEventType) c10);
    }

    @NotNull
    public final MotionEvent getMotionEvent() {
        Object c10 = db.a.c(this.motionEvent);
        Intrinsics.checkNotNullExpressionValue(c10, "assertNotNull(...)");
        return (MotionEvent) c10;
    }

    @NotNull
    public final TouchEventType getTouchEventType() {
        Object c10 = db.a.c(this.touchEventType);
        Intrinsics.checkNotNullExpressionValue(c10, "assertNotNull(...)");
        return (TouchEventType) c10;
    }

    public final float getViewX() {
        return this.viewX;
    }

    public final float getViewY() {
        return this.viewY;
    }

    @Override // com.facebook.react.uimanager.events.Event
    public void onDispose() {
        MotionEvent motionEvent = this.motionEvent;
        if (motionEvent != null) {
            motionEvent.recycle();
        }
        this.motionEvent = null;
        try {
            EVENTS_POOL.release(this);
        } catch (IllegalStateException e10) {
            String TAG2 = TAG;
            Intrinsics.checkNotNullExpressionValue(TAG2, "TAG");
            ReactSoftExceptionLogger.logSoftException(TAG2, e10);
        }
    }

    private TouchEvent() {
    }

    @or.c
    @NotNull
    public static final TouchEvent obtain(int i10, TouchEventType touchEventType, MotionEvent motionEvent, long j10, float f10, float f11, @NotNull TouchEventCoalescingKeyHelper touchEventCoalescingKeyHelper) {
        return Companion.obtain(i10, touchEventType, motionEvent, j10, f10, f11, touchEventCoalescingKeyHelper);
    }
}
