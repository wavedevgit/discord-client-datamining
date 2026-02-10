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
    private final int f10529a;

    /* renamed from: b  reason: collision with root package name */
    private final String f10530b;

    /* renamed from: c  reason: collision with root package name */
    private final Supplier f10531c;

    /* renamed from: d  reason: collision with root package name */
    private final long f10532d;

    /* renamed from: e  reason: collision with root package name */
    private final long f10533e;

    /* renamed from: f  reason: collision with root package name */
    private final long f10534f;

    /* renamed from: g  reason: collision with root package name */
    private final i f10535g;

    /* renamed from: h  reason: collision with root package name */
    private final j8.a f10536h;

    /* renamed from: i  reason: collision with root package name */
    private final c f10537i;

    /* renamed from: j  reason: collision with root package name */
    private final m8.b f10538j;

    /* renamed from: k  reason: collision with root package name */
    private final Context f10539k;

    /* renamed from: l  reason: collision with root package name */
    private final boolean f10540l;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements Supplier {
        a() {
        }

        @Override // com.facebook.common.internal.Supplier
        /* renamed from: a */
        public File get() {
            j.g(DiskCacheConfig.this.f10539k);
            return DiskCacheConfig.this.f10539k.getApplicationContext().getCacheDir();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private int f10542a;

        /* renamed from: b  reason: collision with root package name */
        private String f10543b;

        /* renamed from: c  reason: collision with root package name */
        private Supplier f10544c;

        /* renamed from: d  reason: collision with root package name */
        private long f10545d;

        /* renamed from: e  reason: collision with root package name */
        private long f10546e;

        /* renamed from: f  reason: collision with root package name */
        private long f10547f;

        /* renamed from: g  reason: collision with root package name */
        private i f10548g;

        /* renamed from: h  reason: collision with root package name */
        private j8.a f10549h;

        /* renamed from: i  reason: collision with root package name */
        private c f10550i;

        /* renamed from: j  reason: collision with root package name */
        private m8.b f10551j;

        /* renamed from: k  reason: collision with root package name */
        private boolean f10552k;

        /* renamed from: l  reason: collision with root package name */
        private final Context f10553l;

        public DiskCacheConfig n() {
            return new DiskCacheConfig(this);
        }

        public b o(String str) {
            this.f10543b = str;
            return this;
        }

        public b p(File file) {
            this.f10544c = m.a(file);
            return this;
        }

        public b q(long j10) {
            this.f10545d = j10;
            return this;
        }

        private b(Context context) {
            this.f10542a = 1;
            this.f10543b = "image_cache";
            this.f10545d = 41943040L;
            this.f10546e = 10485760L;
            this.f10547f = 2097152L;
            this.f10548g = new k8.c();
            this.f10553l = context;
        }
    }

    protected DiskCacheConfig(b bVar) {
        boolean z10;
        j8.a aVar;
        c cVar;
        m8.b bVar2;
        Context context = bVar.f10553l;
        this.f10539k = context;
        if (bVar.f10544c == null && context == null) {
            z10 = false;
        } else {
            z10 = true;
        }
        j.j(z10, "Either a non-null context or a base directory path or supplier must be provided.");
        if (bVar.f10544c == null && context != null) {
            bVar.f10544c = new a();
        }
        this.f10529a = bVar.f10542a;
        this.f10530b = (String) j.g(bVar.f10543b);
        this.f10531c = (Supplier) j.g(bVar.f10544c);
        this.f10532d = bVar.f10545d;
        this.f10533e = bVar.f10546e;
        this.f10534f = bVar.f10547f;
        this.f10535g = (i) j.g(bVar.f10548g);
        if (bVar.f10549h != null) {
            aVar = bVar.f10549h;
        } else {
            aVar = f.b();
        }
        this.f10536h = aVar;
        if (bVar.f10550i != null) {
            cVar = bVar.f10550i;
        } else {
            cVar = g.i();
        }
        this.f10537i = cVar;
        if (bVar.f10551j != null) {
            bVar2 = bVar.f10551j;
        } else {
            bVar2 = m8.c.b();
        }
        this.f10538j = bVar2;
        this.f10540l = bVar.f10552k;
    }

    public static b m(Context context) {
        return new b(context);
    }

    public String b() {
        return this.f10530b;
    }

    public Supplier c() {
        return this.f10531c;
    }

    public j8.a d() {
        return this.f10536h;
    }

    public c e() {
        return this.f10537i;
    }

    public long f() {
        return this.f10532d;
    }

    public m8.b g() {
        return this.f10538j;
    }

    public i h() {
        return this.f10535g;
    }

    public boolean i() {
        return this.f10540l;
    }

    public long j() {
        return this.f10533e;
    }

    public long k() {
        return this.f10534f;
    }

    public int l() {
        return this.f10529a;
    }
}
