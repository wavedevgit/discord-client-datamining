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
import qi.s;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class MediaItem implements com.google.android.exoplayer2.g {

    /* renamed from: d  reason: collision with root package name */
    public final String f12342d;

    /* renamed from: e  reason: collision with root package name */
    public final h f12343e;

    /* renamed from: i  reason: collision with root package name */
    public final h f12344i;

    /* renamed from: o  reason: collision with root package name */
    public final g f12345o;

    /* renamed from: p  reason: collision with root package name */
    public final MediaMetadata f12346p;

    /* renamed from: q  reason: collision with root package name */
    public final d f12347q;

    /* renamed from: r  reason: collision with root package name */
    public final e f12348r;

    /* renamed from: s  reason: collision with root package name */
    public final i f12349s;

    /* renamed from: t  reason: collision with root package name */
    public static final MediaItem f12335t = new c().a();

    /* renamed from: u  reason: collision with root package name */
    private static final String f12336u = oe.w0.B0(0);

    /* renamed from: v  reason: collision with root package name */
    private static final String f12337v = oe.w0.B0(1);

    /* renamed from: w  reason: collision with root package name */
    private static final String f12338w = oe.w0.B0(2);

    /* renamed from: x  reason: collision with root package name */
    private static final String f12339x = oe.w0.B0(3);

    /* renamed from: y  reason: collision with root package name */
    private static final String f12340y = oe.w0.B0(4);

    /* renamed from: z  reason: collision with root package name */
    private static final String f12341z = oe.w0.B0(5);
    public static final g.a A = new g.a() { // from class: mc.b0
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
        private static final String f12350i = oe.w0.B0(0);

        /* renamed from: o  reason: collision with root package name */
        public static final g.a f12351o = new g.a() { // from class: mc.c0
            @Override // com.google.android.exoplayer2.g.a
            public final com.google.android.exoplayer2.g a(Bundle bundle) {
                MediaItem.b b10;
                b10 = MediaItem.b.b(bundle);
                return b10;
            }
        };

        /* renamed from: d  reason: collision with root package name */
        public final Uri f12352d;

        /* renamed from: e  reason: collision with root package name */
        public final Object f12353e;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class a {

            /* renamed from: a  reason: collision with root package name */
            private Uri f12354a;

            /* renamed from: b  reason: collision with root package name */
            private Object f12355b;

            public a(Uri uri) {
                this.f12354a = uri;
            }

            public b c() {
                return new b(this);
            }
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static b b(Bundle bundle) {
            Uri uri = (Uri) bundle.getParcelable(f12350i);
            oe.a.e(uri);
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
            if (this.f12352d.equals(bVar.f12352d) && oe.w0.c(this.f12353e, bVar.f12353e)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int i10;
            int hashCode = this.f12352d.hashCode() * 31;
            Object obj = this.f12353e;
            if (obj != null) {
                i10 = obj.hashCode();
            } else {
                i10 = 0;
            }
            return hashCode + i10;
        }

        private b(a aVar) {
            this.f12352d = aVar.f12354a;
            this.f12353e = aVar.f12355b;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c {

        /* renamed from: a  reason: collision with root package name */
        private String f12356a;

        /* renamed from: b  reason: collision with root package name */
        private Uri f12357b;

        /* renamed from: c  reason: collision with root package name */
        private String f12358c;

        /* renamed from: g  reason: collision with root package name */
        private String f12362g;

        /* renamed from: i  reason: collision with root package name */
        private b f12364i;

        /* renamed from: j  reason: collision with root package name */
        private Object f12365j;

        /* renamed from: k  reason: collision with root package name */
        private MediaMetadata f12366k;

        /* renamed from: d  reason: collision with root package name */
        private d.a f12359d = new d.a();

        /* renamed from: e  reason: collision with root package name */
        private f.a f12360e = new f.a();

        /* renamed from: f  reason: collision with root package name */
        private List f12361f = Collections.EMPTY_LIST;

        /* renamed from: h  reason: collision with root package name */
        private qi.s f12363h = qi.s.t();

        /* renamed from: l  reason: collision with root package name */
        private g.a f12367l = new g.a();

        /* renamed from: m  reason: collision with root package name */
        private i f12368m = i.f12442o;

        public MediaItem a() {
            boolean z10;
            h hVar;
            if (this.f12360e.f12403b != null && this.f12360e.f12402a == null) {
                z10 = false;
            } else {
                z10 = true;
            }
            oe.a.g(z10);
            Uri uri = this.f12357b;
            f fVar = null;
            if (uri != null) {
                String str = this.f12358c;
                if (this.f12360e.f12402a != null) {
                    fVar = this.f12360e.i();
                }
                hVar = new h(uri, str, fVar, this.f12364i, this.f12361f, this.f12362g, this.f12363h, this.f12365j);
            } else {
                hVar = null;
            }
            String str2 = this.f12356a;
            if (str2 == null) {
                str2 = "";
            }
            String str3 = str2;
            e g10 = this.f12359d.g();
            g f10 = this.f12367l.f();
            MediaMetadata mediaMetadata = this.f12366k;
            if (mediaMetadata == null) {
                mediaMetadata = MediaMetadata.T;
            }
            return new MediaItem(str3, g10, hVar, f10, mediaMetadata, this.f12368m);
        }

        public c b(String str) {
            this.f12356a = (String) oe.a.e(str);
            return this;
        }

        public c c(List list) {
            this.f12363h = qi.s.o(list);
            return this;
        }

        public c d(Object obj) {
            this.f12365j = obj;
            return this;
        }

        public c e(Uri uri) {
            this.f12357b = uri;
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
        public static final d f12369q = new a().f();

        /* renamed from: r  reason: collision with root package name */
        private static final String f12370r = oe.w0.B0(0);

        /* renamed from: s  reason: collision with root package name */
        private static final String f12371s = oe.w0.B0(1);

        /* renamed from: t  reason: collision with root package name */
        private static final String f12372t = oe.w0.B0(2);

        /* renamed from: u  reason: collision with root package name */
        private static final String f12373u = oe.w0.B0(3);

        /* renamed from: v  reason: collision with root package name */
        private static final String f12374v = oe.w0.B0(4);

        /* renamed from: w  reason: collision with root package name */
        public static final g.a f12375w = new g.a() { // from class: mc.d0
            @Override // com.google.android.exoplayer2.g.a
            public final com.google.android.exoplayer2.g a(Bundle bundle) {
                return MediaItem.d.a(bundle);
            }
        };

        /* renamed from: d  reason: collision with root package name */
        public final long f12376d;

        /* renamed from: e  reason: collision with root package name */
        public final long f12377e;

        /* renamed from: i  reason: collision with root package name */
        public final boolean f12378i;

        /* renamed from: o  reason: collision with root package name */
        public final boolean f12379o;

        /* renamed from: p  reason: collision with root package name */
        public final boolean f12380p;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class a {

            /* renamed from: a  reason: collision with root package name */
            private long f12381a;

            /* renamed from: b  reason: collision with root package name */
            private long f12382b = Long.MIN_VALUE;

            /* renamed from: c  reason: collision with root package name */
            private boolean f12383c;

            /* renamed from: d  reason: collision with root package name */
            private boolean f12384d;

            /* renamed from: e  reason: collision with root package name */
            private boolean f12385e;

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
                oe.a.a(z10);
                this.f12382b = j10;
                return this;
            }

            public a i(boolean z10) {
                this.f12384d = z10;
                return this;
            }

            public a j(boolean z10) {
                this.f12383c = z10;
                return this;
            }

            public a k(long j10) {
                boolean z10;
                if (j10 >= 0) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                oe.a.a(z10);
                this.f12381a = j10;
                return this;
            }

            public a l(boolean z10) {
                this.f12385e = z10;
                return this;
            }
        }

        public static /* synthetic */ e a(Bundle bundle) {
            a aVar = new a();
            String str = f12370r;
            d dVar = f12369q;
            return aVar.k(bundle.getLong(str, dVar.f12376d)).h(bundle.getLong(f12371s, dVar.f12377e)).j(bundle.getBoolean(f12372t, dVar.f12378i)).i(bundle.getBoolean(f12373u, dVar.f12379o)).l(bundle.getBoolean(f12374v, dVar.f12380p)).g();
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof d)) {
                return false;
            }
            d dVar = (d) obj;
            if (this.f12376d == dVar.f12376d && this.f12377e == dVar.f12377e && this.f12378i == dVar.f12378i && this.f12379o == dVar.f12379o && this.f12380p == dVar.f12380p) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            long j10 = this.f12376d;
            long j11 = this.f12377e;
            return (((((((((int) (j10 ^ (j10 >>> 32))) * 31) + ((int) ((j11 >>> 32) ^ j11))) * 31) + (this.f12378i ? 1 : 0)) * 31) + (this.f12379o ? 1 : 0)) * 31) + (this.f12380p ? 1 : 0);
        }

        private d(a aVar) {
            this.f12376d = aVar.f12381a;
            this.f12377e = aVar.f12382b;
            this.f12378i = aVar.f12383c;
            this.f12379o = aVar.f12384d;
            this.f12380p = aVar.f12385e;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class e extends d {

        /* renamed from: x  reason: collision with root package name */
        public static final e f12386x = new d.a().g();

        private e(d.a aVar) {
            super(aVar);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class f implements com.google.android.exoplayer2.g {

        /* renamed from: d  reason: collision with root package name */
        public final UUID f12391d;

        /* renamed from: e  reason: collision with root package name */
        public final UUID f12392e;

        /* renamed from: i  reason: collision with root package name */
        public final Uri f12393i;

        /* renamed from: o  reason: collision with root package name */
        public final qi.t f12394o;

        /* renamed from: p  reason: collision with root package name */
        public final qi.t f12395p;

        /* renamed from: q  reason: collision with root package name */
        public final boolean f12396q;

        /* renamed from: r  reason: collision with root package name */
        public final boolean f12397r;

        /* renamed from: s  reason: collision with root package name */
        public final boolean f12398s;

        /* renamed from: t  reason: collision with root package name */
        public final qi.s f12399t;

        /* renamed from: u  reason: collision with root package name */
        public final qi.s f12400u;

        /* renamed from: v  reason: collision with root package name */
        private final byte[] f12401v;

        /* renamed from: w  reason: collision with root package name */
        private static final String f12387w = oe.w0.B0(0);

        /* renamed from: x  reason: collision with root package name */
        private static final String f12388x = oe.w0.B0(1);

        /* renamed from: y  reason: collision with root package name */
        private static final String f12389y = oe.w0.B0(2);

        /* renamed from: z  reason: collision with root package name */
        private static final String f12390z = oe.w0.B0(3);
        private static final String A = oe.w0.B0(4);
        private static final String B = oe.w0.B0(5);
        private static final String C = oe.w0.B0(6);
        private static final String D = oe.w0.B0(7);
        public static final g.a E = new g.a() { // from class: mc.e0
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
            private UUID f12402a;

            /* renamed from: b  reason: collision with root package name */
            private Uri f12403b;

            /* renamed from: c  reason: collision with root package name */
            private qi.t f12404c;

            /* renamed from: d  reason: collision with root package name */
            private boolean f12405d;

            /* renamed from: e  reason: collision with root package name */
            private boolean f12406e;

            /* renamed from: f  reason: collision with root package name */
            private boolean f12407f;

            /* renamed from: g  reason: collision with root package name */
            private qi.s f12408g;

            /* renamed from: h  reason: collision with root package name */
            private byte[] f12409h;

            public f i() {
                return new f(this);
            }

            public a j(boolean z10) {
                this.f12407f = z10;
                return this;
            }

            public a k(List list) {
                this.f12408g = qi.s.o(list);
                return this;
            }

            public a l(byte[] bArr) {
                byte[] bArr2;
                if (bArr != null) {
                    bArr2 = Arrays.copyOf(bArr, bArr.length);
                } else {
                    bArr2 = null;
                }
                this.f12409h = bArr2;
                return this;
            }

            public a m(Map map) {
                this.f12404c = qi.t.c(map);
                return this;
            }

            public a n(Uri uri) {
                this.f12403b = uri;
                return this;
            }

            public a o(boolean z10) {
                this.f12405d = z10;
                return this;
            }

            public a p(boolean z10) {
                this.f12406e = z10;
                return this;
            }

            public a(UUID uuid) {
                this.f12402a = uuid;
                this.f12404c = qi.t.j();
                this.f12408g = qi.s.t();
            }

            private a() {
                this.f12404c = qi.t.j();
                this.f12408g = qi.s.t();
            }
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static f b(Bundle bundle) {
            UUID fromString = UUID.fromString((String) oe.a.e(bundle.getString(f12387w)));
            qi.t b10 = oe.d.b(oe.d.f(bundle, f12389y, Bundle.EMPTY));
            boolean z10 = bundle.getBoolean(f12390z, false);
            boolean z11 = bundle.getBoolean(A, false);
            boolean z12 = bundle.getBoolean(B, false);
            qi.s o10 = qi.s.o(oe.d.g(bundle, C, new ArrayList()));
            return new a(fromString).n((Uri) bundle.getParcelable(f12388x)).m(b10).o(z10).j(z12).p(z11).k(o10).l(bundle.getByteArray(D)).i();
        }

        public byte[] c() {
            byte[] bArr = this.f12401v;
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
            if (this.f12391d.equals(fVar.f12391d) && oe.w0.c(this.f12393i, fVar.f12393i) && oe.w0.c(this.f12395p, fVar.f12395p) && this.f12396q == fVar.f12396q && this.f12398s == fVar.f12398s && this.f12397r == fVar.f12397r && this.f12400u.equals(fVar.f12400u) && Arrays.equals(this.f12401v, fVar.f12401v)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int i10;
            int hashCode = this.f12391d.hashCode() * 31;
            Uri uri = this.f12393i;
            if (uri != null) {
                i10 = uri.hashCode();
            } else {
                i10 = 0;
            }
            return ((((((((((((hashCode + i10) * 31) + this.f12395p.hashCode()) * 31) + (this.f12396q ? 1 : 0)) * 31) + (this.f12398s ? 1 : 0)) * 31) + (this.f12397r ? 1 : 0)) * 31) + this.f12400u.hashCode()) * 31) + Arrays.hashCode(this.f12401v);
        }

        private f(a aVar) {
            oe.a.g((aVar.f12407f && aVar.f12403b == null) ? false : true);
            UUID uuid = (UUID) oe.a.e(aVar.f12402a);
            this.f12391d = uuid;
            this.f12392e = uuid;
            this.f12393i = aVar.f12403b;
            this.f12394o = aVar.f12404c;
            this.f12395p = aVar.f12404c;
            this.f12396q = aVar.f12405d;
            this.f12398s = aVar.f12407f;
            this.f12397r = aVar.f12406e;
            this.f12399t = aVar.f12408g;
            this.f12400u = aVar.f12408g;
            this.f12401v = aVar.f12409h != null ? Arrays.copyOf(aVar.f12409h, aVar.f12409h.length) : null;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class g implements com.google.android.exoplayer2.g {

        /* renamed from: q  reason: collision with root package name */
        public static final g f12410q = new a().f();

        /* renamed from: r  reason: collision with root package name */
        private static final String f12411r = oe.w0.B0(0);

        /* renamed from: s  reason: collision with root package name */
        private static final String f12412s = oe.w0.B0(1);

        /* renamed from: t  reason: collision with root package name */
        private static final String f12413t = oe.w0.B0(2);

        /* renamed from: u  reason: collision with root package name */
        private static final String f12414u = oe.w0.B0(3);

        /* renamed from: v  reason: collision with root package name */
        private static final String f12415v = oe.w0.B0(4);

        /* renamed from: w  reason: collision with root package name */
        public static final g.a f12416w = new g.a() { // from class: mc.f0
            @Override // com.google.android.exoplayer2.g.a
            public final com.google.android.exoplayer2.g a(Bundle bundle) {
                return MediaItem.g.a(bundle);
            }
        };

        /* renamed from: d  reason: collision with root package name */
        public final long f12417d;

        /* renamed from: e  reason: collision with root package name */
        public final long f12418e;

        /* renamed from: i  reason: collision with root package name */
        public final long f12419i;

        /* renamed from: o  reason: collision with root package name */
        public final float f12420o;

        /* renamed from: p  reason: collision with root package name */
        public final float f12421p;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class a {

            /* renamed from: a  reason: collision with root package name */
            private long f12422a = -9223372036854775807L;

            /* renamed from: b  reason: collision with root package name */
            private long f12423b = -9223372036854775807L;

            /* renamed from: c  reason: collision with root package name */
            private long f12424c = -9223372036854775807L;

            /* renamed from: d  reason: collision with root package name */
            private float f12425d = -3.4028235E38f;

            /* renamed from: e  reason: collision with root package name */
            private float f12426e = -3.4028235E38f;

            public g f() {
                return new g(this);
            }

            public a g(long j10) {
                this.f12424c = j10;
                return this;
            }

            public a h(float f10) {
                this.f12426e = f10;
                return this;
            }

            public a i(long j10) {
                this.f12423b = j10;
                return this;
            }

            public a j(float f10) {
                this.f12425d = f10;
                return this;
            }

            public a k(long j10) {
                this.f12422a = j10;
                return this;
            }
        }

        public static /* synthetic */ g a(Bundle bundle) {
            String str = f12411r;
            g gVar = f12410q;
            return new g(bundle.getLong(str, gVar.f12417d), bundle.getLong(f12412s, gVar.f12418e), bundle.getLong(f12413t, gVar.f12419i), bundle.getFloat(f12414u, gVar.f12420o), bundle.getFloat(f12415v, gVar.f12421p));
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof g)) {
                return false;
            }
            g gVar = (g) obj;
            if (this.f12417d == gVar.f12417d && this.f12418e == gVar.f12418e && this.f12419i == gVar.f12419i && this.f12420o == gVar.f12420o && this.f12421p == gVar.f12421p) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int i10;
            long j10 = this.f12417d;
            long j11 = this.f12418e;
            long j12 = this.f12419i;
            int i11 = ((((((int) (j10 ^ (j10 >>> 32))) * 31) + ((int) (j11 ^ (j11 >>> 32)))) * 31) + ((int) ((j12 >>> 32) ^ j12))) * 31;
            float f10 = this.f12420o;
            int i12 = 0;
            if (f10 != 0.0f) {
                i10 = Float.floatToIntBits(f10);
            } else {
                i10 = 0;
            }
            int i13 = (i11 + i10) * 31;
            float f11 = this.f12421p;
            if (f11 != 0.0f) {
                i12 = Float.floatToIntBits(f11);
            }
            return i13 + i12;
        }

        private g(a aVar) {
            this(aVar.f12422a, aVar.f12423b, aVar.f12424c, aVar.f12425d, aVar.f12426e);
        }

        public g(long j10, long j11, long j12, float f10, float f11) {
            this.f12417d = j10;
            this.f12418e = j11;
            this.f12419i = j12;
            this.f12420o = f10;
            this.f12421p = f11;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class h implements com.google.android.exoplayer2.g {

        /* renamed from: d  reason: collision with root package name */
        public final Uri f12433d;

        /* renamed from: e  reason: collision with root package name */
        public final String f12434e;

        /* renamed from: i  reason: collision with root package name */
        public final f f12435i;

        /* renamed from: o  reason: collision with root package name */
        public final b f12436o;

        /* renamed from: p  reason: collision with root package name */
        public final List f12437p;

        /* renamed from: q  reason: collision with root package name */
        public final String f12438q;

        /* renamed from: r  reason: collision with root package name */
        public final qi.s f12439r;

        /* renamed from: s  reason: collision with root package name */
        public final List f12440s;

        /* renamed from: t  reason: collision with root package name */
        public final Object f12441t;

        /* renamed from: u  reason: collision with root package name */
        private static final String f12427u = oe.w0.B0(0);

        /* renamed from: v  reason: collision with root package name */
        private static final String f12428v = oe.w0.B0(1);

        /* renamed from: w  reason: collision with root package name */
        private static final String f12429w = oe.w0.B0(2);

        /* renamed from: x  reason: collision with root package name */
        private static final String f12430x = oe.w0.B0(3);

        /* renamed from: y  reason: collision with root package name */
        private static final String f12431y = oe.w0.B0(4);

        /* renamed from: z  reason: collision with root package name */
        private static final String f12432z = oe.w0.B0(5);
        private static final String A = oe.w0.B0(6);
        public static final g.a B = new g.a() { // from class: mc.g0
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
            qi.s d10;
            qi.s d11;
            Bundle bundle2 = bundle.getBundle(f12429w);
            b bVar = null;
            if (bundle2 == null) {
                fVar = null;
            } else {
                fVar = (f) f.E.a(bundle2);
            }
            Bundle bundle3 = bundle.getBundle(f12430x);
            if (bundle3 != null) {
                bVar = (b) b.f12351o.a(bundle3);
            }
            b bVar2 = bVar;
            ArrayList parcelableArrayList = bundle.getParcelableArrayList(f12431y);
            if (parcelableArrayList == null) {
                d10 = qi.s.t();
            } else {
                d10 = oe.d.d(new g.a() { // from class: mc.h0
                    @Override // com.google.android.exoplayer2.g.a
                    public final com.google.android.exoplayer2.g a(Bundle bundle4) {
                        return qd.c.d(bundle4);
                    }
                }, parcelableArrayList);
            }
            qi.s sVar = d10;
            ArrayList parcelableArrayList2 = bundle.getParcelableArrayList(A);
            if (parcelableArrayList2 == null) {
                d11 = qi.s.t();
            } else {
                d11 = oe.d.d(k.f12460z, parcelableArrayList2);
            }
            return new h((Uri) oe.a.e((Uri) bundle.getParcelable(f12427u)), bundle.getString(f12428v), fVar, bVar2, sVar, bundle.getString(f12432z), d11, null);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof h)) {
                return false;
            }
            h hVar = (h) obj;
            if (this.f12433d.equals(hVar.f12433d) && oe.w0.c(this.f12434e, hVar.f12434e) && oe.w0.c(this.f12435i, hVar.f12435i) && oe.w0.c(this.f12436o, hVar.f12436o) && this.f12437p.equals(hVar.f12437p) && oe.w0.c(this.f12438q, hVar.f12438q) && this.f12439r.equals(hVar.f12439r) && oe.w0.c(this.f12441t, hVar.f12441t)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4;
            int hashCode5 = this.f12433d.hashCode() * 31;
            String str = this.f12434e;
            int i10 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int i11 = (hashCode5 + hashCode) * 31;
            f fVar = this.f12435i;
            if (fVar == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = fVar.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            b bVar = this.f12436o;
            if (bVar == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = bVar.hashCode();
            }
            int hashCode6 = (((i12 + hashCode3) * 31) + this.f12437p.hashCode()) * 31;
            String str2 = this.f12438q;
            if (str2 == null) {
                hashCode4 = 0;
            } else {
                hashCode4 = str2.hashCode();
            }
            int hashCode7 = (((hashCode6 + hashCode4) * 31) + this.f12439r.hashCode()) * 31;
            Object obj = this.f12441t;
            if (obj != null) {
                i10 = obj.hashCode();
            }
            return hashCode7 + i10;
        }

        private h(Uri uri, String str, f fVar, b bVar, List list, String str2, qi.s sVar, Object obj) {
            this.f12433d = uri;
            this.f12434e = str;
            this.f12435i = fVar;
            this.f12436o = bVar;
            this.f12437p = list;
            this.f12438q = str2;
            this.f12439r = sVar;
            s.a k10 = qi.s.k();
            for (int i10 = 0; i10 < sVar.size(); i10++) {
                k10.a(((k) sVar.get(i10)).b().j());
            }
            this.f12440s = k10.k();
            this.f12441t = obj;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class i implements com.google.android.exoplayer2.g {

        /* renamed from: o  reason: collision with root package name */
        public static final i f12442o = new a().d();

        /* renamed from: p  reason: collision with root package name */
        private static final String f12443p = oe.w0.B0(0);

        /* renamed from: q  reason: collision with root package name */
        private static final String f12444q = oe.w0.B0(1);

        /* renamed from: r  reason: collision with root package name */
        private static final String f12445r = oe.w0.B0(2);

        /* renamed from: s  reason: collision with root package name */
        public static final g.a f12446s = new g.a() { // from class: mc.i0
            @Override // com.google.android.exoplayer2.g.a
            public final com.google.android.exoplayer2.g a(Bundle bundle) {
                MediaItem.i d10;
                d10 = new MediaItem.i.a().f((Uri) bundle.getParcelable(MediaItem.i.f12443p)).g(bundle.getString(MediaItem.i.f12444q)).e(bundle.getBundle(MediaItem.i.f12445r)).d();
                return d10;
            }
        };

        /* renamed from: d  reason: collision with root package name */
        public final Uri f12447d;

        /* renamed from: e  reason: collision with root package name */
        public final String f12448e;

        /* renamed from: i  reason: collision with root package name */
        public final Bundle f12449i;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class a {

            /* renamed from: a  reason: collision with root package name */
            private Uri f12450a;

            /* renamed from: b  reason: collision with root package name */
            private String f12451b;

            /* renamed from: c  reason: collision with root package name */
            private Bundle f12452c;

            public i d() {
                return new i(this);
            }

            public a e(Bundle bundle) {
                this.f12452c = bundle;
                return this;
            }

            public a f(Uri uri) {
                this.f12450a = uri;
                return this;
            }

            public a g(String str) {
                this.f12451b = str;
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
            if (oe.w0.c(this.f12447d, iVar.f12447d) && oe.w0.c(this.f12448e, iVar.f12448e)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int hashCode;
            Uri uri = this.f12447d;
            int i10 = 0;
            if (uri == null) {
                hashCode = 0;
            } else {
                hashCode = uri.hashCode();
            }
            int i11 = hashCode * 31;
            String str = this.f12448e;
            if (str != null) {
                i10 = str.hashCode();
            }
            return i11 + i10;
        }

        private i(a aVar) {
            this.f12447d = aVar.f12450a;
            this.f12448e = aVar.f12451b;
            this.f12449i = aVar.f12452c;
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
        private static final String f12453s = oe.w0.B0(0);

        /* renamed from: t  reason: collision with root package name */
        private static final String f12454t = oe.w0.B0(1);

        /* renamed from: u  reason: collision with root package name */
        private static final String f12455u = oe.w0.B0(2);

        /* renamed from: v  reason: collision with root package name */
        private static final String f12456v = oe.w0.B0(3);

        /* renamed from: w  reason: collision with root package name */
        private static final String f12457w = oe.w0.B0(4);

        /* renamed from: x  reason: collision with root package name */
        private static final String f12458x = oe.w0.B0(5);

        /* renamed from: y  reason: collision with root package name */
        private static final String f12459y = oe.w0.B0(6);

        /* renamed from: z  reason: collision with root package name */
        public static final g.a f12460z = new g.a() { // from class: mc.j0
            @Override // com.google.android.exoplayer2.g.a
            public final com.google.android.exoplayer2.g a(Bundle bundle) {
                MediaItem.k c10;
                c10 = MediaItem.k.c(bundle);
                return c10;
            }
        };

        /* renamed from: d  reason: collision with root package name */
        public final Uri f12461d;

        /* renamed from: e  reason: collision with root package name */
        public final String f12462e;

        /* renamed from: i  reason: collision with root package name */
        public final String f12463i;

        /* renamed from: o  reason: collision with root package name */
        public final int f12464o;

        /* renamed from: p  reason: collision with root package name */
        public final int f12465p;

        /* renamed from: q  reason: collision with root package name */
        public final String f12466q;

        /* renamed from: r  reason: collision with root package name */
        public final String f12467r;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class a {

            /* renamed from: a  reason: collision with root package name */
            private Uri f12468a;

            /* renamed from: b  reason: collision with root package name */
            private String f12469b;

            /* renamed from: c  reason: collision with root package name */
            private String f12470c;

            /* renamed from: d  reason: collision with root package name */
            private int f12471d;

            /* renamed from: e  reason: collision with root package name */
            private int f12472e;

            /* renamed from: f  reason: collision with root package name */
            private String f12473f;

            /* renamed from: g  reason: collision with root package name */
            private String f12474g;

            /* JADX INFO: Access modifiers changed from: private */
            public j j() {
                return new j(this);
            }

            public k i() {
                return new k(this);
            }

            public a k(String str) {
                this.f12474g = str;
                return this;
            }

            public a l(String str) {
                this.f12473f = str;
                return this;
            }

            public a m(String str) {
                this.f12470c = str;
                return this;
            }

            public a n(String str) {
                this.f12469b = str;
                return this;
            }

            public a o(int i10) {
                this.f12472e = i10;
                return this;
            }

            public a p(int i10) {
                this.f12471d = i10;
                return this;
            }

            public a(Uri uri) {
                this.f12468a = uri;
            }

            private a(k kVar) {
                this.f12468a = kVar.f12461d;
                this.f12469b = kVar.f12462e;
                this.f12470c = kVar.f12463i;
                this.f12471d = kVar.f12464o;
                this.f12472e = kVar.f12465p;
                this.f12473f = kVar.f12466q;
                this.f12474g = kVar.f12467r;
            }
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static k c(Bundle bundle) {
            String string = bundle.getString(f12454t);
            String string2 = bundle.getString(f12455u);
            int i10 = bundle.getInt(f12456v, 0);
            int i11 = bundle.getInt(f12457w, 0);
            String string3 = bundle.getString(f12458x);
            return new a((Uri) oe.a.e((Uri) bundle.getParcelable(f12453s))).n(string).m(string2).p(i10).o(i11).l(string3).k(bundle.getString(f12459y)).i();
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
            if (this.f12461d.equals(kVar.f12461d) && oe.w0.c(this.f12462e, kVar.f12462e) && oe.w0.c(this.f12463i, kVar.f12463i) && this.f12464o == kVar.f12464o && this.f12465p == kVar.f12465p && oe.w0.c(this.f12466q, kVar.f12466q) && oe.w0.c(this.f12467r, kVar.f12467r)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4 = this.f12461d.hashCode() * 31;
            String str = this.f12462e;
            int i10 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int i11 = (hashCode4 + hashCode) * 31;
            String str2 = this.f12463i;
            if (str2 == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str2.hashCode();
            }
            int i12 = (((((i11 + hashCode2) * 31) + this.f12464o) * 31) + this.f12465p) * 31;
            String str3 = this.f12466q;
            if (str3 == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = str3.hashCode();
            }
            int i13 = (i12 + hashCode3) * 31;
            String str4 = this.f12467r;
            if (str4 != null) {
                i10 = str4.hashCode();
            }
            return i13 + i10;
        }

        private k(a aVar) {
            this.f12461d = aVar.f12468a;
            this.f12462e = aVar.f12469b;
            this.f12463i = aVar.f12470c;
            this.f12464o = aVar.f12471d;
            this.f12465p = aVar.f12472e;
            this.f12466q = aVar.f12473f;
            this.f12467r = aVar.f12474g;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static MediaItem b(Bundle bundle) {
        g gVar;
        MediaMetadata mediaMetadata;
        e eVar;
        i iVar;
        h hVar;
        String str = (String) oe.a.e(bundle.getString(f12336u, ""));
        Bundle bundle2 = bundle.getBundle(f12337v);
        if (bundle2 == null) {
            gVar = g.f12410q;
        } else {
            gVar = (g) g.f12416w.a(bundle2);
        }
        g gVar2 = gVar;
        Bundle bundle3 = bundle.getBundle(f12338w);
        if (bundle3 == null) {
            mediaMetadata = MediaMetadata.T;
        } else {
            mediaMetadata = (MediaMetadata) MediaMetadata.B0.a(bundle3);
        }
        MediaMetadata mediaMetadata2 = mediaMetadata;
        Bundle bundle4 = bundle.getBundle(f12339x);
        if (bundle4 == null) {
            eVar = e.f12386x;
        } else {
            eVar = (e) d.f12375w.a(bundle4);
        }
        e eVar2 = eVar;
        Bundle bundle5 = bundle.getBundle(f12340y);
        if (bundle5 == null) {
            iVar = i.f12442o;
        } else {
            iVar = (i) i.f12446s.a(bundle5);
        }
        i iVar2 = iVar;
        Bundle bundle6 = bundle.getBundle(f12341z);
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
        if (oe.w0.c(this.f12342d, mediaItem.f12342d) && this.f12347q.equals(mediaItem.f12347q) && oe.w0.c(this.f12343e, mediaItem.f12343e) && oe.w0.c(this.f12345o, mediaItem.f12345o) && oe.w0.c(this.f12346p, mediaItem.f12346p) && oe.w0.c(this.f12349s, mediaItem.f12349s)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int hashCode = this.f12342d.hashCode() * 31;
        h hVar = this.f12343e;
        if (hVar != null) {
            i10 = hVar.hashCode();
        } else {
            i10 = 0;
        }
        return ((((((((hashCode + i10) * 31) + this.f12345o.hashCode()) * 31) + this.f12347q.hashCode()) * 31) + this.f12346p.hashCode()) * 31) + this.f12349s.hashCode();
    }

    private MediaItem(String str, e eVar, h hVar, g gVar, MediaMetadata mediaMetadata, i iVar) {
        this.f12342d = str;
        this.f12343e = hVar;
        this.f12344i = hVar;
        this.f12345o = gVar;
        this.f12346p = mediaMetadata;
        this.f12347q = eVar;
        this.f12348r = eVar;
        this.f12349s = iVar;
    }
}
