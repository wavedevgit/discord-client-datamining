package io.sentry.android.core.performance;

import android.os.SystemClock;
import io.sentry.b7;
import io.sentry.j5;
import io.sentry.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class i implements Comparable {

    /* renamed from: d  reason: collision with root package name */
    private String f27404d;

    /* renamed from: e  reason: collision with root package name */
    private long f27405e;

    /* renamed from: i  reason: collision with root package name */
    private long f27406i;

    /* renamed from: o  reason: collision with root package name */
    private long f27407o;

    @Override // java.lang.Comparable
    /* renamed from: a */
    public int compareTo(i iVar) {
        return Long.compare(this.f27405e, iVar.f27405e);
    }

    public String d() {
        return this.f27404d;
    }

    public long e() {
        if (r()) {
            return this.f27407o - this.f27406i;
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
            return this.f27405e + e();
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
        return this.f27405e;
    }

    public double k() {
        return k.j(this.f27405e);
    }

    public long m() {
        return this.f27406i;
    }

    public boolean n() {
        if (this.f27406i == 0) {
            return true;
        }
        return false;
    }

    public boolean o() {
        if (this.f27407o == 0) {
            return true;
        }
        return false;
    }

    public boolean q() {
        if (this.f27406i != 0) {
            return true;
        }
        return false;
    }

    public boolean r() {
        if (this.f27407o != 0) {
            return true;
        }
        return false;
    }

    public void s() {
        this.f27404d = null;
        this.f27406i = 0L;
        this.f27407o = 0L;
        this.f27405e = 0L;
    }

    public void t(long j10) {
        this.f27406i = j10;
        this.f27405e = System.currentTimeMillis() - (SystemClock.uptimeMillis() - this.f27406i);
    }

    public void u(String str, long j10, long j11, long j12) {
        this.f27404d = str;
        this.f27405e = j10;
        this.f27406i = j11;
        this.f27407o = j12;
    }

    public void v() {
        this.f27406i = SystemClock.uptimeMillis();
        this.f27405e = System.currentTimeMillis();
    }

    public void w() {
        this.f27407o = SystemClock.uptimeMillis();
    }
}
