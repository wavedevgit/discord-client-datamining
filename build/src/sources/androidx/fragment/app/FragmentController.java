package androidx.fragment.app;

import android.content.Context;
import android.util.AttributeSet;
import android.view.MenuItem;
import android.view.View;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class FragmentController {

    /* renamed from: a  reason: collision with root package name */
    private final FragmentHostCallback f4091a;

    private FragmentController(FragmentHostCallback fragmentHostCallback) {
        this.f4091a = fragmentHostCallback;
    }

    public static FragmentController b(FragmentHostCallback fragmentHostCallback) {
        return new FragmentController((FragmentHostCallback) b2.e.h(fragmentHostCallback, "callbacks == null"));
    }

    public void a(Fragment fragment) {
        FragmentManager g10 = this.f4091a.g();
        FragmentHostCallback fragmentHostCallback = this.f4091a;
        g10.p(fragmentHostCallback, fragmentHostCallback, fragment);
    }

    public void c() {
        this.f4091a.g().C();
    }

    public boolean d(MenuItem menuItem) {
        return this.f4091a.g().F(menuItem);
    }

    public void e() {
        this.f4091a.g().G();
    }

    public void f() {
        this.f4091a.g().I();
    }

    public void g() {
        this.f4091a.g().R();
    }

    public void h() {
        this.f4091a.g().V();
    }

    public void i() {
        this.f4091a.g().W();
    }

    public void j() {
        this.f4091a.g().Y();
    }

    public boolean k() {
        return this.f4091a.g().f0(true);
    }

    public FragmentManager l() {
        return this.f4091a.g();
    }

    public void m() {
        this.f4091a.g().a1();
    }

    public View n(View view, String str, Context context, AttributeSet attributeSet) {
        return this.f4091a.g().C0().onCreateView(view, str, context, attributeSet);
    }
}
