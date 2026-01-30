package aq;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;
import androidx.viewbinding.ViewBinding;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class x implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final TextView f6707a;

    /* renamed from: b  reason: collision with root package name */
    public final TextView f6708b;

    private x(TextView textView, TextView textView2) {
        this.f6707a = textView;
        this.f6708b = textView2;
    }

    public static x a(View view) {
        if (view != null) {
            TextView textView = (TextView) view;
            return new x(textView, textView);
        }
        throw new NullPointerException("rootView");
    }

    public static x c(LayoutInflater layoutInflater) {
        return d(layoutInflater, null, false);
    }

    public static x d(LayoutInflater layoutInflater, ViewGroup viewGroup, boolean z10) {
        View inflate = layoutInflater.inflate(vp.f.f51877y, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public TextView getRoot() {
        return this.f6707a;
    }
}
