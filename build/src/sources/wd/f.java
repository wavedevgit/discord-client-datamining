package wd;

import android.net.Uri;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import ni.s;
import ni.t;
import ni.v;
import rc.m;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class f extends h {

    /* renamed from: d  reason: collision with root package name */
    public final int f53566d;

    /* renamed from: e  reason: collision with root package name */
    public final long f53567e;

    /* renamed from: f  reason: collision with root package name */
    public final boolean f53568f;

    /* renamed from: g  reason: collision with root package name */
    public final boolean f53569g;

    /* renamed from: h  reason: collision with root package name */
    public final long f53570h;

    /* renamed from: i  reason: collision with root package name */
    public final boolean f53571i;

    /* renamed from: j  reason: collision with root package name */
    public final int f53572j;

    /* renamed from: k  reason: collision with root package name */
    public final long f53573k;

    /* renamed from: l  reason: collision with root package name */
    public final int f53574l;

    /* renamed from: m  reason: collision with root package name */
    public final long f53575m;

    /* renamed from: n  reason: collision with root package name */
    public final long f53576n;

    /* renamed from: o  reason: collision with root package name */
    public final boolean f53577o;

    /* renamed from: p  reason: collision with root package name */
    public final boolean f53578p;

    /* renamed from: q  reason: collision with root package name */
    public final m f53579q;

    /* renamed from: r  reason: collision with root package name */
    public final List f53580r;

    /* renamed from: s  reason: collision with root package name */
    public final List f53581s;

    /* renamed from: t  reason: collision with root package name */
    public final Map f53582t;

    /* renamed from: u  reason: collision with root package name */
    public final long f53583u;

    /* renamed from: v  reason: collision with root package name */
    public final C0718f f53584v;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b extends e {

        /* renamed from: w  reason: collision with root package name */
        public final boolean f53585w;

        /* renamed from: x  reason: collision with root package name */
        public final boolean f53586x;

        public b(String str, d dVar, long j10, int i10, long j11, m mVar, String str2, String str3, long j12, long j13, boolean z10, boolean z11, boolean z12) {
            super(str, dVar, j10, i10, j11, mVar, str2, str3, j12, j13, z10);
            this.f53585w = z11;
            this.f53586x = z12;
        }

        public b d(long j10, int i10) {
            return new b(this.f53592d, this.f53593e, this.f53594i, i10, j10, this.f53597q, this.f53598r, this.f53599s, this.f53600t, this.f53601u, this.f53602v, this.f53585w, this.f53586x);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c {

        /* renamed from: a  reason: collision with root package name */
        public final Uri f53587a;

        /* renamed from: b  reason: collision with root package name */
        public final long f53588b;

        /* renamed from: c  reason: collision with root package name */
        public final int f53589c;

        public c(Uri uri, long j10, int i10) {
            this.f53587a = uri;
            this.f53588b = j10;
            this.f53589c = i10;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class e implements Comparable {

        /* renamed from: d  reason: collision with root package name */
        public final String f53592d;

        /* renamed from: e  reason: collision with root package name */
        public final d f53593e;

        /* renamed from: i  reason: collision with root package name */
        public final long f53594i;

        /* renamed from: o  reason: collision with root package name */
        public final int f53595o;

        /* renamed from: p  reason: collision with root package name */
        public final long f53596p;

        /* renamed from: q  reason: collision with root package name */
        public final m f53597q;

        /* renamed from: r  reason: collision with root package name */
        public final String f53598r;

        /* renamed from: s  reason: collision with root package name */
        public final String f53599s;

        /* renamed from: t  reason: collision with root package name */
        public final long f53600t;

        /* renamed from: u  reason: collision with root package name */
        public final long f53601u;

        /* renamed from: v  reason: collision with root package name */
        public final boolean f53602v;

        @Override // java.lang.Comparable
        /* renamed from: a */
        public int compareTo(Long l10) {
            if (this.f53596p > l10.longValue()) {
                return 1;
            }
            if (this.f53596p < l10.longValue()) {
                return -1;
            }
            return 0;
        }

        private e(String str, d dVar, long j10, int i10, long j11, m mVar, String str2, String str3, long j12, long j13, boolean z10) {
            this.f53592d = str;
            this.f53593e = dVar;
            this.f53594i = j10;
            this.f53595o = i10;
            this.f53596p = j11;
            this.f53597q = mVar;
            this.f53598r = str2;
            this.f53599s = str3;
            this.f53600t = j12;
            this.f53601u = j13;
            this.f53602v = z10;
        }
    }

    /* renamed from: wd.f$f  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0718f {

        /* renamed from: a  reason: collision with root package name */
        public final long f53603a;

        /* renamed from: b  reason: collision with root package name */
        public final boolean f53604b;

        /* renamed from: c  reason: collision with root package name */
        public final long f53605c;

        /* renamed from: d  reason: collision with root package name */
        public final long f53606d;

        /* renamed from: e  reason: collision with root package name */
        public final boolean f53607e;

        public C0718f(long j10, boolean z10, long j11, long j12, boolean z11) {
            this.f53603a = j10;
            this.f53604b = z10;
            this.f53605c = j11;
            this.f53606d = j12;
            this.f53607e = z11;
        }
    }

    public f(int i10, String str, List list, long j10, boolean z10, long j11, boolean z11, int i11, long j12, int i12, long j13, long j14, boolean z12, boolean z13, boolean z14, m mVar, List list2, List list3, C0718f c0718f, Map map) {
        super(str, list, z12);
        this.f53566d = i10;
        this.f53570h = j11;
        this.f53569g = z10;
        this.f53571i = z11;
        this.f53572j = i11;
        this.f53573k = j12;
        this.f53574l = i12;
        this.f53575m = j13;
        this.f53576n = j14;
        this.f53577o = z13;
        this.f53578p = z14;
        this.f53579q = mVar;
        this.f53580r = s.o(list2);
        this.f53581s = s.o(list3);
        this.f53582t = t.c(map);
        if (!list3.isEmpty()) {
            b bVar = (b) v.c(list3);
            this.f53583u = bVar.f53596p + bVar.f53594i;
        } else if (!list2.isEmpty()) {
            d dVar = (d) v.c(list2);
            this.f53583u = dVar.f53596p + dVar.f53594i;
        } else {
            this.f53583u = 0L;
        }
        long j15 = -9223372036854775807L;
        if (j10 != -9223372036854775807L) {
            if (j10 >= 0) {
                j15 = Math.min(this.f53583u, j10);
            } else {
                j15 = Math.max(0L, this.f53583u + j10);
            }
        }
        this.f53567e = j15;
        this.f53568f = j10 >= 0;
        this.f53584v = c0718f;
    }

    public f c(long j10, int i10) {
        return new f(this.f53566d, this.f53629a, this.f53630b, this.f53567e, this.f53569g, j10, true, i10, this.f53573k, this.f53574l, this.f53575m, this.f53576n, this.f53631c, this.f53577o, this.f53578p, this.f53579q, this.f53580r, this.f53581s, this.f53584v, this.f53582t);
    }

    public f d() {
        if (this.f53577o) {
            return this;
        }
        return new f(this.f53566d, this.f53629a, this.f53630b, this.f53567e, this.f53569g, this.f53570h, this.f53571i, this.f53572j, this.f53573k, this.f53574l, this.f53575m, this.f53576n, this.f53631c, true, this.f53578p, this.f53579q, this.f53580r, this.f53581s, this.f53584v, this.f53582t);
    }

    public long e() {
        return this.f53570h + this.f53583u;
    }

    public boolean f(f fVar) {
        if (fVar != null) {
            long j10 = this.f53573k;
            long j11 = fVar.f53573k;
            if (j10 <= j11) {
                if (j10 < j11) {
                    return false;
                }
                int size = this.f53580r.size() - fVar.f53580r.size();
                if (size != 0) {
                    if (size > 0) {
                        return true;
                    }
                    return false;
                }
                int size2 = this.f53581s.size();
                int size3 = fVar.f53581s.size();
                if (size2 <= size3 && (size2 != size3 || !this.f53577o || fVar.f53577o)) {
                    return false;
                }
            }
        }
        return true;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class d extends e {

        /* renamed from: w  reason: collision with root package name */
        public final String f53590w;

        /* renamed from: x  reason: collision with root package name */
        public final List f53591x;

        public d(String str, long j10, long j11, String str2, String str3) {
            this(str, null, "", 0L, -1, -9223372036854775807L, null, str2, str3, j10, j11, false, s.t());
        }

        public d d(long j10, int i10) {
            ArrayList arrayList = new ArrayList();
            long j11 = j10;
            for (int i11 = 0; i11 < this.f53591x.size(); i11++) {
                b bVar = (b) this.f53591x.get(i11);
                arrayList.add(bVar.d(j11, i10));
                j11 += bVar.f53594i;
            }
            return new d(this.f53592d, this.f53593e, this.f53590w, this.f53594i, i10, j10, this.f53597q, this.f53598r, this.f53599s, this.f53600t, this.f53601u, this.f53602v, arrayList);
        }

        public d(String str, d dVar, String str2, long j10, int i10, long j11, m mVar, String str3, String str4, long j12, long j13, boolean z10, List list) {
            super(str, dVar, j10, i10, j11, mVar, str3, str4, j12, j13, z10);
            this.f53590w = str2;
            this.f53591x = s.o(list);
        }
    }

    @Override // pd.a
    /* renamed from: b */
    public f a(List list) {
        return this;
    }
}
