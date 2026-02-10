package io.sentry.android.replay;

import java.io.File;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final File f27762a;

    /* renamed from: b  reason: collision with root package name */
    private final int f27763b;

    /* renamed from: c  reason: collision with root package name */
    private final long f27764c;

    public c(File video, int i10, long j10) {
        Intrinsics.checkNotNullParameter(video, "video");
        this.f27762a = video;
        this.f27763b = i10;
        this.f27764c = j10;
    }

    public final File a() {
        return this.f27762a;
    }

    public final int b() {
        return this.f27763b;
    }

    public final long c() {
        return this.f27764c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof c) {
            c cVar = (c) obj;
            return Intrinsics.areEqual(this.f27762a, cVar.f27762a) && this.f27763b == cVar.f27763b && this.f27764c == cVar.f27764c;
        }
        return false;
    }

    public int hashCode() {
        return (((this.f27762a.hashCode() * 31) + Integer.hashCode(this.f27763b)) * 31) + Long.hashCode(this.f27764c);
    }

    public String toString() {
        return "GeneratedVideo(video=" + this.f27762a + ", frameCount=" + this.f27763b + ", duration=" + this.f27764c + ')';
    }
}
