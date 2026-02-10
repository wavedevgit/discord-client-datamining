package ko;

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
import en.k;
import g5.h;
import java.io.File;
import ko.f5;
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
public final class g1 implements en.k {

    /* renamed from: f  reason: collision with root package name */
    public static final a f31207f = new a(null);

    /* renamed from: b  reason: collision with root package name */
    private final oo.g f31208b;

    /* renamed from: c  reason: collision with root package name */
    private final ConstraintSet f31209c;

    /* renamed from: d  reason: collision with root package name */
    private View f31210d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f31211e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements en.c0 {

        /* renamed from: a  reason: collision with root package name */
        private final /* synthetic */ en.c0 f31212a;

        /* renamed from: ko.g1$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        /* synthetic */ class C0473a extends FunctionReferenceImpl implements Function3 {

            /* renamed from: d  reason: collision with root package name */
            public static final C0473a f31213d = new C0473a();

            C0473a() {
                super(3, oo.g.class, "inflate", "inflate(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Z)Lcom/withpersona/sdk2/inquiry/governmentid/databinding/Pi2GovernmentidReviewBinding;", 0);
            }

            public final oo.g a(LayoutInflater p02, ViewGroup viewGroup, boolean z10) {
                Intrinsics.checkNotNullParameter(p02, "p0");
                return oo.g.c(p02, viewGroup, z10);
            }

            @Override // kotlin.jvm.functions.Function3
            public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3) {
                return a((LayoutInflater) obj, (ViewGroup) obj2, ((Boolean) obj3).booleanValue());
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        /* synthetic */ class b extends FunctionReferenceImpl implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final b f31214d = new b();

            b() {
                super(1, g1.class, "<init>", "<init>(Lcom/withpersona/sdk2/inquiry/governmentid/databinding/Pi2GovernmentidReviewBinding;)V", 0);
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public final g1 invoke(oo.g p02) {
                Intrinsics.checkNotNullParameter(p02, "p0");
                return new g1(p02);
            }
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @Override // en.c0
        /* renamed from: b */
        public View a(f5.e initialRendering, en.a0 initialViewEnvironment, Context contextForNewView, ViewGroup viewGroup) {
            Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
            Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
            Intrinsics.checkNotNullParameter(contextForNewView, "contextForNewView");
            return this.f31212a.a(initialRendering, initialViewEnvironment, contextForNewView, viewGroup);
        }

        @Override // en.c0
        public KClass getType() {
            return this.f31212a.getType();
        }

        private a() {
            k.a aVar = en.k.f21834a;
            this.f31212a = new en.z(Reflection.getOrCreateKotlinClass(f5.e.class), C0473a.f31213d, b.f31214d);
        }
    }

    public g1(oo.g binding) {
        Intrinsics.checkNotNullParameter(binding, "binding");
        this.f31208b = binding;
        this.f31209c = new ConstraintSet();
        CoordinatorLayout cameraScreenContent = binding.f42497d;
        Intrinsics.checkNotNullExpressionValue(cameraScreenContent, "cameraScreenContent");
        cq.f.d(cameraScreenContent, false, false, false, false, 15, null);
        ThemeableLottieAnimationView themeableLottieAnimationView = binding.f42508o;
        int parseColor = Color.parseColor("#43957D");
        Context context = binding.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        themeableLottieAnimationView.I(parseColor, sp.s.d(context, f.a.f22174v, null, false, 6, null));
    }

    private final Unit k(StepStyles.GovernmentIdStepStyle governmentIdStepStyle) {
        int i10;
        String str;
        StyleElements.FontWeight fontWeight;
        StepStyles.StepTextBasedComponentStyleContainer base;
        TextBasedComponentStyle base2;
        StepStyles.StepTextBasedComponentStyleContainer base3;
        TextBasedComponentStyle base4;
        oo.g gVar = this.f31208b;
        float a10 = (float) sp.h.a(8.0d);
        int a11 = (int) sp.h.a(3.0d);
        TextBasedComponentStyle titleStyleValue = governmentIdStepStyle.getTitleStyleValue();
        if (titleStyleValue != null) {
            TextView title = this.f31208b.f42517x;
            Intrinsics.checkNotNullExpressionValue(title, "title");
            lq.f0.n(title, titleStyleValue, null, 2, null);
            this.f31208b.f42517x.setTextColor(-1);
        }
        TextBasedComponentStyle governmentIdCaptureHintTextStyle = governmentIdStepStyle.getGovernmentIdCaptureHintTextStyle();
        if (governmentIdCaptureHintTextStyle != null) {
            TextView overlayText = this.f31208b.f42510q;
            Intrinsics.checkNotNullExpressionValue(overlayText, "overlayText");
            lq.f0.m(overlayText, governmentIdCaptureHintTextStyle, kotlin.collections.x0.c(lq.b0.f36313d));
        }
        Integer governmentIdReviewImageBoxBorderColorValue = governmentIdStepStyle.getGovernmentIdReviewImageBoxBorderColorValue();
        if (governmentIdReviewImageBoxBorderColorValue != null) {
            i10 = governmentIdReviewImageBoxBorderColorValue.intValue();
            gVar.f42512s.setIndeterminateTintList(new ColorStateList(new int[][]{new int[0]}, new int[]{i10}));
        } else {
            i10 = -1;
        }
        TextView disclaimer = this.f31208b.f42499f;
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
        lq.f0.j(disclaimer, str, fontWeight, null, 4, null);
        Double governmentIdReviewImageBoxBorderRadiusValue = governmentIdStepStyle.getGovernmentIdReviewImageBoxBorderRadiusValue();
        if (governmentIdReviewImageBoxBorderRadiusValue != null) {
            a10 = (float) sp.h.a(governmentIdReviewImageBoxBorderRadiusValue.doubleValue());
        }
        Double governmentIdReviewImageBoxBorderWidthValue = governmentIdStepStyle.getGovernmentIdReviewImageBoxBorderWidthValue();
        if (governmentIdReviewImageBoxBorderWidthValue != null) {
            a11 = (int) Math.ceil(sp.h.a(governmentIdReviewImageBoxBorderWidthValue.doubleValue()));
        }
        gVar.f42515v.setRadius(a11 + a10);
        View view = gVar.f42505l;
        GradientDrawable gradientDrawable = new GradientDrawable();
        gradientDrawable.setCornerRadius(a10);
        gradientDrawable.setStroke(a11, i10);
        view.setBackground(gradientDrawable);
        ConstraintLayout constraintLayout = gVar.f42507n;
        GradientDrawable gradientDrawable2 = new GradientDrawable();
        gradientDrawable2.setColor(-1);
        gradientDrawable2.setCornerRadii(new float[]{0.0f, 0.0f, 0.0f, 0.0f, a10, a10, a10, a10});
        constraintLayout.setBackground(new InsetDrawable((Drawable) gradientDrawable2, (int) sp.h.a(6.0d)));
        ButtonSubmitComponentStyle submitPhotoButtonStyleValue = governmentIdStepStyle.getSubmitPhotoButtonStyleValue();
        if (submitPhotoButtonStyleValue != null) {
            Button acceptButton = gVar.f42495b;
            Intrinsics.checkNotNullExpressionValue(acceptButton, "acceptButton");
            lq.e.f(acceptButton, submitPhotoButtonStyleValue, false, false, 2, null);
        }
        ButtonCancelComponentStyle retakePhotoButtonStyleValue = governmentIdStepStyle.getRetakePhotoButtonStyleValue();
        if (retakePhotoButtonStyleValue != null) {
            Button retryButton = gVar.f42513t;
            Intrinsics.checkNotNullExpressionValue(retryButton, "retryButton");
            lq.e.f(retryButton, retakePhotoButtonStyleValue, false, false, 2, null);
        }
        Integer captureHintIconStrokeColor = governmentIdStepStyle.getCaptureHintIconStrokeColor();
        if (captureHintIconStrokeColor != null) {
            this.f31208b.f42508o.I(Color.parseColor("#000000"), captureHintIconStrokeColor.intValue());
        }
        Integer captureHintIconFillColor = governmentIdStepStyle.getCaptureHintIconFillColor();
        if (captureHintIconFillColor != null) {
            this.f31208b.f42508o.I(Color.parseColor("#43957D"), captureHintIconFillColor.intValue());
        }
        Integer capturePageHeaderIconColorValue = governmentIdStepStyle.getCapturePageHeaderIconColorValue();
        if (capturePageHeaderIconColorValue == null) {
            return null;
        }
        this.f31208b.f42504k.setControlsColor(capturePageHeaderIconColorValue.intValue());
        return Unit.f31765a;
    }

    private final void l() {
        oo.g gVar = this.f31208b;
        if (gVar.f42495b.getTop() < gVar.f42501h.getBottom() + gVar.getRoot().getContext().getResources().getDimensionPixelOffset(k4.f31346a)) {
            this.f31209c.e(gVar.getRoot().getContext(), n4.f31551h);
            androidx.transition.x.a(this.f31208b.f42497d, new androidx.transition.a());
            this.f31209c.c(this.f31208b.f42498e);
        }
    }

    private final void m(final StyleElements.Axis axis, final long j10) {
        final oo.g gVar = this.f31208b;
        Button acceptButton = gVar.f42495b;
        Intrinsics.checkNotNullExpressionValue(acceptButton, "acceptButton");
        cq.s.b(acceptButton, new Function0() { // from class: ko.e1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit o10;
                o10 = g1.o(oo.g.this, j10, this, axis);
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
    public static final Unit o(oo.g gVar, long j10, final g1 g1Var, StyleElements.Axis axis) {
        boolean z10;
        boolean z11 = false;
        if (gVar.f42495b.getLineCount() != 0 && gVar.f42513t.getLineCount() != 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (System.currentTimeMillis() - j10 > 300) {
            z11 = true;
        }
        if (!z10 && !z11) {
            g1Var.m(axis, j10);
            return Unit.f31765a;
        }
        if (z10 && (gVar.f42495b.getLineCount() > 1 || gVar.f42513t.getLineCount() > 1 || axis == StyleElements.Axis.VERTICAL)) {
            Button acceptButton = gVar.f42495b;
            Intrinsics.checkNotNullExpressionValue(acceptButton, "acceptButton");
            ViewGroup.LayoutParams layoutParams = acceptButton.getLayoutParams();
            if (layoutParams != null) {
                layoutParams.width = gVar.f42503j.getWidth();
                acceptButton.setLayoutParams(layoutParams);
                Button retryButton = gVar.f42513t;
                Intrinsics.checkNotNullExpressionValue(retryButton, "retryButton");
                ViewGroup.LayoutParams layoutParams2 = retryButton.getLayoutParams();
                if (layoutParams2 != null) {
                    layoutParams2.width = gVar.f42503j.getWidth();
                    retryButton.setLayoutParams(layoutParams2);
                    gVar.f42503j.setReferencedIds(new int[]{gVar.f42495b.getId(), gVar.f42513t.getId()});
                    g1Var.f31208b.f42504k.setAccessibilityTraversalAfter(m4.f31409r0);
                } else {
                    throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
                }
            } else {
                throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
            }
        }
        androidx.core.view.y.a(gVar.f42495b, new Runnable() { // from class: ko.f1
            @Override // java.lang.Runnable
            public final void run() {
                g1.p(g1.this);
            }
        });
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void p(g1 g1Var) {
        g1Var.l();
    }

    private final void q(boolean z10) {
        if (this.f31211e == z10) {
            return;
        }
        this.f31211e = z10;
        oo.g gVar = this.f31208b;
        androidx.transition.a0 m02 = new androidx.transition.a0().w0(new androidx.transition.e(3)).w0(new androidx.transition.b()).w0(new androidx.transition.c()).w0(new androidx.transition.d()).G0(0).m0(300L);
        Intrinsics.checkNotNullExpressionValue(m02, "setDuration(...)");
        androidx.transition.x.a(gVar.getRoot(), m02);
        if (z10) {
            gVar.f42511r.setVisibility(0);
            gVar.f42501h.setVisibility(4);
            gVar.f42495b.setVisibility(4);
            gVar.f42513t.setVisibility(4);
            gVar.f42507n.setVisibility(4);
            return;
        }
        gVar.f42511r.setVisibility(4);
        gVar.f42501h.setVisibility(0);
        gVar.f42495b.setVisibility(0);
        gVar.f42513t.setVisibility(0);
        gVar.f42507n.setVisibility(0);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void s(oo.g gVar) {
        ObjectAnimator duration = ObjectAnimator.ofFloat(gVar.f42502i, "alpha", 0.9f, 0.0f).setDuration(500L);
        duration.setInterpolator(new LinearInterpolator());
        duration.start();
        gVar.getRoot().setHapticFeedbackEnabled(true);
        gVar.getRoot().performHapticFeedback(1, 2);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void t(oo.g gVar, l5.i iVar) {
        gVar.f42508o.setProgress(1.0f);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit u(oo.g gVar, f5.e eVar) {
        int i10 = kotlin.ranges.d.i(gVar.f42514u.getMeasuredWidth(), 2000);
        if (i10 > 0) {
            gVar.f42514u.setTag(m4.f31387g0, eVar.k());
            ImageView reviewImage = gVar.f42514u;
            Intrinsics.checkNotNullExpressionValue(reviewImage, "reviewImage");
            File file = new File(eVar.k());
            v4.h j10 = eVar.j();
            h.a r10 = new h.a(reviewImage.getContext()).d(file).r(reviewImage);
            r10.o(i10, i10);
            r10.h(eVar.k());
            j10.a(r10.a());
        }
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit v(f5.e eVar) {
        eVar.p().invoke();
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit w(f5.e eVar) {
        eVar.e().invoke();
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void x(f5.e eVar, View view) {
        eVar.a().invoke();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void y(f5.e eVar, View view) {
        eVar.p().invoke();
    }

    @Override // en.k
    /* renamed from: r */
    public void a(final f5.e rendering, en.a0 viewEnvironment) {
        String str;
        int i10;
        int i11;
        int i12;
        RemoteImage remoteImage;
        Intrinsics.checkNotNullParameter(rendering, "rendering");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
        final oo.g gVar = this.f31208b;
        if (!gVar.f42496c.isChecked()) {
            gVar.f42496c.setChecked(true);
            gVar.getRoot().post(new Runnable() { // from class: ko.x0
                @Override // java.lang.Runnable
                public final void run() {
                    g1.s(oo.g.this);
                }
            });
        } else {
            gVar.f42508o.j(new l5.a0() { // from class: ko.y0
                @Override // l5.a0
                public final void a(l5.i iVar) {
                    g1.t(oo.g.this, iVar);
                }
            });
        }
        Object tag = gVar.f42514u.getTag(m4.f31387g0);
        if (tag instanceof String) {
            str = (String) tag;
        } else {
            str = null;
        }
        if (!Intrinsics.areEqual(str, rendering.k())) {
            ImageView reviewImage = gVar.f42514u;
            Intrinsics.checkNotNullExpressionValue(reviewImage, "reviewImage");
            cq.s.b(reviewImage, new Function0() { // from class: ko.z0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit u10;
                    u10 = g1.u(oo.g.this, rendering);
                    return u10;
                }
            });
        }
        gVar.f42510q.setText(rendering.l());
        ImageView imageView = gVar.f42500g;
        if (StringsKt.k0(rendering.g())) {
            i10 = 8;
        } else {
            i10 = 0;
        }
        imageView.setVisibility(i10);
        TextView textView = gVar.f42499f;
        if (StringsKt.k0(rendering.g())) {
            i11 = 8;
        } else {
            i11 = 0;
        }
        textView.setVisibility(i11);
        gVar.f42499f.setText(rendering.g());
        gVar.f42495b.setText(rendering.b());
        gVar.f42513t.setText(rendering.q());
        gVar.f42517x.setText(rendering.f());
        TextView textView2 = gVar.f42517x;
        CharSequence text = textView2.getText();
        Intrinsics.checkNotNullExpressionValue(text, "getText(...)");
        if (text.length() == 0) {
            i12 = 8;
        } else {
            i12 = 0;
        }
        textView2.setVisibility(i12);
        Context context = gVar.getRoot().getContext();
        View view = gVar.f42505l;
        Intrinsics.checkNotNull(context);
        view.setBackground(f4.a(context, kp.a.f34911k));
        if (sp.s.b(context, kp.a.f34908h, null, false, false, 14, null)) {
            gVar.f42510q.setGravity(17);
            TextView overlayText = gVar.f42510q;
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
        Integer f10 = sp.s.f(context, kp.a.f34916p, null, false, 6, null);
        if (f10 != null) {
            gVar.f42500g.setImageResource(f10.intValue());
        }
        i4 b10 = f4.b(context, rendering.o());
        gVar.f42506m.setImageResource(b10.a());
        NextStep.GovernmentId.AssetConfig.CapturePage c10 = rendering.c();
        if (c10 != null) {
            remoteImage = ko.a.a(c10, rendering.i(), rendering.d());
        } else {
            remoteImage = null;
        }
        if (remoteImage != null) {
            if (this.f31210d == null) {
                ConstraintLayout overlayIconContainer = gVar.f42509p;
                Intrinsics.checkNotNullExpressionValue(overlayIconContainer, "overlayIconContainer");
                this.f31210d = nq.b.c(remoteImage, overlayIconContainer, false, 2, null);
                gVar.f42508o.setVisibility(8);
            }
        } else {
            gVar.f42508o.setAnimation(b10.b());
        }
        aq.a m10 = rendering.m();
        Function0 function0 = new Function0() { // from class: ko.a1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit v10;
                v10 = g1.v(f5.e.this);
                return v10;
            }
        };
        Function0 function02 = new Function0() { // from class: ko.b1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit w10;
                w10 = g1.w(f5.e.this);
                return w10;
            }
        };
        Pi2NavigationBar navigationBar = gVar.f42504k;
        Intrinsics.checkNotNullExpressionValue(navigationBar, "navigationBar");
        FrameLayout root = gVar.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        aq.e.b(m10, function0, function02, navigationBar, root);
        gVar.f42495b.setOnClickListener(new View.OnClickListener() { // from class: ko.c1
            @Override // android.view.View.OnClickListener
            public final void onClick(View view2) {
                g1.x(f5.e.this, view2);
            }
        });
        gVar.f42513t.setOnClickListener(new View.OnClickListener() { // from class: ko.d1
            @Override // android.view.View.OnClickListener
            public final void onClick(View view2) {
                g1.y(f5.e.this, view2);
            }
        });
        gVar.f42495b.setEnabled(rendering.u());
        gVar.f42513t.setEnabled(rendering.u());
        if (rendering.t()) {
            q(true);
        } else {
            q(false);
        }
        StepStyles.GovernmentIdStepStyle s10 = rendering.s();
        if (s10 != null) {
            k(s10);
            bq.c.a(viewEnvironment, androidx.core.content.a.c(this.f31208b.getRoot().getContext(), sp.j.f49936a));
        }
        n(this, rendering.r(), 0L, 2, null);
        CoordinatorLayout cameraScreenContent = this.f31208b.f42497d;
        Intrinsics.checkNotNullExpressionValue(cameraScreenContent, "cameraScreenContent");
        sp.z.b(cameraScreenContent, rendering.h(), rendering.n(), null, 0, 0, 56, null);
    }
}
