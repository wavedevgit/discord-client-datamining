package com.google.android.exoplayer2.upstream;

import android.net.Uri;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import mc.u;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    public final Uri f13405a;

    /* renamed from: b  reason: collision with root package name */
    public final long f13406b;

    /* renamed from: c  reason: collision with root package name */
    public final int f13407c;

    /* renamed from: d  reason: collision with root package name */
    public final byte[] f13408d;

    /* renamed from: e  reason: collision with root package name */
    public final Map f13409e;

    /* renamed from: f  reason: collision with root package name */
    public final long f13410f;

    /* renamed from: g  reason: collision with root package name */
    public final long f13411g;

    /* renamed from: h  reason: collision with root package name */
    public final long f13412h;

    /* renamed from: i  reason: collision with root package name */
    public final String f13413i;

    /* renamed from: j  reason: collision with root package name */
    public final int f13414j;

    /* renamed from: k  reason: collision with root package name */
    public final Object f13415k;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private Uri f13416a;

        /* renamed from: b  reason: collision with root package name */
        private long f13417b;

        /* renamed from: c  reason: collision with root package name */
        private int f13418c;

        /* renamed from: d  reason: collision with root package name */
        private byte[] f13419d;

        /* renamed from: e  reason: collision with root package name */
        private Map f13420e;

        /* renamed from: f  reason: collision with root package name */
        private long f13421f;

        /* renamed from: g  reason: collision with root package name */
        private long f13422g;

        /* renamed from: h  reason: collision with root package name */
        private String f13423h;

        /* renamed from: i  reason: collision with root package name */
        private int f13424i;

        /* renamed from: j  reason: collision with root package name */
        private Object f13425j;

        public a a() {
            oe.a.j(this.f13416a, "The uri must be set.");
            return new a(this.f13416a, this.f13417b, this.f13418c, this.f13419d, this.f13420e, this.f13421f, this.f13422g, this.f13423h, this.f13424i, this.f13425j);
        }

        public b b(int i10) {
            this.f13424i = i10;
            return this;
        }

        public b c(byte[] bArr) {
            this.f13419d = bArr;
            return this;
        }

        public b d(int i10) {
            this.f13418c = i10;
            return this;
        }

        public b e(Map map) {
            this.f13420e = map;
            return this;
        }

        public b f(String str) {
            this.f13423h = str;
            return this;
        }

        public b g(long j10) {
            this.f13422g = j10;
            return this;
        }

        public b h(long j10) {
            this.f13421f = j10;
            return this;
        }

        public b i(Uri uri) {
            this.f13416a = uri;
            return this;
        }

        public b j(String str) {
            this.f13416a = Uri.parse(str);
            return this;
        }

        public b k(long j10) {
            this.f13417b = j10;
            return this;
        }

        public b() {
            this.f13418c = 1;
            this.f13420e = Collections.EMPTY_MAP;
            this.f13422g = -1L;
        }

        private b(a aVar) {
            this.f13416a = aVar.f13405a;
            this.f13417b = aVar.f13406b;
            this.f13418c = aVar.f13407c;
            this.f13419d = aVar.f13408d;
            this.f13420e = aVar.f13409e;
            this.f13421f = aVar.f13411g;
            this.f13422g = aVar.f13412h;
            this.f13423h = aVar.f13413i;
            this.f13424i = aVar.f13414j;
            this.f13425j = aVar.f13415k;
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
        return c(this.f13407c);
    }

    public boolean d(int i10) {
        if ((this.f13414j & i10) == i10) {
            return true;
        }
        return false;
    }

    public a e(long j10) {
        long j11 = this.f13412h;
        long j12 = -1;
        if (j11 != -1) {
            j12 = j11 - j10;
        }
        return f(j10, j12);
    }

    public a f(long j10, long j11) {
        if (j10 == 0 && this.f13412h == j11) {
            return this;
        }
        return new a(this.f13405a, this.f13406b, this.f13407c, this.f13408d, this.f13409e, this.f13411g + j10, j11, this.f13413i, this.f13414j, this.f13415k);
    }

    public a g(Uri uri) {
        return new a(uri, this.f13406b, this.f13407c, this.f13408d, this.f13409e, this.f13411g, this.f13412h, this.f13413i, this.f13414j, this.f13415k);
    }

    public String toString() {
        return "DataSpec[" + b() + " " + this.f13405a + ", " + this.f13411g + ", " + this.f13412h + ", " + this.f13413i + ", " + this.f13414j + "]";
    }

    private a(Uri uri, long j10, int i10, byte[] bArr, Map map, long j11, long j12, String str, int i11, Object obj) {
        byte[] bArr2 = bArr;
        long j13 = j10 + j11;
        boolean z10 = false;
        oe.a.a(j13 >= 0);
        oe.a.a(j11 >= 0);
        oe.a.a((j12 > 0 || j12 == -1) ? true : z10);
        this.f13405a = uri;
        this.f13406b = j10;
        this.f13407c = i10;
        this.f13408d = (bArr2 == null || bArr2.length == 0) ? null : bArr2;
        this.f13409e = Collections.unmodifiableMap(new HashMap(map));
        this.f13411g = j11;
        this.f13410f = j13;
        this.f13412h = j12;
        this.f13413i = str;
        this.f13414j = i11;
        this.f13415k = obj;
    }
}
