package fq;

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
        final iq.k c10 = iq.k.c(uiComponentHelper.b());
        InputCurrency.Attributes attributes = config.getAttributes();
        String str = "USD";
        if (attributes != null) {
            String label = attributes.getLabel();
            if (label != null) {
                c10.f29245c.setHint(label);
            }
            String placeholder = attributes.getPlaceholder();
            if (placeholder != null) {
                c10.f29245c.setPlaceholderText(placeholder);
                TextInputLayout inputLayout = c10.f29245c;
                Intrinsics.checkNotNullExpressionValue(inputLayout, "inputLayout");
                bq.o.a(inputLayout);
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
        Editable text = c10.f29244b.getText();
        if (text != null) {
            t10 = text.toString();
        } else {
            t10 = 0;
        }
        objectRef.element = t10;
        a aVar = new a(objectRef, c10, currency, numberFormat, currencyInstance, inputCurrencyComponent);
        if (inputCurrencyComponent.h() != null) {
            try {
                c10.f29244b.setText(currencyInstance.format(inputCurrencyComponent.h().doubleValue()));
            } catch (Exception unused) {
            }
        }
        c10.f29244b.addTextChangedListener(aVar);
        uiComponentHelper.d(new Function0() { // from class: fq.b1
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
    public static final Unit c(InputCurrency inputCurrency, iq.k kVar) {
        InputTextBasedComponentStyle styles = inputCurrency.getStyles();
        if (styles != null) {
            TextInputLayout inputLayout = kVar.f29245c;
            Intrinsics.checkNotNullExpressionValue(inputLayout, "inputLayout");
            kq.a0.k(inputLayout, styles);
        }
        return Unit.f32008a;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements TextWatcher {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Ref.ObjectRef f23419d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ iq.k f23420e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ Currency f23421i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ NumberFormat f23422o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ NumberFormat f23423p;

        /* renamed from: q  reason: collision with root package name */
        final /* synthetic */ InputCurrencyComponent f23424q;

        a(Ref.ObjectRef objectRef, iq.k kVar, Currency currency, NumberFormat numberFormat, NumberFormat numberFormat2, InputCurrencyComponent inputCurrencyComponent) {
            this.f23419d = objectRef;
            this.f23420e = kVar;
            this.f23421i = currency;
            this.f23422o = numberFormat;
            this.f23423p = numberFormat2;
            this.f23424q = inputCurrencyComponent;
        }

        /* JADX WARN: Multi-variable type inference failed */
        /* JADX WARN: Type inference failed for: r6v5, types: [T, java.lang.CharSequence, java.lang.String] */
        @Override // android.text.TextWatcher
        public void afterTextChanged(Editable editable) {
            if (!Intrinsics.areEqual(String.valueOf(editable), this.f23419d.element) && editable != null && !StringsKt.k0(editable)) {
                this.f23420e.f29244b.removeTextChangedListener(this);
                String quote = Pattern.quote(this.f23421i.getSymbol());
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
                Number parse = this.f23422o.parse(sb2.toString());
                if (parse != null) {
                    double doubleValue = parse.doubleValue() / 100.0d;
                    ?? format = this.f23423p.format(doubleValue);
                    this.f23419d.element = format;
                    this.f23420e.f29244b.setText((CharSequence) format);
                    this.f23420e.f29244b.setSelection(format.length());
                    this.f23420e.f29244b.addTextChangedListener(this);
                    this.f23424q.b().c(Double.valueOf(doubleValue));
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
