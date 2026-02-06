package no;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.TextView;
import androidx.cardview.widget.CardView;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.coordinatorlayout.widget.CoordinatorLayout;
import androidx.viewbinding.ViewBinding;
import com.google.android.material.button.MaterialButton;
import com.withpersona.sdk2.inquiry.shared.ui.Pi2NavigationBar;
import com.withpersona.sdk2.inquiry.shared.ui.ThemeableLottieAnimationView;
import jo.m4;
import jo.n4;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final CoordinatorLayout f40992a;

    /* renamed from: b  reason: collision with root package name */
    public final TextView f40993b;

    /* renamed from: c  reason: collision with root package name */
    public final MaterialButton f40994c;

    /* renamed from: d  reason: collision with root package name */
    public final ThemeableLottieAnimationView f40995d;

    /* renamed from: e  reason: collision with root package name */
    public final View f40996e;

    /* renamed from: f  reason: collision with root package name */
    public final ConstraintLayout f40997f;

    /* renamed from: g  reason: collision with root package name */
    public final CardView f40998g;

    /* renamed from: h  reason: collision with root package name */
    public final Pi2NavigationBar f40999h;

    /* renamed from: i  reason: collision with root package name */
    public final TextView f41000i;

    /* renamed from: j  reason: collision with root package name */
    public final Button f41001j;

    private d(CoordinatorLayout coordinatorLayout, TextView textView, MaterialButton materialButton, ThemeableLottieAnimationView themeableLottieAnimationView, View view, ConstraintLayout constraintLayout, CardView cardView, Pi2NavigationBar pi2NavigationBar, TextView textView2, Button button) {
        this.f40992a = coordinatorLayout;
        this.f40993b = textView;
        this.f40994c = materialButton;
        this.f40995d = themeableLottieAnimationView;
        this.f40996e = view;
        this.f40997f = constraintLayout;
        this.f40998g = cardView;
        this.f40999h = pi2NavigationBar;
        this.f41000i = textView2;
        this.f41001j = button;
    }

    public static d a(View view) {
        View a10;
        int i10 = m4.f30381d;
        TextView textView = (TextView) e4.a.a(view, i10);
        if (textView != null) {
            i10 = m4.f30393j;
            MaterialButton materialButton = (MaterialButton) e4.a.a(view, i10);
            if (materialButton != null) {
                i10 = m4.N;
                ThemeableLottieAnimationView themeableLottieAnimationView = (ThemeableLottieAnimationView) e4.a.a(view, i10);
                if (themeableLottieAnimationView != null && (a10 = e4.a.a(view, (i10 = m4.O))) != null) {
                    i10 = m4.S;
                    ConstraintLayout constraintLayout = (ConstraintLayout) e4.a.a(view, i10);
                    if (constraintLayout != null) {
                        i10 = m4.X;
                        CardView cardView = (CardView) e4.a.a(view, i10);
                        if (cardView != null) {
                            i10 = m4.Y;
                            Pi2NavigationBar pi2NavigationBar = (Pi2NavigationBar) e4.a.a(view, i10);
                            if (pi2NavigationBar != null) {
                                i10 = m4.D0;
                                TextView textView2 = (TextView) e4.a.a(view, i10);
                                if (textView2 != null) {
                                    i10 = m4.F0;
                                    Button button = (Button) e4.a.a(view, i10);
                                    if (button != null) {
                                        return new d((CoordinatorLayout) view, textView, materialButton, themeableLottieAnimationView, a10, constraintLayout, cardView, pi2NavigationBar, textView2, button);
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

    public static d c(LayoutInflater layoutInflater, ViewGroup viewGroup, boolean z10) {
        View inflate = layoutInflater.inflate(n4.f30548d, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public CoordinatorLayout getRoot() {
        return this.f40992a;
    }
}
