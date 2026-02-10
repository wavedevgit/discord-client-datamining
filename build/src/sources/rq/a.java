package rq;

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
import qq.f1;
import qq.g1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final CoordinatorLayout f49155a;

    /* renamed from: b  reason: collision with root package name */
    public final ConstraintLayout f49156b;

    /* renamed from: c  reason: collision with root package name */
    public final FrameLayout f49157c;

    /* renamed from: d  reason: collision with root package name */
    public final MaterialDivider f49158d;

    /* renamed from: e  reason: collision with root package name */
    public final LinearLayout f49159e;

    /* renamed from: f  reason: collision with root package name */
    public final CoordinatorLayout f49160f;

    /* renamed from: g  reason: collision with root package name */
    public final View f49161g;

    /* renamed from: h  reason: collision with root package name */
    public final NestedScrollView f49162h;

    /* renamed from: i  reason: collision with root package name */
    public final Pi2NavigationBar f49163i;

    /* renamed from: j  reason: collision with root package name */
    public final ShadowedNestedScrollView f49164j;

    /* renamed from: k  reason: collision with root package name */
    public final ConstraintLayout f49165k;

    /* renamed from: l  reason: collision with root package name */
    public final FrameLayout f49166l;

    private a(CoordinatorLayout coordinatorLayout, ConstraintLayout constraintLayout, FrameLayout frameLayout, MaterialDivider materialDivider, LinearLayout linearLayout, CoordinatorLayout coordinatorLayout2, View view, NestedScrollView nestedScrollView, Pi2NavigationBar pi2NavigationBar, ShadowedNestedScrollView shadowedNestedScrollView, ConstraintLayout constraintLayout2, FrameLayout frameLayout2) {
        this.f49155a = coordinatorLayout;
        this.f49156b = constraintLayout;
        this.f49157c = frameLayout;
        this.f49158d = materialDivider;
        this.f49159e = linearLayout;
        this.f49160f = coordinatorLayout2;
        this.f49161g = view;
        this.f49162h = nestedScrollView;
        this.f49163i = pi2NavigationBar;
        this.f49164j = shadowedNestedScrollView;
        this.f49165k = constraintLayout2;
        this.f49166l = frameLayout2;
    }

    public static a a(View view) {
        View a10;
        int i10 = f1.f46752d;
        ConstraintLayout constraintLayout = (ConstraintLayout) e4.a.a(view, i10);
        if (constraintLayout != null) {
            i10 = f1.f46754f;
            FrameLayout frameLayout = (FrameLayout) e4.a.a(view, i10);
            if (frameLayout != null) {
                i10 = f1.f46755g;
                MaterialDivider materialDivider = (MaterialDivider) e4.a.a(view, i10);
                if (materialDivider != null) {
                    i10 = f1.f46756h;
                    LinearLayout linearLayout = (LinearLayout) e4.a.a(view, i10);
                    if (linearLayout != null) {
                        i10 = f1.f46757i;
                        CoordinatorLayout coordinatorLayout = (CoordinatorLayout) e4.a.a(view, i10);
                        if (coordinatorLayout != null && (a10 = e4.a.a(view, (i10 = f1.f46758j))) != null) {
                            i10 = f1.f46760l;
                            NestedScrollView nestedScrollView = (NestedScrollView) e4.a.a(view, i10);
                            if (nestedScrollView != null) {
                                i10 = f1.f46761m;
                                Pi2NavigationBar pi2NavigationBar = (Pi2NavigationBar) e4.a.a(view, i10);
                                if (pi2NavigationBar != null) {
                                    i10 = f1.f46762n;
                                    ShadowedNestedScrollView shadowedNestedScrollView = (ShadowedNestedScrollView) e4.a.a(view, i10);
                                    if (shadowedNestedScrollView != null) {
                                        i10 = f1.f46763o;
                                        ConstraintLayout constraintLayout2 = (ConstraintLayout) e4.a.a(view, i10);
                                        if (constraintLayout2 != null) {
                                            i10 = f1.f46770v;
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
        View inflate = layoutInflater.inflate(g1.f46798a, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public CoordinatorLayout getRoot() {
        return this.f49155a;
    }
}
