package com.facebook.react.uimanager;

import android.graphics.Matrix;
import android.graphics.Rect;
import android.graphics.RectF;
import android.util.SparseArray;
import android.util.SparseBooleanArray;
import android.view.View;
import android.view.ViewGroup;
import android.view.ViewParent;
import com.facebook.react.R;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.JSApplicationIllegalArgumentException;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.RetryableMountingLayerException;
import com.facebook.react.bridge.SoftAssertions;
import com.facebook.react.bridge.UiThreadUtil;
import com.facebook.react.common.annotations.internal.LegacyArchitectureLogLevel;
import com.facebook.react.common.annotations.internal.LegacyArchitectureLogger;
import com.facebook.react.common.build.ReactBuildConfig;
import com.facebook.react.touch.JSResponderHandler;
import com.facebook.react.uimanager.layoutanimation.LayoutAnimationController;
import com.facebook.react.uimanager.layoutanimation.LayoutAnimationListener;
import com.facebook.react.views.textinput.ReactEditTextInputConnectionWrapper;
import com.facebook.yoga.YogaDirection;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class NativeViewHierarchyManager {
    private static final String TAG;
    private final boolean DEBUG_MODE;
    private final RectF mBoundingBox;
    private final JSResponderHandler mJSResponderHandler;
    private volatile boolean mLayoutAnimationEnabled;
    private final LayoutAnimationController mLayoutAnimator;
    private HashMap<Integer, Set<Integer>> mPendingDeletionsForTag;
    private final SparseBooleanArray mRootTags;
    private final RootViewManager mRootViewManager;
    private final SparseArray<ViewManager> mTagsToViewManagers;
    private final SparseArray<View> mTagsToViews;
    private final ViewManagerRegistry mViewManagers;

    static {
        LegacyArchitectureLogger.assertLegacyArchitecture("NativeViewHierarchyManager", LegacyArchitectureLogLevel.ERROR);
        TAG = NativeViewHierarchyManager.class.getSimpleName();
    }

    public NativeViewHierarchyManager(ViewManagerRegistry viewManagerRegistry) {
        this(viewManagerRegistry, new RootViewManager());
    }

    private boolean arrayContains(int[] iArr, int i10) {
        if (iArr == null) {
            return false;
        }
        for (int i11 : iArr) {
            if (i11 == i10) {
                return true;
            }
        }
        return false;
    }

    private void computeBoundingBox(View view, int[] iArr) {
        this.mBoundingBox.set(0.0f, 0.0f, view.getWidth(), view.getHeight());
        mapRectFromViewToWindowCoords(view, this.mBoundingBox);
        iArr[0] = Math.round(this.mBoundingBox.left);
        iArr[1] = Math.round(this.mBoundingBox.top);
        RectF rectF = this.mBoundingBox;
        iArr[2] = Math.round(rectF.right - rectF.left);
        RectF rectF2 = this.mBoundingBox;
        iArr[3] = Math.round(rectF2.bottom - rectF2.top);
    }

    private static String constructManageChildrenErrorMessage(ViewGroup viewGroup, ViewGroupManager viewGroupManager, int[] iArr, ViewAtIndex[] viewAtIndexArr, int[] iArr2) {
        int i10;
        int i11;
        int i12;
        int i13;
        StringBuilder sb2 = new StringBuilder();
        if (viewGroup != null) {
            sb2.append("View tag:" + viewGroup.getId() + " View Type:" + viewGroup.getClass().toString() + ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE);
            StringBuilder sb3 = new StringBuilder();
            sb3.append("  children(");
            sb3.append(viewGroupManager.getChildCount((ViewGroupManager) viewGroup));
            sb3.append("): [\n");
            sb2.append(sb3.toString());
            for (int i14 = 0; viewGroupManager.getChildAt((ViewGroupManager) viewGroup, i14) != null; i14 += 16) {
                int i15 = 0;
                while (true) {
                    if (viewGroupManager.getChildAt((ViewGroupManager) viewGroup, i14 + i15) != null && i15 < 16) {
                        sb2.append(viewGroupManager.getChildAt((ViewGroupManager) viewGroup, i13).getId() + ",");
                        i15++;
                    }
                }
                sb2.append(ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE);
            }
            sb2.append(" ],\n");
        }
        if (iArr != null) {
            sb2.append("  indicesToRemove(" + iArr.length + "): [\n");
            for (int i16 = 0; i16 < iArr.length; i16 += 16) {
                int i17 = 0;
                while (true) {
                    if (i16 + i17 < iArr.length && i17 < 16) {
                        sb2.append(iArr[i12] + ",");
                        i17++;
                    }
                }
                sb2.append(ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE);
            }
            sb2.append(" ],\n");
        }
        if (viewAtIndexArr != null) {
            sb2.append("  viewsToAdd(" + viewAtIndexArr.length + "): [\n");
            for (int i18 = 0; i18 < viewAtIndexArr.length; i18 += 16) {
                int i19 = 0;
                while (true) {
                    if (i18 + i19 < viewAtIndexArr.length && i19 < 16) {
                        sb2.append("[" + viewAtIndexArr[i11].mIndex + "," + viewAtIndexArr[i11].mTag + "],");
                        i19++;
                    }
                }
                sb2.append(ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE);
            }
            sb2.append(" ],\n");
        }
        if (iArr2 != null) {
            sb2.append("  tagsToDelete(" + iArr2.length + "): [\n");
            for (int i20 = 0; i20 < iArr2.length; i20 += 16) {
                int i21 = 0;
                while (true) {
                    if (i20 + i21 < iArr2.length && i21 < 16) {
                        sb2.append(iArr2[i10] + ",");
                        i21++;
                    }
                }
                sb2.append(ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE);
            }
            sb2.append(" ]\n");
        }
        return sb2.toString();
    }

    private static String constructSetChildrenErrorMessage(ViewGroup viewGroup, ViewGroupManager viewGroupManager, ReadableArray readableArray) {
        ViewAtIndex[] viewAtIndexArr = new ViewAtIndex[readableArray.size()];
        for (int i10 = 0; i10 < readableArray.size(); i10++) {
            viewAtIndexArr[i10] = new ViewAtIndex(readableArray.getInt(i10), i10);
        }
        return constructManageChildrenErrorMessage(viewGroup, viewGroupManager, null, viewAtIndexArr, null);
    }

    private Set<Integer> getPendingDeletionsForTag(int i10) {
        if (this.mPendingDeletionsForTag == null) {
            this.mPendingDeletionsForTag = new HashMap<>();
        }
        if (!this.mPendingDeletionsForTag.containsKey(Integer.valueOf(i10))) {
            this.mPendingDeletionsForTag.put(Integer.valueOf(i10), new HashSet());
        }
        return this.mPendingDeletionsForTag.get(Integer.valueOf(i10));
    }

    private ThemedReactContext getReactContextForView(int i10) {
        View view = this.mTagsToViews.get(i10);
        if (view != null) {
            return (ThemedReactContext) view.getContext();
        }
        throw new JSApplicationIllegalArgumentException("Could not find view with tag " + i10);
    }

    private void mapRectFromViewToWindowCoords(View view, RectF rectF) {
        Matrix matrix = view.getMatrix();
        if (!matrix.isIdentity()) {
            matrix.mapRect(rectF);
        }
        rectF.offset(view.getLeft(), view.getTop());
        ViewParent parent = view.getParent();
        while (parent instanceof View) {
            View view2 = (View) parent;
            rectF.offset(-view2.getScrollX(), -view2.getScrollY());
            Matrix matrix2 = view2.getMatrix();
            if (!matrix2.isIdentity()) {
                matrix2.mapRect(rectF);
            }
            rectF.offset(view2.getLeft(), view2.getTop());
            parent = view2.getParent();
        }
    }

    public synchronized void addRootView(int i10, View view) {
        addRootViewGroup(i10, view);
    }

    protected final synchronized void addRootViewGroup(int i10, View view) {
        String str;
        try {
            if (this.DEBUG_MODE) {
                String str2 = TAG;
                Integer valueOf = Integer.valueOf(i10);
                if (view != null) {
                    str = view.toString();
                } else {
                    str = "<null>";
                }
                p8.a.d(str2, "addRootViewGroup[%d]: %s", valueOf, str);
            }
            if (view.getId() != -1) {
                String str3 = TAG;
                p8.a.m(str3, "Trying to add a root view with an explicit id (" + view.getId() + ") already set. React Native uses the id field to track react tags and will overwrite this field. If that is fine, explicitly overwrite the id field to View.NO_ID before calling addRootView.");
            }
            this.mTagsToViews.put(i10, view);
            this.mTagsToViewManagers.put(i10, this.mRootViewManager);
            this.mRootTags.put(i10, true);
            view.setId(i10);
        } catch (Throwable th2) {
            throw th2;
        }
    }

    public synchronized void clearJSResponder() {
        this.mJSResponderHandler.clearJSResponder();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public synchronized void clearLayoutAnimation() {
        this.mLayoutAnimator.reset();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public synchronized void configureLayoutAnimation(ReadableMap readableMap, Callback callback) {
        this.mLayoutAnimator.initializeFromConfig(readableMap, callback);
    }

    /* JADX WARN: Multi-variable type inference failed */
    public synchronized void createView(ThemedReactContext themedReactContext, int i10, String str, ReactStylesDiffMap reactStylesDiffMap) {
        String str2;
        try {
            if (this.DEBUG_MODE) {
                String str3 = TAG;
                Integer valueOf = Integer.valueOf(i10);
                if (reactStylesDiffMap != null) {
                    str2 = reactStylesDiffMap.toString();
                } else {
                    str2 = "<null>";
                }
                p8.a.e(str3, "createView[%d]: %s %s", valueOf, str, str2);
            }
            UiThreadUtil.assertOnUiThread();
            qb.b.a(0L, "NativeViewHierarchyManager_createView").a("tag", i10).b("className", str).c();
            ViewManager<?, ?> viewManager = this.mViewManagers.get(str);
            this.mTagsToViews.put(i10, viewManager.createView(i10, themedReactContext, reactStylesDiffMap, null, this.mJSResponderHandler));
            this.mTagsToViewManagers.put(i10, viewManager);
            qb.a.i(0L);
        } catch (Throwable th2) {
            throw th2;
        }
    }

    @Deprecated
    public synchronized void dispatchCommand(int i10, int i11, ReadableArray readableArray) {
        try {
            if (this.DEBUG_MODE) {
                p8.a.e(TAG, "dispatchCommand[%d]: %d %s", Integer.valueOf(i10), Integer.valueOf(i11), readableArray != null ? readableArray.toString() : "<null>");
            }
            UiThreadUtil.assertOnUiThread();
            View view = this.mTagsToViews.get(i10);
            if (view != null) {
                resolveViewManager(i10).receiveCommand((ViewManager) view, i11, readableArray);
            } else {
                throw new RetryableMountingLayerException("Trying to send command to a non-existing view with tag [" + i10 + "] and command " + i11);
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public synchronized void dropView(View view) {
        int i10;
        try {
            if (this.DEBUG_MODE) {
                String str = TAG;
                if (view != null) {
                    i10 = view.getId();
                } else {
                    i10 = -1;
                }
                p8.a.c(str, "dropView[%d]", Integer.valueOf(i10));
            }
            UiThreadUtil.assertOnUiThread();
            if (view == null) {
                return;
            }
            if (this.mTagsToViewManagers.get(view.getId()) == null) {
                return;
            }
            if (!this.mRootTags.get(view.getId())) {
                resolveViewManager(view.getId()).onDropViewInstance(view);
            }
            ViewManager viewManager = this.mTagsToViewManagers.get(view.getId());
            if ((view instanceof ViewGroup) && (viewManager instanceof ViewGroupManager)) {
                ViewGroup viewGroup = (ViewGroup) view;
                ViewGroupManager viewGroupManager = (ViewGroupManager) viewManager;
                for (int childCount = viewGroupManager.getChildCount((ViewGroupManager) viewGroup) - 1; childCount >= 0; childCount--) {
                    View childAt = viewGroupManager.getChildAt((ViewGroupManager) viewGroup, childCount);
                    if (childAt == null) {
                        p8.a.m(TAG, "Unable to drop null child view");
                    } else if (this.mTagsToViews.get(childAt.getId()) != null) {
                        dropView(childAt);
                    }
                }
                viewGroupManager.removeAllViews(viewGroup);
            }
            this.mTagsToViews.remove(view.getId());
            this.mTagsToViewManagers.remove(view.getId());
        } catch (Throwable th2) {
            throw th2;
        }
    }

    public synchronized int findTargetTagForTouch(int i10, float f10, float f11) {
        View view;
        try {
            if (this.DEBUG_MODE) {
                p8.a.e(TAG, "findTargetTagForTouch[%d]: %f %f", Integer.valueOf(i10), Float.valueOf(f10), Float.valueOf(f11));
            }
            UiThreadUtil.assertOnUiThread();
            view = this.mTagsToViews.get(i10);
            if (view != null) {
            } else {
                throw new JSApplicationIllegalArgumentException("Could not find view with tag " + i10);
            }
        } catch (Throwable th2) {
            throw th2;
        }
        return TouchTargetHelper.findTargetTagForTouch(f10, f11, (ViewGroup) view);
    }

    public synchronized long getInstanceHandle(int i10) {
        Long l10;
        View view = this.mTagsToViews.get(i10);
        if (view != null) {
            l10 = (Long) view.getTag(R.id.view_tag_instance_handle);
            if (l10 != null) {
            } else {
                throw new IllegalViewOperationException("Unable to find instanceHandle for tag: " + i10);
            }
        } else {
            throw new IllegalViewOperationException("Unable to find view for tag: " + i10);
        }
        return l10.longValue();
    }

    public synchronized int getRootViewNum() {
        return this.mRootTags.size();
    }

    public synchronized void manageChildren(int i10, int[] iArr, ViewAtIndex[] viewAtIndexArr, int[] iArr2) {
        Throwable th2;
        String str;
        String str2;
        String str3;
        final int i11;
        try {
            try {
                if (this.DEBUG_MODE) {
                    try {
                        String str4 = TAG;
                        Integer valueOf = Integer.valueOf(i10);
                        if (iArr != null) {
                            str = iArr.toString();
                        } else {
                            str = "<null>";
                        }
                        String str5 = str;
                        if (viewAtIndexArr != null) {
                            str2 = viewAtIndexArr.toString();
                        } else {
                            str2 = "<null>";
                        }
                        String str6 = str2;
                        if (iArr2 != null) {
                            str3 = iArr2.toString();
                        } else {
                            str3 = "<null>";
                        }
                        p8.a.f(str4, "createView[%d]: %s %s %s", valueOf, str5, str6, str3);
                    } catch (Throwable th3) {
                        th2 = th3;
                        throw th2;
                    }
                }
                UiThreadUtil.assertOnUiThread();
                final Set<Integer> pendingDeletionsForTag = getPendingDeletionsForTag(i10);
                final ViewGroup viewGroup = (ViewGroup) this.mTagsToViews.get(i10);
                final ViewGroupManager viewGroupManager = (ViewGroupManager) resolveViewManager(i10);
                if (viewGroup != null) {
                    int childCount = viewGroupManager.getChildCount((ViewGroupManager) viewGroup);
                    if (iArr != null) {
                        int length = iArr.length - 1;
                        while (length >= 0) {
                            int i12 = iArr[length];
                            if (i12 >= 0) {
                                if (viewGroupManager.getChildAt((ViewGroupManager) viewGroup, i12) == null) {
                                    if (this.mRootTags.get(i10) && viewGroupManager.getChildCount((ViewGroupManager) viewGroup) == 0) {
                                        return;
                                    }
                                    throw new IllegalViewOperationException("Trying to remove a view index above child count " + i12 + " view tag: " + i10 + "\n detail: " + constructManageChildrenErrorMessage(viewGroup, viewGroupManager, iArr, viewAtIndexArr, iArr2));
                                } else if (i12 < childCount) {
                                    View childAt = viewGroupManager.getChildAt((ViewGroupManager) viewGroup, i12);
                                    if (!this.mLayoutAnimationEnabled || !this.mLayoutAnimator.shouldAnimateLayout(childAt) || !arrayContains(iArr2, childAt.getId())) {
                                        viewGroupManager.removeViewAt((ViewGroupManager) viewGroup, i12);
                                    }
                                    length--;
                                    childCount = i12;
                                } else {
                                    throw new IllegalViewOperationException("Trying to remove an out of order view index:" + i12 + " view tag: " + i10 + "\n detail: " + constructManageChildrenErrorMessage(viewGroup, viewGroupManager, iArr, viewAtIndexArr, iArr2));
                                }
                            } else {
                                throw new IllegalViewOperationException("Trying to remove a negative view index:" + i12 + " view tag: " + i10 + "\n detail: " + constructManageChildrenErrorMessage(viewGroup, viewGroupManager, iArr, viewAtIndexArr, iArr2));
                            }
                        }
                    }
                    if (iArr2 != null) {
                        int i13 = 0;
                        while (i13 < iArr2.length) {
                            int i14 = iArr2[i13];
                            final View view = this.mTagsToViews.get(i14);
                            if (view != null) {
                                if (this.mLayoutAnimationEnabled && this.mLayoutAnimator.shouldAnimateLayout(view)) {
                                    pendingDeletionsForTag.add(Integer.valueOf(i14));
                                    i11 = i10;
                                    this.mLayoutAnimator.deleteView(view, new LayoutAnimationListener() { // from class: com.facebook.react.uimanager.NativeViewHierarchyManager.1
                                        @Override // com.facebook.react.uimanager.layoutanimation.LayoutAnimationListener
                                        public void onAnimationEnd() {
                                            UiThreadUtil.assertOnUiThread();
                                            viewGroupManager.removeView(viewGroup, view);
                                            NativeViewHierarchyManager.this.dropView(view);
                                            pendingDeletionsForTag.remove(Integer.valueOf(view.getId()));
                                            if (pendingDeletionsForTag.isEmpty()) {
                                                NativeViewHierarchyManager.this.mPendingDeletionsForTag.remove(Integer.valueOf(i11));
                                            }
                                        }
                                    });
                                } else {
                                    i11 = i10;
                                    dropView(view);
                                }
                                i13++;
                                i10 = i11;
                            } else {
                                throw new IllegalViewOperationException("Trying to destroy unknown view tag: " + i14 + "\n detail: " + constructManageChildrenErrorMessage(viewGroup, viewGroupManager, iArr, viewAtIndexArr, iArr2));
                            }
                        }
                    }
                    int i15 = i10;
                    if (viewAtIndexArr != null) {
                        for (ViewAtIndex viewAtIndex : viewAtIndexArr) {
                            View view2 = this.mTagsToViews.get(viewAtIndex.mTag);
                            if (view2 != null) {
                                int i16 = viewAtIndex.mIndex;
                                if (!pendingDeletionsForTag.isEmpty()) {
                                    i16 = 0;
                                    int i17 = 0;
                                    while (i16 < viewGroup.getChildCount() && i17 != viewAtIndex.mIndex) {
                                        if (!pendingDeletionsForTag.contains(Integer.valueOf(viewGroup.getChildAt(i16).getId()))) {
                                            i17++;
                                        }
                                        i16++;
                                    }
                                }
                                viewGroupManager.addView((ViewGroupManager) viewGroup, view2, i16);
                            } else {
                                throw new IllegalViewOperationException("Trying to add unknown view tag: " + viewAtIndex.mTag + "\n detail: " + constructManageChildrenErrorMessage(viewGroup, viewGroupManager, iArr, viewAtIndexArr, iArr2));
                            }
                        }
                    }
                    if (pendingDeletionsForTag.isEmpty()) {
                        this.mPendingDeletionsForTag.remove(Integer.valueOf(i15));
                    }
                    return;
                }
                throw new IllegalViewOperationException("Trying to manageChildren view with tag " + i10 + " which doesn't exist\n detail: " + constructManageChildrenErrorMessage(viewGroup, viewGroupManager, iArr, viewAtIndexArr, iArr2));
            } catch (Throwable th4) {
                th = th4;
                th2 = th;
                throw th2;
            }
        } catch (Throwable th5) {
            th = th5;
        }
    }

    public synchronized void measure(int i10, int[] iArr) {
        try {
            if (this.DEBUG_MODE) {
                p8.a.c(TAG, "measure[%d]", Integer.valueOf(i10));
            }
            UiThreadUtil.assertOnUiThread();
            View view = this.mTagsToViews.get(i10);
            if (view != null) {
                View view2 = (View) RootViewUtil.getRootView(view);
                if (view2 != null) {
                    computeBoundingBox(view2, iArr);
                    int i11 = iArr[0];
                    int i12 = iArr[1];
                    computeBoundingBox(view, iArr);
                    iArr[0] = iArr[0] - i11;
                    iArr[1] = iArr[1] - i12;
                } else {
                    throw new NoSuchNativeViewException("Native view " + i10 + " is no longer on screen");
                }
            } else {
                throw new NoSuchNativeViewException("No native view for " + i10 + " currently exists");
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    public synchronized void measureInWindow(int i10, int[] iArr) {
        try {
            if (this.DEBUG_MODE) {
                p8.a.c(TAG, "measureInWindow[%d]", Integer.valueOf(i10));
            }
            UiThreadUtil.assertOnUiThread();
            View view = this.mTagsToViews.get(i10);
            if (view != null) {
                view.getLocationOnScreen(iArr);
                Rect rect = new Rect();
                view.getWindowVisibleDisplayFrame(rect);
                iArr[0] = iArr[0] - rect.left;
                iArr[1] = iArr[1] - rect.top;
                iArr[2] = view.getWidth();
                iArr[3] = view.getHeight();
            } else {
                throw new NoSuchNativeViewException("No native view for " + i10 + " currently exists");
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    public synchronized void removeRootView(int i10) {
        try {
            if (this.DEBUG_MODE) {
                p8.a.c(TAG, "removeRootView[%d]", Integer.valueOf(i10));
            }
            UiThreadUtil.assertOnUiThread();
            if (!this.mRootTags.get(i10)) {
                SoftAssertions.assertUnreachable("View with tag " + i10 + " is not registered as a root view");
            }
            View view = this.mTagsToViews.get(i10);
            dropView(view);
            this.mRootTags.delete(i10);
            if (view != null) {
                view.setId(-1);
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    public final synchronized View resolveView(int i10) {
        View view;
        view = this.mTagsToViews.get(i10);
        if (view == null) {
            throw new IllegalViewOperationException("Trying to resolve view with tag " + i10 + " which doesn't exist");
        }
        return view;
    }

    public final synchronized ViewManager resolveViewManager(int i10) {
        ViewManager viewManager;
        viewManager = this.mTagsToViewManagers.get(i10);
        if (viewManager == null) {
            throw new IllegalViewOperationException("ViewManager for tag " + i10 + " could not be found.\n");
        }
        return viewManager;
    }

    public synchronized void sendAccessibilityEvent(int i10, int i11) {
        View view = this.mTagsToViews.get(i10);
        if (view != null) {
            view.sendAccessibilityEvent(i11);
        } else {
            throw new RetryableMountingLayerException("Could not find view with tag " + i10);
        }
    }

    public synchronized void setChildren(int i10, ReadableArray readableArray) {
        String str;
        try {
            if (this.DEBUG_MODE) {
                String str2 = TAG;
                Integer valueOf = Integer.valueOf(i10);
                if (readableArray != null) {
                    str = readableArray.toString();
                } else {
                    str = "<null>";
                }
                p8.a.d(str2, "setChildren[%d]: %s", valueOf, str);
            }
            UiThreadUtil.assertOnUiThread();
            ViewGroup viewGroup = (ViewGroup) this.mTagsToViews.get(i10);
            ViewGroupManager viewGroupManager = (ViewGroupManager) resolveViewManager(i10);
            for (int i11 = 0; i11 < readableArray.size(); i11++) {
                View view = this.mTagsToViews.get(readableArray.getInt(i11));
                if (view != null) {
                    viewGroupManager.addView((ViewGroupManager) viewGroup, view, i11);
                } else {
                    throw new IllegalViewOperationException("Trying to add unknown view tag: " + readableArray.getInt(i11) + "\n detail: " + constructSetChildrenErrorMessage(viewGroup, viewGroupManager, readableArray));
                }
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    public synchronized void setJSResponder(int i10, int i11, boolean z10) {
        if (!z10) {
            this.mJSResponderHandler.setJSResponder(i11, null);
            return;
        }
        View view = this.mTagsToViews.get(i10);
        if (i11 != i10 && (view instanceof ViewParent)) {
            this.mJSResponderHandler.setJSResponder(i11, (ViewParent) view);
            return;
        }
        if (this.mRootTags.get(i10)) {
            SoftAssertions.assertUnreachable("Cannot block native responder on " + i10 + " that is a root view");
        }
        this.mJSResponderHandler.setJSResponder(i11, view.getParent());
    }

    public void setLayoutAnimationEnabled(boolean z10) {
        this.mLayoutAnimationEnabled = z10;
    }

    public synchronized void updateInstanceHandle(int i10, long j10) {
        UiThreadUtil.assertOnUiThread();
        try {
            updateInstanceHandle(resolveView(i10), j10);
        } catch (IllegalViewOperationException e10) {
            String str = TAG;
            p8.a.n(str, "Unable to update properties for view tag " + i10, e10);
        }
    }

    @Deprecated
    public void updateLayout(int i10, int i11, int i12, int i13, int i14) {
        updateLayout(i10, i10, i11, i12, i13, i14, YogaDirection.INHERIT);
    }

    public synchronized void updateProperties(int i10, ReactStylesDiffMap reactStylesDiffMap) {
        try {
            if (this.DEBUG_MODE) {
                p8.a.d(TAG, "updateProperties[%d]: %s", Integer.valueOf(i10), reactStylesDiffMap.toString());
            }
            UiThreadUtil.assertOnUiThread();
            try {
                ViewManager resolveViewManager = resolveViewManager(i10);
                View resolveView = resolveView(i10);
                if (reactStylesDiffMap != null) {
                    resolveViewManager.updateProperties(resolveView, reactStylesDiffMap);
                }
            } catch (IllegalViewOperationException e10) {
                String str = TAG;
                p8.a.n(str, "Unable to update properties for view tag " + i10, e10);
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    public synchronized void updateViewExtraData(int i10, Object obj) {
        try {
            if (this.DEBUG_MODE) {
                p8.a.d(TAG, "updateViewExtraData[%d]: %s", Integer.valueOf(i10), obj.toString());
            }
            UiThreadUtil.assertOnUiThread();
            resolveViewManager(i10).updateExtraData(resolveView(i10), obj);
        } catch (Throwable th2) {
            throw th2;
        }
    }

    public NativeViewHierarchyManager(ViewManagerRegistry viewManagerRegistry, RootViewManager rootViewManager) {
        ReactBuildConfig reactBuildConfig = ReactBuildConfig.INSTANCE;
        this.DEBUG_MODE = false;
        this.mJSResponderHandler = new JSResponderHandler();
        this.mLayoutAnimator = new LayoutAnimationController();
        this.mBoundingBox = new RectF();
        this.mViewManagers = viewManagerRegistry;
        this.mTagsToViews = new SparseArray<>();
        this.mTagsToViewManagers = new SparseArray<>();
        this.mRootTags = new SparseBooleanArray();
        this.mRootViewManager = rootViewManager;
    }

    public synchronized void updateLayout(int i10, int i11, int i12, int i13, int i14, int i15, YogaDirection yogaDirection) {
        Throwable th2;
        Throwable th3;
        try {
            try {
                if (this.DEBUG_MODE) {
                    try {
                        p8.a.h(TAG, "updateLayout[%d]->[%d]: %d %d %d %d", Integer.valueOf(i11), Integer.valueOf(i10), Integer.valueOf(i12), Integer.valueOf(i13), Integer.valueOf(i14), Integer.valueOf(i15));
                    } catch (Throwable th4) {
                        th2 = th4;
                        throw th2;
                    }
                }
                UiThreadUtil.assertOnUiThread();
                qb.b.a(0L, "NativeViewHierarchyManager_updateLayout").a("parentTag", i10).a("tag", i11).c();
                try {
                    View resolveView = resolveView(i11);
                    resolveView.setLayoutDirection(LayoutDirectionUtil.toAndroidFromYoga(yogaDirection));
                    resolveView.measure(View.MeasureSpec.makeMeasureSpec(i14, 1073741824), View.MeasureSpec.makeMeasureSpec(i15, 1073741824));
                    ViewParent parent = resolveView.getParent();
                    if (parent instanceof RootView) {
                        try {
                            parent.requestLayout();
                        } catch (Throwable th5) {
                            th3 = th5;
                            qb.a.i(0L);
                            throw th3;
                        }
                    }
                    if (!this.mRootTags.get(i10)) {
                        ViewManager viewManager = this.mTagsToViewManagers.get(i10);
                        if (viewManager instanceof IViewManagerWithChildren) {
                            IViewManagerWithChildren iViewManagerWithChildren = (IViewManagerWithChildren) viewManager;
                            if (iViewManagerWithChildren != null && !iViewManagerWithChildren.needsCustomLayoutForChildren()) {
                                updateLayout(resolveView, i12, i13, i14, i15);
                            }
                        } else {
                            throw new IllegalViewOperationException("Trying to use view with tag " + i10 + " as a parent, but its Manager doesn't implement IViewManagerWithChildren");
                        }
                    } else {
                        try {
                            updateLayout(resolveView, i12, i13, i14, i15);
                        } catch (Throwable th6) {
                            th = th6;
                            th3 = th;
                            qb.a.i(0L);
                            throw th3;
                        }
                    }
                    qb.a.i(0L);
                } catch (Throwable th7) {
                    th = th7;
                }
            } catch (Throwable th8) {
                th = th8;
                th2 = th;
                throw th2;
            }
        } catch (Throwable th9) {
            th = th9;
        }
    }

    private void updateInstanceHandle(View view, long j10) {
        UiThreadUtil.assertOnUiThread();
        view.setTag(R.id.view_tag_instance_handle, Long.valueOf(j10));
    }

    public synchronized void dispatchCommand(int i10, String str, ReadableArray readableArray) {
        try {
            if (this.DEBUG_MODE) {
                p8.a.e(TAG, "dispatchCommand[%d]: %s %s", Integer.valueOf(i10), str, readableArray != null ? readableArray.toString() : "<null>");
            }
            UiThreadUtil.assertOnUiThread();
            View view = this.mTagsToViews.get(i10);
            if (view != null) {
                resolveViewManager(i10).receiveCommand((ViewManager) view, str, readableArray);
            } else {
                throw new RetryableMountingLayerException("Trying to send command to a non-existing view with tag [" + i10 + "] and command " + str);
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    private void updateLayout(View view, int i10, int i11, int i12, int i13) {
        if (this.mLayoutAnimationEnabled && this.mLayoutAnimator.shouldAnimateLayout(view)) {
            this.mLayoutAnimator.applyLayoutUpdate(view, i10, i11, i12, i13);
        } else {
            view.layout(i10, i11, i10 + i12, i11 + i13);
        }
    }
}
