package oq;

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
import nq.f1;
import nq.g1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final FrameLayout f44189a;

    /* renamed from: b  reason: collision with root package name */
    public final FrameLayout f44190b;

    /* renamed from: c  reason: collision with root package name */
    public final Button f44191c;

    /* renamed from: d  reason: collision with root package name */
    public final ImageView f44192d;

    /* renamed from: e  reason: collision with root package name */
    public final Flow f44193e;

    /* renamed from: f  reason: collision with root package name */
    public final Button f44194f;

    /* renamed from: g  reason: collision with root package name */
    public final View f44195g;

    /* renamed from: h  reason: collision with root package name */
    public final SignatureView f44196h;

    /* renamed from: i  reason: collision with root package name */
    public final TextView f44197i;

    /* renamed from: j  reason: collision with root package name */
    public final TextView f44198j;

    /* renamed from: k  reason: collision with root package name */
    public final ConstraintLayout f44199k;

    private b(FrameLayout frameLayout, FrameLayout frameLayout2, Button button, ImageView imageView, Flow flow, Button button2, View view, SignatureView signatureView, TextView textView, TextView textView2, ConstraintLayout constraintLayout) {
        this.f44189a = frameLayout;
        this.f44190b = frameLayout2;
        this.f44191c = button;
        this.f44192d = imageView;
        this.f44193e = flow;
        this.f44194f = button2;
        this.f44195g = view;
        this.f44196h = signatureView;
        this.f44197i = textView;
        this.f44198j = textView2;
        this.f44199k = constraintLayout;
    }

    public static b a(View view) {
        View a10;
        int i10 = f1.f41499a;
        FrameLayout frameLayout = (FrameLayout) e4.a.a(view, i10);
        if (frameLayout != null) {
            i10 = f1.f41500b;
            Button button = (Button) e4.a.a(view, i10);
            if (button != null) {
                i10 = f1.f41501c;
                ImageView imageView = (ImageView) e4.a.a(view, i10);
                if (imageView != null) {
                    i10 = f1.f41503e;
                    Flow flow = (Flow) e4.a.a(view, i10);
                    if (flow != null) {
                        i10 = f1.f41514p;
                        Button button2 = (Button) e4.a.a(view, i10);
                        if (button2 != null && (a10 = e4.a.a(view, (i10 = f1.f41515q))) != null) {
                            i10 = f1.f41516r;
                            SignatureView signatureView = (SignatureView) e4.a.a(view, i10);
                            if (signatureView != null) {
                                i10 = f1.f41517s;
                                TextView textView = (TextView) e4.a.a(view, i10);
                                if (textView != null) {
                                    i10 = f1.f41518t;
                                    TextView textView2 = (TextView) e4.a.a(view, i10);
                                    if (textView2 != null) {
                                        i10 = f1.f41519u;
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
        View inflate = layoutInflater.inflate(g1.f41549b, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public FrameLayout getRoot() {
        return this.f44189a;
    }
}
