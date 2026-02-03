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
    private int f15072d;

    /* renamed from: e  reason: collision with root package name */
    private long f15073e;

    /* renamed from: i  reason: collision with root package name */
    private long f15074i;

    /* renamed from: o  reason: collision with root package name */
    private long f15075o;

    /* renamed from: p  reason: collision with root package name */
    private long f15076p;

    /* renamed from: q  reason: collision with root package name */
    private int f15077q;

    /* renamed from: r  reason: collision with root package name */
    private float f15078r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f15079s;

    /* renamed from: t  reason: collision with root package name */
    private long f15080t;

    /* renamed from: u  reason: collision with root package name */
    private final int f15081u;

    /* renamed from: v  reason: collision with root package name */
    private final int f15082v;

    /* renamed from: w  reason: collision with root package name */
    private final boolean f15083w;

    /* renamed from: x  reason: collision with root package name */
    private final WorkSource f15084x;

    /* renamed from: y  reason: collision with root package name */
    private final p f15085y;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: b  reason: collision with root package name */
        private long f15087b;

        /* renamed from: a  reason: collision with root package name */
        private int f15086a = 102;

        /* renamed from: c  reason: collision with root package name */
        private long f15088c = -1;

        /* renamed from: d  reason: collision with root package name */
        private long f15089d = 0;

        /* renamed from: e  reason: collision with root package name */
        private long f15090e = LongCompanionObject.MAX_VALUE;

        /* renamed from: f  reason: collision with root package name */
        private int f15091f = Integer.MAX_VALUE;

        /* renamed from: g  reason: collision with root package name */
        private float f15092g = 0.0f;

        /* renamed from: h  reason: collision with root package name */
        private boolean f15093h = true;

        /* renamed from: i  reason: collision with root package name */
        private long f15094i = -1;

        /* renamed from: j  reason: collision with root package name */
        private int f15095j = 0;

        /* renamed from: k  reason: collision with root package name */
        private int f15096k = 0;

        /* renamed from: l  reason: collision with root package name */
        private boolean f15097l = false;

        /* renamed from: m  reason: collision with root package name */
        private WorkSource f15098m = null;

        /* renamed from: n  reason: collision with root package name */
        private p f15099n = null;

        public a(long j10) {
            b(j10);
        }

        public LocationRequest a() {
            int i10 = this.f15086a;
            long j10 = this.f15087b;
            long j11 = this.f15088c;
            if (j11 == -1) {
                j11 = j10;
            } else if (i10 != 105) {
                j11 = Math.min(j11, j10);
            }
            long max = Math.max(this.f15089d, this.f15087b);
            long j12 = this.f15090e;
            int i11 = this.f15091f;
            float f10 = this.f15092g;
            boolean z10 = this.f15093h;
            long j13 = this.f15094i;
            if (j13 == -1) {
                j13 = this.f15087b;
            }
            return new LocationRequest(i10, j10, j11, max, LongCompanionObject.MAX_VALUE, j12, i11, f10, z10, j13, this.f15095j, this.f15096k, this.f15097l, new WorkSource(this.f15098m), this.f15099n);
        }

        public a b(long j10) {
            boolean z10;
            if (j10 >= 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            q.b(z10, "intervalMillis must be greater than or equal to 0");
            this.f15087b = j10;
            return this;
        }

        public a c(long j10) {
            boolean z10 = true;
            if (j10 != -1 && j10 < 0) {
                z10 = false;
            }
            q.b(z10, "minUpdateIntervalMillis must be greater than or equal to 0, or IMPLICIT_MIN_UPDATE_INTERVAL");
            this.f15088c = j10;
            return this;
        }

        public a d(int i10) {
            m.a(i10);
            this.f15086a = i10;
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public LocationRequest(int i10, long j10, long j11, long j12, long j13, long j14, int i11, float f10, boolean z10, long j15, int i12, int i13, boolean z11, WorkSource workSource, p pVar) {
        this.f15072d = i10;
        if (i10 == 105) {
            this.f15073e = LongCompanionObject.MAX_VALUE;
        } else {
            this.f15073e = j10;
        }
        this.f15074i = j11;
        this.f15075o = j12;
        this.f15076p = j13 == LongCompanionObject.MAX_VALUE ? j14 : Math.min(Math.max(1L, j13 - SystemClock.elapsedRealtime()), j14);
        this.f15077q = i11;
        this.f15078r = f10;
        this.f15079s = z10;
        this.f15080t = j15 != -1 ? j15 : j10;
        this.f15081u = i12;
        this.f15082v = i13;
        this.f15083w = z11;
        this.f15084x = workSource;
        this.f15085y = pVar;
    }

    private static String p(long j10) {
        if (j10 == LongCompanionObject.MAX_VALUE) {
            return "∞";
        }
        return kg.q.a(j10);
    }

    public long b() {
        return this.f15076p;
    }

    public int c() {
        return this.f15081u;
    }

    public long d() {
        return this.f15073e;
    }

    public long e() {
        return this.f15080t;
    }

    public boolean equals(Object obj) {
        if (obj instanceof LocationRequest) {
            LocationRequest locationRequest = (LocationRequest) obj;
            if (this.f15072d == locationRequest.f15072d && ((n() || this.f15073e == locationRequest.f15073e) && this.f15074i == locationRequest.f15074i && m() == locationRequest.m() && ((!m() || this.f15075o == locationRequest.f15075o) && this.f15076p == locationRequest.f15076p && this.f15077q == locationRequest.f15077q && this.f15078r == locationRequest.f15078r && this.f15079s == locationRequest.f15079s && this.f15081u == locationRequest.f15081u && this.f15082v == locationRequest.f15082v && this.f15083w == locationRequest.f15083w && this.f15084x.equals(locationRequest.f15084x) && o.a(this.f15085y, locationRequest.f15085y)))) {
                return true;
            }
        }
        return false;
    }

    public long f() {
        return this.f15075o;
    }

    public int g() {
        return this.f15077q;
    }

    public int hashCode() {
        return o.b(Integer.valueOf(this.f15072d), Long.valueOf(this.f15073e), Long.valueOf(this.f15074i), this.f15084x);
    }

    public float i() {
        return this.f15078r;
    }

    public long j() {
        return this.f15074i;
    }

    public int k() {
        return this.f15072d;
    }

    public boolean m() {
        long j10 = this.f15075o;
        return j10 > 0 && (j10 >> 1) >= this.f15073e;
    }

    public boolean n() {
        return this.f15072d == 105;
    }

    public boolean o() {
        return this.f15079s;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder();
        sb2.append("Request[");
        if (n()) {
            sb2.append(m.b(this.f15072d));
            if (this.f15075o > 0) {
                sb2.append("/");
                kg.q.b(this.f15075o, sb2);
            }
        } else {
            sb2.append("@");
            if (m()) {
                kg.q.b(this.f15073e, sb2);
                sb2.append("/");
                kg.q.b(this.f15075o, sb2);
            } else {
                kg.q.b(this.f15073e, sb2);
            }
            sb2.append(" ");
            sb2.append(m.b(this.f15072d));
        }
        if (n() || this.f15074i != this.f15073e) {
            sb2.append(", minUpdateInterval=");
            sb2.append(p(this.f15074i));
        }
        if (this.f15078r > 0.0d) {
            sb2.append(", minUpdateDistance=");
            sb2.append(this.f15078r);
        }
        if (!n() ? this.f15080t != this.f15073e : this.f15080t != LongCompanionObject.MAX_VALUE) {
            sb2.append(", maxUpdateAge=");
            sb2.append(p(this.f15080t));
        }
        if (this.f15076p != LongCompanionObject.MAX_VALUE) {
            sb2.append(", duration=");
            kg.q.b(this.f15076p, sb2);
        }
        if (this.f15077q != Integer.MAX_VALUE) {
            sb2.append(", maxUpdates=");
            sb2.append(this.f15077q);
        }
        if (this.f15082v != 0) {
            sb2.append(", ");
            sb2.append(n.a(this.f15082v));
        }
        if (this.f15081u != 0) {
            sb2.append(", ");
            sb2.append(sg.p.a(this.f15081u));
        }
        if (this.f15079s) {
            sb2.append(", waitForAccurateLocation");
        }
        if (this.f15083w) {
            sb2.append(", bypass");
        }
        if (!com.google.android.gms.common.util.o.d(this.f15084x)) {
            sb2.append(", ");
            sb2.append(this.f15084x);
        }
        if (this.f15085y != null) {
            sb2.append(", impersonation=");
            sb2.append(this.f15085y);
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
        c.l(parcel, 13, this.f15082v);
        c.c(parcel, 15, this.f15083w);
        c.q(parcel, 16, this.f15084x, i10, false);
        c.q(parcel, 17, this.f15085y, i10, false);
        c.b(parcel, a10);
    }
}
