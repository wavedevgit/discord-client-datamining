package op;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.TextView;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.recyclerview.widget.RecyclerView;
import androidx.viewbinding.ViewBinding;
import com.withpersona.sdk2.inquiry.shared.ui.Pi2NavigationBar;
import np.w0;
import np.x0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final ConstraintLayout f42605a;

    /* renamed from: b  reason: collision with root package name */
    public final TextView f42606b;

    /* renamed from: c  reason: collision with root package name */
    public final ConstraintLayout f42607c;

    /* renamed from: d  reason: collision with root package name */
    public final Pi2NavigationBar f42608d;

    /* renamed from: e  reason: collision with root package name */
    public final RecyclerView f42609e;

    /* renamed from: f  reason: collision with root package name */
    public final Button f42610f;

    /* renamed from: g  reason: collision with root package name */
    public final TextView f42611g;

    /* renamed from: h  reason: collision with root package name */
    public final Button f42612h;

    private f(ConstraintLayout constraintLayout, TextView textView, ConstraintLayout constraintLayout2, Pi2NavigationBar pi2NavigationBar, RecyclerView recyclerView, Button button, TextView textView2, Button button2) {
        this.f42605a = constraintLayout;
        this.f42606b = textView;
        this.f42607c = constraintLayout2;
        this.f42608d = pi2NavigationBar;
        this.f42609e = recyclerView;
        this.f42610f = button;
        this.f42611g = textView2;
        this.f42612h = button2;
    }

    public static f a(View view) {
        int i10 = w0.f39528e;
        TextView textView = (TextView) e4.a.a(view, i10);
        if (textView != null) {
            i10 = w0.f39540q;
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
                                i10 = w0.f39525b0;
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
        View inflate = layoutInflater.inflate(x0.f39567f, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public ConstraintLayout getRoot() {
        return this.f42605a;
    }
}
