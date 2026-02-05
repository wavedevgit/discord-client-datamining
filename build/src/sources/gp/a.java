package gp;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import androidx.viewbinding.ViewBinding;
import fp.n1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final View f25038a;

    private a(View view) {
        this.f25038a = view;
    }

    public static a a(View view) {
        if (view != null) {
            return new a(view);
        }
        throw new NullPointerException("rootView");
    }

    public static a b(LayoutInflater layoutInflater, ViewGroup viewGroup, boolean z10) {
        View inflate = layoutInflater.inflate(n1.f23353a, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    public View getRoot() {
        return this.f25038a;
    }
}
