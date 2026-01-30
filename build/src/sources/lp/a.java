package lp;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.coordinatorlayout.widget.CoordinatorLayout;
import androidx.core.widget.NestedScrollView;
import androidx.viewbinding.ViewBinding;
import jp.m;
import jp.n;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final CoordinatorLayout f37421a;

    /* renamed from: b  reason: collision with root package name */
    public final ConstraintLayout f37422b;

    /* renamed from: c  reason: collision with root package name */
    public final FrameLayout f37423c;

    /* renamed from: d  reason: collision with root package name */
    public final NestedScrollView f37424d;

    /* renamed from: e  reason: collision with root package name */
    public final View f37425e;

    private a(CoordinatorLayout coordinatorLayout, ConstraintLayout constraintLayout, FrameLayout frameLayout, NestedScrollView nestedScrollView, View view) {
        this.f37421a = coordinatorLayout;
        this.f37422b = constraintLayout;
        this.f37423c = frameLayout;
        this.f37424d = nestedScrollView;
        this.f37425e = view;
    }

    public static a a(View view) {
        View a10;
        int i10 = m.f32343a;
        ConstraintLayout constraintLayout = (ConstraintLayout) e4.a.a(view, i10);
        if (constraintLayout != null) {
            i10 = m.f32344b;
            FrameLayout frameLayout = (FrameLayout) e4.a.a(view, i10);
            if (frameLayout != null) {
                i10 = m.f32345c;
                NestedScrollView nestedScrollView = (NestedScrollView) e4.a.a(view, i10);
                if (nestedScrollView != null && (a10 = e4.a.a(view, (i10 = m.f32355m))) != null) {
                    return new a((CoordinatorLayout) view, constraintLayout, frameLayout, nestedScrollView, a10);
                }
            }
        }
        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i10)));
    }

    public static a c(LayoutInflater layoutInflater, ViewGroup viewGroup, boolean z10) {
        View inflate = layoutInflater.inflate(n.f32356a, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public CoordinatorLayout getRoot() {
        return this.f37421a;
    }
}
