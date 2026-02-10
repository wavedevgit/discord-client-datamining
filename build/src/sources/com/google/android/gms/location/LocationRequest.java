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
    private int f14537d;

    /* renamed from: e  reason: collision with root package name */
    private long f14538e;

    /* renamed from: i  reason: collision with root package name */
    private long f14539i;

    /* renamed from: o  reason: collision with root package name */
    private long f14540o;

    /* renamed from: p  reason: collision with root package name */
    private long f14541p;

    /* renamed from: q  reason: collision with root package name */
    private int f14542q;

    /* renamed from: r  reason: collision with root package name */
    private float f14543r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f14544s;

    /* renamed from: t  reason: collision with root package name */
    private long f14545t;

    /* renamed from: u  reason: collision with root package name */
    private final int f14546u;

    /* renamed from: v  reason: collision with root package name */
    private final int f14547v;

    /* renamed from: w  reason: collision with root package name */
    private final boolean f14548w;

    /* renamed from: x  reason: collision with root package name */
    private final WorkSource f14549x;

    /* renamed from: y  reason: collision with root package name */
    private final p f14550y;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: b  reason: collision with root package name */
        private long f14552b;

        /* renamed from: a  reason: collision with root package name */
        private int f14551a = 102;

        /* renamed from: c  reason: collision with root package name */
        private long f14553c = -1;

        /* renamed from: d  reason: collision with root package name */
        private long f14554d = 0;

        /* renamed from: e  reason: collision with root package name */
        private long f14555e = LongCompanionObject.MAX_VALUE;

        /* renamed from: f  reason: collision with root package name */
        private int f14556f = Integer.MAX_VALUE;

        /* renamed from: g  reason: collision with root package name */
        private float f14557g = 0.0f;

        /* renamed from: h  reason: collision with root package name */
        private boolean f14558h = true;

        /* renamed from: i  reason: collision with root package name */
        private long f14559i = -1;

        /* renamed from: j  reason: collision with root package name */
        private int f14560j = 0;

        /* renamed from: k  reason: collision with root package name */
        private int f14561k = 0;

        /* renamed from: l  reason: collision with root package name */
        private boolean f14562l = false;

        /* renamed from: m  reason: collision with root package name */
        private WorkSource f14563m = null;

        /* renamed from: n  reason: collision with root package name */
        private p f14564n = null;

        public a(long j10) {
            b(j10);
        }

        public LocationRequest a() {
            int i10 = this.f14551a;
            long j10 = this.f14552b;
            long j11 = this.f14553c;
            if (j11 == -1) {
                j11 = j10;
            } else if (i10 != 105) {
                j11 = Math.min(j11, j10);
            }
            long max = Math.max(this.f14554d, this.f14552b);
            long j12 = this.f14555e;
            int i11 = this.f14556f;
            float f10 = this.f14557g;
            boolean z10 = this.f14558h;
            long j13 = this.f14559i;
            if (j13 == -1) {
                j13 = this.f14552b;
            }
            return new LocationRequest(i10, j10, j11, max, LongCompanionObject.MAX_VALUE, j12, i11, f10, z10, j13, this.f14560j, this.f14561k, this.f14562l, new WorkSource(this.f14563m), this.f14564n);
        }

        public a b(long j10) {
            boolean z10;
            if (j10 >= 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            q.b(z10, "intervalMillis must be greater than or equal to 0");
            this.f14552b = j10;
            return this;
        }

        public a c(long j10) {
            boolean z10 = true;
            if (j10 != -1 && j10 < 0) {
                z10 = false;
            }
            q.b(z10, "minUpdateIntervalMillis must be greater than or equal to 0, or IMPLICIT_MIN_UPDATE_INTERVAL");
            this.f14553c = j10;
            return this;
        }

        public a d(int i10) {
            m.a(i10);
            this.f14551a = i10;
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public LocationRequest(int i10, long j10, long j11, long j12, long j13, long j14, int i11, float f10, boolean z10, long j15, int i12, int i13, boolean z11, WorkSource workSource, p pVar) {
        this.f14537d = i10;
        if (i10 == 105) {
            this.f14538e = LongCompanionObject.MAX_VALUE;
        } else {
            this.f14538e = j10;
        }
        this.f14539i = j11;
        this.f14540o = j12;
        this.f14541p = j13 == LongCompanionObject.MAX_VALUE ? j14 : Math.min(Math.max(1L, j13 - SystemClock.elapsedRealtime()), j14);
        this.f14542q = i11;
        this.f14543r = f10;
        this.f14544s = z10;
        this.f14545t = j15 != -1 ? j15 : j10;
        this.f14546u = i12;
        this.f14547v = i13;
        this.f14548w = z11;
        this.f14549x = workSource;
        this.f14550y = pVar;
    }

    private static String r(long j10) {
        if (j10 == LongCompanionObject.MAX_VALUE) {
            return "∞";
        }
        return mg.q.a(j10);
    }

    public long b() {
        return this.f14541p;
    }

    public int c() {
        return this.f14546u;
    }

    public long d() {
        return this.f14538e;
    }

    public long e() {
        return this.f14545t;
    }

    public boolean equals(Object obj) {
        if (obj instanceof LocationRequest) {
            LocationRequest locationRequest = (LocationRequest) obj;
            if (this.f14537d == locationRequest.f14537d && ((p() || this.f14538e == locationRequest.f14538e) && this.f14539i == locationRequest.f14539i && o() == locationRequest.o() && ((!o() || this.f14540o == locationRequest.f14540o) && this.f14541p == locationRequest.f14541p && this.f14542q == locationRequest.f14542q && this.f14543r == locationRequest.f14543r && this.f14544s == locationRequest.f14544s && this.f14546u == locationRequest.f14546u && this.f14547v == locationRequest.f14547v && this.f14548w == locationRequest.f14548w && this.f14549x.equals(locationRequest.f14549x) && o.a(this.f14550y, locationRequest.f14550y)))) {
                return true;
            }
        }
        return false;
    }

    public long f() {
        return this.f14540o;
    }

    public int h() {
        return this.f14542q;
    }

    public int hashCode() {
        return o.b(Integer.valueOf(this.f14537d), Long.valueOf(this.f14538e), Long.valueOf(this.f14539i), this.f14549x);
    }

    public float i() {
        return this.f14543r;
    }

    public long j() {
        return this.f14539i;
    }

    public int l() {
        return this.f14537d;
    }

    public boolean o() {
        long j10 = this.f14540o;
        return j10 > 0 && (j10 >> 1) >= this.f14538e;
    }

    public boolean p() {
        return this.f14537d == 105;
    }

    public boolean q() {
        return this.f14544s;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder();
        sb2.append("Request[");
        if (p()) {
            sb2.append(m.b(this.f14537d));
            if (this.f14540o > 0) {
                sb2.append("/");
                mg.q.b(this.f14540o, sb2);
            }
        } else {
            sb2.append("@");
            if (o()) {
                mg.q.b(this.f14538e, sb2);
                sb2.append("/");
                mg.q.b(this.f14540o, sb2);
            } else {
                mg.q.b(this.f14538e, sb2);
            }
            sb2.append(" ");
            sb2.append(m.b(this.f14537d));
        }
        if (p() || this.f14539i != this.f14538e) {
            sb2.append(", minUpdateInterval=");
            sb2.append(r(this.f14539i));
        }
        if (this.f14543r > 0.0d) {
            sb2.append(", minUpdateDistance=");
            sb2.append(this.f14543r);
        }
        if (!p() ? this.f14545t != this.f14538e : this.f14545t != LongCompanionObject.MAX_VALUE) {
            sb2.append(", maxUpdateAge=");
            sb2.append(r(this.f14545t));
        }
        if (this.f14541p != LongCompanionObject.MAX_VALUE) {
            sb2.append(", duration=");
            mg.q.b(this.f14541p, sb2);
        }
        if (this.f14542q != Integer.MAX_VALUE) {
            sb2.append(", maxUpdates=");
            sb2.append(this.f14542q);
        }
        if (this.f14547v != 0) {
            sb2.append(", ");
            sb2.append(n.a(this.f14547v));
        }
        if (this.f14546u != 0) {
            sb2.append(", ");
            sb2.append(vg.p.a(this.f14546u));
        }
        if (this.f14544s) {
            sb2.append(", waitForAccurateLocation");
        }
        if (this.f14548w) {
            sb2.append(", bypass");
        }
        if (!com.google.android.gms.common.util.o.d(this.f14549x)) {
            sb2.append(", ");
            sb2.append(this.f14549x);
        }
        if (this.f14550y != null) {
            sb2.append(", impersonation=");
            sb2.append(this.f14550y);
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
        c.l(parcel, 13, this.f14547v);
        c.c(parcel, 15, this.f14548w);
        c.q(parcel, 16, this.f14549x, i10, false);
        c.q(parcel, 17, this.f14550y, i10, false);
        c.b(parcel, a10);
    }
}
