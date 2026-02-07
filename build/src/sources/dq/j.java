package dq;

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
import dn.a0;
import dn.c0;
import dn.k;
import dn.z;
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
public final class j implements dn.b {

    /* renamed from: d  reason: collision with root package name */
    private final dq.g f21108d;

    /* renamed from: e  reason: collision with root package name */
    private final List f21109e;

    /* renamed from: i  reason: collision with root package name */
    private final Function0 f21110i;

    /* renamed from: o  reason: collision with root package name */
    private final String f21111o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f21112p;

    /* renamed from: q  reason: collision with root package name */
    private dq.h f21113q;

    /* renamed from: r  reason: collision with root package name */
    private BottomSheetBehavior f21114r;

    /* renamed from: s  reason: collision with root package name */
    private final c0 f21115s;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends Lambda implements Function1 {

        /* renamed from: dq.j$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0278a implements dn.k {

            /* renamed from: b  reason: collision with root package name */
            final /* synthetic */ ViewBinding f21117b;

            /* renamed from: c  reason: collision with root package name */
            final /* synthetic */ j f21118c;

            public C0278a(ViewBinding viewBinding, j jVar) {
                this.f21117b = viewBinding;
                this.f21118c = jVar;
            }

            @Override // dn.k
            public final void a(Object rendering, a0 viewEnvironment) {
                View d10;
                Intrinsics.checkNotNullParameter(rendering, "rendering");
                Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
                j jVar = (j) rendering;
                tp.a aVar = (tp.a) this.f21117b;
                ViewGroup.LayoutParams layoutParams = aVar.f50837b.getLayoutParams();
                Intrinsics.checkNotNull(layoutParams, "null cannot be cast to non-null type androidx.coordinatorlayout.widget.CoordinatorLayout.LayoutParams");
                CoordinatorLayout.c f10 = ((CoordinatorLayout.f) layoutParams).f();
                Intrinsics.checkNotNull(f10, "null cannot be cast to non-null type com.google.android.material.bottomsheet.BottomSheetBehavior<*>");
                BottomSheetBehavior bottomSheetBehavior = (BottomSheetBehavior) f10;
                if (!bq.f.f()) {
                    CoordinatorLayout root = aVar.getRoot();
                    Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
                    bq.f.d(root, false, false, false, false, 14, null);
                }
                c cVar = new c();
                ConstraintLayout bottomSheet = aVar.f50837b;
                Intrinsics.checkNotNullExpressionValue(bottomSheet, "bottomSheet");
                bq.b.b(bottomSheetBehavior, cVar, bottomSheet, aVar.f50839d, aVar.f50840e);
                this.f21118c.i(bottomSheetBehavior);
                aVar.getRoot().addOnAttachStateChangeListener(new d(bottomSheetBehavior));
                Context context = aVar.getRoot().getContext();
                m mVar = m.f21130a;
                Intrinsics.checkNotNull(context);
                dq.h h10 = m.h(mVar, context, this.f21118c.f21108d, false, true, false, 16, null);
                this.f21118c.j(h10);
                aVar.f50838c.addView(h10.a());
                Map a10 = h10.c().a();
                for (Pair pair : this.f21118c.f21109e) {
                    Function1 function1 = (Function1) pair.d();
                    dq.a aVar2 = (dq.a) a10.get((String) pair.c());
                    if (aVar2 != null) {
                        aVar2.d().setOnClickListener(new e(function1, aVar2));
                    }
                }
                dq.a aVar3 = (dq.a) a10.get(this.f21118c.f21111o);
                if (aVar3 != null && (d10 = aVar3.d()) != null) {
                    d10.setOnClickListener(new f(bottomSheetBehavior));
                }
                ConstraintLayout bottomSheet2 = aVar.f50837b;
                Intrinsics.checkNotNullExpressionValue(bottomSheet2, "bottomSheet");
                dn.e.c(bottomSheet2, new g(bottomSheetBehavior));
                if (jVar.f21112p) {
                    aVar.f50840e.setOnClickListener(new h(bottomSheetBehavior));
                } else {
                    aVar.f50840e.setOnClickListener(null);
                }
                NestedScrollView contentScrollView = aVar.f50839d;
                Intrinsics.checkNotNullExpressionValue(contentScrollView, "contentScrollView");
                StepStyles.UiStepStyle styles = this.f21118c.f21108d.getStyles();
                FrameLayout contentContainer = aVar.f50838c;
                Intrinsics.checkNotNullExpressionValue(contentContainer, "contentContainer");
                kq.c.c(contentScrollView, styles, contentContainer, null, 4, null);
            }
        }

