package xd;

import android.net.Uri;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import oi.s;
import oi.t;
import oi.v;
import sc.m;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class f extends h {

    /* renamed from: d  reason: collision with root package name */
    public final int f54777d;

    /* renamed from: e  reason: collision with root package name */
    public final long f54778e;

    /* renamed from: f  reason: collision with root package name */
    public final boolean f54779f;

    /* renamed from: g  reason: collision with root package name */
    public final boolean f54780g;

    /* renamed from: h  reason: collision with root package name */
    public final long f54781h;

    /* renamed from: i  reason: collision with root package name */
    public final boolean f54782i;

    /* renamed from: j  reason: collision with root package name */
    public final int f54783j;

    /* renamed from: k  reason: collision with root package name */
    public final long f54784k;

    /* renamed from: l  reason: collision with root package name */
    public final int f54785l;

    /* renamed from: m  reason: collision with root package name */
    public final long f54786m;

    /* renamed from: n  reason: collision with root package name */
    public final long f54787n;

    /* renamed from: o  reason: collision with root package name */
    public final boolean f54788o;

    /* renamed from: p  reason: collision with root package name */
    public final boolean f54789p;

    /* renamed from: q  reason: collision with root package name */
    public final m f54790q;

    /* renamed from: r  reason: collision with root package name */
    public final List f54791r;

    /* renamed from: s  reason: collision with root package name */
    public final List f54792s;

    /* renamed from: t  reason: collision with root package name */
    public final Map f54793t;

    /* renamed from: u  reason: collision with root package name */
    public final long f54794u;

    /* renamed from: v  reason: collision with root package name */
    public final C0765f f54795v;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b extends e {

        /* renamed from: w  reason: collision with root package name */
        public final boolean f54796w;

        /* renamed from: x  reason: collision with root package name */
        public final boolean f54797x;

        public b(String str, d dVar, long j10, int i10, long j11, m mVar, String str2, String str3, long j12, long j13, boolean z10, boolean z11, boolean z12) {
            super(str, dVar, j10, i10, j11, mVar, str2, str3, j12, j13, z10);
            this.f54796w = z11;
            this.f54797x = z12;
        }

        public b d(long j10, int i10) {
            return new b(this.f54803d, this.f54804e, this.f54805i, i10, j10, this.f54808q, this.f54809r, this.f54810s, this.f54811t, this.f54812u, this.f54813v, this.f54796w, this.f54797x);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c {

        /* renamed from: a  reason: collision with root package name */
        public final Uri f54798a;

        /* renamed from: b  reason: collision with root package name */
        public final long f54799b;

        /* renamed from: c  reason: collision with root package name */
        public final int f54800c;

        public c(Uri uri, long j10, int i10) {
            this.f54798a = uri;
            this.f54799b = j10;
            this.f54800c = i10;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class e implements Comparable {

        /* renamed from: d  reason: collision with root package name */
        public final String f54803d;

        /* renamed from: e  reason: collision with root package name */
        public final d f54804e;

        /* renamed from: i  reason: collision with root package name */
        public final long f54805i;

        /* renamed from: o  reason: collision with root package name */
        public final int f54806o;

        /* renamed from: p  reason: collision with root package name */
        public final long f54807p;

        /* renamed from: q  reason: collision with root package name */
        public final m f54808q;

        /* renamed from: r  reason: collision with root package name */
        public final String f54809r;

        /* renamed from: s  reason: collision with root package name */
        public final String f54810s;

        /* renamed from: t  reason: collision with root package name */
        public final long f54811t;

        /* renamed from: u  reason: collision with root package name */
        public final long f54812u;

        /* renamed from: v  reason: collision with root package name */
        public final boolean f54813v;

        @Override // java.lang.Comparable
        /* renamed from: a */
        public int compareTo(Long l10) {
            if (this.f54807p > l10.longValue()) {
                return 1;
            }
            if (this.f54807p < l10.longValue()) {
                return -1;
            }
            return 0;
        }

        private e(String str, d dVar, long j10, int i10, long j11, m mVar, String str2, String str3, long j12, long j13, boolean z10) {
            this.f54803d = str;
            this.f54804e = dVar;
            this.f54805i = j10;
            this.f54806o = i10;
            this.f54807p = j11;
            this.f54808q = mVar;
            this.f54809r = str2;
            this.f54810s = str3;
            this.f54811t = j12;
            this.f54812u = j13;
            this.f54813v = z10;
        }
    }

    /* renamed from: xd.f$f  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0765f {

        /* renamed from: a  reason: collision with root package name */
        public final long f54814a;

        /* renamed from: b  reason: collision with root package name */
        public final boolean f54815b;

        /* renamed from: c  reason: collision with root package name */
        public final long f54816c;

        /* renamed from: d  reason: collision with root package name */
        public final long f54817d;

        /* renamed from: e  reason: collision with root package name */
        public final boolean f54818e;

        public C0765f(long j10, boolean z10, long j11, long j12, boolean z11) {
            this.f54814a = j10;
            this.f54815b = z10;
            this.f54816c = j11;
            this.f54817d = j12;
            this.f54818e = z11;
        }
    }

    public f(int i10, String str, List list, long j10, boolean z10, long j11, boolean z11, int i11, long j12, int i12, long j13, long j14, boolean z12, boolean z13, boolean z14, m mVar, List list2, List list3, C0765f c0765f, Map map) {
        super(str, list, z12);
        this.f54777d = i10;
        this.f54781h = j11;
        this.f54780g = z10;
        this.f54782i = z11;
        this.f54783j = i11;
        this.f54784k = j12;
        this.f54785l = i12;
        this.f54786m = j13;
        this.f54787n = j14;
        this.f54788o = z13;
        this.f54789p = z14;
        this.f54790q = mVar;
        this.f54791r = s.o(list2);
        this.f54792s = s.o(list3);
        this.f54793t = t.c(map);
        if (!list3.isEmpty()) {
            b bVar = (b) v.c(list3);
            this.f54794u = bVar.f54807p + bVar.f54805i;
        } else if (!list2.isEmpty()) {
            d dVar = (d) v.c(list2);
            this.f54794u = dVar.f54807p + dVar.f54805i;
        } else {
            this.f54794u = 0L;
        }
        long j15 = -9223372036854775807L;
        if (j10 != -9223372036854775807L) {
            if (j10 >= 0) {
                j15 = Math.min(this.f54794u, j10);
            } else {
                j15 = Math.max(0L, this.f54794u + j10);
            }
        }
        this.f54778e = j15;
        this.f54779f = j10 >= 0;
        this.f54795v = c0765f;
    }

    public f c(long j10, int i10) {
        return new f(this.f54777d, this.f54840a, this.f54841b, this.f54778e, this.f54780g, j10, true, i10, this.f54784k, this.f54785l, this.f54786m, this.f54787n, this.f54842c, this.f54788o, this.f54789p, this.f54790q, this.f54791r, this.f54792s, this.f54795v, this.f54793t);
    }

    public f d() {
        if (this.f54788o) {
            return this;
        }
        return new f(this.f54777d, this.f54840a, this.f54841b, this.f54778e, this.f54780g, this.f54781h, this.f54782i, this.f54783j, this.f54784k, this.f54785l, this.f54786m, this.f54787n, this.f54842c, true, this.f54789p, this.f54790q, this.f54791r, this.f54792s, this.f54795v, this.f54793t);
    }

    public long e() {
        return this.f54781h + this.f54794u;
    }

    public boolean f(f fVar) {
        if (fVar != null) {
            long j10 = this.f54784k;
            long j11 = fVar.f54784k;
            if (j10 <= j11) {
                if (j10 < j11) {
                    return false;
                }
                int size = this.f54791r.size() - fVar.f54791r.size();
                if (size != 0) {
                    if (size > 0) {
                        return true;
                    }
                    return false;
                }
                int size2 = this.f54792s.size();
                int size3 = fVar.f54792s.size();
                if (size2 <= size3 && (size2 != size3 || !this.f54788o || fVar.f54788o)) {
                    return false;
                }
            }
        }
        return true;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class d extends e {

        /* renamed from: w  reason: collision with root package name */
        public final String f54801w;

        /* renamed from: x  reason: collision with root package name */
        public final List f54802x;

        public d(String str, long j10, long j11, String str2, String str3) {
            this(str, null, "", 0L, -1, -9223372036854775807L, null, str2, str3, j10, j11, false, s.t());
        }

        public d d(long j10, int i10) {
            ArrayList arrayList = new ArrayList();
            long j11 = j10;
            for (int i11 = 0; i11 < this.f54802x.size(); i11++) {
                b bVar = (b) this.f54802x.get(i11);
                arrayList.add(bVar.d(j11, i10));
                j11 += bVar.f54805i;
            }
            return new d(this.f54803d, this.f54804e, this.f54801w, this.f54805i, i10, j10, this.f54808q, this.f54809r, this.f54810s, this.f54811t, this.f54812u, this.f54813v, arrayList);
        }

        public d(String str, d dVar, String str2, long j10, int i10, long j11, m mVar, String str3, String str4, long j12, long j13, boolean z10, List list) {
            super(str, dVar, j10, i10, j11, mVar, str3, str4, j12, j13, z10);
            this.f54801w = str2;
            this.f54802x = s.o(list);
        }
    }

    @Override // qd.a
    /* renamed from: b */
    public f a(List list) {
        return this;
    }
}
