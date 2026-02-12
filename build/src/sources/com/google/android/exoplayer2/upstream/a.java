package com.google.android.exoplayer2.upstream;

import android.net.Uri;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import mc.u;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    public final Uri f13983a;

    /* renamed from: b  reason: collision with root package name */
    public final long f13984b;

    /* renamed from: c  reason: collision with root package name */
    public final int f13985c;

    /* renamed from: d  reason: collision with root package name */
    public final byte[] f13986d;

    /* renamed from: e  reason: collision with root package name */
    public final Map f13987e;

    /* renamed from: f  reason: collision with root package name */
    public final long f13988f;

    /* renamed from: g  reason: collision with root package name */
    public final long f13989g;

    /* renamed from: h  reason: collision with root package name */
    public final long f13990h;

    /* renamed from: i  reason: collision with root package name */
    public final String f13991i;

    /* renamed from: j  reason: collision with root package name */
    public final int f13992j;

    /* renamed from: k  reason: collision with root package name */
    public final Object f13993k;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private Uri f13994a;

        /* renamed from: b  reason: collision with root package name */
        private long f13995b;

        /* renamed from: c  reason: collision with root package name */
        private int f13996c;

        /* renamed from: d  reason: collision with root package name */
        private byte[] f13997d;

        /* renamed from: e  reason: collision with root package name */
        private Map f13998e;

        /* renamed from: f  reason: collision with root package name */
        private long f13999f;

        /* renamed from: g  reason: collision with root package name */
        private long f14000g;

        /* renamed from: h  reason: collision with root package name */
        private String f14001h;

        /* renamed from: i  reason: collision with root package name */
        private int f14002i;

        /* renamed from: j  reason: collision with root package name */
        private Object f14003j;

        public a a() {
            oe.a.j(this.f13994a, "The uri must be set.");
            return new a(this.f13994a, this.f13995b, this.f13996c, this.f13997d, this.f13998e, this.f13999f, this.f14000g, this.f14001h, this.f14002i, this.f14003j);
        }

        public b b(int i10) {
            this.f14002i = i10;
            return this;
        }

        public b c(byte[] bArr) {
            this.f13997d = bArr;
            return this;
        }

        public b d(int i10) {
            this.f13996c = i10;
            return this;
        }

        public b e(Map map) {
            this.f13998e = map;
            return this;
        }

        public b f(String str) {
            this.f14001h = str;
            return this;
        }

        public b g(long j10) {
            this.f14000g = j10;
            return this;
        }

        public b h(long j10) {
            this.f13999f = j10;
            return this;
        }

        public b i(Uri uri) {
            this.f13994a = uri;
            return this;
        }

        public b j(String str) {
            this.f13994a = Uri.parse(str);
            return this;
        }

        public b k(long j10) {
            this.f13995b = j10;
            return this;
        }

        public b() {
            this.f13996c = 1;
            this.f13998e = Collections.EMPTY_MAP;
            this.f14000g = -1L;
        }

        private b(a aVar) {
            this.f13994a = aVar.f13983a;
            this.f13995b = aVar.f13984b;
            this.f13996c = aVar.f13985c;
            this.f13997d = aVar.f13986d;
            this.f13998e = aVar.f13987e;
            this.f13999f = aVar.f13989g;
            this.f14000g = aVar.f13990h;
            this.f14001h = aVar.f13991i;
            this.f14002i = aVar.f13992j;
            this.f14003j = aVar.f13993k;
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
        return c(this.f13985c);
    }

    public boolean d(int i10) {
        if ((this.f13992j & i10) == i10) {
            return true;
        }
        return false;
    }

    public a e(long j10) {
        long j11 = this.f13990h;
        long j12 = -1;
        if (j11 != -1) {
            j12 = j11 - j10;
        }
        return f(j10, j12);
    }

    public a f(long j10, long j11) {
        if (j10 == 0 && this.f13990h == j11) {
            return this;
        }
        return new a(this.f13983a, this.f13984b, this.f13985c, this.f13986d, this.f13987e, this.f13989g + j10, j11, this.f13991i, this.f13992j, this.f13993k);
    }

    public a g(Uri uri) {
        return new a(uri, this.f13984b, this.f13985c, this.f13986d, this.f13987e, this.f13989g, this.f13990h, this.f13991i, this.f13992j, this.f13993k);
    }

    public String toString() {
        return "DataSpec[" + b() + " " + this.f13983a + ", " + this.f13989g + ", " + this.f13990h + ", " + this.f13991i + ", " + this.f13992j + "]";
    }

    private a(Uri uri, long j10, int i10, byte[] bArr, Map map, long j11, long j12, String str, int i11, Object obj) {
        byte[] bArr2 = bArr;
        long j13 = j10 + j11;
        boolean z10 = false;
        oe.a.a(j13 >= 0);
        oe.a.a(j11 >= 0);
        oe.a.a((j12 > 0 || j12 == -1) ? true : z10);
        this.f13983a = uri;
        this.f13984b = j10;
        this.f13985c = i10;
        this.f13986d = (bArr2 == null || bArr2.length == 0) ? null : bArr2;
        this.f13987e = Collections.unmodifiableMap(new HashMap(map));
        this.f13989g = j11;
        this.f13988f = j13;
        this.f13990h = j12;
        this.f13991i = str;
        this.f13992j = i11;
        this.f13993k = obj;
    }
}
