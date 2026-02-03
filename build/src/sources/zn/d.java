package zn;

import android.view.View;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.viewbinding.ViewBinding;
import com.google.android.material.card.MaterialCardView;
import com.google.android.material.progressindicator.CircularProgressIndicator;
import com.withpersona.sdk2.inquiry.shared.ui.ThemeableLottieAnimationView;
import yn.y2;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final ConstraintLayout f56105a;

    /* renamed from: b  reason: collision with root package name */
    public final MaterialCardView f56106b;

    /* renamed from: c  reason: collision with root package name */
    public final TextView f56107c;

    /* renamed from: d  reason: collision with root package name */
    public final ImageView f56108d;

    /* renamed from: e  reason: collision with root package name */
    public final LinearLayout f56109e;

    /* renamed from: f  reason: collision with root package name */
    public final CircularProgressIndicator f56110f;

    /* renamed from: g  reason: collision with root package name */
    public final ThemeableLottieAnimationView f56111g;

    private d(ConstraintLayout constraintLayout, MaterialCardView materialCardView, TextView textView, ImageView imageView, LinearLayout linearLayout, CircularProgressIndicator circularProgressIndicator, ThemeableLottieAnimationView themeableLottieAnimationView) {
        this.f56105a = constraintLayout;
        this.f56106b = materialCardView;
        this.f56107c = textView;
        this.f56108d = imageView;
        this.f56109e = linearLayout;
        this.f56110f = circularProgressIndicator;
        this.f56111g = themeableLottieAnimationView;
    }

    public static d a(View view) {
        int i10 = y2.f55099e;
        MaterialCardView materialCardView = (MaterialCardView) e4.a.a(view, i10);
        if (materialCardView != null) {
            i10 = y2.f55102h;
            TextView textView = (TextView) e4.a.a(view, i10);
            if (textView != null) {
                i10 = y2.f55103i;
                ImageView imageView = (ImageView) e4.a.a(view, i10);
                if (imageView != null) {
                    i10 = y2.f55104j;
                    LinearLayout linearLayout = (LinearLayout) e4.a.a(view, i10);
                    if (linearLayout != null) {
                        i10 = y2.f55106l;
                        CircularProgressIndicator circularProgressIndicator = (CircularProgressIndicator) e4.a.a(view, i10);
                        if (circularProgressIndicator != null) {
                            i10 = y2.f55109o;
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
        return this.f56105a;
    }
}
