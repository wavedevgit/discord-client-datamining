package io.sentry.android.replay;

import java.io.File;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j {

    /* renamed from: a  reason: collision with root package name */
    private final File f28551a;

    /* renamed from: b  reason: collision with root package name */
    private final long f28552b;

    /* renamed from: c  reason: collision with root package name */
    private final String f28553c;

    public j(File screenshot, long j10, String str) {
        Intrinsics.checkNotNullParameter(screenshot, "screenshot");
        this.f28551a = screenshot;
        this.f28552b = j10;
        this.f28553c = str;
    }

    public final String a() {
        return this.f28553c;
    }

    public final File b() {
        return this.f28551a;
    }

    public final long c() {
        return this.f28552b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof j) {
            j jVar = (j) obj;
            return Intrinsics.areEqual(this.f28551a, jVar.f28551a) && this.f28552b == jVar.f28552b && Intrinsics.areEqual(this.f28553c, jVar.f28553c);
        }
        return false;
    }

    public int hashCode() {
        int hashCode = ((this.f28551a.hashCode() * 31) + Long.hashCode(this.f28552b)) * 31;
        String str = this.f28553c;
        return hashCode + (str == null ? 0 : str.hashCode());
    }

    public String toString() {
        return "ReplayFrame(screenshot=" + this.f28551a + ", timestamp=" + this.f28552b + ", screen=" + this.f28553c + ')';
    }
}
