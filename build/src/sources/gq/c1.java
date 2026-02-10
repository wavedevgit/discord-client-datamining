package gq;

import android.text.Editable;
import android.text.TextWatcher;
import com.google.android.material.textfield.TextInputLayout;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.InputCurrency;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.InputTextBasedComponentStyle;
import com.withpersona.sdk2.inquiry.steps.ui.components.InputCurrencyComponent;
import java.text.NumberFormat;
import java.util.Currency;
import java.util.regex.Pattern;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Ref;
import kotlin.text.Regex;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class c1 {
    /* JADX WARN: Multi-variable type inference failed */
    public static final TextInputLayout b(InputCurrencyComponent inputCurrencyComponent, m5 uiComponentHelper, final InputCurrency config) {
        T t10;
        Intrinsics.checkNotNullParameter(inputCurrencyComponent, "<this>");
        Intrinsics.checkNotNullParameter(uiComponentHelper, "uiComponentHelper");
        Intrinsics.checkNotNullParameter(config, "config");
        final jq.k c10 = jq.k.c(uiComponentHelper.b());
        InputCurrency.Attributes attributes = config.getAttributes();
        String str = "USD";
        if (attributes != null) {
            String label = attributes.getLabel();
            if (label != null) {
                c10.f30372c.setHint(label);
            }
            String placeholder = attributes.getPlaceholder();
            if (placeholder != null) {
                c10.f30372c.setPlaceholderText(placeholder);
                TextInputLayout inputLayout = c10.f30372c;
                Intrinsics.checkNotNullExpressionValue(inputLayout, "inputLayout");
                cq.o.a(inputLayout);
            }
            String currencyCode = attributes.getCurrencyCode();
            if (currencyCode != null) {
                str = currencyCode;
            }
        }
        Currency currency = Currency.getInstance(str);
        NumberFormat currencyInstance = NumberFormat.getCurrencyInstance();
        currencyInstance.setCurrency(currency);
        NumberFormat numberFormat = NumberFormat.getInstance();
        Ref.ObjectRef objectRef = new Ref.ObjectRef();
        Editable text = c10.f30371b.getText();
        if (text != null) {
            t10 = text.toString();
        } else {
            t10 = 0;
        }
        objectRef.element = t10;
        a aVar = new a(objectRef, c10, currency, numberFormat, currencyInstance, inputCurrencyComponent);
        if (inputCurrencyComponent.h() != null) {
            try {
                c10.f30371b.setText(currencyInstance.format(inputCurrencyComponent.h().doubleValue()));
            } catch (Exception unused) {
            }
        }
        c10.f30371b.addTextChangedListener(aVar);
        uiComponentHelper.d(new Function0() { // from class: gq.b1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit c11;
                c11 = c1.c(InputCurrency.this, c10);
                return c11;
            }
        });
        TextInputLayout root = c10.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        return root;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit c(InputCurrency inputCurrency, jq.k kVar) {
        InputTextBasedComponentStyle styles = inputCurrency.getStyles();
        if (styles != null) {
            TextInputLayout inputLayout = kVar.f30372c;
            Intrinsics.checkNotNullExpressionValue(inputLayout, "inputLayout");
            lq.a0.k(inputLayout, styles);
        }
        return Unit.f31765a;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements TextWatcher {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Ref.ObjectRef f24504d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ jq.k f24505e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ Currency f24506i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ NumberFormat f24507o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ NumberFormat f24508p;

        /* renamed from: q  reason: collision with root package name */
        final /* synthetic */ InputCurrencyComponent f24509q;

        a(Ref.ObjectRef objectRef, jq.k kVar, Currency currency, NumberFormat numberFormat, NumberFormat numberFormat2, InputCurrencyComponent inputCurrencyComponent) {
            this.f24504d = objectRef;
            this.f24505e = kVar;
            this.f24506i = currency;
            this.f24507o = numberFormat;
            this.f24508p = numberFormat2;
            this.f24509q = inputCurrencyComponent;
        }

        /* JADX WARN: Multi-variable type inference failed */
        /* JADX WARN: Type inference failed for: r6v5, types: [T, java.lang.CharSequence, java.lang.String] */
        @Override // android.text.TextWatcher
        public void afterTextChanged(Editable editable) {
            if (!Intrinsics.areEqual(String.valueOf(editable), this.f24504d.element) && editable != null && !StringsKt.k0(editable)) {
                this.f24505e.f30371b.removeTextChangedListener(this);
                String quote = Pattern.quote(this.f24506i.getSymbol());
                Intrinsics.checkNotNullExpressionValue(quote, "quote(...)");
                String replace = new Regex(quote).replace(editable, "");
                StringBuilder sb2 = new StringBuilder();
                int length = replace.length();
                for (int i10 = 0; i10 < length; i10++) {
                    char charAt = replace.charAt(i10);
                    if (Character.isDigit(charAt)) {
                        sb2.append(charAt);
                    }
                }
                Number parse = this.f24507o.parse(sb2.toString());
                if (parse != null) {
                    double doubleValue = parse.doubleValue() / 100.0d;
                    ?? format = this.f24508p.format(doubleValue);
                    this.f24504d.element = format;
                    this.f24505e.f30371b.setText((CharSequence) format);
                    this.f24505e.f30371b.setSelection(format.length());
                    this.f24505e.f30371b.addTextChangedListener(this);
                    this.f24509q.b().c(Double.valueOf(doubleValue));
                }
            }
        }

        @Override // android.text.TextWatcher
        public void beforeTextChanged(CharSequence charSequence, int i10, int i11, int i12) {
        }

        @Override // android.text.TextWatcher
        public void onTextChanged(CharSequence charSequence, int i10, int i11, int i12) {
        }
    }
}
