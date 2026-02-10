package io.sentry.android.core.performance;

import android.os.SystemClock;
import io.sentry.b7;
import io.sentry.j5;
import io.sentry.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class i implements Comparable {

    /* renamed from: d  reason: collision with root package name */
    private String f27604d;

    /* renamed from: e  reason: collision with root package name */
    private long f27605e;

    /* renamed from: i  reason: collision with root package name */
    private long f27606i;

    /* renamed from: o  reason: collision with root package name */
    private long f27607o;

    @Override // java.lang.Comparable
    /* renamed from: a */
    public int compareTo(i iVar) {
        return Long.compare(this.f27605e, iVar.f27605e);
    }

    public String d() {
        return this.f27604d;
    }

    public long e() {
        if (r()) {
            return this.f27607o - this.f27606i;
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
            return this.f27605e + e();
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
        return this.f27605e;
    }

    public double l() {
        return k.j(this.f27605e);
    }

    public long m() {
        return this.f27606i;
    }

    public boolean n() {
        if (this.f27606i == 0) {
            return true;
        }
        return false;
    }

    public boolean o() {
        if (this.f27607o == 0) {
            return true;
        }
        return false;
    }

    public boolean q() {
        if (this.f27606i != 0) {
            return true;
        }
        return false;
    }

    public boolean r() {
        if (this.f27607o != 0) {
            return true;
        }
        return false;
    }

    public void s() {
        this.f27604d = null;
        this.f27606i = 0L;
        this.f27607o = 0L;
        this.f27605e = 0L;
    }

    public void t(long j10) {
        this.f27606i = j10;
        this.f27605e = System.currentTimeMillis() - (SystemClock.uptimeMillis() - this.f27606i);
    }

    public void u(String str, long j10, long j11, long j12) {
        this.f27604d = str;
        this.f27605e = j10;
        this.f27606i = j11;
        this.f27607o = j12;
    }

    public void v() {
        this.f27606i = SystemClock.uptimeMillis();
        this.f27605e = System.currentTimeMillis();
    }

    public void w() {
        this.f27607o = SystemClock.uptimeMillis();
    }
}
