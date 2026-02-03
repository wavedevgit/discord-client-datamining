package dq;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.AutoCompleteTextView;
import android.widget.TextView;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.viewbinding.ViewBinding;
import com.google.android.material.textfield.TextInputEditText;
import com.google.android.material.textfield.TextInputLayout;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class p implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final ConstraintLayout f20807a;

    /* renamed from: b  reason: collision with root package name */
    public final ConstraintLayout f20808b;

    /* renamed from: c  reason: collision with root package name */
    public final TextInputLayout f20809c;

    /* renamed from: d  reason: collision with root package name */
    public final AutoCompleteTextView f20810d;

    /* renamed from: e  reason: collision with root package name */
    public final TextView f20811e;

    /* renamed from: f  reason: collision with root package name */
    public final TextInputLayout f20812f;

    /* renamed from: g  reason: collision with root package name */
    public final AutoCompleteTextView f20813g;

    /* renamed from: h  reason: collision with root package name */
    public final TextView f20814h;

    /* renamed from: i  reason: collision with root package name */
    public final TextInputLayout f20815i;

    /* renamed from: j  reason: collision with root package name */
    public final TextInputEditText f20816j;

    private p(ConstraintLayout constraintLayout, ConstraintLayout constraintLayout2, TextInputLayout textInputLayout, AutoCompleteTextView autoCompleteTextView, TextView textView, TextInputLayout textInputLayout2, AutoCompleteTextView autoCompleteTextView2, TextView textView2, TextInputLayout textInputLayout3, TextInputEditText textInputEditText) {
        this.f20807a = constraintLayout;
        this.f20808b = constraintLayout2;
        this.f20809c = textInputLayout;
        this.f20810d = autoCompleteTextView;
        this.f20811e = textView;
        this.f20812f = textInputLayout2;
        this.f20813g = autoCompleteTextView2;
        this.f20814h = textView2;
        this.f20815i = textInputLayout3;
        this.f20816j = textInputEditText;
    }

    public static p a(View view) {
        ConstraintLayout constraintLayout = (ConstraintLayout) view;
        int i10 = yp.e.N;
        TextInputLayout textInputLayout = (TextInputLayout) e4.a.a(view, i10);
        if (textInputLayout != null) {
            i10 = yp.e.O;
            AutoCompleteTextView autoCompleteTextView = (AutoCompleteTextView) e4.a.a(view, i10);
            if (autoCompleteTextView != null) {
                i10 = yp.e.P;
                TextView textView = (TextView) e4.a.a(view, i10);
                if (textView != null) {
                    i10 = yp.e.Q;
                    TextInputLayout textInputLayout2 = (TextInputLayout) e4.a.a(view, i10);
                    if (textInputLayout2 != null) {
                        i10 = yp.e.R;
                        AutoCompleteTextView autoCompleteTextView2 = (AutoCompleteTextView) e4.a.a(view, i10);
                        if (autoCompleteTextView2 != null) {
                            i10 = yp.e.S;
                            TextView textView2 = (TextView) e4.a.a(view, i10);
                            if (textView2 != null) {
                                i10 = yp.e.T;
                                TextInputLayout textInputLayout3 = (TextInputLayout) e4.a.a(view, i10);
                                if (textInputLayout3 != null) {
                                    i10 = yp.e.U;
                                    TextInputEditText textInputEditText = (TextInputEditText) e4.a.a(view, i10);
                                    if (textInputEditText != null) {
                                        return new p(constraintLayout, constraintLayout, textInputLayout, autoCompleteTextView, textView, textInputLayout2, autoCompleteTextView2, textView2, textInputLayout3, textInputEditText);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i10)));
    }

    public static p c(LayoutInflater layoutInflater) {
        return d(layoutInflater, null, false);
    }

    public static p d(LayoutInflater layoutInflater, ViewGroup viewGroup, boolean z10) {
        View inflate = layoutInflater.inflate(yp.f.f55234q, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public ConstraintLayout getRoot() {
        return this.f20807a;
    }
}
