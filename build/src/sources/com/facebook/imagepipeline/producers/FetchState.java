package com.facebook.imagepipeline.producers;

import android.net.Uri;
import com.facebook.imagepipeline.common.BytesRange;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class FetchState {

    /* renamed from: a  reason: collision with root package name */
    private final Consumer f11676a;

    /* renamed from: b  reason: collision with root package name */
    private final ProducerContext f11677b;

    /* renamed from: c  reason: collision with root package name */
    private long f11678c = 0;

    /* renamed from: d  reason: collision with root package name */
    private int f11679d;

    /* renamed from: e  reason: collision with root package name */
    private BytesRange f11680e;

    public FetchState(Consumer consumer, ProducerContext producerContext) {
        this.f11676a = consumer;
        this.f11677b = producerContext;
    }

    public Consumer a() {
        return this.f11676a;
    }

    public ProducerContext b() {
        return this.f11677b;
    }

    public long c() {
        return this.f11678c;
    }

    public y0 d() {
        return this.f11677b.F();
    }

    public int e() {
        return this.f11679d;
    }

    public BytesRange f() {
        return this.f11680e;
    }

    public Uri g() {
        return this.f11677b.V().getSourceUri();
    }

    public void h(long j10) {
        this.f11678c = j10;
    }

    public void i(int i10) {
        this.f11679d = i10;
    }

    public void j(BytesRange bytesRange) {
        this.f11680e = bytesRange;
    }
}
