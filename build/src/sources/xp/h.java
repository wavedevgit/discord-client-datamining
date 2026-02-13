package xp;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.viewbinding.ViewBinding;
import com.withpersona.sdk2.inquiry.shared.ui.Pi2NavigationBar;
import com.withpersona.sdk2.inquiry.shared.ui.ThemeableLottieAnimationView;
import wp.w0;
import wp.x0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final ConstraintLayout f55708a;

    /* renamed from: b  reason: collision with root package name */
    public final ConstraintLayout f55709b;

    /* renamed from: c  reason: collision with root package name */
    public final TextView f55710c;

    /* renamed from: d  reason: collision with root package name */
    public final ConstraintLayout f55711d;

    /* renamed from: e  reason: collision with root package name */
    public final Pi2NavigationBar f55712e;

    /* renamed from: f  reason: collision with root package name */
    public final ThemeableLottieAnimationView f55713f;

    /* renamed from: g  reason: collision with root package name */
    public final TextView f55714g;

    private h(ConstraintLayout constraintLayout, ConstraintLayout constraintLayout2, TextView textView, ConstraintLayout constraintLayout3, Pi2NavigationBar pi2NavigationBar, ThemeableLottieAnimationView themeableLottieAnimationView, TextView textView2) {
        this.f55708a = constraintLayout;
        this.f55709b = constraintLayout2;
        this.f55710c = textView;
        this.f55711d = constraintLayout3;
        this.f55712e = pi2NavigationBar;
        this.f55713f = themeableLottieAnimationView;
        this.f55714g = textView2;
    }

    public static h a(View view) {
        int i10 = w0.f54041a;
        ConstraintLayout constraintLayout = (ConstraintLayout) e4.a.a(view, i10);
        if (constraintLayout != null) {
            i10 = w0.f54047e;
            TextView textView = (TextView) e4.a.a(view, i10);
            if (textView != null) {
                i10 = w0.f54054l;
                ConstraintLayout constraintLayout2 = (ConstraintLayout) e4.a.a(view, i10);
                if (constraintLayout2 != null) {
                    i10 = w0.E;
                    Pi2NavigationBar pi2NavigationBar = (Pi2NavigationBar) e4.a.a(view, i10);
                    if (pi2NavigationBar != null) {
                        i10 = w0.H;
                        ThemeableLottieAnimationView themeableLottieAnimationView = (ThemeableLottieAnimationView) e4.a.a(view, i10);
                        if (themeableLottieAnimationView != null) {
                            i10 = w0.Y;
                            TextView textView2 = (TextView) e4.a.a(view, i10);
                            if (textView2 != null) {
                                return new h((ConstraintLayout) view, constraintLayout, textView, constraintLayout2, pi2NavigationBar, themeableLottieAnimationView, textView2);
                            }
                        }
                    }
                }
            }
        }
        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i10)));
    }

    public static h c(LayoutInflater layoutInflater, ViewGroup viewGroup, boolean z10) {
        View inflate = layoutInflater.inflate(x0.f54088h, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public ConstraintLayout getRoot() {
        return this.f55708a;
    }
}
