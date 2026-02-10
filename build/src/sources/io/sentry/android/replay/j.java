package io.sentry.android.replay;

import java.io.File;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j {

    /* renamed from: a  reason: collision with root package name */
    private final File f28878a;

    /* renamed from: b  reason: collision with root package name */
    private final long f28879b;

    /* renamed from: c  reason: collision with root package name */
    private final String f28880c;

    public j(File screenshot, long j10, String str) {
        Intrinsics.checkNotNullParameter(screenshot, "screenshot");
        this.f28878a = screenshot;
        this.f28879b = j10;
        this.f28880c = str;
    }

    public final String a() {
        return this.f28880c;
    }

    public final File b() {
        return this.f28878a;
    }

    public final long c() {
        return this.f28879b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof j) {
            j jVar = (j) obj;
            return Intrinsics.areEqual(this.f28878a, jVar.f28878a) && this.f28879b == jVar.f28879b && Intrinsics.areEqual(this.f28880c, jVar.f28880c);
        }
        return false;
    }

    public int hashCode() {
        int hashCode = ((this.f28878a.hashCode() * 31) + Long.hashCode(this.f28879b)) * 31;
        String str = this.f28880c;
        return hashCode + (str == null ? 0 : str.hashCode());
    }

    public String toString() {
        return "ReplayFrame(screenshot=" + this.f28878a + ", timestamp=" + this.f28879b + ", screen=" + this.f28880c + ')';
    }
}
