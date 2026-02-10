package oo;

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
import com.withpersona.sdk2.inquiry.shared.ui.ThemeableLottieAnimationView;
import ko.m4;
import ko.n4;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final FrameLayout f42455a;

    /* renamed from: b  reason: collision with root package name */
    public final Space f42456b;

    /* renamed from: c  reason: collision with root package name */
    public final FrameLayout f42457c;

    /* renamed from: d  reason: collision with root package name */
    public final LinearLayout f42458d;

    /* renamed from: e  reason: collision with root package name */
    public final Button f42459e;

    /* renamed from: f  reason: collision with root package name */
    public final ConstraintLayout f42460f;

    /* renamed from: g  reason: collision with root package name */
    public final ThemeableLottieAnimationView f42461g;

    /* renamed from: h  reason: collision with root package name */
    public final ConstraintLayout f42462h;

    /* renamed from: i  reason: collision with root package name */
    public final TextView f42463i;

    /* renamed from: j  reason: collision with root package name */
    public final View f42464j;

    /* renamed from: k  reason: collision with root package name */
    public final TextView f42465k;

    /* renamed from: l  reason: collision with root package name */
    public final TextView f42466l;

    private c(FrameLayout frameLayout, Space space, FrameLayout frameLayout2, LinearLayout linearLayout, Button button, ConstraintLayout constraintLayout, ThemeableLottieAnimationView themeableLottieAnimationView, ConstraintLayout constraintLayout2, TextView textView, View view, TextView textView2, TextView textView3) {
        this.f42455a = frameLayout;
        this.f42456b = space;
        this.f42457c = frameLayout2;
        this.f42458d = linearLayout;
        this.f42459e = button;
        this.f42460f = constraintLayout;
        this.f42461g = themeableLottieAnimationView;
        this.f42462h = constraintLayout2;
        this.f42463i = textView;
        this.f42464j = view;
        this.f42465k = textView2;
        this.f42466l = textView3;
    }

    public static c a(View view) {
        View a10;
        int i10 = m4.f31382e;
        Space space = (Space) e4.a.a(view, i10);
        if (space != null) {
            i10 = m4.f31384f;
            FrameLayout frameLayout = (FrameLayout) e4.a.a(view, i10);
            if (frameLayout != null) {
                i10 = m4.f31386g;
                LinearLayout linearLayout = (LinearLayout) e4.a.a(view, i10);
                if (linearLayout != null) {
                    i10 = m4.f31400n;
                    Button button = (Button) e4.a.a(view, i10);
                    if (button != null) {
                        i10 = m4.f31410s;
                        ConstraintLayout constraintLayout = (ConstraintLayout) e4.a.a(view, i10);
                        if (constraintLayout != null) {
                            i10 = m4.P;
                            ThemeableLottieAnimationView themeableLottieAnimationView = (ThemeableLottieAnimationView) e4.a.a(view, i10);
                            if (themeableLottieAnimationView != null) {
                                i10 = m4.Q;
                                ConstraintLayout constraintLayout2 = (ConstraintLayout) e4.a.a(view, i10);
                                if (constraintLayout2 != null) {
                                    i10 = m4.f31405p0;
                                    TextView textView = (TextView) e4.a.a(view, i10);
                                    if (textView != null && (a10 = e4.a.a(view, (i10 = m4.f31417v0))) != null) {
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
        View inflate = layoutInflater.inflate(n4.f31546c, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public FrameLayout getRoot() {
        return this.f42455a;
    }
}
