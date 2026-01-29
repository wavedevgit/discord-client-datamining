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
    private final int f10931a;

    /* renamed from: b  reason: collision with root package name */
    private final String f10932b;

    /* renamed from: c  reason: collision with root package name */
    private final Supplier f10933c;

    /* renamed from: d  reason: collision with root package name */
    private final long f10934d;

    /* renamed from: e  reason: collision with root package name */
    private final long f10935e;

    /* renamed from: f  reason: collision with root package name */
    private final long f10936f;

    /* renamed from: g  reason: collision with root package name */
    private final i f10937g;

    /* renamed from: h  reason: collision with root package name */
    private final i8.a f10938h;

    /* renamed from: i  reason: collision with root package name */
    private final c f10939i;

    /* renamed from: j  reason: collision with root package name */
    private final l8.b f10940j;

    /* renamed from: k  reason: collision with root package name */
    private final Context f10941k;

    /* renamed from: l  reason: collision with root package name */
    private final boolean f10942l;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements Supplier {
        a() {
        }

        @Override // com.facebook.common.internal.Supplier
        /* renamed from: a */
        public File get() {
            j.g(DiskCacheConfig.this.f10941k);
            return DiskCacheConfig.this.f10941k.getApplicationContext().getCacheDir();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private int f10944a;

        /* renamed from: b  reason: collision with root package name */
        private String f10945b;

        /* renamed from: c  reason: collision with root package name */
        private Supplier f10946c;

        /* renamed from: d  reason: collision with root package name */
        private long f10947d;

        /* renamed from: e  reason: collision with root package name */
        private long f10948e;

        /* renamed from: f  reason: collision with root package name */
        private long f10949f;

        /* renamed from: g  reason: collision with root package name */
        private i f10950g;

        /* renamed from: h  reason: collision with root package name */
        private i8.a f10951h;

        /* renamed from: i  reason: collision with root package name */
        private c f10952i;

        /* renamed from: j  reason: collision with root package name */
        private l8.b f10953j;

        /* renamed from: k  reason: collision with root package name */
        private boolean f10954k;

        /* renamed from: l  reason: collision with root package name */
        private final Context f10955l;

        public DiskCacheConfig n() {
            return new DiskCacheConfig(this);
        }

        public b o(String str) {
            this.f10945b = str;
            return this;
        }

        public b p(File file) {
            this.f10946c = m.a(file);
            return this;
        }

        public b q(long j10) {
            this.f10947d = j10;
            return this;
        }

        private b(Context context) {
            this.f10944a = 1;
            this.f10945b = "image_cache";
            this.f10947d = 41943040L;
            this.f10948e = 10485760L;
            this.f10949f = 2097152L;
            this.f10950g = new j8.c();
            this.f10955l = context;
        }
    }

    protected DiskCacheConfig(b bVar) {
        boolean z10;
        i8.a aVar;
        c cVar;
        l8.b bVar2;
        Context context = bVar.f10955l;
        this.f10941k = context;
        if (bVar.f10946c == null && context == null) {
            z10 = false;
        } else {
            z10 = true;
        }
        j.j(z10, "Either a non-null context or a base directory path or supplier must be provided.");
        if (bVar.f10946c == null && context != null) {
            bVar.f10946c = new a();
        }
        this.f10931a = bVar.f10944a;
        this.f10932b = (String) j.g(bVar.f10945b);
        this.f10933c = (Supplier) j.g(bVar.f10946c);
        this.f10934d = bVar.f10947d;
        this.f10935e = bVar.f10948e;
        this.f10936f = bVar.f10949f;
        this.f10937g = (i) j.g(bVar.f10950g);
        if (bVar.f10951h != null) {
            aVar = bVar.f10951h;
        } else {
            aVar = f.b();
        }
        this.f10938h = aVar;
        if (bVar.f10952i != null) {
            cVar = bVar.f10952i;
        } else {
            cVar = g.i();
        }
        this.f10939i = cVar;
        if (bVar.f10953j != null) {
            bVar2 = bVar.f10953j;
        } else {
            bVar2 = l8.c.b();
        }
        this.f10940j = bVar2;
        this.f10942l = bVar.f10954k;
    }

    public static b m(Context context) {
        return new b(context);
    }

    public String b() {
        return this.f10932b;
    }

    public Supplier c() {
        return this.f10933c;
    }

    public i8.a d() {
        return this.f10938h;
    }

    public c e() {
        return this.f10939i;
    }

    public long f() {
        return this.f10934d;
    }

    public l8.b g() {
        return this.f10940j;
    }

    public i h() {
        return this.f10937g;
    }

    public boolean i() {
        return this.f10942l;
    }

    public long j() {
        return this.f10935e;
    }

    public long k() {
        return this.f10936f;
    }

    public int l() {
        return this.f10931a;
    }
}
