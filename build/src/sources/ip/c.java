package ip;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;
import android.widget.ImageView;
import android.widget.ProgressBar;
import android.widget.Space;
import android.widget.TextView;
import androidx.camera.view.PreviewView;
import androidx.constraintlayout.widget.Barrier;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.viewbinding.ViewBinding;
import com.google.android.material.progressindicator.CircularProgressIndicator;
import com.withpersona.sdk2.camera.camera2.Camera2PreviewView;
import com.withpersona.sdk2.inquiry.selfie.view.SelfieOverlayView;
import com.withpersona.sdk2.inquiry.shared.ui.Pi2NavigationBar;
import hp.w0;
import hp.x0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final ConstraintLayout f30984a;

    /* renamed from: b  reason: collision with root package name */
    public final TextView f30985b;

    /* renamed from: c  reason: collision with root package name */
    public final CircularProgressIndicator f30986c;

    /* renamed from: d  reason: collision with root package name */
    public final ImageView f30987d;

    /* renamed from: e  reason: collision with root package name */
    public final Camera2PreviewView f30988e;

    /* renamed from: f  reason: collision with root package name */
    public final View f30989f;

    /* renamed from: g  reason: collision with root package name */
    public final TextView f30990g;

    /* renamed from: h  reason: collision with root package name */
    public final TextView f30991h;

    /* renamed from: i  reason: collision with root package name */
    public final View f30992i;

    /* renamed from: j  reason: collision with root package name */
    public final FrameLayout f30993j;

    /* renamed from: k  reason: collision with root package name */
    public final TextView f30994k;

    /* renamed from: l  reason: collision with root package name */
    public final TextView f30995l;

    /* renamed from: m  reason: collision with root package name */
    public final ProgressBar f30996m;

    /* renamed from: n  reason: collision with root package name */
    public final Pi2NavigationBar f30997n;

    /* renamed from: o  reason: collision with root package name */
    public final ImageView f30998o;

    /* renamed from: p  reason: collision with root package name */
    public final Barrier f30999p;

    /* renamed from: q  reason: collision with root package name */
    public final FrameLayout f31000q;

    /* renamed from: r  reason: collision with root package name */
    public final PreviewView f31001r;

    /* renamed from: s  reason: collision with root package name */
    public final CircularProgressIndicator f31002s;

    /* renamed from: t  reason: collision with root package name */
    public final TextView f31003t;

    /* renamed from: u  reason: collision with root package name */
    public final ConstraintLayout f31004u;

    /* renamed from: v  reason: collision with root package name */
    public final View f31005v;

    /* renamed from: w  reason: collision with root package name */
    public final SelfieOverlayView f31006w;

    /* renamed from: x  reason: collision with root package name */
    public final TextView f31007x;

    /* renamed from: y  reason: collision with root package name */
    public final Space f31008y;

    /* renamed from: z  reason: collision with root package name */
    public final ImageView f31009z;

    private c(ConstraintLayout constraintLayout, TextView textView, CircularProgressIndicator circularProgressIndicator, ImageView imageView, Camera2PreviewView camera2PreviewView, View view, TextView textView2, TextView textView3, View view2, FrameLayout frameLayout, TextView textView4, TextView textView5, ProgressBar progressBar, Pi2NavigationBar pi2NavigationBar, ImageView imageView2, Barrier barrier, FrameLayout frameLayout2, PreviewView previewView, CircularProgressIndicator circularProgressIndicator2, TextView textView6, ConstraintLayout constraintLayout2, View view3, SelfieOverlayView selfieOverlayView, TextView textView7, Space space, ImageView imageView3) {
        this.f30984a = constraintLayout;
        this.f30985b = textView;
        this.f30986c = circularProgressIndicator;
        this.f30987d = imageView;
        this.f30988e = camera2PreviewView;
        this.f30989f = view;
        this.f30990g = textView2;
        this.f30991h = textView3;
        this.f30992i = view2;
        this.f30993j = frameLayout;
        this.f30994k = textView4;
        this.f30995l = textView5;
        this.f30996m = progressBar;
        this.f30997n = pi2NavigationBar;
        this.f30998o = imageView2;
        this.f30999p = barrier;
        this.f31000q = frameLayout2;
        this.f31001r = previewView;
        this.f31002s = circularProgressIndicator2;
        this.f31003t = textView6;
        this.f31004u = constraintLayout2;
        this.f31005v = view3;
        this.f31006w = selfieOverlayView;
        this.f31007x = textView7;
        this.f31008y = space;
        this.f31009z = imageView3;
    }

    public static c a(View view) {
        View a10;
        View a11;
        int i10 = w0.f27642b;
        TextView textView = (TextView) e4.a.a(view, i10);
        if (textView != null) {
            i10 = w0.f27644c;
            CircularProgressIndicator circularProgressIndicator = (CircularProgressIndicator) e4.a.a(view, i10);
            if (circularProgressIndicator != null) {
                i10 = w0.f27648g;
                ImageView imageView = (ImageView) e4.a.a(view, i10);
                if (imageView != null) {
                    i10 = w0.f27649h;
                    Camera2PreviewView camera2PreviewView = (Camera2PreviewView) e4.a.a(view, i10);
                    if (camera2PreviewView != null && (a10 = e4.a.a(view, (i10 = w0.f27650i))) != null) {
                        i10 = w0.f27651j;
                        TextView textView2 = (TextView) e4.a.a(view, i10);
                        if (textView2 != null) {
                            i10 = w0.f27655n;
                            TextView textView3 = (TextView) e4.a.a(view, i10);
                            if (textView3 != null && (a11 = e4.a.a(view, (i10 = w0.f27656o))) != null) {
                                i10 = w0.f27657p;
                                FrameLayout frameLayout = (FrameLayout) e4.a.a(view, i10);
                                if (frameLayout != null) {
                                    i10 = w0.f27662u;
                                    TextView textView4 = (TextView) e4.a.a(view, i10);
                                    if (textView4 != null) {
                                        i10 = w0.f27663v;
                                        TextView textView5 = (TextView) e4.a.a(view, i10);
                                        if (textView5 != null) {
                                            i10 = w0.A;
                                            ProgressBar progressBar = (ProgressBar) e4.a.a(view, i10);
                                            if (progressBar != null) {
                                                i10 = w0.E;
                                                Pi2NavigationBar pi2NavigationBar = (Pi2NavigationBar) e4.a.a(view, i10);
                                                if (pi2NavigationBar != null) {
                                                    i10 = w0.G;
                                                    ImageView imageView2 = (ImageView) e4.a.a(view, i10);
                                                    if (imageView2 != null) {
                                                        i10 = w0.I;
                                                        Barrier barrier = (Barrier) e4.a.a(view, i10);
                                                        if (barrier != null) {
                                                            i10 = w0.J;
                                                            FrameLayout frameLayout2 = (FrameLayout) e4.a.a(view, i10);
                                                            if (frameLayout2 != null) {
                                                                i10 = w0.K;
                                                                PreviewView previewView = (PreviewView) e4.a.a(view, i10);
                                                                if (previewView != null) {
                                                                    i10 = w0.M;
                                                                    CircularProgressIndicator circularProgressIndicator2 = (CircularProgressIndicator) e4.a.a(view, i10);
                                                                    if (circularProgressIndicator2 != null) {
                                                                        i10 = w0.N;
                                                                        TextView textView6 = (TextView) e4.a.a(view, i10);
                                                                        if (textView6 != null) {
                                                                            ConstraintLayout constraintLayout = (ConstraintLayout) view;
                                                                            i10 = w0.R;
                                                                            View a12 = e4.a.a(view, i10);
                                                                            if (a12 != null) {
                                                                                i10 = w0.S;
                                                                                SelfieOverlayView selfieOverlayView = (SelfieOverlayView) e4.a.a(view, i10);
                                                                                if (selfieOverlayView != null) {
                                                                                    i10 = w0.Y;
                                                                                    TextView textView7 = (TextView) e4.a.a(view, i10);
                                                                                    if (textView7 != null) {
                                                                                        i10 = w0.Z;
                                                                                        Space space = (Space) e4.a.a(view, i10);
                                                                                        if (space != null) {
                                                                                            i10 = w0.f27641a0;
                                                                                            ImageView imageView3 = (ImageView) e4.a.a(view, i10);
                                                                                            if (imageView3 != null) {
                                                                                                return new c(constraintLayout, textView, circularProgressIndicator, imageView, camera2PreviewView, a10, textView2, textView3, a11, frameLayout, textView4, textView5, progressBar, pi2NavigationBar, imageView2, barrier, frameLayout2, previewView, circularProgressIndicator2, textView6, constraintLayout, a12, selfieOverlayView, textView7, space, imageView3);
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

    public static c c(LayoutInflater layoutInflater) {
        return d(layoutInflater, null, false);
    }

    public static c d(LayoutInflater layoutInflater, ViewGroup viewGroup, boolean z10) {
        View inflate = layoutInflater.inflate(x0.f27682c, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public ConstraintLayout getRoot() {
        return this.f30984a;
    }
}
