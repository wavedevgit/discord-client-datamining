package ip;

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
import hp.m1;
import hp.n1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final CoordinatorLayout f29214a;

    /* renamed from: b  reason: collision with root package name */
    public final FrameLayout f29215b;

    /* renamed from: c  reason: collision with root package name */
    public final ConstraintLayout f29216c;

    /* renamed from: d  reason: collision with root package name */
    public final Flow f29217d;

    /* renamed from: e  reason: collision with root package name */
    public final TextView f29218e;

    /* renamed from: f  reason: collision with root package name */
    public final Button f29219f;

    /* renamed from: g  reason: collision with root package name */
    public final Button f29220g;

    /* renamed from: h  reason: collision with root package name */
    public final View f29221h;

    /* renamed from: i  reason: collision with root package name */
    public final TextView f29222i;

    private b(CoordinatorLayout coordinatorLayout, FrameLayout frameLayout, ConstraintLayout constraintLayout, Flow flow, TextView textView, Button button, Button button2, View view, TextView textView2) {
        this.f29214a = coordinatorLayout;
        this.f29215b = frameLayout;
        this.f29216c = constraintLayout;
        this.f29217d = flow;
        this.f29218e = textView;
        this.f29219f = button;
        this.f29220g = button2;
        this.f29221h = view;
        this.f29222i = textView2;
    }

    public static b a(View view) {
        View a10;
        int i10 = m1.f26416a;
        FrameLayout frameLayout = (FrameLayout) e4.a.a(view, i10);
        if (frameLayout != null) {
            i10 = m1.f26417b;
            ConstraintLayout constraintLayout = (ConstraintLayout) e4.a.a(view, i10);
            if (constraintLayout != null) {
                i10 = m1.f26418c;
                Flow flow = (Flow) e4.a.a(view, i10);
                if (flow != null) {
                    i10 = m1.f26419d;
                    TextView textView = (TextView) e4.a.a(view, i10);
                    if (textView != null) {
                        i10 = m1.f26420e;
                        Button button = (Button) e4.a.a(view, i10);
                        if (button != null) {
                            i10 = m1.f26421f;
                            Button button2 = (Button) e4.a.a(view, i10);
                            if (button2 != null && (a10 = e4.a.a(view, (i10 = m1.f26422g))) != null) {
                                i10 = m1.f26423h;
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
        View inflate = layoutInflater.inflate(n1.f26427b, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public CoordinatorLayout getRoot() {
        return this.f29214a;
    }
}
