package eq;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.coordinatorlayout.widget.CoordinatorLayout;
import androidx.core.widget.NestedScrollView;
import androidx.viewbinding.ViewBinding;
import com.google.android.material.bottomsheet.BottomSheetBehavior;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyles;
import en.a0;
import en.c0;
import en.k;
import en.z;
import java.util.List;
import java.util.Map;
import kotlin.Pair;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import kotlin.jvm.internal.Reflection;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j implements en.b {

    /* renamed from: d  reason: collision with root package name */
    private final eq.g f22056d;

    /* renamed from: e  reason: collision with root package name */
    private final List f22057e;

    /* renamed from: i  reason: collision with root package name */
    private final Function0 f22058i;

    /* renamed from: o  reason: collision with root package name */
    private final String f22059o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f22060p;

    /* renamed from: q  reason: collision with root package name */
    private eq.h f22061q;

    /* renamed from: r  reason: collision with root package name */
    private BottomSheetBehavior f22062r;

    /* renamed from: s  reason: collision with root package name */
    private final c0 f22063s;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends Lambda implements Function1 {

        /* renamed from: eq.j$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0326a implements en.k {

            /* renamed from: b  reason: collision with root package name */
            final /* synthetic */ ViewBinding f22065b;

            /* renamed from: c  reason: collision with root package name */
            final /* synthetic */ j f22066c;

            public C0326a(ViewBinding viewBinding, j jVar) {
                this.f22065b = viewBinding;
                this.f22066c = jVar;
            }

            @Override // en.k
            public final void a(Object rendering, a0 viewEnvironment) {
                View d10;
                Intrinsics.checkNotNullParameter(rendering, "rendering");
                Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
                j jVar = (j) rendering;
                up.a aVar = (up.a) this.f22065b;
                ViewGroup.LayoutParams layoutParams = aVar.f51742b.getLayoutParams();
                Intrinsics.checkNotNull(layoutParams, "null cannot be cast to non-null type androidx.coordinatorlayout.widget.CoordinatorLayout.LayoutParams");
                CoordinatorLayout.c f10 = ((CoordinatorLayout.f) layoutParams).f();
                Intrinsics.checkNotNull(f10, "null cannot be cast to non-null type com.google.android.material.bottomsheet.BottomSheetBehavior<*>");
                BottomSheetBehavior bottomSheetBehavior = (BottomSheetBehavior) f10;
                if (!cq.f.f()) {
                    CoordinatorLayout root = aVar.getRoot();
                    Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
                    cq.f.d(root, false, false, false, false, 14, null);
                }
                c cVar = new c();
                ConstraintLayout bottomSheet = aVar.f51742b;
                Intrinsics.checkNotNullExpressionValue(bottomSheet, "bottomSheet");
                cq.b.b(bottomSheetBehavior, cVar, bottomSheet, aVar.f51744d, aVar.f51745e);
                this.f22066c.i(bottomSheetBehavior);
                aVar.getRoot().addOnAttachStateChangeListener(new d(bottomSheetBehavior));
                Context context = aVar.getRoot().getContext();
                m mVar = m.f22078a;
                Intrinsics.checkNotNull(context);
                eq.h h10 = m.h(mVar, context, this.f22066c.f22056d, false, true, false, 16, null);
                this.f22066c.j(h10);
                aVar.f51743c.addView(h10.a());
                Map a10 = h10.c().a();
                for (Pair pair : this.f22066c.f22057e) {
                    Function1 function1 = (Function1) pair.d();
                    eq.a aVar2 = (eq.a) a10.get((String) pair.c());
                    if (aVar2 != null) {
                        aVar2.d().setOnClickListener(new e(function1, aVar2));
                    }
                }
                eq.a aVar3 = (eq.a) a10.get(this.f22066c.f22059o);
                if (aVar3 != null && (d10 = aVar3.d()) != null) {
                    d10.setOnClickListener(new f(bottomSheetBehavior));
                }
                ConstraintLayout bottomSheet2 = aVar.f51742b;
                Intrinsics.checkNotNullExpressionValue(bottomSheet2, "bottomSheet");
                en.e.c(bottomSheet2, new g(bottomSheetBehavior));
                if (jVar.f22060p) {
                    aVar.f51745e.setOnClickListener(new h(bottomSheetBehavior));
                } else {
                    aVar.f51745e.setOnClickListener(null);
                }
                NestedScrollView contentScrollView = aVar.f51744d;
                Intrinsics.checkNotNullExpressionValue(contentScrollView, "contentScrollView");
                StepStyles.UiStepStyle styles = this.f22066c.f22056d.getStyles();
                FrameLayout contentContainer = aVar.f51743c;
                Intrinsics.checkNotNullExpressionValue(contentContainer, "contentContainer");
                lq.c.c(contentScrollView, styles, contentContainer, null, 4, null);
            }
        }

        public a() {
            super(1);
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final en.k invoke(ViewBinding binding) {
            Intrinsics.checkNotNullParameter(binding, "binding");
            return new C0326a(binding, j.this);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    /* synthetic */ class b extends FunctionReferenceImpl implements Function3 {

        /* renamed from: d  reason: collision with root package name */
        public static final b f22067d = new b();

        b() {
            super(3, up.a.class, "inflate", "inflate(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Z)Lcom/withpersona/sdk2/inquiry/shared/databinding/Pi2GenericUiStepBottomSheetBinding;", 0);
        }

        public final up.a a(LayoutInflater p02, ViewGroup viewGroup, boolean z10) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            return up.a.c(p02, viewGroup, z10);
        }

        @Override // kotlin.jvm.functions.Function3
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3) {
            return a((LayoutInflater) obj, (ViewGroup) obj2, ((Boolean) obj3).booleanValue());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class c implements Function0 {
        c() {
        }

        public final void a() {
            j.this.f22058i.invoke();
        }

        @Override // kotlin.jvm.functions.Function0
        public /* bridge */ /* synthetic */ Object invoke() {
            a();
            return Unit.f31765a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d implements View.OnAttachStateChangeListener {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ BottomSheetBehavior f22069d;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        static final class a implements Runnable {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ BottomSheetBehavior f22070d;

            a(BottomSheetBehavior bottomSheetBehavior) {
                this.f22070d = bottomSheetBehavior;
            }

            @Override // java.lang.Runnable
            public final void run() {
                this.f22070d.Y0(3);
            }
        }

        d(BottomSheetBehavior bottomSheetBehavior) {
            this.f22069d = bottomSheetBehavior;
        }

        @Override // android.view.View.OnAttachStateChangeListener
        public void onViewAttachedToWindow(View view) {
            Intrinsics.checkNotNullParameter(view, "view");
            view.postDelayed(new a(this.f22069d), 100L);
        }

        @Override // android.view.View.OnAttachStateChangeListener
        public void onViewDetachedFromWindow(View view) {
            Intrinsics.checkNotNullParameter(view, "view");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class e implements View.OnClickListener {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Function1 f22071d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ eq.a f22072e;

        e(Function1 function1, eq.a aVar) {
            this.f22071d = function1;
            this.f22072e = aVar;
        }

        @Override // android.view.View.OnClickListener
        public final void onClick(View view) {
            this.f22071d.invoke(this.f22072e.c());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class f implements View.OnClickListener {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ BottomSheetBehavior f22073d;

        f(BottomSheetBehavior bottomSheetBehavior) {
            this.f22073d = bottomSheetBehavior;
        }

        @Override // android.view.View.OnClickListener
        public final void onClick(View view) {
            this.f22073d.Y0(5);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class g implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ BottomSheetBehavior f22074d;

        g(BottomSheetBehavior bottomSheetBehavior) {
            this.f22074d = bottomSheetBehavior;
        }

        public final void a() {
            this.f22074d.Y0(5);
        }

        @Override // kotlin.jvm.functions.Function0
        public /* bridge */ /* synthetic */ Object invoke() {
            a();
            return Unit.f31765a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class h implements View.OnClickListener {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ BottomSheetBehavior f22075d;

        h(BottomSheetBehavior bottomSheetBehavior) {
            this.f22075d = bottomSheetBehavior;
        }

        @Override // android.view.View.OnClickListener
        public final void onClick(View view) {
            this.f22075d.Y0(5);
        }
    }

    public j(eq.g uiScreen, List componentNamesToActions, Function0 onCancelled, String str, boolean z10) {
        Intrinsics.checkNotNullParameter(uiScreen, "uiScreen");
        Intrinsics.checkNotNullParameter(componentNamesToActions, "componentNamesToActions");
        Intrinsics.checkNotNullParameter(onCancelled, "onCancelled");
        this.f22056d = uiScreen;
        this.f22057e = componentNamesToActions;
        this.f22058i = onCancelled;
        this.f22059o = str;
        this.f22060p = z10;
        k.a aVar = en.k.f21834a;
        this.f22063s = new z(Reflection.getOrCreateKotlinClass(j.class), b.f22067d, new a());
    }

    @Override // en.b
    public c0 a() {
        return this.f22063s;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof j)) {
            return false;
        }
        j jVar = (j) obj;
        if (Intrinsics.areEqual(this.f22056d, jVar.f22056d) && Intrinsics.areEqual(this.f22057e, jVar.f22057e) && Intrinsics.areEqual(this.f22058i, jVar.f22058i) && Intrinsics.areEqual(this.f22059o, jVar.f22059o) && this.f22060p == jVar.f22060p) {
            return true;
        }
        return false;
    }

    public final BottomSheetBehavior g() {
        return this.f22062r;
    }

    public final eq.h h() {
        return this.f22061q;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2 = ((((this.f22056d.hashCode() * 31) + this.f22057e.hashCode()) * 31) + this.f22058i.hashCode()) * 31;
        String str = this.f22059o;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        return ((hashCode2 + hashCode) * 31) + Boolean.hashCode(this.f22060p);
    }

    public final void i(BottomSheetBehavior bottomSheetBehavior) {
        this.f22062r = bottomSheetBehavior;
    }

    public final void j(eq.h hVar) {
        this.f22061q = hVar;
    }

    public String toString() {
        eq.g gVar = this.f22056d;
        List list = this.f22057e;
        Function0 function0 = this.f22058i;
        String str = this.f22059o;
        boolean z10 = this.f22060p;
        return "UiStepBottomSheet(uiScreen=" + gVar + ", componentNamesToActions=" + list + ", onCancelled=" + function0 + ", cancelButtonName=" + str + ", hideWhenTappedOutside=" + z10 + ")";
    }

    public /* synthetic */ j(eq.g gVar, List list, Function0 function0, String str, boolean z10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(gVar, list, function0, str, (i10 & 16) != 0 ? true : z10);
    }
}
