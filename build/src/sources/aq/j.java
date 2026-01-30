package aq;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.LinearLayout;
import android.widget.TextView;
import androidx.viewbinding.ViewBinding;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final LinearLayout f6658a;

    /* renamed from: b  reason: collision with root package name */
    public final LinearLayout f6659b;

    /* renamed from: c  reason: collision with root package name */
    public final TextView f6660c;

    /* renamed from: d  reason: collision with root package name */
    public final TextView f6661d;

    private j(LinearLayout linearLayout, LinearLayout linearLayout2, TextView textView, TextView textView2) {
        this.f6658a = linearLayout;
        this.f6659b = linearLayout2;
        this.f6660c = textView;
        this.f6661d = textView2;
    }

    public static j a(View view) {
        int i10 = vp.e.f51835r;
        LinearLayout linearLayout = (LinearLayout) e4.a.a(view, i10);
        if (linearLayout != null) {
            i10 = vp.e.f51837s;
            TextView textView = (TextView) e4.a.a(view, i10);
            if (textView != null) {
                i10 = vp.e.f51839t;
                TextView textView2 = (TextView) e4.a.a(view, i10);
                if (textView2 != null) {
                    return new j((LinearLayout) view, linearLayout, textView, textView2);
                }
            }
        }
        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i10)));
    }

    public static j c(LayoutInflater layoutInflater) {
        return d(layoutInflater, null, false);
    }

    public static j d(LayoutInflater layoutInflater, ViewGroup viewGroup, boolean z10) {
        View inflate = layoutInflater.inflate(vp.f.f51863k, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public LinearLayout getRoot() {
        return this.f6658a;
    }
}
