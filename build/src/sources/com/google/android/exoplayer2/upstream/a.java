package com.google.android.exoplayer2.upstream;

import android.net.Uri;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import mc.u;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    public final Uri f13982a;

    /* renamed from: b  reason: collision with root package name */
    public final long f13983b;

    /* renamed from: c  reason: collision with root package name */
    public final int f13984c;

    /* renamed from: d  reason: collision with root package name */
    public final byte[] f13985d;

    /* renamed from: e  reason: collision with root package name */
    public final Map f13986e;

    /* renamed from: f  reason: collision with root package name */
    public final long f13987f;

    /* renamed from: g  reason: collision with root package name */
    public final long f13988g;

    /* renamed from: h  reason: collision with root package name */
    public final long f13989h;

    /* renamed from: i  reason: collision with root package name */
    public final String f13990i;

    /* renamed from: j  reason: collision with root package name */
    public final int f13991j;

    /* renamed from: k  reason: collision with root package name */
    public final Object f13992k;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private Uri f13993a;

        /* renamed from: b  reason: collision with root package name */
        private long f13994b;

        /* renamed from: c  reason: collision with root package name */
        private int f13995c;

        /* renamed from: d  reason: collision with root package name */
        private byte[] f13996d;

        /* renamed from: e  reason: collision with root package name */
        private Map f13997e;

        /* renamed from: f  reason: collision with root package name */
        private long f13998f;

        /* renamed from: g  reason: collision with root package name */
        private long f13999g;

        /* renamed from: h  reason: collision with root package name */
        private String f14000h;

        /* renamed from: i  reason: collision with root package name */
        private int f14001i;

        /* renamed from: j  reason: collision with root package name */
        private Object f14002j;

        public a a() {
            oe.a.j(this.f13993a, "The uri must be set.");
            return new a(this.f13993a, this.f13994b, this.f13995c, this.f13996d, this.f13997e, this.f13998f, this.f13999g, this.f14000h, this.f14001i, this.f14002j);
        }

        public b b(int i10) {
            this.f14001i = i10;
            return this;
        }

        public b c(byte[] bArr) {
            this.f13996d = bArr;
            return this;
        }

        public b d(int i10) {
            this.f13995c = i10;
            return this;
        }

        public b e(Map map) {
            this.f13997e = map;
            return this;
        }

        public b f(String str) {
            this.f14000h = str;
            return this;
        }

        public b g(long j10) {
            this.f13999g = j10;
            return this;
        }

        public b h(long j10) {
            this.f13998f = j10;
            return this;
        }

        public b i(Uri uri) {
            this.f13993a = uri;
            return this;
        }

        public b j(String str) {
            this.f13993a = Uri.parse(str);
            return this;
        }

        public b k(long j10) {
            this.f13994b = j10;
            return this;
        }

        public b() {
            this.f13995c = 1;
            this.f13997e = Collections.EMPTY_MAP;
            this.f13999g = -1L;
        }

        private b(a aVar) {
            this.f13993a = aVar.f13982a;
            this.f13994b = aVar.f13983b;
            this.f13995c = aVar.f13984c;
            this.f13996d = aVar.f13985d;
            this.f13997e = aVar.f13986e;
            this.f13998f = aVar.f13988g;
            this.f13999g = aVar.f13989h;
            this.f14000h = aVar.f13990i;
            this.f14001i = aVar.f13991j;
            this.f14002j = aVar.f13992k;
        }
    }

    static {
        u.a("goog.exo.datasource");
    }

    public static String c(int i10) {
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 == 3) {
                    return "HEAD";
                }
                throw new IllegalStateException();
            }
            return "POST";
        }
        return "GET";
    }

    public b a() {
        return new b();
    }

    public final String b() {
        return c(this.f13984c);
    }

    public boolean d(int i10) {
        if ((this.f13991j & i10) == i10) {
            return true;
        }
        return false;
    }

    public a e(long j10) {
        long j11 = this.f13989h;
        long j12 = -1;
        if (j11 != -1) {
            j12 = j11 - j10;
        }
        return f(j10, j12);
    }

    public a f(long j10, long j11) {
        if (j10 == 0 && this.f13989h == j11) {
            return this;
        }
        return new a(this.f13982a, this.f13983b, this.f13984c, this.f13985d, this.f13986e, this.f13988g + j10, j11, this.f13990i, this.f13991j, this.f13992k);
    }

    public a g(Uri uri) {
        return new a(uri, this.f13983b, this.f13984c, this.f13985d, this.f13986e, this.f13988g, this.f13989h, this.f13990i, this.f13991j, this.f13992k);
    }

    public String toString() {
        return "DataSpec[" + b() + " " + this.f13982a + ", " + this.f13988g + ", " + this.f13989h + ", " + this.f13990i + ", " + this.f13991j + "]";
    }

    private a(Uri uri, long j10, int i10, byte[] bArr, Map map, long j11, long j12, String str, int i11, Object obj) {
        byte[] bArr2 = bArr;
        long j13 = j10 + j11;
        boolean z10 = false;
        oe.a.a(j13 >= 0);
        oe.a.a(j11 >= 0);
        oe.a.a((j12 > 0 || j12 == -1) ? true : z10);
        this.f13982a = uri;
        this.f13983b = j10;
        this.f13984c = i10;
        this.f13985d = (bArr2 == null || bArr2.length == 0) ? null : bArr2;
        this.f13986e = Collections.unmodifiableMap(new HashMap(map));
        this.f13988g = j11;
        this.f13987f = j13;
        this.f13989h = j12;
        this.f13990i = str;
        this.f13991j = i11;
        this.f13992k = obj;
    }
}
