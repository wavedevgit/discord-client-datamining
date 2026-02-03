package io;

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
import eo.m4;
import eo.n4;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final CoordinatorLayout f28612a;

    /* renamed from: b  reason: collision with root package name */
    public final TextView f28613b;

    /* renamed from: c  reason: collision with root package name */
    public final Button f28614c;

    /* renamed from: d  reason: collision with root package name */
    public final ImageView f28615d;

    /* renamed from: e  reason: collision with root package name */
    public final TextView f28616e;

    /* renamed from: f  reason: collision with root package name */
    public final ImageView f28617f;

    /* renamed from: g  reason: collision with root package name */
    public final CardView f28618g;

    /* renamed from: h  reason: collision with root package name */
    public final Pi2NavigationBar f28619h;

    /* renamed from: i  reason: collision with root package name */
    public final TextView f28620i;

    /* renamed from: j  reason: collision with root package name */
    public final ButtonWithLoadingIndicator f28621j;

    private h(CoordinatorLayout coordinatorLayout, TextView textView, Button button, ImageView imageView, TextView textView2, ImageView imageView2, CardView cardView, Pi2NavigationBar pi2NavigationBar, TextView textView3, ButtonWithLoadingIndicator buttonWithLoadingIndicator) {
        this.f28612a = coordinatorLayout;
        this.f28613b = textView;
        this.f28614c = button;
        this.f28615d = imageView;
        this.f28616e = textView2;
        this.f28617f = imageView2;
        this.f28618g = cardView;
        this.f28619h = pi2NavigationBar;
        this.f28620i = textView3;
        this.f28621j = buttonWithLoadingIndicator;
    }

    public static h a(View view) {
        int i10 = m4.f22073d;
        TextView textView = (TextView) e4.a.a(view, i10);
        if (textView != null) {
            i10 = m4.f22101r;
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
        View inflate = layoutInflater.inflate(n4.f22245i, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public CoordinatorLayout getRoot() {
        return this.f28612a;
    }
}
