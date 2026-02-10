package oo;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;
import androidx.constraintlayout.widget.Barrier;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.coordinatorlayout.widget.CoordinatorLayout;
import androidx.recyclerview.widget.RecyclerView;
import androidx.viewbinding.ViewBinding;
import com.withpersona.sdk2.inquiry.shared.ui.Pi2NavigationBar;
import ko.m4;
import ko.n4;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final CoordinatorLayout f42483a;

    /* renamed from: b  reason: collision with root package name */
    public final Barrier f42484b;

    /* renamed from: c  reason: collision with root package name */
    public final ConstraintLayout f42485c;

    /* renamed from: d  reason: collision with root package name */
    public final ImageView f42486d;

    /* renamed from: e  reason: collision with root package name */
    public final View f42487e;

    /* renamed from: f  reason: collision with root package name */
    public final Pi2NavigationBar f42488f;

    /* renamed from: g  reason: collision with root package name */
    public final RecyclerView f42489g;

    /* renamed from: h  reason: collision with root package name */
    public final TextView f42490h;

    /* renamed from: i  reason: collision with root package name */
    public final TextView f42491i;

    /* renamed from: j  reason: collision with root package name */
    public final TextView f42492j;

    /* renamed from: k  reason: collision with root package name */
    public final TextView f42493k;

    private f(CoordinatorLayout coordinatorLayout, Barrier barrier, ConstraintLayout constraintLayout, ImageView imageView, View view, Pi2NavigationBar pi2NavigationBar, RecyclerView recyclerView, TextView textView, TextView textView2, TextView textView3, TextView textView4) {
        this.f42483a = coordinatorLayout;
        this.f42484b = barrier;
        this.f42485c = constraintLayout;
        this.f42486d = imageView;
        this.f42487e = view;
        this.f42488f = pi2NavigationBar;
        this.f42489g = recyclerView;
        this.f42490h = textView;
        this.f42491i = textView2;
        this.f42492j = textView3;
        this.f42493k = textView4;
    }

    public static f a(View view) {
        View a10;
        int i10 = m4.G;
        Barrier barrier = (Barrier) e4.a.a(view, i10);
        if (barrier != null) {
            i10 = m4.H;
            ConstraintLayout constraintLayout = (ConstraintLayout) e4.a.a(view, i10);
            if (constraintLayout != null) {
                i10 = m4.T;
                ImageView imageView = (ImageView) e4.a.a(view, i10);
                if (imageView != null && (a10 = e4.a.a(view, (i10 = m4.W))) != null) {
                    i10 = m4.Y;
                    Pi2NavigationBar pi2NavigationBar = (Pi2NavigationBar) e4.a.a(view, i10);
                    if (pi2NavigationBar != null) {
                        i10 = m4.f31407q0;
                        RecyclerView recyclerView = (RecyclerView) e4.a.a(view, i10);
                        if (recyclerView != null) {
                            i10 = m4.f31423y0;
                            TextView textView = (TextView) e4.a.a(view, i10);
                            if (textView != null) {
                                i10 = m4.f31425z0;
                                TextView textView2 = (TextView) e4.a.a(view, i10);
                                if (textView2 != null) {
                                    i10 = m4.A0;
                                    TextView textView3 = (TextView) e4.a.a(view, i10);
                                    if (textView3 != null) {
                                        i10 = m4.B0;
                                        TextView textView4 = (TextView) e4.a.a(view, i10);
                                        if (textView4 != null) {
                                            return new f((CoordinatorLayout) view, barrier, constraintLayout, imageView, a10, pi2NavigationBar, recyclerView, textView, textView2, textView3, textView4);
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

    public static f c(LayoutInflater layoutInflater, ViewGroup viewGroup, boolean z10) {
        View inflate = layoutInflater.inflate(n4.f31549f, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public CoordinatorLayout getRoot() {
        return this.f42483a;
    }
}
