package jp;

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
import ip.m1;
import ip.n1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final CoordinatorLayout f30293a;

    /* renamed from: b  reason: collision with root package name */
    public final FrameLayout f30294b;

    /* renamed from: c  reason: collision with root package name */
    public final ConstraintLayout f30295c;

    /* renamed from: d  reason: collision with root package name */
    public final Flow f30296d;

    /* renamed from: e  reason: collision with root package name */
    public final TextView f30297e;

    /* renamed from: f  reason: collision with root package name */
    public final Button f30298f;

    /* renamed from: g  reason: collision with root package name */
    public final Button f30299g;

    /* renamed from: h  reason: collision with root package name */
    public final View f30300h;

    /* renamed from: i  reason: collision with root package name */
    public final TextView f30301i;

    private b(CoordinatorLayout coordinatorLayout, FrameLayout frameLayout, ConstraintLayout constraintLayout, Flow flow, TextView textView, Button button, Button button2, View view, TextView textView2) {
        this.f30293a = coordinatorLayout;
        this.f30294b = frameLayout;
        this.f30295c = constraintLayout;
        this.f30296d = flow;
        this.f30297e = textView;
        this.f30298f = button;
        this.f30299g = button2;
        this.f30300h = view;
        this.f30301i = textView2;
    }

    public static b a(View view) {
        View a10;
        int i10 = m1.f29556a;
        FrameLayout frameLayout = (FrameLayout) e4.a.a(view, i10);
        if (frameLayout != null) {
            i10 = m1.f29557b;
            ConstraintLayout constraintLayout = (ConstraintLayout) e4.a.a(view, i10);
            if (constraintLayout != null) {
                i10 = m1.f29558c;
                Flow flow = (Flow) e4.a.a(view, i10);
                if (flow != null) {
                    i10 = m1.f29559d;
                    TextView textView = (TextView) e4.a.a(view, i10);
                    if (textView != null) {
                        i10 = m1.f29560e;
                        Button button = (Button) e4.a.a(view, i10);
                        if (button != null) {
                            i10 = m1.f29561f;
                            Button button2 = (Button) e4.a.a(view, i10);
                            if (button2 != null && (a10 = e4.a.a(view, (i10 = m1.f29562g))) != null) {
                                i10 = m1.f29563h;
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
        View inflate = layoutInflater.inflate(n1.f29567b, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public CoordinatorLayout getRoot() {
        return this.f30293a;
    }
}
