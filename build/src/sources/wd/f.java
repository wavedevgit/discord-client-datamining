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
    public final int f53614d;

    /* renamed from: e  reason: collision with root package name */
    public final long f53615e;

    /* renamed from: f  reason: collision with root package name */
    public final boolean f53616f;

    /* renamed from: g  reason: collision with root package name */
    public final boolean f53617g;

    /* renamed from: h  reason: collision with root package name */
    public final long f53618h;

    /* renamed from: i  reason: collision with root package name */
    public final boolean f53619i;

    /* renamed from: j  reason: collision with root package name */
    public final int f53620j;

    /* renamed from: k  reason: collision with root package name */
    public final long f53621k;

    /* renamed from: l  reason: collision with root package name */
    public final int f53622l;

    /* renamed from: m  reason: collision with root package name */
    public final long f53623m;

    /* renamed from: n  reason: collision with root package name */
    public final long f53624n;

    /* renamed from: o  reason: collision with root package name */
    public final boolean f53625o;

    /* renamed from: p  reason: collision with root package name */
    public final boolean f53626p;

    /* renamed from: q  reason: collision with root package name */
    public final m f53627q;

    /* renamed from: r  reason: collision with root package name */
    public final List f53628r;

    /* renamed from: s  reason: collision with root package name */
    public final List f53629s;

    /* renamed from: t  reason: collision with root package name */
    public final Map f53630t;

    /* renamed from: u  reason: collision with root package name */
    public final long f53631u;

    /* renamed from: v  reason: collision with root package name */
    public final C0718f f53632v;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b extends e {

        /* renamed from: w  reason: collision with root package name */
        public final boolean f53633w;

        /* renamed from: x  reason: collision with root package name */
        public final boolean f53634x;

        public b(String str, d dVar, long j10, int i10, long j11, m mVar, String str2, String str3, long j12, long j13, boolean z10, boolean z11, boolean z12) {
            super(str, dVar, j10, i10, j11, mVar, str2, str3, j12, j13, z10);
            this.f53633w = z11;
            this.f53634x = z12;
        }

        public b d(long j10, int i10) {
            return new b(this.f53640d, this.f53641e, this.f53642i, i10, j10, this.f53645q, this.f53646r, this.f53647s, this.f53648t, this.f53649u, this.f53650v, this.f53633w, this.f53634x);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c {

        /* renamed from: a  reason: collision with root package name */
        public final Uri f53635a;

        /* renamed from: b  reason: collision with root package name */
        public final long f53636b;

        /* renamed from: c  reason: collision with root package name */
        public final int f53637c;

        public c(Uri uri, long j10, int i10) {
            this.f53635a = uri;
            this.f53636b = j10;
            this.f53637c = i10;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class e implements Comparable {

        /* renamed from: d  reason: collision with root package name */
        public final String f53640d;

        /* renamed from: e  reason: collision with root package name */
        public final d f53641e;

        /* renamed from: i  reason: collision with root package name */
        public final long f53642i;

        /* renamed from: o  reason: collision with root package name */
        public final int f53643o;

        /* renamed from: p  reason: collision with root package name */
        public final long f53644p;

        /* renamed from: q  reason: collision with root package name */
        public final m f53645q;

        /* renamed from: r  reason: collision with root package name */
        public final String f53646r;

        /* renamed from: s  reason: collision with root package name */
        public final String f53647s;

        /* renamed from: t  reason: collision with root package name */
        public final long f53648t;

        /* renamed from: u  reason: collision with root package name */
        public final long f53649u;

        /* renamed from: v  reason: collision with root package name */
        public final boolean f53650v;

        @Override // java.lang.Comparable
        /* renamed from: a */
        public int compareTo(Long l10) {
            if (this.f53644p > l10.longValue()) {
                return 1;
            }
            if (this.f53644p < l10.longValue()) {
                return -1;
            }
            return 0;
        }

        private e(String str, d dVar, long j10, int i10, long j11, m mVar, String str2, String str3, long j12, long j13, boolean z10) {
            this.f53640d = str;
            this.f53641e = dVar;
            this.f53642i = j10;
            this.f53643o = i10;
            this.f53644p = j11;
            this.f53645q = mVar;
            this.f53646r = str2;
            this.f53647s = str3;
            this.f53648t = j12;
            this.f53649u = j13;
            this.f53650v = z10;
        }
    }

    /* renamed from: wd.f$f  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0718f {

        /* renamed from: a  reason: collision with root package name */
        public final long f53651a;

        /* renamed from: b  reason: collision with root package name */
        public final boolean f53652b;

        /* renamed from: c  reason: collision with root package name */
        public final long f53653c;

        /* renamed from: d  reason: collision with root package name */
        public final long f53654d;

        /* renamed from: e  reason: collision with root package name */
        public final boolean f53655e;

        public C0718f(long j10, boolean z10, long j11, long j12, boolean z11) {
            this.f53651a = j10;
            this.f53652b = z10;
            this.f53653c = j11;
            this.f53654d = j12;
            this.f53655e = z11;
        }
    }

    public f(int i10, String str, List list, long j10, boolean z10, long j11, boolean z11, int i11, long j12, int i12, long j13, long j14, boolean z12, boolean z13, boolean z14, m mVar, List list2, List list3, C0718f c0718f, Map map) {
        super(str, list, z12);
        this.f53614d = i10;
        this.f53618h = j11;
        this.f53617g = z10;
        this.f53619i = z11;
        this.f53620j = i11;
        this.f53621k = j12;
        this.f53622l = i12;
        this.f53623m = j13;
        this.f53624n = j14;
        this.f53625o = z13;
        this.f53626p = z14;
        this.f53627q = mVar;
        this.f53628r = s.o(list2);
        this.f53629s = s.o(list3);
        this.f53630t = t.c(map);
        if (!list3.isEmpty()) {
            b bVar = (b) v.c(list3);
            this.f53631u = bVar.f53644p + bVar.f53642i;
        } else if (!list2.isEmpty()) {
            d dVar = (d) v.c(list2);
            this.f53631u = dVar.f53644p + dVar.f53642i;
        } else {
            this.f53631u = 0L;
        }
        long j15 = -9223372036854775807L;
        if (j10 != -9223372036854775807L) {
            if (j10 >= 0) {
                j15 = Math.min(this.f53631u, j10);
            } else {
                j15 = Math.max(0L, this.f53631u + j10);
            }
        }
        this.f53615e = j15;
        this.f53616f = j10 >= 0;
        this.f53632v = c0718f;
    }

    public f c(long j10, int i10) {
        return new f(this.f53614d, this.f53677a, this.f53678b, this.f53615e, this.f53617g, j10, true, i10, this.f53621k, this.f53622l, this.f53623m, this.f53624n, this.f53679c, this.f53625o, this.f53626p, this.f53627q, this.f53628r, this.f53629s, this.f53632v, this.f53630t);
    }

    public f d() {
        if (this.f53625o) {
            return this;
        }
        return new f(this.f53614d, this.f53677a, this.f53678b, this.f53615e, this.f53617g, this.f53618h, this.f53619i, this.f53620j, this.f53621k, this.f53622l, this.f53623m, this.f53624n, this.f53679c, true, this.f53626p, this.f53627q, this.f53628r, this.f53629s, this.f53632v, this.f53630t);
    }

    public long e() {
        return this.f53618h + this.f53631u;
    }

    public boolean f(f fVar) {
        if (fVar != null) {
            long j10 = this.f53621k;
            long j11 = fVar.f53621k;
            if (j10 <= j11) {
                if (j10 < j11) {
                    return false;
                }
                int size = this.f53628r.size() - fVar.f53628r.size();
                if (size != 0) {
                    if (size > 0) {
                        return true;
                    }
                    return false;
                }
                int size2 = this.f53629s.size();
                int size3 = fVar.f53629s.size();
                if (size2 <= size3 && (size2 != size3 || !this.f53625o || fVar.f53625o)) {
                    return false;
                }
            }
        }
        return true;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class d extends e {

        /* renamed from: w  reason: collision with root package name */
        public final String f53638w;

        /* renamed from: x  reason: collision with root package name */
        public final List f53639x;

        public d(String str, long j10, long j11, String str2, String str3) {
            this(str, null, "", 0L, -1, -9223372036854775807L, null, str2, str3, j10, j11, false, s.t());
        }

        public d d(long j10, int i10) {
            ArrayList arrayList = new ArrayList();
            long j11 = j10;
            for (int i11 = 0; i11 < this.f53639x.size(); i11++) {
                b bVar = (b) this.f53639x.get(i11);
                arrayList.add(bVar.d(j11, i10));
                j11 += bVar.f53642i;
            }
            return new d(this.f53640d, this.f53641e, this.f53638w, this.f53642i, i10, j10, this.f53645q, this.f53646r, this.f53647s, this.f53648t, this.f53649u, this.f53650v, arrayList);
        }

        public d(String str, d dVar, String str2, long j10, int i10, long j11, m mVar, String str3, String str4, long j12, long j13, boolean z10, List list) {
            super(str, dVar, j10, i10, j11, mVar, str3, str4, j12, j13, z10);
            this.f53638w = str2;
            this.f53639x = s.o(list);
        }
    }

    @Override // pd.a
    /* renamed from: b */
    public f a(List list) {
        return this;
    }
}
