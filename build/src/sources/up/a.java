package up;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.coordinatorlayout.widget.CoordinatorLayout;
import androidx.core.widget.NestedScrollView;
import androidx.viewbinding.ViewBinding;
import sp.m;
import sp.n;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final CoordinatorLayout f51741a;

    /* renamed from: b  reason: collision with root package name */
    public final ConstraintLayout f51742b;

    /* renamed from: c  reason: collision with root package name */
    public final FrameLayout f51743c;

    /* renamed from: d  reason: collision with root package name */
    public final NestedScrollView f51744d;

    /* renamed from: e  reason: collision with root package name */
    public final View f51745e;

    private a(CoordinatorLayout coordinatorLayout, ConstraintLayout constraintLayout, FrameLayout frameLayout, NestedScrollView nestedScrollView, View view) {
        this.f51741a = coordinatorLayout;
        this.f51742b = constraintLayout;
        this.f51743c = frameLayout;
        this.f51744d = nestedScrollView;
        this.f51745e = view;
    }

    public static a a(View view) {
        View a10;
        int i10 = m.f49960a;
        ConstraintLayout constraintLayout = (ConstraintLayout) e4.a.a(view, i10);
        if (constraintLayout != null) {
            i10 = m.f49961b;
            FrameLayout frameLayout = (FrameLayout) e4.a.a(view, i10);
            if (frameLayout != null) {
                i10 = m.f49962c;
                NestedScrollView nestedScrollView = (NestedScrollView) e4.a.a(view, i10);
                if (nestedScrollView != null && (a10 = e4.a.a(view, (i10 = m.f49972m))) != null) {
                    return new a((CoordinatorLayout) view, constraintLayout, frameLayout, nestedScrollView, a10);
                }
            }
        }
        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i10)));
    }

    public static a c(LayoutInflater layoutInflater, ViewGroup viewGroup, boolean z10) {
        View inflate = layoutInflater.inflate(n.f49973a, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public CoordinatorLayout getRoot() {
        return this.f51741a;
    }
}
