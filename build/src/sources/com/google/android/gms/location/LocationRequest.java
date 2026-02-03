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
    private int f14040d;

    /* renamed from: e  reason: collision with root package name */
    private long f14041e;

    /* renamed from: i  reason: collision with root package name */
    private long f14042i;

    /* renamed from: o  reason: collision with root package name */
    private long f14043o;

    /* renamed from: p  reason: collision with root package name */
    private long f14044p;

    /* renamed from: q  reason: collision with root package name */
    private int f14045q;

    /* renamed from: r  reason: collision with root package name */
    private float f14046r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f14047s;

    /* renamed from: t  reason: collision with root package name */
    private long f14048t;

    /* renamed from: u  reason: collision with root package name */
    private final int f14049u;

    /* renamed from: v  reason: collision with root package name */
    private final int f14050v;

    /* renamed from: w  reason: collision with root package name */
    private final boolean f14051w;

    /* renamed from: x  reason: collision with root package name */
    private final WorkSource f14052x;

    /* renamed from: y  reason: collision with root package name */
    private final p f14053y;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: b  reason: collision with root package name */
        private long f14055b;

        /* renamed from: a  reason: collision with root package name */
        private int f14054a = 102;

        /* renamed from: c  reason: collision with root package name */
        private long f14056c = -1;

        /* renamed from: d  reason: collision with root package name */
        private long f14057d = 0;

        /* renamed from: e  reason: collision with root package name */
        private long f14058e = LongCompanionObject.MAX_VALUE;

        /* renamed from: f  reason: collision with root package name */
        private int f14059f = Integer.MAX_VALUE;

        /* renamed from: g  reason: collision with root package name */
        private float f14060g = 0.0f;

        /* renamed from: h  reason: collision with root package name */
        private boolean f14061h = true;

        /* renamed from: i  reason: collision with root package name */
        private long f14062i = -1;

        /* renamed from: j  reason: collision with root package name */
        private int f14063j = 0;

        /* renamed from: k  reason: collision with root package name */
        private int f14064k = 0;

        /* renamed from: l  reason: collision with root package name */
        private boolean f14065l = false;

        /* renamed from: m  reason: collision with root package name */
        private WorkSource f14066m = null;

        /* renamed from: n  reason: collision with root package name */
        private p f14067n = null;

        public a(long j10) {
            b(j10);
        }

        public LocationRequest a() {
            int i10 = this.f14054a;
            long j10 = this.f14055b;
            long j11 = this.f14056c;
            if (j11 == -1) {
                j11 = j10;
            } else if (i10 != 105) {
                j11 = Math.min(j11, j10);
            }
            long max = Math.max(this.f14057d, this.f14055b);
            long j12 = this.f14058e;
            int i11 = this.f14059f;
            float f10 = this.f14060g;
            boolean z10 = this.f14061h;
            long j13 = this.f14062i;
            if (j13 == -1) {
                j13 = this.f14055b;
            }
            return new LocationRequest(i10, j10, j11, max, LongCompanionObject.MAX_VALUE, j12, i11, f10, z10, j13, this.f14063j, this.f14064k, this.f14065l, new WorkSource(this.f14066m), this.f14067n);
        }

        public a b(long j10) {
            boolean z10;
            if (j10 >= 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            q.b(z10, "intervalMillis must be greater than or equal to 0");
            this.f14055b = j10;
            return this;
        }

        public a c(long j10) {
            boolean z10 = true;
            if (j10 != -1 && j10 < 0) {
                z10 = false;
            }
            q.b(z10, "minUpdateIntervalMillis must be greater than or equal to 0, or IMPLICIT_MIN_UPDATE_INTERVAL");
            this.f14056c = j10;
            return this;
        }

        public a d(int i10) {
            m.a(i10);
            this.f14054a = i10;
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public LocationRequest(int i10, long j10, long j11, long j12, long j13, long j14, int i11, float f10, boolean z10, long j15, int i12, int i13, boolean z11, WorkSource workSource, p pVar) {
        this.f14040d = i10;
        if (i10 == 105) {
            this.f14041e = LongCompanionObject.MAX_VALUE;
        } else {
            this.f14041e = j10;
        }
        this.f14042i = j11;
        this.f14043o = j12;
        this.f14044p = j13 == LongCompanionObject.MAX_VALUE ? j14 : Math.min(Math.max(1L, j13 - SystemClock.elapsedRealtime()), j14);
        this.f14045q = i11;
        this.f14046r = f10;
        this.f14047s = z10;
        this.f14048t = j15 != -1 ? j15 : j10;
        this.f14049u = i12;
        this.f14050v = i13;
        this.f14051w = z11;
        this.f14052x = workSource;
        this.f14053y = pVar;
    }

    private static String p(long j10) {
        if (j10 == LongCompanionObject.MAX_VALUE) {
            return "∞";
        }
        return kg.q.a(j10);
    }

    public long b() {
        return this.f14044p;
    }

    public int c() {
        return this.f14049u;
    }

    public long d() {
        return this.f14041e;
    }

    public long e() {
        return this.f14048t;
    }

    public boolean equals(Object obj) {
        if (obj instanceof LocationRequest) {
            LocationRequest locationRequest = (LocationRequest) obj;
            if (this.f14040d == locationRequest.f14040d && ((n() || this.f14041e == locationRequest.f14041e) && this.f14042i == locationRequest.f14042i && m() == locationRequest.m() && ((!m() || this.f14043o == locationRequest.f14043o) && this.f14044p == locationRequest.f14044p && this.f14045q == locationRequest.f14045q && this.f14046r == locationRequest.f14046r && this.f14047s == locationRequest.f14047s && this.f14049u == locationRequest.f14049u && this.f14050v == locationRequest.f14050v && this.f14051w == locationRequest.f14051w && this.f14052x.equals(locationRequest.f14052x) && o.a(this.f14053y, locationRequest.f14053y)))) {
                return true;
            }
        }
        return false;
    }

    public long f() {
        return this.f14043o;
    }

    public int g() {
        return this.f14045q;
    }

    public int hashCode() {
        return o.b(Integer.valueOf(this.f14040d), Long.valueOf(this.f14041e), Long.valueOf(this.f14042i), this.f14052x);
    }

    public float i() {
        return this.f14046r;
    }

    public long j() {
        return this.f14042i;
    }

    public int k() {
        return this.f14040d;
    }

    public boolean m() {
        long j10 = this.f14043o;
        return j10 > 0 && (j10 >> 1) >= this.f14041e;
    }

    public boolean n() {
        return this.f14040d == 105;
    }

    public boolean o() {
        return this.f14047s;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder();
        sb2.append("Request[");
        if (n()) {
            sb2.append(m.b(this.f14040d));
            if (this.f14043o > 0) {
                sb2.append("/");
                kg.q.b(this.f14043o, sb2);
            }
        } else {
            sb2.append("@");
            if (m()) {
                kg.q.b(this.f14041e, sb2);
                sb2.append("/");
                kg.q.b(this.f14043o, sb2);
            } else {
                kg.q.b(this.f14041e, sb2);
            }
            sb2.append(" ");
            sb2.append(m.b(this.f14040d));
        }
        if (n() || this.f14042i != this.f14041e) {
            sb2.append(", minUpdateInterval=");
            sb2.append(p(this.f14042i));
        }
        if (this.f14046r > 0.0d) {
            sb2.append(", minUpdateDistance=");
            sb2.append(this.f14046r);
        }
        if (!n() ? this.f14048t != this.f14041e : this.f14048t != LongCompanionObject.MAX_VALUE) {
            sb2.append(", maxUpdateAge=");
            sb2.append(p(this.f14048t));
        }
        if (this.f14044p != LongCompanionObject.MAX_VALUE) {
            sb2.append(", duration=");
            kg.q.b(this.f14044p, sb2);
        }
        if (this.f14045q != Integer.MAX_VALUE) {
            sb2.append(", maxUpdates=");
            sb2.append(this.f14045q);
        }
        if (this.f14050v != 0) {
            sb2.append(", ");
            sb2.append(n.a(this.f14050v));
        }
        if (this.f14049u != 0) {
            sb2.append(", ");
            sb2.append(sg.p.a(this.f14049u));
        }
        if (this.f14047s) {
            sb2.append(", waitForAccurateLocation");
        }
        if (this.f14051w) {
            sb2.append(", bypass");
        }
        if (!com.google.android.gms.common.util.o.d(this.f14052x)) {
            sb2.append(", ");
            sb2.append(this.f14052x);
        }
        if (this.f14053y != null) {
            sb2.append(", impersonation=");
            sb2.append(this.f14053y);
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
        c.l(parcel, 13, this.f14050v);
        c.c(parcel, 15, this.f14051w);
        c.q(parcel, 16, this.f14052x, i10, false);
        c.q(parcel, 17, this.f14053y, i10, false);
        c.b(parcel, a10);
    }
}
