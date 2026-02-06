package qq;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.FrameLayout;
import android.widget.ImageView;
import android.widget.TextView;
import androidx.constraintlayout.helper.widget.Flow;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.viewbinding.ViewBinding;
import com.withpersona.sdk2.inquiry.steps.ui.view.SignatureView;
import pq.f1;
import pq.g1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final FrameLayout f48001a;

    /* renamed from: b  reason: collision with root package name */
    public final FrameLayout f48002b;

    /* renamed from: c  reason: collision with root package name */
    public final Button f48003c;

    /* renamed from: d  reason: collision with root package name */
    public final ImageView f48004d;

    /* renamed from: e  reason: collision with root package name */
    public final Flow f48005e;

    /* renamed from: f  reason: collision with root package name */
    public final Button f48006f;

    /* renamed from: g  reason: collision with root package name */
    public final View f48007g;

    /* renamed from: h  reason: collision with root package name */
    public final SignatureView f48008h;

    /* renamed from: i  reason: collision with root package name */
    public final TextView f48009i;

    /* renamed from: j  reason: collision with root package name */
    public final TextView f48010j;

    /* renamed from: k  reason: collision with root package name */
    public final ConstraintLayout f48011k;

    private b(FrameLayout frameLayout, FrameLayout frameLayout2, Button button, ImageView imageView, Flow flow, Button button2, View view, SignatureView signatureView, TextView textView, TextView textView2, ConstraintLayout constraintLayout) {
        this.f48001a = frameLayout;
        this.f48002b = frameLayout2;
        this.f48003c = button;
        this.f48004d = imageView;
        this.f48005e = flow;
        this.f48006f = button2;
        this.f48007g = view;
        this.f48008h = signatureView;
        this.f48009i = textView;
        this.f48010j = textView2;
        this.f48011k = constraintLayout;
    }

    public static b a(View view) {
        View a10;
        int i10 = f1.f45187a;
        FrameLayout frameLayout = (FrameLayout) e4.a.a(view, i10);
        if (frameLayout != null) {
            i10 = f1.f45188b;
            Button button = (Button) e4.a.a(view, i10);
            if (button != null) {
                i10 = f1.f45189c;
                ImageView imageView = (ImageView) e4.a.a(view, i10);
                if (imageView != null) {
                    i10 = f1.f45191e;
                    Flow flow = (Flow) e4.a.a(view, i10);
                    if (flow != null) {
                        i10 = f1.f45202p;
                        Button button2 = (Button) e4.a.a(view, i10);
                        if (button2 != null && (a10 = e4.a.a(view, (i10 = f1.f45203q))) != null) {
                            i10 = f1.f45204r;
                            SignatureView signatureView = (SignatureView) e4.a.a(view, i10);
                            if (signatureView != null) {
                                i10 = f1.f45205s;
                                TextView textView = (TextView) e4.a.a(view, i10);
                                if (textView != null) {
                                    i10 = f1.f45206t;
                                    TextView textView2 = (TextView) e4.a.a(view, i10);
                                    if (textView2 != null) {
                                        i10 = f1.f45207u;
                                        ConstraintLayout constraintLayout = (ConstraintLayout) e4.a.a(view, i10);
                                        if (constraintLayout != null) {
                                            return new b((FrameLayout) view, frameLayout, button, imageView, flow, button2, a10, signatureView, textView, textView2, constraintLayout);
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

    public static b c(LayoutInflater layoutInflater, ViewGroup viewGroup, boolean z10) {
        View inflate = layoutInflater.inflate(g1.f45237b, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public FrameLayout getRoot() {
        return this.f48001a;
    }
}
