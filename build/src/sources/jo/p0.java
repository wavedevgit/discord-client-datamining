package jo;

import android.content.Context;
import android.graphics.drawable.Drawable;
import android.graphics.drawable.GradientDrawable;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.coordinatorlayout.widget.CoordinatorLayout;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;
import com.withpersona.sdk2.inquiry.network.dto.NextStep;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.RemoteImage;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyles;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.TextBasedComponentStyle;
import com.withpersona.sdk2.inquiry.shared.ui.Pi2NavigationBar;
import dn.k;
import jo.f5;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.reflect.KClass;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class p0 implements dn.k {

    /* renamed from: f  reason: collision with root package name */
    public static final a f30618f = new a(null);

    /* renamed from: b  reason: collision with root package name */
    private final no.f f30619b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f30620c;

    /* renamed from: d  reason: collision with root package name */
    private final androidx.recyclerview.widget.f f30621d;

    /* renamed from: e  reason: collision with root package name */
    private final RecyclerView f30622e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements dn.c0 {

        /* renamed from: a  reason: collision with root package name */
        private final /* synthetic */ dn.c0 f30623a;

        /* renamed from: jo.p0$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        /* synthetic */ class C0432a extends FunctionReferenceImpl implements Function3 {

            /* renamed from: d  reason: collision with root package name */
            public static final C0432a f30624d = new C0432a();

            C0432a() {
                super(3, no.f.class, "inflate", "inflate(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Z)Lcom/withpersona/sdk2/inquiry/governmentid/databinding/Pi2GovernmentidInstructionsBinding;", 0);
            }

            public final no.f a(LayoutInflater p02, ViewGroup viewGroup, boolean z10) {
                Intrinsics.checkNotNullParameter(p02, "p0");
                return no.f.c(p02, viewGroup, z10);
            }

            @Override // kotlin.jvm.functions.Function3
            public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3) {
                return a((LayoutInflater) obj, (ViewGroup) obj2, ((Boolean) obj3).booleanValue());
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        /* synthetic */ class b extends FunctionReferenceImpl implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final b f30625d = new b();

            b() {
                super(1, p0.class, "<init>", "<init>(Lcom/withpersona/sdk2/inquiry/governmentid/databinding/Pi2GovernmentidInstructionsBinding;)V", 0);
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public final p0 invoke(no.f p02) {
                Intrinsics.checkNotNullParameter(p02, "p0");
                return new p0(p02);
            }
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @Override // dn.c0
        /* renamed from: b */
        public View a(f5.c initialRendering, dn.a0 initialViewEnvironment, Context contextForNewView, ViewGroup viewGroup) {
            Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
            Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
            Intrinsics.checkNotNullParameter(contextForNewView, "contextForNewView");
            return this.f30623a.a(initialRendering, initialViewEnvironment, contextForNewView, viewGroup);
        }

        @Override // dn.c0
        public KClass getType() {
            return this.f30623a.getType();
        }

        private a() {
            k.a aVar = dn.k.f20913a;
            this.f30623a = new dn.z(Reflection.getOrCreateKotlinClass(f5.c.class), C0432a.f30624d, b.f30625d);
        }
    }

    public p0(no.f binding) {
        Intrinsics.checkNotNullParameter(binding, "binding");
        this.f30619b = binding;
        Context context = binding.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        boolean b10 = rp.s.b(context, jp.a.f30765e, null, false, false, 14, null);
        this.f30620c = b10;
        androidx.recyclerview.widget.f fVar = new androidx.recyclerview.widget.f(binding.getRoot().getContext(), 1);
        this.f30621d = fVar;
        RecyclerView recyclerView = binding.f41014g;
        recyclerView.setLayoutManager(new LinearLayoutManager(binding.getRoot().getContext()));
        if (!b10) {
            recyclerView.addItemDecoration(fVar);
        }
        Intrinsics.checkNotNullExpressionValue(recyclerView, "apply(...)");
        this.f30622e = recyclerView;
        CoordinatorLayout root = binding.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        bq.f.d(root, false, false, false, false, 15, null);
    }

    private final void f(StepStyles.GovernmentIdStepStyle governmentIdStepStyle, dn.a0 a0Var) {
        Integer backgroundColorValue = governmentIdStepStyle.getBackgroundColorValue();
        if (backgroundColorValue != null) {
            int intValue = backgroundColorValue.intValue();
            this.f30619b.getRoot().setBackgroundColor(intValue);
            aq.c.a(a0Var, intValue);
        }
        Context context = this.f30619b.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        Drawable a10 = mq.c.a(governmentIdStepStyle, context);
        if (a10 != null) {
            this.f30619b.getRoot().setBackground(a10);
        }
        Integer headerButtonColorValue = governmentIdStepStyle.getHeaderButtonColorValue();
        if (headerButtonColorValue != null) {
            this.f30619b.f41013f.setControlsColor(headerButtonColorValue.intValue());
        }
        TextBasedComponentStyle titleStyleValue = governmentIdStepStyle.getTitleStyleValue();
        if (titleStyleValue != null) {
            TextView textviewGovernmentidInstructionsTitle = this.f30619b.f41017j;
            Intrinsics.checkNotNullExpressionValue(textviewGovernmentidInstructionsTitle, "textviewGovernmentidInstructionsTitle");
            kq.f0.n(textviewGovernmentidInstructionsTitle, titleStyleValue, null, 2, null);
        }
        TextBasedComponentStyle textStyleValue = governmentIdStepStyle.getTextStyleValue();
        if (textStyleValue != null) {
            TextView textviewGovernmentidInstructionsBody = this.f30619b.f41015h;
            Intrinsics.checkNotNullExpressionValue(textviewGovernmentidInstructionsBody, "textviewGovernmentidInstructionsBody");
            kq.f0.n(textviewGovernmentidInstructionsBody, textStyleValue, null, 2, null);
            TextView textviewGovernmentidInstructionslistheader = this.f30619b.f41018k;
            Intrinsics.checkNotNullExpressionValue(textviewGovernmentidInstructionslistheader, "textviewGovernmentidInstructionslistheader");
            kq.f0.n(textviewGovernmentidInstructionslistheader, textStyleValue, null, 2, null);
        }
        TextBasedComponentStyle disclaimerStyleValue = governmentIdStepStyle.getDisclaimerStyleValue();
        if (disclaimerStyleValue != null) {
            TextView textviewGovernmentidInstructionsDisclaimer = this.f30619b.f41016i;
            Intrinsics.checkNotNullExpressionValue(textviewGovernmentidInstructionsDisclaimer, "textviewGovernmentidInstructionsDisclaimer");
            kq.f0.n(textviewGovernmentidInstructionsDisclaimer, disclaimerStyleValue, null, 2, null);
        }
        Integer governmentIdSelectOptionBorderColorValue = governmentIdStepStyle.getGovernmentIdSelectOptionBorderColorValue();
        if (governmentIdSelectOptionBorderColorValue != null) {
            int intValue2 = governmentIdSelectOptionBorderColorValue.intValue();
            GradientDrawable gradientDrawable = new GradientDrawable(GradientDrawable.Orientation.BOTTOM_TOP, new int[]{intValue2, intValue2});
            gradientDrawable.setSize((int) Math.ceil(rp.h.a(1.0d)), (int) Math.ceil(rp.h.a(1.0d)));
            this.f30621d.d(gradientDrawable);
            this.f30619b.f41012e.setBackgroundColor(intValue2);
        }
        Double governmentIdOptionBorderWidthValue = governmentIdStepStyle.getGovernmentIdOptionBorderWidthValue();
        if (governmentIdOptionBorderWidthValue != null) {
            final double doubleValue = governmentIdOptionBorderWidthValue.doubleValue();
            GradientDrawable gradientDrawable2 = (GradientDrawable) this.f30621d.c();
            if (gradientDrawable2 != null) {
                gradientDrawable2.setSize((int) Math.ceil(rp.h.a(doubleValue)), (int) Math.ceil(rp.h.a(doubleValue)));
            }
            View listDivider = this.f30619b.f41012e;
            Intrinsics.checkNotNullExpressionValue(listDivider, "listDivider");
            bq.s.b(listDivider, new Function0() { // from class: jo.o0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit g10;
                    g10 = p0.g(p0.this, doubleValue);
                    return g10;
                }
            });
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit g(p0 p0Var, double d10) {
        View view = p0Var.f30619b.f41012e;
        ViewGroup.LayoutParams layoutParams = view.getLayoutParams();
        if (d10 > 0.0d) {
            layoutParams.height = (int) rp.h.a(d10);
        } else {
            p0Var.f30619b.f41012e.setVisibility(8);
        }
        view.setLayoutParams(layoutParams);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit i(f5.c cVar, c4 idClass) {
        Intrinsics.checkNotNullParameter(idClass, "idClass");
        cVar.k().invoke(idClass);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit j(f5.c cVar) {
        cVar.g().invoke();
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit k(f5.c cVar) {
        cVar.h().invoke();
        return Unit.f32008a;
    }

    @Override // dn.k
    /* renamed from: h */
    public void a(final f5.c rendering, dn.a0 viewEnvironment) {
        RemoteImage remoteImage;
        Intrinsics.checkNotNullParameter(rendering, "rendering");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
        Context context = this.f30619b.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        t0 t0Var = null;
        Integer f10 = rp.s.f(context, jp.a.f30763c, null, false, 6, null);
        NextStep.GovernmentId.AssetConfig.SelectPage a10 = rendering.a();
        if (a10 != null) {
            remoteImage = a10.getHeaderPictograph();
        } else {
            remoteImage = null;
        }
        int i10 = 8;
        if (f10 != null) {
            this.f30619b.f41011d.setImageResource(f10.intValue());
            TextView textviewGovernmentidInstructionsTitle = this.f30619b.f41017j;
            Intrinsics.checkNotNullExpressionValue(textviewGovernmentidInstructionsTitle, "textviewGovernmentidInstructionsTitle");
            ViewGroup.LayoutParams layoutParams = textviewGovernmentidInstructionsTitle.getLayoutParams();
            if (layoutParams != null) {
                ViewGroup.MarginLayoutParams marginLayoutParams = (ViewGroup.MarginLayoutParams) layoutParams;
                marginLayoutParams.topMargin = 0;
                textviewGovernmentidInstructionsTitle.setLayoutParams(marginLayoutParams);
                this.f30619b.f41010c.setVisibility(8);
                this.f30619b.f41011d.setVisibility(0);
            } else {
                throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.MarginLayoutParams");
            }
        } else if (remoteImage != null) {
            ConstraintLayout governmentidHeaderImageContainer = this.f30619b.f41010c;
            Intrinsics.checkNotNullExpressionValue(governmentidHeaderImageContainer, "governmentidHeaderImageContainer");
            mq.b.c(remoteImage, governmentidHeaderImageContainer, false, 2, null);
            this.f30619b.f41010c.setVisibility(0);
            this.f30619b.f41011d.setVisibility(8);
        } else {
            this.f30619b.f41010c.setVisibility(8);
            this.f30619b.f41011d.setVisibility(8);
        }
        this.f30619b.f41017j.setText(rendering.m());
        TextView textviewGovernmentidInstructionsBody = this.f30619b.f41015h;
        Intrinsics.checkNotNullExpressionValue(textviewGovernmentidInstructionsBody, "textviewGovernmentidInstructionsBody");
        q0.a(textviewGovernmentidInstructionsBody, rendering.j());
        TextView textviewGovernmentidInstructionslistheader = this.f30619b.f41018k;
        Intrinsics.checkNotNullExpressionValue(textviewGovernmentidInstructionslistheader, "textviewGovernmentidInstructionslistheader");
        q0.a(textviewGovernmentidInstructionslistheader, rendering.b());
        TextView textviewGovernmentidInstructionsDisclaimer = this.f30619b.f41016i;
        Intrinsics.checkNotNullExpressionValue(textviewGovernmentidInstructionsDisclaimer, "textviewGovernmentidInstructionsDisclaimer");
        q0.a(textviewGovernmentidInstructionsDisclaimer, rendering.c());
        if (!StringsKt.k0(rendering.c())) {
            this.f30619b.f41013f.setAccessibilityTraversalAfter(m4.f30426z0);
        }
        View view = this.f30619b.f41012e;
        if (!this.f30620c) {
            i10 = 0;
        }
        view.setVisibility(i10);
        RecyclerView.Adapter adapter = this.f30622e.getAdapter();
        if (adapter instanceof t0) {
            t0Var = (t0) adapter;
        }
        if (t0Var == null) {
            Context context2 = this.f30619b.getRoot().getContext();
            Intrinsics.checkNotNullExpressionValue(context2, "getContext(...)");
            t0Var = new t0(context2, rendering.d(), rendering.l(), rendering.a(), new Function1() { // from class: jo.l0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit i11;
                    i11 = p0.i(f5.c.this, (c4) obj);
                    return i11;
                }
            });
        }
        if (this.f30622e.getAdapter() == null) {
            this.f30622e.setAdapter(t0Var);
        }
        t0Var.g(rendering.n());
        zp.a f11 = rendering.f();
        Function0 function0 = new Function0() { // from class: jo.m0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit j10;
                j10 = p0.j(f5.c.this);
                return j10;
            }
        };
        Function0 function02 = new Function0() { // from class: jo.n0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit k10;
                k10 = p0.k(f5.c.this);
                return k10;
            }
        };
        Pi2NavigationBar navigationBar = this.f30619b.f41013f;
        Intrinsics.checkNotNullExpressionValue(navigationBar, "navigationBar");
        CoordinatorLayout root = this.f30619b.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        zp.e.b(f11, function0, function02, navigationBar, root);
        CoordinatorLayout root2 = this.f30619b.getRoot();
        Intrinsics.checkNotNullExpressionValue(root2, "getRoot(...)");
        rp.z.b(root2, rendering.e(), rendering.i(), null, 0, 0, 56, null);
        StepStyles.GovernmentIdStepStyle l10 = rendering.l();
        if (l10 != null) {
            f(l10, viewEnvironment);
        }
    }
}
