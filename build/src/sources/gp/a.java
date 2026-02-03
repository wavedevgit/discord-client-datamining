package gp;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.FrameLayout;
import android.widget.ProgressBar;
import android.widget.TextView;
import androidx.camera.view.PreviewView;
import androidx.constraintlayout.widget.Barrier;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.viewbinding.ViewBinding;
import com.withpersona.sdk2.camera.camera2.Camera2PreviewView;
import com.withpersona.sdk2.inquiry.selfie.view.OldSelfieOverlayView;
import com.withpersona.sdk2.inquiry.shared.ui.Pi2NavigationBar;
import fp.w0;
import fp.x0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final ConstraintLayout f27309a;

    /* renamed from: b  reason: collision with root package name */
    public final Button f27310b;

    /* renamed from: c  reason: collision with root package name */
    public final Camera2PreviewView f27311c;

    /* renamed from: d  reason: collision with root package name */
    public final View f27312d;

    /* renamed from: e  reason: collision with root package name */
    public final TextView f27313e;

    /* renamed from: f  reason: collision with root package name */
    public final TextView f27314f;

    /* renamed from: g  reason: collision with root package name */
    public final ProgressBar f27315g;

    /* renamed from: h  reason: collision with root package name */
    public final Pi2NavigationBar f27316h;

    /* renamed from: i  reason: collision with root package name */
    public final Barrier f27317i;

    /* renamed from: j  reason: collision with root package name */
    public final FrameLayout f27318j;

    /* renamed from: k  reason: collision with root package name */
    public final PreviewView f27319k;

    /* renamed from: l  reason: collision with root package name */
    public final OldSelfieOverlayView f27320l;

    /* renamed from: m  reason: collision with root package name */
    public final TextView f27321m;

    private a(ConstraintLayout constraintLayout, Button button, Camera2PreviewView camera2PreviewView, View view, TextView textView, TextView textView2, ProgressBar progressBar, Pi2NavigationBar pi2NavigationBar, Barrier barrier, FrameLayout frameLayout, PreviewView previewView, OldSelfieOverlayView oldSelfieOverlayView, TextView textView3) {
        this.f27309a = constraintLayout;
        this.f27310b = button;
        this.f27311c = camera2PreviewView;
        this.f27312d = view;
        this.f27313e = textView;
        this.f27314f = textView2;
        this.f27315g = progressBar;
        this.f27316h = pi2NavigationBar;
        this.f27317i = barrier;
        this.f27318j = frameLayout;
        this.f27319k = previewView;
        this.f27320l = oldSelfieOverlayView;
        this.f27321m = textView3;
    }

    public static a a(View view) {
        View a10;
        int i10 = w0.f25053g;
        Button button = (Button) e4.a.a(view, i10);
        if (button != null) {
            i10 = w0.f25054h;
            Camera2PreviewView camera2PreviewView = (Camera2PreviewView) e4.a.a(view, i10);
            if (camera2PreviewView != null && (a10 = e4.a.a(view, (i10 = w0.f25055i))) != null) {
                i10 = w0.f25060n;
                TextView textView = (TextView) e4.a.a(view, i10);
                if (textView != null) {
                    i10 = w0.f25066t;
                    TextView textView2 = (TextView) e4.a.a(view, i10);
                    if (textView2 != null) {
                        i10 = w0.A;
                        ProgressBar progressBar = (ProgressBar) e4.a.a(view, i10);
                        if (progressBar != null) {
                            i10 = w0.E;
                            Pi2NavigationBar pi2NavigationBar = (Pi2NavigationBar) e4.a.a(view, i10);
                            if (pi2NavigationBar != null) {
                                i10 = w0.I;
                                Barrier barrier = (Barrier) e4.a.a(view, i10);
                                if (barrier != null) {
                                    i10 = w0.J;
                                    FrameLayout frameLayout = (FrameLayout) e4.a.a(view, i10);
                                    if (frameLayout != null) {
                                        i10 = w0.K;
                                        PreviewView previewView = (PreviewView) e4.a.a(view, i10);
                                        if (previewView != null) {
                                            i10 = w0.T;
                                            OldSelfieOverlayView oldSelfieOverlayView = (OldSelfieOverlayView) e4.a.a(view, i10);
                                            if (oldSelfieOverlayView != null) {
                                                i10 = w0.Y;
                                                TextView textView3 = (TextView) e4.a.a(view, i10);
                                                if (textView3 != null) {
                                                    return new a((ConstraintLayout) view, button, camera2PreviewView, a10, textView, textView2, progressBar, pi2NavigationBar, barrier, frameLayout, previewView, oldSelfieOverlayView, textView3);
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

    public static a c(LayoutInflater layoutInflater) {
        return d(layoutInflater, null, false);
    }

    public static a d(LayoutInflater layoutInflater, ViewGroup viewGroup, boolean z10) {
        View inflate = layoutInflater.inflate(x0.f25085a, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public ConstraintLayout getRoot() {
        return this.f27309a;
    }
}
