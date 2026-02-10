package rq;

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
import qq.f1;
import qq.g1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final FrameLayout f49167a;

    /* renamed from: b  reason: collision with root package name */
    public final FrameLayout f49168b;

    /* renamed from: c  reason: collision with root package name */
    public final Button f49169c;

    /* renamed from: d  reason: collision with root package name */
    public final ImageView f49170d;

    /* renamed from: e  reason: collision with root package name */
    public final Flow f49171e;

    /* renamed from: f  reason: collision with root package name */
    public final Button f49172f;

    /* renamed from: g  reason: collision with root package name */
    public final View f49173g;

    /* renamed from: h  reason: collision with root package name */
    public final SignatureView f49174h;

    /* renamed from: i  reason: collision with root package name */
    public final TextView f49175i;

    /* renamed from: j  reason: collision with root package name */
    public final TextView f49176j;

    /* renamed from: k  reason: collision with root package name */
    public final ConstraintLayout f49177k;

    private b(FrameLayout frameLayout, FrameLayout frameLayout2, Button button, ImageView imageView, Flow flow, Button button2, View view, SignatureView signatureView, TextView textView, TextView textView2, ConstraintLayout constraintLayout) {
        this.f49167a = frameLayout;
        this.f49168b = frameLayout2;
        this.f49169c = button;
        this.f49170d = imageView;
        this.f49171e = flow;
        this.f49172f = button2;
        this.f49173g = view;
        this.f49174h = signatureView;
        this.f49175i = textView;
        this.f49176j = textView2;
        this.f49177k = constraintLayout;
    }

    public static b a(View view) {
        View a10;
        int i10 = f1.f46749a;
        FrameLayout frameLayout = (FrameLayout) e4.a.a(view, i10);
        if (frameLayout != null) {
            i10 = f1.f46750b;
            Button button = (Button) e4.a.a(view, i10);
            if (button != null) {
                i10 = f1.f46751c;
                ImageView imageView = (ImageView) e4.a.a(view, i10);
                if (imageView != null) {
                    i10 = f1.f46753e;
                    Flow flow = (Flow) e4.a.a(view, i10);
                    if (flow != null) {
                        i10 = f1.f46764p;
                        Button button2 = (Button) e4.a.a(view, i10);
                        if (button2 != null && (a10 = e4.a.a(view, (i10 = f1.f46765q))) != null) {
                            i10 = f1.f46766r;
                            SignatureView signatureView = (SignatureView) e4.a.a(view, i10);
                            if (signatureView != null) {
                                i10 = f1.f46767s;
                                TextView textView = (TextView) e4.a.a(view, i10);
                                if (textView != null) {
                                    i10 = f1.f46768t;
                                    TextView textView2 = (TextView) e4.a.a(view, i10);
                                    if (textView2 != null) {
                                        i10 = f1.f46769u;
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
        View inflate = layoutInflater.inflate(g1.f46799b, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public FrameLayout getRoot() {
        return this.f49167a;
    }
}
