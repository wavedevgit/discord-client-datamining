package iq;

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
    private final ConstraintLayout f29233a;

    /* renamed from: b  reason: collision with root package name */
    public final MaterialRadioButton f29234b;

    /* renamed from: c  reason: collision with root package name */
    public final TextView f29235c;

    /* renamed from: d  reason: collision with root package name */
    public final TextView f29236d;

    private b(ConstraintLayout constraintLayout, MaterialRadioButton materialRadioButton, TextView textView, TextView textView2) {
        this.f29233a = constraintLayout;
        this.f29234b = materialRadioButton;
        this.f29235c = textView;
        this.f29236d = textView2;
    }

    public static b a(View view) {
        int i10 = dq.e.f21045k0;
        MaterialRadioButton materialRadioButton = (MaterialRadioButton) e4.a.a(view, i10);
        if (materialRadioButton != null) {
            i10 = dq.e.f21049m0;
            TextView textView = (TextView) e4.a.a(view, i10);
            if (textView != null) {
                i10 = dq.e.f21051n0;
                TextView textView2 = (TextView) e4.a.a(view, i10);
                if (textView2 != null) {
                    return new b((ConstraintLayout) view, materialRadioButton, textView, textView2);
                }
            }
        }
        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i10)));
    }

    public static b c(LayoutInflater layoutInflater, ViewGroup viewGroup, boolean z10) {
        View inflate = layoutInflater.inflate(dq.f.f21077b, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public ConstraintLayout getRoot() {
        return this.f29233a;
    }
}
