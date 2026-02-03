package ip;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import androidx.viewbinding.ViewBinding;
import com.withpersona.sdk2.inquiry.selfie.view.Pi2CircleMaskView;
import com.withpersona.sdk2.inquiry.selfie.view.Pi2ProgressArcView;
import com.withpersona.sdk2.inquiry.shared.ui.ThemeableLottieAnimationView;
import hp.w0;
import hp.x0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final View f30976a;

    /* renamed from: b  reason: collision with root package name */
    public final View f30977b;

    /* renamed from: c  reason: collision with root package name */
    public final Pi2CircleMaskView f30978c;

    /* renamed from: d  reason: collision with root package name */
    public final ThemeableLottieAnimationView f30979d;

    /* renamed from: e  reason: collision with root package name */
    public final ImageView f30980e;

    /* renamed from: f  reason: collision with root package name */
    public final View f30981f;

    /* renamed from: g  reason: collision with root package name */
    public final View f30982g;

    /* renamed from: h  reason: collision with root package name */
    public final Pi2ProgressArcView f30983h;

    private b(View view, View view2, Pi2CircleMaskView pi2CircleMaskView, ThemeableLottieAnimationView themeableLottieAnimationView, ImageView imageView, View view3, View view4, Pi2ProgressArcView pi2ProgressArcView) {
        this.f30976a = view;
        this.f30977b = view2;
        this.f30978c = pi2CircleMaskView;
        this.f30979d = themeableLottieAnimationView;
        this.f30980e = imageView;
        this.f30981f = view3;
        this.f30982g = view4;
        this.f30983h = pi2ProgressArcView;
    }

    public static b a(View view) {
        View a10;
        View a11;
        int i10 = w0.f27645d;
        View a12 = e4.a.a(view, i10);
        if (a12 != null) {
            i10 = w0.f27652k;
            Pi2CircleMaskView pi2CircleMaskView = (Pi2CircleMaskView) e4.a.a(view, i10);
            if (pi2CircleMaskView != null) {
                i10 = w0.f27659r;
                ThemeableLottieAnimationView themeableLottieAnimationView = (ThemeableLottieAnimationView) e4.a.a(view, i10);
                if (themeableLottieAnimationView != null) {
                    i10 = w0.f27660s;
                    ImageView imageView = (ImageView) e4.a.a(view, i10);
                    if (imageView != null && (a10 = e4.a.a(view, (i10 = w0.f27664w))) != null && (a11 = e4.a.a(view, (i10 = w0.f27666y))) != null) {
                        i10 = w0.L;
                        Pi2ProgressArcView pi2ProgressArcView = (Pi2ProgressArcView) e4.a.a(view, i10);
                        if (pi2ProgressArcView != null) {
                            return new b(view, a12, pi2CircleMaskView, themeableLottieAnimationView, imageView, a10, a11, pi2ProgressArcView);
                        }
                    }
                }
            }
        }
        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i10)));
    }

    public static b b(LayoutInflater layoutInflater, ViewGroup viewGroup) {
        if (viewGroup != null) {
            layoutInflater.inflate(x0.f27681b, viewGroup);
            return a(viewGroup);
        }
        throw new NullPointerException("parent");
    }

    @Override // androidx.viewbinding.ViewBinding
    public View getRoot() {
        return this.f30976a;
    }
}
