package lq;

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
import kq.f1;
import kq.g1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final CoordinatorLayout f37065a;

    /* renamed from: b  reason: collision with root package name */
    public final ConstraintLayout f37066b;

    /* renamed from: c  reason: collision with root package name */
    public final FrameLayout f37067c;

    /* renamed from: d  reason: collision with root package name */
    public final MaterialDivider f37068d;

    /* renamed from: e  reason: collision with root package name */
    public final LinearLayout f37069e;

    /* renamed from: f  reason: collision with root package name */
    public final CoordinatorLayout f37070f;

    /* renamed from: g  reason: collision with root package name */
    public final View f37071g;

    /* renamed from: h  reason: collision with root package name */
    public final NestedScrollView f37072h;

    /* renamed from: i  reason: collision with root package name */
    public final Pi2NavigationBar f37073i;

    /* renamed from: j  reason: collision with root package name */
    public final ShadowedNestedScrollView f37074j;

    /* renamed from: k  reason: collision with root package name */
    public final ConstraintLayout f37075k;

    /* renamed from: l  reason: collision with root package name */
    public final FrameLayout f37076l;

    private a(CoordinatorLayout coordinatorLayout, ConstraintLayout constraintLayout, FrameLayout frameLayout, MaterialDivider materialDivider, LinearLayout linearLayout, CoordinatorLayout coordinatorLayout2, View view, NestedScrollView nestedScrollView, Pi2NavigationBar pi2NavigationBar, ShadowedNestedScrollView shadowedNestedScrollView, ConstraintLayout constraintLayout2, FrameLayout frameLayout2) {
        this.f37065a = coordinatorLayout;
        this.f37066b = constraintLayout;
        this.f37067c = frameLayout;
        this.f37068d = materialDivider;
        this.f37069e = linearLayout;
        this.f37070f = coordinatorLayout2;
        this.f37071g = view;
        this.f37072h = nestedScrollView;
        this.f37073i = pi2NavigationBar;
        this.f37074j = shadowedNestedScrollView;
        this.f37075k = constraintLayout2;
        this.f37076l = frameLayout2;
    }

    public static a a(View view) {
        View a10;
        int i10 = f1.f35697d;
        ConstraintLayout constraintLayout = (ConstraintLayout) e4.a.a(view, i10);
        if (constraintLayout != null) {
            i10 = f1.f35699f;
            FrameLayout frameLayout = (FrameLayout) e4.a.a(view, i10);
            if (frameLayout != null) {
                i10 = f1.f35700g;
                MaterialDivider materialDivider = (MaterialDivider) e4.a.a(view, i10);
                if (materialDivider != null) {
                    i10 = f1.f35701h;
                    LinearLayout linearLayout = (LinearLayout) e4.a.a(view, i10);
                    if (linearLayout != null) {
                        i10 = f1.f35702i;
                        CoordinatorLayout coordinatorLayout = (CoordinatorLayout) e4.a.a(view, i10);
                        if (coordinatorLayout != null && (a10 = e4.a.a(view, (i10 = f1.f35703j))) != null) {
                            i10 = f1.f35705l;
                            NestedScrollView nestedScrollView = (NestedScrollView) e4.a.a(view, i10);
                            if (nestedScrollView != null) {
                                i10 = f1.f35706m;
                                Pi2NavigationBar pi2NavigationBar = (Pi2NavigationBar) e4.a.a(view, i10);
                                if (pi2NavigationBar != null) {
                                    i10 = f1.f35707n;
                                    ShadowedNestedScrollView shadowedNestedScrollView = (ShadowedNestedScrollView) e4.a.a(view, i10);
                                    if (shadowedNestedScrollView != null) {
                                        i10 = f1.f35708o;
                                        ConstraintLayout constraintLayout2 = (ConstraintLayout) e4.a.a(view, i10);
                                        if (constraintLayout2 != null) {
                                            i10 = f1.f35715v;
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
        View inflate = layoutInflater.inflate(g1.f35743a, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public CoordinatorLayout getRoot() {
        return this.f37065a;
    }
}
