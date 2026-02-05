package dq;

import android.os.Build;
import com.google.android.material.textfield.TextInputEditText;
import com.google.android.material.textfield.TextInputLayout;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.InputText;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.InputTextBasedComponentStyle;
import com.withpersona.sdk2.inquiry.steps.ui.components.InputTextComponent;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class i2 {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class a {

        /* renamed from: a */
        public static final /* synthetic */ int[] f21018a;

        /* renamed from: b */
        public static final /* synthetic */ int[] f21019b;

        static {
            int[] iArr = new int[InputText.InputType.values().length];
            try {
                iArr[InputText.InputType.TEXT.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[InputText.InputType.EMAIL.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[InputText.InputType.NUMBER_PAD.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            f21018a = iArr;
            int[] iArr2 = new int[InputText.AutofillHint.values().length];
            try {
                iArr2[InputText.AutofillHint.NAME.ordinal()] = 1;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr2[InputText.AutofillHint.NAME_FIRST.ordinal()] = 2;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                iArr2[InputText.AutofillHint.NAME_MIDDLE.ordinal()] = 3;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                iArr2[InputText.AutofillHint.NAME_LAST.ordinal()] = 4;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                iArr2[InputText.AutofillHint.EMAIL.ordinal()] = 5;
            } catch (NoSuchFieldError unused8) {
            }
            try {
                iArr2[InputText.AutofillHint.ADDRESS_LINE_1.ordinal()] = 6;
            } catch (NoSuchFieldError unused9) {
            }
            try {
                iArr2[InputText.AutofillHint.ADDRESS_LINE_2.ordinal()] = 7;
            } catch (NoSuchFieldError unused10) {
            }
            try {
                iArr2[InputText.AutofillHint.CITY.ordinal()] = 8;
            } catch (NoSuchFieldError unused11) {
            }
            try {
                iArr2[InputText.AutofillHint.COUNTRY.ordinal()] = 9;
            } catch (NoSuchFieldError unused12) {
            }
            try {
                iArr2[InputText.AutofillHint.POSTAL_CODE.ordinal()] = 10;
            } catch (NoSuchFieldError unused13) {
            }
            f21019b = iArr2;
        }
    }

    public static final TextInputLayout b(InputTextComponent inputTextComponent, m5 uiComponentHelper, final InputText config, bn.t textController) {
        String str;
        Intrinsics.checkNotNullParameter(inputTextComponent, "<this>");
        Intrinsics.checkNotNullParameter(uiComponentHelper, "uiComponentHelper");
        Intrinsics.checkNotNullParameter(config, "config");
        Intrinsics.checkNotNullParameter(textController, "textController");
        final gq.o c10 = gq.o.c(uiComponentHelper.b());
        TextInputEditText editText = c10.f25129b;
        Intrinsics.checkNotNullExpressionValue(editText, "editText");
        bn.u.b(textController, editText);
        InputText.Attributes attributes = config.getAttributes();
        if (attributes != null) {
            String label = attributes.getLabel();
            if (label != null) {
                c10.f25130c.setHint(label);
            }
            String placeholder = attributes.getPlaceholder();
            if (placeholder != null) {
                c10.f25130c.setPlaceholderText(placeholder);
                TextInputLayout inputLayout = c10.f25130c;
                Intrinsics.checkNotNullExpressionValue(inputLayout, "inputLayout");
                zp.o.a(inputLayout);
            }
            c10.f25129b.setInputType(e(attributes.getInputType()));
            if (Build.VERSION.SDK_INT >= 26) {
                InputText.AutofillHint autofillHint = attributes.getAutofillHint();
                if (autofillHint != null) {
                    str = f(autofillHint);
                } else {
                    str = null;
                }
                c10.f25130c.setAutofillHints(new String[]{str});
            }
        }
        uiComponentHelper.d(new Function0() { // from class: dq.h2
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit d10;
                d10 = i2.d(InputText.this, c10);
                return d10;
            }
        });
        TextInputLayout root = c10.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        return root;
    }

    public static /* synthetic */ TextInputLayout c(InputTextComponent inputTextComponent, m5 m5Var, InputText inputText, bn.t tVar, int i10, Object obj) {
        if ((i10 & 4) != 0) {
            tVar = inputTextComponent.b();
        }
        return b(inputTextComponent, m5Var, inputText, tVar);
    }

    public static final Unit d(InputText inputText, gq.o oVar) {
        InputTextBasedComponentStyle styles = inputText.getStyles();
        if (styles != null) {
            TextInputLayout inputLayout = oVar.f25130c;
            Intrinsics.checkNotNullExpressionValue(inputLayout, "inputLayout");
            iq.a0.k(inputLayout, styles);
        }
        return Unit.f31988a;
    }

    private static final int e(InputText.InputType inputType) {
        int i10 = a.f21018a[inputType.ordinal()];
        if (i10 == 1) {
            return 1;
        }
        if (i10 != 2) {
            if (i10 == 3) {
                return 2;
            }
            throw new or.p();
        }
        return 32;
    }

    private static final String f(InputText.AutofillHint autofillHint) {
        switch (a.f21019b[autofillHint.ordinal()]) {
            case 1:
                return "personName";
            case 2:
                return "personGivenName";
            case 3:
                return "personMiddleName";
            case 4:
                return "personFamilyName";
            case 5:
                return "emailAddress";
            case 6:
                return "streetAddress";
            case 7:
                return "extendedAddress";
            case 8:
                return "addressLocality";
            case 9:
                return "addressCountry";
            case 10:
                return "postalCode";
            default:
                throw new or.p();
        }
    }
}
