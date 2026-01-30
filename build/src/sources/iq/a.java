package iq;

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
import hq.f1;
import hq.g1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final CoordinatorLayout f31064a;

    /* renamed from: b  reason: collision with root package name */
    public final ConstraintLayout f31065b;

    /* renamed from: c  reason: collision with root package name */
    public final FrameLayout f31066c;

    /* renamed from: d  reason: collision with root package name */
    public final MaterialDivider f31067d;

    /* renamed from: e  reason: collision with root package name */
    public final LinearLayout f31068e;

    /* renamed from: f  reason: collision with root package name */
    public final CoordinatorLayout f31069f;

    /* renamed from: g  reason: collision with root package name */
    public final View f31070g;

    /* renamed from: h  reason: collision with root package name */
    public final NestedScrollView f31071h;

    /* renamed from: i  reason: collision with root package name */
    public final Pi2NavigationBar f31072i;

    /* renamed from: j  reason: collision with root package name */
    public final ShadowedNestedScrollView f31073j;

    /* renamed from: k  reason: collision with root package name */
    public final ConstraintLayout f31074k;

    /* renamed from: l  reason: collision with root package name */
    public final FrameLayout f31075l;

    private a(CoordinatorLayout coordinatorLayout, ConstraintLayout constraintLayout, FrameLayout frameLayout, MaterialDivider materialDivider, LinearLayout linearLayout, CoordinatorLayout coordinatorLayout2, View view, NestedScrollView nestedScrollView, Pi2NavigationBar pi2NavigationBar, ShadowedNestedScrollView shadowedNestedScrollView, ConstraintLayout constraintLayout2, FrameLayout frameLayout2) {
        this.f31064a = coordinatorLayout;
        this.f31065b = constraintLayout;
        this.f31066c = frameLayout;
        this.f31067d = materialDivider;
        this.f31068e = linearLayout;
        this.f31069f = coordinatorLayout2;
        this.f31070g = view;
        this.f31071h = nestedScrollView;
        this.f31072i = pi2NavigationBar;
        this.f31073j = shadowedNestedScrollView;
        this.f31074k = constraintLayout2;
        this.f31075l = frameLayout2;
    }

    public static a a(View view) {
        View a10;
        int i10 = f1.f27736d;
        ConstraintLayout constraintLayout = (ConstraintLayout) e4.a.a(view, i10);
        if (constraintLayout != null) {
            i10 = f1.f27738f;
            FrameLayout frameLayout = (FrameLayout) e4.a.a(view, i10);
            if (frameLayout != null) {
                i10 = f1.f27739g;
                MaterialDivider materialDivider = (MaterialDivider) e4.a.a(view, i10);
                if (materialDivider != null) {
                    i10 = f1.f27740h;
                    LinearLayout linearLayout = (LinearLayout) e4.a.a(view, i10);
                    if (linearLayout != null) {
                        i10 = f1.f27741i;
                        CoordinatorLayout coordinatorLayout = (CoordinatorLayout) e4.a.a(view, i10);
                        if (coordinatorLayout != null && (a10 = e4.a.a(view, (i10 = f1.f27742j))) != null) {
                            i10 = f1.f27744l;
                            NestedScrollView nestedScrollView = (NestedScrollView) e4.a.a(view, i10);
                            if (nestedScrollView != null) {
                                i10 = f1.f27745m;
                                Pi2NavigationBar pi2NavigationBar = (Pi2NavigationBar) e4.a.a(view, i10);
                                if (pi2NavigationBar != null) {
                                    i10 = f1.f27746n;
                                    ShadowedNestedScrollView shadowedNestedScrollView = (ShadowedNestedScrollView) e4.a.a(view, i10);
                                    if (shadowedNestedScrollView != null) {
                                        i10 = f1.f27747o;
                                        ConstraintLayout constraintLayout2 = (ConstraintLayout) e4.a.a(view, i10);
                                        if (constraintLayout2 != null) {
                                            i10 = f1.f27754v;
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
        View inflate = layoutInflater.inflate(g1.f27782a, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public CoordinatorLayout getRoot() {
        return this.f31064a;
    }
}
