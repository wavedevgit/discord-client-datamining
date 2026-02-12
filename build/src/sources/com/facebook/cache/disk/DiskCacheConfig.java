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
    private final int f10530a;

    /* renamed from: b  reason: collision with root package name */
    private final String f10531b;

    /* renamed from: c  reason: collision with root package name */
    private final Supplier f10532c;

    /* renamed from: d  reason: collision with root package name */
    private final long f10533d;

    /* renamed from: e  reason: collision with root package name */
    private final long f10534e;

    /* renamed from: f  reason: collision with root package name */
    private final long f10535f;

    /* renamed from: g  reason: collision with root package name */
    private final i f10536g;

    /* renamed from: h  reason: collision with root package name */
    private final j8.a f10537h;

    /* renamed from: i  reason: collision with root package name */
    private final c f10538i;

    /* renamed from: j  reason: collision with root package name */
    private final m8.b f10539j;

    /* renamed from: k  reason: collision with root package name */
    private final Context f10540k;

    /* renamed from: l  reason: collision with root package name */
    private final boolean f10541l;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements Supplier {
        a() {
        }

        @Override // com.facebook.common.internal.Supplier
        /* renamed from: a */
        public File get() {
            j.g(DiskCacheConfig.this.f10540k);
            return DiskCacheConfig.this.f10540k.getApplicationContext().getCacheDir();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private int f10543a;

        /* renamed from: b  reason: collision with root package name */
        private String f10544b;

        /* renamed from: c  reason: collision with root package name */
        private Supplier f10545c;

        /* renamed from: d  reason: collision with root package name */
        private long f10546d;

        /* renamed from: e  reason: collision with root package name */
        private long f10547e;

        /* renamed from: f  reason: collision with root package name */
        private long f10548f;

        /* renamed from: g  reason: collision with root package name */
        private i f10549g;

        /* renamed from: h  reason: collision with root package name */
        private j8.a f10550h;

        /* renamed from: i  reason: collision with root package name */
        private c f10551i;

        /* renamed from: j  reason: collision with root package name */
        private m8.b f10552j;

        /* renamed from: k  reason: collision with root package name */
        private boolean f10553k;

        /* renamed from: l  reason: collision with root package name */
        private final Context f10554l;

        public DiskCacheConfig n() {
            return new DiskCacheConfig(this);
        }

        public b o(String str) {
            this.f10544b = str;
            return this;
        }

        public b p(File file) {
            this.f10545c = m.a(file);
            return this;
        }

        public b q(long j10) {
            this.f10546d = j10;
            return this;
        }

        private b(Context context) {
            this.f10543a = 1;
            this.f10544b = "image_cache";
            this.f10546d = 41943040L;
            this.f10547e = 10485760L;
            this.f10548f = 2097152L;
            this.f10549g = new k8.c();
            this.f10554l = context;
        }
    }

    protected DiskCacheConfig(b bVar) {
        boolean z10;
        j8.a aVar;
        c cVar;
        m8.b bVar2;
        Context context = bVar.f10554l;
        this.f10540k = context;
        if (bVar.f10545c == null && context == null) {
            z10 = false;
        } else {
            z10 = true;
        }
        j.j(z10, "Either a non-null context or a base directory path or supplier must be provided.");
        if (bVar.f10545c == null && context != null) {
            bVar.f10545c = new a();
        }
        this.f10530a = bVar.f10543a;
        this.f10531b = (String) j.g(bVar.f10544b);
        this.f10532c = (Supplier) j.g(bVar.f10545c);
        this.f10533d = bVar.f10546d;
        this.f10534e = bVar.f10547e;
        this.f10535f = bVar.f10548f;
        this.f10536g = (i) j.g(bVar.f10549g);
        if (bVar.f10550h != null) {
            aVar = bVar.f10550h;
        } else {
            aVar = f.b();
        }
        this.f10537h = aVar;
        if (bVar.f10551i != null) {
            cVar = bVar.f10551i;
        } else {
            cVar = g.i();
        }
        this.f10538i = cVar;
        if (bVar.f10552j != null) {
            bVar2 = bVar.f10552j;
        } else {
            bVar2 = m8.c.b();
        }
        this.f10539j = bVar2;
        this.f10541l = bVar.f10553k;
    }

    public static b m(Context context) {
        return new b(context);
    }

    public String b() {
        return this.f10531b;
    }

    public Supplier c() {
        return this.f10532c;
    }

    public j8.a d() {
        return this.f10537h;
    }

    public c e() {
        return this.f10538i;
    }

    public long f() {
        return this.f10533d;
    }

    public m8.b g() {
        return this.f10539j;
    }

    public i h() {
        return this.f10536g;
    }

    public boolean i() {
        return this.f10541l;
    }

    public long j() {
        return this.f10534e;
    }

    public long k() {
        return this.f10535f;
    }

    public int l() {
        return this.f10530a;
    }
}
