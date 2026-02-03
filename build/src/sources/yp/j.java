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
    private final yp.g f55250d;

    /* renamed from: e  reason: collision with root package name */
    private final List f55251e;

    /* renamed from: i  reason: collision with root package name */
    private final Function0 f55252i;

    /* renamed from: o  reason: collision with root package name */
    private final String f55253o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f55254p;

    /* renamed from: q  reason: collision with root package name */
    private yp.h f55255q;

    /* renamed from: r  reason: collision with root package name */
    private BottomSheetBehavior f55256r;

    /* renamed from: s  reason: collision with root package name */
    private final c0 f55257s;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends Lambda implements Function1 {

        /* renamed from: yp.j$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0770a implements ym.k {

            /* renamed from: b  reason: collision with root package name */
            final /* synthetic */ ViewBinding f55259b;

            /* renamed from: c  reason: collision with root package name */
            final /* synthetic */ j f55260c;

            public C0770a(ViewBinding viewBinding, j jVar) {
                this.f55259b = viewBinding;
                this.f55260c = jVar;
            }

            @Override // ym.k
            public final void a(Object rendering, a0 viewEnvironment) {
                View d10;
                Intrinsics.checkNotNullParameter(rendering, "rendering");
                Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
                j jVar = (j) rendering;
                op.a aVar = (op.a) this.f55259b;
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
                this.f55260c.i(bottomSheetBehavior);
                aVar.getRoot().addOnAttachStateChangeListener(new d(bottomSheetBehavior));
                Context context = aVar.getRoot().getContext();
                m mVar = m.f55272a;
                Intrinsics.checkNotNull(context);
                yp.h h10 = m.h(mVar, context, this.f55260c.f55250d, false, true, false, 16, null);
                this.f55260c.j(h10);
                aVar.f44387c.addView(h10.a());
                Map a10 = h10.c().a();
                for (Pair pair : this.f55260c.f55251e) {
                    Function1 function1 = (Function1) pair.d();
                    yp.a aVar2 = (yp.a) a10.get((String) pair.c());
                    if (aVar2 != null) {
                        aVar2.d().setOnClickListener(new e(function1, aVar2));
                    }
                }
                yp.a aVar3 = (yp.a) a10.get(this.f55260c.f55253o);
                if (aVar3 != null && (d10 = aVar3.d()) != null) {
                    d10.setOnClickListener(new f(bottomSheetBehavior));
                }
                ConstraintLayout bottomSheet2 = aVar.f44386b;
                Intrinsics.checkNotNullExpressionValue(bottomSheet2, "bottomSheet");
                ym.e.c(bottomSheet2, new g(bottomSheetBehavior));
                if (jVar.f55254p) {
                    aVar.f44389e.setOnClickListener(new h(bottomSheetBehavior));
                } else {
                    aVar.f44389e.setOnClickListener(null);
                }
                NestedScrollView contentScrollView = aVar.f44388d;
                Intrinsics.checkNotNullExpressionValue(contentScrollView, "contentScrollView");
                StepStyles.UiStepStyle styles = this.f55260c.f55250d.getStyles();
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
        public static final b f55261d = new b();

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
            j.this.f55252i.invoke();
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
        final /* synthetic */ BottomSheetBehavior f55263d;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        static final class a implements Runnable {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ BottomSheetBehavior f55264d;

            a(BottomSheetBehavior bottomSheetBehavior) {
                this.f55264d = bottomSheetBehavior;
            }

            @Override // java.lang.Runnable
            public final void run() {
                this.f55264d.Y0(3);
            }
        }

        d(BottomSheetBehavior bottomSheetBehavior) {
            this.f55263d = bottomSheetBehavior;
        }

        @Override // android.view.View.OnAttachStateChangeListener
        public void onViewAttachedToWindow(View view) {
            Intrinsics.checkNotNullParameter(view, "view");
            view.postDelayed(new a(this.f55263d), 100L);
        }

        @Override // android.view.View.OnAttachStateChangeListener
        public void onViewDetachedFromWindow(View view) {
            Intrinsics.checkNotNullParameter(view, "view");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class e implements View.OnClickListener {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Function1 f55265d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ yp.a f55266e;

        e(Function1 function1, yp.a aVar) {
            this.f55265d = function1;
            this.f55266e = aVar;
        }

        @Override // android.view.View.OnClickListener
        public final void onClick(View view) {
            this.f55265d.invoke(this.f55266e.c());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class f implements View.OnClickListener {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ BottomSheetBehavior f55267d;

        f(BottomSheetBehavior bottomSheetBehavior) {
            this.f55267d = bottomSheetBehavior;
        }

        @Override // android.view.View.OnClickListener
        public final void onClick(View view) {
            this.f55267d.Y0(5);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class g implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ BottomSheetBehavior f55268d;

        g(BottomSheetBehavior bottomSheetBehavior) {
            this.f55268d = bottomSheetBehavior;
        }

        public final void a() {
            this.f55268d.Y0(5);
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
        final /* synthetic */ BottomSheetBehavior f55269d;

        h(BottomSheetBehavior bottomSheetBehavior) {
            this.f55269d = bottomSheetBehavior;
        }

        @Override // android.view.View.OnClickListener
        public final void onClick(View view) {
            this.f55269d.Y0(5);
        }
    }

    public j(yp.g uiScreen, List componentNamesToActions, Function0 onCancelled, String str, boolean z10) {
        Intrinsics.checkNotNullParameter(uiScreen, "uiScreen");
        Intrinsics.checkNotNullParameter(componentNamesToActions, "componentNamesToActions");
        Intrinsics.checkNotNullParameter(onCancelled, "onCancelled");
        this.f55250d = uiScreen;
        this.f55251e = componentNamesToActions;
        this.f55252i = onCancelled;
        this.f55253o = str;
        this.f55254p = z10;
        k.a aVar = ym.k.f54648a;
        this.f55257s = new z(Reflection.getOrCreateKotlinClass(j.class), b.f55261d, new a());
    }

    @Override // ym.b
    public c0 a() {
        return this.f55257s;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof j)) {
            return false;
        }
        j jVar = (j) obj;
        if (Intrinsics.areEqual(this.f55250d, jVar.f55250d) && Intrinsics.areEqual(this.f55251e, jVar.f55251e) && Intrinsics.areEqual(this.f55252i, jVar.f55252i) && Intrinsics.areEqual(this.f55253o, jVar.f55253o) && this.f55254p == jVar.f55254p) {
            return true;
        }
        return false;
    }

    public final BottomSheetBehavior g() {
        return this.f55256r;
    }

    public final yp.h h() {
        return this.f55255q;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2 = ((((this.f55250d.hashCode() * 31) + this.f55251e.hashCode()) * 31) + this.f55252i.hashCode()) * 31;
        String str = this.f55253o;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        return ((hashCode2 + hashCode) * 31) + Boolean.hashCode(this.f55254p);
    }

    public final void i(BottomSheetBehavior bottomSheetBehavior) {
        this.f55256r = bottomSheetBehavior;
    }

    public final void j(yp.h hVar) {
        this.f55255q = hVar;
    }

    public String toString() {
        yp.g gVar = this.f55250d;
        List list = this.f55251e;
        Function0 function0 = this.f55252i;
        String str = this.f55253o;
        boolean z10 = this.f55254p;
        return "UiStepBottomSheet(uiScreen=" + gVar + ", componentNamesToActions=" + list + ", onCancelled=" + function0 + ", cancelButtonName=" + str + ", hideWhenTappedOutside=" + z10 + ")";
    }

    public /* synthetic */ j(yp.g gVar, List list, Function0 function0, String str, boolean z10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(gVar, list, function0, str, (i10 & 16) != 0 ? true : z10);
    }
}
