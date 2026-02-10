package go;

import android.view.View;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.viewbinding.ViewBinding;
import com.google.android.material.card.MaterialCardView;
import com.google.android.material.progressindicator.CircularProgressIndicator;
import com.withpersona.sdk2.inquiry.shared.ui.ThemeableLottieAnimationView;
import fo.y2;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final ConstraintLayout f24473a;

    /* renamed from: b  reason: collision with root package name */
    public final MaterialCardView f24474b;

    /* renamed from: c  reason: collision with root package name */
    public final TextView f24475c;

    /* renamed from: d  reason: collision with root package name */
    public final ImageView f24476d;

    /* renamed from: e  reason: collision with root package name */
    public final LinearLayout f24477e;

    /* renamed from: f  reason: collision with root package name */
    public final CircularProgressIndicator f24478f;

    /* renamed from: g  reason: collision with root package name */
    public final ThemeableLottieAnimationView f24479g;

    private d(ConstraintLayout constraintLayout, MaterialCardView materialCardView, TextView textView, ImageView imageView, LinearLayout linearLayout, CircularProgressIndicator circularProgressIndicator, ThemeableLottieAnimationView themeableLottieAnimationView) {
        this.f24473a = constraintLayout;
        this.f24474b = materialCardView;
        this.f24475c = textView;
        this.f24476d = imageView;
        this.f24477e = linearLayout;
        this.f24478f = circularProgressIndicator;
        this.f24479g = themeableLottieAnimationView;
    }

    public static d a(View view) {
        int i10 = y2.f23143e;
        MaterialCardView materialCardView = (MaterialCardView) e4.a.a(view, i10);
        if (materialCardView != null) {
            i10 = y2.f23146h;
            TextView textView = (TextView) e4.a.a(view, i10);
            if (textView != null) {
                i10 = y2.f23147i;
                ImageView imageView = (ImageView) e4.a.a(view, i10);
                if (imageView != null) {
                    i10 = y2.f23148j;
                    LinearLayout linearLayout = (LinearLayout) e4.a.a(view, i10);
                    if (linearLayout != null) {
                        i10 = y2.f23150l;
                        CircularProgressIndicator circularProgressIndicator = (CircularProgressIndicator) e4.a.a(view, i10);
                        if (circularProgressIndicator != null) {
                            i10 = y2.f23153o;
                            ThemeableLottieAnimationView themeableLottieAnimationView = (ThemeableLottieAnimationView) e4.a.a(view, i10);
                            if (themeableLottieAnimationView != null) {
                                return new d((ConstraintLayout) view, materialCardView, textView, imageView, linearLayout, circularProgressIndicator, themeableLottieAnimationView);
                            }
                        }
                    }
                }
            }
        }
        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i10)));
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public ConstraintLayout getRoot() {
        return this.f24473a;
    }
}
