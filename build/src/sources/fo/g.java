package fo;

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
import bo.c4;
import com.google.android.material.bottomsheet.BottomSheetBehavior;
import com.withpersona.sdk2.inquiry.network.dto.NextStep;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.RemoteImage;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.ButtonSubmitComponentStyle;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyles;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StyleElements;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.TextBasedComponentStyle;
import com.withpersona.sdk2.inquiry.shared.ui.ThemeableLottieAnimationView;
import dq.f0;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final ViewGroup f24524a;

    /* renamed from: b  reason: collision with root package name */
    private go.c f24525b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f24526c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f24527d;

    /* renamed from: e  reason: collision with root package name */
    private View f24528e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f24529a;

        static {
            int[] iArr = new int[c4.e.values().length];
            try {
                iArr[c4.e.f6659o.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[c4.e.f6660p.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[c4.e.f6662r.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            f24529a = iArr;
        }
    }

    public g(ViewGroup contentView) {
        Intrinsics.checkNotNullParameter(contentView, "contentView");
        this.f24524a = contentView;
    }

    private final void g(boolean z10) {
        this.f24526c = z10;
        o();
    }

    private final void h() {
        go.c cVar = this.f24525b;
        if (cVar == null || this.f24527d) {
            return;
        }
        this.f24527d = true;
        final BottomSheetBehavior q02 = BottomSheetBehavior.q0(cVar.f27222c);
        Intrinsics.checkNotNullExpressionValue(q02, "from(...)");
        Function0 function0 = new Function0() { // from class: fo.d
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit i10;
                i10 = g.i(g.this);
                return i10;
            }
        };
        FrameLayout bottomSheet = cVar.f27222c;
        Intrinsics.checkNotNullExpressionValue(bottomSheet, "bottomSheet");
        up.b.b(q02, function0, bottomSheet, cVar.f27223d, cVar.f27229j);
        cVar.f27229j.setOnClickListener(new View.OnClickListener() { // from class: fo.e
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                g.j(BottomSheetBehavior.this, view);
            }
        });
        cVar.f27224e.setOnClickListener(new View.OnClickListener() { // from class: fo.f
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
        return Unit.f33074a;
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
    public static final Unit m(go.c cVar, WindowInsetsCompat insets) {
        Intrinsics.checkNotNullParameter(insets, "insets");
        Insets g10 = insets.g(WindowInsetsCompat.p.h());
        Intrinsics.checkNotNullExpressionValue(g10, "getInsetsIgnoringVisibility(...)");
        Space bottomInset = cVar.f27221b;
        Intrinsics.checkNotNullExpressionValue(bottomInset, "bottomInset");
        ViewGroup.LayoutParams layoutParams = bottomInset.getLayoutParams();
        if (layoutParams != null) {
            layoutParams.height = g10.f3197d;
            bottomInset.setLayoutParams(layoutParams);
            return Unit.f33074a;
        }
        throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void n(BottomSheetBehavior bottomSheetBehavior) {
        bottomSheetBehavior.Y0(3);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit p(go.c cVar) {
        BottomSheetBehavior q02 = BottomSheetBehavior.q0(cVar.f27222c);
        Intrinsics.checkNotNullExpressionValue(q02, "from(...)");
        q02.Y0(5);
        FrameLayout root = cVar.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        wm.e.c(root, null);
        return Unit.f33074a;
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
        final go.c cVar = this.f24525b;
        if (cVar == null) {
            cVar = go.c.c(LayoutInflater.from(this.f24524a.getContext()), this.f24524a, true);
            Intrinsics.checkNotNullExpressionValue(cVar, "inflate(...)");
        }
        this.f24525b = cVar;
        h();
        g(true);
        TextView title = cVar.f27231l;
        Intrinsics.checkNotNullExpressionValue(title, "title");
        zp.f.d(title, viewModel.f());
        TextView prompt = cVar.f27228i;
        Intrinsics.checkNotNullExpressionValue(prompt, "prompt");
        zp.f.d(prompt, viewModel.c());
        TextView tips = cVar.f27230k;
        Intrinsics.checkNotNullExpressionValue(tips, "tips");
        zp.f.d(tips, viewModel.e());
        cVar.f27224e.setText(viewModel.a());
        final BottomSheetBehavior q02 = BottomSheetBehavior.q0(cVar.f27222c);
        Intrinsics.checkNotNullExpressionValue(q02, "from(...)");
        Integer num4 = null;
        if (governmentIdStepStyle != null && (titleStyle = governmentIdStepStyle.getTitleStyle()) != null && (base5 = titleStyle.getBase()) != null && (base6 = base5.getBase()) != null) {
            TextView title2 = cVar.f27231l;
            Intrinsics.checkNotNullExpressionValue(title2, "title");
            f0.n(title2, base6, null, 2, null);
        }
        if (governmentIdStepStyle != null && (textStyle = governmentIdStepStyle.getTextStyle()) != null && (base3 = textStyle.getBase()) != null && (base4 = base3.getBase()) != null) {
            TextView prompt2 = cVar.f27228i;
            Intrinsics.checkNotNullExpressionValue(prompt2, "prompt");
            f0.n(prompt2, base4, null, 2, null);
            TextView tips2 = cVar.f27230k;
            Intrinsics.checkNotNullExpressionValue(tips2, "tips");
            f0.n(tips2, base4, null, 2, null);
        }
        if (governmentIdStepStyle != null && (buttonPrimaryStyle = governmentIdStepStyle.getButtonPrimaryStyle()) != null && (base = buttonPrimaryStyle.getBase()) != null && (base2 = base.getBase()) != null) {
            Button captureButton = cVar.f27224e;
            Intrinsics.checkNotNullExpressionValue(captureButton, "captureButton");
            dq.e.f(captureButton, base2, false, false, 6, null);
        }
        LinearLayout bottomSheetContent = cVar.f27223d;
        Intrinsics.checkNotNullExpressionValue(bottomSheetContent, "bottomSheetContent");
        dq.c.c(bottomSheetContent, governmentIdStepStyle, null, null, 6, null);
        if (governmentIdStepStyle != null && (modalPaddingValue = governmentIdStepStyle.getModalPaddingValue()) != null) {
            Button captureButton2 = cVar.f27224e;
            Intrinsics.checkNotNullExpressionValue(captureButton2, "captureButton");
            ViewGroup.LayoutParams layoutParams = captureButton2.getLayoutParams();
            if (layoutParams != null) {
                ViewGroup.MarginLayoutParams marginLayoutParams = (ViewGroup.MarginLayoutParams) layoutParams;
                StyleElements.Size top = modalPaddingValue.getTop();
                if (top != null && (dp2 = top.getDp()) != null) {
                    marginLayoutParams.topMargin = (int) kp.h.a(dp2.doubleValue());
                }
                captureButton2.setLayoutParams(marginLayoutParams);
            } else {
                throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.MarginLayoutParams");
            }
        }
        c4.e d10 = viewModel.d();
        int[] iArr = a.f24529a;
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
            if (this.f24528e == null) {
                ConstraintLayout illustrationContainer = cVar.f27227h;
                Intrinsics.checkNotNullExpressionValue(illustrationContainer, "illustrationContainer");
                this.f24528e = fq.b.c(idFrontHelpModalPictograph, illustrationContainer, false, 2, null);
                cVar.f27226g.setVisibility(8);
            }
        } else {
            int i12 = iArr[viewModel.d().ordinal()];
            if (i12 != 1) {
                if (i12 != 2) {
                    if (i12 != 3) {
                        i10 = cp.d.f20637c;
                    } else {
                        i10 = cp.d.f20636b;
                    }
                } else {
                    i10 = cp.d.f20635a;
                }
            } else {
                i10 = cp.d.f20637c;
            }
            cVar.f27226g.setAnimation(i10);
            int i13 = iArr[viewModel.d().ordinal()];
            if (i13 != 2) {
                if (i13 != 3) {
                    ThemeableLottieAnimationView illustration = cVar.f27226g;
                    Intrinsics.checkNotNullExpressionValue(illustration, "illustration");
                    if (governmentIdStepStyle != null) {
                        num3 = governmentIdStepStyle.getCaptureHintIconStrokeColor();
                    } else {
                        num3 = null;
                    }
                    if (governmentIdStepStyle != null) {
                        num4 = governmentIdStepStyle.getCaptureHintIconFillColor();
                    }
                    dq.g.g(illustration, num3, num4, null, new String[]{"#000000"}, new String[]{"#8751FF"}, new String[0]);
                } else {
                    ThemeableLottieAnimationView illustration2 = cVar.f27226g;
                    Intrinsics.checkNotNullExpressionValue(illustration2, "illustration");
                    if (governmentIdStepStyle != null) {
                        num2 = governmentIdStepStyle.getCaptureHintIconStrokeColor();
                    } else {
                        num2 = null;
                    }
                    if (governmentIdStepStyle != null) {
                        num4 = governmentIdStepStyle.getCaptureHintIconFillColor();
                    }
                    dq.g.g(illustration2, num2, num4, null, new String[]{"#190051"}, new String[]{"#AA84FF", "#AA85FF"}, new String[0]);
                }
            } else {
                ThemeableLottieAnimationView illustration3 = cVar.f27226g;
                Intrinsics.checkNotNullExpressionValue(illustration3, "illustration");
                if (governmentIdStepStyle != null) {
                    num = governmentIdStepStyle.getCaptureHintIconStrokeColor();
                } else {
                    num = null;
                }
                if (governmentIdStepStyle != null) {
                    num4 = governmentIdStepStyle.getCaptureHintIconFillColor();
                }
                dq.g.g(illustration3, num, num4, null, new String[]{"#000000", "#190051"}, new String[]{"#AA84FF"}, new String[0]);
            }
        }
        Space bottomInset = cVar.f27221b;
        Intrinsics.checkNotNullExpressionValue(bottomInset, "bottomInset");
        up.f.g(bottomInset, new Function1() { // from class: fo.a
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit m10;
                m10 = g.m(go.c.this, (WindowInsetsCompat) obj);
                return m10;
            }
        });
        cVar.getRoot().postDelayed(new Runnable() { // from class: fo.b
            @Override // java.lang.Runnable
            public final void run() {
                g.n(BottomSheetBehavior.this);
            }
        }, 200L);
    }

    public final void o() {
        final go.c cVar = this.f24525b;
        if (cVar == null) {
            return;
        }
        if (this.f24526c) {
            FrameLayout root = cVar.getRoot();
            Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
            wm.e.c(root, new Function0() { // from class: fo.c
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit p10;
                    p10 = g.p(go.c.this);
                    return p10;
                }
            });
            return;
        }
        FrameLayout root2 = cVar.getRoot();
        Intrinsics.checkNotNullExpressionValue(root2, "getRoot(...)");
        wm.e.c(root2, null);
    }
}
