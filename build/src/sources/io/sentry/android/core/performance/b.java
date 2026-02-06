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
    private final String f27330a;

    /* renamed from: b  reason: collision with root package name */
    private j5 f27331b = null;

    /* renamed from: c  reason: collision with root package name */
    private j5 f27332c = null;

    /* renamed from: d  reason: collision with root package name */
    private ISpan f27333d = null;

    /* renamed from: e  reason: collision with root package name */
    private ISpan f27334e = null;

    public b(String str) {
        this.f27330a = str;
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
        ISpan iSpan = this.f27333d;
        if (iSpan != null && !iSpan.isFinished()) {
            this.f27333d.k(l8.CANCELLED);
        }
        this.f27333d = null;
        ISpan iSpan2 = this.f27334e;
        if (iSpan2 != null && !iSpan2.isFinished()) {
            this.f27334e.k(l8.CANCELLED);
        }
        this.f27334e = null;
    }

    public void b(ISpan iSpan) {
        if (this.f27331b != null && iSpan != null) {
            ISpan d10 = d(iSpan, this.f27330a + ".onCreate", this.f27331b);
            this.f27333d = d10;
            d10.d();
        }
    }

    public void c(ISpan iSpan) {
        if (this.f27332c != null && iSpan != null) {
            ISpan d10 = d(iSpan, this.f27330a + ".onStart", this.f27332c);
            this.f27334e = d10;
            d10.d();
        }
    }

    public void e() {
        ISpan iSpan = this.f27333d;
        if (iSpan != null && this.f27334e != null) {
            j5 r10 = iSpan.r();
            j5 r11 = this.f27334e.r();
            if (r10 != null && r11 != null) {
                long uptimeMillis = SystemClock.uptimeMillis();
                j5 a10 = x.a();
                TimeUnit timeUnit = TimeUnit.NANOSECONDS;
                long millis = timeUnit.toMillis(a10.d(this.f27333d.t()));
                long millis2 = timeUnit.toMillis(a10.d(r10));
                long millis3 = timeUnit.toMillis(a10.d(this.f27334e.t()));
                long millis4 = timeUnit.toMillis(a10.d(r11));
                c cVar = new c();
                cVar.d().u(this.f27333d.getDescription(), timeUnit.toMillis(this.f27333d.t().h()), uptimeMillis - millis, uptimeMillis - millis2);
                cVar.e().u(this.f27334e.getDescription(), timeUnit.toMillis(this.f27334e.t().h()), uptimeMillis - millis3, uptimeMillis - millis4);
                h.q().e(cVar);
            }
        }
    }

    public void g(j5 j5Var) {
        this.f27331b = j5Var;
    }

    public void h(j5 j5Var) {
        this.f27332c = j5Var;
    }
}
