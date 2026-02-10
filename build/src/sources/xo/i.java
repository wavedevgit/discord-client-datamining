package xo;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.LinearLayout;
import android.widget.TextView;
import androidx.coordinatorlayout.widget.CoordinatorLayout;
import androidx.viewbinding.ViewBinding;
import com.google.android.material.textfield.TextInputLayout;
import com.withpersona.sdk2.inquiry.shared.ui.Pi2NavigationBar;
import to.m4;
import to.n4;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final CoordinatorLayout f55051a;

    /* renamed from: b  reason: collision with root package name */
    public final LinearLayout f55052b;

    /* renamed from: c  reason: collision with root package name */
    public final Button f55053c;

    /* renamed from: d  reason: collision with root package name */
    public final TextInputLayout f55054d;

    /* renamed from: e  reason: collision with root package name */
    public final TextView f55055e;

    /* renamed from: f  reason: collision with root package name */
    public final TextInputLayout f55056f;

    /* renamed from: g  reason: collision with root package name */
    public final TextView f55057g;

    /* renamed from: h  reason: collision with root package name */
    public final Pi2NavigationBar f55058h;

    /* renamed from: i  reason: collision with root package name */
    public final TextView f55059i;

    private i(CoordinatorLayout coordinatorLayout, LinearLayout linearLayout, Button button, TextInputLayout textInputLayout, TextView textView, TextInputLayout textInputLayout2, TextView textView2, Pi2NavigationBar pi2NavigationBar, TextView textView3) {
        this.f55051a = coordinatorLayout;
        this.f55052b = linearLayout;
        this.f55053c = button;
        this.f55054d = textInputLayout;
        this.f55055e = textView;
        this.f55056f = textInputLayout2;
        this.f55057g = textView2;
        this.f55058h = pi2NavigationBar;
        this.f55059i = textView3;
    }

    public static i a(View view) {
        int i10 = m4.f49404t;
        LinearLayout linearLayout = (LinearLayout) e4.a.a(view, i10);
        if (linearLayout != null) {
            i10 = m4.f49406u;
            Button button = (Button) e4.a.a(view, i10);
            if (button != null) {
                i10 = m4.f49408v;
                TextInputLayout textInputLayout = (TextInputLayout) e4.a.a(view, i10);
                if (textInputLayout != null) {
                    i10 = m4.f49410w;
                    TextView textView = (TextView) e4.a.a(view, i10);
                    if (textView != null) {
                        i10 = m4.L;
                        TextInputLayout textInputLayout2 = (TextInputLayout) e4.a.a(view, i10);
                        if (textInputLayout2 != null) {
                            i10 = m4.M;
                            TextView textView2 = (TextView) e4.a.a(view, i10);
                            if (textView2 != null) {
                                i10 = m4.Y;
                                Pi2NavigationBar pi2NavigationBar = (Pi2NavigationBar) e4.a.a(view, i10);
                                if (pi2NavigationBar != null) {
                                    i10 = m4.D0;
                                    TextView textView3 = (TextView) e4.a.a(view, i10);
                                    if (textView3 != null) {
                                        return new i((CoordinatorLayout) view, linearLayout, button, textInputLayout, textView, textInputLayout2, textView2, pi2NavigationBar, textView3);
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

    public static i c(LayoutInflater layoutInflater, ViewGroup viewGroup, boolean z10) {
        View inflate = layoutInflater.inflate(n4.f49545j, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public CoordinatorLayout getRoot() {
        return this.f55051a;
    }
}
