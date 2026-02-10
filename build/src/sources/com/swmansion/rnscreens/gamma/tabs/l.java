package com.swmansion.rnscreens.gamma.tabs;

import android.content.res.Configuration;
import android.graphics.drawable.ColorDrawable;
import android.os.Build;
import android.view.Choreographer;
import android.view.MenuItem;
import android.view.View;
import android.view.WindowInsets;
import android.widget.FrameLayout;
import android.widget.ScrollView;
import androidx.appcompat.view.ContextThemeWrapper;
import androidx.core.view.o0;
import androidx.fragment.app.FragmentManager;
import androidx.fragment.app.FragmentTransaction;
import com.facebook.react.modules.core.ReactChoreographer;
import com.facebook.react.uimanager.ThemedReactContext;
import com.google.android.material.navigation.l;
import com.swmansion.rnscreens.ScreenStack;
import com.swmansion.rnscreens.gamma.tabs.l;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.function.Predicate;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.MutablePropertyReference1Impl;
import kotlin.jvm.internal.Reflection;
import kotlin.properties.ReadWriteProperty;
import kotlin.reflect.KProperty;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l extends FrameLayout implements com.swmansion.rnscreens.gamma.tabs.b, com.swmansion.rnscreens.safearea.c, View.OnLayoutChangeListener {
    private final ReadWriteProperty A;
    private final ReadWriteProperty B;
    private final ReadWriteProperty C;
    private final ReadWriteProperty D;
    private final ReadWriteProperty E;
    private final ReadWriteProperty F;
    private final ReadWriteProperty G;
    private final ReadWriteProperty H;
    private final ReadWriteProperty I;
    private final ReadWriteProperty J;
    private final ReadWriteProperty K;
    private final ReadWriteProperty L;
    private final ReadWriteProperty M;
    private final ReadWriteProperty N;
    private final ReadWriteProperty O;
    private final Choreographer.FrameCallback P;

    /* renamed from: d  reason: collision with root package name */
    private final ThemedReactContext f19238d;

    /* renamed from: e  reason: collision with root package name */
    private final b f19239e;

    /* renamed from: i  reason: collision with root package name */
    private final c f19240i;

    /* renamed from: o  reason: collision with root package name */
    private final ContextThemeWrapper f19241o;

    /* renamed from: p  reason: collision with root package name */
    private final com.google.android.material.bottomnavigation.c f19242p;

    /* renamed from: q  reason: collision with root package name */
    private final FrameLayout f19243q;

    /* renamed from: r  reason: collision with root package name */
    public com.swmansion.rnscreens.gamma.tabs.r f19244r;

    /* renamed from: s  reason: collision with root package name */
    private FragmentManager f19245s;

    /* renamed from: t  reason: collision with root package name */
    private final List f19246t;

    /* renamed from: u  reason: collision with root package name */
    private Integer f19247u;

    /* renamed from: v  reason: collision with root package name */
    private boolean f19248v;

    /* renamed from: w  reason: collision with root package name */
    private com.swmansion.rnscreens.safearea.d f19249w;

    /* renamed from: x  reason: collision with root package name */
    private final com.swmansion.rnscreens.gamma.tabs.p f19250x;

    /* renamed from: y  reason: collision with root package name */
    private final com.swmansion.rnscreens.gamma.tabs.n f19251y;

    /* renamed from: z  reason: collision with root package name */
    private final ReadWriteProperty f19252z;
    static final /* synthetic */ KProperty[] R = {Reflection.mutableProperty1(new MutablePropertyReference1Impl(l.class, "tabBarBackgroundColor", "getTabBarBackgroundColor()Ljava/lang/Integer;", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(l.class, "tabBarItemActiveIndicatorColor", "getTabBarItemActiveIndicatorColor()Ljava/lang/Integer;", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(l.class, "isTabBarItemActiveIndicatorEnabled", "isTabBarItemActiveIndicatorEnabled()Z", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(l.class, "tabBarItemIconColor", "getTabBarItemIconColor()Ljava/lang/Integer;", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(l.class, "tabBarItemTitleFontFamily", "getTabBarItemTitleFontFamily()Ljava/lang/String;", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(l.class, "tabBarItemIconColorActive", "getTabBarItemIconColorActive()Ljava/lang/Integer;", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(l.class, "tabBarItemTitleFontColor", "getTabBarItemTitleFontColor()Ljava/lang/Integer;", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(l.class, "tabBarItemTitleFontColorActive", "getTabBarItemTitleFontColorActive()Ljava/lang/Integer;", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(l.class, "tabBarItemTitleFontSize", "getTabBarItemTitleFontSize()Ljava/lang/Float;", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(l.class, "tabBarItemTitleFontSizeActive", "getTabBarItemTitleFontSizeActive()Ljava/lang/Float;", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(l.class, "tabBarItemTitleFontWeight", "getTabBarItemTitleFontWeight()Ljava/lang/String;", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(l.class, "tabBarItemTitleFontStyle", "getTabBarItemTitleFontStyle()Ljava/lang/String;", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(l.class, "tabBarItemRippleColor", "getTabBarItemRippleColor()Ljava/lang/Integer;", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(l.class, "tabBarItemLabelVisibilityMode", "getTabBarItemLabelVisibilityMode()Ljava/lang/String;", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(l.class, "tabBarHidden", "getTabBarHidden()Z", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(l.class, "nativeContainerBackgroundColor", "getNativeContainerBackgroundColor()Ljava/lang/Integer;", 0))};
    public static final a Q = new a(null);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public final class b {

        /* renamed from: a  reason: collision with root package name */
        private boolean f19253a;

        /* renamed from: b  reason: collision with root package name */
        private boolean f19254b;

        /* renamed from: c  reason: collision with root package name */
        private boolean f19255c;

        public b() {
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void f(b bVar) {
            bVar.i();
        }

        private final void i() {
            if (this.f19253a) {
                h();
            }
        }

        public final void b() {
            d();
            c();
        }

        public final void c() {
            this.f19255c = true;
        }

        public final void d() {
            this.f19254b = true;
        }

        public final void e() {
            this.f19253a = true;
            l.this.post(new Runnable() { // from class: com.swmansion.rnscreens.gamma.tabs.m
                @Override // java.lang.Runnable
                public final void run() {
                    l.b.f(l.b.this);
                }
            });
        }

        public final void g() {
            if (this.f19253a) {
                return;
            }
            e();
        }

        public final void h() {
            this.f19253a = false;
            if (this.f19254b) {
                this.f19254b = false;
                l.this.N();
            }
            if (this.f19255c) {
                this.f19255c = false;
                l.this.I();
                l.this.f19251y.a();
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public final class c {
        public c() {
        }

        public final boolean a() {
            ScrollView b10;
            ScreenStack a10;
            FrameLayout frameLayout = l.this.f19243q;
            com.swmansion.rnscreens.gamma.tabs.e currentFocusedTab = l.this.getCurrentFocusedTab();
            if (currentFocusedTab.x().getShouldUseRepeatedTabSelectionPopToRootSpecialEffect() && (a10 = un.f.f50810a.a(frameLayout)) != null && a10.popToRoot()) {
                return true;
            }
            if (!currentFocusedTab.x().getShouldUseRepeatedTabSelectionScrollToTopSpecialEffect() || (b10 = un.f.f50810a.b(frameLayout)) == null || b10.getScrollY() <= 0) {
                return false;
            }
            b10.smoothScrollTo(b10.getScrollX(), 0);
            return true;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends kotlin.properties.c {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ l f19258a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public d(Object obj, l lVar) {
            super(obj);
            this.f19258a = lVar;
        }

        @Override // kotlin.properties.c
        protected void afterChange(KProperty property, Object obj, Object obj2) {
            Intrinsics.checkNotNullParameter(property, "property");
            l lVar = this.f19258a;
            lVar.M((Float) obj, (Float) obj2);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends kotlin.properties.c {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ l f19259a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public e(Object obj, l lVar) {
            super(obj);
            this.f19259a = lVar;
        }

        @Override // kotlin.properties.c
        protected void afterChange(KProperty property, Object obj, Object obj2) {
            Intrinsics.checkNotNullParameter(property, "property");
            l lVar = this.f19259a;
            lVar.M((String) obj, (String) obj2);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends kotlin.properties.c {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ l f19260a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public f(Object obj, l lVar) {
            super(obj);
            this.f19260a = lVar;
        }

        @Override // kotlin.properties.c
        protected void afterChange(KProperty property, Object obj, Object obj2) {
            Intrinsics.checkNotNullParameter(property, "property");
            l lVar = this.f19260a;
            lVar.M((String) obj, (String) obj2);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g extends kotlin.properties.c {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ l f19261a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public g(Object obj, l lVar) {
            super(obj);
            this.f19261a = lVar;
        }

        @Override // kotlin.properties.c
        protected void afterChange(KProperty property, Object obj, Object obj2) {
            Intrinsics.checkNotNullParameter(property, "property");
            l lVar = this.f19261a;
            lVar.M((Integer) obj, (Integer) obj2);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class h extends kotlin.properties.c {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ l f19262a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public h(Object obj, l lVar) {
            super(obj);
            this.f19262a = lVar;
        }

        @Override // kotlin.properties.c
        protected void afterChange(KProperty property, Object obj, Object obj2) {
            Intrinsics.checkNotNullParameter(property, "property");
            l lVar = this.f19262a;
            lVar.M((String) obj, (String) obj2);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class i extends kotlin.properties.c {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ l f19263a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public i(Object obj, l lVar) {
            super(obj);
            this.f19263a = lVar;
        }

        @Override // kotlin.properties.c
        protected void afterChange(KProperty property, Object obj, Object obj2) {
            Intrinsics.checkNotNullParameter(property, "property");
            Boolean bool = (Boolean) obj2;
            Boolean bool2 = (Boolean) obj;
            if (bool.booleanValue() != bool2.booleanValue()) {
                l.L(this.f19263a, null, 1, null);
                this.f19263a.M(bool2, bool);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class j extends kotlin.properties.c {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ l f19264a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public j(Object obj, l lVar) {
            super(obj);
            this.f19264a = lVar;
        }

        @Override // kotlin.properties.c
        protected void afterChange(KProperty property, Object obj, Object obj2) {
            ColorDrawable colorDrawable;
            Intrinsics.checkNotNullParameter(property, "property");
            Integer num = (Integer) obj2;
            if (!Intrinsics.areEqual(num, (Integer) obj)) {
                l lVar = this.f19264a;
                if (num != null) {
                    colorDrawable = new ColorDrawable(num.intValue());
                } else {
                    colorDrawable = null;
                }
                lVar.setBackground(colorDrawable);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class k extends kotlin.properties.c {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ l f19265a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public k(Object obj, l lVar) {
            super(obj);
            this.f19265a = lVar;
        }

        @Override // kotlin.properties.c
        protected void afterChange(KProperty property, Object obj, Object obj2) {
            Intrinsics.checkNotNullParameter(property, "property");
            l lVar = this.f19265a;
            lVar.M((Integer) obj, (Integer) obj2);
        }
    }

    /* renamed from: com.swmansion.rnscreens.gamma.tabs.l$l  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0231l extends kotlin.properties.c {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ l f19266a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public C0231l(Object obj, l lVar) {
            super(obj);
            this.f19266a = lVar;
        }

        @Override // kotlin.properties.c
        protected void afterChange(KProperty property, Object obj, Object obj2) {
            Intrinsics.checkNotNullParameter(property, "property");
            l lVar = this.f19266a;
            lVar.M((Integer) obj, (Integer) obj2);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class m extends kotlin.properties.c {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ l f19267a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public m(Object obj, l lVar) {
            super(obj);
            this.f19267a = lVar;
        }

        @Override // kotlin.properties.c
        protected void afterChange(KProperty property, Object obj, Object obj2) {
            Intrinsics.checkNotNullParameter(property, "property");
            Boolean bool = (Boolean) obj2;
            bool.booleanValue();
            Boolean bool2 = (Boolean) obj;
            bool2.booleanValue();
            this.f19267a.M(bool2, bool);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class n extends kotlin.properties.c {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ l f19268a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public n(Object obj, l lVar) {
            super(obj);
            this.f19268a = lVar;
        }

        @Override // kotlin.properties.c
        protected void afterChange(KProperty property, Object obj, Object obj2) {
            Intrinsics.checkNotNullParameter(property, "property");
            l lVar = this.f19268a;
            lVar.M((Integer) obj, (Integer) obj2);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class o extends kotlin.properties.c {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ l f19269a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public o(Object obj, l lVar) {
            super(obj);
            this.f19269a = lVar;
        }

        @Override // kotlin.properties.c
        protected void afterChange(KProperty property, Object obj, Object obj2) {
            Intrinsics.checkNotNullParameter(property, "property");
            l lVar = this.f19269a;
            lVar.M((String) obj, (String) obj2);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class p extends kotlin.properties.c {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ l f19270a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public p(Object obj, l lVar) {
            super(obj);
            this.f19270a = lVar;
        }

        @Override // kotlin.properties.c
        protected void afterChange(KProperty property, Object obj, Object obj2) {
            Intrinsics.checkNotNullParameter(property, "property");
            l lVar = this.f19270a;
            lVar.M((Integer) obj, (Integer) obj2);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class q extends kotlin.properties.c {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ l f19271a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public q(Object obj, l lVar) {
            super(obj);
            this.f19271a = lVar;
        }

        @Override // kotlin.properties.c
        protected void afterChange(KProperty property, Object obj, Object obj2) {
            Intrinsics.checkNotNullParameter(property, "property");
            l lVar = this.f19271a;
            lVar.M((Integer) obj, (Integer) obj2);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class r extends kotlin.properties.c {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ l f19272a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public r(Object obj, l lVar) {
            super(obj);
            this.f19272a = lVar;
        }

        @Override // kotlin.properties.c
        protected void afterChange(KProperty property, Object obj, Object obj2) {
            Intrinsics.checkNotNullParameter(property, "property");
            l lVar = this.f19272a;
            lVar.M((Integer) obj, (Integer) obj2);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class s extends kotlin.properties.c {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ l f19273a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public s(Object obj, l lVar) {
            super(obj);
            this.f19273a = lVar;
        }

        @Override // kotlin.properties.c
        protected void afterChange(KProperty property, Object obj, Object obj2) {
            Intrinsics.checkNotNullParameter(property, "property");
            l lVar = this.f19273a;
            lVar.M((Float) obj, (Float) obj2);
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public l(ThemedReactContext reactContext) {
        super(reactContext);
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        this.f19238d = reactContext;
        this.f19239e = new b();
        this.f19240i = new c();
        ContextThemeWrapper contextThemeWrapper = new ContextThemeWrapper(reactContext, bh.k.f6932g);
        this.f19241o = contextThemeWrapper;
        com.google.android.material.bottomnavigation.c cVar = new com.google.android.material.bottomnavigation.c(contextThemeWrapper);
        cVar.setLayoutParams(new FrameLayout.LayoutParams(-1, -2, 80));
        this.f19242p = cVar;
        FrameLayout frameLayout = new FrameLayout(reactContext);
        frameLayout.setLayoutParams(new FrameLayout.LayoutParams(-1, -1));
        frameLayout.setId(un.g.f50811a.a());
        this.f19243q = frameLayout;
        ArrayList arrayList = new ArrayList();
        this.f19246t = arrayList;
        this.f19250x = new com.swmansion.rnscreens.gamma.tabs.p(contextThemeWrapper, cVar, arrayList);
        this.f19251y = new com.swmansion.rnscreens.gamma.tabs.n(cVar, arrayList);
        kotlin.properties.a aVar = kotlin.properties.a.f32074a;
        this.f19252z = new k(null, this);
        this.A = new C0231l(null, this);
        this.B = new m(Boolean.TRUE, this);
        this.C = new n(null, this);
        this.D = new o(null, this);
        this.E = new p(null, this);
        this.F = new q(null, this);
        this.G = new r(null, this);
        this.H = new s(null, this);
        this.I = new d(null, this);
        this.J = new e(null, this);
        this.K = new f(null, this);
        this.L = new g(null, this);
        this.M = new h(null, this);
        this.N = new i(Boolean.FALSE, this);
        this.O = new j(null, this);
        addView(frameLayout);
        addView(cVar);
        cVar.addOnLayoutChangeListener(new View.OnLayoutChangeListener() { // from class: com.swmansion.rnscreens.gamma.tabs.f
            @Override // android.view.View.OnLayoutChangeListener
            public final void onLayoutChange(View view, int i10, int i11, int i12, int i13, int i14, int i15, int i16, int i17) {
                l.l(view, i10, i11, i12, i13, i14, i15, i16, i17);
            }
        });
        cVar.setOnItemSelectedListener(new l.c() { // from class: com.swmansion.rnscreens.gamma.tabs.g
            @Override // com.google.android.material.navigation.l.c
            public final boolean a(MenuItem menuItem) {
                boolean m10;
                m10 = l.m(l.this, menuItem);
                return m10;
            }
        });
        this.P = new Choreographer.FrameCallback() { // from class: com.swmansion.rnscreens.gamma.tabs.h
            @Override // android.view.Choreographer.FrameCallback
            public final void doFrame(long j10) {
                l.z(l.this, j10);
            }
        };
    }

    private final void C() {
        if (!this.f19248v && this.P != null) {
            this.f19248v = true;
            ReactChoreographer.Companion.getInstance().postFrameCallback(ReactChoreographer.CallbackType.NATIVE_ANIMATED_MODULE, this.P);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean E(com.swmansion.rnscreens.gamma.tabs.a aVar, com.swmansion.rnscreens.gamma.tabs.e it) {
        Intrinsics.checkNotNullParameter(it, "it");
        if (it.x() == aVar) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean F(Function1 function1, Object obj) {
        return ((Boolean) function1.invoke(obj)).booleanValue();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void I() {
        co.e.f8377a.a("TabsHost", "updateBottomNavigationViewAppearance");
        this.f19250x.c(this);
        Integer selectedTabScreenFragmentId = getSelectedTabScreenFragmentId();
        if (selectedTabScreenFragmentId != null) {
            int intValue = selectedTabScreenFragmentId.intValue();
            if (this.f19242p.getSelectedItemId() != intValue) {
                this.f19242p.setSelectedItemId(intValue);
            }
            post(new Runnable() { // from class: com.swmansion.rnscreens.gamma.tabs.k
                @Override // java.lang.Runnable
                public final void run() {
                    l.J(l.this);
                }
            });
            return;
        }
        throw new IllegalStateException("[RNScreens] A single selected tab must be present");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void J(l lVar) {
        lVar.C();
        co.e.f8377a.a("TabsHost", "BottomNavigationView request layout");
    }

    private final void K(Integer num) {
        int height;
        if (getTabBarHidden()) {
            height = 0;
        } else if (num != null) {
            height = num.intValue();
        } else {
            height = this.f19242p.getHeight();
        }
        com.swmansion.rnscreens.safearea.d dVar = this.f19249w;
        if (dVar != null) {
            dVar.f(new com.swmansion.rnscreens.safearea.a(0.0f, 0.0f, 0.0f, height));
        }
    }

    static /* synthetic */ void L(l lVar, Integer num, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            num = null;
        }
        lVar.K(num);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void M(Object obj, Object obj2) {
        if (!Intrinsics.areEqual(obj2, obj)) {
            b bVar = this.f19239e;
            bVar.c();
            bVar.g();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void N() {
        com.swmansion.rnscreens.gamma.tabs.e currentFocusedTab = getCurrentFocusedTab();
        List B0 = getRequireFragmentManager().B0();
        Intrinsics.checkNotNullExpressionValue(B0, "getFragments(...)");
        ArrayList arrayList = new ArrayList();
        for (Object obj : B0) {
            if (obj instanceof com.swmansion.rnscreens.gamma.tabs.e) {
                arrayList.add(obj);
            }
        }
        if (arrayList.size() <= 1) {
            com.swmansion.rnscreens.gamma.tabs.e eVar = (com.swmansion.rnscreens.gamma.tabs.e) CollectionsKt.firstOrNull(arrayList);
            if (currentFocusedTab == eVar) {
                return;
            }
            FragmentTransaction v10 = getRequireFragmentManager().s().v(true);
            if (eVar != null) {
                v10.n(eVar);
            }
            v10.b(this.f19243q.getId(), currentFocusedTab);
            v10.k();
            return;
        }
        throw new IllegalStateException("[RNScreens] There can be only a single focused tab");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final com.swmansion.rnscreens.gamma.tabs.e getCurrentFocusedTab() {
        Object obj;
        Iterator it = this.f19246t.iterator();
        while (true) {
            if (it.hasNext()) {
                obj = it.next();
                if (((com.swmansion.rnscreens.gamma.tabs.e) obj).x().b()) {
                    break;
                }
            } else {
                obj = null;
                break;
            }
        }
        if (obj != null) {
            return (com.swmansion.rnscreens.gamma.tabs.e) obj;
        }
        throw new IllegalStateException("[RNScreens] No focused tab present");
    }

    private final FragmentManager getRequireFragmentManager() {
        FragmentManager fragmentManager = this.f19245s;
        if (fragmentManager != null) {
            return fragmentManager;
        }
        throw new IllegalStateException("[RNScreens] Nullish fragment manager");
    }

    private final Integer getSelectedTabScreenFragmentId() {
        if (this.f19246t.isEmpty()) {
            return null;
        }
        Iterator it = this.f19246t.iterator();
        int i10 = 0;
        while (true) {
            if (it.hasNext()) {
                if (((com.swmansion.rnscreens.gamma.tabs.e) it.next()).x().b()) {
                    break;
                }
                i10++;
            } else {
                i10 = -1;
                break;
            }
        }
        return Integer.valueOf(i10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void l(View view, int i10, int i11, int i12, int i13, int i14, int i15, int i16, int i17) {
        co.e eVar = co.e.f8377a;
        eVar.a("TabsHost", "BottomNavigationView layout changed {" + i10 + ", " + i11 + "} {" + (i12 - i10) + ", " + (i13 - i11) + "}");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean m(l lVar, MenuItem item) {
        boolean z10;
        com.swmansion.rnscreens.gamma.tabs.a x10;
        Intrinsics.checkNotNullParameter(item, "item");
        co.e eVar = co.e.f8377a;
        eVar.a("TabsHost", "Item selected " + item);
        com.swmansion.rnscreens.gamma.tabs.e v10 = lVar.v(item.getItemId());
        if (Intrinsics.areEqual(v10, lVar.getCurrentFocusedTab())) {
            z10 = lVar.f19240i.a();
        } else {
            z10 = false;
        }
        lVar.getEventEmitter$react_native_screens_release().h((v10 == null || (x10 = v10.x()) == null || (r0 = x10.getTabKey()) == null) ? "undefined" : "undefined", item.getItemId(), z10);
        return true;
    }

    private final void t(int i10) {
        Integer num = this.f19247u;
        if (num == null || i10 != num.intValue()) {
            if (i10 != 16) {
                if (i10 != 32) {
                    this.f19241o.setTheme(bh.k.f6932g);
                } else {
                    this.f19241o.setTheme(bh.k.f6930e);
                }
            } else {
                this.f19241o.setTheme(bh.k.f6933h);
            }
            this.f19250x.c(this);
            this.f19247u = Integer.valueOf(i10);
        }
    }

    private final void u() {
        measure(View.MeasureSpec.makeMeasureSpec(getWidth(), 1073741824), View.MeasureSpec.makeMeasureSpec(getHeight(), 1073741824));
        layout(getLeft(), getTop(), getRight(), getBottom());
    }

    private final com.swmansion.rnscreens.gamma.tabs.e v(int i10) {
        return (com.swmansion.rnscreens.gamma.tabs.e) CollectionsKt.q0(this.f19246t, i10);
    }

    private final MenuItem x(com.swmansion.rnscreens.gamma.tabs.a aVar) {
        Iterator it = this.f19246t.iterator();
        int i10 = 0;
        while (true) {
            if (it.hasNext()) {
                if (((com.swmansion.rnscreens.gamma.tabs.e) it.next()).x() == aVar) {
                    break;
                }
                i10++;
            } else {
                i10 = -1;
                break;
            }
        }
        Integer valueOf = Integer.valueOf(i10);
        if (valueOf.intValue() == -1) {
            valueOf = null;
        }
        if (valueOf == null) {
            return null;
        }
        return this.f19242p.getMenu().findItem(valueOf.intValue());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void z(l lVar, long j10) {
        lVar.f19248v = false;
        lVar.u();
    }

    public final void A(com.swmansion.rnscreens.gamma.tabs.a tabScreen, int i10) {
        Intrinsics.checkNotNullParameter(tabScreen, "tabScreen");
        if (i10 < this.f19242p.getMaxItemCount()) {
            this.f19246t.add(i10, new com.swmansion.rnscreens.gamma.tabs.e(tabScreen));
            tabScreen.setTabScreenDelegate$react_native_screens_release(this);
            b bVar = this.f19239e;
            bVar.b();
            bVar.g();
            return;
        }
        int maxItemCount = this.f19242p.getMaxItemCount();
        throw new IllegalArgumentException(("[RNScreens] Attempt to insert TabScreen at index " + i10 + "; BottomNavigationView supports at most " + maxItemCount + " items").toString());
    }

    public final void B() {
        if (getId() != -1) {
            setEventEmitter$react_native_screens_release(new com.swmansion.rnscreens.gamma.tabs.r(this.f19238d, getId()));
            return;
        }
        throw new IllegalStateException("[RNScreens] TabsHost must have its tag set when registering event emitters");
    }

    public final void D() {
        for (com.swmansion.rnscreens.gamma.tabs.e eVar : this.f19246t) {
            eVar.x().setTabScreenDelegate$react_native_screens_release(null);
        }
        this.f19246t.clear();
        b bVar = this.f19239e;
        bVar.b();
        bVar.g();
    }

    public final void G(final com.swmansion.rnscreens.gamma.tabs.a reactSubview) {
        Intrinsics.checkNotNullParameter(reactSubview, "reactSubview");
        List list = this.f19246t;
        final Function1 function1 = new Function1() { // from class: com.swmansion.rnscreens.gamma.tabs.i
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                boolean E;
                E = l.E(a.this, (e) obj);
                return Boolean.valueOf(E);
            }
        };
        boolean removeIf = list.removeIf(new Predicate() { // from class: com.swmansion.rnscreens.gamma.tabs.j
            @Override // java.util.function.Predicate
            public final boolean test(Object obj) {
                boolean F;
                F = l.F(Function1.this, obj);
                return F;
            }
        });
        Boolean valueOf = Boolean.valueOf(removeIf);
        if (!removeIf) {
            valueOf = null;
        }
        if (valueOf != null) {
            reactSubview.setTabScreenDelegate$react_native_screens_release(null);
            b bVar = this.f19239e;
            bVar.b();
            bVar.g();
        }
    }

    public final void H(int i10) {
        ((com.swmansion.rnscreens.gamma.tabs.e) this.f19246t.remove(i10)).x().setTabScreenDelegate$react_native_screens_release(null);
        b bVar = this.f19239e;
        bVar.b();
        bVar.g();
    }

    @Override // com.swmansion.rnscreens.gamma.tabs.b
    public void b(com.swmansion.rnscreens.gamma.tabs.a tabScreen, Configuration config) {
        Intrinsics.checkNotNullParameter(tabScreen, "tabScreen");
        Intrinsics.checkNotNullParameter(config, "config");
        onConfigurationChanged(config);
    }

    @Override // com.swmansion.rnscreens.gamma.tabs.b
    public void c(com.swmansion.rnscreens.gamma.tabs.a tabScreen) {
        Intrinsics.checkNotNullParameter(tabScreen, "tabScreen");
        MenuItem x10 = x(tabScreen);
        if (x10 != null) {
            this.f19250x.a(x10, tabScreen);
            this.f19251y.b(x10, tabScreen);
        }
    }

    @Override // com.swmansion.rnscreens.gamma.tabs.b
    public void d(com.swmansion.rnscreens.gamma.tabs.a tabScreen, boolean z10) {
        Intrinsics.checkNotNullParameter(tabScreen, "tabScreen");
        b bVar = this.f19239e;
        bVar.b();
        bVar.g();
    }

    @Override // android.view.ViewGroup, android.view.View
    public WindowInsets dispatchApplyWindowInsets(WindowInsets windowInsets) {
        boolean z10;
        if (Build.VERSION.SDK_INT >= 30) {
            return super.dispatchApplyWindowInsets(windowInsets);
        }
        if (windowInsets != null) {
            z10 = windowInsets.isConsumed();
        } else {
            z10 = true;
        }
        if (!z10) {
            for (View view : o0.a(this)) {
                view.dispatchApplyWindowInsets(windowInsets);
            }
        }
        return windowInsets;
    }

    @Override // com.swmansion.rnscreens.safearea.c
    public void e(com.swmansion.rnscreens.safearea.d listener) {
        Intrinsics.checkNotNullParameter(listener, "listener");
        if (Intrinsics.areEqual(this.f19249w, listener)) {
            this.f19249w = null;
            this.f19242p.removeOnLayoutChangeListener(this);
        }
    }

    @NotNull
    public final com.swmansion.rnscreens.gamma.tabs.r getEventEmitter$react_native_screens_release() {
        com.swmansion.rnscreens.gamma.tabs.r rVar = this.f19244r;
        if (rVar != null) {
            return rVar;
        }
        Intrinsics.throwUninitializedPropertyAccessException("eventEmitter");
        return null;
    }

    @Override // com.swmansion.rnscreens.safearea.c
    @NotNull
    public com.swmansion.rnscreens.safearea.a getInterfaceInsets() {
        return new com.swmansion.rnscreens.safearea.a(0.0f, 0.0f, 0.0f, this.f19242p.getHeight());
    }

    public final Integer getNativeContainerBackgroundColor() {
        return (Integer) this.O.getValue(this, R[15]);
    }

    @NotNull
    public final ThemedReactContext getReactContext() {
        return this.f19238d;
    }

    public final Integer getTabBarBackgroundColor() {
        return (Integer) this.f19252z.getValue(this, R[0]);
    }

    public final boolean getTabBarHidden() {
        return ((Boolean) this.N.getValue(this, R[14])).booleanValue();
    }

    public final Integer getTabBarItemActiveIndicatorColor() {
        return (Integer) this.A.getValue(this, R[1]);
    }

    public final Integer getTabBarItemIconColor() {
        return (Integer) this.C.getValue(this, R[3]);
    }

    public final Integer getTabBarItemIconColorActive() {
        return (Integer) this.E.getValue(this, R[5]);
    }

    public final String getTabBarItemLabelVisibilityMode() {
        return (String) this.M.getValue(this, R[13]);
    }

    public final Integer getTabBarItemRippleColor() {
        return (Integer) this.L.getValue(this, R[12]);
    }

    public final Integer getTabBarItemTitleFontColor() {
        return (Integer) this.F.getValue(this, R[6]);
    }

    public final Integer getTabBarItemTitleFontColorActive() {
        return (Integer) this.G.getValue(this, R[7]);
    }

    public final String getTabBarItemTitleFontFamily() {
        return (String) this.D.getValue(this, R[4]);
    }

    public final Float getTabBarItemTitleFontSize() {
        return (Float) this.H.getValue(this, R[8]);
    }

    public final Float getTabBarItemTitleFontSizeActive() {
        return (Float) this.I.getValue(this, R[9]);
    }

    public final String getTabBarItemTitleFontStyle() {
        return (String) this.K.getValue(this, R[11]);
    }

    public final String getTabBarItemTitleFontWeight() {
        return (String) this.J.getValue(this, R[10]);
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void onAttachedToWindow() {
        co.e eVar = co.e.f8377a;
        int id2 = getId();
        eVar.a("TabsHost", "TabsHost [" + id2 + "] attached to window");
        super.onAttachedToWindow();
        FragmentManager a10 = un.b.f50808a.a(this);
        if (a10 != null) {
            this.f19245s = a10;
            b bVar = this.f19239e;
            bVar.b();
            bVar.h();
            return;
        }
        throw new IllegalStateException("[RNScreens] Nullish fragment manager - can't run container operations");
    }

    @Override // android.view.View
    protected void onConfigurationChanged(Configuration configuration) {
        super.onConfigurationChanged(configuration);
        if (configuration != null) {
            t(configuration.uiMode & 48);
        }
    }

    @Override // android.view.View.OnLayoutChangeListener
    public void onLayoutChange(View view, int i10, int i11, int i12, int i13, int i14, int i15, int i16, int i17) {
        if (view instanceof com.google.android.material.bottomnavigation.c) {
            int i18 = i13 - i11;
            if (i18 != i17 - i15) {
                K(Integer.valueOf(i18));
                return;
            }
            return;
        }
        throw new IllegalArgumentException(("[RNScreens] TabsHost's onLayoutChange expects BottomNavigationView, received " + view + " instead").toString());
    }

    @Override // android.view.View, android.view.ViewParent
    public void requestLayout() {
        super.requestLayout();
        C();
    }

    public final void setEventEmitter$react_native_screens_release(@NotNull com.swmansion.rnscreens.gamma.tabs.r rVar) {
        Intrinsics.checkNotNullParameter(rVar, "<set-?>");
        this.f19244r = rVar;
    }

    public final void setNativeContainerBackgroundColor(Integer num) {
        this.O.setValue(this, R[15], num);
    }

    @Override // com.swmansion.rnscreens.safearea.c
    public void setOnInterfaceInsetsChangeListener(@NotNull com.swmansion.rnscreens.safearea.d listener) {
        Intrinsics.checkNotNullParameter(listener, "listener");
        if (this.f19249w == null) {
            this.f19242p.addOnLayoutChangeListener(this);
        }
        this.f19249w = listener;
    }

    public final void setTabBarBackgroundColor(Integer num) {
        this.f19252z.setValue(this, R[0], num);
    }

    public final void setTabBarHidden(boolean z10) {
        this.N.setValue(this, R[14], Boolean.valueOf(z10));
    }

    public final void setTabBarItemActiveIndicatorColor(Integer num) {
        this.A.setValue(this, R[1], num);
    }

    public final void setTabBarItemActiveIndicatorEnabled(boolean z10) {
        this.B.setValue(this, R[2], Boolean.valueOf(z10));
    }

    public final void setTabBarItemIconColor(Integer num) {
        this.C.setValue(this, R[3], num);
    }

    public final void setTabBarItemIconColorActive(Integer num) {
        this.E.setValue(this, R[5], num);
    }

    public final void setTabBarItemLabelVisibilityMode(String str) {
        this.M.setValue(this, R[13], str);
    }

    public final void setTabBarItemRippleColor(Integer num) {
        this.L.setValue(this, R[12], num);
    }

    public final void setTabBarItemTitleFontColor(Integer num) {
        this.F.setValue(this, R[6], num);
    }

    public final void setTabBarItemTitleFontColorActive(Integer num) {
        this.G.setValue(this, R[7], num);
    }

    public final void setTabBarItemTitleFontFamily(String str) {
        this.D.setValue(this, R[4], str);
    }

    public final void setTabBarItemTitleFontSize(Float f10) {
        this.H.setValue(this, R[8], f10);
    }

    public final void setTabBarItemTitleFontSizeActive(Float f10) {
        this.I.setValue(this, R[9], f10);
    }

    public final void setTabBarItemTitleFontStyle(String str) {
        this.K.setValue(this, R[11], str);
    }

    public final void setTabBarItemTitleFontWeight(String str) {
        this.J.setValue(this, R[10], str);
    }

    @Override // com.swmansion.rnscreens.gamma.tabs.b
    /* renamed from: w */
    public com.swmansion.rnscreens.gamma.tabs.e a(com.swmansion.rnscreens.gamma.tabs.a tabScreen) {
        Object obj;
        Intrinsics.checkNotNullParameter(tabScreen, "tabScreen");
        Iterator it = this.f19246t.iterator();
        while (true) {
            if (it.hasNext()) {
                obj = it.next();
                if (((com.swmansion.rnscreens.gamma.tabs.e) obj).x() == tabScreen) {
                    break;
                }
            } else {
                obj = null;
                break;
            }
        }
        return (com.swmansion.rnscreens.gamma.tabs.e) obj;
    }

    public final boolean y() {
        return ((Boolean) this.B.getValue(this, R[2])).booleanValue();
    }
}
