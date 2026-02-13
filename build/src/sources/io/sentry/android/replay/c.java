package io.sentry.android.replay;

import java.io.File;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final File f29266a;

    /* renamed from: b  reason: collision with root package name */
    private final int f29267b;

    /* renamed from: c  reason: collision with root package name */
    private final long f29268c;

    public c(File video, int i10, long j10) {
        Intrinsics.checkNotNullParameter(video, "video");
        this.f29266a = video;
        this.f29267b = i10;
        this.f29268c = j10;
    }

    public final File a() {
        return this.f29266a;
    }

    public final int b() {
        return this.f29267b;
    }

    public final long c() {
        return this.f29268c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof c) {
            c cVar = (c) obj;
            return Intrinsics.areEqual(this.f29266a, cVar.f29266a) && this.f29267b == cVar.f29267b && this.f29268c == cVar.f29268c;
        }
        return false;
    }

    public int hashCode() {
        return (((this.f29266a.hashCode() * 31) + Integer.hashCode(this.f29267b)) * 31) + Long.hashCode(this.f29268c);
    }

    public String toString() {
        return "GeneratedVideo(video=" + this.f29266a + ", frameCount=" + this.f29267b + ", duration=" + this.f29268c + ')';
    }
}
