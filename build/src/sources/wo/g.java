package wo;

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
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import to.c4;
import uq.f0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final ViewGroup f52952a;

    /* renamed from: b  reason: collision with root package name */
    private xo.c f52953b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f52954c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f52955d;

    /* renamed from: e  reason: collision with root package name */
    private View f52956e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f52957a;

        static {
            int[] iArr = new int[c4.e.values().length];
            try {
                iArr[c4.e.f49014o.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[c4.e.f49015p.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[c4.e.f49017r.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            f52957a = iArr;
        }
    }

    public g(ViewGroup contentView) {
        Intrinsics.checkNotNullParameter(contentView, "contentView");
        this.f52952a = contentView;
    }

    private final void g(boolean z10) {
        this.f52954c = z10;
        o();
    }

    private final void h() {
        xo.c cVar = this.f52953b;
        if (cVar == null || this.f52955d) {
            return;
        }
        this.f52955d = true;
        final BottomSheetBehavior q02 = BottomSheetBehavior.q0(cVar.f54981c);
        Intrinsics.checkNotNullExpressionValue(q02, "from(...)");
        Function0 function0 = new Function0() { // from class: wo.d
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit i10;
                i10 = g.i(g.this);
                return i10;
            }
        };
        FrameLayout bottomSheet = cVar.f54981c;
        Intrinsics.checkNotNullExpressionValue(bottomSheet, "bottomSheet");
        lq.b.b(q02, function0, bottomSheet, cVar.f54982d, cVar.f54988j);
        cVar.f54988j.setOnClickListener(new View.OnClickListener() { // from class: wo.e
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                g.j(BottomSheetBehavior.this, view);
            }
        });
        cVar.f54983e.setOnClickListener(new View.OnClickListener() { // from class: wo.f
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                g.k(BottomSheetBehavior.this, view);
            }
        });
        q02.e1(true);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit i(g gVar) {
        gVar.g(false);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void j(BottomSheetBehavior bottomSheetBehavior, View view) {
        bottomSheetBehavior.c1(5);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void k(BottomSheetBehavior bottomSheetBehavior, View view) {
        bottomSheetBehavior.c1(5);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m(xo.c cVar, WindowInsetsCompat insets) {
        Intrinsics.checkNotNullParameter(insets, "insets");
        Insets g10 = insets.g(WindowInsetsCompat.p.h());
        Intrinsics.checkNotNullExpressionValue(g10, "getInsetsIgnoringVisibility(...)");
        Space bottomInset = cVar.f54980b;
        Intrinsics.checkNotNullExpressionValue(bottomInset, "bottomInset");
        ViewGroup.LayoutParams layoutParams = bottomInset.getLayoutParams();
        if (layoutParams != null) {
            layoutParams.height = g10.f3307d;
            bottomInset.setLayoutParams(layoutParams);
            return Unit.f31988a;
        }
        throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void n(BottomSheetBehavior bottomSheetBehavior) {
        bottomSheetBehavior.c1(3);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit p(xo.c cVar) {
        BottomSheetBehavior q02 = BottomSheetBehavior.q0(cVar.f54981c);
        Intrinsics.checkNotNullExpressionValue(q02, "from(...)");
        q02.c1(5);
        FrameLayout root = cVar.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        gn.e.c(root, null);
        return Unit.f31988a;
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
        final xo.c cVar = this.f52953b;
        if (cVar == null) {
            cVar = xo.c.c(LayoutInflater.from(this.f52952a.getContext()), this.f52952a, true);
            Intrinsics.checkNotNullExpressionValue(cVar, "inflate(...)");
        }
        this.f52953b = cVar;
        h();
        g(true);
        TextView title = cVar.f54990l;
        Intrinsics.checkNotNullExpressionValue(title, "title");
        qq.f.d(title, viewModel.f());
        TextView prompt = cVar.f54987i;
        Intrinsics.checkNotNullExpressionValue(prompt, "prompt");
        qq.f.d(prompt, viewModel.c());
        TextView tips = cVar.f54989k;
        Intrinsics.checkNotNullExpressionValue(tips, "tips");
        qq.f.d(tips, viewModel.e());
        cVar.f54983e.setText(viewModel.a());
        final BottomSheetBehavior q02 = BottomSheetBehavior.q0(cVar.f54981c);
        Intrinsics.checkNotNullExpressionValue(q02, "from(...)");
        Integer num4 = null;
        if (governmentIdStepStyle != null && (titleStyle = governmentIdStepStyle.getTitleStyle()) != null && (base5 = titleStyle.getBase()) != null && (base6 = base5.getBase()) != null) {
            TextView title2 = cVar.f54990l;
            Intrinsics.checkNotNullExpressionValue(title2, "title");
            f0.n(title2, base6, null, 2, null);
        }
        if (governmentIdStepStyle != null && (textStyle = governmentIdStepStyle.getTextStyle()) != null && (base3 = textStyle.getBase()) != null && (base4 = base3.getBase()) != null) {
            TextView prompt2 = cVar.f54987i;
            Intrinsics.checkNotNullExpressionValue(prompt2, "prompt");
            f0.n(prompt2, base4, null, 2, null);
            TextView tips2 = cVar.f54989k;
            Intrinsics.checkNotNullExpressionValue(tips2, "tips");
            f0.n(tips2, base4, null, 2, null);
        }
        if (governmentIdStepStyle != null && (buttonPrimaryStyle = governmentIdStepStyle.getButtonPrimaryStyle()) != null && (base = buttonPrimaryStyle.getBase()) != null && (base2 = base.getBase()) != null) {
            Button captureButton = cVar.f54983e;
            Intrinsics.checkNotNullExpressionValue(captureButton, "captureButton");
            uq.e.f(captureButton, base2, false, false, 6, null);
        }
        LinearLayout bottomSheetContent = cVar.f54982d;
        Intrinsics.checkNotNullExpressionValue(bottomSheetContent, "bottomSheetContent");
        uq.c.c(bottomSheetContent, governmentIdStepStyle, null, null, 6, null);
        if (governmentIdStepStyle != null && (modalPaddingValue = governmentIdStepStyle.getModalPaddingValue()) != null) {
            Button captureButton2 = cVar.f54983e;
            Intrinsics.checkNotNullExpressionValue(captureButton2, "captureButton");
            ViewGroup.LayoutParams layoutParams = captureButton2.getLayoutParams();
            if (layoutParams != null) {
                ViewGroup.MarginLayoutParams marginLayoutParams = (ViewGroup.MarginLayoutParams) layoutParams;
                StyleElements.Size top = modalPaddingValue.getTop();
                if (top != null && (dp2 = top.getDp()) != null) {
                    marginLayoutParams.topMargin = (int) bq.h.a(dp2.doubleValue());
                }
                captureButton2.setLayoutParams(marginLayoutParams);
            } else {
                throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.MarginLayoutParams");
            }
        }
        c4.e d10 = viewModel.d();
        int[] iArr = a.f52957a;
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
            if (this.f52956e == null) {
                ConstraintLayout illustrationContainer = cVar.f54986h;
                Intrinsics.checkNotNullExpressionValue(illustrationContainer, "illustrationContainer");
                this.f52956e = wq.b.c(idFrontHelpModalPictograph, illustrationContainer, false, 2, null);
                cVar.f54985g.setVisibility(8);
            }
        } else {
            int i12 = iArr[viewModel.d().ordinal()];
            if (i12 != 1) {
                if (i12 != 2) {
                    if (i12 != 3) {
                        i10 = tp.d.f49783c;
                    } else {
                        i10 = tp.d.f49782b;
                    }
                } else {
                    i10 = tp.d.f49781a;
                }
            } else {
                i10 = tp.d.f49783c;
            }
            cVar.f54985g.setAnimation(i10);
            int i13 = iArr[viewModel.d().ordinal()];
            if (i13 != 2) {
                if (i13 != 3) {
                    ThemeableLottieAnimationView illustration = cVar.f54985g;
                    Intrinsics.checkNotNullExpressionValue(illustration, "illustration");
                    if (governmentIdStepStyle != null) {
                        num3 = governmentIdStepStyle.getCaptureHintIconStrokeColor();
                    } else {
                        num3 = null;
                    }
                    if (governmentIdStepStyle != null) {
                        num4 = governmentIdStepStyle.getCaptureHintIconFillColor();
                    }
                    uq.g.g(illustration, num3, num4, null, new String[]{"#000000"}, new String[]{"#8751FF"}, new String[0]);
                } else {
                    ThemeableLottieAnimationView illustration2 = cVar.f54985g;
                    Intrinsics.checkNotNullExpressionValue(illustration2, "illustration");
                    if (governmentIdStepStyle != null) {
                        num2 = governmentIdStepStyle.getCaptureHintIconStrokeColor();
                    } else {
                        num2 = null;
                    }
                    if (governmentIdStepStyle != null) {
                        num4 = governmentIdStepStyle.getCaptureHintIconFillColor();
                    }
                    uq.g.g(illustration2, num2, num4, null, new String[]{"#190051"}, new String[]{"#AA84FF", "#AA85FF"}, new String[0]);
                }
            } else {
                ThemeableLottieAnimationView illustration3 = cVar.f54985g;
                Intrinsics.checkNotNullExpressionValue(illustration3, "illustration");
                if (governmentIdStepStyle != null) {
                    num = governmentIdStepStyle.getCaptureHintIconStrokeColor();
                } else {
                    num = null;
                }
                if (governmentIdStepStyle != null) {
                    num4 = governmentIdStepStyle.getCaptureHintIconFillColor();
                }
                uq.g.g(illustration3, num, num4, null, new String[]{"#000000", "#190051"}, new String[]{"#AA84FF"}, new String[0]);
            }
        }
        Space bottomInset = cVar.f54980b;
        Intrinsics.checkNotNullExpressionValue(bottomInset, "bottomInset");
        lq.f.g(bottomInset, new Function1() { // from class: wo.a
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit m10;
                m10 = g.m(xo.c.this, (WindowInsetsCompat) obj);
                return m10;
            }
        });
        cVar.getRoot().postDelayed(new Runnable() { // from class: wo.b
            @Override // java.lang.Runnable
            public final void run() {
                g.n(BottomSheetBehavior.this);
            }
        }, 200L);
    }

    public final void o() {
        final xo.c cVar = this.f52953b;
        if (cVar == null) {
            return;
        }
        if (this.f52954c) {
            FrameLayout root = cVar.getRoot();
            Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
            gn.e.c(root, new Function0() { // from class: wo.c
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit p10;
                    p10 = g.p(xo.c.this);
                    return p10;
                }
            });
            return;
        }
        FrameLayout root2 = cVar.getRoot();
        Intrinsics.checkNotNullExpressionValue(root2, "getRoot(...)");
        gn.e.c(root2, null);
    }
}
