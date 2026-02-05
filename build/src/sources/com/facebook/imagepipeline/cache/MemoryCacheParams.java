package com.facebook.imagepipeline.cache;

import java.util.concurrent.TimeUnit;
import kotlin.jvm.internal.DefaultConstructorMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class MemoryCacheParams {

    /* renamed from: a  reason: collision with root package name */
    public final int f10417a;

    /* renamed from: b  reason: collision with root package name */
    public final int f10418b;

    /* renamed from: c  reason: collision with root package name */
    public final int f10419c;

    /* renamed from: d  reason: collision with root package name */
    public final int f10420d;

    /* renamed from: e  reason: collision with root package name */
    public final int f10421e;

    /* renamed from: f  reason: collision with root package name */
    public final long f10422f;

    public MemoryCacheParams(int i10, int i11, int i12, int i13, int i14, long j10) {
        this.f10417a = i10;
        this.f10418b = i11;
        this.f10419c = i12;
        this.f10420d = i13;
        this.f10421e = i14;
        this.f10422f = j10;
    }

    public /* synthetic */ MemoryCacheParams(int i10, int i11, int i12, int i13, int i14, long j10, int i15, DefaultConstructorMarker defaultConstructorMarker) {
        this(i10, i11, i12, i13, i14, (i15 & 32) != 0 ? TimeUnit.MINUTES.toMillis(5L) : j10);
    }
}
