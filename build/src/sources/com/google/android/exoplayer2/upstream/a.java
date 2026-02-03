package com.google.android.exoplayer2.upstream;

import android.net.Uri;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import lc.u;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    public final Uri f13975a;

    /* renamed from: b  reason: collision with root package name */
    public final long f13976b;

    /* renamed from: c  reason: collision with root package name */
    public final int f13977c;

    /* renamed from: d  reason: collision with root package name */
    public final byte[] f13978d;

    /* renamed from: e  reason: collision with root package name */
    public final Map f13979e;

    /* renamed from: f  reason: collision with root package name */
    public final long f13980f;

    /* renamed from: g  reason: collision with root package name */
    public final long f13981g;

    /* renamed from: h  reason: collision with root package name */
    public final long f13982h;

    /* renamed from: i  reason: collision with root package name */
    public final String f13983i;

    /* renamed from: j  reason: collision with root package name */
    public final int f13984j;

    /* renamed from: k  reason: collision with root package name */
    public final Object f13985k;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private Uri f13986a;

        /* renamed from: b  reason: collision with root package name */
        private long f13987b;

        /* renamed from: c  reason: collision with root package name */
        private int f13988c;

        /* renamed from: d  reason: collision with root package name */
        private byte[] f13989d;

        /* renamed from: e  reason: collision with root package name */
        private Map f13990e;

        /* renamed from: f  reason: collision with root package name */
        private long f13991f;

        /* renamed from: g  reason: collision with root package name */
        private long f13992g;

        /* renamed from: h  reason: collision with root package name */
        private String f13993h;

        /* renamed from: i  reason: collision with root package name */
        private int f13994i;

        /* renamed from: j  reason: collision with root package name */
        private Object f13995j;

        public a a() {
            ne.a.j(this.f13986a, "The uri must be set.");
            return new a(this.f13986a, this.f13987b, this.f13988c, this.f13989d, this.f13990e, this.f13991f, this.f13992g, this.f13993h, this.f13994i, this.f13995j);
        }

        public b b(int i10) {
            this.f13994i = i10;
            return this;
        }

        public b c(byte[] bArr) {
            this.f13989d = bArr;
            return this;
        }

        public b d(int i10) {
            this.f13988c = i10;
            return this;
        }

        public b e(Map map) {
            this.f13990e = map;
            return this;
        }

        public b f(String str) {
            this.f13993h = str;
            return this;
        }

        public b g(long j10) {
            this.f13992g = j10;
            return this;
        }

        public b h(long j10) {
            this.f13991f = j10;
            return this;
        }

        public b i(Uri uri) {
            this.f13986a = uri;
            return this;
        }

        public b j(String str) {
            this.f13986a = Uri.parse(str);
            return this;
        }

        public b k(long j10) {
            this.f13987b = j10;
            return this;
        }

        public b() {
            this.f13988c = 1;
            this.f13990e = Collections.EMPTY_MAP;
            this.f13992g = -1L;
        }

        private b(a aVar) {
            this.f13986a = aVar.f13975a;
            this.f13987b = aVar.f13976b;
            this.f13988c = aVar.f13977c;
            this.f13989d = aVar.f13978d;
            this.f13990e = aVar.f13979e;
            this.f13991f = aVar.f13981g;
            this.f13992g = aVar.f13982h;
            this.f13993h = aVar.f13983i;
            this.f13994i = aVar.f13984j;
            this.f13995j = aVar.f13985k;
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
        return c(this.f13977c);
    }

    public boolean d(int i10) {
        if ((this.f13984j & i10) == i10) {
            return true;
        }
        return false;
    }

    public a e(long j10) {
        long j11 = this.f13982h;
        long j12 = -1;
        if (j11 != -1) {
            j12 = j11 - j10;
        }
        return f(j10, j12);
    }

    public a f(long j10, long j11) {
        if (j10 == 0 && this.f13982h == j11) {
            return this;
        }
        return new a(this.f13975a, this.f13976b, this.f13977c, this.f13978d, this.f13979e, this.f13981g + j10, j11, this.f13983i, this.f13984j, this.f13985k);
    }

    public String toString() {
        return "DataSpec[" + b() + " " + this.f13975a + ", " + this.f13981g + ", " + this.f13982h + ", " + this.f13983i + ", " + this.f13984j + "]";
    }

    private a(Uri uri, long j10, int i10, byte[] bArr, Map map, long j11, long j12, String str, int i11, Object obj) {
        byte[] bArr2 = bArr;
        long j13 = j10 + j11;
        boolean z10 = false;
        ne.a.a(j13 >= 0);
        ne.a.a(j11 >= 0);
        ne.a.a((j12 > 0 || j12 == -1) ? true : z10);
        this.f13975a = uri;
        this.f13976b = j10;
        this.f13977c = i10;
        this.f13978d = (bArr2 == null || bArr2.length == 0) ? null : bArr2;
        this.f13979e = Collections.unmodifiableMap(new HashMap(map));
        this.f13981g = j11;
        this.f13980f = j13;
        this.f13982h = j12;
        this.f13983i = str;
        this.f13984j = i11;
        this.f13985k = obj;
    }
}
