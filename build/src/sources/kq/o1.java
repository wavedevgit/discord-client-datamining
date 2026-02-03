package kq;

import android.graphics.Rect;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.FrameLayout;
import android.widget.TextView;
import androidx.constraintlayout.widget.ConstraintLayout;
import com.google.android.material.bottomsheet.BottomSheetBehavior;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.ESignature;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.ButtonCancelComponentStyle;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.ButtonSubmitComponentStyle;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyles;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.TextBasedComponentStyle;
import com.withpersona.sdk2.inquiry.steps.ui.components.ESignatureComponent;
import kotlin.Lazy;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o1 {

    /* renamed from: a  reason: collision with root package name */
    private final ViewGroup f35878a;

    /* renamed from: b  reason: collision with root package name */
    private final Lazy f35879b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f35880c;

    /* renamed from: d  reason: collision with root package name */
    private Function2 f35881d;

    public o1(ViewGroup contentView) {
        Intrinsics.checkNotNullParameter(contentView, "contentView");
        this.f35878a = contentView;
        this.f35879b = lr.l.a(new Function0() { // from class: kq.i1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                lq.b j10;
                j10 = o1.j(o1.this);
                return j10;
            }
        });
    }

    private final void g(ESignature.ESignatureComponentStyle eSignatureComponentStyle) {
        TextBasedComponentStyle dialogTitleStyle = eSignatureComponentStyle.getDialogTitleStyle();
        if (dialogTitleStyle != null) {
            TextView signatureLabel = i().f37086j;
            Intrinsics.checkNotNullExpressionValue(signatureLabel, "signatureLabel");
            fq.f0.n(signatureLabel, dialogTitleStyle, null, 2, null);
        }
        TextBasedComponentStyle dialogTextStyle = eSignatureComponentStyle.getDialogTextStyle();
        if (dialogTextStyle != null) {
            TextView signatureDescription = i().f37085i;
            Intrinsics.checkNotNullExpressionValue(signatureDescription, "signatureDescription");
            fq.f0.n(signatureDescription, dialogTextStyle, null, 2, null);
        }
        Integer baseBackgroundColorValue = eSignatureComponentStyle.getInputTextStyle().getBaseBackgroundColorValue();
        if (baseBackgroundColorValue != null) {
            i().f37084h.setCardBackgroundColor(baseBackgroundColorValue.intValue());
        }
        Double borderRadiusValue = eSignatureComponentStyle.getInputTextStyle().getBorderRadiusValue();
        if (borderRadiusValue != null) {
            i().f37084h.setRadius((float) Math.ceil(mp.h.a(borderRadiusValue.doubleValue())));
        }
        Double borderWidthValue = eSignatureComponentStyle.getInputTextStyle().getBorderWidthValue();
        if (borderWidthValue != null) {
            i().f37084h.setStrokeWidth((int) Math.ceil(mp.h.a(borderWidthValue.doubleValue())));
        }
        Integer baseBorderColorValue = eSignatureComponentStyle.getInputTextStyle().getBaseBorderColorValue();
        if (baseBorderColorValue != null) {
            i().f37084h.setStrokeColor(baseBorderColorValue.intValue());
        }
        ButtonSubmitComponentStyle submitButtonStyle = eSignatureComponentStyle.getSubmitButtonStyle();
        if (submitButtonStyle != null) {
            Button saveButton = i().f37082f;
            Intrinsics.checkNotNullExpressionValue(saveButton, "saveButton");
            fq.e.f(saveButton, submitButtonStyle, false, false, 6, null);
        }
        ButtonCancelComponentStyle clearSignatureButtonStyle = eSignatureComponentStyle.getClearSignatureButtonStyle();
        if (clearSignatureButtonStyle != null) {
            Button clearButton = i().f37079c;
            Intrinsics.checkNotNullExpressionValue(clearButton, "clearButton");
            fq.e.f(clearButton, clearSignatureButtonStyle, false, false, 6, null);
        }
    }

    private final lq.b i() {
        return (lq.b) this.f35879b.getValue();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final lq.b j(o1 o1Var) {
        return lq.b.c(LayoutInflater.from(o1Var.f35878a.getContext()), o1Var.f35878a, true);
    }

    private final void k(StepStyles.UiStepStyle uiStepStyle, ym.a0 a0Var) {
        if (this.f35880c) {
            return;
        }
        this.f35880c = true;
        final BottomSheetBehavior q02 = BottomSheetBehavior.q0(i().f37078b);
        Intrinsics.checkNotNullExpressionValue(q02, "from(...)");
        Function0 function0 = new Function0() { // from class: kq.k1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit l10;
                l10 = o1.l(o1.this);
                return l10;
            }
        };
        FrameLayout bottomSheet = i().f37078b;
        Intrinsics.checkNotNullExpressionValue(bottomSheet, "bottomSheet");
        wp.b.b(q02, function0, bottomSheet, i().f37087k, i().f37083g);
        q02.L0(false);
        i().f37080d.setOnClickListener(new View.OnClickListener() { // from class: kq.l1
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                o1.m(BottomSheetBehavior.this, view);
            }
        });
        i().f37079c.setOnClickListener(new View.OnClickListener() { // from class: kq.m1
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                o1.n(o1.this, view);
            }
        });
        i().f37082f.setOnClickListener(new View.OnClickListener() { // from class: kq.n1
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                o1.o(o1.this, q02, view);
            }
        });
        ConstraintLayout signatureSheet = i().f37087k;
        Intrinsics.checkNotNullExpressionValue(signatureSheet, "signatureSheet");
        fq.c.c(signatureSheet, uiStepStyle, null, new Rect(0, (int) mp.h.a(12.0d), 0, 0), 2, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit l(o1 o1Var) {
        Function2 function2 = o1Var.f35881d;
        if (function2 != null) {
            function2.invoke(Boolean.TRUE, null);
        }
        o1Var.f35881d = null;
        o1Var.i().f37084h.f();
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void m(BottomSheetBehavior bottomSheetBehavior, View view) {
        bottomSheetBehavior.Y0(5);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void n(o1 o1Var, View view) {
        o1Var.i().f37084h.f();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void o(o1 o1Var, BottomSheetBehavior bottomSheetBehavior, View view) {
        Function2 function2 = o1Var.f35881d;
        if (function2 != null) {
            function2.invoke(Boolean.FALSE, o1Var.i().f37084h.i());
        }
        o1Var.f35881d = null;
        bottomSheetBehavior.Y0(5);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void q(o1 o1Var) {
        BottomSheetBehavior q02 = BottomSheetBehavior.q0(o1Var.i().f37078b);
        Intrinsics.checkNotNullExpressionValue(q02, "from(...)");
        q02.Y0(3);
    }

    public final boolean h() {
        if (!this.f35879b.isInitialized()) {
            return false;
        }
        BottomSheetBehavior q02 = BottomSheetBehavior.q0(i().f37078b);
        Intrinsics.checkNotNullExpressionValue(q02, "from(...)");
        if (q02.w0() == 5) {
            return false;
        }
        q02.Y0(5);
        return true;
    }

    public final void p(ESignatureComponent component, ESignature config, StepStyles.UiStepStyle uiStepStyle, ym.a0 viewEnvironment, Function2 onComplete) {
        String str;
        Intrinsics.checkNotNullParameter(component, "component");
        Intrinsics.checkNotNullParameter(config, "config");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
        Intrinsics.checkNotNullParameter(onComplete, "onComplete");
        k(uiStepStyle, viewEnvironment);
        this.f35881d = onComplete;
        i().f37084h.f();
        TextView textView = i().f37086j;
        ESignature.Attributes attributes = config.getAttributes();
        if (attributes != null) {
            str = attributes.getDialogTitle();
        } else {
            str = null;
        }
        textView.setText(str);
        TextView textView2 = i().f37085i;
        ESignature.Attributes attributes2 = config.getAttributes();
        textView2.setText((attributes2 == null || (r4 = attributes2.getDialogText()) == null) ? "" : "");
        ESignature.ESignatureComponentStyle styles = config.getStyles();
        if (styles != null) {
            g(styles);
        }
        i().getRoot().postDelayed(new Runnable() { // from class: kq.j1
            @Override // java.lang.Runnable
            public final void run() {
                o1.q(o1.this);
            }
        }, 100L);
    }
}
