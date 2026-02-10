package com.google.android.exoplayer2;

import android.net.Uri;
import android.os.Bundle;
import android.os.IBinder;
import android.util.Pair;
import com.google.android.exoplayer2.MediaItem;
import com.google.android.exoplayer2.Timeline;
import com.google.android.exoplayer2.g;
import oi.s;
import sd.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class Timeline implements g {

    /* renamed from: d  reason: collision with root package name */
    public static final Timeline f12004d = new a();

    /* renamed from: e  reason: collision with root package name */
    private static final String f12005e = oe.w0.B0(0);

    /* renamed from: i  reason: collision with root package name */
    private static final String f12006i = oe.w0.B0(1);

    /* renamed from: o  reason: collision with root package name */
    private static final String f12007o = oe.w0.B0(2);

    /* renamed from: p  reason: collision with root package name */
    public static final g.a f12008p = new g.a() { // from class: mc.w0
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
        private static final String f12009s = oe.w0.B0(0);

        /* renamed from: t  reason: collision with root package name */
        private static final String f12010t = oe.w0.B0(1);

        /* renamed from: u  reason: collision with root package name */
        private static final String f12011u = oe.w0.B0(2);

        /* renamed from: v  reason: collision with root package name */
        private static final String f12012v = oe.w0.B0(3);

        /* renamed from: w  reason: collision with root package name */
        private static final String f12013w = oe.w0.B0(4);

        /* renamed from: x  reason: collision with root package name */
        public static final g.a f12014x = new g.a() { // from class: mc.x0
            @Override // com.google.android.exoplayer2.g.a
            public final com.google.android.exoplayer2.g a(Bundle bundle) {
                Timeline.b c10;
                c10 = Timeline.b.c(bundle);
                return c10;
            }
        };

        /* renamed from: d  reason: collision with root package name */
        public Object f12015d;

        /* renamed from: e  reason: collision with root package name */
        public Object f12016e;

        /* renamed from: i  reason: collision with root package name */
        public int f12017i;

        /* renamed from: o  reason: collision with root package name */
        public long f12018o;

        /* renamed from: p  reason: collision with root package name */
        public long f12019p;

        /* renamed from: q  reason: collision with root package name */
        public boolean f12020q;

        /* renamed from: r  reason: collision with root package name */
        private sd.c f12021r = sd.c.f49740r;

        /* JADX INFO: Access modifiers changed from: private */
        public static b c(Bundle bundle) {
            sd.c cVar;
            int i10 = bundle.getInt(f12009s, 0);
            long j10 = bundle.getLong(f12010t, -9223372036854775807L);
            long j11 = bundle.getLong(f12011u, 0L);
            boolean z10 = bundle.getBoolean(f12012v, false);
            Bundle bundle2 = bundle.getBundle(f12013w);
            if (bundle2 != null) {
                cVar = (sd.c) sd.c.f49746x.a(bundle2);
            } else {
                cVar = sd.c.f49740r;
            }
            sd.c cVar2 = cVar;
            b bVar = new b();
            bVar.w(null, null, i10, j10, j11, cVar2, z10);
            return bVar;
        }

        public int d(int i10) {
            return this.f12021r.c(i10).f49761e;
        }

        public long e(int i10, int i11) {
            c.a c10 = this.f12021r.c(i10);
            if (c10.f49761e != -1) {
                return c10.f49765q[i11];
            }
            return -9223372036854775807L;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj != null && b.class.equals(obj.getClass())) {
                b bVar = (b) obj;
                if (oe.w0.c(this.f12015d, bVar.f12015d) && oe.w0.c(this.f12016e, bVar.f12016e) && this.f12017i == bVar.f12017i && this.f12018o == bVar.f12018o && this.f12019p == bVar.f12019p && this.f12020q == bVar.f12020q && oe.w0.c(this.f12021r, bVar.f12021r)) {
                    return true;
                }
            }
            return false;
        }

        public int f() {
            return this.f12021r.f49748e;
        }

        public int g(long j10) {
            return this.f12021r.d(j10, this.f12018o);
        }

        public int h(long j10) {
            return this.f12021r.e(j10, this.f12018o);
        }

        public int hashCode() {
            int hashCode;
            Object obj = this.f12015d;
            int i10 = 0;
            if (obj == null) {
                hashCode = 0;
            } else {
                hashCode = obj.hashCode();
            }
            int i11 = (217 + hashCode) * 31;
            Object obj2 = this.f12016e;
            if (obj2 != null) {
                i10 = obj2.hashCode();
            }
            long j10 = this.f12018o;
            long j11 = this.f12019p;
            return ((((((((((i11 + i10) * 31) + this.f12017i) * 31) + ((int) (j10 ^ (j10 >>> 32)))) * 31) + ((int) (j11 ^ (j11 >>> 32)))) * 31) + (this.f12020q ? 1 : 0)) * 31) + this.f12021r.hashCode();
        }

        public long i(int i10) {
            return this.f12021r.c(i10).f49760d;
        }

        public long j() {
            return this.f12021r.f49749i;
        }

        public int k(int i10, int i11) {
            c.a c10 = this.f12021r.c(i10);
            if (c10.f49761e != -1) {
                return c10.f49764p[i11];
            }
            return 0;
        }

        public long l(int i10) {
            return this.f12021r.c(i10).f49766r;
        }

        public long m() {
            return this.f12018o;
        }

        public int n(int i10) {
            return this.f12021r.c(i10).f();
        }

        public int o(int i10, int i11) {
            return this.f12021r.c(i10).g(i11);
        }

        public long p() {
            return oe.w0.p1(this.f12019p);
        }

        public long q() {
            return this.f12019p;
        }

        public int r() {
            return this.f12021r.f49751p;
        }

        public boolean s(int i10) {
            return !this.f12021r.c(i10).h();
        }

        public boolean t(int i10) {
            if (i10 == f() - 1 && this.f12021r.f(i10)) {
                return true;
            }
            return false;
        }

        public boolean u(int i10) {
            return this.f12021r.c(i10).f49767s;
        }

        public b v(Object obj, Object obj2, int i10, long j10, long j11) {
            return w(obj, obj2, i10, j10, j11, sd.c.f49740r, false);
        }

        public b w(Object obj, Object obj2, int i10, long j10, long j11, sd.c cVar, boolean z10) {
            this.f12015d = obj;
            this.f12016e = obj2;
            this.f12017i = i10;
            this.f12018o = j10;
            this.f12019p = j11;
            this.f12021r = cVar;
            this.f12020q = z10;
            return this;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c extends Timeline {

        /* renamed from: q  reason: collision with root package name */
        private final oi.s f12022q;

        /* renamed from: r  reason: collision with root package name */
        private final oi.s f12023r;

        /* renamed from: s  reason: collision with root package name */
        private final int[] f12024s;

        /* renamed from: t  reason: collision with root package name */
        private final int[] f12025t;

        public c(oi.s sVar, oi.s sVar2, int[] iArr) {
            boolean z10;
            if (sVar.size() == iArr.length) {
                z10 = true;
            } else {
                z10 = false;
            }
            oe.a.a(z10);
            this.f12022q = sVar;
            this.f12023r = sVar2;
            this.f12024s = iArr;
            this.f12025t = new int[iArr.length];
            for (int i10 = 0; i10 < iArr.length; i10++) {
                this.f12025t[iArr[i10]] = i10;
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
            return this.f12024s[0];
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
                return this.f12024s[t() - 1];
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
                return this.f12024s[this.f12025t[i10] + 1];
            } else {
                return i10 + 1;
            }
        }

        @Override // com.google.android.exoplayer2.Timeline
        public b k(int i10, b bVar, boolean z10) {
            b bVar2 = (b) this.f12023r.get(i10);
            bVar.w(bVar2.f12015d, bVar2.f12016e, bVar2.f12017i, bVar2.f12018o, bVar2.f12019p, bVar2.f12021r, bVar2.f12020q);
            return bVar;
        }

        @Override // com.google.android.exoplayer2.Timeline
        public int m() {
            return this.f12023r.size();
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
                return this.f12024s[this.f12025t[i10] - 1];
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
            d dVar2 = (d) this.f12022q.get(i10);
            dVar.h(dVar2.f12026d, dVar2.f12028i, dVar2.f12029o, dVar2.f12030p, dVar2.f12031q, dVar2.f12032r, dVar2.f12033s, dVar2.f12034t, dVar2.f12036v, dVar2.f12038x, dVar2.f12039y, dVar2.f12040z, dVar2.A, dVar2.B);
            dVar.f12037w = dVar2.f12037w;
            return dVar;
        }

        @Override // com.google.android.exoplayer2.Timeline
        public int t() {
            return this.f12022q.size();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class d implements g {
        public static final Object C = new Object();
        private static final Object D = new Object();
        private static final MediaItem E = new MediaItem.c().b("com.google.android.exoplayer2.Timeline").e(Uri.EMPTY).a();
        private static final String F = oe.w0.B0(1);
        private static final String G = oe.w0.B0(2);
        private static final String H = oe.w0.B0(3);
        private static final String I = oe.w0.B0(4);
        private static final String J = oe.w0.B0(5);
        private static final String K = oe.w0.B0(6);
        private static final String L = oe.w0.B0(7);
        private static final String M = oe.w0.B0(8);
        private static final String N = oe.w0.B0(9);
        private static final String O = oe.w0.B0(10);
        private static final String P = oe.w0.B0(11);
        private static final String Q = oe.w0.B0(12);
        private static final String R = oe.w0.B0(13);
        public static final g.a S = new g.a() { // from class: mc.y0
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
        public Object f12027e;

        /* renamed from: o  reason: collision with root package name */
        public Object f12029o;

        /* renamed from: p  reason: collision with root package name */
        public long f12030p;

        /* renamed from: q  reason: collision with root package name */
        public long f12031q;

        /* renamed from: r  reason: collision with root package name */
        public long f12032r;

        /* renamed from: s  reason: collision with root package name */
        public boolean f12033s;

        /* renamed from: t  reason: collision with root package name */
        public boolean f12034t;

        /* renamed from: u  reason: collision with root package name */
        public boolean f12035u;

        /* renamed from: v  reason: collision with root package name */
        public MediaItem.g f12036v;

        /* renamed from: w  reason: collision with root package name */
        public boolean f12037w;

        /* renamed from: x  reason: collision with root package name */
        public long f12038x;

        /* renamed from: y  reason: collision with root package name */
        public long f12039y;

        /* renamed from: z  reason: collision with root package name */
        public int f12040z;

        /* renamed from: d  reason: collision with root package name */
        public Object f12026d = C;

        /* renamed from: i  reason: collision with root package name */
        public MediaItem f12028i = E;

        /* JADX INFO: Access modifiers changed from: private */
        public static d b(Bundle bundle) {
            MediaItem mediaItem;
            MediaItem.g gVar;
            Bundle bundle2 = bundle.getBundle(F);
            if (bundle2 != null) {
                mediaItem = (MediaItem) MediaItem.A.a(bundle2);
            } else {
                mediaItem = MediaItem.f11757t;
            }
            MediaItem mediaItem2 = mediaItem;
            long j10 = bundle.getLong(G, -9223372036854775807L);
            long j11 = bundle.getLong(H, -9223372036854775807L);
            long j12 = bundle.getLong(I, -9223372036854775807L);
            boolean z10 = bundle.getBoolean(J, false);
            boolean z11 = bundle.getBoolean(K, false);
            Bundle bundle3 = bundle.getBundle(L);
            if (bundle3 != null) {
                gVar = (MediaItem.g) MediaItem.g.f11838w.a(bundle3);
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
            dVar.f12037w = z12;
            return dVar;
        }

        public long c() {
            return oe.w0.f0(this.f12032r);
        }

        public long d() {
            return oe.w0.p1(this.f12038x);
        }

        public long e() {
            return this.f12038x;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj != null && d.class.equals(obj.getClass())) {
                d dVar = (d) obj;
                if (oe.w0.c(this.f12026d, dVar.f12026d) && oe.w0.c(this.f12028i, dVar.f12028i) && oe.w0.c(this.f12029o, dVar.f12029o) && oe.w0.c(this.f12036v, dVar.f12036v) && this.f12030p == dVar.f12030p && this.f12031q == dVar.f12031q && this.f12032r == dVar.f12032r && this.f12033s == dVar.f12033s && this.f12034t == dVar.f12034t && this.f12037w == dVar.f12037w && this.f12038x == dVar.f12038x && this.f12039y == dVar.f12039y && this.f12040z == dVar.f12040z && this.A == dVar.A && this.B == dVar.B) {
                    return true;
                }
            }
            return false;
        }

        public long f() {
            return oe.w0.p1(this.f12039y);
        }

        public boolean g() {
            boolean z10;
            boolean z11;
            boolean z12 = this.f12035u;
            if (this.f12036v != null) {
                z10 = true;
            } else {
                z10 = false;
            }
            if (z12 == z10) {
                z11 = true;
            } else {
                z11 = false;
            }
            oe.a.g(z11);
            if (this.f12036v == null) {
                return false;
            }
            return true;
        }

        public d h(Object obj, MediaItem mediaItem, Object obj2, long j10, long j11, long j12, boolean z10, boolean z11, MediaItem.g gVar, long j13, long j14, int i10, int i11, long j15) {
            MediaItem mediaItem2;
            Object obj3;
            boolean z12;
            MediaItem.h hVar;
            this.f12026d = obj;
            if (mediaItem != null) {
                mediaItem2 = mediaItem;
            } else {
                mediaItem2 = E;
            }
            this.f12028i = mediaItem2;
            if (mediaItem != null && (hVar = mediaItem.f11765e) != null) {
                obj3 = hVar.f11863t;
            } else {
                obj3 = null;
            }
            this.f12027e = obj3;
            this.f12029o = obj2;
            this.f12030p = j10;
            this.f12031q = j11;
            this.f12032r = j12;
            this.f12033s = z10;
            this.f12034t = z11;
            if (gVar != null) {
                z12 = true;
            } else {
                z12 = false;
            }
            this.f12035u = z12;
            this.f12036v = gVar;
            this.f12038x = j13;
            this.f12039y = j14;
            this.f12040z = i10;
            this.A = i11;
            this.B = j15;
            this.f12037w = false;
            return this;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2 = (((217 + this.f12026d.hashCode()) * 31) + this.f12028i.hashCode()) * 31;
            Object obj = this.f12029o;
            int i10 = 0;
            if (obj == null) {
                hashCode = 0;
            } else {
                hashCode = obj.hashCode();
            }
            int i11 = (hashCode2 + hashCode) * 31;
            MediaItem.g gVar = this.f12036v;
            if (gVar != null) {
                i10 = gVar.hashCode();
            }
            long j10 = this.f12030p;
            long j11 = this.f12031q;
            long j12 = this.f12032r;
            long j13 = this.f12038x;
            long j14 = this.f12039y;
            long j15 = this.B;
            return ((((((((((((((((((((((i11 + i10) * 31) + ((int) (j10 ^ (j10 >>> 32)))) * 31) + ((int) (j11 ^ (j11 >>> 32)))) * 31) + ((int) (j12 ^ (j12 >>> 32)))) * 31) + (this.f12033s ? 1 : 0)) * 31) + (this.f12034t ? 1 : 0)) * 31) + (this.f12037w ? 1 : 0)) * 31) + ((int) (j13 ^ (j13 >>> 32)))) * 31) + ((int) (j14 ^ (j14 >>> 32)))) * 31) + this.f12040z) * 31) + this.A) * 31) + ((int) (j15 ^ (j15 >>> 32)));
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static Timeline b(Bundle bundle) {
        oi.s c10 = c(d.S, oe.c.a(bundle, f12005e));
        oi.s c11 = c(b.f12014x, oe.c.a(bundle, f12006i));
        int[] intArray = bundle.getIntArray(f12007o);
        if (intArray == null) {
            intArray = d(c10.size());
        }
        return new c(c10, c11, intArray);
    }

    private static oi.s c(g.a aVar, IBinder iBinder) {
        if (iBinder == null) {
            return oi.s.t();
        }
        s.a aVar2 = new s.a();
        oi.s a10 = mc.c.a(iBinder);
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
        int i12 = j(i10, bVar).f12017i;
        if (r(i12, dVar).A == i10) {
            int i13 = i(i12, i11, z10);
            if (i13 == -1) {
                return -1;
            }
            return r(i13, dVar).f12040z;
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
        return (Pair) oe.a.e(o(dVar, bVar, i10, j10, 0L));
    }

    public final Pair o(d dVar, b bVar, int i10, long j10, long j11) {
        oe.a.c(i10, 0, t());
        s(i10, dVar, j11);
        if (j10 == -9223372036854775807L) {
            j10 = dVar.e();
            if (j10 == -9223372036854775807L) {
                return null;
            }
        }
        int i11 = dVar.f12040z;
        j(i11, bVar);
        while (i11 < dVar.A && bVar.f12019p != j10) {
            int i12 = i11 + 1;
            if (j(i12, bVar).f12019p > j10) {
                break;
            }
            i11 = i12;
        }
        k(i11, bVar, true);
        long j12 = j10 - bVar.f12019p;
        long j13 = bVar.f12018o;
        if (j13 != -9223372036854775807L) {
            j12 = Math.min(j12, j13 - 1);
        }
        return Pair.create(oe.a.e(bVar.f12016e), Long.valueOf(Math.max(0L, j12)));
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
