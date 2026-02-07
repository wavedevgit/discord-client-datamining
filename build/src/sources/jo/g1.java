package jo;

import android.animation.ObjectAnimator;
import android.content.Context;
import android.content.res.ColorStateList;
import android.graphics.Color;
import android.graphics.drawable.Drawable;
import android.graphics.drawable.GradientDrawable;
import android.graphics.drawable.InsetDrawable;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.view.animation.LinearInterpolator;
import android.widget.Button;
import android.widget.FrameLayout;
import android.widget.ImageView;
import android.widget.TextView;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.constraintlayout.widget.ConstraintSet;
import androidx.coordinatorlayout.widget.CoordinatorLayout;
import com.withpersona.sdk2.inquiry.network.dto.NextStep;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.RemoteImage;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.ButtonCancelComponentStyle;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.ButtonSubmitComponentStyle;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyles;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StyleElements;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.TextBasedComponentStyle;
import com.withpersona.sdk2.inquiry.shared.ui.Pi2NavigationBar;
import com.withpersona.sdk2.inquiry.shared.ui.ThemeableLottieAnimationView;
import dn.k;
import g5.h;
import java.io.File;
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
public final class g1 implements dn.k {

    /* renamed from: f  reason: collision with root package name */
    public static final a f30256f = new a(null);

    /* renamed from: b  reason: collision with root package name */
    private final no.g f30257b;

    /* renamed from: c  reason: collision with root package name */
    private final ConstraintSet f30258c;

