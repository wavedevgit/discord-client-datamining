package wn;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.viewbinding.ViewBinding;
import com.withpersona.sdk2.inquiry.shared.ui.Pi2NavigationBar;
import com.withpersona.sdk2.inquiry.shared.ui.ThemeableLottieAnimationView;
import vn.y2;
import vn.z2;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final ConstraintLayout f52717a;

    /* renamed from: b  reason: collision with root package name */
    public final ConstraintLayout f52718b;

    /* renamed from: c  reason: collision with root package name */
    public final TextView f52719c;

    /* renamed from: d  reason: collision with root package name */
    public final ConstraintLayout f52720d;

    /* renamed from: e  reason: collision with root package name */
    public final Pi2NavigationBar f52721e;

    /* renamed from: f  reason: collision with root package name */
    public final ThemeableLottieAnimationView f52722f;

    /* renamed from: g  reason: collision with root package name */
    public final TextView f52723g;

    private a(ConstraintLayout constraintLayout, ConstraintLayout constraintLayout2, TextView textView, ConstraintLayout constraintLayout3, Pi2NavigationBar pi2NavigationBar, ThemeableLottieAnimationView themeableLottieAnimationView, TextView textView2) {
        this.f52717a = constraintLayout;
        this.f52718b = constraintLayout2;
        this.f52719c = textView;
        this.f52720d = constraintLayout3;
        this.f52721e = pi2NavigationBar;
        this.f52722f = themeableLottieAnimationView;
        this.f52723g = textView2;
    }

    public static a a(View view) {
        int i10 = y2.f51731b;
        ConstraintLayout constraintLayout = (ConstraintLayout) e4.a.a(view, i10);
        if (constraintLayout != null) {
            i10 = y2.f51732c;
            TextView textView = (TextView) e4.a.a(view, i10);
            if (textView != null) {
                i10 = y2.f51735f;
                ConstraintLayout constraintLayout2 = (ConstraintLayout) e4.a.a(view, i10);
                if (constraintLayout2 != null) {
                    i10 = y2.f51742m;
                    Pi2NavigationBar pi2NavigationBar = (Pi2NavigationBar) e4.a.a(view, i10);
                    if (pi2NavigationBar != null) {
                        i10 = y2.f51743n;
                        ThemeableLottieAnimationView themeableLottieAnimationView = (ThemeableLottieAnimationView) e4.a.a(view, i10);
                        if (themeableLottieAnimationView != null) {
                            i10 = y2.f51748s;
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
        View inflate = layoutInflater.inflate(z2.f51755a, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public ConstraintLayout getRoot() {
        return this.f52717a;
    }
}
