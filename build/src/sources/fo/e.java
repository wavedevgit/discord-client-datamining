package fo;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.viewbinding.ViewBinding;
import ao.m4;
import ao.n4;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final ConstraintLayout f25349a;

    /* renamed from: b  reason: collision with root package name */
    public final ImageView f25350b;

    /* renamed from: c  reason: collision with root package name */
    public final ImageView f25351c;

    /* renamed from: d  reason: collision with root package name */
    public final ConstraintLayout f25352d;

    /* renamed from: e  reason: collision with root package name */
    public final TextView f25353e;

    /* renamed from: f  reason: collision with root package name */
    public final ConstraintLayout f25354f;

    private e(ConstraintLayout constraintLayout, ImageView imageView, ImageView imageView2, ConstraintLayout constraintLayout2, TextView textView, ConstraintLayout constraintLayout3) {
        this.f25349a = constraintLayout;
        this.f25350b = imageView;
        this.f25351c = imageView2;
        this.f25352d = constraintLayout2;
        this.f25353e = textView;
        this.f25354f = constraintLayout3;
    }

    public static e a(View view) {
        int i10 = m4.f6221q;
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
        View inflate = layoutInflater.inflate(n4.f6363e, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public ConstraintLayout getRoot() {
        return this.f25349a;
    }
}
