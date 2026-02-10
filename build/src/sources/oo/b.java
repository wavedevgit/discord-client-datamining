package oo;

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
import ko.m4;
import ko.n4;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements ViewBinding {
    public final LottieAnimationView A;
    public final ScanningView B;
    public final SpotlightView C;
    public final TextView D;
    public final Space E;

    /* renamed from: a  reason: collision with root package name */
    private final FrameLayout f42429a;

    /* renamed from: b  reason: collision with root package name */
    public final Space f42430b;

    /* renamed from: c  reason: collision with root package name */
    public final Camera2PreviewView f42431c;

    /* renamed from: d  reason: collision with root package name */
    public final ProgressBar f42432d;

    /* renamed from: e  reason: collision with root package name */
    public final ConstraintLayout f42433e;

    /* renamed from: f  reason: collision with root package name */
    public final Button f42434f;

    /* renamed from: g  reason: collision with root package name */
    public final Space f42435g;

    /* renamed from: h  reason: collision with root package name */
    public final TextView f42436h;

    /* renamed from: i  reason: collision with root package name */
    public final TextView f42437i;

    /* renamed from: j  reason: collision with root package name */
    public final LinearLayout f42438j;

    /* renamed from: k  reason: collision with root package name */
    public final ToggleButton f42439k;

    /* renamed from: l  reason: collision with root package name */
    public final TextView f42440l;

    /* renamed from: m  reason: collision with root package name */
    public final FrameLayout f42441m;

    /* renamed from: n  reason: collision with root package name */
    public final Pi2NavigationBar f42442n;

    /* renamed from: o  reason: collision with root package name */
    public final View f42443o;

    /* renamed from: p  reason: collision with root package name */
    public final ImageView f42444p;

    /* renamed from: q  reason: collision with root package name */
    public final ConstraintLayout f42445q;

    /* renamed from: r  reason: collision with root package name */
    public final ThemeableLottieAnimationView f42446r;

    /* renamed from: s  reason: collision with root package name */
    public final ConstraintLayout f42447s;

    /* renamed from: t  reason: collision with root package name */
    public final TextView f42448t;

    /* renamed from: u  reason: collision with root package name */
    public final Barrier f42449u;

    /* renamed from: v  reason: collision with root package name */
    public final FrameLayout f42450v;

    /* renamed from: w  reason: collision with root package name */
    public final View f42451w;

    /* renamed from: x  reason: collision with root package name */
    public final Barrier f42452x;

    /* renamed from: y  reason: collision with root package name */
    public final PreviewView f42453y;

    /* renamed from: z  reason: collision with root package name */
    public final ProgressBar f42454z;

    private b(FrameLayout frameLayout, Space space, Camera2PreviewView camera2PreviewView, ProgressBar progressBar, ConstraintLayout constraintLayout, Button button, Space space2, TextView textView, TextView textView2, LinearLayout linearLayout, ToggleButton toggleButton, TextView textView3, FrameLayout frameLayout2, Pi2NavigationBar pi2NavigationBar, View view, ImageView imageView, ConstraintLayout constraintLayout2, ThemeableLottieAnimationView themeableLottieAnimationView, ConstraintLayout constraintLayout3, TextView textView4, Barrier barrier, FrameLayout frameLayout3, View view2, Barrier barrier2, PreviewView previewView, ProgressBar progressBar2, LottieAnimationView lottieAnimationView, ScanningView scanningView, SpotlightView spotlightView, TextView textView5, Space space3) {
        this.f42429a = frameLayout;
        this.f42430b = space;
        this.f42431c = camera2PreviewView;
        this.f42432d = progressBar;
        this.f42433e = constraintLayout;
        this.f42434f = button;
        this.f42435g = space2;
        this.f42436h = textView;
        this.f42437i = textView2;
        this.f42438j = linearLayout;
        this.f42439k = toggleButton;
        this.f42440l = textView3;
        this.f42441m = frameLayout2;
        this.f42442n = pi2NavigationBar;
        this.f42443o = view;
        this.f42444p = imageView;
        this.f42445q = constraintLayout2;
        this.f42446r = themeableLottieAnimationView;
        this.f42447s = constraintLayout3;
        this.f42448t = textView4;
        this.f42449u = barrier;
        this.f42450v = frameLayout3;
        this.f42451w = view2;
        this.f42452x = barrier2;
        this.f42453y = previewView;
        this.f42454z = progressBar2;
        this.A = lottieAnimationView;
        this.B = scanningView;
        this.C = spotlightView;
        this.D = textView5;
        this.E = space3;
    }

    public static b a(View view) {
        View a10;
        View a11;
        int i10 = m4.f31388h;
        Space space = (Space) e4.a.a(view, i10);
        if (space != null) {
            i10 = m4.f31390i;
            Camera2PreviewView camera2PreviewView = (Camera2PreviewView) e4.a.a(view, i10);
            if (camera2PreviewView != null) {
                i10 = m4.f31394k;
                ProgressBar progressBar = (ProgressBar) e4.a.a(view, i10);
                if (progressBar != null) {
                    i10 = m4.f31398m;
                    ConstraintLayout constraintLayout = (ConstraintLayout) e4.a.a(view, i10);
                    if (constraintLayout != null) {
                        i10 = m4.f31400n;
                        Button button = (Button) e4.a.a(view, i10);
                        if (button != null) {
                            i10 = m4.f31402o;
                            Space space2 = (Space) e4.a.a(view, i10);
                            if (space2 != null) {
                                i10 = m4.f31404p;
                                TextView textView = (TextView) e4.a.a(view, i10);
                                if (textView != null) {
                                    i10 = m4.f31420x;
                                    TextView textView2 = (TextView) e4.a.a(view, i10);
                                    if (textView2 != null) {
                                        i10 = m4.f31424z;
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
                                                            i10 = m4.f31375a0;
                                                            ImageView imageView = (ImageView) e4.a.a(view, i10);
                                                            if (imageView != null) {
                                                                i10 = m4.f31377b0;
                                                                ConstraintLayout constraintLayout2 = (ConstraintLayout) e4.a.a(view, i10);
                                                                if (constraintLayout2 != null) {
                                                                    i10 = m4.f31379c0;
                                                                    ThemeableLottieAnimationView themeableLottieAnimationView = (ThemeableLottieAnimationView) e4.a.a(view, i10);
                                                                    if (themeableLottieAnimationView != null) {
                                                                        i10 = m4.f31381d0;
                                                                        ConstraintLayout constraintLayout3 = (ConstraintLayout) e4.a.a(view, i10);
                                                                        if (constraintLayout3 != null) {
                                                                            i10 = m4.f31383e0;
                                                                            TextView textView4 = (TextView) e4.a.a(view, i10);
                                                                            if (textView4 != null) {
                                                                                i10 = m4.f31391i0;
                                                                                Barrier barrier = (Barrier) e4.a.a(view, i10);
                                                                                if (barrier != null) {
                                                                                    i10 = m4.f31393j0;
                                                                                    FrameLayout frameLayout2 = (FrameLayout) e4.a.a(view, i10);
                                                                                    if (frameLayout2 != null && (a11 = e4.a.a(view, (i10 = m4.f31395k0))) != null) {
                                                                                        i10 = m4.f31397l0;
                                                                                        Barrier barrier2 = (Barrier) e4.a.a(view, i10);
                                                                                        if (barrier2 != null) {
                                                                                            i10 = m4.f31399m0;
                                                                                            PreviewView previewView = (PreviewView) e4.a.a(view, i10);
                                                                                            if (previewView != null) {
                                                                                                i10 = m4.f31403o0;
                                                                                                ProgressBar progressBar2 = (ProgressBar) e4.a.a(view, i10);
                                                                                                if (progressBar2 != null) {
                                                                                                    i10 = m4.f31413t0;
                                                                                                    LottieAnimationView lottieAnimationView = (LottieAnimationView) e4.a.a(view, i10);
                                                                                                    if (lottieAnimationView != null) {
                                                                                                        i10 = m4.f31415u0;
                                                                                                        ScanningView scanningView = (ScanningView) e4.a.a(view, i10);
                                                                                                        if (scanningView != null) {
                                                                                                            i10 = m4.f31419w0;
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
        View inflate = layoutInflater.inflate(n4.f31545b, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public FrameLayout getRoot() {
        return this.f42429a;
    }
}
