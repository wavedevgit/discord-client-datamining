package com.swmansion.rnscreens;

import android.content.Context;
import android.content.res.AssetManager;
import android.graphics.PorterDuff;
import android.graphics.PorterDuffColorFilter;
import android.graphics.drawable.Drawable;
import android.text.TextUtils;
import android.util.TypedValue;
import android.view.View;
import android.view.ViewGroup;
import android.view.ViewParent;
import android.widget.ImageView;
import android.widget.TextView;
import androidx.appcompat.app.ActionBar;
import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentActivity;
import com.facebook.react.bridge.JSApplicationIllegalArgumentException;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.uimanager.PointerEvents;
import com.facebook.react.uimanager.ReactPointerEventsView;
import com.facebook.react.uimanager.UIManagerHelper;
import com.facebook.react.uimanager.events.EventDispatcher;
import com.facebook.react.views.text.ReactTypefaceUtils;
import com.swmansion.rnscreens.q0;
import java.util.ArrayList;
import java.util.Iterator;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class ScreenStackHeaderConfig extends e implements ReactPointerEventsView {
    public static final a O = new a(null);
    private float A;
    private int B;
    private Integer C;
    private boolean D;
    private boolean E;
    private boolean F;
    private boolean G;
    private boolean H;
    private int I;
    private boolean J;
    private final int K;
    private final int L;
    private final View.OnClickListener M;
    private boolean N;

    /* renamed from: r  reason: collision with root package name */
    private final ReactPointerEventsView f18200r;

    /* renamed from: s  reason: collision with root package name */
    private final ArrayList f18201s;

    /* renamed from: t  reason: collision with root package name */
    private final d f18202t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f18203u;

    /* renamed from: v  reason: collision with root package name */
    private boolean f18204v;

    /* renamed from: w  reason: collision with root package name */
    private String f18205w;

    /* renamed from: x  reason: collision with root package name */
    private int f18206x;

    /* renamed from: y  reason: collision with root package name */
    private String f18207y;

    /* renamed from: z  reason: collision with root package name */
    private String f18208z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final TextView a(Toolbar toolbar) {
            Intrinsics.checkNotNullParameter(toolbar, "toolbar");
            int childCount = toolbar.getChildCount();
            for (int i10 = 0; i10 < childCount; i10++) {
                View childAt = toolbar.getChildAt(i10);
                if (childAt instanceof TextView) {
                    TextView textView = (TextView) childAt;
                    if (TextUtils.equals(textView.getText(), toolbar.getTitle())) {
                        return textView;
                    }
                }
            }
            return null;
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class b {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f18209a;

        static {
            int[] iArr = new int[q0.a.values().length];
            try {
                iArr[q0.a.f18329d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[q0.a.f18331i.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[q0.a.f18330e.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            f18209a = iArr;
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public ScreenStackHeaderConfig(Context context, ReactPointerEventsView pointerEventsImpl) {
        super(context);
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(pointerEventsImpl, "pointerEventsImpl");
        this.f18200r = pointerEventsImpl;
        this.f18201s = new ArrayList(3);
        this.H = true;
        this.M = new View.OnClickListener() { // from class: com.swmansion.rnscreens.o0
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                ScreenStackHeaderConfig.e(ScreenStackHeaderConfig.this, view);
            }
        };
        setVisibility(8);
        d dVar = new d(context, this);
        this.f18202t = dVar;
        this.K = dVar.getContentInsetStart();
        this.L = dVar.getContentInsetStartWithNavigation();
        TypedValue typedValue = new TypedValue();
        if (context.getTheme().resolveAttribute(16843827, typedValue, true)) {
            dVar.setBackgroundColor(typedValue.data);
        }
        dVar.setClipChildren(false);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void e(ScreenStackHeaderConfig screenStackHeaderConfig, View view) {
        n0 screenFragment = screenStackHeaderConfig.getScreenFragment();
        if (screenFragment != null) {
            ScreenStack screenStack = screenStackHeaderConfig.getScreenStack();
            if (screenStack != null && Intrinsics.areEqual(screenStack.getRootScreen(), screenFragment.g())) {
                Fragment parentFragment = screenFragment.getParentFragment();
                if (parentFragment instanceof n0) {
                    n0 n0Var = (n0) parentFragment;
                    if (n0Var.g().getNativeBackButtonDismissalEnabled()) {
                        n0Var.V();
                    } else {
                        n0Var.z();
                    }
                }
            } else if (screenFragment.g().getNativeBackButtonDismissalEnabled()) {
                screenFragment.V();
            } else {
                screenFragment.z();
            }
        }
    }

    private final Screen getScreen() {
        ViewParent parent = getParent();
        if (parent instanceof Screen) {
            return (Screen) parent;
        }
        return null;
    }

    private final ScreenStack getScreenStack() {
        ScreenContainer screenContainer;
        Screen screen = getScreen();
        if (screen != null) {
            screenContainer = screen.getContainer();
        } else {
            screenContainer = null;
        }
        if (!(screenContainer instanceof ScreenStack)) {
            return null;
        }
        return (ScreenStack) screenContainer;
    }

    private final void j() {
        Screen screen;
        if (getParent() != null && !this.F && (screen = getScreen()) != null && !screen.isBeingRemoved()) {
            l();
        }
    }

    public final void d(q0 child, int i10) {
        Intrinsics.checkNotNullParameter(child, "child");
        this.f18201s.add(i10, child);
        j();
    }

    public final void f() {
        this.F = true;
    }

    public final q0 g(int i10) {
        Object obj = this.f18201s.get(i10);
        Intrinsics.checkNotNullExpressionValue(obj, "get(...)");
        return (q0) obj;
    }

    public final int getConfigSubviewsCount() {
        return this.f18201s.size();
    }

    @Override // com.facebook.react.uimanager.ReactPointerEventsView
    @NotNull
    public PointerEvents getPointerEvents() {
        return this.f18200r.getPointerEvents();
    }

    public final int getPreferredContentInsetEnd() {
        return this.K;
    }

    public final int getPreferredContentInsetStart() {
        return this.K;
    }

    public final int getPreferredContentInsetStartWithNavigation() {
        if (this.N) {
            return 0;
        }
        return this.L;
    }

    public final n0 getScreenFragment() {
        ViewParent parent = getParent();
        if (parent instanceof Screen) {
            Fragment fragment = ((Screen) parent).getFragment();
            if (fragment instanceof n0) {
                return (n0) fragment;
            }
            return null;
        }
        return null;
    }

    @NotNull
    public final d getToolbar() {
        return this.f18202t;
    }

    public final boolean h() {
        return this.f18203u;
    }

    public final boolean i() {
        return this.H;
    }

    public final void k(Toolbar toolbar, boolean z10) {
        int max;
        Object obj;
        Intrinsics.checkNotNullParameter(toolbar, "toolbar");
        if (!z10) {
            return;
        }
        if (toolbar.getNavigationIcon() != null) {
            max = toolbar.getCurrentContentInsetStart() + toolbar.getPaddingStart();
        } else {
            max = Math.max(toolbar.getCurrentContentInsetStart(), toolbar.getPaddingStart());
        }
        Iterator it = this.f18201s.iterator();
        while (true) {
            if (it.hasNext()) {
                obj = it.next();
                if (((q0) obj).getType() == q0.a.f18329d) {
                    break;
                }
            } else {
                obj = null;
                break;
            }
        }
        q0 q0Var = (q0) obj;
        if (q0Var != null) {
            max = q0Var.getLeft();
        }
        a(toolbar.getWidth(), toolbar.getHeight(), max, toolbar.getCurrentContentInsetEnd() + toolbar.getPaddingEnd());
    }

    public final void l() {
        boolean z10;
        FragmentActivity fragmentActivity;
        boolean z11;
        ImageView imageView;
        Drawable navigationIcon;
        n0 screenFragment;
        n0 screenFragment2;
        ReactContext reactContext;
        ScreenStack screenStack = getScreenStack();
        if (screenStack != null && !Intrinsics.areEqual(screenStack.getTopScreen(), getParent())) {
            z10 = false;
        } else {
            z10 = true;
        }
        if (this.J && z10 && !this.F) {
            n0 screenFragment3 = getScreenFragment();
            if (screenFragment3 != null) {
                fragmentActivity = screenFragment3.getActivity();
            } else {
                fragmentActivity = null;
            }
            AppCompatActivity appCompatActivity = (AppCompatActivity) fragmentActivity;
            if (appCompatActivity != null) {
                String str = this.f18208z;
                if (str != null) {
                    if (Intrinsics.areEqual(str, "rtl")) {
                        this.f18202t.setLayoutDirection(1);
                    } else if (Intrinsics.areEqual(this.f18208z, "ltr")) {
                        this.f18202t.setLayoutDirection(0);
                    }
                }
                Screen screen = getScreen();
                if (screen != null) {
                    if (getContext() instanceof ReactContext) {
                        Context context = getContext();
                        Intrinsics.checkNotNull(context, "null cannot be cast to non-null type com.facebook.react.bridge.ReactContext");
                        reactContext = (ReactContext) context;
                    } else {
                        ScreenFragmentWrapper fragmentWrapper = screen.getFragmentWrapper();
                        if (fragmentWrapper != null) {
                            reactContext = fragmentWrapper.o();
                        } else {
                            reactContext = null;
                        }
                    }
                    v0.f18365a.x(screen, appCompatActivity, reactContext);
                }
                if (this.f18203u) {
                    if (this.f18202t.getParent() != null && (screenFragment2 = getScreenFragment()) != null) {
                        screenFragment2.i0();
                        return;
                    }
                    return;
                }
                if (this.f18202t.getParent() == null && (screenFragment = getScreenFragment()) != null) {
                    screenFragment.o0(this.f18202t);
                }
                appCompatActivity.setSupportActionBar(this.f18202t);
                ActionBar supportActionBar = appCompatActivity.getSupportActionBar();
                if (supportActionBar != null) {
                    n0 screenFragment4 = getScreenFragment();
                    if (screenFragment4 != null && screenFragment4.T() && !this.D) {
                        z11 = true;
                    } else {
                        z11 = false;
                    }
                    supportActionBar.s(z11);
                    supportActionBar.w(this.f18205w);
                    if (TextUtils.isEmpty(this.f18205w)) {
                        this.N = true;
                    }
                    this.f18202t.V();
                    this.f18202t.setNavigationOnClickListener(this.M);
                    n0 screenFragment5 = getScreenFragment();
                    if (screenFragment5 != null) {
                        screenFragment5.p0(this.E);
                    }
                    n0 screenFragment6 = getScreenFragment();
                    if (screenFragment6 != null) {
                        screenFragment6.q0(this.f18204v);
                    }
                    TextView a10 = O.a(this.f18202t);
                    int i10 = this.f18206x;
                    if (i10 != 0) {
                        this.f18202t.setTitleTextColor(i10);
                    }
                    if (a10 != null) {
                        String str2 = this.f18207y;
                        if (str2 != null || this.B > 0) {
                            int i11 = this.B;
                            AssetManager assets = getContext().getAssets();
                            Intrinsics.checkNotNullExpressionValue(assets, "getAssets(...)");
                            a10.setTypeface(ReactTypefaceUtils.applyStyles(null, 0, i11, str2, assets));
                        }
                        float f10 = this.A;
                        if (f10 > 0.0f) {
                            a10.setTextSize(f10);
                        }
                    }
                    Integer num = this.C;
                    if (num != null) {
                        this.f18202t.setBackgroundColor(num.intValue());
                    }
                    if (this.I != 0 && (navigationIcon = this.f18202t.getNavigationIcon()) != null) {
                        navigationIcon.setColorFilter(new PorterDuffColorFilter(this.I, PorterDuff.Mode.SRC_ATOP));
                    }
                    for (int childCount = this.f18202t.getChildCount() - 1; -1 < childCount; childCount--) {
                        if (this.f18202t.getChildAt(childCount) instanceof q0) {
                            this.f18202t.removeViewAt(childCount);
                        }
                    }
                    int size = this.f18201s.size();
                    for (int i12 = 0; i12 < size; i12++) {
                        Object obj = this.f18201s.get(i12);
                        Intrinsics.checkNotNullExpressionValue(obj, "get(...)");
                        q0 q0Var = (q0) obj;
                        q0.a type = q0Var.getType();
                        if (type == q0.a.f18332o) {
                            View childAt = q0Var.getChildAt(0);
                            if (childAt instanceof ImageView) {
                                imageView = (ImageView) childAt;
                            } else {
                                imageView = null;
                            }
                            if (imageView != null) {
                                supportActionBar.u(imageView.getDrawable());
                            } else {
                                throw new JSApplicationIllegalArgumentException("Back button header config view should have Image as first child");
                            }
                        } else {
                            Toolbar.g gVar = new Toolbar.g(-2, -1);
                            int i13 = b.f18209a[type.ordinal()];
                            if (i13 != 1) {
                                if (i13 != 2) {
                                    if (i13 == 3) {
                                        ((ViewGroup.MarginLayoutParams) gVar).width = -1;
                                        gVar.f1347a = 1;
                                        this.f18202t.setTitle((CharSequence) null);
                                    }
                                } else {
                                    gVar.f1347a = 8388613;
                                }
                            } else {
                                if (!this.G) {
                                    this.f18202t.setNavigationIcon((Drawable) null);
                                }
                                this.f18202t.setTitle((CharSequence) null);
                                gVar.f1347a = 8388611;
                            }
                            q0Var.setLayoutParams(gVar);
                            this.f18202t.addView(q0Var);
                        }
                    }
                    return;
                }
                throw new IllegalArgumentException("Required value was null.");
            }
        }
    }

    public final void m() {
        this.f18201s.clear();
        j();
    }

    public final void n(int i10) {
        this.f18201s.remove(i10);
        j();
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void onAttachedToWindow() {
        super.onAttachedToWindow();
        this.J = true;
        int surfaceId = UIManagerHelper.getSurfaceId(this);
        Context context = getContext();
        Intrinsics.checkNotNull(context, "null cannot be cast to non-null type com.facebook.react.bridge.ReactContext");
        EventDispatcher eventDispatcherForReactTag = UIManagerHelper.getEventDispatcherForReactTag((ReactContext) context, getId());
        if (eventDispatcherForReactTag != null) {
            eventDispatcherForReactTag.dispatchEvent(new nn.a(surfaceId, getId()));
        }
        l();
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void onDetachedFromWindow() {
        super.onDetachedFromWindow();
        this.J = false;
        int surfaceId = UIManagerHelper.getSurfaceId(this);
        Context context = getContext();
        Intrinsics.checkNotNull(context, "null cannot be cast to non-null type com.facebook.react.bridge.ReactContext");
        EventDispatcher eventDispatcherForReactTag = UIManagerHelper.getEventDispatcherForReactTag((ReactContext) context, getId());
        if (eventDispatcherForReactTag != null) {
            eventDispatcherForReactTag.dispatchEvent(new nn.c(surfaceId, getId()));
        }
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void onLayout(boolean z10, int i10, int i11, int i12, int i13) {
    }

    public final void setBackButtonInCustomView(boolean z10) {
        this.G = z10;
    }

    public final void setBackgroundColor(Integer num) {
        this.C = num;
    }

    public final void setDirection(String str) {
        this.f18208z = str;
    }

    public final void setHeaderHidden(boolean z10) {
        this.f18203u = z10;
    }

    public final void setHeaderTranslucent(boolean z10) {
        this.f18204v = z10;
    }

    public final void setHidden(boolean z10) {
        this.f18203u = z10;
    }

    public final void setHideBackButton(boolean z10) {
        this.D = z10;
    }

    public final void setHideShadow(boolean z10) {
        this.E = z10;
    }

    public final void setTintColor(int i10) {
        this.I = i10;
    }

    public final void setTitle(String str) {
        this.f18205w = str;
    }

    public final void setTitleColor(int i10) {
        this.f18206x = i10;
    }

    public final void setTitleEmpty(boolean z10) {
        this.N = z10;
    }

    public final void setTitleFontFamily(String str) {
        this.f18207y = str;
    }

    public final void setTitleFontSize(float f10) {
        this.A = f10;
    }

    public final void setTitleFontWeight(String str) {
        this.B = ReactTypefaceUtils.parseFontWeight(str);
    }

    public final void setTopInsetEnabled(boolean z10) {
        this.H = z10;
    }

    public final void setTranslucent(boolean z10) {
        this.f18204v = z10;
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public ScreenStackHeaderConfig(Context context) {
        this(context, new p());
        Intrinsics.checkNotNullParameter(context, "context");
    }
}
