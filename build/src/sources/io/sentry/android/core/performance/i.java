package io.sentry.android.core.performance;

import android.os.SystemClock;
import io.sentry.b7;
import io.sentry.j5;
import io.sentry.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class i implements Comparable {

    /* renamed from: d  reason: collision with root package name */
    private String f28539d;

    /* renamed from: e  reason: collision with root package name */
    private long f28540e;

    /* renamed from: i  reason: collision with root package name */
    private long f28541i;

    /* renamed from: o  reason: collision with root package name */
    private long f28542o;

    @Override // java.lang.Comparable
    /* renamed from: a */
    public int compareTo(i iVar) {
        return Long.compare(this.f28540e, iVar.f28540e);
    }

    public String d() {
        return this.f28539d;
    }

    public long e() {
        if (r()) {
            return this.f28542o - this.f28541i;
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
            return this.f28540e + e();
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
        return this.f28540e;
    }

    public double l() {
        return k.j(this.f28540e);
    }

    public long m() {
        return this.f28541i;
    }

    public boolean n() {
        if (this.f28541i == 0) {
            return true;
        }
        return false;
    }

    public boolean o() {
        if (this.f28542o == 0) {
            return true;
        }
        return false;
    }

    public boolean q() {
        if (this.f28541i != 0) {
            return true;
        }
        return false;
    }

    public boolean r() {
        if (this.f28542o != 0) {
            return true;
        }
        return false;
    }

    public void s() {
        this.f28539d = null;
        this.f28541i = 0L;
        this.f28542o = 0L;
        this.f28540e = 0L;
    }

    public void t(long j10) {
        this.f28541i = j10;
        this.f28540e = System.currentTimeMillis() - (SystemClock.uptimeMillis() - this.f28541i);
    }

    public void u(String str, long j10, long j11, long j12) {
        this.f28539d = str;
        this.f28540e = j10;
        this.f28541i = j11;
        this.f28542o = j12;
    }

    public void v() {
        this.f28541i = SystemClock.uptimeMillis();
        this.f28540e = System.currentTimeMillis();
    }

    public void w() {
        this.f28542o = SystemClock.uptimeMillis();
    }
}
