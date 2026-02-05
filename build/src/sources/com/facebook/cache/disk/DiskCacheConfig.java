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
    private final int f9913a;

    /* renamed from: b  reason: collision with root package name */
    private final String f9914b;

    /* renamed from: c  reason: collision with root package name */
    private final Supplier f9915c;

    /* renamed from: d  reason: collision with root package name */
    private final long f9916d;

    /* renamed from: e  reason: collision with root package name */
    private final long f9917e;

    /* renamed from: f  reason: collision with root package name */
    private final long f9918f;

    /* renamed from: g  reason: collision with root package name */
    private final i f9919g;

    /* renamed from: h  reason: collision with root package name */
    private final i8.a f9920h;

    /* renamed from: i  reason: collision with root package name */
    private final c f9921i;

    /* renamed from: j  reason: collision with root package name */
    private final l8.b f9922j;

    /* renamed from: k  reason: collision with root package name */
    private final Context f9923k;

    /* renamed from: l  reason: collision with root package name */
    private final boolean f9924l;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements Supplier {
        a() {
        }

        @Override // com.facebook.common.internal.Supplier
        /* renamed from: a */
        public File get() {
            j.g(DiskCacheConfig.this.f9923k);
            return DiskCacheConfig.this.f9923k.getApplicationContext().getCacheDir();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private int f9926a;

        /* renamed from: b  reason: collision with root package name */
        private String f9927b;

        /* renamed from: c  reason: collision with root package name */
        private Supplier f9928c;

        /* renamed from: d  reason: collision with root package name */
        private long f9929d;

        /* renamed from: e  reason: collision with root package name */
        private long f9930e;

        /* renamed from: f  reason: collision with root package name */
        private long f9931f;

        /* renamed from: g  reason: collision with root package name */
        private i f9932g;

        /* renamed from: h  reason: collision with root package name */
        private i8.a f9933h;

        /* renamed from: i  reason: collision with root package name */
        private c f9934i;

        /* renamed from: j  reason: collision with root package name */
        private l8.b f9935j;

        /* renamed from: k  reason: collision with root package name */
        private boolean f9936k;

        /* renamed from: l  reason: collision with root package name */
        private final Context f9937l;

        public DiskCacheConfig n() {
            return new DiskCacheConfig(this);
        }

        public b o(String str) {
            this.f9927b = str;
            return this;
        }

        public b p(File file) {
            this.f9928c = m.a(file);
            return this;
        }

        public b q(long j10) {
            this.f9929d = j10;
            return this;
        }

        private b(Context context) {
            this.f9926a = 1;
            this.f9927b = "image_cache";
            this.f9929d = 41943040L;
            this.f9930e = 10485760L;
            this.f9931f = 2097152L;
            this.f9932g = new j8.c();
            this.f9937l = context;
        }
    }

    protected DiskCacheConfig(b bVar) {
        boolean z10;
        i8.a aVar;
        c cVar;
        l8.b bVar2;
        Context context = bVar.f9937l;
        this.f9923k = context;
        if (bVar.f9928c == null && context == null) {
            z10 = false;
        } else {
            z10 = true;
        }
        j.j(z10, "Either a non-null context or a base directory path or supplier must be provided.");
        if (bVar.f9928c == null && context != null) {
            bVar.f9928c = new a();
        }
        this.f9913a = bVar.f9926a;
        this.f9914b = (String) j.g(bVar.f9927b);
        this.f9915c = (Supplier) j.g(bVar.f9928c);
        this.f9916d = bVar.f9929d;
        this.f9917e = bVar.f9930e;
        this.f9918f = bVar.f9931f;
        this.f9919g = (i) j.g(bVar.f9932g);
        if (bVar.f9933h != null) {
            aVar = bVar.f9933h;
        } else {
            aVar = f.b();
        }
        this.f9920h = aVar;
        if (bVar.f9934i != null) {
            cVar = bVar.f9934i;
        } else {
            cVar = g.i();
        }
        this.f9921i = cVar;
        if (bVar.f9935j != null) {
            bVar2 = bVar.f9935j;
        } else {
            bVar2 = l8.c.b();
        }
        this.f9922j = bVar2;
        this.f9924l = bVar.f9936k;
    }

    public static b m(Context context) {
        return new b(context);
    }

    public String b() {
        return this.f9914b;
    }

    public Supplier c() {
        return this.f9915c;
    }

    public i8.a d() {
        return this.f9920h;
    }

    public c e() {
        return this.f9921i;
    }

    public long f() {
        return this.f9916d;
    }

    public l8.b g() {
        return this.f9922j;
    }

    public i h() {
        return this.f9919g;
    }

    public boolean i() {
        return this.f9924l;
    }

    public long j() {
        return this.f9917e;
    }

    public long k() {
        return this.f9918f;
    }

    public int l() {
        return this.f9913a;
    }
}
