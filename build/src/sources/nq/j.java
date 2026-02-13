package nq;

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
import gn.a0;
import gn.c0;
import gn.k;
import gn.z;
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
public final class j implements gn.b {

    /* renamed from: d  reason: collision with root package name */
    private final nq.g f38901d;

    /* renamed from: e  reason: collision with root package name */
    private final List f38902e;

    /* renamed from: i  reason: collision with root package name */
    private final Function0 f38903i;

    /* renamed from: o  reason: collision with root package name */
    private final String f38904o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f38905p;

    /* renamed from: q  reason: collision with root package name */
    private nq.h f38906q;

    /* renamed from: r  reason: collision with root package name */
    private BottomSheetBehavior f38907r;

    /* renamed from: s  reason: collision with root package name */
    private final c0 f38908s;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends Lambda implements Function1 {

        /* renamed from: nq.j$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0539a implements gn.k {

            /* renamed from: b  reason: collision with root package name */
            final /* synthetic */ ViewBinding f38910b;

            /* renamed from: c  reason: collision with root package name */
            final /* synthetic */ j f38911c;

            public C0539a(ViewBinding viewBinding, j jVar) {
                this.f38910b = viewBinding;
                this.f38911c = jVar;
            }

            @Override // gn.k
            public final void a(Object rendering, a0 viewEnvironment) {
                View d10;
                Intrinsics.checkNotNullParameter(rendering, "rendering");
                Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
                j jVar = (j) rendering;
                dq.a aVar = (dq.a) this.f38910b;
                ViewGroup.LayoutParams layoutParams = aVar.f21845b.getLayoutParams();
                Intrinsics.checkNotNull(layoutParams, "null cannot be cast to non-null type androidx.coordinatorlayout.widget.CoordinatorLayout.LayoutParams");
                CoordinatorLayout.c f10 = ((CoordinatorLayout.f) layoutParams).f();
                Intrinsics.checkNotNull(f10, "null cannot be cast to non-null type com.google.android.material.bottomsheet.BottomSheetBehavior<*>");
                BottomSheetBehavior bottomSheetBehavior = (BottomSheetBehavior) f10;
                if (!lq.f.f()) {
                    CoordinatorLayout root = aVar.getRoot();
                    Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
                    lq.f.d(root, false, false, false, false, 14, null);
                }
                c cVar = new c();
                ConstraintLayout bottomSheet = aVar.f21845b;
                Intrinsics.checkNotNullExpressionValue(bottomSheet, "bottomSheet");
                lq.b.b(bottomSheetBehavior, cVar, bottomSheet, aVar.f21847d, aVar.f21848e);
                this.f38911c.i(bottomSheetBehavior);
                aVar.getRoot().addOnAttachStateChangeListener(new d(bottomSheetBehavior));
                Context context = aVar.getRoot().getContext();
                m mVar = m.f38923a;
                Intrinsics.checkNotNull(context);
                nq.h h10 = m.h(mVar, context, this.f38911c.f38901d, false, true, false, 16, null);
                this.f38911c.j(h10);
                aVar.f21846c.addView(h10.a());
                Map a10 = h10.c().a();
                for (Pair pair : this.f38911c.f38902e) {
                    Function1 function1 = (Function1) pair.d();
                    nq.a aVar2 = (nq.a) a10.get((String) pair.c());
                    if (aVar2 != null) {
                        aVar2.d().setOnClickListener(new e(function1, aVar2));
                    }
                }
                nq.a aVar3 = (nq.a) a10.get(this.f38911c.f38904o);
                if (aVar3 != null && (d10 = aVar3.d()) != null) {
                    d10.setOnClickListener(new f(bottomSheetBehavior));
                }
                ConstraintLayout bottomSheet2 = aVar.f21845b;
                Intrinsics.checkNotNullExpressionValue(bottomSheet2, "bottomSheet");
                gn.e.c(bottomSheet2, new g(bottomSheetBehavior));
                if (jVar.f38905p) {
                    aVar.f21848e.setOnClickListener(new h(bottomSheetBehavior));
                } else {
                    aVar.f21848e.setOnClickListener(null);
                }
                NestedScrollView contentScrollView = aVar.f21847d;
                Intrinsics.checkNotNullExpressionValue(contentScrollView, "contentScrollView");
                StepStyles.UiStepStyle styles = this.f38911c.f38901d.getStyles();
                FrameLayout contentContainer = aVar.f21846c;
                Intrinsics.checkNotNullExpressionValue(contentContainer, "contentContainer");
                uq.c.c(contentScrollView, styles, contentContainer, null, 4, null);
            }
        }

