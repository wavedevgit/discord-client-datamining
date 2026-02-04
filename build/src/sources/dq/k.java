package dq;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import androidx.viewbinding.ViewBinding;
import com.google.android.material.textfield.TextInputEditText;
import com.google.android.material.textfield.TextInputLayout;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final TextInputLayout f20792a;

    /* renamed from: b  reason: collision with root package name */
    public final TextInputEditText f20793b;

    /* renamed from: c  reason: collision with root package name */
    public final TextInputLayout f20794c;

    private k(TextInputLayout textInputLayout, TextInputEditText textInputEditText, TextInputLayout textInputLayout2) {
        this.f20792a = textInputLayout;
        this.f20793b = textInputEditText;
        this.f20794c = textInputLayout2;
    }

    public static k a(View view) {
        int i10 = yp.e.f55213z;
        TextInputEditText textInputEditText = (TextInputEditText) e4.a.a(view, i10);
        if (textInputEditText != null) {
            TextInputLayout textInputLayout = (TextInputLayout) view;
            return new k(textInputLayout, textInputEditText, textInputLayout);
        }
        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i10)));
    }

    public static k c(LayoutInflater layoutInflater) {
        return d(layoutInflater, null, false);
    }

    public static k d(LayoutInflater layoutInflater, ViewGroup viewGroup, boolean z10) {
        View inflate = layoutInflater.inflate(yp.f.f55226l, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public TextInputLayout getRoot() {
        return this.f20792a;
    }
}
