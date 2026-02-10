package sq;

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
public final class f implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final ConstraintLayout f48229a;

    /* renamed from: b  reason: collision with root package name */
    public final TextView f48230b;

    /* renamed from: c  reason: collision with root package name */
    public final TextInputLayout f48231c;

    /* renamed from: d  reason: collision with root package name */
    public final TextInputEditText f48232d;

    /* renamed from: e  reason: collision with root package name */
    public final TextView f48233e;

    /* renamed from: f  reason: collision with root package name */
    public final TextInputLayout f48234f;

    /* renamed from: g  reason: collision with root package name */
    public final AutoCompleteTextView f48235g;

    /* renamed from: h  reason: collision with root package name */
    public final TextInputLayout f48236h;

    /* renamed from: i  reason: collision with root package name */
    public final TextInputEditText f48237i;

    private f(ConstraintLayout constraintLayout, TextView textView, TextInputLayout textInputLayout, TextInputEditText textInputEditText, TextView textView2, TextInputLayout textInputLayout2, AutoCompleteTextView autoCompleteTextView, TextInputLayout textInputLayout3, TextInputEditText textInputEditText2) {
        this.f48229a = constraintLayout;
        this.f48230b = textView;
        this.f48231c = textInputLayout;
        this.f48232d = textInputEditText;
        this.f48233e = textView2;
        this.f48234f = textInputLayout2;
        this.f48235g = autoCompleteTextView;
        this.f48236h = textInputLayout3;
        this.f48237i = textInputEditText2;
    }

    public static f a(View view) {
        int i10 = nq.e.f38290v;
        TextView textView = (TextView) e4.a.a(view, i10);
        if (textView != null) {
            i10 = nq.e.f38292w;
            TextInputLayout textInputLayout = (TextInputLayout) e4.a.a(view, i10);
            if (textInputLayout != null) {
                i10 = nq.e.f38294x;
                TextInputEditText textInputEditText = (TextInputEditText) e4.a.a(view, i10);
                if (textInputEditText != null) {
                    i10 = nq.e.E;
                    TextView textView2 = (TextView) e4.a.a(view, i10);
                    if (textView2 != null) {
                        i10 = nq.e.Z;
                        TextInputLayout textInputLayout2 = (TextInputLayout) e4.a.a(view, i10);
                        if (textInputLayout2 != null) {
                            i10 = nq.e.f38249a0;
                            AutoCompleteTextView autoCompleteTextView = (AutoCompleteTextView) e4.a.a(view, i10);
                            if (autoCompleteTextView != null) {
                                i10 = nq.e.D0;
                                TextInputLayout textInputLayout3 = (TextInputLayout) e4.a.a(view, i10);
                                if (textInputLayout3 != null) {
                                    i10 = nq.e.E0;
                                    TextInputEditText textInputEditText2 = (TextInputEditText) e4.a.a(view, i10);
                                    if (textInputEditText2 != null) {
                                        return new f((ConstraintLayout) view, textView, textInputLayout, textInputEditText, textView2, textInputLayout2, autoCompleteTextView, textInputLayout3, textInputEditText2);
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

    public static f c(LayoutInflater layoutInflater) {
        return d(layoutInflater, null, false);
    }

    public static f d(LayoutInflater layoutInflater, ViewGroup viewGroup, boolean z10) {
        View inflate = layoutInflater.inflate(nq.f.f38305f, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public ConstraintLayout getRoot() {
        return this.f48229a;
    }
}
