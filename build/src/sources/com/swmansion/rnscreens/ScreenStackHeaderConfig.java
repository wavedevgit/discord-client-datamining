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
import com.swmansion.rnscreens.v0;
import java.util.ArrayList;
import java.util.Iterator;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class ScreenStackHeaderConfig extends f implements ReactPointerEventsView {
    public static final a O = new a(null);
    private float A;
    private int B;
    private Integer C;
    private boolean D;
    private boolean E;
    private boolean F;
    private boolean G;
    private int H;
    private boolean I;
    private final int J;
    private final int K;
    private final View.OnClickListener L;
    private boolean M;
    private final u0 N;

    /* renamed from: r  reason: collision with root package name */
    private final ReactPointerEventsView f19086r;

    /* renamed from: s  reason: collision with root package name */
    private final ArrayList f19087s;

    /* renamed from: t  reason: collision with root package name */
    private final e f19088t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f19089u;

    /* renamed from: v  reason: collision with root package name */
    private boolean f19090v;

    /* renamed from: w  reason: collision with root package name */
    private String f19091w;

    /* renamed from: x  reason: collision with root package name */
    private int f19092x;

    /* renamed from: y  reason: collision with root package name */
    private String f19093y;

    /* renamed from: z  reason: collision with root package name */
    private String f19094z;

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
        public static final /* synthetic */ int[] f19095a;

        static {
            int[] iArr = new int[v0.a.values().length];
            try {
                iArr[v0.a.f19395d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[v0.a.f19397i.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[v0.a.f19396e.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            f19095a = iArr;
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public ScreenStackHeaderConfig(Context context, ReactPointerEventsView pointerEventsImpl) {
        super(context);
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(pointerEventsImpl, "pointerEventsImpl");
        this.f19086r = pointerEventsImpl;
        this.f19087s = new ArrayList(3);
        this.L = new View.OnClickListener() { // from class: com.swmansion.rnscreens.s0
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                ScreenStackHeaderConfig.e(ScreenStackHeaderConfig.this, view);
            }
        };
        this.N = new u0();
        setVisibility(8);
        e eVar = new e(context, this);
        this.f19088t = eVar;
        this.J = eVar.getContentInsetStart();
        this.K = eVar.getContentInsetStartWithNavigation();
        TypedValue typedValue = new TypedValue();
        if (context.getTheme().resolveAttribute(16843827, typedValue, true)) {
            eVar.setBackgroundColor(typedValue.data);
        }
        eVar.setClipChildren(false);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void e(ScreenStackHeaderConfig screenStackHeaderConfig, View view) {
        r0 screenFragment = screenStackHeaderConfig.getScreenFragment();
        if (screenFragment != null) {
            ScreenStack screenStack = screenStackHeaderConfig.getScreenStack();
            if (screenStack != null && Intrinsics.areEqual(screenStack.getRootScreen(), screenFragment.h())) {
                Fragment parentFragment = screenFragment.getParentFragment();
                if (parentFragment instanceof r0) {
                    r0 r0Var = (r0) parentFragment;
                    if (r0Var.h().getNativeBackButtonDismissalEnabled()) {
                        r0Var.Z();
                    } else {
                        r0Var.z();
                    }
                }
            } else if (screenFragment.h().getNativeBackButtonDismissalEnabled()) {
                screenFragment.Z();
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

    public final void d(v0 child, int i10) {
        Intrinsics.checkNotNullParameter(child, "child");
        this.f19087s.add(i10, child);
        j();
    }

    public final void f() {
        this.F = true;
    }

    public final v0 g(int i10) {
        Object obj = this.f19087s.get(i10);
        Intrinsics.checkNotNullExpressionValue(obj, "get(...)");
        return (v0) obj;
    }

    public final int getConfigSubviewsCount() {
        return this.f19087s.size();
    }

    @NotNull
    public final u0 getHeaderHeightUpdateProxy() {
        return this.N;
    }

    @Override // com.facebook.react.uimanager.ReactPointerEventsView
    @NotNull
    public PointerEvents getPointerEvents() {
        return this.f19086r.getPointerEvents();
    }

    public final int getPreferredContentInsetEnd() {
        return this.J;
    }

    public final int getPreferredContentInsetStart() {
        return this.J;
    }

    public final int getPreferredContentInsetStartWithNavigation() {
        if (this.M) {
            return 0;
        }
        return this.K;
    }

    public final r0 getScreenFragment() {
        ViewParent parent = getParent();
        if (parent instanceof Screen) {
            Fragment fragment = ((Screen) parent).getFragment();
            if (fragment instanceof r0) {
                return (r0) fragment;
            }
            return null;
        }
        return null;
    }

    @NotNull
    public final e getToolbar() {
        return this.f19088t;
    }

    public final boolean h() {
        return this.f19089u;
    }

    public final boolean i() {
        return this.f19090v;
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
        Iterator it = this.f19087s.iterator();
        while (true) {
            if (it.hasNext()) {
                obj = it.next();
                if (((v0) obj).getType() == v0.a.f19395d) {
                    break;
                }
            } else {
                obj = null;
                break;
            }
        }
        v0 v0Var = (v0) obj;
        if (v0Var != null) {
            max = v0Var.getLeft();
        }
        int currentContentInsetEnd = toolbar.getCurrentContentInsetEnd() + toolbar.getPaddingEnd();
        this.N.a(this, getScreen());
        a(toolbar.getWidth(), toolbar.getHeight(), max, currentContentInsetEnd);
    }

    public final void l() {
        boolean z10;
        FragmentActivity fragmentActivity;
        boolean z11;
        ImageView imageView;
        Drawable navigationIcon;
        r0 screenFragment;
        r0 screenFragment2;
        ReactContext reactContext;
        ScreenStack screenStack = getScreenStack();
        if (screenStack != null && !Intrinsics.areEqual(screenStack.getTopScreen(), getParent())) {
            z10 = false;
        } else {
            z10 = true;
        }
        if (this.I && z10 && !this.F) {
            r0 screenFragment3 = getScreenFragment();
            if (screenFragment3 != null) {
                fragmentActivity = screenFragment3.getActivity();
            } else {
                fragmentActivity = null;
            }
            AppCompatActivity appCompatActivity = (AppCompatActivity) fragmentActivity;
            if (appCompatActivity != null) {
                String str = this.f19094z;
                if (str != null) {
                    if (Intrinsics.areEqual(str, "rtl")) {
                        this.f19088t.setLayoutDirection(1);
                    } else if (Intrinsics.areEqual(this.f19094z, "ltr")) {
                        this.f19088t.setLayoutDirection(0);
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
                    y0.f19412a.p(screen, appCompatActivity, reactContext);
                }
                if (this.f19089u) {
                    if (this.f19088t.getParent() != null && (screenFragment2 = getScreenFragment()) != null) {
                        screenFragment2.i0();
                    }
                    this.N.a(this, getScreen());
                    return;
                }
                if (this.f19088t.getParent() == null && (screenFragment = getScreenFragment()) != null) {
                    screenFragment.p0(this.f19088t);
                }
                appCompatActivity.setSupportActionBar(this.f19088t);
                ActionBar supportActionBar = appCompatActivity.getSupportActionBar();
                if (supportActionBar != null) {
                    r0 screenFragment4 = getScreenFragment();
                    if (screenFragment4 != null && screenFragment4.V() && !this.D) {
                        z11 = true;
                    } else {
                        z11 = false;
                    }
                    supportActionBar.s(z11);
                    supportActionBar.w(this.f19091w);
                    if (TextUtils.isEmpty(this.f19091w)) {
                        this.M = true;
                    }
                    this.f19088t.V();
                    this.f19088t.setNavigationOnClickListener(this.L);
                    r0 screenFragment5 = getScreenFragment();
                    if (screenFragment5 != null) {
                        screenFragment5.q0(this.E);
                    }
                    r0 screenFragment6 = getScreenFragment();
                    if (screenFragment6 != null) {
                        screenFragment6.r0(this.f19090v);
                    }
                    TextView a10 = O.a(this.f19088t);
                    int i10 = this.f19092x;
                    if (i10 != 0) {
                        this.f19088t.setTitleTextColor(i10);
                    }
                    if (a10 != null) {
                        String str2 = this.f19093y;
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
                        this.f19088t.setBackgroundColor(num.intValue());
                    }
                    if (this.H != 0 && (navigationIcon = this.f19088t.getNavigationIcon()) != null) {
                        navigationIcon.setColorFilter(new PorterDuffColorFilter(this.H, PorterDuff.Mode.SRC_ATOP));
                    }
                    for (int childCount = this.f19088t.getChildCount() - 1; -1 < childCount; childCount--) {
                        if (this.f19088t.getChildAt(childCount) instanceof v0) {
                            this.f19088t.removeViewAt(childCount);
                        }
                    }
                    int size = this.f19087s.size();
                    for (int i12 = 0; i12 < size; i12++) {
                        Object obj = this.f19087s.get(i12);
                        Intrinsics.checkNotNullExpressionValue(obj, "get(...)");
                        v0 v0Var = (v0) obj;
                        v0.a type = v0Var.getType();
                        if (type == v0.a.f19398o) {
                            View childAt = v0Var.getChildAt(0);
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
                            int i13 = b.f19095a[type.ordinal()];
                            if (i13 != 1) {
                                if (i13 != 2) {
                                    if (i13 == 3) {
                                        ((ViewGroup.MarginLayoutParams) gVar).width = -1;
                                        gVar.f1045a = 1;
                                        this.f19088t.setTitle((CharSequence) null);
                                    }
                                } else {
                                    gVar.f1045a = 8388613;
                                }
                            } else {
                                if (!this.G) {
                                    this.f19088t.setNavigationIcon((Drawable) null);
                                }
                                this.f19088t.setTitle((CharSequence) null);
                                gVar.f1045a = 8388611;
                            }
                            v0Var.setLayoutParams(gVar);
                            this.f19088t.addView(v0Var);
                        }
                    }
                    this.N.a(this, getScreen());
                    return;
                }
                throw new IllegalArgumentException("Required value was null.");
            }
        }
    }

    public final void m() {
        this.f19087s.clear();
        j();
    }

    public final void n(int i10) {
        this.f19087s.remove(i10);
        j();
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void onAttachedToWindow() {
        super.onAttachedToWindow();
        this.I = true;
        int surfaceId = UIManagerHelper.getSurfaceId(this);
        Context context = getContext();
        Intrinsics.checkNotNull(context, "null cannot be cast to non-null type com.facebook.react.bridge.ReactContext");
        EventDispatcher eventDispatcherForReactTag = UIManagerHelper.getEventDispatcherForReactTag((ReactContext) context, getId());
        if (eventDispatcherForReactTag != null) {
            eventDispatcherForReactTag.dispatchEvent(new qn.a(surfaceId, getId()));
        }
        l();
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void onDetachedFromWindow() {
        super.onDetachedFromWindow();
        this.I = false;
        int surfaceId = UIManagerHelper.getSurfaceId(this);
        Context context = getContext();
        Intrinsics.checkNotNull(context, "null cannot be cast to non-null type com.facebook.react.bridge.ReactContext");
        EventDispatcher eventDispatcherForReactTag = UIManagerHelper.getEventDispatcherForReactTag((ReactContext) context, getId());
        if (eventDispatcherForReactTag != null) {
            eventDispatcherForReactTag.dispatchEvent(new qn.c(surfaceId, getId()));
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
        this.f19094z = str;
    }

    public final void setHeaderHidden(boolean z10) {
        this.f19089u = z10;
    }

    public final void setHeaderTranslucent(boolean z10) {
        this.f19090v = z10;
    }

    public final void setHidden(boolean z10) {
        this.f19089u = z10;
    }

    public final void setHideBackButton(boolean z10) {
        this.D = z10;
    }

    public final void setHideShadow(boolean z10) {
        this.E = z10;
    }

    public final void setTintColor(int i10) {
        this.H = i10;
    }

    public final void setTitle(String str) {
        this.f19091w = str;
    }

    public final void setTitleColor(int i10) {
        this.f19092x = i10;
    }

    public final void setTitleEmpty(boolean z10) {
        this.M = z10;
    }

    public final void setTitleFontFamily(String str) {
        this.f19093y = str;
    }

    public final void setTitleFontSize(float f10) {
        this.A = f10;
    }

    public final void setTitleFontWeight(String str) {
        this.B = ReactTypefaceUtils.parseFontWeight(str);
    }

    public final void setTranslucent(boolean z10) {
        this.f19090v = z10;
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public ScreenStackHeaderConfig(Context context) {
        this(context, new q());
        Intrinsics.checkNotNullParameter(context, "context");
    }
}
