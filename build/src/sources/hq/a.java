package hq;

import android.text.Editable;
import android.view.View;
import android.widget.EditText;
import com.google.android.material.textfield.TextInputLayout;
import dq.e;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    public static final a f26489a = new a();

    private a() {
    }

    public final String a(View view) {
        Editable editable;
        Editable editable2;
        Editable editable3;
        Intrinsics.checkNotNullParameter(view, "view");
        TextInputLayout textInputLayout = (TextInputLayout) view.findViewById(e.f21065u0);
        TextInputLayout textInputLayout2 = (TextInputLayout) view.findViewById(e.B0);
        TextInputLayout textInputLayout3 = (TextInputLayout) view.findViewById(e.L);
        EditText editText = ((TextInputLayout) view.findViewById(e.G)).getEditText();
        Editable editable4 = null;
        if (editText != null) {
            editable = editText.getText();
        } else {
            editable = null;
        }
        String valueOf = String.valueOf(editable);
        EditText editText2 = textInputLayout.getEditText();
        if (editText2 != null) {
            editable2 = editText2.getText();
        } else {
            editable2 = null;
        }
        String valueOf2 = String.valueOf(editable2);
        EditText editText3 = textInputLayout2.getEditText();
        if (editText3 != null) {
            editable3 = editText3.getText();
        } else {
            editable3 = null;
        }
        String valueOf3 = String.valueOf(editable3);
        EditText editText4 = textInputLayout3.getEditText();
        if (editText4 != null) {
            editable4 = editText4.getText();
        }
        return CollectionsKt.x0(CollectionsKt.o(valueOf, valueOf2, valueOf3, String.valueOf(editable4)), "", null, null, 0, null, null, 62, null);
    }

    public final boolean b(View view) {
        Intrinsics.checkNotNullParameter(view, "view");
        if (a(view).length() == 4) {
            return true;
        }
        return false;
    }
}
