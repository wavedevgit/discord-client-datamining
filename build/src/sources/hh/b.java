package hh;

import android.os.Bundle;
import android.view.View;
import android.view.ViewParent;
import androidx.coordinatorlayout.widget.CoordinatorLayout;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final View f27002a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f27003b = false;

    /* renamed from: c  reason: collision with root package name */
    private int f27004c = 0;

    public b(a aVar) {
        this.f27002a = (View) aVar;
    }

    private void a() {
        ViewParent parent = this.f27002a.getParent();
        if (parent instanceof CoordinatorLayout) {
            ((CoordinatorLayout) parent).g(this.f27002a);
        }
    }

    public int b() {
        return this.f27004c;
    }

    public boolean c() {
        return this.f27003b;
    }

    public void d(Bundle bundle) {
        this.f27003b = bundle.getBoolean("expanded", false);
        this.f27004c = bundle.getInt("expandedComponentIdHint", 0);
        if (this.f27003b) {
            a();
        }
    }

    public Bundle e() {
        Bundle bundle = new Bundle();
        bundle.putBoolean("expanded", this.f27003b);
        bundle.putInt("expandedComponentIdHint", this.f27004c);
        return bundle;
    }

    public void f(int i10) {
        this.f27004c = i10;
    }
}
