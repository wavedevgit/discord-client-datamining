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
    private final int f10560a;

    /* renamed from: b  reason: collision with root package name */
    private final String f10561b;

    /* renamed from: c  reason: collision with root package name */
    private final Supplier f10562c;

    /* renamed from: d  reason: collision with root package name */
    private final long f10563d;

    /* renamed from: e  reason: collision with root package name */
    private final long f10564e;

    /* renamed from: f  reason: collision with root package name */
    private final long f10565f;

    /* renamed from: g  reason: collision with root package name */
    private final i f10566g;

    /* renamed from: h  reason: collision with root package name */
    private final i8.a f10567h;

    /* renamed from: i  reason: collision with root package name */
    private final c f10568i;

    /* renamed from: j  reason: collision with root package name */
    private final l8.b f10569j;

    /* renamed from: k  reason: collision with root package name */
    private final Context f10570k;

    /* renamed from: l  reason: collision with root package name */
    private final boolean f10571l;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements Supplier {
        a() {
        }

        @Override // com.facebook.common.internal.Supplier
        /* renamed from: a */
        public File get() {
            j.g(DiskCacheConfig.this.f10570k);
            return DiskCacheConfig.this.f10570k.getApplicationContext().getCacheDir();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private int f10573a;

        /* renamed from: b  reason: collision with root package name */
        private String f10574b;

        /* renamed from: c  reason: collision with root package name */
        private Supplier f10575c;

        /* renamed from: d  reason: collision with root package name */
        private long f10576d;

        /* renamed from: e  reason: collision with root package name */
        private long f10577e;

        /* renamed from: f  reason: collision with root package name */
        private long f10578f;

        /* renamed from: g  reason: collision with root package name */
        private i f10579g;

        /* renamed from: h  reason: collision with root package name */
        private i8.a f10580h;

        /* renamed from: i  reason: collision with root package name */
        private c f10581i;

        /* renamed from: j  reason: collision with root package name */
        private l8.b f10582j;

        /* renamed from: k  reason: collision with root package name */
        private boolean f10583k;

        /* renamed from: l  reason: collision with root package name */
        private final Context f10584l;

        public DiskCacheConfig n() {
            return new DiskCacheConfig(this);
        }

        public b o(String str) {
            this.f10574b = str;
            return this;
        }

        public b p(File file) {
            this.f10575c = m.a(file);
            return this;
        }

        public b q(long j10) {
            this.f10576d = j10;
            return this;
        }

        private b(Context context) {
            this.f10573a = 1;
            this.f10574b = "image_cache";
            this.f10576d = 41943040L;
            this.f10577e = 10485760L;
            this.f10578f = 2097152L;
            this.f10579g = new j8.c();
            this.f10584l = context;
        }
    }

    protected DiskCacheConfig(b bVar) {
        boolean z10;
        i8.a aVar;
        c cVar;
        l8.b bVar2;
        Context context = bVar.f10584l;
        this.f10570k = context;
        if (bVar.f10575c == null && context == null) {
            z10 = false;
        } else {
            z10 = true;
        }
        j.j(z10, "Either a non-null context or a base directory path or supplier must be provided.");
        if (bVar.f10575c == null && context != null) {
            bVar.f10575c = new a();
        }
        this.f10560a = bVar.f10573a;
        this.f10561b = (String) j.g(bVar.f10574b);
        this.f10562c = (Supplier) j.g(bVar.f10575c);
        this.f10563d = bVar.f10576d;
        this.f10564e = bVar.f10577e;
        this.f10565f = bVar.f10578f;
        this.f10566g = (i) j.g(bVar.f10579g);
        if (bVar.f10580h != null) {
            aVar = bVar.f10580h;
        } else {
            aVar = f.b();
        }
        this.f10567h = aVar;
        if (bVar.f10581i != null) {
            cVar = bVar.f10581i;
        } else {
            cVar = g.i();
        }
        this.f10568i = cVar;
        if (bVar.f10582j != null) {
            bVar2 = bVar.f10582j;
        } else {
            bVar2 = l8.c.b();
        }
        this.f10569j = bVar2;
        this.f10571l = bVar.f10583k;
    }

    public static b m(Context context) {
        return new b(context);
    }

    public String b() {
        return this.f10561b;
    }

    public Supplier c() {
        return this.f10562c;
    }

    public i8.a d() {
        return this.f10567h;
    }

    public c e() {
        return this.f10568i;
    }

    public long f() {
        return this.f10563d;
    }

    public l8.b g() {
        return this.f10569j;
    }

    public i h() {
        return this.f10566g;
    }

    public boolean i() {
        return this.f10571l;
    }

    public long j() {
        return this.f10564e;
    }

    public long k() {
        return this.f10565f;
    }

    public int l() {
        return this.f10560a;
    }
}
