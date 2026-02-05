package wd;

import android.net.Uri;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import mi.s;
import mi.t;
import mi.v;
import rc.m;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class f extends h {

    /* renamed from: d  reason: collision with root package name */
    public final int f52787d;

    /* renamed from: e  reason: collision with root package name */
    public final long f52788e;

    /* renamed from: f  reason: collision with root package name */
    public final boolean f52789f;

    /* renamed from: g  reason: collision with root package name */
    public final boolean f52790g;

    /* renamed from: h  reason: collision with root package name */
    public final long f52791h;

    /* renamed from: i  reason: collision with root package name */
    public final boolean f52792i;

    /* renamed from: j  reason: collision with root package name */
    public final int f52793j;

    /* renamed from: k  reason: collision with root package name */
    public final long f52794k;

    /* renamed from: l  reason: collision with root package name */
    public final int f52795l;

    /* renamed from: m  reason: collision with root package name */
    public final long f52796m;

    /* renamed from: n  reason: collision with root package name */
    public final long f52797n;

    /* renamed from: o  reason: collision with root package name */
    public final boolean f52798o;

    /* renamed from: p  reason: collision with root package name */
    public final boolean f52799p;

    /* renamed from: q  reason: collision with root package name */
    public final m f52800q;

    /* renamed from: r  reason: collision with root package name */
    public final List f52801r;

    /* renamed from: s  reason: collision with root package name */
    public final List f52802s;

    /* renamed from: t  reason: collision with root package name */
    public final Map f52803t;

    /* renamed from: u  reason: collision with root package name */
    public final long f52804u;

    /* renamed from: v  reason: collision with root package name */
    public final C0700f f52805v;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b extends e {

        /* renamed from: w  reason: collision with root package name */
        public final boolean f52806w;

        /* renamed from: x  reason: collision with root package name */
        public final boolean f52807x;

        public b(String str, d dVar, long j10, int i10, long j11, m mVar, String str2, String str3, long j12, long j13, boolean z10, boolean z11, boolean z12) {
            super(str, dVar, j10, i10, j11, mVar, str2, str3, j12, j13, z10);
            this.f52806w = z11;
            this.f52807x = z12;
        }

        public b d(long j10, int i10) {
            return new b(this.f52813d, this.f52814e, this.f52815i, i10, j10, this.f52818q, this.f52819r, this.f52820s, this.f52821t, this.f52822u, this.f52823v, this.f52806w, this.f52807x);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c {

        /* renamed from: a  reason: collision with root package name */
        public final Uri f52808a;

        /* renamed from: b  reason: collision with root package name */
        public final long f52809b;

        /* renamed from: c  reason: collision with root package name */
        public final int f52810c;

        public c(Uri uri, long j10, int i10) {
            this.f52808a = uri;
            this.f52809b = j10;
            this.f52810c = i10;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class e implements Comparable {

        /* renamed from: d  reason: collision with root package name */
        public final String f52813d;

        /* renamed from: e  reason: collision with root package name */
        public final d f52814e;

        /* renamed from: i  reason: collision with root package name */
        public final long f52815i;

        /* renamed from: o  reason: collision with root package name */
        public final int f52816o;

        /* renamed from: p  reason: collision with root package name */
        public final long f52817p;

        /* renamed from: q  reason: collision with root package name */
        public final m f52818q;

        /* renamed from: r  reason: collision with root package name */
        public final String f52819r;

        /* renamed from: s  reason: collision with root package name */
        public final String f52820s;

        /* renamed from: t  reason: collision with root package name */
        public final long f52821t;

        /* renamed from: u  reason: collision with root package name */
        public final long f52822u;

        /* renamed from: v  reason: collision with root package name */
        public final boolean f52823v;

        @Override // java.lang.Comparable
        /* renamed from: a */
        public int compareTo(Long l10) {
            if (this.f52817p > l10.longValue()) {
                return 1;
            }
            if (this.f52817p < l10.longValue()) {
                return -1;
            }
            return 0;
        }

        private e(String str, d dVar, long j10, int i10, long j11, m mVar, String str2, String str3, long j12, long j13, boolean z10) {
            this.f52813d = str;
            this.f52814e = dVar;
            this.f52815i = j10;
            this.f52816o = i10;
            this.f52817p = j11;
            this.f52818q = mVar;
            this.f52819r = str2;
            this.f52820s = str3;
            this.f52821t = j12;
            this.f52822u = j13;
            this.f52823v = z10;
        }
    }

    /* renamed from: wd.f$f  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0700f {

        /* renamed from: a  reason: collision with root package name */
        public final long f52824a;

        /* renamed from: b  reason: collision with root package name */
        public final boolean f52825b;

        /* renamed from: c  reason: collision with root package name */
        public final long f52826c;

        /* renamed from: d  reason: collision with root package name */
        public final long f52827d;

        /* renamed from: e  reason: collision with root package name */
        public final boolean f52828e;

        public C0700f(long j10, boolean z10, long j11, long j12, boolean z11) {
            this.f52824a = j10;
            this.f52825b = z10;
            this.f52826c = j11;
            this.f52827d = j12;
            this.f52828e = z11;
        }
    }

    public f(int i10, String str, List list, long j10, boolean z10, long j11, boolean z11, int i11, long j12, int i12, long j13, long j14, boolean z12, boolean z13, boolean z14, m mVar, List list2, List list3, C0700f c0700f, Map map) {
        super(str, list, z12);
        this.f52787d = i10;
        this.f52791h = j11;
        this.f52790g = z10;
        this.f52792i = z11;
        this.f52793j = i11;
        this.f52794k = j12;
        this.f52795l = i12;
        this.f52796m = j13;
        this.f52797n = j14;
        this.f52798o = z13;
        this.f52799p = z14;
        this.f52800q = mVar;
        this.f52801r = s.n(list2);
        this.f52802s = s.n(list3);
        this.f52803t = t.c(map);
        if (!list3.isEmpty()) {
            b bVar = (b) v.c(list3);
            this.f52804u = bVar.f52817p + bVar.f52815i;
        } else if (!list2.isEmpty()) {
            d dVar = (d) v.c(list2);
            this.f52804u = dVar.f52817p + dVar.f52815i;
        } else {
            this.f52804u = 0L;
        }
        long j15 = -9223372036854775807L;
        if (j10 != -9223372036854775807L) {
            if (j10 >= 0) {
                j15 = Math.min(this.f52804u, j10);
            } else {
                j15 = Math.max(0L, this.f52804u + j10);
            }
        }
        this.f52788e = j15;
        this.f52789f = j10 >= 0;
        this.f52805v = c0700f;
    }

    public f c(long j10, int i10) {
        return new f(this.f52787d, this.f52850a, this.f52851b, this.f52788e, this.f52790g, j10, true, i10, this.f52794k, this.f52795l, this.f52796m, this.f52797n, this.f52852c, this.f52798o, this.f52799p, this.f52800q, this.f52801r, this.f52802s, this.f52805v, this.f52803t);
    }

    public f d() {
        if (this.f52798o) {
            return this;
        }
        return new f(this.f52787d, this.f52850a, this.f52851b, this.f52788e, this.f52790g, this.f52791h, this.f52792i, this.f52793j, this.f52794k, this.f52795l, this.f52796m, this.f52797n, this.f52852c, true, this.f52799p, this.f52800q, this.f52801r, this.f52802s, this.f52805v, this.f52803t);
    }

    public long e() {
        return this.f52791h + this.f52804u;
    }

    public boolean f(f fVar) {
        if (fVar != null) {
            long j10 = this.f52794k;
            long j11 = fVar.f52794k;
            if (j10 <= j11) {
                if (j10 < j11) {
                    return false;
                }
                int size = this.f52801r.size() - fVar.f52801r.size();
                if (size != 0) {
                    if (size > 0) {
                        return true;
                    }
                    return false;
                }
                int size2 = this.f52802s.size();
                int size3 = fVar.f52802s.size();
                if (size2 <= size3 && (size2 != size3 || !this.f52798o || fVar.f52798o)) {
                    return false;
                }
            }
        }
        return true;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class d extends e {

        /* renamed from: w  reason: collision with root package name */
        public final String f52811w;

        /* renamed from: x  reason: collision with root package name */
        public final List f52812x;

        public d(String str, long j10, long j11, String str2, String str3) {
            this(str, null, "", 0L, -1, -9223372036854775807L, null, str2, str3, j10, j11, false, s.s());
        }

        public d d(long j10, int i10) {
            ArrayList arrayList = new ArrayList();
            long j11 = j10;
            for (int i11 = 0; i11 < this.f52812x.size(); i11++) {
                b bVar = (b) this.f52812x.get(i11);
                arrayList.add(bVar.d(j11, i10));
                j11 += bVar.f52815i;
            }
            return new d(this.f52813d, this.f52814e, this.f52811w, this.f52815i, i10, j10, this.f52818q, this.f52819r, this.f52820s, this.f52821t, this.f52822u, this.f52823v, arrayList);
        }

        public d(String str, d dVar, String str2, long j10, int i10, long j11, m mVar, String str3, String str4, long j12, long j13, boolean z10, List list) {
            super(str, dVar, j10, i10, j11, mVar, str3, str4, j12, j13, z10);
            this.f52811w = str2;
            this.f52812x = s.n(list);
        }
    }

    @Override // pd.a
    /* renamed from: b */
    public f a(List list) {
        return this;
    }
}
