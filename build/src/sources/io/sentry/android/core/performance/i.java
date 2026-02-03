package io.sentry.android.core.performance;

import android.os.SystemClock;
import io.sentry.b7;
import io.sentry.j5;
import io.sentry.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class i implements Comparable {

    /* renamed from: d  reason: collision with root package name */
    private String f28793d;

    /* renamed from: e  reason: collision with root package name */
    private long f28794e;

    /* renamed from: i  reason: collision with root package name */
    private long f28795i;

    /* renamed from: o  reason: collision with root package name */
    private long f28796o;

    @Override // java.lang.Comparable
    /* renamed from: a */
    public int compareTo(i iVar) {
        return Long.compare(this.f28794e, iVar.f28794e);
    }

    public String d() {
        return this.f28793d;
    }

    public long e() {
        if (r()) {
            return this.f28796o - this.f28795i;
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
            return this.f28794e + e();
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
        return this.f28794e;
    }

    public double l() {
        return k.j(this.f28794e);
    }

    public long m() {
        return this.f28795i;
    }

    public boolean o() {
        if (this.f28795i == 0) {
            return true;
        }
        return false;
    }

    public boolean p() {
        if (this.f28796o == 0) {
            return true;
        }
        return false;
    }

    public boolean q() {
        if (this.f28795i != 0) {
            return true;
        }
        return false;
    }

    public boolean r() {
        if (this.f28796o != 0) {
            return true;
        }
        return false;
    }

    public void s() {
        this.f28793d = null;
        this.f28795i = 0L;
        this.f28796o = 0L;
        this.f28794e = 0L;
    }

    public void t(long j10) {
        this.f28795i = j10;
        this.f28794e = System.currentTimeMillis() - (SystemClock.uptimeMillis() - this.f28795i);
    }

    public void u(String str, long j10, long j11, long j12) {
        this.f28793d = str;
        this.f28794e = j10;
        this.f28795i = j11;
        this.f28796o = j12;
    }

    public void v() {
        this.f28795i = SystemClock.uptimeMillis();
        this.f28794e = System.currentTimeMillis();
    }

    public void w() {
        this.f28796o = SystemClock.uptimeMillis();
    }
}
