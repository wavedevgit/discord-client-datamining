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
    public final int f54509d;

    /* renamed from: e  reason: collision with root package name */
    public final long f54510e;

    /* renamed from: f  reason: collision with root package name */
    public final boolean f54511f;

    /* renamed from: g  reason: collision with root package name */
    public final boolean f54512g;

    /* renamed from: h  reason: collision with root package name */
    public final long f54513h;

    /* renamed from: i  reason: collision with root package name */
    public final boolean f54514i;

    /* renamed from: j  reason: collision with root package name */
    public final int f54515j;

    /* renamed from: k  reason: collision with root package name */
    public final long f54516k;

    /* renamed from: l  reason: collision with root package name */
    public final int f54517l;

    /* renamed from: m  reason: collision with root package name */
    public final long f54518m;

    /* renamed from: n  reason: collision with root package name */
    public final long f54519n;

    /* renamed from: o  reason: collision with root package name */
    public final boolean f54520o;

    /* renamed from: p  reason: collision with root package name */
    public final boolean f54521p;

    /* renamed from: q  reason: collision with root package name */
    public final m f54522q;

    /* renamed from: r  reason: collision with root package name */
    public final List f54523r;

    /* renamed from: s  reason: collision with root package name */
    public final List f54524s;

    /* renamed from: t  reason: collision with root package name */
    public final Map f54525t;

    /* renamed from: u  reason: collision with root package name */
    public final long f54526u;

    /* renamed from: v  reason: collision with root package name */
    public final C0764f f54527v;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b extends e {

        /* renamed from: w  reason: collision with root package name */
        public final boolean f54528w;

        /* renamed from: x  reason: collision with root package name */
        public final boolean f54529x;

        public b(String str, d dVar, long j10, int i10, long j11, m mVar, String str2, String str3, long j12, long j13, boolean z10, boolean z11, boolean z12) {
            super(str, dVar, j10, i10, j11, mVar, str2, str3, j12, j13, z10);
            this.f54528w = z11;
            this.f54529x = z12;
        }

        public b d(long j10, int i10) {
            return new b(this.f54535d, this.f54536e, this.f54537i, i10, j10, this.f54540q, this.f54541r, this.f54542s, this.f54543t, this.f54544u, this.f54545v, this.f54528w, this.f54529x);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c {

        /* renamed from: a  reason: collision with root package name */
        public final Uri f54530a;

        /* renamed from: b  reason: collision with root package name */
        public final long f54531b;

        /* renamed from: c  reason: collision with root package name */
        public final int f54532c;

        public c(Uri uri, long j10, int i10) {
            this.f54530a = uri;
            this.f54531b = j10;
            this.f54532c = i10;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class e implements Comparable {

        /* renamed from: d  reason: collision with root package name */
        public final String f54535d;

        /* renamed from: e  reason: collision with root package name */
        public final d f54536e;

        /* renamed from: i  reason: collision with root package name */
        public final long f54537i;

        /* renamed from: o  reason: collision with root package name */
        public final int f54538o;

        /* renamed from: p  reason: collision with root package name */
        public final long f54539p;

        /* renamed from: q  reason: collision with root package name */
        public final m f54540q;

        /* renamed from: r  reason: collision with root package name */
        public final String f54541r;

        /* renamed from: s  reason: collision with root package name */
        public final String f54542s;

        /* renamed from: t  reason: collision with root package name */
        public final long f54543t;

        /* renamed from: u  reason: collision with root package name */
        public final long f54544u;

        /* renamed from: v  reason: collision with root package name */
        public final boolean f54545v;

        @Override // java.lang.Comparable
        /* renamed from: a */
        public int compareTo(Long l10) {
            if (this.f54539p > l10.longValue()) {
                return 1;
            }
            if (this.f54539p < l10.longValue()) {
                return -1;
            }
            return 0;
        }

        private e(String str, d dVar, long j10, int i10, long j11, m mVar, String str2, String str3, long j12, long j13, boolean z10) {
            this.f54535d = str;
            this.f54536e = dVar;
            this.f54537i = j10;
            this.f54538o = i10;
            this.f54539p = j11;
            this.f54540q = mVar;
            this.f54541r = str2;
            this.f54542s = str3;
            this.f54543t = j12;
            this.f54544u = j13;
            this.f54545v = z10;
        }
    }

    /* renamed from: xd.f$f  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0764f {

        /* renamed from: a  reason: collision with root package name */
        public final long f54546a;

        /* renamed from: b  reason: collision with root package name */
        public final boolean f54547b;

        /* renamed from: c  reason: collision with root package name */
        public final long f54548c;

        /* renamed from: d  reason: collision with root package name */
        public final long f54549d;

        /* renamed from: e  reason: collision with root package name */
        public final boolean f54550e;

        public C0764f(long j10, boolean z10, long j11, long j12, boolean z11) {
            this.f54546a = j10;
            this.f54547b = z10;
            this.f54548c = j11;
            this.f54549d = j12;
            this.f54550e = z11;
        }
    }

    public f(int i10, String str, List list, long j10, boolean z10, long j11, boolean z11, int i11, long j12, int i12, long j13, long j14, boolean z12, boolean z13, boolean z14, m mVar, List list2, List list3, C0764f c0764f, Map map) {
        super(str, list, z12);
        this.f54509d = i10;
        this.f54513h = j11;
        this.f54512g = z10;
        this.f54514i = z11;
        this.f54515j = i11;
        this.f54516k = j12;
        this.f54517l = i12;
        this.f54518m = j13;
        this.f54519n = j14;
        this.f54520o = z13;
        this.f54521p = z14;
        this.f54522q = mVar;
        this.f54523r = s.o(list2);
        this.f54524s = s.o(list3);
        this.f54525t = t.c(map);
        if (!list3.isEmpty()) {
            b bVar = (b) v.c(list3);
            this.f54526u = bVar.f54539p + bVar.f54537i;
        } else if (!list2.isEmpty()) {
            d dVar = (d) v.c(list2);
            this.f54526u = dVar.f54539p + dVar.f54537i;
        } else {
            this.f54526u = 0L;
        }
        long j15 = -9223372036854775807L;
        if (j10 != -9223372036854775807L) {
            if (j10 >= 0) {
                j15 = Math.min(this.f54526u, j10);
            } else {
                j15 = Math.max(0L, this.f54526u + j10);
            }
        }
        this.f54510e = j15;
        this.f54511f = j10 >= 0;
        this.f54527v = c0764f;
    }

    public f c(long j10, int i10) {
        return new f(this.f54509d, this.f54572a, this.f54573b, this.f54510e, this.f54512g, j10, true, i10, this.f54516k, this.f54517l, this.f54518m, this.f54519n, this.f54574c, this.f54520o, this.f54521p, this.f54522q, this.f54523r, this.f54524s, this.f54527v, this.f54525t);
    }

    public f d() {
        if (this.f54520o) {
            return this;
        }
        return new f(this.f54509d, this.f54572a, this.f54573b, this.f54510e, this.f54512g, this.f54513h, this.f54514i, this.f54515j, this.f54516k, this.f54517l, this.f54518m, this.f54519n, this.f54574c, true, this.f54521p, this.f54522q, this.f54523r, this.f54524s, this.f54527v, this.f54525t);
    }

    public long e() {
        return this.f54513h + this.f54526u;
    }

    public boolean f(f fVar) {
        if (fVar != null) {
            long j10 = this.f54516k;
            long j11 = fVar.f54516k;
            if (j10 <= j11) {
                if (j10 < j11) {
                    return false;
                }
                int size = this.f54523r.size() - fVar.f54523r.size();
                if (size != 0) {
                    if (size > 0) {
                        return true;
                    }
                    return false;
                }
                int size2 = this.f54524s.size();
                int size3 = fVar.f54524s.size();
                if (size2 <= size3 && (size2 != size3 || !this.f54520o || fVar.f54520o)) {
                    return false;
                }
            }
        }
        return true;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class d extends e {

        /* renamed from: w  reason: collision with root package name */
        public final String f54533w;

        /* renamed from: x  reason: collision with root package name */
        public final List f54534x;

        public d(String str, long j10, long j11, String str2, String str3) {
            this(str, null, "", 0L, -1, -9223372036854775807L, null, str2, str3, j10, j11, false, s.t());
        }

        public d d(long j10, int i10) {
            ArrayList arrayList = new ArrayList();
            long j11 = j10;
            for (int i11 = 0; i11 < this.f54534x.size(); i11++) {
                b bVar = (b) this.f54534x.get(i11);
                arrayList.add(bVar.d(j11, i10));
                j11 += bVar.f54537i;
            }
            return new d(this.f54535d, this.f54536e, this.f54533w, this.f54537i, i10, j10, this.f54540q, this.f54541r, this.f54542s, this.f54543t, this.f54544u, this.f54545v, arrayList);
        }

        public d(String str, d dVar, String str2, long j10, int i10, long j11, m mVar, String str3, String str4, long j12, long j13, boolean z10, List list) {
            super(str, dVar, j10, i10, j11, mVar, str3, str4, j12, j13, z10);
            this.f54533w = str2;
            this.f54534x = s.o(list);
        }
    }

    @Override // qd.a
    /* renamed from: b */
    public f a(List list) {
        return this;
    }
}
