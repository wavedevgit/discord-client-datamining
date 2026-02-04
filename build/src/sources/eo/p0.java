package eo;

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
import eo.f5;
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
import ym.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class p0 implements ym.k {

    /* renamed from: f  reason: collision with root package name */
    public static final a f22310f = new a(null);

    /* renamed from: b  reason: collision with root package name */
    private final io.f f22311b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f22312c;

    /* renamed from: d  reason: collision with root package name */
    private final androidx.recyclerview.widget.f f22313d;

    /* renamed from: e  reason: collision with root package name */
    private final RecyclerView f22314e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements ym.c0 {

        /* renamed from: a  reason: collision with root package name */
        private final /* synthetic */ ym.c0 f22315a;

        /* renamed from: eo.p0$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        /* synthetic */ class C0297a extends FunctionReferenceImpl implements Function3 {

            /* renamed from: d  reason: collision with root package name */
            public static final C0297a f22316d = new C0297a();

            C0297a() {
                super(3, io.f.class, "inflate", "inflate(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Z)Lcom/withpersona/sdk2/inquiry/governmentid/databinding/Pi2GovernmentidInstructionsBinding;", 0);
            }

            public final io.f a(LayoutInflater p02, ViewGroup viewGroup, boolean z10) {
                Intrinsics.checkNotNullParameter(p02, "p0");
                return io.f.c(p02, viewGroup, z10);
            }

            @Override // kotlin.jvm.functions.Function3
            public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3) {
                return a((LayoutInflater) obj, (ViewGroup) obj2, ((Boolean) obj3).booleanValue());
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        /* synthetic */ class b extends FunctionReferenceImpl implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final b f22317d = new b();

            b() {
                super(1, p0.class, "<init>", "<init>(Lcom/withpersona/sdk2/inquiry/governmentid/databinding/Pi2GovernmentidInstructionsBinding;)V", 0);
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public final p0 invoke(io.f p02) {
                Intrinsics.checkNotNullParameter(p02, "p0");
                return new p0(p02);
            }
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @Override // ym.c0
        /* renamed from: b */
        public View a(f5.c initialRendering, ym.a0 initialViewEnvironment, Context contextForNewView, ViewGroup viewGroup) {
            Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
            Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
            Intrinsics.checkNotNullParameter(contextForNewView, "contextForNewView");
            return this.f22315a.a(initialRendering, initialViewEnvironment, contextForNewView, viewGroup);
        }

        @Override // ym.c0
        public KClass getType() {
            return this.f22315a.getType();
        }

        private a() {
            k.a aVar = ym.k.f54645a;
            this.f22315a = new ym.z(Reflection.getOrCreateKotlinClass(f5.c.class), C0297a.f22316d, b.f22317d);
        }
    }

    public p0(io.f binding) {
        Intrinsics.checkNotNullParameter(binding, "binding");
        this.f22311b = binding;
        Context context = binding.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        boolean b10 = mp.s.b(context, ep.a.f22457e, null, false, false, 14, null);
        this.f22312c = b10;
        androidx.recyclerview.widget.f fVar = new androidx.recyclerview.widget.f(binding.getRoot().getContext(), 1);
        this.f22313d = fVar;
        RecyclerView recyclerView = binding.f28583g;
        recyclerView.setLayoutManager(new LinearLayoutManager(binding.getRoot().getContext()));
        if (!b10) {
            recyclerView.addItemDecoration(fVar);
        }
        Intrinsics.checkNotNullExpressionValue(recyclerView, "apply(...)");
        this.f22314e = recyclerView;
        CoordinatorLayout root = binding.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        wp.f.d(root, false, false, false, false, 15, null);
    }

    private final void f(StepStyles.GovernmentIdStepStyle governmentIdStepStyle, ym.a0 a0Var) {
        Integer backgroundColorValue = governmentIdStepStyle.getBackgroundColorValue();
        if (backgroundColorValue != null) {
            int intValue = backgroundColorValue.intValue();
            this.f22311b.getRoot().setBackgroundColor(intValue);
            vp.c.a(a0Var, intValue);
        }
        Context context = this.f22311b.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        Drawable a10 = hq.c.a(governmentIdStepStyle, context);
        if (a10 != null) {
            this.f22311b.getRoot().setBackground(a10);
        }
        Integer headerButtonColorValue = governmentIdStepStyle.getHeaderButtonColorValue();
        if (headerButtonColorValue != null) {
            this.f22311b.f28582f.setControlsColor(headerButtonColorValue.intValue());
        }
        TextBasedComponentStyle titleStyleValue = governmentIdStepStyle.getTitleStyleValue();
        if (titleStyleValue != null) {
            TextView textviewGovernmentidInstructionsTitle = this.f22311b.f28586j;
            Intrinsics.checkNotNullExpressionValue(textviewGovernmentidInstructionsTitle, "textviewGovernmentidInstructionsTitle");
            fq.f0.n(textviewGovernmentidInstructionsTitle, titleStyleValue, null, 2, null);
        }
        TextBasedComponentStyle textStyleValue = governmentIdStepStyle.getTextStyleValue();
        if (textStyleValue != null) {
            TextView textviewGovernmentidInstructionsBody = this.f22311b.f28584h;
            Intrinsics.checkNotNullExpressionValue(textviewGovernmentidInstructionsBody, "textviewGovernmentidInstructionsBody");
            fq.f0.n(textviewGovernmentidInstructionsBody, textStyleValue, null, 2, null);
            TextView textviewGovernmentidInstructionslistheader = this.f22311b.f28587k;
            Intrinsics.checkNotNullExpressionValue(textviewGovernmentidInstructionslistheader, "textviewGovernmentidInstructionslistheader");
            fq.f0.n(textviewGovernmentidInstructionslistheader, textStyleValue, null, 2, null);
        }
        TextBasedComponentStyle disclaimerStyleValue = governmentIdStepStyle.getDisclaimerStyleValue();
        if (disclaimerStyleValue != null) {
            TextView textviewGovernmentidInstructionsDisclaimer = this.f22311b.f28585i;
            Intrinsics.checkNotNullExpressionValue(textviewGovernmentidInstructionsDisclaimer, "textviewGovernmentidInstructionsDisclaimer");
            fq.f0.n(textviewGovernmentidInstructionsDisclaimer, disclaimerStyleValue, null, 2, null);
        }
        Integer governmentIdSelectOptionBorderColorValue = governmentIdStepStyle.getGovernmentIdSelectOptionBorderColorValue();
        if (governmentIdSelectOptionBorderColorValue != null) {
            int intValue2 = governmentIdSelectOptionBorderColorValue.intValue();
            GradientDrawable gradientDrawable = new GradientDrawable(GradientDrawable.Orientation.BOTTOM_TOP, new int[]{intValue2, intValue2});
            gradientDrawable.setSize((int) Math.ceil(mp.h.a(1.0d)), (int) Math.ceil(mp.h.a(1.0d)));
            this.f22313d.d(gradientDrawable);
            this.f22311b.f28581e.setBackgroundColor(intValue2);
        }
        Double governmentIdOptionBorderWidthValue = governmentIdStepStyle.getGovernmentIdOptionBorderWidthValue();
        if (governmentIdOptionBorderWidthValue != null) {
            final double doubleValue = governmentIdOptionBorderWidthValue.doubleValue();
            GradientDrawable gradientDrawable2 = (GradientDrawable) this.f22313d.c();
            if (gradientDrawable2 != null) {
                gradientDrawable2.setSize((int) Math.ceil(mp.h.a(doubleValue)), (int) Math.ceil(mp.h.a(doubleValue)));
            }
            View listDivider = this.f22311b.f28581e;
            Intrinsics.checkNotNullExpressionValue(listDivider, "listDivider");
            wp.s.b(listDivider, new Function0() { // from class: eo.o0
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
        View view = p0Var.f22311b.f28581e;
        ViewGroup.LayoutParams layoutParams = view.getLayoutParams();
        if (d10 > 0.0d) {
            layoutParams.height = (int) mp.h.a(d10);
        } else {
            p0Var.f22311b.f28581e.setVisibility(8);
        }
        view.setLayoutParams(layoutParams);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit i(f5.c cVar, c4 idClass) {
        Intrinsics.checkNotNullParameter(idClass, "idClass");
        cVar.k().invoke(idClass);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit j(f5.c cVar) {
        cVar.g().invoke();
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit k(f5.c cVar) {
        cVar.h().invoke();
        return Unit.f32464a;
    }

    @Override // ym.k
    /* renamed from: h */
    public void a(final f5.c rendering, ym.a0 viewEnvironment) {
        RemoteImage remoteImage;
        Intrinsics.checkNotNullParameter(rendering, "rendering");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
        Context context = this.f22311b.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        t0 t0Var = null;
        Integer f10 = mp.s.f(context, ep.a.f22455c, null, false, 6, null);
        NextStep.GovernmentId.AssetConfig.SelectPage a10 = rendering.a();
        if (a10 != null) {
            remoteImage = a10.getHeaderPictograph();
        } else {
            remoteImage = null;
        }
        int i10 = 8;
        if (f10 != null) {
            this.f22311b.f28580d.setImageResource(f10.intValue());
            TextView textviewGovernmentidInstructionsTitle = this.f22311b.f28586j;
            Intrinsics.checkNotNullExpressionValue(textviewGovernmentidInstructionsTitle, "textviewGovernmentidInstructionsTitle");
            ViewGroup.LayoutParams layoutParams = textviewGovernmentidInstructionsTitle.getLayoutParams();
            if (layoutParams != null) {
                ViewGroup.MarginLayoutParams marginLayoutParams = (ViewGroup.MarginLayoutParams) layoutParams;
                marginLayoutParams.topMargin = 0;
                textviewGovernmentidInstructionsTitle.setLayoutParams(marginLayoutParams);
                this.f22311b.f28579c.setVisibility(8);
                this.f22311b.f28580d.setVisibility(0);
            } else {
                throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.MarginLayoutParams");
            }
        } else if (remoteImage != null) {
            ConstraintLayout governmentidHeaderImageContainer = this.f22311b.f28579c;
            Intrinsics.checkNotNullExpressionValue(governmentidHeaderImageContainer, "governmentidHeaderImageContainer");
            hq.b.c(remoteImage, governmentidHeaderImageContainer, false, 2, null);
            this.f22311b.f28579c.setVisibility(0);
            this.f22311b.f28580d.setVisibility(8);
        } else {
            this.f22311b.f28579c.setVisibility(8);
            this.f22311b.f28580d.setVisibility(8);
        }
        this.f22311b.f28586j.setText(rendering.m());
        TextView textviewGovernmentidInstructionsBody = this.f22311b.f28584h;
        Intrinsics.checkNotNullExpressionValue(textviewGovernmentidInstructionsBody, "textviewGovernmentidInstructionsBody");
        q0.a(textviewGovernmentidInstructionsBody, rendering.j());
        TextView textviewGovernmentidInstructionslistheader = this.f22311b.f28587k;
        Intrinsics.checkNotNullExpressionValue(textviewGovernmentidInstructionslistheader, "textviewGovernmentidInstructionslistheader");
        q0.a(textviewGovernmentidInstructionslistheader, rendering.b());
        TextView textviewGovernmentidInstructionsDisclaimer = this.f22311b.f28585i;
        Intrinsics.checkNotNullExpressionValue(textviewGovernmentidInstructionsDisclaimer, "textviewGovernmentidInstructionsDisclaimer");
        q0.a(textviewGovernmentidInstructionsDisclaimer, rendering.c());
        if (!StringsKt.k0(rendering.c())) {
            this.f22311b.f28582f.setAccessibilityTraversalAfter(m4.f22118z0);
        }
        View view = this.f22311b.f28581e;
        if (!this.f22312c) {
            i10 = 0;
        }
        view.setVisibility(i10);
        RecyclerView.Adapter adapter = this.f22314e.getAdapter();
        if (adapter instanceof t0) {
            t0Var = (t0) adapter;
        }
        if (t0Var == null) {
            Context context2 = this.f22311b.getRoot().getContext();
            Intrinsics.checkNotNullExpressionValue(context2, "getContext(...)");
            t0Var = new t0(context2, rendering.d(), rendering.l(), rendering.a(), new Function1() { // from class: eo.l0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit i11;
                    i11 = p0.i(f5.c.this, (c4) obj);
                    return i11;
                }
            });
        }
        if (this.f22314e.getAdapter() == null) {
            this.f22314e.setAdapter(t0Var);
        }
        t0Var.g(rendering.n());
        up.a f11 = rendering.f();
        Function0 function0 = new Function0() { // from class: eo.m0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit j10;
                j10 = p0.j(f5.c.this);
                return j10;
            }
        };
        Function0 function02 = new Function0() { // from class: eo.n0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit k10;
                k10 = p0.k(f5.c.this);
                return k10;
            }
        };
        Pi2NavigationBar navigationBar = this.f22311b.f28582f;
        Intrinsics.checkNotNullExpressionValue(navigationBar, "navigationBar");
        CoordinatorLayout root = this.f22311b.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        up.e.b(f11, function0, function02, navigationBar, root);
        CoordinatorLayout root2 = this.f22311b.getRoot();
        Intrinsics.checkNotNullExpressionValue(root2, "getRoot(...)");
        mp.z.b(root2, rendering.e(), rendering.i(), null, 0, 0, 56, null);
        StepStyles.GovernmentIdStepStyle l10 = rendering.l();
        if (l10 != null) {
            f(l10, viewEnvironment);
        }
    }
}
