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
    public final int f52328d;

    /* renamed from: e  reason: collision with root package name */
    public final long f52329e;

    /* renamed from: f  reason: collision with root package name */
    public final boolean f52330f;

    /* renamed from: g  reason: collision with root package name */
    public final boolean f52331g;

    /* renamed from: h  reason: collision with root package name */
    public final long f52332h;

    /* renamed from: i  reason: collision with root package name */
    public final boolean f52333i;

    /* renamed from: j  reason: collision with root package name */
    public final int f52334j;

    /* renamed from: k  reason: collision with root package name */
    public final long f52335k;

    /* renamed from: l  reason: collision with root package name */
    public final int f52336l;

    /* renamed from: m  reason: collision with root package name */
    public final long f52337m;

    /* renamed from: n  reason: collision with root package name */
    public final long f52338n;

    /* renamed from: o  reason: collision with root package name */
    public final boolean f52339o;

    /* renamed from: p  reason: collision with root package name */
    public final boolean f52340p;

    /* renamed from: q  reason: collision with root package name */
    public final m f52341q;

    /* renamed from: r  reason: collision with root package name */
    public final List f52342r;

    /* renamed from: s  reason: collision with root package name */
    public final List f52343s;

    /* renamed from: t  reason: collision with root package name */
    public final Map f52344t;

    /* renamed from: u  reason: collision with root package name */
    public final long f52345u;

    /* renamed from: v  reason: collision with root package name */
    public final C0719f f52346v;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b extends e {

        /* renamed from: w  reason: collision with root package name */
        public final boolean f52347w;

        /* renamed from: x  reason: collision with root package name */
        public final boolean f52348x;

        public b(String str, d dVar, long j10, int i10, long j11, m mVar, String str2, String str3, long j12, long j13, boolean z10, boolean z11, boolean z12) {
            super(str, dVar, j10, i10, j11, mVar, str2, str3, j12, j13, z10);
            this.f52347w = z11;
            this.f52348x = z12;
        }

        public b d(long j10, int i10) {
            return new b(this.f52354d, this.f52355e, this.f52356i, i10, j10, this.f52359q, this.f52360r, this.f52361s, this.f52362t, this.f52363u, this.f52364v, this.f52347w, this.f52348x);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c {

        /* renamed from: a  reason: collision with root package name */
        public final Uri f52349a;

        /* renamed from: b  reason: collision with root package name */
        public final long f52350b;

        /* renamed from: c  reason: collision with root package name */
        public final int f52351c;

        public c(Uri uri, long j10, int i10) {
            this.f52349a = uri;
            this.f52350b = j10;
            this.f52351c = i10;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class e implements Comparable {

        /* renamed from: d  reason: collision with root package name */
        public final String f52354d;

        /* renamed from: e  reason: collision with root package name */
        public final d f52355e;

        /* renamed from: i  reason: collision with root package name */
        public final long f52356i;

        /* renamed from: o  reason: collision with root package name */
        public final int f52357o;

        /* renamed from: p  reason: collision with root package name */
        public final long f52358p;

        /* renamed from: q  reason: collision with root package name */
        public final m f52359q;

        /* renamed from: r  reason: collision with root package name */
        public final String f52360r;

        /* renamed from: s  reason: collision with root package name */
        public final String f52361s;

        /* renamed from: t  reason: collision with root package name */
        public final long f52362t;

        /* renamed from: u  reason: collision with root package name */
        public final long f52363u;

        /* renamed from: v  reason: collision with root package name */
        public final boolean f52364v;

        @Override // java.lang.Comparable
        /* renamed from: a */
        public int compareTo(Long l10) {
            if (this.f52358p > l10.longValue()) {
                return 1;
            }
            if (this.f52358p < l10.longValue()) {
                return -1;
            }
            return 0;
        }

        private e(String str, d dVar, long j10, int i10, long j11, m mVar, String str2, String str3, long j12, long j13, boolean z10) {
            this.f52354d = str;
            this.f52355e = dVar;
            this.f52356i = j10;
            this.f52357o = i10;
            this.f52358p = j11;
            this.f52359q = mVar;
            this.f52360r = str2;
            this.f52361s = str3;
            this.f52362t = j12;
            this.f52363u = j13;
            this.f52364v = z10;
        }
    }

    /* renamed from: wd.f$f  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0719f {

        /* renamed from: a  reason: collision with root package name */
        public final long f52365a;

        /* renamed from: b  reason: collision with root package name */
        public final boolean f52366b;

        /* renamed from: c  reason: collision with root package name */
        public final long f52367c;

        /* renamed from: d  reason: collision with root package name */
        public final long f52368d;

        /* renamed from: e  reason: collision with root package name */
        public final boolean f52369e;

        public C0719f(long j10, boolean z10, long j11, long j12, boolean z11) {
            this.f52365a = j10;
            this.f52366b = z10;
            this.f52367c = j11;
            this.f52368d = j12;
            this.f52369e = z11;
        }
    }

    public f(int i10, String str, List list, long j10, boolean z10, long j11, boolean z11, int i11, long j12, int i12, long j13, long j14, boolean z12, boolean z13, boolean z14, m mVar, List list2, List list3, C0719f c0719f, Map map) {
        super(str, list, z12);
        this.f52328d = i10;
        this.f52332h = j11;
        this.f52331g = z10;
        this.f52333i = z11;
        this.f52334j = i11;
        this.f52335k = j12;
        this.f52336l = i12;
        this.f52337m = j13;
        this.f52338n = j14;
        this.f52339o = z13;
        this.f52340p = z14;
        this.f52341q = mVar;
        this.f52342r = s.m(list2);
        this.f52343s = s.m(list3);
        this.f52344t = t.c(map);
        if (!list3.isEmpty()) {
            b bVar = (b) v.c(list3);
            this.f52345u = bVar.f52358p + bVar.f52356i;
        } else if (!list2.isEmpty()) {
            d dVar = (d) v.c(list2);
            this.f52345u = dVar.f52358p + dVar.f52356i;
        } else {
            this.f52345u = 0L;
        }
        long j15 = -9223372036854775807L;
        if (j10 != -9223372036854775807L) {
            if (j10 >= 0) {
                j15 = Math.min(this.f52345u, j10);
            } else {
                j15 = Math.max(0L, this.f52345u + j10);
            }
        }
        this.f52329e = j15;
        this.f52330f = j10 >= 0;
        this.f52346v = c0719f;
    }

    public f c(long j10, int i10) {
        return new f(this.f52328d, this.f52391a, this.f52392b, this.f52329e, this.f52331g, j10, true, i10, this.f52335k, this.f52336l, this.f52337m, this.f52338n, this.f52393c, this.f52339o, this.f52340p, this.f52341q, this.f52342r, this.f52343s, this.f52346v, this.f52344t);
    }

    public f d() {
        if (this.f52339o) {
            return this;
        }
        return new f(this.f52328d, this.f52391a, this.f52392b, this.f52329e, this.f52331g, this.f52332h, this.f52333i, this.f52334j, this.f52335k, this.f52336l, this.f52337m, this.f52338n, this.f52393c, true, this.f52340p, this.f52341q, this.f52342r, this.f52343s, this.f52346v, this.f52344t);
    }

    public long e() {
        return this.f52332h + this.f52345u;
    }

    public boolean f(f fVar) {
        if (fVar != null) {
            long j10 = this.f52335k;
            long j11 = fVar.f52335k;
            if (j10 <= j11) {
                if (j10 < j11) {
                    return false;
                }
                int size = this.f52342r.size() - fVar.f52342r.size();
                if (size != 0) {
                    if (size > 0) {
                        return true;
                    }
                    return false;
                }
                int size2 = this.f52343s.size();
                int size3 = fVar.f52343s.size();
                if (size2 <= size3 && (size2 != size3 || !this.f52339o || fVar.f52339o)) {
                    return false;
                }
            }
        }
        return true;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class d extends e {

        /* renamed from: w  reason: collision with root package name */
        public final String f52352w;

        /* renamed from: x  reason: collision with root package name */
        public final List f52353x;

        public d(String str, long j10, long j11, String str2, String str3) {
            this(str, null, "", 0L, -1, -9223372036854775807L, null, str2, str3, j10, j11, false, s.r());
        }

        public d d(long j10, int i10) {
            ArrayList arrayList = new ArrayList();
            long j11 = j10;
            for (int i11 = 0; i11 < this.f52353x.size(); i11++) {
                b bVar = (b) this.f52353x.get(i11);
                arrayList.add(bVar.d(j11, i10));
                j11 += bVar.f52356i;
            }
            return new d(this.f52354d, this.f52355e, this.f52352w, this.f52356i, i10, j10, this.f52359q, this.f52360r, this.f52361s, this.f52362t, this.f52363u, this.f52364v, arrayList);
        }

        public d(String str, d dVar, String str2, long j10, int i10, long j11, m mVar, String str3, String str4, long j12, long j13, boolean z10, List list) {
            super(str, dVar, j10, i10, j11, mVar, str3, str4, j12, j13, z10);
            this.f52352w = str2;
            this.f52353x = s.m(list);
        }
    }

    @Override // pd.a
    /* renamed from: b */
    public f a(List list) {
        return this;
    }
}
