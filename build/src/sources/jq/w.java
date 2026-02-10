package jq;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;
import androidx.viewbinding.ViewBinding;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class w implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final TextView f30413a;

    /* renamed from: b  reason: collision with root package name */
    public final TextView f30414b;

    private w(TextView textView, TextView textView2) {
        this.f30413a = textView;
        this.f30414b = textView2;
    }

    public static w a(View view) {
        if (view != null) {
            TextView textView = (TextView) view;
            return new w(textView, textView);
        }
        throw new NullPointerException("rootView");
    }

    public static w c(LayoutInflater layoutInflater) {
        return d(layoutInflater, null, false);
    }

    public static w d(LayoutInflater layoutInflater, ViewGroup viewGroup, boolean z10) {
        View inflate = layoutInflater.inflate(eq.f.f22047x, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public TextView getRoot() {
        return this.f30413a;
    }
}
