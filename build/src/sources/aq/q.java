package aq;

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
    private final ConstraintLayout f6687a;

    /* renamed from: b  reason: collision with root package name */
    public final MaterialCheckBox f6688b;

    /* renamed from: c  reason: collision with root package name */
    public final TextView f6689c;

    private q(ConstraintLayout constraintLayout, MaterialCheckBox materialCheckBox, TextView textView) {
        this.f6687a = constraintLayout;
        this.f6688b = materialCheckBox;
        this.f6689c = textView;
    }

    public static q a(View view) {
        int i10 = vp.e.f51829o;
        MaterialCheckBox materialCheckBox = (MaterialCheckBox) e4.a.a(view, i10);
        if (materialCheckBox != null) {
            i10 = vp.e.V;
            TextView textView = (TextView) e4.a.a(view, i10);
            if (textView != null) {
                return new q((ConstraintLayout) view, materialCheckBox, textView);
            }
        }
        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i10)));
    }

    public static q c(LayoutInflater layoutInflater, ViewGroup viewGroup, boolean z10) {
        View inflate = layoutInflater.inflate(vp.f.f51870r, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public ConstraintLayout getRoot() {
        return this.f6687a;
    }
}
