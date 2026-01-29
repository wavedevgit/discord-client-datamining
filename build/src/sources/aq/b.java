package aq;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.viewbinding.ViewBinding;
import com.google.android.material.radiobutton.MaterialRadioButton;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final ConstraintLayout f6604a;

    /* renamed from: b  reason: collision with root package name */
    public final MaterialRadioButton f6605b;

    /* renamed from: c  reason: collision with root package name */
    public final TextView f6606c;

    /* renamed from: d  reason: collision with root package name */
    public final TextView f6607d;

    private b(ConstraintLayout constraintLayout, MaterialRadioButton materialRadioButton, TextView textView, TextView textView2) {
        this.f6604a = constraintLayout;
        this.f6605b = materialRadioButton;
        this.f6606c = textView;
        this.f6607d = textView2;
    }

    public static b a(View view) {
        int i10 = vp.e.f51806k0;
        MaterialRadioButton materialRadioButton = (MaterialRadioButton) e4.a.a(view, i10);
        if (materialRadioButton != null) {
            i10 = vp.e.f51810m0;
            TextView textView = (TextView) e4.a.a(view, i10);
            if (textView != null) {
                i10 = vp.e.f51812n0;
                TextView textView2 = (TextView) e4.a.a(view, i10);
                if (textView2 != null) {
                    return new b((ConstraintLayout) view, materialRadioButton, textView, textView2);
                }
            }
        }
        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i10)));
    }

    public static b c(LayoutInflater layoutInflater, ViewGroup viewGroup, boolean z10) {
        View inflate = layoutInflater.inflate(vp.f.f51838b, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public ConstraintLayout getRoot() {
        return this.f6604a;
    }
}
