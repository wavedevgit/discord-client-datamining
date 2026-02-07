package io.sentry.android.replay;

import java.io.File;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j {

    /* renamed from: a  reason: collision with root package name */
    private final File f27743a;

    /* renamed from: b  reason: collision with root package name */
    private final long f27744b;

    /* renamed from: c  reason: collision with root package name */
    private final String f27745c;

    public j(File screenshot, long j10, String str) {
        Intrinsics.checkNotNullParameter(screenshot, "screenshot");
        this.f27743a = screenshot;
        this.f27744b = j10;
        this.f27745c = str;
    }

    public final String a() {
        return this.f27745c;
    }

    public final File b() {
        return this.f27743a;
    }

    public final long c() {
        return this.f27744b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof j) {
            j jVar = (j) obj;
            return Intrinsics.areEqual(this.f27743a, jVar.f27743a) && this.f27744b == jVar.f27744b && Intrinsics.areEqual(this.f27745c, jVar.f27745c);
        }
        return false;
    }

    public int hashCode() {
        int hashCode = ((this.f27743a.hashCode() * 31) + Long.hashCode(this.f27744b)) * 31;
        String str = this.f27745c;
        return hashCode + (str == null ? 0 : str.hashCode());
    }

    public String toString() {
        return "ReplayFrame(screenshot=" + this.f27743a + ", timestamp=" + this.f27744b + ", screen=" + this.f27745c + ')';
    }
}
