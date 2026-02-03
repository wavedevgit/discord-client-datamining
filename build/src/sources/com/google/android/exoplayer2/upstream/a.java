package com.google.android.exoplayer2.upstream;

import android.net.Uri;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import lc.u;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    public final Uri f12943a;

    /* renamed from: b  reason: collision with root package name */
    public final long f12944b;

    /* renamed from: c  reason: collision with root package name */
    public final int f12945c;

    /* renamed from: d  reason: collision with root package name */
    public final byte[] f12946d;

    /* renamed from: e  reason: collision with root package name */
    public final Map f12947e;

    /* renamed from: f  reason: collision with root package name */
    public final long f12948f;

    /* renamed from: g  reason: collision with root package name */
    public final long f12949g;

    /* renamed from: h  reason: collision with root package name */
    public final long f12950h;

    /* renamed from: i  reason: collision with root package name */
    public final String f12951i;

    /* renamed from: j  reason: collision with root package name */
    public final int f12952j;

    /* renamed from: k  reason: collision with root package name */
    public final Object f12953k;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private Uri f12954a;

        /* renamed from: b  reason: collision with root package name */
        private long f12955b;

        /* renamed from: c  reason: collision with root package name */
        private int f12956c;

        /* renamed from: d  reason: collision with root package name */
        private byte[] f12957d;

        /* renamed from: e  reason: collision with root package name */
        private Map f12958e;

        /* renamed from: f  reason: collision with root package name */
        private long f12959f;

        /* renamed from: g  reason: collision with root package name */
        private long f12960g;

        /* renamed from: h  reason: collision with root package name */
        private String f12961h;

        /* renamed from: i  reason: collision with root package name */
        private int f12962i;

        /* renamed from: j  reason: collision with root package name */
        private Object f12963j;

        public a a() {
            ne.a.j(this.f12954a, "The uri must be set.");
            return new a(this.f12954a, this.f12955b, this.f12956c, this.f12957d, this.f12958e, this.f12959f, this.f12960g, this.f12961h, this.f12962i, this.f12963j);
        }

        public b b(int i10) {
            this.f12962i = i10;
            return this;
        }

        public b c(byte[] bArr) {
            this.f12957d = bArr;
            return this;
        }

        public b d(int i10) {
            this.f12956c = i10;
            return this;
        }

        public b e(Map map) {
            this.f12958e = map;
            return this;
        }

        public b f(String str) {
            this.f12961h = str;
            return this;
        }

        public b g(long j10) {
            this.f12960g = j10;
            return this;
        }

        public b h(long j10) {
            this.f12959f = j10;
            return this;
        }

        public b i(Uri uri) {
            this.f12954a = uri;
            return this;
        }

        public b j(String str) {
            this.f12954a = Uri.parse(str);
            return this;
        }

        public b k(long j10) {
            this.f12955b = j10;
            return this;
        }

        public b() {
            this.f12956c = 1;
            this.f12958e = Collections.EMPTY_MAP;
            this.f12960g = -1L;
        }

        private b(a aVar) {
            this.f12954a = aVar.f12943a;
            this.f12955b = aVar.f12944b;
            this.f12956c = aVar.f12945c;
            this.f12957d = aVar.f12946d;
            this.f12958e = aVar.f12947e;
            this.f12959f = aVar.f12949g;
            this.f12960g = aVar.f12950h;
            this.f12961h = aVar.f12951i;
            this.f12962i = aVar.f12952j;
            this.f12963j = aVar.f12953k;
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
        return c(this.f12945c);
    }

    public boolean d(int i10) {
        if ((this.f12952j & i10) == i10) {
            return true;
        }
        return false;
    }

    public a e(long j10) {
        long j11 = this.f12950h;
        long j12 = -1;
        if (j11 != -1) {
            j12 = j11 - j10;
        }
        return f(j10, j12);
    }

    public a f(long j10, long j11) {
        if (j10 == 0 && this.f12950h == j11) {
            return this;
        }
        return new a(this.f12943a, this.f12944b, this.f12945c, this.f12946d, this.f12947e, this.f12949g + j10, j11, this.f12951i, this.f12952j, this.f12953k);
    }

    public String toString() {
        return "DataSpec[" + b() + " " + this.f12943a + ", " + this.f12949g + ", " + this.f12950h + ", " + this.f12951i + ", " + this.f12952j + "]";
    }

    private a(Uri uri, long j10, int i10, byte[] bArr, Map map, long j11, long j12, String str, int i11, Object obj) {
        byte[] bArr2 = bArr;
        long j13 = j10 + j11;
        boolean z10 = false;
        ne.a.a(j13 >= 0);
        ne.a.a(j11 >= 0);
        ne.a.a((j12 > 0 || j12 == -1) ? true : z10);
        this.f12943a = uri;
        this.f12944b = j10;
        this.f12945c = i10;
        this.f12946d = (bArr2 == null || bArr2.length == 0) ? null : bArr2;
        this.f12947e = Collections.unmodifiableMap(new HashMap(map));
        this.f12949g = j11;
        this.f12948f = j13;
        this.f12950h = j12;
        this.f12951i = str;
        this.f12952j = i11;
        this.f12953k = obj;
    }
}
