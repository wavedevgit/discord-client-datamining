package io.sentry.android.replay;

import java.io.File;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final File f28951a;

    /* renamed from: b  reason: collision with root package name */
    private final int f28952b;

    /* renamed from: c  reason: collision with root package name */
    private final long f28953c;

    public c(File video, int i10, long j10) {
        Intrinsics.checkNotNullParameter(video, "video");
        this.f28951a = video;
        this.f28952b = i10;
        this.f28953c = j10;
    }

    public final File a() {
        return this.f28951a;
    }

    public final int b() {
        return this.f28952b;
    }

    public final long c() {
        return this.f28953c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof c) {
            c cVar = (c) obj;
            return Intrinsics.areEqual(this.f28951a, cVar.f28951a) && this.f28952b == cVar.f28952b && this.f28953c == cVar.f28953c;
        }
        return false;
    }

    public int hashCode() {
        return (((this.f28951a.hashCode() * 31) + Integer.hashCode(this.f28952b)) * 31) + Long.hashCode(this.f28953c);
    }

    public String toString() {
        return "GeneratedVideo(video=" + this.f28951a + ", frameCount=" + this.f28952b + ", duration=" + this.f28953c + ')';
    }
}
