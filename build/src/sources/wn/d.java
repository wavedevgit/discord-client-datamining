package wn;

import android.view.View;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.viewbinding.ViewBinding;
import com.google.android.material.card.MaterialCardView;
import com.google.android.material.progressindicator.CircularProgressIndicator;
import com.withpersona.sdk2.inquiry.shared.ui.ThemeableLottieAnimationView;
import vn.y2;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final ConstraintLayout f52737a;

    /* renamed from: b  reason: collision with root package name */
    public final MaterialCardView f52738b;

    /* renamed from: c  reason: collision with root package name */
    public final TextView f52739c;

    /* renamed from: d  reason: collision with root package name */
    public final ImageView f52740d;

    /* renamed from: e  reason: collision with root package name */
    public final LinearLayout f52741e;

    /* renamed from: f  reason: collision with root package name */
    public final CircularProgressIndicator f52742f;

    /* renamed from: g  reason: collision with root package name */
    public final ThemeableLottieAnimationView f52743g;

    private d(ConstraintLayout constraintLayout, MaterialCardView materialCardView, TextView textView, ImageView imageView, LinearLayout linearLayout, CircularProgressIndicator circularProgressIndicator, ThemeableLottieAnimationView themeableLottieAnimationView) {
        this.f52737a = constraintLayout;
        this.f52738b = materialCardView;
        this.f52739c = textView;
        this.f52740d = imageView;
        this.f52741e = linearLayout;
        this.f52742f = circularProgressIndicator;
        this.f52743g = themeableLottieAnimationView;
    }

    public static d a(View view) {
        int i10 = y2.f51734e;
        MaterialCardView materialCardView = (MaterialCardView) e4.a.a(view, i10);
        if (materialCardView != null) {
            i10 = y2.f51737h;
            TextView textView = (TextView) e4.a.a(view, i10);
            if (textView != null) {
                i10 = y2.f51738i;
                ImageView imageView = (ImageView) e4.a.a(view, i10);
                if (imageView != null) {
                    i10 = y2.f51739j;
                    LinearLayout linearLayout = (LinearLayout) e4.a.a(view, i10);
                    if (linearLayout != null) {
                        i10 = y2.f51741l;
                        CircularProgressIndicator circularProgressIndicator = (CircularProgressIndicator) e4.a.a(view, i10);
                        if (circularProgressIndicator != null) {
                            i10 = y2.f51744o;
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
        return this.f52737a;
    }
}
