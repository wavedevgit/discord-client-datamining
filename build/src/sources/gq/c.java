package gq;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.viewbinding.ViewBinding;
import com.google.android.material.textfield.TextInputEditText;
import com.google.android.material.textfield.TextInputLayout;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final ConstraintLayout f25062a;

    /* renamed from: b  reason: collision with root package name */
    public final TextInputLayout f25063b;

    /* renamed from: c  reason: collision with root package name */
    public final TextInputEditText f25064c;

    /* renamed from: d  reason: collision with root package name */
    public final TextInputLayout f25065d;

    /* renamed from: e  reason: collision with root package name */
    public final TextInputLayout f25066e;

    /* renamed from: f  reason: collision with root package name */
    public final TextInputEditText f25067f;

    /* renamed from: g  reason: collision with root package name */
    public final TextInputLayout f25068g;

    private c(ConstraintLayout constraintLayout, TextInputLayout textInputLayout, TextInputEditText textInputEditText, TextInputLayout textInputLayout2, TextInputLayout textInputLayout3, TextInputEditText textInputEditText2, TextInputLayout textInputLayout4) {
        this.f25062a = constraintLayout;
        this.f25063b = textInputLayout;
        this.f25064c = textInputEditText;
        this.f25065d = textInputLayout2;
        this.f25066e = textInputLayout3;
        this.f25067f = textInputEditText2;
        this.f25068g = textInputLayout4;
    }

    public static c a(View view) {
        int i10 = bq.e.G;
        TextInputLayout textInputLayout = (TextInputLayout) e4.a.a(view, i10);
        if (textInputLayout != null) {
            i10 = bq.e.H;
            TextInputEditText textInputEditText = (TextInputEditText) e4.a.a(view, i10);
            if (textInputEditText != null) {
                i10 = bq.e.L;
                TextInputLayout textInputLayout2 = (TextInputLayout) e4.a.a(view, i10);
                if (textInputLayout2 != null) {
                    i10 = bq.e.f7149u0;
                    TextInputLayout textInputLayout3 = (TextInputLayout) e4.a.a(view, i10);
                    if (textInputLayout3 != null) {
                        i10 = bq.e.f7151v0;
                        TextInputEditText textInputEditText2 = (TextInputEditText) e4.a.a(view, i10);
                        if (textInputEditText2 != null) {
                            i10 = bq.e.B0;
                            TextInputLayout textInputLayout4 = (TextInputLayout) e4.a.a(view, i10);
                            if (textInputLayout4 != null) {
                                return new c((ConstraintLayout) view, textInputLayout, textInputEditText, textInputLayout2, textInputLayout3, textInputEditText2, textInputLayout4);
                            }
                        }
                    }
                }
            }
        }
        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i10)));
    }

    public static c c(LayoutInflater layoutInflater) {
        return d(layoutInflater, null, false);
    }

    public static c d(LayoutInflater layoutInflater, ViewGroup viewGroup, boolean z10) {
        View inflate = layoutInflater.inflate(bq.f.f7162c, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public ConstraintLayout getRoot() {
        return this.f25062a;
    }
}