        public a() {
            super(1);
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final gn.k invoke(ViewBinding binding) {
            Intrinsics.checkNotNullParameter(binding, "binding");
            return new C0539a(binding, j.this);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    /* synthetic */ class b extends FunctionReferenceImpl implements Function3 {

        /* renamed from: d  reason: collision with root package name */
        public static final b f38912d = new b();

        b() {
            super(3, dq.a.class, "inflate", "inflate(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Z)Lcom/withpersona/sdk2/inquiry/shared/databinding/Pi2GenericUiStepBottomSheetBinding;", 0);
        }

        public final dq.a a(LayoutInflater p02, ViewGroup viewGroup, boolean z10) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            return dq.a.c(p02, viewGroup, z10);
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
            j.this.f38903i.invoke();
        }

        @Override // kotlin.jvm.functions.Function0
        public /* bridge */ /* synthetic */ Object invoke() {
            a();
            return Unit.f32556a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d implements View.OnAttachStateChangeListener {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ BottomSheetBehavior f38914d;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        static final class a implements Runnable {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ BottomSheetBehavior f38915d;

            a(BottomSheetBehavior bottomSheetBehavior) {
                this.f38915d = bottomSheetBehavior;
            }

            @Override // java.lang.Runnable
            public final void run() {
                this.f38915d.c1(3);
            }
        }

        d(BottomSheetBehavior bottomSheetBehavior) {
            this.f38914d = bottomSheetBehavior;
        }

        @Override // android.view.View.OnAttachStateChangeListener
        public void onViewAttachedToWindow(View view) {
            Intrinsics.checkNotNullParameter(view, "view");
            view.postDelayed(new a(this.f38914d), 100L);
        }

        @Override // android.view.View.OnAttachStateChangeListener
        public void onViewDetachedFromWindow(View view) {
            Intrinsics.checkNotNullParameter(view, "view");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class e implements View.OnClickListener {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Function1 f38916d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ nq.a f38917e;

        e(Function1 function1, nq.a aVar) {
            this.f38916d = function1;
            this.f38917e = aVar;
        }

        @Override // android.view.View.OnClickListener
        public final void onClick(View view) {
            this.f38916d.invoke(this.f38917e.c());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class f implements View.OnClickListener {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ BottomSheetBehavior f38918d;

        f(BottomSheetBehavior bottomSheetBehavior) {
            this.f38918d = bottomSheetBehavior;
        }

        @Override // android.view.View.OnClickListener
        public final void onClick(View view) {
            this.f38918d.c1(5);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class g implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ BottomSheetBehavior f38919d;

        g(BottomSheetBehavior bottomSheetBehavior) {
            this.f38919d = bottomSheetBehavior;
        }

        public final void a() {
            this.f38919d.c1(5);
        }

        @Override // kotlin.jvm.functions.Function0
        public /* bridge */ /* synthetic */ Object invoke() {
            a();
            return Unit.f32556a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class h implements View.OnClickListener {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ BottomSheetBehavior f38920d;

        h(BottomSheetBehavior bottomSheetBehavior) {
            this.f38920d = bottomSheetBehavior;
        }

        @Override // android.view.View.OnClickListener
        public final void onClick(View view) {
            this.f38920d.c1(5);
        }
    }

    public j(nq.g uiScreen, List componentNamesToActions, Function0 onCancelled, String str, boolean z10) {
        Intrinsics.checkNotNullParameter(uiScreen, "uiScreen");
        Intrinsics.checkNotNullParameter(componentNamesToActions, "componentNamesToActions");
        Intrinsics.checkNotNullParameter(onCancelled, "onCancelled");
        this.f38901d = uiScreen;
        this.f38902e = componentNamesToActions;
        this.f38903i = onCancelled;
        this.f38904o = str;
        this.f38905p = z10;
        k.a aVar = gn.k.f25849a;
        this.f38908s = new z(Reflection.getOrCreateKotlinClass(j.class), b.f38912d, new a());
    }

    @Override // gn.b
    public c0 a() {
        return this.f38908s;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof j)) {
            return false;
        }
        j jVar = (j) obj;
        if (Intrinsics.areEqual(this.f38901d, jVar.f38901d) && Intrinsics.areEqual(this.f38902e, jVar.f38902e) && Intrinsics.areEqual(this.f38903i, jVar.f38903i) && Intrinsics.areEqual(this.f38904o, jVar.f38904o) && this.f38905p == jVar.f38905p) {
            return true;
        }
        return false;
    }

    public final BottomSheetBehavior g() {
        return this.f38907r;
    }

    public final nq.h h() {
        return this.f38906q;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2 = ((((this.f38901d.hashCode() * 31) + this.f38902e.hashCode()) * 31) + this.f38903i.hashCode()) * 31;
        String str = this.f38904o;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        return ((hashCode2 + hashCode) * 31) + Boolean.hashCode(this.f38905p);
    }

    public final void i(BottomSheetBehavior bottomSheetBehavior) {
        this.f38907r = bottomSheetBehavior;
    }

    public final void j(nq.h hVar) {
        this.f38906q = hVar;
    }

    public String toString() {
        nq.g gVar = this.f38901d;
        List list = this.f38902e;
        Function0 function0 = this.f38903i;
        String str = this.f38904o;
        boolean z10 = this.f38905p;
        return "UiStepBottomSheet(uiScreen=" + gVar + ", componentNamesToActions=" + list + ", onCancelled=" + function0 + ", cancelButtonName=" + str + ", hideWhenTappedOutside=" + z10 + ")";
    }

    public /* synthetic */ j(nq.g gVar, List list, Function0 function0, String str, boolean z10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(gVar, list, function0, str, (i10 & 16) != 0 ? true : z10);
    }
}
