package sp;

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
import rp.m1;
import rp.n1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final CoordinatorLayout f48178a;

    /* renamed from: b  reason: collision with root package name */
    public final FrameLayout f48179b;

    /* renamed from: c  reason: collision with root package name */
    public final ConstraintLayout f48180c;

    /* renamed from: d  reason: collision with root package name */
    public final Flow f48181d;

    /* renamed from: e  reason: collision with root package name */
    public final TextView f48182e;

    /* renamed from: f  reason: collision with root package name */
    public final Button f48183f;

    /* renamed from: g  reason: collision with root package name */
    public final Button f48184g;

    /* renamed from: h  reason: collision with root package name */
    public final View f48185h;

    /* renamed from: i  reason: collision with root package name */
    public final TextView f48186i;

    private b(CoordinatorLayout coordinatorLayout, FrameLayout frameLayout, ConstraintLayout constraintLayout, Flow flow, TextView textView, Button button, Button button2, View view, TextView textView2) {
        this.f48178a = coordinatorLayout;
        this.f48179b = frameLayout;
        this.f48180c = constraintLayout;
        this.f48181d = flow;
        this.f48182e = textView;
        this.f48183f = button;
        this.f48184g = button2;
        this.f48185h = view;
        this.f48186i = textView2;
    }

    public static b a(View view) {
        View a10;
        int i10 = m1.f47663a;
        FrameLayout frameLayout = (FrameLayout) e4.a.a(view, i10);
        if (frameLayout != null) {
            i10 = m1.f47664b;
            ConstraintLayout constraintLayout = (ConstraintLayout) e4.a.a(view, i10);
            if (constraintLayout != null) {
                i10 = m1.f47665c;
                Flow flow = (Flow) e4.a.a(view, i10);
                if (flow != null) {
                    i10 = m1.f47666d;
                    TextView textView = (TextView) e4.a.a(view, i10);
                    if (textView != null) {
                        i10 = m1.f47667e;
                        Button button = (Button) e4.a.a(view, i10);
                        if (button != null) {
                            i10 = m1.f47668f;
                            Button button2 = (Button) e4.a.a(view, i10);
                            if (button2 != null && (a10 = e4.a.a(view, (i10 = m1.f47669g))) != null) {
                                i10 = m1.f47670h;
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
        View inflate = layoutInflater.inflate(n1.f47674b, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public CoordinatorLayout getRoot() {
        return this.f48178a;
    }
}
