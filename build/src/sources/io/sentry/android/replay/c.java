package io.sentry.android.replay;

import java.io.File;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final File f29312a;

    /* renamed from: b  reason: collision with root package name */
    private final int f29313b;

    /* renamed from: c  reason: collision with root package name */
    private final long f29314c;

    public c(File video, int i10, long j10) {
        Intrinsics.checkNotNullParameter(video, "video");
        this.f29312a = video;
        this.f29313b = i10;
        this.f29314c = j10;
    }

    public final File a() {
        return this.f29312a;
    }

    public final int b() {
        return this.f29313b;
    }

    public final long c() {
        return this.f29314c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof c) {
            c cVar = (c) obj;
            return Intrinsics.areEqual(this.f29312a, cVar.f29312a) && this.f29313b == cVar.f29313b && this.f29314c == cVar.f29314c;
        }
        return false;
    }

    public int hashCode() {
        return (((this.f29312a.hashCode() * 31) + Integer.hashCode(this.f29313b)) * 31) + Long.hashCode(this.f29314c);
    }

    public String toString() {
        return "GeneratedVideo(video=" + this.f29312a + ", frameCount=" + this.f29313b + ", duration=" + this.f29314c + ')';
    }
}
