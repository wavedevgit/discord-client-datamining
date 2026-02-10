package com.facebook.imagepipeline.producers;

import android.net.Uri;
import com.facebook.imagepipeline.common.BytesRange;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class FetchState {

    /* renamed from: a  reason: collision with root package name */
    private final Consumer f10697a;

    /* renamed from: b  reason: collision with root package name */
    private final ProducerContext f10698b;

    /* renamed from: c  reason: collision with root package name */
    private long f10699c = 0;

    /* renamed from: d  reason: collision with root package name */
    private int f10700d;

    /* renamed from: e  reason: collision with root package name */
    private BytesRange f10701e;

    public FetchState(Consumer consumer, ProducerContext producerContext) {
        this.f10697a = consumer;
        this.f10698b = producerContext;
    }

    public Consumer a() {
        return this.f10697a;
    }

    public ProducerContext b() {
        return this.f10698b;
    }

    public long c() {
        return this.f10699c;
    }

    public y0 d() {
        return this.f10698b.y();
    }

    public int e() {
        return this.f10700d;
    }

    public BytesRange f() {
        return this.f10701e;
    }

    public Uri g() {
        return this.f10698b.I().getSourceUri();
    }

    public void h(long j10) {
        this.f10699c = j10;
    }

    public void i(int i10) {
        this.f10700d = i10;
    }

    public void j(BytesRange bytesRange) {
        this.f10701e = bytesRange;
    }
}
