package jq;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.viewbinding.ViewBinding;
import com.google.android.material.checkbox.MaterialCheckBox;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class q implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final ConstraintLayout f30395a;

    /* renamed from: b  reason: collision with root package name */
    public final MaterialCheckBox f30396b;

    /* renamed from: c  reason: collision with root package name */
    public final TextView f30397c;

    private q(ConstraintLayout constraintLayout, MaterialCheckBox materialCheckBox, TextView textView) {
        this.f30395a = constraintLayout;
        this.f30396b = materialCheckBox;
        this.f30397c = textView;
    }

    public static q a(View view) {
        int i10 = eq.e.f22000o;
        MaterialCheckBox materialCheckBox = (MaterialCheckBox) e4.a.a(view, i10);
        if (materialCheckBox != null) {
            i10 = eq.e.V;
            TextView textView = (TextView) e4.a.a(view, i10);
            if (textView != null) {
                return new q((ConstraintLayout) view, materialCheckBox, textView);
            }
        }
        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i10)));
    }

    public static q c(LayoutInflater layoutInflater, ViewGroup viewGroup, boolean z10) {
        View inflate = layoutInflater.inflate(eq.f.f22041r, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public ConstraintLayout getRoot() {
        return this.f30395a;
    }
}
