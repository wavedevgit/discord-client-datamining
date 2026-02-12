package xo;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;
import androidx.cardview.widget.CardView;
import androidx.coordinatorlayout.widget.CoordinatorLayout;
import androidx.viewbinding.ViewBinding;
import com.withpersona.sdk2.inquiry.shared.ui.ButtonWithLoadingIndicator;
import com.withpersona.sdk2.inquiry.shared.ui.Pi2NavigationBar;
import to.m4;
import to.n4;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final CoordinatorLayout f55042a;

    /* renamed from: b  reason: collision with root package name */
    public final TextView f55043b;

    /* renamed from: c  reason: collision with root package name */
    public final Button f55044c;

    /* renamed from: d  reason: collision with root package name */
    public final ImageView f55045d;

    /* renamed from: e  reason: collision with root package name */
    public final TextView f55046e;

    /* renamed from: f  reason: collision with root package name */
    public final ImageView f55047f;

    /* renamed from: g  reason: collision with root package name */
    public final CardView f55048g;

    /* renamed from: h  reason: collision with root package name */
    public final Pi2NavigationBar f55049h;

    /* renamed from: i  reason: collision with root package name */
    public final TextView f55050i;

    /* renamed from: j  reason: collision with root package name */
    public final ButtonWithLoadingIndicator f55051j;

    private h(CoordinatorLayout coordinatorLayout, TextView textView, Button button, ImageView imageView, TextView textView2, ImageView imageView2, CardView cardView, Pi2NavigationBar pi2NavigationBar, TextView textView3, ButtonWithLoadingIndicator buttonWithLoadingIndicator) {
        this.f55042a = coordinatorLayout;
        this.f55043b = textView;
        this.f55044c = button;
        this.f55045d = imageView;
        this.f55046e = textView2;
        this.f55047f = imageView2;
        this.f55048g = cardView;
        this.f55049h = pi2NavigationBar;
        this.f55050i = textView3;
        this.f55051j = buttonWithLoadingIndicator;
    }

    public static h a(View view) {
        int i10 = m4.f49373d;
        TextView textView = (TextView) e4.a.a(view, i10);
        if (textView != null) {
            i10 = m4.f49401r;
            Button button = (Button) e4.a.a(view, i10);
            if (button != null) {
                i10 = m4.B;
                ImageView imageView = (ImageView) e4.a.a(view, i10);
                if (imageView != null) {
                    i10 = m4.C;
                    TextView textView2 = (TextView) e4.a.a(view, i10);
                    if (textView2 != null) {
                        i10 = m4.R;
                        ImageView imageView2 = (ImageView) e4.a.a(view, i10);
                        if (imageView2 != null) {
                            i10 = m4.S;
                            CardView cardView = (CardView) e4.a.a(view, i10);
                            if (cardView != null) {
                                i10 = m4.Y;
                                Pi2NavigationBar pi2NavigationBar = (Pi2NavigationBar) e4.a.a(view, i10);
                                if (pi2NavigationBar != null) {
                                    i10 = m4.D0;
                                    TextView textView3 = (TextView) e4.a.a(view, i10);
                                    if (textView3 != null) {
                                        i10 = m4.G0;
                                        ButtonWithLoadingIndicator buttonWithLoadingIndicator = (ButtonWithLoadingIndicator) e4.a.a(view, i10);
                                        if (buttonWithLoadingIndicator != null) {
                                            return new h((CoordinatorLayout) view, textView, button, imageView, textView2, imageView2, cardView, pi2NavigationBar, textView3, buttonWithLoadingIndicator);
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

    public static h c(LayoutInflater layoutInflater, ViewGroup viewGroup, boolean z10) {
        View inflate = layoutInflater.inflate(n4.f49545i, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public CoordinatorLayout getRoot() {
        return this.f55042a;
    }
}
