package bq;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.coordinatorlayout.widget.CoordinatorLayout;
import androidx.core.widget.NestedScrollView;
import androidx.viewbinding.ViewBinding;
import bn.a0;
import bn.c0;
import bn.k;
import bn.z;
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
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j implements bn.b {

    /* renamed from: d  reason: collision with root package name */
    private final bq.g f7192d;

    /* renamed from: e  reason: collision with root package name */
    private final List f7193e;

    /* renamed from: i  reason: collision with root package name */
    private final Function0 f7194i;

    /* renamed from: o  reason: collision with root package name */
    private final String f7195o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f7196p;

    /* renamed from: q  reason: collision with root package name */
    private bq.h f7197q;

    /* renamed from: r  reason: collision with root package name */
    private BottomSheetBehavior f7198r;

    /* renamed from: s  reason: collision with root package name */
    private final c0 f7199s;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends Lambda implements Function1 {

        /* renamed from: bq.j$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0127a implements bn.k {

            /* renamed from: b  reason: collision with root package name */
            final /* synthetic */ ViewBinding f7201b;

            /* renamed from: c  reason: collision with root package name */
            final /* synthetic */ j f7202c;

            public C0127a(ViewBinding viewBinding, j jVar) {
                this.f7201b = viewBinding;
                this.f7202c = jVar;
            }

            @Override // bn.k
            public final void a(Object rendering, a0 viewEnvironment) {
                View d10;
                Intrinsics.checkNotNullParameter(rendering, "rendering");
                Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
                j jVar = (j) rendering;
                rp.a aVar = (rp.a) this.f7201b;
                ViewGroup.LayoutParams layoutParams = aVar.f48926b.getLayoutParams();
                Intrinsics.checkNotNull(layoutParams, "null cannot be cast to non-null type androidx.coordinatorlayout.widget.CoordinatorLayout.LayoutParams");
                CoordinatorLayout.c f10 = ((CoordinatorLayout.f) layoutParams).f();
                Intrinsics.checkNotNull(f10, "null cannot be cast to non-null type com.google.android.material.bottomsheet.BottomSheetBehavior<*>");
                BottomSheetBehavior bottomSheetBehavior = (BottomSheetBehavior) f10;
                if (!zp.f.f()) {
                    CoordinatorLayout root = aVar.getRoot();
                    Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
                    zp.f.d(root, false, false, false, false, 14, null);
                }
                c cVar = new c();
                ConstraintLayout bottomSheet = aVar.f48926b;
                Intrinsics.checkNotNullExpressionValue(bottomSheet, "bottomSheet");
                zp.b.b(bottomSheetBehavior, cVar, bottomSheet, aVar.f48928d, aVar.f48929e);
                this.f7202c.i(bottomSheetBehavior);
                aVar.getRoot().addOnAttachStateChangeListener(new d(bottomSheetBehavior));
                Context context = aVar.getRoot().getContext();
                m mVar = m.f7214a;
                Intrinsics.checkNotNull(context);
                bq.h h10 = m.h(mVar, context, this.f7202c.f7192d, false, true, false, 16, null);
                this.f7202c.j(h10);
                aVar.f48927c.addView(h10.a());
                Map a10 = h10.c().a();
                for (Pair pair : this.f7202c.f7193e) {
                    Function1 function1 = (Function1) pair.d();
                    bq.a aVar2 = (bq.a) a10.get((String) pair.c());
                    if (aVar2 != null) {
                        aVar2.d().setOnClickListener(new e(function1, aVar2));
                    }
                }
                bq.a aVar3 = (bq.a) a10.get(this.f7202c.f7195o);
                if (aVar3 != null && (d10 = aVar3.d()) != null) {
                    d10.setOnClickListener(new f(bottomSheetBehavior));
                }
                ConstraintLayout bottomSheet2 = aVar.f48926b;
                Intrinsics.checkNotNullExpressionValue(bottomSheet2, "bottomSheet");
                bn.e.c(bottomSheet2, new g(bottomSheetBehavior));
                if (jVar.f7196p) {
                    aVar.f48929e.setOnClickListener(new h(bottomSheetBehavior));
                } else {
                    aVar.f48929e.setOnClickListener(null);
                }
                NestedScrollView contentScrollView = aVar.f48928d;
                Intrinsics.checkNotNullExpressionValue(contentScrollView, "contentScrollView");
                StepStyles.UiStepStyle styles = this.f7202c.f7192d.getStyles();
                FrameLayout contentContainer = aVar.f48927c;
                Intrinsics.checkNotNullExpressionValue(contentContainer, "contentContainer");
                iq.c.c(contentScrollView, styles, contentContainer, null, 4, null);
            }
        }

        public a() {
            super(1);
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final bn.k invoke(ViewBinding binding) {
            Intrinsics.checkNotNullParameter(binding, "binding");
            return new C0127a(binding, j.this);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    /* synthetic */ class b extends FunctionReferenceImpl implements Function3 {

        /* renamed from: d  reason: collision with root package name */
        public static final b f7203d = new b();

        b() {
            super(3, rp.a.class, "inflate", "inflate(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Z)Lcom/withpersona/sdk2/inquiry/shared/databinding/Pi2GenericUiStepBottomSheetBinding;", 0);
        }

        public final rp.a a(LayoutInflater p02, ViewGroup viewGroup, boolean z10) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            return rp.a.c(p02, viewGroup, z10);
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
            j.this.f7194i.invoke();
        }

        @Override // kotlin.jvm.functions.Function0
        public /* bridge */ /* synthetic */ Object invoke() {
            a();
            return Unit.f31988a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d implements View.OnAttachStateChangeListener {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ BottomSheetBehavior f7205d;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        static final class a implements Runnable {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ BottomSheetBehavior f7206d;

            a(BottomSheetBehavior bottomSheetBehavior) {
                this.f7206d = bottomSheetBehavior;
            }

            @Override // java.lang.Runnable
            public final void run() {
                this.f7206d.Y0(3);
            }
        }

        d(BottomSheetBehavior bottomSheetBehavior) {
            this.f7205d = bottomSheetBehavior;
        }

        @Override // android.view.View.OnAttachStateChangeListener
        public void onViewAttachedToWindow(View view) {
            Intrinsics.checkNotNullParameter(view, "view");
            view.postDelayed(new a(this.f7205d), 100L);
        }

        @Override // android.view.View.OnAttachStateChangeListener
        public void onViewDetachedFromWindow(View view) {
            Intrinsics.checkNotNullParameter(view, "view");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class e implements View.OnClickListener {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Function1 f7207d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ bq.a f7208e;

        e(Function1 function1, bq.a aVar) {
            this.f7207d = function1;
            this.f7208e = aVar;
        }

        @Override // android.view.View.OnClickListener
        public final void onClick(View view) {
            this.f7207d.invoke(this.f7208e.c());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class f implements View.OnClickListener {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ BottomSheetBehavior f7209d;

        f(BottomSheetBehavior bottomSheetBehavior) {
            this.f7209d = bottomSheetBehavior;
        }

        @Override // android.view.View.OnClickListener
        public final void onClick(View view) {
            this.f7209d.Y0(5);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class g implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ BottomSheetBehavior f7210d;

        g(BottomSheetBehavior bottomSheetBehavior) {
            this.f7210d = bottomSheetBehavior;
        }

        public final void a() {
            this.f7210d.Y0(5);
        }

        @Override // kotlin.jvm.functions.Function0
        public /* bridge */ /* synthetic */ Object invoke() {
            a();
            return Unit.f31988a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class h implements View.OnClickListener {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ BottomSheetBehavior f7211d;

        h(BottomSheetBehavior bottomSheetBehavior) {
            this.f7211d = bottomSheetBehavior;
        }

        @Override // android.view.View.OnClickListener
        public final void onClick(View view) {
            this.f7211d.Y0(5);
        }
    }

    public j(bq.g uiScreen, List componentNamesToActions, Function0 onCancelled, String str, boolean z10) {
        Intrinsics.checkNotNullParameter(uiScreen, "uiScreen");
        Intrinsics.checkNotNullParameter(componentNamesToActions, "componentNamesToActions");
        Intrinsics.checkNotNullParameter(onCancelled, "onCancelled");
        this.f7192d = uiScreen;
        this.f7193e = componentNamesToActions;
        this.f7194i = onCancelled;
        this.f7195o = str;
        this.f7196p = z10;
        k.a aVar = bn.k.f6590a;
        this.f7199s = new z(Reflection.getOrCreateKotlinClass(j.class), b.f7203d, new a());
    }

    @Override // bn.b
    public c0 a() {
        return this.f7199s;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof j)) {
            return false;
        }
        j jVar = (j) obj;
        if (Intrinsics.areEqual(this.f7192d, jVar.f7192d) && Intrinsics.areEqual(this.f7193e, jVar.f7193e) && Intrinsics.areEqual(this.f7194i, jVar.f7194i) && Intrinsics.areEqual(this.f7195o, jVar.f7195o) && this.f7196p == jVar.f7196p) {
            return true;
        }
        return false;
    }

    public final BottomSheetBehavior g() {
        return this.f7198r;
    }

    public final bq.h h() {
        return this.f7197q;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2 = ((((this.f7192d.hashCode() * 31) + this.f7193e.hashCode()) * 31) + this.f7194i.hashCode()) * 31;
        String str = this.f7195o;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        return ((hashCode2 + hashCode) * 31) + Boolean.hashCode(this.f7196p);
    }

    public final void i(BottomSheetBehavior bottomSheetBehavior) {
        this.f7198r = bottomSheetBehavior;
    }

    public final void j(bq.h hVar) {
        this.f7197q = hVar;
    }

    public String toString() {
        bq.g gVar = this.f7192d;
        List list = this.f7193e;
        Function0 function0 = this.f7194i;
        String str = this.f7195o;
        boolean z10 = this.f7196p;
        return "UiStepBottomSheet(uiScreen=" + gVar + ", componentNamesToActions=" + list + ", onCancelled=" + function0 + ", cancelButtonName=" + str + ", hideWhenTappedOutside=" + z10 + ")";
    }

    public /* synthetic */ j(bq.g gVar, List list, Function0 function0, String str, boolean z10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(gVar, list, function0, str, (i10 & 16) != 0 ? true : z10);
    }
}
