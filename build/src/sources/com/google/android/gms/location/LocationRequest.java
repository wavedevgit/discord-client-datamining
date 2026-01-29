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
import kg.p;
import kotlin.jvm.internal.LongCompanionObject;
import sg.m;
import sg.n;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class LocationRequest extends hf.a implements ReflectedParcelable {
    @NonNull
    public static final Parcelable.Creator<LocationRequest> CREATOR = new com.google.android.gms.location.a();

    /* renamed from: d  reason: collision with root package name */
    private int f15443d;

    /* renamed from: e  reason: collision with root package name */
    private long f15444e;

    /* renamed from: i  reason: collision with root package name */
    private long f15445i;

    /* renamed from: o  reason: collision with root package name */
    private long f15446o;

    /* renamed from: p  reason: collision with root package name */
    private long f15447p;

    /* renamed from: q  reason: collision with root package name */
    private int f15448q;

    /* renamed from: r  reason: collision with root package name */
    private float f15449r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f15450s;

    /* renamed from: t  reason: collision with root package name */
    private long f15451t;

    /* renamed from: u  reason: collision with root package name */
    private final int f15452u;

    /* renamed from: v  reason: collision with root package name */
    private final int f15453v;

    /* renamed from: w  reason: collision with root package name */
    private final boolean f15454w;

    /* renamed from: x  reason: collision with root package name */
    private final WorkSource f15455x;

    /* renamed from: y  reason: collision with root package name */
    private final p f15456y;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: b  reason: collision with root package name */
        private long f15458b;

        /* renamed from: a  reason: collision with root package name */
        private int f15457a = 102;

        /* renamed from: c  reason: collision with root package name */
        private long f15459c = -1;

        /* renamed from: d  reason: collision with root package name */
        private long f15460d = 0;

        /* renamed from: e  reason: collision with root package name */
        private long f15461e = LongCompanionObject.MAX_VALUE;

        /* renamed from: f  reason: collision with root package name */
        private int f15462f = Integer.MAX_VALUE;

        /* renamed from: g  reason: collision with root package name */
        private float f15463g = 0.0f;

        /* renamed from: h  reason: collision with root package name */
        private boolean f15464h = true;

        /* renamed from: i  reason: collision with root package name */
        private long f15465i = -1;

        /* renamed from: j  reason: collision with root package name */
        private int f15466j = 0;

        /* renamed from: k  reason: collision with root package name */
        private int f15467k = 0;

        /* renamed from: l  reason: collision with root package name */
        private boolean f15468l = false;

        /* renamed from: m  reason: collision with root package name */
        private WorkSource f15469m = null;

        /* renamed from: n  reason: collision with root package name */
        private p f15470n = null;

        public a(long j10) {
            b(j10);
        }

        public LocationRequest a() {
            int i10 = this.f15457a;
            long j10 = this.f15458b;
            long j11 = this.f15459c;
            if (j11 == -1) {
                j11 = j10;
            } else if (i10 != 105) {
                j11 = Math.min(j11, j10);
            }
            long max = Math.max(this.f15460d, this.f15458b);
            long j12 = this.f15461e;
            int i11 = this.f15462f;
            float f10 = this.f15463g;
            boolean z10 = this.f15464h;
            long j13 = this.f15465i;
            if (j13 == -1) {
                j13 = this.f15458b;
            }
            return new LocationRequest(i10, j10, j11, max, LongCompanionObject.MAX_VALUE, j12, i11, f10, z10, j13, this.f15466j, this.f15467k, this.f15468l, new WorkSource(this.f15469m), this.f15470n);
        }

        public a b(long j10) {
            boolean z10;
            if (j10 >= 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            q.b(z10, "intervalMillis must be greater than or equal to 0");
            this.f15458b = j10;
            return this;
        }

        public a c(long j10) {
            boolean z10 = true;
            if (j10 != -1 && j10 < 0) {
                z10 = false;
            }
            q.b(z10, "minUpdateIntervalMillis must be greater than or equal to 0, or IMPLICIT_MIN_UPDATE_INTERVAL");
            this.f15459c = j10;
            return this;
        }

        public a d(int i10) {
            m.a(i10);
            this.f15457a = i10;
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public LocationRequest(int i10, long j10, long j11, long j12, long j13, long j14, int i11, float f10, boolean z10, long j15, int i12, int i13, boolean z11, WorkSource workSource, p pVar) {
        this.f15443d = i10;
        if (i10 == 105) {
            this.f15444e = LongCompanionObject.MAX_VALUE;
        } else {
            this.f15444e = j10;
        }
        this.f15445i = j11;
        this.f15446o = j12;
        this.f15447p = j13 == LongCompanionObject.MAX_VALUE ? j14 : Math.min(Math.max(1L, j13 - SystemClock.elapsedRealtime()), j14);
        this.f15448q = i11;
        this.f15449r = f10;
        this.f15450s = z10;
        this.f15451t = j15 != -1 ? j15 : j10;
        this.f15452u = i12;
        this.f15453v = i13;
        this.f15454w = z11;
        this.f15455x = workSource;
        this.f15456y = pVar;
    }

    private static String p(long j10) {
        if (j10 == LongCompanionObject.MAX_VALUE) {
            return "∞";
        }
        return kg.q.a(j10);
    }

    public long b() {
        return this.f15447p;
    }

    public int c() {
        return this.f15452u;
    }

    public long d() {
        return this.f15444e;
    }

    public long e() {
        return this.f15451t;
    }

    public boolean equals(Object obj) {
        if (obj instanceof LocationRequest) {
            LocationRequest locationRequest = (LocationRequest) obj;
            if (this.f15443d == locationRequest.f15443d && ((n() || this.f15444e == locationRequest.f15444e) && this.f15445i == locationRequest.f15445i && m() == locationRequest.m() && ((!m() || this.f15446o == locationRequest.f15446o) && this.f15447p == locationRequest.f15447p && this.f15448q == locationRequest.f15448q && this.f15449r == locationRequest.f15449r && this.f15450s == locationRequest.f15450s && this.f15452u == locationRequest.f15452u && this.f15453v == locationRequest.f15453v && this.f15454w == locationRequest.f15454w && this.f15455x.equals(locationRequest.f15455x) && o.a(this.f15456y, locationRequest.f15456y)))) {
                return true;
            }
        }
        return false;
    }

    public long f() {
        return this.f15446o;
    }

    public int g() {
        return this.f15448q;
    }

    public int hashCode() {
        return o.b(Integer.valueOf(this.f15443d), Long.valueOf(this.f15444e), Long.valueOf(this.f15445i), this.f15455x);
    }

    public float i() {
        return this.f15449r;
    }

    public long j() {
        return this.f15445i;
    }

    public int k() {
        return this.f15443d;
    }

    public boolean m() {
        long j10 = this.f15446o;
        return j10 > 0 && (j10 >> 1) >= this.f15444e;
    }

    public boolean n() {
        return this.f15443d == 105;
    }

    public boolean o() {
        return this.f15450s;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder();
        sb2.append("Request[");
        if (n()) {
            sb2.append(m.b(this.f15443d));
            if (this.f15446o > 0) {
                sb2.append("/");
                kg.q.b(this.f15446o, sb2);
            }
        } else {
            sb2.append("@");
            if (m()) {
                kg.q.b(this.f15444e, sb2);
                sb2.append("/");
                kg.q.b(this.f15446o, sb2);
            } else {
                kg.q.b(this.f15444e, sb2);
            }
            sb2.append(" ");
            sb2.append(m.b(this.f15443d));
        }
        if (n() || this.f15445i != this.f15444e) {
            sb2.append(", minUpdateInterval=");
            sb2.append(p(this.f15445i));
        }
        if (this.f15449r > 0.0d) {
            sb2.append(", minUpdateDistance=");
            sb2.append(this.f15449r);
        }
        if (!n() ? this.f15451t != this.f15444e : this.f15451t != LongCompanionObject.MAX_VALUE) {
            sb2.append(", maxUpdateAge=");
            sb2.append(p(this.f15451t));
        }
        if (this.f15447p != LongCompanionObject.MAX_VALUE) {
            sb2.append(", duration=");
            kg.q.b(this.f15447p, sb2);
        }
        if (this.f15448q != Integer.MAX_VALUE) {
            sb2.append(", maxUpdates=");
            sb2.append(this.f15448q);
        }
        if (this.f15453v != 0) {
            sb2.append(", ");
            sb2.append(n.a(this.f15453v));
        }
        if (this.f15452u != 0) {
            sb2.append(", ");
            sb2.append(sg.p.a(this.f15452u));
        }
        if (this.f15450s) {
            sb2.append(", waitForAccurateLocation");
        }
        if (this.f15454w) {
            sb2.append(", bypass");
        }
        if (!com.google.android.gms.common.util.o.d(this.f15455x)) {
            sb2.append(", ");
            sb2.append(this.f15455x);
        }
        if (this.f15456y != null) {
            sb2.append(", impersonation=");
            sb2.append(this.f15456y);
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
        c.c(parcel, 9, o());
        c.o(parcel, 10, b());
        c.o(parcel, 11, e());
        c.l(parcel, 12, c());
        c.l(parcel, 13, this.f15453v);
        c.c(parcel, 15, this.f15454w);
        c.q(parcel, 16, this.f15455x, i10, false);
        c.q(parcel, 17, this.f15456y, i10, false);
        c.b(parcel, a10);
    }
}
