package dq;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.LinearLayout;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.constraintlayout.widget.Guideline;
import androidx.viewbinding.ViewBinding;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final LinearLayout f20776a;

    /* renamed from: b  reason: collision with root package name */
    public final Guideline f20777b;

    /* renamed from: c  reason: collision with root package name */
    public final LinearLayout f20778c;

    /* renamed from: d  reason: collision with root package name */
    public final ConstraintLayout f20779d;

    /* renamed from: e  reason: collision with root package name */
    public final Guideline f20780e;

    /* renamed from: f  reason: collision with root package name */
    public final View f20781f;

    private g(LinearLayout linearLayout, Guideline guideline, LinearLayout linearLayout2, ConstraintLayout constraintLayout, Guideline guideline2, View view) {
        this.f20776a = linearLayout;
        this.f20777b = guideline;
        this.f20778c = linearLayout2;
        this.f20779d = constraintLayout;
        this.f20780e = guideline2;
        this.f20781f = view;
    }

    public static g a(View view) {
        View a10;
        int i10 = yp.e.I;
        Guideline guideline = (Guideline) e4.a.a(view, i10);
        if (guideline != null) {
            LinearLayout linearLayout = (LinearLayout) view;
            i10 = yp.e.J;
            ConstraintLayout constraintLayout = (ConstraintLayout) e4.a.a(view, i10);
            if (constraintLayout != null) {
                i10 = yp.e.K;
                Guideline guideline2 = (Guideline) e4.a.a(view, i10);
                if (guideline2 != null && (a10 = e4.a.a(view, (i10 = yp.e.M))) != null) {
                    return new g(linearLayout, guideline, linearLayout, constraintLayout, guideline2, a10);
                }
            }
        }
        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i10)));
    }

    public static g c(LayoutInflater layoutInflater) {
        return d(layoutInflater, null, false);
    }

    public static g d(LayoutInflater layoutInflater, ViewGroup viewGroup, boolean z10) {
        View inflate = layoutInflater.inflate(yp.f.f55222h, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public LinearLayout getRoot() {
        return this.f20776a;
    }
}
