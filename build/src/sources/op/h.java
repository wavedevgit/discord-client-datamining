package op;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.viewbinding.ViewBinding;
import com.withpersona.sdk2.inquiry.shared.ui.Pi2NavigationBar;
import com.withpersona.sdk2.inquiry.shared.ui.ThemeableLottieAnimationView;
import np.w0;
import np.x0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final ConstraintLayout f42616a;

    /* renamed from: b  reason: collision with root package name */
    public final ConstraintLayout f42617b;

    /* renamed from: c  reason: collision with root package name */
    public final TextView f42618c;

    /* renamed from: d  reason: collision with root package name */
    public final ConstraintLayout f42619d;

    /* renamed from: e  reason: collision with root package name */
    public final Pi2NavigationBar f42620e;

    /* renamed from: f  reason: collision with root package name */
    public final ThemeableLottieAnimationView f42621f;

    /* renamed from: g  reason: collision with root package name */
    public final TextView f42622g;

    private h(ConstraintLayout constraintLayout, ConstraintLayout constraintLayout2, TextView textView, ConstraintLayout constraintLayout3, Pi2NavigationBar pi2NavigationBar, ThemeableLottieAnimationView themeableLottieAnimationView, TextView textView2) {
        this.f42616a = constraintLayout;
        this.f42617b = constraintLayout2;
        this.f42618c = textView;
        this.f42619d = constraintLayout3;
        this.f42620e = pi2NavigationBar;
        this.f42621f = themeableLottieAnimationView;
        this.f42622g = textView2;
    }

    public static h a(View view) {
        int i10 = w0.f39522a;
        ConstraintLayout constraintLayout = (ConstraintLayout) e4.a.a(view, i10);
        if (constraintLayout != null) {
            i10 = w0.f39528e;
            TextView textView = (TextView) e4.a.a(view, i10);
            if (textView != null) {
                i10 = w0.f39535l;
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
        View inflate = layoutInflater.inflate(x0.f39569h, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public ConstraintLayout getRoot() {
        return this.f42616a;
    }
}
