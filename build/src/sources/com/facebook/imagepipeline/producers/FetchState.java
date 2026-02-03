package com.facebook.imagepipeline.producers;

import android.net.Uri;
import com.facebook.imagepipeline.common.BytesRange;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class FetchState {

    /* renamed from: a  reason: collision with root package name */
    private final Consumer f10273a;

    /* renamed from: b  reason: collision with root package name */
    private final ProducerContext f10274b;

    /* renamed from: c  reason: collision with root package name */
    private long f10275c = 0;

    /* renamed from: d  reason: collision with root package name */
    private int f10276d;

    /* renamed from: e  reason: collision with root package name */
    private BytesRange f10277e;

    public FetchState(Consumer consumer, ProducerContext producerContext) {
        this.f10273a = consumer;
        this.f10274b = producerContext;
    }

    public Consumer a() {
        return this.f10273a;
    }

    public ProducerContext b() {
        return this.f10274b;
    }

    public long c() {
        return this.f10275c;
    }

    public y0 d() {
        return this.f10274b.F();
    }

    public int e() {
        return this.f10276d;
    }

    public BytesRange f() {
        return this.f10277e;
    }

    public Uri g() {
        return this.f10274b.V().getSourceUri();
    }

    public void h(long j10) {
        this.f10275c = j10;
    }

    public void i(int i10) {
        this.f10276d = i10;
    }

    public void j(BytesRange bytesRange) {
        this.f10277e = bytesRange;
    }
}
