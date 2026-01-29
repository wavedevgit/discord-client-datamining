package com.google.android.exoplayer2.upstream;

import android.net.Uri;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import lc.u;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    public final Uri f14346a;

    /* renamed from: b  reason: collision with root package name */
    public final long f14347b;

    /* renamed from: c  reason: collision with root package name */
    public final int f14348c;

    /* renamed from: d  reason: collision with root package name */
    public final byte[] f14349d;

    /* renamed from: e  reason: collision with root package name */
    public final Map f14350e;

    /* renamed from: f  reason: collision with root package name */
    public final long f14351f;

    /* renamed from: g  reason: collision with root package name */
    public final long f14352g;

    /* renamed from: h  reason: collision with root package name */
    public final long f14353h;

    /* renamed from: i  reason: collision with root package name */
    public final String f14354i;

    /* renamed from: j  reason: collision with root package name */
    public final int f14355j;

    /* renamed from: k  reason: collision with root package name */
    public final Object f14356k;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private Uri f14357a;

        /* renamed from: b  reason: collision with root package name */
        private long f14358b;

        /* renamed from: c  reason: collision with root package name */
        private int f14359c;

        /* renamed from: d  reason: collision with root package name */
        private byte[] f14360d;

        /* renamed from: e  reason: collision with root package name */
        private Map f14361e;

        /* renamed from: f  reason: collision with root package name */
        private long f14362f;

        /* renamed from: g  reason: collision with root package name */
        private long f14363g;

        /* renamed from: h  reason: collision with root package name */
        private String f14364h;

        /* renamed from: i  reason: collision with root package name */
        private int f14365i;

        /* renamed from: j  reason: collision with root package name */
        private Object f14366j;

        public a a() {
            ne.a.j(this.f14357a, "The uri must be set.");
            return new a(this.f14357a, this.f14358b, this.f14359c, this.f14360d, this.f14361e, this.f14362f, this.f14363g, this.f14364h, this.f14365i, this.f14366j);
        }

        public b b(int i10) {
            this.f14365i = i10;
            return this;
        }

        public b c(byte[] bArr) {
            this.f14360d = bArr;
            return this;
        }

        public b d(int i10) {
            this.f14359c = i10;
            return this;
        }

        public b e(Map map) {
            this.f14361e = map;
            return this;
        }

        public b f(String str) {
            this.f14364h = str;
            return this;
        }

        public b g(long j10) {
            this.f14363g = j10;
            return this;
        }

        public b h(long j10) {
            this.f14362f = j10;
            return this;
        }

        public b i(Uri uri) {
            this.f14357a = uri;
            return this;
        }

        public b j(String str) {
            this.f14357a = Uri.parse(str);
            return this;
        }

        public b k(long j10) {
            this.f14358b = j10;
            return this;
        }

        public b() {
            this.f14359c = 1;
            this.f14361e = Collections.EMPTY_MAP;
            this.f14363g = -1L;
        }

        private b(a aVar) {
            this.f14357a = aVar.f14346a;
            this.f14358b = aVar.f14347b;
            this.f14359c = aVar.f14348c;
            this.f14360d = aVar.f14349d;
            this.f14361e = aVar.f14350e;
            this.f14362f = aVar.f14352g;
            this.f14363g = aVar.f14353h;
            this.f14364h = aVar.f14354i;
            this.f14365i = aVar.f14355j;
            this.f14366j = aVar.f14356k;
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
        return c(this.f14348c);
    }

    public boolean d(int i10) {
        if ((this.f14355j & i10) == i10) {
            return true;
        }
        return false;
    }

    public a e(long j10) {
        long j11 = this.f14353h;
        long j12 = -1;
        if (j11 != -1) {
            j12 = j11 - j10;
        }
        return f(j10, j12);
    }

    public a f(long j10, long j11) {
        if (j10 == 0 && this.f14353h == j11) {
            return this;
        }
        return new a(this.f14346a, this.f14347b, this.f14348c, this.f14349d, this.f14350e, this.f14352g + j10, j11, this.f14354i, this.f14355j, this.f14356k);
    }

    public String toString() {
        return "DataSpec[" + b() + " " + this.f14346a + ", " + this.f14352g + ", " + this.f14353h + ", " + this.f14354i + ", " + this.f14355j + "]";
    }

    private a(Uri uri, long j10, int i10, byte[] bArr, Map map, long j11, long j12, String str, int i11, Object obj) {
        byte[] bArr2 = bArr;
        long j13 = j10 + j11;
        boolean z10 = false;
        ne.a.a(j13 >= 0);
        ne.a.a(j11 >= 0);
        ne.a.a((j12 > 0 || j12 == -1) ? true : z10);
        this.f14346a = uri;
        this.f14347b = j10;
        this.f14348c = i10;
        this.f14349d = (bArr2 == null || bArr2.length == 0) ? null : bArr2;
        this.f14350e = Collections.unmodifiableMap(new HashMap(map));
        this.f14352g = j11;
        this.f14351f = j13;
        this.f14353h = j12;
        this.f14354i = str;
        this.f14355j = i11;
        this.f14356k = obj;
    }
}
