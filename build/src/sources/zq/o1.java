package zq;

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
    private final ViewGroup f56837a;

    /* renamed from: b  reason: collision with root package name */
    private final Lazy f56838b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f56839c;

    /* renamed from: d  reason: collision with root package name */
    private Function2 f56840d;

    public o1(ViewGroup contentView) {
        Intrinsics.checkNotNullParameter(contentView, "contentView");
        this.f56837a = contentView;
        this.f56838b = as.l.b(new Function0() { // from class: zq.i1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                ar.b j10;
                j10 = o1.j(o1.this);
                return j10;
            }
        });
    }

    private final void g(ESignature.ESignatureComponentStyle eSignatureComponentStyle) {
        TextBasedComponentStyle dialogTitleStyle = eSignatureComponentStyle.getDialogTitleStyle();
        if (dialogTitleStyle != null) {
            TextView signatureLabel = i().f6048j;
            Intrinsics.checkNotNullExpressionValue(signatureLabel, "signatureLabel");
            uq.f0.n(signatureLabel, dialogTitleStyle, null, 2, null);
        }
        TextBasedComponentStyle dialogTextStyle = eSignatureComponentStyle.getDialogTextStyle();
        if (dialogTextStyle != null) {
            TextView signatureDescription = i().f6047i;
            Intrinsics.checkNotNullExpressionValue(signatureDescription, "signatureDescription");
            uq.f0.n(signatureDescription, dialogTextStyle, null, 2, null);
        }
        Integer baseBackgroundColorValue = eSignatureComponentStyle.getInputTextStyle().getBaseBackgroundColorValue();
        if (baseBackgroundColorValue != null) {
            i().f6046h.setCardBackgroundColor(baseBackgroundColorValue.intValue());
        }
        Double borderRadiusValue = eSignatureComponentStyle.getInputTextStyle().getBorderRadiusValue();
        if (borderRadiusValue != null) {
            i().f6046h.setRadius((float) Math.ceil(bq.h.a(borderRadiusValue.doubleValue())));
        }
        Double borderWidthValue = eSignatureComponentStyle.getInputTextStyle().getBorderWidthValue();
        if (borderWidthValue != null) {
            i().f6046h.setStrokeWidth((int) Math.ceil(bq.h.a(borderWidthValue.doubleValue())));
        }
        Integer baseBorderColorValue = eSignatureComponentStyle.getInputTextStyle().getBaseBorderColorValue();
        if (baseBorderColorValue != null) {
            i().f6046h.setStrokeColor(baseBorderColorValue.intValue());
        }
        ButtonSubmitComponentStyle submitButtonStyle = eSignatureComponentStyle.getSubmitButtonStyle();
        if (submitButtonStyle != null) {
            Button saveButton = i().f6044f;
            Intrinsics.checkNotNullExpressionValue(saveButton, "saveButton");
            uq.e.f(saveButton, submitButtonStyle, false, false, 6, null);
        }
        ButtonCancelComponentStyle clearSignatureButtonStyle = eSignatureComponentStyle.getClearSignatureButtonStyle();
        if (clearSignatureButtonStyle != null) {
            Button clearButton = i().f6041c;
            Intrinsics.checkNotNullExpressionValue(clearButton, "clearButton");
            uq.e.f(clearButton, clearSignatureButtonStyle, false, false, 6, null);
        }
    }

    private final ar.b i() {
        return (ar.b) this.f56838b.getValue();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final ar.b j(o1 o1Var) {
        return ar.b.c(LayoutInflater.from(o1Var.f56837a.getContext()), o1Var.f56837a, true);
    }

    private final void k(StepStyles.UiStepStyle uiStepStyle, gn.a0 a0Var) {
        if (this.f56839c) {
            return;
        }
        this.f56839c = true;
        final BottomSheetBehavior q02 = BottomSheetBehavior.q0(i().f6040b);
        Intrinsics.checkNotNullExpressionValue(q02, "from(...)");
        Function0 function0 = new Function0() { // from class: zq.k1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit l10;
                l10 = o1.l(o1.this);
                return l10;
            }
        };
        FrameLayout bottomSheet = i().f6040b;
        Intrinsics.checkNotNullExpressionValue(bottomSheet, "bottomSheet");
        lq.b.b(q02, function0, bottomSheet, i().f6049k, i().f6045g);
        q02.O0(false);
        i().f6042d.setOnClickListener(new View.OnClickListener() { // from class: zq.l1
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                o1.m(BottomSheetBehavior.this, view);
            }
        });
        i().f6041c.setOnClickListener(new View.OnClickListener() { // from class: zq.m1
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                o1.n(o1.this, view);
            }
        });
        i().f6044f.setOnClickListener(new View.OnClickListener() { // from class: zq.n1
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                o1.o(o1.this, q02, view);
            }
        });
        ConstraintLayout signatureSheet = i().f6049k;
        Intrinsics.checkNotNullExpressionValue(signatureSheet, "signatureSheet");
        uq.c.c(signatureSheet, uiStepStyle, null, new Rect(0, (int) bq.h.a(12.0d), 0, 0), 2, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit l(o1 o1Var) {
        Function2 function2 = o1Var.f56840d;
        if (function2 != null) {
            function2.invoke(Boolean.TRUE, null);
        }
        o1Var.f56840d = null;
        o1Var.i().f6046h.f();
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void m(BottomSheetBehavior bottomSheetBehavior, View view) {
        bottomSheetBehavior.c1(5);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void n(o1 o1Var, View view) {
        o1Var.i().f6046h.f();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void o(o1 o1Var, BottomSheetBehavior bottomSheetBehavior, View view) {
        Function2 function2 = o1Var.f56840d;
        if (function2 != null) {
            function2.invoke(Boolean.FALSE, o1Var.i().f6046h.i());
        }
        o1Var.f56840d = null;
        bottomSheetBehavior.c1(5);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void q(o1 o1Var) {
        BottomSheetBehavior q02 = BottomSheetBehavior.q0(o1Var.i().f6040b);
        Intrinsics.checkNotNullExpressionValue(q02, "from(...)");
        q02.c1(3);
    }

    public final boolean h() {
        if (!this.f56838b.isInitialized()) {
            return false;
        }
        BottomSheetBehavior q02 = BottomSheetBehavior.q0(i().f6040b);
        Intrinsics.checkNotNullExpressionValue(q02, "from(...)");
        if (q02.x0() == 5) {
            return false;
        }
        q02.c1(5);
        return true;
    }

    public final void p(ESignatureComponent component, ESignature config, StepStyles.UiStepStyle uiStepStyle, gn.a0 viewEnvironment, Function2 onComplete) {
        String str;
        Intrinsics.checkNotNullParameter(component, "component");
        Intrinsics.checkNotNullParameter(config, "config");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
        Intrinsics.checkNotNullParameter(onComplete, "onComplete");
        k(uiStepStyle, viewEnvironment);
        this.f56840d = onComplete;
        i().f6046h.f();
        TextView textView = i().f6048j;
        ESignature.Attributes attributes = config.getAttributes();
        if (attributes != null) {
            str = attributes.getDialogTitle();
        } else {
            str = null;
        }
        textView.setText(str);
        TextView textView2 = i().f6047i;
        ESignature.Attributes attributes2 = config.getAttributes();
        textView2.setText((attributes2 == null || (r4 = attributes2.getDialogText()) == null) ? "" : "");
        ESignature.ESignatureComponentStyle styles = config.getStyles();
        if (styles != null) {
            g(styles);
        }
        i().getRoot().postDelayed(new Runnable() { // from class: zq.j1
            @Override // java.lang.Runnable
            public final void run() {
                o1.q(o1.this);
            }
        }, 100L);
    }
}
