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
    public final int f52130d;

    /* renamed from: e  reason: collision with root package name */
    public final long f52131e;

    /* renamed from: f  reason: collision with root package name */
    public final boolean f52132f;

    /* renamed from: g  reason: collision with root package name */
    public final boolean f52133g;

    /* renamed from: h  reason: collision with root package name */
    public final long f52134h;

    /* renamed from: i  reason: collision with root package name */
    public final boolean f52135i;

    /* renamed from: j  reason: collision with root package name */
    public final int f52136j;

    /* renamed from: k  reason: collision with root package name */
    public final long f52137k;

    /* renamed from: l  reason: collision with root package name */
    public final int f52138l;

    /* renamed from: m  reason: collision with root package name */
    public final long f52139m;

    /* renamed from: n  reason: collision with root package name */
    public final long f52140n;

    /* renamed from: o  reason: collision with root package name */
    public final boolean f52141o;

    /* renamed from: p  reason: collision with root package name */
    public final boolean f52142p;

    /* renamed from: q  reason: collision with root package name */
    public final m f52143q;

    /* renamed from: r  reason: collision with root package name */
    public final List f52144r;

    /* renamed from: s  reason: collision with root package name */
    public final List f52145s;

    /* renamed from: t  reason: collision with root package name */
    public final Map f52146t;

    /* renamed from: u  reason: collision with root package name */
    public final long f52147u;

    /* renamed from: v  reason: collision with root package name */
    public final C0698f f52148v;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b extends e {

        /* renamed from: w  reason: collision with root package name */
        public final boolean f52149w;

        /* renamed from: x  reason: collision with root package name */
        public final boolean f52150x;

        public b(String str, d dVar, long j10, int i10, long j11, m mVar, String str2, String str3, long j12, long j13, boolean z10, boolean z11, boolean z12) {
            super(str, dVar, j10, i10, j11, mVar, str2, str3, j12, j13, z10);
            this.f52149w = z11;
            this.f52150x = z12;
        }

        public b d(long j10, int i10) {
            return new b(this.f52156d, this.f52157e, this.f52158i, i10, j10, this.f52161q, this.f52162r, this.f52163s, this.f52164t, this.f52165u, this.f52166v, this.f52149w, this.f52150x);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c {

        /* renamed from: a  reason: collision with root package name */
        public final Uri f52151a;

        /* renamed from: b  reason: collision with root package name */
        public final long f52152b;

        /* renamed from: c  reason: collision with root package name */
        public final int f52153c;

        public c(Uri uri, long j10, int i10) {
            this.f52151a = uri;
            this.f52152b = j10;
            this.f52153c = i10;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class e implements Comparable {

        /* renamed from: d  reason: collision with root package name */
        public final String f52156d;

        /* renamed from: e  reason: collision with root package name */
        public final d f52157e;

        /* renamed from: i  reason: collision with root package name */
        public final long f52158i;

        /* renamed from: o  reason: collision with root package name */
        public final int f52159o;

        /* renamed from: p  reason: collision with root package name */
        public final long f52160p;

        /* renamed from: q  reason: collision with root package name */
        public final m f52161q;

        /* renamed from: r  reason: collision with root package name */
        public final String f52162r;

        /* renamed from: s  reason: collision with root package name */
        public final String f52163s;

        /* renamed from: t  reason: collision with root package name */
        public final long f52164t;

        /* renamed from: u  reason: collision with root package name */
        public final long f52165u;

        /* renamed from: v  reason: collision with root package name */
        public final boolean f52166v;

        @Override // java.lang.Comparable
        /* renamed from: a */
        public int compareTo(Long l10) {
            if (this.f52160p > l10.longValue()) {
                return 1;
            }
            if (this.f52160p < l10.longValue()) {
                return -1;
            }
            return 0;
        }

        private e(String str, d dVar, long j10, int i10, long j11, m mVar, String str2, String str3, long j12, long j13, boolean z10) {
            this.f52156d = str;
            this.f52157e = dVar;
            this.f52158i = j10;
            this.f52159o = i10;
            this.f52160p = j11;
            this.f52161q = mVar;
            this.f52162r = str2;
            this.f52163s = str3;
            this.f52164t = j12;
            this.f52165u = j13;
            this.f52166v = z10;
        }
    }

    /* renamed from: wd.f$f  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0698f {

        /* renamed from: a  reason: collision with root package name */
        public final long f52167a;

        /* renamed from: b  reason: collision with root package name */
        public final boolean f52168b;

        /* renamed from: c  reason: collision with root package name */
        public final long f52169c;

        /* renamed from: d  reason: collision with root package name */
        public final long f52170d;

        /* renamed from: e  reason: collision with root package name */
        public final boolean f52171e;

        public C0698f(long j10, boolean z10, long j11, long j12, boolean z11) {
            this.f52167a = j10;
            this.f52168b = z10;
            this.f52169c = j11;
            this.f52170d = j12;
            this.f52171e = z11;
        }
    }

    public f(int i10, String str, List list, long j10, boolean z10, long j11, boolean z11, int i11, long j12, int i12, long j13, long j14, boolean z12, boolean z13, boolean z14, m mVar, List list2, List list3, C0698f c0698f, Map map) {
        super(str, list, z12);
        this.f52130d = i10;
        this.f52134h = j11;
        this.f52133g = z10;
        this.f52135i = z11;
        this.f52136j = i11;
        this.f52137k = j12;
        this.f52138l = i12;
        this.f52139m = j13;
        this.f52140n = j14;
        this.f52141o = z13;
        this.f52142p = z14;
        this.f52143q = mVar;
        this.f52144r = s.m(list2);
        this.f52145s = s.m(list3);
        this.f52146t = t.c(map);
        if (!list3.isEmpty()) {
            b bVar = (b) v.c(list3);
            this.f52147u = bVar.f52160p + bVar.f52158i;
        } else if (!list2.isEmpty()) {
            d dVar = (d) v.c(list2);
            this.f52147u = dVar.f52160p + dVar.f52158i;
        } else {
            this.f52147u = 0L;
        }
        long j15 = -9223372036854775807L;
        if (j10 != -9223372036854775807L) {
            if (j10 >= 0) {
                j15 = Math.min(this.f52147u, j10);
            } else {
                j15 = Math.max(0L, this.f52147u + j10);
            }
        }
        this.f52131e = j15;
        this.f52132f = j10 >= 0;
        this.f52148v = c0698f;
    }

    public f c(long j10, int i10) {
        return new f(this.f52130d, this.f52193a, this.f52194b, this.f52131e, this.f52133g, j10, true, i10, this.f52137k, this.f52138l, this.f52139m, this.f52140n, this.f52195c, this.f52141o, this.f52142p, this.f52143q, this.f52144r, this.f52145s, this.f52148v, this.f52146t);
    }

    public f d() {
        if (this.f52141o) {
            return this;
        }
        return new f(this.f52130d, this.f52193a, this.f52194b, this.f52131e, this.f52133g, this.f52134h, this.f52135i, this.f52136j, this.f52137k, this.f52138l, this.f52139m, this.f52140n, this.f52195c, true, this.f52142p, this.f52143q, this.f52144r, this.f52145s, this.f52148v, this.f52146t);
    }

    public long e() {
        return this.f52134h + this.f52147u;
    }

    public boolean f(f fVar) {
        if (fVar != null) {
            long j10 = this.f52137k;
            long j11 = fVar.f52137k;
            if (j10 <= j11) {
                if (j10 < j11) {
                    return false;
                }
                int size = this.f52144r.size() - fVar.f52144r.size();
                if (size != 0) {
                    if (size > 0) {
                        return true;
                    }
                    return false;
                }
                int size2 = this.f52145s.size();
                int size3 = fVar.f52145s.size();
                if (size2 <= size3 && (size2 != size3 || !this.f52141o || fVar.f52141o)) {
                    return false;
                }
            }
        }
        return true;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class d extends e {

        /* renamed from: w  reason: collision with root package name */
        public final String f52154w;

        /* renamed from: x  reason: collision with root package name */
        public final List f52155x;

        public d(String str, long j10, long j11, String str2, String str3) {
            this(str, null, "", 0L, -1, -9223372036854775807L, null, str2, str3, j10, j11, false, s.r());
        }

        public d d(long j10, int i10) {
            ArrayList arrayList = new ArrayList();
            long j11 = j10;
            for (int i11 = 0; i11 < this.f52155x.size(); i11++) {
                b bVar = (b) this.f52155x.get(i11);
                arrayList.add(bVar.d(j11, i10));
                j11 += bVar.f52158i;
            }
            return new d(this.f52156d, this.f52157e, this.f52154w, this.f52158i, i10, j10, this.f52161q, this.f52162r, this.f52163s, this.f52164t, this.f52165u, this.f52166v, arrayList);
        }

        public d(String str, d dVar, String str2, long j10, int i10, long j11, m mVar, String str3, String str4, long j12, long j13, boolean z10, List list) {
            super(str, dVar, j10, i10, j11, mVar, str3, str4, j12, j13, z10);
            this.f52154w = str2;
            this.f52155x = s.m(list);
        }
    }

    @Override // pd.a
    /* renamed from: b */
    public f a(List list) {
        return this;
    }
}
