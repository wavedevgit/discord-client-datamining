package lp;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.viewbinding.ViewBinding;
import com.google.android.material.imageview.ShapeableImageView;
import kp.w0;
import kp.x0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final ConstraintLayout f37182a;

    /* renamed from: b  reason: collision with root package name */
    public final ShapeableImageView f37183b;

    /* renamed from: c  reason: collision with root package name */
    public final TextView f37184c;

    private g(ConstraintLayout constraintLayout, ShapeableImageView shapeableImageView, TextView textView) {
        this.f37182a = constraintLayout;
        this.f37183b = shapeableImageView;
        this.f37184c = textView;
    }

    public static g a(View view) {
        int i10 = w0.f35658x;
        ShapeableImageView shapeableImageView = (ShapeableImageView) e4.a.a(view, i10);
        if (shapeableImageView != null) {
            i10 = w0.C;
            TextView textView = (TextView) e4.a.a(view, i10);
            if (textView != null) {
                return new g((ConstraintLayout) view, shapeableImageView, textView);
            }
        }
        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i10)));
    }

    public static g c(LayoutInflater layoutInflater, ViewGroup viewGroup, boolean z10) {
        View inflate = layoutInflater.inflate(x0.f35679g, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public ConstraintLayout getRoot() {
        return this.f37182a;
    }
}
