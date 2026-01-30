package io.sentry.android.replay;

import java.io.File;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j {

    /* renamed from: a  reason: collision with root package name */
    private final File f29566a;

    /* renamed from: b  reason: collision with root package name */
    private final long f29567b;

    /* renamed from: c  reason: collision with root package name */
    private final String f29568c;

    public j(File screenshot, long j10, String str) {
        Intrinsics.checkNotNullParameter(screenshot, "screenshot");
        this.f29566a = screenshot;
        this.f29567b = j10;
        this.f29568c = str;
    }

    public final String a() {
        return this.f29568c;
    }

    public final File b() {
        return this.f29566a;
    }

    public final long c() {
        return this.f29567b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof j) {
            j jVar = (j) obj;
            return Intrinsics.areEqual(this.f29566a, jVar.f29566a) && this.f29567b == jVar.f29567b && Intrinsics.areEqual(this.f29568c, jVar.f29568c);
        }
        return false;
    }

    public int hashCode() {
        int hashCode = ((this.f29566a.hashCode() * 31) + Long.hashCode(this.f29567b)) * 31;
        String str = this.f29568c;
        return hashCode + (str == null ? 0 : str.hashCode());
    }

    public String toString() {
        return "ReplayFrame(screenshot=" + this.f29566a + ", timestamp=" + this.f29567b + ", screen=" + this.f29568c + ')';
    }
}
