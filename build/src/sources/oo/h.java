package oo;

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
import ko.m4;
import ko.n4;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final CoordinatorLayout f42518a;

    /* renamed from: b  reason: collision with root package name */
    public final TextView f42519b;

    /* renamed from: c  reason: collision with root package name */
    public final Button f42520c;

    /* renamed from: d  reason: collision with root package name */
    public final ImageView f42521d;

    /* renamed from: e  reason: collision with root package name */
    public final TextView f42522e;

    /* renamed from: f  reason: collision with root package name */
    public final ImageView f42523f;

    /* renamed from: g  reason: collision with root package name */
    public final CardView f42524g;

    /* renamed from: h  reason: collision with root package name */
    public final Pi2NavigationBar f42525h;

    /* renamed from: i  reason: collision with root package name */
    public final TextView f42526i;

    /* renamed from: j  reason: collision with root package name */
    public final ButtonWithLoadingIndicator f42527j;

    private h(CoordinatorLayout coordinatorLayout, TextView textView, Button button, ImageView imageView, TextView textView2, ImageView imageView2, CardView cardView, Pi2NavigationBar pi2NavigationBar, TextView textView3, ButtonWithLoadingIndicator buttonWithLoadingIndicator) {
        this.f42518a = coordinatorLayout;
        this.f42519b = textView;
        this.f42520c = button;
        this.f42521d = imageView;
        this.f42522e = textView2;
        this.f42523f = imageView2;
        this.f42524g = cardView;
        this.f42525h = pi2NavigationBar;
        this.f42526i = textView3;
        this.f42527j = buttonWithLoadingIndicator;
    }

    public static h a(View view) {
        int i10 = m4.f31380d;
        TextView textView = (TextView) e4.a.a(view, i10);
        if (textView != null) {
            i10 = m4.f31408r;
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
        View inflate = layoutInflater.inflate(n4.f31552i, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public CoordinatorLayout getRoot() {
        return this.f42518a;
    }
}
