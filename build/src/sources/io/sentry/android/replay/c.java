package io.sentry.android.replay;

import java.io.File;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final File f27514a;

    /* renamed from: b  reason: collision with root package name */
    private final int f27515b;

    /* renamed from: c  reason: collision with root package name */
    private final long f27516c;

    public c(File video, int i10, long j10) {
        Intrinsics.checkNotNullParameter(video, "video");
        this.f27514a = video;
        this.f27515b = i10;
        this.f27516c = j10;
    }

    public final File a() {
        return this.f27514a;
    }

    public final int b() {
        return this.f27515b;
    }

    public final long c() {
        return this.f27516c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof c) {
            c cVar = (c) obj;
            return Intrinsics.areEqual(this.f27514a, cVar.f27514a) && this.f27515b == cVar.f27515b && this.f27516c == cVar.f27516c;
        }
        return false;
    }

    public int hashCode() {
        return (((this.f27514a.hashCode() * 31) + Integer.hashCode(this.f27515b)) * 31) + Long.hashCode(this.f27516c);
    }

    public String toString() {
        return "GeneratedVideo(video=" + this.f27514a + ", frameCount=" + this.f27515b + ", duration=" + this.f27516c + ')';
    }
}
