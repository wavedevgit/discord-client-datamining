package androidx.fragment.app;

import android.content.Context;
import android.util.AttributeSet;
import android.view.MenuItem;
import android.view.View;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class FragmentController {

    /* renamed from: a  reason: collision with root package name */
    private final FragmentHostCallback f4239a;

    private FragmentController(FragmentHostCallback fragmentHostCallback) {
        this.f4239a = fragmentHostCallback;
    }

    public static FragmentController b(FragmentHostCallback fragmentHostCallback) {
        return new FragmentController((FragmentHostCallback) b2.e.h(fragmentHostCallback, "callbacks == null"));
    }

    public void a(Fragment fragment) {
        FragmentManager h10 = this.f4239a.h();
        FragmentHostCallback fragmentHostCallback = this.f4239a;
        h10.q(fragmentHostCallback, fragmentHostCallback, fragment);
    }

    public void c() {
        this.f4239a.h().D();
    }

    public boolean d(MenuItem menuItem) {
        return this.f4239a.h().G(menuItem);
    }

    public void e() {
        this.f4239a.h().H();
    }

    public void f() {
        this.f4239a.h().J();
    }

    public void g() {
        this.f4239a.h().S();
    }

    public void h() {
        this.f4239a.h().W();
    }

    public void i() {
        this.f4239a.h().X();
    }

    public void j() {
        this.f4239a.h().Z();
    }

    public boolean k() {
        return this.f4239a.h().g0(true);
    }

    public FragmentManager l() {
        return this.f4239a.h();
    }

    public void m() {
        this.f4239a.h().b1();
    }

    public View n(View view, String str, Context context, AttributeSet attributeSet) {
        return this.f4239a.h().D0().onCreateView(view, str, context, attributeSet);
    }
}
