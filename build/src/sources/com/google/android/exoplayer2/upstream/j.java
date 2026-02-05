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
    public final long f13485a;

    /* renamed from: b  reason: collision with root package name */
    public final com.google.android.exoplayer2.upstream.a f13486b;

    /* renamed from: c  reason: collision with root package name */
    public final int f13487c;

    /* renamed from: d  reason: collision with root package name */
    private final a0 f13488d;

    /* renamed from: e  reason: collision with root package name */
    private final a f13489e;

    /* renamed from: f  reason: collision with root package name */
    private volatile Object f13490f;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface a {
        Object a(Uri uri, InputStream inputStream);
    }

    public j(DataSource dataSource, Uri uri, int i10, a aVar) {
        this(dataSource, new a.b().i(uri).b(1).a(), i10, aVar);
    }

    public long a() {
        return this.f13488d.o();
    }

    @Override // com.google.android.exoplayer2.upstream.i.e
    public final void b() {
        this.f13488d.r();
        n nVar = new n(this.f13488d, this.f13486b);
        try {
            nVar.h();
            this.f13490f = this.f13489e.a((Uri) ne.a.e(this.f13488d.m()), nVar);
        } finally {
            w0.n(nVar);
        }
    }

    @Override // com.google.android.exoplayer2.upstream.i.e
    public final void c() {
    }

    public Map d() {
        return this.f13488d.q();
    }

    public final Object e() {
        return this.f13490f;
    }

    public Uri f() {
        return this.f13488d.p();
    }

    public j(DataSource dataSource, com.google.android.exoplayer2.upstream.a aVar, int i10, a aVar2) {
        this.f13488d = new a0(dataSource);
        this.f13486b = aVar;
        this.f13487c = i10;
        this.f13489e = aVar2;
        this.f13485a = LoadEventInfo.a();
    }
}
