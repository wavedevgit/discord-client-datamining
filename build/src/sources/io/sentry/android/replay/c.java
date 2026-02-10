package io.sentry.android.replay;

import java.io.File;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final File f28697a;

    /* renamed from: b  reason: collision with root package name */
    private final int f28698b;

    /* renamed from: c  reason: collision with root package name */
    private final long f28699c;

    public c(File video, int i10, long j10) {
        Intrinsics.checkNotNullParameter(video, "video");
        this.f28697a = video;
        this.f28698b = i10;
        this.f28699c = j10;
    }

    public final File a() {
        return this.f28697a;
    }

    public final int b() {
        return this.f28698b;
    }

    public final long c() {
        return this.f28699c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof c) {
            c cVar = (c) obj;
            return Intrinsics.areEqual(this.f28697a, cVar.f28697a) && this.f28698b == cVar.f28698b && this.f28699c == cVar.f28699c;
        }
        return false;
    }

    public int hashCode() {
        return (((this.f28697a.hashCode() * 31) + Integer.hashCode(this.f28698b)) * 31) + Long.hashCode(this.f28699c);
    }

    public String toString() {
        return "GeneratedVideo(video=" + this.f28697a + ", frameCount=" + this.f28698b + ", duration=" + this.f28699c + ')';
    }
}
