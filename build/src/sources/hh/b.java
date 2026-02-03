package hh;

import android.os.Bundle;
import android.view.View;
import android.view.ViewParent;
import androidx.coordinatorlayout.widget.CoordinatorLayout;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final View f27717a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f27718b = false;

    /* renamed from: c  reason: collision with root package name */
    private int f27719c = 0;

    public b(a aVar) {
        this.f27717a = (View) aVar;
    }

    private void a() {
        ViewParent parent = this.f27717a.getParent();
        if (parent instanceof CoordinatorLayout) {
            ((CoordinatorLayout) parent).g(this.f27717a);
        }
    }

    public int b() {
        return this.f27719c;
    }

    public boolean c() {
        return this.f27718b;
    }

    public void d(Bundle bundle) {
        this.f27718b = bundle.getBoolean("expanded", false);
        this.f27719c = bundle.getInt("expandedComponentIdHint", 0);
        if (this.f27718b) {
            a();
        }
    }

    public Bundle e() {
        Bundle bundle = new Bundle();
        bundle.putBoolean("expanded", this.f27718b);
        bundle.putInt("expandedComponentIdHint", this.f27719c);
        return bundle;
    }

    public void f(int i10) {
        this.f27719c = i10;
    }
}
