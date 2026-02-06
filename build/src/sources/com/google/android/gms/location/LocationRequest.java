package com.google.android.gms.location;

import android.os.Parcel;
import android.os.Parcelable;
import android.os.SystemClock;
import android.os.WorkSource;
import androidx.annotation.NonNull;
import com.google.android.gms.common.internal.ReflectedParcelable;
import gf.o;
import gf.q;
import hf.c;
import kotlin.jvm.internal.LongCompanionObject;
import lg.p;
import ug.m;
import ug.n;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class LocationRequest extends hf.a implements ReflectedParcelable {
    @NonNull
    public static final Parcelable.Creator<LocationRequest> CREATOR = new com.google.android.gms.location.a();

    /* renamed from: d  reason: collision with root package name */
    private int f14397d;

    /* renamed from: e  reason: collision with root package name */
    private long f14398e;

    /* renamed from: i  reason: collision with root package name */
    private long f14399i;

    /* renamed from: o  reason: collision with root package name */
    private long f14400o;

    /* renamed from: p  reason: collision with root package name */
    private long f14401p;

    /* renamed from: q  reason: collision with root package name */
    private int f14402q;

    /* renamed from: r  reason: collision with root package name */
    private float f14403r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f14404s;

    /* renamed from: t  reason: collision with root package name */
    private long f14405t;

    /* renamed from: u  reason: collision with root package name */
    private final int f14406u;

    /* renamed from: v  reason: collision with root package name */
    private final int f14407v;

    /* renamed from: w  reason: collision with root package name */
    private final boolean f14408w;

    /* renamed from: x  reason: collision with root package name */
    private final WorkSource f14409x;

    /* renamed from: y  reason: collision with root package name */
    private final p f14410y;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: b  reason: collision with root package name */
        private long f14412b;

        /* renamed from: a  reason: collision with root package name */
        private int f14411a = 102;

        /* renamed from: c  reason: collision with root package name */
        private long f14413c = -1;

        /* renamed from: d  reason: collision with root package name */
        private long f14414d = 0;

        /* renamed from: e  reason: collision with root package name */
        private long f14415e = LongCompanionObject.MAX_VALUE;

        /* renamed from: f  reason: collision with root package name */
        private int f14416f = Integer.MAX_VALUE;

        /* renamed from: g  reason: collision with root package name */
        private float f14417g = 0.0f;

        /* renamed from: h  reason: collision with root package name */
        private boolean f14418h = true;

        /* renamed from: i  reason: collision with root package name */
        private long f14419i = -1;

        /* renamed from: j  reason: collision with root package name */
        private int f14420j = 0;

        /* renamed from: k  reason: collision with root package name */
        private int f14421k = 0;

        /* renamed from: l  reason: collision with root package name */
        private boolean f14422l = false;

        /* renamed from: m  reason: collision with root package name */
        private WorkSource f14423m = null;

        /* renamed from: n  reason: collision with root package name */
        private p f14424n = null;

        public a(long j10) {
            b(j10);
        }

        public LocationRequest a() {
            int i10 = this.f14411a;
            long j10 = this.f14412b;
            long j11 = this.f14413c;
            if (j11 == -1) {
                j11 = j10;
            } else if (i10 != 105) {
                j11 = Math.min(j11, j10);
            }
            long max = Math.max(this.f14414d, this.f14412b);
            long j12 = this.f14415e;
            int i11 = this.f14416f;
            float f10 = this.f14417g;
            boolean z10 = this.f14418h;
            long j13 = this.f14419i;
            if (j13 == -1) {
                j13 = this.f14412b;
            }
            return new LocationRequest(i10, j10, j11, max, LongCompanionObject.MAX_VALUE, j12, i11, f10, z10, j13, this.f14420j, this.f14421k, this.f14422l, new WorkSource(this.f14423m), this.f14424n);
        }

        public a b(long j10) {
            boolean z10;
            if (j10 >= 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            q.b(z10, "intervalMillis must be greater than or equal to 0");
            this.f14412b = j10;
            return this;
        }

        public a c(long j10) {
            boolean z10 = true;
            if (j10 != -1 && j10 < 0) {
                z10 = false;
            }
            q.b(z10, "minUpdateIntervalMillis must be greater than or equal to 0, or IMPLICIT_MIN_UPDATE_INTERVAL");
            this.f14413c = j10;
            return this;
        }

        public a d(int i10) {
            m.a(i10);
            this.f14411a = i10;
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public LocationRequest(int i10, long j10, long j11, long j12, long j13, long j14, int i11, float f10, boolean z10, long j15, int i12, int i13, boolean z11, WorkSource workSource, p pVar) {
        this.f14397d = i10;
        if (i10 == 105) {
            this.f14398e = LongCompanionObject.MAX_VALUE;
        } else {
            this.f14398e = j10;
        }
        this.f14399i = j11;
        this.f14400o = j12;
        this.f14401p = j13 == LongCompanionObject.MAX_VALUE ? j14 : Math.min(Math.max(1L, j13 - SystemClock.elapsedRealtime()), j14);
        this.f14402q = i11;
        this.f14403r = f10;
        this.f14404s = z10;
        this.f14405t = j15 != -1 ? j15 : j10;
        this.f14406u = i12;
        this.f14407v = i13;
        this.f14408w = z11;
        this.f14409x = workSource;
        this.f14410y = pVar;
    }

    private static String r(long j10) {
        if (j10 == LongCompanionObject.MAX_VALUE) {
            return "∞";
        }
        return lg.q.a(j10);
    }

    public long b() {
        return this.f14401p;
    }

    public int c() {
        return this.f14406u;
    }

    public long d() {
        return this.f14398e;
    }

    public long e() {
        return this.f14405t;
    }

    public boolean equals(Object obj) {
        if (obj instanceof LocationRequest) {
            LocationRequest locationRequest = (LocationRequest) obj;
            if (this.f14397d == locationRequest.f14397d && ((p() || this.f14398e == locationRequest.f14398e) && this.f14399i == locationRequest.f14399i && o() == locationRequest.o() && ((!o() || this.f14400o == locationRequest.f14400o) && this.f14401p == locationRequest.f14401p && this.f14402q == locationRequest.f14402q && this.f14403r == locationRequest.f14403r && this.f14404s == locationRequest.f14404s && this.f14406u == locationRequest.f14406u && this.f14407v == locationRequest.f14407v && this.f14408w == locationRequest.f14408w && this.f14409x.equals(locationRequest.f14409x) && o.a(this.f14410y, locationRequest.f14410y)))) {
                return true;
            }
        }
        return false;
    }

    public long f() {
        return this.f14400o;
    }

    public int h() {
        return this.f14402q;
    }

    public int hashCode() {
        return o.b(Integer.valueOf(this.f14397d), Long.valueOf(this.f14398e), Long.valueOf(this.f14399i), this.f14409x);
    }

    public float i() {
        return this.f14403r;
    }

    public long j() {
        return this.f14399i;
    }

    public int l() {
        return this.f14397d;
    }

    public boolean o() {
        long j10 = this.f14400o;
        return j10 > 0 && (j10 >> 1) >= this.f14398e;
    }

    public boolean p() {
        return this.f14397d == 105;
    }

    public boolean q() {
        return this.f14404s;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder();
        sb2.append("Request[");
        if (p()) {
            sb2.append(m.b(this.f14397d));
            if (this.f14400o > 0) {
                sb2.append("/");
                lg.q.b(this.f14400o, sb2);
            }
        } else {
            sb2.append("@");
            if (o()) {
                lg.q.b(this.f14398e, sb2);
                sb2.append("/");
                lg.q.b(this.f14400o, sb2);
            } else {
                lg.q.b(this.f14398e, sb2);
            }
            sb2.append(" ");
            sb2.append(m.b(this.f14397d));
        }
        if (p() || this.f14399i != this.f14398e) {
            sb2.append(", minUpdateInterval=");
            sb2.append(r(this.f14399i));
        }
        if (this.f14403r > 0.0d) {
            sb2.append(", minUpdateDistance=");
            sb2.append(this.f14403r);
        }
        if (!p() ? this.f14405t != this.f14398e : this.f14405t != LongCompanionObject.MAX_VALUE) {
            sb2.append(", maxUpdateAge=");
            sb2.append(r(this.f14405t));
        }
        if (this.f14401p != LongCompanionObject.MAX_VALUE) {
            sb2.append(", duration=");
            lg.q.b(this.f14401p, sb2);
        }
        if (this.f14402q != Integer.MAX_VALUE) {
            sb2.append(", maxUpdates=");
            sb2.append(this.f14402q);
        }
        if (this.f14407v != 0) {
            sb2.append(", ");
            sb2.append(n.a(this.f14407v));
        }
        if (this.f14406u != 0) {
            sb2.append(", ");
            sb2.append(ug.p.a(this.f14406u));
        }
        if (this.f14404s) {
            sb2.append(", waitForAccurateLocation");
        }
        if (this.f14408w) {
            sb2.append(", bypass");
        }
        if (!com.google.android.gms.common.util.o.d(this.f14409x)) {
            sb2.append(", ");
            sb2.append(this.f14409x);
        }
        if (this.f14410y != null) {
            sb2.append(", impersonation=");
            sb2.append(this.f14410y);
        }
        sb2.append(']');
        return sb2.toString();
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = c.a(parcel);
        c.l(parcel, 1, l());
        c.o(parcel, 2, d());
        c.o(parcel, 3, j());
        c.l(parcel, 6, h());
        c.j(parcel, 7, i());
        c.o(parcel, 8, f());
        c.c(parcel, 9, q());
        c.o(parcel, 10, b());
        c.o(parcel, 11, e());
        c.l(parcel, 12, c());
        c.l(parcel, 13, this.f14407v);
        c.c(parcel, 15, this.f14408w);
        c.q(parcel, 16, this.f14409x, i10, false);
        c.q(parcel, 17, this.f14410y, i10, false);
        c.b(parcel, a10);
    }
}
