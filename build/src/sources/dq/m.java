package dq;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.LinearLayout;
import android.widget.TextView;
import androidx.viewbinding.ViewBinding;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final LinearLayout f20797a;

    /* renamed from: b  reason: collision with root package name */
    public final LinearLayout f20798b;

    /* renamed from: c  reason: collision with root package name */
    public final TextView f20799c;

    /* renamed from: d  reason: collision with root package name */
    public final TextView f20800d;

    private m(LinearLayout linearLayout, LinearLayout linearLayout2, TextView textView, TextView textView2) {
        this.f20797a = linearLayout;
        this.f20798b = linearLayout2;
        this.f20799c = textView;
        this.f20800d = textView2;
    }

    public static m a(View view) {
        int i10 = yp.e.f55189l0;
        LinearLayout linearLayout = (LinearLayout) e4.a.a(view, i10);
        if (linearLayout != null) {
            i10 = yp.e.f55195o0;
            TextView textView = (TextView) e4.a.a(view, i10);
            if (textView != null) {
                i10 = yp.e.f55197p0;
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
        View inflate = layoutInflater.inflate(yp.f.f55231n, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public LinearLayout getRoot() {
        return this.f20797a;
    }
}
