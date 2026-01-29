package com.facebook.react.uimanager;

import android.graphics.Rect;
import android.view.Choreographer;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewGroup;
import com.facebook.react.common.ReactConstants;
import com.facebook.react.uimanager.TouchTargetHelper;
import com.facebook.react.uimanager.events.EventDispatcher;
import com.facebook.react.uimanager.events.PointerEvent;
import com.facebook.react.uimanager.events.PointerEventHelper;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class JSPointerDispatcher {
    private static final float ONMOVE_EPSILON = 0.1f;
    private static final String TAG = "PointerEvents";
    private static final int UNSELECTED_VIEW_TAG = -1;
    private static final int UNSET_CHILD_VIEW_ID = -1;
    private static final int UNSET_POINTER_ID = -1;
    private static final int[] sRootScreenCoords = {0, 0};
    private Map<Integer, float[]> mLastEventCoordinatesByPointerId;
    private Map<Integer, List<TouchTargetHelper.ViewTarget>> mLastHitPathByPointerId;
    private final ViewGroup mRootViewGroup;
    private final Set<Integer> mHoveringPointerIds = new HashSet();
    private int mChildHandlingNativeGesture = -1;
    private int mPrimaryPointerId = -1;
    private int mCoalescingKey = 0;
    private int mLastButtonState = 0;
    private volatile long mLastActionDownEventTime = 0;
    private boolean mRunHoverExitNextFrame = true;
    private Map<Integer, List<TouchTargetHelper.ViewTarget>> mCurrentlyDownPointerIdsToHitPath = new HashMap();

    public JSPointerDispatcher(ViewGroup viewGroup) {
        this.mRootViewGroup = viewGroup;
    }

    private MotionEvent convertMotionToRootFrame(View view, MotionEvent motionEvent) {
        MotionEvent obtain = MotionEvent.obtain(motionEvent);
        int[] iArr = new int[2];
        this.mRootViewGroup.getLocationOnScreen(iArr);
        obtain.setLocation(motionEvent.getRawX() - iArr[0], motionEvent.getRawY() - iArr[1]);
        return obtain;
    }

    private PointerEvent.PointerEventState createEventState(int i10, MotionEvent motionEvent) {
        HashMap hashMap = new HashMap();
        HashMap hashMap2 = new HashMap();
        HashMap hashMap3 = new HashMap();
        HashMap hashMap4 = new HashMap();
        for (int i11 = 0; i11 < motionEvent.getPointerCount(); i11++) {
            float[] fArr = new float[2];
            float[] fArr2 = {motionEvent.getX(i11), motionEvent.getY(i11)};
            List<TouchTargetHelper.ViewTarget> findTargetPathAndCoordinatesForTouch = TouchTargetHelper.findTargetPathAndCoordinatesForTouch(fArr2[0], fArr2[1], this.mRootViewGroup, fArr);
            int pointerId = motionEvent.getPointerId(i11);
            hashMap.put(Integer.valueOf(pointerId), fArr);
            hashMap2.put(Integer.valueOf(pointerId), findTargetPathAndCoordinatesForTouch);
            hashMap3.put(Integer.valueOf(pointerId), fArr2);
            hashMap4.put(Integer.valueOf(pointerId), eventCoordsToScreenCoords(fArr2));
        }
        return new PointerEvent.PointerEventState(this.mPrimaryPointerId, i10, this.mLastButtonState, UIManagerHelper.getSurfaceId(this.mRootViewGroup), hashMap, hashMap2, hashMap3, hashMap4, this.mHoveringPointerIds);
    }

    private static void debugPrintHitPath(List<TouchTargetHelper.ViewTarget> list) {
        StringBuilder sb2 = new StringBuilder("hitPath: ");
        for (TouchTargetHelper.ViewTarget viewTarget : list) {
            sb2.append(String.format("%d, ", Integer.valueOf(viewTarget.getViewId())));
        }
        p8.a.b(TAG, sb2.toString());
    }

    private void dispatchCancelEventForTarget(View view, PointerEvent.PointerEventState pointerEventState, MotionEvent motionEvent, EventDispatcher eventDispatcher) {
        boolean z10;
        if (this.mChildHandlingNativeGesture == -1) {
            z10 = true;
        } else {
            z10 = false;
        }
        db.a.b(z10, "Expected to not have already sent a cancel for this gesture");
        List<TouchTargetHelper.ViewTarget> list = pointerEventState.getHitPathByPointerId().get(Integer.valueOf(pointerEventState.getActivePointerId()));
        if (!list.isEmpty() && view != null) {
            if (isAnyoneListeningForBubblingEvent(list, PointerEventHelper.EVENT.CANCEL, PointerEventHelper.EVENT.CANCEL_CAPTURE)) {
                int viewId = list.get(0).getViewId();
                int[] childOffsetRelativeToRoot = getChildOffsetRelativeToRoot(view);
                ((EventDispatcher) db.a.c(eventDispatcher)).dispatchEvent(PointerEvent.obtain(PointerEventHelper.POINTER_CANCEL, viewId, normalizeToRoot(pointerEventState, childOffsetRelativeToRoot[0], childOffsetRelativeToRoot[1]), motionEvent));
            }
            incrementCoalescingKey();
            this.mPrimaryPointerId = -1;
        }
    }

    private static void dispatchEventForViewTargets(String str, PointerEvent.PointerEventState pointerEventState, MotionEvent motionEvent, List<TouchTargetHelper.ViewTarget> list, EventDispatcher eventDispatcher) {
        for (TouchTargetHelper.ViewTarget viewTarget : list) {
            eventDispatcher.dispatchEvent(PointerEvent.obtain(str, viewTarget.getViewId(), pointerEventState, motionEvent));
        }
    }

    private float[] eventCoordsToScreenCoords(float[] fArr) {
        ViewGroup viewGroup = this.mRootViewGroup;
        int[] iArr = sRootScreenCoords;
        viewGroup.getLocationOnScreen(iArr);
        return new float[]{fArr[0] + iArr[0], fArr[1] + iArr[1]};
    }

    private static List<TouchTargetHelper.ViewTarget> filterByShouldDispatch(List<TouchTargetHelper.ViewTarget> list, PointerEventHelper.EVENT event, PointerEventHelper.EVENT event2, boolean z10) {
        ArrayList arrayList = new ArrayList(list);
        if (!z10) {
            boolean z11 = false;
            for (int size = list.size() - 1; size >= 0; size--) {
                View view = list.get(size).getView();
                if (!z11 && !PointerEventHelper.isListening(view, event2) && !PointerEventHelper.isListening(view, event)) {
                    arrayList.remove(size);
                } else if (!z11 && PointerEventHelper.isListening(view, event2)) {
                    z11 = true;
                }
            }
        }
        return arrayList;
    }

    private static List<TouchTargetHelper.ViewTarget> findHitPathIntersection(List<TouchTargetHelper.ViewTarget> list, List<TouchTargetHelper.ViewTarget> list2) {
        if (list.isEmpty()) {
            return new ArrayList();
        }
        if (list2.isEmpty()) {
            return new ArrayList();
        }
        HashSet hashSet = new HashSet(list);
        ArrayList arrayList = new ArrayList();
        for (TouchTargetHelper.ViewTarget viewTarget : list2) {
            if (hashSet.contains(viewTarget)) {
                arrayList.add(viewTarget);
            }
        }
        return arrayList;
    }

    private int[] getChildOffsetRelativeToRoot(View view) {
        Rect rect = new Rect(0, 0, 1, 1);
        this.mRootViewGroup.offsetDescendantRectToMyCoords(view, rect);
        return new int[]{rect.top, rect.left};
    }

    private short getCoalescingKey() {
        return (short) (65535 & this.mCoalescingKey);
    }

    private void handleHitStateDivergence(int i10, PointerEvent.PointerEventState pointerEventState, MotionEvent motionEvent, EventDispatcher eventDispatcher) {
        List<TouchTargetHelper.ViewTarget> arrayList;
        List<TouchTargetHelper.ViewTarget> arrayList2;
        int activePointerId = pointerEventState.getActivePointerId();
        if (i10 != -1) {
            arrayList = pointerEventState.getHitPathByPointerId().get(Integer.valueOf(activePointerId));
        } else {
            arrayList = new ArrayList<>();
        }
        Map<Integer, List<TouchTargetHelper.ViewTarget>> map = this.mLastHitPathByPointerId;
        if (map != null && map.containsKey(Integer.valueOf(activePointerId))) {
            arrayList2 = this.mLastHitPathByPointerId.get(Integer.valueOf(activePointerId));
        } else {
            arrayList2 = new ArrayList<>();
        }
        int i11 = 0;
        boolean z10 = false;
        boolean z11 = false;
        while (i11 < Math.min(arrayList.size(), arrayList2.size()) && arrayList.get((arrayList.size() - 1) - i11).equals(arrayList2.get((arrayList2.size() - 1) - i11))) {
            View view = arrayList.get((arrayList.size() - 1) - i11).getView();
            if (!z10 && PointerEventHelper.isListening(view, PointerEventHelper.EVENT.ENTER_CAPTURE)) {
                z10 = true;
            }
            if (!z11 && PointerEventHelper.isListening(view, PointerEventHelper.EVENT.LEAVE_CAPTURE)) {
                z11 = true;
            }
            i11++;
        }
        if (i11 < Math.max(arrayList.size(), arrayList2.size())) {
            incrementCoalescingKey();
            if (arrayList2.size() > 0) {
                int viewId = arrayList2.get(0).getViewId();
                if (isAnyoneListeningForBubblingEvent(arrayList2, PointerEventHelper.EVENT.OUT, PointerEventHelper.EVENT.OUT_CAPTURE)) {
                    eventDispatcher.dispatchEvent(PointerEvent.obtain(PointerEventHelper.POINTER_OUT, viewId, pointerEventState, motionEvent));
                }
                List<TouchTargetHelper.ViewTarget> filterByShouldDispatch = filterByShouldDispatch(arrayList2.subList(0, arrayList2.size() - i11), PointerEventHelper.EVENT.LEAVE, PointerEventHelper.EVENT.LEAVE_CAPTURE, z11);
                if (filterByShouldDispatch.size() > 0) {
                    dispatchEventForViewTargets(PointerEventHelper.POINTER_LEAVE, pointerEventState, motionEvent, filterByShouldDispatch, eventDispatcher);
                }
            }
            if (isAnyoneListeningForBubblingEvent(arrayList, PointerEventHelper.EVENT.OVER, PointerEventHelper.EVENT.OVER_CAPTURE)) {
                eventDispatcher.dispatchEvent(PointerEvent.obtain(PointerEventHelper.POINTER_OVER, i10, pointerEventState, motionEvent));
            }
            List<TouchTargetHelper.ViewTarget> filterByShouldDispatch2 = filterByShouldDispatch(arrayList.subList(0, arrayList.size() - i11), PointerEventHelper.EVENT.ENTER, PointerEventHelper.EVENT.ENTER_CAPTURE, z10);
            if (filterByShouldDispatch2.size() > 0) {
                Collections.reverse(filterByShouldDispatch2);
                dispatchEventForViewTargets(PointerEventHelper.POINTER_ENTER, pointerEventState, motionEvent, filterByShouldDispatch2, eventDispatcher);
            }
        }
        HashMap hashMap = new HashMap(pointerEventState.getHitPathByPointerId());
        if (i10 == -1) {
            hashMap.remove(Integer.valueOf(activePointerId));
        }
        this.mLastHitPathByPointerId = hashMap;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void handleMotionEventHelper(MotionEvent motionEvent, EventDispatcher eventDispatcher, boolean z10) {
        boolean z11;
        int viewId;
        View view;
        List<TouchTargetHelper.ViewTarget> list;
        int actionMasked = motionEvent.getActionMasked();
        int pointerId = motionEvent.getPointerId(motionEvent.getActionIndex());
        if (actionMasked == 0) {
            this.mLastActionDownEventTime = motionEvent.getEventTime();
            this.mPrimaryPointerId = motionEvent.getPointerId(0);
        } else if (actionMasked == 7) {
            this.mHoveringPointerIds.add(Integer.valueOf(pointerId));
        }
        PointerEvent.PointerEventState createEventState = createEventState(pointerId, motionEvent);
        if (z10 && actionMasked == 10) {
            z11 = true;
        } else {
            z11 = false;
        }
        if (z11) {
            Map<Integer, List<TouchTargetHelper.ViewTarget>> map = this.mLastHitPathByPointerId;
            if (map != null) {
                list = map.get(Integer.valueOf(createEventState.getActivePointerId()));
            } else {
                list = null;
            }
            if (list != null && !list.isEmpty()) {
                TouchTargetHelper.ViewTarget viewTarget = list.get(list.size() - 1);
                viewId = viewTarget.getViewId();
                view = viewTarget.getView();
                createEventState.getHitPathByPointerId().put(Integer.valueOf(pointerId), new ArrayList());
            } else {
                return;
            }
        } else {
            List<TouchTargetHelper.ViewTarget> list2 = createEventState.getHitPathByPointerId().get(Integer.valueOf(pointerId));
            if (list2 != null && !list2.isEmpty()) {
                TouchTargetHelper.ViewTarget viewTarget2 = list2.get(0);
                viewId = viewTarget2.getViewId();
                view = viewTarget2.getView();
            } else {
                return;
            }
        }
        handleHitStateDivergence(viewId, createEventState, motionEvent, eventDispatcher);
        switch (actionMasked) {
            case 0:
            case 5:
                onDown(viewId, createEventState, motionEvent, eventDispatcher);
                break;
            case 1:
            case 6:
                incrementCoalescingKey();
                onUp(viewId, createEventState, motionEvent, eventDispatcher);
                break;
            case 2:
                onMove(viewId, createEventState, motionEvent, eventDispatcher);
                break;
            case 3:
                dispatchCancelEventForTarget(view, createEventState, motionEvent, eventDispatcher);
                handleHitStateDivergence(-1, createEventState, motionEvent, eventDispatcher);
                break;
            case 4:
            case 8:
            default:
                p8.a.J(ReactConstants.TAG, "Motion Event was ignored. Action=" + actionMasked + " Target=" + viewId);
                return;
            case 7:
                float[] fArr = createEventState.getEventCoordinatesByPointerId().get(Integer.valueOf(pointerId));
                Map<Integer, float[]> map2 = this.mLastEventCoordinatesByPointerId;
                if (qualifiedMove(fArr, (map2 == null || !map2.containsKey(Integer.valueOf(pointerId))) ? new float[]{0.0f, 0.0f} : this.mLastEventCoordinatesByPointerId.get(Integer.valueOf(pointerId)))) {
                    onMove(viewId, createEventState, motionEvent, eventDispatcher);
                    break;
                } else {
                    return;
                }
            case 9:
                return;
            case 10:
                if (z11) {
                    onMove(viewId, createEventState, motionEvent, eventDispatcher);
                    break;
                }
                break;
        }
        this.mLastEventCoordinatesByPointerId = new HashMap(createEventState.getEventCoordinatesByPointerId());
        this.mLastButtonState = motionEvent.getButtonState();
        this.mHoveringPointerIds.retainAll(this.mLastEventCoordinatesByPointerId.keySet());
    }

    private void incrementCoalescingKey() {
        this.mCoalescingKey = (this.mCoalescingKey + 1) % Integer.MAX_VALUE;
    }

    /* JADX WARN: Removed duplicated region for block: B:5:0x000a  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private static boolean isAnyoneListeningForBubblingEvent(java.util.List<com.facebook.react.uimanager.TouchTargetHelper.ViewTarget> r2, com.facebook.react.uimanager.events.PointerEventHelper.EVENT r3, com.facebook.react.uimanager.events.PointerEventHelper.EVENT r4) {
        /*
            java.util.Iterator r2 = r2.iterator()
        L4:
            boolean r0 = r2.hasNext()
            if (r0 == 0) goto L26
            java.lang.Object r0 = r2.next()
            com.facebook.react.uimanager.TouchTargetHelper$ViewTarget r0 = (com.facebook.react.uimanager.TouchTargetHelper.ViewTarget) r0
            android.view.View r1 = r0.getView()
            boolean r1 = com.facebook.react.uimanager.events.PointerEventHelper.isListening(r1, r3)
            if (r1 != 0) goto L24
            android.view.View r0 = r0.getView()
            boolean r0 = com.facebook.react.uimanager.events.PointerEventHelper.isListening(r0, r4)
            if (r0 == 0) goto L4
        L24:
            r2 = 1
            return r2
        L26:
            r2 = 0
            return r2
        */
        throw new UnsupportedOperationException("Method not decompiled: com.facebook.react.uimanager.JSPointerDispatcher.isAnyoneListeningForBubblingEvent(java.util.List, com.facebook.react.uimanager.events.PointerEventHelper$EVENT, com.facebook.react.uimanager.events.PointerEventHelper$EVENT):boolean");
    }

    private PointerEvent.PointerEventState normalizeToRoot(PointerEvent.PointerEventState pointerEventState, float f10, float f11) {
        HashMap hashMap = new HashMap(pointerEventState.getOffsetByPointerId());
        HashMap hashMap2 = new HashMap(pointerEventState.getEventCoordinatesByPointerId());
        HashMap hashMap3 = new HashMap(pointerEventState.getScreenCoordinatesByPointerId());
        float[] fArr = {f10, f11};
        for (Map.Entry entry : hashMap.entrySet()) {
            entry.setValue(fArr);
        }
        float[] fArr2 = {0.0f, 0.0f};
        for (Map.Entry entry2 : hashMap2.entrySet()) {
            entry2.setValue(fArr2);
        }
        float[] eventCoordsToScreenCoords = eventCoordsToScreenCoords(fArr);
        for (Map.Entry entry3 : hashMap3.entrySet()) {
            entry3.setValue(eventCoordsToScreenCoords);
        }
        return new PointerEvent.PointerEventState(pointerEventState.getPrimaryPointerId(), pointerEventState.getActivePointerId(), pointerEventState.getLastButtonState(), pointerEventState.getSurfaceId(), hashMap, new HashMap(pointerEventState.getHitPathByPointerId()), hashMap2, hashMap3, new HashSet(pointerEventState.getHoveringPointerIds()));
    }

    private void onDown(int i10, PointerEvent.PointerEventState pointerEventState, MotionEvent motionEvent, EventDispatcher eventDispatcher) {
        List<TouchTargetHelper.ViewTarget> list = pointerEventState.getHitPathByPointerId().get(Integer.valueOf(pointerEventState.getActivePointerId()));
        incrementCoalescingKey();
        if (!this.mHoveringPointerIds.contains(Integer.valueOf(pointerEventState.getActivePointerId()))) {
            if (isAnyoneListeningForBubblingEvent(list, PointerEventHelper.EVENT.OVER, PointerEventHelper.EVENT.OVER_CAPTURE)) {
                eventDispatcher.dispatchEvent(PointerEvent.obtain(PointerEventHelper.POINTER_OVER, i10, pointerEventState, motionEvent));
            }
            List<TouchTargetHelper.ViewTarget> filterByShouldDispatch = filterByShouldDispatch(list, PointerEventHelper.EVENT.ENTER, PointerEventHelper.EVENT.ENTER_CAPTURE, false);
            Collections.reverse(filterByShouldDispatch);
            dispatchEventForViewTargets(PointerEventHelper.POINTER_ENTER, pointerEventState, motionEvent, filterByShouldDispatch, eventDispatcher);
        }
        if (isAnyoneListeningForBubblingEvent(list, PointerEventHelper.EVENT.CLICK, PointerEventHelper.EVENT.CLICK_CAPTURE)) {
            this.mCurrentlyDownPointerIdsToHitPath.put(Integer.valueOf(pointerEventState.getActivePointerId()), new ArrayList(list));
        }
        if (isAnyoneListeningForBubblingEvent(list, PointerEventHelper.EVENT.DOWN, PointerEventHelper.EVENT.DOWN_CAPTURE)) {
            eventDispatcher.dispatchEvent(PointerEvent.obtain(PointerEventHelper.POINTER_DOWN, i10, pointerEventState, motionEvent));
        }
    }

    private void onMove(int i10, PointerEvent.PointerEventState pointerEventState, MotionEvent motionEvent, EventDispatcher eventDispatcher) {
        if (isAnyoneListeningForBubblingEvent(pointerEventState.getHitPathByPointerId().get(Integer.valueOf(pointerEventState.getActivePointerId())), PointerEventHelper.EVENT.MOVE, PointerEventHelper.EVENT.MOVE_CAPTURE)) {
            eventDispatcher.dispatchEvent(PointerEvent.obtain(PointerEventHelper.POINTER_MOVE, i10, pointerEventState, motionEvent, getCoalescingKey()));
        }
    }

    private void onUp(int i10, PointerEvent.PointerEventState pointerEventState, MotionEvent motionEvent, EventDispatcher eventDispatcher) {
        int activePointerId = pointerEventState.getActivePointerId();
        List<TouchTargetHelper.ViewTarget> list = pointerEventState.getHitPathByPointerId().get(Integer.valueOf(activePointerId));
        if (isAnyoneListeningForBubblingEvent(list, PointerEventHelper.EVENT.UP, PointerEventHelper.EVENT.UP_CAPTURE)) {
            eventDispatcher.dispatchEvent(PointerEvent.obtain(PointerEventHelper.POINTER_UP, i10, pointerEventState, motionEvent));
        }
        if (!this.mHoveringPointerIds.contains(Integer.valueOf(activePointerId))) {
            if (isAnyoneListeningForBubblingEvent(list, PointerEventHelper.EVENT.OUT, PointerEventHelper.EVENT.OUT_CAPTURE)) {
                eventDispatcher.dispatchEvent(PointerEvent.obtain(PointerEventHelper.POINTER_OUT, i10, pointerEventState, motionEvent));
            }
            dispatchEventForViewTargets(PointerEventHelper.POINTER_LEAVE, pointerEventState, motionEvent, filterByShouldDispatch(list, PointerEventHelper.EVENT.LEAVE, PointerEventHelper.EVENT.LEAVE_CAPTURE, false), eventDispatcher);
        }
        List<TouchTargetHelper.ViewTarget> remove = this.mCurrentlyDownPointerIdsToHitPath.remove(Integer.valueOf(activePointerId));
        if (remove != null && isAnyoneListeningForBubblingEvent(list, PointerEventHelper.EVENT.CLICK, PointerEventHelper.EVENT.CLICK_CAPTURE)) {
            List<TouchTargetHelper.ViewTarget> findHitPathIntersection = findHitPathIntersection(remove, list);
            if (!findHitPathIntersection.isEmpty()) {
                eventDispatcher.dispatchEvent(PointerEvent.obtain(PointerEventHelper.CLICK, findHitPathIntersection.get(0).getViewId(), pointerEventState, motionEvent));
            }
        }
        if (motionEvent.getActionMasked() == 1) {
            this.mPrimaryPointerId = -1;
        }
        this.mHoveringPointerIds.remove(Integer.valueOf(activePointerId));
    }

    private static boolean qualifiedMove(float[] fArr, float[] fArr2) {
        if (Math.abs(fArr2[0] - fArr[0]) <= ONMOVE_EPSILON && Math.abs(fArr2[1] - fArr[1]) <= ONMOVE_EPSILON) {
            return false;
        }
        return true;
    }

    public void handleMotionEvent(final MotionEvent motionEvent, final EventDispatcher eventDispatcher, final boolean z10) {
        if (this.mChildHandlingNativeGesture != -1) {
            return;
        }
        if (z10 && this.mRunHoverExitNextFrame && motionEvent.getActionMasked() == 10) {
            this.mRunHoverExitNextFrame = false;
            Choreographer.getInstance().postFrameCallback(new Choreographer.FrameCallback() { // from class: com.facebook.react.uimanager.JSPointerDispatcher.1
                @Override // android.view.Choreographer.FrameCallback
                public void doFrame(long j10) {
                    if (JSPointerDispatcher.this.mLastActionDownEventTime != motionEvent.getEventTime()) {
                        JSPointerDispatcher.this.handleMotionEventHelper(motionEvent, eventDispatcher, z10);
                    }
                    JSPointerDispatcher.this.mRunHoverExitNextFrame = true;
                }
            });
            return;
        }
        handleMotionEventHelper(motionEvent, eventDispatcher, z10);
    }

    public void onChildEndedNativeGesture() {
        this.mChildHandlingNativeGesture = -1;
    }

    public void onChildStartedNativeGesture(View view, MotionEvent motionEvent, EventDispatcher eventDispatcher) {
        if (this.mChildHandlingNativeGesture == -1 && view != null) {
            MotionEvent convertMotionToRootFrame = convertMotionToRootFrame(view, motionEvent);
            convertMotionToRootFrame.setAction(3);
            handleMotionEvent(convertMotionToRootFrame, eventDispatcher, false);
            this.mChildHandlingNativeGesture = view.getId();
        }
    }
}
