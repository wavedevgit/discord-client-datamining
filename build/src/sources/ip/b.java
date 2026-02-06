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
    private final CoordinatorLayout f29166a;

    /* renamed from: b  reason: collision with root package name */
    public final FrameLayout f29167b;

    /* renamed from: c  reason: collision with root package name */
    public final ConstraintLayout f29168c;

    /* renamed from: d  reason: collision with root package name */
    public final Flow f29169d;

    /* renamed from: e  reason: collision with root package name */
    public final TextView f29170e;

    /* renamed from: f  reason: collision with root package name */
    public final Button f29171f;

    /* renamed from: g  reason: collision with root package name */
    public final Button f29172g;

    /* renamed from: h  reason: collision with root package name */
    public final View f29173h;

    /* renamed from: i  reason: collision with root package name */
    public final TextView f29174i;

    private b(CoordinatorLayout coordinatorLayout, FrameLayout frameLayout, ConstraintLayout constraintLayout, Flow flow, TextView textView, Button button, Button button2, View view, TextView textView2) {
        this.f29166a = coordinatorLayout;
        this.f29167b = frameLayout;
        this.f29168c = constraintLayout;
        this.f29169d = flow;
        this.f29170e = textView;
        this.f29171f = button;
        this.f29172g = button2;
        this.f29173h = view;
        this.f29174i = textView2;
    }

    public static b a(View view) {
        View a10;
        int i10 = m1.f26368a;
        FrameLayout frameLayout = (FrameLayout) e4.a.a(view, i10);
        if (frameLayout != null) {
            i10 = m1.f26369b;
            ConstraintLayout constraintLayout = (ConstraintLayout) e4.a.a(view, i10);
            if (constraintLayout != null) {
                i10 = m1.f26370c;
                Flow flow = (Flow) e4.a.a(view, i10);
                if (flow != null) {
                    i10 = m1.f26371d;
                    TextView textView = (TextView) e4.a.a(view, i10);
                    if (textView != null) {
                        i10 = m1.f26372e;
                        Button button = (Button) e4.a.a(view, i10);
                        if (button != null) {
                            i10 = m1.f26373f;
                            Button button2 = (Button) e4.a.a(view, i10);
                            if (button2 != null && (a10 = e4.a.a(view, (i10 = m1.f26374g))) != null) {
                                i10 = m1.f26375h;
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
        View inflate = layoutInflater.inflate(n1.f26379b, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public CoordinatorLayout getRoot() {
        return this.f29166a;
    }
}
