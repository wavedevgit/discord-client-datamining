package yp;

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
import ym.a0;
import ym.c0;
import ym.k;
import ym.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j implements ym.b {

    /* renamed from: d  reason: collision with root package name */
    private final yp.g f55247d;

    /* renamed from: e  reason: collision with root package name */
    private final List f55248e;

    /* renamed from: i  reason: collision with root package name */
    private final Function0 f55249i;

    /* renamed from: o  reason: collision with root package name */
    private final String f55250o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f55251p;

    /* renamed from: q  reason: collision with root package name */
    private yp.h f55252q;

    /* renamed from: r  reason: collision with root package name */
    private BottomSheetBehavior f55253r;

    /* renamed from: s  reason: collision with root package name */
    private final c0 f55254s;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends Lambda implements Function1 {

        /* renamed from: yp.j$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0770a implements ym.k {

            /* renamed from: b  reason: collision with root package name */
            final /* synthetic */ ViewBinding f55256b;

            /* renamed from: c  reason: collision with root package name */
            final /* synthetic */ j f55257c;

            public C0770a(ViewBinding viewBinding, j jVar) {
                this.f55256b = viewBinding;
                this.f55257c = jVar;
            }

            @Override // ym.k
            public final void a(Object rendering, a0 viewEnvironment) {
                View d10;
                Intrinsics.checkNotNullParameter(rendering, "rendering");
                Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
                j jVar = (j) rendering;
                op.a aVar = (op.a) this.f55256b;
                ViewGroup.LayoutParams layoutParams = aVar.f44386b.getLayoutParams();
                Intrinsics.checkNotNull(layoutParams, "null cannot be cast to non-null type androidx.coordinatorlayout.widget.CoordinatorLayout.LayoutParams");
                CoordinatorLayout.c f10 = ((CoordinatorLayout.f) layoutParams).f();
                Intrinsics.checkNotNull(f10, "null cannot be cast to non-null type com.google.android.material.bottomsheet.BottomSheetBehavior<*>");
                BottomSheetBehavior bottomSheetBehavior = (BottomSheetBehavior) f10;
                if (!wp.f.f()) {
                    CoordinatorLayout root = aVar.getRoot();
                    Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
                    wp.f.d(root, false, false, false, false, 14, null);
                }
                c cVar = new c();
                ConstraintLayout bottomSheet = aVar.f44386b;
                Intrinsics.checkNotNullExpressionValue(bottomSheet, "bottomSheet");
                wp.b.b(bottomSheetBehavior, cVar, bottomSheet, aVar.f44388d, aVar.f44389e);
                this.f55257c.i(bottomSheetBehavior);
                aVar.getRoot().addOnAttachStateChangeListener(new d(bottomSheetBehavior));
                Context context = aVar.getRoot().getContext();
                m mVar = m.f55269a;
                Intrinsics.checkNotNull(context);
                yp.h h10 = m.h(mVar, context, this.f55257c.f55247d, false, true, false, 16, null);
                this.f55257c.j(h10);
                aVar.f44387c.addView(h10.a());
                Map a10 = h10.c().a();
                for (Pair pair : this.f55257c.f55248e) {
                    Function1 function1 = (Function1) pair.d();
                    yp.a aVar2 = (yp.a) a10.get((String) pair.c());
                    if (aVar2 != null) {
                        aVar2.d().setOnClickListener(new e(function1, aVar2));
                    }
                }
                yp.a aVar3 = (yp.a) a10.get(this.f55257c.f55250o);
                if (aVar3 != null && (d10 = aVar3.d()) != null) {
                    d10.setOnClickListener(new f(bottomSheetBehavior));
                }
                ConstraintLayout bottomSheet2 = aVar.f44386b;
                Intrinsics.checkNotNullExpressionValue(bottomSheet2, "bottomSheet");
                ym.e.c(bottomSheet2, new g(bottomSheetBehavior));
                if (jVar.f55251p) {
                    aVar.f44389e.setOnClickListener(new h(bottomSheetBehavior));
                } else {
                    aVar.f44389e.setOnClickListener(null);
                }
                NestedScrollView contentScrollView = aVar.f44388d;
                Intrinsics.checkNotNullExpressionValue(contentScrollView, "contentScrollView");
                StepStyles.UiStepStyle styles = this.f55257c.f55247d.getStyles();
                FrameLayout contentContainer = aVar.f44387c;
                Intrinsics.checkNotNullExpressionValue(contentContainer, "contentContainer");
                fq.c.c(contentScrollView, styles, contentContainer, null, 4, null);
            }
        }

        public a() {
            super(1);
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final ym.k invoke(ViewBinding binding) {
            Intrinsics.checkNotNullParameter(binding, "binding");
            return new C0770a(binding, j.this);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    /* synthetic */ class b extends FunctionReferenceImpl implements Function3 {

        /* renamed from: d  reason: collision with root package name */
        public static final b f55258d = new b();

        b() {
            super(3, op.a.class, "inflate", "inflate(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Z)Lcom/withpersona/sdk2/inquiry/shared/databinding/Pi2GenericUiStepBottomSheetBinding;", 0);
        }

        public final op.a a(LayoutInflater p02, ViewGroup viewGroup, boolean z10) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            return op.a.c(p02, viewGroup, z10);
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
            j.this.f55249i.invoke();
        }

        @Override // kotlin.jvm.functions.Function0
        public /* bridge */ /* synthetic */ Object invoke() {
            a();
            return Unit.f32464a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d implements View.OnAttachStateChangeListener {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ BottomSheetBehavior f55260d;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        static final class a implements Runnable {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ BottomSheetBehavior f55261d;

            a(BottomSheetBehavior bottomSheetBehavior) {
                this.f55261d = bottomSheetBehavior;
            }

            @Override // java.lang.Runnable
            public final void run() {
                this.f55261d.Y0(3);
            }
        }

        d(BottomSheetBehavior bottomSheetBehavior) {
            this.f55260d = bottomSheetBehavior;
        }

        @Override // android.view.View.OnAttachStateChangeListener
        public void onViewAttachedToWindow(View view) {
            Intrinsics.checkNotNullParameter(view, "view");
            view.postDelayed(new a(this.f55260d), 100L);
        }

        @Override // android.view.View.OnAttachStateChangeListener
        public void onViewDetachedFromWindow(View view) {
            Intrinsics.checkNotNullParameter(view, "view");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class e implements View.OnClickListener {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Function1 f55262d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ yp.a f55263e;

        e(Function1 function1, yp.a aVar) {
            this.f55262d = function1;
            this.f55263e = aVar;
        }

        @Override // android.view.View.OnClickListener
        public final void onClick(View view) {
            this.f55262d.invoke(this.f55263e.c());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class f implements View.OnClickListener {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ BottomSheetBehavior f55264d;

        f(BottomSheetBehavior bottomSheetBehavior) {
            this.f55264d = bottomSheetBehavior;
        }

        @Override // android.view.View.OnClickListener
        public final void onClick(View view) {
            this.f55264d.Y0(5);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class g implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ BottomSheetBehavior f55265d;

        g(BottomSheetBehavior bottomSheetBehavior) {
            this.f55265d = bottomSheetBehavior;
        }

        public final void a() {
            this.f55265d.Y0(5);
        }

        @Override // kotlin.jvm.functions.Function0
        public /* bridge */ /* synthetic */ Object invoke() {
            a();
            return Unit.f32464a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class h implements View.OnClickListener {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ BottomSheetBehavior f55266d;

        h(BottomSheetBehavior bottomSheetBehavior) {
            this.f55266d = bottomSheetBehavior;
        }

        @Override // android.view.View.OnClickListener
        public final void onClick(View view) {
            this.f55266d.Y0(5);
        }
    }

    public j(yp.g uiScreen, List componentNamesToActions, Function0 onCancelled, String str, boolean z10) {
        Intrinsics.checkNotNullParameter(uiScreen, "uiScreen");
        Intrinsics.checkNotNullParameter(componentNamesToActions, "componentNamesToActions");
        Intrinsics.checkNotNullParameter(onCancelled, "onCancelled");
        this.f55247d = uiScreen;
        this.f55248e = componentNamesToActions;
        this.f55249i = onCancelled;
        this.f55250o = str;
        this.f55251p = z10;
        k.a aVar = ym.k.f54645a;
        this.f55254s = new z(Reflection.getOrCreateKotlinClass(j.class), b.f55258d, new a());
    }

    @Override // ym.b
    public c0 a() {
        return this.f55254s;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof j)) {
            return false;
        }
        j jVar = (j) obj;
        if (Intrinsics.areEqual(this.f55247d, jVar.f55247d) && Intrinsics.areEqual(this.f55248e, jVar.f55248e) && Intrinsics.areEqual(this.f55249i, jVar.f55249i) && Intrinsics.areEqual(this.f55250o, jVar.f55250o) && this.f55251p == jVar.f55251p) {
            return true;
        }
        return false;
    }

    public final BottomSheetBehavior g() {
        return this.f55253r;
    }

    public final yp.h h() {
        return this.f55252q;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2 = ((((this.f55247d.hashCode() * 31) + this.f55248e.hashCode()) * 31) + this.f55249i.hashCode()) * 31;
        String str = this.f55250o;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        return ((hashCode2 + hashCode) * 31) + Boolean.hashCode(this.f55251p);
    }

    public final void i(BottomSheetBehavior bottomSheetBehavior) {
        this.f55253r = bottomSheetBehavior;
    }

    public final void j(yp.h hVar) {
        this.f55252q = hVar;
    }

    public String toString() {
        yp.g gVar = this.f55247d;
        List list = this.f55248e;
        Function0 function0 = this.f55249i;
        String str = this.f55250o;
        boolean z10 = this.f55251p;
        return "UiStepBottomSheet(uiScreen=" + gVar + ", componentNamesToActions=" + list + ", onCancelled=" + function0 + ", cancelButtonName=" + str + ", hideWhenTappedOutside=" + z10 + ")";
    }

    public /* synthetic */ j(yp.g gVar, List list, Function0 function0, String str, boolean z10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(gVar, list, function0, str, (i10 & 16) != 0 ? true : z10);
    }
}
