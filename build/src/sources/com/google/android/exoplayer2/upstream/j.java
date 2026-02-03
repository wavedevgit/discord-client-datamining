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
    public final long f13100a;

    /* renamed from: b  reason: collision with root package name */
    public final com.google.android.exoplayer2.upstream.a f13101b;

    /* renamed from: c  reason: collision with root package name */
    public final int f13102c;

    /* renamed from: d  reason: collision with root package name */
    private final a0 f13103d;

    /* renamed from: e  reason: collision with root package name */
    private final a f13104e;

    /* renamed from: f  reason: collision with root package name */
    private volatile Object f13105f;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface a {
        Object a(Uri uri, InputStream inputStream);
    }

    public j(DataSource dataSource, Uri uri, int i10, a aVar) {
        this(dataSource, new a.b().i(uri).b(1).a(), i10, aVar);
    }

    public long a() {
        return this.f13103d.o();
    }

    @Override // com.google.android.exoplayer2.upstream.i.e
    public final void b() {
        this.f13103d.r();
        n nVar = new n(this.f13103d, this.f13101b);
        try {
            nVar.h();
            this.f13105f = this.f13104e.a((Uri) ne.a.e(this.f13103d.m()), nVar);
        } finally {
            w0.n(nVar);
        }
    }

    @Override // com.google.android.exoplayer2.upstream.i.e
    public final void c() {
    }

    public Map d() {
        return this.f13103d.q();
    }

    public final Object e() {
        return this.f13105f;
    }

    public Uri f() {
        return this.f13103d.p();
    }

    public j(DataSource dataSource, com.google.android.exoplayer2.upstream.a aVar, int i10, a aVar2) {
        this.f13103d = new a0(dataSource);
        this.f13101b = aVar;
        this.f13102c = i10;
        this.f13104e = aVar2;
        this.f13100a = LoadEventInfo.a();
    }
}
