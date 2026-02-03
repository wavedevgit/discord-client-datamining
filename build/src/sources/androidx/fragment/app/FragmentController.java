package androidx.fragment.app;

import android.content.Context;
import android.util.AttributeSet;
import android.view.MenuItem;
import android.view.View;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class FragmentController {

    /* renamed from: a  reason: collision with root package name */
    private final FragmentHostCallback f4122a;

    private FragmentController(FragmentHostCallback fragmentHostCallback) {
        this.f4122a = fragmentHostCallback;
    }

    public static FragmentController b(FragmentHostCallback fragmentHostCallback) {
        return new FragmentController((FragmentHostCallback) b2.e.h(fragmentHostCallback, "callbacks == null"));
    }

    public void a(Fragment fragment) {
        FragmentManager h10 = this.f4122a.h();
        FragmentHostCallback fragmentHostCallback = this.f4122a;
        h10.p(fragmentHostCallback, fragmentHostCallback, fragment);
    }

    public void c() {
        this.f4122a.h().C();
    }

    public boolean d(MenuItem menuItem) {
        return this.f4122a.h().F(menuItem);
    }

    public void e() {
        this.f4122a.h().G();
    }

    public void f() {
        this.f4122a.h().I();
    }

    public void g() {
        this.f4122a.h().R();
    }

    public void h() {
        this.f4122a.h().V();
    }

    public void i() {
        this.f4122a.h().W();
    }

    public void j() {
        this.f4122a.h().Y();
    }

    public boolean k() {
        return this.f4122a.h().f0(true);
    }

    public FragmentManager l() {
        return this.f4122a.h();
    }

    public void m() {
        this.f4122a.h().a1();
    }

    public View n(View view, String str, Context context, AttributeSet attributeSet) {
        return this.f4122a.h().C0().onCreateView(view, str, context, attributeSet);
    }
}
