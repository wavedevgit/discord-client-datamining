package wp;

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
import wm.a0;
import wm.c0;
import wm.k;
import wm.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j implements wm.b {

    /* renamed from: d  reason: collision with root package name */
    private final wp.g f52961d;

    /* renamed from: e  reason: collision with root package name */
    private final List f52962e;

    /* renamed from: i  reason: collision with root package name */
    private final Function0 f52963i;

    /* renamed from: o  reason: collision with root package name */
    private final String f52964o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f52965p;

    /* renamed from: q  reason: collision with root package name */
    private wp.h f52966q;

    /* renamed from: r  reason: collision with root package name */
    private BottomSheetBehavior f52967r;

    /* renamed from: s  reason: collision with root package name */
    private final c0 f52968s;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends Lambda implements Function1 {

        /* renamed from: wp.j$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0733a implements wm.k {

            /* renamed from: b  reason: collision with root package name */
            final /* synthetic */ ViewBinding f52970b;

            /* renamed from: c  reason: collision with root package name */
            final /* synthetic */ j f52971c;

            public C0733a(ViewBinding viewBinding, j jVar) {
                this.f52970b = viewBinding;
                this.f52971c = jVar;
            }

            @Override // wm.k
            public final void a(Object rendering, a0 viewEnvironment) {
                View d10;
                Intrinsics.checkNotNullParameter(rendering, "rendering");
                Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
                j jVar = (j) rendering;
                mp.a aVar = (mp.a) this.f52970b;
                ViewGroup.LayoutParams layoutParams = aVar.f39122b.getLayoutParams();
                Intrinsics.checkNotNull(layoutParams, "null cannot be cast to non-null type androidx.coordinatorlayout.widget.CoordinatorLayout.LayoutParams");
                CoordinatorLayout.c f10 = ((CoordinatorLayout.f) layoutParams).f();
                Intrinsics.checkNotNull(f10, "null cannot be cast to non-null type com.google.android.material.bottomsheet.BottomSheetBehavior<*>");
                BottomSheetBehavior bottomSheetBehavior = (BottomSheetBehavior) f10;
                if (!up.f.f()) {
                    CoordinatorLayout root = aVar.getRoot();
                    Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
                    up.f.d(root, false, false, false, false, 14, null);
                }
                c cVar = new c();
                ConstraintLayout bottomSheet = aVar.f39122b;
                Intrinsics.checkNotNullExpressionValue(bottomSheet, "bottomSheet");
                up.b.b(bottomSheetBehavior, cVar, bottomSheet, aVar.f39124d, aVar.f39125e);
                this.f52971c.i(bottomSheetBehavior);
                aVar.getRoot().addOnAttachStateChangeListener(new d(bottomSheetBehavior));
                Context context = aVar.getRoot().getContext();
                m mVar = m.f52983a;
                Intrinsics.checkNotNull(context);
                wp.h h10 = m.h(mVar, context, this.f52971c.f52961d, false, true, false, 16, null);
                this.f52971c.j(h10);
                aVar.f39123c.addView(h10.a());
                Map a10 = h10.c().a();
                for (Pair pair : this.f52971c.f52962e) {
                    Function1 function1 = (Function1) pair.d();
                    wp.a aVar2 = (wp.a) a10.get((String) pair.c());
                    if (aVar2 != null) {
                        aVar2.d().setOnClickListener(new e(function1, aVar2));
                    }
                }
                wp.a aVar3 = (wp.a) a10.get(this.f52971c.f52964o);
                if (aVar3 != null && (d10 = aVar3.d()) != null) {
                    d10.setOnClickListener(new f(bottomSheetBehavior));
                }
                ConstraintLayout bottomSheet2 = aVar.f39122b;
                Intrinsics.checkNotNullExpressionValue(bottomSheet2, "bottomSheet");
                wm.e.c(bottomSheet2, new g(bottomSheetBehavior));
                if (jVar.f52965p) {
                    aVar.f39125e.setOnClickListener(new h(bottomSheetBehavior));
                } else {
                    aVar.f39125e.setOnClickListener(null);
                }
                NestedScrollView contentScrollView = aVar.f39124d;
                Intrinsics.checkNotNullExpressionValue(contentScrollView, "contentScrollView");
                StepStyles.UiStepStyle styles = this.f52971c.f52961d.getStyles();
                FrameLayout contentContainer = aVar.f39123c;
                Intrinsics.checkNotNullExpressionValue(contentContainer, "contentContainer");
                dq.c.c(contentScrollView, styles, contentContainer, null, 4, null);
            }
        }

        public a() {
            super(1);
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final wm.k invoke(ViewBinding binding) {
            Intrinsics.checkNotNullParameter(binding, "binding");
            return new C0733a(binding, j.this);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    /* synthetic */ class b extends FunctionReferenceImpl implements Function3 {

        /* renamed from: d  reason: collision with root package name */
        public static final b f52972d = new b();

        b() {
            super(3, mp.a.class, "inflate", "inflate(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Z)Lcom/withpersona/sdk2/inquiry/shared/databinding/Pi2GenericUiStepBottomSheetBinding;", 0);
        }

        public final mp.a a(LayoutInflater p02, ViewGroup viewGroup, boolean z10) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            return mp.a.c(p02, viewGroup, z10);
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
            j.this.f52963i.invoke();
        }

        @Override // kotlin.jvm.functions.Function0
        public /* bridge */ /* synthetic */ Object invoke() {
            a();
            return Unit.f33074a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d implements View.OnAttachStateChangeListener {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ BottomSheetBehavior f52974d;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        static final class a implements Runnable {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ BottomSheetBehavior f52975d;

            a(BottomSheetBehavior bottomSheetBehavior) {
                this.f52975d = bottomSheetBehavior;
            }

            @Override // java.lang.Runnable
            public final void run() {
                this.f52975d.Y0(3);
            }
        }

        d(BottomSheetBehavior bottomSheetBehavior) {
            this.f52974d = bottomSheetBehavior;
        }

        @Override // android.view.View.OnAttachStateChangeListener
        public void onViewAttachedToWindow(View view) {
            Intrinsics.checkNotNullParameter(view, "view");
            view.postDelayed(new a(this.f52974d), 100L);
        }

        @Override // android.view.View.OnAttachStateChangeListener
        public void onViewDetachedFromWindow(View view) {
            Intrinsics.checkNotNullParameter(view, "view");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class e implements View.OnClickListener {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Function1 f52976d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ wp.a f52977e;

        e(Function1 function1, wp.a aVar) {
            this.f52976d = function1;
            this.f52977e = aVar;
        }

        @Override // android.view.View.OnClickListener
        public final void onClick(View view) {
            this.f52976d.invoke(this.f52977e.c());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class f implements View.OnClickListener {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ BottomSheetBehavior f52978d;

        f(BottomSheetBehavior bottomSheetBehavior) {
            this.f52978d = bottomSheetBehavior;
        }

        @Override // android.view.View.OnClickListener
        public final void onClick(View view) {
            this.f52978d.Y0(5);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class g implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ BottomSheetBehavior f52979d;

        g(BottomSheetBehavior bottomSheetBehavior) {
            this.f52979d = bottomSheetBehavior;
        }

        public final void a() {
            this.f52979d.Y0(5);
        }

        @Override // kotlin.jvm.functions.Function0
        public /* bridge */ /* synthetic */ Object invoke() {
            a();
            return Unit.f33074a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class h implements View.OnClickListener {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ BottomSheetBehavior f52980d;

        h(BottomSheetBehavior bottomSheetBehavior) {
            this.f52980d = bottomSheetBehavior;
        }

        @Override // android.view.View.OnClickListener
        public final void onClick(View view) {
            this.f52980d.Y0(5);
        }
    }

    public j(wp.g uiScreen, List componentNamesToActions, Function0 onCancelled, String str, boolean z10) {
        Intrinsics.checkNotNullParameter(uiScreen, "uiScreen");
        Intrinsics.checkNotNullParameter(componentNamesToActions, "componentNamesToActions");
        Intrinsics.checkNotNullParameter(onCancelled, "onCancelled");
        this.f52961d = uiScreen;
        this.f52962e = componentNamesToActions;
        this.f52963i = onCancelled;
        this.f52964o = str;
        this.f52965p = z10;
        k.a aVar = wm.k.f52359a;
        this.f52968s = new z(Reflection.getOrCreateKotlinClass(j.class), b.f52972d, new a());
    }

    @Override // wm.b
    public c0 a() {
        return this.f52968s;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof j)) {
            return false;
        }
        j jVar = (j) obj;
        if (Intrinsics.areEqual(this.f52961d, jVar.f52961d) && Intrinsics.areEqual(this.f52962e, jVar.f52962e) && Intrinsics.areEqual(this.f52963i, jVar.f52963i) && Intrinsics.areEqual(this.f52964o, jVar.f52964o) && this.f52965p == jVar.f52965p) {
            return true;
        }
        return false;
    }

    public final BottomSheetBehavior g() {
        return this.f52967r;
    }

    public final wp.h h() {
        return this.f52966q;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2 = ((((this.f52961d.hashCode() * 31) + this.f52962e.hashCode()) * 31) + this.f52963i.hashCode()) * 31;
        String str = this.f52964o;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        return ((hashCode2 + hashCode) * 31) + Boolean.hashCode(this.f52965p);
    }

    public final void i(BottomSheetBehavior bottomSheetBehavior) {
        this.f52967r = bottomSheetBehavior;
    }

    public final void j(wp.h hVar) {
        this.f52966q = hVar;
    }

    public String toString() {
        wp.g gVar = this.f52961d;
        List list = this.f52962e;
        Function0 function0 = this.f52963i;
        String str = this.f52964o;
        boolean z10 = this.f52965p;
        return "UiStepBottomSheet(uiScreen=" + gVar + ", componentNamesToActions=" + list + ", onCancelled=" + function0 + ", cancelButtonName=" + str + ", hideWhenTappedOutside=" + z10 + ")";
    }

    public /* synthetic */ j(wp.g gVar, List list, Function0 function0, String str, boolean z10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(gVar, list, function0, str, (i10 & 16) != 0 ? true : z10);
    }
}
