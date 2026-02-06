package fo;

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
import eo.y2;
import eo.z2;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final CoordinatorLayout f23378a;

    /* renamed from: b  reason: collision with root package name */
    public final TextView f23379b;

    /* renamed from: c  reason: collision with root package name */
    public final Guideline f23380c;

    /* renamed from: d  reason: collision with root package name */
    public final TextView f23381d;

    /* renamed from: e  reason: collision with root package name */
    public final Guideline f23382e;

    /* renamed from: f  reason: collision with root package name */
    public final Pi2NavigationBar f23383f;

    /* renamed from: g  reason: collision with root package name */
    public final RecyclerView f23384g;

    /* renamed from: h  reason: collision with root package name */
    public final Guideline f23385h;

    /* renamed from: i  reason: collision with root package name */
    public final Button f23386i;

    /* renamed from: j  reason: collision with root package name */
    public final TextView f23387j;

    private c(CoordinatorLayout coordinatorLayout, TextView textView, Guideline guideline, TextView textView2, Guideline guideline2, Pi2NavigationBar pi2NavigationBar, RecyclerView recyclerView, Guideline guideline3, Button button, TextView textView3) {
        this.f23378a = coordinatorLayout;
        this.f23379b = textView;
        this.f23380c = guideline;
        this.f23381d = textView2;
        this.f23382e = guideline2;
        this.f23383f = pi2NavigationBar;
        this.f23384g = recyclerView;
        this.f23385h = guideline3;
        this.f23386i = button;
        this.f23387j = textView3;
    }

    public static c a(View view) {
        int i10 = y2.f22065c;
        TextView textView = (TextView) e4.a.a(view, i10);
        if (textView != null) {
            i10 = y2.f22066d;
            Guideline guideline = (Guideline) e4.a.a(view, i10);
            if (guideline != null) {
                i10 = y2.f22069g;
                TextView textView2 = (TextView) e4.a.a(view, i10);
                if (textView2 != null) {
                    i10 = y2.f22073k;
                    Guideline guideline2 = (Guideline) e4.a.a(view, i10);
                    if (guideline2 != null) {
                        i10 = y2.f22075m;
                        Pi2NavigationBar pi2NavigationBar = (Pi2NavigationBar) e4.a.a(view, i10);
                        if (pi2NavigationBar != null) {
                            i10 = y2.f22078p;
                            RecyclerView recyclerView = (RecyclerView) e4.a.a(view, i10);
                            if (recyclerView != null) {
                                i10 = y2.f22079q;
                                Guideline guideline3 = (Guideline) e4.a.a(view, i10);
                                if (guideline3 != null) {
                                    i10 = y2.f22080r;
                                    Button button = (Button) e4.a.a(view, i10);
                                    if (button != null) {
                                        i10 = y2.f22081s;
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
        View inflate = layoutInflater.inflate(z2.f22089b, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public CoordinatorLayout getRoot() {
        return this.f23378a;
    }
}
