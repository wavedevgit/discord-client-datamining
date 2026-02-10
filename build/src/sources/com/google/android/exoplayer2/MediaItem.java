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
import oi.s;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class MediaItem implements com.google.android.exoplayer2.g {

    /* renamed from: d  reason: collision with root package name */
    public final String f11764d;

    /* renamed from: e  reason: collision with root package name */
    public final h f11765e;

    /* renamed from: i  reason: collision with root package name */
    public final h f11766i;

    /* renamed from: o  reason: collision with root package name */
    public final g f11767o;

    /* renamed from: p  reason: collision with root package name */
    public final MediaMetadata f11768p;

    /* renamed from: q  reason: collision with root package name */
    public final d f11769q;

    /* renamed from: r  reason: collision with root package name */
    public final e f11770r;

    /* renamed from: s  reason: collision with root package name */
    public final i f11771s;

    /* renamed from: t  reason: collision with root package name */
    public static final MediaItem f11757t = new c().a();

    /* renamed from: u  reason: collision with root package name */
    private static final String f11758u = oe.w0.B0(0);

    /* renamed from: v  reason: collision with root package name */
    private static final String f11759v = oe.w0.B0(1);

    /* renamed from: w  reason: collision with root package name */
    private static final String f11760w = oe.w0.B0(2);

    /* renamed from: x  reason: collision with root package name */
    private static final String f11761x = oe.w0.B0(3);

    /* renamed from: y  reason: collision with root package name */
    private static final String f11762y = oe.w0.B0(4);

    /* renamed from: z  reason: collision with root package name */
    private static final String f11763z = oe.w0.B0(5);
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
        private static final String f11772i = oe.w0.B0(0);

        /* renamed from: o  reason: collision with root package name */
        public static final g.a f11773o = new g.a() { // from class: mc.c0
            @Override // com.google.android.exoplayer2.g.a
            public final com.google.android.exoplayer2.g a(Bundle bundle) {
                MediaItem.b b10;
                b10 = MediaItem.b.b(bundle);
                return b10;
            }
        };

        /* renamed from: d  reason: collision with root package name */
        public final Uri f11774d;

        /* renamed from: e  reason: collision with root package name */
        public final Object f11775e;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class a {

            /* renamed from: a  reason: collision with root package name */
            private Uri f11776a;

            /* renamed from: b  reason: collision with root package name */
            private Object f11777b;

            public a(Uri uri) {
                this.f11776a = uri;
            }

            public b c() {
                return new b(this);
            }
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static b b(Bundle bundle) {
            Uri uri = (Uri) bundle.getParcelable(f11772i);
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
            if (this.f11774d.equals(bVar.f11774d) && oe.w0.c(this.f11775e, bVar.f11775e)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int i10;
            int hashCode = this.f11774d.hashCode() * 31;
            Object obj = this.f11775e;
            if (obj != null) {
                i10 = obj.hashCode();
            } else {
                i10 = 0;
            }
            return hashCode + i10;
        }

        private b(a aVar) {
            this.f11774d = aVar.f11776a;
            this.f11775e = aVar.f11777b;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c {

        /* renamed from: a  reason: collision with root package name */
        private String f11778a;

        /* renamed from: b  reason: collision with root package name */
        private Uri f11779b;

        /* renamed from: c  reason: collision with root package name */
        private String f11780c;

        /* renamed from: g  reason: collision with root package name */
        private String f11784g;

        /* renamed from: i  reason: collision with root package name */
        private b f11786i;

        /* renamed from: j  reason: collision with root package name */
        private Object f11787j;

        /* renamed from: k  reason: collision with root package name */
        private MediaMetadata f11788k;

        /* renamed from: d  reason: collision with root package name */
        private d.a f11781d = new d.a();

        /* renamed from: e  reason: collision with root package name */
        private f.a f11782e = new f.a();

        /* renamed from: f  reason: collision with root package name */
        private List f11783f = Collections.EMPTY_LIST;

        /* renamed from: h  reason: collision with root package name */
        private oi.s f11785h = oi.s.t();

        /* renamed from: l  reason: collision with root package name */
        private g.a f11789l = new g.a();

        /* renamed from: m  reason: collision with root package name */
        private i f11790m = i.f11864o;

        public MediaItem a() {
            boolean z10;
            h hVar;
            if (this.f11782e.f11825b != null && this.f11782e.f11824a == null) {
                z10 = false;
            } else {
                z10 = true;
            }
            oe.a.g(z10);
            Uri uri = this.f11779b;
            f fVar = null;
            if (uri != null) {
                String str = this.f11780c;
                if (this.f11782e.f11824a != null) {
                    fVar = this.f11782e.i();
                }
                hVar = new h(uri, str, fVar, this.f11786i, this.f11783f, this.f11784g, this.f11785h, this.f11787j);
            } else {
                hVar = null;
            }
            String str2 = this.f11778a;
            if (str2 == null) {
                str2 = "";
            }
            String str3 = str2;
            e g10 = this.f11781d.g();
            g f10 = this.f11789l.f();
            MediaMetadata mediaMetadata = this.f11788k;
            if (mediaMetadata == null) {
                mediaMetadata = MediaMetadata.T;
            }
            return new MediaItem(str3, g10, hVar, f10, mediaMetadata, this.f11790m);
        }

        public c b(String str) {
            this.f11778a = (String) oe.a.e(str);
            return this;
        }

        public c c(List list) {
            this.f11785h = oi.s.o(list);
            return this;
        }

        public c d(Object obj) {
            this.f11787j = obj;
            return this;
        }

        public c e(Uri uri) {
            this.f11779b = uri;
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
        public static final d f11791q = new a().f();

        /* renamed from: r  reason: collision with root package name */
        private static final String f11792r = oe.w0.B0(0);

        /* renamed from: s  reason: collision with root package name */
        private static final String f11793s = oe.w0.B0(1);

        /* renamed from: t  reason: collision with root package name */
        private static final String f11794t = oe.w0.B0(2);

        /* renamed from: u  reason: collision with root package name */
        private static final String f11795u = oe.w0.B0(3);

        /* renamed from: v  reason: collision with root package name */
        private static final String f11796v = oe.w0.B0(4);

        /* renamed from: w  reason: collision with root package name */
        public static final g.a f11797w = new g.a() { // from class: mc.d0
            @Override // com.google.android.exoplayer2.g.a
            public final com.google.android.exoplayer2.g a(Bundle bundle) {
                return MediaItem.d.a(bundle);
            }
        };

        /* renamed from: d  reason: collision with root package name */
        public final long f11798d;

        /* renamed from: e  reason: collision with root package name */
        public final long f11799e;

        /* renamed from: i  reason: collision with root package name */
        public final boolean f11800i;

        /* renamed from: o  reason: collision with root package name */
        public final boolean f11801o;

        /* renamed from: p  reason: collision with root package name */
        public final boolean f11802p;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class a {

            /* renamed from: a  reason: collision with root package name */
            private long f11803a;

            /* renamed from: b  reason: collision with root package name */
            private long f11804b = Long.MIN_VALUE;

            /* renamed from: c  reason: collision with root package name */
            private boolean f11805c;

            /* renamed from: d  reason: collision with root package name */
            private boolean f11806d;

            /* renamed from: e  reason: collision with root package name */
            private boolean f11807e;

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
                this.f11804b = j10;
                return this;
            }

            public a i(boolean z10) {
                this.f11806d = z10;
                return this;
            }

            public a j(boolean z10) {
                this.f11805c = z10;
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
                this.f11803a = j10;
                return this;
            }

            public a l(boolean z10) {
                this.f11807e = z10;
                return this;
            }
        }

        public static /* synthetic */ e a(Bundle bundle) {
            a aVar = new a();
            String str = f11792r;
            d dVar = f11791q;
            return aVar.k(bundle.getLong(str, dVar.f11798d)).h(bundle.getLong(f11793s, dVar.f11799e)).j(bundle.getBoolean(f11794t, dVar.f11800i)).i(bundle.getBoolean(f11795u, dVar.f11801o)).l(bundle.getBoolean(f11796v, dVar.f11802p)).g();
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof d)) {
                return false;
            }
            d dVar = (d) obj;
            if (this.f11798d == dVar.f11798d && this.f11799e == dVar.f11799e && this.f11800i == dVar.f11800i && this.f11801o == dVar.f11801o && this.f11802p == dVar.f11802p) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            long j10 = this.f11798d;
            long j11 = this.f11799e;
            return (((((((((int) (j10 ^ (j10 >>> 32))) * 31) + ((int) ((j11 >>> 32) ^ j11))) * 31) + (this.f11800i ? 1 : 0)) * 31) + (this.f11801o ? 1 : 0)) * 31) + (this.f11802p ? 1 : 0);
        }

        private d(a aVar) {
            this.f11798d = aVar.f11803a;
            this.f11799e = aVar.f11804b;
            this.f11800i = aVar.f11805c;
            this.f11801o = aVar.f11806d;
            this.f11802p = aVar.f11807e;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class e extends d {

        /* renamed from: x  reason: collision with root package name */
        public static final e f11808x = new d.a().g();

        private e(d.a aVar) {
            super(aVar);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class f implements com.google.android.exoplayer2.g {

        /* renamed from: d  reason: collision with root package name */
        public final UUID f11813d;

        /* renamed from: e  reason: collision with root package name */
        public final UUID f11814e;

        /* renamed from: i  reason: collision with root package name */
        public final Uri f11815i;

        /* renamed from: o  reason: collision with root package name */
        public final oi.t f11816o;

        /* renamed from: p  reason: collision with root package name */
        public final oi.t f11817p;

        /* renamed from: q  reason: collision with root package name */
        public final boolean f11818q;

        /* renamed from: r  reason: collision with root package name */
        public final boolean f11819r;

        /* renamed from: s  reason: collision with root package name */
        public final boolean f11820s;

        /* renamed from: t  reason: collision with root package name */
        public final oi.s f11821t;

        /* renamed from: u  reason: collision with root package name */
        public final oi.s f11822u;

        /* renamed from: v  reason: collision with root package name */
        private final byte[] f11823v;

        /* renamed from: w  reason: collision with root package name */
        private static final String f11809w = oe.w0.B0(0);

        /* renamed from: x  reason: collision with root package name */
        private static final String f11810x = oe.w0.B0(1);

        /* renamed from: y  reason: collision with root package name */
        private static final String f11811y = oe.w0.B0(2);

        /* renamed from: z  reason: collision with root package name */
        private static final String f11812z = oe.w0.B0(3);
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
            private UUID f11824a;

            /* renamed from: b  reason: collision with root package name */
            private Uri f11825b;

            /* renamed from: c  reason: collision with root package name */
            private oi.t f11826c;

            /* renamed from: d  reason: collision with root package name */
            private boolean f11827d;

            /* renamed from: e  reason: collision with root package name */
            private boolean f11828e;

            /* renamed from: f  reason: collision with root package name */
            private boolean f11829f;

            /* renamed from: g  reason: collision with root package name */
            private oi.s f11830g;

            /* renamed from: h  reason: collision with root package name */
            private byte[] f11831h;

            public f i() {
                return new f(this);
            }

            public a j(boolean z10) {
                this.f11829f = z10;
                return this;
            }

            public a k(List list) {
                this.f11830g = oi.s.o(list);
                return this;
            }

            public a l(byte[] bArr) {
                byte[] bArr2;
                if (bArr != null) {
                    bArr2 = Arrays.copyOf(bArr, bArr.length);
                } else {
                    bArr2 = null;
                }
                this.f11831h = bArr2;
                return this;
            }

            public a m(Map map) {
                this.f11826c = oi.t.c(map);
                return this;
            }

            public a n(Uri uri) {
                this.f11825b = uri;
                return this;
            }

            public a o(boolean z10) {
                this.f11827d = z10;
                return this;
            }

            public a p(boolean z10) {
                this.f11828e = z10;
                return this;
            }

            public a(UUID uuid) {
                this.f11824a = uuid;
                this.f11826c = oi.t.j();
                this.f11830g = oi.s.t();
            }

            private a() {
                this.f11826c = oi.t.j();
                this.f11830g = oi.s.t();
            }
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static f b(Bundle bundle) {
            UUID fromString = UUID.fromString((String) oe.a.e(bundle.getString(f11809w)));
            oi.t b10 = oe.d.b(oe.d.f(bundle, f11811y, Bundle.EMPTY));
            boolean z10 = bundle.getBoolean(f11812z, false);
            boolean z11 = bundle.getBoolean(A, false);
            boolean z12 = bundle.getBoolean(B, false);
            oi.s o10 = oi.s.o(oe.d.g(bundle, C, new ArrayList()));
            return new a(fromString).n((Uri) bundle.getParcelable(f11810x)).m(b10).o(z10).j(z12).p(z11).k(o10).l(bundle.getByteArray(D)).i();
        }

        public byte[] c() {
            byte[] bArr = this.f11823v;
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
            if (this.f11813d.equals(fVar.f11813d) && oe.w0.c(this.f11815i, fVar.f11815i) && oe.w0.c(this.f11817p, fVar.f11817p) && this.f11818q == fVar.f11818q && this.f11820s == fVar.f11820s && this.f11819r == fVar.f11819r && this.f11822u.equals(fVar.f11822u) && Arrays.equals(this.f11823v, fVar.f11823v)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int i10;
            int hashCode = this.f11813d.hashCode() * 31;
            Uri uri = this.f11815i;
            if (uri != null) {
                i10 = uri.hashCode();
            } else {
                i10 = 0;
            }
            return ((((((((((((hashCode + i10) * 31) + this.f11817p.hashCode()) * 31) + (this.f11818q ? 1 : 0)) * 31) + (this.f11820s ? 1 : 0)) * 31) + (this.f11819r ? 1 : 0)) * 31) + this.f11822u.hashCode()) * 31) + Arrays.hashCode(this.f11823v);
        }

        private f(a aVar) {
            oe.a.g((aVar.f11829f && aVar.f11825b == null) ? false : true);
            UUID uuid = (UUID) oe.a.e(aVar.f11824a);
            this.f11813d = uuid;
            this.f11814e = uuid;
            this.f11815i = aVar.f11825b;
            this.f11816o = aVar.f11826c;
            this.f11817p = aVar.f11826c;
            this.f11818q = aVar.f11827d;
            this.f11820s = aVar.f11829f;
            this.f11819r = aVar.f11828e;
            this.f11821t = aVar.f11830g;
            this.f11822u = aVar.f11830g;
            this.f11823v = aVar.f11831h != null ? Arrays.copyOf(aVar.f11831h, aVar.f11831h.length) : null;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class g implements com.google.android.exoplayer2.g {

        /* renamed from: q  reason: collision with root package name */
        public static final g f11832q = new a().f();

        /* renamed from: r  reason: collision with root package name */
        private static final String f11833r = oe.w0.B0(0);

        /* renamed from: s  reason: collision with root package name */
        private static final String f11834s = oe.w0.B0(1);

        /* renamed from: t  reason: collision with root package name */
        private static final String f11835t = oe.w0.B0(2);

        /* renamed from: u  reason: collision with root package name */
        private static final String f11836u = oe.w0.B0(3);

        /* renamed from: v  reason: collision with root package name */
        private static final String f11837v = oe.w0.B0(4);

        /* renamed from: w  reason: collision with root package name */
        public static final g.a f11838w = new g.a() { // from class: mc.f0
            @Override // com.google.android.exoplayer2.g.a
            public final com.google.android.exoplayer2.g a(Bundle bundle) {
                return MediaItem.g.a(bundle);
            }
        };

        /* renamed from: d  reason: collision with root package name */
        public final long f11839d;

        /* renamed from: e  reason: collision with root package name */
        public final long f11840e;

        /* renamed from: i  reason: collision with root package name */
        public final long f11841i;

        /* renamed from: o  reason: collision with root package name */
        public final float f11842o;

        /* renamed from: p  reason: collision with root package name */
        public final float f11843p;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class a {

            /* renamed from: a  reason: collision with root package name */
            private long f11844a = -9223372036854775807L;

            /* renamed from: b  reason: collision with root package name */
            private long f11845b = -9223372036854775807L;

            /* renamed from: c  reason: collision with root package name */
            private long f11846c = -9223372036854775807L;

            /* renamed from: d  reason: collision with root package name */
            private float f11847d = -3.4028235E38f;

            /* renamed from: e  reason: collision with root package name */
            private float f11848e = -3.4028235E38f;

            public g f() {
                return new g(this);
            }

            public a g(long j10) {
                this.f11846c = j10;
                return this;
            }

            public a h(float f10) {
                this.f11848e = f10;
                return this;
            }

            public a i(long j10) {
                this.f11845b = j10;
                return this;
            }

            public a j(float f10) {
                this.f11847d = f10;
                return this;
            }

            public a k(long j10) {
                this.f11844a = j10;
                return this;
            }
        }

        public static /* synthetic */ g a(Bundle bundle) {
            String str = f11833r;
            g gVar = f11832q;
            return new g(bundle.getLong(str, gVar.f11839d), bundle.getLong(f11834s, gVar.f11840e), bundle.getLong(f11835t, gVar.f11841i), bundle.getFloat(f11836u, gVar.f11842o), bundle.getFloat(f11837v, gVar.f11843p));
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof g)) {
                return false;
            }
            g gVar = (g) obj;
            if (this.f11839d == gVar.f11839d && this.f11840e == gVar.f11840e && this.f11841i == gVar.f11841i && this.f11842o == gVar.f11842o && this.f11843p == gVar.f11843p) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int i10;
            long j10 = this.f11839d;
            long j11 = this.f11840e;
            long j12 = this.f11841i;
            int i11 = ((((((int) (j10 ^ (j10 >>> 32))) * 31) + ((int) (j11 ^ (j11 >>> 32)))) * 31) + ((int) ((j12 >>> 32) ^ j12))) * 31;
            float f10 = this.f11842o;
            int i12 = 0;
            if (f10 != 0.0f) {
                i10 = Float.floatToIntBits(f10);
            } else {
                i10 = 0;
            }
            int i13 = (i11 + i10) * 31;
            float f11 = this.f11843p;
            if (f11 != 0.0f) {
                i12 = Float.floatToIntBits(f11);
            }
            return i13 + i12;
        }

        private g(a aVar) {
            this(aVar.f11844a, aVar.f11845b, aVar.f11846c, aVar.f11847d, aVar.f11848e);
        }

        public g(long j10, long j11, long j12, float f10, float f11) {
            this.f11839d = j10;
            this.f11840e = j11;
            this.f11841i = j12;
            this.f11842o = f10;
            this.f11843p = f11;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class h implements com.google.android.exoplayer2.g {

        /* renamed from: d  reason: collision with root package name */
        public final Uri f11855d;

        /* renamed from: e  reason: collision with root package name */
        public final String f11856e;

        /* renamed from: i  reason: collision with root package name */
        public final f f11857i;

        /* renamed from: o  reason: collision with root package name */
        public final b f11858o;

        /* renamed from: p  reason: collision with root package name */
        public final List f11859p;

        /* renamed from: q  reason: collision with root package name */
        public final String f11860q;

        /* renamed from: r  reason: collision with root package name */
        public final oi.s f11861r;

        /* renamed from: s  reason: collision with root package name */
        public final List f11862s;

        /* renamed from: t  reason: collision with root package name */
        public final Object f11863t;

        /* renamed from: u  reason: collision with root package name */
        private static final String f11849u = oe.w0.B0(0);

        /* renamed from: v  reason: collision with root package name */
        private static final String f11850v = oe.w0.B0(1);

        /* renamed from: w  reason: collision with root package name */
        private static final String f11851w = oe.w0.B0(2);

        /* renamed from: x  reason: collision with root package name */
        private static final String f11852x = oe.w0.B0(3);

        /* renamed from: y  reason: collision with root package name */
        private static final String f11853y = oe.w0.B0(4);

        /* renamed from: z  reason: collision with root package name */
        private static final String f11854z = oe.w0.B0(5);
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
            oi.s d10;
            oi.s d11;
            Bundle bundle2 = bundle.getBundle(f11851w);
            b bVar = null;
            if (bundle2 == null) {
                fVar = null;
            } else {
                fVar = (f) f.E.a(bundle2);
            }
            Bundle bundle3 = bundle.getBundle(f11852x);
            if (bundle3 != null) {
                bVar = (b) b.f11773o.a(bundle3);
            }
            b bVar2 = bVar;
            ArrayList parcelableArrayList = bundle.getParcelableArrayList(f11853y);
            if (parcelableArrayList == null) {
                d10 = oi.s.t();
            } else {
                d10 = oe.d.d(new g.a() { // from class: mc.h0
                    @Override // com.google.android.exoplayer2.g.a
                    public final com.google.android.exoplayer2.g a(Bundle bundle4) {
                        return qd.c.d(bundle4);
                    }
                }, parcelableArrayList);
            }
            oi.s sVar = d10;
            ArrayList parcelableArrayList2 = bundle.getParcelableArrayList(A);
            if (parcelableArrayList2 == null) {
                d11 = oi.s.t();
            } else {
                d11 = oe.d.d(k.f11882z, parcelableArrayList2);
            }
            return new h((Uri) oe.a.e((Uri) bundle.getParcelable(f11849u)), bundle.getString(f11850v), fVar, bVar2, sVar, bundle.getString(f11854z), d11, null);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof h)) {
                return false;
            }
            h hVar = (h) obj;
            if (this.f11855d.equals(hVar.f11855d) && oe.w0.c(this.f11856e, hVar.f11856e) && oe.w0.c(this.f11857i, hVar.f11857i) && oe.w0.c(this.f11858o, hVar.f11858o) && this.f11859p.equals(hVar.f11859p) && oe.w0.c(this.f11860q, hVar.f11860q) && this.f11861r.equals(hVar.f11861r) && oe.w0.c(this.f11863t, hVar.f11863t)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4;
            int hashCode5 = this.f11855d.hashCode() * 31;
            String str = this.f11856e;
            int i10 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int i11 = (hashCode5 + hashCode) * 31;
            f fVar = this.f11857i;
            if (fVar == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = fVar.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            b bVar = this.f11858o;
            if (bVar == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = bVar.hashCode();
            }
            int hashCode6 = (((i12 + hashCode3) * 31) + this.f11859p.hashCode()) * 31;
            String str2 = this.f11860q;
            if (str2 == null) {
                hashCode4 = 0;
            } else {
                hashCode4 = str2.hashCode();
            }
            int hashCode7 = (((hashCode6 + hashCode4) * 31) + this.f11861r.hashCode()) * 31;
            Object obj = this.f11863t;
            if (obj != null) {
                i10 = obj.hashCode();
            }
            return hashCode7 + i10;
        }

        private h(Uri uri, String str, f fVar, b bVar, List list, String str2, oi.s sVar, Object obj) {
            this.f11855d = uri;
            this.f11856e = str;
            this.f11857i = fVar;
            this.f11858o = bVar;
            this.f11859p = list;
            this.f11860q = str2;
            this.f11861r = sVar;
            s.a j10 = oi.s.j();
            for (int i10 = 0; i10 < sVar.size(); i10++) {
                j10.a(((k) sVar.get(i10)).b().j());
            }
            this.f11862s = j10.k();
            this.f11863t = obj;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class i implements com.google.android.exoplayer2.g {

        /* renamed from: o  reason: collision with root package name */
        public static final i f11864o = new a().d();

        /* renamed from: p  reason: collision with root package name */
        private static final String f11865p = oe.w0.B0(0);

        /* renamed from: q  reason: collision with root package name */
        private static final String f11866q = oe.w0.B0(1);

        /* renamed from: r  reason: collision with root package name */
        private static final String f11867r = oe.w0.B0(2);

        /* renamed from: s  reason: collision with root package name */
        public static final g.a f11868s = new g.a() { // from class: mc.i0
            @Override // com.google.android.exoplayer2.g.a
            public final com.google.android.exoplayer2.g a(Bundle bundle) {
                MediaItem.i d10;
                d10 = new MediaItem.i.a().f((Uri) bundle.getParcelable(MediaItem.i.f11865p)).g(bundle.getString(MediaItem.i.f11866q)).e(bundle.getBundle(MediaItem.i.f11867r)).d();
                return d10;
            }
        };

        /* renamed from: d  reason: collision with root package name */
        public final Uri f11869d;

        /* renamed from: e  reason: collision with root package name */
        public final String f11870e;

        /* renamed from: i  reason: collision with root package name */
        public final Bundle f11871i;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class a {

            /* renamed from: a  reason: collision with root package name */
            private Uri f11872a;

            /* renamed from: b  reason: collision with root package name */
            private String f11873b;

            /* renamed from: c  reason: collision with root package name */
            private Bundle f11874c;

            public i d() {
                return new i(this);
            }

            public a e(Bundle bundle) {
                this.f11874c = bundle;
                return this;
            }

            public a f(Uri uri) {
                this.f11872a = uri;
                return this;
            }

            public a g(String str) {
                this.f11873b = str;
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
            if (oe.w0.c(this.f11869d, iVar.f11869d) && oe.w0.c(this.f11870e, iVar.f11870e)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int hashCode;
            Uri uri = this.f11869d;
            int i10 = 0;
            if (uri == null) {
                hashCode = 0;
            } else {
                hashCode = uri.hashCode();
            }
            int i11 = hashCode * 31;
            String str = this.f11870e;
            if (str != null) {
                i10 = str.hashCode();
            }
            return i11 + i10;
        }

        private i(a aVar) {
            this.f11869d = aVar.f11872a;
            this.f11870e = aVar.f11873b;
            this.f11871i = aVar.f11874c;
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
        private static final String f11875s = oe.w0.B0(0);

        /* renamed from: t  reason: collision with root package name */
        private static final String f11876t = oe.w0.B0(1);

        /* renamed from: u  reason: collision with root package name */
        private static final String f11877u = oe.w0.B0(2);

        /* renamed from: v  reason: collision with root package name */
        private static final String f11878v = oe.w0.B0(3);

        /* renamed from: w  reason: collision with root package name */
        private static final String f11879w = oe.w0.B0(4);

        /* renamed from: x  reason: collision with root package name */
        private static final String f11880x = oe.w0.B0(5);

        /* renamed from: y  reason: collision with root package name */
        private static final String f11881y = oe.w0.B0(6);

        /* renamed from: z  reason: collision with root package name */
        public static final g.a f11882z = new g.a() { // from class: mc.j0
            @Override // com.google.android.exoplayer2.g.a
            public final com.google.android.exoplayer2.g a(Bundle bundle) {
                MediaItem.k c10;
                c10 = MediaItem.k.c(bundle);
                return c10;
            }
        };

        /* renamed from: d  reason: collision with root package name */
        public final Uri f11883d;

        /* renamed from: e  reason: collision with root package name */
        public final String f11884e;

        /* renamed from: i  reason: collision with root package name */
        public final String f11885i;

        /* renamed from: o  reason: collision with root package name */
        public final int f11886o;

        /* renamed from: p  reason: collision with root package name */
        public final int f11887p;

        /* renamed from: q  reason: collision with root package name */
        public final String f11888q;

        /* renamed from: r  reason: collision with root package name */
        public final String f11889r;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class a {

            /* renamed from: a  reason: collision with root package name */
            private Uri f11890a;

            /* renamed from: b  reason: collision with root package name */
            private String f11891b;

            /* renamed from: c  reason: collision with root package name */
            private String f11892c;

            /* renamed from: d  reason: collision with root package name */
            private int f11893d;

            /* renamed from: e  reason: collision with root package name */
            private int f11894e;

            /* renamed from: f  reason: collision with root package name */
            private String f11895f;

            /* renamed from: g  reason: collision with root package name */
            private String f11896g;

            /* JADX INFO: Access modifiers changed from: private */
            public j j() {
                return new j(this);
            }

            public k i() {
                return new k(this);
            }

            public a k(String str) {
                this.f11896g = str;
                return this;
            }

            public a l(String str) {
                this.f11895f = str;
                return this;
            }

            public a m(String str) {
                this.f11892c = str;
                return this;
            }

            public a n(String str) {
                this.f11891b = str;
                return this;
            }

            public a o(int i10) {
                this.f11894e = i10;
                return this;
            }

            public a p(int i10) {
                this.f11893d = i10;
                return this;
            }

            public a(Uri uri) {
                this.f11890a = uri;
            }

            private a(k kVar) {
                this.f11890a = kVar.f11883d;
                this.f11891b = kVar.f11884e;
                this.f11892c = kVar.f11885i;
                this.f11893d = kVar.f11886o;
                this.f11894e = kVar.f11887p;
                this.f11895f = kVar.f11888q;
                this.f11896g = kVar.f11889r;
            }
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static k c(Bundle bundle) {
            String string = bundle.getString(f11876t);
            String string2 = bundle.getString(f11877u);
            int i10 = bundle.getInt(f11878v, 0);
            int i11 = bundle.getInt(f11879w, 0);
            String string3 = bundle.getString(f11880x);
            return new a((Uri) oe.a.e((Uri) bundle.getParcelable(f11875s))).n(string).m(string2).p(i10).o(i11).l(string3).k(bundle.getString(f11881y)).i();
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
            if (this.f11883d.equals(kVar.f11883d) && oe.w0.c(this.f11884e, kVar.f11884e) && oe.w0.c(this.f11885i, kVar.f11885i) && this.f11886o == kVar.f11886o && this.f11887p == kVar.f11887p && oe.w0.c(this.f11888q, kVar.f11888q) && oe.w0.c(this.f11889r, kVar.f11889r)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4 = this.f11883d.hashCode() * 31;
            String str = this.f11884e;
            int i10 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int i11 = (hashCode4 + hashCode) * 31;
            String str2 = this.f11885i;
            if (str2 == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str2.hashCode();
            }
            int i12 = (((((i11 + hashCode2) * 31) + this.f11886o) * 31) + this.f11887p) * 31;
            String str3 = this.f11888q;
            if (str3 == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = str3.hashCode();
            }
            int i13 = (i12 + hashCode3) * 31;
            String str4 = this.f11889r;
            if (str4 != null) {
                i10 = str4.hashCode();
            }
            return i13 + i10;
        }

        private k(a aVar) {
            this.f11883d = aVar.f11890a;
            this.f11884e = aVar.f11891b;
            this.f11885i = aVar.f11892c;
            this.f11886o = aVar.f11893d;
            this.f11887p = aVar.f11894e;
            this.f11888q = aVar.f11895f;
            this.f11889r = aVar.f11896g;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static MediaItem b(Bundle bundle) {
        g gVar;
        MediaMetadata mediaMetadata;
        e eVar;
        i iVar;
        h hVar;
        String str = (String) oe.a.e(bundle.getString(f11758u, ""));
        Bundle bundle2 = bundle.getBundle(f11759v);
        if (bundle2 == null) {
            gVar = g.f11832q;
        } else {
            gVar = (g) g.f11838w.a(bundle2);
        }
        g gVar2 = gVar;
        Bundle bundle3 = bundle.getBundle(f11760w);
        if (bundle3 == null) {
            mediaMetadata = MediaMetadata.T;
        } else {
            mediaMetadata = (MediaMetadata) MediaMetadata.B0.a(bundle3);
        }
        MediaMetadata mediaMetadata2 = mediaMetadata;
        Bundle bundle4 = bundle.getBundle(f11761x);
        if (bundle4 == null) {
            eVar = e.f11808x;
        } else {
            eVar = (e) d.f11797w.a(bundle4);
        }
        e eVar2 = eVar;
        Bundle bundle5 = bundle.getBundle(f11762y);
        if (bundle5 == null) {
            iVar = i.f11864o;
        } else {
            iVar = (i) i.f11868s.a(bundle5);
        }
        i iVar2 = iVar;
        Bundle bundle6 = bundle.getBundle(f11763z);
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
        if (oe.w0.c(this.f11764d, mediaItem.f11764d) && this.f11769q.equals(mediaItem.f11769q) && oe.w0.c(this.f11765e, mediaItem.f11765e) && oe.w0.c(this.f11767o, mediaItem.f11767o) && oe.w0.c(this.f11768p, mediaItem.f11768p) && oe.w0.c(this.f11771s, mediaItem.f11771s)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int hashCode = this.f11764d.hashCode() * 31;
        h hVar = this.f11765e;
        if (hVar != null) {
            i10 = hVar.hashCode();
        } else {
            i10 = 0;
        }
        return ((((((((hashCode + i10) * 31) + this.f11767o.hashCode()) * 31) + this.f11769q.hashCode()) * 31) + this.f11768p.hashCode()) * 31) + this.f11771s.hashCode();
    }

    private MediaItem(String str, e eVar, h hVar, g gVar, MediaMetadata mediaMetadata, i iVar) {
        this.f11764d = str;
        this.f11765e = hVar;
        this.f11766i = hVar;
        this.f11767o = gVar;
        this.f11768p = mediaMetadata;
        this.f11769q = eVar;
        this.f11770r = eVar;
        this.f11771s = iVar;
    }
}
