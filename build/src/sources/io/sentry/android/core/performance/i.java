package io.sentry.android.core.performance;

import android.os.SystemClock;
import io.sentry.b7;
import io.sentry.j5;
import io.sentry.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class i implements Comparable {

    /* renamed from: d  reason: collision with root package name */
    private String f27356d;

    /* renamed from: e  reason: collision with root package name */
    private long f27357e;

    /* renamed from: i  reason: collision with root package name */
    private long f27358i;

    /* renamed from: o  reason: collision with root package name */
    private long f27359o;

    @Override // java.lang.Comparable
    /* renamed from: a */
    public int compareTo(i iVar) {
        return Long.compare(this.f27357e, iVar.f27357e);
    }

    public String d() {
        return this.f27356d;
    }

    public long e() {
        if (r()) {
            return this.f27359o - this.f27358i;
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
            return this.f27357e + e();
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
        return this.f27357e;
    }

    public double k() {
        return k.j(this.f27357e);
    }

    public long m() {
        return this.f27358i;
    }

    public boolean n() {
        if (this.f27358i == 0) {
            return true;
        }
        return false;
    }

    public boolean o() {
        if (this.f27359o == 0) {
            return true;
        }
        return false;
    }

    public boolean q() {
        if (this.f27358i != 0) {
            return true;
        }
        return false;
    }

    public boolean r() {
        if (this.f27359o != 0) {
            return true;
        }
        return false;
    }

    public void s() {
        this.f27356d = null;
        this.f27358i = 0L;
        this.f27359o = 0L;
        this.f27357e = 0L;
    }

    public void t(long j10) {
        this.f27358i = j10;
        this.f27357e = System.currentTimeMillis() - (SystemClock.uptimeMillis() - this.f27358i);
    }

    public void u(String str, long j10, long j11, long j12) {
        this.f27356d = str;
        this.f27357e = j10;
        this.f27358i = j11;
        this.f27359o = j12;
    }

    public void v() {
        this.f27358i = SystemClock.uptimeMillis();
        this.f27357e = System.currentTimeMillis();
    }

    public void w() {
        this.f27359o = SystemClock.uptimeMillis();
    }
}
