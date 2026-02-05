package com.google.android.exoplayer2.upstream;

import android.net.Uri;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import lc.u;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    public final Uri f13328a;

    /* renamed from: b  reason: collision with root package name */
    public final long f13329b;

    /* renamed from: c  reason: collision with root package name */
    public final int f13330c;

    /* renamed from: d  reason: collision with root package name */
    public final byte[] f13331d;

    /* renamed from: e  reason: collision with root package name */
    public final Map f13332e;

    /* renamed from: f  reason: collision with root package name */
    public final long f13333f;

    /* renamed from: g  reason: collision with root package name */
    public final long f13334g;

    /* renamed from: h  reason: collision with root package name */
    public final long f13335h;

    /* renamed from: i  reason: collision with root package name */
    public final String f13336i;

    /* renamed from: j  reason: collision with root package name */
    public final int f13337j;

    /* renamed from: k  reason: collision with root package name */
    public final Object f13338k;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private Uri f13339a;

        /* renamed from: b  reason: collision with root package name */
        private long f13340b;

        /* renamed from: c  reason: collision with root package name */
        private int f13341c;

        /* renamed from: d  reason: collision with root package name */
        private byte[] f13342d;

        /* renamed from: e  reason: collision with root package name */
        private Map f13343e;

        /* renamed from: f  reason: collision with root package name */
        private long f13344f;

        /* renamed from: g  reason: collision with root package name */
        private long f13345g;

        /* renamed from: h  reason: collision with root package name */
        private String f13346h;

        /* renamed from: i  reason: collision with root package name */
        private int f13347i;

        /* renamed from: j  reason: collision with root package name */
        private Object f13348j;

        public a a() {
            ne.a.j(this.f13339a, "The uri must be set.");
            return new a(this.f13339a, this.f13340b, this.f13341c, this.f13342d, this.f13343e, this.f13344f, this.f13345g, this.f13346h, this.f13347i, this.f13348j);
        }

        public b b(int i10) {
            this.f13347i = i10;
            return this;
        }

        public b c(byte[] bArr) {
            this.f13342d = bArr;
            return this;
        }

        public b d(int i10) {
            this.f13341c = i10;
            return this;
        }

        public b e(Map map) {
            this.f13343e = map;
            return this;
        }

        public b f(String str) {
            this.f13346h = str;
            return this;
        }

        public b g(long j10) {
            this.f13345g = j10;
            return this;
        }

        public b h(long j10) {
            this.f13344f = j10;
            return this;
        }

        public b i(Uri uri) {
            this.f13339a = uri;
            return this;
        }

        public b j(String str) {
            this.f13339a = Uri.parse(str);
            return this;
        }

        public b k(long j10) {
            this.f13340b = j10;
            return this;
        }

        public b() {
            this.f13341c = 1;
            this.f13343e = Collections.EMPTY_MAP;
            this.f13345g = -1L;
        }

        private b(a aVar) {
            this.f13339a = aVar.f13328a;
            this.f13340b = aVar.f13329b;
            this.f13341c = aVar.f13330c;
            this.f13342d = aVar.f13331d;
            this.f13343e = aVar.f13332e;
            this.f13344f = aVar.f13334g;
            this.f13345g = aVar.f13335h;
            this.f13346h = aVar.f13336i;
            this.f13347i = aVar.f13337j;
            this.f13348j = aVar.f13338k;
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
        return c(this.f13330c);
    }

    public boolean d(int i10) {
        if ((this.f13337j & i10) == i10) {
            return true;
        }
        return false;
    }

    public a e(long j10) {
        long j11 = this.f13335h;
        long j12 = -1;
        if (j11 != -1) {
            j12 = j11 - j10;
        }
        return f(j10, j12);
    }

    public a f(long j10, long j11) {
        if (j10 == 0 && this.f13335h == j11) {
            return this;
        }
        return new a(this.f13328a, this.f13329b, this.f13330c, this.f13331d, this.f13332e, this.f13334g + j10, j11, this.f13336i, this.f13337j, this.f13338k);
    }

    public String toString() {
        return "DataSpec[" + b() + " " + this.f13328a + ", " + this.f13334g + ", " + this.f13335h + ", " + this.f13336i + ", " + this.f13337j + "]";
    }

    private a(Uri uri, long j10, int i10, byte[] bArr, Map map, long j11, long j12, String str, int i11, Object obj) {
        byte[] bArr2 = bArr;
        long j13 = j10 + j11;
        boolean z10 = false;
        ne.a.a(j13 >= 0);
        ne.a.a(j11 >= 0);
        ne.a.a((j12 > 0 || j12 == -1) ? true : z10);
        this.f13328a = uri;
        this.f13329b = j10;
        this.f13330c = i10;
        this.f13331d = (bArr2 == null || bArr2.length == 0) ? null : bArr2;
        this.f13332e = Collections.unmodifiableMap(new HashMap(map));
        this.f13334g = j11;
        this.f13333f = j13;
        this.f13335h = j12;
        this.f13336i = str;
        this.f13337j = i11;
        this.f13338k = obj;
    }
}
