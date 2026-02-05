package rp;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import androidx.viewbinding.ViewBinding;
import pp.m;
import pp.n;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final View f48935a;

    /* renamed from: b  reason: collision with root package name */
    public final ImageView f48936b;

    /* renamed from: c  reason: collision with root package name */
    public final ImageView f48937c;

    private c(View view, ImageView imageView, ImageView imageView2) {
        this.f48935a = view;
        this.f48936b = imageView;
        this.f48937c = imageView2;
    }

    public static c a(View view) {
        int i10 = m.f46190e;
        ImageView imageView = (ImageView) e4.a.a(view, i10);
        if (imageView != null) {
            i10 = m.f46191f;
            ImageView imageView2 = (ImageView) e4.a.a(view, i10);
            if (imageView2 != null) {
                return new c(view, imageView, imageView2);
            }
        }
        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i10)));
    }

    public static c b(LayoutInflater layoutInflater, ViewGroup viewGroup) {
        if (viewGroup != null) {
            layoutInflater.inflate(n.f46201c, viewGroup);
            return a(viewGroup);
        }
        throw new NullPointerException("parent");
    }

    @Override // androidx.viewbinding.ViewBinding
    public View getRoot() {
        return this.f48935a;
    }
}
