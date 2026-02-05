package lo;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.LinearLayout;
import android.widget.TextView;
import androidx.coordinatorlayout.widget.CoordinatorLayout;
import androidx.viewbinding.ViewBinding;
import com.withpersona.sdk2.inquiry.shared.ui.Pi2NavigationBar;
import com.withpersona.sdk2.inquiry.shared.ui.ThemeableLottieAnimationView;
import ho.m4;
import ho.n4;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final CoordinatorLayout f36992a;

    /* renamed from: b  reason: collision with root package name */
    public final LinearLayout f36993b;

    /* renamed from: c  reason: collision with root package name */
    public final Button f36994c;

    /* renamed from: d  reason: collision with root package name */
    public final ThemeableLottieAnimationView f36995d;

    /* renamed from: e  reason: collision with root package name */
    public final Pi2NavigationBar f36996e;

    /* renamed from: f  reason: collision with root package name */
    public final TextView f36997f;

    private a(CoordinatorLayout coordinatorLayout, LinearLayout linearLayout, Button button, ThemeableLottieAnimationView themeableLottieAnimationView, Pi2NavigationBar pi2NavigationBar, TextView textView) {
        this.f36992a = coordinatorLayout;
        this.f36993b = linearLayout;
        this.f36994c = button;
        this.f36995d = themeableLottieAnimationView;
        this.f36996e = pi2NavigationBar;
        this.f36997f = textView;
    }

    public static a a(View view) {
        int i10 = m4.f26417t;
        LinearLayout linearLayout = (LinearLayout) e4.a.a(view, i10);
        if (linearLayout != null) {
            i10 = m4.f26419u;
            Button button = (Button) e4.a.a(view, i10);
            if (button != null) {
                i10 = m4.P;
                ThemeableLottieAnimationView themeableLottieAnimationView = (ThemeableLottieAnimationView) e4.a.a(view, i10);
                if (themeableLottieAnimationView != null) {
                    i10 = m4.Y;
                    Pi2NavigationBar pi2NavigationBar = (Pi2NavigationBar) e4.a.a(view, i10);
                    if (pi2NavigationBar != null) {
                        i10 = m4.D0;
                        TextView textView = (TextView) e4.a.a(view, i10);
                        if (textView != null) {
                            return new a((CoordinatorLayout) view, linearLayout, button, themeableLottieAnimationView, pi2NavigationBar, textView);
                        }
                    }
                }
            }
        }
        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i10)));
    }

    public static a c(LayoutInflater layoutInflater, ViewGroup viewGroup, boolean z10) {
        View inflate = layoutInflater.inflate(n4.f26549a, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public CoordinatorLayout getRoot() {
        return this.f36992a;
    }
}
