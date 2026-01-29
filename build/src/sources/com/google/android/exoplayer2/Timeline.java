package com.google.android.exoplayer2;

import android.net.Uri;
import android.os.Bundle;
import android.os.IBinder;
import android.util.Pair;
import com.google.android.exoplayer2.MediaItem;
import com.google.android.exoplayer2.Timeline;
import com.google.android.exoplayer2.g;
import ji.s;
import rd.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class Timeline implements g {

    /* renamed from: d  reason: collision with root package name */
    public static final Timeline f12983d = new a();

    /* renamed from: e  reason: collision with root package name */
    private static final String f12984e = ne.w0.B0(0);

    /* renamed from: i  reason: collision with root package name */
    private static final String f12985i = ne.w0.B0(1);

    /* renamed from: o  reason: collision with root package name */
    private static final String f12986o = ne.w0.B0(2);

    /* renamed from: p  reason: collision with root package name */
    public static final g.a f12987p = new g.a() { // from class: lc.w0
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
        private static final String f12988s = ne.w0.B0(0);

        /* renamed from: t  reason: collision with root package name */
        private static final String f12989t = ne.w0.B0(1);

        /* renamed from: u  reason: collision with root package name */
        private static final String f12990u = ne.w0.B0(2);

        /* renamed from: v  reason: collision with root package name */
        private static final String f12991v = ne.w0.B0(3);

        /* renamed from: w  reason: collision with root package name */
        private static final String f12992w = ne.w0.B0(4);

        /* renamed from: x  reason: collision with root package name */
        public static final g.a f12993x = new g.a() { // from class: lc.x0
            @Override // com.google.android.exoplayer2.g.a
            public final com.google.android.exoplayer2.g a(Bundle bundle) {
                Timeline.b c10;
                c10 = Timeline.b.c(bundle);
                return c10;
            }
        };

        /* renamed from: d  reason: collision with root package name */
        public Object f12994d;

        /* renamed from: e  reason: collision with root package name */
        public Object f12995e;

        /* renamed from: i  reason: collision with root package name */
        public int f12996i;

        /* renamed from: o  reason: collision with root package name */
        public long f12997o;

        /* renamed from: p  reason: collision with root package name */
        public long f12998p;

        /* renamed from: q  reason: collision with root package name */
        public boolean f12999q;

        /* renamed from: r  reason: collision with root package name */
        private rd.c f13000r = rd.c.f48249r;

        /* JADX INFO: Access modifiers changed from: private */
        public static b c(Bundle bundle) {
            rd.c cVar;
            int i10 = bundle.getInt(f12988s, 0);
            long j10 = bundle.getLong(f12989t, -9223372036854775807L);
            long j11 = bundle.getLong(f12990u, 0L);
            boolean z10 = bundle.getBoolean(f12991v, false);
            Bundle bundle2 = bundle.getBundle(f12992w);
            if (bundle2 != null) {
                cVar = (rd.c) rd.c.f48255x.a(bundle2);
            } else {
                cVar = rd.c.f48249r;
            }
            rd.c cVar2 = cVar;
            b bVar = new b();
            bVar.w(null, null, i10, j10, j11, cVar2, z10);
            return bVar;
        }

        public int d(int i10) {
            return this.f13000r.c(i10).f48270e;
        }

        public long e(int i10, int i11) {
            c.a c10 = this.f13000r.c(i10);
            if (c10.f48270e != -1) {
                return c10.f48274q[i11];
            }
            return -9223372036854775807L;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj != null && b.class.equals(obj.getClass())) {
                b bVar = (b) obj;
                if (ne.w0.c(this.f12994d, bVar.f12994d) && ne.w0.c(this.f12995e, bVar.f12995e) && this.f12996i == bVar.f12996i && this.f12997o == bVar.f12997o && this.f12998p == bVar.f12998p && this.f12999q == bVar.f12999q && ne.w0.c(this.f13000r, bVar.f13000r)) {
                    return true;
                }
            }
            return false;
        }

        public int f() {
            return this.f13000r.f48257e;
        }

        public int g(long j10) {
            return this.f13000r.d(j10, this.f12997o);
        }

        public int h(long j10) {
            return this.f13000r.e(j10, this.f12997o);
        }

        public int hashCode() {
            int hashCode;
            Object obj = this.f12994d;
            int i10 = 0;
            if (obj == null) {
                hashCode = 0;
            } else {
                hashCode = obj.hashCode();
            }
            int i11 = (217 + hashCode) * 31;
            Object obj2 = this.f12995e;
            if (obj2 != null) {
                i10 = obj2.hashCode();
            }
            long j10 = this.f12997o;
            long j11 = this.f12998p;
            return ((((((((((i11 + i10) * 31) + this.f12996i) * 31) + ((int) (j10 ^ (j10 >>> 32)))) * 31) + ((int) (j11 ^ (j11 >>> 32)))) * 31) + (this.f12999q ? 1 : 0)) * 31) + this.f13000r.hashCode();
        }

        public long i(int i10) {
            return this.f13000r.c(i10).f48269d;
        }

        public long j() {
            return this.f13000r.f48258i;
        }

        public int k(int i10, int i11) {
            c.a c10 = this.f13000r.c(i10);
            if (c10.f48270e != -1) {
                return c10.f48273p[i11];
            }
            return 0;
        }

        public long l(int i10) {
            return this.f13000r.c(i10).f48275r;
        }

        public long m() {
            return this.f12997o;
        }

        public int n(int i10) {
            return this.f13000r.c(i10).f();
        }

        public int o(int i10, int i11) {
            return this.f13000r.c(i10).g(i11);
        }

        public long p() {
            return ne.w0.p1(this.f12998p);
        }

        public long q() {
            return this.f12998p;
        }

        public int r() {
            return this.f13000r.f48260p;
        }

        public boolean s(int i10) {
            return !this.f13000r.c(i10).h();
        }

        public boolean t(int i10) {
            if (i10 == f() - 1 && this.f13000r.f(i10)) {
                return true;
            }
            return false;
        }

        public boolean u(int i10) {
            return this.f13000r.c(i10).f48276s;
        }

        public b v(Object obj, Object obj2, int i10, long j10, long j11) {
            return w(obj, obj2, i10, j10, j11, rd.c.f48249r, false);
        }

        public b w(Object obj, Object obj2, int i10, long j10, long j11, rd.c cVar, boolean z10) {
            this.f12994d = obj;
            this.f12995e = obj2;
            this.f12996i = i10;
            this.f12997o = j10;
            this.f12998p = j11;
            this.f13000r = cVar;
            this.f12999q = z10;
            return this;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c extends Timeline {

        /* renamed from: q  reason: collision with root package name */
        private final ji.s f13001q;

        /* renamed from: r  reason: collision with root package name */
        private final ji.s f13002r;

        /* renamed from: s  reason: collision with root package name */
        private final int[] f13003s;

        /* renamed from: t  reason: collision with root package name */
        private final int[] f13004t;

        public c(ji.s sVar, ji.s sVar2, int[] iArr) {
            boolean z10;
            if (sVar.size() == iArr.length) {
                z10 = true;
            } else {
                z10 = false;
            }
            ne.a.a(z10);
            this.f13001q = sVar;
            this.f13002r = sVar2;
            this.f13003s = iArr;
            this.f13004t = new int[iArr.length];
            for (int i10 = 0; i10 < iArr.length; i10++) {
                this.f13004t[iArr[i10]] = i10;
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
            return this.f13003s[0];
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
                return this.f13003s[t() - 1];
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
                return this.f13003s[this.f13004t[i10] + 1];
            } else {
                return i10 + 1;
            }
        }

        @Override // com.google.android.exoplayer2.Timeline
        public b k(int i10, b bVar, boolean z10) {
            b bVar2 = (b) this.f13002r.get(i10);
            bVar.w(bVar2.f12994d, bVar2.f12995e, bVar2.f12996i, bVar2.f12997o, bVar2.f12998p, bVar2.f13000r, bVar2.f12999q);
            return bVar;
        }

        @Override // com.google.android.exoplayer2.Timeline
        public int m() {
            return this.f13002r.size();
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
                return this.f13003s[this.f13004t[i10] - 1];
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
            d dVar2 = (d) this.f13001q.get(i10);
            dVar.h(dVar2.f13005d, dVar2.f13007i, dVar2.f13008o, dVar2.f13009p, dVar2.f13010q, dVar2.f13011r, dVar2.f13012s, dVar2.f13013t, dVar2.f13015v, dVar2.f13017x, dVar2.f13018y, dVar2.f13019z, dVar2.A, dVar2.B);
            dVar.f13016w = dVar2.f13016w;
            return dVar;
        }

        @Override // com.google.android.exoplayer2.Timeline
        public int t() {
            return this.f13001q.size();
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
        public Object f13006e;

        /* renamed from: o  reason: collision with root package name */
        public Object f13008o;

        /* renamed from: p  reason: collision with root package name */
        public long f13009p;

        /* renamed from: q  reason: collision with root package name */
        public long f13010q;

        /* renamed from: r  reason: collision with root package name */
        public long f13011r;

        /* renamed from: s  reason: collision with root package name */
        public boolean f13012s;

        /* renamed from: t  reason: collision with root package name */
        public boolean f13013t;

        /* renamed from: u  reason: collision with root package name */
        public boolean f13014u;

        /* renamed from: v  reason: collision with root package name */
        public MediaItem.g f13015v;

        /* renamed from: w  reason: collision with root package name */
        public boolean f13016w;

        /* renamed from: x  reason: collision with root package name */
        public long f13017x;

        /* renamed from: y  reason: collision with root package name */
        public long f13018y;

        /* renamed from: z  reason: collision with root package name */
        public int f13019z;

        /* renamed from: d  reason: collision with root package name */
        public Object f13005d = C;

        /* renamed from: i  reason: collision with root package name */
        public MediaItem f13007i = E;

        /* JADX INFO: Access modifiers changed from: private */
        public static d b(Bundle bundle) {
            MediaItem mediaItem;
            MediaItem.g gVar;
            Bundle bundle2 = bundle.getBundle(F);
            if (bundle2 != null) {
                mediaItem = (MediaItem) MediaItem.A.a(bundle2);
            } else {
                mediaItem = MediaItem.f12736t;
            }
            MediaItem mediaItem2 = mediaItem;
            long j10 = bundle.getLong(G, -9223372036854775807L);
            long j11 = bundle.getLong(H, -9223372036854775807L);
            long j12 = bundle.getLong(I, -9223372036854775807L);
            boolean z10 = bundle.getBoolean(J, false);
            boolean z11 = bundle.getBoolean(K, false);
            Bundle bundle3 = bundle.getBundle(L);
            if (bundle3 != null) {
                gVar = (MediaItem.g) MediaItem.g.f12817w.a(bundle3);
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
            dVar.f13016w = z12;
            return dVar;
        }

        public long c() {
            return ne.w0.f0(this.f13011r);
        }

        public long d() {
            return ne.w0.p1(this.f13017x);
        }

        public long e() {
            return this.f13017x;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj != null && d.class.equals(obj.getClass())) {
                d dVar = (d) obj;
                if (ne.w0.c(this.f13005d, dVar.f13005d) && ne.w0.c(this.f13007i, dVar.f13007i) && ne.w0.c(this.f13008o, dVar.f13008o) && ne.w0.c(this.f13015v, dVar.f13015v) && this.f13009p == dVar.f13009p && this.f13010q == dVar.f13010q && this.f13011r == dVar.f13011r && this.f13012s == dVar.f13012s && this.f13013t == dVar.f13013t && this.f13016w == dVar.f13016w && this.f13017x == dVar.f13017x && this.f13018y == dVar.f13018y && this.f13019z == dVar.f13019z && this.A == dVar.A && this.B == dVar.B) {
                    return true;
                }
            }
            return false;
        }

        public long f() {
            return ne.w0.p1(this.f13018y);
        }

        public boolean g() {
            boolean z10;
            boolean z11;
            boolean z12 = this.f13014u;
            if (this.f13015v != null) {
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
            if (this.f13015v == null) {
                return false;
            }
            return true;
        }

        public d h(Object obj, MediaItem mediaItem, Object obj2, long j10, long j11, long j12, boolean z10, boolean z11, MediaItem.g gVar, long j13, long j14, int i10, int i11, long j15) {
            MediaItem mediaItem2;
            Object obj3;
            boolean z12;
            MediaItem.h hVar;
            this.f13005d = obj;
            if (mediaItem != null) {
                mediaItem2 = mediaItem;
            } else {
                mediaItem2 = E;
            }
            this.f13007i = mediaItem2;
            if (mediaItem != null && (hVar = mediaItem.f12744e) != null) {
                obj3 = hVar.f12842t;
            } else {
                obj3 = null;
            }
            this.f13006e = obj3;
            this.f13008o = obj2;
            this.f13009p = j10;
            this.f13010q = j11;
            this.f13011r = j12;
            this.f13012s = z10;
            this.f13013t = z11;
            if (gVar != null) {
                z12 = true;
            } else {
                z12 = false;
            }
            this.f13014u = z12;
            this.f13015v = gVar;
            this.f13017x = j13;
            this.f13018y = j14;
            this.f13019z = i10;
            this.A = i11;
            this.B = j15;
            this.f13016w = false;
            return this;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2 = (((217 + this.f13005d.hashCode()) * 31) + this.f13007i.hashCode()) * 31;
            Object obj = this.f13008o;
            int i10 = 0;
            if (obj == null) {
                hashCode = 0;
            } else {
                hashCode = obj.hashCode();
            }
            int i11 = (hashCode2 + hashCode) * 31;
            MediaItem.g gVar = this.f13015v;
            if (gVar != null) {
                i10 = gVar.hashCode();
            }
            long j10 = this.f13009p;
            long j11 = this.f13010q;
            long j12 = this.f13011r;
            long j13 = this.f13017x;
            long j14 = this.f13018y;
            long j15 = this.B;
            return ((((((((((((((((((((((i11 + i10) * 31) + ((int) (j10 ^ (j10 >>> 32)))) * 31) + ((int) (j11 ^ (j11 >>> 32)))) * 31) + ((int) (j12 ^ (j12 >>> 32)))) * 31) + (this.f13012s ? 1 : 0)) * 31) + (this.f13013t ? 1 : 0)) * 31) + (this.f13016w ? 1 : 0)) * 31) + ((int) (j13 ^ (j13 >>> 32)))) * 31) + ((int) (j14 ^ (j14 >>> 32)))) * 31) + this.f13019z) * 31) + this.A) * 31) + ((int) (j15 ^ (j15 >>> 32)));
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static Timeline b(Bundle bundle) {
        ji.s c10 = c(d.S, ne.c.a(bundle, f12984e));
        ji.s c11 = c(b.f12993x, ne.c.a(bundle, f12985i));
        int[] intArray = bundle.getIntArray(f12986o);
        if (intArray == null) {
            intArray = d(c10.size());
        }
        return new c(c10, c11, intArray);
    }

    private static ji.s c(g.a aVar, IBinder iBinder) {
        if (iBinder == null) {
            return ji.s.r();
        }
        s.a aVar2 = new s.a();
        ji.s a10 = lc.c.a(iBinder);
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
        int i12 = j(i10, bVar).f12996i;
        if (r(i12, dVar).A == i10) {
            int i13 = i(i12, i11, z10);
            if (i13 == -1) {
                return -1;
            }
            return r(i13, dVar).f13019z;
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
        int i11 = dVar.f13019z;
        j(i11, bVar);
        while (i11 < dVar.A && bVar.f12998p != j10) {
            int i12 = i11 + 1;
            if (j(i12, bVar).f12998p > j10) {
                break;
            }
            i11 = i12;
        }
        k(i11, bVar, true);
        long j12 = j10 - bVar.f12998p;
        long j13 = bVar.f12997o;
        if (j13 != -9223372036854775807L) {
            j12 = Math.min(j12, j13 - 1);
        }
        return Pair.create(ne.a.e(bVar.f12995e), Long.valueOf(Math.max(0L, j12)));
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
