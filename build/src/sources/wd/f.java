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
    public final int f52344d;

    /* renamed from: e  reason: collision with root package name */
    public final long f52345e;

    /* renamed from: f  reason: collision with root package name */
    public final boolean f52346f;

    /* renamed from: g  reason: collision with root package name */
    public final boolean f52347g;

    /* renamed from: h  reason: collision with root package name */
    public final long f52348h;

    /* renamed from: i  reason: collision with root package name */
    public final boolean f52349i;

    /* renamed from: j  reason: collision with root package name */
    public final int f52350j;

    /* renamed from: k  reason: collision with root package name */
    public final long f52351k;

    /* renamed from: l  reason: collision with root package name */
    public final int f52352l;

    /* renamed from: m  reason: collision with root package name */
    public final long f52353m;

    /* renamed from: n  reason: collision with root package name */
    public final long f52354n;

    /* renamed from: o  reason: collision with root package name */
    public final boolean f52355o;

    /* renamed from: p  reason: collision with root package name */
    public final boolean f52356p;

    /* renamed from: q  reason: collision with root package name */
    public final m f52357q;

    /* renamed from: r  reason: collision with root package name */
    public final List f52358r;

    /* renamed from: s  reason: collision with root package name */
    public final List f52359s;

    /* renamed from: t  reason: collision with root package name */
    public final Map f52360t;

    /* renamed from: u  reason: collision with root package name */
    public final long f52361u;

    /* renamed from: v  reason: collision with root package name */
    public final C0719f f52362v;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b extends e {

        /* renamed from: w  reason: collision with root package name */
        public final boolean f52363w;

        /* renamed from: x  reason: collision with root package name */
        public final boolean f52364x;

        public b(String str, d dVar, long j10, int i10, long j11, m mVar, String str2, String str3, long j12, long j13, boolean z10, boolean z11, boolean z12) {
            super(str, dVar, j10, i10, j11, mVar, str2, str3, j12, j13, z10);
            this.f52363w = z11;
            this.f52364x = z12;
        }

        public b d(long j10, int i10) {
            return new b(this.f52370d, this.f52371e, this.f52372i, i10, j10, this.f52375q, this.f52376r, this.f52377s, this.f52378t, this.f52379u, this.f52380v, this.f52363w, this.f52364x);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c {

        /* renamed from: a  reason: collision with root package name */
        public final Uri f52365a;

        /* renamed from: b  reason: collision with root package name */
        public final long f52366b;

        /* renamed from: c  reason: collision with root package name */
        public final int f52367c;

        public c(Uri uri, long j10, int i10) {
            this.f52365a = uri;
            this.f52366b = j10;
            this.f52367c = i10;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class e implements Comparable {

        /* renamed from: d  reason: collision with root package name */
        public final String f52370d;

        /* renamed from: e  reason: collision with root package name */
        public final d f52371e;

        /* renamed from: i  reason: collision with root package name */
        public final long f52372i;

        /* renamed from: o  reason: collision with root package name */
        public final int f52373o;

        /* renamed from: p  reason: collision with root package name */
        public final long f52374p;

        /* renamed from: q  reason: collision with root package name */
        public final m f52375q;

        /* renamed from: r  reason: collision with root package name */
        public final String f52376r;

        /* renamed from: s  reason: collision with root package name */
        public final String f52377s;

        /* renamed from: t  reason: collision with root package name */
        public final long f52378t;

        /* renamed from: u  reason: collision with root package name */
        public final long f52379u;

        /* renamed from: v  reason: collision with root package name */
        public final boolean f52380v;

        @Override // java.lang.Comparable
        /* renamed from: a */
        public int compareTo(Long l10) {
            if (this.f52374p > l10.longValue()) {
                return 1;
            }
            if (this.f52374p < l10.longValue()) {
                return -1;
            }
            return 0;
        }

        private e(String str, d dVar, long j10, int i10, long j11, m mVar, String str2, String str3, long j12, long j13, boolean z10) {
            this.f52370d = str;
            this.f52371e = dVar;
            this.f52372i = j10;
            this.f52373o = i10;
            this.f52374p = j11;
            this.f52375q = mVar;
            this.f52376r = str2;
            this.f52377s = str3;
            this.f52378t = j12;
            this.f52379u = j13;
            this.f52380v = z10;
        }
    }

    /* renamed from: wd.f$f  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0719f {

        /* renamed from: a  reason: collision with root package name */
        public final long f52381a;

        /* renamed from: b  reason: collision with root package name */
        public final boolean f52382b;

        /* renamed from: c  reason: collision with root package name */
        public final long f52383c;

        /* renamed from: d  reason: collision with root package name */
        public final long f52384d;

        /* renamed from: e  reason: collision with root package name */
        public final boolean f52385e;

        public C0719f(long j10, boolean z10, long j11, long j12, boolean z11) {
            this.f52381a = j10;
            this.f52382b = z10;
            this.f52383c = j11;
            this.f52384d = j12;
            this.f52385e = z11;
        }
    }

    public f(int i10, String str, List list, long j10, boolean z10, long j11, boolean z11, int i11, long j12, int i12, long j13, long j14, boolean z12, boolean z13, boolean z14, m mVar, List list2, List list3, C0719f c0719f, Map map) {
        super(str, list, z12);
        this.f52344d = i10;
        this.f52348h = j11;
        this.f52347g = z10;
        this.f52349i = z11;
        this.f52350j = i11;
        this.f52351k = j12;
        this.f52352l = i12;
        this.f52353m = j13;
        this.f52354n = j14;
        this.f52355o = z13;
        this.f52356p = z14;
        this.f52357q = mVar;
        this.f52358r = s.m(list2);
        this.f52359s = s.m(list3);
        this.f52360t = t.c(map);
        if (!list3.isEmpty()) {
            b bVar = (b) v.c(list3);
            this.f52361u = bVar.f52374p + bVar.f52372i;
        } else if (!list2.isEmpty()) {
            d dVar = (d) v.c(list2);
            this.f52361u = dVar.f52374p + dVar.f52372i;
        } else {
            this.f52361u = 0L;
        }
        long j15 = -9223372036854775807L;
        if (j10 != -9223372036854775807L) {
            if (j10 >= 0) {
                j15 = Math.min(this.f52361u, j10);
            } else {
                j15 = Math.max(0L, this.f52361u + j10);
            }
        }
        this.f52345e = j15;
        this.f52346f = j10 >= 0;
        this.f52362v = c0719f;
    }

    public f c(long j10, int i10) {
        return new f(this.f52344d, this.f52407a, this.f52408b, this.f52345e, this.f52347g, j10, true, i10, this.f52351k, this.f52352l, this.f52353m, this.f52354n, this.f52409c, this.f52355o, this.f52356p, this.f52357q, this.f52358r, this.f52359s, this.f52362v, this.f52360t);
    }

    public f d() {
        if (this.f52355o) {
            return this;
        }
        return new f(this.f52344d, this.f52407a, this.f52408b, this.f52345e, this.f52347g, this.f52348h, this.f52349i, this.f52350j, this.f52351k, this.f52352l, this.f52353m, this.f52354n, this.f52409c, true, this.f52356p, this.f52357q, this.f52358r, this.f52359s, this.f52362v, this.f52360t);
    }

    public long e() {
        return this.f52348h + this.f52361u;
    }

    public boolean f(f fVar) {
        if (fVar != null) {
            long j10 = this.f52351k;
            long j11 = fVar.f52351k;
            if (j10 <= j11) {
                if (j10 < j11) {
                    return false;
                }
                int size = this.f52358r.size() - fVar.f52358r.size();
                if (size != 0) {
                    if (size > 0) {
                        return true;
                    }
                    return false;
                }
                int size2 = this.f52359s.size();
                int size3 = fVar.f52359s.size();
                if (size2 <= size3 && (size2 != size3 || !this.f52355o || fVar.f52355o)) {
                    return false;
                }
            }
        }
        return true;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class d extends e {

        /* renamed from: w  reason: collision with root package name */
        public final String f52368w;

        /* renamed from: x  reason: collision with root package name */
        public final List f52369x;

        public d(String str, long j10, long j11, String str2, String str3) {
            this(str, null, "", 0L, -1, -9223372036854775807L, null, str2, str3, j10, j11, false, s.r());
        }

        public d d(long j10, int i10) {
            ArrayList arrayList = new ArrayList();
            long j11 = j10;
            for (int i11 = 0; i11 < this.f52369x.size(); i11++) {
                b bVar = (b) this.f52369x.get(i11);
                arrayList.add(bVar.d(j11, i10));
                j11 += bVar.f52372i;
            }
            return new d(this.f52370d, this.f52371e, this.f52368w, this.f52372i, i10, j10, this.f52375q, this.f52376r, this.f52377s, this.f52378t, this.f52379u, this.f52380v, arrayList);
        }

        public d(String str, d dVar, String str2, long j10, int i10, long j11, m mVar, String str3, String str4, long j12, long j13, boolean z10, List list) {
            super(str, dVar, j10, i10, j11, mVar, str3, str4, j12, j13, z10);
            this.f52368w = str2;
            this.f52369x = s.m(list);
        }
    }

    @Override // pd.a
    /* renamed from: b */
    public f a(List list) {
        return this;
    }
}
