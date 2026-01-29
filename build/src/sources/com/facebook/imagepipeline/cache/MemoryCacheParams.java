package com.facebook.imagepipeline.cache;

import java.util.concurrent.TimeUnit;
import kotlin.jvm.internal.DefaultConstructorMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class MemoryCacheParams {

    /* renamed from: a  reason: collision with root package name */
    public final int f11435a;

    /* renamed from: b  reason: collision with root package name */
    public final int f11436b;

    /* renamed from: c  reason: collision with root package name */
    public final int f11437c;

    /* renamed from: d  reason: collision with root package name */
    public final int f11438d;

    /* renamed from: e  reason: collision with root package name */
    public final int f11439e;

    /* renamed from: f  reason: collision with root package name */
    public final long f11440f;

    public MemoryCacheParams(int i10, int i11, int i12, int i13, int i14, long j10) {
        this.f11435a = i10;
        this.f11436b = i11;
        this.f11437c = i12;
        this.f11438d = i13;
        this.f11439e = i14;
        this.f11440f = j10;
    }

    public /* synthetic */ MemoryCacheParams(int i10, int i11, int i12, int i13, int i14, long j10, int i15, DefaultConstructorMarker defaultConstructorMarker) {
        this(i10, i11, i12, i13, i14, (i15 & 32) != 0 ? TimeUnit.MINUTES.toMillis(5L) : j10);
    }
}
