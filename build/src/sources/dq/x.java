package dq;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.drawable.BitmapDrawable;
import android.graphics.drawable.Drawable;
import android.widget.TextView;
import androidx.constraintlayout.widget.ConstraintLayout;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.ESignature;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StyleElements;
import com.withpersona.sdk2.inquiry.steps.ui.components.ESignatureComponent;
import g5.h;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import v4.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class x {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements i5.c {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ gq.v f21180d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ gq.v f21181e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ ESignatureComponent f21182i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ gq.v f21183o;

        public a(gq.v vVar, gq.v vVar2, ESignatureComponent eSignatureComponent, gq.v vVar3) {
            this.f21180d = vVar;
            this.f21181e = vVar2;
            this.f21182i = eSignatureComponent;
            this.f21183o = vVar3;
        }

        @Override // i5.c
        public void a(Drawable drawable) {
            BitmapDrawable bitmapDrawable;
            Bitmap bitmap;
            if (drawable instanceof BitmapDrawable) {
                bitmapDrawable = (BitmapDrawable) drawable;
            } else {
                bitmapDrawable = null;
            }
            if (bitmapDrawable != null && (bitmap = bitmapDrawable.getBitmap()) != null) {
                this.f21182i.a().c(bitmap);
                this.f21183o.f25158g.setVisibility(0);
                this.f21183o.f25154c.setVisibility(0);
            }
        }

        @Override // i5.c
        public void b(Drawable drawable) {
            this.f21180d.f25153b.setVisibility(8);
            this.f21180d.f25154c.setVisibility(8);
            this.f21180d.f25158g.setVisibility(8);
        }

        @Override // i5.c
        public void c(Drawable drawable) {
            this.f21181e.f25153b.setVisibility(0);
        }
    }

    private static final void b(gq.v vVar, ESignature.ESignatureComponentStyle eSignatureComponentStyle) {
        Drawable mutate;
        TextView addSignatureLabel = vVar.f25153b;
        Intrinsics.checkNotNullExpressionValue(addSignatureLabel, "addSignatureLabel");
        iq.f0.n(addSignatureLabel, eSignatureComponentStyle.getInputTextStyle().getPlaceholderTextBasedStyle(), null, 2, null);
        Integer signaturePreviewBackgroundColor = eSignatureComponentStyle.getSignaturePreviewBackgroundColor();
        if (signaturePreviewBackgroundColor != null) {
            vVar.f25157f.setCardBackgroundColor(signaturePreviewBackgroundColor.intValue());
        }
        Integer fillColorValue = eSignatureComponentStyle.getFillColorValue();
        if (fillColorValue != null) {
            int intValue = fillColorValue.intValue();
            Drawable drawable = vVar.f25154c.getDrawable();
            if (drawable != null && (mutate = drawable.mutate()) != null) {
                mutate.setTint(intValue);
            }
        }
        TextView errorLabel = vVar.f25155d;
        Intrinsics.checkNotNullExpressionValue(errorLabel, "errorLabel");
        iq.f0.n(errorLabel, eSignatureComponentStyle.getInputTextStyle().getErrorTextStyle(), null, 2, null);
        TextView label = vVar.f25156e;
        Intrinsics.checkNotNullExpressionValue(label, "label");
        iq.f0.n(label, eSignatureComponentStyle.getInputTextStyle().getLabelTextBasedStyle(), null, 2, null);
        StyleElements.SizeSet margins = eSignatureComponentStyle.getMargins();
        if (margins != null) {
            ConstraintLayout root = vVar.getRoot();
            Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
            lq.d.c(root, margins);
        }
        Integer baseBorderColorValue = eSignatureComponentStyle.getInputTextStyle().getBaseBorderColorValue();
        if (baseBorderColorValue != null) {
            vVar.f25157f.setStrokeColor(baseBorderColorValue.intValue());
        }
        Double borderWidthValue = eSignatureComponentStyle.getInputTextStyle().getBorderWidthValue();
        if (borderWidthValue != null) {
            vVar.f25157f.setStrokeWidth((int) Math.ceil(pp.h.a(borderWidthValue.doubleValue())));
        }
        Double borderRadiusValue = eSignatureComponentStyle.getInputTextStyle().getBorderRadiusValue();
        if (borderRadiusValue != null) {
            vVar.f25157f.setRadius((float) pp.h.a(borderRadiusValue.doubleValue()));
        }
    }

    public static final ConstraintLayout c(final ESignatureComponent eSignatureComponent, m5 uiComponentHelper, final ESignature config) {
        Intrinsics.checkNotNullParameter(eSignatureComponent, "<this>");
        Intrinsics.checkNotNullParameter(uiComponentHelper, "uiComponentHelper");
        Intrinsics.checkNotNullParameter(config, "config");
        final gq.v c10 = gq.v.c(uiComponentHelper.b());
        uiComponentHelper.d(new Function0() { // from class: dq.w
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit d10;
                d10 = x.d(ESignature.this, c10, eSignatureComponent);
                return d10;
            }
        });
        c10.getRoot().setTag(c10);
        ConstraintLayout root = c10.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        return root;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit d(ESignature eSignature, gq.v vVar, ESignatureComponent eSignatureComponent) {
        String prefill;
        ESignature.Attributes attributes = eSignature.getAttributes();
        if (attributes != null && (prefill = attributes.getPrefill()) != null) {
            Context context = vVar.f25158g.getContext();
            Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
            v4.h d10 = new h.a(context).j(true).i(100).d();
            Context context2 = vVar.f25158g.getContext();
            Intrinsics.checkNotNullExpressionValue(context2, "getContext(...)");
            d10.a(new h.a(context2).d(prefill).s(new a(vVar, vVar, eSignatureComponent, vVar)).a());
        }
        ESignature.ESignatureComponentStyle styles = eSignature.getStyles();
        if (styles != null) {
            Intrinsics.checkNotNull(vVar);
            b(vVar, styles);
        }
        return Unit.f31988a;
    }
}
