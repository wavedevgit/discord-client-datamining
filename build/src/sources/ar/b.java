package ar;

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
import zq.f1;
import zq.g1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final FrameLayout f6039a;

    /* renamed from: b  reason: collision with root package name */
    public final FrameLayout f6040b;

    /* renamed from: c  reason: collision with root package name */
    public final Button f6041c;

    /* renamed from: d  reason: collision with root package name */
    public final ImageView f6042d;

    /* renamed from: e  reason: collision with root package name */
    public final Flow f6043e;

    /* renamed from: f  reason: collision with root package name */
    public final Button f6044f;

    /* renamed from: g  reason: collision with root package name */
    public final View f6045g;

    /* renamed from: h  reason: collision with root package name */
    public final SignatureView f6046h;

    /* renamed from: i  reason: collision with root package name */
    public final TextView f6047i;

    /* renamed from: j  reason: collision with root package name */
    public final TextView f6048j;

    /* renamed from: k  reason: collision with root package name */
    public final ConstraintLayout f6049k;

    private b(FrameLayout frameLayout, FrameLayout frameLayout2, Button button, ImageView imageView, Flow flow, Button button2, View view, SignatureView signatureView, TextView textView, TextView textView2, ConstraintLayout constraintLayout) {
        this.f6039a = frameLayout;
        this.f6040b = frameLayout2;
        this.f6041c = button;
        this.f6042d = imageView;
        this.f6043e = flow;
        this.f6044f = button2;
        this.f6045g = view;
        this.f6046h = signatureView;
        this.f6047i = textView;
        this.f6048j = textView2;
        this.f6049k = constraintLayout;
    }

    public static b a(View view) {
        View a10;
        int i10 = f1.f56652a;
        FrameLayout frameLayout = (FrameLayout) e4.a.a(view, i10);
        if (frameLayout != null) {
            i10 = f1.f56653b;
            Button button = (Button) e4.a.a(view, i10);
            if (button != null) {
                i10 = f1.f56654c;
                ImageView imageView = (ImageView) e4.a.a(view, i10);
                if (imageView != null) {
                    i10 = f1.f56656e;
                    Flow flow = (Flow) e4.a.a(view, i10);
                    if (flow != null) {
                        i10 = f1.f56667p;
                        Button button2 = (Button) e4.a.a(view, i10);
                        if (button2 != null && (a10 = e4.a.a(view, (i10 = f1.f56668q))) != null) {
                            i10 = f1.f56669r;
                            SignatureView signatureView = (SignatureView) e4.a.a(view, i10);
                            if (signatureView != null) {
                                i10 = f1.f56670s;
                                TextView textView = (TextView) e4.a.a(view, i10);
                                if (textView != null) {
                                    i10 = f1.f56671t;
                                    TextView textView2 = (TextView) e4.a.a(view, i10);
                                    if (textView2 != null) {
                                        i10 = f1.f56672u;
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
        View inflate = layoutInflater.inflate(g1.f56702b, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public FrameLayout getRoot() {
        return this.f6039a;
    }
}
