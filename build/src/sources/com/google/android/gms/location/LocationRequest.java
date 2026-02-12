package com.google.android.gms.location;

import android.os.Parcel;
import android.os.Parcelable;
import android.os.SystemClock;
import android.os.WorkSource;
import androidx.annotation.NonNull;
import com.google.android.gms.common.internal.ReflectedParcelable;
import hf.o;
import hf.q;
import jf.c;
import kotlin.jvm.internal.LongCompanionObject;
import mg.p;
import vg.m;
import vg.n;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class LocationRequest extends jf.a implements ReflectedParcelable {
    @NonNull
    public static final Parcelable.Creator<LocationRequest> CREATOR = new com.google.android.gms.location.a();

    /* renamed from: d  reason: collision with root package name */
    private int f15115d;

    /* renamed from: e  reason: collision with root package name */
    private long f15116e;

    /* renamed from: i  reason: collision with root package name */
    private long f15117i;

    /* renamed from: o  reason: collision with root package name */
    private long f15118o;

    /* renamed from: p  reason: collision with root package name */
    private long f15119p;

    /* renamed from: q  reason: collision with root package name */
    private int f15120q;

    /* renamed from: r  reason: collision with root package name */
    private float f15121r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f15122s;

    /* renamed from: t  reason: collision with root package name */
    private long f15123t;

    /* renamed from: u  reason: collision with root package name */
    private final int f15124u;

    /* renamed from: v  reason: collision with root package name */
    private final int f15125v;

    /* renamed from: w  reason: collision with root package name */
    private final boolean f15126w;

    /* renamed from: x  reason: collision with root package name */
    private final WorkSource f15127x;

    /* renamed from: y  reason: collision with root package name */
    private final p f15128y;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: b  reason: collision with root package name */
        private long f15130b;

        /* renamed from: a  reason: collision with root package name */
        private int f15129a = 102;

        /* renamed from: c  reason: collision with root package name */
        private long f15131c = -1;

        /* renamed from: d  reason: collision with root package name */
        private long f15132d = 0;

        /* renamed from: e  reason: collision with root package name */
        private long f15133e = LongCompanionObject.MAX_VALUE;

        /* renamed from: f  reason: collision with root package name */
        private int f15134f = Integer.MAX_VALUE;

        /* renamed from: g  reason: collision with root package name */
        private float f15135g = 0.0f;

        /* renamed from: h  reason: collision with root package name */
        private boolean f15136h = true;

        /* renamed from: i  reason: collision with root package name */
        private long f15137i = -1;

        /* renamed from: j  reason: collision with root package name */
        private int f15138j = 0;

        /* renamed from: k  reason: collision with root package name */
        private int f15139k = 0;

        /* renamed from: l  reason: collision with root package name */
        private boolean f15140l = false;

        /* renamed from: m  reason: collision with root package name */
        private WorkSource f15141m = null;

        /* renamed from: n  reason: collision with root package name */
        private p f15142n = null;

        public a(long j10) {
            b(j10);
        }

        public LocationRequest a() {
            int i10 = this.f15129a;
            long j10 = this.f15130b;
            long j11 = this.f15131c;
            if (j11 == -1) {
                j11 = j10;
            } else if (i10 != 105) {
                j11 = Math.min(j11, j10);
            }
            long max = Math.max(this.f15132d, this.f15130b);
            long j12 = this.f15133e;
            int i11 = this.f15134f;
            float f10 = this.f15135g;
            boolean z10 = this.f15136h;
            long j13 = this.f15137i;
            if (j13 == -1) {
                j13 = this.f15130b;
            }
            return new LocationRequest(i10, j10, j11, max, LongCompanionObject.MAX_VALUE, j12, i11, f10, z10, j13, this.f15138j, this.f15139k, this.f15140l, new WorkSource(this.f15141m), this.f15142n);
        }

        public a b(long j10) {
            boolean z10;
            if (j10 >= 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            q.b(z10, "intervalMillis must be greater than or equal to 0");
            this.f15130b = j10;
            return this;
        }

        public a c(long j10) {
            boolean z10 = true;
            if (j10 != -1 && j10 < 0) {
                z10 = false;
            }
            q.b(z10, "minUpdateIntervalMillis must be greater than or equal to 0, or IMPLICIT_MIN_UPDATE_INTERVAL");
            this.f15131c = j10;
            return this;
        }

        public a d(int i10) {
            m.a(i10);
            this.f15129a = i10;
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public LocationRequest(int i10, long j10, long j11, long j12, long j13, long j14, int i11, float f10, boolean z10, long j15, int i12, int i13, boolean z11, WorkSource workSource, p pVar) {
        this.f15115d = i10;
        if (i10 == 105) {
            this.f15116e = LongCompanionObject.MAX_VALUE;
        } else {
            this.f15116e = j10;
        }
        this.f15117i = j11;
        this.f15118o = j12;
        this.f15119p = j13 == LongCompanionObject.MAX_VALUE ? j14 : Math.min(Math.max(1L, j13 - SystemClock.elapsedRealtime()), j14);
        this.f15120q = i11;
        this.f15121r = f10;
        this.f15122s = z10;
        this.f15123t = j15 != -1 ? j15 : j10;
        this.f15124u = i12;
        this.f15125v = i13;
        this.f15126w = z11;
        this.f15127x = workSource;
        this.f15128y = pVar;
    }

    private static String q(long j10) {
        if (j10 == LongCompanionObject.MAX_VALUE) {
            return "∞";
        }
        return mg.q.a(j10);
    }

    public long b() {
        return this.f15119p;
    }

    public int c() {
        return this.f15124u;
    }

    public long d() {
        return this.f15116e;
    }

    public long e() {
        return this.f15123t;
    }

    public boolean equals(Object obj) {
        if (obj instanceof LocationRequest) {
            LocationRequest locationRequest = (LocationRequest) obj;
            if (this.f15115d == locationRequest.f15115d && ((o() || this.f15116e == locationRequest.f15116e) && this.f15117i == locationRequest.f15117i && l() == locationRequest.l() && ((!l() || this.f15118o == locationRequest.f15118o) && this.f15119p == locationRequest.f15119p && this.f15120q == locationRequest.f15120q && this.f15121r == locationRequest.f15121r && this.f15122s == locationRequest.f15122s && this.f15124u == locationRequest.f15124u && this.f15125v == locationRequest.f15125v && this.f15126w == locationRequest.f15126w && this.f15127x.equals(locationRequest.f15127x) && o.a(this.f15128y, locationRequest.f15128y)))) {
                return true;
            }
        }
        return false;
    }

    public long f() {
        return this.f15118o;
    }

    public int g() {
        return this.f15120q;
    }

    public int hashCode() {
        return o.b(Integer.valueOf(this.f15115d), Long.valueOf(this.f15116e), Long.valueOf(this.f15117i), this.f15127x);
    }

    public float i() {
        return this.f15121r;
    }

    public long j() {
        return this.f15117i;
    }

    public int k() {
        return this.f15115d;
    }

    public boolean l() {
        long j10 = this.f15118o;
        return j10 > 0 && (j10 >> 1) >= this.f15116e;
    }

    public boolean o() {
        return this.f15115d == 105;
    }

    public boolean p() {
        return this.f15122s;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder();
        sb2.append("Request[");
        if (o()) {
            sb2.append(m.b(this.f15115d));
            if (this.f15118o > 0) {
                sb2.append("/");
                mg.q.b(this.f15118o, sb2);
            }
        } else {
            sb2.append("@");
            if (l()) {
                mg.q.b(this.f15116e, sb2);
                sb2.append("/");
                mg.q.b(this.f15118o, sb2);
            } else {
                mg.q.b(this.f15116e, sb2);
            }
            sb2.append(" ");
            sb2.append(m.b(this.f15115d));
        }
        if (o() || this.f15117i != this.f15116e) {
            sb2.append(", minUpdateInterval=");
            sb2.append(q(this.f15117i));
        }
        if (this.f15121r > 0.0d) {
            sb2.append(", minUpdateDistance=");
            sb2.append(this.f15121r);
        }
        if (!o() ? this.f15123t != this.f15116e : this.f15123t != LongCompanionObject.MAX_VALUE) {
            sb2.append(", maxUpdateAge=");
            sb2.append(q(this.f15123t));
        }
        if (this.f15119p != LongCompanionObject.MAX_VALUE) {
            sb2.append(", duration=");
            mg.q.b(this.f15119p, sb2);
        }
        if (this.f15120q != Integer.MAX_VALUE) {
            sb2.append(", maxUpdates=");
            sb2.append(this.f15120q);
        }
        if (this.f15125v != 0) {
            sb2.append(", ");
            sb2.append(n.a(this.f15125v));
        }
        if (this.f15124u != 0) {
            sb2.append(", ");
            sb2.append(vg.p.a(this.f15124u));
        }
        if (this.f15122s) {
            sb2.append(", waitForAccurateLocation");
        }
        if (this.f15126w) {
            sb2.append(", bypass");
        }
        if (!com.google.android.gms.common.util.o.d(this.f15127x)) {
            sb2.append(", ");
            sb2.append(this.f15127x);
        }
        if (this.f15128y != null) {
            sb2.append(", impersonation=");
            sb2.append(this.f15128y);
        }
        sb2.append(']');
        return sb2.toString();
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = c.a(parcel);
        c.l(parcel, 1, k());
        c.o(parcel, 2, d());
        c.o(parcel, 3, j());
        c.l(parcel, 6, g());
        c.j(parcel, 7, i());
        c.o(parcel, 8, f());
        c.c(parcel, 9, p());
        c.o(parcel, 10, b());
        c.o(parcel, 11, e());
        c.l(parcel, 12, c());
        c.l(parcel, 13, this.f15125v);
        c.c(parcel, 15, this.f15126w);
        c.q(parcel, 16, this.f15127x, i10, false);
        c.q(parcel, 17, this.f15128y, i10, false);
        c.b(parcel, a10);
    }
}
