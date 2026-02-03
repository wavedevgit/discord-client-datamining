package com.google.android.exoplayer2.source;

import android.net.Uri;
import com.google.android.exoplayer2.upstream.a;
import java.util.Collections;
import java.util.Map;
import java.util.concurrent.atomic.AtomicLong;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class LoadEventInfo {

    /* renamed from: h  reason: collision with root package name */
    private static final AtomicLong f13383h = new AtomicLong();

    /* renamed from: a  reason: collision with root package name */
    public final long f13384a;

    /* renamed from: b  reason: collision with root package name */
    public final a f13385b;

    /* renamed from: c  reason: collision with root package name */
    public final Uri f13386c;

    /* renamed from: d  reason: collision with root package name */
    public final Map f13387d;

    /* renamed from: e  reason: collision with root package name */
    public final long f13388e;

    /* renamed from: f  reason: collision with root package name */
    public final long f13389f;

    /* renamed from: g  reason: collision with root package name */
    public final long f13390g;

    public LoadEventInfo(long j10, a aVar, long j11) {
        this(j10, aVar, aVar.f13975a, Collections.EMPTY_MAP, j11, 0L, 0L);
    }

    public static long a() {
        return f13383h.getAndIncrement();
    }

    public LoadEventInfo(long j10, a aVar, Uri uri, Map map, long j11, long j12, long j13) {
        this.f13384a = j10;
        this.f13385b = aVar;
        this.f13386c = uri;
        this.f13387d = map;
        this.f13388e = j11;
        this.f13389f = j12;
        this.f13390g = j13;
    }
}
