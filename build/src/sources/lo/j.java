package lo;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.viewbinding.ViewBinding;
import com.withpersona.sdk2.inquiry.shared.ui.Pi2NavigationBar;
import com.withpersona.sdk2.inquiry.shared.ui.ThemeableLottieAnimationView;
import ho.m4;
import ho.n4;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final ConstraintLayout f37106a;

    /* renamed from: b  reason: collision with root package name */
    public final ConstraintLayout f37107b;

    /* renamed from: c  reason: collision with root package name */
    public final TextView f37108c;

    /* renamed from: d  reason: collision with root package name */
    public final ConstraintLayout f37109d;

    /* renamed from: e  reason: collision with root package name */
    public final Pi2NavigationBar f37110e;

    /* renamed from: f  reason: collision with root package name */
    public final ThemeableLottieAnimationView f37111f;

    /* renamed from: g  reason: collision with root package name */
    public final TextView f37112g;

    private j(ConstraintLayout constraintLayout, ConstraintLayout constraintLayout2, TextView textView, ConstraintLayout constraintLayout3, Pi2NavigationBar pi2NavigationBar, ThemeableLottieAnimationView themeableLottieAnimationView, TextView textView2) {
        this.f37106a = constraintLayout;
        this.f37107b = constraintLayout2;
        this.f37108c = textView;
        this.f37109d = constraintLayout3;
        this.f37110e = pi2NavigationBar;
        this.f37111f = themeableLottieAnimationView;
        this.f37112g = textView2;
    }

    public static j a(View view) {
        int i10 = m4.f26381b;
        ConstraintLayout constraintLayout = (ConstraintLayout) e4.a.a(view, i10);
        if (constraintLayout != null) {
            i10 = m4.f26385d;
            TextView textView = (TextView) e4.a.a(view, i10);
            if (textView != null) {
                i10 = m4.f26415s;
                ConstraintLayout constraintLayout2 = (ConstraintLayout) e4.a.a(view, i10);
                if (constraintLayout2 != null) {
                    i10 = m4.Y;
                    Pi2NavigationBar pi2NavigationBar = (Pi2NavigationBar) e4.a.a(view, i10);
                    if (pi2NavigationBar != null) {
                        i10 = m4.f26390f0;
                        ThemeableLottieAnimationView themeableLottieAnimationView = (ThemeableLottieAnimationView) e4.a.a(view, i10);
                        if (themeableLottieAnimationView != null) {
                            i10 = m4.D0;
                            TextView textView2 = (TextView) e4.a.a(view, i10);
                            if (textView2 != null) {
                                return new j((ConstraintLayout) view, constraintLayout, textView, constraintLayout2, pi2NavigationBar, themeableLottieAnimationView, textView2);
                            }
                        }
                    }
                }
            }
        }
        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i10)));
    }

    public static j c(LayoutInflater layoutInflater, ViewGroup viewGroup, boolean z10) {
        View inflate = layoutInflater.inflate(n4.f26559k, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public ConstraintLayout getRoot() {
        return this.f37106a;
    }
}
