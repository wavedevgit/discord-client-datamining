package com.facebook.react.fabric.mounting;

import android.view.View;
import android.view.ViewGroup;
import android.view.ViewParent;
import androidx.annotation.NonNull;
import androidx.collection.SparseArrayCompat;
import com.facebook.react.bridge.GuardedRunnable;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactNoCrashSoftException;
import com.facebook.react.bridge.ReactSoftExceptionLogger;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.RetryableMountingLayerException;
import com.facebook.react.bridge.SoftAssertions;
import com.facebook.react.bridge.UiThreadUtil;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.common.build.ReactBuildConfig;
import com.facebook.react.fabric.events.EventEmitterWrapper;
import com.facebook.react.fabric.mounting.MountingManager;
import com.facebook.react.fabric.mounting.mountitems.MountItem;
import com.facebook.react.internal.featureflags.ReactNativeFeatureFlags;
import com.facebook.react.touch.JSResponderHandler;
import com.facebook.react.uimanager.IViewGroupManager;
import com.facebook.react.uimanager.IllegalViewOperationException;
import com.facebook.react.uimanager.ReactOverflowViewWithInset;
import com.facebook.react.uimanager.ReactRoot;
import com.facebook.react.uimanager.ReactStylesDiffMap;
import com.facebook.react.uimanager.RootViewManager;
import com.facebook.react.uimanager.StateWrapper;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewManager;
import com.facebook.react.uimanager.ViewManagerRegistry;
import java.util.ArrayDeque;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.Map;
import java.util.Queue;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class SurfaceMountingManager {
    private static final boolean SHOW_CHANGED_VIEW_HIERARCHIES;
    public static final String TAG = "SurfaceMountingManager";
    private JSResponderHandler mJSResponderHandler;
    private MountingManager.MountItemExecutor mMountItemExecutor;
    private RootViewManager mRootViewManager;
    private final int mSurfaceId;
    private SparseArrayCompat mTagSetForStoppedSurface;
    private ThemedReactContext mThemedReactContext;
    private ViewManagerRegistry mViewManagerRegistry;
    private volatile boolean mIsStopped = false;
    private volatile boolean mRootViewAttached = false;
    private ConcurrentHashMap<Integer, ViewState> mTagToViewState = new ConcurrentHashMap<>();
    private Queue<MountItem> mOnViewAttachMountItems = new ArrayDeque();
    private final Set<Integer> mViewsWithActiveTouches = new HashSet();
    private final Set<Integer> mViewsToDeleteAfterTouchFinishes = new HashSet();
    private final ViewTransitionCoordinator mViewTransitionCoordinator = new ViewTransitionCoordinator();

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class PendingViewEvent {
        private final boolean mCanCoalesceEvent;
        private final int mEventCategory;
        private final String mEventName;
        private final WritableMap mParams;

        public PendingViewEvent(String str, WritableMap writableMap, int i10, boolean z10) {
            this.mEventName = str;
            this.mParams = writableMap;
            this.mEventCategory = i10;
            this.mCanCoalesceEvent = z10;
        }

        public void dispatch(EventEmitterWrapper eventEmitterWrapper) {
            if (this.mCanCoalesceEvent) {
                eventEmitterWrapper.dispatchUnique(this.mEventName, this.mParams);
            } else {
                eventEmitterWrapper.dispatch(this.mEventName, this.mParams, this.mEventCategory);
            }
        }
    }

    static {
        ReactBuildConfig reactBuildConfig = ReactBuildConfig.INSTANCE;
        SHOW_CHANGED_VIEW_HIERARCHIES = false;
    }

    public SurfaceMountingManager(int i10, @NonNull JSResponderHandler jSResponderHandler, @NonNull ViewManagerRegistry viewManagerRegistry, @NonNull RootViewManager rootViewManager, @NonNull MountingManager.MountItemExecutor mountItemExecutor, @NonNull ThemedReactContext themedReactContext) {
        this.mSurfaceId = i10;
        this.mJSResponderHandler = jSResponderHandler;
        this.mViewManagerRegistry = viewManagerRegistry;
        this.mRootViewManager = rootViewManager;
        this.mMountItemExecutor = mountItemExecutor;
        this.mThemedReactContext = themedReactContext;
    }

    private void addRootView(@NonNull final View view) {
        if (isStopped()) {
            return;
        }
        this.mTagToViewState.put(Integer.valueOf(this.mSurfaceId), new ViewState(this.mSurfaceId, view, this.mRootViewManager, true));
        GuardedRunnable guardedRunnable = new GuardedRunnable((ReactContext) db.a.c(this.mThemedReactContext)) { // from class: com.facebook.react.fabric.mounting.SurfaceMountingManager.1
            @Override // com.facebook.react.bridge.GuardedRunnable
            public void runGuarded() {
                if (SurfaceMountingManager.this.isStopped()) {
                    return;
                }
                if (view.getId() == SurfaceMountingManager.this.mSurfaceId) {
                    String str = SurfaceMountingManager.TAG;
                    ReactSoftExceptionLogger.logSoftException(str, new IllegalViewOperationException("Race condition in addRootView detected. Trying to set an id of [" + SurfaceMountingManager.this.mSurfaceId + "] on the RootView, but that id has already been set. "));
                } else if (view.getId() != -1) {
                    String str2 = SurfaceMountingManager.TAG;
                    p8.a.o(str2, "Trying to add RootTag to RootView that already has a tag: existing tag: [%d] new tag: [%d]", Integer.valueOf(view.getId()), Integer.valueOf(SurfaceMountingManager.this.mSurfaceId));
                    ReactSoftExceptionLogger.logSoftException(str2, new IllegalViewOperationException("Trying to add a root view with an explicit id already set. React Native uses the id field to track react tags and will overwrite this field. If that is fine, explicitly overwrite the id field to View.NO_ID before calling addRootView."));
                }
                view.setId(SurfaceMountingManager.this.mSurfaceId);
                View view2 = view;
                if (view2 instanceof ReactRoot) {
                    ((ReactRoot) view2).setRootViewTag(SurfaceMountingManager.this.mSurfaceId);
                }
                SurfaceMountingManager.this.executeMountItemsOnViewAttach();
                SurfaceMountingManager.this.mRootViewAttached = true;
            }
        };
        if (UiThreadUtil.isOnUiThread()) {
            guardedRunnable.run();
        } else {
            UiThreadUtil.runOnUiThread(guardedRunnable);
        }
    }

    private void addViewAtInternal(final ViewGroup viewGroup, final View view, final int i10) {
        UiThreadUtil.assertOnUiThread();
        if (!isStopped()) {
            if (view.getParent() == null) {
                boolean z10 = SHOW_CHANGED_VIEW_HIERARCHIES;
                if (z10) {
                    String str = TAG;
                    p8.a.m(str, "addViewAt: [" + view.getId() + "] -> [" + viewGroup.getId() + "] idx: " + i10 + " BEFORE");
                    logViewHierarchy(viewGroup, false);
                }
                try {
                    getViewGroupManager(getViewState(viewGroup.getId())).addView(viewGroup, view, i10);
                    if (z10) {
                        UiThreadUtil.runOnUiThread(new Runnable() { // from class: com.facebook.react.fabric.mounting.SurfaceMountingManager.2
                            @Override // java.lang.Runnable
                            public void run() {
                                String str2 = SurfaceMountingManager.TAG;
                                p8.a.m(str2, "addViewAt: [" + view.getId() + "] -> [" + viewGroup.getId() + "] idx: " + i10 + " AFTER");
                                SurfaceMountingManager.logViewHierarchy(viewGroup, false);
                            }
                        });
                        return;
                    }
                    return;
                } catch (IllegalStateException | IndexOutOfBoundsException e10) {
                    throw new IllegalStateException("addViewAt: failed to insert view [" + view.getId() + "] into parent [" + viewGroup.getId() + "] at index " + i10, e10);
                }
            }
            throw new IllegalViewOperationException("addViewAtInternal: cannot insert view [" + view.getId() + "] into parent [" + viewGroup.getId() + "]: View already has a parent: [" + ((ViewGroup) view.getParent()).getId() + "]");
        }
    }

    private void deleteViewInternal(int i10) {
        ViewState nullableViewState = getNullableViewState(i10);
        if (nullableViewState == null) {
            ReactSoftExceptionLogger.logSoftException(ReactSoftExceptionLogger.Categories.SURFACE_MOUNTING_MANAGER_MISSING_VIEWSTATE, new ReactNoCrashSoftException("Unable to find viewState for tag: " + i10 + " for deleteView"));
        } else if (this.mViewsWithActiveTouches.contains(Integer.valueOf(i10))) {
            this.mViewsToDeleteAfterTouchFinishes.add(Integer.valueOf(i10));
        } else {
            this.mTagToViewState.remove(Integer.valueOf(i10));
            onViewStateDeleted(nullableViewState);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void executeMountItemsOnViewAttach() {
        this.mMountItemExecutor.executeItems(this.mOnViewAttachMountItems);
    }

    private ViewState getNullableViewState(int i10) {
        ConcurrentHashMap<Integer, ViewState> concurrentHashMap = this.mTagToViewState;
        if (concurrentHashMap == null) {
            return null;
        }
        return concurrentHashMap.get(Integer.valueOf(i10));
    }

    @NonNull
    private static IViewGroupManager<ViewGroup> getViewGroupManager(@NonNull ViewState viewState) {
        ViewManager viewManager = viewState.mViewManager;
        if (viewManager != null) {
            return (IViewGroupManager) viewManager;
        }
        throw new IllegalStateException("Unable to find ViewManager for view: " + viewState);
    }

    @NonNull
    private ViewState getViewState(int i10) {
        ViewState viewState = this.mTagToViewState.get(Integer.valueOf(i10));
        if (viewState != null) {
            return viewState;
        }
        throw new RetryableMountingLayerException("Unable to find viewState for tag " + i10 + ". Surface stopped: " + isStopped());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public /* synthetic */ void lambda$addViewAt$2(int i10) {
        this.mViewTransitionCoordinator.drainOperationsForChild(i10, this);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public /* synthetic */ void lambda$markViewInTransition$1(int i10) {
        this.mViewTransitionCoordinator.drainOperationsForChild(i10, this);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public /* synthetic */ void lambda$stopSurface$0() {
        if (ReactNativeFeatureFlags.enableViewRecycling()) {
            this.mViewManagerRegistry.onSurfaceStopped(this.mSurfaceId);
        }
        this.mTagSetForStoppedSurface = new SparseArrayCompat();
        for (Map.Entry<Integer, ViewState> entry : this.mTagToViewState.entrySet()) {
            this.mTagSetForStoppedSurface.k(entry.getKey().intValue(), this);
            onViewStateDeleted(entry.getValue());
        }
        this.mTagToViewState = null;
        this.mJSResponderHandler = null;
        this.mRootViewManager = null;
        this.mMountItemExecutor = null;
        this.mThemedReactContext = null;
        this.mOnViewAttachMountItems.clear();
        String str = TAG;
        p8.a.m(str, "Surface [" + this.mSurfaceId + "] was stopped on SurfaceMountingManager.");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static void logViewHierarchy(ViewGroup viewGroup, boolean z10) {
        ViewGroup viewGroup2;
        int id2;
        int id3 = viewGroup.getId();
        String str = TAG;
        p8.a.m(str, "  <ViewGroup tag=" + id3 + " class=" + viewGroup.getClass().toString() + ">");
        for (int i10 = 0; i10 < viewGroup.getChildCount(); i10++) {
            String str2 = TAG;
            p8.a.m(str2, "     <View idx=" + i10 + " tag=" + viewGroup.getChildAt(i10).getId() + " class=" + viewGroup.getChildAt(i10).getClass().toString() + ">");
        }
        String str3 = TAG;
        p8.a.m(str3, "  </ViewGroup tag=" + id3 + ">");
        if (z10) {
            p8.a.m(str3, "Displaying Ancestors:");
            for (ViewParent parent = viewGroup.getParent(); parent != null; parent = parent.getParent()) {
                if (parent instanceof ViewGroup) {
                    viewGroup2 = (ViewGroup) parent;
                } else {
                    viewGroup2 = null;
                }
                if (viewGroup2 == null) {
                    id2 = -1;
                } else {
                    id2 = viewGroup2.getId();
                }
                String str4 = TAG;
                p8.a.m(str4, "<ViewParent tag=" + id2 + " class=" + parent.getClass().toString() + ">");
            }
        }
    }

    private void onViewStateDeleted(ViewState viewState) {
        StateWrapper stateWrapper = viewState.mStateWrapper;
        if (stateWrapper != null) {
            stateWrapper.destroyState();
            viewState.mStateWrapper = null;
        }
        EventEmitterWrapper eventEmitterWrapper = viewState.mEventEmitter;
        if (eventEmitterWrapper != null) {
            eventEmitterWrapper.destroy();
            viewState.mEventEmitter = null;
        }
        ViewManager viewManager = viewState.mViewManager;
        if (!viewState.mIsRoot && viewManager != null) {
            viewManager.onDropViewInstance(viewState.mView);
        }
    }

    private void removeViewAtInternal(final int i10, final ViewGroup viewGroup, final int i11, int i12) {
        int i13;
        final int i14;
        int i15 = 0;
        if (SHOW_CHANGED_VIEW_HIERARCHIES) {
            p8.a.m(TAG, "removeViewAt: [" + i11 + "] -> [" + i10 + "] idx: " + i12 + " BEFORE");
            logViewHierarchy(viewGroup, false);
        }
        IViewGroupManager<ViewGroup> viewGroupManager = getViewGroupManager(getViewState(i10));
        View childAt = viewGroupManager.getChildAt(viewGroup, i12);
        if (childAt != null) {
            i13 = childAt.getId();
        } else {
            i13 = -1;
        }
        if (i13 != i11) {
            int childCount = viewGroup.getChildCount();
            while (true) {
                if (i15 < childCount) {
                    if (viewGroup.getChildAt(i15).getId() == i11) {
                        break;
                    }
                    i15++;
                } else {
                    i15 = -1;
                    break;
                }
            }
            if (i15 == -1) {
                p8.a.m(TAG, "removeViewAt: [" + i11 + "] -> [" + i10 + "] @" + i12 + ": view already removed from parent! Children in parent: " + childCount);
                return;
            }
            logViewHierarchy(viewGroup, true);
            ReactSoftExceptionLogger.logSoftException(TAG, new IllegalStateException("Tried to remove view [" + i11 + "] of parent [" + i10 + "] at index " + i12 + ", but got view tag " + i13 + " - actual index of view: " + i15));
            i14 = i15;
        } else {
            i14 = i12;
        }
        try {
            viewGroupManager.removeViewAt(viewGroup, i14);
            if (SHOW_CHANGED_VIEW_HIERARCHIES) {
                UiThreadUtil.runOnUiThread(new Runnable() { // from class: com.facebook.react.fabric.mounting.SurfaceMountingManager.3
                    @Override // java.lang.Runnable
                    public void run() {
                        String str = SurfaceMountingManager.TAG;
                        p8.a.m(str, "removeViewAt: [" + i11 + "] -> [" + i10 + "] idx: " + i14 + " AFTER");
                        SurfaceMountingManager.logViewHierarchy(viewGroup, false);
                    }
                });
            }
        } catch (RuntimeException e10) {
            int childCount2 = viewGroupManager.getChildCount(viewGroup);
            logViewHierarchy(viewGroup, true);
            throw new IllegalStateException("Cannot remove child at index " + i14 + " from parent ViewGroup [" + viewGroup.getId() + "], only " + childCount2 + " children in parent. Warning: childCount may be incorrect!", e10);
        }
    }

    public void addViewAt(int i10, final int i11, int i12) {
        UiThreadUtil.assertOnUiThread();
        if (isStopped()) {
            return;
        }
        View view = getViewState(i10).mView;
        if (view instanceof ViewGroup) {
            ViewGroup viewGroup = (ViewGroup) view;
            ViewState viewState = getViewState(i11);
            View view2 = viewState.mView;
            if (view2 != null) {
                ViewParent parent = view2.getParent();
                boolean shouldEnqueueOperation = this.mViewTransitionCoordinator.shouldEnqueueOperation(i11, i10);
                if (!shouldEnqueueOperation && parent == null) {
                    addViewAtInternal(viewGroup, view2, i12);
                    return;
                }
                if (!shouldEnqueueOperation) {
                    this.mViewTransitionCoordinator.markViewInTransition(i11, true, view2, new Runnable() { // from class: com.facebook.react.fabric.mounting.c
                        @Override // java.lang.Runnable
                        public final void run() {
                            SurfaceMountingManager.this.lambda$addViewAt$2(i11);
                        }
                    });
                    p8.a.J(TAG, "addViewAt: View with tag [" + i11 + "] already has a parent [" + ((ViewGroup) parent).getId() + "], enqueuing add operation into ViewTransitionCoordinator");
                }
                this.mViewTransitionCoordinator.enqueueOperation(new AddViewOperation(i11, i10, i12, viewGroup, view2));
                return;
            }
            throw new IllegalStateException("Unable to find view for viewState " + viewState + " and tag " + i11);
        }
        String str = "Unable to add a view into a view that is not a ViewGroup. ParentTag: " + i10 + " - Tag: " + i11 + " - Index: " + i12;
        p8.a.m(TAG, str);
        throw new IllegalStateException(str);
    }

    public void attachRootView(View view, ThemedReactContext themedReactContext) {
        this.mThemedReactContext = themedReactContext;
        addRootView(view);
    }

    public void createView(@NonNull String str, int i10, ReadableMap readableMap, StateWrapper stateWrapper, EventEmitterWrapper eventEmitterWrapper, boolean z10) {
        if (!isStopped()) {
            this.mViewTransitionCoordinator.notifyViewCreated(i10);
            ViewState nullableViewState = getNullableViewState(i10);
            if (nullableViewState != null && nullableViewState.mView != null) {
                return;
            }
            createViewUnsafe(str, i10, readableMap, stateWrapper, eventEmitterWrapper, z10);
        }
    }

    /* JADX WARN: Type inference failed for: r6v1, types: [android.view.View] */
    public void createViewUnsafe(@NonNull String str, int i10, ReadableMap readableMap, StateWrapper stateWrapper, EventEmitterWrapper eventEmitterWrapper, boolean z10) {
        qb.a.c(0L, "SurfaceMountingManager::createViewUnsafe(" + str + ")");
        try {
            ReactStylesDiffMap reactStylesDiffMap = new ReactStylesDiffMap(readableMap);
            ViewState viewState = new ViewState(i10);
            viewState.mCurrentProps = reactStylesDiffMap;
            viewState.mStateWrapper = stateWrapper;
            viewState.mEventEmitter = eventEmitterWrapper;
            this.mTagToViewState.put(Integer.valueOf(i10), viewState);
            if (z10) {
                ViewManager<?, ?> viewManager = this.mViewManagerRegistry.get(str);
                viewState.mView = viewManager.createView(i10, this.mThemedReactContext, reactStylesDiffMap, stateWrapper, this.mJSResponderHandler);
                viewState.mViewManager = viewManager;
            }
            qb.a.i(0L);
        } catch (Throwable th2) {
            qb.a.i(0L);
            throw th2;
        }
    }

    public void deleteView(int i10) {
        UiThreadUtil.assertOnUiThread();
        if (isStopped()) {
            return;
        }
        if (this.mViewTransitionCoordinator.shouldEnqueueOperation(i10, ViewOperationsKt.DELETE_VIEW_PARENT_TAG)) {
            this.mViewTransitionCoordinator.enqueueOperation(new DeleteViewOperation(i10));
            return;
        }
        deleteViewInternal(i10);
    }

    public void enqueuePendingEvent(int i10, String str, boolean z10, WritableMap writableMap, int i11) {
        final ViewState viewState;
        ConcurrentHashMap<Integer, ViewState> concurrentHashMap = this.mTagToViewState;
        if (concurrentHashMap == null || (viewState = concurrentHashMap.get(Integer.valueOf(i10))) == null) {
            return;
        }
        final PendingViewEvent pendingViewEvent = new PendingViewEvent(str, writableMap, i11, z10);
        UiThreadUtil.runOnUiThread(new Runnable() { // from class: com.facebook.react.fabric.mounting.SurfaceMountingManager.4
            @Override // java.lang.Runnable
            public void run() {
                ViewState viewState2 = viewState;
                EventEmitterWrapper eventEmitterWrapper = viewState2.mEventEmitter;
                if (eventEmitterWrapper != null) {
                    pendingViewEvent.dispatch(eventEmitterWrapper);
                    return;
                }
                if (viewState2.mPendingEventQueue == null) {
                    viewState2.mPendingEventQueue = new LinkedList();
                }
                viewState.mPendingEventQueue.add(pendingViewEvent);
            }
        });
    }

    public void executeAddViewOperation(AddViewOperation addViewOperation) {
        addViewAtInternal(addViewOperation.getParent(), addViewOperation.getChild(), addViewOperation.getIndex().intValue());
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void executeDeleteViewOperation(DeleteViewOperation deleteViewOperation) {
        deleteViewInternal(deleteViewOperation.getChildTag());
    }

    public void executeRemoveViewOperation(RemoveViewOperation removeViewOperation) {
        removeViewAtInternal(removeViewOperation.getParentTag(), removeViewOperation.getParentView(), removeViewOperation.getChildTag(), removeViewOperation.getIndex().intValue());
    }

    public ThemedReactContext getContext() {
        return this.mThemedReactContext;
    }

    public EventEmitterWrapper getEventEmitter(int i10) {
        ViewState nullableViewState = getNullableViewState(i10);
        if (nullableViewState == null) {
            return null;
        }
        return nullableViewState.mEventEmitter;
    }

    public View getRootViewIfAttached() {
        View view;
        ViewState nullableViewState = getNullableViewState(this.mSurfaceId);
        if (nullableViewState == null || (view = nullableViewState.mView) == null || !nullableViewState.mIsRoot) {
            return null;
        }
        return view;
    }

    public int getSurfaceId() {
        return this.mSurfaceId;
    }

    public View getView(int i10) {
        View view;
        ViewState nullableViewState = getNullableViewState(i10);
        if (nullableViewState == null) {
            view = null;
        } else {
            view = nullableViewState.mView;
        }
        if (view != null) {
            return view;
        }
        throw new IllegalViewOperationException("Trying to resolve view with tag " + i10 + " which doesn't exist");
    }

    public boolean getViewExists(int i10) {
        SparseArrayCompat sparseArrayCompat = this.mTagSetForStoppedSurface;
        if (sparseArrayCompat != null && sparseArrayCompat.d(i10)) {
            return true;
        }
        ConcurrentHashMap<Integer, ViewState> concurrentHashMap = this.mTagToViewState;
        if (concurrentHashMap == null) {
            return false;
        }
        return concurrentHashMap.containsKey(Integer.valueOf(i10));
    }

    public boolean isRootViewAttached() {
        return this.mRootViewAttached;
    }

    public boolean isStopped() {
        return this.mIsStopped;
    }

    public void markActiveTouchForTag(int i10) {
        this.mViewsWithActiveTouches.add(Integer.valueOf(i10));
    }

    public void markViewInTransition(final int i10, boolean z10) {
        UiThreadUtil.assertOnUiThread();
        ViewState nullableViewState = getNullableViewState(i10);
        if (nullableViewState == null) {
            return;
        }
        this.mViewTransitionCoordinator.markViewInTransition(i10, z10, nullableViewState.mView, new Runnable() { // from class: com.facebook.react.fabric.mounting.a
            @Override // java.lang.Runnable
            public final void run() {
                SurfaceMountingManager.this.lambda$markViewInTransition$1(i10);
            }
        });
    }

    public void preallocateView(@NonNull String str, int i10, ReadableMap readableMap, StateWrapper stateWrapper, boolean z10) {
        UiThreadUtil.assertOnUiThread();
        if (isStopped() || getNullableViewState(i10) != null) {
            return;
        }
        createViewUnsafe(str, i10, readableMap, stateWrapper, null, z10);
    }

    public void printSurfaceState() {
        String str;
        View view;
        if (ReactBuildConfig.DEBUG) {
            p8.a.o(TAG, "Views created for surface {%d}:", Integer.valueOf(getSurfaceId()));
            for (ViewState viewState : this.mTagToViewState.values()) {
                ViewManager viewManager = viewState.mViewManager;
                Integer num = null;
                if (viewManager != null) {
                    str = viewManager.getName();
                } else {
                    str = null;
                }
                View view2 = viewState.mView;
                if (view2 != null) {
                    view = (View) view2.getParent();
                } else {
                    view = null;
                }
                if (view != null) {
                    num = Integer.valueOf(view.getId());
                }
                p8.a.o(TAG, "<%s id=%d parentTag=%s isRoot=%b />", str, Integer.valueOf(viewState.mReactTag), num, Boolean.valueOf(viewState.mIsRoot));
            }
        }
    }

    @Deprecated
    public void receiveCommand(int i10, int i11, ReadableArray readableArray) {
        if (isStopped()) {
            return;
        }
        ViewState nullableViewState = getNullableViewState(i10);
        if (nullableViewState != null) {
            ViewManager viewManager = nullableViewState.mViewManager;
            if (viewManager != null) {
                View view = nullableViewState.mView;
                if (view != null) {
                    viewManager.receiveCommand((ViewManager) view, i11, readableArray);
                    return;
                }
                throw new RetryableMountingLayerException("Unable to find viewState view for tag " + i10);
            }
            throw new RetryableMountingLayerException("Unable to find viewManager for tag " + i10);
        }
        throw new RetryableMountingLayerException("Unable to find viewState for tag: [" + i10 + "] for commandId: " + i11);
    }

    public void removeViewAt(int i10, int i11, int i12) {
        if (isStopped()) {
            return;
        }
        UiThreadUtil.assertOnUiThread();
        ViewState nullableViewState = getNullableViewState(i11);
        if (nullableViewState == null) {
            ReactSoftExceptionLogger.logSoftException(ReactSoftExceptionLogger.Categories.SURFACE_MOUNTING_MANAGER_MISSING_VIEWSTATE, new IllegalStateException("Unable to find viewState for tag: [" + i11 + "] for removeViewAt"));
            return;
        }
        View view = nullableViewState.mView;
        if (view instanceof ViewGroup) {
            ViewGroup viewGroup = (ViewGroup) view;
            if (viewGroup != null) {
                if (this.mViewTransitionCoordinator.shouldEnqueueOperation(i10, i11, false)) {
                    this.mViewTransitionCoordinator.enqueueOperation(new RemoveViewOperation(i10, i11, i12, viewGroup));
                    return;
                }
                removeViewAtInternal(i11, viewGroup, i10, i12);
                return;
            }
            throw new IllegalStateException("Unable to find view for tag [" + i11 + "]");
        }
        String str = "Unable to remove a view from a view that is not a ViewGroup. ParentTag: " + i11 + " - Tag: " + i10 + " - Index: " + i12;
        p8.a.m(TAG, str);
        throw new IllegalStateException(str);
    }

    public void scheduleMountItemOnViewAttach(MountItem mountItem) {
        this.mOnViewAttachMountItems.add(mountItem);
    }

    public void sendAccessibilityEvent(int i10, int i11) {
        if (isStopped()) {
            return;
        }
        ViewState viewState = getViewState(i10);
        if (viewState.mViewManager != null) {
            View view = viewState.mView;
            if (view != null) {
                view.sendAccessibilityEvent(i11);
                return;
            }
            throw new RetryableMountingLayerException("Unable to find viewState view for tag " + i10);
        }
        throw new RetryableMountingLayerException("Unable to find viewState manager for tag " + i10);
    }

    public synchronized void setJSResponder(int i10, int i11, boolean z10) {
        UiThreadUtil.assertOnUiThread();
        if (isStopped()) {
            return;
        }
        if (!z10) {
            this.mJSResponderHandler.setJSResponder(i11, null);
            return;
        }
        ViewState viewState = getViewState(i10);
        View view = viewState.mView;
        if (i11 != i10 && (view instanceof ViewParent)) {
            this.mJSResponderHandler.setJSResponder(i11, (ViewParent) view);
        } else if (view == null) {
            SoftAssertions.assertUnreachable("Cannot find view for tag [" + i10 + "].");
        } else {
            if (viewState.mIsRoot) {
                SoftAssertions.assertUnreachable("Cannot block native responder on [" + i10 + "] that is a root view");
            }
            this.mJSResponderHandler.setJSResponder(i11, view.getParent());
        }
    }

    public void stopSurface() {
        String str = TAG;
        p8.a.m(str, "Stopping surface [" + this.mSurfaceId + "]");
        if (isStopped()) {
            return;
        }
        this.mIsStopped = true;
        this.mViewTransitionCoordinator.clearAllPending();
        for (ViewState viewState : this.mTagToViewState.values()) {
            StateWrapper stateWrapper = viewState.mStateWrapper;
            if (stateWrapper != null) {
                stateWrapper.destroyState();
                viewState.mStateWrapper = null;
            }
            EventEmitterWrapper eventEmitterWrapper = viewState.mEventEmitter;
            if (eventEmitterWrapper != null) {
                eventEmitterWrapper.destroy();
                viewState.mEventEmitter = null;
            }
        }
        Runnable runnable = new Runnable() { // from class: com.facebook.react.fabric.mounting.b
            @Override // java.lang.Runnable
            public final void run() {
                SurfaceMountingManager.this.lambda$stopSurface$0();
            }
        };
        if (UiThreadUtil.isOnUiThread()) {
            runnable.run();
        } else {
            UiThreadUtil.runOnUiThread(runnable);
        }
    }

    public void sweepActiveTouchForTag(int i10) {
        this.mViewsWithActiveTouches.remove(Integer.valueOf(i10));
        if (this.mViewsToDeleteAfterTouchFinishes.contains(Integer.valueOf(i10))) {
            this.mViewsToDeleteAfterTouchFinishes.remove(Integer.valueOf(i10));
            deleteView(i10);
        }
    }

    public void updateEventEmitter(int i10, @NonNull EventEmitterWrapper eventEmitterWrapper) {
        UiThreadUtil.assertOnUiThread();
        if (!isStopped()) {
            ViewState viewState = this.mTagToViewState.get(Integer.valueOf(i10));
            if (viewState == null) {
                viewState = new ViewState(i10);
                this.mTagToViewState.put(Integer.valueOf(i10), viewState);
            }
            EventEmitterWrapper eventEmitterWrapper2 = viewState.mEventEmitter;
            viewState.mEventEmitter = eventEmitterWrapper;
            if (eventEmitterWrapper2 != eventEmitterWrapper && eventEmitterWrapper2 != null) {
                eventEmitterWrapper2.destroy();
            }
            Queue<PendingViewEvent> queue = viewState.mPendingEventQueue;
            if (queue != null) {
                for (PendingViewEvent pendingViewEvent : queue) {
                    pendingViewEvent.dispatch(eventEmitterWrapper);
                }
                viewState.mPendingEventQueue = null;
            }
        }
    }

    /* JADX WARN: Removed duplicated region for block: B:32:0x007a  */
    /* JADX WARN: Removed duplicated region for block: B:35:0x0081  */
    /* JADX WARN: Removed duplicated region for block: B:39:? A[RETURN, SYNTHETIC] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public void updateLayout(int r4, int r5, int r6, int r7, int r8, int r9, int r10, int r11) {
        /*
            r3 = this;
            boolean r0 = r3.isStopped()
            if (r0 == 0) goto L8
            goto L84
        L8:
            com.facebook.react.fabric.mounting.SurfaceMountingManager$ViewState r0 = r3.getViewState(r4)
            boolean r1 = r0.mIsRoot
            if (r1 == 0) goto L12
            goto L84
        L12:
            android.view.View r0 = r0.mView
            if (r0 == 0) goto L85
            r4 = 0
            r1 = 1
            if (r11 != r1) goto L1c
            r1 = r4
            goto L21
        L1c:
            r2 = 2
            if (r11 != r2) goto L20
            goto L21
        L20:
            r1 = r2
        L21:
            r0.setLayoutDirection(r1)
            r11 = 1073741824(0x40000000, float:2.0)
            int r1 = android.view.View.MeasureSpec.makeMeasureSpec(r8, r11)
            int r11 = android.view.View.MeasureSpec.makeMeasureSpec(r9, r11)
            r0.measure(r1, r11)
            android.view.ViewParent r11 = r0.getParent()
            boolean r1 = r11 instanceof com.facebook.react.uimanager.RootView
            if (r1 == 0) goto L3c
            r11.requestLayout()
        L3c:
            com.facebook.react.fabric.mounting.SurfaceMountingManager$ViewState r11 = r3.getNullableViewState(r5)
            if (r11 != 0) goto L63
            com.facebook.react.bridge.ReactNoCrashSoftException r11 = new com.facebook.react.bridge.ReactNoCrashSoftException
            java.lang.StringBuilder r1 = new java.lang.StringBuilder
            r1.<init>()
            java.lang.String r2 = "Unable to find viewState for tag: "
            r1.append(r2)
            r1.append(r5)
            java.lang.String r5 = " for updateLayout"
            r1.append(r5)
            java.lang.String r5 = r1.toString()
            r11.<init>(r5)
            java.lang.String r5 = "SurfaceMountingManager:MissingViewState"
            com.facebook.react.bridge.ReactSoftExceptionLogger.logSoftException(r5, r11)
            goto L6a
        L63:
            com.facebook.react.uimanager.ViewManager r5 = r11.mViewManager
            if (r5 == 0) goto L6a
            com.facebook.react.uimanager.IViewGroupManager r5 = (com.facebook.react.uimanager.IViewGroupManager) r5
            goto L6b
        L6a:
            r5 = 0
        L6b:
            if (r5 == 0) goto L73
            boolean r5 = r5.needsCustomLayoutForChildren()
            if (r5 != 0) goto L78
        L73:
            int r8 = r8 + r6
            int r9 = r9 + r7
            r0.layout(r6, r7, r8, r9)
        L78:
            if (r10 != 0) goto L7b
            r4 = 4
        L7b:
            int r5 = r0.getVisibility()
            if (r5 == r4) goto L84
            r0.setVisibility(r4)
        L84:
            return
        L85:
            java.lang.IllegalStateException r5 = new java.lang.IllegalStateException
            java.lang.StringBuilder r6 = new java.lang.StringBuilder
            r6.<init>()
            java.lang.String r7 = "Unable to find View for tag: "
            r6.append(r7)
            r6.append(r4)
            java.lang.String r4 = r6.toString()
            r5.<init>(r4)
            throw r5
        */
        throw new UnsupportedOperationException("Method not decompiled: com.facebook.react.fabric.mounting.SurfaceMountingManager.updateLayout(int, int, int, int, int, int, int, int):void");
    }

    public void updateOverflowInset(int i10, int i11, int i12, int i13, int i14) {
        if (!isStopped()) {
            ViewState viewState = getViewState(i10);
            if (!viewState.mIsRoot) {
                View view = viewState.mView;
                if (view != null) {
                    if (view instanceof ReactOverflowViewWithInset) {
                        ((ReactOverflowViewWithInset) view).setOverflowInset(i11, i12, i13, i14);
                        return;
                    }
                    return;
                }
                throw new IllegalStateException("Unable to find View for tag: " + i10);
            }
        }
    }

    public void updatePadding(int i10, int i11, int i12, int i13, int i14) {
        UiThreadUtil.assertOnUiThread();
        if (!isStopped()) {
            ViewState viewState = getViewState(i10);
            if (viewState.mIsRoot) {
                return;
            }
            View view = viewState.mView;
            if (view != null) {
                ViewManager viewManager = viewState.mViewManager;
                if (viewManager != null) {
                    viewManager.setPadding(view, i11, i12, i13, i14);
                    return;
                }
                throw new IllegalStateException("Unable to find ViewManager for view: " + viewState);
            }
            throw new IllegalStateException("Unable to find View for tag: " + i10);
        }
    }

    public void updateProps(int i10, ReadableMap readableMap) {
        if (isStopped()) {
            return;
        }
        ViewState viewState = getViewState(i10);
        viewState.mCurrentProps = new ReactStylesDiffMap(readableMap);
        View view = viewState.mView;
        if (view != null) {
            ((ViewManager) db.a.c(viewState.mViewManager)).updateProperties(view, viewState.mCurrentProps);
            return;
        }
        throw new IllegalStateException("Unable to find view for tag [" + i10 + "]");
    }

    public void updateState(int i10, StateWrapper stateWrapper) {
        UiThreadUtil.assertOnUiThread();
        if (!isStopped()) {
            ViewState viewState = getViewState(i10);
            StateWrapper stateWrapper2 = viewState.mStateWrapper;
            viewState.mStateWrapper = stateWrapper;
            ViewManager viewManager = viewState.mViewManager;
            if (viewManager != null) {
                Object updateState = viewManager.updateState(viewState.mView, viewState.mCurrentProps, stateWrapper);
                if (updateState != null) {
                    viewManager.updateExtraData(viewState.mView, updateState);
                }
                if (stateWrapper2 != null) {
                    stateWrapper2.destroyState();
                    return;
                }
                return;
            }
            throw new IllegalStateException("Unable to find ViewManager for tag: " + i10);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class ViewState {
        ReadableMap mCurrentLocalData;
        ReactStylesDiffMap mCurrentProps;
        EventEmitterWrapper mEventEmitter;
        final boolean mIsRoot;
        Queue<PendingViewEvent> mPendingEventQueue;
        final int mReactTag;
        StateWrapper mStateWrapper;
        View mView;
        ViewManager mViewManager;

        @NonNull
        public String toString() {
            boolean z10;
            if (this.mViewManager == null) {
                z10 = true;
            } else {
                z10 = false;
            }
            return "ViewState [" + this.mReactTag + "] - isRoot: " + this.mIsRoot + " - props: " + this.mCurrentProps + " - localData: " + this.mCurrentLocalData + " - viewManager: " + this.mViewManager + " - isLayoutOnly: " + z10;
        }

        private ViewState(int i10) {
            this(i10, null, null, false);
        }

        private ViewState(int i10, View view, ViewManager viewManager, boolean z10) {
            this.mCurrentProps = null;
            this.mCurrentLocalData = null;
            this.mStateWrapper = null;
            this.mEventEmitter = null;
            this.mPendingEventQueue = null;
            this.mReactTag = i10;
            this.mView = view;
            this.mIsRoot = z10;
            this.mViewManager = viewManager;
        }
    }

    public void receiveCommand(int i10, @NonNull String str, ReadableArray readableArray) {
        if (isStopped()) {
            return;
        }
        ViewState nullableViewState = getNullableViewState(i10);
        if (nullableViewState != null) {
            ViewManager viewManager = nullableViewState.mViewManager;
            if (viewManager != null) {
                View view = nullableViewState.mView;
                if (view != null) {
                    viewManager.receiveCommand((ViewManager) view, str, readableArray);
                    return;
                }
                throw new RetryableMountingLayerException("Unable to find viewState view for tag " + i10);
            }
            throw new RetryableMountingLayerException("Unable to find viewState manager for tag " + i10);
        }
        throw new RetryableMountingLayerException("Unable to find viewState for tag: " + i10 + " for commandId: " + str);
    }
}
