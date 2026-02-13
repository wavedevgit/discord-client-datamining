package com.swmansion.rnscreens;

import android.content.Context;
import android.view.View;
import android.view.ViewParent;
import androidx.appcompat.widget.SearchView;
import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.uimanager.UIManagerHelper;
import com.facebook.react.uimanager.events.Event;
import com.facebook.react.uimanager.events.EventDispatcher;
import com.facebook.react.views.view.ReactViewGroup;
import com.swmansion.rnscreens.v0;
import kotlin.Unit;
import kotlin.enums.EnumEntries;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f1 extends ReactViewGroup {

    /* renamed from: d  reason: collision with root package name */
    private b f19139d;

    /* renamed from: e  reason: collision with root package name */
    private a f19140e;

    /* renamed from: i  reason: collision with root package name */
    private Integer f19141i;

    /* renamed from: o  reason: collision with root package name */
    private Integer f19142o;

    /* renamed from: p  reason: collision with root package name */
    private Integer f19143p;

    /* renamed from: q  reason: collision with root package name */
    private Integer f19144q;

    /* renamed from: r  reason: collision with root package name */
    private String f19145r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f19146s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f19147t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f19148u;

    /* renamed from: v  reason: collision with root package name */
    private g1 f19149v;

    /* renamed from: w  reason: collision with root package name */
    private boolean f19150w;

    /* renamed from: x  reason: collision with root package name */
    private final int f19151x;

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: d  reason: collision with root package name */
        public static final a f19152d = new a("NONE", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final a f19153e = new a("WORDS", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final a f19154i = new a("SENTENCES", 2);

        /* renamed from: o  reason: collision with root package name */
        public static final a f19155o = new a("CHARACTERS", 3);

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ a[] f19156p;

        /* renamed from: q  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f19157q;

        static {
            a[] a10 = a();
            f19156p = a10;
            f19157q = hs.a.a(a10);
        }

        private a(String str, int i10) {
        }

        private static final /* synthetic */ a[] a() {
            return new a[]{f19152d, f19153e, f19154i, f19155o};
        }

        public static a valueOf(String str) {
            return (a) Enum.valueOf(a.class, str);
        }

        public static a[] values() {
            return (a[]) f19156p.clone();
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {

        /* renamed from: d  reason: collision with root package name */
        public static final b f19158d = new d("TEXT", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final b f19159e = new c("PHONE", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final b f19160i = new C0228b("NUMBER", 2);

        /* renamed from: o  reason: collision with root package name */
        public static final b f19161o = new a("EMAIL", 3);

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ b[] f19162p;

        /* renamed from: q  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f19163q;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        static final class a extends b {
            a(String str, int i10) {
                super(str, i10, null);
            }

            @Override // com.swmansion.rnscreens.f1.b
            public int d(a capitalize) {
                Intrinsics.checkNotNullParameter(capitalize, "capitalize");
                return 32;
            }
        }

        /* renamed from: com.swmansion.rnscreens.f1$b$b  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        static final class C0228b extends b {
            C0228b(String str, int i10) {
                super(str, i10, null);
            }

            @Override // com.swmansion.rnscreens.f1.b
            public int d(a capitalize) {
                Intrinsics.checkNotNullParameter(capitalize, "capitalize");
                return 2;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        static final class c extends b {
            c(String str, int i10) {
                super(str, i10, null);
            }

            @Override // com.swmansion.rnscreens.f1.b
            public int d(a capitalize) {
                Intrinsics.checkNotNullParameter(capitalize, "capitalize");
                return 3;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        static final class d extends b {

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public /* synthetic */ class a {

                /* renamed from: a  reason: collision with root package name */
                public static final /* synthetic */ int[] f19164a;

                static {
                    int[] iArr = new int[a.values().length];
                    try {
                        iArr[a.f19152d.ordinal()] = 1;
                    } catch (NoSuchFieldError unused) {
                    }
                    try {
                        iArr[a.f19153e.ordinal()] = 2;
                    } catch (NoSuchFieldError unused2) {
                    }
                    try {
                        iArr[a.f19154i.ordinal()] = 3;
                    } catch (NoSuchFieldError unused3) {
                    }
                    try {
                        iArr[a.f19155o.ordinal()] = 4;
                    } catch (NoSuchFieldError unused4) {
                    }
                    f19164a = iArr;
                }
            }

            d(String str, int i10) {
                super(str, i10, null);
            }

            @Override // com.swmansion.rnscreens.f1.b
            public int d(a capitalize) {
                Intrinsics.checkNotNullParameter(capitalize, "capitalize");
                int i10 = a.f19164a[capitalize.ordinal()];
                if (i10 == 1) {
                    return 1;
                }
                if (i10 != 2) {
                    if (i10 != 3) {
                        if (i10 == 4) {
                            return RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT;
                        }
                        throw new as.p();
                    }
                    return 16384;
                }
                return 8192;
            }
        }

        static {
            b[] a10 = a();
            f19162p = a10;
            f19163q = hs.a.a(a10);
        }

        public /* synthetic */ b(String str, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this(str, i10);
        }

        private static final /* synthetic */ b[] a() {
            return new b[]{f19158d, f19159e, f19160i, f19161o};
        }

        public static b valueOf(String str) {
            return (b) Enum.valueOf(b.class, str);
        }

        public static b[] values() {
            return (b[]) f19162p.clone();
        }

        public abstract int d(a aVar);

        private b(String str, int i10) {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c implements SearchView.m {
        c() {
        }

        @Override // androidx.appcompat.widget.SearchView.m
        public boolean a(String str) {
            f1.this.r(str);
            return true;
        }

        @Override // androidx.appcompat.widget.SearchView.m
        public boolean b(String str) {
            f1.this.s(str);
            return true;
        }
    }

    public f1(ReactContext reactContext) {
        super(reactContext);
        this.f19139d = b.f19158d;
        this.f19140e = a.f19152d;
        this.f19145r = "";
        this.f19146s = true;
        this.f19148u = true;
        this.f19151x = UIManagerHelper.getSurfaceId(this);
    }

    private final void A() {
        d dVar;
        r0 screenStackFragment = getScreenStackFragment();
        if (screenStackFragment != null) {
            dVar = screenStackFragment.d0();
        } else {
            dVar = null;
        }
        if (dVar != null) {
            if (!this.f19150w) {
                setSearchViewListeners(dVar);
                this.f19150w = true;
            }
            dVar.setInputType(this.f19139d.d(this.f19140e));
            g1 g1Var = this.f19149v;
            if (g1Var != null) {
                g1Var.h(this.f19141i);
            }
            g1 g1Var2 = this.f19149v;
            if (g1Var2 != null) {
                g1Var2.i(this.f19142o);
            }
            g1 g1Var3 = this.f19149v;
            if (g1Var3 != null) {
                g1Var3.e(this.f19143p);
            }
            g1 g1Var4 = this.f19149v;
            if (g1Var4 != null) {
                g1Var4.f(this.f19144q);
            }
            g1 g1Var5 = this.f19149v;
            if (g1Var5 != null) {
                g1Var5.g(this.f19145r, this.f19148u);
            }
            dVar.setOverrideBackAction(this.f19146s);
        }
    }

    private final ScreenStackHeaderConfig getHeaderConfig() {
        ViewParent parent = getParent();
        if (parent instanceof v0) {
            return ((v0) parent).getConfig();
        }
        return null;
    }

    private final r0 getScreenStackFragment() {
        ScreenStackHeaderConfig headerConfig = getHeaderConfig();
        if (headerConfig != null) {
            return headerConfig.getScreenFragment();
        }
        return null;
    }

    private final void m() {
        w(new qn.o(this.f19151x, getId()));
        setToolbarElementsVisibility(0);
    }

    private final void n(boolean z10) {
        Event mVar;
        if (z10) {
            mVar = new qn.p(this.f19151x, getId());
        } else {
            mVar = new qn.m(this.f19151x, getId());
        }
        w(mVar);
    }

    private final void p() {
        w(new qn.q(this.f19151x, getId()));
        setToolbarElementsVisibility(8);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void r(String str) {
        w(new qn.n(this.f19151x, getId(), str));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void s(String str) {
        w(new qn.r(this.f19151x, getId(), str));
    }

    private final void setSearchViewListeners(SearchView searchView) {
        searchView.setOnQueryTextListener(new c());
        searchView.setOnQueryTextFocusChangeListener(new View.OnFocusChangeListener() { // from class: com.swmansion.rnscreens.c1
            @Override // android.view.View.OnFocusChangeListener
            public final void onFocusChange(View view, boolean z10) {
                f1.x(f1.this, view, z10);
            }
        });
        searchView.setOnCloseListener(new SearchView.l() { // from class: com.swmansion.rnscreens.d1
            @Override // androidx.appcompat.widget.SearchView.l
            public final boolean a() {
                boolean y10;
                y10 = f1.y(f1.this);
                return y10;
            }
        });
        searchView.setOnSearchClickListener(new View.OnClickListener() { // from class: com.swmansion.rnscreens.e1
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                f1.z(f1.this, view);
            }
        });
    }

    private final void setToolbarElementsVisibility(int i10) {
        int i11;
        v0 v0Var;
        ScreenStackHeaderConfig headerConfig = getHeaderConfig();
        int i12 = 0;
        if (headerConfig != null) {
            i11 = headerConfig.getConfigSubviewsCount() - 1;
        } else {
            i11 = 0;
        }
        if (i11 < 0) {
            return;
        }
        while (true) {
            ScreenStackHeaderConfig headerConfig2 = getHeaderConfig();
            v0.a aVar = null;
            if (headerConfig2 != null) {
                v0Var = headerConfig2.g(i12);
            } else {
                v0Var = null;
            }
            if (v0Var != null) {
                aVar = v0Var.getType();
            }
            if (aVar != v0.a.f19399p && v0Var != null) {
                v0Var.setVisibility(i10);
            }
            if (i12 != i11) {
                i12++;
            } else {
                return;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit u(f1 f1Var, d newSearchView) {
        r0 screenStackFragment;
        d d02;
        Intrinsics.checkNotNullParameter(newSearchView, "newSearchView");
        if (f1Var.f19149v == null) {
            f1Var.f19149v = new g1(newSearchView);
        }
        f1Var.A();
        if (f1Var.f19147t && (screenStackFragment = f1Var.getScreenStackFragment()) != null && (d02 = screenStackFragment.d0()) != null) {
            d02.q0();
        }
        return Unit.f32556a;
    }

    private final void w(Event event) {
        Context context = getContext();
        Intrinsics.checkNotNull(context, "null cannot be cast to non-null type com.facebook.react.bridge.ReactContext");
        EventDispatcher eventDispatcherForReactTag = UIManagerHelper.getEventDispatcherForReactTag((ReactContext) context, getId());
        if (eventDispatcherForReactTag != null) {
            eventDispatcherForReactTag.dispatchEvent(event);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void x(f1 f1Var, View view, boolean z10) {
        f1Var.n(z10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean y(f1 f1Var) {
        f1Var.m();
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void z(f1 f1Var, View view) {
        f1Var.p();
    }

    @NotNull
    public final a getAutoCapitalize() {
        return this.f19140e;
    }

    public final boolean getAutoFocus() {
        return this.f19147t;
    }

    public final Integer getHeaderIconColor() {
        return this.f19143p;
    }

    public final Integer getHintTextColor() {
        return this.f19144q;
    }

    @NotNull
    public final b getInputType() {
        return this.f19139d;
    }

    @NotNull
    public final String getPlaceholder() {
        return this.f19145r;
    }

    public final boolean getShouldOverrideBackButton() {
        return this.f19146s;
    }

    public final boolean getShouldShowHintSearchIcon() {
        return this.f19148u;
    }

    public final Integer getTextColor() {
        return this.f19141i;
    }

    public final Integer getTintColor() {
        return this.f19142o;
    }

    public final void j() {
        d d02;
        r0 screenStackFragment = getScreenStackFragment();
        if (screenStackFragment != null && (d02 = screenStackFragment.d0()) != null) {
            d02.clearFocus();
        }
    }

    public final void k() {
        d d02;
        r0 screenStackFragment = getScreenStackFragment();
        if (screenStackFragment != null && (d02 = screenStackFragment.d0()) != null) {
            d02.o0();
        }
    }

    public final void l() {
        d d02;
        r0 screenStackFragment = getScreenStackFragment();
        if (screenStackFragment != null && (d02 = screenStackFragment.d0()) != null) {
            d02.p0();
        }
    }

    public final void o() {
        d d02;
        r0 screenStackFragment = getScreenStackFragment();
        if (screenStackFragment != null && (d02 = screenStackFragment.d0()) != null) {
            d02.q0();
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.react.views.view.ReactViewGroup, android.view.ViewGroup, android.view.View
    public void onAttachedToWindow() {
        super.onAttachedToWindow();
        r0 screenStackFragment = getScreenStackFragment();
        if (screenStackFragment != null) {
            screenStackFragment.o0(new Function1() { // from class: com.swmansion.rnscreens.b1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit u10;
                    u10 = f1.u(f1.this, (d) obj);
                    return u10;
                }
            });
        }
    }

    public final void q(String str) {
        r0 screenStackFragment;
        d d02;
        if (str != null && (screenStackFragment = getScreenStackFragment()) != null && (d02 = screenStackFragment.d0()) != null) {
            d02.setText(str);
        }
    }

    public final void setAutoCapitalize(@NotNull a aVar) {
        Intrinsics.checkNotNullParameter(aVar, "<set-?>");
        this.f19140e = aVar;
    }

    public final void setAutoFocus(boolean z10) {
        this.f19147t = z10;
    }

    public final void setHeaderIconColor(Integer num) {
        this.f19143p = num;
    }

    public final void setHintTextColor(Integer num) {
        this.f19144q = num;
    }

    public final void setInputType(@NotNull b bVar) {
        Intrinsics.checkNotNullParameter(bVar, "<set-?>");
        this.f19139d = bVar;
    }

    public final void setPlaceholder(@NotNull String str) {
        Intrinsics.checkNotNullParameter(str, "<set-?>");
        this.f19145r = str;
    }

    public final void setShouldOverrideBackButton(boolean z10) {
        this.f19146s = z10;
    }

    public final void setShouldShowHintSearchIcon(boolean z10) {
        this.f19148u = z10;
    }

    public final void setTextColor(Integer num) {
        this.f19141i = num;
    }

    public final void setTintColor(Integer num) {
        this.f19142o = num;
    }

    public final void t(boolean z10) {
    }

    public final void v() {
        A();
    }
}
