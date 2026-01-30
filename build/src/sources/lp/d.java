package lp;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ProgressBar;
import androidx.viewbinding.ViewBinding;
import jp.m;
import jp.n;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final View f37434a;

    /* renamed from: b  reason: collision with root package name */
    public final ProgressBar f37435b;

    private d(View view, ProgressBar progressBar) {
        this.f37434a = view;
        this.f37435b = progressBar;
    }

    public static d a(View view) {
        int i10 = m.f32353k;
        ProgressBar progressBar = (ProgressBar) e4.a.a(view, i10);
        if (progressBar != null) {
            return new d(view, progressBar);
        }
        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i10)));
    }

    public static d b(LayoutInflater layoutInflater, ViewGroup viewGroup) {
        if (viewGroup != null) {
            layoutInflater.inflate(n.f32359d, viewGroup);
            return a(viewGroup);
        }
        throw new NullPointerException("parent");
    }

    @Override // androidx.viewbinding.ViewBinding
    public View getRoot() {
        return this.f37434a;
    }
}
