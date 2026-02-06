package io.sentry.android.replay;

import java.io.File;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j {

    /* renamed from: a  reason: collision with root package name */
    private final File f27695a;

    /* renamed from: b  reason: collision with root package name */
    private final long f27696b;

    /* renamed from: c  reason: collision with root package name */
    private final String f27697c;

    public j(File screenshot, long j10, String str) {
        Intrinsics.checkNotNullParameter(screenshot, "screenshot");
        this.f27695a = screenshot;
        this.f27696b = j10;
        this.f27697c = str;
    }

    public final String a() {
        return this.f27697c;
    }

    public final File b() {
        return this.f27695a;
    }

    public final long c() {
        return this.f27696b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof j) {
            j jVar = (j) obj;
            return Intrinsics.areEqual(this.f27695a, jVar.f27695a) && this.f27696b == jVar.f27696b && Intrinsics.areEqual(this.f27697c, jVar.f27697c);
        }
        return false;
    }

    public int hashCode() {
        int hashCode = ((this.f27695a.hashCode() * 31) + Long.hashCode(this.f27696b)) * 31;
        String str = this.f27697c;
        return hashCode + (str == null ? 0 : str.hashCode());
    }

    public String toString() {
        return "ReplayFrame(screenshot=" + this.f27695a + ", timestamp=" + this.f27696b + ", screen=" + this.f27697c + ')';
    }
}
