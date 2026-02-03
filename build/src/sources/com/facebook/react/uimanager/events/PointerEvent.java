package com.facebook.react.uimanager.events;

import android.view.MotionEvent;
import androidx.core.util.Pools$SynchronizedPool;
import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.bridge.ReactSoftExceptionLogger;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.TouchTargetHelper;
import com.facebook.react.uimanager.events.Event;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import jr.l;
import jr.o;
import kotlin.Lazy;
import kotlin.Metadata;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\\\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\n\n\u0000\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u000e\n\u0002\u0018\u0002\n\u0002\b\u0003\b\u0000\u0018\u0000 .2\b\u0012\u0004\u0012\u00020\u00000\u0001:\u0002-.B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J0\u0010\u000f\u001a\u00020\u00102\u0006\u0010\u0011\u001a\u00020\u00072\u0006\u0010\u0012\u001a\u00020\u00132\u0006\u0010\r\u001a\u00020\u000e2\u0006\u0010\u0014\u001a\u00020\u00052\u0006\u0010\b\u001a\u00020\tH\u0002J\b\u0010\u0015\u001a\u00020\u0007H\u0016J\u0010\u0010\u0019\u001a\u00020\u00102\u0006\u0010\u001a\u001a\u00020\u001bH\u0017J\b\u0010\"\u001a\u00020\u0010H\u0016J\u000e\u0010#\u001a\b\u0012\u0004\u0012\u00020\f0\u000bH\u0002J\u0018\u0010$\u001a\u00020\u00102\u0006\u0010%\u001a\u00020\f2\u0006\u0010&\u001a\u00020\u0013H\u0002J\u0010\u0010'\u001a\u00020\f2\u0006\u0010(\u001a\u00020\u0013H\u0002J\u0010\u0010)\u001a\n\u0012\u0004\u0012\u00020\f\u0018\u00010\u000bH\u0002J\b\u0010*\u001a\u00020\tH\u0016J\u0010\u0010+\u001a\u00020\u00102\u0006\u0010\u001a\u001a\u00020,H\u0016R\u0010\u0010\u0004\u001a\u0004\u0018\u00010\u0005X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0007X\u0082.¢\u0006\u0002\n\u0000R\u000e\u0010\b\u001a\u00020\tX\u0082\u000e¢\u0006\u0002\n\u0000R\u0016\u0010\n\u001a\n\u0012\u0004\u0012\u00020\f\u0018\u00010\u000bX\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\r\u001a\u00020\u000eX\u0082.¢\u0006\u0002\n\u0000R\u0014\u0010\u0016\u001a\u00020\u00178BX\u0082\u0004¢\u0006\u0006\u001a\u0004\b\u0016\u0010\u0018R\u001b\u0010\u001c\u001a\u00020\u001d8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\b \u0010!\u001a\u0004\b\u001e\u0010\u001f¨\u0006/"}, d2 = {"Lcom/facebook/react/uimanager/events/PointerEvent;", "Lcom/facebook/react/uimanager/events/Event;", "<init>", "()V", "motionEvent", "Landroid/view/MotionEvent;", "_eventName", "", "coalescingKey", "", "pointersEventData", "", "Lcom/facebook/react/bridge/WritableMap;", "eventState", "Lcom/facebook/react/uimanager/events/PointerEvent$PointerEventState;", "init", "", "eventName", "targetTag", "", "motionEventToCopy", "getEventName", "isClickEvent", "", "()Z", "dispatch", "rctEventEmitter", "Lcom/facebook/react/uimanager/events/RCTEventEmitter;", "eventAnimationDriverMatchSpec", "Lcom/facebook/react/uimanager/events/Event$EventAnimationDriverMatchSpec;", "getEventAnimationDriverMatchSpec", "()Lcom/facebook/react/uimanager/events/Event$EventAnimationDriverMatchSpec;", "eventAnimationDriverMatchSpec$delegate", "Lkotlin/Lazy;", "onDispose", "createW3CPointerEvents", "addModifierKeyData", "pointerEvent", "modifierKeyMask", "createW3CPointerEvent", "index", "createPointersEventData", "getCoalescingKey", "dispatchModern", "Lcom/facebook/react/uimanager/events/RCTModernEventEmitter;", "PointerEventState", "Companion", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class PointerEvent extends Event<PointerEvent> {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private static final Pools$SynchronizedPool EVENTS_POOL;
    private static final int POINTER_EVENTS_POOL_SIZE = 6;
    @NotNull
    private static final String TAG;
    private static final short UNSET_COALESCING_KEY = -1;
    private String _eventName;
    private short coalescingKey;
    @NotNull
    private final Lazy eventAnimationDriverMatchSpec$delegate;
    private PointerEventState eventState;
    private MotionEvent motionEvent;
    private List<? extends WritableMap> pointersEventData;

    @Metadata(d1 = {"\u00008\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\n\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J*\u0010\r\u001a\u00020\n2\u0006\u0010\u000e\u001a\u00020\u00052\u0006\u0010\u000f\u001a\u00020\u00072\u0006\u0010\u0010\u001a\u00020\u00112\b\u0010\u0012\u001a\u0004\u0018\u00010\u0013H\u0007J2\u0010\r\u001a\u00020\n2\u0006\u0010\u000e\u001a\u00020\u00052\u0006\u0010\u000f\u001a\u00020\u00072\u0006\u0010\u0010\u001a\u00020\u00112\b\u0010\u0012\u001a\u0004\u0018\u00010\u00132\u0006\u0010\u0014\u001a\u00020\fH\u0007R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0007X\u0082T¢\u0006\u0002\n\u0000R\u0014\u0010\b\u001a\b\u0012\u0004\u0012\u00020\n0\tX\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u000b\u001a\u00020\fX\u0082T¢\u0006\u0002\n\u0000¨\u0006\u0015"}, d2 = {"Lcom/facebook/react/uimanager/events/PointerEvent$Companion;", "", "<init>", "()V", "TAG", "", "POINTER_EVENTS_POOL_SIZE", "", "EVENTS_POOL", "Landroidx/core/util/Pools$SynchronizedPool;", "Lcom/facebook/react/uimanager/events/PointerEvent;", "UNSET_COALESCING_KEY", "", "obtain", "eventName", "targetTag", "eventState", "Lcom/facebook/react/uimanager/events/PointerEvent$PointerEventState;", "motionEventToCopy", "Landroid/view/MotionEvent;", "coalescingKey", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @NotNull
        public final PointerEvent obtain(@NotNull String eventName, int i10, @NotNull PointerEventState eventState, MotionEvent motionEvent) {
            Intrinsics.checkNotNullParameter(eventName, "eventName");
            Intrinsics.checkNotNullParameter(eventState, "eventState");
            PointerEvent pointerEvent = (PointerEvent) PointerEvent.EVENTS_POOL.acquire();
            if (pointerEvent == null) {
                pointerEvent = new PointerEvent(null);
            }
            PointerEvent pointerEvent2 = pointerEvent;
            Object c10 = db.a.c(motionEvent);
            Intrinsics.checkNotNullExpressionValue(c10, "assertNotNull(...)");
            pointerEvent2.init(eventName, i10, eventState, (MotionEvent) c10, (short) 0);
            return pointerEvent2;
        }

        private Companion() {
        }

        @NotNull
        public final PointerEvent obtain(@NotNull String eventName, int i10, @NotNull PointerEventState eventState, MotionEvent motionEvent, short s10) {
            Intrinsics.checkNotNullParameter(eventName, "eventName");
            Intrinsics.checkNotNullParameter(eventState, "eventState");
            PointerEvent pointerEvent = (PointerEvent) PointerEvent.EVENTS_POOL.acquire();
            if (pointerEvent == null) {
                pointerEvent = new PointerEvent(null);
            }
            PointerEvent pointerEvent2 = pointerEvent;
            Object c10 = db.a.c(motionEvent);
            Intrinsics.checkNotNullExpressionValue(c10, "assertNotNull(...)");
            pointerEvent2.init(eventName, i10, eventState, (MotionEvent) c10, s10);
            return pointerEvent2;
        }
    }

    @Metadata(d1 = {"\u00008\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0002\b\u0004\n\u0002\u0010$\n\u0002\u0010\u0014\n\u0000\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\"\n\u0002\b\u000f\n\u0002\u0010\u000b\n\u0002\b\u0005\u0018\u00002\u00020\u0001B\u008b\u0001\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\u0006\u0010\u0005\u001a\u00020\u0003\u0012\u0006\u0010\u0006\u001a\u00020\u0003\u0012\u0012\u0010\u0007\u001a\u000e\u0012\u0004\u0012\u00020\u0003\u0012\u0004\u0012\u00020\t0\b\u0012\u0018\u0010\n\u001a\u0014\u0012\u0004\u0012\u00020\u0003\u0012\n\u0012\b\u0012\u0004\u0012\u00020\f0\u000b0\b\u0012\u0012\u0010\r\u001a\u000e\u0012\u0004\u0012\u00020\u0003\u0012\u0004\u0012\u00020\t0\b\u0012\u0012\u0010\u000e\u001a\u000e\u0012\u0004\u0012\u00020\u0003\u0012\u0004\u0012\u00020\t0\b\u0012\f\u0010\u000f\u001a\b\u0012\u0004\u0012\u00020\u00030\u0010¢\u0006\u0004\b\u0011\u0010\u0012J\u0006\u0010\u001e\u001a\u00020\u0003J\u000e\u0010\u001f\u001a\u00020 2\u0006\u0010!\u001a\u00020\u0003R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0013\u0010\u0014R\u0011\u0010\u0004\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0015\u0010\u0014R\u0011\u0010\u0005\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0016\u0010\u0014R\u000e\u0010\u0006\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u001d\u0010\u0007\u001a\u000e\u0012\u0004\u0012\u00020\u0003\u0012\u0004\u0012\u00020\t0\b¢\u0006\b\n\u0000\u001a\u0004\b\u0017\u0010\u0018R#\u0010\n\u001a\u0014\u0012\u0004\u0012\u00020\u0003\u0012\n\u0012\b\u0012\u0004\u0012\u00020\f0\u000b0\b¢\u0006\b\n\u0000\u001a\u0004\b\u0019\u0010\u0018R\u001d\u0010\r\u001a\u000e\u0012\u0004\u0012\u00020\u0003\u0012\u0004\u0012\u00020\t0\b¢\u0006\b\n\u0000\u001a\u0004\b\u001a\u0010\u0018R\u001d\u0010\u000e\u001a\u000e\u0012\u0004\u0012\u00020\u0003\u0012\u0004\u0012\u00020\t0\b¢\u0006\b\n\u0000\u001a\u0004\b\u001b\u0010\u0018R\u0017\u0010\u000f\u001a\b\u0012\u0004\u0012\u00020\u00030\u0010¢\u0006\b\n\u0000\u001a\u0004\b\u001c\u0010\u001dR\u0017\u0010\"\u001a\b\u0012\u0004\u0012\u00020\f0\u000b8F¢\u0006\u0006\u001a\u0004\b#\u0010$¨\u0006%"}, d2 = {"Lcom/facebook/react/uimanager/events/PointerEvent$PointerEventState;", "", "primaryPointerId", "", "activePointerId", "lastButtonState", "surfaceId", "offsetByPointerId", "", "", "hitPathByPointerId", "", "Lcom/facebook/react/uimanager/TouchTargetHelper$ViewTarget;", "eventCoordinatesByPointerId", "screenCoordinatesByPointerId", "hoveringPointerIds", "", "<init>", "(IIIILjava/util/Map;Ljava/util/Map;Ljava/util/Map;Ljava/util/Map;Ljava/util/Set;)V", "getPrimaryPointerId", "()I", "getActivePointerId", "getLastButtonState", "getOffsetByPointerId", "()Ljava/util/Map;", "getHitPathByPointerId", "getEventCoordinatesByPointerId", "getScreenCoordinatesByPointerId", "getHoveringPointerIds", "()Ljava/util/Set;", "getSurfaceId", "supportsHover", "", "pointerId", "hitPathForActivePointer", "getHitPathForActivePointer", "()Ljava/util/List;", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class PointerEventState {
        private final int activePointerId;
        @NotNull
        private final Map<Integer, float[]> eventCoordinatesByPointerId;
        @NotNull
        private final Map<Integer, List<TouchTargetHelper.ViewTarget>> hitPathByPointerId;
        @NotNull
        private final Set<Integer> hoveringPointerIds;
        private final int lastButtonState;
        @NotNull
        private final Map<Integer, float[]> offsetByPointerId;
        private final int primaryPointerId;
        @NotNull
        private final Map<Integer, float[]> screenCoordinatesByPointerId;
        private final int surfaceId;

        /* JADX WARN: Multi-variable type inference failed */
        public PointerEventState(int i10, int i11, int i12, int i13, @NotNull Map<Integer, float[]> offsetByPointerId, @NotNull Map<Integer, ? extends List<TouchTargetHelper.ViewTarget>> hitPathByPointerId, @NotNull Map<Integer, float[]> eventCoordinatesByPointerId, @NotNull Map<Integer, float[]> screenCoordinatesByPointerId, @NotNull Set<Integer> hoveringPointerIds) {
            Intrinsics.checkNotNullParameter(offsetByPointerId, "offsetByPointerId");
            Intrinsics.checkNotNullParameter(hitPathByPointerId, "hitPathByPointerId");
            Intrinsics.checkNotNullParameter(eventCoordinatesByPointerId, "eventCoordinatesByPointerId");
            Intrinsics.checkNotNullParameter(screenCoordinatesByPointerId, "screenCoordinatesByPointerId");
            Intrinsics.checkNotNullParameter(hoveringPointerIds, "hoveringPointerIds");
            this.primaryPointerId = i10;
            this.activePointerId = i11;
            this.lastButtonState = i12;
            this.surfaceId = i13;
            this.offsetByPointerId = offsetByPointerId;
            this.hitPathByPointerId = hitPathByPointerId;
            this.eventCoordinatesByPointerId = eventCoordinatesByPointerId;
            this.screenCoordinatesByPointerId = screenCoordinatesByPointerId;
            this.hoveringPointerIds = new HashSet(hoveringPointerIds);
        }

        public final int getActivePointerId() {
            return this.activePointerId;
        }

        @NotNull
        public final Map<Integer, float[]> getEventCoordinatesByPointerId() {
            return this.eventCoordinatesByPointerId;
        }

        @NotNull
        public final Map<Integer, List<TouchTargetHelper.ViewTarget>> getHitPathByPointerId() {
            return this.hitPathByPointerId;
        }

        @NotNull
        public final List<TouchTargetHelper.ViewTarget> getHitPathForActivePointer() {
            List<TouchTargetHelper.ViewTarget> list = this.hitPathByPointerId.get(Integer.valueOf(this.activePointerId));
            if (list != null) {
                return list;
            }
            throw new IllegalStateException("Required value was null.");
        }

        @NotNull
        public final Set<Integer> getHoveringPointerIds() {
            return this.hoveringPointerIds;
        }

        public final int getLastButtonState() {
            return this.lastButtonState;
        }

        @NotNull
        public final Map<Integer, float[]> getOffsetByPointerId() {
            return this.offsetByPointerId;
        }

        public final int getPrimaryPointerId() {
            return this.primaryPointerId;
        }

        @NotNull
        public final Map<Integer, float[]> getScreenCoordinatesByPointerId() {
            return this.screenCoordinatesByPointerId;
        }

        public final int getSurfaceId() {
            return this.surfaceId;
        }

        public final boolean supportsHover(int i10) {
            return this.hoveringPointerIds.contains(Integer.valueOf(i10));
        }
    }

    static {
        String simpleName = PointerEvent.class.getSimpleName();
        Intrinsics.checkNotNullExpressionValue(simpleName, "getSimpleName(...)");
        TAG = simpleName;
        EVENTS_POOL = new Pools$SynchronizedPool(6);
    }

    public /* synthetic */ PointerEvent(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    private final void addModifierKeyData(WritableMap writableMap, int i10) {
        boolean z10;
        boolean z11;
        boolean z12;
        boolean z13 = false;
        if ((i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        writableMap.putBoolean("ctrlKey", z10);
        if ((i10 & 1) != 0) {
            z11 = true;
        } else {
            z11 = false;
        }
        writableMap.putBoolean("shiftKey", z11);
        if ((i10 & 2) != 0) {
            z12 = true;
        } else {
            z12 = false;
        }
        writableMap.putBoolean("altKey", z12);
        if ((i10 & 65536) != 0) {
            z13 = true;
        }
        writableMap.putBoolean("metaKey", z13);
    }

    /* JADX WARN: Code restructure failed: missing block: B:11:0x0021, code lost:
        if (r1.equals(com.facebook.react.uimanager.events.PointerEventHelper.POINTER_OUT) == false) goto L31;
     */
    /* JADX WARN: Code restructure failed: missing block: B:14:0x002a, code lost:
        if (r1.equals(com.facebook.react.uimanager.events.PointerEventHelper.POINTER_CANCEL) == false) goto L31;
     */
    /* JADX WARN: Code restructure failed: missing block: B:17:0x0033, code lost:
        if (r1.equals(com.facebook.react.uimanager.events.PointerEventHelper.CLICK) == false) goto L31;
     */
    /* JADX WARN: Code restructure failed: missing block: B:20:0x003c, code lost:
        if (r1.equals(com.facebook.react.uimanager.events.PointerEventHelper.POINTER_UP) == false) goto L31;
     */
    /* JADX WARN: Code restructure failed: missing block: B:23:0x0045, code lost:
        if (r1.equals(com.facebook.react.uimanager.events.PointerEventHelper.POINTER_OVER) == false) goto L31;
     */
    /* JADX WARN: Code restructure failed: missing block: B:26:0x004e, code lost:
        if (r1.equals(com.facebook.react.uimanager.events.PointerEventHelper.POINTER_MOVE) == false) goto L31;
     */
    /* JADX WARN: Code restructure failed: missing block: B:29:0x0055, code lost:
        return createW3CPointerEvents();
     */
    /* JADX WARN: Code restructure failed: missing block: B:31:0x005c, code lost:
        if (r1.equals(com.facebook.react.uimanager.events.PointerEventHelper.POINTER_DOWN) == false) goto L31;
     */
    /* JADX WARN: Code restructure failed: missing block: B:34:0x0065, code lost:
        if (r1.equals(com.facebook.react.uimanager.events.PointerEventHelper.POINTER_LEAVE) == false) goto L31;
     */
    /* JADX WARN: Code restructure failed: missing block: B:37:0x006e, code lost:
        if (r1.equals(com.facebook.react.uimanager.events.PointerEventHelper.POINTER_ENTER) == false) goto L31;
     */
    /* JADX WARN: Code restructure failed: missing block: B:40:0x0079, code lost:
        return kotlin.collections.CollectionsKt.e(createW3CPointerEvent(r0));
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private final java.util.List<com.facebook.react.bridge.WritableMap> createPointersEventData() {
        /*
            r4 = this;
            android.view.MotionEvent r0 = r4.motionEvent
            if (r0 == 0) goto L7a
            int r0 = r0.getActionIndex()
            java.lang.String r1 = r4._eventName
            r2 = 0
            if (r1 != 0) goto L13
            java.lang.String r1 = "_eventName"
            kotlin.jvm.internal.Intrinsics.throwUninitializedPropertyAccessException(r1)
            r1 = r2
        L13:
            int r3 = r1.hashCode()
            switch(r3) {
                case -1786514288: goto L68;
                case -1780335505: goto L5f;
                case -1304584214: goto L56;
                case -1304316135: goto L48;
                case -1304250340: goto L3f;
                case -1065042973: goto L36;
                case -992108237: goto L2d;
                case 383186882: goto L24;
                case 1343400710: goto L1b;
                default: goto L1a;
            }
        L1a:
            goto L70
        L1b:
            java.lang.String r3 = "topPointerOut"
            boolean r1 = r1.equals(r3)
            if (r1 != 0) goto L71
            goto L70
        L24:
            java.lang.String r0 = "topPointerCancel"
            boolean r0 = r1.equals(r0)
            if (r0 != 0) goto L51
            goto L70
        L2d:
            java.lang.String r3 = "topClick"
            boolean r1 = r1.equals(r3)
            if (r1 != 0) goto L71
            goto L70
        L36:
            java.lang.String r3 = "topPointerUp"
            boolean r1 = r1.equals(r3)
            if (r1 != 0) goto L71
            goto L70
        L3f:
            java.lang.String r3 = "topPointerOver"
            boolean r1 = r1.equals(r3)
            if (r1 != 0) goto L71
            goto L70
        L48:
            java.lang.String r0 = "topPointerMove"
            boolean r0 = r1.equals(r0)
            if (r0 != 0) goto L51
            goto L70
        L51:
            java.util.List r0 = r4.createW3CPointerEvents()
            return r0
        L56:
            java.lang.String r3 = "topPointerDown"
            boolean r1 = r1.equals(r3)
            if (r1 != 0) goto L71
            goto L70
        L5f:
            java.lang.String r3 = "topPointerLeave"
            boolean r1 = r1.equals(r3)
            if (r1 != 0) goto L71
            goto L70
        L68:
            java.lang.String r3 = "topPointerEnter"
            boolean r1 = r1.equals(r3)
            if (r1 != 0) goto L71
        L70:
            return r2
        L71:
            com.facebook.react.bridge.WritableMap r0 = r4.createW3CPointerEvent(r0)
            java.util.List r0 = kotlin.collections.CollectionsKt.e(r0)
            return r0
        L7a:
            java.lang.IllegalStateException r0 = new java.lang.IllegalStateException
            java.lang.String r1 = "Required value was null."
            r0.<init>(r1)
            throw r0
        */
        throw new UnsupportedOperationException("Method not decompiled: com.facebook.react.uimanager.events.PointerEvent.createPointersEventData():java.util.List");
    }

    /* JADX WARN: Code restructure failed: missing block: B:15:0x004e, code lost:
        if (r5 == r7.getPrimaryPointerId()) goto L15;
     */
    /* JADX WARN: Removed duplicated region for block: B:20:0x005c  */
    /* JADX WARN: Removed duplicated region for block: B:23:0x006e  */
    /* JADX WARN: Removed duplicated region for block: B:60:0x01bc  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private final com.facebook.react.bridge.WritableMap createW3CPointerEvent(int r20) {
        /*
            Method dump skipped, instructions count: 456
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.facebook.react.uimanager.events.PointerEvent.createW3CPointerEvent(int):com.facebook.react.bridge.WritableMap");
    }

    private final List<WritableMap> createW3CPointerEvents() {
        ArrayList arrayList = new ArrayList();
        MotionEvent motionEvent = this.motionEvent;
        if (motionEvent != null) {
            int pointerCount = motionEvent.getPointerCount();
            for (int i10 = 0; i10 < pointerCount; i10++) {
                arrayList.add(createW3CPointerEvent(i10));
            }
            return arrayList;
        }
        throw new IllegalStateException("Required value was null.");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Event.EventAnimationDriverMatchSpec eventAnimationDriverMatchSpec_delegate$lambda$1(final PointerEvent pointerEvent) {
        return new Event.EventAnimationDriverMatchSpec() { // from class: com.facebook.react.uimanager.events.g
            @Override // com.facebook.react.uimanager.events.Event.EventAnimationDriverMatchSpec
            public final boolean match(int i10, String str) {
                boolean eventAnimationDriverMatchSpec_delegate$lambda$1$lambda$0;
                eventAnimationDriverMatchSpec_delegate$lambda$1$lambda$0 = PointerEvent.eventAnimationDriverMatchSpec_delegate$lambda$1$lambda$0(PointerEvent.this, i10, str);
                return eventAnimationDriverMatchSpec_delegate$lambda$1$lambda$0;
            }
        };
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean eventAnimationDriverMatchSpec_delegate$lambda$1$lambda$0(PointerEvent pointerEvent, int i10, String eventName) {
        Intrinsics.checkNotNullParameter(eventName, "eventName");
        String str = pointerEvent._eventName;
        PointerEventState pointerEventState = null;
        if (str == null) {
            Intrinsics.throwUninitializedPropertyAccessException("_eventName");
            str = null;
        }
        if (!Intrinsics.areEqual(eventName, str)) {
            return false;
        }
        if (PointerEventHelper.isBubblingEvent(eventName)) {
            PointerEventState pointerEventState2 = pointerEvent.eventState;
            if (pointerEventState2 == null) {
                Intrinsics.throwUninitializedPropertyAccessException("eventState");
            } else {
                pointerEventState = pointerEventState2;
            }
            for (TouchTargetHelper.ViewTarget viewTarget : pointerEventState.getHitPathForActivePointer()) {
                if (viewTarget.getViewId() == i10) {
                    return true;
                }
            }
            return false;
        } else if (pointerEvent.getViewTag() != i10) {
            return false;
        } else {
            return true;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void init(String str, int i10, PointerEventState pointerEventState, MotionEvent motionEvent, short s10) {
        super.init(pointerEventState.getSurfaceId(), i10, motionEvent.getEventTime());
        this._eventName = str;
        this.motionEvent = MotionEvent.obtain(motionEvent);
        this.coalescingKey = s10;
        this.eventState = pointerEventState;
    }

    private final boolean isClickEvent() {
        String str = this._eventName;
        if (str == null) {
            Intrinsics.throwUninitializedPropertyAccessException("_eventName");
            str = null;
        }
        return Intrinsics.areEqual(str, PointerEventHelper.CLICK);
    }

    @NotNull
    public static final PointerEvent obtain(@NotNull String str, int i10, @NotNull PointerEventState pointerEventState, MotionEvent motionEvent) {
        return Companion.obtain(str, i10, pointerEventState, motionEvent);
    }

    @Override // com.facebook.react.uimanager.events.Event
    @jr.c
    public void dispatch(@NotNull RCTEventEmitter rctEventEmitter) {
        Intrinsics.checkNotNullParameter(rctEventEmitter, "rctEventEmitter");
        if (this.motionEvent == null) {
            ReactSoftExceptionLogger.logSoftException(TAG, new IllegalStateException("Cannot dispatch a Pointer that has no MotionEvent; the PointerEvent has been recycled"));
            return;
        }
        if (this.pointersEventData == null) {
            this.pointersEventData = createPointersEventData();
        }
        List<? extends WritableMap> list = this.pointersEventData;
        if (list != null) {
            boolean z10 = true;
            if (list.size() <= 1) {
                z10 = false;
            }
            for (WritableMap writableMap : list) {
                if (z10) {
                    writableMap = writableMap.copy();
                }
                int viewTag = getViewTag();
                String str = this._eventName;
                if (str == null) {
                    Intrinsics.throwUninitializedPropertyAccessException("_eventName");
                    str = null;
                }
                rctEventEmitter.receiveEvent(viewTag, str, writableMap);
            }
        }
    }

    @Override // com.facebook.react.uimanager.events.Event
    public void dispatchModern(@NotNull RCTModernEventEmitter rctEventEmitter) {
        boolean z10;
        boolean z11;
        Intrinsics.checkNotNullParameter(rctEventEmitter, "rctEventEmitter");
        if (this.motionEvent == null) {
            ReactSoftExceptionLogger.logSoftException(TAG, new IllegalStateException("Cannot dispatch a Pointer that has no MotionEvent; the PointerEvent has been recycled"));
            return;
        }
        if (this.pointersEventData == null) {
            this.pointersEventData = createPointersEventData();
        }
        List<? extends WritableMap> list = this.pointersEventData;
        if (list != null) {
            if (list != null) {
                if (list.size() > 1) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                for (WritableMap writableMap : list) {
                    if (z10) {
                        writableMap = writableMap.copy();
                    }
                    WritableMap writableMap2 = writableMap;
                    int surfaceId = getSurfaceId();
                    int viewTag = getViewTag();
                    String str = this._eventName;
                    String str2 = null;
                    if (str == null) {
                        Intrinsics.throwUninitializedPropertyAccessException("_eventName");
                        str = null;
                    }
                    short s10 = this.coalescingKey;
                    if (s10 != -1) {
                        z11 = true;
                    } else {
                        z11 = false;
                    }
                    String str3 = this._eventName;
                    if (str3 == null) {
                        Intrinsics.throwUninitializedPropertyAccessException("_eventName");
                    } else {
                        str2 = str3;
                    }
                    rctEventEmitter.receiveEvent(surfaceId, viewTag, str, z11, s10, writableMap2, PointerEventHelper.getEventCategory(str2));
                }
                return;
            }
            throw new IllegalStateException("Required value was null.");
        }
    }

    @Override // com.facebook.react.uimanager.events.Event
    public short getCoalescingKey() {
        return this.coalescingKey;
    }

    @Override // com.facebook.react.uimanager.events.Event
    @NotNull
    public Event.EventAnimationDriverMatchSpec getEventAnimationDriverMatchSpec() {
        return (Event.EventAnimationDriverMatchSpec) this.eventAnimationDriverMatchSpec$delegate.getValue();
    }

    @Override // com.facebook.react.uimanager.events.Event
    @NotNull
    public String getEventName() {
        String str = this._eventName;
        if (str == null) {
            Intrinsics.throwUninitializedPropertyAccessException("_eventName");
            return null;
        }
        return str;
    }

    @Override // com.facebook.react.uimanager.events.Event
    public void onDispose() {
        this.pointersEventData = null;
        MotionEvent motionEvent = this.motionEvent;
        this.motionEvent = null;
        if (motionEvent != null) {
            motionEvent.recycle();
        }
        try {
            EVENTS_POOL.release(this);
        } catch (IllegalStateException e10) {
            ReactSoftExceptionLogger.logSoftException(TAG, e10);
        }
    }

    private PointerEvent() {
        this.coalescingKey = UNSET_COALESCING_KEY;
        this.eventAnimationDriverMatchSpec$delegate = l.a(o.f32183i, new Function0() { // from class: com.facebook.react.uimanager.events.h
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Event.EventAnimationDriverMatchSpec eventAnimationDriverMatchSpec_delegate$lambda$1;
                eventAnimationDriverMatchSpec_delegate$lambda$1 = PointerEvent.eventAnimationDriverMatchSpec_delegate$lambda$1(PointerEvent.this);
                return eventAnimationDriverMatchSpec_delegate$lambda$1;
            }
        });
    }

    @NotNull
    public static final PointerEvent obtain(@NotNull String str, int i10, @NotNull PointerEventState pointerEventState, MotionEvent motionEvent, short s10) {
        return Companion.obtain(str, i10, pointerEventState, motionEvent, s10);
    }
}
