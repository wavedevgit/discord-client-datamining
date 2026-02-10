package sq;

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
    private final ConstraintLayout f48290a;

    /* renamed from: b  reason: collision with root package name */
    public final TextView f48291b;

    /* renamed from: c  reason: collision with root package name */
    public final ImageView f48292c;

    /* renamed from: d  reason: collision with root package name */
    public final TextView f48293d;

    /* renamed from: e  reason: collision with root package name */
    public final TextView f48294e;

    /* renamed from: f  reason: collision with root package name */
    public final MaterialCardView f48295f;

    /* renamed from: g  reason: collision with root package name */
    public final ImageView f48296g;

    private v(ConstraintLayout constraintLayout, TextView textView, ImageView imageView, TextView textView2, TextView textView3, MaterialCardView materialCardView, ImageView imageView2) {
        this.f48290a = constraintLayout;
        this.f48291b = textView;
        this.f48292c = imageView;
        this.f48293d = textView2;
        this.f48294e = textView3;
        this.f48295f = materialCardView;
        this.f48296g = imageView2;
    }

    public static v a(View view) {
        int i10 = nq.e.f38248a;
        TextView textView = (TextView) e4.a.a(view, i10);
        if (textView != null) {
            i10 = nq.e.f38296y;
            ImageView imageView = (ImageView) e4.a.a(view, i10);
            if (imageView != null) {
                i10 = nq.e.E;
                TextView textView2 = (TextView) e4.a.a(view, i10);
                if (textView2 != null) {
                    i10 = nq.e.V;
                    TextView textView3 = (TextView) e4.a.a(view, i10);
                    if (textView3 != null) {
                        i10 = nq.e.f38295x0;
                        MaterialCardView materialCardView = (MaterialCardView) e4.a.a(view, i10);
                        if (materialCardView != null) {
                            i10 = nq.e.f38297y0;
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
        View inflate = layoutInflater.inflate(nq.f.f38322w, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public ConstraintLayout getRoot() {
        return this.f48290a;
    }
}
