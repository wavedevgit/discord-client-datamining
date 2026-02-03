package op;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import androidx.viewbinding.ViewBinding;
import mp.m;
import mp.n;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final View f44395a;

    /* renamed from: b  reason: collision with root package name */
    public final ImageView f44396b;

    /* renamed from: c  reason: collision with root package name */
    public final ImageView f44397c;

    private c(View view, ImageView imageView, ImageView imageView2) {
        this.f44395a = view;
        this.f44396b = imageView;
        this.f44397c = imageView2;
    }

    public static c a(View view) {
        int i10 = m.f38993e;
        ImageView imageView = (ImageView) e4.a.a(view, i10);
        if (imageView != null) {
            i10 = m.f38994f;
            ImageView imageView2 = (ImageView) e4.a.a(view, i10);
            if (imageView2 != null) {
                return new c(view, imageView, imageView2);
            }
        }
        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i10)));
    }

    public static c b(LayoutInflater layoutInflater, ViewGroup viewGroup) {
        if (viewGroup != null) {
            layoutInflater.inflate(n.f39004c, viewGroup);
            return a(viewGroup);
        }
        throw new NullPointerException("parent");
    }

    @Override // androidx.viewbinding.ViewBinding
    public View getRoot() {
        return this.f44395a;
    }
}
