package xn;

import android.view.View;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.viewbinding.ViewBinding;
import com.google.android.material.card.MaterialCardView;
import com.withpersona.sdk2.inquiry.shared.ui.ThemeableLottieAnimationView;
import wn.y2;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final ConstraintLayout f53704a;

    /* renamed from: b  reason: collision with root package name */
    public final ThemeableLottieAnimationView f53705b;

    /* renamed from: c  reason: collision with root package name */
    public final MaterialCardView f53706c;

    private b(ConstraintLayout constraintLayout, ThemeableLottieAnimationView themeableLottieAnimationView, MaterialCardView materialCardView) {
        this.f53704a = constraintLayout;
        this.f53705b = themeableLottieAnimationView;
        this.f53706c = materialCardView;
    }

    public static b a(View view) {
        int i10 = y2.f52806a;
        ThemeableLottieAnimationView themeableLottieAnimationView = (ThemeableLottieAnimationView) e4.a.a(view, i10);
        if (themeableLottieAnimationView != null) {
            i10 = y2.f52810e;
            MaterialCardView materialCardView = (MaterialCardView) e4.a.a(view, i10);
            if (materialCardView != null) {
                return new b((ConstraintLayout) view, themeableLottieAnimationView, materialCardView);
            }
        }
        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i10)));
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public ConstraintLayout getRoot() {
        return this.f53704a;
    }
}
