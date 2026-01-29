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
    public final String f12743d;

    /* renamed from: e  reason: collision with root package name */
    public final h f12744e;

    /* renamed from: i  reason: collision with root package name */
    public final h f12745i;

    /* renamed from: o  reason: collision with root package name */
    public final g f12746o;

    /* renamed from: p  reason: collision with root package name */
    public final MediaMetadata f12747p;

    /* renamed from: q  reason: collision with root package name */
    public final d f12748q;

    /* renamed from: r  reason: collision with root package name */
    public final e f12749r;

    /* renamed from: s  reason: collision with root package name */
    public final i f12750s;

    /* renamed from: t  reason: collision with root package name */
    public static final MediaItem f12736t = new c().a();

    /* renamed from: u  reason: collision with root package name */
    private static final String f12737u = ne.w0.B0(0);

    /* renamed from: v  reason: collision with root package name */
    private static final String f12738v = ne.w0.B0(1);

    /* renamed from: w  reason: collision with root package name */
    private static final String f12739w = ne.w0.B0(2);

    /* renamed from: x  reason: collision with root package name */
    private static final String f12740x = ne.w0.B0(3);

    /* renamed from: y  reason: collision with root package name */
    private static final String f12741y = ne.w0.B0(4);

    /* renamed from: z  reason: collision with root package name */
    private static final String f12742z = ne.w0.B0(5);
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
        private static final String f12751i = ne.w0.B0(0);

        /* renamed from: o  reason: collision with root package name */
        public static final g.a f12752o = new g.a() { // from class: lc.c0
            @Override // com.google.android.exoplayer2.g.a
            public final com.google.android.exoplayer2.g a(Bundle bundle) {
                MediaItem.b b10;
                b10 = MediaItem.b.b(bundle);
                return b10;
            }
        };

        /* renamed from: d  reason: collision with root package name */
        public final Uri f12753d;

        /* renamed from: e  reason: collision with root package name */
        public final Object f12754e;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class a {

            /* renamed from: a  reason: collision with root package name */
            private Uri f12755a;

            /* renamed from: b  reason: collision with root package name */
            private Object f12756b;

            public a(Uri uri) {
                this.f12755a = uri;
            }

            public b c() {
                return new b(this);
            }
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static b b(Bundle bundle) {
            Uri uri = (Uri) bundle.getParcelable(f12751i);
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
            if (this.f12753d.equals(bVar.f12753d) && ne.w0.c(this.f12754e, bVar.f12754e)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int i10;
            int hashCode = this.f12753d.hashCode() * 31;
            Object obj = this.f12754e;
            if (obj != null) {
                i10 = obj.hashCode();
            } else {
                i10 = 0;
            }
            return hashCode + i10;
        }

        private b(a aVar) {
            this.f12753d = aVar.f12755a;
            this.f12754e = aVar.f12756b;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c {

        /* renamed from: a  reason: collision with root package name */
        private String f12757a;

        /* renamed from: b  reason: collision with root package name */
        private Uri f12758b;

        /* renamed from: c  reason: collision with root package name */
        private String f12759c;

        /* renamed from: g  reason: collision with root package name */
        private String f12763g;

        /* renamed from: i  reason: collision with root package name */
        private b f12765i;

        /* renamed from: j  reason: collision with root package name */
        private Object f12766j;

        /* renamed from: k  reason: collision with root package name */
        private MediaMetadata f12767k;

        /* renamed from: d  reason: collision with root package name */
        private d.a f12760d = new d.a();

        /* renamed from: e  reason: collision with root package name */
        private f.a f12761e = new f.a();

        /* renamed from: f  reason: collision with root package name */
        private List f12762f = Collections.EMPTY_LIST;

        /* renamed from: h  reason: collision with root package name */
        private ji.s f12764h = ji.s.r();

        /* renamed from: l  reason: collision with root package name */
        private g.a f12768l = new g.a();

        /* renamed from: m  reason: collision with root package name */
        private i f12769m = i.f12843o;

        public MediaItem a() {
            boolean z10;
            h hVar;
            if (this.f12761e.f12804b != null && this.f12761e.f12803a == null) {
                z10 = false;
            } else {
                z10 = true;
            }
            ne.a.g(z10);
            Uri uri = this.f12758b;
            f fVar = null;
            if (uri != null) {
                String str = this.f12759c;
                if (this.f12761e.f12803a != null) {
                    fVar = this.f12761e.i();
                }
                hVar = new h(uri, str, fVar, this.f12765i, this.f12762f, this.f12763g, this.f12764h, this.f12766j);
            } else {
                hVar = null;
            }
            String str2 = this.f12757a;
            if (str2 == null) {
                str2 = "";
            }
            String str3 = str2;
            e g10 = this.f12760d.g();
            g f10 = this.f12768l.f();
            MediaMetadata mediaMetadata = this.f12767k;
            if (mediaMetadata == null) {
                mediaMetadata = MediaMetadata.T;
            }
            return new MediaItem(str3, g10, hVar, f10, mediaMetadata, this.f12769m);
        }

        public c b(String str) {
            this.f12757a = (String) ne.a.e(str);
            return this;
        }

        public c c(List list) {
            this.f12764h = ji.s.m(list);
            return this;
        }

        public c d(Object obj) {
            this.f12766j = obj;
            return this;
        }

        public c e(Uri uri) {
            this.f12758b = uri;
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
        public static final d f12770q = new a().f();

        /* renamed from: r  reason: collision with root package name */
        private static final String f12771r = ne.w0.B0(0);

        /* renamed from: s  reason: collision with root package name */
        private static final String f12772s = ne.w0.B0(1);

        /* renamed from: t  reason: collision with root package name */
        private static final String f12773t = ne.w0.B0(2);

        /* renamed from: u  reason: collision with root package name */
        private static final String f12774u = ne.w0.B0(3);

        /* renamed from: v  reason: collision with root package name */
        private static final String f12775v = ne.w0.B0(4);

        /* renamed from: w  reason: collision with root package name */
        public static final g.a f12776w = new g.a() { // from class: lc.d0
            @Override // com.google.android.exoplayer2.g.a
            public final com.google.android.exoplayer2.g a(Bundle bundle) {
                return MediaItem.d.a(bundle);
            }
        };

        /* renamed from: d  reason: collision with root package name */
        public final long f12777d;

        /* renamed from: e  reason: collision with root package name */
        public final long f12778e;

        /* renamed from: i  reason: collision with root package name */
        public final boolean f12779i;

        /* renamed from: o  reason: collision with root package name */
        public final boolean f12780o;

        /* renamed from: p  reason: collision with root package name */
        public final boolean f12781p;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class a {

            /* renamed from: a  reason: collision with root package name */
            private long f12782a;

            /* renamed from: b  reason: collision with root package name */
            private long f12783b = Long.MIN_VALUE;

            /* renamed from: c  reason: collision with root package name */
            private boolean f12784c;

            /* renamed from: d  reason: collision with root package name */
            private boolean f12785d;

            /* renamed from: e  reason: collision with root package name */
            private boolean f12786e;

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
                this.f12783b = j10;
                return this;
            }

            public a i(boolean z10) {
                this.f12785d = z10;
                return this;
            }

            public a j(boolean z10) {
                this.f12784c = z10;
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
                this.f12782a = j10;
                return this;
            }

            public a l(boolean z10) {
                this.f12786e = z10;
                return this;
            }
        }

        public static /* synthetic */ e a(Bundle bundle) {
            a aVar = new a();
            String str = f12771r;
            d dVar = f12770q;
            return aVar.k(bundle.getLong(str, dVar.f12777d)).h(bundle.getLong(f12772s, dVar.f12778e)).j(bundle.getBoolean(f12773t, dVar.f12779i)).i(bundle.getBoolean(f12774u, dVar.f12780o)).l(bundle.getBoolean(f12775v, dVar.f12781p)).g();
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof d)) {
                return false;
            }
            d dVar = (d) obj;
            if (this.f12777d == dVar.f12777d && this.f12778e == dVar.f12778e && this.f12779i == dVar.f12779i && this.f12780o == dVar.f12780o && this.f12781p == dVar.f12781p) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            long j10 = this.f12777d;
            long j11 = this.f12778e;
            return (((((((((int) (j10 ^ (j10 >>> 32))) * 31) + ((int) ((j11 >>> 32) ^ j11))) * 31) + (this.f12779i ? 1 : 0)) * 31) + (this.f12780o ? 1 : 0)) * 31) + (this.f12781p ? 1 : 0);
        }

        private d(a aVar) {
            this.f12777d = aVar.f12782a;
            this.f12778e = aVar.f12783b;
            this.f12779i = aVar.f12784c;
            this.f12780o = aVar.f12785d;
            this.f12781p = aVar.f12786e;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class e extends d {

        /* renamed from: x  reason: collision with root package name */
        public static final e f12787x = new d.a().g();

        private e(d.a aVar) {
            super(aVar);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class f implements com.google.android.exoplayer2.g {

        /* renamed from: d  reason: collision with root package name */
        public final UUID f12792d;

        /* renamed from: e  reason: collision with root package name */
        public final UUID f12793e;

        /* renamed from: i  reason: collision with root package name */
        public final Uri f12794i;

        /* renamed from: o  reason: collision with root package name */
        public final ji.t f12795o;

        /* renamed from: p  reason: collision with root package name */
        public final ji.t f12796p;

        /* renamed from: q  reason: collision with root package name */
        public final boolean f12797q;

        /* renamed from: r  reason: collision with root package name */
        public final boolean f12798r;

        /* renamed from: s  reason: collision with root package name */
        public final boolean f12799s;

        /* renamed from: t  reason: collision with root package name */
        public final ji.s f12800t;

        /* renamed from: u  reason: collision with root package name */
        public final ji.s f12801u;

        /* renamed from: v  reason: collision with root package name */
        private final byte[] f12802v;

        /* renamed from: w  reason: collision with root package name */
        private static final String f12788w = ne.w0.B0(0);

        /* renamed from: x  reason: collision with root package name */
        private static final String f12789x = ne.w0.B0(1);

        /* renamed from: y  reason: collision with root package name */
        private static final String f12790y = ne.w0.B0(2);

        /* renamed from: z  reason: collision with root package name */
        private static final String f12791z = ne.w0.B0(3);
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
            private UUID f12803a;

            /* renamed from: b  reason: collision with root package name */
            private Uri f12804b;

            /* renamed from: c  reason: collision with root package name */
            private ji.t f12805c;

            /* renamed from: d  reason: collision with root package name */
            private boolean f12806d;

            /* renamed from: e  reason: collision with root package name */
            private boolean f12807e;

            /* renamed from: f  reason: collision with root package name */
            private boolean f12808f;

            /* renamed from: g  reason: collision with root package name */
            private ji.s f12809g;

            /* renamed from: h  reason: collision with root package name */
            private byte[] f12810h;

            public f i() {
                return new f(this);
            }

            public a j(boolean z10) {
                this.f12808f = z10;
                return this;
            }

            public a k(List list) {
                this.f12809g = ji.s.m(list);
                return this;
            }

            public a l(byte[] bArr) {
                byte[] bArr2;
                if (bArr != null) {
                    bArr2 = Arrays.copyOf(bArr, bArr.length);
                } else {
                    bArr2 = null;
                }
                this.f12810h = bArr2;
                return this;
            }

            public a m(Map map) {
                this.f12805c = ji.t.c(map);
                return this;
            }

            public a n(Uri uri) {
                this.f12804b = uri;
                return this;
            }

            public a o(boolean z10) {
                this.f12806d = z10;
                return this;
            }

            public a p(boolean z10) {
                this.f12807e = z10;
                return this;
            }

            public a(UUID uuid) {
                this.f12803a = uuid;
                this.f12805c = ji.t.j();
                this.f12809g = ji.s.r();
            }

            private a() {
                this.f12805c = ji.t.j();
                this.f12809g = ji.s.r();
            }
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static f b(Bundle bundle) {
            UUID fromString = UUID.fromString((String) ne.a.e(bundle.getString(f12788w)));
            ji.t b10 = ne.d.b(ne.d.f(bundle, f12790y, Bundle.EMPTY));
            boolean z10 = bundle.getBoolean(f12791z, false);
            boolean z11 = bundle.getBoolean(A, false);
            boolean z12 = bundle.getBoolean(B, false);
            ji.s m10 = ji.s.m(ne.d.g(bundle, C, new ArrayList()));
            return new a(fromString).n((Uri) bundle.getParcelable(f12789x)).m(b10).o(z10).j(z12).p(z11).k(m10).l(bundle.getByteArray(D)).i();
        }

        public byte[] c() {
            byte[] bArr = this.f12802v;
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
            if (this.f12792d.equals(fVar.f12792d) && ne.w0.c(this.f12794i, fVar.f12794i) && ne.w0.c(this.f12796p, fVar.f12796p) && this.f12797q == fVar.f12797q && this.f12799s == fVar.f12799s && this.f12798r == fVar.f12798r && this.f12801u.equals(fVar.f12801u) && Arrays.equals(this.f12802v, fVar.f12802v)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int i10;
            int hashCode = this.f12792d.hashCode() * 31;
            Uri uri = this.f12794i;
            if (uri != null) {
                i10 = uri.hashCode();
            } else {
                i10 = 0;
            }
            return ((((((((((((hashCode + i10) * 31) + this.f12796p.hashCode()) * 31) + (this.f12797q ? 1 : 0)) * 31) + (this.f12799s ? 1 : 0)) * 31) + (this.f12798r ? 1 : 0)) * 31) + this.f12801u.hashCode()) * 31) + Arrays.hashCode(this.f12802v);
        }

        private f(a aVar) {
            ne.a.g((aVar.f12808f && aVar.f12804b == null) ? false : true);
            UUID uuid = (UUID) ne.a.e(aVar.f12803a);
            this.f12792d = uuid;
            this.f12793e = uuid;
            this.f12794i = aVar.f12804b;
            this.f12795o = aVar.f12805c;
            this.f12796p = aVar.f12805c;
            this.f12797q = aVar.f12806d;
            this.f12799s = aVar.f12808f;
            this.f12798r = aVar.f12807e;
            this.f12800t = aVar.f12809g;
            this.f12801u = aVar.f12809g;
            this.f12802v = aVar.f12810h != null ? Arrays.copyOf(aVar.f12810h, aVar.f12810h.length) : null;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class g implements com.google.android.exoplayer2.g {

        /* renamed from: q  reason: collision with root package name */
        public static final g f12811q = new a().f();

        /* renamed from: r  reason: collision with root package name */
        private static final String f12812r = ne.w0.B0(0);

        /* renamed from: s  reason: collision with root package name */
        private static final String f12813s = ne.w0.B0(1);

        /* renamed from: t  reason: collision with root package name */
        private static final String f12814t = ne.w0.B0(2);

        /* renamed from: u  reason: collision with root package name */
        private static final String f12815u = ne.w0.B0(3);

        /* renamed from: v  reason: collision with root package name */
        private static final String f12816v = ne.w0.B0(4);

        /* renamed from: w  reason: collision with root package name */
        public static final g.a f12817w = new g.a() { // from class: lc.f0
            @Override // com.google.android.exoplayer2.g.a
            public final com.google.android.exoplayer2.g a(Bundle bundle) {
                return MediaItem.g.a(bundle);
            }
        };

        /* renamed from: d  reason: collision with root package name */
        public final long f12818d;

        /* renamed from: e  reason: collision with root package name */
        public final long f12819e;

        /* renamed from: i  reason: collision with root package name */
        public final long f12820i;

        /* renamed from: o  reason: collision with root package name */
        public final float f12821o;

        /* renamed from: p  reason: collision with root package name */
        public final float f12822p;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class a {

            /* renamed from: a  reason: collision with root package name */
            private long f12823a = -9223372036854775807L;

            /* renamed from: b  reason: collision with root package name */
            private long f12824b = -9223372036854775807L;

            /* renamed from: c  reason: collision with root package name */
            private long f12825c = -9223372036854775807L;

            /* renamed from: d  reason: collision with root package name */
            private float f12826d = -3.4028235E38f;

            /* renamed from: e  reason: collision with root package name */
            private float f12827e = -3.4028235E38f;

            public g f() {
                return new g(this);
            }

            public a g(long j10) {
                this.f12825c = j10;
                return this;
            }

            public a h(float f10) {
                this.f12827e = f10;
                return this;
            }

            public a i(long j10) {
                this.f12824b = j10;
                return this;
            }

            public a j(float f10) {
                this.f12826d = f10;
                return this;
            }

            public a k(long j10) {
                this.f12823a = j10;
                return this;
            }
        }

        public static /* synthetic */ g a(Bundle bundle) {
            String str = f12812r;
            g gVar = f12811q;
            return new g(bundle.getLong(str, gVar.f12818d), bundle.getLong(f12813s, gVar.f12819e), bundle.getLong(f12814t, gVar.f12820i), bundle.getFloat(f12815u, gVar.f12821o), bundle.getFloat(f12816v, gVar.f12822p));
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof g)) {
                return false;
            }
            g gVar = (g) obj;
            if (this.f12818d == gVar.f12818d && this.f12819e == gVar.f12819e && this.f12820i == gVar.f12820i && this.f12821o == gVar.f12821o && this.f12822p == gVar.f12822p) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int i10;
            long j10 = this.f12818d;
            long j11 = this.f12819e;
            long j12 = this.f12820i;
            int i11 = ((((((int) (j10 ^ (j10 >>> 32))) * 31) + ((int) (j11 ^ (j11 >>> 32)))) * 31) + ((int) ((j12 >>> 32) ^ j12))) * 31;
            float f10 = this.f12821o;
            int i12 = 0;
            if (f10 != 0.0f) {
                i10 = Float.floatToIntBits(f10);
            } else {
                i10 = 0;
            }
            int i13 = (i11 + i10) * 31;
            float f11 = this.f12822p;
            if (f11 != 0.0f) {
                i12 = Float.floatToIntBits(f11);
            }
            return i13 + i12;
        }

        private g(a aVar) {
            this(aVar.f12823a, aVar.f12824b, aVar.f12825c, aVar.f12826d, aVar.f12827e);
        }

        public g(long j10, long j11, long j12, float f10, float f11) {
            this.f12818d = j10;
            this.f12819e = j11;
            this.f12820i = j12;
            this.f12821o = f10;
            this.f12822p = f11;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class h implements com.google.android.exoplayer2.g {

        /* renamed from: d  reason: collision with root package name */
        public final Uri f12834d;

        /* renamed from: e  reason: collision with root package name */
        public final String f12835e;

        /* renamed from: i  reason: collision with root package name */
        public final f f12836i;

        /* renamed from: o  reason: collision with root package name */
        public final b f12837o;

        /* renamed from: p  reason: collision with root package name */
        public final List f12838p;

        /* renamed from: q  reason: collision with root package name */
        public final String f12839q;

        /* renamed from: r  reason: collision with root package name */
        public final ji.s f12840r;

        /* renamed from: s  reason: collision with root package name */
        public final List f12841s;

        /* renamed from: t  reason: collision with root package name */
        public final Object f12842t;

        /* renamed from: u  reason: collision with root package name */
        private static final String f12828u = ne.w0.B0(0);

        /* renamed from: v  reason: collision with root package name */
        private static final String f12829v = ne.w0.B0(1);

        /* renamed from: w  reason: collision with root package name */
        private static final String f12830w = ne.w0.B0(2);

        /* renamed from: x  reason: collision with root package name */
        private static final String f12831x = ne.w0.B0(3);

        /* renamed from: y  reason: collision with root package name */
        private static final String f12832y = ne.w0.B0(4);

        /* renamed from: z  reason: collision with root package name */
        private static final String f12833z = ne.w0.B0(5);
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
            Bundle bundle2 = bundle.getBundle(f12830w);
            b bVar = null;
            if (bundle2 == null) {
                fVar = null;
            } else {
                fVar = (f) f.E.a(bundle2);
            }
            Bundle bundle3 = bundle.getBundle(f12831x);
            if (bundle3 != null) {
                bVar = (b) b.f12752o.a(bundle3);
            }
            b bVar2 = bVar;
            ArrayList parcelableArrayList = bundle.getParcelableArrayList(f12832y);
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
                d11 = ne.d.d(k.f12861z, parcelableArrayList2);
            }
            return new h((Uri) ne.a.e((Uri) bundle.getParcelable(f12828u)), bundle.getString(f12829v), fVar, bVar2, sVar, bundle.getString(f12833z), d11, null);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof h)) {
                return false;
            }
            h hVar = (h) obj;
            if (this.f12834d.equals(hVar.f12834d) && ne.w0.c(this.f12835e, hVar.f12835e) && ne.w0.c(this.f12836i, hVar.f12836i) && ne.w0.c(this.f12837o, hVar.f12837o) && this.f12838p.equals(hVar.f12838p) && ne.w0.c(this.f12839q, hVar.f12839q) && this.f12840r.equals(hVar.f12840r) && ne.w0.c(this.f12842t, hVar.f12842t)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4;
            int hashCode5 = this.f12834d.hashCode() * 31;
            String str = this.f12835e;
            int i10 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int i11 = (hashCode5 + hashCode) * 31;
            f fVar = this.f12836i;
            if (fVar == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = fVar.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            b bVar = this.f12837o;
            if (bVar == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = bVar.hashCode();
            }
            int hashCode6 = (((i12 + hashCode3) * 31) + this.f12838p.hashCode()) * 31;
            String str2 = this.f12839q;
            if (str2 == null) {
                hashCode4 = 0;
            } else {
                hashCode4 = str2.hashCode();
            }
            int hashCode7 = (((hashCode6 + hashCode4) * 31) + this.f12840r.hashCode()) * 31;
            Object obj = this.f12842t;
            if (obj != null) {
                i10 = obj.hashCode();
            }
            return hashCode7 + i10;
        }

        private h(Uri uri, String str, f fVar, b bVar, List list, String str2, ji.s sVar, Object obj) {
            this.f12834d = uri;
            this.f12835e = str;
            this.f12836i = fVar;
            this.f12837o = bVar;
            this.f12838p = list;
            this.f12839q = str2;
            this.f12840r = sVar;
            s.a j10 = ji.s.j();
            for (int i10 = 0; i10 < sVar.size(); i10++) {
                j10.a(((k) sVar.get(i10)).b().j());
            }
            this.f12841s = j10.k();
            this.f12842t = obj;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class i implements com.google.android.exoplayer2.g {

        /* renamed from: o  reason: collision with root package name */
        public static final i f12843o = new a().d();

        /* renamed from: p  reason: collision with root package name */
        private static final String f12844p = ne.w0.B0(0);

        /* renamed from: q  reason: collision with root package name */
        private static final String f12845q = ne.w0.B0(1);

        /* renamed from: r  reason: collision with root package name */
        private static final String f12846r = ne.w0.B0(2);

        /* renamed from: s  reason: collision with root package name */
        public static final g.a f12847s = new g.a() { // from class: lc.i0
            @Override // com.google.android.exoplayer2.g.a
            public final com.google.android.exoplayer2.g a(Bundle bundle) {
                MediaItem.i d10;
                d10 = new MediaItem.i.a().f((Uri) bundle.getParcelable(MediaItem.i.f12844p)).g(bundle.getString(MediaItem.i.f12845q)).e(bundle.getBundle(MediaItem.i.f12846r)).d();
                return d10;
            }
        };

        /* renamed from: d  reason: collision with root package name */
        public final Uri f12848d;

        /* renamed from: e  reason: collision with root package name */
        public final String f12849e;

        /* renamed from: i  reason: collision with root package name */
        public final Bundle f12850i;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class a {

            /* renamed from: a  reason: collision with root package name */
            private Uri f12851a;

            /* renamed from: b  reason: collision with root package name */
            private String f12852b;

            /* renamed from: c  reason: collision with root package name */
            private Bundle f12853c;

            public i d() {
                return new i(this);
            }

            public a e(Bundle bundle) {
                this.f12853c = bundle;
                return this;
            }

            public a f(Uri uri) {
                this.f12851a = uri;
                return this;
            }

            public a g(String str) {
                this.f12852b = str;
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
            if (ne.w0.c(this.f12848d, iVar.f12848d) && ne.w0.c(this.f12849e, iVar.f12849e)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int hashCode;
            Uri uri = this.f12848d;
            int i10 = 0;
            if (uri == null) {
                hashCode = 0;
            } else {
                hashCode = uri.hashCode();
            }
            int i11 = hashCode * 31;
            String str = this.f12849e;
            if (str != null) {
                i10 = str.hashCode();
            }
            return i11 + i10;
        }

        private i(a aVar) {
            this.f12848d = aVar.f12851a;
            this.f12849e = aVar.f12852b;
            this.f12850i = aVar.f12853c;
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
        private static final String f12854s = ne.w0.B0(0);

        /* renamed from: t  reason: collision with root package name */
        private static final String f12855t = ne.w0.B0(1);

        /* renamed from: u  reason: collision with root package name */
        private static final String f12856u = ne.w0.B0(2);

        /* renamed from: v  reason: collision with root package name */
        private static final String f12857v = ne.w0.B0(3);

        /* renamed from: w  reason: collision with root package name */
        private static final String f12858w = ne.w0.B0(4);

        /* renamed from: x  reason: collision with root package name */
        private static final String f12859x = ne.w0.B0(5);

        /* renamed from: y  reason: collision with root package name */
        private static final String f12860y = ne.w0.B0(6);

        /* renamed from: z  reason: collision with root package name */
        public static final g.a f12861z = new g.a() { // from class: lc.j0
            @Override // com.google.android.exoplayer2.g.a
            public final com.google.android.exoplayer2.g a(Bundle bundle) {
                MediaItem.k c10;
                c10 = MediaItem.k.c(bundle);
                return c10;
            }
        };

        /* renamed from: d  reason: collision with root package name */
        public final Uri f12862d;

        /* renamed from: e  reason: collision with root package name */
        public final String f12863e;

        /* renamed from: i  reason: collision with root package name */
        public final String f12864i;

        /* renamed from: o  reason: collision with root package name */
        public final int f12865o;

        /* renamed from: p  reason: collision with root package name */
        public final int f12866p;

        /* renamed from: q  reason: collision with root package name */
        public final String f12867q;

        /* renamed from: r  reason: collision with root package name */
        public final String f12868r;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class a {

            /* renamed from: a  reason: collision with root package name */
            private Uri f12869a;

            /* renamed from: b  reason: collision with root package name */
            private String f12870b;

            /* renamed from: c  reason: collision with root package name */
            private String f12871c;

            /* renamed from: d  reason: collision with root package name */
            private int f12872d;

            /* renamed from: e  reason: collision with root package name */
            private int f12873e;

            /* renamed from: f  reason: collision with root package name */
            private String f12874f;

            /* renamed from: g  reason: collision with root package name */
            private String f12875g;

            /* JADX INFO: Access modifiers changed from: private */
            public j j() {
                return new j(this);
            }

            public k i() {
                return new k(this);
            }

            public a k(String str) {
                this.f12875g = str;
                return this;
            }

            public a l(String str) {
                this.f12874f = str;
                return this;
            }

            public a m(String str) {
                this.f12871c = str;
                return this;
            }

            public a n(String str) {
                this.f12870b = str;
                return this;
            }

            public a o(int i10) {
                this.f12873e = i10;
                return this;
            }

            public a p(int i10) {
                this.f12872d = i10;
                return this;
            }

            public a(Uri uri) {
                this.f12869a = uri;
            }

            private a(k kVar) {
                this.f12869a = kVar.f12862d;
                this.f12870b = kVar.f12863e;
                this.f12871c = kVar.f12864i;
                this.f12872d = kVar.f12865o;
                this.f12873e = kVar.f12866p;
                this.f12874f = kVar.f12867q;
                this.f12875g = kVar.f12868r;
            }
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static k c(Bundle bundle) {
            String string = bundle.getString(f12855t);
            String string2 = bundle.getString(f12856u);
            int i10 = bundle.getInt(f12857v, 0);
            int i11 = bundle.getInt(f12858w, 0);
            String string3 = bundle.getString(f12859x);
            return new a((Uri) ne.a.e((Uri) bundle.getParcelable(f12854s))).n(string).m(string2).p(i10).o(i11).l(string3).k(bundle.getString(f12860y)).i();
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
            if (this.f12862d.equals(kVar.f12862d) && ne.w0.c(this.f12863e, kVar.f12863e) && ne.w0.c(this.f12864i, kVar.f12864i) && this.f12865o == kVar.f12865o && this.f12866p == kVar.f12866p && ne.w0.c(this.f12867q, kVar.f12867q) && ne.w0.c(this.f12868r, kVar.f12868r)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4 = this.f12862d.hashCode() * 31;
            String str = this.f12863e;
            int i10 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int i11 = (hashCode4 + hashCode) * 31;
            String str2 = this.f12864i;
            if (str2 == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str2.hashCode();
            }
            int i12 = (((((i11 + hashCode2) * 31) + this.f12865o) * 31) + this.f12866p) * 31;
            String str3 = this.f12867q;
            if (str3 == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = str3.hashCode();
            }
            int i13 = (i12 + hashCode3) * 31;
            String str4 = this.f12868r;
            if (str4 != null) {
                i10 = str4.hashCode();
            }
            return i13 + i10;
        }

        private k(a aVar) {
            this.f12862d = aVar.f12869a;
            this.f12863e = aVar.f12870b;
            this.f12864i = aVar.f12871c;
            this.f12865o = aVar.f12872d;
            this.f12866p = aVar.f12873e;
            this.f12867q = aVar.f12874f;
            this.f12868r = aVar.f12875g;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static MediaItem b(Bundle bundle) {
        g gVar;
        MediaMetadata mediaMetadata;
        e eVar;
        i iVar;
        h hVar;
        String str = (String) ne.a.e(bundle.getString(f12737u, ""));
        Bundle bundle2 = bundle.getBundle(f12738v);
        if (bundle2 == null) {
            gVar = g.f12811q;
        } else {
            gVar = (g) g.f12817w.a(bundle2);
        }
        g gVar2 = gVar;
        Bundle bundle3 = bundle.getBundle(f12739w);
        if (bundle3 == null) {
            mediaMetadata = MediaMetadata.T;
        } else {
            mediaMetadata = (MediaMetadata) MediaMetadata.B0.a(bundle3);
        }
        MediaMetadata mediaMetadata2 = mediaMetadata;
        Bundle bundle4 = bundle.getBundle(f12740x);
        if (bundle4 == null) {
            eVar = e.f12787x;
        } else {
            eVar = (e) d.f12776w.a(bundle4);
        }
        e eVar2 = eVar;
        Bundle bundle5 = bundle.getBundle(f12741y);
        if (bundle5 == null) {
            iVar = i.f12843o;
        } else {
            iVar = (i) i.f12847s.a(bundle5);
        }
        i iVar2 = iVar;
        Bundle bundle6 = bundle.getBundle(f12742z);
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
        if (ne.w0.c(this.f12743d, mediaItem.f12743d) && this.f12748q.equals(mediaItem.f12748q) && ne.w0.c(this.f12744e, mediaItem.f12744e) && ne.w0.c(this.f12746o, mediaItem.f12746o) && ne.w0.c(this.f12747p, mediaItem.f12747p) && ne.w0.c(this.f12750s, mediaItem.f12750s)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int hashCode = this.f12743d.hashCode() * 31;
        h hVar = this.f12744e;
        if (hVar != null) {
            i10 = hVar.hashCode();
        } else {
            i10 = 0;
        }
        return ((((((((hashCode + i10) * 31) + this.f12746o.hashCode()) * 31) + this.f12748q.hashCode()) * 31) + this.f12747p.hashCode()) * 31) + this.f12750s.hashCode();
    }

    private MediaItem(String str, e eVar, h hVar, g gVar, MediaMetadata mediaMetadata, i iVar) {
        this.f12743d = str;
        this.f12744e = hVar;
        this.f12745i = hVar;
        this.f12746o = gVar;
        this.f12747p = mediaMetadata;
        this.f12748q = eVar;
        this.f12749r = eVar;
        this.f12750s = iVar;
    }
}
