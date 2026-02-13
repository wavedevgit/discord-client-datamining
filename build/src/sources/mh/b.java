package mh;

import android.os.Bundle;
import android.view.View;
import android.view.ViewParent;
import androidx.coordinatorlayout.widget.CoordinatorLayout;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final View f37050a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f37051b = false;

    /* renamed from: c  reason: collision with root package name */
    private int f37052c = 0;

    public b(a aVar) {
        this.f37050a = (View) aVar;
    }

    private void a() {
        ViewParent parent = this.f37050a.getParent();
        if (parent instanceof CoordinatorLayout) {
            ((CoordinatorLayout) parent).k(this.f37050a);
        }
    }

    public int b() {
        return this.f37052c;
    }

    public boolean c() {
        return this.f37051b;
    }

    public void d(Bundle bundle) {
        this.f37051b = bundle.getBoolean("expanded", false);
        this.f37052c = bundle.getInt("expandedComponentIdHint", 0);
        if (this.f37051b) {
            a();
        }
    }

    public Bundle e() {
        Bundle bundle = new Bundle();
        bundle.putBoolean("expanded", this.f37051b);
        bundle.putInt("expandedComponentIdHint", this.f37052c);
        return bundle;
    }

    public void f(int i10) {
        this.f37052c = i10;
    }
}
