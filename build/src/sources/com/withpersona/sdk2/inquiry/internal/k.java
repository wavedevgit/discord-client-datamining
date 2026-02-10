package com.withpersona.sdk2.inquiry.internal;

import android.content.Context;
import android.graphics.drawable.Drawable;
import android.util.TypedValue;
import android.view.View;
import android.view.ViewGroup;
import com.airbnb.lottie.LottieAnimationView;
import com.withpersona.sdk2.inquiry.internal.n;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyle;
import en.c0;
import en.k;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.reflect.KClass;
import vo.f2;
import vo.g2;
import vo.h2;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k implements en.k {

    /* renamed from: f  reason: collision with root package name */
    public static final a f19080f = new a(null);

    /* renamed from: b  reason: collision with root package name */
    private final View f19081b;

    /* renamed from: c  reason: collision with root package name */
    private final LottieAnimationView f19082c;

    /* renamed from: d  reason: collision with root package name */
    private final Integer f19083d;

    /* renamed from: e  reason: collision with root package name */
    private Integer f19084e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements c0 {

        /* renamed from: a  reason: collision with root package name */
        private final /* synthetic */ c0 f19085a;

        /* renamed from: com.withpersona.sdk2.inquiry.internal.k$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        /* synthetic */ class C0267a extends FunctionReferenceImpl implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final C0267a f19086d = new C0267a();

            C0267a() {
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

        @Override // en.c0
        /* renamed from: b */
        public View a(n.d.b initialRendering, en.a0 initialViewEnvironment, Context contextForNewView, ViewGroup viewGroup) {
            Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
            Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
            Intrinsics.checkNotNullParameter(contextForNewView, "contextForNewView");
            return this.f19085a.a(initialRendering, initialViewEnvironment, contextForNewView, viewGroup);
        }

        @Override // en.c0
        public KClass getType() {
            return this.f19085a.getType();
        }

        private a() {
            k.a aVar = en.k.f21834a;
            this.f19085a = new en.m(Reflection.getOrCreateKotlinClass(n.d.b.class), g2.f52860f, C0267a.f19086d);
        }
    }

    public k(View view) {
        Intrinsics.checkNotNullParameter(view, "view");
        this.f19081b = view;
        View findViewById = view.findViewById(f2.f52820a);
        Intrinsics.checkNotNullExpressionValue(findViewById, "findViewById(...)");
        LottieAnimationView lottieAnimationView = (LottieAnimationView) findViewById;
        this.f19082c = lottieAnimationView;
        Context context = view.getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        Integer f10 = sp.s.f(context, kp.a.f34914n, null, false, 6, null);
        this.f19083d = f10;
        if (f10 != null) {
            k(f10.intValue());
            lottieAnimationView.v();
            return;
        }
        lottieAnimationView.l(new r5.e("**"), l5.b0.f35649b, new z5.e() { // from class: vo.x
            @Override // z5.e
            public final Object a(z5.b bVar) {
                Integer g10;
                g10 = com.withpersona.sdk2.inquiry.internal.k.g(com.withpersona.sdk2.inquiry.internal.k.this, bVar);
                return g10;
            }
        });
        lottieAnimationView.l(new r5.e("**"), l5.b0.f35648a, new z5.e() { // from class: vo.y
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
        Context context = kVar.f19081b.getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        return Integer.valueOf(j(kVar, context, bh.b.f6639m, null, false, 6, null));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Integer h(k kVar, z5.b bVar) {
        Context context = kVar.f19081b.getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        return Integer.valueOf(j(kVar, context, f.a.f22174v, null, false, 6, null));
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
        Integer num = this.f19084e;
        if (num != null && num.intValue() == i10) {
            return;
        }
        this.f19084e = Integer.valueOf(i10);
        this.f19082c.m();
        this.f19082c.setMinFrame(0);
        this.f19082c.setAnimation(i10);
        this.f19082c.playAnimation();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m(n.d.b bVar) {
        bVar.a().invoke();
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Integer n(int i10, z5.b bVar) {
        return Integer.valueOf(i10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Integer o(int i10, z5.b bVar) {
        return Integer.valueOf(i10);
    }

    @Override // en.k
    /* renamed from: l */
    public void a(final n.d.b rendering, en.a0 viewEnvironment) {
        k kVar;
        int j10;
        Integer backgroundColorValue;
        Intrinsics.checkNotNullParameter(rendering, "rendering");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
        if (rendering.c() && this.f19083d == null) {
            k(h2.f52868a);
            this.f19082c.setScaleX(0.5f);
            this.f19082c.setScaleY(0.5f);
        }
        if (rendering.c()) {
            Context context = this.f19081b.getContext();
            Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
            Integer f10 = sp.s.f(context, kp.a.f34913m, null, false, 6, null);
            if (f10 != null) {
                this.f19081b.setBackground(androidx.core.content.a.e(this.f19081b.getContext(), f10.intValue()));
            }
        }
        StepStyle b10 = rendering.b();
        if (b10 != null && (backgroundColorValue = b10.getBackgroundColorValue()) != null) {
            j10 = backgroundColorValue.intValue();
            kVar = this;
        } else {
            Context context2 = this.f19081b.getContext();
            Intrinsics.checkNotNullExpressionValue(context2, "getContext(...)");
            kVar = this;
            j10 = j(kVar, context2, 16842801, null, false, 6, null);
        }
        bq.c.a(viewEnvironment, j10);
        StepStyle b11 = rendering.b();
        if (b11 != null) {
            Integer backgroundColorValue2 = b11.getBackgroundColorValue();
            if (backgroundColorValue2 != null) {
                kVar.f19081b.setBackgroundColor(backgroundColorValue2.intValue());
            }
            Context context3 = kVar.f19081b.getContext();
            Intrinsics.checkNotNullExpressionValue(context3, "getContext(...)");
            Drawable a10 = nq.c.a(b11, context3);
            if (a10 != null) {
                kVar.f19081b.setBackground(a10);
            }
            if (kVar.f19083d == null) {
                Integer fillColorValue = b11.getFillColorValue();
                if (fillColorValue != null) {
                    final int intValue = fillColorValue.intValue();
                    kVar.f19082c.l(new r5.e("**"), l5.b0.f35648a, new z5.e() { // from class: vo.u
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
                    kVar.f19082c.l(new r5.e("**"), l5.b0.f35649b, new z5.e() { // from class: vo.v
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
        en.e.c(kVar.f19081b, new Function0() { // from class: vo.w
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit m10;
                m10 = com.withpersona.sdk2.inquiry.internal.k.m(n.d.b.this);
                return m10;
            }
        });
    }
}
