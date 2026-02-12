package mh;

import android.os.Bundle;
import android.view.View;
import android.view.ViewParent;
import androidx.coordinatorlayout.widget.CoordinatorLayout;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final View f36482a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f36483b = false;

    /* renamed from: c  reason: collision with root package name */
    private int f36484c = 0;

    public b(a aVar) {
        this.f36482a = (View) aVar;
    }

    private void a() {
        ViewParent parent = this.f36482a.getParent();
        if (parent instanceof CoordinatorLayout) {
            ((CoordinatorLayout) parent).k(this.f36482a);
        }
    }

    public int b() {
        return this.f36484c;
    }

    public boolean c() {
        return this.f36483b;
    }

    public void d(Bundle bundle) {
        this.f36483b = bundle.getBoolean("expanded", false);
        this.f36484c = bundle.getInt("expandedComponentIdHint", 0);
        if (this.f36483b) {
            a();
        }
    }

    public Bundle e() {
        Bundle bundle = new Bundle();
        bundle.putBoolean("expanded", this.f36483b);
        bundle.putInt("expandedComponentIdHint", this.f36484c);
        return bundle;
    }

    public void f(int i10) {
        this.f36484c = i10;
    }
}
