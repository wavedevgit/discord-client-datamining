package aq;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.AutoCompleteTextView;
import androidx.viewbinding.ViewBinding;
import com.google.android.material.textfield.TextInputLayout;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class r implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final TextInputLayout f6690a;

    /* renamed from: b  reason: collision with root package name */
    public final TextInputLayout f6691b;

    /* renamed from: c  reason: collision with root package name */
    public final AutoCompleteTextView f6692c;

    private r(TextInputLayout textInputLayout, TextInputLayout textInputLayout2, AutoCompleteTextView autoCompleteTextView) {
        this.f6690a = textInputLayout;
        this.f6691b = textInputLayout2;
        this.f6692c = autoCompleteTextView;
    }

    public static r a(View view) {
        TextInputLayout textInputLayout = (TextInputLayout) view;
        int i10 = vp.e.f51852z0;
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
        View inflate = layoutInflater.inflate(vp.f.f51871s, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public TextInputLayout getRoot() {
        return this.f6690a;
    }
}
