package no;

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
import jo.m4;
import jo.n4;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final CoordinatorLayout f41008a;

    /* renamed from: b  reason: collision with root package name */
    public final Barrier f41009b;

    /* renamed from: c  reason: collision with root package name */
    public final ConstraintLayout f41010c;

    /* renamed from: d  reason: collision with root package name */
    public final ImageView f41011d;

    /* renamed from: e  reason: collision with root package name */
    public final View f41012e;

    /* renamed from: f  reason: collision with root package name */
    public final Pi2NavigationBar f41013f;

    /* renamed from: g  reason: collision with root package name */
    public final RecyclerView f41014g;

    /* renamed from: h  reason: collision with root package name */
    public final TextView f41015h;

    /* renamed from: i  reason: collision with root package name */
    public final TextView f41016i;

    /* renamed from: j  reason: collision with root package name */
    public final TextView f41017j;

    /* renamed from: k  reason: collision with root package name */
    public final TextView f41018k;

    private f(CoordinatorLayout coordinatorLayout, Barrier barrier, ConstraintLayout constraintLayout, ImageView imageView, View view, Pi2NavigationBar pi2NavigationBar, RecyclerView recyclerView, TextView textView, TextView textView2, TextView textView3, TextView textView4) {
        this.f41008a = coordinatorLayout;
        this.f41009b = barrier;
        this.f41010c = constraintLayout;
        this.f41011d = imageView;
        this.f41012e = view;
        this.f41013f = pi2NavigationBar;
        this.f41014g = recyclerView;
        this.f41015h = textView;
        this.f41016i = textView2;
        this.f41017j = textView3;
        this.f41018k = textView4;
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
                        i10 = m4.f30408q0;
                        RecyclerView recyclerView = (RecyclerView) e4.a.a(view, i10);
                        if (recyclerView != null) {
                            i10 = m4.f30424y0;
                            TextView textView = (TextView) e4.a.a(view, i10);
                            if (textView != null) {
                                i10 = m4.f30426z0;
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
        View inflate = layoutInflater.inflate(n4.f30550f, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public CoordinatorLayout getRoot() {
        return this.f41008a;
    }
}
