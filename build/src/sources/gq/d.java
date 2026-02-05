package gq;

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
    private final ConstraintLayout f25069a;

    /* renamed from: b  reason: collision with root package name */
    public final TextInputLayout f25070b;

    /* renamed from: c  reason: collision with root package name */
    public final TextView f25071c;

    /* renamed from: d  reason: collision with root package name */
    public final TextInputLayout f25072d;

    /* renamed from: e  reason: collision with root package name */
    public final MaterialAutoCompleteTextView f25073e;

    /* renamed from: f  reason: collision with root package name */
    public final TextInputLayout f25074f;

    /* renamed from: g  reason: collision with root package name */
    public final MaterialAutoCompleteTextView f25075g;

    /* renamed from: h  reason: collision with root package name */
    public final ConstraintLayout f25076h;

    /* renamed from: i  reason: collision with root package name */
    public final ConstraintLayout f25077i;

    /* renamed from: j  reason: collision with root package name */
    public final ConstraintLayout f25078j;

    /* renamed from: k  reason: collision with root package name */
    public final TextView f25079k;

    /* renamed from: l  reason: collision with root package name */
    public final TextInputLayout f25080l;

    /* renamed from: m  reason: collision with root package name */
    public final TextInputLayout f25081m;

    /* renamed from: n  reason: collision with root package name */
    public final TextInputLayout f25082n;

    /* renamed from: o  reason: collision with root package name */
    public final TextInputEditText f25083o;

    /* renamed from: p  reason: collision with root package name */
    public final TextInputEditText f25084p;

    /* renamed from: q  reason: collision with root package name */
    public final TextInputEditText f25085q;

    /* renamed from: r  reason: collision with root package name */
    public final TextInputEditText f25086r;

    /* renamed from: s  reason: collision with root package name */
    public final CircularProgressIndicator f25087s;

    private d(ConstraintLayout constraintLayout, TextInputLayout textInputLayout, TextView textView, TextInputLayout textInputLayout2, MaterialAutoCompleteTextView materialAutoCompleteTextView, TextInputLayout textInputLayout3, MaterialAutoCompleteTextView materialAutoCompleteTextView2, ConstraintLayout constraintLayout2, ConstraintLayout constraintLayout3, ConstraintLayout constraintLayout4, TextView textView2, TextInputLayout textInputLayout4, TextInputLayout textInputLayout5, TextInputLayout textInputLayout6, TextInputEditText textInputEditText, TextInputEditText textInputEditText2, TextInputEditText textInputEditText3, TextInputEditText textInputEditText4, CircularProgressIndicator circularProgressIndicator) {
        this.f25069a = constraintLayout;
        this.f25070b = textInputLayout;
        this.f25071c = textView;
        this.f25072d = textInputLayout2;
        this.f25073e = materialAutoCompleteTextView;
        this.f25074f = textInputLayout3;
        this.f25075g = materialAutoCompleteTextView2;
        this.f25076h = constraintLayout2;
        this.f25077i = constraintLayout3;
        this.f25078j = constraintLayout4;
        this.f25079k = textView2;
        this.f25080l = textInputLayout4;
        this.f25081m = textInputLayout5;
        this.f25082n = textInputLayout6;
        this.f25083o = textInputEditText;
        this.f25084p = textInputEditText2;
        this.f25085q = textInputEditText3;
        this.f25086r = textInputEditText4;
        this.f25087s = circularProgressIndicator;
    }

    public static d a(View view) {
        int i10 = bq.e.f7110b;
        TextInputLayout textInputLayout = (TextInputLayout) e4.a.a(view, i10);
        if (textInputLayout != null) {
            i10 = bq.e.f7112c;
            TextView textView = (TextView) e4.a.a(view, i10);
            if (textView != null) {
                i10 = bq.e.f7114d;
                TextInputLayout textInputLayout2 = (TextInputLayout) e4.a.a(view, i10);
                if (textInputLayout2 != null) {
                    i10 = bq.e.f7116e;
                    MaterialAutoCompleteTextView materialAutoCompleteTextView = (MaterialAutoCompleteTextView) e4.a.a(view, i10);
                    if (materialAutoCompleteTextView != null) {
                        i10 = bq.e.f7118f;
                        TextInputLayout textInputLayout3 = (TextInputLayout) e4.a.a(view, i10);
                        if (textInputLayout3 != null) {
                            i10 = bq.e.f7120g;
                            MaterialAutoCompleteTextView materialAutoCompleteTextView2 = (MaterialAutoCompleteTextView) e4.a.a(view, i10);
                            if (materialAutoCompleteTextView2 != null) {
                                ConstraintLayout constraintLayout = (ConstraintLayout) view;
                                i10 = bq.e.f7122h;
                                ConstraintLayout constraintLayout2 = (ConstraintLayout) e4.a.a(view, i10);
                                if (constraintLayout2 != null) {
                                    i10 = bq.e.f7124i;
                                    ConstraintLayout constraintLayout3 = (ConstraintLayout) e4.a.a(view, i10);
                                    if (constraintLayout3 != null) {
                                        i10 = bq.e.f7126j;
                                        TextView textView2 = (TextView) e4.a.a(view, i10);
                                        if (textView2 != null) {
                                            i10 = bq.e.f7128k;
                                            TextInputLayout textInputLayout4 = (TextInputLayout) e4.a.a(view, i10);
                                            if (textInputLayout4 != null) {
                                                i10 = bq.e.f7130l;
                                                TextInputLayout textInputLayout5 = (TextInputLayout) e4.a.a(view, i10);
                                                if (textInputLayout5 != null) {
                                                    i10 = bq.e.f7132m;
                                                    TextInputLayout textInputLayout6 = (TextInputLayout) e4.a.a(view, i10);
                                                    if (textInputLayout6 != null) {
                                                        i10 = bq.e.A;
                                                        TextInputEditText textInputEditText = (TextInputEditText) e4.a.a(view, i10);
                                                        if (textInputEditText != null) {
                                                            i10 = bq.e.B;
                                                            TextInputEditText textInputEditText2 = (TextInputEditText) e4.a.a(view, i10);
                                                            if (textInputEditText2 != null) {
                                                                i10 = bq.e.C;
                                                                TextInputEditText textInputEditText3 = (TextInputEditText) e4.a.a(view, i10);
                                                                if (textInputEditText3 != null) {
                                                                    i10 = bq.e.D;
                                                                    TextInputEditText textInputEditText4 = (TextInputEditText) e4.a.a(view, i10);
                                                                    if (textInputEditText4 != null) {
                                                                        i10 = bq.e.f7127j0;
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
        View inflate = layoutInflater.inflate(bq.f.f7163d, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public ConstraintLayout getRoot() {
        return this.f25069a;
    }
}
