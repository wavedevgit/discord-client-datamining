package wd;

import android.net.Uri;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import ji.s;
import ji.t;
import ji.v;
import rc.m;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class f extends h {

    /* renamed from: d  reason: collision with root package name */
    public final int f52133d;

    /* renamed from: e  reason: collision with root package name */
    public final long f52134e;

    /* renamed from: f  reason: collision with root package name */
    public final boolean f52135f;

    /* renamed from: g  reason: collision with root package name */
    public final boolean f52136g;

    /* renamed from: h  reason: collision with root package name */
    public final long f52137h;

    /* renamed from: i  reason: collision with root package name */
    public final boolean f52138i;

    /* renamed from: j  reason: collision with root package name */
    public final int f52139j;

    /* renamed from: k  reason: collision with root package name */
    public final long f52140k;

    /* renamed from: l  reason: collision with root package name */
    public final int f52141l;

    /* renamed from: m  reason: collision with root package name */
    public final long f52142m;

    /* renamed from: n  reason: collision with root package name */
    public final long f52143n;

    /* renamed from: o  reason: collision with root package name */
    public final boolean f52144o;

    /* renamed from: p  reason: collision with root package name */
    public final boolean f52145p;

    /* renamed from: q  reason: collision with root package name */
    public final m f52146q;

    /* renamed from: r  reason: collision with root package name */
    public final List f52147r;

    /* renamed from: s  reason: collision with root package name */
    public final List f52148s;

    /* renamed from: t  reason: collision with root package name */
    public final Map f52149t;

    /* renamed from: u  reason: collision with root package name */
    public final long f52150u;

    /* renamed from: v  reason: collision with root package name */
    public final C0698f f52151v;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b extends e {

        /* renamed from: w  reason: collision with root package name */
        public final boolean f52152w;

        /* renamed from: x  reason: collision with root package name */
        public final boolean f52153x;

        public b(String str, d dVar, long j10, int i10, long j11, m mVar, String str2, String str3, long j12, long j13, boolean z10, boolean z11, boolean z12) {
            super(str, dVar, j10, i10, j11, mVar, str2, str3, j12, j13, z10);
            this.f52152w = z11;
            this.f52153x = z12;
        }

        public b d(long j10, int i10) {
            return new b(this.f52159d, this.f52160e, this.f52161i, i10, j10, this.f52164q, this.f52165r, this.f52166s, this.f52167t, this.f52168u, this.f52169v, this.f52152w, this.f52153x);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c {

        /* renamed from: a  reason: collision with root package name */
        public final Uri f52154a;

        /* renamed from: b  reason: collision with root package name */
        public final long f52155b;

        /* renamed from: c  reason: collision with root package name */
        public final int f52156c;

        public c(Uri uri, long j10, int i10) {
            this.f52154a = uri;
            this.f52155b = j10;
            this.f52156c = i10;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class e implements Comparable {

        /* renamed from: d  reason: collision with root package name */
        public final String f52159d;

        /* renamed from: e  reason: collision with root package name */
        public final d f52160e;

        /* renamed from: i  reason: collision with root package name */
        public final long f52161i;

        /* renamed from: o  reason: collision with root package name */
        public final int f52162o;

        /* renamed from: p  reason: collision with root package name */
        public final long f52163p;

        /* renamed from: q  reason: collision with root package name */
        public final m f52164q;

        /* renamed from: r  reason: collision with root package name */
        public final String f52165r;

        /* renamed from: s  reason: collision with root package name */
        public final String f52166s;

        /* renamed from: t  reason: collision with root package name */
        public final long f52167t;

        /* renamed from: u  reason: collision with root package name */
        public final long f52168u;

        /* renamed from: v  reason: collision with root package name */
        public final boolean f52169v;

        @Override // java.lang.Comparable
        /* renamed from: a */
        public int compareTo(Long l10) {
            if (this.f52163p > l10.longValue()) {
                return 1;
            }
            if (this.f52163p < l10.longValue()) {
                return -1;
            }
            return 0;
        }

        private e(String str, d dVar, long j10, int i10, long j11, m mVar, String str2, String str3, long j12, long j13, boolean z10) {
            this.f52159d = str;
            this.f52160e = dVar;
            this.f52161i = j10;
            this.f52162o = i10;
            this.f52163p = j11;
            this.f52164q = mVar;
            this.f52165r = str2;
            this.f52166s = str3;
            this.f52167t = j12;
            this.f52168u = j13;
            this.f52169v = z10;
        }
    }

    /* renamed from: wd.f$f  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0698f {

        /* renamed from: a  reason: collision with root package name */
        public final long f52170a;

        /* renamed from: b  reason: collision with root package name */
        public final boolean f52171b;

        /* renamed from: c  reason: collision with root package name */
        public final long f52172c;

        /* renamed from: d  reason: collision with root package name */
        public final long f52173d;

        /* renamed from: e  reason: collision with root package name */
        public final boolean f52174e;

        public C0698f(long j10, boolean z10, long j11, long j12, boolean z11) {
            this.f52170a = j10;
            this.f52171b = z10;
            this.f52172c = j11;
            this.f52173d = j12;
            this.f52174e = z11;
        }
    }

    public f(int i10, String str, List list, long j10, boolean z10, long j11, boolean z11, int i11, long j12, int i12, long j13, long j14, boolean z12, boolean z13, boolean z14, m mVar, List list2, List list3, C0698f c0698f, Map map) {
        super(str, list, z12);
        this.f52133d = i10;
        this.f52137h = j11;
        this.f52136g = z10;
        this.f52138i = z11;
        this.f52139j = i11;
        this.f52140k = j12;
        this.f52141l = i12;
        this.f52142m = j13;
        this.f52143n = j14;
        this.f52144o = z13;
        this.f52145p = z14;
        this.f52146q = mVar;
        this.f52147r = s.m(list2);
        this.f52148s = s.m(list3);
        this.f52149t = t.c(map);
        if (!list3.isEmpty()) {
            b bVar = (b) v.c(list3);
            this.f52150u = bVar.f52163p + bVar.f52161i;
        } else if (!list2.isEmpty()) {
            d dVar = (d) v.c(list2);
            this.f52150u = dVar.f52163p + dVar.f52161i;
        } else {
            this.f52150u = 0L;
        }
        long j15 = -9223372036854775807L;
        if (j10 != -9223372036854775807L) {
            if (j10 >= 0) {
                j15 = Math.min(this.f52150u, j10);
            } else {
                j15 = Math.max(0L, this.f52150u + j10);
            }
        }
        this.f52134e = j15;
        this.f52135f = j10 >= 0;
        this.f52151v = c0698f;
    }

    public f c(long j10, int i10) {
        return new f(this.f52133d, this.f52196a, this.f52197b, this.f52134e, this.f52136g, j10, true, i10, this.f52140k, this.f52141l, this.f52142m, this.f52143n, this.f52198c, this.f52144o, this.f52145p, this.f52146q, this.f52147r, this.f52148s, this.f52151v, this.f52149t);
    }

    public f d() {
        if (this.f52144o) {
            return this;
        }
        return new f(this.f52133d, this.f52196a, this.f52197b, this.f52134e, this.f52136g, this.f52137h, this.f52138i, this.f52139j, this.f52140k, this.f52141l, this.f52142m, this.f52143n, this.f52198c, true, this.f52145p, this.f52146q, this.f52147r, this.f52148s, this.f52151v, this.f52149t);
    }

    public long e() {
        return this.f52137h + this.f52150u;
    }

    public boolean f(f fVar) {
        if (fVar != null) {
            long j10 = this.f52140k;
            long j11 = fVar.f52140k;
            if (j10 <= j11) {
                if (j10 < j11) {
                    return false;
                }
                int size = this.f52147r.size() - fVar.f52147r.size();
                if (size != 0) {
                    if (size > 0) {
                        return true;
                    }
                    return false;
                }
                int size2 = this.f52148s.size();
                int size3 = fVar.f52148s.size();
                if (size2 <= size3 && (size2 != size3 || !this.f52144o || fVar.f52144o)) {
                    return false;
                }
            }
        }
        return true;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class d extends e {

        /* renamed from: w  reason: collision with root package name */
        public final String f52157w;

        /* renamed from: x  reason: collision with root package name */
        public final List f52158x;

        public d(String str, long j10, long j11, String str2, String str3) {
            this(str, null, "", 0L, -1, -9223372036854775807L, null, str2, str3, j10, j11, false, s.r());
        }

        public d d(long j10, int i10) {
            ArrayList arrayList = new ArrayList();
            long j11 = j10;
            for (int i11 = 0; i11 < this.f52158x.size(); i11++) {
                b bVar = (b) this.f52158x.get(i11);
                arrayList.add(bVar.d(j11, i10));
                j11 += bVar.f52161i;
            }
            return new d(this.f52159d, this.f52160e, this.f52157w, this.f52161i, i10, j10, this.f52164q, this.f52165r, this.f52166s, this.f52167t, this.f52168u, this.f52169v, arrayList);
        }

        public d(String str, d dVar, String str2, long j10, int i10, long j11, m mVar, String str3, String str4, long j12, long j13, boolean z10, List list) {
            super(str, dVar, j10, i10, j11, mVar, str3, str4, j12, j13, z10);
            this.f52157w = str2;
            this.f52158x = s.m(list);
        }
    }

    @Override // pd.a
    /* renamed from: b */
    public f a(List list) {
        return this;
    }
}
