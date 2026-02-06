package fq;

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
        final /* synthetic */ iq.v f23657d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ iq.v f23658e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ ESignatureComponent f23659i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ iq.v f23660o;

        public a(iq.v vVar, iq.v vVar2, ESignatureComponent eSignatureComponent, iq.v vVar3) {
            this.f23657d = vVar;
            this.f23658e = vVar2;
            this.f23659i = eSignatureComponent;
            this.f23660o = vVar3;
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
                this.f23659i.a().c(bitmap);
                this.f23660o.f29285g.setVisibility(0);
                this.f23660o.f29281c.setVisibility(0);
            }
        }

        @Override // i5.c
        public void b(Drawable drawable) {
            this.f23657d.f29280b.setVisibility(8);
            this.f23657d.f29281c.setVisibility(8);
            this.f23657d.f29285g.setVisibility(8);
        }

        @Override // i5.c
        public void c(Drawable drawable) {
            this.f23658e.f29280b.setVisibility(0);
        }
    }

    private static final void b(iq.v vVar, ESignature.ESignatureComponentStyle eSignatureComponentStyle) {
        Drawable mutate;
        TextView addSignatureLabel = vVar.f29280b;
        Intrinsics.checkNotNullExpressionValue(addSignatureLabel, "addSignatureLabel");
        kq.f0.n(addSignatureLabel, eSignatureComponentStyle.getInputTextStyle().getPlaceholderTextBasedStyle(), null, 2, null);
        Integer signaturePreviewBackgroundColor = eSignatureComponentStyle.getSignaturePreviewBackgroundColor();
        if (signaturePreviewBackgroundColor != null) {
            vVar.f29284f.setCardBackgroundColor(signaturePreviewBackgroundColor.intValue());
        }
        Integer fillColorValue = eSignatureComponentStyle.getFillColorValue();
        if (fillColorValue != null) {
            int intValue = fillColorValue.intValue();
            Drawable drawable = vVar.f29281c.getDrawable();
            if (drawable != null && (mutate = drawable.mutate()) != null) {
                mutate.setTint(intValue);
            }
        }
        TextView errorLabel = vVar.f29282d;
        Intrinsics.checkNotNullExpressionValue(errorLabel, "errorLabel");
        kq.f0.n(errorLabel, eSignatureComponentStyle.getInputTextStyle().getErrorTextStyle(), null, 2, null);
        TextView label = vVar.f29283e;
        Intrinsics.checkNotNullExpressionValue(label, "label");
        kq.f0.n(label, eSignatureComponentStyle.getInputTextStyle().getLabelTextBasedStyle(), null, 2, null);
        StyleElements.SizeSet margins = eSignatureComponentStyle.getMargins();
        if (margins != null) {
            ConstraintLayout root = vVar.getRoot();
            Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
            nq.d.c(root, margins);
        }
        Integer baseBorderColorValue = eSignatureComponentStyle.getInputTextStyle().getBaseBorderColorValue();
        if (baseBorderColorValue != null) {
            vVar.f29284f.setStrokeColor(baseBorderColorValue.intValue());
        }
        Double borderWidthValue = eSignatureComponentStyle.getInputTextStyle().getBorderWidthValue();
        if (borderWidthValue != null) {
            vVar.f29284f.setStrokeWidth((int) Math.ceil(rp.h.a(borderWidthValue.doubleValue())));
        }
        Double borderRadiusValue = eSignatureComponentStyle.getInputTextStyle().getBorderRadiusValue();
        if (borderRadiusValue != null) {
            vVar.f29284f.setRadius((float) rp.h.a(borderRadiusValue.doubleValue()));
        }
    }

    public static final ConstraintLayout c(final ESignatureComponent eSignatureComponent, m5 uiComponentHelper, final ESignature config) {
        Intrinsics.checkNotNullParameter(eSignatureComponent, "<this>");
        Intrinsics.checkNotNullParameter(uiComponentHelper, "uiComponentHelper");
        Intrinsics.checkNotNullParameter(config, "config");
        final iq.v c10 = iq.v.c(uiComponentHelper.b());
        uiComponentHelper.d(new Function0() { // from class: fq.w
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
    public static final Unit d(ESignature eSignature, iq.v vVar, ESignatureComponent eSignatureComponent) {
        String prefill;
        ESignature.Attributes attributes = eSignature.getAttributes();
        if (attributes != null && (prefill = attributes.getPrefill()) != null) {
            Context context = vVar.f29285g.getContext();
            Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
            v4.h d10 = new h.a(context).j(true).i(100).d();
            Context context2 = vVar.f29285g.getContext();
            Intrinsics.checkNotNullExpressionValue(context2, "getContext(...)");
            d10.a(new h.a(context2).d(prefill).s(new a(vVar, vVar, eSignatureComponent, vVar)).a());
        }
        ESignature.ESignatureComponentStyle styles = eSignature.getStyles();
        if (styles != null) {
            Intrinsics.checkNotNull(vVar);
            b(vVar, styles);
        }
        return Unit.f32008a;
    }
}
