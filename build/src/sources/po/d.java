package po;

import android.view.View;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.viewbinding.ViewBinding;
import com.google.android.material.card.MaterialCardView;
import com.google.android.material.progressindicator.CircularProgressIndicator;
import com.withpersona.sdk2.inquiry.shared.ui.ThemeableLottieAnimationView;
import oo.y2;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final ConstraintLayout f43433a;

    /* renamed from: b  reason: collision with root package name */
    public final MaterialCardView f43434b;

    /* renamed from: c  reason: collision with root package name */
    public final TextView f43435c;

    /* renamed from: d  reason: collision with root package name */
    public final ImageView f43436d;

    /* renamed from: e  reason: collision with root package name */
    public final LinearLayout f43437e;

    /* renamed from: f  reason: collision with root package name */
    public final CircularProgressIndicator f43438f;

    /* renamed from: g  reason: collision with root package name */
    public final ThemeableLottieAnimationView f43439g;

    private d(ConstraintLayout constraintLayout, MaterialCardView materialCardView, TextView textView, ImageView imageView, LinearLayout linearLayout, CircularProgressIndicator circularProgressIndicator, ThemeableLottieAnimationView themeableLottieAnimationView) {
        this.f43433a = constraintLayout;
        this.f43434b = materialCardView;
        this.f43435c = textView;
        this.f43436d = imageView;
        this.f43437e = linearLayout;
        this.f43438f = circularProgressIndicator;
        this.f43439g = themeableLottieAnimationView;
    }

    public static d a(View view) {
        int i10 = y2.f41620e;
        MaterialCardView materialCardView = (MaterialCardView) e4.a.a(view, i10);
        if (materialCardView != null) {
            i10 = y2.f41623h;
            TextView textView = (TextView) e4.a.a(view, i10);
            if (textView != null) {
                i10 = y2.f41624i;
                ImageView imageView = (ImageView) e4.a.a(view, i10);
                if (imageView != null) {
                    i10 = y2.f41625j;
                    LinearLayout linearLayout = (LinearLayout) e4.a.a(view, i10);
                    if (linearLayout != null) {
                        i10 = y2.f41627l;
                        CircularProgressIndicator circularProgressIndicator = (CircularProgressIndicator) e4.a.a(view, i10);
                        if (circularProgressIndicator != null) {
                            i10 = y2.f41630o;
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
        return this.f43433a;
    }
}
