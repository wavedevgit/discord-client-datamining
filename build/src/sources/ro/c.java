package ro;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;
import androidx.viewbinding.ViewBinding;
import po.g2;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final FrameLayout f49045a;

    /* renamed from: b  reason: collision with root package name */
    public final FrameLayout f49046b;

    private c(FrameLayout frameLayout, FrameLayout frameLayout2) {
        this.f49045a = frameLayout;
        this.f49046b = frameLayout2;
    }

    public static c a(View view) {
        if (view != null) {
            FrameLayout frameLayout = (FrameLayout) view;
            return new c(frameLayout, frameLayout);
        }
        throw new NullPointerException("rootView");
    }

    public static c c(LayoutInflater layoutInflater) {
        return d(layoutInflater, null, false);
    }

    public static c d(LayoutInflater layoutInflater, ViewGroup viewGroup, boolean z10) {
        View inflate = layoutInflater.inflate(g2.f46487c, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public FrameLayout getRoot() {
        return this.f49045a;
    }
}
