package co;

import android.view.View;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.viewbinding.ViewBinding;
import bo.y2;
import com.google.android.material.card.MaterialCardView;
import com.google.android.material.progressindicator.CircularProgressIndicator;
import com.withpersona.sdk2.inquiry.shared.ui.ThemeableLottieAnimationView;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final ConstraintLayout f7761a;

    /* renamed from: b  reason: collision with root package name */
    public final MaterialCardView f7762b;

    /* renamed from: c  reason: collision with root package name */
    public final TextView f7763c;

    /* renamed from: d  reason: collision with root package name */
    public final ImageView f7764d;

    /* renamed from: e  reason: collision with root package name */
    public final LinearLayout f7765e;

    /* renamed from: f  reason: collision with root package name */
    public final CircularProgressIndicator f7766f;

    /* renamed from: g  reason: collision with root package name */
    public final ThemeableLottieAnimationView f7767g;

    private d(ConstraintLayout constraintLayout, MaterialCardView materialCardView, TextView textView, ImageView imageView, LinearLayout linearLayout, CircularProgressIndicator circularProgressIndicator, ThemeableLottieAnimationView themeableLottieAnimationView) {
        this.f7761a = constraintLayout;
        this.f7762b = materialCardView;
        this.f7763c = textView;
        this.f7764d = imageView;
        this.f7765e = linearLayout;
        this.f7766f = circularProgressIndicator;
        this.f7767g = themeableLottieAnimationView;
    }

    public static d a(View view) {
        int i10 = y2.f7041e;
        MaterialCardView materialCardView = (MaterialCardView) e4.a.a(view, i10);
        if (materialCardView != null) {
            i10 = y2.f7044h;
            TextView textView = (TextView) e4.a.a(view, i10);
            if (textView != null) {
                i10 = y2.f7045i;
                ImageView imageView = (ImageView) e4.a.a(view, i10);
                if (imageView != null) {
                    i10 = y2.f7046j;
                    LinearLayout linearLayout = (LinearLayout) e4.a.a(view, i10);
                    if (linearLayout != null) {
                        i10 = y2.f7048l;
                        CircularProgressIndicator circularProgressIndicator = (CircularProgressIndicator) e4.a.a(view, i10);
                        if (circularProgressIndicator != null) {
                            i10 = y2.f7051o;
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
        return this.f7761a;
    }
}
