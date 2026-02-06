package fq;

import android.content.Context;
import android.telephony.PhoneNumberFormattingTextWatcher;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;
import com.google.android.material.textfield.TextInputLayout;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.InputPhoneNumber;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.InputTextBasedComponentStyle;
import com.withpersona.sdk2.inquiry.steps.ui.components.InputPhoneNumberComponent;
import java.util.List;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class v1 {
    public static final TextInputLayout c(InputPhoneNumberComponent inputPhoneNumberComponent, m5 uiComponentHelper, final InputPhoneNumber config) {
        EditText editText;
        Intrinsics.checkNotNullParameter(inputPhoneNumberComponent, "<this>");
        Intrinsics.checkNotNullParameter(uiComponentHelper, "uiComponentHelper");
        Intrinsics.checkNotNullParameter(config, "config");
        final iq.l c10 = iq.l.c(uiComponentHelper.b());
        InputPhoneNumber.Attributes attributes = config.getAttributes();
        if (attributes != null) {
            String prefill = attributes.getPrefill();
            if (prefill != null && (editText = c10.f29247b.getEditText()) != null) {
                editText.setText(prefill);
            }
            String label = attributes.getLabel();
            if (label != null) {
                c10.f29247b.setHint(label);
            }
            String placeholder = attributes.getPlaceholder();
            if (placeholder != null) {
                c10.f29247b.setPlaceholderText(placeholder);
                TextInputLayout inputLayout = c10.f29247b;
                Intrinsics.checkNotNullExpressionValue(inputLayout, "inputLayout");
                bq.o.a(inputLayout);
            }
            EditText editText2 = c10.f29247b.getEditText();
            if (editText2 != null) {
                dn.u.b(inputPhoneNumberComponent.b(), editText2);
                rp.a0.a(editText2, new PhoneNumberFormattingTextWatcher(inputPhoneNumberComponent.l()));
            }
        }
        uiComponentHelper.d(new Function0() { // from class: fq.t1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit d10;
                d10 = v1.d(InputPhoneNumber.this, c10);
                return d10;
            }
        });
        c10.getRoot().setTag(c10);
        TextInputLayout root = c10.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        return root;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit d(InputPhoneNumber inputPhoneNumber, iq.l lVar) {
        InputTextBasedComponentStyle styles = inputPhoneNumber.getStyles();
        if (styles != null) {
            TextView prefixTextView = lVar.f29247b.getPrefixTextView();
            Intrinsics.checkNotNullExpressionValue(prefixTextView, "getPrefixTextView(...)");
            kq.f0.n(prefixTextView, styles.getTextBasedStyle(), null, 2, null);
            TextInputLayout inputLayout = lVar.f29247b;
            Intrinsics.checkNotNullExpressionValue(inputLayout, "inputLayout");
            kq.a0.k(inputLayout, styles);
        }
        return Unit.f32008a;
    }

    public static final void e(InputPhoneNumberComponent inputPhoneNumberComponent, iq.l binding, final Function0 onCountryInputClick) {
        Intrinsics.checkNotNullParameter(inputPhoneNumberComponent, "<this>");
        Intrinsics.checkNotNullParameter(binding, "binding");
        Intrinsics.checkNotNullParameter(onCountryInputClick, "onCountryInputClick");
        binding.f29247b.setPrefixText(gq.d.f25510a.i((b4) CollectionsKt.o0(inputPhoneNumberComponent.h().b())));
        String l10 = inputPhoneNumberComponent.l();
        List f10 = inputPhoneNumberComponent.f();
        if (l10 == null && f10.size() == 1) {
            inputPhoneNumberComponent.h().c(CollectionsKt.e(CollectionsKt.o0(f10)));
        }
        binding.f29247b.getPrefixTextView().setOnClickListener(new View.OnClickListener() { // from class: fq.u1
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                v1.f(Function0.this, view);
            }
        });
        TextView prefixTextView = binding.f29247b.getPrefixTextView();
        Context context = binding.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        prefixTextView.setBackground(gq.f.b(context, binding.f29247b.getPrefixTextView().getTextColors().getDefaultColor(), (int) binding.f29247b.getPrefixTextView().getPaint().measureText(String.valueOf(binding.f29247b.getPrefixText()))));
        EditText editText = binding.f29247b.getEditText();
        if (editText != null) {
            rp.a0.a(editText, new PhoneNumberFormattingTextWatcher(inputPhoneNumberComponent.l()));
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void f(Function0 function0, View view) {
        function0.invoke();
    }
}
