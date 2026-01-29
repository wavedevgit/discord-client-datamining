package com.withpersona.sdk2.inquiry.steps.ui.components;

import android.view.View;
import android.widget.EditText;
import android.widget.TextView;
import androidx.constraintlayout.widget.ConstraintLayout;
import aq.p;
import com.facebook.react.views.textinput.ReactEditTextInputConnectionWrapper;
import com.google.android.material.textfield.TextInputLayout;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.InputInternationalDb;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.InputSelectComponentStyle;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.InputTextBasedComponentStyle;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.TextBasedComponentStyle;
import com.withpersona.sdk2.inquiry.steps.ui.components.b;
import cq.a0;
import cq.f0;
import cq.o;
import java.util.Iterator;
import java.util.List;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
import vm.u;
import xp.b4;
import xp.m5;
import xp.o1;
import xp.y3;
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
        TextView textView = c10.f6684h;
        String str4 = null;
        if (attributes != null) {
            str = attributes.getLabel();
        } else {
            str = null;
        }
        textView.setText(str);
        TextInputLayout textInputLayout = c10.f6679c;
        if (attributes != null) {
            str2 = attributes.getLabelIdbCountry();
        } else {
            str2 = null;
        }
        textInputLayout.setHint(str2);
        TextInputLayout textInputLayout2 = c10.f6682f;
        if (attributes != null) {
            str3 = attributes.getLabelIdbType();
        } else {
            str3 = null;
        }
        textInputLayout2.setHint(str3);
        TextInputLayout textInputLayout3 = c10.f6685i;
        if (attributes != null) {
            str4 = attributes.getLabelIdbValue();
        }
        textInputLayout3.setHint(str4);
        EditText editText = c10.f6685i.getEditText();
        if (editText != null) {
            u.b(bVar.r(), editText);
        }
        uiComponentHelper.d(new Function0() { // from class: xp.f1
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
                TextInputLayout idbCountryInput = pVar.f6679c;
                Intrinsics.checkNotNullExpressionValue(idbCountryInput, "idbCountryInput");
                o.i(idbCountryInput, inputSelectStyle);
                TextInputLayout idbIdTypeInput = pVar.f6682f;
                Intrinsics.checkNotNullExpressionValue(idbIdTypeInput, "idbIdTypeInput");
                o.i(idbIdTypeInput, inputSelectStyle);
            }
            InputTextBasedComponentStyle inputTextStyle = styles.getInputTextStyle();
            if (inputTextStyle != null) {
                TextInputLayout idbValueInput = pVar.f6685i;
                Intrinsics.checkNotNullExpressionValue(idbValueInput, "idbValueInput");
                a0.k(idbValueInput, inputTextStyle);
            }
            TextBasedComponentStyle textStyle = styles.getTextStyle();
            if (textStyle != null) {
                TextView idbDescription = pVar.f6681e;
                Intrinsics.checkNotNullExpressionValue(idbDescription, "idbDescription");
                f0.n(idbDescription, textStyle, null, 2, null);
            }
        }
        return Unit.f33282a;
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
        EditText editText = binding.f6679c.getEditText();
        if (editText != null) {
            editText.setText(CollectionsKt.x0(bVar.f().b(), ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE, null, null, 0, null, new Function1() { // from class: xp.g1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj2) {
                    CharSequence s10;
                    s10 = com.withpersona.sdk2.inquiry.steps.ui.components.c.s((b4) obj2);
                    return s10;
                }
            }, 30, null));
        }
        EditText editText2 = binding.f6682f.getEditText();
        if (editText2 != null) {
            editText2.setText(CollectionsKt.x0(bVar.o().b(), ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE, null, null, 0, null, new Function1() { // from class: xp.h1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj2) {
                    CharSequence t10;
                    t10 = com.withpersona.sdk2.inquiry.steps.ui.components.c.t((b4) obj2);
                    return t10;
                }
            }, 30, null));
        }
        String t10 = bVar.t();
        String u10 = bVar.u();
        List e10 = bVar.e();
        List n10 = bVar.n();
        boolean i12 = bVar.i();
        boolean k10 = bVar.k();
        if (t10 == null) {
            binding.f6682f.setEnabled(false);
        } else {
            binding.f6682f.setEnabled(true);
        }
        if (t10 == null && e10 != null && e10.size() == 1) {
            bVar.f().c(CollectionsKt.e(l((b.c) CollectionsKt.o0(e10))));
            if (Intrinsics.areEqual(bVar.j(), Boolean.TRUE)) {
                i12 = true;
            }
        }
        if (t10 != null && n10 != null && n10.size() == 1) {
            bVar.o().c(CollectionsKt.e(m((b.e) CollectionsKt.o0(n10))));
            if (Intrinsics.areEqual(bVar.m(), Boolean.TRUE)) {
                k10 = true;
            }
        }
        TextInputLayout textInputLayout = binding.f6679c;
        if (i12) {
            i10 = 8;
        } else {
            i10 = 0;
        }
        textInputLayout.setVisibility(i10);
        TextInputLayout textInputLayout2 = binding.f6682f;
        if (k10) {
            i11 = 8;
        } else {
            i11 = 0;
        }
        textInputLayout2.setVisibility(i11);
        if (t10 != null && u10 != null) {
            binding.f6685i.setEnabled(true);
            List c10 = bVar.c();
            String str7 = null;
            if (c10 != null) {
                Iterator it = c10.iterator();
                while (true) {
                    if (it.hasNext()) {
                        obj = it.next();
                        InputInternationalDb.IdType idType2 = (InputInternationalDb.IdType) obj;
                        if (Intrinsics.areEqual(idType2.getCountryCode(), t10) && Intrinsics.areEqual(idType2.getIdType(), u10)) {
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
            TextInputLayout idbValueInput = binding.f6685i;
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
                binding.f6681e.setVisibility(0);
                TextView textView = binding.f6681e;
                if (idType != null) {
                    str7 = idType.getDescription();
                }
                textView.setText(str7);
            } else {
                binding.f6681e.setVisibility(8);
            }
        } else {
            binding.f6685i.setEnabled(false);
            binding.f6681e.setVisibility(8);
        }
        binding.f6679c.setOnClickListener(new View.OnClickListener() { // from class: xp.i1
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                com.withpersona.sdk2.inquiry.steps.ui.components.c.o(Function0.this, view);
            }
        });
        EditText editText3 = binding.f6679c.getEditText();
        if (editText3 != null) {
            editText3.setOnClickListener(new View.OnClickListener() { // from class: xp.j1
                @Override // android.view.View.OnClickListener
                public final void onClick(View view) {
                    com.withpersona.sdk2.inquiry.steps.ui.components.c.p(Function0.this, view);
                }
            });
        }
        binding.f6682f.setOnClickListener(new View.OnClickListener() { // from class: xp.k1
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                com.withpersona.sdk2.inquiry.steps.ui.components.c.q(Function0.this, view);
            }
        });
        EditText editText4 = binding.f6682f.getEditText();
        if (editText4 != null) {
            editText4.setOnClickListener(new View.OnClickListener() { // from class: xp.l1
                @Override // android.view.View.OnClickListener
                public final void onClick(View view) {
                    com.withpersona.sdk2.inquiry.steps.ui.components.c.r(Function0.this, view);
                }
            });
        }
        binding.f6679c.setError(str);
        binding.f6682f.setError(str2);
        binding.f6685i.setError(str3);
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
