package lo;

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
import ho.m4;
import ho.n4;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements ViewBinding {
    public final LottieAnimationView A;
    public final ScanningView B;
    public final SpotlightView C;
    public final TextView D;
    public final Space E;

    /* renamed from: a  reason: collision with root package name */
    private final FrameLayout f36998a;

    /* renamed from: b  reason: collision with root package name */
    public final Space f36999b;

    /* renamed from: c  reason: collision with root package name */
    public final Camera2PreviewView f37000c;

    /* renamed from: d  reason: collision with root package name */
    public final ProgressBar f37001d;

    /* renamed from: e  reason: collision with root package name */
    public final ConstraintLayout f37002e;

    /* renamed from: f  reason: collision with root package name */
    public final Button f37003f;

    /* renamed from: g  reason: collision with root package name */
    public final Space f37004g;

    /* renamed from: h  reason: collision with root package name */
    public final TextView f37005h;

    /* renamed from: i  reason: collision with root package name */
    public final TextView f37006i;

    /* renamed from: j  reason: collision with root package name */
    public final LinearLayout f37007j;

    /* renamed from: k  reason: collision with root package name */
    public final ToggleButton f37008k;

    /* renamed from: l  reason: collision with root package name */
    public final TextView f37009l;

    /* renamed from: m  reason: collision with root package name */
    public final FrameLayout f37010m;

    /* renamed from: n  reason: collision with root package name */
    public final Pi2NavigationBar f37011n;

    /* renamed from: o  reason: collision with root package name */
    public final View f37012o;

    /* renamed from: p  reason: collision with root package name */
    public final ImageView f37013p;

    /* renamed from: q  reason: collision with root package name */
    public final ConstraintLayout f37014q;

    /* renamed from: r  reason: collision with root package name */
    public final ThemeableLottieAnimationView f37015r;

    /* renamed from: s  reason: collision with root package name */
    public final ConstraintLayout f37016s;

    /* renamed from: t  reason: collision with root package name */
    public final TextView f37017t;

    /* renamed from: u  reason: collision with root package name */
    public final Barrier f37018u;

    /* renamed from: v  reason: collision with root package name */
    public final FrameLayout f37019v;

    /* renamed from: w  reason: collision with root package name */
    public final View f37020w;

    /* renamed from: x  reason: collision with root package name */
    public final Barrier f37021x;

    /* renamed from: y  reason: collision with root package name */
    public final PreviewView f37022y;

    /* renamed from: z  reason: collision with root package name */
    public final ProgressBar f37023z;

    private b(FrameLayout frameLayout, Space space, Camera2PreviewView camera2PreviewView, ProgressBar progressBar, ConstraintLayout constraintLayout, Button button, Space space2, TextView textView, TextView textView2, LinearLayout linearLayout, ToggleButton toggleButton, TextView textView3, FrameLayout frameLayout2, Pi2NavigationBar pi2NavigationBar, View view, ImageView imageView, ConstraintLayout constraintLayout2, ThemeableLottieAnimationView themeableLottieAnimationView, ConstraintLayout constraintLayout3, TextView textView4, Barrier barrier, FrameLayout frameLayout3, View view2, Barrier barrier2, PreviewView previewView, ProgressBar progressBar2, LottieAnimationView lottieAnimationView, ScanningView scanningView, SpotlightView spotlightView, TextView textView5, Space space3) {
        this.f36998a = frameLayout;
        this.f36999b = space;
        this.f37000c = camera2PreviewView;
        this.f37001d = progressBar;
        this.f37002e = constraintLayout;
        this.f37003f = button;
        this.f37004g = space2;
        this.f37005h = textView;
        this.f37006i = textView2;
        this.f37007j = linearLayout;
        this.f37008k = toggleButton;
        this.f37009l = textView3;
        this.f37010m = frameLayout2;
        this.f37011n = pi2NavigationBar;
        this.f37012o = view;
        this.f37013p = imageView;
        this.f37014q = constraintLayout2;
        this.f37015r = themeableLottieAnimationView;
        this.f37016s = constraintLayout3;
        this.f37017t = textView4;
        this.f37018u = barrier;
        this.f37019v = frameLayout3;
        this.f37020w = view2;
        this.f37021x = barrier2;
        this.f37022y = previewView;
        this.f37023z = progressBar2;
        this.A = lottieAnimationView;
        this.B = scanningView;
        this.C = spotlightView;
        this.D = textView5;
        this.E = space3;
    }

    public static b a(View view) {
        View a10;
        View a11;
        int i10 = m4.f26393h;
        Space space = (Space) e4.a.a(view, i10);
        if (space != null) {
            i10 = m4.f26395i;
            Camera2PreviewView camera2PreviewView = (Camera2PreviewView) e4.a.a(view, i10);
            if (camera2PreviewView != null) {
                i10 = m4.f26399k;
                ProgressBar progressBar = (ProgressBar) e4.a.a(view, i10);
                if (progressBar != null) {
                    i10 = m4.f26403m;
                    ConstraintLayout constraintLayout = (ConstraintLayout) e4.a.a(view, i10);
                    if (constraintLayout != null) {
                        i10 = m4.f26405n;
                        Button button = (Button) e4.a.a(view, i10);
                        if (button != null) {
                            i10 = m4.f26407o;
                            Space space2 = (Space) e4.a.a(view, i10);
                            if (space2 != null) {
                                i10 = m4.f26409p;
                                TextView textView = (TextView) e4.a.a(view, i10);
                                if (textView != null) {
                                    i10 = m4.f26425x;
                                    TextView textView2 = (TextView) e4.a.a(view, i10);
                                    if (textView2 != null) {
                                        i10 = m4.f26429z;
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
                                                            i10 = m4.f26380a0;
                                                            ImageView imageView = (ImageView) e4.a.a(view, i10);
                                                            if (imageView != null) {
                                                                i10 = m4.f26382b0;
                                                                ConstraintLayout constraintLayout2 = (ConstraintLayout) e4.a.a(view, i10);
                                                                if (constraintLayout2 != null) {
                                                                    i10 = m4.f26384c0;
                                                                    ThemeableLottieAnimationView themeableLottieAnimationView = (ThemeableLottieAnimationView) e4.a.a(view, i10);
                                                                    if (themeableLottieAnimationView != null) {
                                                                        i10 = m4.f26386d0;
                                                                        ConstraintLayout constraintLayout3 = (ConstraintLayout) e4.a.a(view, i10);
                                                                        if (constraintLayout3 != null) {
                                                                            i10 = m4.f26388e0;
                                                                            TextView textView4 = (TextView) e4.a.a(view, i10);
                                                                            if (textView4 != null) {
                                                                                i10 = m4.f26396i0;
                                                                                Barrier barrier = (Barrier) e4.a.a(view, i10);
                                                                                if (barrier != null) {
                                                                                    i10 = m4.f26398j0;
                                                                                    FrameLayout frameLayout2 = (FrameLayout) e4.a.a(view, i10);
                                                                                    if (frameLayout2 != null && (a11 = e4.a.a(view, (i10 = m4.f26400k0))) != null) {
                                                                                        i10 = m4.f26402l0;
                                                                                        Barrier barrier2 = (Barrier) e4.a.a(view, i10);
                                                                                        if (barrier2 != null) {
                                                                                            i10 = m4.f26404m0;
                                                                                            PreviewView previewView = (PreviewView) e4.a.a(view, i10);
                                                                                            if (previewView != null) {
                                                                                                i10 = m4.f26408o0;
                                                                                                ProgressBar progressBar2 = (ProgressBar) e4.a.a(view, i10);
                                                                                                if (progressBar2 != null) {
                                                                                                    i10 = m4.f26418t0;
                                                                                                    LottieAnimationView lottieAnimationView = (LottieAnimationView) e4.a.a(view, i10);
                                                                                                    if (lottieAnimationView != null) {
                                                                                                        i10 = m4.f26420u0;
                                                                                                        ScanningView scanningView = (ScanningView) e4.a.a(view, i10);
                                                                                                        if (scanningView != null) {
                                                                                                            i10 = m4.f26424w0;
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
        View inflate = layoutInflater.inflate(n4.f26550b, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public FrameLayout getRoot() {
        return this.f36998a;
    }
}