        public a() {
            super(1);
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final dn.k invoke(ViewBinding binding) {
            Intrinsics.checkNotNullParameter(binding, "binding");
            return new C0278a(binding, j.this);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    /* synthetic */ class b extends FunctionReferenceImpl implements Function3 {

        /* renamed from: d  reason: collision with root package name */
        public static final b f21119d = new b();

        b() {
            super(3, tp.a.class, "inflate", "inflate(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Z)Lcom/withpersona/sdk2/inquiry/shared/databinding/Pi2GenericUiStepBottomSheetBinding;", 0);
        }

        public final tp.a a(LayoutInflater p02, ViewGroup viewGroup, boolean z10) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            return tp.a.c(p02, viewGroup, z10);
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
            j.this.f21110i.invoke();
        }

        @Override // kotlin.jvm.functions.Function0
        public /* bridge */ /* synthetic */ Object invoke() {
            a();
            return Unit.f32056a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d implements View.OnAttachStateChangeListener {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ BottomSheetBehavior f21121d;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        static final class a implements Runnable {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ BottomSheetBehavior f21122d;

            a(BottomSheetBehavior bottomSheetBehavior) {
                this.f21122d = bottomSheetBehavior;
            }

            @Override // java.lang.Runnable
            public final void run() {
                this.f21122d.Y0(3);
            }
        }

        d(BottomSheetBehavior bottomSheetBehavior) {
            this.f21121d = bottomSheetBehavior;
        }

        @Override // android.view.View.OnAttachStateChangeListener
        public void onViewAttachedToWindow(View view) {
            Intrinsics.checkNotNullParameter(view, "view");
            view.postDelayed(new a(this.f21121d), 100L);
        }

        @Override // android.view.View.OnAttachStateChangeListener
        public void onViewDetachedFromWindow(View view) {
            Intrinsics.checkNotNullParameter(view, "view");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class e implements View.OnClickListener {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Function1 f21123d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ dq.a f21124e;

        e(Function1 function1, dq.a aVar) {
            this.f21123d = function1;
            this.f21124e = aVar;
        }

        @Override // android.view.View.OnClickListener
        public final void onClick(View view) {
            this.f21123d.invoke(this.f21124e.c());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class f implements View.OnClickListener {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ BottomSheetBehavior f21125d;

        f(BottomSheetBehavior bottomSheetBehavior) {
            this.f21125d = bottomSheetBehavior;
        }

        @Override // android.view.View.OnClickListener
        public final void onClick(View view) {
            this.f21125d.Y0(5);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class g implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ BottomSheetBehavior f21126d;

        g(BottomSheetBehavior bottomSheetBehavior) {
            this.f21126d = bottomSheetBehavior;
        }

        public final void a() {
            this.f21126d.Y0(5);
        }

        @Override // kotlin.jvm.functions.Function0
        public /* bridge */ /* synthetic */ Object invoke() {
            a();
            return Unit.f32056a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class h implements View.OnClickListener {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ BottomSheetBehavior f21127d;

        h(BottomSheetBehavior bottomSheetBehavior) {
            this.f21127d = bottomSheetBehavior;
        }

        @Override // android.view.View.OnClickListener
        public final void onClick(View view) {
            this.f21127d.Y0(5);
        }
    }

    public j(dq.g uiScreen, List componentNamesToActions, Function0 onCancelled, String str, boolean z10) {
        Intrinsics.checkNotNullParameter(uiScreen, "uiScreen");
        Intrinsics.checkNotNullParameter(componentNamesToActions, "componentNamesToActions");
        Intrinsics.checkNotNullParameter(onCancelled, "onCancelled");
        this.f21108d = uiScreen;
        this.f21109e = componentNamesToActions;
        this.f21110i = onCancelled;
        this.f21111o = str;
        this.f21112p = z10;
        k.a aVar = dn.k.f20913a;
        this.f21115s = new z(Reflection.getOrCreateKotlinClass(j.class), b.f21119d, new a());
    }

    @Override // dn.b
    public c0 a() {
        return this.f21115s;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof j)) {
            return false;
        }
        j jVar = (j) obj;
        if (Intrinsics.areEqual(this.f21108d, jVar.f21108d) && Intrinsics.areEqual(this.f21109e, jVar.f21109e) && Intrinsics.areEqual(this.f21110i, jVar.f21110i) && Intrinsics.areEqual(this.f21111o, jVar.f21111o) && this.f21112p == jVar.f21112p) {
            return true;
        }
        return false;
    }

    public final BottomSheetBehavior g() {
        return this.f21114r;
    }

    public final dq.h h() {
        return this.f21113q;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2 = ((((this.f21108d.hashCode() * 31) + this.f21109e.hashCode()) * 31) + this.f21110i.hashCode()) * 31;
        String str = this.f21111o;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        return ((hashCode2 + hashCode) * 31) + Boolean.hashCode(this.f21112p);
    }

    public final void i(BottomSheetBehavior bottomSheetBehavior) {
        this.f21114r = bottomSheetBehavior;
    }

    public final void j(dq.h hVar) {
        this.f21113q = hVar;
    }

    public String toString() {
        dq.g gVar = this.f21108d;
        List list = this.f21109e;
        Function0 function0 = this.f21110i;
        String str = this.f21111o;
        boolean z10 = this.f21112p;
        return "UiStepBottomSheet(uiScreen=" + gVar + ", componentNamesToActions=" + list + ", onCancelled=" + function0 + ", cancelButtonName=" + str + ", hideWhenTappedOutside=" + z10 + ")";
    }

    public /* synthetic */ j(dq.g gVar, List list, Function0 function0, String str, boolean z10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(gVar, list, function0, str, (i10 & 16) != 0 ? true : z10);
    }
}
