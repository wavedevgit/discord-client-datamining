package com.withpersona.sdk2.inquiry.steps.ui.components;

import android.view.View;
import android.widget.EditText;
import android.widget.TextView;
import androidx.constraintlayout.widget.ConstraintLayout;
import bn.u;
import com.facebook.react.views.textinput.ReactEditTextInputConnectionWrapper;
import com.google.android.material.textfield.TextInputLayout;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.InputInternationalDb;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.InputSelectComponentStyle;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.InputTextBasedComponentStyle;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.TextBasedComponentStyle;
import com.withpersona.sdk2.inquiry.steps.ui.components.b;
import dq.b4;
import dq.m5;
import dq.o1;
import dq.y3;
import gq.p;
import iq.a0;
import iq.f0;
import iq.o;
import java.util.Iterator;
import java.util.List;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class c {
    public static final /* synthetic */ b4 h(b.c cVar) {
        return l(cVar);
    }

    public static final /* synthetic */ b4 i(b.e eVar) {
        return m(eVar);
    }

    public static final ConstraintLayout j(b bVar, m5 uiComponentHelper, final InputInternationalDb config) {
        String str;
        String str2;
        String str3;
        Intrinsics.checkNotNullParameter(bVar, "<this>");
        Intrinsics.checkNotNullParameter(uiComponentHelper, "uiComponentHelper");
        Intrinsics.checkNotNullParameter(config, "config");
        final p c10 = p.c(uiComponentHelper.b());
        InputInternationalDb.Attributes attributes = config.getAttributes();
        TextView textView = c10.f25138h;
        String str4 = null;
        if (attributes != null) {
            str = attributes.getLabel();
        } else {
            str = null;
        }
        textView.setText(str);
        TextInputLayout textInputLayout = c10.f25133c;
        if (attributes != null) {
            str2 = attributes.getLabelIdbCountry();
        } else {
            str2 = null;
        }
        textInputLayout.setHint(str2);
        TextInputLayout textInputLayout2 = c10.f25136f;
        if (attributes != null) {
            str3 = attributes.getLabelIdbType();
        } else {
            str3 = null;
        }
        textInputLayout2.setHint(str3);
        TextInputLayout textInputLayout3 = c10.f25139i;
        if (attributes != null) {
            str4 = attributes.getLabelIdbValue();
        }
        textInputLayout3.setHint(str4);
        EditText editText = c10.f25139i.getEditText();
        if (editText != null) {
            u.b(bVar.s(), editText);
        }
        uiComponentHelper.d(new Function0() { // from class: dq.f1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit k10;
                k10 = com.withpersona.sdk2.inquiry.steps.ui.components.c.k(InputInternationalDb.this, c10);
                return k10;
            }
        });
        c10.getRoot().setTag(c10);
        ConstraintLayout root = c10.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        return root;
    }

    public static final Unit k(InputInternationalDb inputInternationalDb, p pVar) {
        InputInternationalDb.InputInternationalDbComponentStyle styles = inputInternationalDb.getStyles();
        if (styles != null) {
            InputSelectComponentStyle inputSelectStyle = styles.getInputSelectStyle();
            if (inputSelectStyle != null) {
                TextInputLayout idbCountryInput = pVar.f25133c;
                Intrinsics.checkNotNullExpressionValue(idbCountryInput, "idbCountryInput");
                o.i(idbCountryInput, inputSelectStyle);
                TextInputLayout idbIdTypeInput = pVar.f25136f;
                Intrinsics.checkNotNullExpressionValue(idbIdTypeInput, "idbIdTypeInput");
                o.i(idbIdTypeInput, inputSelectStyle);
            }
            InputTextBasedComponentStyle inputTextStyle = styles.getInputTextStyle();
            if (inputTextStyle != null) {
                TextInputLayout idbValueInput = pVar.f25139i;
                Intrinsics.checkNotNullExpressionValue(idbValueInput, "idbValueInput");
                a0.k(idbValueInput, inputTextStyle);
            }
            TextBasedComponentStyle textStyle = styles.getTextStyle();
            if (textStyle != null) {
                TextView idbDescription = pVar.f25135e;
                Intrinsics.checkNotNullExpressionValue(idbDescription, "idbDescription");
                f0.n(idbDescription, textStyle, null, 2, null);
            }
        }
        return Unit.f31988a;
    }

    public static final b4 l(b.c cVar) {
        return new b4(cVar.b(), cVar.a());
    }

    public static final b4 m(b.e eVar) {
        return new b4(eVar.b(), eVar.a());
    }

    public static final void n(b bVar, p binding, final Function0 onCountryInputClick, final Function0 onIdTypeInputClick, String str, String str2, String str3) {
        int i10;
        int i11;
        InputInternationalDb.IdType idType;
        String str4;
        Boolean bool;
        String str5;
        String str6;
        Object obj;
        Intrinsics.checkNotNullParameter(bVar, "<this>");
        Intrinsics.checkNotNullParameter(binding, "binding");
        Intrinsics.checkNotNullParameter(onCountryInputClick, "onCountryInputClick");
        Intrinsics.checkNotNullParameter(onIdTypeInputClick, "onIdTypeInputClick");
        EditText editText = binding.f25133c.getEditText();
        if (editText != null) {
            editText.setText(CollectionsKt.x0(bVar.f().b(), ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE, null, null, 0, null, new Function1() { // from class: dq.g1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj2) {
                    CharSequence s10;
                    s10 = com.withpersona.sdk2.inquiry.steps.ui.components.c.s((b4) obj2);
                    return s10;
                }
            }, 30, null));
        }
        EditText editText2 = binding.f25136f.getEditText();
        if (editText2 != null) {
            editText2.setText(CollectionsKt.x0(bVar.p().b(), ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE, null, null, 0, null, new Function1() { // from class: dq.h1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj2) {
                    CharSequence t10;
                    t10 = com.withpersona.sdk2.inquiry.steps.ui.components.c.t((b4) obj2);
                    return t10;
                }
            }, 30, null));
        }
        String u10 = bVar.u();
        String v10 = bVar.v();
        List e10 = bVar.e();
        List o10 = bVar.o();
        boolean i12 = bVar.i();
        boolean l10 = bVar.l();
        if (u10 == null) {
            binding.f25136f.setEnabled(false);
        } else {
            binding.f25136f.setEnabled(true);
        }
        if (u10 == null && e10 != null && e10.size() == 1) {
            bVar.f().c(CollectionsKt.e(l((b.c) CollectionsKt.o0(e10))));
            if (Intrinsics.areEqual(bVar.j(), Boolean.TRUE)) {
                i12 = true;
            }
        }
        if (u10 != null && o10 != null && o10.size() == 1) {
            bVar.p().c(CollectionsKt.e(m((b.e) CollectionsKt.o0(o10))));
            if (Intrinsics.areEqual(bVar.n(), Boolean.TRUE)) {
                l10 = true;
            }
        }
        TextInputLayout textInputLayout = binding.f25133c;
        if (i12) {
            i10 = 8;
        } else {
            i10 = 0;
        }
        textInputLayout.setVisibility(i10);
        TextInputLayout textInputLayout2 = binding.f25136f;
        if (l10) {
            i11 = 8;
        } else {
            i11 = 0;
        }
        textInputLayout2.setVisibility(i11);
        if (u10 != null && v10 != null) {
            binding.f25139i.setEnabled(true);
            List c10 = bVar.c();
            String str7 = null;
            if (c10 != null) {
                Iterator it = c10.iterator();
                while (true) {
                    if (it.hasNext()) {
                        obj = it.next();
                        InputInternationalDb.IdType idType2 = (InputInternationalDb.IdType) obj;
                        if (Intrinsics.areEqual(idType2.getCountryCode(), u10) && Intrinsics.areEqual(idType2.getIdType(), v10)) {
                            break;
                        }
                    } else {
                        obj = null;
                        break;
                    }
                }
                idType = (InputInternationalDb.IdType) obj;
            } else {
                idType = null;
            }
            TextInputLayout idbValueInput = binding.f25139i;
            Intrinsics.checkNotNullExpressionValue(idbValueInput, "idbValueInput");
            if (idType != null) {
                str4 = idType.getMask();
            } else {
                str4 = null;
            }
            if (idType != null) {
                bool = idType.getSecure();
            } else {
                bool = null;
            }
            if (idType != null) {
                str5 = idType.getPlaceholder();
            } else {
                str5 = null;
            }
            o1.d(idbValueInput, new y3(null, str4, bool, null, str5));
            if (idType != null) {
                str6 = idType.getDescription();
            } else {
                str6 = null;
            }
            if (str6 != null && !StringsKt.k0(str6)) {
                binding.f25135e.setVisibility(0);
                TextView textView = binding.f25135e;
                if (idType != null) {
                    str7 = idType.getDescription();
                }
                textView.setText(str7);
            } else {
                binding.f25135e.setVisibility(8);
            }
        } else {
            binding.f25139i.setEnabled(false);
            binding.f25135e.setVisibility(8);
        }
        binding.f25133c.setOnClickListener(new View.OnClickListener() { // from class: dq.i1
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                com.withpersona.sdk2.inquiry.steps.ui.components.c.o(Function0.this, view);
            }
        });
        EditText editText3 = binding.f25133c.getEditText();
        if (editText3 != null) {
            editText3.setOnClickListener(new View.OnClickListener() { // from class: dq.j1
                @Override // android.view.View.OnClickListener
                public final void onClick(View view) {
                    com.withpersona.sdk2.inquiry.steps.ui.components.c.p(Function0.this, view);
                }
            });
        }
        binding.f25136f.setOnClickListener(new View.OnClickListener() { // from class: dq.k1
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                com.withpersona.sdk2.inquiry.steps.ui.components.c.q(Function0.this, view);
            }
        });
        EditText editText4 = binding.f25136f.getEditText();
        if (editText4 != null) {
            editText4.setOnClickListener(new View.OnClickListener() { // from class: dq.l1
                @Override // android.view.View.OnClickListener
                public final void onClick(View view) {
                    com.withpersona.sdk2.inquiry.steps.ui.components.c.r(Function0.this, view);
                }
            });
        }
        binding.f25133c.setError(str);
        binding.f25136f.setError(str2);
        binding.f25139i.setError(str3);
    }

    public static final void o(Function0 function0, View view) {
        function0.invoke();
    }

    public static final void p(Function0 function0, View view) {
        function0.invoke();
    }

    public static final void q(Function0 function0, View view) {
        function0.invoke();
    }

    public static final void r(Function0 function0, View view) {
        function0.invoke();
    }

    public static final CharSequence s(b4 it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return it.getText();
    }

    public static final CharSequence t(b4 it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return it.getText();
    }
}
