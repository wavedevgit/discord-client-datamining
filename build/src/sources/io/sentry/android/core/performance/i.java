package io.sentry.android.core.performance;

import android.os.SystemClock;
import io.sentry.b7;
import io.sentry.j5;
import io.sentry.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class i implements Comparable {

    /* renamed from: d  reason: collision with root package name */
    private String f29108d;

    /* renamed from: e  reason: collision with root package name */
    private long f29109e;

    /* renamed from: i  reason: collision with root package name */
    private long f29110i;

    /* renamed from: o  reason: collision with root package name */
    private long f29111o;

    @Override // java.lang.Comparable
    /* renamed from: a */
    public int compareTo(i iVar) {
        return Long.compare(this.f29109e, iVar.f29109e);
    }

    public String d() {
        return this.f29108d;
    }

    public long e() {
        if (r()) {
            return this.f29111o - this.f29110i;
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
            return this.f29109e + e();
        }
        return 0L;
    }

    public double h() {
        return k.j(g());
    }

    public j5 i() {
        if (q()) {
            return new b7(k.i(k()));
        }
        return null;
    }

    public long k() {
        return this.f29109e;
    }

    public double l() {
        return k.j(this.f29109e);
    }

    public long m() {
        return this.f29110i;
    }

    public boolean n() {
        if (this.f29110i == 0) {
            return true;
        }
        return false;
    }

    public boolean o() {
        if (this.f29111o == 0) {
            return true;
        }
        return false;
    }

    public boolean q() {
        if (this.f29110i != 0) {
            return true;
        }
        return false;
    }

    public boolean r() {
        if (this.f29111o != 0) {
            return true;
        }
        return false;
    }

    public void s() {
        this.f29108d = null;
        this.f29110i = 0L;
        this.f29111o = 0L;
        this.f29109e = 0L;
    }

    public void t(long j10) {
        this.f29110i = j10;
        this.f29109e = System.currentTimeMillis() - (SystemClock.uptimeMillis() - this.f29110i);
    }

    public void u(String str, long j10, long j11, long j12) {
        this.f29108d = str;
        this.f29109e = j10;
        this.f29110i = j11;
        this.f29111o = j12;
    }

    public void v() {
        this.f29110i = SystemClock.uptimeMillis();
        this.f29109e = System.currentTimeMillis();
    }

    public void w() {
        this.f29111o = SystemClock.uptimeMillis();
    }
}
