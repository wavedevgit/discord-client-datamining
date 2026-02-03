package io.sentry.android.replay;

import java.io.File;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j {

    /* renamed from: a  reason: collision with root package name */
    private final File f29132a;

    /* renamed from: b  reason: collision with root package name */
    private final long f29133b;

    /* renamed from: c  reason: collision with root package name */
    private final String f29134c;

    public j(File screenshot, long j10, String str) {
        Intrinsics.checkNotNullParameter(screenshot, "screenshot");
        this.f29132a = screenshot;
        this.f29133b = j10;
        this.f29134c = str;
    }

    public final String a() {
        return this.f29134c;
    }

    public final File b() {
        return this.f29132a;
    }

    public final long c() {
        return this.f29133b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof j) {
            j jVar = (j) obj;
            return Intrinsics.areEqual(this.f29132a, jVar.f29132a) && this.f29133b == jVar.f29133b && Intrinsics.areEqual(this.f29134c, jVar.f29134c);
        }
        return false;
    }

    public int hashCode() {
        int hashCode = ((this.f29132a.hashCode() * 31) + Long.hashCode(this.f29133b)) * 31;
        String str = this.f29134c;
        return hashCode + (str == null ? 0 : str.hashCode());
    }

    public String toString() {
        return "ReplayFrame(screenshot=" + this.f29132a + ", timestamp=" + this.f29133b + ", screen=" + this.f29134c + ')';
    }
}
