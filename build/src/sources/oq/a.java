package oq;

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
import nq.f1;
import nq.g1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final CoordinatorLayout f44177a;

    /* renamed from: b  reason: collision with root package name */
    public final ConstraintLayout f44178b;

    /* renamed from: c  reason: collision with root package name */
    public final FrameLayout f44179c;

    /* renamed from: d  reason: collision with root package name */
    public final MaterialDivider f44180d;

    /* renamed from: e  reason: collision with root package name */
    public final LinearLayout f44181e;

    /* renamed from: f  reason: collision with root package name */
    public final CoordinatorLayout f44182f;

    /* renamed from: g  reason: collision with root package name */
    public final View f44183g;

    /* renamed from: h  reason: collision with root package name */
    public final NestedScrollView f44184h;

    /* renamed from: i  reason: collision with root package name */
    public final Pi2NavigationBar f44185i;

    /* renamed from: j  reason: collision with root package name */
    public final ShadowedNestedScrollView f44186j;

    /* renamed from: k  reason: collision with root package name */
    public final ConstraintLayout f44187k;

    /* renamed from: l  reason: collision with root package name */
    public final FrameLayout f44188l;

    private a(CoordinatorLayout coordinatorLayout, ConstraintLayout constraintLayout, FrameLayout frameLayout, MaterialDivider materialDivider, LinearLayout linearLayout, CoordinatorLayout coordinatorLayout2, View view, NestedScrollView nestedScrollView, Pi2NavigationBar pi2NavigationBar, ShadowedNestedScrollView shadowedNestedScrollView, ConstraintLayout constraintLayout2, FrameLayout frameLayout2) {
        this.f44177a = coordinatorLayout;
        this.f44178b = constraintLayout;
        this.f44179c = frameLayout;
        this.f44180d = materialDivider;
        this.f44181e = linearLayout;
        this.f44182f = coordinatorLayout2;
        this.f44183g = view;
        this.f44184h = nestedScrollView;
        this.f44185i = pi2NavigationBar;
        this.f44186j = shadowedNestedScrollView;
        this.f44187k = constraintLayout2;
        this.f44188l = frameLayout2;
    }

    public static a a(View view) {
        View a10;
        int i10 = f1.f41502d;
        ConstraintLayout constraintLayout = (ConstraintLayout) e4.a.a(view, i10);
        if (constraintLayout != null) {
            i10 = f1.f41504f;
            FrameLayout frameLayout = (FrameLayout) e4.a.a(view, i10);
            if (frameLayout != null) {
                i10 = f1.f41505g;
                MaterialDivider materialDivider = (MaterialDivider) e4.a.a(view, i10);
                if (materialDivider != null) {
                    i10 = f1.f41506h;
                    LinearLayout linearLayout = (LinearLayout) e4.a.a(view, i10);
                    if (linearLayout != null) {
                        i10 = f1.f41507i;
                        CoordinatorLayout coordinatorLayout = (CoordinatorLayout) e4.a.a(view, i10);
                        if (coordinatorLayout != null && (a10 = e4.a.a(view, (i10 = f1.f41508j))) != null) {
                            i10 = f1.f41510l;
                            NestedScrollView nestedScrollView = (NestedScrollView) e4.a.a(view, i10);
                            if (nestedScrollView != null) {
                                i10 = f1.f41511m;
                                Pi2NavigationBar pi2NavigationBar = (Pi2NavigationBar) e4.a.a(view, i10);
                                if (pi2NavigationBar != null) {
                                    i10 = f1.f41512n;
                                    ShadowedNestedScrollView shadowedNestedScrollView = (ShadowedNestedScrollView) e4.a.a(view, i10);
                                    if (shadowedNestedScrollView != null) {
                                        i10 = f1.f41513o;
                                        ConstraintLayout constraintLayout2 = (ConstraintLayout) e4.a.a(view, i10);
                                        if (constraintLayout2 != null) {
                                            i10 = f1.f41520v;
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
        View inflate = layoutInflater.inflate(g1.f41548a, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public CoordinatorLayout getRoot() {
        return this.f44177a;
    }
}
