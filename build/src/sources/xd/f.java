package xd;

import android.net.Uri;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import qi.s;
import qi.t;
import qi.v;
import sc.m;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class f extends h {

    /* renamed from: d  reason: collision with root package name */
    public final int f55078d;

    /* renamed from: e  reason: collision with root package name */
    public final long f55079e;

    /* renamed from: f  reason: collision with root package name */
    public final boolean f55080f;

    /* renamed from: g  reason: collision with root package name */
    public final boolean f55081g;

    /* renamed from: h  reason: collision with root package name */
    public final long f55082h;

    /* renamed from: i  reason: collision with root package name */
    public final boolean f55083i;

    /* renamed from: j  reason: collision with root package name */
    public final int f55084j;

    /* renamed from: k  reason: collision with root package name */
    public final long f55085k;

    /* renamed from: l  reason: collision with root package name */
    public final int f55086l;

    /* renamed from: m  reason: collision with root package name */
    public final long f55087m;

    /* renamed from: n  reason: collision with root package name */
    public final long f55088n;

    /* renamed from: o  reason: collision with root package name */
    public final boolean f55089o;

    /* renamed from: p  reason: collision with root package name */
    public final boolean f55090p;

    /* renamed from: q  reason: collision with root package name */
    public final m f55091q;

    /* renamed from: r  reason: collision with root package name */
    public final List f55092r;

    /* renamed from: s  reason: collision with root package name */
    public final List f55093s;

    /* renamed from: t  reason: collision with root package name */
    public final Map f55094t;

    /* renamed from: u  reason: collision with root package name */
    public final long f55095u;

    /* renamed from: v  reason: collision with root package name */
    public final C0764f f55096v;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b extends e {

        /* renamed from: w  reason: collision with root package name */
        public final boolean f55097w;

        /* renamed from: x  reason: collision with root package name */
        public final boolean f55098x;

        public b(String str, d dVar, long j10, int i10, long j11, m mVar, String str2, String str3, long j12, long j13, boolean z10, boolean z11, boolean z12) {
            super(str, dVar, j10, i10, j11, mVar, str2, str3, j12, j13, z10);
            this.f55097w = z11;
            this.f55098x = z12;
        }

        public b d(long j10, int i10) {
            return new b(this.f55104d, this.f55105e, this.f55106i, i10, j10, this.f55109q, this.f55110r, this.f55111s, this.f55112t, this.f55113u, this.f55114v, this.f55097w, this.f55098x);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c {

        /* renamed from: a  reason: collision with root package name */
        public final Uri f55099a;

        /* renamed from: b  reason: collision with root package name */
        public final long f55100b;

        /* renamed from: c  reason: collision with root package name */
        public final int f55101c;

        public c(Uri uri, long j10, int i10) {
            this.f55099a = uri;
            this.f55100b = j10;
            this.f55101c = i10;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class e implements Comparable {

        /* renamed from: d  reason: collision with root package name */
        public final String f55104d;

        /* renamed from: e  reason: collision with root package name */
        public final d f55105e;

        /* renamed from: i  reason: collision with root package name */
        public final long f55106i;

        /* renamed from: o  reason: collision with root package name */
        public final int f55107o;

        /* renamed from: p  reason: collision with root package name */
        public final long f55108p;

        /* renamed from: q  reason: collision with root package name */
        public final m f55109q;

        /* renamed from: r  reason: collision with root package name */
        public final String f55110r;

        /* renamed from: s  reason: collision with root package name */
        public final String f55111s;

        /* renamed from: t  reason: collision with root package name */
        public final long f55112t;

        /* renamed from: u  reason: collision with root package name */
        public final long f55113u;

        /* renamed from: v  reason: collision with root package name */
        public final boolean f55114v;

        @Override // java.lang.Comparable
        /* renamed from: a */
        public int compareTo(Long l10) {
            if (this.f55108p > l10.longValue()) {
                return 1;
            }
            if (this.f55108p < l10.longValue()) {
                return -1;
            }
            return 0;
        }

        private e(String str, d dVar, long j10, int i10, long j11, m mVar, String str2, String str3, long j12, long j13, boolean z10) {
            this.f55104d = str;
            this.f55105e = dVar;
            this.f55106i = j10;
            this.f55107o = i10;
            this.f55108p = j11;
            this.f55109q = mVar;
            this.f55110r = str2;
            this.f55111s = str3;
            this.f55112t = j12;
            this.f55113u = j13;
            this.f55114v = z10;
        }
    }

    /* renamed from: xd.f$f  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0764f {

        /* renamed from: a  reason: collision with root package name */
        public final long f55115a;

        /* renamed from: b  reason: collision with root package name */
        public final boolean f55116b;

        /* renamed from: c  reason: collision with root package name */
        public final long f55117c;

        /* renamed from: d  reason: collision with root package name */
        public final long f55118d;

        /* renamed from: e  reason: collision with root package name */
        public final boolean f55119e;

        public C0764f(long j10, boolean z10, long j11, long j12, boolean z11) {
            this.f55115a = j10;
            this.f55116b = z10;
            this.f55117c = j11;
            this.f55118d = j12;
            this.f55119e = z11;
        }
    }

    public f(int i10, String str, List list, long j10, boolean z10, long j11, boolean z11, int i11, long j12, int i12, long j13, long j14, boolean z12, boolean z13, boolean z14, m mVar, List list2, List list3, C0764f c0764f, Map map) {
        super(str, list, z12);
        this.f55078d = i10;
        this.f55082h = j11;
        this.f55081g = z10;
        this.f55083i = z11;
        this.f55084j = i11;
        this.f55085k = j12;
        this.f55086l = i12;
        this.f55087m = j13;
        this.f55088n = j14;
        this.f55089o = z13;
        this.f55090p = z14;
        this.f55091q = mVar;
        this.f55092r = s.o(list2);
        this.f55093s = s.o(list3);
        this.f55094t = t.c(map);
        if (!list3.isEmpty()) {
            b bVar = (b) v.c(list3);
            this.f55095u = bVar.f55108p + bVar.f55106i;
        } else if (!list2.isEmpty()) {
            d dVar = (d) v.c(list2);
            this.f55095u = dVar.f55108p + dVar.f55106i;
        } else {
            this.f55095u = 0L;
        }
        long j15 = -9223372036854775807L;
        if (j10 != -9223372036854775807L) {
            if (j10 >= 0) {
                j15 = Math.min(this.f55095u, j10);
            } else {
                j15 = Math.max(0L, this.f55095u + j10);
            }
        }
        this.f55079e = j15;
        this.f55080f = j10 >= 0;
        this.f55096v = c0764f;
    }

    public f c(long j10, int i10) {
        return new f(this.f55078d, this.f55141a, this.f55142b, this.f55079e, this.f55081g, j10, true, i10, this.f55085k, this.f55086l, this.f55087m, this.f55088n, this.f55143c, this.f55089o, this.f55090p, this.f55091q, this.f55092r, this.f55093s, this.f55096v, this.f55094t);
    }

    public f d() {
        if (this.f55089o) {
            return this;
        }
        return new f(this.f55078d, this.f55141a, this.f55142b, this.f55079e, this.f55081g, this.f55082h, this.f55083i, this.f55084j, this.f55085k, this.f55086l, this.f55087m, this.f55088n, this.f55143c, true, this.f55090p, this.f55091q, this.f55092r, this.f55093s, this.f55096v, this.f55094t);
    }

    public long e() {
        return this.f55082h + this.f55095u;
    }

    public boolean f(f fVar) {
        if (fVar != null) {
            long j10 = this.f55085k;
            long j11 = fVar.f55085k;
            if (j10 <= j11) {
                if (j10 < j11) {
                    return false;
                }
                int size = this.f55092r.size() - fVar.f55092r.size();
                if (size != 0) {
                    if (size > 0) {
                        return true;
                    }
                    return false;
                }
                int size2 = this.f55093s.size();
                int size3 = fVar.f55093s.size();
                if (size2 <= size3 && (size2 != size3 || !this.f55089o || fVar.f55089o)) {
                    return false;
                }
            }
        }
        return true;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class d extends e {

        /* renamed from: w  reason: collision with root package name */
        public final String f55102w;

        /* renamed from: x  reason: collision with root package name */
        public final List f55103x;

        public d(String str, long j10, long j11, String str2, String str3) {
            this(str, null, "", 0L, -1, -9223372036854775807L, null, str2, str3, j10, j11, false, s.t());
        }

        public d d(long j10, int i10) {
            ArrayList arrayList = new ArrayList();
            long j11 = j10;
            for (int i11 = 0; i11 < this.f55103x.size(); i11++) {
                b bVar = (b) this.f55103x.get(i11);
                arrayList.add(bVar.d(j11, i10));
                j11 += bVar.f55106i;
            }
            return new d(this.f55104d, this.f55105e, this.f55102w, this.f55106i, i10, j10, this.f55109q, this.f55110r, this.f55111s, this.f55112t, this.f55113u, this.f55114v, arrayList);
        }

        public d(String str, d dVar, String str2, long j10, int i10, long j11, m mVar, String str3, String str4, long j12, long j13, boolean z10, List list) {
            super(str, dVar, j10, i10, j11, mVar, str3, str4, j12, j13, z10);
            this.f55102w = str2;
            this.f55103x = s.o(list);
        }
    }

    @Override // qd.a
    /* renamed from: b */
    public f a(List list) {
        return this;
    }
}
