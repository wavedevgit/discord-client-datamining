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
import tg.m;
import tg.n;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class LocationRequest extends hf.a implements ReflectedParcelable {
    @NonNull
    public static final Parcelable.Creator<LocationRequest> CREATOR = new com.google.android.gms.location.a();

    /* renamed from: d  reason: collision with root package name */
    private int f14434d;

    /* renamed from: e  reason: collision with root package name */
    private long f14435e;

    /* renamed from: i  reason: collision with root package name */
    private long f14436i;

    /* renamed from: o  reason: collision with root package name */
    private long f14437o;

    /* renamed from: p  reason: collision with root package name */
    private long f14438p;

    /* renamed from: q  reason: collision with root package name */
    private int f14439q;

    /* renamed from: r  reason: collision with root package name */
    private float f14440r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f14441s;

    /* renamed from: t  reason: collision with root package name */
    private long f14442t;

    /* renamed from: u  reason: collision with root package name */
    private final int f14443u;

    /* renamed from: v  reason: collision with root package name */
    private final int f14444v;

    /* renamed from: w  reason: collision with root package name */
    private final boolean f14445w;

    /* renamed from: x  reason: collision with root package name */
    private final WorkSource f14446x;

    /* renamed from: y  reason: collision with root package name */
    private final p f14447y;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: b  reason: collision with root package name */
        private long f14449b;

        /* renamed from: a  reason: collision with root package name */
        private int f14448a = 102;

        /* renamed from: c  reason: collision with root package name */
        private long f14450c = -1;

        /* renamed from: d  reason: collision with root package name */
        private long f14451d = 0;

        /* renamed from: e  reason: collision with root package name */
        private long f14452e = LongCompanionObject.MAX_VALUE;

        /* renamed from: f  reason: collision with root package name */
        private int f14453f = Integer.MAX_VALUE;

        /* renamed from: g  reason: collision with root package name */
        private float f14454g = 0.0f;

        /* renamed from: h  reason: collision with root package name */
        private boolean f14455h = true;

        /* renamed from: i  reason: collision with root package name */
        private long f14456i = -1;

        /* renamed from: j  reason: collision with root package name */
        private int f14457j = 0;

        /* renamed from: k  reason: collision with root package name */
        private int f14458k = 0;

        /* renamed from: l  reason: collision with root package name */
        private boolean f14459l = false;

        /* renamed from: m  reason: collision with root package name */
        private WorkSource f14460m = null;

        /* renamed from: n  reason: collision with root package name */
        private p f14461n = null;

        public a(long j10) {
            b(j10);
        }

        public LocationRequest a() {
            int i10 = this.f14448a;
            long j10 = this.f14449b;
            long j11 = this.f14450c;
            if (j11 == -1) {
                j11 = j10;
            } else if (i10 != 105) {
                j11 = Math.min(j11, j10);
            }
            long max = Math.max(this.f14451d, this.f14449b);
            long j12 = this.f14452e;
            int i11 = this.f14453f;
            float f10 = this.f14454g;
            boolean z10 = this.f14455h;
            long j13 = this.f14456i;
            if (j13 == -1) {
                j13 = this.f14449b;
            }
            return new LocationRequest(i10, j10, j11, max, LongCompanionObject.MAX_VALUE, j12, i11, f10, z10, j13, this.f14457j, this.f14458k, this.f14459l, new WorkSource(this.f14460m), this.f14461n);
        }

        public a b(long j10) {
            boolean z10;
            if (j10 >= 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            q.b(z10, "intervalMillis must be greater than or equal to 0");
            this.f14449b = j10;
            return this;
        }

        public a c(long j10) {
            boolean z10 = true;
            if (j10 != -1 && j10 < 0) {
                z10 = false;
            }
            q.b(z10, "minUpdateIntervalMillis must be greater than or equal to 0, or IMPLICIT_MIN_UPDATE_INTERVAL");
            this.f14450c = j10;
            return this;
        }

        public a d(int i10) {
            m.a(i10);
            this.f14448a = i10;
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public LocationRequest(int i10, long j10, long j11, long j12, long j13, long j14, int i11, float f10, boolean z10, long j15, int i12, int i13, boolean z11, WorkSource workSource, p pVar) {
        this.f14434d = i10;
        if (i10 == 105) {
            this.f14435e = LongCompanionObject.MAX_VALUE;
        } else {
            this.f14435e = j10;
        }
        this.f14436i = j11;
        this.f14437o = j12;
        this.f14438p = j13 == LongCompanionObject.MAX_VALUE ? j14 : Math.min(Math.max(1L, j13 - SystemClock.elapsedRealtime()), j14);
        this.f14439q = i11;
        this.f14440r = f10;
        this.f14441s = z10;
        this.f14442t = j15 != -1 ? j15 : j10;
        this.f14443u = i12;
        this.f14444v = i13;
        this.f14445w = z11;
        this.f14446x = workSource;
        this.f14447y = pVar;
    }

    private static String q(long j10) {
        if (j10 == LongCompanionObject.MAX_VALUE) {
            return "∞";
        }
        return kg.q.a(j10);
    }

    public long b() {
        return this.f14438p;
    }

    public int c() {
        return this.f14443u;
    }

    public long d() {
        return this.f14435e;
    }

    public long e() {
        return this.f14442t;
    }

    public boolean equals(Object obj) {
        if (obj instanceof LocationRequest) {
            LocationRequest locationRequest = (LocationRequest) obj;
            if (this.f14434d == locationRequest.f14434d && ((o() || this.f14435e == locationRequest.f14435e) && this.f14436i == locationRequest.f14436i && n() == locationRequest.n() && ((!n() || this.f14437o == locationRequest.f14437o) && this.f14438p == locationRequest.f14438p && this.f14439q == locationRequest.f14439q && this.f14440r == locationRequest.f14440r && this.f14441s == locationRequest.f14441s && this.f14443u == locationRequest.f14443u && this.f14444v == locationRequest.f14444v && this.f14445w == locationRequest.f14445w && this.f14446x.equals(locationRequest.f14446x) && o.a(this.f14447y, locationRequest.f14447y)))) {
                return true;
            }
        }
        return false;
    }

    public long f() {
        return this.f14437o;
    }

    public int g() {
        return this.f14439q;
    }

    public int hashCode() {
        return o.b(Integer.valueOf(this.f14434d), Long.valueOf(this.f14435e), Long.valueOf(this.f14436i), this.f14446x);
    }

    public float i() {
        return this.f14440r;
    }

    public long j() {
        return this.f14436i;
    }

    public int l() {
        return this.f14434d;
    }

    public boolean n() {
        long j10 = this.f14437o;
        return j10 > 0 && (j10 >> 1) >= this.f14435e;
    }

    public boolean o() {
        return this.f14434d == 105;
    }

    public boolean p() {
        return this.f14441s;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder();
        sb2.append("Request[");
        if (o()) {
            sb2.append(m.b(this.f14434d));
            if (this.f14437o > 0) {
                sb2.append("/");
                kg.q.b(this.f14437o, sb2);
            }
        } else {
            sb2.append("@");
            if (n()) {
                kg.q.b(this.f14435e, sb2);
                sb2.append("/");
                kg.q.b(this.f14437o, sb2);
            } else {
                kg.q.b(this.f14435e, sb2);
            }
            sb2.append(" ");
            sb2.append(m.b(this.f14434d));
        }
        if (o() || this.f14436i != this.f14435e) {
            sb2.append(", minUpdateInterval=");
            sb2.append(q(this.f14436i));
        }
        if (this.f14440r > 0.0d) {
            sb2.append(", minUpdateDistance=");
            sb2.append(this.f14440r);
        }
        if (!o() ? this.f14442t != this.f14435e : this.f14442t != LongCompanionObject.MAX_VALUE) {
            sb2.append(", maxUpdateAge=");
            sb2.append(q(this.f14442t));
        }
        if (this.f14438p != LongCompanionObject.MAX_VALUE) {
            sb2.append(", duration=");
            kg.q.b(this.f14438p, sb2);
        }
        if (this.f14439q != Integer.MAX_VALUE) {
            sb2.append(", maxUpdates=");
            sb2.append(this.f14439q);
        }
        if (this.f14444v != 0) {
            sb2.append(", ");
            sb2.append(n.a(this.f14444v));
        }
        if (this.f14443u != 0) {
            sb2.append(", ");
            sb2.append(tg.p.a(this.f14443u));
        }
        if (this.f14441s) {
            sb2.append(", waitForAccurateLocation");
        }
        if (this.f14445w) {
            sb2.append(", bypass");
        }
        if (!com.google.android.gms.common.util.o.d(this.f14446x)) {
            sb2.append(", ");
            sb2.append(this.f14446x);
        }
        if (this.f14447y != null) {
            sb2.append(", impersonation=");
            sb2.append(this.f14447y);
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
        c.l(parcel, 6, g());
        c.j(parcel, 7, i());
        c.o(parcel, 8, f());
        c.c(parcel, 9, p());
        c.o(parcel, 10, b());
        c.o(parcel, 11, e());
        c.l(parcel, 12, c());
        c.l(parcel, 13, this.f14444v);
        c.c(parcel, 15, this.f14445w);
        c.q(parcel, 16, this.f14446x, i10, false);
        c.q(parcel, 17, this.f14447y, i10, false);
        c.b(parcel, a10);
    }
}
