package io.sentry.android.replay;

import java.io.File;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j {

    /* renamed from: a  reason: collision with root package name */
    private final File f27943a;

    /* renamed from: b  reason: collision with root package name */
    private final long f27944b;

    /* renamed from: c  reason: collision with root package name */
    private final String f27945c;

    public j(File screenshot, long j10, String str) {
        Intrinsics.checkNotNullParameter(screenshot, "screenshot");
        this.f27943a = screenshot;
        this.f27944b = j10;
        this.f27945c = str;
    }

    public final String a() {
        return this.f27945c;
    }

    public final File b() {
        return this.f27943a;
    }

    public final long c() {
        return this.f27944b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof j) {
            j jVar = (j) obj;
            return Intrinsics.areEqual(this.f27943a, jVar.f27943a) && this.f27944b == jVar.f27944b && Intrinsics.areEqual(this.f27945c, jVar.f27945c);
        }
        return false;
    }

    public int hashCode() {
        int hashCode = ((this.f27943a.hashCode() * 31) + Long.hashCode(this.f27944b)) * 31;
        String str = this.f27945c;
        return hashCode + (str == null ? 0 : str.hashCode());
    }

    public String toString() {
        return "ReplayFrame(screenshot=" + this.f27943a + ", timestamp=" + this.f27944b + ", screen=" + this.f27945c + ')';
    }
}
