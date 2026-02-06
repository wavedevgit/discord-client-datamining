package com.google.android.exoplayer2.source;

import com.google.android.exoplayer2.Format;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class MediaLoadData {

    /* renamed from: a  reason: collision with root package name */
    public final int f12705a;

    /* renamed from: b  reason: collision with root package name */
    public final int f12706b;

    /* renamed from: c  reason: collision with root package name */
    public final Format f12707c;

    /* renamed from: d  reason: collision with root package name */
    public final int f12708d;

    /* renamed from: e  reason: collision with root package name */
    public final Object f12709e;

    /* renamed from: f  reason: collision with root package name */
    public final long f12710f;

    /* renamed from: g  reason: collision with root package name */
    public final long f12711g;

    public MediaLoadData(int i10) {
        this(i10, -1, null, 0, null, -9223372036854775807L, -9223372036854775807L);
    }

    public MediaLoadData(int i10, int i11, Format format, int i12, Object obj, long j10, long j11) {
        this.f12705a = i10;
        this.f12706b = i11;
        this.f12707c = format;
        this.f12708d = i12;
        this.f12709e = obj;
        this.f12710f = j10;
        this.f12711g = j11;
    }
}
