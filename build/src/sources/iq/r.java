package iq;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.AutoCompleteTextView;
import androidx.viewbinding.ViewBinding;
import com.google.android.material.textfield.TextInputLayout;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class r implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final TextInputLayout f29271a;

    /* renamed from: b  reason: collision with root package name */
    public final TextInputLayout f29272b;

    /* renamed from: c  reason: collision with root package name */
    public final AutoCompleteTextView f29273c;

    private r(TextInputLayout textInputLayout, TextInputLayout textInputLayout2, AutoCompleteTextView autoCompleteTextView) {
        this.f29271a = textInputLayout;
        this.f29272b = textInputLayout2;
        this.f29273c = autoCompleteTextView;
    }

    public static r a(View view) {
        TextInputLayout textInputLayout = (TextInputLayout) view;
        int i10 = dq.e.f21075z0;
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
        View inflate = layoutInflater.inflate(dq.f.f21094s, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public TextInputLayout getRoot() {
        return this.f29271a;
    }
}
