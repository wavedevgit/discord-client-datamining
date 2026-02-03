package go;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.FrameLayout;
import android.widget.LinearLayout;
import android.widget.Space;
import android.widget.TextView;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.viewbinding.ViewBinding;
import bo.m4;
import bo.n4;
import com.withpersona.sdk2.inquiry.shared.ui.ThemeableLottieAnimationView;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final FrameLayout f27220a;

    /* renamed from: b  reason: collision with root package name */
    public final Space f27221b;

    /* renamed from: c  reason: collision with root package name */
    public final FrameLayout f27222c;

    /* renamed from: d  reason: collision with root package name */
    public final LinearLayout f27223d;

    /* renamed from: e  reason: collision with root package name */
    public final Button f27224e;

    /* renamed from: f  reason: collision with root package name */
    public final ConstraintLayout f27225f;

    /* renamed from: g  reason: collision with root package name */
    public final ThemeableLottieAnimationView f27226g;

    /* renamed from: h  reason: collision with root package name */
    public final ConstraintLayout f27227h;

    /* renamed from: i  reason: collision with root package name */
    public final TextView f27228i;

    /* renamed from: j  reason: collision with root package name */
    public final View f27229j;

    /* renamed from: k  reason: collision with root package name */
    public final TextView f27230k;

    /* renamed from: l  reason: collision with root package name */
    public final TextView f27231l;

    private c(FrameLayout frameLayout, Space space, FrameLayout frameLayout2, LinearLayout linearLayout, Button button, ConstraintLayout constraintLayout, ThemeableLottieAnimationView themeableLottieAnimationView, ConstraintLayout constraintLayout2, TextView textView, View view, TextView textView2, TextView textView3) {
        this.f27220a = frameLayout;
        this.f27221b = space;
        this.f27222c = frameLayout2;
        this.f27223d = linearLayout;
        this.f27224e = button;
        this.f27225f = constraintLayout;
        this.f27226g = themeableLottieAnimationView;
        this.f27227h = constraintLayout2;
        this.f27228i = textView;
        this.f27229j = view;
        this.f27230k = textView2;
        this.f27231l = textView3;
    }

    public static c a(View view) {
        View a10;
        int i10 = m4.f7020e;
        Space space = (Space) e4.a.a(view, i10);
        if (space != null) {
            i10 = m4.f7022f;
            FrameLayout frameLayout = (FrameLayout) e4.a.a(view, i10);
            if (frameLayout != null) {
                i10 = m4.f7024g;
                LinearLayout linearLayout = (LinearLayout) e4.a.a(view, i10);
                if (linearLayout != null) {
                    i10 = m4.f7038n;
                    Button button = (Button) e4.a.a(view, i10);
                    if (button != null) {
                        i10 = m4.f7048s;
                        ConstraintLayout constraintLayout = (ConstraintLayout) e4.a.a(view, i10);
                        if (constraintLayout != null) {
                            i10 = m4.P;
                            ThemeableLottieAnimationView themeableLottieAnimationView = (ThemeableLottieAnimationView) e4.a.a(view, i10);
                            if (themeableLottieAnimationView != null) {
                                i10 = m4.Q;
                                ConstraintLayout constraintLayout2 = (ConstraintLayout) e4.a.a(view, i10);
                                if (constraintLayout2 != null) {
                                    i10 = m4.f7043p0;
                                    TextView textView = (TextView) e4.a.a(view, i10);
                                    if (textView != null && (a10 = e4.a.a(view, (i10 = m4.f7055v0))) != null) {
                                        i10 = m4.C0;
                                        TextView textView2 = (TextView) e4.a.a(view, i10);
                                        if (textView2 != null) {
                                            i10 = m4.D0;
                                            TextView textView3 = (TextView) e4.a.a(view, i10);
                                            if (textView3 != null) {
                                                return new c((FrameLayout) view, space, frameLayout, linearLayout, button, constraintLayout, themeableLottieAnimationView, constraintLayout2, textView, a10, textView2, textView3);
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

    public static c c(LayoutInflater layoutInflater, ViewGroup viewGroup, boolean z10) {
        View inflate = layoutInflater.inflate(n4.f7184c, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public FrameLayout getRoot() {
        return this.f27220a;
    }
}
