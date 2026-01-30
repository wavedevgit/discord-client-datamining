package aq;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;
import androidx.viewbinding.ViewBinding;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class t implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final TextView f6694a;

    /* renamed from: b  reason: collision with root package name */
    public final TextView f6695b;

    private t(TextView textView, TextView textView2) {
        this.f6694a = textView;
        this.f6695b = textView2;
    }

    public static t a(View view) {
        if (view != null) {
            TextView textView = (TextView) view;
            return new t(textView, textView);
        }
        throw new NullPointerException("rootView");
    }

    public static t c(LayoutInflater layoutInflater) {
        return d(layoutInflater, null, false);
    }

    public static t d(LayoutInflater layoutInflater, ViewGroup viewGroup, boolean z10) {
        View inflate = layoutInflater.inflate(vp.f.f51873u, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public TextView getRoot() {
        return this.f6694a;
    }
}
