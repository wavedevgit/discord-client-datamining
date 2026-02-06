package com.google.android.exoplayer2.upstream;

import android.net.Uri;
import com.google.android.exoplayer2.source.LoadEventInfo;
import com.google.android.exoplayer2.upstream.a;
import com.google.android.exoplayer2.upstream.j;
import java.io.InputStream;
import java.util.Map;
import le.a0;
import le.n;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class k implements j.e {

    /* renamed from: a  reason: collision with root package name */
    public final long f13446a;

    /* renamed from: b  reason: collision with root package name */
    public final com.google.android.exoplayer2.upstream.a f13447b;

    /* renamed from: c  reason: collision with root package name */
    public final int f13448c;

    /* renamed from: d  reason: collision with root package name */
    private final a0 f13449d;

    /* renamed from: e  reason: collision with root package name */
    private final a f13450e;

    /* renamed from: f  reason: collision with root package name */
    private volatile Object f13451f;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface a {
        Object a(Uri uri, InputStream inputStream);
    }

    public k(DataSource dataSource, Uri uri, int i10, a aVar) {
        this(dataSource, new a.b().i(uri).b(1).a(), i10, aVar);
    }

    public long a() {
        return this.f13449d.o();
    }

    @Override // com.google.android.exoplayer2.upstream.j.e
    public final void b() {
        this.f13449d.r();
        n nVar = new n(this.f13449d, this.f13447b);
        try {
            nVar.g();
            this.f13451f = this.f13450e.a((Uri) ne.a.e(this.f13449d.m()), nVar);
        } finally {
            w0.n(nVar);
        }
    }

    @Override // com.google.android.exoplayer2.upstream.j.e
    public final void c() {
    }

    public Map d() {
        return this.f13449d.q();
    }

    public final Object e() {
        return this.f13451f;
    }

    public Uri f() {
        return this.f13449d.p();
    }

    public k(DataSource dataSource, com.google.android.exoplayer2.upstream.a aVar, int i10, a aVar2) {
        this.f13449d = new a0(dataSource);
        this.f13447b = aVar;
        this.f13448c = i10;
        this.f13450e = aVar2;
        this.f13446a = LoadEventInfo.a();
    }
}
