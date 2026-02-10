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
    public final long f13586a;

    /* renamed from: b  reason: collision with root package name */
    public final com.google.android.exoplayer2.upstream.a f13587b;

    /* renamed from: c  reason: collision with root package name */
    public final int f13588c;

    /* renamed from: d  reason: collision with root package name */
    private final a0 f13589d;

    /* renamed from: e  reason: collision with root package name */
    private final a f13590e;

    /* renamed from: f  reason: collision with root package name */
    private volatile Object f13591f;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface a {
        Object a(Uri uri, InputStream inputStream);
    }

    public k(DataSource dataSource, Uri uri, int i10, a aVar) {
        this(dataSource, new a.b().i(uri).b(1).a(), i10, aVar);
    }

    @Override // com.google.android.exoplayer2.upstream.j.e
    public final void a() {
        this.f13589d.r();
        n nVar = new n(this.f13589d, this.f13587b);
        try {
            nVar.g();
            this.f13591f = this.f13590e.a((Uri) oe.a.e(this.f13589d.m()), nVar);
        } finally {
            w0.n(nVar);
        }
    }

    public long b() {
        return this.f13589d.o();
    }

    @Override // com.google.android.exoplayer2.upstream.j.e
    public final void c() {
    }

    public Map d() {
        return this.f13589d.q();
    }

    public final Object e() {
        return this.f13591f;
    }

    public Uri f() {
        return this.f13589d.p();
    }

    public k(DataSource dataSource, com.google.android.exoplayer2.upstream.a aVar, int i10, a aVar2) {
        this.f13589d = new a0(dataSource);
        this.f13587b = aVar;
        this.f13588c = i10;
        this.f13590e = aVar2;
        this.f13586a = LoadEventInfo.a();
    }
}
