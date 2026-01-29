package ap;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.FrameLayout;
import android.widget.TextView;
import androidx.constraintlayout.helper.widget.Flow;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.coordinatorlayout.widget.CoordinatorLayout;
import androidx.viewbinding.ViewBinding;
import zo.m1;
import zo.n1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final CoordinatorLayout f6576a;

    /* renamed from: b  reason: collision with root package name */
    public final FrameLayout f6577b;

    /* renamed from: c  reason: collision with root package name */
    public final ConstraintLayout f6578c;

    /* renamed from: d  reason: collision with root package name */
    public final Flow f6579d;

    /* renamed from: e  reason: collision with root package name */
    public final TextView f6580e;

    /* renamed from: f  reason: collision with root package name */
    public final Button f6581f;

    /* renamed from: g  reason: collision with root package name */
    public final Button f6582g;

    /* renamed from: h  reason: collision with root package name */
    public final View f6583h;

    /* renamed from: i  reason: collision with root package name */
    public final TextView f6584i;

    private b(CoordinatorLayout coordinatorLayout, FrameLayout frameLayout, ConstraintLayout constraintLayout, Flow flow, TextView textView, Button button, Button button2, View view, TextView textView2) {
        this.f6576a = coordinatorLayout;
        this.f6577b = frameLayout;
        this.f6578c = constraintLayout;
        this.f6579d = flow;
        this.f6580e = textView;
        this.f6581f = button;
        this.f6582g = button2;
        this.f6583h = view;
        this.f6584i = textView2;
    }

    public static b a(View view) {
        View a10;
        int i10 = m1.f55981a;
        FrameLayout frameLayout = (FrameLayout) e4.a.a(view, i10);
        if (frameLayout != null) {
            i10 = m1.f55982b;
            ConstraintLayout constraintLayout = (ConstraintLayout) e4.a.a(view, i10);
            if (constraintLayout != null) {
                i10 = m1.f55983c;
                Flow flow = (Flow) e4.a.a(view, i10);
                if (flow != null) {
                    i10 = m1.f55984d;
                    TextView textView = (TextView) e4.a.a(view, i10);
                    if (textView != null) {
                        i10 = m1.f55985e;
                        Button button = (Button) e4.a.a(view, i10);
                        if (button != null) {
                            i10 = m1.f55986f;
                            Button button2 = (Button) e4.a.a(view, i10);
                            if (button2 != null && (a10 = e4.a.a(view, (i10 = m1.f55987g))) != null) {
                                i10 = m1.f55988h;
                                TextView textView2 = (TextView) e4.a.a(view, i10);
                                if (textView2 != null) {
                                    return new b((CoordinatorLayout) view, frameLayout, constraintLayout, flow, textView, button, button2, a10, textView2);
                                }
                            }
                        }
                    }
                }
            }
        }
        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i10)));
    }

    public static b c(LayoutInflater layoutInflater, ViewGroup viewGroup, boolean z10) {
        View inflate = layoutInflater.inflate(n1.f55992b, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public CoordinatorLayout getRoot() {
        return this.f6576a;
    }
}
