package iq;

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
import hq.f1;
import hq.g1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final FrameLayout f31060a;

    /* renamed from: b  reason: collision with root package name */
    public final FrameLayout f31061b;

    /* renamed from: c  reason: collision with root package name */
    public final Button f31062c;

    /* renamed from: d  reason: collision with root package name */
    public final ImageView f31063d;

    /* renamed from: e  reason: collision with root package name */
    public final Flow f31064e;

    /* renamed from: f  reason: collision with root package name */
    public final Button f31065f;

    /* renamed from: g  reason: collision with root package name */
    public final View f31066g;

    /* renamed from: h  reason: collision with root package name */
    public final SignatureView f31067h;

    /* renamed from: i  reason: collision with root package name */
    public final TextView f31068i;

    /* renamed from: j  reason: collision with root package name */
    public final TextView f31069j;

    /* renamed from: k  reason: collision with root package name */
    public final ConstraintLayout f31070k;

    private b(FrameLayout frameLayout, FrameLayout frameLayout2, Button button, ImageView imageView, Flow flow, Button button2, View view, SignatureView signatureView, TextView textView, TextView textView2, ConstraintLayout constraintLayout) {
        this.f31060a = frameLayout;
        this.f31061b = frameLayout2;
        this.f31062c = button;
        this.f31063d = imageView;
        this.f31064e = flow;
        this.f31065f = button2;
        this.f31066g = view;
        this.f31067h = signatureView;
        this.f31068i = textView;
        this.f31069j = textView2;
        this.f31070k = constraintLayout;
    }

    public static b a(View view) {
        View a10;
        int i10 = f1.f27717a;
        FrameLayout frameLayout = (FrameLayout) e4.a.a(view, i10);
        if (frameLayout != null) {
            i10 = f1.f27718b;
            Button button = (Button) e4.a.a(view, i10);
            if (button != null) {
                i10 = f1.f27719c;
                ImageView imageView = (ImageView) e4.a.a(view, i10);
                if (imageView != null) {
                    i10 = f1.f27721e;
                    Flow flow = (Flow) e4.a.a(view, i10);
                    if (flow != null) {
                        i10 = f1.f27732p;
                        Button button2 = (Button) e4.a.a(view, i10);
                        if (button2 != null && (a10 = e4.a.a(view, (i10 = f1.f27733q))) != null) {
                            i10 = f1.f27734r;
                            SignatureView signatureView = (SignatureView) e4.a.a(view, i10);
                            if (signatureView != null) {
                                i10 = f1.f27735s;
                                TextView textView = (TextView) e4.a.a(view, i10);
                                if (textView != null) {
                                    i10 = f1.f27736t;
                                    TextView textView2 = (TextView) e4.a.a(view, i10);
                                    if (textView2 != null) {
                                        i10 = f1.f27737u;
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
        View inflate = layoutInflater.inflate(g1.f27767b, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public FrameLayout getRoot() {
        return this.f31060a;
    }
}
