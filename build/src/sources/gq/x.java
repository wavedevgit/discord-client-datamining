package gq;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;
import androidx.viewbinding.ViewBinding;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class x implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final TextView f25161a;

    /* renamed from: b  reason: collision with root package name */
    public final TextView f25162b;

    private x(TextView textView, TextView textView2) {
        this.f25161a = textView;
        this.f25162b = textView2;
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
        View inflate = layoutInflater.inflate(bq.f.f7184y, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public TextView getRoot() {
        return this.f25161a;
    }
}
