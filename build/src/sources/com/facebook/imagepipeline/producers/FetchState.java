package com.facebook.imagepipeline.producers;

import android.net.Uri;
import com.facebook.imagepipeline.common.BytesRange;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class FetchState {

    /* renamed from: a  reason: collision with root package name */
    private final Consumer f11305a;

    /* renamed from: b  reason: collision with root package name */
    private final ProducerContext f11306b;

    /* renamed from: c  reason: collision with root package name */
    private long f11307c = 0;

    /* renamed from: d  reason: collision with root package name */
    private int f11308d;

    /* renamed from: e  reason: collision with root package name */
    private BytesRange f11309e;

    public FetchState(Consumer consumer, ProducerContext producerContext) {
        this.f11305a = consumer;
        this.f11306b = producerContext;
    }

    public Consumer a() {
        return this.f11305a;
    }

    public ProducerContext b() {
        return this.f11306b;
    }

    public long c() {
        return this.f11307c;
    }

    public y0 d() {
        return this.f11306b.F();
    }

    public int e() {
        return this.f11308d;
    }

    public BytesRange f() {
        return this.f11309e;
    }

    public Uri g() {
        return this.f11306b.V().getSourceUri();
    }

    public void h(long j10) {
        this.f11307c = j10;
    }

    public void i(int i10) {
        this.f11308d = i10;
    }

    public void j(BytesRange bytesRange) {
        this.f11309e = bytesRange;
    }
}
