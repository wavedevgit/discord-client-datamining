package wo;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;
import androidx.viewbinding.ViewBinding;
import uo.f2;
import uo.g2;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final View f54044a;

    /* renamed from: b  reason: collision with root package name */
    public final View f54045b;

    /* renamed from: c  reason: collision with root package name */
    public final FrameLayout f54046c;

    private b(View view, View view2, FrameLayout frameLayout) {
        this.f54044a = view;
        this.f54045b = view2;
        this.f54046c = frameLayout;
    }

    public static b a(View view) {
        int i10 = f2.f51918g;
        View a10 = e4.a.a(view, i10);
        if (a10 != null) {
            i10 = f2.f51921j;
            FrameLayout frameLayout = (FrameLayout) e4.a.a(view, i10);
            if (frameLayout != null) {
                return new b(view, a10, frameLayout);
            }
        }
        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i10)));
    }

    public static b b(LayoutInflater layoutInflater, ViewGroup viewGroup) {
        if (viewGroup != null) {
            layoutInflater.inflate(g2.f51948b, viewGroup);
            return a(viewGroup);
        }
        throw new NullPointerException("parent");
    }

    @Override // androidx.viewbinding.ViewBinding
    public View getRoot() {
        return this.f54044a;
    }
}
