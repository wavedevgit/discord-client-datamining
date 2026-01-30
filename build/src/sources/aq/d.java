package aq;

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
    private final ConstraintLayout f6615a;

    /* renamed from: b  reason: collision with root package name */
    public final TextInputLayout f6616b;

    /* renamed from: c  reason: collision with root package name */
    public final TextView f6617c;

    /* renamed from: d  reason: collision with root package name */
    public final TextInputLayout f6618d;

    /* renamed from: e  reason: collision with root package name */
    public final MaterialAutoCompleteTextView f6619e;

    /* renamed from: f  reason: collision with root package name */
    public final TextInputLayout f6620f;

    /* renamed from: g  reason: collision with root package name */
    public final MaterialAutoCompleteTextView f6621g;

    /* renamed from: h  reason: collision with root package name */
    public final ConstraintLayout f6622h;

    /* renamed from: i  reason: collision with root package name */
    public final ConstraintLayout f6623i;

    /* renamed from: j  reason: collision with root package name */
    public final ConstraintLayout f6624j;

    /* renamed from: k  reason: collision with root package name */
    public final TextView f6625k;

    /* renamed from: l  reason: collision with root package name */
    public final TextInputLayout f6626l;

    /* renamed from: m  reason: collision with root package name */
    public final TextInputLayout f6627m;

    /* renamed from: n  reason: collision with root package name */
    public final TextInputLayout f6628n;

    /* renamed from: o  reason: collision with root package name */
    public final TextInputEditText f6629o;

    /* renamed from: p  reason: collision with root package name */
    public final TextInputEditText f6630p;

    /* renamed from: q  reason: collision with root package name */
    public final TextInputEditText f6631q;

    /* renamed from: r  reason: collision with root package name */
    public final TextInputEditText f6632r;

    /* renamed from: s  reason: collision with root package name */
    public final CircularProgressIndicator f6633s;

    private d(ConstraintLayout constraintLayout, TextInputLayout textInputLayout, TextView textView, TextInputLayout textInputLayout2, MaterialAutoCompleteTextView materialAutoCompleteTextView, TextInputLayout textInputLayout3, MaterialAutoCompleteTextView materialAutoCompleteTextView2, ConstraintLayout constraintLayout2, ConstraintLayout constraintLayout3, ConstraintLayout constraintLayout4, TextView textView2, TextInputLayout textInputLayout4, TextInputLayout textInputLayout5, TextInputLayout textInputLayout6, TextInputEditText textInputEditText, TextInputEditText textInputEditText2, TextInputEditText textInputEditText3, TextInputEditText textInputEditText4, CircularProgressIndicator circularProgressIndicator) {
        this.f6615a = constraintLayout;
        this.f6616b = textInputLayout;
        this.f6617c = textView;
        this.f6618d = textInputLayout2;
        this.f6619e = materialAutoCompleteTextView;
        this.f6620f = textInputLayout3;
        this.f6621g = materialAutoCompleteTextView2;
        this.f6622h = constraintLayout2;
        this.f6623i = constraintLayout3;
        this.f6624j = constraintLayout4;
        this.f6625k = textView2;
        this.f6626l = textInputLayout4;
        this.f6627m = textInputLayout5;
        this.f6628n = textInputLayout6;
        this.f6629o = textInputEditText;
        this.f6630p = textInputEditText2;
        this.f6631q = textInputEditText3;
        this.f6632r = textInputEditText4;
        this.f6633s = circularProgressIndicator;
    }

    public static d a(View view) {
        int i10 = vp.e.f51803b;
        TextInputLayout textInputLayout = (TextInputLayout) e4.a.a(view, i10);
        if (textInputLayout != null) {
            i10 = vp.e.f51805c;
            TextView textView = (TextView) e4.a.a(view, i10);
            if (textView != null) {
                i10 = vp.e.f51807d;
                TextInputLayout textInputLayout2 = (TextInputLayout) e4.a.a(view, i10);
                if (textInputLayout2 != null) {
                    i10 = vp.e.f51809e;
                    MaterialAutoCompleteTextView materialAutoCompleteTextView = (MaterialAutoCompleteTextView) e4.a.a(view, i10);
                    if (materialAutoCompleteTextView != null) {
                        i10 = vp.e.f51811f;
                        TextInputLayout textInputLayout3 = (TextInputLayout) e4.a.a(view, i10);
                        if (textInputLayout3 != null) {
                            i10 = vp.e.f51813g;
                            MaterialAutoCompleteTextView materialAutoCompleteTextView2 = (MaterialAutoCompleteTextView) e4.a.a(view, i10);
                            if (materialAutoCompleteTextView2 != null) {
                                ConstraintLayout constraintLayout = (ConstraintLayout) view;
                                i10 = vp.e.f51815h;
                                ConstraintLayout constraintLayout2 = (ConstraintLayout) e4.a.a(view, i10);
                                if (constraintLayout2 != null) {
                                    i10 = vp.e.f51817i;
                                    ConstraintLayout constraintLayout3 = (ConstraintLayout) e4.a.a(view, i10);
                                    if (constraintLayout3 != null) {
                                        i10 = vp.e.f51819j;
                                        TextView textView2 = (TextView) e4.a.a(view, i10);
                                        if (textView2 != null) {
                                            i10 = vp.e.f51821k;
                                            TextInputLayout textInputLayout4 = (TextInputLayout) e4.a.a(view, i10);
                                            if (textInputLayout4 != null) {
                                                i10 = vp.e.f51823l;
                                                TextInputLayout textInputLayout5 = (TextInputLayout) e4.a.a(view, i10);
                                                if (textInputLayout5 != null) {
                                                    i10 = vp.e.f51825m;
                                                    TextInputLayout textInputLayout6 = (TextInputLayout) e4.a.a(view, i10);
                                                    if (textInputLayout6 != null) {
                                                        i10 = vp.e.A;
                                                        TextInputEditText textInputEditText = (TextInputEditText) e4.a.a(view, i10);
                                                        if (textInputEditText != null) {
                                                            i10 = vp.e.B;
                                                            TextInputEditText textInputEditText2 = (TextInputEditText) e4.a.a(view, i10);
                                                            if (textInputEditText2 != null) {
                                                                i10 = vp.e.C;
                                                                TextInputEditText textInputEditText3 = (TextInputEditText) e4.a.a(view, i10);
                                                                if (textInputEditText3 != null) {
                                                                    i10 = vp.e.D;
                                                                    TextInputEditText textInputEditText4 = (TextInputEditText) e4.a.a(view, i10);
                                                                    if (textInputEditText4 != null) {
                                                                        i10 = vp.e.f51820j0;
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
        View inflate = layoutInflater.inflate(vp.f.f51856d, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public ConstraintLayout getRoot() {
        return this.f6615a;
    }
}
