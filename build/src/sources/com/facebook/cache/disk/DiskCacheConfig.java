package com.facebook.cache.disk;

import android.content.Context;
import com.facebook.common.internal.Supplier;
import j8.c;
import j8.f;
import j8.g;
import java.io.File;
import k8.i;
import p8.j;
import p8.m;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class DiskCacheConfig {

    /* renamed from: a  reason: collision with root package name */
    private final int f9952a;

    /* renamed from: b  reason: collision with root package name */
    private final String f9953b;

    /* renamed from: c  reason: collision with root package name */
    private final Supplier f9954c;

    /* renamed from: d  reason: collision with root package name */
    private final long f9955d;

    /* renamed from: e  reason: collision with root package name */
    private final long f9956e;

    /* renamed from: f  reason: collision with root package name */
    private final long f9957f;

    /* renamed from: g  reason: collision with root package name */
    private final i f9958g;

    /* renamed from: h  reason: collision with root package name */
    private final j8.a f9959h;

    /* renamed from: i  reason: collision with root package name */
    private final c f9960i;

    /* renamed from: j  reason: collision with root package name */
    private final m8.b f9961j;

    /* renamed from: k  reason: collision with root package name */
    private final Context f9962k;

    /* renamed from: l  reason: collision with root package name */
    private final boolean f9963l;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements Supplier {
        a() {
        }

        @Override // com.facebook.common.internal.Supplier
        /* renamed from: a */
        public File get() {
            j.g(DiskCacheConfig.this.f9962k);
            return DiskCacheConfig.this.f9962k.getApplicationContext().getCacheDir();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private int f9965a;

        /* renamed from: b  reason: collision with root package name */
        private String f9966b;

        /* renamed from: c  reason: collision with root package name */
        private Supplier f9967c;

        /* renamed from: d  reason: collision with root package name */
        private long f9968d;

        /* renamed from: e  reason: collision with root package name */
        private long f9969e;

        /* renamed from: f  reason: collision with root package name */
        private long f9970f;

        /* renamed from: g  reason: collision with root package name */
        private i f9971g;

        /* renamed from: h  reason: collision with root package name */
        private j8.a f9972h;

        /* renamed from: i  reason: collision with root package name */
        private c f9973i;

        /* renamed from: j  reason: collision with root package name */
        private m8.b f9974j;

        /* renamed from: k  reason: collision with root package name */
        private boolean f9975k;

        /* renamed from: l  reason: collision with root package name */
        private final Context f9976l;

        public DiskCacheConfig n() {
            return new DiskCacheConfig(this);
        }

        public b o(String str) {
            this.f9966b = str;
            return this;
        }

        public b p(File file) {
            this.f9967c = m.a(file);
            return this;
        }

        public b q(long j10) {
            this.f9968d = j10;
            return this;
        }

        private b(Context context) {
            this.f9965a = 1;
            this.f9966b = "image_cache";
            this.f9968d = 41943040L;
            this.f9969e = 10485760L;
            this.f9970f = 2097152L;
            this.f9971g = new k8.c();
            this.f9976l = context;
        }
    }

    protected DiskCacheConfig(b bVar) {
        boolean z10;
        j8.a aVar;
        c cVar;
        m8.b bVar2;
        Context context = bVar.f9976l;
        this.f9962k = context;
        if (bVar.f9967c == null && context == null) {
            z10 = false;
        } else {
            z10 = true;
        }
        j.j(z10, "Either a non-null context or a base directory path or supplier must be provided.");
        if (bVar.f9967c == null && context != null) {
            bVar.f9967c = new a();
        }
        this.f9952a = bVar.f9965a;
        this.f9953b = (String) j.g(bVar.f9966b);
        this.f9954c = (Supplier) j.g(bVar.f9967c);
        this.f9955d = bVar.f9968d;
        this.f9956e = bVar.f9969e;
        this.f9957f = bVar.f9970f;
        this.f9958g = (i) j.g(bVar.f9971g);
        if (bVar.f9972h != null) {
            aVar = bVar.f9972h;
        } else {
            aVar = f.b();
        }
        this.f9959h = aVar;
        if (bVar.f9973i != null) {
            cVar = bVar.f9973i;
        } else {
            cVar = g.i();
        }
        this.f9960i = cVar;
        if (bVar.f9974j != null) {
            bVar2 = bVar.f9974j;
        } else {
            bVar2 = m8.c.b();
        }
        this.f9961j = bVar2;
        this.f9963l = bVar.f9975k;
    }

    public static b m(Context context) {
        return new b(context);
    }

    public String b() {
        return this.f9953b;
    }

    public Supplier c() {
        return this.f9954c;
    }

    public j8.a d() {
        return this.f9959h;
    }

    public c e() {
        return this.f9960i;
    }

    public long f() {
        return this.f9955d;
    }

    public m8.b g() {
        return this.f9961j;
    }

    public i h() {
        return this.f9958g;
    }

    public boolean i() {
        return this.f9963l;
    }

    public long j() {
        return this.f9956e;
    }

    public long k() {
        return this.f9957f;
    }

    public int l() {
        return this.f9952a;
    }
}
