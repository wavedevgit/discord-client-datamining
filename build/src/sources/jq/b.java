package jq;

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
import iq.f1;
import iq.g1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final FrameLayout f32139a;

    /* renamed from: b  reason: collision with root package name */
    public final FrameLayout f32140b;

    /* renamed from: c  reason: collision with root package name */
    public final Button f32141c;

    /* renamed from: d  reason: collision with root package name */
    public final ImageView f32142d;

    /* renamed from: e  reason: collision with root package name */
    public final Flow f32143e;

    /* renamed from: f  reason: collision with root package name */
    public final Button f32144f;

    /* renamed from: g  reason: collision with root package name */
    public final View f32145g;

    /* renamed from: h  reason: collision with root package name */
    public final SignatureView f32146h;

    /* renamed from: i  reason: collision with root package name */
    public final TextView f32147i;

    /* renamed from: j  reason: collision with root package name */
    public final TextView f32148j;

    /* renamed from: k  reason: collision with root package name */
    public final ConstraintLayout f32149k;

    private b(FrameLayout frameLayout, FrameLayout frameLayout2, Button button, ImageView imageView, Flow flow, Button button2, View view, SignatureView signatureView, TextView textView, TextView textView2, ConstraintLayout constraintLayout) {
        this.f32139a = frameLayout;
        this.f32140b = frameLayout2;
        this.f32141c = button;
        this.f32142d = imageView;
        this.f32143e = flow;
        this.f32144f = button2;
        this.f32145g = view;
        this.f32146h = signatureView;
        this.f32147i = textView;
        this.f32148j = textView2;
        this.f32149k = constraintLayout;
    }

    public static b a(View view) {
        View a10;
        int i10 = f1.f30696a;
        FrameLayout frameLayout = (FrameLayout) e4.a.a(view, i10);
        if (frameLayout != null) {
            i10 = f1.f30697b;
            Button button = (Button) e4.a.a(view, i10);
            if (button != null) {
                i10 = f1.f30698c;
                ImageView imageView = (ImageView) e4.a.a(view, i10);
                if (imageView != null) {
                    i10 = f1.f30700e;
                    Flow flow = (Flow) e4.a.a(view, i10);
                    if (flow != null) {
                        i10 = f1.f30711p;
                        Button button2 = (Button) e4.a.a(view, i10);
                        if (button2 != null && (a10 = e4.a.a(view, (i10 = f1.f30712q))) != null) {
                            i10 = f1.f30713r;
                            SignatureView signatureView = (SignatureView) e4.a.a(view, i10);
                            if (signatureView != null) {
                                i10 = f1.f30714s;
                                TextView textView = (TextView) e4.a.a(view, i10);
                                if (textView != null) {
                                    i10 = f1.f30715t;
                                    TextView textView2 = (TextView) e4.a.a(view, i10);
                                    if (textView2 != null) {
                                        i10 = f1.f30716u;
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
        View inflate = layoutInflater.inflate(g1.f30746b, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public FrameLayout getRoot() {
        return this.f32139a;
    }
}
