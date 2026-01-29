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
import oh.k;
import org.jetbrains.annotations.NotNull;
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
        public static final ActivityState f19142d = new ActivityState("INACTIVE", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final ActivityState f19143e = new ActivityState("TRANSITIONING_OR_BELOW_TOP", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final ActivityState f19144i = new ActivityState("ON_TOP", 2);

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ ActivityState[] f19145o;

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f19146p;

        static {
            ActivityState[] a10 = a();
            f19145o = a10;
            f19146p = pr.a.a(a10);
        }

        private ActivityState(String str, int i10) {
        }

        private static final /* synthetic */ ActivityState[] a() {
            return new ActivityState[]{f19142d, f19143e, f19144i};
        }

        public static ActivityState valueOf(String str) {
            return (ActivityState) Enum.valueOf(ActivityState.class, str);
        }

        public static ActivityState[] values() {
            return (ActivityState[]) f19145o.clone();
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
        public static final ReplaceAnimation f19147d = new ReplaceAnimation("PUSH", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final ReplaceAnimation f19148e = new ReplaceAnimation("POP", 1);

        /* renamed from: i  reason: collision with root package name */
        private static final /* synthetic */ ReplaceAnimation[] f19149i;

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f19150o;

        static {
            ReplaceAnimation[] a10 = a();
            f19149i = a10;
            f19150o = pr.a.a(a10);
        }

        private ReplaceAnimation(String str, int i10) {
        }

        private static final /* synthetic */ ReplaceAnimation[] a() {
            return new ReplaceAnimation[]{f19147d, f19148e};
        }

        public static ReplaceAnimation valueOf(String str) {
            return (ReplaceAnimation) Enum.valueOf(ReplaceAnimation.class, str);
        }

        public static ReplaceAnimation[] values() {
            return (ReplaceAnimation[]) f19149i.clone();
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class StackAnimation {

        /* renamed from: d  reason: collision with root package name */
        public static final StackAnimation f19151d = new StackAnimation("DEFAULT", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final StackAnimation f19152e = new StackAnimation("NONE", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final StackAnimation f19153i = new StackAnimation("FADE", 2);

        /* renamed from: o  reason: collision with root package name */
        public static final StackAnimation f19154o = new StackAnimation("SLIDE_FROM_BOTTOM", 3);

        /* renamed from: p  reason: collision with root package name */
        public static final StackAnimation f19155p = new StackAnimation("SLIDE_FROM_RIGHT", 4);

        /* renamed from: q  reason: collision with root package name */
        public static final StackAnimation f19156q = new StackAnimation("SLIDE_FROM_LEFT", 5);

        /* renamed from: r  reason: collision with root package name */
        public static final StackAnimation f19157r = new StackAnimation("FADE_FROM_BOTTOM", 6);

        /* renamed from: s  reason: collision with root package name */
        public static final StackAnimation f19158s = new StackAnimation("IOS_FROM_RIGHT", 7);

        /* renamed from: t  reason: collision with root package name */
        public static final StackAnimation f19159t = new StackAnimation("IOS_FROM_LEFT", 8);

        /* renamed from: u  reason: collision with root package name */
        private static final /* synthetic */ StackAnimation[] f19160u;

        /* renamed from: v  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f19161v;

        static {
            StackAnimation[] a10 = a();
            f19160u = a10;
            f19161v = pr.a.a(a10);
        }

        private StackAnimation(String str, int i10) {
        }

        private static final /* synthetic */ StackAnimation[] a() {
            return new StackAnimation[]{f19151d, f19152e, f19153i, f19154o, f19155p, f19156q, f19157r, f19158s, f19159t};
        }

        public static StackAnimation valueOf(String str) {
            return (StackAnimation) Enum.valueOf(StackAnimation.class, str);
        }

        public static StackAnimation[] values() {
            return (StackAnimation[]) f19160u.clone();
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class StackPresentation {

        /* renamed from: d  reason: collision with root package name */
        public static final StackPresentation f19162d = new StackPresentation("PUSH", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final StackPresentation f19163e = new StackPresentation("MODAL", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final StackPresentation f19164i = new StackPresentation("TRANSPARENT_MODAL", 2);

        /* renamed from: o  reason: collision with root package name */
        public static final StackPresentation f19165o = new StackPresentation("FORM_SHEET", 3);

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ StackPresentation[] f19166p;

        /* renamed from: q  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f19167q;

        static {
            StackPresentation[] a10 = a();
            f19166p = a10;
            f19167q = pr.a.a(a10);
        }

        private StackPresentation(String str, int i10) {
        }

        private static final /* synthetic */ StackPresentation[] a() {
            return new StackPresentation[]{f19162d, f19163e, f19164i, f19165o};
        }

        public static StackPresentation valueOf(String str) {
            return (StackPresentation) Enum.valueOf(StackPresentation.class, str);
        }

        public static StackPresentation[] values() {
            return (StackPresentation[]) f19166p.clone();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f19168a;

        static {
            int[] iArr = new int[StackPresentation.values().length];
            try {
                iArr[StackPresentation.f19164i.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[StackPresentation.f19165o.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            f19168a = iArr;
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {

        /* renamed from: d  reason: collision with root package name */
        public static final b f19169d = new b("ORIENTATION", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final b f19170e = new b("COLOR", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final b f19171i = new b("STYLE", 2);

        /* renamed from: o  reason: collision with root package name */
        public static final b f19172o = new b("TRANSLUCENT", 3);

        /* renamed from: p  reason: collision with root package name */
        public static final b f19173p = new b("HIDDEN", 4);

        /* renamed from: q  reason: collision with root package name */
        public static final b f19174q = new b("ANIMATED", 5);

        /* renamed from: r  reason: collision with root package name */
        public static final b f19175r = new b("NAVIGATION_BAR_COLOR", 6);

        /* renamed from: s  reason: collision with root package name */
        public static final b f19176s = new b("NAVIGATION_BAR_TRANSLUCENT", 7);

        /* renamed from: t  reason: collision with root package name */
        public static final b f19177t = new b("NAVIGATION_BAR_HIDDEN", 8);

        /* renamed from: u  reason: collision with root package name */
        private static final /* synthetic */ b[] f19178u;

        /* renamed from: v  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f19179v;

        static {
            b[] a10 = a();
            f19178u = a10;
            f19179v = pr.a.a(a10);
        }

        private b(String str, int i10) {
        }

        private static final /* synthetic */ b[] a() {
            return new b[]{f19169d, f19170e, f19171i, f19172o, f19173p, f19174q, f19175r, f19176s, f19177t};
        }

        public static b valueOf(String str) {
            return (b) Enum.valueOf(b.class, str);
        }

        public static b[] values() {
            return (b[]) f19178u.clone();
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public Screen(ThemedReactContext reactContext) {
        super(reactContext);
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        this.reactContext = reactContext;
        this.stackPresentation = StackPresentation.f19162d;
        this.replaceAnimation = ReplaceAnimation.f19148e;
        this.stackAnimation = StackAnimation.f19151d;
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
            reactEventDispatcher.dispatchEvent(new fn.s(surfaceId, getId(), i10, z10));
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
            eventDispatcherForReactTag.dispatchEvent(new fn.d(surfaceId, getId(), i10));
        }
    }

    @ir.c
    public static /* synthetic */ void getNavigationBarColor$annotations() {
    }

    @ir.c
    public static /* synthetic */ void getStatusBarColor$annotations() {
    }

    @ir.c
    public static /* synthetic */ void isNavigationBarTranslucent$annotations() {
    }

    @ir.c
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
        int i10 = a.f19168a[this.stackPresentation.ordinal()];
        if (i10 == 1 || i10 == 2) {
            return true;
        }
        return false;
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void onAttachedToWindow() {
        Fragment fragment;
        n0 a10;
        en.h a02;
        super.onAttachedToWindow();
        if (en.j.d(this) && (fragment = getFragment()) != null && (a10 = gn.a.a(fragment)) != null && (a02 = a10.a0()) != null) {
            j.f19275d.b(a02);
        }
    }

    public final void onBottomSheetBehaviorDidLayout$react_native_screens_release(boolean z10) {
        if (en.j.d(this) && e()) {
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
        if (en.j.d(this) && en.j.b(this) && (sheetBehavior = getSheetBehavior()) != null) {
            en.a.b(sheetBehavior, Integer.valueOf(i14), false, 2, null);
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
        if (z10 && e() && !en.j.d(this)) {
            a(i12 - i10, i13 - i11, i11);
            f(i11);
        }
    }

    public final void onSheetCornerRadiusChange$react_native_screens_release() {
        oh.g gVar;
        if (this.stackPresentation == StackPresentation.f19165o && getBackground() != null) {
            Drawable background = getBackground();
            if (background instanceof oh.g) {
                gVar = (oh.g) background;
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
        if (en.j.d(this)) {
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
            v0.f19364a.e();
        }
        this.navigationBarColor = num;
        ScreenFragmentWrapper screenFragmentWrapper = this.fragmentWrapper;
        if (screenFragmentWrapper != null) {
            v0.f19364a.q(this, screenFragmentWrapper.j());
        }
    }

    public final void setNavigationBarHidden(Boolean bool) {
        if (bool != null) {
            v0.f19364a.e();
        }
        this.isNavigationBarHidden = bool;
        ScreenFragmentWrapper screenFragmentWrapper = this.fragmentWrapper;
        if (screenFragmentWrapper != null) {
            v0.f19364a.r(this, screenFragmentWrapper.j());
        }
    }

    public final void setNavigationBarTranslucent(Boolean bool) {
        if (bool != null) {
            v0.f19364a.e();
        }
        this.isNavigationBarTranslucent = bool;
        ScreenFragmentWrapper screenFragmentWrapper = this.fragmentWrapper;
        if (screenFragmentWrapper != null) {
            v0.f19364a.s(this, screenFragmentWrapper.j());
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
        v0 v0Var = v0.f19364a;
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
            v0Var.t(this, screenFragmentWrapper.j());
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
            v0.f19364a.g();
        }
        this.statusBarColor = num;
        ScreenFragmentWrapper screenFragmentWrapper = this.fragmentWrapper;
        if (screenFragmentWrapper != null) {
            v0.f19364a.m(this, screenFragmentWrapper.j(), screenFragmentWrapper.o());
        }
    }

    public final void setStatusBarHidden(Boolean bool) {
        if (bool != null) {
            v0.f19364a.g();
        }
        this.isStatusBarHidden = bool;
        ScreenFragmentWrapper screenFragmentWrapper = this.fragmentWrapper;
        if (screenFragmentWrapper != null) {
            v0.f19364a.o(this, screenFragmentWrapper.j());
        }
    }

    public final void setStatusBarStyle(String str) {
        if (str != null) {
            v0.f19364a.g();
        }
        this.statusBarStyle = str;
        ScreenFragmentWrapper screenFragmentWrapper = this.fragmentWrapper;
        if (screenFragmentWrapper != null) {
            v0.f19364a.v(this, screenFragmentWrapper.j(), screenFragmentWrapper.o());
        }
    }

    public final void setStatusBarTranslucent(Boolean bool) {
        if (bool != null) {
            v0.f19364a.g();
        }
        this.isStatusBarTranslucent = bool;
        ScreenFragmentWrapper screenFragmentWrapper = this.fragmentWrapper;
        if (screenFragmentWrapper != null) {
            v0.f19364a.w(this, screenFragmentWrapper.j(), screenFragmentWrapper.o());
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
