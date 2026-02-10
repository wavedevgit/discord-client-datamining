package op;

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
import np.w0;
import np.x0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final ScrollView f42592a;

    /* renamed from: b  reason: collision with root package name */
    public final Guideline f42593b;

    /* renamed from: c  reason: collision with root package name */
    public final ConstraintLayout f42594c;

    /* renamed from: d  reason: collision with root package name */
    public final ImageView f42595d;

    /* renamed from: e  reason: collision with root package name */
    public final ThemeableLottieAnimationView f42596e;

    /* renamed from: f  reason: collision with root package name */
    public final Guideline f42597f;

    /* renamed from: g  reason: collision with root package name */
    public final Pi2NavigationBar f42598g;

    /* renamed from: h  reason: collision with root package name */
    public final ConstraintLayout f42599h;

    /* renamed from: i  reason: collision with root package name */
    public final Guideline f42600i;

    /* renamed from: j  reason: collision with root package name */
    public final Button f42601j;

    /* renamed from: k  reason: collision with root package name */
    public final TextView f42602k;

    /* renamed from: l  reason: collision with root package name */
    public final TextView f42603l;

    /* renamed from: m  reason: collision with root package name */
    public final TextView f42604m;

    private e(ScrollView scrollView, Guideline guideline, ConstraintLayout constraintLayout, ImageView imageView, ThemeableLottieAnimationView themeableLottieAnimationView, Guideline guideline2, Pi2NavigationBar pi2NavigationBar, ConstraintLayout constraintLayout2, Guideline guideline3, Button button, TextView textView, TextView textView2, TextView textView3) {
        this.f42592a = scrollView;
        this.f42593b = guideline;
        this.f42594c = constraintLayout;
        this.f42595d = imageView;
        this.f42596e = themeableLottieAnimationView;
        this.f42597f = guideline2;
        this.f42598g = pi2NavigationBar;
        this.f42599h = constraintLayout2;
        this.f42600i = guideline3;
        this.f42601j = button;
        this.f42602k = textView;
        this.f42603l = textView2;
        this.f42604m = textView3;
    }

    public static e a(View view) {
        int i10 = w0.f39529f;
        Guideline guideline = (Guideline) e4.a.a(view, i10);
        if (guideline != null) {
            i10 = w0.f39536m;
            ConstraintLayout constraintLayout = (ConstraintLayout) e4.a.a(view, i10);
            if (constraintLayout != null) {
                i10 = w0.f39549z;
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
        View inflate = layoutInflater.inflate(x0.f39566e, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public ScrollView getRoot() {
        return this.f42592a;
    }
}
