package dp;

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
import cp.m1;
import cp.n1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final CoordinatorLayout f20715a;

    /* renamed from: b  reason: collision with root package name */
    public final FrameLayout f20716b;

    /* renamed from: c  reason: collision with root package name */
    public final ConstraintLayout f20717c;

    /* renamed from: d  reason: collision with root package name */
    public final Flow f20718d;

    /* renamed from: e  reason: collision with root package name */
    public final TextView f20719e;

    /* renamed from: f  reason: collision with root package name */
    public final Button f20720f;

    /* renamed from: g  reason: collision with root package name */
    public final Button f20721g;

    /* renamed from: h  reason: collision with root package name */
    public final View f20722h;

    /* renamed from: i  reason: collision with root package name */
    public final TextView f20723i;

    private b(CoordinatorLayout coordinatorLayout, FrameLayout frameLayout, ConstraintLayout constraintLayout, Flow flow, TextView textView, Button button, Button button2, View view, TextView textView2) {
        this.f20715a = coordinatorLayout;
        this.f20716b = frameLayout;
        this.f20717c = constraintLayout;
        this.f20718d = flow;
        this.f20719e = textView;
        this.f20720f = button;
        this.f20721g = button2;
        this.f20722h = view;
        this.f20723i = textView2;
    }

    public static b a(View view) {
        View a10;
        int i10 = m1.f19732a;
        FrameLayout frameLayout = (FrameLayout) e4.a.a(view, i10);
        if (frameLayout != null) {
            i10 = m1.f19733b;
            ConstraintLayout constraintLayout = (ConstraintLayout) e4.a.a(view, i10);
            if (constraintLayout != null) {
                i10 = m1.f19734c;
                Flow flow = (Flow) e4.a.a(view, i10);
                if (flow != null) {
                    i10 = m1.f19735d;
                    TextView textView = (TextView) e4.a.a(view, i10);
                    if (textView != null) {
                        i10 = m1.f19736e;
                        Button button = (Button) e4.a.a(view, i10);
                        if (button != null) {
                            i10 = m1.f19737f;
                            Button button2 = (Button) e4.a.a(view, i10);
                            if (button2 != null && (a10 = e4.a.a(view, (i10 = m1.f19738g))) != null) {
                                i10 = m1.f19739h;
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
        View inflate = layoutInflater.inflate(n1.f19743b, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public CoordinatorLayout getRoot() {
        return this.f20715a;
    }
}
