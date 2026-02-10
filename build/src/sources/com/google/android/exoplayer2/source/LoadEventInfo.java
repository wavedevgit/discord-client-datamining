package com.google.android.exoplayer2.source;

import android.net.Uri;
import com.google.android.exoplayer2.upstream.a;
import java.util.Collections;
import java.util.Map;
import java.util.concurrent.atomic.AtomicLong;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class LoadEventInfo {

    /* renamed from: h  reason: collision with root package name */
    private static final AtomicLong f12837h = new AtomicLong();

    /* renamed from: a  reason: collision with root package name */
    public final long f12838a;

    /* renamed from: b  reason: collision with root package name */
    public final a f12839b;

    /* renamed from: c  reason: collision with root package name */
    public final Uri f12840c;

    /* renamed from: d  reason: collision with root package name */
    public final Map f12841d;

    /* renamed from: e  reason: collision with root package name */
    public final long f12842e;

    /* renamed from: f  reason: collision with root package name */
    public final long f12843f;

    /* renamed from: g  reason: collision with root package name */
    public final long f12844g;

    public LoadEventInfo(long j10, a aVar, long j11) {
        this(j10, aVar, aVar.f13405a, Collections.EMPTY_MAP, j11, 0L, 0L);
    }

    public static long a() {
        return f12837h.getAndIncrement();
    }

    public LoadEventInfo(long j10, a aVar, Uri uri, Map map, long j11, long j12, long j13) {
        this.f12838a = j10;
        this.f12839b = aVar;
        this.f12840c = uri;
        this.f12841d = map;
        this.f12842e = j11;
        this.f12843f = j12;
        this.f12844g = j13;
    }
}
