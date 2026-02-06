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
    private final int f9812a;

    /* renamed from: b  reason: collision with root package name */
    private final String f9813b;

    /* renamed from: c  reason: collision with root package name */
    private final Supplier f9814c;

    /* renamed from: d  reason: collision with root package name */
    private final long f9815d;

    /* renamed from: e  reason: collision with root package name */
    private final long f9816e;

    /* renamed from: f  reason: collision with root package name */
    private final long f9817f;

    /* renamed from: g  reason: collision with root package name */
    private final i f9818g;

    /* renamed from: h  reason: collision with root package name */
    private final i8.a f9819h;

    /* renamed from: i  reason: collision with root package name */
    private final c f9820i;

    /* renamed from: j  reason: collision with root package name */
    private final l8.b f9821j;

    /* renamed from: k  reason: collision with root package name */
    private final Context f9822k;

    /* renamed from: l  reason: collision with root package name */
    private final boolean f9823l;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements Supplier {
        a() {
        }

        @Override // com.facebook.common.internal.Supplier
        /* renamed from: a */
        public File get() {
            j.g(DiskCacheConfig.this.f9822k);
            return DiskCacheConfig.this.f9822k.getApplicationContext().getCacheDir();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private int f9825a;

        /* renamed from: b  reason: collision with root package name */
        private String f9826b;

        /* renamed from: c  reason: collision with root package name */
        private Supplier f9827c;

        /* renamed from: d  reason: collision with root package name */
        private long f9828d;

        /* renamed from: e  reason: collision with root package name */
        private long f9829e;

        /* renamed from: f  reason: collision with root package name */
        private long f9830f;

        /* renamed from: g  reason: collision with root package name */
        private i f9831g;

        /* renamed from: h  reason: collision with root package name */
        private i8.a f9832h;

        /* renamed from: i  reason: collision with root package name */
        private c f9833i;

        /* renamed from: j  reason: collision with root package name */
        private l8.b f9834j;

        /* renamed from: k  reason: collision with root package name */
        private boolean f9835k;

        /* renamed from: l  reason: collision with root package name */
        private final Context f9836l;

        public DiskCacheConfig n() {
            return new DiskCacheConfig(this);
        }

        public b o(String str) {
            this.f9826b = str;
            return this;
        }

        public b p(File file) {
            this.f9827c = m.a(file);
            return this;
        }

        public b q(long j10) {
            this.f9828d = j10;
            return this;
        }

        private b(Context context) {
            this.f9825a = 1;
            this.f9826b = "image_cache";
            this.f9828d = 41943040L;
            this.f9829e = 10485760L;
            this.f9830f = 2097152L;
            this.f9831g = new j8.c();
            this.f9836l = context;
        }
    }

    protected DiskCacheConfig(b bVar) {
        boolean z10;
        i8.a aVar;
        c cVar;
        l8.b bVar2;
        Context context = bVar.f9836l;
        this.f9822k = context;
        if (bVar.f9827c == null && context == null) {
            z10 = false;
        } else {
            z10 = true;
        }
        j.j(z10, "Either a non-null context or a base directory path or supplier must be provided.");
        if (bVar.f9827c == null && context != null) {
            bVar.f9827c = new a();
        }
        this.f9812a = bVar.f9825a;
        this.f9813b = (String) j.g(bVar.f9826b);
        this.f9814c = (Supplier) j.g(bVar.f9827c);
        this.f9815d = bVar.f9828d;
        this.f9816e = bVar.f9829e;
        this.f9817f = bVar.f9830f;
        this.f9818g = (i) j.g(bVar.f9831g);
        if (bVar.f9832h != null) {
            aVar = bVar.f9832h;
        } else {
            aVar = f.b();
        }
        this.f9819h = aVar;
        if (bVar.f9833i != null) {
            cVar = bVar.f9833i;
        } else {
            cVar = g.i();
        }
        this.f9820i = cVar;
        if (bVar.f9834j != null) {
            bVar2 = bVar.f9834j;
        } else {
            bVar2 = l8.c.b();
        }
        this.f9821j = bVar2;
        this.f9823l = bVar.f9835k;
    }

    public static b m(Context context) {
        return new b(context);
    }

    public String b() {
        return this.f9813b;
    }

    public Supplier c() {
        return this.f9814c;
    }

    public i8.a d() {
        return this.f9819h;
    }

    public c e() {
        return this.f9820i;
    }

    public long f() {
        return this.f9815d;
    }

    public l8.b g() {
        return this.f9821j;
    }

    public i h() {
        return this.f9818g;
    }

    public boolean i() {
        return this.f9823l;
    }

    public long j() {
        return this.f9816e;
    }

    public long k() {
        return this.f9817f;
    }

    public int l() {
        return this.f9812a;
    }
}
