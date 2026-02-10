package jq;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.constraintlayout.widget.Guideline;
import androidx.viewbinding.ViewBinding;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final ConstraintLayout f30342a;

    /* renamed from: b  reason: collision with root package name */
    public final Guideline f30343b;

    /* renamed from: c  reason: collision with root package name */
    public final Guideline f30344c;

    private e(ConstraintLayout constraintLayout, Guideline guideline, Guideline guideline2) {
        this.f30342a = constraintLayout;
        this.f30343b = guideline;
        this.f30344c = guideline2;
    }

    public static e a(View view) {
        int i10 = eq.e.W;
        Guideline guideline = (Guideline) e4.a.a(view, i10);
        if (guideline != null) {
            i10 = eq.e.f22007r0;
            Guideline guideline2 = (Guideline) e4.a.a(view, i10);
            if (guideline2 != null) {
                return new e((ConstraintLayout) view, guideline, guideline2);
            }
        }
        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i10)));
    }

    public static e c(LayoutInflater layoutInflater) {
        return d(layoutInflater, null, false);
    }

    public static e d(LayoutInflater layoutInflater, ViewGroup viewGroup, boolean z10) {
        View inflate = layoutInflater.inflate(eq.f.f22028e, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public ConstraintLayout getRoot() {
        return this.f30342a;
    }
}
