package com.google.android.exoplayer2;

import android.net.Uri;
import android.os.Bundle;
import com.google.android.exoplayer2.MediaItem;
import com.google.android.exoplayer2.g;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import mi.s;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class MediaItem implements com.google.android.exoplayer2.g {

    /* renamed from: d  reason: collision with root package name */
    public final String f11725d;

    /* renamed from: e  reason: collision with root package name */
    public final h f11726e;

    /* renamed from: i  reason: collision with root package name */
    public final h f11727i;

    /* renamed from: o  reason: collision with root package name */
    public final g f11728o;

    /* renamed from: p  reason: collision with root package name */
    public final MediaMetadata f11729p;

    /* renamed from: q  reason: collision with root package name */
    public final d f11730q;

    /* renamed from: r  reason: collision with root package name */
    public final e f11731r;

    /* renamed from: s  reason: collision with root package name */
    public final i f11732s;

    /* renamed from: t  reason: collision with root package name */
    public static final MediaItem f11718t = new c().a();

    /* renamed from: u  reason: collision with root package name */
    private static final String f11719u = ne.w0.B0(0);

    /* renamed from: v  reason: collision with root package name */
    private static final String f11720v = ne.w0.B0(1);

    /* renamed from: w  reason: collision with root package name */
    private static final String f11721w = ne.w0.B0(2);

    /* renamed from: x  reason: collision with root package name */
    private static final String f11722x = ne.w0.B0(3);

    /* renamed from: y  reason: collision with root package name */
    private static final String f11723y = ne.w0.B0(4);

    /* renamed from: z  reason: collision with root package name */
    private static final String f11724z = ne.w0.B0(5);
    public static final g.a A = new g.a() { // from class: lc.b0
        @Override // com.google.android.exoplayer2.g.a
        public final com.google.android.exoplayer2.g a(Bundle bundle) {
            MediaItem b10;
            b10 = MediaItem.b(bundle);
            return b10;
        }
    };

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b implements com.google.android.exoplayer2.g {

        /* renamed from: i  reason: collision with root package name */
        private static final String f11733i = ne.w0.B0(0);

        /* renamed from: o  reason: collision with root package name */
        public static final g.a f11734o = new g.a() { // from class: lc.c0
            @Override // com.google.android.exoplayer2.g.a
            public final com.google.android.exoplayer2.g a(Bundle bundle) {
                MediaItem.b b10;
                b10 = MediaItem.b.b(bundle);
                return b10;
            }
        };

        /* renamed from: d  reason: collision with root package name */
        public final Uri f11735d;

        /* renamed from: e  reason: collision with root package name */
        public final Object f11736e;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class a {

            /* renamed from: a  reason: collision with root package name */
            private Uri f11737a;

            /* renamed from: b  reason: collision with root package name */
            private Object f11738b;

            public a(Uri uri) {
                this.f11737a = uri;
            }

            public b c() {
                return new b(this);
            }
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static b b(Bundle bundle) {
            Uri uri = (Uri) bundle.getParcelable(f11733i);
            ne.a.e(uri);
            return new a(uri).c();
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof b)) {
                return false;
            }
            b bVar = (b) obj;
            if (this.f11735d.equals(bVar.f11735d) && ne.w0.c(this.f11736e, bVar.f11736e)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int i10;
            int hashCode = this.f11735d.hashCode() * 31;
            Object obj = this.f11736e;
            if (obj != null) {
                i10 = obj.hashCode();
            } else {
                i10 = 0;
            }
            return hashCode + i10;
        }

        private b(a aVar) {
            this.f11735d = aVar.f11737a;
            this.f11736e = aVar.f11738b;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c {

        /* renamed from: a  reason: collision with root package name */
        private String f11739a;

        /* renamed from: b  reason: collision with root package name */
        private Uri f11740b;

        /* renamed from: c  reason: collision with root package name */
        private String f11741c;

        /* renamed from: g  reason: collision with root package name */
        private String f11745g;

        /* renamed from: i  reason: collision with root package name */
        private b f11747i;

        /* renamed from: j  reason: collision with root package name */
        private Object f11748j;

        /* renamed from: k  reason: collision with root package name */
        private MediaMetadata f11749k;

        /* renamed from: d  reason: collision with root package name */
        private d.a f11742d = new d.a();

        /* renamed from: e  reason: collision with root package name */
        private f.a f11743e = new f.a();

        /* renamed from: f  reason: collision with root package name */
        private List f11744f = Collections.EMPTY_LIST;

        /* renamed from: h  reason: collision with root package name */
        private mi.s f11746h = mi.s.s();

        /* renamed from: l  reason: collision with root package name */
        private g.a f11750l = new g.a();

        /* renamed from: m  reason: collision with root package name */
        private i f11751m = i.f11825o;

        public MediaItem a() {
            boolean z10;
            h hVar;
            if (this.f11743e.f11786b != null && this.f11743e.f11785a == null) {
                z10 = false;
            } else {
                z10 = true;
            }
            ne.a.g(z10);
            Uri uri = this.f11740b;
            f fVar = null;
            if (uri != null) {
                String str = this.f11741c;
                if (this.f11743e.f11785a != null) {
                    fVar = this.f11743e.i();
                }
                hVar = new h(uri, str, fVar, this.f11747i, this.f11744f, this.f11745g, this.f11746h, this.f11748j);
            } else {
                hVar = null;
            }
            String str2 = this.f11739a;
            if (str2 == null) {
                str2 = "";
            }
            String str3 = str2;
            e g10 = this.f11742d.g();
            g f10 = this.f11750l.f();
            MediaMetadata mediaMetadata = this.f11749k;
            if (mediaMetadata == null) {
                mediaMetadata = MediaMetadata.T;
            }
            return new MediaItem(str3, g10, hVar, f10, mediaMetadata, this.f11751m);
        }

        public c b(String str) {
            this.f11739a = (String) ne.a.e(str);
            return this;
        }

        public c c(List list) {
            this.f11746h = mi.s.n(list);
            return this;
        }

        public c d(Object obj) {
            this.f11748j = obj;
            return this;
        }

        public c e(Uri uri) {
            this.f11740b = uri;
            return this;
        }

        public c f(String str) {
            Uri parse;
            if (str == null) {
                parse = null;
            } else {
                parse = Uri.parse(str);
            }
            return e(parse);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class d implements com.google.android.exoplayer2.g {

        /* renamed from: q  reason: collision with root package name */
        public static final d f11752q = new a().f();

        /* renamed from: r  reason: collision with root package name */
        private static final String f11753r = ne.w0.B0(0);

        /* renamed from: s  reason: collision with root package name */
        private static final String f11754s = ne.w0.B0(1);

        /* renamed from: t  reason: collision with root package name */
        private static final String f11755t = ne.w0.B0(2);

        /* renamed from: u  reason: collision with root package name */
        private static final String f11756u = ne.w0.B0(3);

        /* renamed from: v  reason: collision with root package name */
        private static final String f11757v = ne.w0.B0(4);

        /* renamed from: w  reason: collision with root package name */
        public static final g.a f11758w = new g.a() { // from class: lc.d0
            @Override // com.google.android.exoplayer2.g.a
            public final com.google.android.exoplayer2.g a(Bundle bundle) {
                return MediaItem.d.a(bundle);
            }
        };

        /* renamed from: d  reason: collision with root package name */
        public final long f11759d;

        /* renamed from: e  reason: collision with root package name */
        public final long f11760e;

        /* renamed from: i  reason: collision with root package name */
        public final boolean f11761i;

        /* renamed from: o  reason: collision with root package name */
        public final boolean f11762o;

        /* renamed from: p  reason: collision with root package name */
        public final boolean f11763p;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class a {

            /* renamed from: a  reason: collision with root package name */
            private long f11764a;

            /* renamed from: b  reason: collision with root package name */
            private long f11765b = Long.MIN_VALUE;

            /* renamed from: c  reason: collision with root package name */
            private boolean f11766c;

            /* renamed from: d  reason: collision with root package name */
            private boolean f11767d;

            /* renamed from: e  reason: collision with root package name */
            private boolean f11768e;

            public d f() {
                return g();
            }

            public e g() {
                return new e(this);
            }

            public a h(long j10) {
                boolean z10;
                if (j10 != Long.MIN_VALUE && j10 < 0) {
                    z10 = false;
                } else {
                    z10 = true;
                }
                ne.a.a(z10);
                this.f11765b = j10;
                return this;
            }

            public a i(boolean z10) {
                this.f11767d = z10;
                return this;
            }

            public a j(boolean z10) {
                this.f11766c = z10;
                return this;
            }

            public a k(long j10) {
                boolean z10;
                if (j10 >= 0) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                ne.a.a(z10);
                this.f11764a = j10;
                return this;
            }

            public a l(boolean z10) {
                this.f11768e = z10;
                return this;
            }
        }

        public static /* synthetic */ e a(Bundle bundle) {
            a aVar = new a();
            String str = f11753r;
            d dVar = f11752q;
            return aVar.k(bundle.getLong(str, dVar.f11759d)).h(bundle.getLong(f11754s, dVar.f11760e)).j(bundle.getBoolean(f11755t, dVar.f11761i)).i(bundle.getBoolean(f11756u, dVar.f11762o)).l(bundle.getBoolean(f11757v, dVar.f11763p)).g();
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof d)) {
                return false;
            }
            d dVar = (d) obj;
            if (this.f11759d == dVar.f11759d && this.f11760e == dVar.f11760e && this.f11761i == dVar.f11761i && this.f11762o == dVar.f11762o && this.f11763p == dVar.f11763p) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            long j10 = this.f11759d;
            long j11 = this.f11760e;
            return (((((((((int) (j10 ^ (j10 >>> 32))) * 31) + ((int) ((j11 >>> 32) ^ j11))) * 31) + (this.f11761i ? 1 : 0)) * 31) + (this.f11762o ? 1 : 0)) * 31) + (this.f11763p ? 1 : 0);
        }

        private d(a aVar) {
            this.f11759d = aVar.f11764a;
            this.f11760e = aVar.f11765b;
            this.f11761i = aVar.f11766c;
            this.f11762o = aVar.f11767d;
            this.f11763p = aVar.f11768e;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class e extends d {

        /* renamed from: x  reason: collision with root package name */
        public static final e f11769x = new d.a().g();

        private e(d.a aVar) {
            super(aVar);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class f implements com.google.android.exoplayer2.g {

        /* renamed from: d  reason: collision with root package name */
        public final UUID f11774d;

        /* renamed from: e  reason: collision with root package name */
        public final UUID f11775e;

        /* renamed from: i  reason: collision with root package name */
        public final Uri f11776i;

        /* renamed from: o  reason: collision with root package name */
        public final mi.t f11777o;

        /* renamed from: p  reason: collision with root package name */
        public final mi.t f11778p;

        /* renamed from: q  reason: collision with root package name */
        public final boolean f11779q;

        /* renamed from: r  reason: collision with root package name */
        public final boolean f11780r;

        /* renamed from: s  reason: collision with root package name */
        public final boolean f11781s;

        /* renamed from: t  reason: collision with root package name */
        public final mi.s f11782t;

        /* renamed from: u  reason: collision with root package name */
        public final mi.s f11783u;

        /* renamed from: v  reason: collision with root package name */
        private final byte[] f11784v;

        /* renamed from: w  reason: collision with root package name */
        private static final String f11770w = ne.w0.B0(0);

        /* renamed from: x  reason: collision with root package name */
        private static final String f11771x = ne.w0.B0(1);

        /* renamed from: y  reason: collision with root package name */
        private static final String f11772y = ne.w0.B0(2);

        /* renamed from: z  reason: collision with root package name */
        private static final String f11773z = ne.w0.B0(3);
        private static final String A = ne.w0.B0(4);
        private static final String B = ne.w0.B0(5);
        private static final String C = ne.w0.B0(6);
        private static final String D = ne.w0.B0(7);
        public static final g.a E = new g.a() { // from class: lc.e0
            @Override // com.google.android.exoplayer2.g.a
            public final com.google.android.exoplayer2.g a(Bundle bundle) {
                MediaItem.f b10;
                b10 = MediaItem.f.b(bundle);
                return b10;
            }
        };

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class a {

            /* renamed from: a  reason: collision with root package name */
            private UUID f11785a;

            /* renamed from: b  reason: collision with root package name */
            private Uri f11786b;

            /* renamed from: c  reason: collision with root package name */
            private mi.t f11787c;

            /* renamed from: d  reason: collision with root package name */
            private boolean f11788d;

            /* renamed from: e  reason: collision with root package name */
            private boolean f11789e;

            /* renamed from: f  reason: collision with root package name */
            private boolean f11790f;

            /* renamed from: g  reason: collision with root package name */
            private mi.s f11791g;

            /* renamed from: h  reason: collision with root package name */
            private byte[] f11792h;

            public f i() {
                return new f(this);
            }

            public a j(boolean z10) {
                this.f11790f = z10;
                return this;
            }

            public a k(List list) {
                this.f11791g = mi.s.n(list);
                return this;
            }

            public a l(byte[] bArr) {
                byte[] bArr2;
                if (bArr != null) {
                    bArr2 = Arrays.copyOf(bArr, bArr.length);
                } else {
                    bArr2 = null;
                }
                this.f11792h = bArr2;
                return this;
            }

            public a m(Map map) {
                this.f11787c = mi.t.c(map);
                return this;
            }

            public a n(Uri uri) {
                this.f11786b = uri;
                return this;
            }

            public a o(boolean z10) {
                this.f11788d = z10;
                return this;
            }

            public a p(boolean z10) {
                this.f11789e = z10;
                return this;
            }

            public a(UUID uuid) {
                this.f11785a = uuid;
                this.f11787c = mi.t.j();
                this.f11791g = mi.s.s();
            }

            private a() {
                this.f11787c = mi.t.j();
                this.f11791g = mi.s.s();
            }
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static f b(Bundle bundle) {
            UUID fromString = UUID.fromString((String) ne.a.e(bundle.getString(f11770w)));
            mi.t b10 = ne.d.b(ne.d.f(bundle, f11772y, Bundle.EMPTY));
            boolean z10 = bundle.getBoolean(f11773z, false);
            boolean z11 = bundle.getBoolean(A, false);
            boolean z12 = bundle.getBoolean(B, false);
            mi.s n10 = mi.s.n(ne.d.g(bundle, C, new ArrayList()));
            return new a(fromString).n((Uri) bundle.getParcelable(f11771x)).m(b10).o(z10).j(z12).p(z11).k(n10).l(bundle.getByteArray(D)).i();
        }

        public byte[] c() {
            byte[] bArr = this.f11784v;
            if (bArr != null) {
                return Arrays.copyOf(bArr, bArr.length);
            }
            return null;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof f)) {
                return false;
            }
            f fVar = (f) obj;
            if (this.f11774d.equals(fVar.f11774d) && ne.w0.c(this.f11776i, fVar.f11776i) && ne.w0.c(this.f11778p, fVar.f11778p) && this.f11779q == fVar.f11779q && this.f11781s == fVar.f11781s && this.f11780r == fVar.f11780r && this.f11783u.equals(fVar.f11783u) && Arrays.equals(this.f11784v, fVar.f11784v)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int i10;
            int hashCode = this.f11774d.hashCode() * 31;
            Uri uri = this.f11776i;
            if (uri != null) {
                i10 = uri.hashCode();
            } else {
                i10 = 0;
            }
            return ((((((((((((hashCode + i10) * 31) + this.f11778p.hashCode()) * 31) + (this.f11779q ? 1 : 0)) * 31) + (this.f11781s ? 1 : 0)) * 31) + (this.f11780r ? 1 : 0)) * 31) + this.f11783u.hashCode()) * 31) + Arrays.hashCode(this.f11784v);
        }

        private f(a aVar) {
            ne.a.g((aVar.f11790f && aVar.f11786b == null) ? false : true);
            UUID uuid = (UUID) ne.a.e(aVar.f11785a);
            this.f11774d = uuid;
            this.f11775e = uuid;
            this.f11776i = aVar.f11786b;
            this.f11777o = aVar.f11787c;
            this.f11778p = aVar.f11787c;
            this.f11779q = aVar.f11788d;
            this.f11781s = aVar.f11790f;
            this.f11780r = aVar.f11789e;
            this.f11782t = aVar.f11791g;
            this.f11783u = aVar.f11791g;
            this.f11784v = aVar.f11792h != null ? Arrays.copyOf(aVar.f11792h, aVar.f11792h.length) : null;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class g implements com.google.android.exoplayer2.g {

        /* renamed from: q  reason: collision with root package name */
        public static final g f11793q = new a().f();

        /* renamed from: r  reason: collision with root package name */
        private static final String f11794r = ne.w0.B0(0);

        /* renamed from: s  reason: collision with root package name */
        private static final String f11795s = ne.w0.B0(1);

        /* renamed from: t  reason: collision with root package name */
        private static final String f11796t = ne.w0.B0(2);

        /* renamed from: u  reason: collision with root package name */
        private static final String f11797u = ne.w0.B0(3);

        /* renamed from: v  reason: collision with root package name */
        private static final String f11798v = ne.w0.B0(4);

        /* renamed from: w  reason: collision with root package name */
        public static final g.a f11799w = new g.a() { // from class: lc.f0
            @Override // com.google.android.exoplayer2.g.a
            public final com.google.android.exoplayer2.g a(Bundle bundle) {
                return MediaItem.g.a(bundle);
            }
        };

        /* renamed from: d  reason: collision with root package name */
        public final long f11800d;

        /* renamed from: e  reason: collision with root package name */
        public final long f11801e;

        /* renamed from: i  reason: collision with root package name */
        public final long f11802i;

        /* renamed from: o  reason: collision with root package name */
        public final float f11803o;

        /* renamed from: p  reason: collision with root package name */
        public final float f11804p;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class a {

            /* renamed from: a  reason: collision with root package name */
            private long f11805a = -9223372036854775807L;

            /* renamed from: b  reason: collision with root package name */
            private long f11806b = -9223372036854775807L;

            /* renamed from: c  reason: collision with root package name */
            private long f11807c = -9223372036854775807L;

            /* renamed from: d  reason: collision with root package name */
            private float f11808d = -3.4028235E38f;

            /* renamed from: e  reason: collision with root package name */
            private float f11809e = -3.4028235E38f;

            public g f() {
                return new g(this);
            }

            public a g(long j10) {
                this.f11807c = j10;
                return this;
            }

            public a h(float f10) {
                this.f11809e = f10;
                return this;
            }

            public a i(long j10) {
                this.f11806b = j10;
                return this;
            }

            public a j(float f10) {
                this.f11808d = f10;
                return this;
            }

            public a k(long j10) {
                this.f11805a = j10;
                return this;
            }
        }

        public static /* synthetic */ g a(Bundle bundle) {
            String str = f11794r;
            g gVar = f11793q;
            return new g(bundle.getLong(str, gVar.f11800d), bundle.getLong(f11795s, gVar.f11801e), bundle.getLong(f11796t, gVar.f11802i), bundle.getFloat(f11797u, gVar.f11803o), bundle.getFloat(f11798v, gVar.f11804p));
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof g)) {
                return false;
            }
            g gVar = (g) obj;
            if (this.f11800d == gVar.f11800d && this.f11801e == gVar.f11801e && this.f11802i == gVar.f11802i && this.f11803o == gVar.f11803o && this.f11804p == gVar.f11804p) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int i10;
            long j10 = this.f11800d;
            long j11 = this.f11801e;
            long j12 = this.f11802i;
            int i11 = ((((((int) (j10 ^ (j10 >>> 32))) * 31) + ((int) (j11 ^ (j11 >>> 32)))) * 31) + ((int) ((j12 >>> 32) ^ j12))) * 31;
            float f10 = this.f11803o;
            int i12 = 0;
            if (f10 != 0.0f) {
                i10 = Float.floatToIntBits(f10);
            } else {
                i10 = 0;
            }
            int i13 = (i11 + i10) * 31;
            float f11 = this.f11804p;
            if (f11 != 0.0f) {
                i12 = Float.floatToIntBits(f11);
            }
            return i13 + i12;
        }

        private g(a aVar) {
            this(aVar.f11805a, aVar.f11806b, aVar.f11807c, aVar.f11808d, aVar.f11809e);
        }

        public g(long j10, long j11, long j12, float f10, float f11) {
            this.f11800d = j10;
            this.f11801e = j11;
            this.f11802i = j12;
            this.f11803o = f10;
            this.f11804p = f11;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class h implements com.google.android.exoplayer2.g {

        /* renamed from: d  reason: collision with root package name */
        public final Uri f11816d;

        /* renamed from: e  reason: collision with root package name */
        public final String f11817e;

        /* renamed from: i  reason: collision with root package name */
        public final f f11818i;

        /* renamed from: o  reason: collision with root package name */
        public final b f11819o;

        /* renamed from: p  reason: collision with root package name */
        public final List f11820p;

        /* renamed from: q  reason: collision with root package name */
        public final String f11821q;

        /* renamed from: r  reason: collision with root package name */
        public final mi.s f11822r;

        /* renamed from: s  reason: collision with root package name */
        public final List f11823s;

        /* renamed from: t  reason: collision with root package name */
        public final Object f11824t;

        /* renamed from: u  reason: collision with root package name */
        private static final String f11810u = ne.w0.B0(0);

        /* renamed from: v  reason: collision with root package name */
        private static final String f11811v = ne.w0.B0(1);

        /* renamed from: w  reason: collision with root package name */
        private static final String f11812w = ne.w0.B0(2);

        /* renamed from: x  reason: collision with root package name */
        private static final String f11813x = ne.w0.B0(3);

        /* renamed from: y  reason: collision with root package name */
        private static final String f11814y = ne.w0.B0(4);

        /* renamed from: z  reason: collision with root package name */
        private static final String f11815z = ne.w0.B0(5);
        private static final String A = ne.w0.B0(6);
        public static final g.a B = new g.a() { // from class: lc.g0
            @Override // com.google.android.exoplayer2.g.a
            public final com.google.android.exoplayer2.g a(Bundle bundle) {
                MediaItem.h b10;
                b10 = MediaItem.h.b(bundle);
                return b10;
            }
        };

        /* JADX INFO: Access modifiers changed from: private */
        public static h b(Bundle bundle) {
            f fVar;
            mi.s d10;
            mi.s d11;
            Bundle bundle2 = bundle.getBundle(f11812w);
            b bVar = null;
            if (bundle2 == null) {
                fVar = null;
            } else {
                fVar = (f) f.E.a(bundle2);
            }
            Bundle bundle3 = bundle.getBundle(f11813x);
            if (bundle3 != null) {
                bVar = (b) b.f11734o.a(bundle3);
            }
            b bVar2 = bVar;
            ArrayList parcelableArrayList = bundle.getParcelableArrayList(f11814y);
            if (parcelableArrayList == null) {
                d10 = mi.s.s();
            } else {
                d10 = ne.d.d(new g.a() { // from class: lc.h0
                    @Override // com.google.android.exoplayer2.g.a
                    public final com.google.android.exoplayer2.g a(Bundle bundle4) {
                        return pd.c.d(bundle4);
                    }
                }, parcelableArrayList);
            }
            mi.s sVar = d10;
            ArrayList parcelableArrayList2 = bundle.getParcelableArrayList(A);
            if (parcelableArrayList2 == null) {
                d11 = mi.s.s();
            } else {
                d11 = ne.d.d(k.f11843z, parcelableArrayList2);
            }
            return new h((Uri) ne.a.e((Uri) bundle.getParcelable(f11810u)), bundle.getString(f11811v), fVar, bVar2, sVar, bundle.getString(f11815z), d11, null);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof h)) {
                return false;
            }
            h hVar = (h) obj;
            if (this.f11816d.equals(hVar.f11816d) && ne.w0.c(this.f11817e, hVar.f11817e) && ne.w0.c(this.f11818i, hVar.f11818i) && ne.w0.c(this.f11819o, hVar.f11819o) && this.f11820p.equals(hVar.f11820p) && ne.w0.c(this.f11821q, hVar.f11821q) && this.f11822r.equals(hVar.f11822r) && ne.w0.c(this.f11824t, hVar.f11824t)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4;
            int hashCode5 = this.f11816d.hashCode() * 31;
            String str = this.f11817e;
            int i10 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int i11 = (hashCode5 + hashCode) * 31;
            f fVar = this.f11818i;
            if (fVar == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = fVar.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            b bVar = this.f11819o;
            if (bVar == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = bVar.hashCode();
            }
            int hashCode6 = (((i12 + hashCode3) * 31) + this.f11820p.hashCode()) * 31;
            String str2 = this.f11821q;
            if (str2 == null) {
                hashCode4 = 0;
            } else {
                hashCode4 = str2.hashCode();
            }
            int hashCode7 = (((hashCode6 + hashCode4) * 31) + this.f11822r.hashCode()) * 31;
            Object obj = this.f11824t;
            if (obj != null) {
                i10 = obj.hashCode();
            }
            return hashCode7 + i10;
        }

        private h(Uri uri, String str, f fVar, b bVar, List list, String str2, mi.s sVar, Object obj) {
            this.f11816d = uri;
            this.f11817e = str;
            this.f11818i = fVar;
            this.f11819o = bVar;
            this.f11820p = list;
            this.f11821q = str2;
            this.f11822r = sVar;
            s.a j10 = mi.s.j();
            for (int i10 = 0; i10 < sVar.size(); i10++) {
                j10.a(((k) sVar.get(i10)).b().j());
            }
            this.f11823s = j10.k();
            this.f11824t = obj;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class i implements com.google.android.exoplayer2.g {

        /* renamed from: o  reason: collision with root package name */
        public static final i f11825o = new a().d();

        /* renamed from: p  reason: collision with root package name */
        private static final String f11826p = ne.w0.B0(0);

        /* renamed from: q  reason: collision with root package name */
        private static final String f11827q = ne.w0.B0(1);

        /* renamed from: r  reason: collision with root package name */
        private static final String f11828r = ne.w0.B0(2);

        /* renamed from: s  reason: collision with root package name */
        public static final g.a f11829s = new g.a() { // from class: lc.i0
            @Override // com.google.android.exoplayer2.g.a
            public final com.google.android.exoplayer2.g a(Bundle bundle) {
                MediaItem.i d10;
                d10 = new MediaItem.i.a().f((Uri) bundle.getParcelable(MediaItem.i.f11826p)).g(bundle.getString(MediaItem.i.f11827q)).e(bundle.getBundle(MediaItem.i.f11828r)).d();
                return d10;
            }
        };

        /* renamed from: d  reason: collision with root package name */
        public final Uri f11830d;

        /* renamed from: e  reason: collision with root package name */
        public final String f11831e;

        /* renamed from: i  reason: collision with root package name */
        public final Bundle f11832i;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class a {

            /* renamed from: a  reason: collision with root package name */
            private Uri f11833a;

            /* renamed from: b  reason: collision with root package name */
            private String f11834b;

            /* renamed from: c  reason: collision with root package name */
            private Bundle f11835c;

            public i d() {
                return new i(this);
            }

            public a e(Bundle bundle) {
                this.f11835c = bundle;
                return this;
            }

            public a f(Uri uri) {
                this.f11833a = uri;
                return this;
            }

            public a g(String str) {
                this.f11834b = str;
                return this;
            }
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof i)) {
                return false;
            }
            i iVar = (i) obj;
            if (ne.w0.c(this.f11830d, iVar.f11830d) && ne.w0.c(this.f11831e, iVar.f11831e)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int hashCode;
            Uri uri = this.f11830d;
            int i10 = 0;
            if (uri == null) {
                hashCode = 0;
            } else {
                hashCode = uri.hashCode();
            }
            int i11 = hashCode * 31;
            String str = this.f11831e;
            if (str != null) {
                i10 = str.hashCode();
            }
            return i11 + i10;
        }

        private i(a aVar) {
            this.f11830d = aVar.f11833a;
            this.f11831e = aVar.f11834b;
            this.f11832i = aVar.f11835c;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class j extends k {
        private j(k.a aVar) {
            super(aVar);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class k implements com.google.android.exoplayer2.g {

        /* renamed from: s  reason: collision with root package name */
        private static final String f11836s = ne.w0.B0(0);

        /* renamed from: t  reason: collision with root package name */
        private static final String f11837t = ne.w0.B0(1);

        /* renamed from: u  reason: collision with root package name */
        private static final String f11838u = ne.w0.B0(2);

        /* renamed from: v  reason: collision with root package name */
        private static final String f11839v = ne.w0.B0(3);

        /* renamed from: w  reason: collision with root package name */
        private static final String f11840w = ne.w0.B0(4);

        /* renamed from: x  reason: collision with root package name */
        private static final String f11841x = ne.w0.B0(5);

        /* renamed from: y  reason: collision with root package name */
        private static final String f11842y = ne.w0.B0(6);

        /* renamed from: z  reason: collision with root package name */
        public static final g.a f11843z = new g.a() { // from class: lc.j0
            @Override // com.google.android.exoplayer2.g.a
            public final com.google.android.exoplayer2.g a(Bundle bundle) {
                MediaItem.k c10;
                c10 = MediaItem.k.c(bundle);
                return c10;
            }
        };

        /* renamed from: d  reason: collision with root package name */
        public final Uri f11844d;

        /* renamed from: e  reason: collision with root package name */
        public final String f11845e;

        /* renamed from: i  reason: collision with root package name */
        public final String f11846i;

        /* renamed from: o  reason: collision with root package name */
        public final int f11847o;

        /* renamed from: p  reason: collision with root package name */
        public final int f11848p;

        /* renamed from: q  reason: collision with root package name */
        public final String f11849q;

        /* renamed from: r  reason: collision with root package name */
        public final String f11850r;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class a {

            /* renamed from: a  reason: collision with root package name */
            private Uri f11851a;

            /* renamed from: b  reason: collision with root package name */
            private String f11852b;

            /* renamed from: c  reason: collision with root package name */
            private String f11853c;

            /* renamed from: d  reason: collision with root package name */
            private int f11854d;

            /* renamed from: e  reason: collision with root package name */
            private int f11855e;

            /* renamed from: f  reason: collision with root package name */
            private String f11856f;

            /* renamed from: g  reason: collision with root package name */
            private String f11857g;

            /* JADX INFO: Access modifiers changed from: private */
            public j j() {
                return new j(this);
            }

            public k i() {
                return new k(this);
            }

            public a k(String str) {
                this.f11857g = str;
                return this;
            }

            public a l(String str) {
                this.f11856f = str;
                return this;
            }

            public a m(String str) {
                this.f11853c = str;
                return this;
            }

            public a n(String str) {
                this.f11852b = str;
                return this;
            }

            public a o(int i10) {
                this.f11855e = i10;
                return this;
            }

            public a p(int i10) {
                this.f11854d = i10;
                return this;
            }

            public a(Uri uri) {
                this.f11851a = uri;
            }

            private a(k kVar) {
                this.f11851a = kVar.f11844d;
                this.f11852b = kVar.f11845e;
                this.f11853c = kVar.f11846i;
                this.f11854d = kVar.f11847o;
                this.f11855e = kVar.f11848p;
                this.f11856f = kVar.f11849q;
                this.f11857g = kVar.f11850r;
            }
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static k c(Bundle bundle) {
            String string = bundle.getString(f11837t);
            String string2 = bundle.getString(f11838u);
            int i10 = bundle.getInt(f11839v, 0);
            int i11 = bundle.getInt(f11840w, 0);
            String string3 = bundle.getString(f11841x);
            return new a((Uri) ne.a.e((Uri) bundle.getParcelable(f11836s))).n(string).m(string2).p(i10).o(i11).l(string3).k(bundle.getString(f11842y)).i();
        }

        public a b() {
            return new a();
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof k)) {
                return false;
            }
            k kVar = (k) obj;
            if (this.f11844d.equals(kVar.f11844d) && ne.w0.c(this.f11845e, kVar.f11845e) && ne.w0.c(this.f11846i, kVar.f11846i) && this.f11847o == kVar.f11847o && this.f11848p == kVar.f11848p && ne.w0.c(this.f11849q, kVar.f11849q) && ne.w0.c(this.f11850r, kVar.f11850r)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4 = this.f11844d.hashCode() * 31;
            String str = this.f11845e;
            int i10 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int i11 = (hashCode4 + hashCode) * 31;
            String str2 = this.f11846i;
            if (str2 == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str2.hashCode();
            }
            int i12 = (((((i11 + hashCode2) * 31) + this.f11847o) * 31) + this.f11848p) * 31;
            String str3 = this.f11849q;
            if (str3 == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = str3.hashCode();
            }
            int i13 = (i12 + hashCode3) * 31;
            String str4 = this.f11850r;
            if (str4 != null) {
                i10 = str4.hashCode();
            }
            return i13 + i10;
        }

        private k(a aVar) {
            this.f11844d = aVar.f11851a;
            this.f11845e = aVar.f11852b;
            this.f11846i = aVar.f11853c;
            this.f11847o = aVar.f11854d;
            this.f11848p = aVar.f11855e;
            this.f11849q = aVar.f11856f;
            this.f11850r = aVar.f11857g;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static MediaItem b(Bundle bundle) {
        g gVar;
        MediaMetadata mediaMetadata;
        e eVar;
        i iVar;
        h hVar;
        String str = (String) ne.a.e(bundle.getString(f11719u, ""));
        Bundle bundle2 = bundle.getBundle(f11720v);
        if (bundle2 == null) {
            gVar = g.f11793q;
        } else {
            gVar = (g) g.f11799w.a(bundle2);
        }
        g gVar2 = gVar;
        Bundle bundle3 = bundle.getBundle(f11721w);
        if (bundle3 == null) {
            mediaMetadata = MediaMetadata.T;
        } else {
            mediaMetadata = (MediaMetadata) MediaMetadata.B0.a(bundle3);
        }
        MediaMetadata mediaMetadata2 = mediaMetadata;
        Bundle bundle4 = bundle.getBundle(f11722x);
        if (bundle4 == null) {
            eVar = e.f11769x;
        } else {
            eVar = (e) d.f11758w.a(bundle4);
        }
        e eVar2 = eVar;
        Bundle bundle5 = bundle.getBundle(f11723y);
        if (bundle5 == null) {
            iVar = i.f11825o;
        } else {
            iVar = (i) i.f11829s.a(bundle5);
        }
        i iVar2 = iVar;
        Bundle bundle6 = bundle.getBundle(f11724z);
        if (bundle6 == null) {
            hVar = null;
        } else {
            hVar = (h) h.B.a(bundle6);
        }
        return new MediaItem(str, eVar2, hVar, gVar2, mediaMetadata2, iVar2);
    }

    public static MediaItem c(String str) {
        return new c().f(str).a();
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof MediaItem)) {
            return false;
        }
        MediaItem mediaItem = (MediaItem) obj;
        if (ne.w0.c(this.f11725d, mediaItem.f11725d) && this.f11730q.equals(mediaItem.f11730q) && ne.w0.c(this.f11726e, mediaItem.f11726e) && ne.w0.c(this.f11728o, mediaItem.f11728o) && ne.w0.c(this.f11729p, mediaItem.f11729p) && ne.w0.c(this.f11732s, mediaItem.f11732s)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int hashCode = this.f11725d.hashCode() * 31;
        h hVar = this.f11726e;
        if (hVar != null) {
            i10 = hVar.hashCode();
        } else {
            i10 = 0;
        }
        return ((((((((hashCode + i10) * 31) + this.f11728o.hashCode()) * 31) + this.f11730q.hashCode()) * 31) + this.f11729p.hashCode()) * 31) + this.f11732s.hashCode();
    }

    private MediaItem(String str, e eVar, h hVar, g gVar, MediaMetadata mediaMetadata, i iVar) {
        this.f11725d = str;
        this.f11726e = hVar;
        this.f11727i = hVar;
        this.f11728o = gVar;
        this.f11729p = mediaMetadata;
        this.f11730q = eVar;
        this.f11731r = eVar;
        this.f11732s = iVar;
    }
}
