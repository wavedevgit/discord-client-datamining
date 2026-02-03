package io.sentry.android.replay;

import java.io.File;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j {

    /* renamed from: a  reason: collision with root package name */
    private final File f29493a;

    /* renamed from: b  reason: collision with root package name */
    private final long f29494b;

    /* renamed from: c  reason: collision with root package name */
    private final String f29495c;

    public j(File screenshot, long j10, String str) {
        Intrinsics.checkNotNullParameter(screenshot, "screenshot");
        this.f29493a = screenshot;
        this.f29494b = j10;
        this.f29495c = str;
    }

    public final String a() {
        return this.f29495c;
    }

    public final File b() {
        return this.f29493a;
    }

    public final long c() {
        return this.f29494b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof j) {
            j jVar = (j) obj;
            return Intrinsics.areEqual(this.f29493a, jVar.f29493a) && this.f29494b == jVar.f29494b && Intrinsics.areEqual(this.f29495c, jVar.f29495c);
        }
        return false;
    }

    public int hashCode() {
        int hashCode = ((this.f29493a.hashCode() * 31) + Long.hashCode(this.f29494b)) * 31;
        String str = this.f29495c;
        return hashCode + (str == null ? 0 : str.hashCode());
    }

    public String toString() {
        return "ReplayFrame(screenshot=" + this.f29493a + ", timestamp=" + this.f29494b + ", screen=" + this.f29495c + ')';
    }
}
