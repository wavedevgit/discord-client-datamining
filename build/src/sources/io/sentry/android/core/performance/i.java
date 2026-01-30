package io.sentry.android.core.performance;

import android.os.SystemClock;
import io.sentry.b7;
import io.sentry.j5;
import io.sentry.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class i implements Comparable {

    /* renamed from: d  reason: collision with root package name */
    private String f29227d;

    /* renamed from: e  reason: collision with root package name */
    private long f29228e;

    /* renamed from: i  reason: collision with root package name */
    private long f29229i;

    /* renamed from: o  reason: collision with root package name */
    private long f29230o;

    @Override // java.lang.Comparable
    /* renamed from: a */
    public int compareTo(i iVar) {
        return Long.compare(this.f29228e, iVar.f29228e);
    }

    public String d() {
        return this.f29227d;
    }

    public long e() {
        if (r()) {
            return this.f29230o - this.f29229i;
        }
        return 0L;
    }

    public j5 f() {
        if (r()) {
            return new b7(k.i(g()));
        }
        return null;
    }

    public long g() {
        if (q()) {
            return this.f29228e + e();
        }
        return 0L;
    }

    public double h() {
        return k.j(g());
    }

    public j5 i() {
        if (q()) {
            return new b7(k.i(j()));
        }
        return null;
    }

    public long j() {
        return this.f29228e;
    }

    public double k() {
        return k.j(this.f29228e);
    }

    public long l() {
        return this.f29229i;
    }

    public boolean o() {
        if (this.f29229i == 0) {
            return true;
        }
        return false;
    }

    public boolean p() {
        if (this.f29230o == 0) {
            return true;
        }
        return false;
    }

    public boolean q() {
        if (this.f29229i != 0) {
            return true;
        }
        return false;
    }

    public boolean r() {
        if (this.f29230o != 0) {
            return true;
        }
        return false;
    }

    public void s() {
        this.f29227d = null;
        this.f29229i = 0L;
        this.f29230o = 0L;
        this.f29228e = 0L;
    }

    public void t(long j10) {
        this.f29229i = j10;
        this.f29228e = System.currentTimeMillis() - (SystemClock.uptimeMillis() - this.f29229i);
    }

    public void u(String str, long j10, long j11, long j12) {
        this.f29227d = str;
        this.f29228e = j10;
        this.f29229i = j11;
        this.f29230o = j12;
    }

    public void v() {
        this.f29229i = SystemClock.uptimeMillis();
        this.f29228e = System.currentTimeMillis();
    }

    public void w() {
        this.f29230o = SystemClock.uptimeMillis();
    }
}
