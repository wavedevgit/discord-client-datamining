package gp;

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
import fp.m1;
import fp.n1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final CoordinatorLayout f25039a;

    /* renamed from: b  reason: collision with root package name */
    public final FrameLayout f25040b;

    /* renamed from: c  reason: collision with root package name */
    public final ConstraintLayout f25041c;

    /* renamed from: d  reason: collision with root package name */
    public final Flow f25042d;

    /* renamed from: e  reason: collision with root package name */
    public final TextView f25043e;

    /* renamed from: f  reason: collision with root package name */
    public final Button f25044f;

    /* renamed from: g  reason: collision with root package name */
    public final Button f25045g;

    /* renamed from: h  reason: collision with root package name */
    public final View f25046h;

    /* renamed from: i  reason: collision with root package name */
    public final TextView f25047i;

    private b(CoordinatorLayout coordinatorLayout, FrameLayout frameLayout, ConstraintLayout constraintLayout, Flow flow, TextView textView, Button button, Button button2, View view, TextView textView2) {
        this.f25039a = coordinatorLayout;
        this.f25040b = frameLayout;
        this.f25041c = constraintLayout;
        this.f25042d = flow;
        this.f25043e = textView;
        this.f25044f = button;
        this.f25045g = button2;
        this.f25046h = view;
        this.f25047i = textView2;
    }

    public static b a(View view) {
        View a10;
        int i10 = m1.f23343a;
        FrameLayout frameLayout = (FrameLayout) e4.a.a(view, i10);
        if (frameLayout != null) {
            i10 = m1.f23344b;
            ConstraintLayout constraintLayout = (ConstraintLayout) e4.a.a(view, i10);
            if (constraintLayout != null) {
                i10 = m1.f23345c;
                Flow flow = (Flow) e4.a.a(view, i10);
                if (flow != null) {
                    i10 = m1.f23346d;
                    TextView textView = (TextView) e4.a.a(view, i10);
                    if (textView != null) {
                        i10 = m1.f23347e;
                        Button button = (Button) e4.a.a(view, i10);
                        if (button != null) {
                            i10 = m1.f23348f;
                            Button button2 = (Button) e4.a.a(view, i10);
                            if (button2 != null && (a10 = e4.a.a(view, (i10 = m1.f23349g))) != null) {
                                i10 = m1.f23350h;
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
        View inflate = layoutInflater.inflate(n1.f23354b, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public CoordinatorLayout getRoot() {
        return this.f25039a;
    }
}
