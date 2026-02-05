package gq;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import androidx.viewbinding.ViewBinding;
import com.google.android.material.textfield.TextInputEditText;
import com.google.android.material.textfield.TextInputLayout;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final TextInputLayout f25128a;

    /* renamed from: b  reason: collision with root package name */
    public final TextInputEditText f25129b;

    /* renamed from: c  reason: collision with root package name */
    public final TextInputLayout f25130c;

    private o(TextInputLayout textInputLayout, TextInputEditText textInputEditText, TextInputLayout textInputLayout2) {
        this.f25128a = textInputLayout;
        this.f25129b = textInputEditText;
        this.f25130c = textInputLayout2;
    }

    public static o a(View view) {
        int i10 = bq.e.f7158z;
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
        View inflate = layoutInflater.inflate(bq.f.f7174o, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public TextInputLayout getRoot() {
        return this.f25128a;
    }
}
