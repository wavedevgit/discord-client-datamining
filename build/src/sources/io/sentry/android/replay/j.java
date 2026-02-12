package io.sentry.android.replay;

import java.io.File;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j {

    /* renamed from: a  reason: collision with root package name */
    private final File f28879a;

    /* renamed from: b  reason: collision with root package name */
    private final long f28880b;

    /* renamed from: c  reason: collision with root package name */
    private final String f28881c;

    public j(File screenshot, long j10, String str) {
        Intrinsics.checkNotNullParameter(screenshot, "screenshot");
        this.f28879a = screenshot;
        this.f28880b = j10;
        this.f28881c = str;
    }

    public final String a() {
        return this.f28881c;
    }

    public final File b() {
        return this.f28879a;
    }

    public final long c() {
        return this.f28880b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof j) {
            j jVar = (j) obj;
            return Intrinsics.areEqual(this.f28879a, jVar.f28879a) && this.f28880b == jVar.f28880b && Intrinsics.areEqual(this.f28881c, jVar.f28881c);
        }
        return false;
    }

    public int hashCode() {
        int hashCode = ((this.f28879a.hashCode() * 31) + Long.hashCode(this.f28880b)) * 31;
        String str = this.f28881c;
        return hashCode + (str == null ? 0 : str.hashCode());
    }

    public String toString() {
        return "ReplayFrame(screenshot=" + this.f28879a + ", timestamp=" + this.f28880b + ", screen=" + this.f28881c + ')';
    }
}
