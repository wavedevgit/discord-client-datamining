package tp;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import androidx.viewbinding.ViewBinding;
import rp.n;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final ImageView f50805a;

    /* renamed from: b  reason: collision with root package name */
    public final ImageView f50806b;

    private f(ImageView imageView, ImageView imageView2) {
        this.f50805a = imageView;
        this.f50806b = imageView2;
    }

    public static f a(View view) {
        if (view != null) {
            ImageView imageView = (ImageView) view;
            return new f(imageView, imageView);
        }
        throw new NullPointerException("rootView");
    }

    public static f c(LayoutInflater layoutInflater) {
        return d(layoutInflater, null, false);
    }

    public static f d(LayoutInflater layoutInflater, ViewGroup viewGroup, boolean z10) {
        View inflate = layoutInflater.inflate(n.f49105f, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public ImageView getRoot() {
        return this.f50805a;
    }
}
