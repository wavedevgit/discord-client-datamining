package com.google.android.exoplayer2.source;

import com.google.android.exoplayer2.Format;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class MediaLoadData {

    /* renamed from: a  reason: collision with root package name */
    public final int f13423a;

    /* renamed from: b  reason: collision with root package name */
    public final int f13424b;

    /* renamed from: c  reason: collision with root package name */
    public final Format f13425c;

    /* renamed from: d  reason: collision with root package name */
    public final int f13426d;

    /* renamed from: e  reason: collision with root package name */
    public final Object f13427e;

    /* renamed from: f  reason: collision with root package name */
    public final long f13428f;

    /* renamed from: g  reason: collision with root package name */
    public final long f13429g;

    public MediaLoadData(int i10) {
        this(i10, -1, null, 0, null, -9223372036854775807L, -9223372036854775807L);
    }

    public MediaLoadData(int i10, int i11, Format format, int i12, Object obj, long j10, long j11) {
        this.f13423a = i10;
        this.f13424b = i11;
        this.f13425c = format;
        this.f13426d = i12;
        this.f13427e = obj;
        this.f13428f = j10;
        this.f13429g = j11;
    }
}
