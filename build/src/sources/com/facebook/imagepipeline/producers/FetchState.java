package com.facebook.imagepipeline.producers;

import android.net.Uri;
import com.facebook.imagepipeline.common.BytesRange;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class FetchState {

    /* renamed from: a  reason: collision with root package name */
    private final Consumer f10557a;

    /* renamed from: b  reason: collision with root package name */
    private final ProducerContext f10558b;

    /* renamed from: c  reason: collision with root package name */
    private long f10559c = 0;

    /* renamed from: d  reason: collision with root package name */
    private int f10560d;

    /* renamed from: e  reason: collision with root package name */
    private BytesRange f10561e;

    public FetchState(Consumer consumer, ProducerContext producerContext) {
        this.f10557a = consumer;
        this.f10558b = producerContext;
    }

    public Consumer a() {
        return this.f10557a;
    }

    public ProducerContext b() {
        return this.f10558b;
    }

    public long c() {
        return this.f10559c;
    }

    public y0 d() {
        return this.f10558b.y();
    }

    public int e() {
        return this.f10560d;
    }

    public BytesRange f() {
        return this.f10561e;
    }

    public Uri g() {
        return this.f10558b.I().getSourceUri();
    }

    public void h(long j10) {
        this.f10559c = j10;
    }

    public void i(int i10) {
        this.f10560d = i10;
    }

    public void j(BytesRange bytesRange) {
        this.f10561e = bytesRange;
    }
}
