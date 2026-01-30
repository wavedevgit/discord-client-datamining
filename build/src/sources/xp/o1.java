package xp;

import android.content.Context;
import android.text.Editable;
import android.text.TextWatcher;
import android.text.method.TransformationMethod;
import android.view.View;
import android.widget.EditText;
import com.google.android.material.textfield.TextInputLayout;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.InputMaskedText;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.InputTextBasedComponentStyle;
import com.withpersona.sdk2.inquiry.steps.ui.components.InputMaskedTextComponent;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
import xp.x3;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class o1 {
    public static final void d(final TextInputLayout textInputLayout, y3 newState) {
        y3 y3Var;
        EditText editText;
        final String b10;
        EditText editText2;
        Intrinsics.checkNotNullParameter(textInputLayout, "<this>");
        Intrinsics.checkNotNullParameter(newState, "newState");
        Object tag = textInputLayout.getTag(vp.e.f51804b0);
        TextWatcher textWatcher = null;
        if (tag instanceof y3) {
            y3Var = (y3) tag;
        } else {
            y3Var = null;
        }
        if (Intrinsics.areEqual(y3Var, newState)) {
            return;
        }
        textInputLayout.setTag(vp.e.f51804b0, newState);
        CharSequence d10 = newState.d();
        if (d10 != null && (editText2 = textInputLayout.getEditText()) != null) {
            editText2.setText(d10);
        }
        CharSequence a10 = newState.a();
        if (a10 != null) {
            textInputLayout.setHint(a10);
        }
        CharSequence c10 = newState.c();
        if (c10 != null) {
            textInputLayout.setPlaceholderText(c10);
            tp.o.a(textInputLayout);
        }
        if (Intrinsics.areEqual(newState.e(), Boolean.TRUE) && (b10 = newState.b()) != null) {
            textInputLayout.setEndIconMode(-1);
            textInputLayout.setEndIconDrawable(androidx.core.content.a.e(textInputLayout.getContext(), vp.d.f51799d));
            textInputLayout.setEndIconContentDescription(textInputLayout.getContext().getString(bp.e.R));
            EditText editText3 = textInputLayout.getEditText();
            if (editText3 != null) {
                editText3.setTransformationMethod(new s4(b10));
            }
            textInputLayout.setEndIconOnClickListener(new View.OnClickListener() { // from class: xp.n1
                @Override // android.view.View.OnClickListener
                public final void onClick(View view) {
                    o1.e(TextInputLayout.this, b10, view);
                }
            });
        }
        Object tag2 = textInputLayout.getTag(vp.e.f51818i0);
        if (tag2 instanceof z3) {
            textWatcher = (z3) tag2;
        }
        if (textWatcher != null && (editText = textInputLayout.getEditText()) != null) {
            editText.removeTextChangedListener(textWatcher);
        }
        String b11 = newState.b();
        if (b11 != null && !StringsKt.k0(b11)) {
            TextWatcher z3Var = new z3(newState.b());
            EditText editText4 = textInputLayout.getEditText();
            if (editText4 != null) {
                editText4.addTextChangedListener(z3Var);
            }
            textInputLayout.setTag(vp.e.f51818i0, z3Var);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void e(TextInputLayout textInputLayout, String str, View view) {
        TransformationMethod transformationMethod;
        boolean z10;
        int i10;
        EditText editText = textInputLayout.getEditText();
        s4 s4Var = null;
        if (editText != null) {
            transformationMethod = editText.getTransformationMethod();
        } else {
            transformationMethod = null;
        }
        if (transformationMethod != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        EditText editText2 = textInputLayout.getEditText();
        if (editText2 != null) {
            if (!z10) {
                s4Var = new s4(str);
            }
            editText2.setTransformationMethod(s4Var);
        }
        Context context = textInputLayout.getContext();
        if (z10) {
            i10 = vp.d.f51798c;
        } else {
            i10 = vp.d.f51799d;
        }
        textInputLayout.setEndIconDrawable(androidx.core.content.a.e(context, i10));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void f(Editable editable, String str) {
        StringBuilder sb2 = new StringBuilder();
        int i10 = 0;
        for (int i11 = 0; i11 < str.length(); i11++) {
            char charAt = str.charAt(i11);
            x3 a10 = x3.f53775a.a(charAt);
            while (true) {
                if (i10 < editable.length()) {
                    char charAt2 = editable.charAt(i10);
                    if (a10.a(charAt2)) {
                        sb2.append(charAt2);
                        i10++;
                        break;
                    } else if (a10 instanceof x3.e) {
                        sb2.append(charAt);
                        break;
                    } else {
                        i10++;
                    }
                }
            }
        }
        editable.replace(0, editable.length(), sb2);
    }

    public static final TextInputLayout g(InputMaskedTextComponent inputMaskedTextComponent, m5 uiComponentHelper, final InputMaskedText config) {
        String str;
        String str2;
        Boolean bool;
        String str3;
        Intrinsics.checkNotNullParameter(inputMaskedTextComponent, "<this>");
        Intrinsics.checkNotNullParameter(uiComponentHelper, "uiComponentHelper");
        Intrinsics.checkNotNullParameter(config, "config");
        final aq.u c10 = aq.u.c(uiComponentHelper.b());
        TextInputLayout root = c10.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        InputMaskedText.Attributes attributes = config.getAttributes();
        String str4 = null;
        if (attributes != null) {
            str = attributes.getPrefill();
        } else {
            str = null;
        }
        InputMaskedText.Attributes attributes2 = config.getAttributes();
        if (attributes2 != null) {
            str2 = attributes2.getMask();
        } else {
            str2 = null;
        }
        InputMaskedText.Attributes attributes3 = config.getAttributes();
        if (attributes3 != null) {
            bool = attributes3.getSecure();
        } else {
            bool = null;
        }
        InputMaskedText.Attributes attributes4 = config.getAttributes();
        if (attributes4 != null) {
            str3 = attributes4.getLabel();
        } else {
            str3 = null;
        }
        InputMaskedText.Attributes attributes5 = config.getAttributes();
        if (attributes5 != null) {
            str4 = attributes5.getPlaceholder();
        }
        d(root, new y3(str, str2, bool, str3, str4));
        EditText editText = c10.getRoot().getEditText();
        if (editText != null) {
            vm.u.b(inputMaskedTextComponent.b(), editText);
        }
        uiComponentHelper.d(new Function0() { // from class: xp.m1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit h10;
                h10 = o1.h(InputMaskedText.this, c10);
                return h10;
            }
        });
        TextInputLayout root2 = c10.getRoot();
        Intrinsics.checkNotNullExpressionValue(root2, "getRoot(...)");
        return root2;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit h(InputMaskedText inputMaskedText, aq.u uVar) {
        InputTextBasedComponentStyle styles = inputMaskedText.getStyles();
        if (styles != null) {
            TextInputLayout root = uVar.getRoot();
            Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
            cq.a0.k(root, styles);
        }
        return Unit.f33298a;
    }
}
