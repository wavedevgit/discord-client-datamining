package dq;

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
    private final ConstraintLayout f20817a;

    /* renamed from: b  reason: collision with root package name */
    public final MaterialCheckBox f20818b;

    /* renamed from: c  reason: collision with root package name */
    public final TextView f20819c;

    private q(ConstraintLayout constraintLayout, MaterialCheckBox materialCheckBox, TextView textView) {
        this.f20817a = constraintLayout;
        this.f20818b = materialCheckBox;
        this.f20819c = textView;
    }

    public static q a(View view) {
        int i10 = yp.e.f55194o;
        MaterialCheckBox materialCheckBox = (MaterialCheckBox) e4.a.a(view, i10);
        if (materialCheckBox != null) {
            i10 = yp.e.V;
            TextView textView = (TextView) e4.a.a(view, i10);
            if (textView != null) {
                return new q((ConstraintLayout) view, materialCheckBox, textView);
            }
        }
        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i10)));
    }

    public static q c(LayoutInflater layoutInflater, ViewGroup viewGroup, boolean z10) {
        View inflate = layoutInflater.inflate(yp.f.f55235r, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public ConstraintLayout getRoot() {
        return this.f20817a;
    }
}
