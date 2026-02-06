package jh;

import android.os.Bundle;
import android.view.View;
import android.view.ViewParent;
import androidx.coordinatorlayout.widget.CoordinatorLayout;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final View f29881a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f29882b = false;

    /* renamed from: c  reason: collision with root package name */
    private int f29883c = 0;

    public b(a aVar) {
        this.f29881a = (View) aVar;
    }

    private void a() {
        ViewParent parent = this.f29881a.getParent();
        if (parent instanceof CoordinatorLayout) {
            ((CoordinatorLayout) parent).g(this.f29881a);
        }
    }

    public int b() {
        return this.f29883c;
    }

    public boolean c() {
        return this.f29882b;
    }

    public void d(Bundle bundle) {
        this.f29882b = bundle.getBoolean("expanded", false);
        this.f29883c = bundle.getInt("expandedComponentIdHint", 0);
        if (this.f29882b) {
            a();
        }
    }

    public Bundle e() {
        Bundle bundle = new Bundle();
        bundle.putBoolean("expanded", this.f29882b);
        bundle.putInt("expandedComponentIdHint", this.f29883c);
        return bundle;
    }

    public void f(int i10) {
        this.f29883c = i10;
    }
}
