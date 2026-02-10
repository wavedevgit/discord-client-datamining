package jq;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.viewbinding.ViewBinding;
import com.google.android.material.card.MaterialCardView;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class v implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final ConstraintLayout f30406a;

    /* renamed from: b  reason: collision with root package name */
    public final TextView f30407b;

    /* renamed from: c  reason: collision with root package name */
    public final ImageView f30408c;

    /* renamed from: d  reason: collision with root package name */
    public final TextView f30409d;

    /* renamed from: e  reason: collision with root package name */
    public final TextView f30410e;

    /* renamed from: f  reason: collision with root package name */
    public final MaterialCardView f30411f;

    /* renamed from: g  reason: collision with root package name */
    public final ImageView f30412g;

    private v(ConstraintLayout constraintLayout, TextView textView, ImageView imageView, TextView textView2, TextView textView3, MaterialCardView materialCardView, ImageView imageView2) {
        this.f30406a = constraintLayout;
        this.f30407b = textView;
        this.f30408c = imageView;
        this.f30409d = textView2;
        this.f30410e = textView3;
        this.f30411f = materialCardView;
        this.f30412g = imageView2;
    }

    public static v a(View view) {
        int i10 = eq.e.f21972a;
        TextView textView = (TextView) e4.a.a(view, i10);
        if (textView != null) {
            i10 = eq.e.f22020y;
            ImageView imageView = (ImageView) e4.a.a(view, i10);
            if (imageView != null) {
                i10 = eq.e.E;
                TextView textView2 = (TextView) e4.a.a(view, i10);
                if (textView2 != null) {
                    i10 = eq.e.V;
                    TextView textView3 = (TextView) e4.a.a(view, i10);
                    if (textView3 != null) {
                        i10 = eq.e.f22019x0;
                        MaterialCardView materialCardView = (MaterialCardView) e4.a.a(view, i10);
                        if (materialCardView != null) {
                            i10 = eq.e.f22021y0;
                            ImageView imageView2 = (ImageView) e4.a.a(view, i10);
                            if (imageView2 != null) {
                                return new v((ConstraintLayout) view, textView, imageView, textView2, textView3, materialCardView, imageView2);
                            }
                        }
                    }
                }
            }
        }
        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i10)));
    }

    public static v c(LayoutInflater layoutInflater) {
        return d(layoutInflater, null, false);
    }

    public static v d(LayoutInflater layoutInflater, ViewGroup viewGroup, boolean z10) {
        View inflate = layoutInflater.inflate(eq.f.f22046w, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public ConstraintLayout getRoot() {
        return this.f30406a;
    }
}
