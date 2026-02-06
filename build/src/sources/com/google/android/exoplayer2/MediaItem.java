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
import ni.s;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class MediaItem implements com.google.android.exoplayer2.g {

    /* renamed from: d  reason: collision with root package name */
    public final String f11624d;

    /* renamed from: e  reason: collision with root package name */
    public final h f11625e;

    /* renamed from: i  reason: collision with root package name */
    public final h f11626i;

    /* renamed from: o  reason: collision with root package name */
    public final g f11627o;

    /* renamed from: p  reason: collision with root package name */
    public final MediaMetadata f11628p;

    /* renamed from: q  reason: collision with root package name */
    public final d f11629q;

    /* renamed from: r  reason: collision with root package name */
    public final e f11630r;

    /* renamed from: s  reason: collision with root package name */
    public final i f11631s;

    /* renamed from: t  reason: collision with root package name */
    public static final MediaItem f11617t = new c().a();

    /* renamed from: u  reason: collision with root package name */
    private static final String f11618u = ne.w0.B0(0);

    /* renamed from: v  reason: collision with root package name */
    private static final String f11619v = ne.w0.B0(1);

    /* renamed from: w  reason: collision with root package name */
    private static final String f11620w = ne.w0.B0(2);

    /* renamed from: x  reason: collision with root package name */
    private static final String f11621x = ne.w0.B0(3);

    /* renamed from: y  reason: collision with root package name */
    private static final String f11622y = ne.w0.B0(4);

    /* renamed from: z  reason: collision with root package name */
    private static final String f11623z = ne.w0.B0(5);
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
        private static final String f11632i = ne.w0.B0(0);

        /* renamed from: o  reason: collision with root package name */
        public static final g.a f11633o = new g.a() { // from class: lc.c0
            @Override // com.google.android.exoplayer2.g.a
            public final com.google.android.exoplayer2.g a(Bundle bundle) {
                MediaItem.b b10;
                b10 = MediaItem.b.b(bundle);
                return b10;
            }
        };

        /* renamed from: d  reason: collision with root package name */
        public final Uri f11634d;

        /* renamed from: e  reason: collision with root package name */
        public final Object f11635e;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class a {

            /* renamed from: a  reason: collision with root package name */
            private Uri f11636a;

            /* renamed from: b  reason: collision with root package name */
            private Object f11637b;

            public a(Uri uri) {
                this.f11636a = uri;
            }

            public b c() {
                return new b(this);
            }
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static b b(Bundle bundle) {
            Uri uri = (Uri) bundle.getParcelable(f11632i);
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
            if (this.f11634d.equals(bVar.f11634d) && ne.w0.c(this.f11635e, bVar.f11635e)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int i10;
            int hashCode = this.f11634d.hashCode() * 31;
            Object obj = this.f11635e;
            if (obj != null) {
                i10 = obj.hashCode();
            } else {
                i10 = 0;
            }
            return hashCode + i10;
        }

        private b(a aVar) {
            this.f11634d = aVar.f11636a;
            this.f11635e = aVar.f11637b;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c {

        /* renamed from: a  reason: collision with root package name */
        private String f11638a;

        /* renamed from: b  reason: collision with root package name */
        private Uri f11639b;

        /* renamed from: c  reason: collision with root package name */
        private String f11640c;

        /* renamed from: g  reason: collision with root package name */
        private String f11644g;

        /* renamed from: i  reason: collision with root package name */
        private b f11646i;

        /* renamed from: j  reason: collision with root package name */
        private Object f11647j;

        /* renamed from: k  reason: collision with root package name */
        private MediaMetadata f11648k;

        /* renamed from: d  reason: collision with root package name */
        private d.a f11641d = new d.a();

        /* renamed from: e  reason: collision with root package name */
        private f.a f11642e = new f.a();

        /* renamed from: f  reason: collision with root package name */
        private List f11643f = Collections.EMPTY_LIST;

        /* renamed from: h  reason: collision with root package name */
        private ni.s f11645h = ni.s.t();

        /* renamed from: l  reason: collision with root package name */
        private g.a f11649l = new g.a();

        /* renamed from: m  reason: collision with root package name */
        private i f11650m = i.f11724o;

        public MediaItem a() {
            boolean z10;
            h hVar;
            if (this.f11642e.f11685b != null && this.f11642e.f11684a == null) {
                z10 = false;
            } else {
                z10 = true;
            }
            ne.a.g(z10);
            Uri uri = this.f11639b;
            f fVar = null;
            if (uri != null) {
                String str = this.f11640c;
                if (this.f11642e.f11684a != null) {
                    fVar = this.f11642e.i();
                }
                hVar = new h(uri, str, fVar, this.f11646i, this.f11643f, this.f11644g, this.f11645h, this.f11647j);
            } else {
                hVar = null;
            }
            String str2 = this.f11638a;
            if (str2 == null) {
                str2 = "";
            }
            String str3 = str2;
            e g10 = this.f11641d.g();
            g f10 = this.f11649l.f();
            MediaMetadata mediaMetadata = this.f11648k;
            if (mediaMetadata == null) {
                mediaMetadata = MediaMetadata.T;
            }
            return new MediaItem(str3, g10, hVar, f10, mediaMetadata, this.f11650m);
        }

        public c b(String str) {
            this.f11638a = (String) ne.a.e(str);
            return this;
        }

        public c c(List list) {
            this.f11645h = ni.s.o(list);
            return this;
        }

        public c d(Object obj) {
            this.f11647j = obj;
            return this;
        }

        public c e(Uri uri) {
            this.f11639b = uri;
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
        public static final d f11651q = new a().f();

        /* renamed from: r  reason: collision with root package name */
        private static final String f11652r = ne.w0.B0(0);

        /* renamed from: s  reason: collision with root package name */
        private static final String f11653s = ne.w0.B0(1);

        /* renamed from: t  reason: collision with root package name */
        private static final String f11654t = ne.w0.B0(2);

        /* renamed from: u  reason: collision with root package name */
        private static final String f11655u = ne.w0.B0(3);

        /* renamed from: v  reason: collision with root package name */
        private static final String f11656v = ne.w0.B0(4);

        /* renamed from: w  reason: collision with root package name */
        public static final g.a f11657w = new g.a() { // from class: lc.d0
            @Override // com.google.android.exoplayer2.g.a
            public final com.google.android.exoplayer2.g a(Bundle bundle) {
                return MediaItem.d.a(bundle);
            }
        };

        /* renamed from: d  reason: collision with root package name */
        public final long f11658d;

        /* renamed from: e  reason: collision with root package name */
        public final long f11659e;

        /* renamed from: i  reason: collision with root package name */
        public final boolean f11660i;

        /* renamed from: o  reason: collision with root package name */
        public final boolean f11661o;

        /* renamed from: p  reason: collision with root package name */
        public final boolean f11662p;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class a {

            /* renamed from: a  reason: collision with root package name */
            private long f11663a;

            /* renamed from: b  reason: collision with root package name */
            private long f11664b = Long.MIN_VALUE;

            /* renamed from: c  reason: collision with root package name */
            private boolean f11665c;

            /* renamed from: d  reason: collision with root package name */
            private boolean f11666d;

            /* renamed from: e  reason: collision with root package name */
            private boolean f11667e;

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
                this.f11664b = j10;
                return this;
            }

            public a i(boolean z10) {
                this.f11666d = z10;
                return this;
            }

            public a j(boolean z10) {
                this.f11665c = z10;
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
                this.f11663a = j10;
                return this;
            }

            public a l(boolean z10) {
                this.f11667e = z10;
                return this;
            }
        }

        public static /* synthetic */ e a(Bundle bundle) {
            a aVar = new a();
            String str = f11652r;
            d dVar = f11651q;
            return aVar.k(bundle.getLong(str, dVar.f11658d)).h(bundle.getLong(f11653s, dVar.f11659e)).j(bundle.getBoolean(f11654t, dVar.f11660i)).i(bundle.getBoolean(f11655u, dVar.f11661o)).l(bundle.getBoolean(f11656v, dVar.f11662p)).g();
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof d)) {
                return false;
            }
            d dVar = (d) obj;
            if (this.f11658d == dVar.f11658d && this.f11659e == dVar.f11659e && this.f11660i == dVar.f11660i && this.f11661o == dVar.f11661o && this.f11662p == dVar.f11662p) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            long j10 = this.f11658d;
            long j11 = this.f11659e;
            return (((((((((int) (j10 ^ (j10 >>> 32))) * 31) + ((int) ((j11 >>> 32) ^ j11))) * 31) + (this.f11660i ? 1 : 0)) * 31) + (this.f11661o ? 1 : 0)) * 31) + (this.f11662p ? 1 : 0);
        }

        private d(a aVar) {
            this.f11658d = aVar.f11663a;
            this.f11659e = aVar.f11664b;
            this.f11660i = aVar.f11665c;
            this.f11661o = aVar.f11666d;
            this.f11662p = aVar.f11667e;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class e extends d {

        /* renamed from: x  reason: collision with root package name */
        public static final e f11668x = new d.a().g();

        private e(d.a aVar) {
            super(aVar);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class f implements com.google.android.exoplayer2.g {

        /* renamed from: d  reason: collision with root package name */
        public final UUID f11673d;

        /* renamed from: e  reason: collision with root package name */
        public final UUID f11674e;

        /* renamed from: i  reason: collision with root package name */
        public final Uri f11675i;

        /* renamed from: o  reason: collision with root package name */
        public final ni.t f11676o;

        /* renamed from: p  reason: collision with root package name */
        public final ni.t f11677p;

        /* renamed from: q  reason: collision with root package name */
        public final boolean f11678q;

        /* renamed from: r  reason: collision with root package name */
        public final boolean f11679r;

        /* renamed from: s  reason: collision with root package name */
        public final boolean f11680s;

        /* renamed from: t  reason: collision with root package name */
        public final ni.s f11681t;

        /* renamed from: u  reason: collision with root package name */
        public final ni.s f11682u;

        /* renamed from: v  reason: collision with root package name */
        private final byte[] f11683v;

        /* renamed from: w  reason: collision with root package name */
        private static final String f11669w = ne.w0.B0(0);

        /* renamed from: x  reason: collision with root package name */
        private static final String f11670x = ne.w0.B0(1);

        /* renamed from: y  reason: collision with root package name */
        private static final String f11671y = ne.w0.B0(2);

        /* renamed from: z  reason: collision with root package name */
        private static final String f11672z = ne.w0.B0(3);
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
            private UUID f11684a;

            /* renamed from: b  reason: collision with root package name */
            private Uri f11685b;

            /* renamed from: c  reason: collision with root package name */
            private ni.t f11686c;

            /* renamed from: d  reason: collision with root package name */
            private boolean f11687d;

            /* renamed from: e  reason: collision with root package name */
            private boolean f11688e;

            /* renamed from: f  reason: collision with root package name */
            private boolean f11689f;

            /* renamed from: g  reason: collision with root package name */
            private ni.s f11690g;

            /* renamed from: h  reason: collision with root package name */
            private byte[] f11691h;

            public f i() {
                return new f(this);
            }

            public a j(boolean z10) {
                this.f11689f = z10;
                return this;
            }

            public a k(List list) {
                this.f11690g = ni.s.o(list);
                return this;
            }

            public a l(byte[] bArr) {
                byte[] bArr2;
                if (bArr != null) {
                    bArr2 = Arrays.copyOf(bArr, bArr.length);
                } else {
                    bArr2 = null;
                }
                this.f11691h = bArr2;
                return this;
            }

            public a m(Map map) {
                this.f11686c = ni.t.c(map);
                return this;
            }

            public a n(Uri uri) {
                this.f11685b = uri;
                return this;
            }

            public a o(boolean z10) {
                this.f11687d = z10;
                return this;
            }

            public a p(boolean z10) {
                this.f11688e = z10;
                return this;
            }

            public a(UUID uuid) {
                this.f11684a = uuid;
                this.f11686c = ni.t.j();
                this.f11690g = ni.s.t();
            }

            private a() {
                this.f11686c = ni.t.j();
                this.f11690g = ni.s.t();
            }
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static f b(Bundle bundle) {
            UUID fromString = UUID.fromString((String) ne.a.e(bundle.getString(f11669w)));
            ni.t b10 = ne.d.b(ne.d.f(bundle, f11671y, Bundle.EMPTY));
            boolean z10 = bundle.getBoolean(f11672z, false);
            boolean z11 = bundle.getBoolean(A, false);
            boolean z12 = bundle.getBoolean(B, false);
            ni.s o10 = ni.s.o(ne.d.g(bundle, C, new ArrayList()));
            return new a(fromString).n((Uri) bundle.getParcelable(f11670x)).m(b10).o(z10).j(z12).p(z11).k(o10).l(bundle.getByteArray(D)).i();
        }

        public byte[] c() {
            byte[] bArr = this.f11683v;
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
            if (this.f11673d.equals(fVar.f11673d) && ne.w0.c(this.f11675i, fVar.f11675i) && ne.w0.c(this.f11677p, fVar.f11677p) && this.f11678q == fVar.f11678q && this.f11680s == fVar.f11680s && this.f11679r == fVar.f11679r && this.f11682u.equals(fVar.f11682u) && Arrays.equals(this.f11683v, fVar.f11683v)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int i10;
            int hashCode = this.f11673d.hashCode() * 31;
            Uri uri = this.f11675i;
            if (uri != null) {
                i10 = uri.hashCode();
            } else {
                i10 = 0;
            }
            return ((((((((((((hashCode + i10) * 31) + this.f11677p.hashCode()) * 31) + (this.f11678q ? 1 : 0)) * 31) + (this.f11680s ? 1 : 0)) * 31) + (this.f11679r ? 1 : 0)) * 31) + this.f11682u.hashCode()) * 31) + Arrays.hashCode(this.f11683v);
        }

        private f(a aVar) {
            ne.a.g((aVar.f11689f && aVar.f11685b == null) ? false : true);
            UUID uuid = (UUID) ne.a.e(aVar.f11684a);
            this.f11673d = uuid;
            this.f11674e = uuid;
            this.f11675i = aVar.f11685b;
            this.f11676o = aVar.f11686c;
            this.f11677p = aVar.f11686c;
            this.f11678q = aVar.f11687d;
            this.f11680s = aVar.f11689f;
            this.f11679r = aVar.f11688e;
            this.f11681t = aVar.f11690g;
            this.f11682u = aVar.f11690g;
            this.f11683v = aVar.f11691h != null ? Arrays.copyOf(aVar.f11691h, aVar.f11691h.length) : null;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class g implements com.google.android.exoplayer2.g {

        /* renamed from: q  reason: collision with root package name */
        public static final g f11692q = new a().f();

        /* renamed from: r  reason: collision with root package name */
        private static final String f11693r = ne.w0.B0(0);

        /* renamed from: s  reason: collision with root package name */
        private static final String f11694s = ne.w0.B0(1);

        /* renamed from: t  reason: collision with root package name */
        private static final String f11695t = ne.w0.B0(2);

        /* renamed from: u  reason: collision with root package name */
        private static final String f11696u = ne.w0.B0(3);

        /* renamed from: v  reason: collision with root package name */
        private static final String f11697v = ne.w0.B0(4);

        /* renamed from: w  reason: collision with root package name */
        public static final g.a f11698w = new g.a() { // from class: lc.f0
            @Override // com.google.android.exoplayer2.g.a
            public final com.google.android.exoplayer2.g a(Bundle bundle) {
                return MediaItem.g.a(bundle);
            }
        };

        /* renamed from: d  reason: collision with root package name */
        public final long f11699d;

        /* renamed from: e  reason: collision with root package name */
        public final long f11700e;

        /* renamed from: i  reason: collision with root package name */
        public final long f11701i;

        /* renamed from: o  reason: collision with root package name */
        public final float f11702o;

        /* renamed from: p  reason: collision with root package name */
        public final float f11703p;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class a {

            /* renamed from: a  reason: collision with root package name */
            private long f11704a = -9223372036854775807L;

            /* renamed from: b  reason: collision with root package name */
            private long f11705b = -9223372036854775807L;

            /* renamed from: c  reason: collision with root package name */
            private long f11706c = -9223372036854775807L;

            /* renamed from: d  reason: collision with root package name */
            private float f11707d = -3.4028235E38f;

            /* renamed from: e  reason: collision with root package name */
            private float f11708e = -3.4028235E38f;

            public g f() {
                return new g(this);
            }

            public a g(long j10) {
                this.f11706c = j10;
                return this;
            }

            public a h(float f10) {
                this.f11708e = f10;
                return this;
            }

            public a i(long j10) {
                this.f11705b = j10;
                return this;
            }

            public a j(float f10) {
                this.f11707d = f10;
                return this;
            }

            public a k(long j10) {
                this.f11704a = j10;
                return this;
            }
        }

        public static /* synthetic */ g a(Bundle bundle) {
            String str = f11693r;
            g gVar = f11692q;
            return new g(bundle.getLong(str, gVar.f11699d), bundle.getLong(f11694s, gVar.f11700e), bundle.getLong(f11695t, gVar.f11701i), bundle.getFloat(f11696u, gVar.f11702o), bundle.getFloat(f11697v, gVar.f11703p));
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof g)) {
                return false;
            }
            g gVar = (g) obj;
            if (this.f11699d == gVar.f11699d && this.f11700e == gVar.f11700e && this.f11701i == gVar.f11701i && this.f11702o == gVar.f11702o && this.f11703p == gVar.f11703p) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int i10;
            long j10 = this.f11699d;
            long j11 = this.f11700e;
            long j12 = this.f11701i;
            int i11 = ((((((int) (j10 ^ (j10 >>> 32))) * 31) + ((int) (j11 ^ (j11 >>> 32)))) * 31) + ((int) ((j12 >>> 32) ^ j12))) * 31;
            float f10 = this.f11702o;
            int i12 = 0;
            if (f10 != 0.0f) {
                i10 = Float.floatToIntBits(f10);
            } else {
                i10 = 0;
            }
            int i13 = (i11 + i10) * 31;
            float f11 = this.f11703p;
            if (f11 != 0.0f) {
                i12 = Float.floatToIntBits(f11);
            }
            return i13 + i12;
        }

        private g(a aVar) {
            this(aVar.f11704a, aVar.f11705b, aVar.f11706c, aVar.f11707d, aVar.f11708e);
        }

        public g(long j10, long j11, long j12, float f10, float f11) {
            this.f11699d = j10;
            this.f11700e = j11;
            this.f11701i = j12;
            this.f11702o = f10;
            this.f11703p = f11;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class h implements com.google.android.exoplayer2.g {

        /* renamed from: d  reason: collision with root package name */
        public final Uri f11715d;

        /* renamed from: e  reason: collision with root package name */
        public final String f11716e;

        /* renamed from: i  reason: collision with root package name */
        public final f f11717i;

        /* renamed from: o  reason: collision with root package name */
        public final b f11718o;

        /* renamed from: p  reason: collision with root package name */
        public final List f11719p;

        /* renamed from: q  reason: collision with root package name */
        public final String f11720q;

        /* renamed from: r  reason: collision with root package name */
        public final ni.s f11721r;

        /* renamed from: s  reason: collision with root package name */
        public final List f11722s;

        /* renamed from: t  reason: collision with root package name */
        public final Object f11723t;

        /* renamed from: u  reason: collision with root package name */
        private static final String f11709u = ne.w0.B0(0);

        /* renamed from: v  reason: collision with root package name */
        private static final String f11710v = ne.w0.B0(1);

        /* renamed from: w  reason: collision with root package name */
        private static final String f11711w = ne.w0.B0(2);

        /* renamed from: x  reason: collision with root package name */
        private static final String f11712x = ne.w0.B0(3);

        /* renamed from: y  reason: collision with root package name */
        private static final String f11713y = ne.w0.B0(4);

        /* renamed from: z  reason: collision with root package name */
        private static final String f11714z = ne.w0.B0(5);
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
            ni.s d10;
            ni.s d11;
            Bundle bundle2 = bundle.getBundle(f11711w);
            b bVar = null;
            if (bundle2 == null) {
                fVar = null;
            } else {
                fVar = (f) f.E.a(bundle2);
            }
            Bundle bundle3 = bundle.getBundle(f11712x);
            if (bundle3 != null) {
                bVar = (b) b.f11633o.a(bundle3);
            }
            b bVar2 = bVar;
            ArrayList parcelableArrayList = bundle.getParcelableArrayList(f11713y);
            if (parcelableArrayList == null) {
                d10 = ni.s.t();
            } else {
                d10 = ne.d.d(new g.a() { // from class: lc.h0
                    @Override // com.google.android.exoplayer2.g.a
                    public final com.google.android.exoplayer2.g a(Bundle bundle4) {
                        return pd.c.d(bundle4);
                    }
                }, parcelableArrayList);
            }
            ni.s sVar = d10;
            ArrayList parcelableArrayList2 = bundle.getParcelableArrayList(A);
            if (parcelableArrayList2 == null) {
                d11 = ni.s.t();
            } else {
                d11 = ne.d.d(k.f11742z, parcelableArrayList2);
            }
            return new h((Uri) ne.a.e((Uri) bundle.getParcelable(f11709u)), bundle.getString(f11710v), fVar, bVar2, sVar, bundle.getString(f11714z), d11, null);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof h)) {
                return false;
            }
            h hVar = (h) obj;
            if (this.f11715d.equals(hVar.f11715d) && ne.w0.c(this.f11716e, hVar.f11716e) && ne.w0.c(this.f11717i, hVar.f11717i) && ne.w0.c(this.f11718o, hVar.f11718o) && this.f11719p.equals(hVar.f11719p) && ne.w0.c(this.f11720q, hVar.f11720q) && this.f11721r.equals(hVar.f11721r) && ne.w0.c(this.f11723t, hVar.f11723t)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4;
            int hashCode5 = this.f11715d.hashCode() * 31;
            String str = this.f11716e;
            int i10 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int i11 = (hashCode5 + hashCode) * 31;
            f fVar = this.f11717i;
            if (fVar == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = fVar.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            b bVar = this.f11718o;
            if (bVar == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = bVar.hashCode();
            }
            int hashCode6 = (((i12 + hashCode3) * 31) + this.f11719p.hashCode()) * 31;
            String str2 = this.f11720q;
            if (str2 == null) {
                hashCode4 = 0;
            } else {
                hashCode4 = str2.hashCode();
            }
            int hashCode7 = (((hashCode6 + hashCode4) * 31) + this.f11721r.hashCode()) * 31;
            Object obj = this.f11723t;
            if (obj != null) {
                i10 = obj.hashCode();
            }
            return hashCode7 + i10;
        }

        private h(Uri uri, String str, f fVar, b bVar, List list, String str2, ni.s sVar, Object obj) {
            this.f11715d = uri;
            this.f11716e = str;
            this.f11717i = fVar;
            this.f11718o = bVar;
            this.f11719p = list;
            this.f11720q = str2;
            this.f11721r = sVar;
            s.a j10 = ni.s.j();
            for (int i10 = 0; i10 < sVar.size(); i10++) {
                j10.a(((k) sVar.get(i10)).b().j());
            }
            this.f11722s = j10.k();
            this.f11723t = obj;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class i implements com.google.android.exoplayer2.g {

        /* renamed from: o  reason: collision with root package name */
        public static final i f11724o = new a().d();

        /* renamed from: p  reason: collision with root package name */
        private static final String f11725p = ne.w0.B0(0);

        /* renamed from: q  reason: collision with root package name */
        private static final String f11726q = ne.w0.B0(1);

        /* renamed from: r  reason: collision with root package name */
        private static final String f11727r = ne.w0.B0(2);

        /* renamed from: s  reason: collision with root package name */
        public static final g.a f11728s = new g.a() { // from class: lc.i0
            @Override // com.google.android.exoplayer2.g.a
            public final com.google.android.exoplayer2.g a(Bundle bundle) {
                MediaItem.i d10;
                d10 = new MediaItem.i.a().f((Uri) bundle.getParcelable(MediaItem.i.f11725p)).g(bundle.getString(MediaItem.i.f11726q)).e(bundle.getBundle(MediaItem.i.f11727r)).d();
                return d10;
            }
        };

        /* renamed from: d  reason: collision with root package name */
        public final Uri f11729d;

        /* renamed from: e  reason: collision with root package name */
        public final String f11730e;

        /* renamed from: i  reason: collision with root package name */
        public final Bundle f11731i;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class a {

            /* renamed from: a  reason: collision with root package name */
            private Uri f11732a;

            /* renamed from: b  reason: collision with root package name */
            private String f11733b;

            /* renamed from: c  reason: collision with root package name */
            private Bundle f11734c;

            public i d() {
                return new i(this);
            }

            public a e(Bundle bundle) {
                this.f11734c = bundle;
                return this;
            }

            public a f(Uri uri) {
                this.f11732a = uri;
                return this;
            }

            public a g(String str) {
                this.f11733b = str;
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
            if (ne.w0.c(this.f11729d, iVar.f11729d) && ne.w0.c(this.f11730e, iVar.f11730e)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int hashCode;
            Uri uri = this.f11729d;
            int i10 = 0;
            if (uri == null) {
                hashCode = 0;
            } else {
                hashCode = uri.hashCode();
            }
            int i11 = hashCode * 31;
            String str = this.f11730e;
            if (str != null) {
                i10 = str.hashCode();
            }
            return i11 + i10;
        }

        private i(a aVar) {
            this.f11729d = aVar.f11732a;
            this.f11730e = aVar.f11733b;
            this.f11731i = aVar.f11734c;
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
        private static final String f11735s = ne.w0.B0(0);

        /* renamed from: t  reason: collision with root package name */
        private static final String f11736t = ne.w0.B0(1);

        /* renamed from: u  reason: collision with root package name */
        private static final String f11737u = ne.w0.B0(2);

        /* renamed from: v  reason: collision with root package name */
        private static final String f11738v = ne.w0.B0(3);

        /* renamed from: w  reason: collision with root package name */
        private static final String f11739w = ne.w0.B0(4);

        /* renamed from: x  reason: collision with root package name */
        private static final String f11740x = ne.w0.B0(5);

        /* renamed from: y  reason: collision with root package name */
        private static final String f11741y = ne.w0.B0(6);

        /* renamed from: z  reason: collision with root package name */
        public static final g.a f11742z = new g.a() { // from class: lc.j0
            @Override // com.google.android.exoplayer2.g.a
            public final com.google.android.exoplayer2.g a(Bundle bundle) {
                MediaItem.k c10;
                c10 = MediaItem.k.c(bundle);
                return c10;
            }
        };

        /* renamed from: d  reason: collision with root package name */
        public final Uri f11743d;

        /* renamed from: e  reason: collision with root package name */
        public final String f11744e;

        /* renamed from: i  reason: collision with root package name */
        public final String f11745i;

        /* renamed from: o  reason: collision with root package name */
        public final int f11746o;

        /* renamed from: p  reason: collision with root package name */
        public final int f11747p;

        /* renamed from: q  reason: collision with root package name */
        public final String f11748q;

        /* renamed from: r  reason: collision with root package name */
        public final String f11749r;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class a {

            /* renamed from: a  reason: collision with root package name */
            private Uri f11750a;

            /* renamed from: b  reason: collision with root package name */
            private String f11751b;

            /* renamed from: c  reason: collision with root package name */
            private String f11752c;

            /* renamed from: d  reason: collision with root package name */
            private int f11753d;

            /* renamed from: e  reason: collision with root package name */
            private int f11754e;

            /* renamed from: f  reason: collision with root package name */
            private String f11755f;

            /* renamed from: g  reason: collision with root package name */
            private String f11756g;

            /* JADX INFO: Access modifiers changed from: private */
            public j j() {
                return new j(this);
            }

            public k i() {
                return new k(this);
            }

            public a k(String str) {
                this.f11756g = str;
                return this;
            }

            public a l(String str) {
                this.f11755f = str;
                return this;
            }

            public a m(String str) {
                this.f11752c = str;
                return this;
            }

            public a n(String str) {
                this.f11751b = str;
                return this;
            }

            public a o(int i10) {
                this.f11754e = i10;
                return this;
            }

            public a p(int i10) {
                this.f11753d = i10;
                return this;
            }

            public a(Uri uri) {
                this.f11750a = uri;
            }

            private a(k kVar) {
                this.f11750a = kVar.f11743d;
                this.f11751b = kVar.f11744e;
                this.f11752c = kVar.f11745i;
                this.f11753d = kVar.f11746o;
                this.f11754e = kVar.f11747p;
                this.f11755f = kVar.f11748q;
                this.f11756g = kVar.f11749r;
            }
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static k c(Bundle bundle) {
            String string = bundle.getString(f11736t);
            String string2 = bundle.getString(f11737u);
            int i10 = bundle.getInt(f11738v, 0);
            int i11 = bundle.getInt(f11739w, 0);
            String string3 = bundle.getString(f11740x);
            return new a((Uri) ne.a.e((Uri) bundle.getParcelable(f11735s))).n(string).m(string2).p(i10).o(i11).l(string3).k(bundle.getString(f11741y)).i();
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
            if (this.f11743d.equals(kVar.f11743d) && ne.w0.c(this.f11744e, kVar.f11744e) && ne.w0.c(this.f11745i, kVar.f11745i) && this.f11746o == kVar.f11746o && this.f11747p == kVar.f11747p && ne.w0.c(this.f11748q, kVar.f11748q) && ne.w0.c(this.f11749r, kVar.f11749r)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4 = this.f11743d.hashCode() * 31;
            String str = this.f11744e;
            int i10 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int i11 = (hashCode4 + hashCode) * 31;
            String str2 = this.f11745i;
            if (str2 == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str2.hashCode();
            }
            int i12 = (((((i11 + hashCode2) * 31) + this.f11746o) * 31) + this.f11747p) * 31;
            String str3 = this.f11748q;
            if (str3 == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = str3.hashCode();
            }
            int i13 = (i12 + hashCode3) * 31;
            String str4 = this.f11749r;
            if (str4 != null) {
                i10 = str4.hashCode();
            }
            return i13 + i10;
        }

        private k(a aVar) {
            this.f11743d = aVar.f11750a;
            this.f11744e = aVar.f11751b;
            this.f11745i = aVar.f11752c;
            this.f11746o = aVar.f11753d;
            this.f11747p = aVar.f11754e;
            this.f11748q = aVar.f11755f;
            this.f11749r = aVar.f11756g;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static MediaItem b(Bundle bundle) {
        g gVar;
        MediaMetadata mediaMetadata;
        e eVar;
        i iVar;
        h hVar;
        String str = (String) ne.a.e(bundle.getString(f11618u, ""));
        Bundle bundle2 = bundle.getBundle(f11619v);
        if (bundle2 == null) {
            gVar = g.f11692q;
        } else {
            gVar = (g) g.f11698w.a(bundle2);
        }
        g gVar2 = gVar;
        Bundle bundle3 = bundle.getBundle(f11620w);
        if (bundle3 == null) {
            mediaMetadata = MediaMetadata.T;
        } else {
            mediaMetadata = (MediaMetadata) MediaMetadata.B0.a(bundle3);
        }
        MediaMetadata mediaMetadata2 = mediaMetadata;
        Bundle bundle4 = bundle.getBundle(f11621x);
        if (bundle4 == null) {
            eVar = e.f11668x;
        } else {
            eVar = (e) d.f11657w.a(bundle4);
        }
        e eVar2 = eVar;
        Bundle bundle5 = bundle.getBundle(f11622y);
        if (bundle5 == null) {
            iVar = i.f11724o;
        } else {
            iVar = (i) i.f11728s.a(bundle5);
        }
        i iVar2 = iVar;
        Bundle bundle6 = bundle.getBundle(f11623z);
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
        if (ne.w0.c(this.f11624d, mediaItem.f11624d) && this.f11629q.equals(mediaItem.f11629q) && ne.w0.c(this.f11625e, mediaItem.f11625e) && ne.w0.c(this.f11627o, mediaItem.f11627o) && ne.w0.c(this.f11628p, mediaItem.f11628p) && ne.w0.c(this.f11631s, mediaItem.f11631s)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int hashCode = this.f11624d.hashCode() * 31;
        h hVar = this.f11625e;
        if (hVar != null) {
            i10 = hVar.hashCode();
        } else {
            i10 = 0;
        }
        return ((((((((hashCode + i10) * 31) + this.f11627o.hashCode()) * 31) + this.f11629q.hashCode()) * 31) + this.f11628p.hashCode()) * 31) + this.f11631s.hashCode();
    }

    private MediaItem(String str, e eVar, h hVar, g gVar, MediaMetadata mediaMetadata, i iVar) {
        this.f11624d = str;
        this.f11625e = hVar;
        this.f11626i = hVar;
        this.f11627o = gVar;
        this.f11628p = mediaMetadata;
        this.f11629q = eVar;
        this.f11630r = eVar;
        this.f11631s = iVar;
    }
}
