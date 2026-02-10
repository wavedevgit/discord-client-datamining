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
import com.swmansion.rnscreens.q0;
import kotlin.Unit;
import kotlin.enums.EnumEntries;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d1 extends ReactViewGroup {

    /* renamed from: d  reason: collision with root package name */
    private b f18367d;

    /* renamed from: e  reason: collision with root package name */
    private a f18368e;

    /* renamed from: i  reason: collision with root package name */
    private Integer f18369i;

    /* renamed from: o  reason: collision with root package name */
    private Integer f18370o;

    /* renamed from: p  reason: collision with root package name */
    private Integer f18371p;

    /* renamed from: q  reason: collision with root package name */
    private Integer f18372q;

    /* renamed from: r  reason: collision with root package name */
    private String f18373r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f18374s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f18375t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f18376u;

    /* renamed from: v  reason: collision with root package name */
    private e1 f18377v;

    /* renamed from: w  reason: collision with root package name */
    private boolean f18378w;

    /* renamed from: x  reason: collision with root package name */
    private final int f18379x;

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: d  reason: collision with root package name */
        public static final a f18380d = new a("NONE", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final a f18381e = new a("WORDS", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final a f18382i = new a("SENTENCES", 2);

        /* renamed from: o  reason: collision with root package name */
        public static final a f18383o = new a("CHARACTERS", 3);

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ a[] f18384p;

        /* renamed from: q  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f18385q;

        static {
            a[] a10 = a();
            f18384p = a10;
            f18385q = yr.a.a(a10);
        }

        private a(String str, int i10) {
        }

        private static final /* synthetic */ a[] a() {
            return new a[]{f18380d, f18381e, f18382i, f18383o};
        }

        public static a valueOf(String str) {
            return (a) Enum.valueOf(a.class, str);
        }

        public static a[] values() {
            return (a[]) f18384p.clone();
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {

        /* renamed from: d  reason: collision with root package name */
        public static final b f18386d = new d("TEXT", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final b f18387e = new c("PHONE", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final b f18388i = new C0247b("NUMBER", 2);

        /* renamed from: o  reason: collision with root package name */
        public static final b f18389o = new a("EMAIL", 3);

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ b[] f18390p;

        /* renamed from: q  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f18391q;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        static final class a extends b {
            a(String str, int i10) {
                super(str, i10, null);
            }

            @Override // com.swmansion.rnscreens.d1.b
            public int d(a capitalize) {
                Intrinsics.checkNotNullParameter(capitalize, "capitalize");
                return 32;
            }
        }

        /* renamed from: com.swmansion.rnscreens.d1$b$b  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        static final class C0247b extends b {
            C0247b(String str, int i10) {
                super(str, i10, null);
            }

            @Override // com.swmansion.rnscreens.d1.b
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

            @Override // com.swmansion.rnscreens.d1.b
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
                public static final /* synthetic */ int[] f18392a;

                static {
                    int[] iArr = new int[a.values().length];
                    try {
                        iArr[a.f18380d.ordinal()] = 1;
                    } catch (NoSuchFieldError unused) {
                    }
                    try {
                        iArr[a.f18381e.ordinal()] = 2;
                    } catch (NoSuchFieldError unused2) {
                    }
                    try {
                        iArr[a.f18382i.ordinal()] = 3;
                    } catch (NoSuchFieldError unused3) {
                    }
                    try {
                        iArr[a.f18383o.ordinal()] = 4;
                    } catch (NoSuchFieldError unused4) {
                    }
                    f18392a = iArr;
                }
            }

            d(String str, int i10) {
                super(str, i10, null);
            }

            @Override // com.swmansion.rnscreens.d1.b
            public int d(a capitalize) {
                Intrinsics.checkNotNullParameter(capitalize, "capitalize");
                int i10 = a.f18392a[capitalize.ordinal()];
                if (i10 == 1) {
                    return 1;
                }
                if (i10 != 2) {
                    if (i10 != 3) {
                        if (i10 == 4) {
                            return RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT;
                        }
                        throw new rr.p();
                    }
                    return 16384;
                }
                return 8192;
            }
        }

        static {
            b[] a10 = a();
            f18390p = a10;
            f18391q = yr.a.a(a10);
        }

        public /* synthetic */ b(String str, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this(str, i10);
        }

        private static final /* synthetic */ b[] a() {
            return new b[]{f18386d, f18387e, f18388i, f18389o};
        }

        public static b valueOf(String str) {
            return (b) Enum.valueOf(b.class, str);
        }

        public static b[] values() {
            return (b[]) f18390p.clone();
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
            d1.this.p(str);
            return true;
        }

        @Override // androidx.appcompat.widget.SearchView.m
        public boolean b(String str) {
            d1.this.q(str);
            return true;
        }
    }

    public d1(ReactContext reactContext) {
        super(reactContext);
        this.f18367d = b.f18386d;
        this.f18368e = a.f18380d;
        this.f18373r = "";
        this.f18374s = true;
        this.f18376u = true;
        this.f18379x = UIManagerHelper.getSurfaceId(this);
    }

    private final ScreenStackHeaderConfig getHeaderConfig() {
        ViewParent parent = getParent();
        if (parent instanceof q0) {
            return ((q0) parent).getConfig();
        }
        return null;
    }

    private final n0 getScreenStackFragment() {
        ScreenStackHeaderConfig headerConfig = getHeaderConfig();
        if (headerConfig != null) {
            return headerConfig.getScreenFragment();
        }
        return null;
    }

    private final void k() {
        u(new on.o(this.f18379x, getId()));
        setToolbarElementsVisibility(0);
    }

    private final void l(boolean z10) {
        Event mVar;
        if (z10) {
            mVar = new on.p(this.f18379x, getId());
        } else {
            mVar = new on.m(this.f18379x, getId());
        }
        u(mVar);
    }

    private final void n() {
        u(new on.q(this.f18379x, getId()));
        setToolbarElementsVisibility(8);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void p(String str) {
        u(new on.n(this.f18379x, getId(), str));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void q(String str) {
        u(new on.r(this.f18379x, getId(), str));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit s(d1 d1Var, com.swmansion.rnscreens.c newSearchView) {
        n0 screenStackFragment;
        com.swmansion.rnscreens.c Z;
        Intrinsics.checkNotNullParameter(newSearchView, "newSearchView");
        if (d1Var.f18377v == null) {
            d1Var.f18377v = new e1(newSearchView);
        }
        d1Var.y();
        if (d1Var.f18375t && (screenStackFragment = d1Var.getScreenStackFragment()) != null && (Z = screenStackFragment.Z()) != null) {
            Z.p0();
        }
        return Unit.f31765a;
    }

    private final void setSearchViewListeners(SearchView searchView) {
        searchView.setOnQueryTextListener(new c());
        searchView.setOnQueryTextFocusChangeListener(new View.OnFocusChangeListener() { // from class: com.swmansion.rnscreens.a1
            @Override // android.view.View.OnFocusChangeListener
            public final void onFocusChange(View view, boolean z10) {
                d1.v(d1.this, view, z10);
            }
        });
        searchView.setOnCloseListener(new SearchView.l() { // from class: com.swmansion.rnscreens.b1
            @Override // androidx.appcompat.widget.SearchView.l
            public final boolean a() {
                boolean w10;
                w10 = d1.w(d1.this);
                return w10;
            }
        });
        searchView.setOnSearchClickListener(new View.OnClickListener() { // from class: com.swmansion.rnscreens.c1
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                d1.x(d1.this, view);
            }
        });
    }

    private final void setToolbarElementsVisibility(int i10) {
        int i11;
        q0 q0Var;
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
            q0.a aVar = null;
            if (headerConfig2 != null) {
                q0Var = headerConfig2.g(i12);
            } else {
                q0Var = null;
            }
            if (q0Var != null) {
                aVar = q0Var.getType();
            }
            if (aVar != q0.a.f18473p && q0Var != null) {
                q0Var.setVisibility(i10);
            }
            if (i12 != i11) {
                i12++;
            } else {
                return;
            }
        }
    }

    private final void u(Event event) {
        Context context = getContext();
        Intrinsics.checkNotNull(context, "null cannot be cast to non-null type com.facebook.react.bridge.ReactContext");
        EventDispatcher eventDispatcherForReactTag = UIManagerHelper.getEventDispatcherForReactTag((ReactContext) context, getId());
        if (eventDispatcherForReactTag != null) {
            eventDispatcherForReactTag.dispatchEvent(event);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void v(d1 d1Var, View view, boolean z10) {
        d1Var.l(z10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean w(d1 d1Var) {
        d1Var.k();
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void x(d1 d1Var, View view) {
        d1Var.n();
    }

    private final void y() {
        com.swmansion.rnscreens.c cVar;
        n0 screenStackFragment = getScreenStackFragment();
        if (screenStackFragment != null) {
            cVar = screenStackFragment.Z();
        } else {
            cVar = null;
        }
        if (cVar != null) {
            if (!this.f18378w) {
                setSearchViewListeners(cVar);
                this.f18378w = true;
            }
            cVar.setInputType(this.f18367d.d(this.f18368e));
            e1 e1Var = this.f18377v;
            if (e1Var != null) {
                e1Var.h(this.f18369i);
            }
            e1 e1Var2 = this.f18377v;
            if (e1Var2 != null) {
                e1Var2.i(this.f18370o);
            }
            e1 e1Var3 = this.f18377v;
            if (e1Var3 != null) {
                e1Var3.e(this.f18371p);
            }
            e1 e1Var4 = this.f18377v;
            if (e1Var4 != null) {
                e1Var4.f(this.f18372q);
            }
            e1 e1Var5 = this.f18377v;
            if (e1Var5 != null) {
                e1Var5.g(this.f18373r, this.f18376u);
            }
            cVar.setOverrideBackAction(this.f18374s);
        }
    }

    @NotNull
    public final a getAutoCapitalize() {
        return this.f18368e;
    }

    public final boolean getAutoFocus() {
        return this.f18375t;
    }

    public final Integer getHeaderIconColor() {
        return this.f18371p;
    }

    public final Integer getHintTextColor() {
        return this.f18372q;
    }

    @NotNull
    public final b getInputType() {
        return this.f18367d;
    }

    @NotNull
    public final String getPlaceholder() {
        return this.f18373r;
    }

    public final boolean getShouldOverrideBackButton() {
        return this.f18374s;
    }

    public final boolean getShouldShowHintSearchIcon() {
        return this.f18376u;
    }

    public final Integer getTextColor() {
        return this.f18369i;
    }

    public final Integer getTintColor() {
        return this.f18370o;
    }

    public final void i() {
        com.swmansion.rnscreens.c Z;
        n0 screenStackFragment = getScreenStackFragment();
        if (screenStackFragment != null && (Z = screenStackFragment.Z()) != null) {
            Z.clearFocus();
        }
    }

    public final void j() {
        com.swmansion.rnscreens.c Z;
        n0 screenStackFragment = getScreenStackFragment();
        if (screenStackFragment != null && (Z = screenStackFragment.Z()) != null) {
            Z.o0();
        }
    }

    public final void m() {
        com.swmansion.rnscreens.c Z;
        n0 screenStackFragment = getScreenStackFragment();
        if (screenStackFragment != null && (Z = screenStackFragment.Z()) != null) {
            Z.p0();
        }
    }

    public final void o(String str) {
        n0 screenStackFragment;
        com.swmansion.rnscreens.c Z;
        if (str != null && (screenStackFragment = getScreenStackFragment()) != null && (Z = screenStackFragment.Z()) != null) {
            Z.setText(str);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.react.views.view.ReactViewGroup, android.view.ViewGroup, android.view.View
    public void onAttachedToWindow() {
        super.onAttachedToWindow();
        n0 screenStackFragment = getScreenStackFragment();
        if (screenStackFragment != null) {
            screenStackFragment.n0(new Function1() { // from class: com.swmansion.rnscreens.z0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit s10;
                    s10 = d1.s(d1.this, (c) obj);
                    return s10;
                }
            });
        }
    }

    public final void r(boolean z10) {
    }

    public final void setAutoCapitalize(@NotNull a aVar) {
        Intrinsics.checkNotNullParameter(aVar, "<set-?>");
        this.f18368e = aVar;
    }

    public final void setAutoFocus(boolean z10) {
        this.f18375t = z10;
    }

    public final void setHeaderIconColor(Integer num) {
        this.f18371p = num;
    }

    public final void setHintTextColor(Integer num) {
        this.f18372q = num;
    }

    public final void setInputType(@NotNull b bVar) {
        Intrinsics.checkNotNullParameter(bVar, "<set-?>");
        this.f18367d = bVar;
    }

    public final void setPlaceholder(@NotNull String str) {
        Intrinsics.checkNotNullParameter(str, "<set-?>");
        this.f18373r = str;
    }

    public final void setShouldOverrideBackButton(boolean z10) {
        this.f18374s = z10;
    }

    public final void setShouldShowHintSearchIcon(boolean z10) {
        this.f18376u = z10;
    }

    public final void setTextColor(Integer num) {
        this.f18369i = num;
    }

    public final void setTintColor(Integer num) {
        this.f18370o = num;
    }

    public final void t() {
        y();
    }
}
