package com.google.android.exoplayer2;

import android.net.Uri;
import android.os.Bundle;
import android.os.IBinder;
import android.util.Pair;
import com.google.android.exoplayer2.MediaItem;
import com.google.android.exoplayer2.Timeline;
import com.google.android.exoplayer2.g;
import ni.s;
import rd.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class Timeline implements g {

    /* renamed from: d  reason: collision with root package name */
    public static final Timeline f11864d = new a();

    /* renamed from: e  reason: collision with root package name */
    private static final String f11865e = ne.w0.B0(0);

    /* renamed from: i  reason: collision with root package name */
    private static final String f11866i = ne.w0.B0(1);

    /* renamed from: o  reason: collision with root package name */
    private static final String f11867o = ne.w0.B0(2);

    /* renamed from: p  reason: collision with root package name */
    public static final g.a f11868p = new g.a() { // from class: lc.w0
        @Override // com.google.android.exoplayer2.g.a
        public final com.google.android.exoplayer2.g a(Bundle bundle) {
            Timeline b10;
            b10 = Timeline.b(bundle);
            return b10;
        }
    };

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a extends Timeline {
        a() {
        }

        @Override // com.google.android.exoplayer2.Timeline
        public int f(Object obj) {
            return -1;
        }

        @Override // com.google.android.exoplayer2.Timeline
        public b k(int i10, b bVar, boolean z10) {
            throw new IndexOutOfBoundsException();
        }

        @Override // com.google.android.exoplayer2.Timeline
        public int m() {
            return 0;
        }

        @Override // com.google.android.exoplayer2.Timeline
        public Object q(int i10) {
            throw new IndexOutOfBoundsException();
        }

        @Override // com.google.android.exoplayer2.Timeline
        public d s(int i10, d dVar, long j10) {
            throw new IndexOutOfBoundsException();
        }

        @Override // com.google.android.exoplayer2.Timeline
        public int t() {
            return 0;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b implements g {

        /* renamed from: s  reason: collision with root package name */
        private static final String f11869s = ne.w0.B0(0);

        /* renamed from: t  reason: collision with root package name */
        private static final String f11870t = ne.w0.B0(1);

        /* renamed from: u  reason: collision with root package name */
        private static final String f11871u = ne.w0.B0(2);

        /* renamed from: v  reason: collision with root package name */
        private static final String f11872v = ne.w0.B0(3);

        /* renamed from: w  reason: collision with root package name */
        private static final String f11873w = ne.w0.B0(4);

        /* renamed from: x  reason: collision with root package name */
        public static final g.a f11874x = new g.a() { // from class: lc.x0
            @Override // com.google.android.exoplayer2.g.a
            public final com.google.android.exoplayer2.g a(Bundle bundle) {
                Timeline.b c10;
                c10 = Timeline.b.c(bundle);
                return c10;
            }
        };

        /* renamed from: d  reason: collision with root package name */
        public Object f11875d;

        /* renamed from: e  reason: collision with root package name */
        public Object f11876e;

        /* renamed from: i  reason: collision with root package name */
        public int f11877i;

        /* renamed from: o  reason: collision with root package name */
        public long f11878o;

        /* renamed from: p  reason: collision with root package name */
        public long f11879p;

        /* renamed from: q  reason: collision with root package name */
        public boolean f11880q;

        /* renamed from: r  reason: collision with root package name */
        private rd.c f11881r = rd.c.f48915r;

        /* JADX INFO: Access modifiers changed from: private */
        public static b c(Bundle bundle) {
            rd.c cVar;
            int i10 = bundle.getInt(f11869s, 0);
            long j10 = bundle.getLong(f11870t, -9223372036854775807L);
            long j11 = bundle.getLong(f11871u, 0L);
            boolean z10 = bundle.getBoolean(f11872v, false);
            Bundle bundle2 = bundle.getBundle(f11873w);
            if (bundle2 != null) {
                cVar = (rd.c) rd.c.f48921x.a(bundle2);
            } else {
                cVar = rd.c.f48915r;
            }
            rd.c cVar2 = cVar;
            b bVar = new b();
            bVar.w(null, null, i10, j10, j11, cVar2, z10);
            return bVar;
        }

        public int d(int i10) {
            return this.f11881r.c(i10).f48936e;
        }

        public long e(int i10, int i11) {
            c.a c10 = this.f11881r.c(i10);
            if (c10.f48936e != -1) {
                return c10.f48940q[i11];
            }
            return -9223372036854775807L;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj != null && b.class.equals(obj.getClass())) {
                b bVar = (b) obj;
                if (ne.w0.c(this.f11875d, bVar.f11875d) && ne.w0.c(this.f11876e, bVar.f11876e) && this.f11877i == bVar.f11877i && this.f11878o == bVar.f11878o && this.f11879p == bVar.f11879p && this.f11880q == bVar.f11880q && ne.w0.c(this.f11881r, bVar.f11881r)) {
                    return true;
                }
            }
            return false;
        }

        public int f() {
            return this.f11881r.f48923e;
        }

        public int g(long j10) {
            return this.f11881r.d(j10, this.f11878o);
        }

        public int h(long j10) {
            return this.f11881r.e(j10, this.f11878o);
        }

        public int hashCode() {
            int hashCode;
            Object obj = this.f11875d;
            int i10 = 0;
            if (obj == null) {
                hashCode = 0;
            } else {
                hashCode = obj.hashCode();
            }
            int i11 = (217 + hashCode) * 31;
            Object obj2 = this.f11876e;
            if (obj2 != null) {
                i10 = obj2.hashCode();
            }
            long j10 = this.f11878o;
            long j11 = this.f11879p;
            return ((((((((((i11 + i10) * 31) + this.f11877i) * 31) + ((int) (j10 ^ (j10 >>> 32)))) * 31) + ((int) (j11 ^ (j11 >>> 32)))) * 31) + (this.f11880q ? 1 : 0)) * 31) + this.f11881r.hashCode();
        }

        public long i(int i10) {
            return this.f11881r.c(i10).f48935d;
        }

        public long j() {
            return this.f11881r.f48924i;
        }

        public int k(int i10, int i11) {
            c.a c10 = this.f11881r.c(i10);
            if (c10.f48936e != -1) {
                return c10.f48939p[i11];
            }
            return 0;
        }

        public long l(int i10) {
            return this.f11881r.c(i10).f48941r;
        }

        public long m() {
            return this.f11878o;
        }

        public int n(int i10) {
            return this.f11881r.c(i10).f();
        }

        public int o(int i10, int i11) {
            return this.f11881r.c(i10).g(i11);
        }

        public long p() {
            return ne.w0.p1(this.f11879p);
        }

        public long q() {
            return this.f11879p;
        }

        public int r() {
            return this.f11881r.f48926p;
        }

        public boolean s(int i10) {
            return !this.f11881r.c(i10).h();
        }

        public boolean t(int i10) {
            if (i10 == f() - 1 && this.f11881r.f(i10)) {
                return true;
            }
            return false;
        }

        public boolean u(int i10) {
            return this.f11881r.c(i10).f48942s;
        }

        public b v(Object obj, Object obj2, int i10, long j10, long j11) {
            return w(obj, obj2, i10, j10, j11, rd.c.f48915r, false);
        }

        public b w(Object obj, Object obj2, int i10, long j10, long j11, rd.c cVar, boolean z10) {
            this.f11875d = obj;
            this.f11876e = obj2;
            this.f11877i = i10;
            this.f11878o = j10;
            this.f11879p = j11;
            this.f11881r = cVar;
            this.f11880q = z10;
            return this;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c extends Timeline {

        /* renamed from: q  reason: collision with root package name */
        private final ni.s f11882q;

        /* renamed from: r  reason: collision with root package name */
        private final ni.s f11883r;

        /* renamed from: s  reason: collision with root package name */
        private final int[] f11884s;

        /* renamed from: t  reason: collision with root package name */
        private final int[] f11885t;

        public c(ni.s sVar, ni.s sVar2, int[] iArr) {
            boolean z10;
            if (sVar.size() == iArr.length) {
                z10 = true;
            } else {
                z10 = false;
            }
            ne.a.a(z10);
            this.f11882q = sVar;
            this.f11883r = sVar2;
            this.f11884s = iArr;
            this.f11885t = new int[iArr.length];
            for (int i10 = 0; i10 < iArr.length; i10++) {
                this.f11885t[iArr[i10]] = i10;
            }
        }

        @Override // com.google.android.exoplayer2.Timeline
        public int e(boolean z10) {
            if (u()) {
                return -1;
            }
            if (!z10) {
                return 0;
            }
            return this.f11884s[0];
        }

        @Override // com.google.android.exoplayer2.Timeline
        public int f(Object obj) {
            throw new UnsupportedOperationException();
        }

        @Override // com.google.android.exoplayer2.Timeline
        public int g(boolean z10) {
            if (u()) {
                return -1;
            }
            if (z10) {
                return this.f11884s[t() - 1];
            }
            return t() - 1;
        }

        @Override // com.google.android.exoplayer2.Timeline
        public int i(int i10, int i11, boolean z10) {
            if (i11 == 1) {
                return i10;
            }
            if (i10 == g(z10)) {
                if (i11 == 2) {
                    return e(z10);
                }
                return -1;
            } else if (z10) {
                return this.f11884s[this.f11885t[i10] + 1];
            } else {
                return i10 + 1;
            }
        }

        @Override // com.google.android.exoplayer2.Timeline
        public b k(int i10, b bVar, boolean z10) {
            b bVar2 = (b) this.f11883r.get(i10);
            bVar.w(bVar2.f11875d, bVar2.f11876e, bVar2.f11877i, bVar2.f11878o, bVar2.f11879p, bVar2.f11881r, bVar2.f11880q);
            return bVar;
        }

        @Override // com.google.android.exoplayer2.Timeline
        public int m() {
            return this.f11883r.size();
        }

        @Override // com.google.android.exoplayer2.Timeline
        public int p(int i10, int i11, boolean z10) {
            if (i11 == 1) {
                return i10;
            }
            if (i10 == e(z10)) {
                if (i11 == 2) {
                    return g(z10);
                }
                return -1;
            } else if (z10) {
                return this.f11884s[this.f11885t[i10] - 1];
            } else {
                return i10 - 1;
            }
        }

        @Override // com.google.android.exoplayer2.Timeline
        public Object q(int i10) {
            throw new UnsupportedOperationException();
        }

        @Override // com.google.android.exoplayer2.Timeline
        public d s(int i10, d dVar, long j10) {
            d dVar2 = (d) this.f11882q.get(i10);
            dVar.h(dVar2.f11886d, dVar2.f11888i, dVar2.f11889o, dVar2.f11890p, dVar2.f11891q, dVar2.f11892r, dVar2.f11893s, dVar2.f11894t, dVar2.f11896v, dVar2.f11898x, dVar2.f11899y, dVar2.f11900z, dVar2.A, dVar2.B);
            dVar.f11897w = dVar2.f11897w;
            return dVar;
        }

        @Override // com.google.android.exoplayer2.Timeline
        public int t() {
            return this.f11882q.size();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class d implements g {
        public static final Object C = new Object();
        private static final Object D = new Object();
        private static final MediaItem E = new MediaItem.c().b("com.google.android.exoplayer2.Timeline").e(Uri.EMPTY).a();
        private static final String F = ne.w0.B0(1);
        private static final String G = ne.w0.B0(2);
        private static final String H = ne.w0.B0(3);
        private static final String I = ne.w0.B0(4);
        private static final String J = ne.w0.B0(5);
        private static final String K = ne.w0.B0(6);
        private static final String L = ne.w0.B0(7);
        private static final String M = ne.w0.B0(8);
        private static final String N = ne.w0.B0(9);
        private static final String O = ne.w0.B0(10);
        private static final String P = ne.w0.B0(11);
        private static final String Q = ne.w0.B0(12);
        private static final String R = ne.w0.B0(13);
        public static final g.a S = new g.a() { // from class: lc.y0
            @Override // com.google.android.exoplayer2.g.a
            public final com.google.android.exoplayer2.g a(Bundle bundle) {
                Timeline.d b10;
                b10 = Timeline.d.b(bundle);
                return b10;
            }
        };
        public int A;
        public long B;

        /* renamed from: e  reason: collision with root package name */
        public Object f11887e;

        /* renamed from: o  reason: collision with root package name */
        public Object f11889o;

        /* renamed from: p  reason: collision with root package name */
        public long f11890p;

        /* renamed from: q  reason: collision with root package name */
        public long f11891q;

        /* renamed from: r  reason: collision with root package name */
        public long f11892r;

        /* renamed from: s  reason: collision with root package name */
        public boolean f11893s;

        /* renamed from: t  reason: collision with root package name */
        public boolean f11894t;

        /* renamed from: u  reason: collision with root package name */
        public boolean f11895u;

        /* renamed from: v  reason: collision with root package name */
        public MediaItem.g f11896v;

        /* renamed from: w  reason: collision with root package name */
        public boolean f11897w;

        /* renamed from: x  reason: collision with root package name */
        public long f11898x;

        /* renamed from: y  reason: collision with root package name */
        public long f11899y;

        /* renamed from: z  reason: collision with root package name */
        public int f11900z;

        /* renamed from: d  reason: collision with root package name */
        public Object f11886d = C;

        /* renamed from: i  reason: collision with root package name */
        public MediaItem f11888i = E;

        /* JADX INFO: Access modifiers changed from: private */
        public static d b(Bundle bundle) {
            MediaItem mediaItem;
            MediaItem.g gVar;
            Bundle bundle2 = bundle.getBundle(F);
            if (bundle2 != null) {
                mediaItem = (MediaItem) MediaItem.A.a(bundle2);
            } else {
                mediaItem = MediaItem.f11617t;
            }
            MediaItem mediaItem2 = mediaItem;
            long j10 = bundle.getLong(G, -9223372036854775807L);
            long j11 = bundle.getLong(H, -9223372036854775807L);
            long j12 = bundle.getLong(I, -9223372036854775807L);
            boolean z10 = bundle.getBoolean(J, false);
            boolean z11 = bundle.getBoolean(K, false);
            Bundle bundle3 = bundle.getBundle(L);
            if (bundle3 != null) {
                gVar = (MediaItem.g) MediaItem.g.f11698w.a(bundle3);
            } else {
                gVar = null;
            }
            MediaItem.g gVar2 = gVar;
            boolean z12 = bundle.getBoolean(M, false);
            long j13 = bundle.getLong(N, 0L);
            long j14 = bundle.getLong(O, -9223372036854775807L);
            int i10 = bundle.getInt(P, 0);
            int i11 = bundle.getInt(Q, 0);
            long j15 = bundle.getLong(R, 0L);
            d dVar = new d();
            dVar.h(D, mediaItem2, null, j10, j11, j12, z10, z11, gVar2, j13, j14, i10, i11, j15);
            dVar.f11897w = z12;
            return dVar;
        }

        public long c() {
            return ne.w0.f0(this.f11892r);
        }

        public long d() {
            return ne.w0.p1(this.f11898x);
        }

        public long e() {
            return this.f11898x;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj != null && d.class.equals(obj.getClass())) {
                d dVar = (d) obj;
                if (ne.w0.c(this.f11886d, dVar.f11886d) && ne.w0.c(this.f11888i, dVar.f11888i) && ne.w0.c(this.f11889o, dVar.f11889o) && ne.w0.c(this.f11896v, dVar.f11896v) && this.f11890p == dVar.f11890p && this.f11891q == dVar.f11891q && this.f11892r == dVar.f11892r && this.f11893s == dVar.f11893s && this.f11894t == dVar.f11894t && this.f11897w == dVar.f11897w && this.f11898x == dVar.f11898x && this.f11899y == dVar.f11899y && this.f11900z == dVar.f11900z && this.A == dVar.A && this.B == dVar.B) {
                    return true;
                }
            }
            return false;
        }

        public long f() {
            return ne.w0.p1(this.f11899y);
        }

        public boolean g() {
            boolean z10;
            boolean z11;
            boolean z12 = this.f11895u;
            if (this.f11896v != null) {
                z10 = true;
            } else {
                z10 = false;
            }
            if (z12 == z10) {
                z11 = true;
            } else {
                z11 = false;
            }
            ne.a.g(z11);
            if (this.f11896v == null) {
                return false;
            }
            return true;
        }

        public d h(Object obj, MediaItem mediaItem, Object obj2, long j10, long j11, long j12, boolean z10, boolean z11, MediaItem.g gVar, long j13, long j14, int i10, int i11, long j15) {
            MediaItem mediaItem2;
            Object obj3;
            boolean z12;
            MediaItem.h hVar;
            this.f11886d = obj;
            if (mediaItem != null) {
                mediaItem2 = mediaItem;
            } else {
                mediaItem2 = E;
            }
            this.f11888i = mediaItem2;
            if (mediaItem != null && (hVar = mediaItem.f11625e) != null) {
                obj3 = hVar.f11723t;
            } else {
                obj3 = null;
            }
            this.f11887e = obj3;
            this.f11889o = obj2;
            this.f11890p = j10;
            this.f11891q = j11;
            this.f11892r = j12;
            this.f11893s = z10;
            this.f11894t = z11;
            if (gVar != null) {
                z12 = true;
            } else {
                z12 = false;
            }
            this.f11895u = z12;
            this.f11896v = gVar;
            this.f11898x = j13;
            this.f11899y = j14;
            this.f11900z = i10;
            this.A = i11;
            this.B = j15;
            this.f11897w = false;
            return this;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2 = (((217 + this.f11886d.hashCode()) * 31) + this.f11888i.hashCode()) * 31;
            Object obj = this.f11889o;
            int i10 = 0;
            if (obj == null) {
                hashCode = 0;
            } else {
                hashCode = obj.hashCode();
            }
            int i11 = (hashCode2 + hashCode) * 31;
            MediaItem.g gVar = this.f11896v;
            if (gVar != null) {
                i10 = gVar.hashCode();
            }
            long j10 = this.f11890p;
            long j11 = this.f11891q;
            long j12 = this.f11892r;
            long j13 = this.f11898x;
            long j14 = this.f11899y;
            long j15 = this.B;
            return ((((((((((((((((((((((i11 + i10) * 31) + ((int) (j10 ^ (j10 >>> 32)))) * 31) + ((int) (j11 ^ (j11 >>> 32)))) * 31) + ((int) (j12 ^ (j12 >>> 32)))) * 31) + (this.f11893s ? 1 : 0)) * 31) + (this.f11894t ? 1 : 0)) * 31) + (this.f11897w ? 1 : 0)) * 31) + ((int) (j13 ^ (j13 >>> 32)))) * 31) + ((int) (j14 ^ (j14 >>> 32)))) * 31) + this.f11900z) * 31) + this.A) * 31) + ((int) (j15 ^ (j15 >>> 32)));
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static Timeline b(Bundle bundle) {
        ni.s c10 = c(d.S, ne.c.a(bundle, f11865e));
        ni.s c11 = c(b.f11874x, ne.c.a(bundle, f11866i));
        int[] intArray = bundle.getIntArray(f11867o);
        if (intArray == null) {
            intArray = d(c10.size());
        }
        return new c(c10, c11, intArray);
    }

    private static ni.s c(g.a aVar, IBinder iBinder) {
        if (iBinder == null) {
            return ni.s.t();
        }
        s.a aVar2 = new s.a();
        ni.s a10 = lc.c.a(iBinder);
        for (int i10 = 0; i10 < a10.size(); i10++) {
            aVar2.a(aVar.a((Bundle) a10.get(i10)));
        }
        return aVar2.k();
    }

    private static int[] d(int i10) {
        int[] iArr = new int[i10];
        for (int i11 = 0; i11 < i10; i11++) {
            iArr[i11] = i11;
        }
        return iArr;
    }

    public int e(boolean z10) {
        if (u()) {
            return -1;
        }
        return 0;
    }

    public boolean equals(Object obj) {
        int g10;
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof Timeline)) {
            return false;
        }
        Timeline timeline = (Timeline) obj;
        if (timeline.t() != t() || timeline.m() != m()) {
            return false;
        }
        d dVar = new d();
        b bVar = new b();
        d dVar2 = new d();
        b bVar2 = new b();
        for (int i10 = 0; i10 < t(); i10++) {
            if (!r(i10, dVar).equals(timeline.r(i10, dVar2))) {
                return false;
            }
        }
        for (int i11 = 0; i11 < m(); i11++) {
            if (!k(i11, bVar, true).equals(timeline.k(i11, bVar2, true))) {
                return false;
            }
        }
        int e10 = e(true);
        if (e10 != timeline.e(true) || (g10 = g(true)) != timeline.g(true)) {
            return false;
        }
        while (e10 != g10) {
            int i12 = i(e10, 0, true);
            if (i12 != timeline.i(e10, 0, true)) {
                return false;
            }
            e10 = i12;
        }
        return true;
    }

    public abstract int f(Object obj);

    public int g(boolean z10) {
        if (u()) {
            return -1;
        }
        return t() - 1;
    }

    public final int h(int i10, b bVar, d dVar, int i11, boolean z10) {
        int i12 = j(i10, bVar).f11877i;
        if (r(i12, dVar).A == i10) {
            int i13 = i(i12, i11, z10);
            if (i13 == -1) {
                return -1;
            }
            return r(i13, dVar).f11900z;
        }
        return i10 + 1;
    }

    public int hashCode() {
        d dVar = new d();
        b bVar = new b();
        int t10 = 217 + t();
        for (int i10 = 0; i10 < t(); i10++) {
            t10 = (t10 * 31) + r(i10, dVar).hashCode();
        }
        int m10 = (t10 * 31) + m();
        for (int i11 = 0; i11 < m(); i11++) {
            m10 = (m10 * 31) + k(i11, bVar, true).hashCode();
        }
        int e10 = e(true);
        while (e10 != -1) {
            m10 = (m10 * 31) + e10;
            e10 = i(e10, 0, true);
        }
        return m10;
    }

    public int i(int i10, int i11, boolean z10) {
        if (i11 != 0) {
            if (i11 != 1) {
                if (i11 == 2) {
                    if (i10 == g(z10)) {
                        return e(z10);
                    }
                    return i10 + 1;
                }
                throw new IllegalStateException();
            }
            return i10;
        } else if (i10 == g(z10)) {
            return -1;
        } else {
            return i10 + 1;
        }
    }

    public final b j(int i10, b bVar) {
        return k(i10, bVar, false);
    }

    public abstract b k(int i10, b bVar, boolean z10);

    public b l(Object obj, b bVar) {
        return k(f(obj), bVar, true);
    }

    public abstract int m();

    public final Pair n(d dVar, b bVar, int i10, long j10) {
        return (Pair) ne.a.e(o(dVar, bVar, i10, j10, 0L));
    }

    public final Pair o(d dVar, b bVar, int i10, long j10, long j11) {
        ne.a.c(i10, 0, t());
        s(i10, dVar, j11);
        if (j10 == -9223372036854775807L) {
            j10 = dVar.e();
            if (j10 == -9223372036854775807L) {
                return null;
            }
        }
        int i11 = dVar.f11900z;
        j(i11, bVar);
        while (i11 < dVar.A && bVar.f11879p != j10) {
            int i12 = i11 + 1;
            if (j(i12, bVar).f11879p > j10) {
                break;
            }
            i11 = i12;
        }
        k(i11, bVar, true);
        long j12 = j10 - bVar.f11879p;
        long j13 = bVar.f11878o;
        if (j13 != -9223372036854775807L) {
            j12 = Math.min(j12, j13 - 1);
        }
        return Pair.create(ne.a.e(bVar.f11876e), Long.valueOf(Math.max(0L, j12)));
    }

    public int p(int i10, int i11, boolean z10) {
        if (i11 != 0) {
            if (i11 != 1) {
                if (i11 == 2) {
                    if (i10 == e(z10)) {
                        return g(z10);
                    }
                    return i10 - 1;
                }
                throw new IllegalStateException();
            }
            return i10;
        } else if (i10 == e(z10)) {
            return -1;
        } else {
            return i10 - 1;
        }
    }

    public abstract Object q(int i10);

    public final d r(int i10, d dVar) {
        return s(i10, dVar, 0L);
    }

    public abstract d s(int i10, d dVar, long j10);

    public abstract int t();

    public final boolean u() {
        if (t() == 0) {
            return true;
        }
        return false;
    }

    public final boolean v(int i10, b bVar, d dVar, int i11, boolean z10) {
        if (h(i10, bVar, dVar, i11, z10) == -1) {
            return true;
        }
        return false;
    }
}
