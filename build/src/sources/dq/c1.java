package dq;

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
        final gq.k c10 = gq.k.c(uiComponentHelper.b());
        InputCurrency.Attributes attributes = config.getAttributes();
        String str = "USD";
        if (attributes != null) {
            String label = attributes.getLabel();
            if (label != null) {
                c10.f25118c.setHint(label);
            }
            String placeholder = attributes.getPlaceholder();
            if (placeholder != null) {
                c10.f25118c.setPlaceholderText(placeholder);
                TextInputLayout inputLayout = c10.f25118c;
                Intrinsics.checkNotNullExpressionValue(inputLayout, "inputLayout");
                zp.o.a(inputLayout);
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
        Editable text = c10.f25117b.getText();
        if (text != null) {
            t10 = text.toString();
        } else {
            t10 = 0;
        }
        objectRef.element = t10;
        a aVar = new a(objectRef, c10, currency, numberFormat, currencyInstance, inputCurrencyComponent);
        if (inputCurrencyComponent.g() != null) {
            try {
                c10.f25117b.setText(currencyInstance.format(inputCurrencyComponent.g().doubleValue()));
            } catch (Exception unused) {
            }
        }
        c10.f25117b.addTextChangedListener(aVar);
        uiComponentHelper.d(new Function0() { // from class: dq.b1
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
    public static final Unit c(InputCurrency inputCurrency, gq.k kVar) {
        InputTextBasedComponentStyle styles = inputCurrency.getStyles();
        if (styles != null) {
            TextInputLayout inputLayout = kVar.f25118c;
            Intrinsics.checkNotNullExpressionValue(inputLayout, "inputLayout");
            iq.a0.k(inputLayout, styles);
        }
        return Unit.f31988a;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements TextWatcher {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Ref.ObjectRef f20942d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ gq.k f20943e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ Currency f20944i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ NumberFormat f20945o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ NumberFormat f20946p;

        /* renamed from: q  reason: collision with root package name */
        final /* synthetic */ InputCurrencyComponent f20947q;

        a(Ref.ObjectRef objectRef, gq.k kVar, Currency currency, NumberFormat numberFormat, NumberFormat numberFormat2, InputCurrencyComponent inputCurrencyComponent) {
            this.f20942d = objectRef;
            this.f20943e = kVar;
            this.f20944i = currency;
            this.f20945o = numberFormat;
            this.f20946p = numberFormat2;
            this.f20947q = inputCurrencyComponent;
        }

        /* JADX WARN: Multi-variable type inference failed */
        /* JADX WARN: Type inference failed for: r6v5, types: [T, java.lang.CharSequence, java.lang.String] */
        @Override // android.text.TextWatcher
        public void afterTextChanged(Editable editable) {
            if (!Intrinsics.areEqual(String.valueOf(editable), this.f20942d.element) && editable != null && !StringsKt.k0(editable)) {
                this.f20943e.f25117b.removeTextChangedListener(this);
                String quote = Pattern.quote(this.f20944i.getSymbol());
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
                Number parse = this.f20945o.parse(sb2.toString());
                if (parse != null) {
                    double doubleValue = parse.doubleValue() / 100.0d;
                    ?? format = this.f20946p.format(doubleValue);
                    this.f20942d.element = format;
                    this.f20943e.f25117b.setText((CharSequence) format);
                    this.f20943e.f25117b.setSelection(format.length());
                    this.f20943e.f25117b.addTextChangedListener(this);
                    this.f20947q.b().c(Double.valueOf(doubleValue));
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
