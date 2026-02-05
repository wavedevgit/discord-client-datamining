package com.google.android.exoplayer2.source;

import android.net.Uri;
import com.google.android.exoplayer2.upstream.a;
import java.util.Collections;
import java.util.Map;
import java.util.concurrent.atomic.AtomicLong;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class LoadEventInfo {

    /* renamed from: h  reason: collision with root package name */
    private static final AtomicLong f12736h = new AtomicLong();

    /* renamed from: a  reason: collision with root package name */
    public final long f12737a;

    /* renamed from: b  reason: collision with root package name */
    public final a f12738b;

    /* renamed from: c  reason: collision with root package name */
    public final Uri f12739c;

    /* renamed from: d  reason: collision with root package name */
    public final Map f12740d;

    /* renamed from: e  reason: collision with root package name */
    public final long f12741e;

    /* renamed from: f  reason: collision with root package name */
    public final long f12742f;

    /* renamed from: g  reason: collision with root package name */
    public final long f12743g;

    public LoadEventInfo(long j10, a aVar, long j11) {
        this(j10, aVar, aVar.f13328a, Collections.EMPTY_MAP, j11, 0L, 0L);
    }

    public static long a() {
        return f12736h.getAndIncrement();
    }

    public LoadEventInfo(long j10, a aVar, Uri uri, Map map, long j11, long j12, long j13) {
        this.f12737a = j10;
        this.f12738b = aVar;
        this.f12739c = uri;
        this.f12740d = map;
        this.f12741e = j11;
        this.f12742f = j12;
        this.f12743g = j13;
    }
}
