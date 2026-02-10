package oo;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.viewbinding.ViewBinding;
import com.withpersona.sdk2.inquiry.shared.ui.Pi2NavigationBar;
import com.withpersona.sdk2.inquiry.shared.ui.ThemeableLottieAnimationView;
import ko.m4;
import ko.n4;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final ConstraintLayout f42537a;

    /* renamed from: b  reason: collision with root package name */
    public final ConstraintLayout f42538b;

    /* renamed from: c  reason: collision with root package name */
    public final TextView f42539c;

    /* renamed from: d  reason: collision with root package name */
    public final ConstraintLayout f42540d;

    /* renamed from: e  reason: collision with root package name */
    public final Pi2NavigationBar f42541e;

    /* renamed from: f  reason: collision with root package name */
    public final ThemeableLottieAnimationView f42542f;

    /* renamed from: g  reason: collision with root package name */
    public final TextView f42543g;

    private j(ConstraintLayout constraintLayout, ConstraintLayout constraintLayout2, TextView textView, ConstraintLayout constraintLayout3, Pi2NavigationBar pi2NavigationBar, ThemeableLottieAnimationView themeableLottieAnimationView, TextView textView2) {
        this.f42537a = constraintLayout;
        this.f42538b = constraintLayout2;
        this.f42539c = textView;
        this.f42540d = constraintLayout3;
        this.f42541e = pi2NavigationBar;
        this.f42542f = themeableLottieAnimationView;
        this.f42543g = textView2;
    }

    public static j a(View view) {
        int i10 = m4.f31376b;
        ConstraintLayout constraintLayout = (ConstraintLayout) e4.a.a(view, i10);
        if (constraintLayout != null) {
            i10 = m4.f31380d;
            TextView textView = (TextView) e4.a.a(view, i10);
            if (textView != null) {
                i10 = m4.f31410s;
                ConstraintLayout constraintLayout2 = (ConstraintLayout) e4.a.a(view, i10);
                if (constraintLayout2 != null) {
                    i10 = m4.Y;
                    Pi2NavigationBar pi2NavigationBar = (Pi2NavigationBar) e4.a.a(view, i10);
                    if (pi2NavigationBar != null) {
                        i10 = m4.f31385f0;
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
        View inflate = layoutInflater.inflate(n4.f31554k, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public ConstraintLayout getRoot() {
        return this.f42537a;
    }
}
