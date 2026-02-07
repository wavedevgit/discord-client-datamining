package iq;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import androidx.viewbinding.ViewBinding;
import com.google.android.material.textfield.TextInputLayout;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class u implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final TextInputLayout f29325a;

    /* renamed from: b  reason: collision with root package name */
    public final TextInputLayout f29326b;

    private u(TextInputLayout textInputLayout, TextInputLayout textInputLayout2) {
        this.f29325a = textInputLayout;
        this.f29326b = textInputLayout2;
    }

    public static u a(View view) {
        if (view != null) {
            TextInputLayout textInputLayout = (TextInputLayout) view;
            return new u(textInputLayout, textInputLayout);
        }
        throw new NullPointerException("rootView");
    }

    public static u c(LayoutInflater layoutInflater) {
        return d(layoutInflater, null, false);
    }

    public static u d(LayoutInflater layoutInflater, ViewGroup viewGroup, boolean z10) {
        View inflate = layoutInflater.inflate(dq.f.f21097v, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public TextInputLayout getRoot() {
        return this.f29325a;
    }
}
