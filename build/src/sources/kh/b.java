package kh;

import android.os.Bundle;
import android.view.View;
import android.view.ViewParent;
import androidx.coordinatorlayout.widget.CoordinatorLayout;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final View f30880a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f30881b = false;

    /* renamed from: c  reason: collision with root package name */
    private int f30882c = 0;

    public b(a aVar) {
        this.f30880a = (View) aVar;
    }

    private void a() {
        ViewParent parent = this.f30880a.getParent();
        if (parent instanceof CoordinatorLayout) {
            ((CoordinatorLayout) parent).g(this.f30880a);
        }
    }

    public int b() {
        return this.f30882c;
    }

    public boolean c() {
        return this.f30881b;
    }

    public void d(Bundle bundle) {
        this.f30881b = bundle.getBoolean("expanded", false);
        this.f30882c = bundle.getInt("expandedComponentIdHint", 0);
        if (this.f30881b) {
            a();
        }
    }

    public Bundle e() {
        Bundle bundle = new Bundle();
        bundle.putBoolean("expanded", this.f30881b);
        bundle.putInt("expandedComponentIdHint", this.f30882c);
        return bundle;
    }

    public void f(int i10) {
        this.f30882c = i10;
    }
}
