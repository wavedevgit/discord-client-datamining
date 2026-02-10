package com.swmansion.rnscreens;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.content.Context;
import android.graphics.Paint;
import android.graphics.drawable.Drawable;
import android.os.Parcelable;
import android.util.SparseArray;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewGroup;
import android.view.Window;
import android.view.WindowInsets;
import android.view.WindowManager;
import android.webkit.WebView;
import android.widget.ImageView;
import androidx.coordinatorlayout.widget.CoordinatorLayout;
import androidx.fragment.app.Fragment;
import androidx.swiperefreshlayout.widget.SwipeRefreshLayout;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.uimanager.PixelUtil;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.UIManagerHelper;
import com.facebook.react.uimanager.events.EventDispatcher;
import com.google.android.material.bottomsheet.BottomSheetBehavior;
import com.swmansion.rnscreens.ScreenContentWrapper;
import com.swmansion.rnscreens.bottomsheet.SheetDetents;
import java.util.Iterator;
import kotlin.collections.CollectionsKt;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
import th.l;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class Screen extends h implements ScreenContentWrapper.a, sn.a {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    public static final String TAG = "Screen";
    private ActivityState activityState;
    private ScreenContainer container;
    private ScreenFooter footer;
    private ScreenFragmentWrapper fragmentWrapper;
    private boolean insetsApplied;
    private boolean isBeingRemoved;
    private boolean isGestureEnabled;
    private Boolean isNavigationBarHidden;
    private boolean isSheetGrabberVisible;
    private Boolean isStatusBarAnimated;
    private Boolean isStatusBarHidden;
    private boolean isTransitioning;
    private boolean nativeBackButtonDismissalEnabled;
    @NotNull
    private final ThemedReactContext reactContext;
    @NotNull
    private ReplaceAnimation replaceAnimation;
    private String screenId;
    private Integer screenOrientation;
    private boolean sheetClosesOnTouchOutside;
    private float sheetCornerRadius;
    private boolean sheetDefaultResizeAnimationEnabled;
    @NotNull
    private SheetDetents sheetDetents;
    private float sheetElevation;
    private boolean sheetExpandsWhenScrolledToEdge;
    private int sheetInitialDetentIndex;
    private int sheetLargestUndimmedDetentIndex;
    private boolean sheetShouldOverflowTopInset;
    private boolean shouldTriggerPostponedTransitionAfterLayout;
    private boolean shouldUpdateSheetCornerRadius;
    @NotNull
    private StackAnimation stackAnimation;
    @NotNull
    private StackPresentation stackPresentation;
    private String statusBarStyle;

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class ActivityState {

        /* renamed from: d  reason: collision with root package name */
        public static final ActivityState f19032d = new ActivityState("INACTIVE", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final ActivityState f19033e = new ActivityState("TRANSITIONING_OR_BELOW_TOP", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final ActivityState f19034i = new ActivityState("ON_TOP", 2);

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ ActivityState[] f19035o;

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f19036p;

        static {
            ActivityState[] a10 = a();
            f19035o = a10;
            f19036p = hs.a.a(a10);
        }

        private ActivityState(String str, int i10) {
        }

        private static final /* synthetic */ ActivityState[] a() {
            return new ActivityState[]{f19032d, f19033e, f19034i};
        }

        public static ActivityState valueOf(String str) {
            return (ActivityState) Enum.valueOf(ActivityState.class, str);
        }

        public static ActivityState[] values() {
            return (ActivityState[]) f19035o.clone();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class ReplaceAnimation {

        /* renamed from: d  reason: collision with root package name */
        public static final ReplaceAnimation f19037d = new ReplaceAnimation("PUSH", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final ReplaceAnimation f19038e = new ReplaceAnimation("POP", 1);

        /* renamed from: i  reason: collision with root package name */
        private static final /* synthetic */ ReplaceAnimation[] f19039i;

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f19040o;

        static {
            ReplaceAnimation[] a10 = a();
            f19039i = a10;
            f19040o = hs.a.a(a10);
        }

        private ReplaceAnimation(String str, int i10) {
        }

        private static final /* synthetic */ ReplaceAnimation[] a() {
            return new ReplaceAnimation[]{f19037d, f19038e};
        }

        public static ReplaceAnimation valueOf(String str) {
            return (ReplaceAnimation) Enum.valueOf(ReplaceAnimation.class, str);
        }

        public static ReplaceAnimation[] values() {
            return (ReplaceAnimation[]) f19039i.clone();
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class StackAnimation {

        /* renamed from: d  reason: collision with root package name */
        public static final StackAnimation f19041d = new StackAnimation("DEFAULT", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final StackAnimation f19042e = new StackAnimation("NONE", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final StackAnimation f19043i = new StackAnimation("FADE", 2);

        /* renamed from: o  reason: collision with root package name */
        public static final StackAnimation f19044o = new StackAnimation("SLIDE_FROM_BOTTOM", 3);

        /* renamed from: p  reason: collision with root package name */
        public static final StackAnimation f19045p = new StackAnimation("SLIDE_FROM_RIGHT", 4);

        /* renamed from: q  reason: collision with root package name */
        public static final StackAnimation f19046q = new StackAnimation("SLIDE_FROM_LEFT", 5);

        /* renamed from: r  reason: collision with root package name */
        public static final StackAnimation f19047r = new StackAnimation("FADE_FROM_BOTTOM", 6);

        /* renamed from: s  reason: collision with root package name */
        public static final StackAnimation f19048s = new StackAnimation("IOS_FROM_RIGHT", 7);

        /* renamed from: t  reason: collision with root package name */
        public static final StackAnimation f19049t = new StackAnimation("IOS_FROM_LEFT", 8);

        /* renamed from: u  reason: collision with root package name */
        private static final /* synthetic */ StackAnimation[] f19050u;

        /* renamed from: v  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f19051v;

        static {
            StackAnimation[] a10 = a();
            f19050u = a10;
            f19051v = hs.a.a(a10);
        }

        private StackAnimation(String str, int i10) {
        }

        private static final /* synthetic */ StackAnimation[] a() {
            return new StackAnimation[]{f19041d, f19042e, f19043i, f19044o, f19045p, f19046q, f19047r, f19048s, f19049t};
        }

        public static StackAnimation valueOf(String str) {
            return (StackAnimation) Enum.valueOf(StackAnimation.class, str);
        }

        public static StackAnimation[] values() {
            return (StackAnimation[]) f19050u.clone();
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class StackPresentation {

        /* renamed from: d  reason: collision with root package name */
        public static final StackPresentation f19052d = new StackPresentation("PUSH", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final StackPresentation f19053e = new StackPresentation("MODAL", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final StackPresentation f19054i = new StackPresentation("TRANSPARENT_MODAL", 2);

        /* renamed from: o  reason: collision with root package name */
        public static final StackPresentation f19055o = new StackPresentation("FORM_SHEET", 3);

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ StackPresentation[] f19056p;

        /* renamed from: q  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f19057q;

        static {
            StackPresentation[] a10 = a();
            f19056p = a10;
            f19057q = hs.a.a(a10);
        }

        private StackPresentation(String str, int i10) {
        }

        private static final /* synthetic */ StackPresentation[] a() {
            return new StackPresentation[]{f19052d, f19053e, f19054i, f19055o};
        }

        public static StackPresentation valueOf(String str) {
            return (StackPresentation) Enum.valueOf(StackPresentation.class, str);
        }

        public static StackPresentation[] values() {
            return (StackPresentation[]) f19056p.clone();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f19058a;

        static {
            int[] iArr = new int[StackPresentation.values().length];
            try {
                iArr[StackPresentation.f19054i.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[StackPresentation.f19055o.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            f19058a = iArr;
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {

        /* renamed from: d  reason: collision with root package name */
        public static final b f19059d = new b("ORIENTATION", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final b f19060e = new b("STYLE", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final b f19061i = new b("HIDDEN", 2);

        /* renamed from: o  reason: collision with root package name */
        public static final b f19062o = new b("ANIMATED", 3);

        /* renamed from: p  reason: collision with root package name */
        public static final b f19063p = new b("NAVIGATION_BAR_HIDDEN", 4);

        /* renamed from: q  reason: collision with root package name */
        private static final /* synthetic */ b[] f19064q;

        /* renamed from: r  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f19065r;

        static {
            b[] a10 = a();
            f19064q = a10;
            f19065r = hs.a.a(a10);
        }

        private b(String str, int i10) {
        }

        private static final /* synthetic */ b[] a() {
            return new b[]{f19059d, f19060e, f19061i, f19062o, f19063p};
        }

        public static b valueOf(String str) {
            return (b) Enum.valueOf(b.class, str);
        }

        public static b[] values() {
            return (b[]) f19064q.clone();
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public Screen(ThemedReactContext reactContext) {
        super(reactContext);
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        this.reactContext = reactContext;
        this.stackPresentation = StackPresentation.f19052d;
        this.replaceAnimation = ReplaceAnimation.f19038e;
        this.stackAnimation = StackAnimation.f19041d;
        this.isGestureEnabled = true;
        this.sheetExpandsWhenScrolledToEdge = true;
        this.sheetDetents = new SheetDetents(CollectionsKt.e(Double.valueOf(1.0d)));
        this.sheetLargestUndimmedDetentIndex = -1;
        this.sheetClosesOnTouchOutside = true;
        this.sheetElevation = 24.0f;
        this.sheetDefaultResizeAnimationEnabled = true;
        setLayoutParams(new WindowManager.LayoutParams(2));
        this.nativeBackButtonDismissalEnabled = true;
    }

    private final void e(int i10, int i11, int i12) {
        updateScreenSizeFabric(i10, i11, i12);
    }

    private final void f(int i10, boolean z10) {
        int surfaceId = UIManagerHelper.getSurfaceId(this.reactContext);
        EventDispatcher reactEventDispatcher = getReactEventDispatcher();
        if (reactEventDispatcher != null) {
            reactEventDispatcher.dispatchEvent(new qn.s(surfaceId, getId(), i10, z10));
        }
    }

    private final void g(ViewGroup viewGroup) {
        for (View view : androidx.core.view.o0.a(viewGroup)) {
            viewGroup.endViewTransition(view);
            if (view instanceof ScreenStackHeaderConfig) {
                g(((ScreenStackHeaderConfig) view).getToolbar());
            }
            if (view instanceof ViewGroup) {
                g((ViewGroup) view);
            }
        }
    }

    private final boolean h(ViewGroup viewGroup) {
        int childCount = viewGroup.getChildCount();
        for (int i10 = 0; i10 < childCount; i10++) {
            View childAt = viewGroup.getChildAt(i10);
            if (childAt instanceof WebView) {
                return true;
            }
            if ((childAt instanceof ViewGroup) && h((ViewGroup) childAt)) {
                return true;
            }
        }
        return false;
    }

    private final boolean i() {
        return this.container instanceof ScreenStack;
    }

    private final int j(int i10, float f10) {
        r0 a10;
        pn.o e02;
        Integer R;
        Fragment fragment = getFragment();
        if (fragment != null && (a10 = rn.a.a(fragment)) != null && (e02 = a10.e0()) != null && (R = e02.R()) != null) {
            return kotlin.ranges.d.i(i10, (int) (R.intValue() + f10));
        }
        return i10;
    }

    private final void k(BottomSheetBehavior bottomSheetBehavior, int i10) {
        pn.a.e(bottomSheetBehavior, Integer.valueOf(i10), false, 2, null);
        requestLayout();
    }

    private final void l(final BottomSheetBehavior bottomSheetBehavior, int i10, int i11) {
        final float translationY = getTranslationY();
        int j10 = j(i10, translationY);
        final int j11 = j(i11, translationY);
        float f10 = j11 - j10;
        if (f10 == 0.0f) {
            return;
        }
        if (f10 > 0.0f) {
            setTranslationY(getTranslationY() + f10);
            animate().translationY(translationY).withStartAction(new Runnable() { // from class: com.swmansion.rnscreens.u
                @Override // java.lang.Runnable
                public final void run() {
                    Screen.m(BottomSheetBehavior.this, j11, this);
                }
            }).withEndAction(new Runnable() { // from class: com.swmansion.rnscreens.v
                @Override // java.lang.Runnable
                public final void run() {
                    Screen.n(Screen.this);
                }
            }).start();
            return;
        }
        animate().translationY(translationY - f10).withStartAction(new Runnable() { // from class: com.swmansion.rnscreens.w
            @Override // java.lang.Runnable
            public final void run() {
                Screen.o(BottomSheetBehavior.this, j11);
            }
        }).withEndAction(new Runnable() { // from class: com.swmansion.rnscreens.x
            @Override // java.lang.Runnable
            public final void run() {
                Screen.p(Screen.this, j11, translationY);
            }
        }).start();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void m(BottomSheetBehavior bottomSheetBehavior, int i10, Screen screen) {
        pn.a.c(bottomSheetBehavior, Integer.valueOf(i10), null, 2, null);
        screen.layout(screen.getLeft(), screen.getBottom() - i10, screen.getRight(), screen.getBottom());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void n(Screen screen) {
        screen.getParent().requestLayout();
        screen.onSheetYTranslationChanged$react_native_screens_release();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void o(BottomSheetBehavior bottomSheetBehavior, int i10) {
        pn.a.c(bottomSheetBehavior, Integer.valueOf(i10), null, 2, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void p(Screen screen, int i10, float f10) {
        screen.layout(screen.getLeft(), screen.getBottom() - i10, screen.getRight(), screen.getBottom());
        screen.setTranslationY(f10);
        screen.getParent().requestLayout();
        screen.onSheetYTranslationChanged$react_native_screens_release();
    }

    private final void q(BottomSheetBehavior bottomSheetBehavior, int i10) {
        int j10 = j(i10, getTranslationY());
        pn.a.c(bottomSheetBehavior, Integer.valueOf(j10), null, 2, null);
        layout(getLeft(), getBottom() - j10, getRight(), getBottom());
        getParent().requestLayout();
        updateScreenSizeFabric(getWidth(), j10, getTop() + ((int) getTranslationY()));
    }

    private final void startTransitionRecursive(ViewGroup viewGroup) {
        if (viewGroup != null) {
            int childCount = viewGroup.getChildCount();
            for (int i10 = 0; i10 < childCount; i10++) {
                View childAt = viewGroup.getChildAt(i10);
                if ((viewGroup instanceof SwipeRefreshLayout) && (childAt instanceof ImageView)) {
                    viewGroup.addView(new View(getContext()), i10);
                } else if (childAt != null) {
                    viewGroup.startViewTransition(childAt);
                }
                if (childAt instanceof ScreenStackHeaderConfig) {
                    startTransitionRecursive(((ScreenStackHeaderConfig) childAt).getToolbar());
                }
                if (childAt instanceof ViewGroup) {
                    startTransitionRecursive((ViewGroup) childAt);
                }
            }
        }
    }

    public final void changeAccessibilityMode(int i10) {
        e toolbar;
        setImportantForAccessibility(i10);
        ScreenStackHeaderConfig headerConfig = getHeaderConfig();
        if (headerConfig != null && (toolbar = headerConfig.getToolbar()) != null) {
            toolbar.setImportantForAccessibility(i10);
        }
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void dispatchRestoreInstanceState(@NotNull SparseArray<Parcelable> container) {
        Intrinsics.checkNotNullParameter(container, "container");
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void dispatchSaveInstanceState(@NotNull SparseArray<Parcelable> container) {
        Intrinsics.checkNotNullParameter(container, "container");
    }

    public void endRemovalTransition() {
        if (!this.isBeingRemoved) {
            return;
        }
        this.isBeingRemoved = false;
        g(this);
    }

    public final ActivityState getActivityState() {
        return this.activityState;
    }

    @Override // sn.a
    public Fragment getAssociatedFragment() {
        return getFragment();
    }

    public final ScreenContainer getContainer() {
        return this.container;
    }

    public final ScreenContentWrapper getContentWrapper() {
        Object obj;
        Iterator it = androidx.core.view.o0.a(this).iterator();
        while (true) {
            if (it.hasNext()) {
                obj = it.next();
                if (((View) obj) instanceof ScreenContentWrapper) {
                    break;
                }
            } else {
                obj = null;
                break;
            }
        }
        if (!(obj instanceof ScreenContentWrapper)) {
            return null;
        }
        return (ScreenContentWrapper) obj;
    }

    public final ScreenFooter getFooter() {
        return this.footer;
    }

    public final Fragment getFragment() {
        ScreenFragmentWrapper screenFragmentWrapper = this.fragmentWrapper;
        if (screenFragmentWrapper != null) {
            return screenFragmentWrapper.a();
        }
        return null;
    }

    public final ScreenFragmentWrapper getFragmentWrapper() {
        return this.fragmentWrapper;
    }

    public final ScreenStackHeaderConfig getHeaderConfig() {
        Object obj;
        Iterator it = androidx.core.view.o0.a(this).iterator();
        while (true) {
            if (it.hasNext()) {
                obj = it.next();
                if (((View) obj) instanceof ScreenStackHeaderConfig) {
                    break;
                }
            } else {
                obj = null;
                break;
            }
        }
        if (!(obj instanceof ScreenStackHeaderConfig)) {
            return null;
        }
        return (ScreenStackHeaderConfig) obj;
    }

    public final boolean getInsetsApplied() {
        return this.insetsApplied;
    }

    public final boolean getNativeBackButtonDismissalEnabled() {
        return this.nativeBackButtonDismissalEnabled;
    }

    @NotNull
    public final ThemedReactContext getReactContext() {
        return this.reactContext;
    }

    public final EventDispatcher getReactEventDispatcher() {
        return UIManagerHelper.getEventDispatcherForReactTag(this.reactContext, getId());
    }

    @NotNull
    public final ReplaceAnimation getReplaceAnimation() {
        return this.replaceAnimation;
    }

    public final String getScreenId() {
        return this.screenId;
    }

    public final Integer getScreenOrientation() {
        return this.screenOrientation;
    }

    public final BottomSheetBehavior<Screen> getSheetBehavior() {
        CoordinatorLayout.f fVar;
        CoordinatorLayout.c cVar;
        ViewGroup.LayoutParams layoutParams = getLayoutParams();
        if (layoutParams instanceof CoordinatorLayout.f) {
            fVar = (CoordinatorLayout.f) layoutParams;
        } else {
            fVar = null;
        }
        if (fVar != null) {
            cVar = fVar.f();
        } else {
            cVar = null;
        }
        if (!(cVar instanceof BottomSheetBehavior)) {
            return null;
        }
        return (BottomSheetBehavior) cVar;
    }

    public final boolean getSheetClosesOnTouchOutside() {
        return this.sheetClosesOnTouchOutside;
    }

    public final float getSheetCornerRadius() {
        return this.sheetCornerRadius;
    }

    public final boolean getSheetDefaultResizeAnimationEnabled() {
        return this.sheetDefaultResizeAnimationEnabled;
    }

    @NotNull
    public final SheetDetents getSheetDetents() {
        return this.sheetDetents;
    }

    public final float getSheetElevation() {
        return this.sheetElevation;
    }

    public final boolean getSheetExpandsWhenScrolledToEdge() {
        return this.sheetExpandsWhenScrolledToEdge;
    }

    public final int getSheetInitialDetentIndex() {
        return this.sheetInitialDetentIndex;
    }

    public final int getSheetLargestUndimmedDetentIndex() {
        return this.sheetLargestUndimmedDetentIndex;
    }

    public final boolean getSheetShouldOverflowTopInset() {
        return this.sheetShouldOverflowTopInset;
    }

    public final boolean getShouldTriggerPostponedTransitionAfterLayout() {
        return this.shouldTriggerPostponedTransitionAfterLayout;
    }

    @NotNull
    public final StackAnimation getStackAnimation() {
        return this.stackAnimation;
    }

    @NotNull
    public final StackPresentation getStackPresentation() {
        return this.stackPresentation;
    }

    public final String getStatusBarStyle() {
        return this.statusBarStyle;
    }

    public final boolean isBeingRemoved() {
        return this.isBeingRemoved;
    }

    public final boolean isGestureEnabled() {
        return this.isGestureEnabled;
    }

    public final Boolean isNavigationBarHidden() {
        return this.isNavigationBarHidden;
    }

    public final boolean isSheetGrabberVisible() {
        return this.isSheetGrabberVisible;
    }

    public final Boolean isStatusBarAnimated() {
        return this.isStatusBarAnimated;
    }

    public final Boolean isStatusBarHidden() {
        return this.isStatusBarHidden;
    }

    public final boolean isTranslucent() {
        int i10 = a.f19058a[this.stackPresentation.ordinal()];
        if (i10 == 1 || i10 == 2) {
            return true;
        }
        return false;
    }

    public final void notifyHeaderHeightChange$react_native_screens_release(int i10) {
        Context context = getContext();
        Intrinsics.checkNotNull(context, "null cannot be cast to non-null type com.facebook.react.bridge.ReactContext");
        ReactContext reactContext = (ReactContext) context;
        int surfaceId = UIManagerHelper.getSurfaceId(reactContext);
        EventDispatcher eventDispatcherForReactTag = UIManagerHelper.getEventDispatcherForReactTag(reactContext, getId());
        if (eventDispatcherForReactTag != null) {
            eventDispatcherForReactTag.dispatchEvent(new qn.d(surfaceId, getId(), PixelUtil.toDIPFromPixel(i10)));
        }
    }

    @Override // android.view.View
    public WindowInsets onApplyWindowInsets(WindowInsets windowInsets) {
        this.insetsApplied = true;
        return super.onApplyWindowInsets(windowInsets);
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void onAttachedToWindow() {
        Fragment fragment;
        r0 a10;
        pn.o e02;
        super.onAttachedToWindow();
        if (pn.q.d(this) && (fragment = getFragment()) != null && (a10 = rn.a.a(fragment)) != null && (e02 = a10.e0()) != null) {
            k.f19290d.b(e02);
        }
    }

    public final void onBottomSheetBehaviorDidLayout$react_native_screens_release(boolean z10) {
        if (pn.q.d(this) && i()) {
            if (pn.q.b(this)) {
                requestLayout();
            }
            if (z10) {
                e(getWidth(), getHeight(), getTop());
            }
            ScreenFooter screenFooter = this.footer;
            if (screenFooter != null) {
                int left = getLeft();
                int top = getTop();
                int right = getRight();
                int bottom = getBottom();
                ScreenContainer screenContainer = this.container;
                Intrinsics.checkNotNull(screenContainer);
                screenFooter.q(z10, left, top, right, bottom, screenContainer.getHeight());
            }
        }
    }

    @Override // com.swmansion.rnscreens.ScreenContentWrapper.a
    public void onContentWrapperLayout(boolean z10, int i10, int i11, int i12, int i13) {
        boolean z11;
        int i14 = i13 - i11;
        BottomSheetBehavior<Screen> sheetBehavior = getSheetBehavior();
        if (pn.q.d(this) && pn.q.b(this) && sheetBehavior != null) {
            int a10 = pn.a.a(sheetBehavior);
            if (a10 == 0) {
                z11 = true;
            } else {
                z11 = false;
            }
            if (a10 != i14) {
                if (z11) {
                    k(sheetBehavior, i14);
                } else if (this.sheetDefaultResizeAnimationEnabled) {
                    l(sheetBehavior, a10, i14);
                } else {
                    q(sheetBehavior, i14);
                }
            }
        }
    }

    public final void onFinalizePropsUpdate$react_native_screens_release() {
        if (this.shouldUpdateSheetCornerRadius) {
            this.shouldUpdateSheetCornerRadius = false;
            onSheetCornerRadiusChange$react_native_screens_release();
        }
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void onLayout(boolean z10, int i10, int i11, int i12, int i13) {
        ScreenStackHeaderConfig headerConfig;
        ScreenStackHeaderConfig headerConfig2;
        View view;
        Window window;
        if (z10 && i() && !pn.q.d(this)) {
            int i14 = i12 - i10;
            int i15 = i13 - i11;
            if (!this.insetsApplied && (headerConfig = getHeaderConfig()) != null && !headerConfig.h() && (headerConfig2 = getHeaderConfig()) != null && !headerConfig2.i()) {
                Activity currentActivity = this.reactContext.getCurrentActivity();
                if (currentActivity != null && (window = currentActivity.getWindow()) != null) {
                    view = window.getDecorView();
                } else {
                    view = null;
                }
                if (view != null) {
                    int a10 = co.a.a(view);
                    e(i14, i15 - a10, i11 + a10);
                    return;
                }
                throw new IllegalArgumentException("[RNScreens] DecorView is required for applying inset correction, but was null.");
            }
            e(i14, i15, i11);
        }
    }

    public final void onSheetCornerRadiusChange$react_native_screens_release() {
        th.h hVar;
        if (this.stackPresentation == StackPresentation.f19055o && getBackground() != null) {
            Drawable background = getBackground();
            if (background instanceof th.h) {
                hVar = (th.h) background;
            } else {
                hVar = null;
            }
            if (hVar != null) {
                float max = Math.max(PixelUtil.toDIPFromPixel(this.sheetCornerRadius), 0.0f);
                l.b bVar = new l.b();
                bVar.A(0, max);
                bVar.F(0, max);
                hVar.setShapeAppearanceModel(bVar.m());
            }
        }
    }

    public final void onSheetDetentChanged$react_native_screens_release(int i10, boolean z10) {
        f(i10, z10);
        if (z10) {
            onSheetYTranslationChanged$react_native_screens_release();
        }
    }

    public final void onSheetYTranslationChanged$react_native_screens_release() {
        updateScreenSizeFabric(getWidth(), getHeight(), getTop() + ((int) getTranslationY()));
    }

    @Override // android.view.View
    @SuppressLint({"ClickableViewAccessibility"})
    public boolean onTouchEvent(MotionEvent motionEvent) {
        if (pn.q.d(this)) {
            return true;
        }
        return super.onTouchEvent(motionEvent);
    }

    public final void registerLayoutCallbackForWrapper(@NotNull ScreenContentWrapper wrapper) {
        Intrinsics.checkNotNullParameter(wrapper, "wrapper");
        wrapper.setDelegate$react_native_screens_release(this);
    }

    public final void requestTriggeringPostponedEnterTransition$react_native_screens_release() {
        if (!this.sheetShouldOverflowTopInset) {
            this.shouldTriggerPostponedTransitionAfterLayout = true;
        }
    }

    public final void setActivityState(@NotNull ActivityState activityState) {
        Intrinsics.checkNotNullParameter(activityState, "activityState");
        ActivityState activityState2 = this.activityState;
        if (activityState != activityState2) {
            if ((this.container instanceof ScreenStack) && activityState2 != null) {
                Intrinsics.checkNotNull(activityState2);
                if (activityState.compareTo(activityState2) < 0) {
                    throw new IllegalStateException("[RNScreens] activityState can only progress in NativeStack");
                }
            }
            this.activityState = activityState;
            ScreenContainer screenContainer = this.container;
            if (screenContainer != null) {
                screenContainer.onChildUpdate();
            }
        }
    }

    public final void setBeingRemoved(boolean z10) {
        this.isBeingRemoved = z10;
    }

    public final void setContainer(ScreenContainer screenContainer) {
        this.container = screenContainer;
    }

    public final void setFooter(ScreenFooter screenFooter) {
        BottomSheetBehavior<Screen> sheetBehavior;
        if (screenFooter == null && this.footer != null) {
            BottomSheetBehavior<Screen> sheetBehavior2 = getSheetBehavior();
            if (sheetBehavior2 != null) {
                ScreenFooter screenFooter2 = this.footer;
                Intrinsics.checkNotNull(screenFooter2);
                screenFooter2.w(sheetBehavior2);
            }
        } else if (screenFooter != null && (sheetBehavior = getSheetBehavior()) != null) {
            screenFooter.r(sheetBehavior);
        }
        this.footer = screenFooter;
    }

    public final void setFragmentWrapper(ScreenFragmentWrapper screenFragmentWrapper) {
        this.fragmentWrapper = screenFragmentWrapper;
    }

    public final void setGestureEnabled(boolean z10) {
        this.isGestureEnabled = z10;
    }

    public final void setInsetsApplied(boolean z10) {
        this.insetsApplied = z10;
    }

    @Override // android.view.View
    public void setLayerType(int i10, Paint paint) {
    }

    public final void setNativeBackButtonDismissalEnabled(boolean z10) {
        this.nativeBackButtonDismissalEnabled = z10;
    }

    public final void setNavigationBarHidden(Boolean bool) {
        if (bool != null) {
            y0.f19411a.c();
        }
        this.isNavigationBarHidden = bool;
        ScreenFragmentWrapper screenFragmentWrapper = this.fragmentWrapper;
        if (screenFragmentWrapper != null) {
            y0.f19411a.l(this, screenFragmentWrapper.j());
        }
    }

    public final void setReplaceAnimation(@NotNull ReplaceAnimation replaceAnimation) {
        Intrinsics.checkNotNullParameter(replaceAnimation, "<set-?>");
        this.replaceAnimation = replaceAnimation;
    }

    public final void setScreenId(String str) {
        this.screenId = str;
    }

    /* JADX WARN: Can't fix incorrect switch cases order, some code will duplicate */
    public final void setScreenOrientation(String str) {
        int i10;
        if (str == null) {
            this.screenOrientation = null;
            return;
        }
        y0 y0Var = y0.f19411a;
        y0Var.d();
        switch (str.hashCode()) {
            case -1894896954:
                if (str.equals("portrait_down")) {
                    i10 = 9;
                    break;
                }
                i10 = -1;
                break;
            case 96673:
                if (str.equals("all")) {
                    i10 = 10;
                    break;
                }
                i10 = -1;
                break;
            case 729267099:
                if (str.equals("portrait")) {
                    i10 = 7;
                    break;
                }
                i10 = -1;
                break;
            case 1430647483:
                if (str.equals("landscape")) {
                    i10 = 6;
                    break;
                }
                i10 = -1;
                break;
            case 1651658175:
                if (str.equals("portrait_up")) {
                    i10 = 1;
                    break;
                }
                i10 = -1;
                break;
            case 1730732811:
                if (str.equals("landscape_left")) {
                    i10 = 8;
                    break;
                }
                i10 = -1;
                break;
            case 2118770584:
                if (str.equals("landscape_right")) {
                    i10 = 0;
                    break;
                }
                i10 = -1;
                break;
            default:
                i10 = -1;
                break;
        }
        this.screenOrientation = Integer.valueOf(i10);
        ScreenFragmentWrapper screenFragmentWrapper = this.fragmentWrapper;
        if (screenFragmentWrapper != null) {
            y0Var.m(this, screenFragmentWrapper.j());
        }
    }

    public final void setSheetClosesOnTouchOutside(boolean z10) {
        this.sheetClosesOnTouchOutside = z10;
    }

    public final void setSheetCornerRadius(float f10) {
        if (this.sheetCornerRadius == f10) {
            return;
        }
        this.sheetCornerRadius = f10;
        this.shouldUpdateSheetCornerRadius = true;
    }

    public final void setSheetDefaultResizeAnimationEnabled(boolean z10) {
        this.sheetDefaultResizeAnimationEnabled = z10;
    }

    public final void setSheetDetents(@NotNull SheetDetents sheetDetents) {
        Intrinsics.checkNotNullParameter(sheetDetents, "<set-?>");
        this.sheetDetents = sheetDetents;
    }

    public final void setSheetElevation(float f10) {
        this.sheetElevation = f10;
    }

    public final void setSheetExpandsWhenScrolledToEdge(boolean z10) {
        this.sheetExpandsWhenScrolledToEdge = z10;
    }

    public final void setSheetGrabberVisible(boolean z10) {
        this.isSheetGrabberVisible = z10;
    }

    public final void setSheetInitialDetentIndex(int i10) {
        this.sheetInitialDetentIndex = i10;
    }

    public final void setSheetLargestUndimmedDetentIndex(int i10) {
        this.sheetLargestUndimmedDetentIndex = i10;
    }

    public final void setSheetShouldOverflowTopInset(boolean z10) {
        this.sheetShouldOverflowTopInset = z10;
    }

    public final void setShouldTriggerPostponedTransitionAfterLayout(boolean z10) {
        this.shouldTriggerPostponedTransitionAfterLayout = z10;
    }

    public final void setStackAnimation(@NotNull StackAnimation stackAnimation) {
        Intrinsics.checkNotNullParameter(stackAnimation, "<set-?>");
        this.stackAnimation = stackAnimation;
    }

    public final void setStackPresentation(@NotNull StackPresentation stackPresentation) {
        Intrinsics.checkNotNullParameter(stackPresentation, "<set-?>");
        this.stackPresentation = stackPresentation;
    }

    public final void setStatusBarAnimated(Boolean bool) {
        this.isStatusBarAnimated = bool;
    }

    public final void setStatusBarHidden(Boolean bool) {
        if (bool != null) {
            y0.f19411a.e();
        }
        this.isStatusBarHidden = bool;
        ScreenFragmentWrapper screenFragmentWrapper = this.fragmentWrapper;
        if (screenFragmentWrapper != null) {
            y0.f19411a.k(this, screenFragmentWrapper.j());
        }
    }

    public final void setStatusBarStyle(String str) {
        if (str != null) {
            y0.f19411a.e();
        }
        this.statusBarStyle = str;
        ScreenFragmentWrapper screenFragmentWrapper = this.fragmentWrapper;
        if (screenFragmentWrapper != null) {
            y0.f19411a.o(this, screenFragmentWrapper.j(), screenFragmentWrapper.o());
        }
    }

    public final void setTransitioning(boolean z10) {
        if (this.isTransitioning != z10) {
            this.isTransitioning = z10;
            boolean h10 = h(this);
            int i10 = 2;
            if (h10 && getLayerType() != 2) {
                return;
            }
            super.setLayerType((!z10 || h10) ? 0 : 0, null);
        }
    }

    public void startRemovalTransition() {
        if (!this.isBeingRemoved) {
            this.isBeingRemoved = true;
            startTransitionRecursive(this);
        }
    }

    public final void triggerPostponedEnterTransitionIfNeeded$react_native_screens_release() {
        if (this.shouldTriggerPostponedTransitionAfterLayout) {
            this.shouldTriggerPostponedTransitionAfterLayout = false;
            Fragment fragment = getFragment();
            if (fragment != null) {
                fragment.startPostponedEnterTransition();
            }
        }
    }
}
