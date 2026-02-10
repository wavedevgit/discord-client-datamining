package go;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.viewbinding.ViewBinding;
import com.withpersona.sdk2.inquiry.shared.ui.Pi2NavigationBar;
import com.withpersona.sdk2.inquiry.shared.ui.ThemeableLottieAnimationView;
import fo.y2;
import fo.z2;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final ConstraintLayout f24453a;

    /* renamed from: b  reason: collision with root package name */
    public final ConstraintLayout f24454b;

    /* renamed from: c  reason: collision with root package name */
    public final TextView f24455c;

    /* renamed from: d  reason: collision with root package name */
    public final ConstraintLayout f24456d;

    /* renamed from: e  reason: collision with root package name */
    public final Pi2NavigationBar f24457e;

    /* renamed from: f  reason: collision with root package name */
    public final ThemeableLottieAnimationView f24458f;

    /* renamed from: g  reason: collision with root package name */
    public final TextView f24459g;

    private a(ConstraintLayout constraintLayout, ConstraintLayout constraintLayout2, TextView textView, ConstraintLayout constraintLayout3, Pi2NavigationBar pi2NavigationBar, ThemeableLottieAnimationView themeableLottieAnimationView, TextView textView2) {
        this.f24453a = constraintLayout;
        this.f24454b = constraintLayout2;
        this.f24455c = textView;
        this.f24456d = constraintLayout3;
        this.f24457e = pi2NavigationBar;
        this.f24458f = themeableLottieAnimationView;
        this.f24459g = textView2;
    }

    public static a a(View view) {
        int i10 = y2.f23140b;
        ConstraintLayout constraintLayout = (ConstraintLayout) e4.a.a(view, i10);
        if (constraintLayout != null) {
            i10 = y2.f23141c;
            TextView textView = (TextView) e4.a.a(view, i10);
            if (textView != null) {
                i10 = y2.f23144f;
                ConstraintLayout constraintLayout2 = (ConstraintLayout) e4.a.a(view, i10);
                if (constraintLayout2 != null) {
                    i10 = y2.f23151m;
                    Pi2NavigationBar pi2NavigationBar = (Pi2NavigationBar) e4.a.a(view, i10);
                    if (pi2NavigationBar != null) {
                        i10 = y2.f23152n;
                        ThemeableLottieAnimationView themeableLottieAnimationView = (ThemeableLottieAnimationView) e4.a.a(view, i10);
                        if (themeableLottieAnimationView != null) {
                            i10 = y2.f23157s;
                            TextView textView2 = (TextView) e4.a.a(view, i10);
                            if (textView2 != null) {
                                return new a((ConstraintLayout) view, constraintLayout, textView, constraintLayout2, pi2NavigationBar, themeableLottieAnimationView, textView2);
                            }
                        }
                    }
                }
            }
        }
        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i10)));
    }

    public static a c(LayoutInflater layoutInflater, ViewGroup viewGroup, boolean z10) {
        View inflate = layoutInflater.inflate(z2.f23164a, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public ConstraintLayout getRoot() {
        return this.f24453a;
    }
}
