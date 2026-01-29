package hh;

import android.os.Bundle;
import android.view.View;
import android.view.ViewParent;
import androidx.coordinatorlayout.widget.CoordinatorLayout;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final View f27528a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f27529b = false;

    /* renamed from: c  reason: collision with root package name */
    private int f27530c = 0;

    public b(a aVar) {
        this.f27528a = (View) aVar;
    }

    private void a() {
        ViewParent parent = this.f27528a.getParent();
        if (parent instanceof CoordinatorLayout) {
            ((CoordinatorLayout) parent).g(this.f27528a);
        }
    }

    public int b() {
        return this.f27530c;
    }

    public boolean c() {
        return this.f27529b;
    }

    public void d(Bundle bundle) {
        this.f27529b = bundle.getBoolean("expanded", false);
        this.f27530c = bundle.getInt("expandedComponentIdHint", 0);
        if (this.f27529b) {
            a();
        }
    }

    public Bundle e() {
        Bundle bundle = new Bundle();
        bundle.putBoolean("expanded", this.f27529b);
        bundle.putInt("expandedComponentIdHint", this.f27530c);
        return bundle;
    }

    public void f(int i10) {
        this.f27530c = i10;
    }
}
