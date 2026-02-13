package xo;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.FrameLayout;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.ProgressBar;
import android.widget.Space;
import android.widget.TextView;
import android.widget.ToggleButton;
import androidx.camera.view.PreviewView;
import androidx.constraintlayout.widget.Barrier;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.viewbinding.ViewBinding;
import com.airbnb.lottie.LottieAnimationView;
import com.withpersona.sdk2.camera.camera2.Camera2PreviewView;
import com.withpersona.sdk2.inquiry.governmentid.view.ScanningView;
import com.withpersona.sdk2.inquiry.governmentid.view.SpotlightView;
import com.withpersona.sdk2.inquiry.shared.ui.Pi2NavigationBar;
import com.withpersona.sdk2.inquiry.shared.ui.ThemeableLottieAnimationView;
import to.m4;
import to.n4;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements ViewBinding {
    public final LottieAnimationView A;
    public final ScanningView B;
    public final SpotlightView C;
    public final TextView D;
    public final Space E;

    /* renamed from: a  reason: collision with root package name */
    private final FrameLayout f55521a;

    /* renamed from: b  reason: collision with root package name */
    public final Space f55522b;

    /* renamed from: c  reason: collision with root package name */
    public final Camera2PreviewView f55523c;

    /* renamed from: d  reason: collision with root package name */
    public final ProgressBar f55524d;

    /* renamed from: e  reason: collision with root package name */
    public final ConstraintLayout f55525e;

    /* renamed from: f  reason: collision with root package name */
    public final Button f55526f;

    /* renamed from: g  reason: collision with root package name */
    public final Space f55527g;

    /* renamed from: h  reason: collision with root package name */
    public final TextView f55528h;

    /* renamed from: i  reason: collision with root package name */
    public final TextView f55529i;

    /* renamed from: j  reason: collision with root package name */
    public final LinearLayout f55530j;

    /* renamed from: k  reason: collision with root package name */
    public final ToggleButton f55531k;

    /* renamed from: l  reason: collision with root package name */
    public final TextView f55532l;

    /* renamed from: m  reason: collision with root package name */
    public final FrameLayout f55533m;

    /* renamed from: n  reason: collision with root package name */
    public final Pi2NavigationBar f55534n;

    /* renamed from: o  reason: collision with root package name */
    public final View f55535o;

    /* renamed from: p  reason: collision with root package name */
    public final ImageView f55536p;

    /* renamed from: q  reason: collision with root package name */
    public final ConstraintLayout f55537q;

    /* renamed from: r  reason: collision with root package name */
    public final ThemeableLottieAnimationView f55538r;

    /* renamed from: s  reason: collision with root package name */
    public final ConstraintLayout f55539s;

    /* renamed from: t  reason: collision with root package name */
    public final TextView f55540t;

    /* renamed from: u  reason: collision with root package name */
    public final Barrier f55541u;

    /* renamed from: v  reason: collision with root package name */
    public final FrameLayout f55542v;

    /* renamed from: w  reason: collision with root package name */
    public final View f55543w;

    /* renamed from: x  reason: collision with root package name */
    public final Barrier f55544x;

    /* renamed from: y  reason: collision with root package name */
    public final PreviewView f55545y;

    /* renamed from: z  reason: collision with root package name */
    public final ProgressBar f55546z;

    private b(FrameLayout frameLayout, Space space, Camera2PreviewView camera2PreviewView, ProgressBar progressBar, ConstraintLayout constraintLayout, Button button, Space space2, TextView textView, TextView textView2, LinearLayout linearLayout, ToggleButton toggleButton, TextView textView3, FrameLayout frameLayout2, Pi2NavigationBar pi2NavigationBar, View view, ImageView imageView, ConstraintLayout constraintLayout2, ThemeableLottieAnimationView themeableLottieAnimationView, ConstraintLayout constraintLayout3, TextView textView4, Barrier barrier, FrameLayout frameLayout3, View view2, Barrier barrier2, PreviewView previewView, ProgressBar progressBar2, LottieAnimationView lottieAnimationView, ScanningView scanningView, SpotlightView spotlightView, TextView textView5, Space space3) {
        this.f55521a = frameLayout;
        this.f55522b = space;
        this.f55523c = camera2PreviewView;
        this.f55524d = progressBar;
        this.f55525e = constraintLayout;
        this.f55526f = button;
        this.f55527g = space2;
        this.f55528h = textView;
        this.f55529i = textView2;
        this.f55530j = linearLayout;
        this.f55531k = toggleButton;
        this.f55532l = textView3;
        this.f55533m = frameLayout2;
        this.f55534n = pi2NavigationBar;
        this.f55535o = view;
        this.f55536p = imageView;
        this.f55537q = constraintLayout2;
        this.f55538r = themeableLottieAnimationView;
        this.f55539s = constraintLayout3;
        this.f55540t = textView4;
        this.f55541u = barrier;
        this.f55542v = frameLayout3;
        this.f55543w = view2;
        this.f55544x = barrier2;
        this.f55545y = previewView;
        this.f55546z = progressBar2;
        this.A = lottieAnimationView;
        this.B = scanningView;
        this.C = spotlightView;
        this.D = textView5;
        this.E = space3;
    }

    public static b a(View view) {
        View a10;
        View a11;
        int i10 = m4.f49949h;
        Space space = (Space) e4.a.a(view, i10);
        if (space != null) {
            i10 = m4.f49951i;
            Camera2PreviewView camera2PreviewView = (Camera2PreviewView) e4.a.a(view, i10);
            if (camera2PreviewView != null) {
                i10 = m4.f49955k;
                ProgressBar progressBar = (ProgressBar) e4.a.a(view, i10);
                if (progressBar != null) {
                    i10 = m4.f49959m;
                    ConstraintLayout constraintLayout = (ConstraintLayout) e4.a.a(view, i10);
                    if (constraintLayout != null) {
                        i10 = m4.f49961n;
                        Button button = (Button) e4.a.a(view, i10);
                        if (button != null) {
                            i10 = m4.f49963o;
                            Space space2 = (Space) e4.a.a(view, i10);
                            if (space2 != null) {
                                i10 = m4.f49965p;
                                TextView textView = (TextView) e4.a.a(view, i10);
                                if (textView != null) {
                                    i10 = m4.f49981x;
                                    TextView textView2 = (TextView) e4.a.a(view, i10);
                                    if (textView2 != null) {
                                        i10 = m4.f49985z;
                                        LinearLayout linearLayout = (LinearLayout) e4.a.a(view, i10);
                                        if (linearLayout != null) {
                                            i10 = m4.E;
                                            ToggleButton toggleButton = (ToggleButton) e4.a.a(view, i10);
                                            if (toggleButton != null) {
                                                i10 = m4.I;
                                                TextView textView3 = (TextView) e4.a.a(view, i10);
                                                if (textView3 != null) {
                                                    i10 = m4.U;
                                                    FrameLayout frameLayout = (FrameLayout) e4.a.a(view, i10);
                                                    if (frameLayout != null) {
                                                        i10 = m4.Y;
                                                        Pi2NavigationBar pi2NavigationBar = (Pi2NavigationBar) e4.a.a(view, i10);
                                                        if (pi2NavigationBar != null && (a10 = e4.a.a(view, (i10 = m4.Z))) != null) {
                                                            i10 = m4.f49936a0;
                                                            ImageView imageView = (ImageView) e4.a.a(view, i10);
                                                            if (imageView != null) {
                                                                i10 = m4.f49938b0;
                                                                ConstraintLayout constraintLayout2 = (ConstraintLayout) e4.a.a(view, i10);
                                                                if (constraintLayout2 != null) {
                                                                    i10 = m4.f49940c0;
                                                                    ThemeableLottieAnimationView themeableLottieAnimationView = (ThemeableLottieAnimationView) e4.a.a(view, i10);
                                                                    if (themeableLottieAnimationView != null) {
                                                                        i10 = m4.f49942d0;
                                                                        ConstraintLayout constraintLayout3 = (ConstraintLayout) e4.a.a(view, i10);
                                                                        if (constraintLayout3 != null) {
                                                                            i10 = m4.f49944e0;
                                                                            TextView textView4 = (TextView) e4.a.a(view, i10);
                                                                            if (textView4 != null) {
                                                                                i10 = m4.f49952i0;
                                                                                Barrier barrier = (Barrier) e4.a.a(view, i10);
                                                                                if (barrier != null) {
                                                                                    i10 = m4.f49954j0;
                                                                                    FrameLayout frameLayout2 = (FrameLayout) e4.a.a(view, i10);
                                                                                    if (frameLayout2 != null && (a11 = e4.a.a(view, (i10 = m4.f49956k0))) != null) {
                                                                                        i10 = m4.f49958l0;
                                                                                        Barrier barrier2 = (Barrier) e4.a.a(view, i10);
                                                                                        if (barrier2 != null) {
                                                                                            i10 = m4.f49960m0;
                                                                                            PreviewView previewView = (PreviewView) e4.a.a(view, i10);
                                                                                            if (previewView != null) {
                                                                                                i10 = m4.f49964o0;
                                                                                                ProgressBar progressBar2 = (ProgressBar) e4.a.a(view, i10);
                                                                                                if (progressBar2 != null) {
                                                                                                    i10 = m4.f49974t0;
                                                                                                    LottieAnimationView lottieAnimationView = (LottieAnimationView) e4.a.a(view, i10);
                                                                                                    if (lottieAnimationView != null) {
                                                                                                        i10 = m4.f49976u0;
                                                                                                        ScanningView scanningView = (ScanningView) e4.a.a(view, i10);
                                                                                                        if (scanningView != null) {
                                                                                                            i10 = m4.f49980w0;
                                                                                                            SpotlightView spotlightView = (SpotlightView) e4.a.a(view, i10);
                                                                                                            if (spotlightView != null) {
                                                                                                                i10 = m4.D0;
                                                                                                                TextView textView5 = (TextView) e4.a.a(view, i10);
                                                                                                                if (textView5 != null) {
                                                                                                                    i10 = m4.E0;
                                                                                                                    Space space3 = (Space) e4.a.a(view, i10);
                                                                                                                    if (space3 != null) {
                                                                                                                        return new b((FrameLayout) view, space, camera2PreviewView, progressBar, constraintLayout, button, space2, textView, textView2, linearLayout, toggleButton, textView3, frameLayout, pi2NavigationBar, a10, imageView, constraintLayout2, themeableLottieAnimationView, constraintLayout3, textView4, barrier, frameLayout2, a11, barrier2, previewView, progressBar2, lottieAnimationView, scanningView, spotlightView, textView5, space3);
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
                    }
                }
            }
        }
        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i10)));
    }

    public static b c(LayoutInflater layoutInflater) {
        return d(layoutInflater, null, false);
    }

    public static b d(LayoutInflater layoutInflater, ViewGroup viewGroup, boolean z10) {
        View inflate = layoutInflater.inflate(n4.f50106b, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public FrameLayout getRoot() {
        return this.f55521a;
    }
}
