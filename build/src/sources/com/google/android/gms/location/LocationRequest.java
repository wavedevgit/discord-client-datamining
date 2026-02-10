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
    private int f15114d;

    /* renamed from: e  reason: collision with root package name */
    private long f15115e;

    /* renamed from: i  reason: collision with root package name */
    private long f15116i;

    /* renamed from: o  reason: collision with root package name */
    private long f15117o;

    /* renamed from: p  reason: collision with root package name */
    private long f15118p;

    /* renamed from: q  reason: collision with root package name */
    private int f15119q;

    /* renamed from: r  reason: collision with root package name */
    private float f15120r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f15121s;

    /* renamed from: t  reason: collision with root package name */
    private long f15122t;

    /* renamed from: u  reason: collision with root package name */
    private final int f15123u;

    /* renamed from: v  reason: collision with root package name */
    private final int f15124v;

    /* renamed from: w  reason: collision with root package name */
    private final boolean f15125w;

    /* renamed from: x  reason: collision with root package name */
    private final WorkSource f15126x;

    /* renamed from: y  reason: collision with root package name */
    private final p f15127y;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: b  reason: collision with root package name */
        private long f15129b;

        /* renamed from: a  reason: collision with root package name */
        private int f15128a = 102;

        /* renamed from: c  reason: collision with root package name */
        private long f15130c = -1;

        /* renamed from: d  reason: collision with root package name */
        private long f15131d = 0;

        /* renamed from: e  reason: collision with root package name */
        private long f15132e = LongCompanionObject.MAX_VALUE;

        /* renamed from: f  reason: collision with root package name */
        private int f15133f = Integer.MAX_VALUE;

        /* renamed from: g  reason: collision with root package name */
        private float f15134g = 0.0f;

        /* renamed from: h  reason: collision with root package name */
        private boolean f15135h = true;

        /* renamed from: i  reason: collision with root package name */
        private long f15136i = -1;

        /* renamed from: j  reason: collision with root package name */
        private int f15137j = 0;

        /* renamed from: k  reason: collision with root package name */
        private int f15138k = 0;

        /* renamed from: l  reason: collision with root package name */
        private boolean f15139l = false;

        /* renamed from: m  reason: collision with root package name */
        private WorkSource f15140m = null;

        /* renamed from: n  reason: collision with root package name */
        private p f15141n = null;

        public a(long j10) {
            b(j10);
        }

        public LocationRequest a() {
            int i10 = this.f15128a;
            long j10 = this.f15129b;
            long j11 = this.f15130c;
            if (j11 == -1) {
                j11 = j10;
            } else if (i10 != 105) {
                j11 = Math.min(j11, j10);
            }
            long max = Math.max(this.f15131d, this.f15129b);
            long j12 = this.f15132e;
            int i11 = this.f15133f;
            float f10 = this.f15134g;
            boolean z10 = this.f15135h;
            long j13 = this.f15136i;
            if (j13 == -1) {
                j13 = this.f15129b;
            }
            return new LocationRequest(i10, j10, j11, max, LongCompanionObject.MAX_VALUE, j12, i11, f10, z10, j13, this.f15137j, this.f15138k, this.f15139l, new WorkSource(this.f15140m), this.f15141n);
        }

        public a b(long j10) {
            boolean z10;
            if (j10 >= 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            q.b(z10, "intervalMillis must be greater than or equal to 0");
            this.f15129b = j10;
            return this;
        }

        public a c(long j10) {
            boolean z10 = true;
            if (j10 != -1 && j10 < 0) {
                z10 = false;
            }
            q.b(z10, "minUpdateIntervalMillis must be greater than or equal to 0, or IMPLICIT_MIN_UPDATE_INTERVAL");
            this.f15130c = j10;
            return this;
        }

        public a d(int i10) {
            m.a(i10);
            this.f15128a = i10;
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public LocationRequest(int i10, long j10, long j11, long j12, long j13, long j14, int i11, float f10, boolean z10, long j15, int i12, int i13, boolean z11, WorkSource workSource, p pVar) {
        this.f15114d = i10;
        if (i10 == 105) {
            this.f15115e = LongCompanionObject.MAX_VALUE;
        } else {
            this.f15115e = j10;
        }
        this.f15116i = j11;
        this.f15117o = j12;
        this.f15118p = j13 == LongCompanionObject.MAX_VALUE ? j14 : Math.min(Math.max(1L, j13 - SystemClock.elapsedRealtime()), j14);
        this.f15119q = i11;
        this.f15120r = f10;
        this.f15121s = z10;
        this.f15122t = j15 != -1 ? j15 : j10;
        this.f15123u = i12;
        this.f15124v = i13;
        this.f15125w = z11;
        this.f15126x = workSource;
        this.f15127y = pVar;
    }

    private static String q(long j10) {
        if (j10 == LongCompanionObject.MAX_VALUE) {
            return "∞";
        }
        return mg.q.a(j10);
    }

    public long b() {
        return this.f15118p;
    }

    public int c() {
        return this.f15123u;
    }

    public long d() {
        return this.f15115e;
    }

    public long e() {
        return this.f15122t;
    }

    public boolean equals(Object obj) {
        if (obj instanceof LocationRequest) {
            LocationRequest locationRequest = (LocationRequest) obj;
            if (this.f15114d == locationRequest.f15114d && ((o() || this.f15115e == locationRequest.f15115e) && this.f15116i == locationRequest.f15116i && l() == locationRequest.l() && ((!l() || this.f15117o == locationRequest.f15117o) && this.f15118p == locationRequest.f15118p && this.f15119q == locationRequest.f15119q && this.f15120r == locationRequest.f15120r && this.f15121s == locationRequest.f15121s && this.f15123u == locationRequest.f15123u && this.f15124v == locationRequest.f15124v && this.f15125w == locationRequest.f15125w && this.f15126x.equals(locationRequest.f15126x) && o.a(this.f15127y, locationRequest.f15127y)))) {
                return true;
            }
        }
        return false;
    }

    public long f() {
        return this.f15117o;
    }

    public int g() {
        return this.f15119q;
    }

    public int hashCode() {
        return o.b(Integer.valueOf(this.f15114d), Long.valueOf(this.f15115e), Long.valueOf(this.f15116i), this.f15126x);
    }

    public float i() {
        return this.f15120r;
    }

    public long j() {
        return this.f15116i;
    }

    public int k() {
        return this.f15114d;
    }

    public boolean l() {
        long j10 = this.f15117o;
        return j10 > 0 && (j10 >> 1) >= this.f15115e;
    }

    public boolean o() {
        return this.f15114d == 105;
    }

    public boolean p() {
        return this.f15121s;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder();
        sb2.append("Request[");
        if (o()) {
            sb2.append(m.b(this.f15114d));
            if (this.f15117o > 0) {
                sb2.append("/");
                mg.q.b(this.f15117o, sb2);
            }
        } else {
            sb2.append("@");
            if (l()) {
                mg.q.b(this.f15115e, sb2);
                sb2.append("/");
                mg.q.b(this.f15117o, sb2);
            } else {
                mg.q.b(this.f15115e, sb2);
            }
            sb2.append(" ");
            sb2.append(m.b(this.f15114d));
        }
        if (o() || this.f15116i != this.f15115e) {
            sb2.append(", minUpdateInterval=");
            sb2.append(q(this.f15116i));
        }
        if (this.f15120r > 0.0d) {
            sb2.append(", minUpdateDistance=");
            sb2.append(this.f15120r);
        }
        if (!o() ? this.f15122t != this.f15115e : this.f15122t != LongCompanionObject.MAX_VALUE) {
            sb2.append(", maxUpdateAge=");
            sb2.append(q(this.f15122t));
        }
        if (this.f15118p != LongCompanionObject.MAX_VALUE) {
            sb2.append(", duration=");
            mg.q.b(this.f15118p, sb2);
        }
        if (this.f15119q != Integer.MAX_VALUE) {
            sb2.append(", maxUpdates=");
            sb2.append(this.f15119q);
        }
        if (this.f15124v != 0) {
            sb2.append(", ");
            sb2.append(n.a(this.f15124v));
        }
        if (this.f15123u != 0) {
            sb2.append(", ");
            sb2.append(vg.p.a(this.f15123u));
        }
        if (this.f15121s) {
            sb2.append(", waitForAccurateLocation");
        }
        if (this.f15125w) {
            sb2.append(", bypass");
        }
        if (!com.google.android.gms.common.util.o.d(this.f15126x)) {
            sb2.append(", ");
            sb2.append(this.f15126x);
        }
        if (this.f15127y != null) {
            sb2.append(", impersonation=");
            sb2.append(this.f15127y);
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
        c.l(parcel, 13, this.f15124v);
        c.c(parcel, 15, this.f15125w);
        c.q(parcel, 16, this.f15126x, i10, false);
        c.q(parcel, 17, this.f15127y, i10, false);
        c.b(parcel, a10);
    }
}
