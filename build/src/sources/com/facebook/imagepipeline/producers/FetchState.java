package com.facebook.imagepipeline.producers;

import android.net.Uri;
import com.facebook.imagepipeline.common.BytesRange;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class FetchState {

    /* renamed from: a  reason: collision with root package name */
    private final Consumer f11274a;

    /* renamed from: b  reason: collision with root package name */
    private final ProducerContext f11275b;

    /* renamed from: c  reason: collision with root package name */
    private long f11276c = 0;

    /* renamed from: d  reason: collision with root package name */
    private int f11277d;

    /* renamed from: e  reason: collision with root package name */
    private BytesRange f11278e;

    public FetchState(Consumer consumer, ProducerContext producerContext) {
        this.f11274a = consumer;
        this.f11275b = producerContext;
    }

    public Consumer a() {
        return this.f11274a;
    }

    public ProducerContext b() {
        return this.f11275b;
    }

    public long c() {
        return this.f11276c;
    }

    public y0 d() {
        return this.f11275b.y();
    }

    public int e() {
        return this.f11277d;
    }

    public BytesRange f() {
        return this.f11278e;
    }

    public Uri g() {
        return this.f11275b.I().getSourceUri();
    }

    public void h(long j10) {
        this.f11276c = j10;
    }

    public void i(int i10) {
        this.f11277d = i10;
    }

    public void j(BytesRange bytesRange) {
        this.f11278e = bytesRange;
    }
}
