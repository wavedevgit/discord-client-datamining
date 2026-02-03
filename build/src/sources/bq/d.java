package bq;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.viewbinding.ViewBinding;
import com.google.android.material.progressindicator.CircularProgressIndicator;
import com.google.android.material.textfield.MaterialAutoCompleteTextView;
import com.google.android.material.textfield.TextInputEditText;
import com.google.android.material.textfield.TextInputLayout;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final ConstraintLayout f7429a;

    /* renamed from: b  reason: collision with root package name */
    public final TextInputLayout f7430b;

    /* renamed from: c  reason: collision with root package name */
    public final TextView f7431c;

    /* renamed from: d  reason: collision with root package name */
    public final TextInputLayout f7432d;

    /* renamed from: e  reason: collision with root package name */
    public final MaterialAutoCompleteTextView f7433e;

    /* renamed from: f  reason: collision with root package name */
    public final TextInputLayout f7434f;

    /* renamed from: g  reason: collision with root package name */
    public final MaterialAutoCompleteTextView f7435g;

    /* renamed from: h  reason: collision with root package name */
    public final ConstraintLayout f7436h;

    /* renamed from: i  reason: collision with root package name */
    public final ConstraintLayout f7437i;

    /* renamed from: j  reason: collision with root package name */
    public final ConstraintLayout f7438j;

    /* renamed from: k  reason: collision with root package name */
    public final TextView f7439k;

    /* renamed from: l  reason: collision with root package name */
    public final TextInputLayout f7440l;

    /* renamed from: m  reason: collision with root package name */
    public final TextInputLayout f7441m;

    /* renamed from: n  reason: collision with root package name */
    public final TextInputLayout f7442n;

    /* renamed from: o  reason: collision with root package name */
    public final TextInputEditText f7443o;

    /* renamed from: p  reason: collision with root package name */
    public final TextInputEditText f7444p;

    /* renamed from: q  reason: collision with root package name */
    public final TextInputEditText f7445q;

    /* renamed from: r  reason: collision with root package name */
    public final TextInputEditText f7446r;

    /* renamed from: s  reason: collision with root package name */
    public final CircularProgressIndicator f7447s;

    private d(ConstraintLayout constraintLayout, TextInputLayout textInputLayout, TextView textView, TextInputLayout textInputLayout2, MaterialAutoCompleteTextView materialAutoCompleteTextView, TextInputLayout textInputLayout3, MaterialAutoCompleteTextView materialAutoCompleteTextView2, ConstraintLayout constraintLayout2, ConstraintLayout constraintLayout3, ConstraintLayout constraintLayout4, TextView textView2, TextInputLayout textInputLayout4, TextInputLayout textInputLayout5, TextInputLayout textInputLayout6, TextInputEditText textInputEditText, TextInputEditText textInputEditText2, TextInputEditText textInputEditText3, TextInputEditText textInputEditText4, CircularProgressIndicator circularProgressIndicator) {
        this.f7429a = constraintLayout;
        this.f7430b = textInputLayout;
        this.f7431c = textView;
        this.f7432d = textInputLayout2;
        this.f7433e = materialAutoCompleteTextView;
        this.f7434f = textInputLayout3;
        this.f7435g = materialAutoCompleteTextView2;
        this.f7436h = constraintLayout2;
        this.f7437i = constraintLayout3;
        this.f7438j = constraintLayout4;
        this.f7439k = textView2;
        this.f7440l = textInputLayout4;
        this.f7441m = textInputLayout5;
        this.f7442n = textInputLayout6;
        this.f7443o = textInputEditText;
        this.f7444p = textInputEditText2;
        this.f7445q = textInputEditText3;
        this.f7446r = textInputEditText4;
        this.f7447s = circularProgressIndicator;
    }

    public static d a(View view) {
        int i10 = wp.e.f52879b;
        TextInputLayout textInputLayout = (TextInputLayout) e4.a.a(view, i10);
        if (textInputLayout != null) {
            i10 = wp.e.f52881c;
            TextView textView = (TextView) e4.a.a(view, i10);
            if (textView != null) {
                i10 = wp.e.f52883d;
                TextInputLayout textInputLayout2 = (TextInputLayout) e4.a.a(view, i10);
                if (textInputLayout2 != null) {
                    i10 = wp.e.f52885e;
                    MaterialAutoCompleteTextView materialAutoCompleteTextView = (MaterialAutoCompleteTextView) e4.a.a(view, i10);
                    if (materialAutoCompleteTextView != null) {
                        i10 = wp.e.f52887f;
                        TextInputLayout textInputLayout3 = (TextInputLayout) e4.a.a(view, i10);
                        if (textInputLayout3 != null) {
                            i10 = wp.e.f52889g;
                            MaterialAutoCompleteTextView materialAutoCompleteTextView2 = (MaterialAutoCompleteTextView) e4.a.a(view, i10);
                            if (materialAutoCompleteTextView2 != null) {
                                ConstraintLayout constraintLayout = (ConstraintLayout) view;
                                i10 = wp.e.f52891h;
                                ConstraintLayout constraintLayout2 = (ConstraintLayout) e4.a.a(view, i10);
                                if (constraintLayout2 != null) {
                                    i10 = wp.e.f52893i;
                                    ConstraintLayout constraintLayout3 = (ConstraintLayout) e4.a.a(view, i10);
                                    if (constraintLayout3 != null) {
                                        i10 = wp.e.f52895j;
                                        TextView textView2 = (TextView) e4.a.a(view, i10);
                                        if (textView2 != null) {
                                            i10 = wp.e.f52897k;
                                            TextInputLayout textInputLayout4 = (TextInputLayout) e4.a.a(view, i10);
                                            if (textInputLayout4 != null) {
                                                i10 = wp.e.f52899l;
                                                TextInputLayout textInputLayout5 = (TextInputLayout) e4.a.a(view, i10);
                                                if (textInputLayout5 != null) {
                                                    i10 = wp.e.f52901m;
                                                    TextInputLayout textInputLayout6 = (TextInputLayout) e4.a.a(view, i10);
                                                    if (textInputLayout6 != null) {
                                                        i10 = wp.e.A;
                                                        TextInputEditText textInputEditText = (TextInputEditText) e4.a.a(view, i10);
                                                        if (textInputEditText != null) {
                                                            i10 = wp.e.B;
                                                            TextInputEditText textInputEditText2 = (TextInputEditText) e4.a.a(view, i10);
                                                            if (textInputEditText2 != null) {
                                                                i10 = wp.e.C;
                                                                TextInputEditText textInputEditText3 = (TextInputEditText) e4.a.a(view, i10);
                                                                if (textInputEditText3 != null) {
                                                                    i10 = wp.e.D;
                                                                    TextInputEditText textInputEditText4 = (TextInputEditText) e4.a.a(view, i10);
                                                                    if (textInputEditText4 != null) {
                                                                        i10 = wp.e.f52896j0;
                                                                        CircularProgressIndicator circularProgressIndicator = (CircularProgressIndicator) e4.a.a(view, i10);
                                                                        if (circularProgressIndicator != null) {
                                                                            return new d(constraintLayout, textInputLayout, textView, textInputLayout2, materialAutoCompleteTextView, textInputLayout3, materialAutoCompleteTextView2, constraintLayout, constraintLayout2, constraintLayout3, textView2, textInputLayout4, textInputLayout5, textInputLayout6, textInputEditText, textInputEditText2, textInputEditText3, textInputEditText4, circularProgressIndicator);
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
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

    public static d c(LayoutInflater layoutInflater) {
        return d(layoutInflater, null, false);
    }

    public static d d(LayoutInflater layoutInflater, ViewGroup viewGroup, boolean z10) {
        View inflate = layoutInflater.inflate(wp.f.f52932d, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public ConstraintLayout getRoot() {
        return this.f7429a;
    }
}
