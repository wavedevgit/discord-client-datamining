package go;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.TextView;
import androidx.constraintlayout.widget.Guideline;
import androidx.coordinatorlayout.widget.CoordinatorLayout;
import androidx.recyclerview.widget.RecyclerView;
import androidx.viewbinding.ViewBinding;
import com.withpersona.sdk2.inquiry.shared.ui.Pi2NavigationBar;
import fo.y2;
import fo.z2;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final CoordinatorLayout f24463a;

    /* renamed from: b  reason: collision with root package name */
    public final TextView f24464b;

    /* renamed from: c  reason: collision with root package name */
    public final Guideline f24465c;

    /* renamed from: d  reason: collision with root package name */
    public final TextView f24466d;

    /* renamed from: e  reason: collision with root package name */
    public final Guideline f24467e;

    /* renamed from: f  reason: collision with root package name */
    public final Pi2NavigationBar f24468f;

    /* renamed from: g  reason: collision with root package name */
    public final RecyclerView f24469g;

    /* renamed from: h  reason: collision with root package name */
    public final Guideline f24470h;

    /* renamed from: i  reason: collision with root package name */
    public final Button f24471i;

    /* renamed from: j  reason: collision with root package name */
    public final TextView f24472j;

    private c(CoordinatorLayout coordinatorLayout, TextView textView, Guideline guideline, TextView textView2, Guideline guideline2, Pi2NavigationBar pi2NavigationBar, RecyclerView recyclerView, Guideline guideline3, Button button, TextView textView3) {
        this.f24463a = coordinatorLayout;
        this.f24464b = textView;
        this.f24465c = guideline;
        this.f24466d = textView2;
        this.f24467e = guideline2;
        this.f24468f = pi2NavigationBar;
        this.f24469g = recyclerView;
        this.f24470h = guideline3;
        this.f24471i = button;
        this.f24472j = textView3;
    }

    public static c a(View view) {
        int i10 = y2.f23141c;
        TextView textView = (TextView) e4.a.a(view, i10);
        if (textView != null) {
            i10 = y2.f23142d;
            Guideline guideline = (Guideline) e4.a.a(view, i10);
            if (guideline != null) {
                i10 = y2.f23145g;
                TextView textView2 = (TextView) e4.a.a(view, i10);
                if (textView2 != null) {
                    i10 = y2.f23149k;
                    Guideline guideline2 = (Guideline) e4.a.a(view, i10);
                    if (guideline2 != null) {
                        i10 = y2.f23151m;
                        Pi2NavigationBar pi2NavigationBar = (Pi2NavigationBar) e4.a.a(view, i10);
                        if (pi2NavigationBar != null) {
                            i10 = y2.f23154p;
                            RecyclerView recyclerView = (RecyclerView) e4.a.a(view, i10);
                            if (recyclerView != null) {
                                i10 = y2.f23155q;
                                Guideline guideline3 = (Guideline) e4.a.a(view, i10);
                                if (guideline3 != null) {
                                    i10 = y2.f23156r;
                                    Button button = (Button) e4.a.a(view, i10);
                                    if (button != null) {
                                        i10 = y2.f23157s;
                                        TextView textView3 = (TextView) e4.a.a(view, i10);
                                        if (textView3 != null) {
                                            return new c((CoordinatorLayout) view, textView, guideline, textView2, guideline2, pi2NavigationBar, recyclerView, guideline3, button, textView3);
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

    public static c c(LayoutInflater layoutInflater, ViewGroup viewGroup, boolean z10) {
        View inflate = layoutInflater.inflate(z2.f23165b, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public CoordinatorLayout getRoot() {
        return this.f24463a;
    }
}
