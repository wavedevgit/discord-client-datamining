package io.sentry.android.replay;

import java.io.File;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j {

    /* renamed from: a  reason: collision with root package name */
    private final File f29550a;

    /* renamed from: b  reason: collision with root package name */
    private final long f29551b;

    /* renamed from: c  reason: collision with root package name */
    private final String f29552c;

    public j(File screenshot, long j10, String str) {
        Intrinsics.checkNotNullParameter(screenshot, "screenshot");
        this.f29550a = screenshot;
        this.f29551b = j10;
        this.f29552c = str;
    }

    public final String a() {
        return this.f29552c;
    }

    public final File b() {
        return this.f29550a;
    }

    public final long c() {
        return this.f29551b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof j) {
            j jVar = (j) obj;
            return Intrinsics.areEqual(this.f29550a, jVar.f29550a) && this.f29551b == jVar.f29551b && Intrinsics.areEqual(this.f29552c, jVar.f29552c);
        }
        return false;
    }

    public int hashCode() {
        int hashCode = ((this.f29550a.hashCode() * 31) + Long.hashCode(this.f29551b)) * 31;
        String str = this.f29552c;
        return hashCode + (str == null ? 0 : str.hashCode());
    }

    public String toString() {
        return "ReplayFrame(screenshot=" + this.f29550a + ", timestamp=" + this.f29551b + ", screen=" + this.f29552c + ')';
    }
}
