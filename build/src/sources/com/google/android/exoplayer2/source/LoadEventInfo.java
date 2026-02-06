package com.google.android.exoplayer2.source;

import android.net.Uri;
import com.google.android.exoplayer2.upstream.a;
import java.util.Collections;
import java.util.Map;
import java.util.concurrent.atomic.AtomicLong;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class LoadEventInfo {

    /* renamed from: h  reason: collision with root package name */
    private static final AtomicLong f12697h = new AtomicLong();

    /* renamed from: a  reason: collision with root package name */
    public final long f12698a;

    /* renamed from: b  reason: collision with root package name */
    public final a f12699b;

    /* renamed from: c  reason: collision with root package name */
    public final Uri f12700c;

    /* renamed from: d  reason: collision with root package name */
    public final Map f12701d;

    /* renamed from: e  reason: collision with root package name */
    public final long f12702e;

    /* renamed from: f  reason: collision with root package name */
    public final long f12703f;

    /* renamed from: g  reason: collision with root package name */
    public final long f12704g;

    public LoadEventInfo(long j10, a aVar, long j11) {
        this(j10, aVar, aVar.f13265a, Collections.EMPTY_MAP, j11, 0L, 0L);
    }

    public static long a() {
        return f12697h.getAndIncrement();
    }

    public LoadEventInfo(long j10, a aVar, Uri uri, Map map, long j11, long j12, long j13) {
        this.f12698a = j10;
        this.f12699b = aVar;
        this.f12700c = uri;
        this.f12701d = map;
        this.f12702e = j11;
        this.f12703f = j12;
        this.f12704g = j13;
    }
}
