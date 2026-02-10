package jq;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.viewbinding.ViewBinding;
import com.google.android.material.checkbox.MaterialCheckBox;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final ConstraintLayout f30361a;

    /* renamed from: b  reason: collision with root package name */
    public final MaterialCheckBox f30362b;

    /* renamed from: c  reason: collision with root package name */
    public final TextView f30363c;

    /* renamed from: d  reason: collision with root package name */
    public final TextView f30364d;

    /* renamed from: e  reason: collision with root package name */
    public final TextView f30365e;

    private i(ConstraintLayout constraintLayout, MaterialCheckBox materialCheckBox, TextView textView, TextView textView2, TextView textView3) {
        this.f30361a = constraintLayout;
        this.f30362b = materialCheckBox;
        this.f30363c = textView;
        this.f30364d = textView2;
        this.f30365e = textView3;
    }

    public static i a(View view) {
        int i10 = eq.e.f22000o;
        MaterialCheckBox materialCheckBox = (MaterialCheckBox) e4.a.a(view, i10);
        if (materialCheckBox != null) {
            i10 = eq.e.f22002p;
            TextView textView = (TextView) e4.a.a(view, i10);
            if (textView != null) {
                i10 = eq.e.f22004q;
                TextView textView2 = (TextView) e4.a.a(view, i10);
                if (textView2 != null) {
                    i10 = eq.e.f22012u;
                    TextView textView3 = (TextView) e4.a.a(view, i10);
                    if (textView3 != null) {
                        return new i((ConstraintLayout) view, materialCheckBox, textView, textView2, textView3);
                    }
                }
            }
        }
        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i10)));
    }

    public static i c(LayoutInflater layoutInflater) {
        return d(layoutInflater, null, false);
    }

    public static i d(LayoutInflater layoutInflater, ViewGroup viewGroup, boolean z10) {
        View inflate = layoutInflater.inflate(eq.f.f22033j, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public ConstraintLayout getRoot() {
        return this.f30361a;
    }
}
