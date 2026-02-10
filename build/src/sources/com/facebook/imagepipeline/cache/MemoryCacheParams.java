package com.facebook.imagepipeline.cache;

import java.util.concurrent.TimeUnit;
import kotlin.jvm.internal.DefaultConstructorMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class MemoryCacheParams {

    /* renamed from: a  reason: collision with root package name */
    public final int f10456a;

    /* renamed from: b  reason: collision with root package name */
    public final int f10457b;

    /* renamed from: c  reason: collision with root package name */
    public final int f10458c;

    /* renamed from: d  reason: collision with root package name */
    public final int f10459d;

    /* renamed from: e  reason: collision with root package name */
    public final int f10460e;

    /* renamed from: f  reason: collision with root package name */
    public final long f10461f;

    public MemoryCacheParams(int i10, int i11, int i12, int i13, int i14, long j10) {
        this.f10456a = i10;
        this.f10457b = i11;
        this.f10458c = i12;
        this.f10459d = i13;
        this.f10460e = i14;
        this.f10461f = j10;
    }

    public /* synthetic */ MemoryCacheParams(int i10, int i11, int i12, int i13, int i14, long j10, int i15, DefaultConstructorMarker defaultConstructorMarker) {
        this(i10, i11, i12, i13, i14, (i15 & 32) != 0 ? TimeUnit.MINUTES.toMillis(5L) : j10);
    }
}
