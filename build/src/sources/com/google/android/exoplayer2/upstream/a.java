package com.google.android.exoplayer2.upstream;

import android.net.Uri;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import lc.u;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    public final Uri f13265a;

    /* renamed from: b  reason: collision with root package name */
    public final long f13266b;

    /* renamed from: c  reason: collision with root package name */
    public final int f13267c;

    /* renamed from: d  reason: collision with root package name */
    public final byte[] f13268d;

    /* renamed from: e  reason: collision with root package name */
    public final Map f13269e;

    /* renamed from: f  reason: collision with root package name */
    public final long f13270f;

    /* renamed from: g  reason: collision with root package name */
    public final long f13271g;

    /* renamed from: h  reason: collision with root package name */
    public final long f13272h;

    /* renamed from: i  reason: collision with root package name */
    public final String f13273i;

    /* renamed from: j  reason: collision with root package name */
    public final int f13274j;

    /* renamed from: k  reason: collision with root package name */
    public final Object f13275k;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private Uri f13276a;

        /* renamed from: b  reason: collision with root package name */
        private long f13277b;

        /* renamed from: c  reason: collision with root package name */
        private int f13278c;

        /* renamed from: d  reason: collision with root package name */
        private byte[] f13279d;

        /* renamed from: e  reason: collision with root package name */
        private Map f13280e;

        /* renamed from: f  reason: collision with root package name */
        private long f13281f;

        /* renamed from: g  reason: collision with root package name */
        private long f13282g;

        /* renamed from: h  reason: collision with root package name */
        private String f13283h;

        /* renamed from: i  reason: collision with root package name */
        private int f13284i;

        /* renamed from: j  reason: collision with root package name */
        private Object f13285j;

        public a a() {
            ne.a.j(this.f13276a, "The uri must be set.");
            return new a(this.f13276a, this.f13277b, this.f13278c, this.f13279d, this.f13280e, this.f13281f, this.f13282g, this.f13283h, this.f13284i, this.f13285j);
        }

        public b b(int i10) {
            this.f13284i = i10;
            return this;
        }

        public b c(byte[] bArr) {
            this.f13279d = bArr;
            return this;
        }

        public b d(int i10) {
            this.f13278c = i10;
            return this;
        }

        public b e(Map map) {
            this.f13280e = map;
            return this;
        }

        public b f(String str) {
            this.f13283h = str;
            return this;
        }

        public b g(long j10) {
            this.f13282g = j10;
            return this;
        }

        public b h(long j10) {
            this.f13281f = j10;
            return this;
        }

        public b i(Uri uri) {
            this.f13276a = uri;
            return this;
        }

        public b j(String str) {
            this.f13276a = Uri.parse(str);
            return this;
        }

        public b k(long j10) {
            this.f13277b = j10;
            return this;
        }

        public b() {
            this.f13278c = 1;
            this.f13280e = Collections.EMPTY_MAP;
            this.f13282g = -1L;
        }

        private b(a aVar) {
            this.f13276a = aVar.f13265a;
            this.f13277b = aVar.f13266b;
            this.f13278c = aVar.f13267c;
            this.f13279d = aVar.f13268d;
            this.f13280e = aVar.f13269e;
            this.f13281f = aVar.f13271g;
            this.f13282g = aVar.f13272h;
            this.f13283h = aVar.f13273i;
            this.f13284i = aVar.f13274j;
            this.f13285j = aVar.f13275k;
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
        return c(this.f13267c);
    }

    public boolean d(int i10) {
        if ((this.f13274j & i10) == i10) {
            return true;
        }
        return false;
    }

    public a e(long j10) {
        long j11 = this.f13272h;
        long j12 = -1;
        if (j11 != -1) {
            j12 = j11 - j10;
        }
        return f(j10, j12);
    }

    public a f(long j10, long j11) {
        if (j10 == 0 && this.f13272h == j11) {
            return this;
        }
        return new a(this.f13265a, this.f13266b, this.f13267c, this.f13268d, this.f13269e, this.f13271g + j10, j11, this.f13273i, this.f13274j, this.f13275k);
    }

    public a g(Uri uri) {
        return new a(uri, this.f13266b, this.f13267c, this.f13268d, this.f13269e, this.f13271g, this.f13272h, this.f13273i, this.f13274j, this.f13275k);
    }

    public String toString() {
        return "DataSpec[" + b() + " " + this.f13265a + ", " + this.f13271g + ", " + this.f13272h + ", " + this.f13273i + ", " + this.f13274j + "]";
    }

    private a(Uri uri, long j10, int i10, byte[] bArr, Map map, long j11, long j12, String str, int i11, Object obj) {
        byte[] bArr2 = bArr;
        long j13 = j10 + j11;
        boolean z10 = false;
        ne.a.a(j13 >= 0);
        ne.a.a(j11 >= 0);
        ne.a.a((j12 > 0 || j12 == -1) ? true : z10);
        this.f13265a = uri;
        this.f13266b = j10;
        this.f13267c = i10;
        this.f13268d = (bArr2 == null || bArr2.length == 0) ? null : bArr2;
        this.f13269e = Collections.unmodifiableMap(new HashMap(map));
        this.f13271g = j11;
        this.f13270f = j13;
        this.f13272h = j12;
        this.f13273i = str;
        this.f13274j = i11;
        this.f13275k = obj;
    }
}
