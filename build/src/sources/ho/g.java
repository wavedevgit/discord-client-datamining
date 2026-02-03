package ho;

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
import eo.c4;
import fq.f0;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final ViewGroup f27119a;

    /* renamed from: b  reason: collision with root package name */
    private io.c f27120b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f27121c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f27122d;

    /* renamed from: e  reason: collision with root package name */
    private View f27123e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f27124a;

        static {
            int[] iArr = new int[c4.e.values().length];
            try {
                iArr[c4.e.f21714o.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[c4.e.f21715p.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[c4.e.f21717r.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            f27124a = iArr;
        }
    }

    public g(ViewGroup contentView) {
        Intrinsics.checkNotNullParameter(contentView, "contentView");
        this.f27119a = contentView;
    }

    private final void g(boolean z10) {
        this.f27121c = z10;
        o();
    }

    private final void h() {
        io.c cVar = this.f27120b;
        if (cVar == null || this.f27122d) {
            return;
        }
        this.f27122d = true;
        final BottomSheetBehavior q02 = BottomSheetBehavior.q0(cVar.f28551c);
        Intrinsics.checkNotNullExpressionValue(q02, "from(...)");
        Function0 function0 = new Function0() { // from class: ho.d
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit i10;
                i10 = g.i(g.this);
                return i10;
            }
        };
        FrameLayout bottomSheet = cVar.f28551c;
        Intrinsics.checkNotNullExpressionValue(bottomSheet, "bottomSheet");
        wp.b.b(q02, function0, bottomSheet, cVar.f28552d, cVar.f28558j);
        cVar.f28558j.setOnClickListener(new View.OnClickListener() { // from class: ho.e
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                g.j(BottomSheetBehavior.this, view);
            }
        });
        cVar.f28553e.setOnClickListener(new View.OnClickListener() { // from class: ho.f
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
        return Unit.f32464a;
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
    public static final Unit m(io.c cVar, WindowInsetsCompat insets) {
        Intrinsics.checkNotNullParameter(insets, "insets");
        Insets g10 = insets.g(WindowInsetsCompat.p.h());
        Intrinsics.checkNotNullExpressionValue(g10, "getInsetsIgnoringVisibility(...)");
        Space bottomInset = cVar.f28550b;
        Intrinsics.checkNotNullExpressionValue(bottomInset, "bottomInset");
        ViewGroup.LayoutParams layoutParams = bottomInset.getLayoutParams();
        if (layoutParams != null) {
            layoutParams.height = g10.f3166d;
            bottomInset.setLayoutParams(layoutParams);
            return Unit.f32464a;
        }
        throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void n(BottomSheetBehavior bottomSheetBehavior) {
        bottomSheetBehavior.Y0(3);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit p(io.c cVar) {
        BottomSheetBehavior q02 = BottomSheetBehavior.q0(cVar.f28551c);
        Intrinsics.checkNotNullExpressionValue(q02, "from(...)");
        q02.Y0(5);
        FrameLayout root = cVar.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        ym.e.c(root, null);
        return Unit.f32464a;
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
        final io.c cVar = this.f27120b;
        if (cVar == null) {
            cVar = io.c.c(LayoutInflater.from(this.f27119a.getContext()), this.f27119a, true);
            Intrinsics.checkNotNullExpressionValue(cVar, "inflate(...)");
        }
        this.f27120b = cVar;
        h();
        g(true);
        TextView title = cVar.f28560l;
        Intrinsics.checkNotNullExpressionValue(title, "title");
        bq.f.d(title, viewModel.f());
        TextView prompt = cVar.f28557i;
        Intrinsics.checkNotNullExpressionValue(prompt, "prompt");
        bq.f.d(prompt, viewModel.c());
        TextView tips = cVar.f28559k;
        Intrinsics.checkNotNullExpressionValue(tips, "tips");
        bq.f.d(tips, viewModel.e());
        cVar.f28553e.setText(viewModel.a());
        final BottomSheetBehavior q02 = BottomSheetBehavior.q0(cVar.f28551c);
        Intrinsics.checkNotNullExpressionValue(q02, "from(...)");
        Integer num4 = null;
        if (governmentIdStepStyle != null && (titleStyle = governmentIdStepStyle.getTitleStyle()) != null && (base5 = titleStyle.getBase()) != null && (base6 = base5.getBase()) != null) {
            TextView title2 = cVar.f28560l;
            Intrinsics.checkNotNullExpressionValue(title2, "title");
            f0.n(title2, base6, null, 2, null);
        }
        if (governmentIdStepStyle != null && (textStyle = governmentIdStepStyle.getTextStyle()) != null && (base3 = textStyle.getBase()) != null && (base4 = base3.getBase()) != null) {
            TextView prompt2 = cVar.f28557i;
            Intrinsics.checkNotNullExpressionValue(prompt2, "prompt");
            f0.n(prompt2, base4, null, 2, null);
            TextView tips2 = cVar.f28559k;
            Intrinsics.checkNotNullExpressionValue(tips2, "tips");
            f0.n(tips2, base4, null, 2, null);
        }
        if (governmentIdStepStyle != null && (buttonPrimaryStyle = governmentIdStepStyle.getButtonPrimaryStyle()) != null && (base = buttonPrimaryStyle.getBase()) != null && (base2 = base.getBase()) != null) {
            Button captureButton = cVar.f28553e;
            Intrinsics.checkNotNullExpressionValue(captureButton, "captureButton");
            fq.e.f(captureButton, base2, false, false, 6, null);
        }
        LinearLayout bottomSheetContent = cVar.f28552d;
        Intrinsics.checkNotNullExpressionValue(bottomSheetContent, "bottomSheetContent");
        fq.c.c(bottomSheetContent, governmentIdStepStyle, null, null, 6, null);
        if (governmentIdStepStyle != null && (modalPaddingValue = governmentIdStepStyle.getModalPaddingValue()) != null) {
            Button captureButton2 = cVar.f28553e;
            Intrinsics.checkNotNullExpressionValue(captureButton2, "captureButton");
            ViewGroup.LayoutParams layoutParams = captureButton2.getLayoutParams();
            if (layoutParams != null) {
                ViewGroup.MarginLayoutParams marginLayoutParams = (ViewGroup.MarginLayoutParams) layoutParams;
                StyleElements.Size top = modalPaddingValue.getTop();
                if (top != null && (dp2 = top.getDp()) != null) {
                    marginLayoutParams.topMargin = (int) mp.h.a(dp2.doubleValue());
                }
                captureButton2.setLayoutParams(marginLayoutParams);
            } else {
                throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.MarginLayoutParams");
            }
        }
        c4.e d10 = viewModel.d();
        int[] iArr = a.f27124a;
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
            if (this.f27123e == null) {
                ConstraintLayout illustrationContainer = cVar.f28556h;
                Intrinsics.checkNotNullExpressionValue(illustrationContainer, "illustrationContainer");
                this.f27123e = hq.b.c(idFrontHelpModalPictograph, illustrationContainer, false, 2, null);
                cVar.f28555g.setVisibility(8);
            }
        } else {
            int i12 = iArr[viewModel.d().ordinal()];
            if (i12 != 1) {
                if (i12 != 2) {
                    if (i12 != 3) {
                        i10 = ep.d.f22483c;
                    } else {
                        i10 = ep.d.f22482b;
                    }
                } else {
                    i10 = ep.d.f22481a;
                }
            } else {
                i10 = ep.d.f22483c;
            }
            cVar.f28555g.setAnimation(i10);
            int i13 = iArr[viewModel.d().ordinal()];
            if (i13 != 2) {
                if (i13 != 3) {
                    ThemeableLottieAnimationView illustration = cVar.f28555g;
                    Intrinsics.checkNotNullExpressionValue(illustration, "illustration");
                    if (governmentIdStepStyle != null) {
                        num3 = governmentIdStepStyle.getCaptureHintIconStrokeColor();
                    } else {
                        num3 = null;
                    }
                    if (governmentIdStepStyle != null) {
                        num4 = governmentIdStepStyle.getCaptureHintIconFillColor();
                    }
                    fq.g.g(illustration, num3, num4, null, new String[]{"#000000"}, new String[]{"#8751FF"}, new String[0]);
                } else {
                    ThemeableLottieAnimationView illustration2 = cVar.f28555g;
                    Intrinsics.checkNotNullExpressionValue(illustration2, "illustration");
                    if (governmentIdStepStyle != null) {
                        num2 = governmentIdStepStyle.getCaptureHintIconStrokeColor();
                    } else {
                        num2 = null;
                    }
                    if (governmentIdStepStyle != null) {
                        num4 = governmentIdStepStyle.getCaptureHintIconFillColor();
                    }
                    fq.g.g(illustration2, num2, num4, null, new String[]{"#190051"}, new String[]{"#AA84FF", "#AA85FF"}, new String[0]);
                }
            } else {
                ThemeableLottieAnimationView illustration3 = cVar.f28555g;
                Intrinsics.checkNotNullExpressionValue(illustration3, "illustration");
                if (governmentIdStepStyle != null) {
                    num = governmentIdStepStyle.getCaptureHintIconStrokeColor();
                } else {
                    num = null;
                }
                if (governmentIdStepStyle != null) {
                    num4 = governmentIdStepStyle.getCaptureHintIconFillColor();
                }
                fq.g.g(illustration3, num, num4, null, new String[]{"#000000", "#190051"}, new String[]{"#AA84FF"}, new String[0]);
            }
        }
        Space bottomInset = cVar.f28550b;
        Intrinsics.checkNotNullExpressionValue(bottomInset, "bottomInset");
        wp.f.g(bottomInset, new Function1() { // from class: ho.a
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit m10;
                m10 = g.m(io.c.this, (WindowInsetsCompat) obj);
                return m10;
            }
        });
        cVar.getRoot().postDelayed(new Runnable() { // from class: ho.b
            @Override // java.lang.Runnable
            public final void run() {
                g.n(BottomSheetBehavior.this);
            }
        }, 200L);
    }

    public final void o() {
        final io.c cVar = this.f27120b;
        if (cVar == null) {
            return;
        }
        if (this.f27121c) {
            FrameLayout root = cVar.getRoot();
            Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
            ym.e.c(root, new Function0() { // from class: ho.c
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit p10;
                    p10 = g.p(io.c.this);
                    return p10;
                }
            });
            return;
        }
        FrameLayout root2 = cVar.getRoot();
        Intrinsics.checkNotNullExpressionValue(root2, "getRoot(...)");
        ym.e.c(root2, null);
    }
}
