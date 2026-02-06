package mo;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.FrameLayout;
import android.widget.LinearLayout;
import android.widget.Space;
import android.widget.TextView;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.core.graphics.Insets;
import androidx.core.view.WindowInsetsCompat;
import com.google.android.material.bottomsheet.BottomSheetBehavior;
import com.withpersona.sdk2.inquiry.network.dto.NextStep;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.RemoteImage;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.ButtonSubmitComponentStyle;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyles;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StyleElements;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.TextBasedComponentStyle;
import com.withpersona.sdk2.inquiry.shared.ui.ThemeableLottieAnimationView;
import jo.c4;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kq.f0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final ViewGroup f37268a;

    /* renamed from: b  reason: collision with root package name */
    private no.c f37269b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f37270c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f37271d;

    /* renamed from: e  reason: collision with root package name */
    private View f37272e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f37273a;

        static {
            int[] iArr = new int[c4.e.values().length];
            try {
                iArr[c4.e.f30022o.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[c4.e.f30023p.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[c4.e.f30025r.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            f37273a = iArr;
        }
    }

    public g(ViewGroup contentView) {
        Intrinsics.checkNotNullParameter(contentView, "contentView");
        this.f37268a = contentView;
    }

    private final void g(boolean z10) {
        this.f37270c = z10;
        o();
    }

    private final void h() {
        no.c cVar = this.f37269b;
        if (cVar == null || this.f37271d) {
            return;
        }
        this.f37271d = true;
        final BottomSheetBehavior q02 = BottomSheetBehavior.q0(cVar.f40982c);
        Intrinsics.checkNotNullExpressionValue(q02, "from(...)");
        Function0 function0 = new Function0() { // from class: mo.d
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit i10;
                i10 = g.i(g.this);
                return i10;
            }
        };
        FrameLayout bottomSheet = cVar.f40982c;
        Intrinsics.checkNotNullExpressionValue(bottomSheet, "bottomSheet");
        bq.b.b(q02, function0, bottomSheet, cVar.f40983d, cVar.f40989j);
        cVar.f40989j.setOnClickListener(new View.OnClickListener() { // from class: mo.e
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                g.j(BottomSheetBehavior.this, view);
            }
        });
        cVar.f40984e.setOnClickListener(new View.OnClickListener() { // from class: mo.f
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                g.k(BottomSheetBehavior.this, view);
            }
        });
        q02.a1(true);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit i(g gVar) {
        gVar.g(false);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void j(BottomSheetBehavior bottomSheetBehavior, View view) {
        bottomSheetBehavior.Y0(5);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void k(BottomSheetBehavior bottomSheetBehavior, View view) {
        bottomSheetBehavior.Y0(5);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m(no.c cVar, WindowInsetsCompat insets) {
        Intrinsics.checkNotNullParameter(insets, "insets");
        Insets g10 = insets.g(WindowInsetsCompat.p.h());
        Intrinsics.checkNotNullExpressionValue(g10, "getInsetsIgnoringVisibility(...)");
        Space bottomInset = cVar.f40981b;
        Intrinsics.checkNotNullExpressionValue(bottomInset, "bottomInset");
        ViewGroup.LayoutParams layoutParams = bottomInset.getLayoutParams();
        if (layoutParams != null) {
            layoutParams.height = g10.f3607d;
            bottomInset.setLayoutParams(layoutParams);
            return Unit.f32008a;
        }
        throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void n(BottomSheetBehavior bottomSheetBehavior) {
        bottomSheetBehavior.Y0(3);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit p(no.c cVar) {
        BottomSheetBehavior q02 = BottomSheetBehavior.q0(cVar.f40982c);
        Intrinsics.checkNotNullExpressionValue(q02, "from(...)");
        q02.Y0(5);
        FrameLayout root = cVar.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        dn.e.c(root, null);
        return Unit.f32008a;
    }

    public final void l(StepStyles.GovernmentIdStepStyle governmentIdStepStyle, h viewModel, NextStep.GovernmentId.AssetConfig.CapturePage capturePage) {
        RemoteImage idFrontHelpModalPictograph;
        int i10;
        Integer num;
        Integer num2;
        Integer num3;
        StyleElements.SizeSet modalPaddingValue;
        Double dp2;
        StepStyles.GovernmentIdStepPrimaryButtonComponentStyle buttonPrimaryStyle;
        StepStyles.StepSubmitButtonComponentStyleContainer base;
        ButtonSubmitComponentStyle base2;
        StepStyles.GovernmentIdStepTextBasedComponentStyle textStyle;
        StepStyles.StepTextBasedComponentStyleContainer base3;
        TextBasedComponentStyle base4;
        StepStyles.GovernmentIdStepTitleComponentStyle titleStyle;
        StepStyles.StepTextBasedComponentStyleContainer base5;
        TextBasedComponentStyle base6;
        Intrinsics.checkNotNullParameter(viewModel, "viewModel");
        final no.c cVar = this.f37269b;
        if (cVar == null) {
            cVar = no.c.c(LayoutInflater.from(this.f37268a.getContext()), this.f37268a, true);
            Intrinsics.checkNotNullExpressionValue(cVar, "inflate(...)");
        }
        this.f37269b = cVar;
        h();
        g(true);
        TextView title = cVar.f40991l;
        Intrinsics.checkNotNullExpressionValue(title, "title");
        gq.f.d(title, viewModel.f());
        TextView prompt = cVar.f40988i;
        Intrinsics.checkNotNullExpressionValue(prompt, "prompt");
        gq.f.d(prompt, viewModel.c());
        TextView tips = cVar.f40990k;
        Intrinsics.checkNotNullExpressionValue(tips, "tips");
        gq.f.d(tips, viewModel.e());
        cVar.f40984e.setText(viewModel.a());
        final BottomSheetBehavior q02 = BottomSheetBehavior.q0(cVar.f40982c);
        Intrinsics.checkNotNullExpressionValue(q02, "from(...)");
        Integer num4 = null;
        if (governmentIdStepStyle != null && (titleStyle = governmentIdStepStyle.getTitleStyle()) != null && (base5 = titleStyle.getBase()) != null && (base6 = base5.getBase()) != null) {
            TextView title2 = cVar.f40991l;
            Intrinsics.checkNotNullExpressionValue(title2, "title");
            f0.n(title2, base6, null, 2, null);
        }
        if (governmentIdStepStyle != null && (textStyle = governmentIdStepStyle.getTextStyle()) != null && (base3 = textStyle.getBase()) != null && (base4 = base3.getBase()) != null) {
            TextView prompt2 = cVar.f40988i;
            Intrinsics.checkNotNullExpressionValue(prompt2, "prompt");
            f0.n(prompt2, base4, null, 2, null);
            TextView tips2 = cVar.f40990k;
            Intrinsics.checkNotNullExpressionValue(tips2, "tips");
            f0.n(tips2, base4, null, 2, null);
        }
        if (governmentIdStepStyle != null && (buttonPrimaryStyle = governmentIdStepStyle.getButtonPrimaryStyle()) != null && (base = buttonPrimaryStyle.getBase()) != null && (base2 = base.getBase()) != null) {
            Button captureButton = cVar.f40984e;
            Intrinsics.checkNotNullExpressionValue(captureButton, "captureButton");
            kq.e.f(captureButton, base2, false, false, 6, null);
        }
        LinearLayout bottomSheetContent = cVar.f40983d;
        Intrinsics.checkNotNullExpressionValue(bottomSheetContent, "bottomSheetContent");
        kq.c.c(bottomSheetContent, governmentIdStepStyle, null, null, 6, null);
        if (governmentIdStepStyle != null && (modalPaddingValue = governmentIdStepStyle.getModalPaddingValue()) != null) {
            Button captureButton2 = cVar.f40984e;
            Intrinsics.checkNotNullExpressionValue(captureButton2, "captureButton");
            ViewGroup.LayoutParams layoutParams = captureButton2.getLayoutParams();
            if (layoutParams != null) {
                ViewGroup.MarginLayoutParams marginLayoutParams = (ViewGroup.MarginLayoutParams) layoutParams;
                StyleElements.Size top = modalPaddingValue.getTop();
                if (top != null && (dp2 = top.getDp()) != null) {
                    marginLayoutParams.topMargin = (int) rp.h.a(dp2.doubleValue());
                }
                captureButton2.setLayoutParams(marginLayoutParams);
            } else {
                throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.MarginLayoutParams");
            }
        }
        c4.e d10 = viewModel.d();
        int[] iArr = a.f37273a;
        int i11 = iArr[d10.ordinal()];
        if (i11 != 1) {
            if (i11 != 2) {
                if (i11 != 3) {
                    if (capturePage != null) {
                        idFrontHelpModalPictograph = capturePage.getIdFrontHelpModalPictograph();
                    }
                    idFrontHelpModalPictograph = null;
                } else {
                    if (capturePage != null) {
                        idFrontHelpModalPictograph = capturePage.getBarcodeHelpModalPictograph();
                    }
                    idFrontHelpModalPictograph = null;
                }
            } else {
                if (capturePage != null) {
                    idFrontHelpModalPictograph = capturePage.getIdBackHelpModalPictograph();
                }
                idFrontHelpModalPictograph = null;
            }
        } else {
            if (capturePage != null) {
                idFrontHelpModalPictograph = capturePage.getIdFrontHelpModalPictograph();
            }
            idFrontHelpModalPictograph = null;
        }
        if (idFrontHelpModalPictograph != null) {
            if (this.f37272e == null) {
                ConstraintLayout illustrationContainer = cVar.f40987h;
                Intrinsics.checkNotNullExpressionValue(illustrationContainer, "illustrationContainer");
                this.f37272e = mq.b.c(idFrontHelpModalPictograph, illustrationContainer, false, 2, null);
                cVar.f40986g.setVisibility(8);
            }
        } else {
            int i12 = iArr[viewModel.d().ordinal()];
            if (i12 != 1) {
                if (i12 != 2) {
                    if (i12 != 3) {
                        i10 = jp.d.f30791c;
                    } else {
                        i10 = jp.d.f30790b;
                    }
                } else {
                    i10 = jp.d.f30789a;
                }
            } else {
                i10 = jp.d.f30791c;
            }
            cVar.f40986g.setAnimation(i10);
            int i13 = iArr[viewModel.d().ordinal()];
            if (i13 != 2) {
                if (i13 != 3) {
                    ThemeableLottieAnimationView illustration = cVar.f40986g;
                    Intrinsics.checkNotNullExpressionValue(illustration, "illustration");
                    if (governmentIdStepStyle != null) {
                        num3 = governmentIdStepStyle.getCaptureHintIconStrokeColor();
                    } else {
                        num3 = null;
                    }
                    if (governmentIdStepStyle != null) {
                        num4 = governmentIdStepStyle.getCaptureHintIconFillColor();
                    }
                    kq.g.g(illustration, num3, num4, null, new String[]{"#000000"}, new String[]{"#8751FF"}, new String[0]);
                } else {
                    ThemeableLottieAnimationView illustration2 = cVar.f40986g;
                    Intrinsics.checkNotNullExpressionValue(illustration2, "illustration");
                    if (governmentIdStepStyle != null) {
                        num2 = governmentIdStepStyle.getCaptureHintIconStrokeColor();
                    } else {
                        num2 = null;
                    }
                    if (governmentIdStepStyle != null) {
                        num4 = governmentIdStepStyle.getCaptureHintIconFillColor();
                    }
                    kq.g.g(illustration2, num2, num4, null, new String[]{"#190051"}, new String[]{"#AA84FF", "#AA85FF"}, new String[0]);
                }
            } else {
                ThemeableLottieAnimationView illustration3 = cVar.f40986g;
                Intrinsics.checkNotNullExpressionValue(illustration3, "illustration");
                if (governmentIdStepStyle != null) {
                    num = governmentIdStepStyle.getCaptureHintIconStrokeColor();
                } else {
                    num = null;
                }
                if (governmentIdStepStyle != null) {
                    num4 = governmentIdStepStyle.getCaptureHintIconFillColor();
                }
                kq.g.g(illustration3, num, num4, null, new String[]{"#000000", "#190051"}, new String[]{"#AA84FF"}, new String[0]);
            }
        }
        Space bottomInset = cVar.f40981b;
        Intrinsics.checkNotNullExpressionValue(bottomInset, "bottomInset");
        bq.f.g(bottomInset, new Function1() { // from class: mo.a
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit m10;
                m10 = g.m(no.c.this, (WindowInsetsCompat) obj);
                return m10;
            }
        });
        cVar.getRoot().postDelayed(new Runnable() { // from class: mo.b
            @Override // java.lang.Runnable
            public final void run() {
                g.n(BottomSheetBehavior.this);
            }
        }, 200L);
    }

    public final void o() {
        final no.c cVar = this.f37269b;
        if (cVar == null) {
            return;
        }
        if (this.f37270c) {
            FrameLayout root = cVar.getRoot();
            Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
            dn.e.c(root, new Function0() { // from class: mo.c
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit p10;
                    p10 = g.p(no.c.this);
                    return p10;
                }
            });
            return;
        }
        FrameLayout root2 = cVar.getRoot();
        Intrinsics.checkNotNullExpressionValue(root2, "getRoot(...)");
        dn.e.c(root2, null);
    }
}
