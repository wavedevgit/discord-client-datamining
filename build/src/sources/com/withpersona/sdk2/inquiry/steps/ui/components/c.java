package com.withpersona.sdk2.inquiry.steps.ui.components;

import android.view.View;
import android.widget.EditText;
import android.widget.TextView;
import androidx.constraintlayout.widget.ConstraintLayout;
import com.facebook.react.views.textinput.ReactEditTextInputConnectionWrapper;
import com.google.android.material.textfield.TextInputLayout;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.InputInternationalDb;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.InputSelectComponentStyle;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.InputTextBasedComponentStyle;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.TextBasedComponentStyle;
import com.withpersona.sdk2.inquiry.steps.ui.components.b;
import dn.u;
import fq.b4;
import fq.m5;
import fq.o1;
import fq.y3;
import iq.p;
import java.util.Iterator;
import java.util.List;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
import kq.a0;
import kq.f0;
import kq.o;
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
        TextView textView = c10.f29265h;
        String str4 = null;
        if (attributes != null) {
            str = attributes.getLabel();
        } else {
            str = null;
        }
        textView.setText(str);
        TextInputLayout textInputLayout = c10.f29260c;
        if (attributes != null) {
            str2 = attributes.getLabelIdbCountry();
        } else {
            str2 = null;
        }
        textInputLayout.setHint(str2);
        TextInputLayout textInputLayout2 = c10.f29263f;
        if (attributes != null) {
            str3 = attributes.getLabelIdbType();
        } else {
            str3 = null;
        }
        textInputLayout2.setHint(str3);
        TextInputLayout textInputLayout3 = c10.f29266i;
        if (attributes != null) {
            str4 = attributes.getLabelIdbValue();
        }
        textInputLayout3.setHint(str4);
        EditText editText = c10.f29266i.getEditText();
        if (editText != null) {
            u.b(bVar.u(), editText);
        }
        uiComponentHelper.d(new Function0() { // from class: fq.f1
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
                TextInputLayout idbCountryInput = pVar.f29260c;
                Intrinsics.checkNotNullExpressionValue(idbCountryInput, "idbCountryInput");
                o.i(idbCountryInput, inputSelectStyle);
                TextInputLayout idbIdTypeInput = pVar.f29263f;
                Intrinsics.checkNotNullExpressionValue(idbIdTypeInput, "idbIdTypeInput");
                o.i(idbIdTypeInput, inputSelectStyle);
            }
            InputTextBasedComponentStyle inputTextStyle = styles.getInputTextStyle();
            if (inputTextStyle != null) {
                TextInputLayout idbValueInput = pVar.f29266i;
                Intrinsics.checkNotNullExpressionValue(idbValueInput, "idbValueInput");
                a0.k(idbValueInput, inputTextStyle);
            }
            TextBasedComponentStyle textStyle = styles.getTextStyle();
            if (textStyle != null) {
                TextView idbDescription = pVar.f29262e;
                Intrinsics.checkNotNullExpressionValue(idbDescription, "idbDescription");
                f0.n(idbDescription, textStyle, null, 2, null);
            }
        }
        return Unit.f32008a;
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
        EditText editText = binding.f29260c.getEditText();
        if (editText != null) {
            editText.setText(CollectionsKt.x0(bVar.f().b(), ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE, null, null, 0, null, new Function1() { // from class: fq.g1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj2) {
                    CharSequence s10;
                    s10 = com.withpersona.sdk2.inquiry.steps.ui.components.c.s((b4) obj2);
                    return s10;
                }
            }, 30, null));
        }
        EditText editText2 = binding.f29263f.getEditText();
        if (editText2 != null) {
            editText2.setText(CollectionsKt.x0(bVar.q().b(), ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE, null, null, 0, null, new Function1() { // from class: fq.h1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj2) {
                    CharSequence t10;
                    t10 = com.withpersona.sdk2.inquiry.steps.ui.components.c.t((b4) obj2);
                    return t10;
                }
            }, 30, null));
        }
        String w10 = bVar.w();
        String x10 = bVar.x();
        List e10 = bVar.e();
        List p10 = bVar.p();
        boolean i12 = bVar.i();
        boolean l10 = bVar.l();
        if (w10 == null) {
            binding.f29263f.setEnabled(false);
        } else {
            binding.f29263f.setEnabled(true);
        }
        if (w10 == null && e10 != null && e10.size() == 1) {
            bVar.f().c(CollectionsKt.e(l((b.c) CollectionsKt.o0(e10))));
            if (Intrinsics.areEqual(bVar.j(), Boolean.TRUE)) {
                i12 = true;
            }
        }
        if (w10 != null && p10 != null && p10.size() == 1) {
            bVar.q().c(CollectionsKt.e(m((b.e) CollectionsKt.o0(p10))));
            if (Intrinsics.areEqual(bVar.o(), Boolean.TRUE)) {
                l10 = true;
            }
        }
        TextInputLayout textInputLayout = binding.f29260c;
        if (i12) {
            i10 = 8;
        } else {
            i10 = 0;
        }
        textInputLayout.setVisibility(i10);
        TextInputLayout textInputLayout2 = binding.f29263f;
        if (l10) {
            i11 = 8;
        } else {
            i11 = 0;
        }
        textInputLayout2.setVisibility(i11);
        if (w10 != null && x10 != null) {
            binding.f29266i.setEnabled(true);
            List c10 = bVar.c();
            String str7 = null;
            if (c10 != null) {
                Iterator it = c10.iterator();
                while (true) {
                    if (it.hasNext()) {
                        obj = it.next();
                        InputInternationalDb.IdType idType2 = (InputInternationalDb.IdType) obj;
                        if (Intrinsics.areEqual(idType2.getCountryCode(), w10) && Intrinsics.areEqual(idType2.getIdType(), x10)) {
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
            TextInputLayout idbValueInput = binding.f29266i;
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
                binding.f29262e.setVisibility(0);
                TextView textView = binding.f29262e;
                if (idType != null) {
                    str7 = idType.getDescription();
                }
                textView.setText(str7);
            } else {
                binding.f29262e.setVisibility(8);
            }
        } else {
            binding.f29266i.setEnabled(false);
            binding.f29262e.setVisibility(8);
        }
        binding.f29260c.setOnClickListener(new View.OnClickListener() { // from class: fq.i1
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                com.withpersona.sdk2.inquiry.steps.ui.components.c.o(Function0.this, view);
            }
        });
        EditText editText3 = binding.f29260c.getEditText();
        if (editText3 != null) {
            editText3.setOnClickListener(new View.OnClickListener() { // from class: fq.j1
                @Override // android.view.View.OnClickListener
                public final void onClick(View view) {
                    com.withpersona.sdk2.inquiry.steps.ui.components.c.p(Function0.this, view);
                }
            });
        }
        binding.f29263f.setOnClickListener(new View.OnClickListener() { // from class: fq.k1
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                com.withpersona.sdk2.inquiry.steps.ui.components.c.q(Function0.this, view);
            }
        });
        EditText editText4 = binding.f29263f.getEditText();
        if (editText4 != null) {
            editText4.setOnClickListener(new View.OnClickListener() { // from class: fq.l1
                @Override // android.view.View.OnClickListener
                public final void onClick(View view) {
                    com.withpersona.sdk2.inquiry.steps.ui.components.c.r(Function0.this, view);
                }
            });
        }
        binding.f29260c.setError(str);
        binding.f29263f.setError(str2);
        binding.f29266i.setError(str3);
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
