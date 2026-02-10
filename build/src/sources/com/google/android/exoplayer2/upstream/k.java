package com.google.android.exoplayer2.upstream;

import android.net.Uri;
import com.google.android.exoplayer2.source.LoadEventInfo;
import com.google.android.exoplayer2.upstream.a;
import com.google.android.exoplayer2.upstream.j;
import java.io.InputStream;
import java.util.Map;
import me.a0;
import me.n;
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class k implements j.e {

    /* renamed from: a  reason: collision with root package name */
    public final long f14163a;

    /* renamed from: b  reason: collision with root package name */
    public final com.google.android.exoplayer2.upstream.a f14164b;

    /* renamed from: c  reason: collision with root package name */
    public final int f14165c;

    /* renamed from: d  reason: collision with root package name */
    private final a0 f14166d;

    /* renamed from: e  reason: collision with root package name */
    private final a f14167e;

    /* renamed from: f  reason: collision with root package name */
    private volatile Object f14168f;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface a {
        Object a(Uri uri, InputStream inputStream);
    }

    public k(DataSource dataSource, Uri uri, int i10, a aVar) {
        this(dataSource, new a.b().i(uri).b(1).a(), i10, aVar);
    }

    @Override // com.google.android.exoplayer2.upstream.j.e
    public final void a() {
        this.f14166d.r();
        n nVar = new n(this.f14166d, this.f14164b);
        try {
            nVar.h();
            this.f14168f = this.f14167e.a((Uri) oe.a.e(this.f14166d.m()), nVar);
        } finally {
            w0.n(nVar);
        }
    }

    public long b() {
        return this.f14166d.o();
    }

    @Override // com.google.android.exoplayer2.upstream.j.e
    public final void c() {
    }

    public Map d() {
        return this.f14166d.q();
    }

    public final Object e() {
        return this.f14168f;
    }

    public Uri f() {
        return this.f14166d.p();
    }

    public k(DataSource dataSource, com.google.android.exoplayer2.upstream.a aVar, int i10, a aVar2) {
        this.f14166d = new a0(dataSource);
        this.f14164b = aVar;
        this.f14165c = i10;
        this.f14167e = aVar2;
        this.f14163a = LoadEventInfo.a();
    }
}
