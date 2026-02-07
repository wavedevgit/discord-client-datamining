package io.sentry.android.core.performance;

import android.os.Looper;
import android.os.SystemClock;
import io.sentry.ISpan;
import io.sentry.android.core.x;
import io.sentry.j1;
import io.sentry.j5;
import io.sentry.l8;
import java.util.concurrent.TimeUnit;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class b {

    /* renamed from: a  reason: collision with root package name */
    private final String f27378a;

    /* renamed from: b  reason: collision with root package name */
    private j5 f27379b = null;

    /* renamed from: c  reason: collision with root package name */
    private j5 f27380c = null;

    /* renamed from: d  reason: collision with root package name */
    private ISpan f27381d = null;

    /* renamed from: e  reason: collision with root package name */
    private ISpan f27382e = null;

    public b(String str) {
        this.f27378a = str;
    }

    private ISpan d(ISpan iSpan, String str, j5 j5Var) {
        ISpan l10 = iSpan.l("activity.load", str, j5Var, j1.SENTRY);
        f(l10);
        return l10;
    }

    private void f(ISpan iSpan) {
        iSpan.j("thread.id", Long.valueOf(Looper.getMainLooper().getThread().getId()));
        iSpan.j("thread.name", "main");
        Boolean bool = Boolean.TRUE;
        iSpan.j("ui.contributes_to_ttid", bool);
        iSpan.j("ui.contributes_to_ttfd", bool);
    }

    public void a() {
        ISpan iSpan = this.f27381d;
        if (iSpan != null && !iSpan.isFinished()) {
            this.f27381d.k(l8.CANCELLED);
        }
        this.f27381d = null;
        ISpan iSpan2 = this.f27382e;
        if (iSpan2 != null && !iSpan2.isFinished()) {
            this.f27382e.k(l8.CANCELLED);
        }
        this.f27382e = null;
    }

    public void b(ISpan iSpan) {
        if (this.f27379b != null && iSpan != null) {
            ISpan d10 = d(iSpan, this.f27378a + ".onCreate", this.f27379b);
            this.f27381d = d10;
            d10.d();
        }
    }

    public void c(ISpan iSpan) {
        if (this.f27380c != null && iSpan != null) {
            ISpan d10 = d(iSpan, this.f27378a + ".onStart", this.f27380c);
            this.f27382e = d10;
            d10.d();
        }
    }

    public void e() {
        ISpan iSpan = this.f27381d;
        if (iSpan != null && this.f27382e != null) {
            j5 r10 = iSpan.r();
            j5 r11 = this.f27382e.r();
            if (r10 != null && r11 != null) {
                long uptimeMillis = SystemClock.uptimeMillis();
                j5 a10 = x.a();
                TimeUnit timeUnit = TimeUnit.NANOSECONDS;
                long millis = timeUnit.toMillis(a10.d(this.f27381d.t()));
                long millis2 = timeUnit.toMillis(a10.d(r10));
                long millis3 = timeUnit.toMillis(a10.d(this.f27382e.t()));
                long millis4 = timeUnit.toMillis(a10.d(r11));
                c cVar = new c();
                cVar.d().u(this.f27381d.getDescription(), timeUnit.toMillis(this.f27381d.t().h()), uptimeMillis - millis, uptimeMillis - millis2);
                cVar.e().u(this.f27382e.getDescription(), timeUnit.toMillis(this.f27382e.t().h()), uptimeMillis - millis3, uptimeMillis - millis4);
                h.q().e(cVar);
            }
        }
    }

    public void g(j5 j5Var) {
        this.f27379b = j5Var;
    }

    public void h(j5 j5Var) {
        this.f27380c = j5Var;
    }
}
