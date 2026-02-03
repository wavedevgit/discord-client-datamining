package com.google.android.exoplayer2.source;

import com.google.android.exoplayer2.Format;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class MediaLoadData {

    /* renamed from: a  reason: collision with root package name */
    public final int f12359a;

    /* renamed from: b  reason: collision with root package name */
    public final int f12360b;

    /* renamed from: c  reason: collision with root package name */
    public final Format f12361c;

    /* renamed from: d  reason: collision with root package name */
    public final int f12362d;

    /* renamed from: e  reason: collision with root package name */
    public final Object f12363e;

    /* renamed from: f  reason: collision with root package name */
    public final long f12364f;

    /* renamed from: g  reason: collision with root package name */
    public final long f12365g;

    public MediaLoadData(int i10) {
        this(i10, -1, null, 0, null, -9223372036854775807L, -9223372036854775807L);
    }

    public MediaLoadData(int i10, int i11, Format format, int i12, Object obj, long j10, long j11) {
        this.f12359a = i10;
        this.f12360b = i11;
        this.f12361c = format;
        this.f12362d = i12;
        this.f12363e = obj;
        this.f12364f = j10;
        this.f12365g = j11;
    }
}
