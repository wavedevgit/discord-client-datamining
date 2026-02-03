package op;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.coordinatorlayout.widget.CoordinatorLayout;
import androidx.core.widget.NestedScrollView;
import androidx.viewbinding.ViewBinding;
import mp.m;
import mp.n;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final CoordinatorLayout f44385a;

    /* renamed from: b  reason: collision with root package name */
    public final ConstraintLayout f44386b;

    /* renamed from: c  reason: collision with root package name */
    public final FrameLayout f44387c;

    /* renamed from: d  reason: collision with root package name */
    public final NestedScrollView f44388d;

    /* renamed from: e  reason: collision with root package name */
    public final View f44389e;

    private a(CoordinatorLayout coordinatorLayout, ConstraintLayout constraintLayout, FrameLayout frameLayout, NestedScrollView nestedScrollView, View view) {
        this.f44385a = coordinatorLayout;
        this.f44386b = constraintLayout;
        this.f44387c = frameLayout;
        this.f44388d = nestedScrollView;
        this.f44389e = view;
    }

    public static a a(View view) {
        View a10;
        int i10 = m.f38989a;
        ConstraintLayout constraintLayout = (ConstraintLayout) e4.a.a(view, i10);
        if (constraintLayout != null) {
            i10 = m.f38990b;
            FrameLayout frameLayout = (FrameLayout) e4.a.a(view, i10);
            if (frameLayout != null) {
                i10 = m.f38991c;
                NestedScrollView nestedScrollView = (NestedScrollView) e4.a.a(view, i10);
                if (nestedScrollView != null && (a10 = e4.a.a(view, (i10 = m.f39001m))) != null) {
                    return new a((CoordinatorLayout) view, constraintLayout, frameLayout, nestedScrollView, a10);
                }
            }
        }
        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i10)));
    }

    public static a c(LayoutInflater layoutInflater, ViewGroup viewGroup, boolean z10) {
        View inflate = layoutInflater.inflate(n.f39002a, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public CoordinatorLayout getRoot() {
        return this.f44385a;
    }
}
