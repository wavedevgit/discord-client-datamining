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
    public final String f12372d;

    /* renamed from: e  reason: collision with root package name */
    public final h f12373e;

    /* renamed from: i  reason: collision with root package name */
    public final h f12374i;

    /* renamed from: o  reason: collision with root package name */
    public final g f12375o;

    /* renamed from: p  reason: collision with root package name */
    public final MediaMetadata f12376p;

    /* renamed from: q  reason: collision with root package name */
    public final d f12377q;

    /* renamed from: r  reason: collision with root package name */
    public final e f12378r;

    /* renamed from: s  reason: collision with root package name */
    public final i f12379s;

    /* renamed from: t  reason: collision with root package name */
    public static final MediaItem f12365t = new c().a();

    /* renamed from: u  reason: collision with root package name */
    private static final String f12366u = ne.w0.B0(0);

    /* renamed from: v  reason: collision with root package name */
    private static final String f12367v = ne.w0.B0(1);

    /* renamed from: w  reason: collision with root package name */
    private static final String f12368w = ne.w0.B0(2);

    /* renamed from: x  reason: collision with root package name */
    private static final String f12369x = ne.w0.B0(3);

    /* renamed from: y  reason: collision with root package name */
    private static final String f12370y = ne.w0.B0(4);

    /* renamed from: z  reason: collision with root package name */
    private static final String f12371z = ne.w0.B0(5);
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
        private static final String f12380i = ne.w0.B0(0);

        /* renamed from: o  reason: collision with root package name */
        public static final g.a f12381o = new g.a() { // from class: lc.c0
            @Override // com.google.android.exoplayer2.g.a
            public final com.google.android.exoplayer2.g a(Bundle bundle) {
                MediaItem.b b10;
                b10 = MediaItem.b.b(bundle);
                return b10;
            }
        };

        /* renamed from: d  reason: collision with root package name */
        public final Uri f12382d;

        /* renamed from: e  reason: collision with root package name */
        public final Object f12383e;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class a {

            /* renamed from: a  reason: collision with root package name */
            private Uri f12384a;

            /* renamed from: b  reason: collision with root package name */
            private Object f12385b;

            public a(Uri uri) {
                this.f12384a = uri;
            }

            public b c() {
                return new b(this);
            }
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static b b(Bundle bundle) {
            Uri uri = (Uri) bundle.getParcelable(f12380i);
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
            if (this.f12382d.equals(bVar.f12382d) && ne.w0.c(this.f12383e, bVar.f12383e)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int i10;
            int hashCode = this.f12382d.hashCode() * 31;
            Object obj = this.f12383e;
            if (obj != null) {
                i10 = obj.hashCode();
            } else {
                i10 = 0;
            }
            return hashCode + i10;
        }

        private b(a aVar) {
            this.f12382d = aVar.f12384a;
            this.f12383e = aVar.f12385b;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c {

        /* renamed from: a  reason: collision with root package name */
        private String f12386a;

        /* renamed from: b  reason: collision with root package name */
        private Uri f12387b;

        /* renamed from: c  reason: collision with root package name */
        private String f12388c;

        /* renamed from: g  reason: collision with root package name */
        private String f12392g;

        /* renamed from: i  reason: collision with root package name */
        private b f12394i;

        /* renamed from: j  reason: collision with root package name */
        private Object f12395j;

        /* renamed from: k  reason: collision with root package name */
        private MediaMetadata f12396k;

        /* renamed from: d  reason: collision with root package name */
        private d.a f12389d = new d.a();

        /* renamed from: e  reason: collision with root package name */
        private f.a f12390e = new f.a();

        /* renamed from: f  reason: collision with root package name */
        private List f12391f = Collections.EMPTY_LIST;

        /* renamed from: h  reason: collision with root package name */
        private ji.s f12393h = ji.s.r();

        /* renamed from: l  reason: collision with root package name */
        private g.a f12397l = new g.a();

        /* renamed from: m  reason: collision with root package name */
        private i f12398m = i.f12472o;

        public MediaItem a() {
            boolean z10;
            h hVar;
            if (this.f12390e.f12433b != null && this.f12390e.f12432a == null) {
                z10 = false;
            } else {
                z10 = true;
            }
            ne.a.g(z10);
            Uri uri = this.f12387b;
            f fVar = null;
            if (uri != null) {
                String str = this.f12388c;
                if (this.f12390e.f12432a != null) {
                    fVar = this.f12390e.i();
                }
                hVar = new h(uri, str, fVar, this.f12394i, this.f12391f, this.f12392g, this.f12393h, this.f12395j);
            } else {
                hVar = null;
            }
            String str2 = this.f12386a;
            if (str2 == null) {
                str2 = "";
            }
            String str3 = str2;
            e g10 = this.f12389d.g();
            g f10 = this.f12397l.f();
            MediaMetadata mediaMetadata = this.f12396k;
            if (mediaMetadata == null) {
                mediaMetadata = MediaMetadata.T;
            }
            return new MediaItem(str3, g10, hVar, f10, mediaMetadata, this.f12398m);
        }

        public c b(String str) {
            this.f12386a = (String) ne.a.e(str);
            return this;
        }

        public c c(List list) {
            this.f12393h = ji.s.m(list);
            return this;
        }

        public c d(Object obj) {
            this.f12395j = obj;
            return this;
        }

        public c e(Uri uri) {
            this.f12387b = uri;
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
        public static final d f12399q = new a().f();

        /* renamed from: r  reason: collision with root package name */
        private static final String f12400r = ne.w0.B0(0);

        /* renamed from: s  reason: collision with root package name */
        private static final String f12401s = ne.w0.B0(1);

        /* renamed from: t  reason: collision with root package name */
        private static final String f12402t = ne.w0.B0(2);

        /* renamed from: u  reason: collision with root package name */
        private static final String f12403u = ne.w0.B0(3);

        /* renamed from: v  reason: collision with root package name */
        private static final String f12404v = ne.w0.B0(4);

        /* renamed from: w  reason: collision with root package name */
        public static final g.a f12405w = new g.a() { // from class: lc.d0
            @Override // com.google.android.exoplayer2.g.a
            public final com.google.android.exoplayer2.g a(Bundle bundle) {
                return MediaItem.d.a(bundle);
            }
        };

        /* renamed from: d  reason: collision with root package name */
        public final long f12406d;

        /* renamed from: e  reason: collision with root package name */
        public final long f12407e;

        /* renamed from: i  reason: collision with root package name */
        public final boolean f12408i;

        /* renamed from: o  reason: collision with root package name */
        public final boolean f12409o;

        /* renamed from: p  reason: collision with root package name */
        public final boolean f12410p;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class a {

            /* renamed from: a  reason: collision with root package name */
            private long f12411a;

            /* renamed from: b  reason: collision with root package name */
            private long f12412b = Long.MIN_VALUE;

            /* renamed from: c  reason: collision with root package name */
            private boolean f12413c;

            /* renamed from: d  reason: collision with root package name */
            private boolean f12414d;

            /* renamed from: e  reason: collision with root package name */
            private boolean f12415e;

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
                this.f12412b = j10;
                return this;
            }

            public a i(boolean z10) {
                this.f12414d = z10;
                return this;
            }

            public a j(boolean z10) {
                this.f12413c = z10;
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
                this.f12411a = j10;
                return this;
            }

            public a l(boolean z10) {
                this.f12415e = z10;
                return this;
            }
        }

        public static /* synthetic */ e a(Bundle bundle) {
            a aVar = new a();
            String str = f12400r;
            d dVar = f12399q;
            return aVar.k(bundle.getLong(str, dVar.f12406d)).h(bundle.getLong(f12401s, dVar.f12407e)).j(bundle.getBoolean(f12402t, dVar.f12408i)).i(bundle.getBoolean(f12403u, dVar.f12409o)).l(bundle.getBoolean(f12404v, dVar.f12410p)).g();
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof d)) {
                return false;
            }
            d dVar = (d) obj;
            if (this.f12406d == dVar.f12406d && this.f12407e == dVar.f12407e && this.f12408i == dVar.f12408i && this.f12409o == dVar.f12409o && this.f12410p == dVar.f12410p) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            long j10 = this.f12406d;
            long j11 = this.f12407e;
            return (((((((((int) (j10 ^ (j10 >>> 32))) * 31) + ((int) ((j11 >>> 32) ^ j11))) * 31) + (this.f12408i ? 1 : 0)) * 31) + (this.f12409o ? 1 : 0)) * 31) + (this.f12410p ? 1 : 0);
        }

        private d(a aVar) {
            this.f12406d = aVar.f12411a;
            this.f12407e = aVar.f12412b;
            this.f12408i = aVar.f12413c;
            this.f12409o = aVar.f12414d;
            this.f12410p = aVar.f12415e;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class e extends d {

        /* renamed from: x  reason: collision with root package name */
        public static final e f12416x = new d.a().g();

        private e(d.a aVar) {
            super(aVar);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class f implements com.google.android.exoplayer2.g {

        /* renamed from: d  reason: collision with root package name */
        public final UUID f12421d;

        /* renamed from: e  reason: collision with root package name */
        public final UUID f12422e;

        /* renamed from: i  reason: collision with root package name */
        public final Uri f12423i;

        /* renamed from: o  reason: collision with root package name */
        public final ji.t f12424o;

        /* renamed from: p  reason: collision with root package name */
        public final ji.t f12425p;

        /* renamed from: q  reason: collision with root package name */
        public final boolean f12426q;

        /* renamed from: r  reason: collision with root package name */
        public final boolean f12427r;

        /* renamed from: s  reason: collision with root package name */
        public final boolean f12428s;

        /* renamed from: t  reason: collision with root package name */
        public final ji.s f12429t;

        /* renamed from: u  reason: collision with root package name */
        public final ji.s f12430u;

        /* renamed from: v  reason: collision with root package name */
        private final byte[] f12431v;

        /* renamed from: w  reason: collision with root package name */
        private static final String f12417w = ne.w0.B0(0);

        /* renamed from: x  reason: collision with root package name */
        private static final String f12418x = ne.w0.B0(1);

        /* renamed from: y  reason: collision with root package name */
        private static final String f12419y = ne.w0.B0(2);

        /* renamed from: z  reason: collision with root package name */
        private static final String f12420z = ne.w0.B0(3);
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
            private UUID f12432a;

            /* renamed from: b  reason: collision with root package name */
            private Uri f12433b;

            /* renamed from: c  reason: collision with root package name */
            private ji.t f12434c;

            /* renamed from: d  reason: collision with root package name */
            private boolean f12435d;

            /* renamed from: e  reason: collision with root package name */
            private boolean f12436e;

            /* renamed from: f  reason: collision with root package name */
            private boolean f12437f;

            /* renamed from: g  reason: collision with root package name */
            private ji.s f12438g;

            /* renamed from: h  reason: collision with root package name */
            private byte[] f12439h;

            public f i() {
                return new f(this);
            }

            public a j(boolean z10) {
                this.f12437f = z10;
                return this;
            }

            public a k(List list) {
                this.f12438g = ji.s.m(list);
                return this;
            }

            public a l(byte[] bArr) {
                byte[] bArr2;
                if (bArr != null) {
                    bArr2 = Arrays.copyOf(bArr, bArr.length);
                } else {
                    bArr2 = null;
                }
                this.f12439h = bArr2;
                return this;
            }

            public a m(Map map) {
                this.f12434c = ji.t.c(map);
                return this;
            }

            public a n(Uri uri) {
                this.f12433b = uri;
                return this;
            }

            public a o(boolean z10) {
                this.f12435d = z10;
                return this;
            }

            public a p(boolean z10) {
                this.f12436e = z10;
                return this;
            }

            public a(UUID uuid) {
                this.f12432a = uuid;
                this.f12434c = ji.t.j();
                this.f12438g = ji.s.r();
            }

            private a() {
                this.f12434c = ji.t.j();
                this.f12438g = ji.s.r();
            }
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static f b(Bundle bundle) {
            UUID fromString = UUID.fromString((String) ne.a.e(bundle.getString(f12417w)));
            ji.t b10 = ne.d.b(ne.d.f(bundle, f12419y, Bundle.EMPTY));
            boolean z10 = bundle.getBoolean(f12420z, false);
            boolean z11 = bundle.getBoolean(A, false);
            boolean z12 = bundle.getBoolean(B, false);
            ji.s m10 = ji.s.m(ne.d.g(bundle, C, new ArrayList()));
            return new a(fromString).n((Uri) bundle.getParcelable(f12418x)).m(b10).o(z10).j(z12).p(z11).k(m10).l(bundle.getByteArray(D)).i();
        }

        public byte[] c() {
            byte[] bArr = this.f12431v;
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
            if (this.f12421d.equals(fVar.f12421d) && ne.w0.c(this.f12423i, fVar.f12423i) && ne.w0.c(this.f12425p, fVar.f12425p) && this.f12426q == fVar.f12426q && this.f12428s == fVar.f12428s && this.f12427r == fVar.f12427r && this.f12430u.equals(fVar.f12430u) && Arrays.equals(this.f12431v, fVar.f12431v)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int i10;
            int hashCode = this.f12421d.hashCode() * 31;
            Uri uri = this.f12423i;
            if (uri != null) {
                i10 = uri.hashCode();
            } else {
                i10 = 0;
            }
            return ((((((((((((hashCode + i10) * 31) + this.f12425p.hashCode()) * 31) + (this.f12426q ? 1 : 0)) * 31) + (this.f12428s ? 1 : 0)) * 31) + (this.f12427r ? 1 : 0)) * 31) + this.f12430u.hashCode()) * 31) + Arrays.hashCode(this.f12431v);
        }

        private f(a aVar) {
            ne.a.g((aVar.f12437f && aVar.f12433b == null) ? false : true);
            UUID uuid = (UUID) ne.a.e(aVar.f12432a);
            this.f12421d = uuid;
            this.f12422e = uuid;
            this.f12423i = aVar.f12433b;
            this.f12424o = aVar.f12434c;
            this.f12425p = aVar.f12434c;
            this.f12426q = aVar.f12435d;
            this.f12428s = aVar.f12437f;
            this.f12427r = aVar.f12436e;
            this.f12429t = aVar.f12438g;
            this.f12430u = aVar.f12438g;
            this.f12431v = aVar.f12439h != null ? Arrays.copyOf(aVar.f12439h, aVar.f12439h.length) : null;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class g implements com.google.android.exoplayer2.g {

        /* renamed from: q  reason: collision with root package name */
        public static final g f12440q = new a().f();

        /* renamed from: r  reason: collision with root package name */
        private static final String f12441r = ne.w0.B0(0);

        /* renamed from: s  reason: collision with root package name */
        private static final String f12442s = ne.w0.B0(1);

        /* renamed from: t  reason: collision with root package name */
        private static final String f12443t = ne.w0.B0(2);

        /* renamed from: u  reason: collision with root package name */
        private static final String f12444u = ne.w0.B0(3);

        /* renamed from: v  reason: collision with root package name */
        private static final String f12445v = ne.w0.B0(4);

        /* renamed from: w  reason: collision with root package name */
        public static final g.a f12446w = new g.a() { // from class: lc.f0
            @Override // com.google.android.exoplayer2.g.a
            public final com.google.android.exoplayer2.g a(Bundle bundle) {
                return MediaItem.g.a(bundle);
            }
        };

        /* renamed from: d  reason: collision with root package name */
        public final long f12447d;

        /* renamed from: e  reason: collision with root package name */
        public final long f12448e;

        /* renamed from: i  reason: collision with root package name */
        public final long f12449i;

        /* renamed from: o  reason: collision with root package name */
        public final float f12450o;

        /* renamed from: p  reason: collision with root package name */
        public final float f12451p;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class a {

            /* renamed from: a  reason: collision with root package name */
            private long f12452a = -9223372036854775807L;

            /* renamed from: b  reason: collision with root package name */
            private long f12453b = -9223372036854775807L;

            /* renamed from: c  reason: collision with root package name */
            private long f12454c = -9223372036854775807L;

            /* renamed from: d  reason: collision with root package name */
            private float f12455d = -3.4028235E38f;

            /* renamed from: e  reason: collision with root package name */
            private float f12456e = -3.4028235E38f;

            public g f() {
                return new g(this);
            }

            public a g(long j10) {
                this.f12454c = j10;
                return this;
            }

            public a h(float f10) {
                this.f12456e = f10;
                return this;
            }

            public a i(long j10) {
                this.f12453b = j10;
                return this;
            }

            public a j(float f10) {
                this.f12455d = f10;
                return this;
            }

            public a k(long j10) {
                this.f12452a = j10;
                return this;
            }
        }

        public static /* synthetic */ g a(Bundle bundle) {
            String str = f12441r;
            g gVar = f12440q;
            return new g(bundle.getLong(str, gVar.f12447d), bundle.getLong(f12442s, gVar.f12448e), bundle.getLong(f12443t, gVar.f12449i), bundle.getFloat(f12444u, gVar.f12450o), bundle.getFloat(f12445v, gVar.f12451p));
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof g)) {
                return false;
            }
            g gVar = (g) obj;
            if (this.f12447d == gVar.f12447d && this.f12448e == gVar.f12448e && this.f12449i == gVar.f12449i && this.f12450o == gVar.f12450o && this.f12451p == gVar.f12451p) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int i10;
            long j10 = this.f12447d;
            long j11 = this.f12448e;
            long j12 = this.f12449i;
            int i11 = ((((((int) (j10 ^ (j10 >>> 32))) * 31) + ((int) (j11 ^ (j11 >>> 32)))) * 31) + ((int) ((j12 >>> 32) ^ j12))) * 31;
            float f10 = this.f12450o;
            int i12 = 0;
            if (f10 != 0.0f) {
                i10 = Float.floatToIntBits(f10);
            } else {
                i10 = 0;
            }
            int i13 = (i11 + i10) * 31;
            float f11 = this.f12451p;
            if (f11 != 0.0f) {
                i12 = Float.floatToIntBits(f11);
            }
            return i13 + i12;
        }

        private g(a aVar) {
            this(aVar.f12452a, aVar.f12453b, aVar.f12454c, aVar.f12455d, aVar.f12456e);
        }

        public g(long j10, long j11, long j12, float f10, float f11) {
            this.f12447d = j10;
            this.f12448e = j11;
            this.f12449i = j12;
            this.f12450o = f10;
            this.f12451p = f11;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class h implements com.google.android.exoplayer2.g {

        /* renamed from: d  reason: collision with root package name */
        public final Uri f12463d;

        /* renamed from: e  reason: collision with root package name */
        public final String f12464e;

        /* renamed from: i  reason: collision with root package name */
        public final f f12465i;

        /* renamed from: o  reason: collision with root package name */
        public final b f12466o;

        /* renamed from: p  reason: collision with root package name */
        public final List f12467p;

        /* renamed from: q  reason: collision with root package name */
        public final String f12468q;

        /* renamed from: r  reason: collision with root package name */
        public final ji.s f12469r;

        /* renamed from: s  reason: collision with root package name */
        public final List f12470s;

        /* renamed from: t  reason: collision with root package name */
        public final Object f12471t;

        /* renamed from: u  reason: collision with root package name */
        private static final String f12457u = ne.w0.B0(0);

        /* renamed from: v  reason: collision with root package name */
        private static final String f12458v = ne.w0.B0(1);

        /* renamed from: w  reason: collision with root package name */
        private static final String f12459w = ne.w0.B0(2);

        /* renamed from: x  reason: collision with root package name */
        private static final String f12460x = ne.w0.B0(3);

        /* renamed from: y  reason: collision with root package name */
        private static final String f12461y = ne.w0.B0(4);

        /* renamed from: z  reason: collision with root package name */
        private static final String f12462z = ne.w0.B0(5);
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
            Bundle bundle2 = bundle.getBundle(f12459w);
            b bVar = null;
            if (bundle2 == null) {
                fVar = null;
            } else {
                fVar = (f) f.E.a(bundle2);
            }
            Bundle bundle3 = bundle.getBundle(f12460x);
            if (bundle3 != null) {
                bVar = (b) b.f12381o.a(bundle3);
            }
            b bVar2 = bVar;
            ArrayList parcelableArrayList = bundle.getParcelableArrayList(f12461y);
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
                d11 = ne.d.d(k.f12490z, parcelableArrayList2);
            }
            return new h((Uri) ne.a.e((Uri) bundle.getParcelable(f12457u)), bundle.getString(f12458v), fVar, bVar2, sVar, bundle.getString(f12462z), d11, null);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof h)) {
                return false;
            }
            h hVar = (h) obj;
            if (this.f12463d.equals(hVar.f12463d) && ne.w0.c(this.f12464e, hVar.f12464e) && ne.w0.c(this.f12465i, hVar.f12465i) && ne.w0.c(this.f12466o, hVar.f12466o) && this.f12467p.equals(hVar.f12467p) && ne.w0.c(this.f12468q, hVar.f12468q) && this.f12469r.equals(hVar.f12469r) && ne.w0.c(this.f12471t, hVar.f12471t)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4;
            int hashCode5 = this.f12463d.hashCode() * 31;
            String str = this.f12464e;
            int i10 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int i11 = (hashCode5 + hashCode) * 31;
            f fVar = this.f12465i;
            if (fVar == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = fVar.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            b bVar = this.f12466o;
            if (bVar == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = bVar.hashCode();
            }
            int hashCode6 = (((i12 + hashCode3) * 31) + this.f12467p.hashCode()) * 31;
            String str2 = this.f12468q;
            if (str2 == null) {
                hashCode4 = 0;
            } else {
                hashCode4 = str2.hashCode();
            }
            int hashCode7 = (((hashCode6 + hashCode4) * 31) + this.f12469r.hashCode()) * 31;
            Object obj = this.f12471t;
            if (obj != null) {
                i10 = obj.hashCode();
            }
            return hashCode7 + i10;
        }

        private h(Uri uri, String str, f fVar, b bVar, List list, String str2, ji.s sVar, Object obj) {
            this.f12463d = uri;
            this.f12464e = str;
            this.f12465i = fVar;
            this.f12466o = bVar;
            this.f12467p = list;
            this.f12468q = str2;
            this.f12469r = sVar;
            s.a j10 = ji.s.j();
            for (int i10 = 0; i10 < sVar.size(); i10++) {
                j10.a(((k) sVar.get(i10)).b().j());
            }
            this.f12470s = j10.k();
            this.f12471t = obj;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class i implements com.google.android.exoplayer2.g {

        /* renamed from: o  reason: collision with root package name */
        public static final i f12472o = new a().d();

        /* renamed from: p  reason: collision with root package name */
        private static final String f12473p = ne.w0.B0(0);

        /* renamed from: q  reason: collision with root package name */
        private static final String f12474q = ne.w0.B0(1);

        /* renamed from: r  reason: collision with root package name */
        private static final String f12475r = ne.w0.B0(2);

        /* renamed from: s  reason: collision with root package name */
        public static final g.a f12476s = new g.a() { // from class: lc.i0
            @Override // com.google.android.exoplayer2.g.a
            public final com.google.android.exoplayer2.g a(Bundle bundle) {
                MediaItem.i d10;
                d10 = new MediaItem.i.a().f((Uri) bundle.getParcelable(MediaItem.i.f12473p)).g(bundle.getString(MediaItem.i.f12474q)).e(bundle.getBundle(MediaItem.i.f12475r)).d();
                return d10;
            }
        };

        /* renamed from: d  reason: collision with root package name */
        public final Uri f12477d;

        /* renamed from: e  reason: collision with root package name */
        public final String f12478e;

        /* renamed from: i  reason: collision with root package name */
        public final Bundle f12479i;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class a {

            /* renamed from: a  reason: collision with root package name */
            private Uri f12480a;

            /* renamed from: b  reason: collision with root package name */
            private String f12481b;

            /* renamed from: c  reason: collision with root package name */
            private Bundle f12482c;

            public i d() {
                return new i(this);
            }

            public a e(Bundle bundle) {
                this.f12482c = bundle;
                return this;
            }

            public a f(Uri uri) {
                this.f12480a = uri;
                return this;
            }

            public a g(String str) {
                this.f12481b = str;
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
            if (ne.w0.c(this.f12477d, iVar.f12477d) && ne.w0.c(this.f12478e, iVar.f12478e)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int hashCode;
            Uri uri = this.f12477d;
            int i10 = 0;
            if (uri == null) {
                hashCode = 0;
            } else {
                hashCode = uri.hashCode();
            }
            int i11 = hashCode * 31;
            String str = this.f12478e;
            if (str != null) {
                i10 = str.hashCode();
            }
            return i11 + i10;
        }

        private i(a aVar) {
            this.f12477d = aVar.f12480a;
            this.f12478e = aVar.f12481b;
            this.f12479i = aVar.f12482c;
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
        private static final String f12483s = ne.w0.B0(0);

        /* renamed from: t  reason: collision with root package name */
        private static final String f12484t = ne.w0.B0(1);

        /* renamed from: u  reason: collision with root package name */
        private static final String f12485u = ne.w0.B0(2);

        /* renamed from: v  reason: collision with root package name */
        private static final String f12486v = ne.w0.B0(3);

        /* renamed from: w  reason: collision with root package name */
        private static final String f12487w = ne.w0.B0(4);

        /* renamed from: x  reason: collision with root package name */
        private static final String f12488x = ne.w0.B0(5);

        /* renamed from: y  reason: collision with root package name */
        private static final String f12489y = ne.w0.B0(6);

        /* renamed from: z  reason: collision with root package name */
        public static final g.a f12490z = new g.a() { // from class: lc.j0
            @Override // com.google.android.exoplayer2.g.a
            public final com.google.android.exoplayer2.g a(Bundle bundle) {
                MediaItem.k c10;
                c10 = MediaItem.k.c(bundle);
                return c10;
            }
        };

        /* renamed from: d  reason: collision with root package name */
        public final Uri f12491d;

        /* renamed from: e  reason: collision with root package name */
        public final String f12492e;

        /* renamed from: i  reason: collision with root package name */
        public final String f12493i;

        /* renamed from: o  reason: collision with root package name */
        public final int f12494o;

        /* renamed from: p  reason: collision with root package name */
        public final int f12495p;

        /* renamed from: q  reason: collision with root package name */
        public final String f12496q;

        /* renamed from: r  reason: collision with root package name */
        public final String f12497r;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class a {

            /* renamed from: a  reason: collision with root package name */
            private Uri f12498a;

            /* renamed from: b  reason: collision with root package name */
            private String f12499b;

            /* renamed from: c  reason: collision with root package name */
            private String f12500c;

            /* renamed from: d  reason: collision with root package name */
            private int f12501d;

            /* renamed from: e  reason: collision with root package name */
            private int f12502e;

            /* renamed from: f  reason: collision with root package name */
            private String f12503f;

            /* renamed from: g  reason: collision with root package name */
            private String f12504g;

            /* JADX INFO: Access modifiers changed from: private */
            public j j() {
                return new j(this);
            }

            public k i() {
                return new k(this);
            }

            public a k(String str) {
                this.f12504g = str;
                return this;
            }

            public a l(String str) {
                this.f12503f = str;
                return this;
            }

            public a m(String str) {
                this.f12500c = str;
                return this;
            }

            public a n(String str) {
                this.f12499b = str;
                return this;
            }

            public a o(int i10) {
                this.f12502e = i10;
                return this;
            }

            public a p(int i10) {
                this.f12501d = i10;
                return this;
            }

            public a(Uri uri) {
                this.f12498a = uri;
            }

            private a(k kVar) {
                this.f12498a = kVar.f12491d;
                this.f12499b = kVar.f12492e;
                this.f12500c = kVar.f12493i;
                this.f12501d = kVar.f12494o;
                this.f12502e = kVar.f12495p;
                this.f12503f = kVar.f12496q;
                this.f12504g = kVar.f12497r;
            }
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static k c(Bundle bundle) {
            String string = bundle.getString(f12484t);
            String string2 = bundle.getString(f12485u);
            int i10 = bundle.getInt(f12486v, 0);
            int i11 = bundle.getInt(f12487w, 0);
            String string3 = bundle.getString(f12488x);
            return new a((Uri) ne.a.e((Uri) bundle.getParcelable(f12483s))).n(string).m(string2).p(i10).o(i11).l(string3).k(bundle.getString(f12489y)).i();
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
            if (this.f12491d.equals(kVar.f12491d) && ne.w0.c(this.f12492e, kVar.f12492e) && ne.w0.c(this.f12493i, kVar.f12493i) && this.f12494o == kVar.f12494o && this.f12495p == kVar.f12495p && ne.w0.c(this.f12496q, kVar.f12496q) && ne.w0.c(this.f12497r, kVar.f12497r)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4 = this.f12491d.hashCode() * 31;
            String str = this.f12492e;
            int i10 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int i11 = (hashCode4 + hashCode) * 31;
            String str2 = this.f12493i;
            if (str2 == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str2.hashCode();
            }
            int i12 = (((((i11 + hashCode2) * 31) + this.f12494o) * 31) + this.f12495p) * 31;
            String str3 = this.f12496q;
            if (str3 == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = str3.hashCode();
            }
            int i13 = (i12 + hashCode3) * 31;
            String str4 = this.f12497r;
            if (str4 != null) {
                i10 = str4.hashCode();
            }
            return i13 + i10;
        }

        private k(a aVar) {
            this.f12491d = aVar.f12498a;
            this.f12492e = aVar.f12499b;
            this.f12493i = aVar.f12500c;
            this.f12494o = aVar.f12501d;
            this.f12495p = aVar.f12502e;
            this.f12496q = aVar.f12503f;
            this.f12497r = aVar.f12504g;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static MediaItem b(Bundle bundle) {
        g gVar;
        MediaMetadata mediaMetadata;
        e eVar;
        i iVar;
        h hVar;
        String str = (String) ne.a.e(bundle.getString(f12366u, ""));
        Bundle bundle2 = bundle.getBundle(f12367v);
        if (bundle2 == null) {
            gVar = g.f12440q;
        } else {
            gVar = (g) g.f12446w.a(bundle2);
        }
        g gVar2 = gVar;
        Bundle bundle3 = bundle.getBundle(f12368w);
        if (bundle3 == null) {
            mediaMetadata = MediaMetadata.T;
        } else {
            mediaMetadata = (MediaMetadata) MediaMetadata.B0.a(bundle3);
        }
        MediaMetadata mediaMetadata2 = mediaMetadata;
        Bundle bundle4 = bundle.getBundle(f12369x);
        if (bundle4 == null) {
            eVar = e.f12416x;
        } else {
            eVar = (e) d.f12405w.a(bundle4);
        }
        e eVar2 = eVar;
        Bundle bundle5 = bundle.getBundle(f12370y);
        if (bundle5 == null) {
            iVar = i.f12472o;
        } else {
            iVar = (i) i.f12476s.a(bundle5);
        }
        i iVar2 = iVar;
        Bundle bundle6 = bundle.getBundle(f12371z);
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
        if (ne.w0.c(this.f12372d, mediaItem.f12372d) && this.f12377q.equals(mediaItem.f12377q) && ne.w0.c(this.f12373e, mediaItem.f12373e) && ne.w0.c(this.f12375o, mediaItem.f12375o) && ne.w0.c(this.f12376p, mediaItem.f12376p) && ne.w0.c(this.f12379s, mediaItem.f12379s)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int hashCode = this.f12372d.hashCode() * 31;
        h hVar = this.f12373e;
        if (hVar != null) {
            i10 = hVar.hashCode();
        } else {
            i10 = 0;
        }
        return ((((((((hashCode + i10) * 31) + this.f12375o.hashCode()) * 31) + this.f12377q.hashCode()) * 31) + this.f12376p.hashCode()) * 31) + this.f12379s.hashCode();
    }

    private MediaItem(String str, e eVar, h hVar, g gVar, MediaMetadata mediaMetadata, i iVar) {
        this.f12372d = str;
        this.f12373e = hVar;
        this.f12374i = hVar;
        this.f12375o = gVar;
        this.f12376p = mediaMetadata;
        this.f12377q = eVar;
        this.f12378r = eVar;
        this.f12379s = iVar;
    }
}
