package bq;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;
import androidx.viewbinding.ViewBinding;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class x implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final TextView f7521a;

    /* renamed from: b  reason: collision with root package name */
    public final TextView f7522b;

    private x(TextView textView, TextView textView2) {
        this.f7521a = textView;
        this.f7522b = textView2;
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
        View inflate = layoutInflater.inflate(wp.f.f52953y, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public TextView getRoot() {
        return this.f7521a;
    }
}
