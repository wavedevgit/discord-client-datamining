package iq;

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
    private final ConstraintLayout f29244a;

    /* renamed from: b  reason: collision with root package name */
    public final TextInputLayout f29245b;

    /* renamed from: c  reason: collision with root package name */
    public final TextView f29246c;

    /* renamed from: d  reason: collision with root package name */
    public final TextInputLayout f29247d;

    /* renamed from: e  reason: collision with root package name */
    public final MaterialAutoCompleteTextView f29248e;

    /* renamed from: f  reason: collision with root package name */
    public final TextInputLayout f29249f;

    /* renamed from: g  reason: collision with root package name */
    public final MaterialAutoCompleteTextView f29250g;

    /* renamed from: h  reason: collision with root package name */
    public final ConstraintLayout f29251h;

    /* renamed from: i  reason: collision with root package name */
    public final ConstraintLayout f29252i;

    /* renamed from: j  reason: collision with root package name */
    public final ConstraintLayout f29253j;

    /* renamed from: k  reason: collision with root package name */
    public final TextView f29254k;

    /* renamed from: l  reason: collision with root package name */
    public final TextInputLayout f29255l;

    /* renamed from: m  reason: collision with root package name */
    public final TextInputLayout f29256m;

    /* renamed from: n  reason: collision with root package name */
    public final TextInputLayout f29257n;

    /* renamed from: o  reason: collision with root package name */
    public final TextInputEditText f29258o;

    /* renamed from: p  reason: collision with root package name */
    public final TextInputEditText f29259p;

    /* renamed from: q  reason: collision with root package name */
    public final TextInputEditText f29260q;

    /* renamed from: r  reason: collision with root package name */
    public final TextInputEditText f29261r;

    /* renamed from: s  reason: collision with root package name */
    public final CircularProgressIndicator f29262s;

    private d(ConstraintLayout constraintLayout, TextInputLayout textInputLayout, TextView textView, TextInputLayout textInputLayout2, MaterialAutoCompleteTextView materialAutoCompleteTextView, TextInputLayout textInputLayout3, MaterialAutoCompleteTextView materialAutoCompleteTextView2, ConstraintLayout constraintLayout2, ConstraintLayout constraintLayout3, ConstraintLayout constraintLayout4, TextView textView2, TextInputLayout textInputLayout4, TextInputLayout textInputLayout5, TextInputLayout textInputLayout6, TextInputEditText textInputEditText, TextInputEditText textInputEditText2, TextInputEditText textInputEditText3, TextInputEditText textInputEditText4, CircularProgressIndicator circularProgressIndicator) {
        this.f29244a = constraintLayout;
        this.f29245b = textInputLayout;
        this.f29246c = textView;
        this.f29247d = textInputLayout2;
        this.f29248e = materialAutoCompleteTextView;
        this.f29249f = textInputLayout3;
        this.f29250g = materialAutoCompleteTextView2;
        this.f29251h = constraintLayout2;
        this.f29252i = constraintLayout3;
        this.f29253j = constraintLayout4;
        this.f29254k = textView2;
        this.f29255l = textInputLayout4;
        this.f29256m = textInputLayout5;
        this.f29257n = textInputLayout6;
        this.f29258o = textInputEditText;
        this.f29259p = textInputEditText2;
        this.f29260q = textInputEditText3;
        this.f29261r = textInputEditText4;
        this.f29262s = circularProgressIndicator;
    }

    public static d a(View view) {
        int i10 = dq.e.f21026b;
        TextInputLayout textInputLayout = (TextInputLayout) e4.a.a(view, i10);
        if (textInputLayout != null) {
            i10 = dq.e.f21028c;
            TextView textView = (TextView) e4.a.a(view, i10);
            if (textView != null) {
                i10 = dq.e.f21030d;
                TextInputLayout textInputLayout2 = (TextInputLayout) e4.a.a(view, i10);
                if (textInputLayout2 != null) {
                    i10 = dq.e.f21032e;
                    MaterialAutoCompleteTextView materialAutoCompleteTextView = (MaterialAutoCompleteTextView) e4.a.a(view, i10);
                    if (materialAutoCompleteTextView != null) {
                        i10 = dq.e.f21034f;
                        TextInputLayout textInputLayout3 = (TextInputLayout) e4.a.a(view, i10);
                        if (textInputLayout3 != null) {
                            i10 = dq.e.f21036g;
                            MaterialAutoCompleteTextView materialAutoCompleteTextView2 = (MaterialAutoCompleteTextView) e4.a.a(view, i10);
                            if (materialAutoCompleteTextView2 != null) {
                                ConstraintLayout constraintLayout = (ConstraintLayout) view;
                                i10 = dq.e.f21038h;
                                ConstraintLayout constraintLayout2 = (ConstraintLayout) e4.a.a(view, i10);
                                if (constraintLayout2 != null) {
                                    i10 = dq.e.f21040i;
                                    ConstraintLayout constraintLayout3 = (ConstraintLayout) e4.a.a(view, i10);
                                    if (constraintLayout3 != null) {
                                        i10 = dq.e.f21042j;
                                        TextView textView2 = (TextView) e4.a.a(view, i10);
                                        if (textView2 != null) {
                                            i10 = dq.e.f21044k;
                                            TextInputLayout textInputLayout4 = (TextInputLayout) e4.a.a(view, i10);
                                            if (textInputLayout4 != null) {
                                                i10 = dq.e.f21046l;
                                                TextInputLayout textInputLayout5 = (TextInputLayout) e4.a.a(view, i10);
                                                if (textInputLayout5 != null) {
                                                    i10 = dq.e.f21048m;
                                                    TextInputLayout textInputLayout6 = (TextInputLayout) e4.a.a(view, i10);
                                                    if (textInputLayout6 != null) {
                                                        i10 = dq.e.A;
                                                        TextInputEditText textInputEditText = (TextInputEditText) e4.a.a(view, i10);
                                                        if (textInputEditText != null) {
                                                            i10 = dq.e.B;
                                                            TextInputEditText textInputEditText2 = (TextInputEditText) e4.a.a(view, i10);
                                                            if (textInputEditText2 != null) {
                                                                i10 = dq.e.C;
                                                                TextInputEditText textInputEditText3 = (TextInputEditText) e4.a.a(view, i10);
                                                                if (textInputEditText3 != null) {
                                                                    i10 = dq.e.D;
                                                                    TextInputEditText textInputEditText4 = (TextInputEditText) e4.a.a(view, i10);
                                                                    if (textInputEditText4 != null) {
                                                                        i10 = dq.e.f21043j0;
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
        View inflate = layoutInflater.inflate(dq.f.f21079d, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public ConstraintLayout getRoot() {
        return this.f29244a;
    }
}
