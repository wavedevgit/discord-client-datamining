package fp;

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
import ep.w0;
import ep.x0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final ScrollView f25464a;

    /* renamed from: b  reason: collision with root package name */
    public final Guideline f25465b;

    /* renamed from: c  reason: collision with root package name */
    public final ConstraintLayout f25466c;

    /* renamed from: d  reason: collision with root package name */
    public final ImageView f25467d;

    /* renamed from: e  reason: collision with root package name */
    public final ThemeableLottieAnimationView f25468e;

    /* renamed from: f  reason: collision with root package name */
    public final Guideline f25469f;

    /* renamed from: g  reason: collision with root package name */
    public final Pi2NavigationBar f25470g;

    /* renamed from: h  reason: collision with root package name */
    public final ConstraintLayout f25471h;

    /* renamed from: i  reason: collision with root package name */
    public final Guideline f25472i;

    /* renamed from: j  reason: collision with root package name */
    public final Button f25473j;

    /* renamed from: k  reason: collision with root package name */
    public final TextView f25474k;

    /* renamed from: l  reason: collision with root package name */
    public final TextView f25475l;

    /* renamed from: m  reason: collision with root package name */
    public final TextView f25476m;

    private e(ScrollView scrollView, Guideline guideline, ConstraintLayout constraintLayout, ImageView imageView, ThemeableLottieAnimationView themeableLottieAnimationView, Guideline guideline2, Pi2NavigationBar pi2NavigationBar, ConstraintLayout constraintLayout2, Guideline guideline3, Button button, TextView textView, TextView textView2, TextView textView3) {
        this.f25464a = scrollView;
        this.f25465b = guideline;
        this.f25466c = constraintLayout;
        this.f25467d = imageView;
        this.f25468e = themeableLottieAnimationView;
        this.f25469f = guideline2;
        this.f25470g = pi2NavigationBar;
        this.f25471h = constraintLayout2;
        this.f25472i = guideline3;
        this.f25473j = button;
        this.f25474k = textView;
        this.f25475l = textView2;
        this.f25476m = textView3;
    }

    public static e a(View view) {
        int i10 = w0.f23521f;
        Guideline guideline = (Guideline) e4.a.a(view, i10);
        if (guideline != null) {
            i10 = w0.f23528m;
            ConstraintLayout constraintLayout = (ConstraintLayout) e4.a.a(view, i10);
            if (constraintLayout != null) {
                i10 = w0.f23541z;
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
        View inflate = layoutInflater.inflate(x0.f23558e, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public ScrollView getRoot() {
        return this.f25464a;
    }
}
