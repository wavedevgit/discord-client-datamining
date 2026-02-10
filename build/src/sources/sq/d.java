package sq;

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
    private final ConstraintLayout f48207a;

    /* renamed from: b  reason: collision with root package name */
    public final TextInputLayout f48208b;

    /* renamed from: c  reason: collision with root package name */
    public final TextView f48209c;

    /* renamed from: d  reason: collision with root package name */
    public final TextInputLayout f48210d;

    /* renamed from: e  reason: collision with root package name */
    public final MaterialAutoCompleteTextView f48211e;

    /* renamed from: f  reason: collision with root package name */
    public final TextInputLayout f48212f;

    /* renamed from: g  reason: collision with root package name */
    public final MaterialAutoCompleteTextView f48213g;

    /* renamed from: h  reason: collision with root package name */
    public final ConstraintLayout f48214h;

    /* renamed from: i  reason: collision with root package name */
    public final ConstraintLayout f48215i;

    /* renamed from: j  reason: collision with root package name */
    public final ConstraintLayout f48216j;

    /* renamed from: k  reason: collision with root package name */
    public final TextView f48217k;

    /* renamed from: l  reason: collision with root package name */
    public final TextInputLayout f48218l;

    /* renamed from: m  reason: collision with root package name */
    public final TextInputLayout f48219m;

    /* renamed from: n  reason: collision with root package name */
    public final TextInputLayout f48220n;

    /* renamed from: o  reason: collision with root package name */
    public final TextInputEditText f48221o;

    /* renamed from: p  reason: collision with root package name */
    public final TextInputEditText f48222p;

    /* renamed from: q  reason: collision with root package name */
    public final TextInputEditText f48223q;

    /* renamed from: r  reason: collision with root package name */
    public final TextInputEditText f48224r;

    /* renamed from: s  reason: collision with root package name */
    public final CircularProgressIndicator f48225s;

    private d(ConstraintLayout constraintLayout, TextInputLayout textInputLayout, TextView textView, TextInputLayout textInputLayout2, MaterialAutoCompleteTextView materialAutoCompleteTextView, TextInputLayout textInputLayout3, MaterialAutoCompleteTextView materialAutoCompleteTextView2, ConstraintLayout constraintLayout2, ConstraintLayout constraintLayout3, ConstraintLayout constraintLayout4, TextView textView2, TextInputLayout textInputLayout4, TextInputLayout textInputLayout5, TextInputLayout textInputLayout6, TextInputEditText textInputEditText, TextInputEditText textInputEditText2, TextInputEditText textInputEditText3, TextInputEditText textInputEditText4, CircularProgressIndicator circularProgressIndicator) {
        this.f48207a = constraintLayout;
        this.f48208b = textInputLayout;
        this.f48209c = textView;
        this.f48210d = textInputLayout2;
        this.f48211e = materialAutoCompleteTextView;
        this.f48212f = textInputLayout3;
        this.f48213g = materialAutoCompleteTextView2;
        this.f48214h = constraintLayout2;
        this.f48215i = constraintLayout3;
        this.f48216j = constraintLayout4;
        this.f48217k = textView2;
        this.f48218l = textInputLayout4;
        this.f48219m = textInputLayout5;
        this.f48220n = textInputLayout6;
        this.f48221o = textInputEditText;
        this.f48222p = textInputEditText2;
        this.f48223q = textInputEditText3;
        this.f48224r = textInputEditText4;
        this.f48225s = circularProgressIndicator;
    }

    public static d a(View view) {
        int i10 = nq.e.f38250b;
        TextInputLayout textInputLayout = (TextInputLayout) e4.a.a(view, i10);
        if (textInputLayout != null) {
            i10 = nq.e.f38252c;
            TextView textView = (TextView) e4.a.a(view, i10);
            if (textView != null) {
                i10 = nq.e.f38254d;
                TextInputLayout textInputLayout2 = (TextInputLayout) e4.a.a(view, i10);
                if (textInputLayout2 != null) {
                    i10 = nq.e.f38256e;
                    MaterialAutoCompleteTextView materialAutoCompleteTextView = (MaterialAutoCompleteTextView) e4.a.a(view, i10);
                    if (materialAutoCompleteTextView != null) {
                        i10 = nq.e.f38258f;
                        TextInputLayout textInputLayout3 = (TextInputLayout) e4.a.a(view, i10);
                        if (textInputLayout3 != null) {
                            i10 = nq.e.f38260g;
                            MaterialAutoCompleteTextView materialAutoCompleteTextView2 = (MaterialAutoCompleteTextView) e4.a.a(view, i10);
                            if (materialAutoCompleteTextView2 != null) {
                                ConstraintLayout constraintLayout = (ConstraintLayout) view;
                                i10 = nq.e.f38262h;
                                ConstraintLayout constraintLayout2 = (ConstraintLayout) e4.a.a(view, i10);
                                if (constraintLayout2 != null) {
                                    i10 = nq.e.f38264i;
                                    ConstraintLayout constraintLayout3 = (ConstraintLayout) e4.a.a(view, i10);
                                    if (constraintLayout3 != null) {
                                        i10 = nq.e.f38266j;
                                        TextView textView2 = (TextView) e4.a.a(view, i10);
                                        if (textView2 != null) {
                                            i10 = nq.e.f38268k;
                                            TextInputLayout textInputLayout4 = (TextInputLayout) e4.a.a(view, i10);
                                            if (textInputLayout4 != null) {
                                                i10 = nq.e.f38270l;
                                                TextInputLayout textInputLayout5 = (TextInputLayout) e4.a.a(view, i10);
                                                if (textInputLayout5 != null) {
                                                    i10 = nq.e.f38272m;
                                                    TextInputLayout textInputLayout6 = (TextInputLayout) e4.a.a(view, i10);
                                                    if (textInputLayout6 != null) {
                                                        i10 = nq.e.A;
                                                        TextInputEditText textInputEditText = (TextInputEditText) e4.a.a(view, i10);
                                                        if (textInputEditText != null) {
                                                            i10 = nq.e.B;
                                                            TextInputEditText textInputEditText2 = (TextInputEditText) e4.a.a(view, i10);
                                                            if (textInputEditText2 != null) {
                                                                i10 = nq.e.C;
                                                                TextInputEditText textInputEditText3 = (TextInputEditText) e4.a.a(view, i10);
                                                                if (textInputEditText3 != null) {
                                                                    i10 = nq.e.D;
                                                                    TextInputEditText textInputEditText4 = (TextInputEditText) e4.a.a(view, i10);
                                                                    if (textInputEditText4 != null) {
                                                                        i10 = nq.e.f38267j0;
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
        View inflate = layoutInflater.inflate(nq.f.f38303d, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public ConstraintLayout getRoot() {
        return this.f48207a;
    }
}
