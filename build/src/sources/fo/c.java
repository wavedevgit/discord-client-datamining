package fo;

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
import ao.m4;
import ao.n4;
import com.withpersona.sdk2.inquiry.shared.ui.ThemeableLottieAnimationView;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final FrameLayout f25327a;

    /* renamed from: b  reason: collision with root package name */
    public final Space f25328b;

    /* renamed from: c  reason: collision with root package name */
    public final FrameLayout f25329c;

    /* renamed from: d  reason: collision with root package name */
    public final LinearLayout f25330d;

    /* renamed from: e  reason: collision with root package name */
    public final Button f25331e;

    /* renamed from: f  reason: collision with root package name */
    public final ConstraintLayout f25332f;

    /* renamed from: g  reason: collision with root package name */
    public final ThemeableLottieAnimationView f25333g;

    /* renamed from: h  reason: collision with root package name */
    public final ConstraintLayout f25334h;

    /* renamed from: i  reason: collision with root package name */
    public final TextView f25335i;

    /* renamed from: j  reason: collision with root package name */
    public final View f25336j;

    /* renamed from: k  reason: collision with root package name */
    public final TextView f25337k;

    /* renamed from: l  reason: collision with root package name */
    public final TextView f25338l;

    private c(FrameLayout frameLayout, Space space, FrameLayout frameLayout2, LinearLayout linearLayout, Button button, ConstraintLayout constraintLayout, ThemeableLottieAnimationView themeableLottieAnimationView, ConstraintLayout constraintLayout2, TextView textView, View view, TextView textView2, TextView textView3) {
        this.f25327a = frameLayout;
        this.f25328b = space;
        this.f25329c = frameLayout2;
        this.f25330d = linearLayout;
        this.f25331e = button;
        this.f25332f = constraintLayout;
        this.f25333g = themeableLottieAnimationView;
        this.f25334h = constraintLayout2;
        this.f25335i = textView;
        this.f25336j = view;
        this.f25337k = textView2;
        this.f25338l = textView3;
    }

    public static c a(View view) {
        View a10;
        int i10 = m4.f6197e;
        Space space = (Space) e4.a.a(view, i10);
        if (space != null) {
            i10 = m4.f6199f;
            FrameLayout frameLayout = (FrameLayout) e4.a.a(view, i10);
            if (frameLayout != null) {
                i10 = m4.f6201g;
                LinearLayout linearLayout = (LinearLayout) e4.a.a(view, i10);
                if (linearLayout != null) {
                    i10 = m4.f6215n;
                    Button button = (Button) e4.a.a(view, i10);
                    if (button != null) {
                        i10 = m4.f6225s;
                        ConstraintLayout constraintLayout = (ConstraintLayout) e4.a.a(view, i10);
                        if (constraintLayout != null) {
                            i10 = m4.P;
                            ThemeableLottieAnimationView themeableLottieAnimationView = (ThemeableLottieAnimationView) e4.a.a(view, i10);
                            if (themeableLottieAnimationView != null) {
                                i10 = m4.Q;
                                ConstraintLayout constraintLayout2 = (ConstraintLayout) e4.a.a(view, i10);
                                if (constraintLayout2 != null) {
                                    i10 = m4.f6220p0;
                                    TextView textView = (TextView) e4.a.a(view, i10);
                                    if (textView != null && (a10 = e4.a.a(view, (i10 = m4.f6232v0))) != null) {
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
        View inflate = layoutInflater.inflate(n4.f6361c, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public FrameLayout getRoot() {
        return this.f25327a;
    }
}
