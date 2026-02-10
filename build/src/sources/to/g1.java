package to;

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
import g5.h;
import gn.k;
import java.io.File;
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
import to.f5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g1 implements gn.k {

    /* renamed from: f  reason: collision with root package name */
    public static final a f49199f = new a(null);

    /* renamed from: b  reason: collision with root package name */
    private final xo.g f49200b;

    /* renamed from: c  reason: collision with root package name */
    private final ConstraintSet f49201c;

    /* renamed from: d  reason: collision with root package name */
    private View f49202d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f49203e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements gn.c0 {

        /* renamed from: a  reason: collision with root package name */
        private final /* synthetic */ gn.c0 f49204a;

        /* renamed from: to.g1$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        /* synthetic */ class C0671a extends FunctionReferenceImpl implements Function3 {

            /* renamed from: d  reason: collision with root package name */
            public static final C0671a f49205d = new C0671a();

            C0671a() {
                super(3, xo.g.class, "inflate", "inflate(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Z)Lcom/withpersona/sdk2/inquiry/governmentid/databinding/Pi2GovernmentidReviewBinding;", 0);
            }

            public final xo.g a(LayoutInflater p02, ViewGroup viewGroup, boolean z10) {
                Intrinsics.checkNotNullParameter(p02, "p0");
                return xo.g.c(p02, viewGroup, z10);
            }

            @Override // kotlin.jvm.functions.Function3
            public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3) {
                return a((LayoutInflater) obj, (ViewGroup) obj2, ((Boolean) obj3).booleanValue());
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        /* synthetic */ class b extends FunctionReferenceImpl implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final b f49206d = new b();

            b() {
                super(1, g1.class, "<init>", "<init>(Lcom/withpersona/sdk2/inquiry/governmentid/databinding/Pi2GovernmentidReviewBinding;)V", 0);
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public final g1 invoke(xo.g p02) {
                Intrinsics.checkNotNullParameter(p02, "p0");
                return new g1(p02);
            }
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @Override // gn.c0
        /* renamed from: b */
        public View a(f5.e initialRendering, gn.a0 initialViewEnvironment, Context contextForNewView, ViewGroup viewGroup) {
            Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
            Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
            Intrinsics.checkNotNullParameter(contextForNewView, "contextForNewView");
            return this.f49204a.a(initialRendering, initialViewEnvironment, contextForNewView, viewGroup);
        }

        @Override // gn.c0
        public KClass getType() {
            return this.f49204a.getType();
        }

        private a() {
            k.a aVar = gn.k.f25848a;
            this.f49204a = new gn.z(Reflection.getOrCreateKotlinClass(f5.e.class), C0671a.f49205d, b.f49206d);
        }
    }

    public g1(xo.g binding) {
        Intrinsics.checkNotNullParameter(binding, "binding");
        this.f49200b = binding;
        this.f49201c = new ConstraintSet();
        CoordinatorLayout cameraScreenContent = binding.f55020d;
        Intrinsics.checkNotNullExpressionValue(cameraScreenContent, "cameraScreenContent");
        lq.f.d(cameraScreenContent, false, false, false, false, 15, null);
        ThemeableLottieAnimationView themeableLottieAnimationView = binding.f55031o;
        int parseColor = Color.parseColor("#43957D");
        Context context = binding.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        themeableLottieAnimationView.I(parseColor, bq.s.d(context, f.a.f23298w, null, false, 6, null));
    }

    private final Unit k(StepStyles.GovernmentIdStepStyle governmentIdStepStyle) {
        int i10;
        String str;
        StyleElements.FontWeight fontWeight;
        StepStyles.StepTextBasedComponentStyleContainer base;
        TextBasedComponentStyle base2;
        StepStyles.StepTextBasedComponentStyleContainer base3;
        TextBasedComponentStyle base4;
        xo.g gVar = this.f49200b;
        float a10 = (float) bq.h.a(8.0d);
        int a11 = (int) bq.h.a(3.0d);
        TextBasedComponentStyle titleStyleValue = governmentIdStepStyle.getTitleStyleValue();
        if (titleStyleValue != null) {
            TextView title = this.f49200b.f55040x;
            Intrinsics.checkNotNullExpressionValue(title, "title");
            uq.f0.n(title, titleStyleValue, null, 2, null);
            this.f49200b.f55040x.setTextColor(-1);
        }
        TextBasedComponentStyle governmentIdCaptureHintTextStyle = governmentIdStepStyle.getGovernmentIdCaptureHintTextStyle();
        if (governmentIdCaptureHintTextStyle != null) {
            TextView overlayText = this.f49200b.f55033q;
            Intrinsics.checkNotNullExpressionValue(overlayText, "overlayText");
            uq.f0.m(overlayText, governmentIdCaptureHintTextStyle, kotlin.collections.x0.c(uq.b0.f50918d));
        }
        Integer governmentIdReviewImageBoxBorderColorValue = governmentIdStepStyle.getGovernmentIdReviewImageBoxBorderColorValue();
        if (governmentIdReviewImageBoxBorderColorValue != null) {
            i10 = governmentIdReviewImageBoxBorderColorValue.intValue();
            gVar.f55035s.setIndeterminateTintList(new ColorStateList(new int[][]{new int[0]}, new int[]{i10}));
        } else {
            i10 = -1;
        }
        TextView disclaimer = this.f49200b.f55022f;
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
        uq.f0.j(disclaimer, str, fontWeight, null, 4, null);
        Double governmentIdReviewImageBoxBorderRadiusValue = governmentIdStepStyle.getGovernmentIdReviewImageBoxBorderRadiusValue();
        if (governmentIdReviewImageBoxBorderRadiusValue != null) {
            a10 = (float) bq.h.a(governmentIdReviewImageBoxBorderRadiusValue.doubleValue());
        }
        Double governmentIdReviewImageBoxBorderWidthValue = governmentIdStepStyle.getGovernmentIdReviewImageBoxBorderWidthValue();
        if (governmentIdReviewImageBoxBorderWidthValue != null) {
            a11 = (int) Math.ceil(bq.h.a(governmentIdReviewImageBoxBorderWidthValue.doubleValue()));
        }
        gVar.f55038v.setRadius(a11 + a10);
        View view = gVar.f55028l;
        GradientDrawable gradientDrawable = new GradientDrawable();
        gradientDrawable.setCornerRadius(a10);
        gradientDrawable.setStroke(a11, i10);
        view.setBackground(gradientDrawable);
        ConstraintLayout constraintLayout = gVar.f55030n;
        GradientDrawable gradientDrawable2 = new GradientDrawable();
        gradientDrawable2.setColor(-1);
        gradientDrawable2.setCornerRadii(new float[]{0.0f, 0.0f, 0.0f, 0.0f, a10, a10, a10, a10});
        constraintLayout.setBackground(new InsetDrawable((Drawable) gradientDrawable2, (int) bq.h.a(6.0d)));
        ButtonSubmitComponentStyle submitPhotoButtonStyleValue = governmentIdStepStyle.getSubmitPhotoButtonStyleValue();
        if (submitPhotoButtonStyleValue != null) {
            Button acceptButton = gVar.f55018b;
            Intrinsics.checkNotNullExpressionValue(acceptButton, "acceptButton");
            uq.e.f(acceptButton, submitPhotoButtonStyleValue, false, false, 2, null);
        }
        ButtonCancelComponentStyle retakePhotoButtonStyleValue = governmentIdStepStyle.getRetakePhotoButtonStyleValue();
        if (retakePhotoButtonStyleValue != null) {
            Button retryButton = gVar.f55036t;
            Intrinsics.checkNotNullExpressionValue(retryButton, "retryButton");
            uq.e.f(retryButton, retakePhotoButtonStyleValue, false, false, 2, null);
        }
        Integer captureHintIconStrokeColor = governmentIdStepStyle.getCaptureHintIconStrokeColor();
        if (captureHintIconStrokeColor != null) {
            this.f49200b.f55031o.I(Color.parseColor("#000000"), captureHintIconStrokeColor.intValue());
        }
        Integer captureHintIconFillColor = governmentIdStepStyle.getCaptureHintIconFillColor();
        if (captureHintIconFillColor != null) {
            this.f49200b.f55031o.I(Color.parseColor("#43957D"), captureHintIconFillColor.intValue());
        }
        Integer capturePageHeaderIconColorValue = governmentIdStepStyle.getCapturePageHeaderIconColorValue();
        if (capturePageHeaderIconColorValue == null) {
            return null;
        }
        this.f49200b.f55027k.setControlsColor(capturePageHeaderIconColorValue.intValue());
        return Unit.f31987a;
    }

    private final void l() {
        xo.g gVar = this.f49200b;
        if (gVar.f55018b.getTop() < gVar.f55024h.getBottom() + gVar.getRoot().getContext().getResources().getDimensionPixelOffset(k4.f49338a)) {
            this.f49201c.e(gVar.getRoot().getContext(), n4.f49543h);
            androidx.transition.x.a(this.f49200b.f55020d, new androidx.transition.a());
            this.f49201c.c(this.f49200b.f55021e);
        }
    }

    private final void m(final StyleElements.Axis axis, final long j10) {
        final xo.g gVar = this.f49200b;
        Button acceptButton = gVar.f55018b;
        Intrinsics.checkNotNullExpressionValue(acceptButton, "acceptButton");
        lq.s.b(acceptButton, new Function0() { // from class: to.e1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit o10;
                o10 = g1.o(xo.g.this, j10, this, axis);
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
    public static final Unit o(xo.g gVar, long j10, final g1 g1Var, StyleElements.Axis axis) {
        boolean z10;
        boolean z11 = false;
        if (gVar.f55018b.getLineCount() != 0 && gVar.f55036t.getLineCount() != 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (System.currentTimeMillis() - j10 > 300) {
            z11 = true;
        }
        if (!z10 && !z11) {
            g1Var.m(axis, j10);
            return Unit.f31987a;
        }
        if (z10 && (gVar.f55018b.getLineCount() > 1 || gVar.f55036t.getLineCount() > 1 || axis == StyleElements.Axis.VERTICAL)) {
            Button acceptButton = gVar.f55018b;
            Intrinsics.checkNotNullExpressionValue(acceptButton, "acceptButton");
            ViewGroup.LayoutParams layoutParams = acceptButton.getLayoutParams();
            if (layoutParams != null) {
                layoutParams.width = gVar.f55026j.getWidth();
                acceptButton.setLayoutParams(layoutParams);
                Button retryButton = gVar.f55036t;
                Intrinsics.checkNotNullExpressionValue(retryButton, "retryButton");
                ViewGroup.LayoutParams layoutParams2 = retryButton.getLayoutParams();
                if (layoutParams2 != null) {
                    layoutParams2.width = gVar.f55026j.getWidth();
                    retryButton.setLayoutParams(layoutParams2);
                    gVar.f55026j.setReferencedIds(new int[]{gVar.f55018b.getId(), gVar.f55036t.getId()});
                    g1Var.f49200b.f55027k.setAccessibilityTraversalAfter(m4.f49401r0);
                } else {
                    throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
                }
            } else {
                throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
            }
        }
        androidx.core.view.z.a(gVar.f55018b, new Runnable() { // from class: to.f1
            @Override // java.lang.Runnable
            public final void run() {
                g1.p(g1.this);
            }
        });
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void p(g1 g1Var) {
        g1Var.l();
    }

    private final void q(boolean z10) {
        if (this.f49203e == z10) {
            return;
        }
        this.f49203e = z10;
        xo.g gVar = this.f49200b;
        androidx.transition.a0 o02 = new androidx.transition.a0().y0(new androidx.transition.e(3)).y0(new androidx.transition.b()).y0(new androidx.transition.c()).y0(new androidx.transition.d()).H0(0).o0(300L);
        Intrinsics.checkNotNullExpressionValue(o02, "setDuration(...)");
        androidx.transition.x.a(gVar.getRoot(), o02);
        if (z10) {
            gVar.f55034r.setVisibility(0);
            gVar.f55024h.setVisibility(4);
            gVar.f55018b.setVisibility(4);
            gVar.f55036t.setVisibility(4);
            gVar.f55030n.setVisibility(4);
            return;
        }
        gVar.f55034r.setVisibility(4);
        gVar.f55024h.setVisibility(0);
        gVar.f55018b.setVisibility(0);
        gVar.f55036t.setVisibility(0);
        gVar.f55030n.setVisibility(0);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void s(xo.g gVar) {
        ObjectAnimator duration = ObjectAnimator.ofFloat(gVar.f55025i, "alpha", 0.9f, 0.0f).setDuration(500L);
        duration.setInterpolator(new LinearInterpolator());
        duration.start();
        gVar.getRoot().setHapticFeedbackEnabled(true);
        gVar.getRoot().performHapticFeedback(1, 2);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void t(xo.g gVar, l5.i iVar) {
        gVar.f55031o.setProgress(1.0f);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit u(xo.g gVar, f5.e eVar) {
        int i10 = kotlin.ranges.d.i(gVar.f55037u.getMeasuredWidth(), 2000);
        if (i10 > 0) {
            gVar.f55037u.setTag(m4.f49379g0, eVar.k());
            ImageView reviewImage = gVar.f55037u;
            Intrinsics.checkNotNullExpressionValue(reviewImage, "reviewImage");
            File file = new File(eVar.k());
            v4.h j10 = eVar.j();
            h.a r10 = new h.a(reviewImage.getContext()).d(file).r(reviewImage);
            r10.o(i10, i10);
            r10.h(eVar.k());
            j10.a(r10.a());
        }
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit v(f5.e eVar) {
        eVar.p().invoke();
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit w(f5.e eVar) {
        eVar.e().invoke();
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void x(f5.e eVar, View view) {
        eVar.a().invoke();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void y(f5.e eVar, View view) {
        eVar.p().invoke();
    }

    @Override // gn.k
    /* renamed from: r */
    public void a(final f5.e rendering, gn.a0 viewEnvironment) {
        String str;
        int i10;
        int i11;
        int i12;
        RemoteImage remoteImage;
        Intrinsics.checkNotNullParameter(rendering, "rendering");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
        final xo.g gVar = this.f49200b;
        if (!gVar.f55019c.isChecked()) {
            gVar.f55019c.setChecked(true);
            gVar.getRoot().post(new Runnable() { // from class: to.x0
                @Override // java.lang.Runnable
                public final void run() {
                    g1.s(xo.g.this);
                }
            });
        } else {
            gVar.f55031o.j(new l5.a0() { // from class: to.y0
                @Override // l5.a0
                public final void a(l5.i iVar) {
                    g1.t(xo.g.this, iVar);
                }
            });
        }
        Object tag = gVar.f55037u.getTag(m4.f49379g0);
        if (tag instanceof String) {
            str = (String) tag;
        } else {
            str = null;
        }
        if (!Intrinsics.areEqual(str, rendering.k())) {
            ImageView reviewImage = gVar.f55037u;
            Intrinsics.checkNotNullExpressionValue(reviewImage, "reviewImage");
            lq.s.b(reviewImage, new Function0() { // from class: to.z0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit u10;
                    u10 = g1.u(xo.g.this, rendering);
                    return u10;
                }
            });
        }
        gVar.f55033q.setText(rendering.l());
        ImageView imageView = gVar.f55023g;
        if (StringsKt.k0(rendering.g())) {
            i10 = 8;
        } else {
            i10 = 0;
        }
        imageView.setVisibility(i10);
        TextView textView = gVar.f55022f;
        if (StringsKt.k0(rendering.g())) {
            i11 = 8;
        } else {
            i11 = 0;
        }
        textView.setVisibility(i11);
        gVar.f55022f.setText(rendering.g());
        gVar.f55018b.setText(rendering.b());
        gVar.f55036t.setText(rendering.q());
        gVar.f55040x.setText(rendering.f());
        TextView textView2 = gVar.f55040x;
        CharSequence text = textView2.getText();
        Intrinsics.checkNotNullExpressionValue(text, "getText(...)");
        if (text.length() == 0) {
            i12 = 8;
        } else {
            i12 = 0;
        }
        textView2.setVisibility(i12);
        Context context = gVar.getRoot().getContext();
        View view = gVar.f55028l;
        Intrinsics.checkNotNull(context);
        view.setBackground(f4.a(context, tp.a.f49762k));
        if (bq.s.b(context, tp.a.f49759h, null, false, false, 14, null)) {
            gVar.f55033q.setGravity(17);
            TextView overlayText = gVar.f55033q;
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
        Integer f10 = bq.s.f(context, tp.a.f49767p, null, false, 6, null);
        if (f10 != null) {
            gVar.f55023g.setImageResource(f10.intValue());
        }
        i4 b10 = f4.b(context, rendering.o());
        gVar.f55029m.setImageResource(b10.a());
        NextStep.GovernmentId.AssetConfig.CapturePage c10 = rendering.c();
        if (c10 != null) {
            remoteImage = to.a.a(c10, rendering.i(), rendering.d());
        } else {
            remoteImage = null;
        }
        if (remoteImage != null) {
            if (this.f49202d == null) {
                ConstraintLayout overlayIconContainer = gVar.f55032p;
                Intrinsics.checkNotNullExpressionValue(overlayIconContainer, "overlayIconContainer");
                this.f49202d = wq.b.c(remoteImage, overlayIconContainer, false, 2, null);
                gVar.f55031o.setVisibility(8);
            }
        } else {
            gVar.f55031o.setAnimation(b10.b());
        }
        jq.a m10 = rendering.m();
        Function0 function0 = new Function0() { // from class: to.a1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit v10;
                v10 = g1.v(f5.e.this);
                return v10;
            }
        };
        Function0 function02 = new Function0() { // from class: to.b1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit w10;
                w10 = g1.w(f5.e.this);
                return w10;
            }
        };
        Pi2NavigationBar navigationBar = gVar.f55027k;
        Intrinsics.checkNotNullExpressionValue(navigationBar, "navigationBar");
        FrameLayout root = gVar.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        jq.e.b(m10, function0, function02, navigationBar, root);
        gVar.f55018b.setOnClickListener(new View.OnClickListener() { // from class: to.c1
            @Override // android.view.View.OnClickListener
            public final void onClick(View view2) {
                g1.x(f5.e.this, view2);
            }
        });
        gVar.f55036t.setOnClickListener(new View.OnClickListener() { // from class: to.d1
            @Override // android.view.View.OnClickListener
            public final void onClick(View view2) {
                g1.y(f5.e.this, view2);
            }
        });
        gVar.f55018b.setEnabled(rendering.u());
        gVar.f55036t.setEnabled(rendering.u());
        if (rendering.t()) {
            q(true);
        } else {
            q(false);
        }
        StepStyles.GovernmentIdStepStyle s10 = rendering.s();
        if (s10 != null) {
            k(s10);
            kq.c.a(viewEnvironment, androidx.core.content.a.c(this.f49200b.getRoot().getContext(), bq.j.f7365a));
        }
        n(this, rendering.r(), 0L, 2, null);
        CoordinatorLayout cameraScreenContent = this.f49200b.f55020d;
        Intrinsics.checkNotNullExpressionValue(cameraScreenContent, "cameraScreenContent");
        bq.z.b(cameraScreenContent, rendering.h(), rendering.n(), null, 0, 0, 56, null);
    }
}
