package ro;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;
import androidx.viewbinding.ViewBinding;
import po.g2;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final FrameLayout f49047a;

    private d(FrameLayout frameLayout) {
        this.f49047a = frameLayout;
    }

    public static d a(View view) {
        if (view != null) {
            return new d((FrameLayout) view);
        }
        throw new NullPointerException("rootView");
    }

    public static d c(LayoutInflater layoutInflater, ViewGroup viewGroup, boolean z10) {
        View inflate = layoutInflater.inflate(g2.f46489e, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public FrameLayout getRoot() {
        return this.f49047a;
    }
}
