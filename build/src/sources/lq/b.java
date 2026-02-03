package lq;

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
import kq.f1;
import kq.g1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final FrameLayout f37077a;

    /* renamed from: b  reason: collision with root package name */
    public final FrameLayout f37078b;

    /* renamed from: c  reason: collision with root package name */
    public final Button f37079c;

    /* renamed from: d  reason: collision with root package name */
    public final ImageView f37080d;

    /* renamed from: e  reason: collision with root package name */
    public final Flow f37081e;

    /* renamed from: f  reason: collision with root package name */
    public final Button f37082f;

    /* renamed from: g  reason: collision with root package name */
    public final View f37083g;

    /* renamed from: h  reason: collision with root package name */
    public final SignatureView f37084h;

    /* renamed from: i  reason: collision with root package name */
    public final TextView f37085i;

    /* renamed from: j  reason: collision with root package name */
    public final TextView f37086j;

    /* renamed from: k  reason: collision with root package name */
    public final ConstraintLayout f37087k;

    private b(FrameLayout frameLayout, FrameLayout frameLayout2, Button button, ImageView imageView, Flow flow, Button button2, View view, SignatureView signatureView, TextView textView, TextView textView2, ConstraintLayout constraintLayout) {
        this.f37077a = frameLayout;
        this.f37078b = frameLayout2;
        this.f37079c = button;
        this.f37080d = imageView;
        this.f37081e = flow;
        this.f37082f = button2;
        this.f37083g = view;
        this.f37084h = signatureView;
        this.f37085i = textView;
        this.f37086j = textView2;
        this.f37087k = constraintLayout;
    }

    public static b a(View view) {
        View a10;
        int i10 = f1.f35694a;
        FrameLayout frameLayout = (FrameLayout) e4.a.a(view, i10);
        if (frameLayout != null) {
            i10 = f1.f35695b;
            Button button = (Button) e4.a.a(view, i10);
            if (button != null) {
                i10 = f1.f35696c;
                ImageView imageView = (ImageView) e4.a.a(view, i10);
                if (imageView != null) {
                    i10 = f1.f35698e;
                    Flow flow = (Flow) e4.a.a(view, i10);
                    if (flow != null) {
                        i10 = f1.f35709p;
                        Button button2 = (Button) e4.a.a(view, i10);
                        if (button2 != null && (a10 = e4.a.a(view, (i10 = f1.f35710q))) != null) {
                            i10 = f1.f35711r;
                            SignatureView signatureView = (SignatureView) e4.a.a(view, i10);
                            if (signatureView != null) {
                                i10 = f1.f35712s;
                                TextView textView = (TextView) e4.a.a(view, i10);
                                if (textView != null) {
                                    i10 = f1.f35713t;
                                    TextView textView2 = (TextView) e4.a.a(view, i10);
                                    if (textView2 != null) {
                                        i10 = f1.f35714u;
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
        View inflate = layoutInflater.inflate(g1.f35744b, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public FrameLayout getRoot() {
        return this.f37077a;
    }
}
