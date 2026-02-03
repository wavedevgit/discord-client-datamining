package com.withpersona.sdk2.inquiry.internal;

import android.content.Context;
import android.graphics.drawable.Drawable;
import android.util.TypedValue;
import android.view.View;
import android.view.ViewGroup;
import com.airbnb.lottie.LottieAnimationView;
import com.withpersona.sdk2.inquiry.internal.n;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyle;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.reflect.KClass;
import po.f2;
import po.g2;
import po.h2;
import ym.c0;
import ym.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k implements ym.k {

    /* renamed from: f  reason: collision with root package name */
    public static final a f18554f = new a(null);

    /* renamed from: b  reason: collision with root package name */
    private final View f18555b;

    /* renamed from: c  reason: collision with root package name */
    private final LottieAnimationView f18556c;

    /* renamed from: d  reason: collision with root package name */
    private final Integer f18557d;

    /* renamed from: e  reason: collision with root package name */
    private Integer f18558e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements c0 {

        /* renamed from: a  reason: collision with root package name */
        private final /* synthetic */ c0 f18559a;

        /* renamed from: com.withpersona.sdk2.inquiry.internal.k$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        /* synthetic */ class C0230a extends FunctionReferenceImpl implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final C0230a f18560d = new C0230a();

            C0230a() {
                super(1, k.class, "<init>", "<init>(Landroid/view/View;)V", 0);
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public final k invoke(View p02) {
                Intrinsics.checkNotNullParameter(p02, "p0");
                return new k(p02);
            }
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @Override // ym.c0
        /* renamed from: b */
        public View a(n.d.b initialRendering, ym.a0 initialViewEnvironment, Context contextForNewView, ViewGroup viewGroup) {
            Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
            Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
            Intrinsics.checkNotNullParameter(contextForNewView, "contextForNewView");
            return this.f18559a.a(initialRendering, initialViewEnvironment, contextForNewView, viewGroup);
        }

        @Override // ym.c0
        public KClass getType() {
            return this.f18559a.getType();
        }

        private a() {
            k.a aVar = ym.k.f54648a;
            this.f18559a = new ym.m(Reflection.getOrCreateKotlinClass(n.d.b.class), g2.f46490f, C0230a.f18560d);
        }
    }

    public k(View view) {
        Intrinsics.checkNotNullParameter(view, "view");
        this.f18555b = view;
        View findViewById = view.findViewById(f2.f46450a);
        Intrinsics.checkNotNullExpressionValue(findViewById, "findViewById(...)");
        LottieAnimationView lottieAnimationView = (LottieAnimationView) findViewById;
        this.f18556c = lottieAnimationView;
        Context context = view.getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        Integer f10 = mp.s.f(context, ep.a.f22466n, null, false, 6, null);
        this.f18557d = f10;
        if (f10 != null) {
            k(f10.intValue());
            lottieAnimationView.v();
            return;
        }
        lottieAnimationView.l(new q5.e("**"), l5.a0.f36446b, new y5.e() { // from class: po.x
            @Override // y5.e
            public final Object a(y5.b bVar) {
                Integer g10;
                g10 = com.withpersona.sdk2.inquiry.internal.k.g(com.withpersona.sdk2.inquiry.internal.k.this, bVar);
                return g10;
            }
        });
        lottieAnimationView.l(new q5.e("**"), l5.a0.f36445a, new y5.e() { // from class: po.y
            @Override // y5.e
            public final Object a(y5.b bVar) {
                Integer h10;
                h10 = com.withpersona.sdk2.inquiry.internal.k.h(com.withpersona.sdk2.inquiry.internal.k.this, bVar);
                return h10;
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Integer g(k kVar, y5.b bVar) {
        Context context = kVar.f18555b.getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        return Integer.valueOf(j(kVar, context, yg.b.f54101m, null, false, 6, null));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Integer h(k kVar, y5.b bVar) {
        Context context = kVar.f18555b.getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        return Integer.valueOf(j(kVar, context, f.a.f22893v, null, false, 6, null));
    }

    private final int i(Context context, int i10, TypedValue typedValue, boolean z10) {
        context.getTheme().resolveAttribute(i10, typedValue, z10);
        return typedValue.data;
    }

    static /* synthetic */ int j(k kVar, Context context, int i10, TypedValue typedValue, boolean z10, int i11, Object obj) {
        if ((i11 & 2) != 0) {
            typedValue = new TypedValue();
        }
        if ((i11 & 4) != 0) {
            z10 = true;
        }
        return kVar.i(context, i10, typedValue, z10);
    }

    private final void k(int i10) {
        Integer num = this.f18558e;
        if (num != null && num.intValue() == i10) {
            return;
        }
        this.f18558e = Integer.valueOf(i10);
        this.f18556c.m();
        this.f18556c.setMinFrame(0);
        this.f18556c.setAnimation(i10);
        this.f18556c.playAnimation();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m(n.d.b bVar) {
        bVar.a().invoke();
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Integer n(int i10, y5.b bVar) {
        return Integer.valueOf(i10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Integer o(int i10, y5.b bVar) {
        return Integer.valueOf(i10);
    }

    @Override // ym.k
    /* renamed from: l */
    public void a(final n.d.b rendering, ym.a0 viewEnvironment) {
        k kVar;
        int j10;
        Integer backgroundColorValue;
        Intrinsics.checkNotNullParameter(rendering, "rendering");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
        if (rendering.c() && this.f18557d == null) {
            k(h2.f46498a);
            this.f18556c.setScaleX(0.5f);
            this.f18556c.setScaleY(0.5f);
        }
        if (rendering.c()) {
            Context context = this.f18555b.getContext();
            Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
            Integer f10 = mp.s.f(context, ep.a.f22465m, null, false, 6, null);
            if (f10 != null) {
                this.f18555b.setBackground(androidx.core.content.a.e(this.f18555b.getContext(), f10.intValue()));
            }
        }
        StepStyle b10 = rendering.b();
        if (b10 != null && (backgroundColorValue = b10.getBackgroundColorValue()) != null) {
            j10 = backgroundColorValue.intValue();
            kVar = this;
        } else {
            Context context2 = this.f18555b.getContext();
            Intrinsics.checkNotNullExpressionValue(context2, "getContext(...)");
            kVar = this;
            j10 = j(kVar, context2, 16842801, null, false, 6, null);
        }
        vp.c.a(viewEnvironment, j10);
        StepStyle b11 = rendering.b();
        if (b11 != null) {
            Integer backgroundColorValue2 = b11.getBackgroundColorValue();
            if (backgroundColorValue2 != null) {
                kVar.f18555b.setBackgroundColor(backgroundColorValue2.intValue());
            }
            Context context3 = kVar.f18555b.getContext();
            Intrinsics.checkNotNullExpressionValue(context3, "getContext(...)");
            Drawable a10 = hq.c.a(b11, context3);
            if (a10 != null) {
                kVar.f18555b.setBackground(a10);
            }
            if (kVar.f18557d == null) {
                Integer fillColorValue = b11.getFillColorValue();
                if (fillColorValue != null) {
                    final int intValue = fillColorValue.intValue();
                    kVar.f18556c.l(new q5.e("**"), l5.a0.f36445a, new y5.e() { // from class: po.u
                        @Override // y5.e
                        public final Object a(y5.b bVar) {
                            Integer n10;
                            n10 = com.withpersona.sdk2.inquiry.internal.k.n(intValue, bVar);
                            return n10;
                        }
                    });
                }
                Integer strokeColorValue = b11.getStrokeColorValue();
                if (strokeColorValue != null) {
                    final int intValue2 = strokeColorValue.intValue();
                    kVar.f18556c.l(new q5.e("**"), l5.a0.f36446b, new y5.e() { // from class: po.v
                        @Override // y5.e
                        public final Object a(y5.b bVar) {
                            Integer o10;
                            o10 = com.withpersona.sdk2.inquiry.internal.k.o(intValue2, bVar);
                            return o10;
                        }
                    });
                }
            }
        }
        ym.e.c(kVar.f18555b, new Function0() { // from class: po.w
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit m10;
                m10 = com.withpersona.sdk2.inquiry.internal.k.m(n.d.b.this);
                return m10;
            }
        });
    }
}
