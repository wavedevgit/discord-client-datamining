package dq;

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
    private final ConstraintLayout f20745a;

    /* renamed from: b  reason: collision with root package name */
    public final TextInputLayout f20746b;

    /* renamed from: c  reason: collision with root package name */
    public final TextView f20747c;

    /* renamed from: d  reason: collision with root package name */
    public final TextInputLayout f20748d;

    /* renamed from: e  reason: collision with root package name */
    public final MaterialAutoCompleteTextView f20749e;

    /* renamed from: f  reason: collision with root package name */
    public final TextInputLayout f20750f;

    /* renamed from: g  reason: collision with root package name */
    public final MaterialAutoCompleteTextView f20751g;

    /* renamed from: h  reason: collision with root package name */
    public final ConstraintLayout f20752h;

    /* renamed from: i  reason: collision with root package name */
    public final ConstraintLayout f20753i;

    /* renamed from: j  reason: collision with root package name */
    public final ConstraintLayout f20754j;

    /* renamed from: k  reason: collision with root package name */
    public final TextView f20755k;

    /* renamed from: l  reason: collision with root package name */
    public final TextInputLayout f20756l;

    /* renamed from: m  reason: collision with root package name */
    public final TextInputLayout f20757m;

    /* renamed from: n  reason: collision with root package name */
    public final TextInputLayout f20758n;

    /* renamed from: o  reason: collision with root package name */
    public final TextInputEditText f20759o;

    /* renamed from: p  reason: collision with root package name */
    public final TextInputEditText f20760p;

    /* renamed from: q  reason: collision with root package name */
    public final TextInputEditText f20761q;

    /* renamed from: r  reason: collision with root package name */
    public final TextInputEditText f20762r;

    /* renamed from: s  reason: collision with root package name */
    public final CircularProgressIndicator f20763s;

    private d(ConstraintLayout constraintLayout, TextInputLayout textInputLayout, TextView textView, TextInputLayout textInputLayout2, MaterialAutoCompleteTextView materialAutoCompleteTextView, TextInputLayout textInputLayout3, MaterialAutoCompleteTextView materialAutoCompleteTextView2, ConstraintLayout constraintLayout2, ConstraintLayout constraintLayout3, ConstraintLayout constraintLayout4, TextView textView2, TextInputLayout textInputLayout4, TextInputLayout textInputLayout5, TextInputLayout textInputLayout6, TextInputEditText textInputEditText, TextInputEditText textInputEditText2, TextInputEditText textInputEditText3, TextInputEditText textInputEditText4, CircularProgressIndicator circularProgressIndicator) {
        this.f20745a = constraintLayout;
        this.f20746b = textInputLayout;
        this.f20747c = textView;
        this.f20748d = textInputLayout2;
        this.f20749e = materialAutoCompleteTextView;
        this.f20750f = textInputLayout3;
        this.f20751g = materialAutoCompleteTextView2;
        this.f20752h = constraintLayout2;
        this.f20753i = constraintLayout3;
        this.f20754j = constraintLayout4;
        this.f20755k = textView2;
        this.f20756l = textInputLayout4;
        this.f20757m = textInputLayout5;
        this.f20758n = textInputLayout6;
        this.f20759o = textInputEditText;
        this.f20760p = textInputEditText2;
        this.f20761q = textInputEditText3;
        this.f20762r = textInputEditText4;
        this.f20763s = circularProgressIndicator;
    }

    public static d a(View view) {
        int i10 = yp.e.f55165b;
        TextInputLayout textInputLayout = (TextInputLayout) e4.a.a(view, i10);
        if (textInputLayout != null) {
            i10 = yp.e.f55167c;
            TextView textView = (TextView) e4.a.a(view, i10);
            if (textView != null) {
                i10 = yp.e.f55169d;
                TextInputLayout textInputLayout2 = (TextInputLayout) e4.a.a(view, i10);
                if (textInputLayout2 != null) {
                    i10 = yp.e.f55171e;
                    MaterialAutoCompleteTextView materialAutoCompleteTextView = (MaterialAutoCompleteTextView) e4.a.a(view, i10);
                    if (materialAutoCompleteTextView != null) {
                        i10 = yp.e.f55173f;
                        TextInputLayout textInputLayout3 = (TextInputLayout) e4.a.a(view, i10);
                        if (textInputLayout3 != null) {
                            i10 = yp.e.f55175g;
                            MaterialAutoCompleteTextView materialAutoCompleteTextView2 = (MaterialAutoCompleteTextView) e4.a.a(view, i10);
                            if (materialAutoCompleteTextView2 != null) {
                                ConstraintLayout constraintLayout = (ConstraintLayout) view;
                                i10 = yp.e.f55177h;
                                ConstraintLayout constraintLayout2 = (ConstraintLayout) e4.a.a(view, i10);
                                if (constraintLayout2 != null) {
                                    i10 = yp.e.f55179i;
                                    ConstraintLayout constraintLayout3 = (ConstraintLayout) e4.a.a(view, i10);
                                    if (constraintLayout3 != null) {
                                        i10 = yp.e.f55181j;
                                        TextView textView2 = (TextView) e4.a.a(view, i10);
                                        if (textView2 != null) {
                                            i10 = yp.e.f55183k;
                                            TextInputLayout textInputLayout4 = (TextInputLayout) e4.a.a(view, i10);
                                            if (textInputLayout4 != null) {
                                                i10 = yp.e.f55185l;
                                                TextInputLayout textInputLayout5 = (TextInputLayout) e4.a.a(view, i10);
                                                if (textInputLayout5 != null) {
                                                    i10 = yp.e.f55187m;
                                                    TextInputLayout textInputLayout6 = (TextInputLayout) e4.a.a(view, i10);
                                                    if (textInputLayout6 != null) {
                                                        i10 = yp.e.A;
                                                        TextInputEditText textInputEditText = (TextInputEditText) e4.a.a(view, i10);
                                                        if (textInputEditText != null) {
                                                            i10 = yp.e.B;
                                                            TextInputEditText textInputEditText2 = (TextInputEditText) e4.a.a(view, i10);
                                                            if (textInputEditText2 != null) {
                                                                i10 = yp.e.C;
                                                                TextInputEditText textInputEditText3 = (TextInputEditText) e4.a.a(view, i10);
                                                                if (textInputEditText3 != null) {
                                                                    i10 = yp.e.D;
                                                                    TextInputEditText textInputEditText4 = (TextInputEditText) e4.a.a(view, i10);
                                                                    if (textInputEditText4 != null) {
                                                                        i10 = yp.e.f55182j0;
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
        View inflate = layoutInflater.inflate(yp.f.f55218d, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public ConstraintLayout getRoot() {
        return this.f20745a;
    }
}
