package com.facebook.imagepipeline.producers;

import android.net.Uri;
import com.facebook.imagepipeline.common.BytesRange;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class FetchState {

    /* renamed from: a  reason: collision with root package name */
    private final Consumer f10658a;

    /* renamed from: b  reason: collision with root package name */
    private final ProducerContext f10659b;

    /* renamed from: c  reason: collision with root package name */
    private long f10660c = 0;

    /* renamed from: d  reason: collision with root package name */
    private int f10661d;

    /* renamed from: e  reason: collision with root package name */
    private BytesRange f10662e;

    public FetchState(Consumer consumer, ProducerContext producerContext) {
        this.f10658a = consumer;
        this.f10659b = producerContext;
    }

    public Consumer a() {
        return this.f10658a;
    }

    public ProducerContext b() {
        return this.f10659b;
    }

    public long c() {
        return this.f10660c;
    }

    public y0 d() {
        return this.f10659b.F();
    }

    public int e() {
        return this.f10661d;
    }

    public BytesRange f() {
        return this.f10662e;
    }

    public Uri g() {
        return this.f10659b.V().getSourceUri();
    }

    public void h(long j10) {
        this.f10660c = j10;
    }

    public void i(int i10) {
        this.f10661d = i10;
    }

    public void j(BytesRange bytesRange) {
        this.f10662e = bytesRange;
    }
}
