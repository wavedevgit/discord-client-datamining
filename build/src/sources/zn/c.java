package zn;

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
import yn.y2;
import yn.z2;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final CoordinatorLayout f56092a;

    /* renamed from: b  reason: collision with root package name */
    public final TextView f56093b;

    /* renamed from: c  reason: collision with root package name */
    public final Guideline f56094c;

    /* renamed from: d  reason: collision with root package name */
    public final TextView f56095d;

    /* renamed from: e  reason: collision with root package name */
    public final Guideline f56096e;

    /* renamed from: f  reason: collision with root package name */
    public final Pi2NavigationBar f56097f;

    /* renamed from: g  reason: collision with root package name */
    public final RecyclerView f56098g;

    /* renamed from: h  reason: collision with root package name */
    public final Guideline f56099h;

    /* renamed from: i  reason: collision with root package name */
    public final Button f56100i;

    /* renamed from: j  reason: collision with root package name */
    public final TextView f56101j;

    private c(CoordinatorLayout coordinatorLayout, TextView textView, Guideline guideline, TextView textView2, Guideline guideline2, Pi2NavigationBar pi2NavigationBar, RecyclerView recyclerView, Guideline guideline3, Button button, TextView textView3) {
        this.f56092a = coordinatorLayout;
        this.f56093b = textView;
        this.f56094c = guideline;
        this.f56095d = textView2;
        this.f56096e = guideline2;
        this.f56097f = pi2NavigationBar;
        this.f56098g = recyclerView;
        this.f56099h = guideline3;
        this.f56100i = button;
        this.f56101j = textView3;
    }

    public static c a(View view) {
        int i10 = y2.f55094c;
        TextView textView = (TextView) e4.a.a(view, i10);
        if (textView != null) {
            i10 = y2.f55095d;
            Guideline guideline = (Guideline) e4.a.a(view, i10);
            if (guideline != null) {
                i10 = y2.f55098g;
                TextView textView2 = (TextView) e4.a.a(view, i10);
                if (textView2 != null) {
                    i10 = y2.f55102k;
                    Guideline guideline2 = (Guideline) e4.a.a(view, i10);
                    if (guideline2 != null) {
                        i10 = y2.f55104m;
                        Pi2NavigationBar pi2NavigationBar = (Pi2NavigationBar) e4.a.a(view, i10);
                        if (pi2NavigationBar != null) {
                            i10 = y2.f55107p;
                            RecyclerView recyclerView = (RecyclerView) e4.a.a(view, i10);
                            if (recyclerView != null) {
                                i10 = y2.f55108q;
                                Guideline guideline3 = (Guideline) e4.a.a(view, i10);
                                if (guideline3 != null) {
                                    i10 = y2.f55109r;
                                    Button button = (Button) e4.a.a(view, i10);
                                    if (button != null) {
                                        i10 = y2.f55110s;
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
        View inflate = layoutInflater.inflate(z2.f55118b, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public CoordinatorLayout getRoot() {
        return this.f56092a;
    }
}
