package wo;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.TextView;
import androidx.constraintlayout.helper.widget.Flow;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.viewbinding.ViewBinding;
import uo.f2;
import uo.g2;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final ConstraintLayout f54085a;

    /* renamed from: b  reason: collision with root package name */
    public final ConstraintLayout f54086b;

    /* renamed from: c  reason: collision with root package name */
    public final Button f54087c;

    /* renamed from: d  reason: collision with root package name */
    public final Flow f54088d;

    /* renamed from: e  reason: collision with root package name */
    public final TextView f54089e;

    /* renamed from: f  reason: collision with root package name */
    public final TextView f54090f;

    /* renamed from: g  reason: collision with root package name */
    public final Button f54091g;

    private a(ConstraintLayout constraintLayout, ConstraintLayout constraintLayout2, Button button, Flow flow, TextView textView, TextView textView2, Button button2) {
        this.f54085a = constraintLayout;
        this.f54086b = constraintLayout2;
        this.f54087c = button;
        this.f54088d = flow;
        this.f54089e = textView;
        this.f54090f = textView2;
        this.f54091g = button2;
    }

    public static a a(View view) {
        ConstraintLayout constraintLayout = (ConstraintLayout) view;
        int i10 = f2.f51961b;
        Button button = (Button) e4.a.a(view, i10);
        if (button != null) {
            i10 = f2.f51962c;
            Flow flow = (Flow) e4.a.a(view, i10);
            if (flow != null) {
                i10 = f2.f51964e;
                TextView textView = (TextView) e4.a.a(view, i10);
                if (textView != null) {
                    i10 = f2.f51965f;
                    TextView textView2 = (TextView) e4.a.a(view, i10);
                    if (textView2 != null) {
                        i10 = f2.f51968i;
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
        View inflate = layoutInflater.inflate(g2.f51995a, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public ConstraintLayout getRoot() {
        return this.f54085a;
    }
}
