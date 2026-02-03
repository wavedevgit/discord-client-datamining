package op;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.core.widget.NestedScrollView;
import androidx.viewbinding.ViewBinding;
import com.withpersona.sdk2.inquiry.shared.ui.Pi2NavigationBar;
import mp.m;
import mp.n;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final ConstraintLayout f44390a;

    /* renamed from: b  reason: collision with root package name */
    public final FrameLayout f44391b;

    /* renamed from: c  reason: collision with root package name */
    public final NestedScrollView f44392c;

    /* renamed from: d  reason: collision with root package name */
    public final FrameLayout f44393d;

    /* renamed from: e  reason: collision with root package name */
    public final Pi2NavigationBar f44394e;

    private b(ConstraintLayout constraintLayout, FrameLayout frameLayout, NestedScrollView nestedScrollView, FrameLayout frameLayout2, Pi2NavigationBar pi2NavigationBar) {
        this.f44390a = constraintLayout;
        this.f44391b = frameLayout;
        this.f44392c = nestedScrollView;
        this.f44393d = frameLayout2;
        this.f44394e = pi2NavigationBar;
    }

    public static b a(View view) {
        int i10 = m.f38990b;
        FrameLayout frameLayout = (FrameLayout) e4.a.a(view, i10);
        if (frameLayout != null) {
            i10 = m.f38991c;
            NestedScrollView nestedScrollView = (NestedScrollView) e4.a.a(view, i10);
            if (nestedScrollView != null) {
                i10 = m.f38992d;
                FrameLayout frameLayout2 = (FrameLayout) e4.a.a(view, i10);
                if (frameLayout2 != null) {
                    i10 = m.f38995g;
                    Pi2NavigationBar pi2NavigationBar = (Pi2NavigationBar) e4.a.a(view, i10);
                    if (pi2NavigationBar != null) {
                        return new b((ConstraintLayout) view, frameLayout, nestedScrollView, frameLayout2, pi2NavigationBar);
                    }
                }
            }
        }
        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i10)));
    }

    public static b c(LayoutInflater layoutInflater, ViewGroup viewGroup, boolean z10) {
        View inflate = layoutInflater.inflate(n.f39003b, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public ConstraintLayout getRoot() {
        return this.f44390a;
    }
}
