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
    public final String f12341d;

    /* renamed from: e  reason: collision with root package name */
    public final h f12342e;

    /* renamed from: i  reason: collision with root package name */
    public final h f12343i;

    /* renamed from: o  reason: collision with root package name */
    public final g f12344o;

    /* renamed from: p  reason: collision with root package name */
    public final MediaMetadata f12345p;

    /* renamed from: q  reason: collision with root package name */
    public final d f12346q;

    /* renamed from: r  reason: collision with root package name */
    public final e f12347r;

    /* renamed from: s  reason: collision with root package name */
    public final i f12348s;

    /* renamed from: t  reason: collision with root package name */
    public static final MediaItem f12334t = new c().a();

    /* renamed from: u  reason: collision with root package name */
    private static final String f12335u = oe.w0.B0(0);

    /* renamed from: v  reason: collision with root package name */
    private static final String f12336v = oe.w0.B0(1);

    /* renamed from: w  reason: collision with root package name */
    private static final String f12337w = oe.w0.B0(2);

    /* renamed from: x  reason: collision with root package name */
    private static final String f12338x = oe.w0.B0(3);

    /* renamed from: y  reason: collision with root package name */
    private static final String f12339y = oe.w0.B0(4);

    /* renamed from: z  reason: collision with root package name */
    private static final String f12340z = oe.w0.B0(5);
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
        private static final String f12349i = oe.w0.B0(0);

        /* renamed from: o  reason: collision with root package name */
        public static final g.a f12350o = new g.a() { // from class: mc.c0
            @Override // com.google.android.exoplayer2.g.a
            public final com.google.android.exoplayer2.g a(Bundle bundle) {
                MediaItem.b b10;
                b10 = MediaItem.b.b(bundle);
                return b10;
            }
        };

        /* renamed from: d  reason: collision with root package name */
        public final Uri f12351d;

        /* renamed from: e  reason: collision with root package name */
        public final Object f12352e;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class a {

            /* renamed from: a  reason: collision with root package name */
            private Uri f12353a;

            /* renamed from: b  reason: collision with root package name */
            private Object f12354b;

            public a(Uri uri) {
                this.f12353a = uri;
            }

            public b c() {
                return new b(this);
            }
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static b b(Bundle bundle) {
            Uri uri = (Uri) bundle.getParcelable(f12349i);
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
            if (this.f12351d.equals(bVar.f12351d) && oe.w0.c(this.f12352e, bVar.f12352e)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int i10;
            int hashCode = this.f12351d.hashCode() * 31;
            Object obj = this.f12352e;
            if (obj != null) {
                i10 = obj.hashCode();
            } else {
                i10 = 0;
            }
            return hashCode + i10;
        }

        private b(a aVar) {
            this.f12351d = aVar.f12353a;
            this.f12352e = aVar.f12354b;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c {

        /* renamed from: a  reason: collision with root package name */
        private String f12355a;

        /* renamed from: b  reason: collision with root package name */
        private Uri f12356b;

        /* renamed from: c  reason: collision with root package name */
        private String f12357c;

        /* renamed from: g  reason: collision with root package name */
        private String f12361g;

        /* renamed from: i  reason: collision with root package name */
        private b f12363i;

        /* renamed from: j  reason: collision with root package name */
        private Object f12364j;

        /* renamed from: k  reason: collision with root package name */
        private MediaMetadata f12365k;

        /* renamed from: d  reason: collision with root package name */
        private d.a f12358d = new d.a();

        /* renamed from: e  reason: collision with root package name */
        private f.a f12359e = new f.a();

        /* renamed from: f  reason: collision with root package name */
        private List f12360f = Collections.EMPTY_LIST;

        /* renamed from: h  reason: collision with root package name */
        private qi.s f12362h = qi.s.t();

        /* renamed from: l  reason: collision with root package name */
        private g.a f12366l = new g.a();

        /* renamed from: m  reason: collision with root package name */
        private i f12367m = i.f12441o;

        public MediaItem a() {
            boolean z10;
            h hVar;
            if (this.f12359e.f12402b != null && this.f12359e.f12401a == null) {
                z10 = false;
            } else {
                z10 = true;
            }
            oe.a.g(z10);
            Uri uri = this.f12356b;
            f fVar = null;
            if (uri != null) {
                String str = this.f12357c;
                if (this.f12359e.f12401a != null) {
                    fVar = this.f12359e.i();
                }
                hVar = new h(uri, str, fVar, this.f12363i, this.f12360f, this.f12361g, this.f12362h, this.f12364j);
            } else {
                hVar = null;
            }
            String str2 = this.f12355a;
            if (str2 == null) {
                str2 = "";
            }
            String str3 = str2;
            e g10 = this.f12358d.g();
            g f10 = this.f12366l.f();
            MediaMetadata mediaMetadata = this.f12365k;
            if (mediaMetadata == null) {
                mediaMetadata = MediaMetadata.T;
            }
            return new MediaItem(str3, g10, hVar, f10, mediaMetadata, this.f12367m);
        }

        public c b(String str) {
            this.f12355a = (String) oe.a.e(str);
            return this;
        }

        public c c(List list) {
            this.f12362h = qi.s.o(list);
            return this;
        }

        public c d(Object obj) {
            this.f12364j = obj;
            return this;
        }

        public c e(Uri uri) {
            this.f12356b = uri;
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
        public static final d f12368q = new a().f();

        /* renamed from: r  reason: collision with root package name */
        private static final String f12369r = oe.w0.B0(0);

        /* renamed from: s  reason: collision with root package name */
        private static final String f12370s = oe.w0.B0(1);

        /* renamed from: t  reason: collision with root package name */
        private static final String f12371t = oe.w0.B0(2);

        /* renamed from: u  reason: collision with root package name */
        private static final String f12372u = oe.w0.B0(3);

        /* renamed from: v  reason: collision with root package name */
        private static final String f12373v = oe.w0.B0(4);

        /* renamed from: w  reason: collision with root package name */
        public static final g.a f12374w = new g.a() { // from class: mc.d0
            @Override // com.google.android.exoplayer2.g.a
            public final com.google.android.exoplayer2.g a(Bundle bundle) {
                return MediaItem.d.a(bundle);
            }
        };

        /* renamed from: d  reason: collision with root package name */
        public final long f12375d;

        /* renamed from: e  reason: collision with root package name */
        public final long f12376e;

        /* renamed from: i  reason: collision with root package name */
        public final boolean f12377i;

        /* renamed from: o  reason: collision with root package name */
        public final boolean f12378o;

        /* renamed from: p  reason: collision with root package name */
        public final boolean f12379p;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class a {

            /* renamed from: a  reason: collision with root package name */
            private long f12380a;

            /* renamed from: b  reason: collision with root package name */
            private long f12381b = Long.MIN_VALUE;

            /* renamed from: c  reason: collision with root package name */
            private boolean f12382c;

            /* renamed from: d  reason: collision with root package name */
            private boolean f12383d;

            /* renamed from: e  reason: collision with root package name */
            private boolean f12384e;

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
                this.f12381b = j10;
                return this;
            }

            public a i(boolean z10) {
                this.f12383d = z10;
                return this;
            }

            public a j(boolean z10) {
                this.f12382c = z10;
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
                this.f12380a = j10;
                return this;
            }

            public a l(boolean z10) {
                this.f12384e = z10;
                return this;
            }
        }

        public static /* synthetic */ e a(Bundle bundle) {
            a aVar = new a();
            String str = f12369r;
            d dVar = f12368q;
            return aVar.k(bundle.getLong(str, dVar.f12375d)).h(bundle.getLong(f12370s, dVar.f12376e)).j(bundle.getBoolean(f12371t, dVar.f12377i)).i(bundle.getBoolean(f12372u, dVar.f12378o)).l(bundle.getBoolean(f12373v, dVar.f12379p)).g();
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof d)) {
                return false;
            }
            d dVar = (d) obj;
            if (this.f12375d == dVar.f12375d && this.f12376e == dVar.f12376e && this.f12377i == dVar.f12377i && this.f12378o == dVar.f12378o && this.f12379p == dVar.f12379p) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            long j10 = this.f12375d;
            long j11 = this.f12376e;
            return (((((((((int) (j10 ^ (j10 >>> 32))) * 31) + ((int) ((j11 >>> 32) ^ j11))) * 31) + (this.f12377i ? 1 : 0)) * 31) + (this.f12378o ? 1 : 0)) * 31) + (this.f12379p ? 1 : 0);
        }

        private d(a aVar) {
            this.f12375d = aVar.f12380a;
            this.f12376e = aVar.f12381b;
            this.f12377i = aVar.f12382c;
            this.f12378o = aVar.f12383d;
            this.f12379p = aVar.f12384e;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class e extends d {

        /* renamed from: x  reason: collision with root package name */
        public static final e f12385x = new d.a().g();

        private e(d.a aVar) {
            super(aVar);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class f implements com.google.android.exoplayer2.g {

        /* renamed from: d  reason: collision with root package name */
        public final UUID f12390d;

        /* renamed from: e  reason: collision with root package name */
        public final UUID f12391e;

        /* renamed from: i  reason: collision with root package name */
        public final Uri f12392i;

        /* renamed from: o  reason: collision with root package name */
        public final qi.t f12393o;

        /* renamed from: p  reason: collision with root package name */
        public final qi.t f12394p;

        /* renamed from: q  reason: collision with root package name */
        public final boolean f12395q;

        /* renamed from: r  reason: collision with root package name */
        public final boolean f12396r;

        /* renamed from: s  reason: collision with root package name */
        public final boolean f12397s;

        /* renamed from: t  reason: collision with root package name */
        public final qi.s f12398t;

        /* renamed from: u  reason: collision with root package name */
        public final qi.s f12399u;

        /* renamed from: v  reason: collision with root package name */
        private final byte[] f12400v;

        /* renamed from: w  reason: collision with root package name */
        private static final String f12386w = oe.w0.B0(0);

        /* renamed from: x  reason: collision with root package name */
        private static final String f12387x = oe.w0.B0(1);

        /* renamed from: y  reason: collision with root package name */
        private static final String f12388y = oe.w0.B0(2);

        /* renamed from: z  reason: collision with root package name */
        private static final String f12389z = oe.w0.B0(3);
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
            private UUID f12401a;

            /* renamed from: b  reason: collision with root package name */
            private Uri f12402b;

            /* renamed from: c  reason: collision with root package name */
            private qi.t f12403c;

            /* renamed from: d  reason: collision with root package name */
            private boolean f12404d;

            /* renamed from: e  reason: collision with root package name */
            private boolean f12405e;

            /* renamed from: f  reason: collision with root package name */
            private boolean f12406f;

            /* renamed from: g  reason: collision with root package name */
            private qi.s f12407g;

            /* renamed from: h  reason: collision with root package name */
            private byte[] f12408h;

            public f i() {
                return new f(this);
            }

            public a j(boolean z10) {
                this.f12406f = z10;
                return this;
            }

            public a k(List list) {
                this.f12407g = qi.s.o(list);
                return this;
            }

            public a l(byte[] bArr) {
                byte[] bArr2;
                if (bArr != null) {
                    bArr2 = Arrays.copyOf(bArr, bArr.length);
                } else {
                    bArr2 = null;
                }
                this.f12408h = bArr2;
                return this;
            }

            public a m(Map map) {
                this.f12403c = qi.t.c(map);
                return this;
            }

            public a n(Uri uri) {
                this.f12402b = uri;
                return this;
            }

            public a o(boolean z10) {
                this.f12404d = z10;
                return this;
            }

            public a p(boolean z10) {
                this.f12405e = z10;
                return this;
            }

            public a(UUID uuid) {
                this.f12401a = uuid;
                this.f12403c = qi.t.j();
                this.f12407g = qi.s.t();
            }

            private a() {
                this.f12403c = qi.t.j();
                this.f12407g = qi.s.t();
            }
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static f b(Bundle bundle) {
            UUID fromString = UUID.fromString((String) oe.a.e(bundle.getString(f12386w)));
            qi.t b10 = oe.d.b(oe.d.f(bundle, f12388y, Bundle.EMPTY));
            boolean z10 = bundle.getBoolean(f12389z, false);
            boolean z11 = bundle.getBoolean(A, false);
            boolean z12 = bundle.getBoolean(B, false);
            qi.s o10 = qi.s.o(oe.d.g(bundle, C, new ArrayList()));
            return new a(fromString).n((Uri) bundle.getParcelable(f12387x)).m(b10).o(z10).j(z12).p(z11).k(o10).l(bundle.getByteArray(D)).i();
        }

        public byte[] c() {
            byte[] bArr = this.f12400v;
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
            if (this.f12390d.equals(fVar.f12390d) && oe.w0.c(this.f12392i, fVar.f12392i) && oe.w0.c(this.f12394p, fVar.f12394p) && this.f12395q == fVar.f12395q && this.f12397s == fVar.f12397s && this.f12396r == fVar.f12396r && this.f12399u.equals(fVar.f12399u) && Arrays.equals(this.f12400v, fVar.f12400v)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int i10;
            int hashCode = this.f12390d.hashCode() * 31;
            Uri uri = this.f12392i;
            if (uri != null) {
                i10 = uri.hashCode();
            } else {
                i10 = 0;
            }
            return ((((((((((((hashCode + i10) * 31) + this.f12394p.hashCode()) * 31) + (this.f12395q ? 1 : 0)) * 31) + (this.f12397s ? 1 : 0)) * 31) + (this.f12396r ? 1 : 0)) * 31) + this.f12399u.hashCode()) * 31) + Arrays.hashCode(this.f12400v);
        }

        private f(a aVar) {
            oe.a.g((aVar.f12406f && aVar.f12402b == null) ? false : true);
            UUID uuid = (UUID) oe.a.e(aVar.f12401a);
            this.f12390d = uuid;
            this.f12391e = uuid;
            this.f12392i = aVar.f12402b;
            this.f12393o = aVar.f12403c;
            this.f12394p = aVar.f12403c;
            this.f12395q = aVar.f12404d;
            this.f12397s = aVar.f12406f;
            this.f12396r = aVar.f12405e;
            this.f12398t = aVar.f12407g;
            this.f12399u = aVar.f12407g;
            this.f12400v = aVar.f12408h != null ? Arrays.copyOf(aVar.f12408h, aVar.f12408h.length) : null;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class g implements com.google.android.exoplayer2.g {

        /* renamed from: q  reason: collision with root package name */
        public static final g f12409q = new a().f();

        /* renamed from: r  reason: collision with root package name */
        private static final String f12410r = oe.w0.B0(0);

        /* renamed from: s  reason: collision with root package name */
        private static final String f12411s = oe.w0.B0(1);

        /* renamed from: t  reason: collision with root package name */
        private static final String f12412t = oe.w0.B0(2);

        /* renamed from: u  reason: collision with root package name */
        private static final String f12413u = oe.w0.B0(3);

        /* renamed from: v  reason: collision with root package name */
        private static final String f12414v = oe.w0.B0(4);

        /* renamed from: w  reason: collision with root package name */
        public static final g.a f12415w = new g.a() { // from class: mc.f0
            @Override // com.google.android.exoplayer2.g.a
            public final com.google.android.exoplayer2.g a(Bundle bundle) {
                return MediaItem.g.a(bundle);
            }
        };

        /* renamed from: d  reason: collision with root package name */
        public final long f12416d;

        /* renamed from: e  reason: collision with root package name */
        public final long f12417e;

        /* renamed from: i  reason: collision with root package name */
        public final long f12418i;

        /* renamed from: o  reason: collision with root package name */
        public final float f12419o;

        /* renamed from: p  reason: collision with root package name */
        public final float f12420p;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class a {

            /* renamed from: a  reason: collision with root package name */
            private long f12421a = -9223372036854775807L;

            /* renamed from: b  reason: collision with root package name */
            private long f12422b = -9223372036854775807L;

            /* renamed from: c  reason: collision with root package name */
            private long f12423c = -9223372036854775807L;

            /* renamed from: d  reason: collision with root package name */
            private float f12424d = -3.4028235E38f;

            /* renamed from: e  reason: collision with root package name */
            private float f12425e = -3.4028235E38f;

            public g f() {
                return new g(this);
            }

            public a g(long j10) {
                this.f12423c = j10;
                return this;
            }

            public a h(float f10) {
                this.f12425e = f10;
                return this;
            }

            public a i(long j10) {
                this.f12422b = j10;
                return this;
            }

            public a j(float f10) {
                this.f12424d = f10;
                return this;
            }

            public a k(long j10) {
                this.f12421a = j10;
                return this;
            }
        }

        public static /* synthetic */ g a(Bundle bundle) {
            String str = f12410r;
            g gVar = f12409q;
            return new g(bundle.getLong(str, gVar.f12416d), bundle.getLong(f12411s, gVar.f12417e), bundle.getLong(f12412t, gVar.f12418i), bundle.getFloat(f12413u, gVar.f12419o), bundle.getFloat(f12414v, gVar.f12420p));
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof g)) {
                return false;
            }
            g gVar = (g) obj;
            if (this.f12416d == gVar.f12416d && this.f12417e == gVar.f12417e && this.f12418i == gVar.f12418i && this.f12419o == gVar.f12419o && this.f12420p == gVar.f12420p) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int i10;
            long j10 = this.f12416d;
            long j11 = this.f12417e;
            long j12 = this.f12418i;
            int i11 = ((((((int) (j10 ^ (j10 >>> 32))) * 31) + ((int) (j11 ^ (j11 >>> 32)))) * 31) + ((int) ((j12 >>> 32) ^ j12))) * 31;
            float f10 = this.f12419o;
            int i12 = 0;
            if (f10 != 0.0f) {
                i10 = Float.floatToIntBits(f10);
            } else {
                i10 = 0;
            }
            int i13 = (i11 + i10) * 31;
            float f11 = this.f12420p;
            if (f11 != 0.0f) {
                i12 = Float.floatToIntBits(f11);
            }
            return i13 + i12;
        }

        private g(a aVar) {
            this(aVar.f12421a, aVar.f12422b, aVar.f12423c, aVar.f12424d, aVar.f12425e);
        }

        public g(long j10, long j11, long j12, float f10, float f11) {
            this.f12416d = j10;
            this.f12417e = j11;
            this.f12418i = j12;
            this.f12419o = f10;
            this.f12420p = f11;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class h implements com.google.android.exoplayer2.g {

        /* renamed from: d  reason: collision with root package name */
        public final Uri f12432d;

        /* renamed from: e  reason: collision with root package name */
        public final String f12433e;

        /* renamed from: i  reason: collision with root package name */
        public final f f12434i;

        /* renamed from: o  reason: collision with root package name */
        public final b f12435o;

        /* renamed from: p  reason: collision with root package name */
        public final List f12436p;

        /* renamed from: q  reason: collision with root package name */
        public final String f12437q;

        /* renamed from: r  reason: collision with root package name */
        public final qi.s f12438r;

        /* renamed from: s  reason: collision with root package name */
        public final List f12439s;

        /* renamed from: t  reason: collision with root package name */
        public final Object f12440t;

        /* renamed from: u  reason: collision with root package name */
        private static final String f12426u = oe.w0.B0(0);

        /* renamed from: v  reason: collision with root package name */
        private static final String f12427v = oe.w0.B0(1);

        /* renamed from: w  reason: collision with root package name */
        private static final String f12428w = oe.w0.B0(2);

        /* renamed from: x  reason: collision with root package name */
        private static final String f12429x = oe.w0.B0(3);

        /* renamed from: y  reason: collision with root package name */
        private static final String f12430y = oe.w0.B0(4);

        /* renamed from: z  reason: collision with root package name */
        private static final String f12431z = oe.w0.B0(5);
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
            Bundle bundle2 = bundle.getBundle(f12428w);
            b bVar = null;
            if (bundle2 == null) {
                fVar = null;
            } else {
                fVar = (f) f.E.a(bundle2);
            }
            Bundle bundle3 = bundle.getBundle(f12429x);
            if (bundle3 != null) {
                bVar = (b) b.f12350o.a(bundle3);
            }
            b bVar2 = bVar;
            ArrayList parcelableArrayList = bundle.getParcelableArrayList(f12430y);
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
                d11 = oe.d.d(k.f12459z, parcelableArrayList2);
            }
            return new h((Uri) oe.a.e((Uri) bundle.getParcelable(f12426u)), bundle.getString(f12427v), fVar, bVar2, sVar, bundle.getString(f12431z), d11, null);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof h)) {
                return false;
            }
            h hVar = (h) obj;
            if (this.f12432d.equals(hVar.f12432d) && oe.w0.c(this.f12433e, hVar.f12433e) && oe.w0.c(this.f12434i, hVar.f12434i) && oe.w0.c(this.f12435o, hVar.f12435o) && this.f12436p.equals(hVar.f12436p) && oe.w0.c(this.f12437q, hVar.f12437q) && this.f12438r.equals(hVar.f12438r) && oe.w0.c(this.f12440t, hVar.f12440t)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4;
            int hashCode5 = this.f12432d.hashCode() * 31;
            String str = this.f12433e;
            int i10 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int i11 = (hashCode5 + hashCode) * 31;
            f fVar = this.f12434i;
            if (fVar == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = fVar.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            b bVar = this.f12435o;
            if (bVar == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = bVar.hashCode();
            }
            int hashCode6 = (((i12 + hashCode3) * 31) + this.f12436p.hashCode()) * 31;
            String str2 = this.f12437q;
            if (str2 == null) {
                hashCode4 = 0;
            } else {
                hashCode4 = str2.hashCode();
            }
            int hashCode7 = (((hashCode6 + hashCode4) * 31) + this.f12438r.hashCode()) * 31;
            Object obj = this.f12440t;
            if (obj != null) {
                i10 = obj.hashCode();
            }
            return hashCode7 + i10;
        }

        private h(Uri uri, String str, f fVar, b bVar, List list, String str2, qi.s sVar, Object obj) {
            this.f12432d = uri;
            this.f12433e = str;
            this.f12434i = fVar;
            this.f12435o = bVar;
            this.f12436p = list;
            this.f12437q = str2;
            this.f12438r = sVar;
            s.a k10 = qi.s.k();
            for (int i10 = 0; i10 < sVar.size(); i10++) {
                k10.a(((k) sVar.get(i10)).b().j());
            }
            this.f12439s = k10.k();
            this.f12440t = obj;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class i implements com.google.android.exoplayer2.g {

        /* renamed from: o  reason: collision with root package name */
        public static final i f12441o = new a().d();

        /* renamed from: p  reason: collision with root package name */
        private static final String f12442p = oe.w0.B0(0);

        /* renamed from: q  reason: collision with root package name */
        private static final String f12443q = oe.w0.B0(1);

        /* renamed from: r  reason: collision with root package name */
        private static final String f12444r = oe.w0.B0(2);

        /* renamed from: s  reason: collision with root package name */
        public static final g.a f12445s = new g.a() { // from class: mc.i0
            @Override // com.google.android.exoplayer2.g.a
            public final com.google.android.exoplayer2.g a(Bundle bundle) {
                MediaItem.i d10;
                d10 = new MediaItem.i.a().f((Uri) bundle.getParcelable(MediaItem.i.f12442p)).g(bundle.getString(MediaItem.i.f12443q)).e(bundle.getBundle(MediaItem.i.f12444r)).d();
                return d10;
            }
        };

        /* renamed from: d  reason: collision with root package name */
        public final Uri f12446d;

        /* renamed from: e  reason: collision with root package name */
        public final String f12447e;

        /* renamed from: i  reason: collision with root package name */
        public final Bundle f12448i;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class a {

            /* renamed from: a  reason: collision with root package name */
            private Uri f12449a;

            /* renamed from: b  reason: collision with root package name */
            private String f12450b;

            /* renamed from: c  reason: collision with root package name */
            private Bundle f12451c;

            public i d() {
                return new i(this);
            }

            public a e(Bundle bundle) {
                this.f12451c = bundle;
                return this;
            }

            public a f(Uri uri) {
                this.f12449a = uri;
                return this;
            }

            public a g(String str) {
                this.f12450b = str;
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
            if (oe.w0.c(this.f12446d, iVar.f12446d) && oe.w0.c(this.f12447e, iVar.f12447e)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int hashCode;
            Uri uri = this.f12446d;
            int i10 = 0;
            if (uri == null) {
                hashCode = 0;
            } else {
                hashCode = uri.hashCode();
            }
            int i11 = hashCode * 31;
            String str = this.f12447e;
            if (str != null) {
                i10 = str.hashCode();
            }
            return i11 + i10;
        }

        private i(a aVar) {
            this.f12446d = aVar.f12449a;
            this.f12447e = aVar.f12450b;
            this.f12448i = aVar.f12451c;
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
        private static final String f12452s = oe.w0.B0(0);

        /* renamed from: t  reason: collision with root package name */
        private static final String f12453t = oe.w0.B0(1);

        /* renamed from: u  reason: collision with root package name */
        private static final String f12454u = oe.w0.B0(2);

        /* renamed from: v  reason: collision with root package name */
        private static final String f12455v = oe.w0.B0(3);

        /* renamed from: w  reason: collision with root package name */
        private static final String f12456w = oe.w0.B0(4);

        /* renamed from: x  reason: collision with root package name */
        private static final String f12457x = oe.w0.B0(5);

        /* renamed from: y  reason: collision with root package name */
        private static final String f12458y = oe.w0.B0(6);

        /* renamed from: z  reason: collision with root package name */
        public static final g.a f12459z = new g.a() { // from class: mc.j0
            @Override // com.google.android.exoplayer2.g.a
            public final com.google.android.exoplayer2.g a(Bundle bundle) {
                MediaItem.k c10;
                c10 = MediaItem.k.c(bundle);
                return c10;
            }
        };

        /* renamed from: d  reason: collision with root package name */
        public final Uri f12460d;

        /* renamed from: e  reason: collision with root package name */
        public final String f12461e;

        /* renamed from: i  reason: collision with root package name */
        public final String f12462i;

        /* renamed from: o  reason: collision with root package name */
        public final int f12463o;

        /* renamed from: p  reason: collision with root package name */
        public final int f12464p;

        /* renamed from: q  reason: collision with root package name */
        public final String f12465q;

        /* renamed from: r  reason: collision with root package name */
        public final String f12466r;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class a {

            /* renamed from: a  reason: collision with root package name */
            private Uri f12467a;

            /* renamed from: b  reason: collision with root package name */
            private String f12468b;

            /* renamed from: c  reason: collision with root package name */
            private String f12469c;

            /* renamed from: d  reason: collision with root package name */
            private int f12470d;

            /* renamed from: e  reason: collision with root package name */
            private int f12471e;

            /* renamed from: f  reason: collision with root package name */
            private String f12472f;

            /* renamed from: g  reason: collision with root package name */
            private String f12473g;

            /* JADX INFO: Access modifiers changed from: private */
            public j j() {
                return new j(this);
            }

            public k i() {
                return new k(this);
            }

            public a k(String str) {
                this.f12473g = str;
                return this;
            }

            public a l(String str) {
                this.f12472f = str;
                return this;
            }

            public a m(String str) {
                this.f12469c = str;
                return this;
            }

            public a n(String str) {
                this.f12468b = str;
                return this;
            }

            public a o(int i10) {
                this.f12471e = i10;
                return this;
            }

            public a p(int i10) {
                this.f12470d = i10;
                return this;
            }

            public a(Uri uri) {
                this.f12467a = uri;
            }

            private a(k kVar) {
                this.f12467a = kVar.f12460d;
                this.f12468b = kVar.f12461e;
                this.f12469c = kVar.f12462i;
                this.f12470d = kVar.f12463o;
                this.f12471e = kVar.f12464p;
                this.f12472f = kVar.f12465q;
                this.f12473g = kVar.f12466r;
            }
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static k c(Bundle bundle) {
            String string = bundle.getString(f12453t);
            String string2 = bundle.getString(f12454u);
            int i10 = bundle.getInt(f12455v, 0);
            int i11 = bundle.getInt(f12456w, 0);
            String string3 = bundle.getString(f12457x);
            return new a((Uri) oe.a.e((Uri) bundle.getParcelable(f12452s))).n(string).m(string2).p(i10).o(i11).l(string3).k(bundle.getString(f12458y)).i();
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
            if (this.f12460d.equals(kVar.f12460d) && oe.w0.c(this.f12461e, kVar.f12461e) && oe.w0.c(this.f12462i, kVar.f12462i) && this.f12463o == kVar.f12463o && this.f12464p == kVar.f12464p && oe.w0.c(this.f12465q, kVar.f12465q) && oe.w0.c(this.f12466r, kVar.f12466r)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4 = this.f12460d.hashCode() * 31;
            String str = this.f12461e;
            int i10 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int i11 = (hashCode4 + hashCode) * 31;
            String str2 = this.f12462i;
            if (str2 == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str2.hashCode();
            }
            int i12 = (((((i11 + hashCode2) * 31) + this.f12463o) * 31) + this.f12464p) * 31;
            String str3 = this.f12465q;
            if (str3 == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = str3.hashCode();
            }
            int i13 = (i12 + hashCode3) * 31;
            String str4 = this.f12466r;
            if (str4 != null) {
                i10 = str4.hashCode();
            }
            return i13 + i10;
        }

        private k(a aVar) {
            this.f12460d = aVar.f12467a;
            this.f12461e = aVar.f12468b;
            this.f12462i = aVar.f12469c;
            this.f12463o = aVar.f12470d;
            this.f12464p = aVar.f12471e;
            this.f12465q = aVar.f12472f;
            this.f12466r = aVar.f12473g;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static MediaItem b(Bundle bundle) {
        g gVar;
        MediaMetadata mediaMetadata;
        e eVar;
        i iVar;
        h hVar;
        String str = (String) oe.a.e(bundle.getString(f12335u, ""));
        Bundle bundle2 = bundle.getBundle(f12336v);
        if (bundle2 == null) {
            gVar = g.f12409q;
        } else {
            gVar = (g) g.f12415w.a(bundle2);
        }
        g gVar2 = gVar;
        Bundle bundle3 = bundle.getBundle(f12337w);
        if (bundle3 == null) {
            mediaMetadata = MediaMetadata.T;
        } else {
            mediaMetadata = (MediaMetadata) MediaMetadata.B0.a(bundle3);
        }
        MediaMetadata mediaMetadata2 = mediaMetadata;
        Bundle bundle4 = bundle.getBundle(f12338x);
        if (bundle4 == null) {
            eVar = e.f12385x;
        } else {
            eVar = (e) d.f12374w.a(bundle4);
        }
        e eVar2 = eVar;
        Bundle bundle5 = bundle.getBundle(f12339y);
        if (bundle5 == null) {
            iVar = i.f12441o;
        } else {
            iVar = (i) i.f12445s.a(bundle5);
        }
        i iVar2 = iVar;
        Bundle bundle6 = bundle.getBundle(f12340z);
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
        if (oe.w0.c(this.f12341d, mediaItem.f12341d) && this.f12346q.equals(mediaItem.f12346q) && oe.w0.c(this.f12342e, mediaItem.f12342e) && oe.w0.c(this.f12344o, mediaItem.f12344o) && oe.w0.c(this.f12345p, mediaItem.f12345p) && oe.w0.c(this.f12348s, mediaItem.f12348s)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int hashCode = this.f12341d.hashCode() * 31;
        h hVar = this.f12342e;
        if (hVar != null) {
            i10 = hVar.hashCode();
        } else {
            i10 = 0;
        }
        return ((((((((hashCode + i10) * 31) + this.f12344o.hashCode()) * 31) + this.f12346q.hashCode()) * 31) + this.f12345p.hashCode()) * 31) + this.f12348s.hashCode();
    }

    private MediaItem(String str, e eVar, h hVar, g gVar, MediaMetadata mediaMetadata, i iVar) {
        this.f12341d = str;
        this.f12342e = hVar;
        this.f12343i = hVar;
        this.f12344o = gVar;
        this.f12345p = mediaMetadata;
        this.f12346q = eVar;
        this.f12347r = eVar;
        this.f12348s = iVar;
    }
}