    /* renamed from: d  reason: collision with root package name */
    private View f30259d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f30260e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements dn.c0 {

        /* renamed from: a  reason: collision with root package name */
        private final /* synthetic */ dn.c0 f30261a;

        /* renamed from: jo.g1$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        /* synthetic */ class C0427a extends FunctionReferenceImpl implements Function3 {

            /* renamed from: d  reason: collision with root package name */
            public static final C0427a f30262d = new C0427a();

            C0427a() {
                super(3, no.g.class, "inflate", "inflate(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Z)Lcom/withpersona/sdk2/inquiry/governmentid/databinding/Pi2GovernmentidReviewBinding;", 0);
            }

            public final no.g a(LayoutInflater p02, ViewGroup viewGroup, boolean z10) {
                Intrinsics.checkNotNullParameter(p02, "p0");
                return no.g.c(p02, viewGroup, z10);
            }

            @Override // kotlin.jvm.functions.Function3
            public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3) {
                return a((LayoutInflater) obj, (ViewGroup) obj2, ((Boolean) obj3).booleanValue());
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        /* synthetic */ class b extends FunctionReferenceImpl implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final b f30263d = new b();

            b() {
                super(1, g1.class, "<init>", "<init>(Lcom/withpersona/sdk2/inquiry/governmentid/databinding/Pi2GovernmentidReviewBinding;)V", 0);
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public final g1 invoke(no.g p02) {
                Intrinsics.checkNotNullParameter(p02, "p0");
                return new g1(p02);
            }
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @Override // dn.c0
        /* renamed from: b */
        public View a(f5.e initialRendering, dn.a0 initialViewEnvironment, Context contextForNewView, ViewGroup viewGroup) {
            Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
            Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
            Intrinsics.checkNotNullParameter(contextForNewView, "contextForNewView");
            return this.f30261a.a(initialRendering, initialViewEnvironment, contextForNewView, viewGroup);
        }

        @Override // dn.c0
        public KClass getType() {
            return this.f30261a.getType();
        }

        private a() {
            k.a aVar = dn.k.f20913a;
            this.f30261a = new dn.z(Reflection.getOrCreateKotlinClass(f5.e.class), C0427a.f30262d, b.f30263d);
        }
    }

    public g1(no.g binding) {
        Intrinsics.checkNotNullParameter(binding, "binding");
        this.f30257b = binding;
        this.f30258c = new ConstraintSet();
        CoordinatorLayout cameraScreenContent = binding.f41070d;
        Intrinsics.checkNotNullExpressionValue(cameraScreenContent, "cameraScreenContent");
        bq.f.d(cameraScreenContent, false, false, false, false, 15, null);
        ThemeableLottieAnimationView themeableLottieAnimationView = binding.f41081o;
        int parseColor = Color.parseColor("#43957D");
        Context context = binding.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        themeableLottieAnimationView.I(parseColor, rp.s.d(context, f.a.f22219v, null, false, 6, null));
    }

    private final Unit k(StepStyles.GovernmentIdStepStyle governmentIdStepStyle) {
        int i10;
        String str;
        StyleElements.FontWeight fontWeight;
        StepStyles.StepTextBasedComponentStyleContainer base;
        TextBasedComponentStyle base2;
        StepStyles.StepTextBasedComponentStyleContainer base3;
        TextBasedComponentStyle base4;
        no.g gVar = this.f30257b;
        float a10 = (float) rp.h.a(8.0d);
        int a11 = (int) rp.h.a(3.0d);
        TextBasedComponentStyle titleStyleValue = governmentIdStepStyle.getTitleStyleValue();
        if (titleStyleValue != null) {
            TextView title = this.f30257b.f41090x;
            Intrinsics.checkNotNullExpressionValue(title, "title");
            kq.f0.n(title, titleStyleValue, null, 2, null);
            this.f30257b.f41090x.setTextColor(-1);
        }
        TextBasedComponentStyle governmentIdCaptureHintTextStyle = governmentIdStepStyle.getGovernmentIdCaptureHintTextStyle();
        if (governmentIdCaptureHintTextStyle != null) {
            TextView overlayText = this.f30257b.f41083q;
            Intrinsics.checkNotNullExpressionValue(overlayText, "overlayText");
            kq.f0.m(overlayText, governmentIdCaptureHintTextStyle, kotlin.collections.x0.c(kq.b0.f35234d));
        }
        Integer governmentIdReviewImageBoxBorderColorValue = governmentIdStepStyle.getGovernmentIdReviewImageBoxBorderColorValue();
        if (governmentIdReviewImageBoxBorderColorValue != null) {
            i10 = governmentIdReviewImageBoxBorderColorValue.intValue();
            gVar.f41085s.setIndeterminateTintList(new ColorStateList(new int[][]{new int[0]}, new int[]{i10}));
        } else {
            i10 = -1;
        }
        TextView disclaimer = this.f30257b.f41072f;
        Intrinsics.checkNotNullExpressionValue(disclaimer, "disclaimer");
        StepStyles.GovernmentIdStepTextBasedComponentStyle textStyle = governmentIdStepStyle.getTextStyle();
        if (textStyle != null && (base3 = textStyle.getBase()) != null && (base4 = base3.getBase()) != null) {
            str = base4.getFontNameValue();
        } else {
            str = null;
        }
        StepStyles.GovernmentIdStepTextBasedComponentStyle textStyle2 = governmentIdStepStyle.getTextStyle();
        if (textStyle2 == null || (base = textStyle2.getBase()) == null || (base2 = base.getBase()) == null || (fontWeight = base2.getFontWeightValue()) == null) {
            fontWeight = StyleElements.FontWeight.NORMAL;
        }
        kq.f0.j(disclaimer, str, fontWeight, null, 4, null);
        Double governmentIdReviewImageBoxBorderRadiusValue = governmentIdStepStyle.getGovernmentIdReviewImageBoxBorderRadiusValue();
        if (governmentIdReviewImageBoxBorderRadiusValue != null) {
            a10 = (float) rp.h.a(governmentIdReviewImageBoxBorderRadiusValue.doubleValue());
        }
        Double governmentIdReviewImageBoxBorderWidthValue = governmentIdStepStyle.getGovernmentIdReviewImageBoxBorderWidthValue();
        if (governmentIdReviewImageBoxBorderWidthValue != null) {
            a11 = (int) Math.ceil(rp.h.a(governmentIdReviewImageBoxBorderWidthValue.doubleValue()));
        }
        gVar.f41088v.setRadius(a11 + a10);
        View view = gVar.f41078l;
        GradientDrawable gradientDrawable = new GradientDrawable();
        gradientDrawable.setCornerRadius(a10);
        gradientDrawable.setStroke(a11, i10);
        view.setBackground(gradientDrawable);
        ConstraintLayout constraintLayout = gVar.f41080n;
        GradientDrawable gradientDrawable2 = new GradientDrawable();
        gradientDrawable2.setColor(-1);
        gradientDrawable2.setCornerRadii(new float[]{0.0f, 0.0f, 0.0f, 0.0f, a10, a10, a10, a10});
        constraintLayout.setBackground(new InsetDrawable((Drawable) gradientDrawable2, (int) rp.h.a(6.0d)));
        ButtonSubmitComponentStyle submitPhotoButtonStyleValue = governmentIdStepStyle.getSubmitPhotoButtonStyleValue();
        if (submitPhotoButtonStyleValue != null) {
            Button acceptButton = gVar.f41068b;
            Intrinsics.checkNotNullExpressionValue(acceptButton, "acceptButton");
            kq.e.f(acceptButton, submitPhotoButtonStyleValue, false, false, 2, null);
        }
        ButtonCancelComponentStyle retakePhotoButtonStyleValue = governmentIdStepStyle.getRetakePhotoButtonStyleValue();
        if (retakePhotoButtonStyleValue != null) {
            Button retryButton = gVar.f41086t;
            Intrinsics.checkNotNullExpressionValue(retryButton, "retryButton");
            kq.e.f(retryButton, retakePhotoButtonStyleValue, false, false, 2, null);
        }
        Integer captureHintIconStrokeColor = governmentIdStepStyle.getCaptureHintIconStrokeColor();
        if (captureHintIconStrokeColor != null) {
            this.f30257b.f41081o.I(Color.parseColor("#000000"), captureHintIconStrokeColor.intValue());
        }
        Integer captureHintIconFillColor = governmentIdStepStyle.getCaptureHintIconFillColor();
        if (captureHintIconFillColor != null) {
            this.f30257b.f41081o.I(Color.parseColor("#43957D"), captureHintIconFillColor.intValue());
        }
        Integer capturePageHeaderIconColorValue = governmentIdStepStyle.getCapturePageHeaderIconColorValue();
        if (capturePageHeaderIconColorValue == null) {
            return null;
        }
        this.f30257b.f41077k.setControlsColor(capturePageHeaderIconColorValue.intValue());
        return Unit.f32056a;
    }

    private final void l() {
        no.g gVar = this.f30257b;
        if (gVar.f41068b.getTop() < gVar.f41074h.getBottom() + gVar.getRoot().getContext().getResources().getDimensionPixelOffset(k4.f30395a)) {
            this.f30258c.e(gVar.getRoot().getContext(), n4.f30600h);
            androidx.transition.x.a(this.f30257b.f41070d, new androidx.transition.a());
            this.f30258c.c(this.f30257b.f41071e);
        }
    }

    private final void m(final StyleElements.Axis axis, final long j10) {
        final no.g gVar = this.f30257b;
        Button acceptButton = gVar.f41068b;
        Intrinsics.checkNotNullExpressionValue(acceptButton, "acceptButton");
        bq.s.b(acceptButton, new Function0() { // from class: jo.e1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit o10;
                o10 = g1.o(no.g.this, j10, this, axis);
                return o10;
            }
        });
    }

    static /* synthetic */ void n(g1 g1Var, StyleElements.Axis axis, long j10, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            j10 = System.currentTimeMillis();
        }
        g1Var.m(axis, j10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit o(no.g gVar, long j10, final g1 g1Var, StyleElements.Axis axis) {
        boolean z10;
        boolean z11 = false;
        if (gVar.f41068b.getLineCount() != 0 && gVar.f41086t.getLineCount() != 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (System.currentTimeMillis() - j10 > 300) {
            z11 = true;
        }
        if (!z10 && !z11) {
            g1Var.m(axis, j10);
            return Unit.f32056a;
        }
        if (z10 && (gVar.f41068b.getLineCount() > 1 || gVar.f41086t.getLineCount() > 1 || axis == StyleElements.Axis.VERTICAL)) {
            Button acceptButton = gVar.f41068b;
            Intrinsics.checkNotNullExpressionValue(acceptButton, "acceptButton");
            ViewGroup.LayoutParams layoutParams = acceptButton.getLayoutParams();
            if (layoutParams != null) {
                layoutParams.width = gVar.f41076j.getWidth();
                acceptButton.setLayoutParams(layoutParams);
                Button retryButton = gVar.f41086t;
                Intrinsics.checkNotNullExpressionValue(retryButton, "retryButton");
                ViewGroup.LayoutParams layoutParams2 = retryButton.getLayoutParams();
                if (layoutParams2 != null) {
                    layoutParams2.width = gVar.f41076j.getWidth();
                    retryButton.setLayoutParams(layoutParams2);
                    gVar.f41076j.setReferencedIds(new int[]{gVar.f41068b.getId(), gVar.f41086t.getId()});
                    g1Var.f30257b.f41077k.setAccessibilityTraversalAfter(m4.f30458r0);
                } else {
                    throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
                }
            } else {
                throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
            }
        }
        androidx.core.view.y.a(gVar.f41068b, new Runnable() { // from class: jo.f1
            @Override // java.lang.Runnable
            public final void run() {
                g1.p(g1.this);
            }
        });
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void p(g1 g1Var) {
        g1Var.l();
    }

    private final void q(boolean z10) {
        if (this.f30260e == z10) {
            return;
        }
        this.f30260e = z10;
        no.g gVar = this.f30257b;
        androidx.transition.a0 m02 = new androidx.transition.a0().w0(new androidx.transition.e(3)).w0(new androidx.transition.b()).w0(new androidx.transition.c()).w0(new androidx.transition.d()).G0(0).m0(300L);
        Intrinsics.checkNotNullExpressionValue(m02, "setDuration(...)");
        androidx.transition.x.a(gVar.getRoot(), m02);
        if (z10) {
            gVar.f41084r.setVisibility(0);
            gVar.f41074h.setVisibility(4);
            gVar.f41068b.setVisibility(4);
            gVar.f41086t.setVisibility(4);
            gVar.f41080n.setVisibility(4);
            return;
        }
        gVar.f41084r.setVisibility(4);
        gVar.f41074h.setVisibility(0);
        gVar.f41068b.setVisibility(0);
        gVar.f41086t.setVisibility(0);
        gVar.f41080n.setVisibility(0);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void s(no.g gVar) {
        ObjectAnimator duration = ObjectAnimator.ofFloat(gVar.f41075i, "alpha", 0.9f, 0.0f).setDuration(500L);
        duration.setInterpolator(new LinearInterpolator());
        duration.start();
        gVar.getRoot().setHapticFeedbackEnabled(true);
        gVar.getRoot().performHapticFeedback(1, 2);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void t(no.g gVar, l5.i iVar) {
        gVar.f41081o.setProgress(1.0f);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit u(no.g gVar, f5.e eVar) {
        int i10 = kotlin.ranges.d.i(gVar.f41087u.getMeasuredWidth(), 2000);
        if (i10 > 0) {
            gVar.f41087u.setTag(m4.f30436g0, eVar.k());
            ImageView reviewImage = gVar.f41087u;
            Intrinsics.checkNotNullExpressionValue(reviewImage, "reviewImage");
            File file = new File(eVar.k());
            v4.h j10 = eVar.j();
            h.a r10 = new h.a(reviewImage.getContext()).d(file).r(reviewImage);
            r10.o(i10, i10);
            r10.h(eVar.k());
            j10.a(r10.a());
        }
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit v(f5.e eVar) {
        eVar.p().invoke();
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit w(f5.e eVar) {
        eVar.e().invoke();
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void x(f5.e eVar, View view) {
        eVar.a().invoke();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void y(f5.e eVar, View view) {
        eVar.p().invoke();
    }

    @Override // dn.k
    /* renamed from: r */
    public void a(final f5.e rendering, dn.a0 viewEnvironment) {
        String str;
        int i10;
        int i11;
        int i12;
        RemoteImage remoteImage;
        Intrinsics.checkNotNullParameter(rendering, "rendering");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
        final no.g gVar = this.f30257b;
        if (!gVar.f41069c.isChecked()) {
            gVar.f41069c.setChecked(true);
            gVar.getRoot().post(new Runnable() { // from class: jo.x0
                @Override // java.lang.Runnable
                public final void run() {
                    g1.s(no.g.this);
                }
            });
        } else {
            gVar.f41081o.j(new l5.z() { // from class: jo.y0
                @Override // l5.z
                public final void a(l5.i iVar) {
                    g1.t(no.g.this, iVar);
                }
            });
        }
        Object tag = gVar.f41087u.getTag(m4.f30436g0);
        if (tag instanceof String) {
            str = (String) tag;
        } else {
            str = null;
        }
        if (!Intrinsics.areEqual(str, rendering.k())) {
            ImageView reviewImage = gVar.f41087u;
            Intrinsics.checkNotNullExpressionValue(reviewImage, "reviewImage");
            bq.s.b(reviewImage, new Function0() { // from class: jo.z0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit u10;
                    u10 = g1.u(no.g.this, rendering);
                    return u10;
                }
            });
        }
        gVar.f41083q.setText(rendering.l());
        ImageView imageView = gVar.f41073g;
        if (StringsKt.k0(rendering.g())) {
            i10 = 8;
        } else {
            i10 = 0;
        }
        imageView.setVisibility(i10);
        TextView textView = gVar.f41072f;
        if (StringsKt.k0(rendering.g())) {
            i11 = 8;
        } else {
            i11 = 0;
        }
        textView.setVisibility(i11);
        gVar.f41072f.setText(rendering.g());
        gVar.f41068b.setText(rendering.b());
        gVar.f41086t.setText(rendering.q());
        gVar.f41090x.setText(rendering.f());
        TextView textView2 = gVar.f41090x;
        CharSequence text = textView2.getText();
        Intrinsics.checkNotNullExpressionValue(text, "getText(...)");
        if (text.length() == 0) {
            i12 = 8;
        } else {
            i12 = 0;
        }
        textView2.setVisibility(i12);
        Context context = gVar.getRoot().getContext();
        View view = gVar.f41078l;
        Intrinsics.checkNotNull(context);
        view.setBackground(f4.a(context, jp.a.f30819k));
        if (rp.s.b(context, jp.a.f30816h, null, false, false, 14, null)) {
            gVar.f41083q.setGravity(17);
            TextView overlayText = gVar.f41083q;
            Intrinsics.checkNotNullExpressionValue(overlayText, "overlayText");
            ViewGroup.LayoutParams layoutParams = overlayText.getLayoutParams();
            if (layoutParams != null) {
                ViewGroup.MarginLayoutParams marginLayoutParams = (ViewGroup.MarginLayoutParams) layoutParams;
                marginLayoutParams.setMarginStart(0);
                overlayText.setLayoutParams(marginLayoutParams);
            } else {
                throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.MarginLayoutParams");
            }
        }
        Integer f10 = rp.s.f(context, jp.a.f30824p, null, false, 6, null);
        if (f10 != null) {
            gVar.f41073g.setImageResource(f10.intValue());
        }
        i4 b10 = f4.b(context, rendering.o());
        gVar.f41079m.setImageResource(b10.a());
        NextStep.GovernmentId.AssetConfig.CapturePage c10 = rendering.c();
        if (c10 != null) {
            remoteImage = jo.a.a(c10, rendering.i(), rendering.d());
        } else {
            remoteImage = null;
        }
        if (remoteImage != null) {
            if (this.f30259d == null) {
                ConstraintLayout overlayIconContainer = gVar.f41082p;
                Intrinsics.checkNotNullExpressionValue(overlayIconContainer, "overlayIconContainer");
                this.f30259d = mq.b.c(remoteImage, overlayIconContainer, false, 2, null);
                gVar.f41081o.setVisibility(8);
            }
        } else {
            gVar.f41081o.setAnimation(b10.b());
        }
        zp.a m10 = rendering.m();
        Function0 function0 = new Function0() { // from class: jo.a1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit v10;
                v10 = g1.v(f5.e.this);
                return v10;
            }
        };
        Function0 function02 = new Function0() { // from class: jo.b1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit w10;
                w10 = g1.w(f5.e.this);
                return w10;
            }
        };
        Pi2NavigationBar navigationBar = gVar.f41077k;
        Intrinsics.checkNotNullExpressionValue(navigationBar, "navigationBar");
        FrameLayout root = gVar.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        zp.e.b(m10, function0, function02, navigationBar, root);
        gVar.f41068b.setOnClickListener(new View.OnClickListener() { // from class: jo.c1
            @Override // android.view.View.OnClickListener
            public final void onClick(View view2) {
                g1.x(f5.e.this, view2);
            }
        });
        gVar.f41086t.setOnClickListener(new View.OnClickListener() { // from class: jo.d1
            @Override // android.view.View.OnClickListener
            public final void onClick(View view2) {
                g1.y(f5.e.this, view2);
            }
        });
        gVar.f41068b.setEnabled(rendering.u());
        gVar.f41086t.setEnabled(rendering.u());
        if (rendering.t()) {
            q(true);
        } else {
            q(false);
        }
        StepStyles.GovernmentIdStepStyle s10 = rendering.s();
        if (s10 != null) {
            k(s10);
            aq.c.a(viewEnvironment, androidx.core.content.a.c(this.f30257b.getRoot().getContext(), rp.j.f49111a));
        }
        n(this, rendering.r(), 0L, 2, null);
        CoordinatorLayout cameraScreenContent = this.f30257b.f41070d;
        Intrinsics.checkNotNullExpressionValue(cameraScreenContent, "cameraScreenContent");
        rp.z.b(cameraScreenContent, rendering.h(), rendering.n(), null, 0, 0, 56, null);
    }
}
