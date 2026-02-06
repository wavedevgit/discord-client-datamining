package com.facebook.react.uimanager;

import android.annotation.SuppressLint;
import android.graphics.Matrix;
import android.graphics.PointF;
import android.graphics.Rect;
import android.view.View;
import android.view.ViewGroup;
import android.view.ViewParent;
import com.facebook.react.bridge.UiThreadUtil;
import com.facebook.react.common.ReactConstants;
import com.facebook.react.touch.ReactHitSlopView;
import com.facebook.react.uimanager.common.ViewUtil;
import java.util.ArrayList;
import java.util.EnumSet;
import java.util.List;
import kotlin.Metadata;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000n\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0014\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0007\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0015\n\u0002\b\u0004\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010!\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0004\n\u0002\u0010\u0002\n\u0002\b\u000b\bÆ\u0002\u0018\u00002\u00020\u0001:\u000223B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J \u0010\u000b\u001a\u00020\f2\u0006\u0010\r\u001a\u00020\u000e2\u0006\u0010\u000f\u001a\u00020\u000e2\u0006\u0010\u0010\u001a\u00020\u0011H\u0007J*\u0010\u000b\u001a\u00020\f2\u0006\u0010\r\u001a\u00020\u000e2\u0006\u0010\u000f\u001a\u00020\u000e2\u0006\u0010\u0010\u001a\u00020\u00112\b\u0010\u0012\u001a\u0004\u0018\u00010\u0013H\u0007J2\u0010\u0014\u001a\u00020\f2\u0006\u0010\r\u001a\u00020\u000e2\u0006\u0010\u000f\u001a\u00020\u000e2\u0006\u0010\u0010\u001a\u00020\u00112\u0006\u0010\u0015\u001a\u00020\u00052\b\u0010\u0016\u001a\u0004\u0018\u00010\u0013H\u0007J.\u0010\u0017\u001a\b\u0012\u0004\u0012\u00020\u00190\u00182\u0006\u0010\r\u001a\u00020\u000e2\u0006\u0010\u000f\u001a\u00020\u000e2\u0006\u0010\u0010\u001a\u00020\u00112\u0006\u0010\u0015\u001a\u00020\u0005H\u0007J\u0014\u0010\u001a\u001a\u0004\u0018\u00010\u001b2\b\u0010\u001c\u001a\u0004\u0018\u00010\u001bH\u0003J8\u0010\u001d\u001a\u0004\u0018\u00010\u001b2\u0006\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u001c\u001a\u00020\u001b2\f\u0010\u001e\u001a\b\u0012\u0004\u0012\u00020 0\u001f2\u000e\u0010!\u001a\n\u0012\u0004\u0012\u00020\u0019\u0018\u00010\"H\u0002J \u0010#\u001a\u00020$2\u0006\u0010%\u001a\u00020\u000e2\u0006\u0010&\u001a\u00020\u000e2\u0006\u0010\u001c\u001a\u00020\u001bH\u0002J \u0010'\u001a\u00020$2\u0006\u0010%\u001a\u00020\u000e2\u0006\u0010&\u001a\u00020\u000e2\u0006\u0010\u001c\u001a\u00020\u001bH\u0002J0\u0010(\u001a\u00020)2\u0006\u0010%\u001a\u00020\u000e2\u0006\u0010&\u001a\u00020\u000e2\u0006\u0010*\u001a\u00020\u00112\u0006\u0010+\u001a\u00020\u001b2\u0006\u0010,\u001a\u00020\u0007H\u0002J,\u0010-\u001a\u0004\u0018\u00010\u001b2\u0006\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u001c\u001a\u00020\u001b2\u0010\b\u0002\u0010!\u001a\n\u0012\u0004\u0012\u00020\u0019\u0018\u00010\"H\u0002J \u0010.\u001a\u00020\f2\u0006\u0010/\u001a\u00020\u001b2\u0006\u00100\u001a\u00020\u000e2\u0006\u00101\u001a\u00020\u000eH\u0002R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0007X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\b\u001a\u00020\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\t\u001a\u00020\nX\u0082\u0004¢\u0006\u0002\n\u0000¨\u00064"}, d2 = {"Lcom/facebook/react/uimanager/TouchTargetHelper;", "", "<init>", "()V", "eventCoords", "", "tempPoint", "Landroid/graphics/PointF;", "matrixTransformCoords", "inverseMatrix", "Landroid/graphics/Matrix;", "findTargetTagForTouch", "", "eventX", "", "eventY", "viewGroup", "Landroid/view/ViewGroup;", "nativeViewId", "", "findTargetTagAndCoordinatesForTouch", "viewCoords", "nativeViewTag", "findTargetPathAndCoordinatesForTouch", "", "Lcom/facebook/react/uimanager/TouchTargetHelper$ViewTarget;", "findClosestReactAncestor", "Landroid/view/View;", "view", "findTouchTargetView", "allowReturnTouchTargetTypes", "Ljava/util/EnumSet;", "Lcom/facebook/react/uimanager/TouchTargetHelper$TouchTargetReturnType;", "pathAccumulator", "", "isTouchPointInView", "", "x", "y", "isTouchPointInViewWithOverflowInset", "getChildPoint", "", "parent", "child", "outLocalPoint", "findTouchTargetViewWithPointerEvents", "getTouchTargetForView", "targetView", "viewX", "viewY", "TouchTargetReturnType", "ViewTarget", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nTouchTargetHelper.kt\nKotlin\n*S Kotlin\n*F\n+ 1 TouchTargetHelper.kt\ncom/facebook/react/uimanager/TouchTargetHelper\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,436:1\n1#2:437\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class TouchTargetHelper {
    @NotNull
    public static final TouchTargetHelper INSTANCE = new TouchTargetHelper();
    @NotNull
    private static final float[] eventCoords = new float[2];
    @NotNull
    private static final PointF tempPoint = new PointF();
    @NotNull
    private static final float[] matrixTransformCoords = new float[2];
    @NotNull
    private static final Matrix inverseMatrix = new Matrix();

    /* JADX INFO: Access modifiers changed from: private */
    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    @Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\u0005\b\u0082\u0081\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00000\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003j\u0002\b\u0004j\u0002\b\u0005¨\u0006\u0006"}, d2 = {"Lcom/facebook/react/uimanager/TouchTargetHelper$TouchTargetReturnType;", "", "<init>", "(Ljava/lang/String;I)V", "SELF", "CHILD", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class TouchTargetReturnType {
        private static final /* synthetic */ EnumEntries $ENTRIES;
        private static final /* synthetic */ TouchTargetReturnType[] $VALUES;
        public static final TouchTargetReturnType SELF = new TouchTargetReturnType("SELF", 0);
        public static final TouchTargetReturnType CHILD = new TouchTargetReturnType("CHILD", 1);

        private static final /* synthetic */ TouchTargetReturnType[] $values() {
            return new TouchTargetReturnType[]{SELF, CHILD};
        }

        static {
            TouchTargetReturnType[] $values = $values();
            $VALUES = $values;
            $ENTRIES = xr.a.a($values);
        }

        private TouchTargetReturnType(String str, int i10) {
        }

        @NotNull
        public static EnumEntries getEntries() {
            return $ENTRIES;
        }

        public static TouchTargetReturnType valueOf(String str) {
            return (TouchTargetReturnType) Enum.valueOf(TouchTargetReturnType.class, str);
        }

        public static TouchTargetReturnType[] values() {
            return (TouchTargetReturnType[]) $VALUES.clone();
        }
    }

    @Metadata(d1 = {"\u0000 \n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0010\u000b\n\u0002\b\u0003\u0018\u00002\u00020\u0001B\u001b\b\u0000\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005¢\u0006\u0004\b\u0006\u0010\u0007J\u0006\u0010\b\u001a\u00020\u0003J\b\u0010\t\u001a\u0004\u0018\u00010\u0005J\u0013\u0010\n\u001a\u00020\u000b2\b\u0010\f\u001a\u0004\u0018\u00010\u0001H\u0096\u0002J\b\u0010\r\u001a\u00020\u0003H\u0016R\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u0010\u0010\u0004\u001a\u0004\u0018\u00010\u0005X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u000e"}, d2 = {"Lcom/facebook/react/uimanager/TouchTargetHelper$ViewTarget;", "", "viewId", "", "view", "Landroid/view/View;", "<init>", "(ILandroid/view/View;)V", "getViewId", "getView", "equals", "", "other", "hashCode", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class ViewTarget {
        private final View view;
        private final int viewId;

        public ViewTarget(int i10, View view) {
            this.viewId = i10;
            this.view = view;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof ViewTarget) && ((ViewTarget) obj).getViewId() == this.viewId) {
                return true;
            }
            return false;
        }

        public final View getView() {
            return this.view;
        }

        public final int getViewId() {
            return this.viewId;
        }

        public int hashCode() {
            return Integer.hashCode(this.viewId);
        }
    }

    @Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public /* synthetic */ class WhenMappings {
        public static final /* synthetic */ int[] $EnumSwitchMapping$0;

        static {
            int[] iArr = new int[PointerEvents.values().length];
            try {
                iArr[PointerEvents.AUTO.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[PointerEvents.BOX_ONLY.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[PointerEvents.NONE.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[PointerEvents.BOX_NONE.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            $EnumSwitchMapping$0 = iArr;
        }
    }

    private TouchTargetHelper() {
    }

    @SuppressLint({"ResourceType"})
    private final View findClosestReactAncestor(View view) {
        while (view != null && view.getId() <= 0) {
            ViewParent parent = view.getParent();
            if (parent instanceof View) {
                view = (View) parent;
            } else {
                view = null;
            }
        }
        return view;
    }

    @SuppressLint({"ResourceType"})
    @NotNull
    public static final List<ViewTarget> findTargetPathAndCoordinatesForTouch(float f10, float f11, @NotNull ViewGroup viewGroup, @NotNull float[] viewCoords) {
        int touchTargetForView;
        Intrinsics.checkNotNullParameter(viewGroup, "viewGroup");
        Intrinsics.checkNotNullParameter(viewCoords, "viewCoords");
        UiThreadUtil.assertOnUiThread();
        viewCoords[0] = f10;
        viewCoords[1] = f11;
        ArrayList arrayList = new ArrayList();
        View findTouchTargetViewWithPointerEvents = INSTANCE.findTouchTargetViewWithPointerEvents(viewCoords, viewGroup, arrayList);
        if (findTouchTargetViewWithPointerEvents != null) {
            int i10 = 0;
            while (findTouchTargetViewWithPointerEvents != null && findTouchTargetViewWithPointerEvents.getId() <= 0) {
                ViewParent parent = findTouchTargetViewWithPointerEvents.getParent();
                if (parent instanceof View) {
                    findTouchTargetViewWithPointerEvents = (View) parent;
                } else {
                    findTouchTargetViewWithPointerEvents = null;
                }
                i10++;
            }
            if (i10 > 0 && i10 <= arrayList.size()) {
                arrayList.subList(i10, arrayList.size());
            }
            if (findTouchTargetViewWithPointerEvents != null && (touchTargetForView = INSTANCE.getTouchTargetForView(findTouchTargetViewWithPointerEvents, viewCoords[0], viewCoords[1])) != findTouchTargetViewWithPointerEvents.getId()) {
                arrayList.add(0, new ViewTarget(touchTargetForView, null));
            }
        }
        return arrayList;
    }

    public static final int findTargetTagAndCoordinatesForTouch(float f10, float f11, @NotNull ViewGroup viewGroup, @NotNull float[] viewCoords, int[] iArr) {
        View findClosestReactAncestor;
        Intrinsics.checkNotNullParameter(viewGroup, "viewGroup");
        Intrinsics.checkNotNullParameter(viewCoords, "viewCoords");
        UiThreadUtil.assertOnUiThread();
        int id2 = viewGroup.getId();
        viewCoords[0] = f10;
        viewCoords[1] = f11;
        TouchTargetHelper touchTargetHelper = INSTANCE;
        View findTouchTargetViewWithPointerEvents = touchTargetHelper.findTouchTargetViewWithPointerEvents(viewCoords, viewGroup, null);
        if (findTouchTargetViewWithPointerEvents != null && (findClosestReactAncestor = touchTargetHelper.findClosestReactAncestor(findTouchTargetViewWithPointerEvents)) != null) {
            if (iArr != null) {
                iArr[0] = findClosestReactAncestor.getId();
            }
            return touchTargetHelper.getTouchTargetForView(findClosestReactAncestor, viewCoords[0], viewCoords[1]);
        }
        return id2;
    }

    public static final int findTargetTagForTouch(float f10, float f11, @NotNull ViewGroup viewGroup) {
        Intrinsics.checkNotNullParameter(viewGroup, "viewGroup");
        return findTargetTagAndCoordinatesForTouch(f10, f11, viewGroup, eventCoords, null);
    }

    private final View findTouchTargetView(float[] fArr, View view, EnumSet<TouchTargetReturnType> enumSet, List<ViewTarget> list) {
        ReactZIndexedViewGroup reactZIndexedViewGroup;
        int i10;
        if (enumSet.contains(TouchTargetReturnType.CHILD) && (view instanceof ViewGroup)) {
            if (!isTouchPointInView(fArr[0], fArr[1], view)) {
                if (view instanceof ReactOverflowViewWithInset) {
                    if (ViewUtil.getUIManagerType(view.getId()) == 2 && !isTouchPointInViewWithOverflowInset(fArr[0], fArr[1], view)) {
                        return null;
                    }
                    String overflow = ((ReactOverflowView) view).getOverflow();
                    if (Intrinsics.areEqual(ViewProps.HIDDEN, overflow) || Intrinsics.areEqual(ViewProps.SCROLL, overflow)) {
                        return null;
                    }
                }
                if (((ViewGroup) view).getClipChildren()) {
                    return null;
                }
            }
            ViewGroup viewGroup = (ViewGroup) view;
            int childCount = viewGroup.getChildCount();
            if (view instanceof ReactZIndexedViewGroup) {
                reactZIndexedViewGroup = (ReactZIndexedViewGroup) view;
            } else {
                reactZIndexedViewGroup = null;
            }
            for (int i11 = childCount - 1; -1 < i11; i11--) {
                if (reactZIndexedViewGroup != null) {
                    i10 = reactZIndexedViewGroup.getZIndexMappedChildIndex(i11);
                } else {
                    i10 = i11;
                }
                View childAt = viewGroup.getChildAt(i10);
                PointF pointF = tempPoint;
                float f10 = fArr[0];
                float f11 = fArr[1];
                Intrinsics.checkNotNull(childAt);
                getChildPoint(f10, f11, viewGroup, childAt, pointF);
                float f12 = fArr[0];
                float f13 = fArr[1];
                fArr[0] = pointF.x;
                fArr[1] = pointF.y;
                View findTouchTargetViewWithPointerEvents = findTouchTargetViewWithPointerEvents(fArr, childAt, list);
                if (findTouchTargetViewWithPointerEvents != null) {
                    return findTouchTargetViewWithPointerEvents;
                }
                fArr[0] = f12;
                fArr[1] = f13;
            }
        }
        if (enumSet.contains(TouchTargetReturnType.SELF) && isTouchPointInView(fArr[0], fArr[1], view)) {
            return view;
        }
        return null;
    }

    private final View findTouchTargetViewWithPointerEvents(float[] fArr, View view, List<ViewTarget> list) {
        PointerEvents pointerEvents;
        if (view instanceof ReactPointerEventsView) {
            pointerEvents = ((ReactPointerEventsView) view).getPointerEvents();
        } else {
            pointerEvents = PointerEvents.AUTO;
        }
        if (!view.isEnabled()) {
            int i10 = WhenMappings.$EnumSwitchMapping$0[pointerEvents.ordinal()];
            if (i10 != 1) {
                if (i10 == 2) {
                    pointerEvents = PointerEvents.NONE;
                }
            } else {
                pointerEvents = PointerEvents.BOX_NONE;
            }
        }
        int i11 = WhenMappings.$EnumSwitchMapping$0[pointerEvents.ordinal()];
        if (i11 != 2) {
            if (i11 != 3) {
                if (i11 != 4) {
                    if (pointerEvents != PointerEvents.AUTO) {
                        p8.a.J(ReactConstants.TAG, "Unknown pointer event type: " + pointerEvents);
                    }
                    if ((view instanceof ReactCompoundViewGroup) && isTouchPointInView(fArr[0], fArr[1], view) && ((ReactCompoundViewGroup) view).interceptsTouchEvent(fArr[0], fArr[1])) {
                        if (list != null) {
                            list.add(new ViewTarget(view.getId(), view));
                            return view;
                        }
                    } else {
                        EnumSet<TouchTargetReturnType> of2 = EnumSet.of(TouchTargetReturnType.SELF, TouchTargetReturnType.CHILD);
                        Intrinsics.checkNotNullExpressionValue(of2, "of(...)");
                        View findTouchTargetView = findTouchTargetView(fArr, view, of2, list);
                        if (findTouchTargetView != null && list != null) {
                            list.add(new ViewTarget(view.getId(), view));
                        }
                        return findTouchTargetView;
                    }
                } else {
                    EnumSet<TouchTargetReturnType> of3 = EnumSet.of(TouchTargetReturnType.CHILD);
                    Intrinsics.checkNotNullExpressionValue(of3, "of(...)");
                    View findTouchTargetView2 = findTouchTargetView(fArr, view, of3, list);
                    if (findTouchTargetView2 != null) {
                        if (list != null) {
                            list.add(new ViewTarget(view.getId(), view));
                        }
                        return findTouchTargetView2;
                    } else if ((view instanceof ReactCompoundView) && isTouchPointInView(fArr[0], fArr[1], view) && ((ReactCompoundView) view).reactTagForTouch(fArr[0], fArr[1]) != view.getId()) {
                        if (list != null) {
                            list.add(new ViewTarget(view.getId(), view));
                        }
                    }
                }
                return view;
            }
            return null;
        }
        EnumSet<TouchTargetReturnType> of4 = EnumSet.of(TouchTargetReturnType.SELF);
        Intrinsics.checkNotNullExpressionValue(of4, "of(...)");
        View findTouchTargetView3 = findTouchTargetView(fArr, view, of4, list);
        if (findTouchTargetView3 != null && list != null) {
            list.add(new ViewTarget(view.getId(), view));
        }
        return findTouchTargetView3;
    }

    /* JADX WARN: Multi-variable type inference failed */
    static /* synthetic */ View findTouchTargetViewWithPointerEvents$default(TouchTargetHelper touchTargetHelper, float[] fArr, View view, List list, int i10, Object obj) {
        if ((i10 & 4) != 0) {
            list = null;
        }
        return touchTargetHelper.findTouchTargetViewWithPointerEvents(fArr, view, list);
    }

    private final void getChildPoint(float f10, float f11, ViewGroup viewGroup, View view, PointF pointF) {
        float scrollX = (f10 + viewGroup.getScrollX()) - view.getLeft();
        float scrollY = (f11 + viewGroup.getScrollY()) - view.getTop();
        Matrix matrix = view.getMatrix();
        if (!matrix.isIdentity()) {
            float[] fArr = matrixTransformCoords;
            fArr[0] = scrollX;
            fArr[1] = scrollY;
            Matrix matrix2 = inverseMatrix;
            matrix.invert(matrix2);
            matrix2.mapPoints(fArr);
            float f12 = fArr[0];
            scrollY = fArr[1];
            scrollX = f12;
        }
        pointF.set(scrollX, scrollY);
    }

    private final int getTouchTargetForView(View view, float f10, float f11) {
        if (view instanceof ReactCompoundView) {
            return ((ReactCompoundView) view).reactTagForTouch(f10, f11);
        }
        return view.getId();
    }

    private final boolean isTouchPointInView(float f10, float f11, View view) {
        ReactHitSlopView reactHitSlopView;
        Rect rect = null;
        if (view instanceof ReactHitSlopView) {
            reactHitSlopView = (ReactHitSlopView) view;
        } else {
            reactHitSlopView = null;
        }
        if (reactHitSlopView != null) {
            rect = reactHitSlopView.getHitSlopRect();
        }
        if (rect != null) {
            if (f10 < (-rect.left) || f10 >= view.getWidth() + rect.right || f11 < (-rect.top) || f11 >= view.getHeight() + rect.bottom) {
                return false;
            }
            return true;
        } else if (f10 < 0.0f || f10 >= view.getWidth() || f11 < 0.0f || f11 >= view.getHeight()) {
            return false;
        } else {
            return true;
        }
    }

    private final boolean isTouchPointInViewWithOverflowInset(float f10, float f11, View view) {
        if (!(view instanceof ReactOverflowViewWithInset)) {
            return false;
        }
        Rect overflowInset = ((ReactOverflowViewWithInset) view).getOverflowInset();
        if (f10 < overflowInset.left || f10 >= view.getWidth() - overflowInset.right || f11 < overflowInset.top || f11 >= view.getHeight() - overflowInset.bottom) {
            return false;
        }
        return true;
    }

    public static final int findTargetTagForTouch(float f10, float f11, @NotNull ViewGroup viewGroup, int[] iArr) {
        Intrinsics.checkNotNullParameter(viewGroup, "viewGroup");
        return findTargetTagAndCoordinatesForTouch(f10, f11, viewGroup, eventCoords, iArr);
    }
}
