package com.withpersona.sdk2.inquiry.internal;

import android.content.Context;
import android.graphics.drawable.Drawable;
import android.util.TypedValue;
import android.view.View;
import android.view.ViewGroup;
import com.airbnb.lottie.LottieAnimationView;
import com.withpersona.sdk2.inquiry.internal.n;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyle;
import ep.f2;
import ep.g2;
import ep.h2;
import gn.c0;
import gn.k;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.reflect.KClass;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k implements gn.k {

    /* renamed from: f  reason: collision with root package name */
    public static final a f19960f = new a(null);

    /* renamed from: b  reason: collision with root package name */
    private final View f19961b;

    /* renamed from: c  reason: collision with root package name */
    private final LottieAnimationView f19962c;

    /* renamed from: d  reason: collision with root package name */
    private final Integer f19963d;

    /* renamed from: e  reason: collision with root package name */
    private Integer f19964e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements c0 {

        /* renamed from: a  reason: collision with root package name */
        private final /* synthetic */ c0 f19965a;

        /* renamed from: com.withpersona.sdk2.inquiry.internal.k$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        /* synthetic */ class C0252a extends FunctionReferenceImpl implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final C0252a f19966d = new C0252a();

            C0252a() {
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

        @Override // gn.c0
        /* renamed from: b */
        public View a(n.d.b initialRendering, gn.a0 initialViewEnvironment, Context contextForNewView, ViewGroup viewGroup) {
            Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
            Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
            Intrinsics.checkNotNullParameter(contextForNewView, "contextForNewView");
            return this.f19965a.a(initialRendering, initialViewEnvironment, contextForNewView, viewGroup);
        }

        @Override // gn.c0
        public KClass getType() {
            return this.f19965a.getType();
        }

        private a() {
            k.a aVar = gn.k.f25848a;
            this.f19965a = new gn.m(Reflection.getOrCreateKotlinClass(n.d.b.class), g2.f23132f, C0252a.f19966d);
        }
    }

    public k(View view) {
        Intrinsics.checkNotNullParameter(view, "view");
        this.f19961b = view;
        View findViewById = view.findViewById(f2.f23092a);
        Intrinsics.checkNotNullExpressionValue(findViewById, "findViewById(...)");
        LottieAnimationView lottieAnimationView = (LottieAnimationView) findViewById;
        this.f19962c = lottieAnimationView;
        Context context = view.getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        Integer f10 = bq.s.f(context, tp.a.f49765n, null, false, 6, null);
        this.f19963d = f10;
        if (f10 != null) {
            k(f10.intValue());
            lottieAnimationView.v();
            return;
        }
        lottieAnimationView.l(new r5.e("**"), l5.b0.f35546b, new z5.e() { // from class: ep.x
            @Override // z5.e
            public final Object a(z5.b bVar) {
                Integer g10;
                g10 = com.withpersona.sdk2.inquiry.internal.k.g(com.withpersona.sdk2.inquiry.internal.k.this, bVar);
                return g10;
            }
        });
        lottieAnimationView.l(new r5.e("**"), l5.b0.f35545a, new z5.e() { // from class: ep.y
            @Override // z5.e
            public final Object a(z5.b bVar) {
                Integer h10;
                h10 = com.withpersona.sdk2.inquiry.internal.k.h(com.withpersona.sdk2.inquiry.internal.k.this, bVar);
                return h10;
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Integer g(k kVar, z5.b bVar) {
        Context context = kVar.f19961b.getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        return Integer.valueOf(j(kVar, context, bh.b.f6745l, null, false, 6, null));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Integer h(k kVar, z5.b bVar) {
        Context context = kVar.f19961b.getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        return Integer.valueOf(j(kVar, context, f.a.f23298w, null, false, 6, null));
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
        Integer num = this.f19964e;
        if (num != null && num.intValue() == i10) {
            return;
        }
        this.f19964e = Integer.valueOf(i10);
        this.f19962c.m();
        this.f19962c.setMinFrame(0);
        this.f19962c.setAnimation(i10);
        this.f19962c.playAnimation();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m(n.d.b bVar) {
        bVar.a().invoke();
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Integer n(int i10, z5.b bVar) {
        return Integer.valueOf(i10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Integer o(int i10, z5.b bVar) {
        return Integer.valueOf(i10);
    }

    @Override // gn.k
    /* renamed from: l */
    public void a(final n.d.b rendering, gn.a0 viewEnvironment) {
        k kVar;
        int j10;
        Integer backgroundColorValue;
        Intrinsics.checkNotNullParameter(rendering, "rendering");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
        if (rendering.c() && this.f19963d == null) {
            k(h2.f23140a);
            this.f19962c.setScaleX(0.5f);
            this.f19962c.setScaleY(0.5f);
        }
        if (rendering.c()) {
            Context context = this.f19961b.getContext();
            Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
            Integer f10 = bq.s.f(context, tp.a.f49764m, null, false, 6, null);
            if (f10 != null) {
                this.f19961b.setBackground(androidx.core.content.a.e(this.f19961b.getContext(), f10.intValue()));
            }
        }
        StepStyle b10 = rendering.b();
        if (b10 != null && (backgroundColorValue = b10.getBackgroundColorValue()) != null) {
            j10 = backgroundColorValue.intValue();
            kVar = this;
        } else {
            Context context2 = this.f19961b.getContext();
            Intrinsics.checkNotNullExpressionValue(context2, "getContext(...)");
            kVar = this;
            j10 = j(kVar, context2, 16842801, null, false, 6, null);
        }
        kq.c.a(viewEnvironment, j10);
        StepStyle b11 = rendering.b();
        if (b11 != null) {
            Integer backgroundColorValue2 = b11.getBackgroundColorValue();
            if (backgroundColorValue2 != null) {
                kVar.f19961b.setBackgroundColor(backgroundColorValue2.intValue());
            }
            Context context3 = kVar.f19961b.getContext();
            Intrinsics.checkNotNullExpressionValue(context3, "getContext(...)");
            Drawable a10 = wq.c.a(b11, context3);
            if (a10 != null) {
                kVar.f19961b.setBackground(a10);
            }
            if (kVar.f19963d == null) {
                Integer fillColorValue = b11.getFillColorValue();
                if (fillColorValue != null) {
                    final int intValue = fillColorValue.intValue();
                    kVar.f19962c.l(new r5.e("**"), l5.b0.f35545a, new z5.e() { // from class: ep.u
                        @Override // z5.e
                        public final Object a(z5.b bVar) {
                            Integer n10;
                            n10 = com.withpersona.sdk2.inquiry.internal.k.n(intValue, bVar);
                            return n10;
                        }
                    });
                }
                Integer strokeColorValue = b11.getStrokeColorValue();
                if (strokeColorValue != null) {
                    final int intValue2 = strokeColorValue.intValue();
                    kVar.f19962c.l(new r5.e("**"), l5.b0.f35546b, new z5.e() { // from class: ep.v
                        @Override // z5.e
                        public final Object a(z5.b bVar) {
                            Integer o10;
                            o10 = com.withpersona.sdk2.inquiry.internal.k.o(intValue2, bVar);
                            return o10;
                        }
                    });
                }
            }
        }
        gn.e.c(kVar.f19961b, new Function0() { // from class: ep.w
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit m10;
                m10 = com.withpersona.sdk2.inquiry.internal.k.m(n.d.b.this);
                return m10;
            }
        });
    }
}
