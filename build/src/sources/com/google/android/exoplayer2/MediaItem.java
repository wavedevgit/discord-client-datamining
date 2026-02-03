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
import ji.s;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class MediaItem implements com.google.android.exoplayer2.g {

    /* renamed from: d  reason: collision with root package name */
    public final String f11340d;

    /* renamed from: e  reason: collision with root package name */
    public final h f11341e;

    /* renamed from: i  reason: collision with root package name */
    public final h f11342i;

    /* renamed from: o  reason: collision with root package name */
    public final g f11343o;

    /* renamed from: p  reason: collision with root package name */
    public final MediaMetadata f11344p;

    /* renamed from: q  reason: collision with root package name */
    public final d f11345q;

    /* renamed from: r  reason: collision with root package name */
    public final e f11346r;

    /* renamed from: s  reason: collision with root package name */
    public final i f11347s;

    /* renamed from: t  reason: collision with root package name */
    public static final MediaItem f11333t = new c().a();

    /* renamed from: u  reason: collision with root package name */
    private static final String f11334u = ne.w0.B0(0);

    /* renamed from: v  reason: collision with root package name */
    private static final String f11335v = ne.w0.B0(1);

    /* renamed from: w  reason: collision with root package name */
    private static final String f11336w = ne.w0.B0(2);

    /* renamed from: x  reason: collision with root package name */
    private static final String f11337x = ne.w0.B0(3);

    /* renamed from: y  reason: collision with root package name */
    private static final String f11338y = ne.w0.B0(4);

    /* renamed from: z  reason: collision with root package name */
    private static final String f11339z = ne.w0.B0(5);
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
        private static final String f11348i = ne.w0.B0(0);

        /* renamed from: o  reason: collision with root package name */
        public static final g.a f11349o = new g.a() { // from class: lc.c0
            @Override // com.google.android.exoplayer2.g.a
            public final com.google.android.exoplayer2.g a(Bundle bundle) {
                MediaItem.b b10;
                b10 = MediaItem.b.b(bundle);
                return b10;
            }
        };

        /* renamed from: d  reason: collision with root package name */
        public final Uri f11350d;

        /* renamed from: e  reason: collision with root package name */
        public final Object f11351e;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class a {

            /* renamed from: a  reason: collision with root package name */
            private Uri f11352a;

            /* renamed from: b  reason: collision with root package name */
            private Object f11353b;

            public a(Uri uri) {
                this.f11352a = uri;
            }

            public b c() {
                return new b(this);
            }
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static b b(Bundle bundle) {
            Uri uri = (Uri) bundle.getParcelable(f11348i);
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
            if (this.f11350d.equals(bVar.f11350d) && ne.w0.c(this.f11351e, bVar.f11351e)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int i10;
            int hashCode = this.f11350d.hashCode() * 31;
            Object obj = this.f11351e;
            if (obj != null) {
                i10 = obj.hashCode();
            } else {
                i10 = 0;
            }
            return hashCode + i10;
        }

        private b(a aVar) {
            this.f11350d = aVar.f11352a;
            this.f11351e = aVar.f11353b;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c {

        /* renamed from: a  reason: collision with root package name */
        private String f11354a;

        /* renamed from: b  reason: collision with root package name */
        private Uri f11355b;

        /* renamed from: c  reason: collision with root package name */
        private String f11356c;

        /* renamed from: g  reason: collision with root package name */
        private String f11360g;

        /* renamed from: i  reason: collision with root package name */
        private b f11362i;

        /* renamed from: j  reason: collision with root package name */
        private Object f11363j;

        /* renamed from: k  reason: collision with root package name */
        private MediaMetadata f11364k;

        /* renamed from: d  reason: collision with root package name */
        private d.a f11357d = new d.a();

        /* renamed from: e  reason: collision with root package name */
        private f.a f11358e = new f.a();

        /* renamed from: f  reason: collision with root package name */
        private List f11359f = Collections.EMPTY_LIST;

        /* renamed from: h  reason: collision with root package name */
        private ji.s f11361h = ji.s.r();

        /* renamed from: l  reason: collision with root package name */
        private g.a f11365l = new g.a();

        /* renamed from: m  reason: collision with root package name */
        private i f11366m = i.f11440o;

        public MediaItem a() {
            boolean z10;
            h hVar;
            if (this.f11358e.f11401b != null && this.f11358e.f11400a == null) {
                z10 = false;
            } else {
                z10 = true;
            }
            ne.a.g(z10);
            Uri uri = this.f11355b;
            f fVar = null;
            if (uri != null) {
                String str = this.f11356c;
                if (this.f11358e.f11400a != null) {
                    fVar = this.f11358e.i();
                }
                hVar = new h(uri, str, fVar, this.f11362i, this.f11359f, this.f11360g, this.f11361h, this.f11363j);
            } else {
                hVar = null;
            }
            String str2 = this.f11354a;
            if (str2 == null) {
                str2 = "";
            }
            String str3 = str2;
            e g10 = this.f11357d.g();
            g f10 = this.f11365l.f();
            MediaMetadata mediaMetadata = this.f11364k;
            if (mediaMetadata == null) {
                mediaMetadata = MediaMetadata.T;
            }
            return new MediaItem(str3, g10, hVar, f10, mediaMetadata, this.f11366m);
        }

        public c b(String str) {
            this.f11354a = (String) ne.a.e(str);
            return this;
        }

        public c c(List list) {
            this.f11361h = ji.s.m(list);
            return this;
        }

        public c d(Object obj) {
            this.f11363j = obj;
            return this;
        }

        public c e(Uri uri) {
            this.f11355b = uri;
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
        public static final d f11367q = new a().f();

        /* renamed from: r  reason: collision with root package name */
        private static final String f11368r = ne.w0.B0(0);

        /* renamed from: s  reason: collision with root package name */
        private static final String f11369s = ne.w0.B0(1);

        /* renamed from: t  reason: collision with root package name */
        private static final String f11370t = ne.w0.B0(2);

        /* renamed from: u  reason: collision with root package name */
        private static final String f11371u = ne.w0.B0(3);

        /* renamed from: v  reason: collision with root package name */
        private static final String f11372v = ne.w0.B0(4);

        /* renamed from: w  reason: collision with root package name */
        public static final g.a f11373w = new g.a() { // from class: lc.d0
            @Override // com.google.android.exoplayer2.g.a
            public final com.google.android.exoplayer2.g a(Bundle bundle) {
                return MediaItem.d.a(bundle);
            }
        };

        /* renamed from: d  reason: collision with root package name */
        public final long f11374d;

        /* renamed from: e  reason: collision with root package name */
        public final long f11375e;

        /* renamed from: i  reason: collision with root package name */
        public final boolean f11376i;

        /* renamed from: o  reason: collision with root package name */
        public final boolean f11377o;

        /* renamed from: p  reason: collision with root package name */
        public final boolean f11378p;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class a {

            /* renamed from: a  reason: collision with root package name */
            private long f11379a;

            /* renamed from: b  reason: collision with root package name */
            private long f11380b = Long.MIN_VALUE;

            /* renamed from: c  reason: collision with root package name */
            private boolean f11381c;

            /* renamed from: d  reason: collision with root package name */
            private boolean f11382d;

            /* renamed from: e  reason: collision with root package name */
            private boolean f11383e;

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
                this.f11380b = j10;
                return this;
            }

            public a i(boolean z10) {
                this.f11382d = z10;
                return this;
            }

            public a j(boolean z10) {
                this.f11381c = z10;
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
                this.f11379a = j10;
                return this;
            }

            public a l(boolean z10) {
                this.f11383e = z10;
                return this;
            }
        }

        public static /* synthetic */ e a(Bundle bundle) {
            a aVar = new a();
            String str = f11368r;
            d dVar = f11367q;
            return aVar.k(bundle.getLong(str, dVar.f11374d)).h(bundle.getLong(f11369s, dVar.f11375e)).j(bundle.getBoolean(f11370t, dVar.f11376i)).i(bundle.getBoolean(f11371u, dVar.f11377o)).l(bundle.getBoolean(f11372v, dVar.f11378p)).g();
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof d)) {
                return false;
            }
            d dVar = (d) obj;
            if (this.f11374d == dVar.f11374d && this.f11375e == dVar.f11375e && this.f11376i == dVar.f11376i && this.f11377o == dVar.f11377o && this.f11378p == dVar.f11378p) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            long j10 = this.f11374d;
            long j11 = this.f11375e;
            return (((((((((int) (j10 ^ (j10 >>> 32))) * 31) + ((int) ((j11 >>> 32) ^ j11))) * 31) + (this.f11376i ? 1 : 0)) * 31) + (this.f11377o ? 1 : 0)) * 31) + (this.f11378p ? 1 : 0);
        }

        private d(a aVar) {
            this.f11374d = aVar.f11379a;
            this.f11375e = aVar.f11380b;
            this.f11376i = aVar.f11381c;
            this.f11377o = aVar.f11382d;
            this.f11378p = aVar.f11383e;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class e extends d {

        /* renamed from: x  reason: collision with root package name */
        public static final e f11384x = new d.a().g();

        private e(d.a aVar) {
            super(aVar);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class f implements com.google.android.exoplayer2.g {

        /* renamed from: d  reason: collision with root package name */
        public final UUID f11389d;

        /* renamed from: e  reason: collision with root package name */
        public final UUID f11390e;

        /* renamed from: i  reason: collision with root package name */
        public final Uri f11391i;

        /* renamed from: o  reason: collision with root package name */
        public final ji.t f11392o;

        /* renamed from: p  reason: collision with root package name */
        public final ji.t f11393p;

        /* renamed from: q  reason: collision with root package name */
        public final boolean f11394q;

        /* renamed from: r  reason: collision with root package name */
        public final boolean f11395r;

        /* renamed from: s  reason: collision with root package name */
        public final boolean f11396s;

        /* renamed from: t  reason: collision with root package name */
        public final ji.s f11397t;

        /* renamed from: u  reason: collision with root package name */
        public final ji.s f11398u;

        /* renamed from: v  reason: collision with root package name */
        private final byte[] f11399v;

        /* renamed from: w  reason: collision with root package name */
        private static final String f11385w = ne.w0.B0(0);

        /* renamed from: x  reason: collision with root package name */
        private static final String f11386x = ne.w0.B0(1);

        /* renamed from: y  reason: collision with root package name */
        private static final String f11387y = ne.w0.B0(2);

        /* renamed from: z  reason: collision with root package name */
        private static final String f11388z = ne.w0.B0(3);
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
            private UUID f11400a;

            /* renamed from: b  reason: collision with root package name */
            private Uri f11401b;

            /* renamed from: c  reason: collision with root package name */
            private ji.t f11402c;

            /* renamed from: d  reason: collision with root package name */
            private boolean f11403d;

            /* renamed from: e  reason: collision with root package name */
            private boolean f11404e;

            /* renamed from: f  reason: collision with root package name */
            private boolean f11405f;

            /* renamed from: g  reason: collision with root package name */
            private ji.s f11406g;

            /* renamed from: h  reason: collision with root package name */
            private byte[] f11407h;

            public f i() {
                return new f(this);
            }

            public a j(boolean z10) {
                this.f11405f = z10;
                return this;
            }

            public a k(List list) {
                this.f11406g = ji.s.m(list);
                return this;
            }

            public a l(byte[] bArr) {
                byte[] bArr2;
                if (bArr != null) {
                    bArr2 = Arrays.copyOf(bArr, bArr.length);
                } else {
                    bArr2 = null;
                }
                this.f11407h = bArr2;
                return this;
            }

            public a m(Map map) {
                this.f11402c = ji.t.c(map);
                return this;
            }

            public a n(Uri uri) {
                this.f11401b = uri;
                return this;
            }

            public a o(boolean z10) {
                this.f11403d = z10;
                return this;
            }

            public a p(boolean z10) {
                this.f11404e = z10;
                return this;
            }

            public a(UUID uuid) {
                this.f11400a = uuid;
                this.f11402c = ji.t.j();
                this.f11406g = ji.s.r();
            }

            private a() {
                this.f11402c = ji.t.j();
                this.f11406g = ji.s.r();
            }
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static f b(Bundle bundle) {
            UUID fromString = UUID.fromString((String) ne.a.e(bundle.getString(f11385w)));
            ji.t b10 = ne.d.b(ne.d.f(bundle, f11387y, Bundle.EMPTY));
            boolean z10 = bundle.getBoolean(f11388z, false);
            boolean z11 = bundle.getBoolean(A, false);
            boolean z12 = bundle.getBoolean(B, false);
            ji.s m10 = ji.s.m(ne.d.g(bundle, C, new ArrayList()));
            return new a(fromString).n((Uri) bundle.getParcelable(f11386x)).m(b10).o(z10).j(z12).p(z11).k(m10).l(bundle.getByteArray(D)).i();
        }

        public byte[] c() {
            byte[] bArr = this.f11399v;
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
            if (this.f11389d.equals(fVar.f11389d) && ne.w0.c(this.f11391i, fVar.f11391i) && ne.w0.c(this.f11393p, fVar.f11393p) && this.f11394q == fVar.f11394q && this.f11396s == fVar.f11396s && this.f11395r == fVar.f11395r && this.f11398u.equals(fVar.f11398u) && Arrays.equals(this.f11399v, fVar.f11399v)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int i10;
            int hashCode = this.f11389d.hashCode() * 31;
            Uri uri = this.f11391i;
            if (uri != null) {
                i10 = uri.hashCode();
            } else {
                i10 = 0;
            }
            return ((((((((((((hashCode + i10) * 31) + this.f11393p.hashCode()) * 31) + (this.f11394q ? 1 : 0)) * 31) + (this.f11396s ? 1 : 0)) * 31) + (this.f11395r ? 1 : 0)) * 31) + this.f11398u.hashCode()) * 31) + Arrays.hashCode(this.f11399v);
        }

        private f(a aVar) {
            ne.a.g((aVar.f11405f && aVar.f11401b == null) ? false : true);
            UUID uuid = (UUID) ne.a.e(aVar.f11400a);
            this.f11389d = uuid;
            this.f11390e = uuid;
            this.f11391i = aVar.f11401b;
            this.f11392o = aVar.f11402c;
            this.f11393p = aVar.f11402c;
            this.f11394q = aVar.f11403d;
            this.f11396s = aVar.f11405f;
            this.f11395r = aVar.f11404e;
            this.f11397t = aVar.f11406g;
            this.f11398u = aVar.f11406g;
            this.f11399v = aVar.f11407h != null ? Arrays.copyOf(aVar.f11407h, aVar.f11407h.length) : null;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class g implements com.google.android.exoplayer2.g {

        /* renamed from: q  reason: collision with root package name */
        public static final g f11408q = new a().f();

        /* renamed from: r  reason: collision with root package name */
        private static final String f11409r = ne.w0.B0(0);

        /* renamed from: s  reason: collision with root package name */
        private static final String f11410s = ne.w0.B0(1);

        /* renamed from: t  reason: collision with root package name */
        private static final String f11411t = ne.w0.B0(2);

        /* renamed from: u  reason: collision with root package name */
        private static final String f11412u = ne.w0.B0(3);

        /* renamed from: v  reason: collision with root package name */
        private static final String f11413v = ne.w0.B0(4);

        /* renamed from: w  reason: collision with root package name */
        public static final g.a f11414w = new g.a() { // from class: lc.f0
            @Override // com.google.android.exoplayer2.g.a
            public final com.google.android.exoplayer2.g a(Bundle bundle) {
                return MediaItem.g.a(bundle);
            }
        };

        /* renamed from: d  reason: collision with root package name */
        public final long f11415d;

        /* renamed from: e  reason: collision with root package name */
        public final long f11416e;

        /* renamed from: i  reason: collision with root package name */
        public final long f11417i;

        /* renamed from: o  reason: collision with root package name */
        public final float f11418o;

        /* renamed from: p  reason: collision with root package name */
        public final float f11419p;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class a {

            /* renamed from: a  reason: collision with root package name */
            private long f11420a = -9223372036854775807L;

            /* renamed from: b  reason: collision with root package name */
            private long f11421b = -9223372036854775807L;

            /* renamed from: c  reason: collision with root package name */
            private long f11422c = -9223372036854775807L;

            /* renamed from: d  reason: collision with root package name */
            private float f11423d = -3.4028235E38f;

            /* renamed from: e  reason: collision with root package name */
            private float f11424e = -3.4028235E38f;

            public g f() {
                return new g(this);
            }

            public a g(long j10) {
                this.f11422c = j10;
                return this;
            }

            public a h(float f10) {
                this.f11424e = f10;
                return this;
            }

            public a i(long j10) {
                this.f11421b = j10;
                return this;
            }

            public a j(float f10) {
                this.f11423d = f10;
                return this;
            }

            public a k(long j10) {
                this.f11420a = j10;
                return this;
            }
        }

        public static /* synthetic */ g a(Bundle bundle) {
            String str = f11409r;
            g gVar = f11408q;
            return new g(bundle.getLong(str, gVar.f11415d), bundle.getLong(f11410s, gVar.f11416e), bundle.getLong(f11411t, gVar.f11417i), bundle.getFloat(f11412u, gVar.f11418o), bundle.getFloat(f11413v, gVar.f11419p));
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof g)) {
                return false;
            }
            g gVar = (g) obj;
            if (this.f11415d == gVar.f11415d && this.f11416e == gVar.f11416e && this.f11417i == gVar.f11417i && this.f11418o == gVar.f11418o && this.f11419p == gVar.f11419p) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int i10;
            long j10 = this.f11415d;
            long j11 = this.f11416e;
            long j12 = this.f11417i;
            int i11 = ((((((int) (j10 ^ (j10 >>> 32))) * 31) + ((int) (j11 ^ (j11 >>> 32)))) * 31) + ((int) ((j12 >>> 32) ^ j12))) * 31;
            float f10 = this.f11418o;
            int i12 = 0;
            if (f10 != 0.0f) {
                i10 = Float.floatToIntBits(f10);
            } else {
                i10 = 0;
            }
            int i13 = (i11 + i10) * 31;
            float f11 = this.f11419p;
            if (f11 != 0.0f) {
                i12 = Float.floatToIntBits(f11);
            }
            return i13 + i12;
        }

        private g(a aVar) {
            this(aVar.f11420a, aVar.f11421b, aVar.f11422c, aVar.f11423d, aVar.f11424e);
        }

        public g(long j10, long j11, long j12, float f10, float f11) {
            this.f11415d = j10;
            this.f11416e = j11;
            this.f11417i = j12;
            this.f11418o = f10;
            this.f11419p = f11;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class h implements com.google.android.exoplayer2.g {

        /* renamed from: d  reason: collision with root package name */
        public final Uri f11431d;

        /* renamed from: e  reason: collision with root package name */
        public final String f11432e;

        /* renamed from: i  reason: collision with root package name */
        public final f f11433i;

        /* renamed from: o  reason: collision with root package name */
        public final b f11434o;

        /* renamed from: p  reason: collision with root package name */
        public final List f11435p;

        /* renamed from: q  reason: collision with root package name */
        public final String f11436q;

        /* renamed from: r  reason: collision with root package name */
        public final ji.s f11437r;

        /* renamed from: s  reason: collision with root package name */
        public final List f11438s;

        /* renamed from: t  reason: collision with root package name */
        public final Object f11439t;

        /* renamed from: u  reason: collision with root package name */
        private static final String f11425u = ne.w0.B0(0);

        /* renamed from: v  reason: collision with root package name */
        private static final String f11426v = ne.w0.B0(1);

        /* renamed from: w  reason: collision with root package name */
        private static final String f11427w = ne.w0.B0(2);

        /* renamed from: x  reason: collision with root package name */
        private static final String f11428x = ne.w0.B0(3);

        /* renamed from: y  reason: collision with root package name */
        private static final String f11429y = ne.w0.B0(4);

        /* renamed from: z  reason: collision with root package name */
        private static final String f11430z = ne.w0.B0(5);
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
            ji.s d10;
            ji.s d11;
            Bundle bundle2 = bundle.getBundle(f11427w);
            b bVar = null;
            if (bundle2 == null) {
                fVar = null;
            } else {
                fVar = (f) f.E.a(bundle2);
            }
            Bundle bundle3 = bundle.getBundle(f11428x);
            if (bundle3 != null) {
                bVar = (b) b.f11349o.a(bundle3);
            }
            b bVar2 = bVar;
            ArrayList parcelableArrayList = bundle.getParcelableArrayList(f11429y);
            if (parcelableArrayList == null) {
                d10 = ji.s.r();
            } else {
                d10 = ne.d.d(new g.a() { // from class: lc.h0
                    @Override // com.google.android.exoplayer2.g.a
                    public final com.google.android.exoplayer2.g a(Bundle bundle4) {
                        return pd.c.d(bundle4);
                    }
                }, parcelableArrayList);
            }
            ji.s sVar = d10;
            ArrayList parcelableArrayList2 = bundle.getParcelableArrayList(A);
            if (parcelableArrayList2 == null) {
                d11 = ji.s.r();
            } else {
                d11 = ne.d.d(k.f11458z, parcelableArrayList2);
            }
            return new h((Uri) ne.a.e((Uri) bundle.getParcelable(f11425u)), bundle.getString(f11426v), fVar, bVar2, sVar, bundle.getString(f11430z), d11, null);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof h)) {
                return false;
            }
            h hVar = (h) obj;
            if (this.f11431d.equals(hVar.f11431d) && ne.w0.c(this.f11432e, hVar.f11432e) && ne.w0.c(this.f11433i, hVar.f11433i) && ne.w0.c(this.f11434o, hVar.f11434o) && this.f11435p.equals(hVar.f11435p) && ne.w0.c(this.f11436q, hVar.f11436q) && this.f11437r.equals(hVar.f11437r) && ne.w0.c(this.f11439t, hVar.f11439t)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4;
            int hashCode5 = this.f11431d.hashCode() * 31;
            String str = this.f11432e;
            int i10 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int i11 = (hashCode5 + hashCode) * 31;
            f fVar = this.f11433i;
            if (fVar == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = fVar.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            b bVar = this.f11434o;
            if (bVar == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = bVar.hashCode();
            }
            int hashCode6 = (((i12 + hashCode3) * 31) + this.f11435p.hashCode()) * 31;
            String str2 = this.f11436q;
            if (str2 == null) {
                hashCode4 = 0;
            } else {
                hashCode4 = str2.hashCode();
            }
            int hashCode7 = (((hashCode6 + hashCode4) * 31) + this.f11437r.hashCode()) * 31;
            Object obj = this.f11439t;
            if (obj != null) {
                i10 = obj.hashCode();
            }
            return hashCode7 + i10;
        }

        private h(Uri uri, String str, f fVar, b bVar, List list, String str2, ji.s sVar, Object obj) {
            this.f11431d = uri;
            this.f11432e = str;
            this.f11433i = fVar;
            this.f11434o = bVar;
            this.f11435p = list;
            this.f11436q = str2;
            this.f11437r = sVar;
            s.a j10 = ji.s.j();
            for (int i10 = 0; i10 < sVar.size(); i10++) {
                j10.a(((k) sVar.get(i10)).b().j());
            }
            this.f11438s = j10.k();
            this.f11439t = obj;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class i implements com.google.android.exoplayer2.g {

        /* renamed from: o  reason: collision with root package name */
        public static final i f11440o = new a().d();

        /* renamed from: p  reason: collision with root package name */
        private static final String f11441p = ne.w0.B0(0);

        /* renamed from: q  reason: collision with root package name */
        private static final String f11442q = ne.w0.B0(1);

        /* renamed from: r  reason: collision with root package name */
        private static final String f11443r = ne.w0.B0(2);

        /* renamed from: s  reason: collision with root package name */
        public static final g.a f11444s = new g.a() { // from class: lc.i0
            @Override // com.google.android.exoplayer2.g.a
            public final com.google.android.exoplayer2.g a(Bundle bundle) {
                MediaItem.i d10;
                d10 = new MediaItem.i.a().f((Uri) bundle.getParcelable(MediaItem.i.f11441p)).g(bundle.getString(MediaItem.i.f11442q)).e(bundle.getBundle(MediaItem.i.f11443r)).d();
                return d10;
            }
        };

        /* renamed from: d  reason: collision with root package name */
        public final Uri f11445d;

        /* renamed from: e  reason: collision with root package name */
        public final String f11446e;

        /* renamed from: i  reason: collision with root package name */
        public final Bundle f11447i;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class a {

            /* renamed from: a  reason: collision with root package name */
            private Uri f11448a;

            /* renamed from: b  reason: collision with root package name */
            private String f11449b;

            /* renamed from: c  reason: collision with root package name */
            private Bundle f11450c;

            public i d() {
                return new i(this);
            }

            public a e(Bundle bundle) {
                this.f11450c = bundle;
                return this;
            }

            public a f(Uri uri) {
                this.f11448a = uri;
                return this;
            }

            public a g(String str) {
                this.f11449b = str;
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
            if (ne.w0.c(this.f11445d, iVar.f11445d) && ne.w0.c(this.f11446e, iVar.f11446e)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int hashCode;
            Uri uri = this.f11445d;
            int i10 = 0;
            if (uri == null) {
                hashCode = 0;
            } else {
                hashCode = uri.hashCode();
            }
            int i11 = hashCode * 31;
            String str = this.f11446e;
            if (str != null) {
                i10 = str.hashCode();
            }
            return i11 + i10;
        }

        private i(a aVar) {
            this.f11445d = aVar.f11448a;
            this.f11446e = aVar.f11449b;
            this.f11447i = aVar.f11450c;
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
        private static final String f11451s = ne.w0.B0(0);

        /* renamed from: t  reason: collision with root package name */
        private static final String f11452t = ne.w0.B0(1);

        /* renamed from: u  reason: collision with root package name */
        private static final String f11453u = ne.w0.B0(2);

        /* renamed from: v  reason: collision with root package name */
        private static final String f11454v = ne.w0.B0(3);

        /* renamed from: w  reason: collision with root package name */
        private static final String f11455w = ne.w0.B0(4);

        /* renamed from: x  reason: collision with root package name */
        private static final String f11456x = ne.w0.B0(5);

        /* renamed from: y  reason: collision with root package name */
        private static final String f11457y = ne.w0.B0(6);

        /* renamed from: z  reason: collision with root package name */
        public static final g.a f11458z = new g.a() { // from class: lc.j0
            @Override // com.google.android.exoplayer2.g.a
            public final com.google.android.exoplayer2.g a(Bundle bundle) {
                MediaItem.k c10;
                c10 = MediaItem.k.c(bundle);
                return c10;
            }
        };

        /* renamed from: d  reason: collision with root package name */
        public final Uri f11459d;

        /* renamed from: e  reason: collision with root package name */
        public final String f11460e;

        /* renamed from: i  reason: collision with root package name */
        public final String f11461i;

        /* renamed from: o  reason: collision with root package name */
        public final int f11462o;

        /* renamed from: p  reason: collision with root package name */
        public final int f11463p;

        /* renamed from: q  reason: collision with root package name */
        public final String f11464q;

        /* renamed from: r  reason: collision with root package name */
        public final String f11465r;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class a {

            /* renamed from: a  reason: collision with root package name */
            private Uri f11466a;

            /* renamed from: b  reason: collision with root package name */
            private String f11467b;

            /* renamed from: c  reason: collision with root package name */
            private String f11468c;

            /* renamed from: d  reason: collision with root package name */
            private int f11469d;

            /* renamed from: e  reason: collision with root package name */
            private int f11470e;

            /* renamed from: f  reason: collision with root package name */
            private String f11471f;

            /* renamed from: g  reason: collision with root package name */
            private String f11472g;

            /* JADX INFO: Access modifiers changed from: private */
            public j j() {
                return new j(this);
            }

            public k i() {
                return new k(this);
            }

            public a k(String str) {
                this.f11472g = str;
                return this;
            }

            public a l(String str) {
                this.f11471f = str;
                return this;
            }

            public a m(String str) {
                this.f11468c = str;
                return this;
            }

            public a n(String str) {
                this.f11467b = str;
                return this;
            }

            public a o(int i10) {
                this.f11470e = i10;
                return this;
            }

            public a p(int i10) {
                this.f11469d = i10;
                return this;
            }

            public a(Uri uri) {
                this.f11466a = uri;
            }

            private a(k kVar) {
                this.f11466a = kVar.f11459d;
                this.f11467b = kVar.f11460e;
                this.f11468c = kVar.f11461i;
                this.f11469d = kVar.f11462o;
                this.f11470e = kVar.f11463p;
                this.f11471f = kVar.f11464q;
                this.f11472g = kVar.f11465r;
            }
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static k c(Bundle bundle) {
            String string = bundle.getString(f11452t);
            String string2 = bundle.getString(f11453u);
            int i10 = bundle.getInt(f11454v, 0);
            int i11 = bundle.getInt(f11455w, 0);
            String string3 = bundle.getString(f11456x);
            return new a((Uri) ne.a.e((Uri) bundle.getParcelable(f11451s))).n(string).m(string2).p(i10).o(i11).l(string3).k(bundle.getString(f11457y)).i();
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
            if (this.f11459d.equals(kVar.f11459d) && ne.w0.c(this.f11460e, kVar.f11460e) && ne.w0.c(this.f11461i, kVar.f11461i) && this.f11462o == kVar.f11462o && this.f11463p == kVar.f11463p && ne.w0.c(this.f11464q, kVar.f11464q) && ne.w0.c(this.f11465r, kVar.f11465r)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4 = this.f11459d.hashCode() * 31;
            String str = this.f11460e;
            int i10 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int i11 = (hashCode4 + hashCode) * 31;
            String str2 = this.f11461i;
            if (str2 == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str2.hashCode();
            }
            int i12 = (((((i11 + hashCode2) * 31) + this.f11462o) * 31) + this.f11463p) * 31;
            String str3 = this.f11464q;
            if (str3 == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = str3.hashCode();
            }
            int i13 = (i12 + hashCode3) * 31;
            String str4 = this.f11465r;
            if (str4 != null) {
                i10 = str4.hashCode();
            }
            return i13 + i10;
        }

        private k(a aVar) {
            this.f11459d = aVar.f11466a;
            this.f11460e = aVar.f11467b;
            this.f11461i = aVar.f11468c;
            this.f11462o = aVar.f11469d;
            this.f11463p = aVar.f11470e;
            this.f11464q = aVar.f11471f;
            this.f11465r = aVar.f11472g;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static MediaItem b(Bundle bundle) {
        g gVar;
        MediaMetadata mediaMetadata;
        e eVar;
        i iVar;
        h hVar;
        String str = (String) ne.a.e(bundle.getString(f11334u, ""));
        Bundle bundle2 = bundle.getBundle(f11335v);
        if (bundle2 == null) {
            gVar = g.f11408q;
        } else {
            gVar = (g) g.f11414w.a(bundle2);
        }
        g gVar2 = gVar;
        Bundle bundle3 = bundle.getBundle(f11336w);
        if (bundle3 == null) {
            mediaMetadata = MediaMetadata.T;
        } else {
            mediaMetadata = (MediaMetadata) MediaMetadata.B0.a(bundle3);
        }
        MediaMetadata mediaMetadata2 = mediaMetadata;
        Bundle bundle4 = bundle.getBundle(f11337x);
        if (bundle4 == null) {
            eVar = e.f11384x;
        } else {
            eVar = (e) d.f11373w.a(bundle4);
        }
        e eVar2 = eVar;
        Bundle bundle5 = bundle.getBundle(f11338y);
        if (bundle5 == null) {
            iVar = i.f11440o;
        } else {
            iVar = (i) i.f11444s.a(bundle5);
        }
        i iVar2 = iVar;
        Bundle bundle6 = bundle.getBundle(f11339z);
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
        if (ne.w0.c(this.f11340d, mediaItem.f11340d) && this.f11345q.equals(mediaItem.f11345q) && ne.w0.c(this.f11341e, mediaItem.f11341e) && ne.w0.c(this.f11343o, mediaItem.f11343o) && ne.w0.c(this.f11344p, mediaItem.f11344p) && ne.w0.c(this.f11347s, mediaItem.f11347s)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int hashCode = this.f11340d.hashCode() * 31;
        h hVar = this.f11341e;
        if (hVar != null) {
            i10 = hVar.hashCode();
        } else {
            i10 = 0;
        }
        return ((((((((hashCode + i10) * 31) + this.f11343o.hashCode()) * 31) + this.f11345q.hashCode()) * 31) + this.f11344p.hashCode()) * 31) + this.f11347s.hashCode();
    }

    private MediaItem(String str, e eVar, h hVar, g gVar, MediaMetadata mediaMetadata, i iVar) {
        this.f11340d = str;
        this.f11341e = hVar;
        this.f11342i = hVar;
        this.f11343o = gVar;
        this.f11344p = mediaMetadata;
        this.f11345q = eVar;
        this.f11346r = eVar;
        this.f11347s = iVar;
    }
}
