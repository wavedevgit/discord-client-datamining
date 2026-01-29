package com.swmansion.reanimated.layoutReanimation;

import android.util.Log;
import android.view.View;
import android.view.ViewGroup;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.IllegalViewOperationException;
import com.facebook.react.uimanager.ViewAtIndex;
import com.facebook.react.uimanager.ViewGroupManager;
import com.facebook.react.uimanager.ViewManagerRegistry;
import com.swmansion.rnscreens.ScreenStackViewManager;
import com.swmansion.rnscreens.ScreenViewManager;
import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class ReanimatedNativeHierarchyManager extends ReanimatedNativeHierarchyManagerBase {
    private final HashMap<Integer, Runnable> cleanerCallback;
    private boolean initOk;
    private final HashMap<Integer, Set<Integer>> mPendingDeletionsForTag;
    private final ReaLayoutAnimator mReaLayoutAnimator;
    private final TabNavigatorObserver mTabNavigatorObserver;
    private final HashMap<Integer, ArrayList<View>> toBeRemoved;

    public ReanimatedNativeHierarchyManager(ViewManagerRegistry viewManagerRegistry, ReactApplicationContext reactApplicationContext) {
        super(viewManagerRegistry);
        this.toBeRemoved = new HashMap<>();
        this.cleanerCallback = new HashMap<>();
        this.mPendingDeletionsForTag = new HashMap<>();
        this.initOk = true;
        ReaLayoutAnimator reaLayoutAnimator = new ReaLayoutAnimator(reactApplicationContext, this);
        this.mReaLayoutAnimator = reaLayoutAnimator;
        this.mTabNavigatorObserver = new TabNavigatorObserver(reaLayoutAnimator);
        Class<? super Object> superclass = getClass().getSuperclass().getSuperclass();
        if (superclass == null) {
            Log.e("reanimated", "unable to resolve NativeViewHierarchyManager class from ReanimatedNativeHierarchyManager");
            return;
        }
        try {
            Field declaredField = superclass.getDeclaredField("mLayoutAnimator");
            declaredField.setAccessible(true);
            try {
                Field declaredField2 = Field.class.getDeclaredField("accessFlags");
                declaredField2.setAccessible(true);
                declaredField2.setInt(declaredField, declaredField.getModifiers() & (-17));
            } catch (IllegalAccessException | NoSuchFieldException e10) {
                e10.printStackTrace();
            }
            declaredField.set(this, this.mReaLayoutAnimator);
        } catch (IllegalAccessException | NoSuchFieldException e11) {
            this.initOk = false;
            e11.printStackTrace();
        }
        try {
            Field declaredField3 = superclass.getDeclaredField("mPendingDeletionsForTag");
            declaredField3.setAccessible(true);
            try {
                Field declaredField4 = Field.class.getDeclaredField("accessFlags");
                declaredField4.setAccessible(true);
                declaredField4.setInt(declaredField3, declaredField3.getModifiers() & (-17));
            } catch (IllegalAccessException | NoSuchFieldException e12) {
                e12.printStackTrace();
            }
            declaredField3.set(this, this.mPendingDeletionsForTag);
        } catch (IllegalAccessException | NoSuchFieldException e13) {
            this.initOk = false;
            e13.printStackTrace();
        }
        if (this.initOk) {
            setLayoutAnimationEnabled(true);
        }
    }

    public static /* synthetic */ void b(ArrayList arrayList, View view, ViewGroupManager viewGroupManager, ViewGroup viewGroup) {
        arrayList.remove(view);
        viewGroupManager.removeView(viewGroup, view);
    }

    private boolean checkIfTopScreenHasHeader(ViewGroup viewGroup) {
        try {
            View childAt = ((ViewGroup) ((ViewGroup) viewGroup.getChildAt(0)).getChildAt(0)).getChildAt(0);
            Field declaredField = childAt.getClass().getDeclaredField("mIsHidden");
            declaredField.setAccessible(true);
            return !declaredField.getBoolean(childAt);
        } catch (IllegalAccessException | NoSuchFieldException | NullPointerException unused) {
            return false;
        }
    }

    private boolean isLayoutAnimationDisabled() {
        if (this.initOk && this.mReaLayoutAnimator.isLayoutAnimationEnabled()) {
            return false;
        }
        return true;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.react.uimanager.NativeViewHierarchyManager
    public synchronized void dropView(View view) {
        if (isLayoutAnimationDisabled()) {
            super.dropView(view);
            return;
        }
        if (this.toBeRemoved.containsKey(Integer.valueOf(view.getId()))) {
            this.toBeRemoved.remove(Integer.valueOf(view.getId()));
        }
        if (this.cleanerCallback.containsKey(Integer.valueOf(view.getId()))) {
            this.cleanerCallback.remove(Integer.valueOf(view.getId()));
            this.cleanerCallback.get(Integer.valueOf(view.getId())).run();
        }
        super.dropView(view);
    }

    @Override // com.facebook.react.uimanager.NativeViewHierarchyManager
    public synchronized void manageChildren(int i10, int[] iArr, ViewAtIndex[] viewAtIndexArr, int[] iArr2) {
        Set<Integer> set;
        if (isLayoutAnimationDisabled()) {
            super.manageChildren(i10, iArr, viewAtIndexArr, iArr2);
            return;
        }
        try {
            final ViewGroup viewGroup = (ViewGroup) resolveView(i10);
            final ViewGroupManager viewGroupManager = (ViewGroupManager) resolveViewManager(i10);
            AnimationsManager animationsManager = this.mReaLayoutAnimator.getAnimationsManager();
            int i11 = 0;
            if (viewGroupManager.getName().equals(ScreenStackViewManager.REACT_CLASS)) {
                if (iArr2 == null) {
                    animationsManager.makeSnapshotOfTopScreenViews(viewGroup);
                } else {
                    animationsManager.notifyAboutViewsRemoval(iArr2);
                }
                if (iArr != null && this.mReaLayoutAnimator != null) {
                    int length = iArr.length;
                    while (i11 < length) {
                        this.mReaLayoutAnimator.getAnimationsManager().cancelAnimationsInSubviews(viewGroupManager.getChildAt((ViewGroupManager) viewGroup, iArr[i11]));
                        i11++;
                    }
                }
                super.manageChildren(i10, iArr, viewAtIndexArr, iArr2);
                return;
            }
            if (this.toBeRemoved.containsKey(Integer.valueOf(i10))) {
                HashSet hashSet = new HashSet();
                Iterator<View> it = this.toBeRemoved.get(Integer.valueOf(i10)).iterator();
                while (it.hasNext()) {
                    hashSet.add(Integer.valueOf(it.next().getId()));
                }
                while (viewGroupManager.getChildCount((ViewGroupManager) viewGroup) != 0 && hashSet.contains(Integer.valueOf(viewGroupManager.getChildAt((ViewGroupManager) viewGroup, viewGroupManager.getChildCount((ViewGroupManager) viewGroup) - 1).getId()))) {
                    viewGroupManager.removeViewAt((ViewGroupManager) viewGroup, viewGroupManager.getChildCount((ViewGroupManager) viewGroup) - 1);
                }
            }
            if (iArr2 != null) {
                if (!this.toBeRemoved.containsKey(Integer.valueOf(i10))) {
                    this.toBeRemoved.put(Integer.valueOf(i10), new ArrayList<>());
                }
                final ArrayList<View> arrayList = this.toBeRemoved.get(Integer.valueOf(i10));
                int length2 = iArr2.length;
                while (i11 < length2) {
                    try {
                        final View resolveView = resolveView(iArr2[i11]);
                        arrayList.add(resolveView);
                        this.cleanerCallback.put(Integer.valueOf(resolveView.getId()), new Runnable() { // from class: com.swmansion.reanimated.layoutReanimation.c
                            @Override // java.lang.Runnable
                            public final void run() {
                                ReanimatedNativeHierarchyManager.b(arrayList, resolveView, viewGroupManager, viewGroup);
                            }
                        });
                    } catch (IllegalViewOperationException e10) {
                        e10.printStackTrace();
                    }
                    i11++;
                }
            }
            HashMap<Integer, Set<Integer>> hashMap = this.mPendingDeletionsForTag;
            if (hashMap != null && (set = hashMap.get(Integer.valueOf(i10))) != null) {
                set.clear();
            }
            animationsManager.notifyAboutViewsRemoval(iArr2);
            super.manageChildren(i10, iArr, viewAtIndexArr, null);
            if (this.toBeRemoved.containsKey(Integer.valueOf(i10))) {
                Iterator<View> it2 = this.toBeRemoved.get(Integer.valueOf(i10)).iterator();
                while (it2.hasNext()) {
                    viewGroupManager.addView((ViewGroupManager) viewGroup, it2.next(), viewGroupManager.getChildCount((ViewGroupManager) viewGroup));
                }
            }
            super.manageChildren(i10, null, null, iArr2);
        } catch (IllegalViewOperationException e11) {
            e11.printStackTrace();
            super.manageChildren(i10, iArr, viewAtIndexArr, iArr2);
        }
    }

    public void publicDropView(View view) {
        dropView(view);
    }

    @Override // com.swmansion.reanimated.layoutReanimation.ReanimatedNativeHierarchyManagerBase
    public synchronized void updateLayoutCommon(int i10, int i11, int i12, int i13, int i14, int i15) {
        ReaLayoutAnimator reaLayoutAnimator;
        View resolveView;
        View view;
        try {
            if (isLayoutAnimationDisabled()) {
                return;
            }
            try {
                String name = resolveViewManager(i11).getName();
                View resolveView2 = resolveView(i10);
                if (resolveView2 != null && name.equals(ScreenViewManager.REACT_CLASS) && this.mReaLayoutAnimator != null) {
                    if (checkIfTopScreenHasHeader((ViewGroup) resolveView2)) {
                        if (!resolveView2.isLayoutRequested()) {
                        }
                        resolveView = resolveView(i11);
                        view = (View) resolveView.getParent();
                        if (view != null && ScreensHelper.isScreenContainer((View) view.getParent())) {
                            this.mTabNavigatorObserver.handleScreenContainerUpdate(resolveView);
                        }
                    }
                    this.mReaLayoutAnimator.getAnimationsManager().screenDidLayout(resolveView2);
                    resolveView = resolveView(i11);
                    view = (View) resolveView.getParent();
                    if (view != null) {
                        this.mTabNavigatorObserver.handleScreenContainerUpdate(resolveView);
                    }
                }
                View resolveView3 = resolveView(i11);
                if (resolveView3 != null && (reaLayoutAnimator = this.mReaLayoutAnimator) != null) {
                    reaLayoutAnimator.getAnimationsManager().viewDidLayout(resolveView3);
                }
            } catch (IllegalViewOperationException e10) {
                e10.printStackTrace();
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }
}
