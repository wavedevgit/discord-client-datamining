package xp;

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
        final aq.l c10 = aq.l.c(uiComponentHelper.b());
        InputPhoneNumber.Attributes attributes = config.getAttributes();
        if (attributes != null) {
            String prefill = attributes.getPrefill();
            if (prefill != null && (editText = c10.f6666b.getEditText()) != null) {
                editText.setText(prefill);
            }
            String label = attributes.getLabel();
            if (label != null) {
                c10.f6666b.setHint(label);
            }
            String placeholder = attributes.getPlaceholder();
            if (placeholder != null) {
                c10.f6666b.setPlaceholderText(placeholder);
                TextInputLayout inputLayout = c10.f6666b;
                Intrinsics.checkNotNullExpressionValue(inputLayout, "inputLayout");
                tp.o.a(inputLayout);
            }
            EditText editText2 = c10.f6666b.getEditText();
            if (editText2 != null) {
                vm.u.b(inputPhoneNumberComponent.b(), editText2);
                jp.a0.a(editText2, new PhoneNumberFormattingTextWatcher(inputPhoneNumberComponent.k()));
            }
        }
        uiComponentHelper.d(new Function0() { // from class: xp.t1
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
    public static final Unit d(InputPhoneNumber inputPhoneNumber, aq.l lVar) {
        InputTextBasedComponentStyle styles = inputPhoneNumber.getStyles();
        if (styles != null) {
            TextView prefixTextView = lVar.f6666b.getPrefixTextView();
            Intrinsics.checkNotNullExpressionValue(prefixTextView, "getPrefixTextView(...)");
            cq.f0.n(prefixTextView, styles.getTextBasedStyle(), null, 2, null);
            TextInputLayout inputLayout = lVar.f6666b;
            Intrinsics.checkNotNullExpressionValue(inputLayout, "inputLayout");
            cq.a0.k(inputLayout, styles);
        }
        return Unit.f33282a;
    }

    public static final void e(InputPhoneNumberComponent inputPhoneNumberComponent, aq.l binding, final Function0 onCountryInputClick) {
        Intrinsics.checkNotNullParameter(inputPhoneNumberComponent, "<this>");
        Intrinsics.checkNotNullParameter(binding, "binding");
        Intrinsics.checkNotNullParameter(onCountryInputClick, "onCountryInputClick");
        binding.f6666b.setPrefixText(yp.d.f54919a.i((b4) CollectionsKt.o0(inputPhoneNumberComponent.g().b())));
        String k10 = inputPhoneNumberComponent.k();
        List f10 = inputPhoneNumberComponent.f();
        if (k10 == null && f10.size() == 1) {
            inputPhoneNumberComponent.g().c(CollectionsKt.e(CollectionsKt.o0(f10)));
        }
        binding.f6666b.getPrefixTextView().setOnClickListener(new View.OnClickListener() { // from class: xp.u1
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                v1.f(Function0.this, view);
            }
        });
        TextView prefixTextView = binding.f6666b.getPrefixTextView();
        Context context = binding.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        prefixTextView.setBackground(yp.f.b(context, binding.f6666b.getPrefixTextView().getTextColors().getDefaultColor(), (int) binding.f6666b.getPrefixTextView().getPaint().measureText(String.valueOf(binding.f6666b.getPrefixText()))));
        EditText editText = binding.f6666b.getEditText();
        if (editText != null) {
            jp.a0.a(editText, new PhoneNumberFormattingTextWatcher(inputPhoneNumberComponent.k()));
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void f(Function0 function0, View view) {
        function0.invoke();
    }
}
