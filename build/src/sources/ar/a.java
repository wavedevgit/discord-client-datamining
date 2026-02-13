package ar;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;
import android.widget.LinearLayout;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.coordinatorlayout.widget.CoordinatorLayout;
import androidx.core.widget.NestedScrollView;
import androidx.viewbinding.ViewBinding;
import com.google.android.material.divider.MaterialDivider;
import com.withpersona.sdk2.inquiry.shared.ui.Pi2NavigationBar;
import com.withpersona.sdk2.inquiry.steps.ui.view.ShadowedNestedScrollView;
import zq.f1;
import zq.g1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final CoordinatorLayout f6027a;

    /* renamed from: b  reason: collision with root package name */
    public final ConstraintLayout f6028b;

    /* renamed from: c  reason: collision with root package name */
    public final FrameLayout f6029c;

    /* renamed from: d  reason: collision with root package name */
    public final MaterialDivider f6030d;

    /* renamed from: e  reason: collision with root package name */
    public final LinearLayout f6031e;

    /* renamed from: f  reason: collision with root package name */
    public final CoordinatorLayout f6032f;

    /* renamed from: g  reason: collision with root package name */
    public final View f6033g;

    /* renamed from: h  reason: collision with root package name */
    public final NestedScrollView f6034h;

    /* renamed from: i  reason: collision with root package name */
    public final Pi2NavigationBar f6035i;

    /* renamed from: j  reason: collision with root package name */
    public final ShadowedNestedScrollView f6036j;

    /* renamed from: k  reason: collision with root package name */
    public final ConstraintLayout f6037k;

    /* renamed from: l  reason: collision with root package name */
    public final FrameLayout f6038l;

    private a(CoordinatorLayout coordinatorLayout, ConstraintLayout constraintLayout, FrameLayout frameLayout, MaterialDivider materialDivider, LinearLayout linearLayout, CoordinatorLayout coordinatorLayout2, View view, NestedScrollView nestedScrollView, Pi2NavigationBar pi2NavigationBar, ShadowedNestedScrollView shadowedNestedScrollView, ConstraintLayout constraintLayout2, FrameLayout frameLayout2) {
        this.f6027a = coordinatorLayout;
        this.f6028b = constraintLayout;
        this.f6029c = frameLayout;
        this.f6030d = materialDivider;
        this.f6031e = linearLayout;
        this.f6032f = coordinatorLayout2;
        this.f6033g = view;
        this.f6034h = nestedScrollView;
        this.f6035i = pi2NavigationBar;
        this.f6036j = shadowedNestedScrollView;
        this.f6037k = constraintLayout2;
        this.f6038l = frameLayout2;
    }

    public static a a(View view) {
        View a10;
        int i10 = f1.f57224d;
        ConstraintLayout constraintLayout = (ConstraintLayout) e4.a.a(view, i10);
        if (constraintLayout != null) {
            i10 = f1.f57226f;
            FrameLayout frameLayout = (FrameLayout) e4.a.a(view, i10);
            if (frameLayout != null) {
                i10 = f1.f57227g;
                MaterialDivider materialDivider = (MaterialDivider) e4.a.a(view, i10);
                if (materialDivider != null) {
                    i10 = f1.f57228h;
                    LinearLayout linearLayout = (LinearLayout) e4.a.a(view, i10);
                    if (linearLayout != null) {
                        i10 = f1.f57229i;
                        CoordinatorLayout coordinatorLayout = (CoordinatorLayout) e4.a.a(view, i10);
                        if (coordinatorLayout != null && (a10 = e4.a.a(view, (i10 = f1.f57230j))) != null) {
                            i10 = f1.f57232l;
                            NestedScrollView nestedScrollView = (NestedScrollView) e4.a.a(view, i10);
                            if (nestedScrollView != null) {
                                i10 = f1.f57233m;
                                Pi2NavigationBar pi2NavigationBar = (Pi2NavigationBar) e4.a.a(view, i10);
                                if (pi2NavigationBar != null) {
                                    i10 = f1.f57234n;
                                    ShadowedNestedScrollView shadowedNestedScrollView = (ShadowedNestedScrollView) e4.a.a(view, i10);
                                    if (shadowedNestedScrollView != null) {
                                        i10 = f1.f57235o;
                                        ConstraintLayout constraintLayout2 = (ConstraintLayout) e4.a.a(view, i10);
                                        if (constraintLayout2 != null) {
                                            i10 = f1.f57242v;
                                            FrameLayout frameLayout2 = (FrameLayout) e4.a.a(view, i10);
                                            if (frameLayout2 != null) {
                                                return new a((CoordinatorLayout) view, constraintLayout, frameLayout, materialDivider, linearLayout, coordinatorLayout, a10, nestedScrollView, pi2NavigationBar, shadowedNestedScrollView, constraintLayout2, frameLayout2);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i10)));
    }

    public static a c(LayoutInflater layoutInflater) {
        return d(layoutInflater, null, false);
    }

    public static a d(LayoutInflater layoutInflater, ViewGroup viewGroup, boolean z10) {
        View inflate = layoutInflater.inflate(g1.f57270a, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public CoordinatorLayout getRoot() {
        return this.f6027a;
    }
}
