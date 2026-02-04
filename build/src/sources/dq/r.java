package dq;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.AutoCompleteTextView;
import androidx.viewbinding.ViewBinding;
import com.google.android.material.textfield.TextInputLayout;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class r implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final TextInputLayout f20820a;

    /* renamed from: b  reason: collision with root package name */
    public final TextInputLayout f20821b;

    /* renamed from: c  reason: collision with root package name */
    public final AutoCompleteTextView f20822c;

    private r(TextInputLayout textInputLayout, TextInputLayout textInputLayout2, AutoCompleteTextView autoCompleteTextView) {
        this.f20820a = textInputLayout;
        this.f20821b = textInputLayout2;
        this.f20822c = autoCompleteTextView;
    }

    public static r a(View view) {
        TextInputLayout textInputLayout = (TextInputLayout) view;
        int i10 = yp.e.f55214z0;
        AutoCompleteTextView autoCompleteTextView = (AutoCompleteTextView) e4.a.a(view, i10);
        if (autoCompleteTextView != null) {
            return new r(textInputLayout, textInputLayout, autoCompleteTextView);
        }
        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i10)));
    }

    public static r c(LayoutInflater layoutInflater) {
        return d(layoutInflater, null, false);
    }

    public static r d(LayoutInflater layoutInflater, ViewGroup viewGroup, boolean z10) {
        View inflate = layoutInflater.inflate(yp.f.f55233s, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public TextInputLayout getRoot() {
        return this.f20820a;
    }
}
