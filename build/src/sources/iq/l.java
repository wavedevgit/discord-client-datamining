package iq;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import androidx.viewbinding.ViewBinding;
import com.google.android.material.textfield.TextInputLayout;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final TextInputLayout f29246a;

    /* renamed from: b  reason: collision with root package name */
    public final TextInputLayout f29247b;

    private l(TextInputLayout textInputLayout, TextInputLayout textInputLayout2) {
        this.f29246a = textInputLayout;
        this.f29247b = textInputLayout2;
    }

    public static l a(View view) {
        if (view != null) {
            TextInputLayout textInputLayout = (TextInputLayout) view;
            return new l(textInputLayout, textInputLayout);
        }
        throw new NullPointerException("rootView");
    }

    public static l c(LayoutInflater layoutInflater) {
        return d(layoutInflater, null, false);
    }

    public static l d(LayoutInflater layoutInflater, ViewGroup viewGroup, boolean z10) {
        View inflate = layoutInflater.inflate(dq.f.f21088m, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public TextInputLayout getRoot() {
        return this.f29246a;
    }
}
