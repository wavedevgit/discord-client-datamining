package com.withpersona.sdk2.inquiry.internal;

import android.content.Context;
import android.graphics.drawable.Drawable;
import android.util.TypedValue;
import android.view.View;
import android.view.ViewGroup;
import bn.c0;
import bn.k;
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
import so.f2;
import so.g2;
import so.h2;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k implements bn.k {

    /* renamed from: f  reason: collision with root package name */
    public static final a f18960f = new a(null);

    /* renamed from: b  reason: collision with root package name */
    private final View f18961b;

    /* renamed from: c  reason: collision with root package name */
    private final LottieAnimationView f18962c;

    /* renamed from: d  reason: collision with root package name */
    private final Integer f18963d;

    /* renamed from: e  reason: collision with root package name */
    private Integer f18964e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements c0 {

        /* renamed from: a  reason: collision with root package name */
        private final /* synthetic */ c0 f18965a;

        /* renamed from: com.withpersona.sdk2.inquiry.internal.k$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        /* synthetic */ class C0248a extends FunctionReferenceImpl implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final C0248a f18966d = new C0248a();

            C0248a() {
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

        @Override // bn.c0
        /* renamed from: b */
        public View a(n.d.b initialRendering, bn.a0 initialViewEnvironment, Context contextForNewView, ViewGroup viewGroup) {
            Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
            Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
            Intrinsics.checkNotNullParameter(contextForNewView, "contextForNewView");
            return this.f18965a.a(initialRendering, initialViewEnvironment, contextForNewView, viewGroup);
        }

        @Override // bn.c0
        public KClass getType() {
            return this.f18965a.getType();
        }

        private a() {
            k.a aVar = bn.k.f6590a;
            this.f18965a = new bn.m(Reflection.getOrCreateKotlinClass(n.d.b.class), g2.f50106f, C0248a.f18966d);
        }
    }

    public k(View view) {
        Intrinsics.checkNotNullParameter(view, "view");
        this.f18961b = view;
        View findViewById = view.findViewById(f2.f50066a);
        Intrinsics.checkNotNullExpressionValue(findViewById, "findViewById(...)");
        LottieAnimationView lottieAnimationView = (LottieAnimationView) findViewById;
        this.f18962c = lottieAnimationView;
        Context context = view.getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        Integer f10 = pp.s.f(context, hp.a.f26778n, null, false, 6, null);
        this.f18963d = f10;
        if (f10 != null) {
            k(f10.intValue());
            lottieAnimationView.v();
            return;
        }
        lottieAnimationView.l(new q5.e("**"), l5.a0.f36373b, new y5.e() { // from class: so.x
            @Override // y5.e
            public final Object a(y5.b bVar) {
                Integer g10;
                g10 = com.withpersona.sdk2.inquiry.internal.k.g(com.withpersona.sdk2.inquiry.internal.k.this, bVar);
                return g10;
            }
        });
        lottieAnimationView.l(new q5.e("**"), l5.a0.f36372a, new y5.e() { // from class: so.y
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
        Context context = kVar.f18961b.getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        return Integer.valueOf(j(kVar, context, zg.b.f55556m, null, false, 6, null));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Integer h(k kVar, y5.b bVar) {
        Context context = kVar.f18961b.getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        return Integer.valueOf(j(kVar, context, f.a.f21918v, null, false, 6, null));
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
        Integer num = this.f18964e;
        if (num != null && num.intValue() == i10) {
            return;
        }
        this.f18964e = Integer.valueOf(i10);
        this.f18962c.m();
        this.f18962c.setMinFrame(0);
        this.f18962c.setAnimation(i10);
        this.f18962c.playAnimation();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m(n.d.b bVar) {
        bVar.a().invoke();
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Integer n(int i10, y5.b bVar) {
        return Integer.valueOf(i10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Integer o(int i10, y5.b bVar) {
        return Integer.valueOf(i10);
    }

    @Override // bn.k
    /* renamed from: l */
    public void a(final n.d.b rendering, bn.a0 viewEnvironment) {
        k kVar;
        int j10;
        Integer backgroundColorValue;
        Intrinsics.checkNotNullParameter(rendering, "rendering");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
        if (rendering.c() && this.f18963d == null) {
            k(h2.f50114a);
            this.f18962c.setScaleX(0.5f);
            this.f18962c.setScaleY(0.5f);
        }
        if (rendering.c()) {
            Context context = this.f18961b.getContext();
            Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
            Integer f10 = pp.s.f(context, hp.a.f26777m, null, false, 6, null);
            if (f10 != null) {
                this.f18961b.setBackground(androidx.core.content.a.e(this.f18961b.getContext(), f10.intValue()));
            }
        }
        StepStyle b10 = rendering.b();
        if (b10 != null && (backgroundColorValue = b10.getBackgroundColorValue()) != null) {
            j10 = backgroundColorValue.intValue();
            kVar = this;
        } else {
            Context context2 = this.f18961b.getContext();
            Intrinsics.checkNotNullExpressionValue(context2, "getContext(...)");
            kVar = this;
            j10 = j(kVar, context2, 16842801, null, false, 6, null);
        }
        yp.c.a(viewEnvironment, j10);
        StepStyle b11 = rendering.b();
        if (b11 != null) {
            Integer backgroundColorValue2 = b11.getBackgroundColorValue();
            if (backgroundColorValue2 != null) {
                kVar.f18961b.setBackgroundColor(backgroundColorValue2.intValue());
            }
            Context context3 = kVar.f18961b.getContext();
            Intrinsics.checkNotNullExpressionValue(context3, "getContext(...)");
            Drawable a10 = kq.c.a(b11, context3);
            if (a10 != null) {
                kVar.f18961b.setBackground(a10);
            }
            if (kVar.f18963d == null) {
                Integer fillColorValue = b11.getFillColorValue();
                if (fillColorValue != null) {
                    final int intValue = fillColorValue.intValue();
                    kVar.f18962c.l(new q5.e("**"), l5.a0.f36372a, new y5.e() { // from class: so.u
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
                    kVar.f18962c.l(new q5.e("**"), l5.a0.f36373b, new y5.e() { // from class: so.v
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
        bn.e.c(kVar.f18961b, new Function0() { // from class: so.w
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit m10;
                m10 = com.withpersona.sdk2.inquiry.internal.k.m(n.d.b.this);
                return m10;
            }
        });
    }
}
