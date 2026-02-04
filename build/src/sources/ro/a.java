package ro;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.TextView;
import androidx.constraintlayout.helper.widget.Flow;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.viewbinding.ViewBinding;
import po.f2;
import po.g2;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final ConstraintLayout f49035a;

    /* renamed from: b  reason: collision with root package name */
    public final ConstraintLayout f49036b;

    /* renamed from: c  reason: collision with root package name */
    public final Button f49037c;

    /* renamed from: d  reason: collision with root package name */
    public final Flow f49038d;

    /* renamed from: e  reason: collision with root package name */
    public final TextView f49039e;

    /* renamed from: f  reason: collision with root package name */
    public final TextView f49040f;

    /* renamed from: g  reason: collision with root package name */
    public final Button f49041g;

    private a(ConstraintLayout constraintLayout, ConstraintLayout constraintLayout2, Button button, Flow flow, TextView textView, TextView textView2, Button button2) {
        this.f49035a = constraintLayout;
        this.f49036b = constraintLayout2;
        this.f49037c = button;
        this.f49038d = flow;
        this.f49039e = textView;
        this.f49040f = textView2;
        this.f49041g = button2;
    }

    public static a a(View view) {
        ConstraintLayout constraintLayout = (ConstraintLayout) view;
        int i10 = f2.f46451b;
        Button button = (Button) e4.a.a(view, i10);
        if (button != null) {
            i10 = f2.f46452c;
            Flow flow = (Flow) e4.a.a(view, i10);
            if (flow != null) {
                i10 = f2.f46454e;
                TextView textView = (TextView) e4.a.a(view, i10);
                if (textView != null) {
                    i10 = f2.f46455f;
                    TextView textView2 = (TextView) e4.a.a(view, i10);
                    if (textView2 != null) {
                        i10 = f2.f46458i;
                        Button button2 = (Button) e4.a.a(view, i10);
                        if (button2 != null) {
                            return new a(constraintLayout, constraintLayout, button, flow, textView, textView2, button2);
                        }
                    }
                }
            }
        }
        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i10)));
    }

    public static a c(LayoutInflater layoutInflater, ViewGroup viewGroup, boolean z10) {
        View inflate = layoutInflater.inflate(g2.f46485a, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public ConstraintLayout getRoot() {
        return this.f49035a;
    }
}
