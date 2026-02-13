package io.sentry.android.replay;

import java.io.File;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j {

    /* renamed from: a  reason: collision with root package name */
    private final File f29447a;

    /* renamed from: b  reason: collision with root package name */
    private final long f29448b;

    /* renamed from: c  reason: collision with root package name */
    private final String f29449c;

    public j(File screenshot, long j10, String str) {
        Intrinsics.checkNotNullParameter(screenshot, "screenshot");
        this.f29447a = screenshot;
        this.f29448b = j10;
        this.f29449c = str;
    }

    public final String a() {
        return this.f29449c;
    }

    public final File b() {
        return this.f29447a;
    }

    public final long c() {
        return this.f29448b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof j) {
            j jVar = (j) obj;
            return Intrinsics.areEqual(this.f29447a, jVar.f29447a) && this.f29448b == jVar.f29448b && Intrinsics.areEqual(this.f29449c, jVar.f29449c);
        }
        return false;
    }

    public int hashCode() {
        int hashCode = ((this.f29447a.hashCode() * 31) + Long.hashCode(this.f29448b)) * 31;
        String str = this.f29449c;
        return hashCode + (str == null ? 0 : str.hashCode());
    }

    public String toString() {
        return "ReplayFrame(screenshot=" + this.f29447a + ", timestamp=" + this.f29448b + ", screen=" + this.f29449c + ')';
    }
}
