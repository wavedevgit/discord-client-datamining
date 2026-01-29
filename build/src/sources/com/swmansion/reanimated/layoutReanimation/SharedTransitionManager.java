package com.swmansion.reanimated.layoutReanimation;

import android.app.Activity;
import android.util.Log;
import android.view.View;
import android.view.ViewGroup;
import android.view.ViewParent;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.uimanager.IllegalViewOperationException;
import com.facebook.react.uimanager.PixelUtil;
import com.facebook.react.uimanager.UIManagerHelper;
import com.facebook.react.uimanager.ViewGroupManager;
import com.facebook.react.uimanager.ViewManager;
import com.facebook.react.uimanager.events.Event;
import com.facebook.react.uimanager.events.EventDispatcher;
import com.facebook.react.uimanager.events.EventDispatcherListener;
import com.facebook.react.views.view.ReactViewGroup;
import com.swmansion.reanimated.Utils;
import com.swmansion.rnscreens.Screen;
import com.swmansion.rnscreens.ScreenStack;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.SortedSet;
import java.util.TreeSet;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class SharedTransitionManager {
    private final AnimationsManager mAnimationsManager;
    private NativeMethodsHolder mNativeMethodsHolder;
    private View mTransitionContainer;
    private final List<View> mAddedSharedViews = new ArrayList();
    private final Map<Integer, View> mSharedTransitionParent = new HashMap();
    private final Map<Integer, Integer> mSharedTransitionInParentIndex = new HashMap();
    private final Map<Integer, Snapshot> mSnapshotRegistry = new HashMap();
    private final Map<Integer, View> mCurrentSharedTransitionViews = new HashMap();
    private final Map<Integer, SortedSet<Integer>> mSharedViewChildrenIndices = new HashMap();
    private final List<View> mRemovedSharedViews = new ArrayList();
    private final Set<Integer> mViewTagsToHide = new HashSet();
    private final Map<Integer, Integer> mDisableCleaningForViewTag = new HashMap();
    private List<SharedElement> mSharedElements = new ArrayList();
    private final Map<Integer, SharedElement> mSharedElementsLookup = new HashMap();
    private final List<SharedElement> mSharedElementsWithProgress = new ArrayList();
    private final List<SharedElement> mSharedElementsWithAnimation = new ArrayList();
    private final Set<View> mReattachedViews = new HashSet();
    private boolean mIsTransitionPrepared = false;
    private final Set<Integer> mTagsToCleanup = new HashSet();

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class PrepareConfigCleanupTreeVisitor implements TreeVisitor {
        PrepareConfigCleanupTreeVisitor() {
        }

        @Override // com.swmansion.reanimated.layoutReanimation.SharedTransitionManager.TreeVisitor
        public void run(View view) {
            SharedTransitionManager.this.mTagsToCleanup.add(Integer.valueOf(view.getId()));
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class SnapshotTreeVisitor implements TreeVisitor {
        SnapshotTreeVisitor() {
        }

        @Override // com.swmansion.reanimated.layoutReanimation.SharedTransitionManager.TreeVisitor
        public void run(View view) {
            if (SharedTransitionManager.this.mAnimationsManager.hasAnimationForTag(view.getId(), 4)) {
                SharedTransitionManager.this.mRemovedSharedViews.add(view);
                SharedTransitionManager.this.makeSnapshot(view);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class TopWillAppearListener implements EventDispatcherListener {
        private final EventDispatcher mEventDispatcher;

        public TopWillAppearListener(EventDispatcher eventDispatcher) {
            this.mEventDispatcher = eventDispatcher;
        }

        @Override // com.facebook.react.uimanager.events.EventDispatcherListener
        public void onEventDispatch(Event event) {
            if (event.getEventName().equals("topWillAppear")) {
                SharedTransitionManager sharedTransitionManager = SharedTransitionManager.this;
                sharedTransitionManager.tryStartSharedTransitionForViews(sharedTransitionManager.mAddedSharedViews, true);
                SharedTransitionManager.this.mAddedSharedViews.clear();
                this.mEventDispatcher.removeListener(this);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface TreeVisitor {
        void run(View view);
    }

    public SharedTransitionManager(AnimationsManager animationsManager) {
        this.mAnimationsManager = animationsManager;
    }

    private void clearAllSharedConfigsForView(View view) {
        int id2 = view.getId();
        this.mSnapshotRegistry.remove(Integer.valueOf(id2));
        this.mNativeMethodsHolder.clearAnimationConfig(id2);
    }

    private void disableCleaningForViewTag(int i10) {
        Integer num = this.mDisableCleaningForViewTag.get(Integer.valueOf(i10));
        if (num != null) {
            this.mDisableCleaningForViewTag.put(Integer.valueOf(i10), Integer.valueOf(num.intValue() + 1));
        } else {
            this.mDisableCleaningForViewTag.put(Integer.valueOf(i10), 1);
        }
    }

    private void enableCleaningForViewTag(int i10) {
        Integer num = this.mDisableCleaningForViewTag.get(Integer.valueOf(i10));
        if (num == null) {
            return;
        }
        if (num.intValue() == 1) {
            this.mDisableCleaningForViewTag.remove(Integer.valueOf(i10));
        } else {
            this.mDisableCleaningForViewTag.put(Integer.valueOf(i10), Integer.valueOf(num.intValue() - 1));
        }
    }

    private View findScreen(View view) {
        for (ViewParent parent = view.getParent(); parent != null; parent = parent.getParent()) {
            if (parent.getClass().getSimpleName().equals(Screen.TAG)) {
                return (View) parent;
            }
        }
        return null;
    }

    private void findSharedViewsForScreen(View view, List<View> list) {
        View topScreenForStack = ScreensHelper.getTopScreenForStack(view);
        if (topScreenForStack instanceof ViewGroup) {
            ViewGroup viewGroup = (ViewGroup) topScreenForStack;
            if (this.mAnimationsManager.hasAnimationForTag(topScreenForStack.getId(), 4)) {
                list.add(topScreenForStack);
            }
            for (int i10 = 0; i10 < viewGroup.getChildCount(); i10++) {
                findSharedViewsForScreen(viewGroup.getChildAt(i10), list);
            }
        }
    }

    private View findStack(View view) {
        for (ViewParent parent = view.getParent(); parent != null; parent = parent.getParent()) {
            if (parent.getClass().getSimpleName().equals(ScreenStack.TAG)) {
                return (View) parent;
            }
        }
        return null;
    }

    private List<SharedElement> getSharedElementsForCurrentTransition(List<View> list, boolean z10) {
        boolean z11;
        boolean z12;
        boolean z13;
        ViewGroup viewGroup;
        if (this.mReattachedViews.size() > 0) {
            z11 = true;
        } else {
            z11 = false;
        }
        ArrayList<View> arrayList = new ArrayList();
        HashSet hashSet = new HashSet();
        if (!z10) {
            for (View view : list) {
                hashSet.add(Integer.valueOf(view.getId()));
            }
        }
        ArrayList<SharedElement> arrayList2 = new ArrayList();
        ReanimatedNativeHierarchyManager reanimatedNativeHierarchyManager = this.mAnimationsManager.getReanimatedNativeHierarchyManager();
        HashSet hashSet2 = new HashSet();
        for (View view2 : this.mRemovedSharedViews) {
            hashSet2.add(Integer.valueOf(view2.getId()));
        }
        for (View view3 : list) {
            int findPrecedingViewTagForTransition = this.mNativeMethodsHolder.findPrecedingViewTagForTransition(view3.getId());
            if (z11) {
                while (hashSet2.contains(Integer.valueOf(findPrecedingViewTagForTransition))) {
                    this.mNativeMethodsHolder.clearAnimationConfig(findPrecedingViewTagForTransition);
                    findPrecedingViewTagForTransition = this.mNativeMethodsHolder.findPrecedingViewTagForTransition(view3.getId());
                }
            }
            if (!z10 && hashSet.contains(Integer.valueOf(findPrecedingViewTagForTransition))) {
                z12 = true;
            } else {
                z12 = false;
            }
            if (findPrecedingViewTagForTransition >= 0) {
                View maybeOverrideSiblingForTabNavigator = maybeOverrideSiblingForTabNavigator(view3, reanimatedNativeHierarchyManager.resolveView(findPrecedingViewTagForTransition));
                if (z10) {
                    maybeOverrideSiblingForTabNavigator = view3;
                    view3 = maybeOverrideSiblingForTabNavigator;
                }
                if (z12) {
                    clearAllSharedConfigsForView(view3);
                    clearAllSharedConfigsForView(maybeOverrideSiblingForTabNavigator);
                } else {
                    boolean containsKey = this.mCurrentSharedTransitionViews.containsKey(Integer.valueOf(view3.getId()));
                    if (!containsKey) {
                        View findScreen = findScreen(view3);
                        View findScreen2 = findScreen(maybeOverrideSiblingForTabNavigator);
                        if (findScreen != null && findScreen2 != null && (viewGroup = (ViewGroup) findStack(findScreen)) != null) {
                            ViewGroupManager viewGroupManager = (ViewGroupManager) reanimatedNativeHierarchyManager.resolveViewManager(viewGroup.getId());
                            z13 = z11;
                            boolean z14 = false;
                            for (int i10 = 0; i10 < viewGroupManager.getChildCount((ViewGroupManager) viewGroup); i10++) {
                                if (viewGroupManager.getChildAt((ViewGroupManager) viewGroup, i10) == findScreen2) {
                                    z14 = true;
                                }
                            }
                            if (z14) {
                                ViewGroupManager viewGroupManager2 = (ViewGroupManager) reanimatedNativeHierarchyManager.resolveViewManager(viewGroup.getId());
                                int childCount = viewGroupManager2.getChildCount((ViewGroupManager) viewGroup);
                                if (childCount >= 2) {
                                    View childAt = viewGroupManager2.getChildAt((ViewGroupManager) viewGroup, childCount - 1);
                                    View childAt2 = viewGroupManager2.getChildAt((ViewGroupManager) viewGroup, childCount - 2);
                                    if (!z10) {
                                    }
                                }
                                z11 = z13;
                            }
                        }
                    } else {
                        z13 = z11;
                    }
                    Snapshot snapshot = null;
                    if (z10) {
                        this.mViewTagsToHide.add(Integer.valueOf(view3.getId()));
                        if (containsKey) {
                            snapshot = new Snapshot(view3);
                        } else {
                            makeSnapshot(view3);
                        }
                        makeSnapshot(maybeOverrideSiblingForTabNavigator);
                    } else if (containsKey) {
                        makeSnapshot(view3);
                    }
                    if (snapshot == null) {
                        snapshot = this.mSnapshotRegistry.get(Integer.valueOf(view3.getId()));
                    }
                    Snapshot snapshot2 = this.mSnapshotRegistry.get(Integer.valueOf(maybeOverrideSiblingForTabNavigator.getId()));
                    if (snapshot2 == null) {
                        makeSnapshot(maybeOverrideSiblingForTabNavigator);
                    }
                    arrayList.add(view3);
                    arrayList.add(maybeOverrideSiblingForTabNavigator);
                    arrayList2.add(new SharedElement(view3, snapshot, maybeOverrideSiblingForTabNavigator, snapshot2));
                    z11 = z13;
                }
            }
        }
        if (!arrayList.isEmpty()) {
            ArrayList<View> arrayList3 = new ArrayList();
            for (SharedElement sharedElement : this.mSharedElements) {
                arrayList3.add(sharedElement.sourceView);
            }
            HashSet hashSet3 = new HashSet();
            for (SharedElement sharedElement2 : arrayList2) {
                hashSet3.add(sharedElement2.sourceView);
            }
            for (View view4 : arrayList3) {
                if (!hashSet3.contains(view4)) {
                    this.mViewTagsToHide.remove(Integer.valueOf(view4.getId()));
                    view4.setVisibility(0);
                }
            }
            this.mCurrentSharedTransitionViews.clear();
            for (View view5 : arrayList) {
                this.mCurrentSharedTransitionViews.put(Integer.valueOf(view5.getId()), view5);
            }
        }
        this.mSharedElements = arrayList2;
        for (SharedElement sharedElement3 : arrayList2) {
            this.mSharedElementsLookup.put(Integer.valueOf(sharedElement3.sourceView.getId()), sharedElement3);
        }
        return arrayList2;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public /* synthetic */ void lambda$finishSharedAnimation$1(ViewParent viewParent) {
        if (this.mReattachedViews.size() > 0) {
            return;
        }
        ((ViewGroup) viewParent).removeView(this.mTransitionContainer);
    }

    private View maybeOverrideSiblingForTabNavigator(View view, View view2) {
        View tabNavigator = ScreensHelper.getTabNavigator(view);
        if (tabNavigator == null) {
            return view2;
        }
        int id2 = view2.getId();
        int[] sharedGroup = this.mNativeMethodsHolder.getSharedGroup(view.getId());
        int i10 = -1;
        for (int i11 = 0; i11 < sharedGroup.length; i11++) {
            if (sharedGroup[i11] == id2) {
                i10 = i11;
            }
        }
        while (i10 >= 0) {
            View resolveView = this.mAnimationsManager.resolveView(sharedGroup[i10]);
            if (tabNavigator == ScreensHelper.getTabNavigator(resolveView)) {
                return resolveView;
            }
            i10--;
        }
        return view2;
    }

    private void maybeRestartAnimationWithNewLayout(View view) {
        View view2 = this.mCurrentSharedTransitionViews.get(Integer.valueOf(view.getId()));
        if (view2 == null) {
            return;
        }
        ArrayList arrayList = new ArrayList();
        for (SharedElement sharedElement : this.mSharedElements) {
            if (sharedElement.targetView == view2) {
                arrayList.add(sharedElement);
                View view3 = sharedElement.sourceView;
                View view4 = sharedElement.targetView;
                Snapshot snapshot = new Snapshot(view3);
                Snapshot snapshot2 = this.mSnapshotRegistry.get(Integer.valueOf(view4.getId()));
                Snapshot snapshot3 = new Snapshot(view4);
                int i10 = (snapshot2.originX - snapshot2.originXByParent) + snapshot3.originX;
                int i11 = (snapshot2.originY - snapshot2.originYByParent) + snapshot3.originY;
                snapshot2.originX = i10;
                snapshot2.originY = i11;
                snapshot2.globalOriginX = i10;
                snapshot2.globalOriginY = i11;
                snapshot2.originXByParent = snapshot3.originXByParent;
                snapshot2.originYByParent = snapshot3.originYByParent;
                snapshot2.height = snapshot3.height;
                snapshot2.width = snapshot3.width;
                sharedElement.sourceViewSnapshot = snapshot;
                sharedElement.targetViewSnapshot = snapshot2;
                disableCleaningForViewTag(view3.getId());
                disableCleaningForViewTag(view4.getId());
            }
        }
        startSharedTransition(arrayList, 4);
    }

    private void reparentSharedViewsForCurrentTransition(List<SharedElement> list) {
        for (SharedElement sharedElement : list) {
            View view = sharedElement.sourceView;
            if (!this.mSharedTransitionParent.containsKey(Integer.valueOf(view.getId()))) {
                ViewGroup viewGroup = (ViewGroup) view.getParent();
                int id2 = viewGroup.getId();
                int indexOfChild = viewGroup.indexOfChild(view);
                this.mSharedTransitionParent.put(Integer.valueOf(view.getId()), (View) view.getParent());
                this.mSharedTransitionInParentIndex.put(Integer.valueOf(view.getId()), Integer.valueOf(indexOfChild));
                SortedSet<Integer> sortedSet = this.mSharedViewChildrenIndices.get(Integer.valueOf(id2));
                if (sortedSet == null) {
                    this.mSharedViewChildrenIndices.put(Integer.valueOf(id2), new TreeSet(Collections.singleton(Integer.valueOf(indexOfChild))));
                } else {
                    sortedSet.add(Integer.valueOf(indexOfChild));
                }
            }
        }
        for (SharedElement sharedElement2 : list) {
            View view2 = sharedElement2.sourceView;
            ((ViewGroup) view2.getParent()).removeView(view2);
            ((ViewGroup) this.mTransitionContainer).addView(view2);
            this.mReattachedViews.add(view2);
        }
    }

    private void setupTransitionContainer() {
        Activity currentActivity;
        if (this.mTransitionContainer == null) {
            this.mTransitionContainer = new ReactViewGroup(this.mAnimationsManager.getContext());
        }
        if (this.mTransitionContainer.getParent() == null && (currentActivity = this.mAnimationsManager.getContext().getCurrentActivity()) != null) {
            ((ViewGroup) currentActivity.getWindow().getDecorView().getRootView()).addView(this.mTransitionContainer);
            this.mTransitionContainer.bringToFront();
        }
    }

    private void sortViewsByTags(List<View> list) {
        Collections.sort(list, new Comparator() { // from class: com.swmansion.reanimated.layoutReanimation.d
            @Override // java.util.Comparator
            public final int compare(Object obj, Object obj2) {
                int compare;
                compare = Integer.compare(((View) obj2).getId(), ((View) obj).getId());
                return compare;
            }
        });
    }

    private void startPreparedTransitions() {
        startSharedTransition(this.mSharedElementsWithAnimation, 4);
        startSharedTransition(this.mSharedElementsWithProgress, 5);
    }

    private void startSharedAnimationForView(View view, Snapshot snapshot, Snapshot snapshot2, int i10) {
        HashMap<String, Object> targetMap = snapshot2.toTargetMap();
        HashMap<String, Object> prepareDataForAnimationWorklet = this.mAnimationsManager.prepareDataForAnimationWorklet(snapshot.toCurrentMap(), false, true);
        HashMap<String, Object> hashMap = new HashMap<>(this.mAnimationsManager.prepareDataForAnimationWorklet(targetMap, true, true));
        hashMap.putAll(prepareDataForAnimationWorklet);
        this.mNativeMethodsHolder.startAnimation(view.getId(), i10, hashMap);
    }

    private void startSharedTransition(List<SharedElement> list, int i10) {
        for (SharedElement sharedElement : list) {
            View view = sharedElement.sourceView;
            view.setVisibility(0);
            startSharedAnimationForView(view, sharedElement.sourceViewSnapshot, sharedElement.targetViewSnapshot, i10);
            sharedElement.targetView.setVisibility(4);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public boolean tryStartSharedTransitionForViews(List<View> list, boolean z10) {
        if (!prepareSharedTransition(list, z10)) {
            return false;
        }
        startPreparedTransitions();
        return true;
    }

    private void visitTree(View view, TreeVisitor treeVisitor) {
        ViewGroupManager viewGroupManager;
        int id2 = view.getId();
        if (id2 != -1) {
            ReanimatedNativeHierarchyManager reanimatedNativeHierarchyManager = this.mAnimationsManager.getReanimatedNativeHierarchyManager();
            try {
                treeVisitor.run(view);
                if (view instanceof ViewGroup) {
                    ViewGroup viewGroup = (ViewGroup) view;
                    ViewManager resolveViewManager = reanimatedNativeHierarchyManager.resolveViewManager(id2);
                    if (resolveViewManager instanceof ViewGroupManager) {
                        viewGroupManager = (ViewGroupManager) resolveViewManager;
                    } else {
                        viewGroupManager = null;
                    }
                    if (viewGroupManager != null) {
                        for (int i10 = 0; i10 < viewGroupManager.getChildCount((ViewGroupManager) viewGroup); i10++) {
                            visitTree(viewGroupManager.getChildAt((ViewGroupManager) viewGroup, i10), treeVisitor);
                        }
                    }
                }
            } catch (IllegalViewOperationException unused) {
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void doSnapshotForTopScreenViews(ViewGroup viewGroup) {
        if (viewGroup.getChildCount() > 0) {
            View childAt = viewGroup.getChildAt(0);
            if (childAt instanceof ViewGroup) {
                visitNativeTreeAndMakeSnapshot(((ViewGroup) childAt).getChildAt(0));
            } else {
                Log.e("[Reanimated]", "Unable to recognize screen on stack.");
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void finishSharedAnimation(int i10) {
        final ViewParent parent;
        if (this.mDisableCleaningForViewTag.containsKey(Integer.valueOf(i10))) {
            enableCleaningForViewTag(i10);
            return;
        }
        SharedElement sharedElement = this.mSharedElementsLookup.get(Integer.valueOf(i10));
        if (sharedElement != null) {
            this.mSharedElementsLookup.remove(Integer.valueOf(i10));
            View view = sharedElement.sourceView;
            if (this.mReattachedViews.contains(view)) {
                this.mReattachedViews.remove(view);
                int id2 = view.getId();
                ((ViewGroup) this.mTransitionContainer).removeView(view);
                Integer num = this.mSharedTransitionInParentIndex.get(Integer.valueOf(id2));
                int intValue = num.intValue();
                ViewGroup viewGroup = (ViewGroup) this.mSharedTransitionParent.get(Integer.valueOf(id2));
                int id3 = viewGroup.getId();
                SortedSet<Integer> sortedSet = this.mSharedViewChildrenIndices.get(Integer.valueOf(id3));
                int size = sortedSet.headSet(num).size();
                sortedSet.remove(num);
                if (sortedSet.isEmpty()) {
                    this.mSharedViewChildrenIndices.remove(Integer.valueOf(id3));
                }
                int i11 = intValue - size;
                if (i11 <= viewGroup.getChildCount()) {
                    viewGroup.addView(view, i11);
                } else {
                    viewGroup.addView(view);
                }
                Snapshot snapshot = this.mSnapshotRegistry.get(Integer.valueOf(id2));
                if (snapshot != null) {
                    int i12 = snapshot.originX;
                    int i13 = snapshot.originY;
                    if (findStack(view) == null) {
                        snapshot.originX = snapshot.originXByParent;
                        snapshot.originY = snapshot.originYByParent;
                    }
                    HashMap<String, Object> basicMap = snapshot.toBasicMap();
                    HashMap hashMap = new HashMap();
                    for (String str : basicMap.keySet()) {
                        Object obj = basicMap.get(str);
                        if (str.equals(Snapshot.TRANSFORM_MATRIX)) {
                            hashMap.put(str, obj);
                        } else {
                            hashMap.put(str, Double.valueOf(PixelUtil.toDIPFromPixel(Utils.convertToFloat(obj))));
                        }
                    }
                    this.mAnimationsManager.progressLayoutAnimation(id2, hashMap, true);
                    snapshot.originX = i12;
                    snapshot.originY = i13;
                }
                if (this.mViewTagsToHide.contains(Integer.valueOf(i10))) {
                    view.setVisibility(4);
                }
                this.mCurrentSharedTransitionViews.remove(Integer.valueOf(sharedElement.targetView.getId()));
                this.mCurrentSharedTransitionViews.remove(Integer.valueOf(id2));
                this.mSharedTransitionParent.remove(Integer.valueOf(id2));
                this.mSharedTransitionInParentIndex.remove(Integer.valueOf(id2));
            }
            sharedElement.targetView.setVisibility(0);
            if (this.mRemovedSharedViews.contains(view)) {
                this.mRemovedSharedViews.remove(view);
                this.mSnapshotRegistry.remove(Integer.valueOf(view.getId()));
                this.mNativeMethodsHolder.clearAnimationConfig(view.getId());
            }
            if (this.mReattachedViews.isEmpty()) {
                View view2 = this.mTransitionContainer;
                if (view2 != null && (parent = view2.getParent()) != null) {
                    this.mTransitionContainer.post(new Runnable() { // from class: com.swmansion.reanimated.layoutReanimation.e
                        @Override // java.lang.Runnable
                        public final void run() {
                            SharedTransitionManager.this.lambda$finishSharedAnimation$1(parent);
                        }
                    });
                }
                this.mSharedElements.clear();
                this.mSharedElementsWithProgress.clear();
                this.mSharedElementsWithAnimation.clear();
                this.mViewTagsToHide.clear();
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public View getTransitioningView(int i10) {
        return this.mCurrentSharedTransitionViews.get(Integer.valueOf(i10));
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void makeSnapshot(View view) {
        this.mSnapshotRegistry.put(Integer.valueOf(view.getId()), new Snapshot(view));
    }

    public void navigationTabChanged(View view, View view2) {
        Snapshot snapshot;
        this.mAddedSharedViews.clear();
        ArrayList arrayList = new ArrayList();
        ArrayList arrayList2 = new ArrayList();
        findSharedViewsForScreen(view, arrayList2);
        sortViewsByTags(arrayList2);
        for (View view3 : arrayList2) {
            int[] sharedGroup = this.mNativeMethodsHolder.getSharedGroup(view3.getId());
            int length = sharedGroup.length - 1;
            while (true) {
                if (length >= 0) {
                    View resolveView = this.mAnimationsManager.resolveView(sharedGroup[length]);
                    if (ScreensHelper.isViewChildOfScreen(resolveView, view2) && (snapshot = this.mSnapshotRegistry.get(Integer.valueOf(view3.getId()))) != null) {
                        arrayList.add(new SharedElement(view3, snapshot, resolveView, new Snapshot(resolveView)));
                        break;
                    }
                    length--;
                }
            }
        }
        if (arrayList.isEmpty()) {
            return;
        }
        this.mSharedElements = arrayList;
        this.mSharedElementsWithAnimation.clear();
        for (SharedElement sharedElement : arrayList) {
            this.mSharedElementsLookup.put(Integer.valueOf(sharedElement.sourceView.getId()), sharedElement);
            this.mSharedElementsWithAnimation.add(sharedElement);
        }
        setupTransitionContainer();
        reparentSharedViewsForCurrentTransition(arrayList);
        startSharedTransition(this.mSharedElementsWithAnimation, 4);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void notifyAboutNewView(View view) {
        this.mAddedSharedViews.add(view);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void notifyAboutRemovedView(View view) {
        this.mRemovedSharedViews.add(view);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void onScreenWillDisappear() {
        for (Integer num : this.mTagsToCleanup) {
            this.mNativeMethodsHolder.clearAnimationConfig(num.intValue());
        }
        this.mTagsToCleanup.clear();
        if (!this.mIsTransitionPrepared) {
            return;
        }
        this.mIsTransitionPrepared = false;
        for (SharedElement sharedElement : this.mSharedElementsWithAnimation) {
            sharedElement.targetViewSnapshot = new Snapshot(sharedElement.targetView);
        }
        for (SharedElement sharedElement2 : this.mSharedElementsWithProgress) {
            sharedElement2.targetViewSnapshot = new Snapshot(sharedElement2.targetView);
        }
        startPreparedTransitions();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void onViewsRemoval(int[] iArr) {
        if (iArr != null) {
            visitTreeForTags(iArr, new SnapshotTreeVisitor());
            if (this.mRemovedSharedViews.size() > 0) {
                boolean prepareSharedTransition = prepareSharedTransition(this.mRemovedSharedViews, false);
                this.mIsTransitionPrepared = prepareSharedTransition;
                if (!prepareSharedTransition) {
                    this.mRemovedSharedViews.clear();
                }
                visitTreeForTags(iArr, new PrepareConfigCleanupTreeVisitor());
            }
        }
    }

    void orderByAnimationTypes(List<SharedElement> list) {
        this.mSharedElementsWithProgress.clear();
        this.mSharedElementsWithAnimation.clear();
        for (SharedElement sharedElement : list) {
            if (this.mAnimationsManager.hasAnimationForTag(sharedElement.sourceView.getId(), 5)) {
                this.mSharedElementsWithProgress.add(sharedElement);
            } else {
                this.mSharedElementsWithAnimation.add(sharedElement);
            }
        }
    }

    protected boolean prepareSharedTransition(List<View> list, boolean z10) {
        if (list.isEmpty()) {
            return false;
        }
        sortViewsByTags(list);
        List<SharedElement> sharedElementsForCurrentTransition = getSharedElementsForCurrentTransition(list, z10);
        if (sharedElementsForCurrentTransition.isEmpty()) {
            return false;
        }
        setupTransitionContainer();
        reparentSharedViewsForCurrentTransition(sharedElementsForCurrentTransition);
        orderByAnimationTypes(sharedElementsForCurrentTransition);
        return true;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void screenDidLayout(View view) {
        EventDispatcher eventDispatcherForReactTag;
        if (!this.mAddedSharedViews.isEmpty() && (eventDispatcherForReactTag = UIManagerHelper.getEventDispatcherForReactTag((ReactContext) view.getContext(), view.getId())) != null) {
            eventDispatcherForReactTag.addListener(new TopWillAppearListener(eventDispatcherForReactTag));
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void setNativeMethods(NativeMethodsHolder nativeMethodsHolder) {
        this.mNativeMethodsHolder = nativeMethodsHolder;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void viewDidLayout(View view) {
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void visitNativeTreeAndMakeSnapshot(View view) {
        View topScreenForStack = ScreensHelper.getTopScreenForStack(view);
        if (topScreenForStack instanceof ViewGroup) {
            ViewGroup viewGroup = (ViewGroup) topScreenForStack;
            if (this.mAnimationsManager.hasAnimationForTag(topScreenForStack.getId(), 4)) {
                makeSnapshot(topScreenForStack);
            }
            for (int i10 = 0; i10 < viewGroup.getChildCount(); i10++) {
                visitNativeTreeAndMakeSnapshot(viewGroup.getChildAt(i10));
            }
        }
    }

    protected void visitTreeForTags(int[] iArr, TreeVisitor treeVisitor) {
        if (iArr != null) {
            ReanimatedNativeHierarchyManager reanimatedNativeHierarchyManager = this.mAnimationsManager.getReanimatedNativeHierarchyManager();
            for (int i10 : iArr) {
                visitTree(reanimatedNativeHierarchyManager.resolveView(i10), treeVisitor);
            }
        }
    }
}
