package io.sentry.android.core.performance;

import android.os.SystemClock;
import io.sentry.b7;
import io.sentry.j5;
import io.sentry.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class i implements Comparable {

    /* renamed from: d  reason: collision with root package name */
    private String f28540d;

    /* renamed from: e  reason: collision with root package name */
    private long f28541e;

    /* renamed from: i  reason: collision with root package name */
    private long f28542i;

    /* renamed from: o  reason: collision with root package name */
    private long f28543o;

    @Override // java.lang.Comparable
    /* renamed from: a */
    public int compareTo(i iVar) {
        return Long.compare(this.f28541e, iVar.f28541e);
    }

    public String d() {
        return this.f28540d;
    }

    public long e() {
        if (r()) {
            return this.f28543o - this.f28542i;
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
            return this.f28541e + e();
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
        return this.f28541e;
    }

    public double l() {
        return k.j(this.f28541e);
    }

    public long m() {
        return this.f28542i;
    }

    public boolean n() {
        if (this.f28542i == 0) {
            return true;
        }
        return false;
    }

    public boolean o() {
        if (this.f28543o == 0) {
            return true;
        }
        return false;
    }

    public boolean q() {
        if (this.f28542i != 0) {
            return true;
        }
        return false;
    }

    public boolean r() {
        if (this.f28543o != 0) {
            return true;
        }
        return false;
    }

    public void s() {
        this.f28540d = null;
        this.f28542i = 0L;
        this.f28543o = 0L;
        this.f28541e = 0L;
    }

    public void t(long j10) {
        this.f28542i = j10;
        this.f28541e = System.currentTimeMillis() - (SystemClock.uptimeMillis() - this.f28542i);
    }

    public void u(String str, long j10, long j11, long j12) {
        this.f28540d = str;
        this.f28541e = j10;
        this.f28542i = j11;
        this.f28543o = j12;
    }

    public void v() {
        this.f28542i = SystemClock.uptimeMillis();
        this.f28541e = System.currentTimeMillis();
    }

    public void w() {
        this.f28543o = SystemClock.uptimeMillis();
    }
}
