package sq;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.LinearLayout;
import android.widget.TextView;
import androidx.viewbinding.ViewBinding;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final LinearLayout f48828a;

    /* renamed from: b  reason: collision with root package name */
    public final LinearLayout f48829b;

    /* renamed from: c  reason: collision with root package name */
    public final TextView f48830c;

    /* renamed from: d  reason: collision with root package name */
    public final TextView f48831d;

    private m(LinearLayout linearLayout, LinearLayout linearLayout2, TextView textView, TextView textView2) {
        this.f48828a = linearLayout;
        this.f48829b = linearLayout2;
        this.f48830c = textView;
        this.f48831d = textView2;
    }

    public static m a(View view) {
        int i10 = nq.e.f38840l0;
        LinearLayout linearLayout = (LinearLayout) e4.a.a(view, i10);
        if (linearLayout != null) {
            i10 = nq.e.f38846o0;
            TextView textView = (TextView) e4.a.a(view, i10);
            if (textView != null) {
                i10 = nq.e.f38848p0;
                TextView textView2 = (TextView) e4.a.a(view, i10);
                if (textView2 != null) {
                    return new m((LinearLayout) view, linearLayout, textView, textView2);
                }
            }
        }
        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i10)));
    }

    public static m c(LayoutInflater layoutInflater) {
        return d(layoutInflater, null, false);
    }

    public static m d(LayoutInflater layoutInflater, ViewGroup viewGroup, boolean z10) {
        View inflate = layoutInflater.inflate(nq.f.f38882n, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public LinearLayout getRoot() {
        return this.f48828a;
    }
}
