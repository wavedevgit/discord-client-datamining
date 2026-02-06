package no;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.viewbinding.ViewBinding;
import jo.m4;
import jo.n4;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final ConstraintLayout f41002a;

    /* renamed from: b  reason: collision with root package name */
    public final ImageView f41003b;

    /* renamed from: c  reason: collision with root package name */
    public final ImageView f41004c;

    /* renamed from: d  reason: collision with root package name */
    public final ConstraintLayout f41005d;

    /* renamed from: e  reason: collision with root package name */
    public final TextView f41006e;

    /* renamed from: f  reason: collision with root package name */
    public final ConstraintLayout f41007f;

    private e(ConstraintLayout constraintLayout, ImageView imageView, ImageView imageView2, ConstraintLayout constraintLayout2, TextView textView, ConstraintLayout constraintLayout3) {
        this.f41002a = constraintLayout;
        this.f41003b = imageView;
        this.f41004c = imageView2;
        this.f41005d = constraintLayout2;
        this.f41006e = textView;
        this.f41007f = constraintLayout3;
    }

    public static e a(View view) {
        int i10 = m4.f30407q;
        ImageView imageView = (ImageView) e4.a.a(view, i10);
        if (imageView != null) {
            i10 = m4.J;
            ImageView imageView2 = (ImageView) e4.a.a(view, i10);
            if (imageView2 != null) {
                i10 = m4.K;
                ConstraintLayout constraintLayout = (ConstraintLayout) e4.a.a(view, i10);
                if (constraintLayout != null) {
                    i10 = m4.V;
                    TextView textView = (TextView) e4.a.a(view, i10);
                    if (textView != null) {
                        ConstraintLayout constraintLayout2 = (ConstraintLayout) view;
                        return new e(constraintLayout2, imageView, imageView2, constraintLayout, textView, constraintLayout2);
                    }
                }
            }
        }
        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i10)));
    }

    public static e c(LayoutInflater layoutInflater, ViewGroup viewGroup, boolean z10) {
        View inflate = layoutInflater.inflate(n4.f30549e, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public ConstraintLayout getRoot() {
        return this.f41002a;
    }
}
