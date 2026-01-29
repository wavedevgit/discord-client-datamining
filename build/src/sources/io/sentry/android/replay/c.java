package io.sentry.android.replay;

import java.io.File;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final File f29369a;

    /* renamed from: b  reason: collision with root package name */
    private final int f29370b;

    /* renamed from: c  reason: collision with root package name */
    private final long f29371c;

    public c(File video, int i10, long j10) {
        Intrinsics.checkNotNullParameter(video, "video");
        this.f29369a = video;
        this.f29370b = i10;
        this.f29371c = j10;
    }

    public final File a() {
        return this.f29369a;
    }

    public final int b() {
        return this.f29370b;
    }

    public final long c() {
        return this.f29371c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof c) {
            c cVar = (c) obj;
            return Intrinsics.areEqual(this.f29369a, cVar.f29369a) && this.f29370b == cVar.f29370b && this.f29371c == cVar.f29371c;
        }
        return false;
    }

    public int hashCode() {
        return (((this.f29369a.hashCode() * 31) + Integer.hashCode(this.f29370b)) * 31) + Long.hashCode(this.f29371c);
    }

    public String toString() {
        return "GeneratedVideo(video=" + this.f29369a + ", frameCount=" + this.f29370b + ", duration=" + this.f29371c + ')';
    }
}
