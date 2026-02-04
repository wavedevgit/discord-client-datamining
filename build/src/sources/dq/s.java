package dq;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.viewbinding.ViewBinding;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class s implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final ConstraintLayout f20823a;

    private s(ConstraintLayout constraintLayout) {
        this.f20823a = constraintLayout;
    }

    public static s a(View view) {
        if (view != null) {
            return new s((ConstraintLayout) view);
        }
        throw new NullPointerException("rootView");
    }

    public static s c(LayoutInflater layoutInflater) {
        return d(layoutInflater, null, false);
    }

    public static s d(LayoutInflater layoutInflater, ViewGroup viewGroup, boolean z10) {
        View inflate = layoutInflater.inflate(yp.f.f55234t, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public ConstraintLayout getRoot() {
        return this.f20823a;
    }
}
