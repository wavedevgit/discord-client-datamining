package gp;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.TextView;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.recyclerview.widget.RecyclerView;
import androidx.viewbinding.ViewBinding;
import com.withpersona.sdk2.inquiry.shared.ui.Pi2NavigationBar;
import fp.w0;
import fp.x0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final ConstraintLayout f27370a;

    /* renamed from: b  reason: collision with root package name */
    public final TextView f27371b;

    /* renamed from: c  reason: collision with root package name */
    public final ConstraintLayout f27372c;

    /* renamed from: d  reason: collision with root package name */
    public final Pi2NavigationBar f27373d;

    /* renamed from: e  reason: collision with root package name */
    public final RecyclerView f27374e;

    /* renamed from: f  reason: collision with root package name */
    public final Button f27375f;

    /* renamed from: g  reason: collision with root package name */
    public final TextView f27376g;

    /* renamed from: h  reason: collision with root package name */
    public final Button f27377h;

    private f(ConstraintLayout constraintLayout, TextView textView, ConstraintLayout constraintLayout2, Pi2NavigationBar pi2NavigationBar, RecyclerView recyclerView, Button button, TextView textView2, Button button2) {
        this.f27370a = constraintLayout;
        this.f27371b = textView;
        this.f27372c = constraintLayout2;
        this.f27373d = pi2NavigationBar;
        this.f27374e = recyclerView;
        this.f27375f = button;
        this.f27376g = textView2;
        this.f27377h = button2;
    }

    public static f a(View view) {
        int i10 = w0.f25051e;
        TextView textView = (TextView) e4.a.a(view, i10);
        if (textView != null) {
            i10 = w0.f25063q;
            ConstraintLayout constraintLayout = (ConstraintLayout) e4.a.a(view, i10);
            if (constraintLayout != null) {
                i10 = w0.E;
                Pi2NavigationBar pi2NavigationBar = (Pi2NavigationBar) e4.a.a(view, i10);
                if (pi2NavigationBar != null) {
                    i10 = w0.O;
                    RecyclerView recyclerView = (RecyclerView) e4.a.a(view, i10);
                    if (recyclerView != null) {
                        i10 = w0.P;
                        Button button = (Button) e4.a.a(view, i10);
                        if (button != null) {
                            i10 = w0.Y;
                            TextView textView2 = (TextView) e4.a.a(view, i10);
                            if (textView2 != null) {
                                i10 = w0.f25048b0;
                                Button button2 = (Button) e4.a.a(view, i10);
                                if (button2 != null) {
                                    return new f((ConstraintLayout) view, textView, constraintLayout, pi2NavigationBar, recyclerView, button, textView2, button2);
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
        View inflate = layoutInflater.inflate(x0.f25090f, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public ConstraintLayout getRoot() {
        return this.f27370a;
    }
}
