package com.facebook.imagepipeline.cache;

import java.util.concurrent.TimeUnit;
import kotlin.jvm.internal.DefaultConstructorMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class MemoryCacheParams {

    /* renamed from: a  reason: collision with root package name */
    public final int f11033a;

    /* renamed from: b  reason: collision with root package name */
    public final int f11034b;

    /* renamed from: c  reason: collision with root package name */
    public final int f11035c;

    /* renamed from: d  reason: collision with root package name */
    public final int f11036d;

    /* renamed from: e  reason: collision with root package name */
    public final int f11037e;

    /* renamed from: f  reason: collision with root package name */
    public final long f11038f;

    public MemoryCacheParams(int i10, int i11, int i12, int i13, int i14, long j10) {
        this.f11033a = i10;
        this.f11034b = i11;
        this.f11035c = i12;
        this.f11036d = i13;
        this.f11037e = i14;
        this.f11038f = j10;
    }

    public /* synthetic */ MemoryCacheParams(int i10, int i11, int i12, int i13, int i14, long j10, int i15, DefaultConstructorMarker defaultConstructorMarker) {
        this(i10, i11, i12, i13, i14, (i15 & 32) != 0 ? TimeUnit.MINUTES.toMillis(5L) : j10);
    }
}
