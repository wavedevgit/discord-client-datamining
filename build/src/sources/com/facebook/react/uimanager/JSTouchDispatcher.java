package com.facebook.react.uimanager;

import android.view.MotionEvent;
import android.view.ViewGroup;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.UIManager;
import com.facebook.react.common.ReactConstants;
import com.facebook.react.uimanager.events.EventDispatcher;
import com.facebook.react.uimanager.events.TouchEvent;
import com.facebook.react.uimanager.events.TouchEventCoalescingKeyHelper;
import com.facebook.react.uimanager.events.TouchEventType;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000L\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0014\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\t\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0007\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\u0016\u0010\u0010\u001a\u00020\u00112\u0006\u0010\u0012\u001a\u00020\u00132\u0006\u0010\u0014\u001a\u00020\u0015J\u0016\u0010\u0016\u001a\u00020\u00112\u0006\u0010\u0012\u001a\u00020\u00132\u0006\u0010\u0014\u001a\u00020\u0015J\u0016\u0010\u0017\u001a\u00020\u00112\u0006\u0010\u0018\u001a\u00020\u00132\u0006\u0010\u0014\u001a\u00020\u0015J \u0010\u0017\u001a\u00020\u00112\u0006\u0010\u0018\u001a\u00020\u00132\u0006\u0010\u0014\u001a\u00020\u00152\b\u0010\u0019\u001a\u0004\u0018\u00010\u001aJ\"\u0010\u001b\u001a\u00020\u00112\u0006\u0010\u001c\u001a\u00020\u00072\u0006\u0010\u001d\u001a\u00020\u00072\b\u0010\u0019\u001a\u0004\u0018\u00010\u001aH\u0002J\"\u0010\u001e\u001a\u00020\u00112\u0006\u0010\u001c\u001a\u00020\u00072\u0006\u0010\u001d\u001a\u00020\u00072\b\u0010\u0019\u001a\u0004\u0018\u00010\u001aH\u0002J\u0010\u0010\u001f\u001a\u00020\u00072\u0006\u0010\u0018\u001a\u00020\u0013H\u0002J\u0018\u0010 \u001a\u00020\u00112\u0006\u0010\u0012\u001a\u00020\u00132\u0006\u0010\u0014\u001a\u00020\u0015H\u0002R\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0007X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\b\u001a\u00020\tX\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\n\u001a\u00020\u000bX\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\f\u001a\u00020\rX\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u000e\u001a\u00020\u000fX\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006!"}, d2 = {"Lcom/facebook/react/uimanager/JSTouchDispatcher;", "", "viewGroup", "Landroid/view/ViewGroup;", "<init>", "(Landroid/view/ViewGroup;)V", "targetTag", "", "targetCoordinates", "", "childIsHandlingNativeGesture", "", "gestureStartTime", "", "touchEventCoalescingKeyHelper", "Lcom/facebook/react/uimanager/events/TouchEventCoalescingKeyHelper;", "onChildStartedNativeGesture", "", "androidEvent", "Landroid/view/MotionEvent;", "eventDispatcher", "Lcom/facebook/react/uimanager/events/EventDispatcher;", "onChildEndedNativeGesture", "handleTouchEvent", "ev", "reactContext", "Lcom/facebook/react/bridge/ReactContext;", "markActiveTouchForTag", "surfaceId", "reactTag", "sweepActiveTouchForTag", "findTargetTagAndSetCoordinates", "dispatchCancelEvent", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class JSTouchDispatcher {
    private boolean childIsHandlingNativeGesture;
    private long gestureStartTime;
    @NotNull
    private final float[] targetCoordinates;
    private int targetTag;
    @NotNull
    private final TouchEventCoalescingKeyHelper touchEventCoalescingKeyHelper;
    @NotNull
    private final ViewGroup viewGroup;

    public JSTouchDispatcher(@NotNull ViewGroup viewGroup) {
        Intrinsics.checkNotNullParameter(viewGroup, "viewGroup");
        this.viewGroup = viewGroup;
        this.targetTag = -1;
        this.targetCoordinates = new float[2];
        this.gestureStartTime = Long.MIN_VALUE;
        this.touchEventCoalescingKeyHelper = new TouchEventCoalescingKeyHelper();
    }

    private final void dispatchCancelEvent(MotionEvent motionEvent, EventDispatcher eventDispatcher) {
        if (this.targetTag == -1) {
            p8.a.J(ReactConstants.TAG, "Can't cancel already finished gesture. Is a child View trying to start a gesture from an UP/CANCEL event?");
            return;
        }
        db.a.b(!this.childIsHandlingNativeGesture, "Expected to not have already sent a cancel for this gesture");
        TouchEvent.Companion companion = TouchEvent.Companion;
        int surfaceId = UIManagerHelper.getSurfaceId(this.viewGroup);
        int i10 = this.targetTag;
        TouchEventType touchEventType = TouchEventType.CANCEL;
        long j10 = this.gestureStartTime;
        float[] fArr = this.targetCoordinates;
        ((EventDispatcher) db.a.c(eventDispatcher)).dispatchEvent(companion.obtain(surfaceId, i10, touchEventType, motionEvent, j10, fArr[0], fArr[1], this.touchEventCoalescingKeyHelper));
    }

    private final int findTargetTagAndSetCoordinates(MotionEvent motionEvent) {
        return TouchTargetHelper.findTargetTagAndCoordinatesForTouch(motionEvent.getX(), motionEvent.getY(), this.viewGroup, this.targetCoordinates, null);
    }

    private final void markActiveTouchForTag(int i10, int i11, ReactContext reactContext) {
        UIManager uIManager;
        if (reactContext != null && (uIManager = UIManagerHelper.getUIManager(reactContext, 2)) != null) {
            uIManager.markActiveTouchForTag(i10, i11);
        }
    }

    private final void sweepActiveTouchForTag(int i10, int i11, ReactContext reactContext) {
        UIManager uIManager;
        if (reactContext != null && (uIManager = UIManagerHelper.getUIManager(reactContext, 2)) != null) {
            uIManager.sweepActiveTouchForTag(i10, i11);
        }
    }

    public final void handleTouchEvent(@NotNull MotionEvent ev2, @NotNull EventDispatcher eventDispatcher) {
        Intrinsics.checkNotNullParameter(ev2, "ev");
        Intrinsics.checkNotNullParameter(eventDispatcher, "eventDispatcher");
        handleTouchEvent(ev2, eventDispatcher, null);
    }

    public final void onChildEndedNativeGesture(@NotNull MotionEvent androidEvent, @NotNull EventDispatcher eventDispatcher) {
        Intrinsics.checkNotNullParameter(androidEvent, "androidEvent");
        Intrinsics.checkNotNullParameter(eventDispatcher, "eventDispatcher");
        this.childIsHandlingNativeGesture = false;
    }

    public final void onChildStartedNativeGesture(@NotNull MotionEvent androidEvent, @NotNull EventDispatcher eventDispatcher) {
        Intrinsics.checkNotNullParameter(androidEvent, "androidEvent");
        Intrinsics.checkNotNullParameter(eventDispatcher, "eventDispatcher");
        if (this.childIsHandlingNativeGesture) {
            return;
        }
        dispatchCancelEvent(androidEvent, eventDispatcher);
        sweepActiveTouchForTag(UIManagerHelper.getSurfaceId(this.viewGroup), this.targetTag, UIManagerHelper.getReactContext(this.viewGroup));
        this.childIsHandlingNativeGesture = true;
        this.targetTag = -1;
    }

    public final void handleTouchEvent(@NotNull MotionEvent ev2, @NotNull EventDispatcher eventDispatcher, ReactContext reactContext) {
        Intrinsics.checkNotNullParameter(ev2, "ev");
        Intrinsics.checkNotNullParameter(eventDispatcher, "eventDispatcher");
        int action = ev2.getAction() & SetSpanOperation.SPAN_MAX_PRIORITY;
        if (action == 0) {
            if (this.targetTag != -1) {
                p8.a.m(ReactConstants.TAG, "Got DOWN touch before receiving UP or CANCEL from last gesture");
            }
            this.childIsHandlingNativeGesture = false;
            this.gestureStartTime = ev2.getEventTime();
            this.targetTag = findTargetTagAndSetCoordinates(ev2);
            markActiveTouchForTag(UIManagerHelper.getSurfaceId(this.viewGroup), this.targetTag, reactContext);
            TouchEvent.Companion companion = TouchEvent.Companion;
            int surfaceId = UIManagerHelper.getSurfaceId(this.viewGroup);
            int i10 = this.targetTag;
            TouchEventType touchEventType = TouchEventType.START;
            long j10 = this.gestureStartTime;
            float[] fArr = this.targetCoordinates;
            eventDispatcher.dispatchEvent(companion.obtain(surfaceId, i10, touchEventType, ev2, j10, fArr[0], fArr[1], this.touchEventCoalescingKeyHelper));
        } else if (this.childIsHandlingNativeGesture) {
        } else {
            int i11 = this.targetTag;
            if (i11 == -1) {
                p8.a.m(ReactConstants.TAG, "Unexpected state: received touch event but didn't get starting ACTION_DOWN for this gesture before");
            } else if (action == 1) {
                findTargetTagAndSetCoordinates(ev2);
                int surfaceId2 = UIManagerHelper.getSurfaceId(this.viewGroup);
                TouchEvent.Companion companion2 = TouchEvent.Companion;
                int i12 = this.targetTag;
                TouchEventType touchEventType2 = TouchEventType.END;
                long j11 = this.gestureStartTime;
                float[] fArr2 = this.targetCoordinates;
                eventDispatcher.dispatchEvent(companion2.obtain(surfaceId2, i12, touchEventType2, ev2, j11, fArr2[0], fArr2[1], this.touchEventCoalescingKeyHelper));
                sweepActiveTouchForTag(surfaceId2, this.targetTag, reactContext);
                this.targetTag = -1;
                this.gestureStartTime = Long.MIN_VALUE;
            } else if (action == 2) {
                findTargetTagAndSetCoordinates(ev2);
                TouchEvent.Companion companion3 = TouchEvent.Companion;
                int surfaceId3 = UIManagerHelper.getSurfaceId(this.viewGroup);
                int i13 = this.targetTag;
                TouchEventType touchEventType3 = TouchEventType.MOVE;
                long j12 = this.gestureStartTime;
                float[] fArr3 = this.targetCoordinates;
                eventDispatcher.dispatchEvent(companion3.obtain(surfaceId3, i13, touchEventType3, ev2, j12, fArr3[0], fArr3[1], this.touchEventCoalescingKeyHelper));
            } else if (action == 5) {
                TouchEvent.Companion companion4 = TouchEvent.Companion;
                int surfaceId4 = UIManagerHelper.getSurfaceId(this.viewGroup);
                int i14 = this.targetTag;
                TouchEventType touchEventType4 = TouchEventType.START;
                long j13 = this.gestureStartTime;
                float[] fArr4 = this.targetCoordinates;
                eventDispatcher.dispatchEvent(companion4.obtain(surfaceId4, i14, touchEventType4, ev2, j13, fArr4[0], fArr4[1], this.touchEventCoalescingKeyHelper));
            } else if (action == 6) {
                TouchEvent.Companion companion5 = TouchEvent.Companion;
                int surfaceId5 = UIManagerHelper.getSurfaceId(this.viewGroup);
                int i15 = this.targetTag;
                TouchEventType touchEventType5 = TouchEventType.END;
                long j14 = this.gestureStartTime;
                float[] fArr5 = this.targetCoordinates;
                eventDispatcher.dispatchEvent(companion5.obtain(surfaceId5, i15, touchEventType5, ev2, j14, fArr5[0], fArr5[1], this.touchEventCoalescingKeyHelper));
            } else if (action == 3) {
                if (this.touchEventCoalescingKeyHelper.hasCoalescingKey(ev2.getDownTime())) {
                    dispatchCancelEvent(ev2, eventDispatcher);
                } else {
                    p8.a.m(ReactConstants.TAG, "Received an ACTION_CANCEL touch event for which we have no corresponding ACTION_DOWN");
                }
                sweepActiveTouchForTag(UIManagerHelper.getSurfaceId(this.viewGroup), this.targetTag, reactContext);
                this.targetTag = -1;
                this.gestureStartTime = Long.MIN_VALUE;
            } else {
                p8.a.J(ReactConstants.TAG, "Warning : touch event was ignored. Action=" + action + " Target=" + i11);
            }
        }
    }
}
