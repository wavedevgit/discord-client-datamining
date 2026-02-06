package iq;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;
import androidx.viewbinding.ViewBinding;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class w implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final TextView f29286a;

    /* renamed from: b  reason: collision with root package name */
    public final TextView f29287b;

    private w(TextView textView, TextView textView2) {
        this.f29286a = textView;
        this.f29287b = textView2;
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
        View inflate = layoutInflater.inflate(dq.f.f21099x, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public TextView getRoot() {
        return this.f29286a;
    }
}
