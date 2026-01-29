package fp;

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
import ep.w0;
import ep.x0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final ConstraintLayout f25437a;

    /* renamed from: b  reason: collision with root package name */
    public final TextView f25438b;

    /* renamed from: c  reason: collision with root package name */
    public final CircularProgressIndicator f25439c;

    /* renamed from: d  reason: collision with root package name */
    public final ImageView f25440d;

    /* renamed from: e  reason: collision with root package name */
    public final Camera2PreviewView f25441e;

    /* renamed from: f  reason: collision with root package name */
    public final View f25442f;

    /* renamed from: g  reason: collision with root package name */
    public final TextView f25443g;

    /* renamed from: h  reason: collision with root package name */
    public final TextView f25444h;

    /* renamed from: i  reason: collision with root package name */
    public final View f25445i;

    /* renamed from: j  reason: collision with root package name */
    public final FrameLayout f25446j;

    /* renamed from: k  reason: collision with root package name */
    public final TextView f25447k;

    /* renamed from: l  reason: collision with root package name */
    public final TextView f25448l;

    /* renamed from: m  reason: collision with root package name */
    public final ProgressBar f25449m;

    /* renamed from: n  reason: collision with root package name */
    public final Pi2NavigationBar f25450n;

    /* renamed from: o  reason: collision with root package name */
    public final ImageView f25451o;

    /* renamed from: p  reason: collision with root package name */
    public final Barrier f25452p;

    /* renamed from: q  reason: collision with root package name */
    public final FrameLayout f25453q;

    /* renamed from: r  reason: collision with root package name */
    public final PreviewView f25454r;

    /* renamed from: s  reason: collision with root package name */
    public final CircularProgressIndicator f25455s;

    /* renamed from: t  reason: collision with root package name */
    public final TextView f25456t;

    /* renamed from: u  reason: collision with root package name */
    public final ConstraintLayout f25457u;

    /* renamed from: v  reason: collision with root package name */
    public final View f25458v;

    /* renamed from: w  reason: collision with root package name */
    public final SelfieOverlayView f25459w;

    /* renamed from: x  reason: collision with root package name */
    public final TextView f25460x;

    /* renamed from: y  reason: collision with root package name */
    public final Space f25461y;

    /* renamed from: z  reason: collision with root package name */
    public final ImageView f25462z;

    private c(ConstraintLayout constraintLayout, TextView textView, CircularProgressIndicator circularProgressIndicator, ImageView imageView, Camera2PreviewView camera2PreviewView, View view, TextView textView2, TextView textView3, View view2, FrameLayout frameLayout, TextView textView4, TextView textView5, ProgressBar progressBar, Pi2NavigationBar pi2NavigationBar, ImageView imageView2, Barrier barrier, FrameLayout frameLayout2, PreviewView previewView, CircularProgressIndicator circularProgressIndicator2, TextView textView6, ConstraintLayout constraintLayout2, View view3, SelfieOverlayView selfieOverlayView, TextView textView7, Space space, ImageView imageView3) {
        this.f25437a = constraintLayout;
        this.f25438b = textView;
        this.f25439c = circularProgressIndicator;
        this.f25440d = imageView;
        this.f25441e = camera2PreviewView;
        this.f25442f = view;
        this.f25443g = textView2;
        this.f25444h = textView3;
        this.f25445i = view2;
        this.f25446j = frameLayout;
        this.f25447k = textView4;
        this.f25448l = textView5;
        this.f25449m = progressBar;
        this.f25450n = pi2NavigationBar;
        this.f25451o = imageView2;
        this.f25452p = barrier;
        this.f25453q = frameLayout2;
        this.f25454r = previewView;
        this.f25455s = circularProgressIndicator2;
        this.f25456t = textView6;
        this.f25457u = constraintLayout2;
        this.f25458v = view3;
        this.f25459w = selfieOverlayView;
        this.f25460x = textView7;
        this.f25461y = space;
        this.f25462z = imageView3;
    }

    public static c a(View view) {
        View a10;
        View a11;
        int i10 = w0.f23516b;
        TextView textView = (TextView) e4.a.a(view, i10);
        if (textView != null) {
            i10 = w0.f23518c;
            CircularProgressIndicator circularProgressIndicator = (CircularProgressIndicator) e4.a.a(view, i10);
            if (circularProgressIndicator != null) {
                i10 = w0.f23522g;
                ImageView imageView = (ImageView) e4.a.a(view, i10);
                if (imageView != null) {
                    i10 = w0.f23523h;
                    Camera2PreviewView camera2PreviewView = (Camera2PreviewView) e4.a.a(view, i10);
                    if (camera2PreviewView != null && (a10 = e4.a.a(view, (i10 = w0.f23524i))) != null) {
                        i10 = w0.f23525j;
                        TextView textView2 = (TextView) e4.a.a(view, i10);
                        if (textView2 != null) {
                            i10 = w0.f23529n;
                            TextView textView3 = (TextView) e4.a.a(view, i10);
                            if (textView3 != null && (a11 = e4.a.a(view, (i10 = w0.f23530o))) != null) {
                                i10 = w0.f23531p;
                                FrameLayout frameLayout = (FrameLayout) e4.a.a(view, i10);
                                if (frameLayout != null) {
                                    i10 = w0.f23536u;
                                    TextView textView4 = (TextView) e4.a.a(view, i10);
                                    if (textView4 != null) {
                                        i10 = w0.f23537v;
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
                                                                                            i10 = w0.f23515a0;
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
        View inflate = layoutInflater.inflate(x0.f23556c, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public ConstraintLayout getRoot() {
        return this.f25437a;
    }
}
