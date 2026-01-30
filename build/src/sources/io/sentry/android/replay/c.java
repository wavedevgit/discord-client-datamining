package io.sentry.android.replay;

import java.io.File;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final File f29385a;

    /* renamed from: b  reason: collision with root package name */
    private final int f29386b;

    /* renamed from: c  reason: collision with root package name */
    private final long f29387c;

    public c(File video, int i10, long j10) {
        Intrinsics.checkNotNullParameter(video, "video");
        this.f29385a = video;
        this.f29386b = i10;
        this.f29387c = j10;
    }

    public final File a() {
        return this.f29385a;
    }

    public final int b() {
        return this.f29386b;
    }

    public final long c() {
        return this.f29387c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof c) {
            c cVar = (c) obj;
            return Intrinsics.areEqual(this.f29385a, cVar.f29385a) && this.f29386b == cVar.f29386b && this.f29387c == cVar.f29387c;
        }
        return false;
    }

    public int hashCode() {
        return (((this.f29385a.hashCode() * 31) + Integer.hashCode(this.f29386b)) * 31) + Long.hashCode(this.f29387c);
    }

    public String toString() {
        return "GeneratedVideo(video=" + this.f29385a + ", frameCount=" + this.f29386b + ", duration=" + this.f29387c + ')';
    }
}
