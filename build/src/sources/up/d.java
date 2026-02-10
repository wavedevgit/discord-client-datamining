package up;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ProgressBar;
import androidx.viewbinding.ViewBinding;
import sp.m;
import sp.n;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final View f51754a;

    /* renamed from: b  reason: collision with root package name */
    public final ProgressBar f51755b;

    private d(View view, ProgressBar progressBar) {
        this.f51754a = view;
        this.f51755b = progressBar;
    }

    public static d a(View view) {
        int i10 = m.f49970k;
        ProgressBar progressBar = (ProgressBar) e4.a.a(view, i10);
        if (progressBar != null) {
            return new d(view, progressBar);
        }
        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i10)));
    }

    public static d b(LayoutInflater layoutInflater, ViewGroup viewGroup) {
        if (viewGroup != null) {
            layoutInflater.inflate(n.f49976d, viewGroup);
            return a(viewGroup);
        }
        throw new NullPointerException("parent");
    }

    @Override // androidx.viewbinding.ViewBinding
    public View getRoot() {
        return this.f51754a;
    }
}
