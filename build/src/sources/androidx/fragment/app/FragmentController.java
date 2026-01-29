package androidx.fragment.app;

import android.content.Context;
import android.util.AttributeSet;
import android.view.MenuItem;
import android.view.View;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class FragmentController {

    /* renamed from: a  reason: collision with root package name */
    private final FragmentHostCallback f4078a;

    private FragmentController(FragmentHostCallback fragmentHostCallback) {
        this.f4078a = fragmentHostCallback;
    }

    public static FragmentController b(FragmentHostCallback fragmentHostCallback) {
        return new FragmentController((FragmentHostCallback) b2.e.h(fragmentHostCallback, "callbacks == null"));
    }

    public void a(Fragment fragment) {
        FragmentManager h10 = this.f4078a.h();
        FragmentHostCallback fragmentHostCallback = this.f4078a;
        h10.p(fragmentHostCallback, fragmentHostCallback, fragment);
    }

    public void c() {
        this.f4078a.h().C();
    }

    public boolean d(MenuItem menuItem) {
        return this.f4078a.h().F(menuItem);
    }

    public void e() {
        this.f4078a.h().G();
    }

    public void f() {
        this.f4078a.h().I();
    }

    public void g() {
        this.f4078a.h().R();
    }

    public void h() {
        this.f4078a.h().V();
    }

    public void i() {
        this.f4078a.h().W();
    }

    public void j() {
        this.f4078a.h().Y();
    }

    public boolean k() {
        return this.f4078a.h().f0(true);
    }

    public FragmentManager l() {
        return this.f4078a.h();
    }

    public void m() {
        this.f4078a.h().a1();
    }

    public View n(View view, String str, Context context, AttributeSet attributeSet) {
        return this.f4078a.h().C0().onCreateView(view, str, context, attributeSet);
    }
}
