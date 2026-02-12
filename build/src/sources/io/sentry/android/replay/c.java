package io.sentry.android.replay;

import java.io.File;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final File f28698a;

    /* renamed from: b  reason: collision with root package name */
    private final int f28699b;

    /* renamed from: c  reason: collision with root package name */
    private final long f28700c;

    public c(File video, int i10, long j10) {
        Intrinsics.checkNotNullParameter(video, "video");
        this.f28698a = video;
        this.f28699b = i10;
        this.f28700c = j10;
    }

    public final File a() {
        return this.f28698a;
    }

    public final int b() {
        return this.f28699b;
    }

    public final long c() {
        return this.f28700c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof c) {
            c cVar = (c) obj;
            return Intrinsics.areEqual(this.f28698a, cVar.f28698a) && this.f28699b == cVar.f28699b && this.f28700c == cVar.f28700c;
        }
        return false;
    }

    public int hashCode() {
        return (((this.f28698a.hashCode() * 31) + Integer.hashCode(this.f28699b)) * 31) + Long.hashCode(this.f28700c);
    }

    public String toString() {
        return "GeneratedVideo(video=" + this.f28698a + ", frameCount=" + this.f28699b + ", duration=" + this.f28700c + ')';
    }
}
