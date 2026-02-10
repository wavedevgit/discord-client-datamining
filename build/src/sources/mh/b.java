package mh;

import android.os.Bundle;
import android.view.View;
import android.view.ViewParent;
import androidx.coordinatorlayout.widget.CoordinatorLayout;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final View f36481a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f36482b = false;

    /* renamed from: c  reason: collision with root package name */
    private int f36483c = 0;

    public b(a aVar) {
        this.f36481a = (View) aVar;
    }

    private void a() {
        ViewParent parent = this.f36481a.getParent();
        if (parent instanceof CoordinatorLayout) {
            ((CoordinatorLayout) parent).k(this.f36481a);
        }
    }

    public int b() {
        return this.f36483c;
    }

    public boolean c() {
        return this.f36482b;
    }

    public void d(Bundle bundle) {
        this.f36482b = bundle.getBoolean("expanded", false);
        this.f36483c = bundle.getInt("expandedComponentIdHint", 0);
        if (this.f36482b) {
            a();
        }
    }

    public Bundle e() {
        Bundle bundle = new Bundle();
        bundle.putBoolean("expanded", this.f36482b);
        bundle.putInt("expandedComponentIdHint", this.f36483c);
        return bundle;
    }

    public void f(int i10) {
        this.f36483c = i10;
    }
}
