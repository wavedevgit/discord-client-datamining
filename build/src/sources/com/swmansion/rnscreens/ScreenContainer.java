package com.swmansion.rnscreens;

import android.content.Context;
import android.content.ContextWrapper;
import android.view.Choreographer;
import android.view.View;
import android.view.ViewGroup;
import android.view.ViewParent;
import android.view.inputmethod.InputMethodManager;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentActivity;
import androidx.fragment.app.FragmentManager;
import androidx.fragment.app.FragmentTransaction;
import com.facebook.react.ReactRootView;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.modules.core.ReactChoreographer;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.UIManagerHelper;
import com.facebook.react.uimanager.events.EventDispatcher;
import com.swmansion.rnscreens.Screen;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.Iterator;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class ScreenContainer extends ViewGroup {
    protected FragmentManager fragmentManager;
    private boolean isAttached;
    private boolean isLayoutEnqueued;
    @NotNull
    private final Choreographer.FrameCallback layoutCallback;
    private boolean needsUpdate;
    private ScreenFragmentWrapper parentScreenWrapper;
    @NotNull
    protected final ArrayList<ScreenFragmentWrapper> screenWrappers;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Choreographer.FrameCallback {
        a() {
        }

        @Override // android.view.Choreographer.FrameCallback
        public void doFrame(long j10) {
            ScreenContainer.this.isLayoutEnqueued = false;
            ScreenContainer screenContainer = ScreenContainer.this;
            screenContainer.measure(View.MeasureSpec.makeMeasureSpec(screenContainer.getWidth(), 1073741824), View.MeasureSpec.makeMeasureSpec(ScreenContainer.this.getHeight(), 1073741824));
            ScreenContainer screenContainer2 = ScreenContainer.this;
            screenContainer2.layout(screenContainer2.getLeft(), ScreenContainer.this.getTop(), ScreenContainer.this.getRight(), ScreenContainer.this.getBottom());
        }
    }

    public ScreenContainer(Context context) {
        super(context);
        this.screenWrappers = new ArrayList<>();
        this.layoutCallback = new a();
    }

    private final void b(FragmentTransaction fragmentTransaction, Fragment fragment) {
        fragmentTransaction.b(getId(), fragment);
    }

    private final void c(FragmentTransaction fragmentTransaction, Fragment fragment) {
        fragmentTransaction.m(fragment);
    }

    private final FragmentManager d(ReactRootView reactRootView) {
        boolean z10;
        Context context = reactRootView.getContext();
        while (true) {
            z10 = context instanceof FragmentActivity;
            if (z10 || !(context instanceof ContextWrapper)) {
                break;
            }
            context = ((ContextWrapper) context).getBaseContext();
        }
        if (z10) {
            FragmentActivity fragmentActivity = (FragmentActivity) context;
            if (fragmentActivity.getSupportFragmentManager().A0().isEmpty()) {
                FragmentManager supportFragmentManager = fragmentActivity.getSupportFragmentManager();
                Intrinsics.checkNotNull(supportFragmentManager);
                return supportFragmentManager;
            }
            try {
                FragmentManager childFragmentManager = FragmentManager.m0(reactRootView).getChildFragmentManager();
                Intrinsics.checkNotNull(childFragmentManager);
                return childFragmentManager;
            } catch (IllegalStateException unused) {
                FragmentManager supportFragmentManager2 = fragmentActivity.getSupportFragmentManager();
                Intrinsics.checkNotNull(supportFragmentManager2);
                return supportFragmentManager2;
            }
        }
        throw new IllegalStateException("In order to use RNScreens components your app's activity need to extend ReactActivity");
    }

    private final Screen.ActivityState e(ScreenFragmentWrapper screenFragmentWrapper) {
        return screenFragmentWrapper.h().getActivityState();
    }

    private final void f() {
        this.needsUpdate = true;
        Context context = getContext();
        Intrinsics.checkNotNull(context, "null cannot be cast to non-null type com.facebook.react.uimanager.ThemedReactContext");
        ((ThemedReactContext) context).getReactApplicationContext().runOnUiQueueThread(new Runnable() { // from class: com.swmansion.rnscreens.t
            @Override // java.lang.Runnable
            public final void run() {
                ScreenContainer.g(ScreenContainer.this);
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void g(ScreenContainer screenContainer) {
        screenContainer.performUpdates();
    }

    private final void h(FragmentManager fragmentManager) {
        FragmentTransaction r10 = fragmentManager.r();
        Intrinsics.checkNotNullExpressionValue(r10, "beginTransaction(...)");
        boolean z10 = false;
        for (Fragment fragment : fragmentManager.A0()) {
            if ((fragment instanceof w) && ((w) fragment).h().getContainer() == this) {
                r10.m(fragment);
                z10 = true;
            }
        }
        if (z10) {
            r10.j();
        }
    }

    private final void i() {
        boolean z10;
        Unit unit;
        ViewParent viewParent = this;
        while (true) {
            z10 = viewParent instanceof ReactRootView;
            if (z10 || (viewParent instanceof Screen) || viewParent.getParent() == null) {
                break;
            }
            viewParent = viewParent.getParent();
            Intrinsics.checkNotNullExpressionValue(viewParent, "getParent(...)");
        }
        if (viewParent instanceof Screen) {
            ScreenFragmentWrapper fragmentWrapper = ((Screen) viewParent).getFragmentWrapper();
            if (fragmentWrapper != null) {
                this.parentScreenWrapper = fragmentWrapper;
                fragmentWrapper.l(this);
                FragmentManager childFragmentManager = fragmentWrapper.a().getChildFragmentManager();
                Intrinsics.checkNotNullExpressionValue(childFragmentManager, "getChildFragmentManager(...)");
                setFragmentManager(childFragmentManager);
                unit = Unit.f33074a;
            } else {
                unit = null;
            }
            if (unit != null) {
                return;
            }
            throw new IllegalStateException("Parent Screen does not have its Fragment attached");
        } else if (z10) {
            setFragmentManager(d((ReactRootView) viewParent));
        } else {
            throw new IllegalStateException("ScreenContainer is not attached under ReactRootView");
        }
    }

    private final void setFragmentManager(FragmentManager fragmentManager) {
        this.fragmentManager = fragmentManager;
        performUpdatesNow();
    }

    protected ScreenFragmentWrapper adapt(Screen screen) {
        Intrinsics.checkNotNullParameter(screen, "screen");
        return new w(screen);
    }

    public final void addScreen(@NotNull Screen screen, int i10) {
        Intrinsics.checkNotNullParameter(screen, "screen");
        ScreenFragmentWrapper adapt = adapt(screen);
        screen.setFragmentWrapper(adapt);
        this.screenWrappers.add(i10, adapt);
        screen.setContainer(this);
        f();
    }

    public final void attachBelowTop() {
        if (this.screenWrappers.size() >= 2) {
            FragmentTransaction createTransaction = createTransaction();
            Screen topScreen = getTopScreen();
            Intrinsics.checkNotNull(topScreen, "null cannot be cast to non-null type com.swmansion.rnscreens.Screen");
            Fragment fragment = topScreen.getFragment();
            Intrinsics.checkNotNull(fragment, "null cannot be cast to non-null type androidx.fragment.app.Fragment");
            c(createTransaction, fragment);
            ArrayList<ScreenFragmentWrapper> arrayList = this.screenWrappers;
            b(createTransaction, arrayList.get(arrayList.size() - 2).a());
            Fragment fragment2 = topScreen.getFragment();
            Intrinsics.checkNotNull(fragment2, "null cannot be cast to non-null type androidx.fragment.app.Fragment");
            b(createTransaction, fragment2);
            createTransaction.j();
            return;
        }
        throw new RuntimeException("[RNScreens] Unable to run transition for less than 2 screens.");
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @NotNull
    public final FragmentTransaction createTransaction() {
        FragmentManager fragmentManager = this.fragmentManager;
        if (fragmentManager != null) {
            FragmentTransaction t10 = fragmentManager.r().t(true);
            Intrinsics.checkNotNullExpressionValue(t10, "setReorderingAllowed(...)");
            return t10;
        }
        throw new IllegalArgumentException("fragment manager is null when creating transaction");
    }

    public final void detachBelowTop() {
        if (this.screenWrappers.size() >= 2) {
            FragmentTransaction createTransaction = createTransaction();
            ArrayList<ScreenFragmentWrapper> arrayList = this.screenWrappers;
            c(createTransaction, arrayList.get(arrayList.size() - 2).a());
            createTransaction.j();
            return;
        }
        throw new RuntimeException("[RNScreens] Unable to run transition for less than 2 screens.");
    }

    @NotNull
    public final Screen getScreenAt(int i10) {
        return this.screenWrappers.get(i10).h();
    }

    public final int getScreenCount() {
        return this.screenWrappers.size();
    }

    @NotNull
    public final ScreenFragmentWrapper getScreenFragmentWrapperAt(int i10) {
        ScreenFragmentWrapper screenFragmentWrapper = this.screenWrappers.get(i10);
        Intrinsics.checkNotNullExpressionValue(screenFragmentWrapper, "get(...)");
        return screenFragmentWrapper;
    }

    public Screen getTopScreen() {
        Object obj;
        Iterator<T> it = this.screenWrappers.iterator();
        while (true) {
            if (it.hasNext()) {
                obj = it.next();
                if (e((ScreenFragmentWrapper) obj) == Screen.ActivityState.f18777i) {
                    break;
                }
            } else {
                obj = null;
                break;
            }
        }
        ScreenFragmentWrapper screenFragmentWrapper = (ScreenFragmentWrapper) obj;
        if (screenFragmentWrapper == null) {
            return null;
        }
        return screenFragmentWrapper.h();
    }

    public boolean hasScreen(ScreenFragmentWrapper screenFragmentWrapper) {
        return CollectionsKt.d0(this.screenWrappers, screenFragmentWrapper);
    }

    public final boolean isNested() {
        if (this.parentScreenWrapper != null) {
            return true;
        }
        return false;
    }

    protected void notifyContainerUpdate() {
        ScreenFragmentWrapper fragmentWrapper;
        Screen topScreen = getTopScreen();
        if (topScreen != null && (fragmentWrapper = topScreen.getFragmentWrapper()) != null) {
            fragmentWrapper.m();
        }
    }

    public final void notifyTopDetached() {
        Screen topScreen = getTopScreen();
        Intrinsics.checkNotNull(topScreen, "null cannot be cast to non-null type com.swmansion.rnscreens.Screen");
        if (getContext() instanceof ReactContext) {
            int surfaceId = UIManagerHelper.getSurfaceId(getContext());
            Context context = getContext();
            Intrinsics.checkNotNull(context, "null cannot be cast to non-null type com.facebook.react.bridge.ReactContext");
            EventDispatcher eventDispatcherForReactTag = UIManagerHelper.getEventDispatcherForReactTag((ReactContext) context, topScreen.getId());
            if (eventDispatcherForReactTag != null) {
                eventDispatcherForReactTag.dispatchEvent(new gn.h(surfaceId, topScreen.getId()));
            }
        }
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void onAttachedToWindow() {
        super.onAttachedToWindow();
        this.isAttached = true;
        i();
    }

    public final void onChildUpdate() {
        performUpdatesNow();
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void onDetachedFromWindow() {
        FragmentManager fragmentManager = this.fragmentManager;
        if (fragmentManager != null && !fragmentManager.N0()) {
            h(fragmentManager);
            fragmentManager.j0();
        }
        ScreenFragmentWrapper screenFragmentWrapper = this.parentScreenWrapper;
        if (screenFragmentWrapper != null) {
            screenFragmentWrapper.n(this);
        }
        this.parentScreenWrapper = null;
        super.onDetachedFromWindow();
        this.isAttached = false;
        int childCount = getChildCount();
        while (true) {
            childCount--;
            if (-1 < childCount) {
                removeViewAt(childCount);
            } else {
                return;
            }
        }
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void onLayout(boolean z10, int i10, int i11, int i12, int i13) {
        int childCount = getChildCount();
        for (int i14 = 0; i14 < childCount; i14++) {
            getChildAt(i14).layout(0, 0, getWidth(), getHeight());
        }
    }

    @Override // android.view.View
    protected void onMeasure(int i10, int i11) {
        super.onMeasure(i10, i11);
        int childCount = getChildCount();
        for (int i12 = 0; i12 < childCount; i12++) {
            getChildAt(i12).measure(i10, i11);
        }
    }

    public void onUpdate() {
        boolean z10;
        Fragment[] fragmentArr;
        FragmentTransaction createTransaction = createTransaction();
        FragmentManager fragmentManager = this.fragmentManager;
        if (fragmentManager != null) {
            HashSet hashSet = new HashSet(fragmentManager.A0());
            Iterator<ScreenFragmentWrapper> it = this.screenWrappers.iterator();
            Intrinsics.checkNotNullExpressionValue(it, "iterator(...)");
            while (it.hasNext()) {
                ScreenFragmentWrapper next = it.next();
                Intrinsics.checkNotNullExpressionValue(next, "next(...)");
                ScreenFragmentWrapper screenFragmentWrapper = next;
                if (e(screenFragmentWrapper) == Screen.ActivityState.f18775d && screenFragmentWrapper.a().isAdded()) {
                    c(createTransaction, screenFragmentWrapper.a());
                }
                hashSet.remove(screenFragmentWrapper.a());
            }
            boolean z11 = false;
            if (!hashSet.isEmpty()) {
                for (Fragment fragment : (Fragment[]) hashSet.toArray(new Fragment[0])) {
                    if ((fragment instanceof w) && ((w) fragment).h().getContainer() == null) {
                        c(createTransaction, fragment);
                    }
                }
            }
            if (getTopScreen() == null) {
                z10 = true;
            } else {
                z10 = false;
            }
            ArrayList arrayList = new ArrayList();
            Iterator<ScreenFragmentWrapper> it2 = this.screenWrappers.iterator();
            Intrinsics.checkNotNullExpressionValue(it2, "iterator(...)");
            while (it2.hasNext()) {
                ScreenFragmentWrapper next2 = it2.next();
                Intrinsics.checkNotNullExpressionValue(next2, "next(...)");
                ScreenFragmentWrapper screenFragmentWrapper2 = next2;
                Screen.ActivityState e10 = e(screenFragmentWrapper2);
                Screen.ActivityState activityState = Screen.ActivityState.f18775d;
                if (e10 != activityState && !screenFragmentWrapper2.a().isAdded()) {
                    b(createTransaction, screenFragmentWrapper2.a());
                    z11 = true;
                } else if (e10 != activityState && z11) {
                    c(createTransaction, screenFragmentWrapper2.a());
                    arrayList.add(screenFragmentWrapper2);
                }
                screenFragmentWrapper2.h().setTransitioning(z10);
            }
            Iterator it3 = arrayList.iterator();
            Intrinsics.checkNotNullExpressionValue(it3, "iterator(...)");
            while (it3.hasNext()) {
                Object next3 = it3.next();
                Intrinsics.checkNotNullExpressionValue(next3, "next(...)");
                b(createTransaction, ((ScreenFragmentWrapper) next3).a());
            }
            createTransaction.j();
            return;
        }
        throw new IllegalArgumentException("fragment manager is null when performing update in ScreenContainer");
    }

    public final void performUpdates() {
        FragmentManager fragmentManager;
        if (this.needsUpdate && this.isAttached && (fragmentManager = this.fragmentManager) != null) {
            if (fragmentManager != null && fragmentManager.N0()) {
                return;
            }
            this.needsUpdate = false;
            onUpdate();
            notifyContainerUpdate();
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void performUpdatesNow() {
        this.needsUpdate = true;
        performUpdates();
    }

    public void removeAllScreens() {
        Iterator<ScreenFragmentWrapper> it = this.screenWrappers.iterator();
        Intrinsics.checkNotNullExpressionValue(it, "iterator(...)");
        while (it.hasNext()) {
            ScreenFragmentWrapper next = it.next();
            Intrinsics.checkNotNullExpressionValue(next, "next(...)");
            next.h().setContainer(null);
        }
        this.screenWrappers.clear();
        f();
    }

    public void removeScreenAt(int i10) {
        this.screenWrappers.get(i10).h().setContainer(null);
        this.screenWrappers.remove(i10);
        f();
    }

    @Override // android.view.ViewGroup, android.view.ViewManager
    public void removeView(@NotNull View view) {
        Intrinsics.checkNotNullParameter(view, "view");
        if (view == getFocusedChild()) {
            Object systemService = getContext().getSystemService("input_method");
            Intrinsics.checkNotNull(systemService, "null cannot be cast to non-null type android.view.inputmethod.InputMethodManager");
            ((InputMethodManager) systemService).hideSoftInputFromWindow(getWindowToken(), 2);
        }
        super.removeView(view);
    }

    @Override // android.view.View, android.view.ViewParent
    public void requestLayout() {
        super.requestLayout();
        if (!this.isLayoutEnqueued && this.layoutCallback != null) {
            this.isLayoutEnqueued = true;
            ReactChoreographer.Companion.getInstance().postFrameCallback(ReactChoreographer.CallbackType.NATIVE_ANIMATED_MODULE, this.layoutCallback);
        }
    }
}
