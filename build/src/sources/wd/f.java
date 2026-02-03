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
    public final int f51911d;

    /* renamed from: e  reason: collision with root package name */
    public final long f51912e;

    /* renamed from: f  reason: collision with root package name */
    public final boolean f51913f;

    /* renamed from: g  reason: collision with root package name */
    public final boolean f51914g;

    /* renamed from: h  reason: collision with root package name */
    public final long f51915h;

    /* renamed from: i  reason: collision with root package name */
    public final boolean f51916i;

    /* renamed from: j  reason: collision with root package name */
    public final int f51917j;

    /* renamed from: k  reason: collision with root package name */
    public final long f51918k;

    /* renamed from: l  reason: collision with root package name */
    public final int f51919l;

    /* renamed from: m  reason: collision with root package name */
    public final long f51920m;

    /* renamed from: n  reason: collision with root package name */
    public final long f51921n;

    /* renamed from: o  reason: collision with root package name */
    public final boolean f51922o;

    /* renamed from: p  reason: collision with root package name */
    public final boolean f51923p;

    /* renamed from: q  reason: collision with root package name */
    public final m f51924q;

    /* renamed from: r  reason: collision with root package name */
    public final List f51925r;

    /* renamed from: s  reason: collision with root package name */
    public final List f51926s;

    /* renamed from: t  reason: collision with root package name */
    public final Map f51927t;

    /* renamed from: u  reason: collision with root package name */
    public final long f51928u;

    /* renamed from: v  reason: collision with root package name */
    public final C0706f f51929v;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b extends e {

        /* renamed from: w  reason: collision with root package name */
        public final boolean f51930w;

        /* renamed from: x  reason: collision with root package name */
        public final boolean f51931x;

        public b(String str, d dVar, long j10, int i10, long j11, m mVar, String str2, String str3, long j12, long j13, boolean z10, boolean z11, boolean z12) {
            super(str, dVar, j10, i10, j11, mVar, str2, str3, j12, j13, z10);
            this.f51930w = z11;
            this.f51931x = z12;
        }

        public b d(long j10, int i10) {
            return new b(this.f51937d, this.f51938e, this.f51939i, i10, j10, this.f51942q, this.f51943r, this.f51944s, this.f51945t, this.f51946u, this.f51947v, this.f51930w, this.f51931x);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c {

        /* renamed from: a  reason: collision with root package name */
        public final Uri f51932a;

        /* renamed from: b  reason: collision with root package name */
        public final long f51933b;

        /* renamed from: c  reason: collision with root package name */
        public final int f51934c;

        public c(Uri uri, long j10, int i10) {
            this.f51932a = uri;
            this.f51933b = j10;
            this.f51934c = i10;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class e implements Comparable {

        /* renamed from: d  reason: collision with root package name */
        public final String f51937d;

        /* renamed from: e  reason: collision with root package name */
        public final d f51938e;

        /* renamed from: i  reason: collision with root package name */
        public final long f51939i;

        /* renamed from: o  reason: collision with root package name */
        public final int f51940o;

        /* renamed from: p  reason: collision with root package name */
        public final long f51941p;

        /* renamed from: q  reason: collision with root package name */
        public final m f51942q;

        /* renamed from: r  reason: collision with root package name */
        public final String f51943r;

        /* renamed from: s  reason: collision with root package name */
        public final String f51944s;

        /* renamed from: t  reason: collision with root package name */
        public final long f51945t;

        /* renamed from: u  reason: collision with root package name */
        public final long f51946u;

        /* renamed from: v  reason: collision with root package name */
        public final boolean f51947v;

        @Override // java.lang.Comparable
        /* renamed from: a */
        public int compareTo(Long l10) {
            if (this.f51941p > l10.longValue()) {
                return 1;
            }
            if (this.f51941p < l10.longValue()) {
                return -1;
            }
            return 0;
        }

        private e(String str, d dVar, long j10, int i10, long j11, m mVar, String str2, String str3, long j12, long j13, boolean z10) {
            this.f51937d = str;
            this.f51938e = dVar;
            this.f51939i = j10;
            this.f51940o = i10;
            this.f51941p = j11;
            this.f51942q = mVar;
            this.f51943r = str2;
            this.f51944s = str3;
            this.f51945t = j12;
            this.f51946u = j13;
            this.f51947v = z10;
        }
    }

    /* renamed from: wd.f$f  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0706f {

        /* renamed from: a  reason: collision with root package name */
        public final long f51948a;

        /* renamed from: b  reason: collision with root package name */
        public final boolean f51949b;

        /* renamed from: c  reason: collision with root package name */
        public final long f51950c;

        /* renamed from: d  reason: collision with root package name */
        public final long f51951d;

        /* renamed from: e  reason: collision with root package name */
        public final boolean f51952e;

        public C0706f(long j10, boolean z10, long j11, long j12, boolean z11) {
            this.f51948a = j10;
            this.f51949b = z10;
            this.f51950c = j11;
            this.f51951d = j12;
            this.f51952e = z11;
        }
    }

    public f(int i10, String str, List list, long j10, boolean z10, long j11, boolean z11, int i11, long j12, int i12, long j13, long j14, boolean z12, boolean z13, boolean z14, m mVar, List list2, List list3, C0706f c0706f, Map map) {
        super(str, list, z12);
        this.f51911d = i10;
        this.f51915h = j11;
        this.f51914g = z10;
        this.f51916i = z11;
        this.f51917j = i11;
        this.f51918k = j12;
        this.f51919l = i12;
        this.f51920m = j13;
        this.f51921n = j14;
        this.f51922o = z13;
        this.f51923p = z14;
        this.f51924q = mVar;
        this.f51925r = s.m(list2);
        this.f51926s = s.m(list3);
        this.f51927t = t.c(map);
        if (!list3.isEmpty()) {
            b bVar = (b) v.c(list3);
            this.f51928u = bVar.f51941p + bVar.f51939i;
        } else if (!list2.isEmpty()) {
            d dVar = (d) v.c(list2);
            this.f51928u = dVar.f51941p + dVar.f51939i;
        } else {
            this.f51928u = 0L;
        }
        long j15 = -9223372036854775807L;
        if (j10 != -9223372036854775807L) {
            if (j10 >= 0) {
                j15 = Math.min(this.f51928u, j10);
            } else {
                j15 = Math.max(0L, this.f51928u + j10);
            }
        }
        this.f51912e = j15;
        this.f51913f = j10 >= 0;
        this.f51929v = c0706f;
    }

    public f c(long j10, int i10) {
        return new f(this.f51911d, this.f51974a, this.f51975b, this.f51912e, this.f51914g, j10, true, i10, this.f51918k, this.f51919l, this.f51920m, this.f51921n, this.f51976c, this.f51922o, this.f51923p, this.f51924q, this.f51925r, this.f51926s, this.f51929v, this.f51927t);
    }

    public f d() {
        if (this.f51922o) {
            return this;
        }
        return new f(this.f51911d, this.f51974a, this.f51975b, this.f51912e, this.f51914g, this.f51915h, this.f51916i, this.f51917j, this.f51918k, this.f51919l, this.f51920m, this.f51921n, this.f51976c, true, this.f51923p, this.f51924q, this.f51925r, this.f51926s, this.f51929v, this.f51927t);
    }

    public long e() {
        return this.f51915h + this.f51928u;
    }

    public boolean f(f fVar) {
        if (fVar != null) {
            long j10 = this.f51918k;
            long j11 = fVar.f51918k;
            if (j10 <= j11) {
                if (j10 < j11) {
                    return false;
                }
                int size = this.f51925r.size() - fVar.f51925r.size();
                if (size != 0) {
                    if (size > 0) {
                        return true;
                    }
                    return false;
                }
                int size2 = this.f51926s.size();
                int size3 = fVar.f51926s.size();
                if (size2 <= size3 && (size2 != size3 || !this.f51922o || fVar.f51922o)) {
                    return false;
                }
            }
        }
        return true;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class d extends e {

        /* renamed from: w  reason: collision with root package name */
        public final String f51935w;

        /* renamed from: x  reason: collision with root package name */
        public final List f51936x;

        public d(String str, long j10, long j11, String str2, String str3) {
            this(str, null, "", 0L, -1, -9223372036854775807L, null, str2, str3, j10, j11, false, s.r());
        }

        public d d(long j10, int i10) {
            ArrayList arrayList = new ArrayList();
            long j11 = j10;
            for (int i11 = 0; i11 < this.f51936x.size(); i11++) {
                b bVar = (b) this.f51936x.get(i11);
                arrayList.add(bVar.d(j11, i10));
                j11 += bVar.f51939i;
            }
            return new d(this.f51937d, this.f51938e, this.f51935w, this.f51939i, i10, j10, this.f51942q, this.f51943r, this.f51944s, this.f51945t, this.f51946u, this.f51947v, arrayList);
        }

        public d(String str, d dVar, String str2, long j10, int i10, long j11, m mVar, String str3, String str4, long j12, long j13, boolean z10, List list) {
            super(str, dVar, j10, i10, j11, mVar, str3, str4, j12, j13, z10);
            this.f51935w = str2;
            this.f51936x = s.m(list);
        }
    }

    @Override // pd.a
    /* renamed from: b */
    public f a(List list) {
        return this;
    }
}
