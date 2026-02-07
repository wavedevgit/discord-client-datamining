package jh;

import android.os.Bundle;
import android.view.View;
import android.view.ViewParent;
import androidx.coordinatorlayout.widget.CoordinatorLayout;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final View f29929a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f29930b = false;

    /* renamed from: c  reason: collision with root package name */
    private int f29931c = 0;

    public b(a aVar) {
        this.f29929a = (View) aVar;
    }

    private void a() {
        ViewParent parent = this.f29929a.getParent();
        if (parent instanceof CoordinatorLayout) {
            ((CoordinatorLayout) parent).g(this.f29929a);
        }
    }

    public int b() {
        return this.f29931c;
    }

    public boolean c() {
        return this.f29930b;
    }

    public void d(Bundle bundle) {
        this.f29930b = bundle.getBoolean("expanded", false);
        this.f29931c = bundle.getInt("expandedComponentIdHint", 0);
        if (this.f29930b) {
            a();
        }
    }

    public Bundle e() {
        Bundle bundle = new Bundle();
        bundle.putBoolean("expanded", this.f29930b);
        bundle.putInt("expandedComponentIdHint", this.f29931c);
        return bundle;
    }

    public void f(int i10) {
        this.f29931c = i10;
    }
}
