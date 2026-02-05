package lp;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.ScrollView;
import android.widget.TextView;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.constraintlayout.widget.Guideline;
import androidx.viewbinding.ViewBinding;
import com.withpersona.sdk2.inquiry.shared.ui.Pi2NavigationBar;
import com.withpersona.sdk2.inquiry.shared.ui.ThemeableLottieAnimationView;
import kp.w0;
import kp.x0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final ScrollView f37161a;

    /* renamed from: b  reason: collision with root package name */
    public final Guideline f37162b;

    /* renamed from: c  reason: collision with root package name */
    public final ConstraintLayout f37163c;

    /* renamed from: d  reason: collision with root package name */
    public final ImageView f37164d;

    /* renamed from: e  reason: collision with root package name */
    public final ThemeableLottieAnimationView f37165e;

    /* renamed from: f  reason: collision with root package name */
    public final Guideline f37166f;

    /* renamed from: g  reason: collision with root package name */
    public final Pi2NavigationBar f37167g;

    /* renamed from: h  reason: collision with root package name */
    public final ConstraintLayout f37168h;

    /* renamed from: i  reason: collision with root package name */
    public final Guideline f37169i;

    /* renamed from: j  reason: collision with root package name */
    public final Button f37170j;

    /* renamed from: k  reason: collision with root package name */
    public final TextView f37171k;

    /* renamed from: l  reason: collision with root package name */
    public final TextView f37172l;

    /* renamed from: m  reason: collision with root package name */
    public final TextView f37173m;

    private e(ScrollView scrollView, Guideline guideline, ConstraintLayout constraintLayout, ImageView imageView, ThemeableLottieAnimationView themeableLottieAnimationView, Guideline guideline2, Pi2NavigationBar pi2NavigationBar, ConstraintLayout constraintLayout2, Guideline guideline3, Button button, TextView textView, TextView textView2, TextView textView3) {
        this.f37161a = scrollView;
        this.f37162b = guideline;
        this.f37163c = constraintLayout;
        this.f37164d = imageView;
        this.f37165e = themeableLottieAnimationView;
        this.f37166f = guideline2;
        this.f37167g = pi2NavigationBar;
        this.f37168h = constraintLayout2;
        this.f37169i = guideline3;
        this.f37170j = button;
        this.f37171k = textView;
        this.f37172l = textView2;
        this.f37173m = textView3;
    }

    public static e a(View view) {
        int i10 = w0.f35640f;
        Guideline guideline = (Guideline) e4.a.a(view, i10);
        if (guideline != null) {
            i10 = w0.f35647m;
            ConstraintLayout constraintLayout = (ConstraintLayout) e4.a.a(view, i10);
            if (constraintLayout != null) {
                i10 = w0.f35660z;
                ImageView imageView = (ImageView) e4.a.a(view, i10);
                if (imageView != null) {
                    i10 = w0.B;
                    ThemeableLottieAnimationView themeableLottieAnimationView = (ThemeableLottieAnimationView) e4.a.a(view, i10);
                    if (themeableLottieAnimationView != null) {
                        i10 = w0.D;
                        Guideline guideline2 = (Guideline) e4.a.a(view, i10);
                        if (guideline2 != null) {
                            i10 = w0.E;
                            Pi2NavigationBar pi2NavigationBar = (Pi2NavigationBar) e4.a.a(view, i10);
                            if (pi2NavigationBar != null) {
                                i10 = w0.F;
                                ConstraintLayout constraintLayout2 = (ConstraintLayout) e4.a.a(view, i10);
                                if (constraintLayout2 != null) {
                                    i10 = w0.Q;
                                    Guideline guideline3 = (Guideline) e4.a.a(view, i10);
                                    if (guideline3 != null) {
                                        i10 = w0.U;
                                        Button button = (Button) e4.a.a(view, i10);
                                        if (button != null) {
                                            i10 = w0.V;
                                            TextView textView = (TextView) e4.a.a(view, i10);
                                            if (textView != null) {
                                                i10 = w0.W;
                                                TextView textView2 = (TextView) e4.a.a(view, i10);
                                                if (textView2 != null) {
                                                    i10 = w0.X;
                                                    TextView textView3 = (TextView) e4.a.a(view, i10);
                                                    if (textView3 != null) {
                                                        return new e((ScrollView) view, guideline, constraintLayout, imageView, themeableLottieAnimationView, guideline2, pi2NavigationBar, constraintLayout2, guideline3, button, textView, textView2, textView3);
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i10)));
    }

    public static e c(LayoutInflater layoutInflater, ViewGroup viewGroup, boolean z10) {
        View inflate = layoutInflater.inflate(x0.f35677e, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public ScrollView getRoot() {
        return this.f37161a;
    }
}
