package iq;

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
    private final ConstraintLayout f29258a;

    /* renamed from: b  reason: collision with root package name */
    public final ConstraintLayout f29259b;

    /* renamed from: c  reason: collision with root package name */
    public final TextInputLayout f29260c;

    /* renamed from: d  reason: collision with root package name */
    public final AutoCompleteTextView f29261d;

    /* renamed from: e  reason: collision with root package name */
    public final TextView f29262e;

    /* renamed from: f  reason: collision with root package name */
    public final TextInputLayout f29263f;

    /* renamed from: g  reason: collision with root package name */
    public final AutoCompleteTextView f29264g;

    /* renamed from: h  reason: collision with root package name */
    public final TextView f29265h;

    /* renamed from: i  reason: collision with root package name */
    public final TextInputLayout f29266i;

    /* renamed from: j  reason: collision with root package name */
    public final TextInputEditText f29267j;

    private p(ConstraintLayout constraintLayout, ConstraintLayout constraintLayout2, TextInputLayout textInputLayout, AutoCompleteTextView autoCompleteTextView, TextView textView, TextInputLayout textInputLayout2, AutoCompleteTextView autoCompleteTextView2, TextView textView2, TextInputLayout textInputLayout3, TextInputEditText textInputEditText) {
        this.f29258a = constraintLayout;
        this.f29259b = constraintLayout2;
        this.f29260c = textInputLayout;
        this.f29261d = autoCompleteTextView;
        this.f29262e = textView;
        this.f29263f = textInputLayout2;
        this.f29264g = autoCompleteTextView2;
        this.f29265h = textView2;
        this.f29266i = textInputLayout3;
        this.f29267j = textInputEditText;
    }

    public static p a(View view) {
        ConstraintLayout constraintLayout = (ConstraintLayout) view;
        int i10 = dq.e.N;
        TextInputLayout textInputLayout = (TextInputLayout) e4.a.a(view, i10);
        if (textInputLayout != null) {
            i10 = dq.e.O;
            AutoCompleteTextView autoCompleteTextView = (AutoCompleteTextView) e4.a.a(view, i10);
            if (autoCompleteTextView != null) {
                i10 = dq.e.P;
                TextView textView = (TextView) e4.a.a(view, i10);
                if (textView != null) {
                    i10 = dq.e.Q;
                    TextInputLayout textInputLayout2 = (TextInputLayout) e4.a.a(view, i10);
                    if (textInputLayout2 != null) {
                        i10 = dq.e.R;
                        AutoCompleteTextView autoCompleteTextView2 = (AutoCompleteTextView) e4.a.a(view, i10);
                        if (autoCompleteTextView2 != null) {
                            i10 = dq.e.S;
                            TextView textView2 = (TextView) e4.a.a(view, i10);
                            if (textView2 != null) {
                                i10 = dq.e.T;
                                TextInputLayout textInputLayout3 = (TextInputLayout) e4.a.a(view, i10);
                                if (textInputLayout3 != null) {
                                    i10 = dq.e.U;
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
        View inflate = layoutInflater.inflate(dq.f.f21092q, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public ConstraintLayout getRoot() {
        return this.f29258a;
    }
}
