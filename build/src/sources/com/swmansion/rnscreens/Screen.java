package com.swmansion.rnscreens;

import android.annotation.SuppressLint;
import android.content.Context;
import android.graphics.Paint;
import android.graphics.drawable.Drawable;
import android.os.Parcelable;
import android.util.SparseArray;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewGroup;
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
import java.util.Iterator;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
import rh.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class Screen extends g implements ScreenContentWrapper.a {
    @NotNull
    public static final Companion Companion = new Companion(null);
    public static final double SHEET_FIT_TO_CONTENTS = -1.0d;
    @NotNull
    public static final String TAG = "Screen";
    private ActivityState activityState;
    private ScreenContainer container;
    private ScreenFooter footer;
    private ScreenFragmentWrapper fragmentWrapper;
    private boolean isBeingRemoved;
    private boolean isGestureEnabled;
    private Boolean isNavigationBarHidden;
    private Boolean isNavigationBarTranslucent;
    private boolean isSheetGrabberVisible;
    private Boolean isStatusBarAnimated;
    private Boolean isStatusBarHidden;
    private Boolean isStatusBarTranslucent;
    private boolean isTransitioning;
    private boolean nativeBackButtonDismissalEnabled;
    private Integer navigationBarColor;
    @NotNull
    private final ThemedReactContext reactContext;
    @NotNull
    private ReplaceAnimation replaceAnimation;
    private Integer screenOrientation;
    private boolean sheetClosesOnTouchOutside;
    private float sheetCornerRadius;
    @NotNull
    private List<Double> sheetDetents;
    private float sheetElevation;
    private boolean sheetExpandsWhenScrolledToEdge;
    private int sheetInitialDetentIndex;
    private int sheetLargestUndimmedDetentIndex;
    private boolean shouldTriggerPostponedTransitionAfterLayout;
    private boolean shouldUpdateSheetCornerRadius;
    @NotNull
    private StackAnimation stackAnimation;
    @NotNull
    private StackPresentation stackPresentation;
    private Integer statusBarColor;
    private String statusBarStyle;

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class ActivityState {

        /* renamed from: d  reason: collision with root package name */
        public static final ActivityState f18283d = new ActivityState("INACTIVE", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final ActivityState f18284e = new ActivityState("TRANSITIONING_OR_BELOW_TOP", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final ActivityState f18285i = new ActivityState("ON_TOP", 2);

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ ActivityState[] f18286o;

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f18287p;

        static {
            ActivityState[] a10 = a();
            f18286o = a10;
            f18287p = yr.a.a(a10);
        }

        private ActivityState(String str, int i10) {
        }

        private static final /* synthetic */ ActivityState[] a() {
            return new ActivityState[]{f18283d, f18284e, f18285i};
        }

        public static ActivityState valueOf(String str) {
            return (ActivityState) Enum.valueOf(ActivityState.class, str);
        }

        public static ActivityState[] values() {
            return (ActivityState[]) f18286o.clone();
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
        public static final ReplaceAnimation f18288d = new ReplaceAnimation("PUSH", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final ReplaceAnimation f18289e = new ReplaceAnimation("POP", 1);

        /* renamed from: i  reason: collision with root package name */
        private static final /* synthetic */ ReplaceAnimation[] f18290i;

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f18291o;

        static {
            ReplaceAnimation[] a10 = a();
            f18290i = a10;
            f18291o = yr.a.a(a10);
        }

        private ReplaceAnimation(String str, int i10) {
        }

        private static final /* synthetic */ ReplaceAnimation[] a() {
            return new ReplaceAnimation[]{f18288d, f18289e};
        }

        public static ReplaceAnimation valueOf(String str) {
            return (ReplaceAnimation) Enum.valueOf(ReplaceAnimation.class, str);
        }

        public static ReplaceAnimation[] values() {
            return (ReplaceAnimation[]) f18290i.clone();
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class StackAnimation {

        /* renamed from: d  reason: collision with root package name */
        public static final StackAnimation f18292d = new StackAnimation("DEFAULT", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final StackAnimation f18293e = new StackAnimation("NONE", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final StackAnimation f18294i = new StackAnimation("FADE", 2);

        /* renamed from: o  reason: collision with root package name */
        public static final StackAnimation f18295o = new StackAnimation("SLIDE_FROM_BOTTOM", 3);

        /* renamed from: p  reason: collision with root package name */
        public static final StackAnimation f18296p = new StackAnimation("SLIDE_FROM_RIGHT", 4);

        /* renamed from: q  reason: collision with root package name */
        public static final StackAnimation f18297q = new StackAnimation("SLIDE_FROM_LEFT", 5);

        /* renamed from: r  reason: collision with root package name */
        public static final StackAnimation f18298r = new StackAnimation("FADE_FROM_BOTTOM", 6);

        /* renamed from: s  reason: collision with root package name */
        public static final StackAnimation f18299s = new StackAnimation("IOS_FROM_RIGHT", 7);

        /* renamed from: t  reason: collision with root package name */
        public static final StackAnimation f18300t = new StackAnimation("IOS_FROM_LEFT", 8);

        /* renamed from: u  reason: collision with root package name */
        private static final /* synthetic */ StackAnimation[] f18301u;

        /* renamed from: v  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f18302v;

        static {
            StackAnimation[] a10 = a();
            f18301u = a10;
            f18302v = yr.a.a(a10);
        }

        private StackAnimation(String str, int i10) {
        }

        private static final /* synthetic */ StackAnimation[] a() {
            return new StackAnimation[]{f18292d, f18293e, f18294i, f18295o, f18296p, f18297q, f18298r, f18299s, f18300t};
        }

        public static StackAnimation valueOf(String str) {
            return (StackAnimation) Enum.valueOf(StackAnimation.class, str);
        }

        public static StackAnimation[] values() {
            return (StackAnimation[]) f18301u.clone();
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class StackPresentation {

        /* renamed from: d  reason: collision with root package name */
        public static final StackPresentation f18303d = new StackPresentation("PUSH", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final StackPresentation f18304e = new StackPresentation("MODAL", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final StackPresentation f18305i = new StackPresentation("TRANSPARENT_MODAL", 2);

        /* renamed from: o  reason: collision with root package name */
        public static final StackPresentation f18306o = new StackPresentation("FORM_SHEET", 3);

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ StackPresentation[] f18307p;

        /* renamed from: q  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f18308q;

        static {
            StackPresentation[] a10 = a();
            f18307p = a10;
            f18308q = yr.a.a(a10);
        }

        private StackPresentation(String str, int i10) {
        }

        private static final /* synthetic */ StackPresentation[] a() {
            return new StackPresentation[]{f18303d, f18304e, f18305i, f18306o};
        }

        public static StackPresentation valueOf(String str) {
            return (StackPresentation) Enum.valueOf(StackPresentation.class, str);
        }

        public static StackPresentation[] values() {
            return (StackPresentation[]) f18307p.clone();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f18309a;

        static {
            int[] iArr = new int[StackPresentation.values().length];
            try {
                iArr[StackPresentation.f18305i.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[StackPresentation.f18306o.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            f18309a = iArr;
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {

        /* renamed from: d  reason: collision with root package name */
        public static final b f18310d = new b("ORIENTATION", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final b f18311e = new b("COLOR", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final b f18312i = new b("STYLE", 2);

        /* renamed from: o  reason: collision with root package name */
        public static final b f18313o = new b("TRANSLUCENT", 3);

        /* renamed from: p  reason: collision with root package name */
        public static final b f18314p = new b("HIDDEN", 4);

        /* renamed from: q  reason: collision with root package name */
        public static final b f18315q = new b("ANIMATED", 5);

        /* renamed from: r  reason: collision with root package name */
        public static final b f18316r = new b("NAVIGATION_BAR_COLOR", 6);

        /* renamed from: s  reason: collision with root package name */
        public static final b f18317s = new b("NAVIGATION_BAR_TRANSLUCENT", 7);

        /* renamed from: t  reason: collision with root package name */
        public static final b f18318t = new b("NAVIGATION_BAR_HIDDEN", 8);

        /* renamed from: u  reason: collision with root package name */
        private static final /* synthetic */ b[] f18319u;

        /* renamed from: v  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f18320v;

        static {
            b[] a10 = a();
            f18319u = a10;
            f18320v = yr.a.a(a10);
        }

        private b(String str, int i10) {
        }

        private static final /* synthetic */ b[] a() {
            return new b[]{f18310d, f18311e, f18312i, f18313o, f18314p, f18315q, f18316r, f18317s, f18318t};
        }

        public static b valueOf(String str) {
            return (b) Enum.valueOf(b.class, str);
        }

        public static b[] values() {
            return (b[]) f18319u.clone();
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public Screen(ThemedReactContext reactContext) {
        super(reactContext);
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        this.reactContext = reactContext;
        this.stackPresentation = StackPresentation.f18303d;
        this.replaceAnimation = ReplaceAnimation.f18289e;
        this.stackAnimation = StackAnimation.f18292d;
        this.isGestureEnabled = true;
        this.sheetExpandsWhenScrolledToEdge = true;
        this.sheetDetents = CollectionsKt.r(Double.valueOf(1.0d));
        this.sheetLargestUndimmedDetentIndex = -1;
        this.sheetClosesOnTouchOutside = true;
        this.sheetElevation = 24.0f;
        setLayoutParams(new WindowManager.LayoutParams(2));
        this.nativeBackButtonDismissalEnabled = true;
    }

    private final void a(int i10, int i11, int i12) {
        updateScreenSizeFabric(i10, i11, i12);
    }

    private final void b(int i10, boolean z10) {
        int surfaceId = UIManagerHelper.getSurfaceId(this.reactContext);
        EventDispatcher reactEventDispatcher = getReactEventDispatcher();
        if (reactEventDispatcher != null) {
            reactEventDispatcher.dispatchEvent(new on.s(surfaceId, getId(), i10, z10));
        }
    }

    private final void c(ViewGroup viewGroup) {
        for (View view : androidx.core.view.n0.a(viewGroup)) {
            viewGroup.endViewTransition(view);
            if (view instanceof ScreenStackHeaderConfig) {
                c(((ScreenStackHeaderConfig) view).getToolbar());
            }
            if (view instanceof ViewGroup) {
                c((ViewGroup) view);
            }
        }
    }

    private final boolean d(ViewGroup viewGroup) {
        int childCount = viewGroup.getChildCount();
        for (int i10 = 0; i10 < childCount; i10++) {
            View childAt = viewGroup.getChildAt(i10);
            if (childAt instanceof WebView) {
                return true;
            }
            if ((childAt instanceof ViewGroup) && d((ViewGroup) childAt)) {
                return true;
            }
        }
        return false;
    }

    private final boolean e() {
        return this.container instanceof ScreenStack;
    }

    private final void f(int i10) {
        Context context = getContext();
        Intrinsics.checkNotNull(context, "null cannot be cast to non-null type com.facebook.react.bridge.ReactContext");
        ReactContext reactContext = (ReactContext) context;
        int surfaceId = UIManagerHelper.getSurfaceId(reactContext);
        EventDispatcher eventDispatcherForReactTag = UIManagerHelper.getEventDispatcherForReactTag(reactContext, getId());
        if (eventDispatcherForReactTag != null) {
            eventDispatcherForReactTag.dispatchEvent(new on.d(surfaceId, getId(), i10));
        }
    }

    @rr.c
    public static /* synthetic */ void getNavigationBarColor$annotations() {
    }

    @rr.c
    public static /* synthetic */ void getStatusBarColor$annotations() {
    }

    @rr.c
    public static /* synthetic */ void isNavigationBarTranslucent$annotations() {
    }

    @rr.c
    public static /* synthetic */ void isStatusBarTranslucent$annotations() {
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
        d toolbar;
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
        c(this);
    }

    public final ActivityState getActivityState() {
        return this.activityState;
    }

    public final ScreenContainer getContainer() {
        return this.container;
    }

    public final ScreenContentWrapper getContentWrapper() {
        Object obj;
        Iterator it = androidx.core.view.n0.a(this).iterator();
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
        Iterator it = androidx.core.view.n0.a(this).iterator();
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

    public final boolean getNativeBackButtonDismissalEnabled() {
        return this.nativeBackButtonDismissalEnabled;
    }

    public final Integer getNavigationBarColor() {
        return this.navigationBarColor;
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

    @NotNull
    public final List<Double> getSheetDetents() {
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

    public final Integer getStatusBarColor() {
        return this.statusBarColor;
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

    public final Boolean isNavigationBarTranslucent() {
        return this.isNavigationBarTranslucent;
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

    public final Boolean isStatusBarTranslucent() {
        return this.isStatusBarTranslucent;
    }

    public final boolean isTranslucent() {
        int i10 = a.f18309a[this.stackPresentation.ordinal()];
        if (i10 == 1 || i10 == 2) {
            return true;
        }
        return false;
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void onAttachedToWindow() {
        Fragment fragment;
        n0 a10;
        nn.h a02;
        super.onAttachedToWindow();
        if (nn.j.d(this) && (fragment = getFragment()) != null && (a10 = pn.a.a(fragment)) != null && (a02 = a10.a0()) != null) {
            j.f18416d.b(a02);
        }
    }

    public final void onBottomSheetBehaviorDidLayout$react_native_screens_release(boolean z10) {
        if (nn.j.d(this) && e()) {
            if (z10) {
                a(getWidth(), getHeight(), getTop());
            }
            ScreenFooter screenFooter = this.footer;
            if (screenFooter != null) {
                int left = getLeft();
                int top = getTop();
                int right = getRight();
                int bottom = getBottom();
                ScreenContainer screenContainer = this.container;
                Intrinsics.checkNotNull(screenContainer);
                screenFooter.p(z10, left, top, right, bottom, screenContainer.getHeight());
            }
        }
    }

    @Override // com.swmansion.rnscreens.ScreenContentWrapper.a
    public void onContentWrapperLayout(boolean z10, int i10, int i11, int i12, int i13) {
        BottomSheetBehavior<Screen> sheetBehavior;
        int i14 = i13 - i11;
        if (nn.j.d(this) && nn.j.b(this) && (sheetBehavior = getSheetBehavior()) != null) {
            nn.a.b(sheetBehavior, Integer.valueOf(i14), false, 2, null);
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
        if (z10 && e() && !nn.j.d(this)) {
            a(i12 - i10, i13 - i11, i11);
            f(i11);
        }
    }

    public final void onSheetCornerRadiusChange$react_native_screens_release() {
        rh.g gVar;
        if (this.stackPresentation == StackPresentation.f18306o && getBackground() != null) {
            Drawable background = getBackground();
            if (background instanceof rh.g) {
                gVar = (rh.g) background;
            } else {
                gVar = null;
            }
            if (gVar != null) {
                float dIPFromPixel = PixelUtil.toDIPFromPixel(this.sheetCornerRadius);
                k.b bVar = new k.b();
                bVar.y(0, dIPFromPixel);
                bVar.D(0, dIPFromPixel);
                gVar.setShapeAppearanceModel(bVar.m());
            }
        }
    }

    public final void onSheetDetentChanged$react_native_screens_release(int i10, boolean z10) {
        b(i10, z10);
        if (z10) {
            updateScreenSizeFabric(getWidth(), getHeight(), getTop());
        }
    }

    @Override // android.view.View
    @SuppressLint({"ClickableViewAccessibility"})
    public boolean onTouchEvent(MotionEvent motionEvent) {
        if (nn.j.d(this)) {
            return true;
        }
        return super.onTouchEvent(motionEvent);
    }

    public final void registerLayoutCallbackForWrapper(@NotNull ScreenContentWrapper wrapper) {
        Intrinsics.checkNotNullParameter(wrapper, "wrapper");
        wrapper.setDelegate$react_native_screens_release(this);
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
                screenFooter2.v(sheetBehavior2);
            }
        } else if (screenFooter != null && (sheetBehavior = getSheetBehavior()) != null) {
            screenFooter.q(sheetBehavior);
        }
        this.footer = screenFooter;
    }

    public final void setFragmentWrapper(ScreenFragmentWrapper screenFragmentWrapper) {
        this.fragmentWrapper = screenFragmentWrapper;
    }

    public final void setGestureEnabled(boolean z10) {
        this.isGestureEnabled = z10;
    }

    @Override // android.view.View
    public void setLayerType(int i10, Paint paint) {
    }

    public final void setNativeBackButtonDismissalEnabled(boolean z10) {
        this.nativeBackButtonDismissalEnabled = z10;
    }

    public final void setNavigationBarColor(Integer num) {
        if (num != null) {
            v0.f18505a.e();
        }
        this.navigationBarColor = num;
        ScreenFragmentWrapper screenFragmentWrapper = this.fragmentWrapper;
        if (screenFragmentWrapper != null) {
            v0.f18505a.q(this, screenFragmentWrapper.i());
        }
    }

    public final void setNavigationBarHidden(Boolean bool) {
        if (bool != null) {
            v0.f18505a.e();
        }
        this.isNavigationBarHidden = bool;
        ScreenFragmentWrapper screenFragmentWrapper = this.fragmentWrapper;
        if (screenFragmentWrapper != null) {
            v0.f18505a.r(this, screenFragmentWrapper.i());
        }
    }

    public final void setNavigationBarTranslucent(Boolean bool) {
        if (bool != null) {
            v0.f18505a.e();
        }
        this.isNavigationBarTranslucent = bool;
        ScreenFragmentWrapper screenFragmentWrapper = this.fragmentWrapper;
        if (screenFragmentWrapper != null) {
            v0.f18505a.s(this, screenFragmentWrapper.i());
        }
    }

    public final void setReplaceAnimation(@NotNull ReplaceAnimation replaceAnimation) {
        Intrinsics.checkNotNullParameter(replaceAnimation, "<set-?>");
        this.replaceAnimation = replaceAnimation;
    }

    /* JADX WARN: Can't fix incorrect switch cases order, some code will duplicate */
    public final void setScreenOrientation(String str) {
        int i10;
        if (str == null) {
            this.screenOrientation = null;
            return;
        }
        v0 v0Var = v0.f18505a;
        v0Var.f();
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
            v0Var.t(this, screenFragmentWrapper.i());
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

    public final void setSheetDetents(@NotNull List<Double> list) {
        Intrinsics.checkNotNullParameter(list, "<set-?>");
        this.sheetDetents = list;
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

    public final void setStatusBarColor(Integer num) {
        if (num != null) {
            v0.f18505a.g();
        }
        this.statusBarColor = num;
        ScreenFragmentWrapper screenFragmentWrapper = this.fragmentWrapper;
        if (screenFragmentWrapper != null) {
            v0.f18505a.m(this, screenFragmentWrapper.i(), screenFragmentWrapper.o());
        }
    }

    public final void setStatusBarHidden(Boolean bool) {
        if (bool != null) {
            v0.f18505a.g();
        }
        this.isStatusBarHidden = bool;
        ScreenFragmentWrapper screenFragmentWrapper = this.fragmentWrapper;
        if (screenFragmentWrapper != null) {
            v0.f18505a.o(this, screenFragmentWrapper.i());
        }
    }

    public final void setStatusBarStyle(String str) {
        if (str != null) {
            v0.f18505a.g();
        }
        this.statusBarStyle = str;
        ScreenFragmentWrapper screenFragmentWrapper = this.fragmentWrapper;
        if (screenFragmentWrapper != null) {
            v0.f18505a.v(this, screenFragmentWrapper.i(), screenFragmentWrapper.o());
        }
    }

    public final void setStatusBarTranslucent(Boolean bool) {
        if (bool != null) {
            v0.f18505a.g();
        }
        this.isStatusBarTranslucent = bool;
        ScreenFragmentWrapper screenFragmentWrapper = this.fragmentWrapper;
        if (screenFragmentWrapper != null) {
            v0.f18505a.w(this, screenFragmentWrapper.i(), screenFragmentWrapper.o());
        }
    }

    public final void setTransitioning(boolean z10) {
        if (this.isTransitioning != z10) {
            this.isTransitioning = z10;
            boolean d10 = d(this);
            int i10 = 2;
            if (d10 && getLayerType() != 2) {
                return;
            }
            super.setLayerType((!z10 || d10) ? 0 : 0, null);
        }
    }

    public void startRemovalTransition() {
        if (!this.isBeingRemoved) {
            this.isBeingRemoved = true;
            startTransitionRecursive(this);
        }
    }
}
