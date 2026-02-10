package op;

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
import np.w0;
import np.x0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final ConstraintLayout f42565a;

    /* renamed from: b  reason: collision with root package name */
    public final TextView f42566b;

    /* renamed from: c  reason: collision with root package name */
    public final CircularProgressIndicator f42567c;

    /* renamed from: d  reason: collision with root package name */
    public final ImageView f42568d;

    /* renamed from: e  reason: collision with root package name */
    public final Camera2PreviewView f42569e;

    /* renamed from: f  reason: collision with root package name */
    public final View f42570f;

    /* renamed from: g  reason: collision with root package name */
    public final TextView f42571g;

    /* renamed from: h  reason: collision with root package name */
    public final TextView f42572h;

    /* renamed from: i  reason: collision with root package name */
    public final View f42573i;

    /* renamed from: j  reason: collision with root package name */
    public final FrameLayout f42574j;

    /* renamed from: k  reason: collision with root package name */
    public final TextView f42575k;

    /* renamed from: l  reason: collision with root package name */
    public final TextView f42576l;

    /* renamed from: m  reason: collision with root package name */
    public final ProgressBar f42577m;

    /* renamed from: n  reason: collision with root package name */
    public final Pi2NavigationBar f42578n;

    /* renamed from: o  reason: collision with root package name */
    public final ImageView f42579o;

    /* renamed from: p  reason: collision with root package name */
    public final Barrier f42580p;

    /* renamed from: q  reason: collision with root package name */
    public final FrameLayout f42581q;

    /* renamed from: r  reason: collision with root package name */
    public final PreviewView f42582r;

    /* renamed from: s  reason: collision with root package name */
    public final CircularProgressIndicator f42583s;

    /* renamed from: t  reason: collision with root package name */
    public final TextView f42584t;

    /* renamed from: u  reason: collision with root package name */
    public final ConstraintLayout f42585u;

    /* renamed from: v  reason: collision with root package name */
    public final View f42586v;

    /* renamed from: w  reason: collision with root package name */
    public final SelfieOverlayView f42587w;

    /* renamed from: x  reason: collision with root package name */
    public final TextView f42588x;

    /* renamed from: y  reason: collision with root package name */
    public final Space f42589y;

    /* renamed from: z  reason: collision with root package name */
    public final ImageView f42590z;

    private c(ConstraintLayout constraintLayout, TextView textView, CircularProgressIndicator circularProgressIndicator, ImageView imageView, Camera2PreviewView camera2PreviewView, View view, TextView textView2, TextView textView3, View view2, FrameLayout frameLayout, TextView textView4, TextView textView5, ProgressBar progressBar, Pi2NavigationBar pi2NavigationBar, ImageView imageView2, Barrier barrier, FrameLayout frameLayout2, PreviewView previewView, CircularProgressIndicator circularProgressIndicator2, TextView textView6, ConstraintLayout constraintLayout2, View view3, SelfieOverlayView selfieOverlayView, TextView textView7, Space space, ImageView imageView3) {
        this.f42565a = constraintLayout;
        this.f42566b = textView;
        this.f42567c = circularProgressIndicator;
        this.f42568d = imageView;
        this.f42569e = camera2PreviewView;
        this.f42570f = view;
        this.f42571g = textView2;
        this.f42572h = textView3;
        this.f42573i = view2;
        this.f42574j = frameLayout;
        this.f42575k = textView4;
        this.f42576l = textView5;
        this.f42577m = progressBar;
        this.f42578n = pi2NavigationBar;
        this.f42579o = imageView2;
        this.f42580p = barrier;
        this.f42581q = frameLayout2;
        this.f42582r = previewView;
        this.f42583s = circularProgressIndicator2;
        this.f42584t = textView6;
        this.f42585u = constraintLayout2;
        this.f42586v = view3;
        this.f42587w = selfieOverlayView;
        this.f42588x = textView7;
        this.f42589y = space;
        this.f42590z = imageView3;
    }

    public static c a(View view) {
        View a10;
        View a11;
        int i10 = w0.f39524b;
        TextView textView = (TextView) e4.a.a(view, i10);
        if (textView != null) {
            i10 = w0.f39526c;
            CircularProgressIndicator circularProgressIndicator = (CircularProgressIndicator) e4.a.a(view, i10);
            if (circularProgressIndicator != null) {
                i10 = w0.f39530g;
                ImageView imageView = (ImageView) e4.a.a(view, i10);
                if (imageView != null) {
                    i10 = w0.f39531h;
                    Camera2PreviewView camera2PreviewView = (Camera2PreviewView) e4.a.a(view, i10);
                    if (camera2PreviewView != null && (a10 = e4.a.a(view, (i10 = w0.f39532i))) != null) {
                        i10 = w0.f39533j;
                        TextView textView2 = (TextView) e4.a.a(view, i10);
                        if (textView2 != null) {
                            i10 = w0.f39537n;
                            TextView textView3 = (TextView) e4.a.a(view, i10);
                            if (textView3 != null && (a11 = e4.a.a(view, (i10 = w0.f39538o))) != null) {
                                i10 = w0.f39539p;
                                FrameLayout frameLayout = (FrameLayout) e4.a.a(view, i10);
                                if (frameLayout != null) {
                                    i10 = w0.f39544u;
                                    TextView textView4 = (TextView) e4.a.a(view, i10);
                                    if (textView4 != null) {
                                        i10 = w0.f39545v;
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
                                                                                            i10 = w0.f39523a0;
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
        View inflate = layoutInflater.inflate(x0.f39564c, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public ConstraintLayout getRoot() {
        return this.f42565a;
    }
}
