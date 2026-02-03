package go;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.LinearLayout;
import android.widget.TextView;
import androidx.coordinatorlayout.widget.CoordinatorLayout;
import androidx.viewbinding.ViewBinding;
import bo.m4;
import bo.n4;
import com.google.android.material.textfield.TextInputLayout;
import com.withpersona.sdk2.inquiry.shared.ui.Pi2NavigationBar;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final CoordinatorLayout f27293a;

    /* renamed from: b  reason: collision with root package name */
    public final LinearLayout f27294b;

    /* renamed from: c  reason: collision with root package name */
    public final Button f27295c;

    /* renamed from: d  reason: collision with root package name */
    public final TextInputLayout f27296d;

    /* renamed from: e  reason: collision with root package name */
    public final TextView f27297e;

    /* renamed from: f  reason: collision with root package name */
    public final TextInputLayout f27298f;

    /* renamed from: g  reason: collision with root package name */
    public final TextView f27299g;

    /* renamed from: h  reason: collision with root package name */
    public final Pi2NavigationBar f27300h;

    /* renamed from: i  reason: collision with root package name */
    public final TextView f27301i;

    private i(CoordinatorLayout coordinatorLayout, LinearLayout linearLayout, Button button, TextInputLayout textInputLayout, TextView textView, TextInputLayout textInputLayout2, TextView textView2, Pi2NavigationBar pi2NavigationBar, TextView textView3) {
        this.f27293a = coordinatorLayout;
        this.f27294b = linearLayout;
        this.f27295c = button;
        this.f27296d = textInputLayout;
        this.f27297e = textView;
        this.f27298f = textInputLayout2;
        this.f27299g = textView2;
        this.f27300h = pi2NavigationBar;
        this.f27301i = textView3;
    }

    public static i a(View view) {
        int i10 = m4.f7050t;
        LinearLayout linearLayout = (LinearLayout) e4.a.a(view, i10);
        if (linearLayout != null) {
            i10 = m4.f7052u;
            Button button = (Button) e4.a.a(view, i10);
            if (button != null) {
                i10 = m4.f7054v;
                TextInputLayout textInputLayout = (TextInputLayout) e4.a.a(view, i10);
                if (textInputLayout != null) {
                    i10 = m4.f7056w;
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
        View inflate = layoutInflater.inflate(n4.f7191j, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public CoordinatorLayout getRoot() {
        return this.f27293a;
    }
}
