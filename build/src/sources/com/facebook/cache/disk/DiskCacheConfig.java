package com.facebook.cache.disk;

import android.content.Context;
import com.facebook.common.internal.Supplier;
import i8.c;
import i8.f;
import i8.g;
import j8.i;
import java.io.File;
import o8.j;
import o8.m;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class DiskCacheConfig {

    /* renamed from: a  reason: collision with root package name */
    private final int f9528a;

    /* renamed from: b  reason: collision with root package name */
    private final String f9529b;

    /* renamed from: c  reason: collision with root package name */
    private final Supplier f9530c;

    /* renamed from: d  reason: collision with root package name */
    private final long f9531d;

    /* renamed from: e  reason: collision with root package name */
    private final long f9532e;

    /* renamed from: f  reason: collision with root package name */
    private final long f9533f;

    /* renamed from: g  reason: collision with root package name */
    private final i f9534g;

    /* renamed from: h  reason: collision with root package name */
    private final i8.a f9535h;

    /* renamed from: i  reason: collision with root package name */
    private final c f9536i;

    /* renamed from: j  reason: collision with root package name */
    private final l8.b f9537j;

    /* renamed from: k  reason: collision with root package name */
    private final Context f9538k;

    /* renamed from: l  reason: collision with root package name */
    private final boolean f9539l;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements Supplier {
        a() {
        }

        @Override // com.facebook.common.internal.Supplier
        /* renamed from: a */
        public File get() {
            j.g(DiskCacheConfig.this.f9538k);
            return DiskCacheConfig.this.f9538k.getApplicationContext().getCacheDir();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private int f9541a;

        /* renamed from: b  reason: collision with root package name */
        private String f9542b;

        /* renamed from: c  reason: collision with root package name */
        private Supplier f9543c;

        /* renamed from: d  reason: collision with root package name */
        private long f9544d;

        /* renamed from: e  reason: collision with root package name */
        private long f9545e;

        /* renamed from: f  reason: collision with root package name */
        private long f9546f;

        /* renamed from: g  reason: collision with root package name */
        private i f9547g;

        /* renamed from: h  reason: collision with root package name */
        private i8.a f9548h;

        /* renamed from: i  reason: collision with root package name */
        private c f9549i;

        /* renamed from: j  reason: collision with root package name */
        private l8.b f9550j;

        /* renamed from: k  reason: collision with root package name */
        private boolean f9551k;

        /* renamed from: l  reason: collision with root package name */
        private final Context f9552l;

        public DiskCacheConfig n() {
            return new DiskCacheConfig(this);
        }

        public b o(String str) {
            this.f9542b = str;
            return this;
        }

        public b p(File file) {
            this.f9543c = m.a(file);
            return this;
        }

        public b q(long j10) {
            this.f9544d = j10;
            return this;
        }

        private b(Context context) {
            this.f9541a = 1;
            this.f9542b = "image_cache";
            this.f9544d = 41943040L;
            this.f9545e = 10485760L;
            this.f9546f = 2097152L;
            this.f9547g = new j8.c();
            this.f9552l = context;
        }
    }

    protected DiskCacheConfig(b bVar) {
        boolean z10;
        i8.a aVar;
        c cVar;
        l8.b bVar2;
        Context context = bVar.f9552l;
        this.f9538k = context;
        if (bVar.f9543c == null && context == null) {
            z10 = false;
        } else {
            z10 = true;
        }
        j.j(z10, "Either a non-null context or a base directory path or supplier must be provided.");
        if (bVar.f9543c == null && context != null) {
            bVar.f9543c = new a();
        }
        this.f9528a = bVar.f9541a;
        this.f9529b = (String) j.g(bVar.f9542b);
        this.f9530c = (Supplier) j.g(bVar.f9543c);
        this.f9531d = bVar.f9544d;
        this.f9532e = bVar.f9545e;
        this.f9533f = bVar.f9546f;
        this.f9534g = (i) j.g(bVar.f9547g);
        if (bVar.f9548h != null) {
            aVar = bVar.f9548h;
        } else {
            aVar = f.b();
        }
        this.f9535h = aVar;
        if (bVar.f9549i != null) {
            cVar = bVar.f9549i;
        } else {
            cVar = g.i();
        }
        this.f9536i = cVar;
        if (bVar.f9550j != null) {
            bVar2 = bVar.f9550j;
        } else {
            bVar2 = l8.c.b();
        }
        this.f9537j = bVar2;
        this.f9539l = bVar.f9551k;
    }

    public static b m(Context context) {
        return new b(context);
    }

    public String b() {
        return this.f9529b;
    }

    public Supplier c() {
        return this.f9530c;
    }

    public i8.a d() {
        return this.f9535h;
    }

    public c e() {
        return this.f9536i;
    }

    public long f() {
        return this.f9531d;
    }

    public l8.b g() {
        return this.f9537j;
    }

    public i h() {
        return this.f9534g;
    }

    public boolean i() {
        return this.f9539l;
    }

    public long j() {
        return this.f9532e;
    }

    public long k() {
        return this.f9533f;
    }

    public int l() {
        return this.f9528a;
    }
}
