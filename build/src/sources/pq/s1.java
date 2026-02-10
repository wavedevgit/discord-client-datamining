package pq;

import android.text.Editable;
import android.text.TextWatcher;
import android.widget.EditText;
import com.google.android.material.textfield.TextInputEditText;
import com.google.android.material.textfield.TextInputLayout;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.InputNumber;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.InputTextBasedComponentStyle;
import com.withpersona.sdk2.inquiry.steps.ui.components.InputNumberComponent;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class s1 {
    public static final TextInputLayout b(InputNumberComponent inputNumberComponent, m5 uiComponentHelper, final InputNumber config) {
        Intrinsics.checkNotNullParameter(inputNumberComponent, "<this>");
        Intrinsics.checkNotNullParameter(uiComponentHelper, "uiComponentHelper");
        Intrinsics.checkNotNullParameter(config, "config");
        final sq.k c10 = sq.k.c(uiComponentHelper.b());
        InputNumber.Attributes attributes = config.getAttributes();
        if (attributes != null) {
            String label = attributes.getLabel();
            if (label != null) {
                c10.f48256c.setHint(label);
            }
            String placeholder = attributes.getPlaceholder();
            if (placeholder != null) {
                c10.f48256c.setPlaceholderText(placeholder);
                TextInputLayout inputLayout = c10.f48256c;
                Intrinsics.checkNotNullExpressionValue(inputLayout, "inputLayout");
                lq.o.a(inputLayout);
            }
            Integer precision = attributes.getPrecision();
            if (precision != null) {
                int intValue = precision.intValue();
                EditText editText = c10.f48256c.getEditText();
                if (editText != null) {
                    editText.setFilters(new u[]{new u(intValue)});
                }
            }
        }
        c10.f48255b.setText(String.valueOf(inputNumberComponent.b().b()));
        TextInputEditText editText2 = c10.f48255b;
        Intrinsics.checkNotNullExpressionValue(editText2, "editText");
        editText2.addTextChangedListener(new a(inputNumberComponent));
        uiComponentHelper.d(new Function0() { // from class: pq.r1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit c11;
                c11 = s1.c(InputNumber.this, c10);
                return c11;
            }
        });
        TextInputLayout root = c10.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        return root;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit c(InputNumber inputNumber, sq.k kVar) {
        InputTextBasedComponentStyle styles = inputNumber.getStyles();
        if (styles != null) {
            TextInputLayout inputLayout = kVar.f48256c;
            Intrinsics.checkNotNullExpressionValue(inputLayout, "inputLayout");
            uq.a0.k(inputLayout, styles);
        }
        return Unit.f31987a;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements TextWatcher {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ InputNumberComponent f43092d;

        public a(InputNumberComponent inputNumberComponent) {
            this.f43092d = inputNumberComponent;
        }

        @Override // android.text.TextWatcher
        public void afterTextChanged(Editable editable) {
            Double d10;
            String obj;
            qq.i b10 = this.f43092d.b();
            if (editable != null && (obj = editable.toString()) != null) {
                d10 = StringsKt.p(obj);
            } else {
                d10 = null;
            }
            b10.c(d10);
        }

        @Override // android.text.TextWatcher
        public void beforeTextChanged(CharSequence charSequence, int i10, int i11, int i12) {
        }

        @Override // android.text.TextWatcher
        public void onTextChanged(CharSequence charSequence, int i10, int i11, int i12) {
        }
    }
}
