package io.sentry.android.replay;

import java.io.File;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final File f28370a;

    /* renamed from: b  reason: collision with root package name */
    private final int f28371b;

    /* renamed from: c  reason: collision with root package name */
    private final long f28372c;

    public c(File video, int i10, long j10) {
        Intrinsics.checkNotNullParameter(video, "video");
        this.f28370a = video;
        this.f28371b = i10;
        this.f28372c = j10;
    }

    public final File a() {
        return this.f28370a;
    }

    public final int b() {
        return this.f28371b;
    }

    public final long c() {
        return this.f28372c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof c) {
            c cVar = (c) obj;
            return Intrinsics.areEqual(this.f28370a, cVar.f28370a) && this.f28371b == cVar.f28371b && this.f28372c == cVar.f28372c;
        }
        return false;
    }

    public int hashCode() {
        return (((this.f28370a.hashCode() * 31) + Integer.hashCode(this.f28371b)) * 31) + Long.hashCode(this.f28372c);
    }

    public String toString() {
        return "GeneratedVideo(video=" + this.f28370a + ", frameCount=" + this.f28371b + ", duration=" + this.f28372c + ')';
    }
}
