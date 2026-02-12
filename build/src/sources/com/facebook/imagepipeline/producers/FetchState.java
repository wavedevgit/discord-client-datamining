package com.facebook.imagepipeline.producers;

import android.net.Uri;
import com.facebook.imagepipeline.common.BytesRange;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class FetchState {

    /* renamed from: a  reason: collision with root package name */
    private final Consumer f11275a;

    /* renamed from: b  reason: collision with root package name */
    private final ProducerContext f11276b;

    /* renamed from: c  reason: collision with root package name */
    private long f11277c = 0;

    /* renamed from: d  reason: collision with root package name */
    private int f11278d;

    /* renamed from: e  reason: collision with root package name */
    private BytesRange f11279e;

    public FetchState(Consumer consumer, ProducerContext producerContext) {
        this.f11275a = consumer;
        this.f11276b = producerContext;
    }

    public Consumer a() {
        return this.f11275a;
    }

    public ProducerContext b() {
        return this.f11276b;
    }

    public long c() {
        return this.f11277c;
    }

    public y0 d() {
        return this.f11276b.y();
    }

    public int e() {
        return this.f11278d;
    }

    public BytesRange f() {
        return this.f11279e;
    }

    public Uri g() {
        return this.f11276b.I().getSourceUri();
    }

    public void h(long j10) {
        this.f11277c = j10;
    }

    public void i(int i10) {
        this.f11278d = i10;
    }

    public void j(BytesRange bytesRange) {
        this.f11279e = bytesRange;
    }
}
