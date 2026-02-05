package dq;

import android.content.Context;
import android.text.Editable;
import android.view.KeyEvent;
import android.view.View;
import android.widget.EditText;
import androidx.constraintlayout.widget.ConstraintLayout;
import com.google.android.material.textfield.TextInputLayout;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.InputConfirmationCode;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.InputTextBasedComponentStyle;
import com.withpersona.sdk2.inquiry.steps.ui.components.InputConfirmationCodeComponent;
import java.util.List;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.collections.IndexedValue;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.sequences.Sequence;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a1 {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        public static final a f20929d = new a();

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final Boolean invoke(Object obj) {
            return Boolean.valueOf(obj instanceof TextInputLayout);
        }
    }

    public static final ConstraintLayout f(InputConfirmationCodeComponent inputConfirmationCodeComponent, m5 uiComponentHelper, final InputConfirmationCode config) {
        final InputConfirmationCodeComponent inputConfirmationCodeComponent2;
        Intrinsics.checkNotNullParameter(inputConfirmationCodeComponent, "<this>");
        Intrinsics.checkNotNullParameter(uiComponentHelper, "uiComponentHelper");
        Intrinsics.checkNotNullParameter(config, "config");
        final gq.c c10 = gq.c.c(uiComponentHelper.b());
        String b10 = inputConfirmationCodeComponent.b().b();
        final List o10 = CollectionsKt.o(c10.f25063b.getEditText(), c10.f25066e.getEditText(), c10.f25068g.getEditText(), c10.f25065d.getEditText());
        for (IndexedValue indexedValue : CollectionsKt.n1(o10)) {
            int a10 = indexedValue.a();
            final EditText editText = (EditText) indexedValue.b();
            final EditText editText2 = (EditText) CollectionsKt.q0(o10, a10 - 1);
            final EditText editText3 = (EditText) CollectionsKt.q0(o10, a10 + 1);
            Character s12 = StringsKt.s1(b10, a10);
            if (s12 != null) {
                char charValue = s12.charValue();
                if (editText != null) {
                    editText.setText(String.valueOf(charValue));
                }
            }
            if (editText != null) {
                inputConfirmationCodeComponent2 = inputConfirmationCodeComponent;
                pp.a0.b(editText, new Function1() { // from class: dq.v0
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        Unit g10;
                        g10 = a1.g(InputConfirmationCodeComponent.this, c10, o10, editText, editText2, editText3, (String) obj);
                        return g10;
                    }
                });
            } else {
                inputConfirmationCodeComponent2 = inputConfirmationCodeComponent;
            }
            if (editText2 != null) {
                l(editText, new Function0() { // from class: dq.w0
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit h10;
                        h10 = a1.h(editText2);
                        return h10;
                    }
                });
            }
            n(editText);
            inputConfirmationCodeComponent = inputConfirmationCodeComponent2;
        }
        uiComponentHelper.d(new Function0() { // from class: dq.x0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit i10;
                i10 = a1.i(gq.c.this, config);
                return i10;
            }
        });
        ConstraintLayout root = c10.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        return root;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit g(InputConfirmationCodeComponent inputConfirmationCodeComponent, gq.c cVar, List list, EditText editText, EditText editText2, EditText editText3, String newText) {
        Context context;
        Intrinsics.checkNotNullParameter(newText, "newText");
        bn.t b10 = inputConfirmationCodeComponent.b();
        fq.a aVar = fq.a.f23416a;
        ConstraintLayout root = cVar.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        b10.c(aVar.a(root));
        if (newText.length() >= list.size()) {
            j(newText, list);
        } else if (newText.length() > 1) {
            k(editText, newText);
        } else if (StringsKt.k0(newText) && editText2 != null) {
            editText2.requestFocus();
            editText2.setSelection(editText2.length());
        } else if (!StringsKt.k0(newText) && editText3 != null) {
            editText3.requestFocus();
        } else if (!StringsKt.k0(newText)) {
            inputConfirmationCodeComponent.f().b().invoke();
            EditText editText4 = cVar.f25065d.getEditText();
            if (editText4 != null && (context = editText4.getContext()) != null) {
                pp.f.d(context);
            }
            EditText editText5 = cVar.f25065d.getEditText();
            if (editText5 != null) {
                editText5.clearFocus();
            }
        }
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit h(EditText editText) {
        editText.requestFocus();
        editText.setSelection(editText.length());
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit i(gq.c cVar, InputConfirmationCode inputConfirmationCode) {
        ConstraintLayout root = cVar.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        Sequence<TextInputLayout> F = kotlin.sequences.k.F(androidx.core.view.n0.a(root), a.f20929d);
        Intrinsics.checkNotNull(F, "null cannot be cast to non-null type kotlin.sequences.Sequence<R of kotlin.sequences.SequencesKt___SequencesKt.filterIsInstance>");
        for (TextInputLayout textInputLayout : F) {
            InputTextBasedComponentStyle styles = inputConfirmationCode.getStyles();
            if (styles != null) {
                iq.a0.k(textInputLayout, styles);
            }
        }
        return Unit.f31988a;
    }

    private static final void j(String str, List list) {
        if (str.length() >= list.size()) {
            int size = list.size();
            for (int i10 = 0; i10 < size; i10++) {
                int length = (str.length() - list.size()) + i10;
                EditText editText = (EditText) list.get(i10);
                if (editText != null) {
                    editText.setText(String.valueOf(str.charAt(length)));
                }
            }
        }
    }

    private static final void k(EditText editText, String str) {
        if (editText.getSelectionStart() == 1) {
            editText.setText(String.valueOf(StringsKt.r1(str)));
        } else {
            editText.setText(String.valueOf(StringsKt.t1(str)));
        }
    }

    private static final void l(final EditText editText, final Function0 function0) {
        if (editText != null) {
            editText.setOnKeyListener(new View.OnKeyListener() { // from class: dq.z0
                @Override // android.view.View.OnKeyListener
                public final boolean onKey(View view, int i10, KeyEvent keyEvent) {
                    boolean m10;
                    m10 = a1.m(editText, function0, view, i10, keyEvent);
                    return m10;
                }
            });
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean m(EditText editText, Function0 function0, View view, int i10, KeyEvent keyEvent) {
        if (i10 == 67 && keyEvent.getAction() == 0) {
            Editable text = editText.getText();
            Intrinsics.checkNotNullExpressionValue(text, "getText(...)");
            if (text.length() == 0) {
                function0.invoke();
                return true;
            }
            return false;
        }
        return false;
    }

    private static final void n(final EditText editText) {
        if (editText != null) {
            editText.setOnFocusChangeListener(new View.OnFocusChangeListener() { // from class: dq.y0
                @Override // android.view.View.OnFocusChangeListener
                public final void onFocusChange(View view, boolean z10) {
                    a1.o(editText, view, z10);
                }
            });
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void o(EditText editText, View view, boolean z10) {
        int i10;
        if (z10) {
            Editable text = editText.getText();
            if (text != null) {
                i10 = text.length();
            } else {
                i10 = 0;
            }
            editText.setSelection(i10);
        }
    }
}
