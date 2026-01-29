package fp;

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
import ep.w0;
import ep.x0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final ConstraintLayout f25416a;

    /* renamed from: b  reason: collision with root package name */
    public final Button f25417b;

    /* renamed from: c  reason: collision with root package name */
    public final Camera2PreviewView f25418c;

    /* renamed from: d  reason: collision with root package name */
    public final View f25419d;

    /* renamed from: e  reason: collision with root package name */
    public final TextView f25420e;

    /* renamed from: f  reason: collision with root package name */
    public final TextView f25421f;

    /* renamed from: g  reason: collision with root package name */
    public final ProgressBar f25422g;

    /* renamed from: h  reason: collision with root package name */
    public final Pi2NavigationBar f25423h;

    /* renamed from: i  reason: collision with root package name */
    public final Barrier f25424i;

    /* renamed from: j  reason: collision with root package name */
    public final FrameLayout f25425j;

    /* renamed from: k  reason: collision with root package name */
    public final PreviewView f25426k;

    /* renamed from: l  reason: collision with root package name */
    public final OldSelfieOverlayView f25427l;

    /* renamed from: m  reason: collision with root package name */
    public final TextView f25428m;

    private a(ConstraintLayout constraintLayout, Button button, Camera2PreviewView camera2PreviewView, View view, TextView textView, TextView textView2, ProgressBar progressBar, Pi2NavigationBar pi2NavigationBar, Barrier barrier, FrameLayout frameLayout, PreviewView previewView, OldSelfieOverlayView oldSelfieOverlayView, TextView textView3) {
        this.f25416a = constraintLayout;
        this.f25417b = button;
        this.f25418c = camera2PreviewView;
        this.f25419d = view;
        this.f25420e = textView;
        this.f25421f = textView2;
        this.f25422g = progressBar;
        this.f25423h = pi2NavigationBar;
        this.f25424i = barrier;
        this.f25425j = frameLayout;
        this.f25426k = previewView;
        this.f25427l = oldSelfieOverlayView;
        this.f25428m = textView3;
    }

    public static a a(View view) {
        View a10;
        int i10 = w0.f23522g;
        Button button = (Button) e4.a.a(view, i10);
        if (button != null) {
            i10 = w0.f23523h;
            Camera2PreviewView camera2PreviewView = (Camera2PreviewView) e4.a.a(view, i10);
            if (camera2PreviewView != null && (a10 = e4.a.a(view, (i10 = w0.f23524i))) != null) {
                i10 = w0.f23529n;
                TextView textView = (TextView) e4.a.a(view, i10);
                if (textView != null) {
                    i10 = w0.f23535t;
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
        View inflate = layoutInflater.inflate(x0.f23554a, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public ConstraintLayout getRoot() {
        return this.f25416a;
    }
}
