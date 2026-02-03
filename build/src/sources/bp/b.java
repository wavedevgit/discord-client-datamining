package bp;

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
import ap.m1;
import ap.n1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final CoordinatorLayout f7399a;

    /* renamed from: b  reason: collision with root package name */
    public final FrameLayout f7400b;

    /* renamed from: c  reason: collision with root package name */
    public final ConstraintLayout f7401c;

    /* renamed from: d  reason: collision with root package name */
    public final Flow f7402d;

    /* renamed from: e  reason: collision with root package name */
    public final TextView f7403e;

    /* renamed from: f  reason: collision with root package name */
    public final Button f7404f;

    /* renamed from: g  reason: collision with root package name */
    public final Button f7405g;

    /* renamed from: h  reason: collision with root package name */
    public final View f7406h;

    /* renamed from: i  reason: collision with root package name */
    public final TextView f7407i;

    private b(CoordinatorLayout coordinatorLayout, FrameLayout frameLayout, ConstraintLayout constraintLayout, Flow flow, TextView textView, Button button, Button button2, View view, TextView textView2) {
        this.f7399a = coordinatorLayout;
        this.f7400b = frameLayout;
        this.f7401c = constraintLayout;
        this.f7402d = flow;
        this.f7403e = textView;
        this.f7404f = button;
        this.f7405g = button2;
        this.f7406h = view;
        this.f7407i = textView2;
    }

    public static b a(View view) {
        View a10;
        int i10 = m1.f5959a;
        FrameLayout frameLayout = (FrameLayout) e4.a.a(view, i10);
        if (frameLayout != null) {
            i10 = m1.f5960b;
            ConstraintLayout constraintLayout = (ConstraintLayout) e4.a.a(view, i10);
            if (constraintLayout != null) {
                i10 = m1.f5961c;
                Flow flow = (Flow) e4.a.a(view, i10);
                if (flow != null) {
                    i10 = m1.f5962d;
                    TextView textView = (TextView) e4.a.a(view, i10);
                    if (textView != null) {
                        i10 = m1.f5963e;
                        Button button = (Button) e4.a.a(view, i10);
                        if (button != null) {
                            i10 = m1.f5964f;
                            Button button2 = (Button) e4.a.a(view, i10);
                            if (button2 != null && (a10 = e4.a.a(view, (i10 = m1.f5965g))) != null) {
                                i10 = m1.f5966h;
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
        View inflate = layoutInflater.inflate(n1.f5970b, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public CoordinatorLayout getRoot() {
        return this.f7399a;
    }
}
