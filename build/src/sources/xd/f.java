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
    public final int f54510d;

    /* renamed from: e  reason: collision with root package name */
    public final long f54511e;

    /* renamed from: f  reason: collision with root package name */
    public final boolean f54512f;

    /* renamed from: g  reason: collision with root package name */
    public final boolean f54513g;

    /* renamed from: h  reason: collision with root package name */
    public final long f54514h;

    /* renamed from: i  reason: collision with root package name */
    public final boolean f54515i;

    /* renamed from: j  reason: collision with root package name */
    public final int f54516j;

    /* renamed from: k  reason: collision with root package name */
    public final long f54517k;

    /* renamed from: l  reason: collision with root package name */
    public final int f54518l;

    /* renamed from: m  reason: collision with root package name */
    public final long f54519m;

    /* renamed from: n  reason: collision with root package name */
    public final long f54520n;

    /* renamed from: o  reason: collision with root package name */
    public final boolean f54521o;

    /* renamed from: p  reason: collision with root package name */
    public final boolean f54522p;

    /* renamed from: q  reason: collision with root package name */
    public final m f54523q;

    /* renamed from: r  reason: collision with root package name */
    public final List f54524r;

    /* renamed from: s  reason: collision with root package name */
    public final List f54525s;

    /* renamed from: t  reason: collision with root package name */
    public final Map f54526t;

    /* renamed from: u  reason: collision with root package name */
    public final long f54527u;

    /* renamed from: v  reason: collision with root package name */
    public final C0764f f54528v;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b extends e {

        /* renamed from: w  reason: collision with root package name */
        public final boolean f54529w;

        /* renamed from: x  reason: collision with root package name */
        public final boolean f54530x;

        public b(String str, d dVar, long j10, int i10, long j11, m mVar, String str2, String str3, long j12, long j13, boolean z10, boolean z11, boolean z12) {
            super(str, dVar, j10, i10, j11, mVar, str2, str3, j12, j13, z10);
            this.f54529w = z11;
            this.f54530x = z12;
        }

        public b d(long j10, int i10) {
            return new b(this.f54536d, this.f54537e, this.f54538i, i10, j10, this.f54541q, this.f54542r, this.f54543s, this.f54544t, this.f54545u, this.f54546v, this.f54529w, this.f54530x);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c {

        /* renamed from: a  reason: collision with root package name */
        public final Uri f54531a;

        /* renamed from: b  reason: collision with root package name */
        public final long f54532b;

        /* renamed from: c  reason: collision with root package name */
        public final int f54533c;

        public c(Uri uri, long j10, int i10) {
            this.f54531a = uri;
            this.f54532b = j10;
            this.f54533c = i10;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class e implements Comparable {

        /* renamed from: d  reason: collision with root package name */
        public final String f54536d;

        /* renamed from: e  reason: collision with root package name */
        public final d f54537e;

        /* renamed from: i  reason: collision with root package name */
        public final long f54538i;

        /* renamed from: o  reason: collision with root package name */
        public final int f54539o;

        /* renamed from: p  reason: collision with root package name */
        public final long f54540p;

        /* renamed from: q  reason: collision with root package name */
        public final m f54541q;

        /* renamed from: r  reason: collision with root package name */
        public final String f54542r;

        /* renamed from: s  reason: collision with root package name */
        public final String f54543s;

        /* renamed from: t  reason: collision with root package name */
        public final long f54544t;

        /* renamed from: u  reason: collision with root package name */
        public final long f54545u;

        /* renamed from: v  reason: collision with root package name */
        public final boolean f54546v;

        @Override // java.lang.Comparable
        /* renamed from: a */
        public int compareTo(Long l10) {
            if (this.f54540p > l10.longValue()) {
                return 1;
            }
            if (this.f54540p < l10.longValue()) {
                return -1;
            }
            return 0;
        }

        private e(String str, d dVar, long j10, int i10, long j11, m mVar, String str2, String str3, long j12, long j13, boolean z10) {
            this.f54536d = str;
            this.f54537e = dVar;
            this.f54538i = j10;
            this.f54539o = i10;
            this.f54540p = j11;
            this.f54541q = mVar;
            this.f54542r = str2;
            this.f54543s = str3;
            this.f54544t = j12;
            this.f54545u = j13;
            this.f54546v = z10;
        }
    }

    /* renamed from: xd.f$f  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0764f {

        /* renamed from: a  reason: collision with root package name */
        public final long f54547a;

        /* renamed from: b  reason: collision with root package name */
        public final boolean f54548b;

        /* renamed from: c  reason: collision with root package name */
        public final long f54549c;

        /* renamed from: d  reason: collision with root package name */
        public final long f54550d;

        /* renamed from: e  reason: collision with root package name */
        public final boolean f54551e;

        public C0764f(long j10, boolean z10, long j11, long j12, boolean z11) {
            this.f54547a = j10;
            this.f54548b = z10;
            this.f54549c = j11;
            this.f54550d = j12;
            this.f54551e = z11;
        }
    }

    public f(int i10, String str, List list, long j10, boolean z10, long j11, boolean z11, int i11, long j12, int i12, long j13, long j14, boolean z12, boolean z13, boolean z14, m mVar, List list2, List list3, C0764f c0764f, Map map) {
        super(str, list, z12);
        this.f54510d = i10;
        this.f54514h = j11;
        this.f54513g = z10;
        this.f54515i = z11;
        this.f54516j = i11;
        this.f54517k = j12;
        this.f54518l = i12;
        this.f54519m = j13;
        this.f54520n = j14;
        this.f54521o = z13;
        this.f54522p = z14;
        this.f54523q = mVar;
        this.f54524r = s.o(list2);
        this.f54525s = s.o(list3);
        this.f54526t = t.c(map);
        if (!list3.isEmpty()) {
            b bVar = (b) v.c(list3);
            this.f54527u = bVar.f54540p + bVar.f54538i;
        } else if (!list2.isEmpty()) {
            d dVar = (d) v.c(list2);
            this.f54527u = dVar.f54540p + dVar.f54538i;
        } else {
            this.f54527u = 0L;
        }
        long j15 = -9223372036854775807L;
        if (j10 != -9223372036854775807L) {
            if (j10 >= 0) {
                j15 = Math.min(this.f54527u, j10);
            } else {
                j15 = Math.max(0L, this.f54527u + j10);
            }
        }
        this.f54511e = j15;
        this.f54512f = j10 >= 0;
        this.f54528v = c0764f;
    }

    public f c(long j10, int i10) {
        return new f(this.f54510d, this.f54573a, this.f54574b, this.f54511e, this.f54513g, j10, true, i10, this.f54517k, this.f54518l, this.f54519m, this.f54520n, this.f54575c, this.f54521o, this.f54522p, this.f54523q, this.f54524r, this.f54525s, this.f54528v, this.f54526t);
    }

    public f d() {
        if (this.f54521o) {
            return this;
        }
        return new f(this.f54510d, this.f54573a, this.f54574b, this.f54511e, this.f54513g, this.f54514h, this.f54515i, this.f54516j, this.f54517k, this.f54518l, this.f54519m, this.f54520n, this.f54575c, true, this.f54522p, this.f54523q, this.f54524r, this.f54525s, this.f54528v, this.f54526t);
    }

    public long e() {
        return this.f54514h + this.f54527u;
    }

    public boolean f(f fVar) {
        if (fVar != null) {
            long j10 = this.f54517k;
            long j11 = fVar.f54517k;
            if (j10 <= j11) {
                if (j10 < j11) {
                    return false;
                }
                int size = this.f54524r.size() - fVar.f54524r.size();
                if (size != 0) {
                    if (size > 0) {
                        return true;
                    }
                    return false;
                }
                int size2 = this.f54525s.size();
                int size3 = fVar.f54525s.size();
                if (size2 <= size3 && (size2 != size3 || !this.f54521o || fVar.f54521o)) {
                    return false;
                }
            }
        }
        return true;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class d extends e {

        /* renamed from: w  reason: collision with root package name */
        public final String f54534w;

        /* renamed from: x  reason: collision with root package name */
        public final List f54535x;

        public d(String str, long j10, long j11, String str2, String str3) {
            this(str, null, "", 0L, -1, -9223372036854775807L, null, str2, str3, j10, j11, false, s.t());
        }

        public d d(long j10, int i10) {
            ArrayList arrayList = new ArrayList();
            long j11 = j10;
            for (int i11 = 0; i11 < this.f54535x.size(); i11++) {
                b bVar = (b) this.f54535x.get(i11);
                arrayList.add(bVar.d(j11, i10));
                j11 += bVar.f54538i;
            }
            return new d(this.f54536d, this.f54537e, this.f54534w, this.f54538i, i10, j10, this.f54541q, this.f54542r, this.f54543s, this.f54544t, this.f54545u, this.f54546v, arrayList);
        }

        public d(String str, d dVar, String str2, long j10, int i10, long j11, m mVar, String str3, String str4, long j12, long j13, boolean z10, List list) {
            super(str, dVar, j10, i10, j11, mVar, str3, str4, j12, j13, z10);
            this.f54534w = str2;
            this.f54535x = s.o(list);
        }
    }

    @Override // qd.a
    /* renamed from: b */
    public f a(List list) {
        return this;
    }
}
