package tp;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import androidx.viewbinding.ViewBinding;
import com.withpersona.sdk2.inquiry.shared.ui.ThemeableLottieAnimationView;
import rp.n;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final ThemeableLottieAnimationView f50851a;

    /* renamed from: b  reason: collision with root package name */
    public final ThemeableLottieAnimationView f50852b;

    private e(ThemeableLottieAnimationView themeableLottieAnimationView, ThemeableLottieAnimationView themeableLottieAnimationView2) {
        this.f50851a = themeableLottieAnimationView;
        this.f50852b = themeableLottieAnimationView2;
    }

    public static e a(View view) {
        if (view != null) {
            ThemeableLottieAnimationView themeableLottieAnimationView = (ThemeableLottieAnimationView) view;
            return new e(themeableLottieAnimationView, themeableLottieAnimationView);
        }
        throw new NullPointerException("rootView");
    }

    public static e c(LayoutInflater layoutInflater) {
        return d(layoutInflater, null, false);
    }

    public static e d(LayoutInflater layoutInflater, ViewGroup viewGroup, boolean z10) {
        View inflate = layoutInflater.inflate(n.f49152e, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public ThemeableLottieAnimationView getRoot() {
        return this.f50851a;
    }
}
