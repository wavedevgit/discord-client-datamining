package fo;

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
import ao.m4;
import ao.n4;
import com.withpersona.sdk2.inquiry.shared.ui.Pi2NavigationBar;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final CoordinatorLayout f25355a;

    /* renamed from: b  reason: collision with root package name */
    public final Barrier f25356b;

    /* renamed from: c  reason: collision with root package name */
    public final ConstraintLayout f25357c;

    /* renamed from: d  reason: collision with root package name */
    public final ImageView f25358d;

    /* renamed from: e  reason: collision with root package name */
    public final View f25359e;

    /* renamed from: f  reason: collision with root package name */
    public final Pi2NavigationBar f25360f;

    /* renamed from: g  reason: collision with root package name */
    public final RecyclerView f25361g;

    /* renamed from: h  reason: collision with root package name */
    public final TextView f25362h;

    /* renamed from: i  reason: collision with root package name */
    public final TextView f25363i;

    /* renamed from: j  reason: collision with root package name */
    public final TextView f25364j;

    /* renamed from: k  reason: collision with root package name */
    public final TextView f25365k;

    private f(CoordinatorLayout coordinatorLayout, Barrier barrier, ConstraintLayout constraintLayout, ImageView imageView, View view, Pi2NavigationBar pi2NavigationBar, RecyclerView recyclerView, TextView textView, TextView textView2, TextView textView3, TextView textView4) {
        this.f25355a = coordinatorLayout;
        this.f25356b = barrier;
        this.f25357c = constraintLayout;
        this.f25358d = imageView;
        this.f25359e = view;
        this.f25360f = pi2NavigationBar;
        this.f25361g = recyclerView;
        this.f25362h = textView;
        this.f25363i = textView2;
        this.f25364j = textView3;
        this.f25365k = textView4;
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
                        i10 = m4.f6222q0;
                        RecyclerView recyclerView = (RecyclerView) e4.a.a(view, i10);
                        if (recyclerView != null) {
                            i10 = m4.f6238y0;
                            TextView textView = (TextView) e4.a.a(view, i10);
                            if (textView != null) {
                                i10 = m4.f6240z0;
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
        View inflate = layoutInflater.inflate(n4.f6364f, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public CoordinatorLayout getRoot() {
        return this.f25355a;
    }
}
