package io.sentry.android.replay;

import java.io.File;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final File f27562a;

    /* renamed from: b  reason: collision with root package name */
    private final int f27563b;

    /* renamed from: c  reason: collision with root package name */
    private final long f27564c;

    public c(File video, int i10, long j10) {
        Intrinsics.checkNotNullParameter(video, "video");
        this.f27562a = video;
        this.f27563b = i10;
        this.f27564c = j10;
    }

    public final File a() {
        return this.f27562a;
    }

    public final int b() {
        return this.f27563b;
    }

    public final long c() {
        return this.f27564c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof c) {
            c cVar = (c) obj;
            return Intrinsics.areEqual(this.f27562a, cVar.f27562a) && this.f27563b == cVar.f27563b && this.f27564c == cVar.f27564c;
        }
        return false;
    }

    public int hashCode() {
        return (((this.f27562a.hashCode() * 31) + Integer.hashCode(this.f27563b)) * 31) + Long.hashCode(this.f27564c);
    }

    public String toString() {
        return "GeneratedVideo(video=" + this.f27562a + ", frameCount=" + this.f27563b + ", duration=" + this.f27564c + ')';
    }
}
