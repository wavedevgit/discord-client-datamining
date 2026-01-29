package com.google.android.exoplayer2.upstream;

import android.net.Uri;
import com.google.android.exoplayer2.source.LoadEventInfo;
import com.google.android.exoplayer2.upstream.a;
import com.google.android.exoplayer2.upstream.i;
import java.io.InputStream;
import java.util.Map;
import le.a0;
import le.n;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class j implements i.e {

    /* renamed from: a  reason: collision with root package name */
    public final long f14503a;

    /* renamed from: b  reason: collision with root package name */
    public final com.google.android.exoplayer2.upstream.a f14504b;

    /* renamed from: c  reason: collision with root package name */
    public final int f14505c;

    /* renamed from: d  reason: collision with root package name */
    private final a0 f14506d;

    /* renamed from: e  reason: collision with root package name */
    private final a f14507e;

    /* renamed from: f  reason: collision with root package name */
    private volatile Object f14508f;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface a {
        Object a(Uri uri, InputStream inputStream);
    }

    public j(DataSource dataSource, Uri uri, int i10, a aVar) {
        this(dataSource, new a.b().i(uri).b(1).a(), i10, aVar);
    }

    public long a() {
        return this.f14506d.o();
    }

    @Override // com.google.android.exoplayer2.upstream.i.e
    public final void b() {
        this.f14506d.r();
        n nVar = new n(this.f14506d, this.f14504b);
        try {
            nVar.h();
            this.f14508f = this.f14507e.a((Uri) ne.a.e(this.f14506d.m()), nVar);
        } finally {
            w0.n(nVar);
        }
    }

    @Override // com.google.android.exoplayer2.upstream.i.e
    public final void c() {
    }

    public Map d() {
        return this.f14506d.q();
    }

    public final Object e() {
        return this.f14508f;
    }

    public Uri f() {
        return this.f14506d.p();
    }

    public j(DataSource dataSource, com.google.android.exoplayer2.upstream.a aVar, int i10, a aVar2) {
        this.f14506d = new a0(dataSource);
        this.f14504b = aVar;
        this.f14505c = i10;
        this.f14507e = aVar2;
        this.f14503a = LoadEventInfo.a();
    }
}
