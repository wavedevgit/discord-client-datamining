package aq;

import android.content.Context;
import android.graphics.drawable.ColorDrawable;
import android.widget.AutoCompleteTextView;
import android.widget.TextView;
import androidx.constraintlayout.widget.ConstraintLayout;
import com.google.android.material.textfield.TextInputEditText;
import com.google.android.material.textfield.TextInputLayout;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.InputDate;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.AttributeStyles;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.InputSelectComponentStyle;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.InputTextBasedComponentStyle;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StyleElements;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.TextBasedComponentStyle;
import com.withpersona.sdk2.inquiry.steps.ui.components.InputDateComponent;
import java.util.List;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class e1 {
    public static final ConstraintLayout b(InputDateComponent inputDateComponent, m5 uiComponentHelper, bq.e dateController, InputDate config) {
        TextBasedComponentStyle textBasedComponentStyle;
        AttributeStyles.DateSelectBackgroundColorStyle backgroundColor;
        Integer inputSelectBackgroundColor;
        InputSelectComponentStyle inputSelectStyle;
        Intrinsics.checkNotNullParameter(inputDateComponent, "<this>");
        Intrinsics.checkNotNullParameter(uiComponentHelper, "uiComponentHelper");
        Intrinsics.checkNotNullParameter(dateController, "dateController");
        Intrinsics.checkNotNullParameter(config, "config");
        final dq.f c10 = dq.f.c(uiComponentHelper.b());
        final InputDate.InputDateComponentStyle styles = config.getStyles();
        InputDate.Attributes attributes = config.getAttributes();
        if (attributes != null) {
            c10.f20768b.setText(attributes.getLabel());
            List<String> textMonths = attributes.getTextMonths();
            if (textMonths == null) {
                textMonths = CollectionsKt.l();
            }
            Context a10 = uiComponentHelper.a();
            int i10 = yp.f.f55224g;
            if (styles != null && (inputSelectStyle = styles.getInputSelectStyle()) != null) {
                textBasedComponentStyle = inputSelectStyle.getTextBasedStyle();
            } else {
                textBasedComponentStyle = null;
            }
            zp.a aVar = new zp.a(a10, i10, textMonths, textBasedComponentStyle);
            ym.t d10 = dateController.d();
            AutoCompleteTextView monthEditText = c10.f20773g;
            Intrinsics.checkNotNullExpressionValue(monthEditText, "monthEditText");
            ym.u.b(d10, monthEditText);
            c10.f20773g.setAdapter(aVar);
            if (styles != null && (backgroundColor = styles.getBackgroundColor()) != null && (inputSelectBackgroundColor = backgroundColor.getInputSelectBackgroundColor()) != null) {
                c10.f20773g.setDropDownBackgroundDrawable(new ColorDrawable(inputSelectBackgroundColor.intValue()));
            }
            c10.f20769c.setHint(attributes.getPlaceholderDay());
            ym.t c11 = dateController.c();
            TextInputEditText dayEditText = c10.f20770d;
            Intrinsics.checkNotNullExpressionValue(dayEditText, "dayEditText");
            ym.u.b(c11, dayEditText);
            c10.f20774h.setHint(attributes.getPlaceholderYear());
            ym.t g10 = dateController.g();
            TextInputEditText yearEditText = c10.f20775i;
            Intrinsics.checkNotNullExpressionValue(yearEditText, "yearEditText");
            ym.u.b(g10, yearEditText);
        }
        uiComponentHelper.d(new Function0() { // from class: aq.d1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit d11;
                d11 = e1.d(InputDate.InputDateComponentStyle.this, c10);
                return d11;
            }
        });
        c10.getRoot().setTag(c10);
        ConstraintLayout root = c10.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        return root;
    }

    public static /* synthetic */ ConstraintLayout c(InputDateComponent inputDateComponent, m5 m5Var, bq.e eVar, InputDate inputDate, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            eVar = inputDateComponent.b();
        }
        return b(inputDateComponent, m5Var, eVar, inputDate);
    }

    public static final Unit d(InputDate.InputDateComponentStyle inputDateComponentStyle, dq.f fVar) {
        InputTextBasedComponentStyle inputTextStyle;
        InputTextBasedComponentStyle inputTextStyle2;
        InputSelectComponentStyle inputSelectStyle;
        InputSelectComponentStyle inputSelectStyle2;
        TextBasedComponentStyle errorTextStyle;
        InputSelectComponentStyle inputSelectStyle3;
        TextBasedComponentStyle labelStyle;
        AttributeStyles.InputMarginStyle margin;
        StyleElements.MeasurementSet base;
        StyleElements.SizeSet base2;
        if (inputDateComponentStyle != null && (margin = inputDateComponentStyle.getMargin()) != null && (base = margin.getBase()) != null && (base2 = base.getBase()) != null) {
            ConstraintLayout root = fVar.getRoot();
            Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
            iq.d.c(root, base2);
        }
        if (inputDateComponentStyle != null && (inputSelectStyle3 = inputDateComponentStyle.getInputSelectStyle()) != null && (labelStyle = inputSelectStyle3.getLabelStyle()) != null) {
            TextView dateLabel = fVar.f20768b;
            Intrinsics.checkNotNullExpressionValue(dateLabel, "dateLabel");
            fq.f0.n(dateLabel, labelStyle, null, 2, null);
        }
        if (inputDateComponentStyle != null && (inputSelectStyle2 = inputDateComponentStyle.getInputSelectStyle()) != null && (errorTextStyle = inputSelectStyle2.getErrorTextStyle()) != null) {
            TextView errorLabel = fVar.f20771e;
            Intrinsics.checkNotNullExpressionValue(errorLabel, "errorLabel");
            fq.f0.n(errorLabel, errorTextStyle, null, 2, null);
        }
        if (inputDateComponentStyle != null && (inputSelectStyle = inputDateComponentStyle.getInputSelectStyle()) != null) {
            TextInputLayout month = fVar.f20772f;
            Intrinsics.checkNotNullExpressionValue(month, "month");
            fq.o.i(month, inputSelectStyle);
        }
        if (inputDateComponentStyle != null && (inputTextStyle2 = inputDateComponentStyle.getInputTextStyle()) != null) {
            TextInputLayout day = fVar.f20769c;
            Intrinsics.checkNotNullExpressionValue(day, "day");
            fq.a0.k(day, inputTextStyle2);
        }
        if (inputDateComponentStyle != null && (inputTextStyle = inputDateComponentStyle.getInputTextStyle()) != null) {
            TextInputLayout year = fVar.f20774h;
            Intrinsics.checkNotNullExpressionValue(year, "year");
            fq.a0.k(year, inputTextStyle);
        }
        return Unit.f32464a;
    }
}
