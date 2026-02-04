package dq;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import androidx.viewbinding.ViewBinding;
import com.google.android.material.textfield.TextInputEditText;
import com.google.android.material.textfield.TextInputLayout;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final TextInputLayout f20804a;

    /* renamed from: b  reason: collision with root package name */
    public final TextInputEditText f20805b;

    /* renamed from: c  reason: collision with root package name */
    public final TextInputLayout f20806c;

    private o(TextInputLayout textInputLayout, TextInputEditText textInputEditText, TextInputLayout textInputLayout2) {
        this.f20804a = textInputLayout;
        this.f20805b = textInputEditText;
        this.f20806c = textInputLayout2;
    }

    public static o a(View view) {
        int i10 = yp.e.f55213z;
        TextInputEditText textInputEditText = (TextInputEditText) e4.a.a(view, i10);
        if (textInputEditText != null) {
            TextInputLayout textInputLayout = (TextInputLayout) view;
            return new o(textInputLayout, textInputEditText, textInputLayout);
        }
        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i10)));
    }

    public static o c(LayoutInflater layoutInflater) {
        return d(layoutInflater, null, false);
    }

    public static o d(LayoutInflater layoutInflater, ViewGroup viewGroup, boolean z10) {
        View inflate = layoutInflater.inflate(yp.f.f55229o, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public TextInputLayout getRoot() {
        return this.f20804a;
    }
}
