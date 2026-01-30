package vp;

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
import vm.a0;
import vm.c0;
import vm.k;
import vm.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j implements vm.b {

    /* renamed from: d  reason: collision with root package name */
    private final vp.g f51885d;

    /* renamed from: e  reason: collision with root package name */
    private final List f51886e;

    /* renamed from: i  reason: collision with root package name */
    private final Function0 f51887i;

    /* renamed from: o  reason: collision with root package name */
    private final String f51888o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f51889p;

    /* renamed from: q  reason: collision with root package name */
    private vp.h f51890q;

    /* renamed from: r  reason: collision with root package name */
    private BottomSheetBehavior f51891r;

    /* renamed from: s  reason: collision with root package name */
    private final c0 f51892s;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends Lambda implements Function1 {

        /* renamed from: vp.j$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0705a implements vm.k {

            /* renamed from: b  reason: collision with root package name */
            final /* synthetic */ ViewBinding f51894b;

            /* renamed from: c  reason: collision with root package name */
            final /* synthetic */ j f51895c;

            public C0705a(ViewBinding viewBinding, j jVar) {
                this.f51894b = viewBinding;
                this.f51895c = jVar;
            }

            @Override // vm.k
            public final void a(Object rendering, a0 viewEnvironment) {
                View d10;
                Intrinsics.checkNotNullParameter(rendering, "rendering");
                Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
                j jVar = (j) rendering;
                lp.a aVar = (lp.a) this.f51894b;
                ViewGroup.LayoutParams layoutParams = aVar.f37422b.getLayoutParams();
                Intrinsics.checkNotNull(layoutParams, "null cannot be cast to non-null type androidx.coordinatorlayout.widget.CoordinatorLayout.LayoutParams");
                CoordinatorLayout.c f10 = ((CoordinatorLayout.f) layoutParams).f();
                Intrinsics.checkNotNull(f10, "null cannot be cast to non-null type com.google.android.material.bottomsheet.BottomSheetBehavior<*>");
                BottomSheetBehavior bottomSheetBehavior = (BottomSheetBehavior) f10;
                if (!tp.f.f()) {
                    CoordinatorLayout root = aVar.getRoot();
                    Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
                    tp.f.d(root, false, false, false, false, 14, null);
                }
                c cVar = new c();
                ConstraintLayout bottomSheet = aVar.f37422b;
                Intrinsics.checkNotNullExpressionValue(bottomSheet, "bottomSheet");
                tp.b.b(bottomSheetBehavior, cVar, bottomSheet, aVar.f37424d, aVar.f37425e);
                this.f51895c.i(bottomSheetBehavior);
                aVar.getRoot().addOnAttachStateChangeListener(new d(bottomSheetBehavior));
                Context context = aVar.getRoot().getContext();
                m mVar = m.f51907a;
                Intrinsics.checkNotNull(context);
                vp.h h10 = m.h(mVar, context, this.f51895c.f51885d, false, true, false, 16, null);
                this.f51895c.j(h10);
                aVar.f37423c.addView(h10.a());
                Map a10 = h10.c().a();
                for (Pair pair : this.f51895c.f51886e) {
                    Function1 function1 = (Function1) pair.d();
                    vp.a aVar2 = (vp.a) a10.get((String) pair.c());
                    if (aVar2 != null) {
                        aVar2.d().setOnClickListener(new e(function1, aVar2));
                    }
                }
                vp.a aVar3 = (vp.a) a10.get(this.f51895c.f51888o);
                if (aVar3 != null && (d10 = aVar3.d()) != null) {
                    d10.setOnClickListener(new f(bottomSheetBehavior));
                }
                ConstraintLayout bottomSheet2 = aVar.f37422b;
                Intrinsics.checkNotNullExpressionValue(bottomSheet2, "bottomSheet");
                vm.e.c(bottomSheet2, new g(bottomSheetBehavior));
                if (jVar.f51889p) {
                    aVar.f37425e.setOnClickListener(new h(bottomSheetBehavior));
                } else {
                    aVar.f37425e.setOnClickListener(null);
                }
                NestedScrollView contentScrollView = aVar.f37424d;
                Intrinsics.checkNotNullExpressionValue(contentScrollView, "contentScrollView");
                StepStyles.UiStepStyle styles = this.f51895c.f51885d.getStyles();
                FrameLayout contentContainer = aVar.f37423c;
                Intrinsics.checkNotNullExpressionValue(contentContainer, "contentContainer");
                cq.c.c(contentScrollView, styles, contentContainer, null, 4, null);
            }
        }

        public a() {
            super(1);
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final vm.k invoke(ViewBinding binding) {
            Intrinsics.checkNotNullParameter(binding, "binding");
            return new C0705a(binding, j.this);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    /* synthetic */ class b extends FunctionReferenceImpl implements Function3 {

        /* renamed from: d  reason: collision with root package name */
        public static final b f51896d = new b();

        b() {
            super(3, lp.a.class, "inflate", "inflate(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Z)Lcom/withpersona/sdk2/inquiry/shared/databinding/Pi2GenericUiStepBottomSheetBinding;", 0);
        }

        public final lp.a a(LayoutInflater p02, ViewGroup viewGroup, boolean z10) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            return lp.a.c(p02, viewGroup, z10);
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
            j.this.f51887i.invoke();
        }

        @Override // kotlin.jvm.functions.Function0
        public /* bridge */ /* synthetic */ Object invoke() {
            a();
            return Unit.f33298a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d implements View.OnAttachStateChangeListener {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ BottomSheetBehavior f51898d;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        static final class a implements Runnable {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ BottomSheetBehavior f51899d;

            a(BottomSheetBehavior bottomSheetBehavior) {
                this.f51899d = bottomSheetBehavior;
            }

            @Override // java.lang.Runnable
            public final void run() {
                this.f51899d.Y0(3);
            }
        }

        d(BottomSheetBehavior bottomSheetBehavior) {
            this.f51898d = bottomSheetBehavior;
        }

        @Override // android.view.View.OnAttachStateChangeListener
        public void onViewAttachedToWindow(View view) {
            Intrinsics.checkNotNullParameter(view, "view");
            view.postDelayed(new a(this.f51898d), 100L);
        }

        @Override // android.view.View.OnAttachStateChangeListener
        public void onViewDetachedFromWindow(View view) {
            Intrinsics.checkNotNullParameter(view, "view");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class e implements View.OnClickListener {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Function1 f51900d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ vp.a f51901e;

        e(Function1 function1, vp.a aVar) {
            this.f51900d = function1;
            this.f51901e = aVar;
        }

        @Override // android.view.View.OnClickListener
        public final void onClick(View view) {
            this.f51900d.invoke(this.f51901e.c());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class f implements View.OnClickListener {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ BottomSheetBehavior f51902d;

        f(BottomSheetBehavior bottomSheetBehavior) {
            this.f51902d = bottomSheetBehavior;
        }

        @Override // android.view.View.OnClickListener
        public final void onClick(View view) {
            this.f51902d.Y0(5);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class g implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ BottomSheetBehavior f51903d;

        g(BottomSheetBehavior bottomSheetBehavior) {
            this.f51903d = bottomSheetBehavior;
        }

        public final void a() {
            this.f51903d.Y0(5);
        }

        @Override // kotlin.jvm.functions.Function0
        public /* bridge */ /* synthetic */ Object invoke() {
            a();
            return Unit.f33298a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class h implements View.OnClickListener {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ BottomSheetBehavior f51904d;

        h(BottomSheetBehavior bottomSheetBehavior) {
            this.f51904d = bottomSheetBehavior;
        }

        @Override // android.view.View.OnClickListener
        public final void onClick(View view) {
            this.f51904d.Y0(5);
        }
    }

    public j(vp.g uiScreen, List componentNamesToActions, Function0 onCancelled, String str, boolean z10) {
        Intrinsics.checkNotNullParameter(uiScreen, "uiScreen");
        Intrinsics.checkNotNullParameter(componentNamesToActions, "componentNamesToActions");
        Intrinsics.checkNotNullParameter(onCancelled, "onCancelled");
        this.f51885d = uiScreen;
        this.f51886e = componentNamesToActions;
        this.f51887i = onCancelled;
        this.f51888o = str;
        this.f51889p = z10;
        k.a aVar = vm.k.f51283a;
        this.f51892s = new z(Reflection.getOrCreateKotlinClass(j.class), b.f51896d, new a());
    }

    @Override // vm.b
    public c0 a() {
        return this.f51892s;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof j)) {
            return false;
        }
        j jVar = (j) obj;
        if (Intrinsics.areEqual(this.f51885d, jVar.f51885d) && Intrinsics.areEqual(this.f51886e, jVar.f51886e) && Intrinsics.areEqual(this.f51887i, jVar.f51887i) && Intrinsics.areEqual(this.f51888o, jVar.f51888o) && this.f51889p == jVar.f51889p) {
            return true;
        }
        return false;
    }

    public final BottomSheetBehavior g() {
        return this.f51891r;
    }

    public final vp.h h() {
        return this.f51890q;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2 = ((((this.f51885d.hashCode() * 31) + this.f51886e.hashCode()) * 31) + this.f51887i.hashCode()) * 31;
        String str = this.f51888o;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        return ((hashCode2 + hashCode) * 31) + Boolean.hashCode(this.f51889p);
    }

    public final void i(BottomSheetBehavior bottomSheetBehavior) {
        this.f51891r = bottomSheetBehavior;
    }

    public final void j(vp.h hVar) {
        this.f51890q = hVar;
    }

    public String toString() {
        vp.g gVar = this.f51885d;
        List list = this.f51886e;
        Function0 function0 = this.f51887i;
        String str = this.f51888o;
        boolean z10 = this.f51889p;
        return "UiStepBottomSheet(uiScreen=" + gVar + ", componentNamesToActions=" + list + ", onCancelled=" + function0 + ", cancelButtonName=" + str + ", hideWhenTappedOutside=" + z10 + ")";
    }

    public /* synthetic */ j(vp.g gVar, List list, Function0 function0, String str, boolean z10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(gVar, list, function0, str, (i10 & 16) != 0 ? true : z10);
    }
}
