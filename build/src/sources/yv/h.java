package yv;

import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class h {

    /* renamed from: a  reason: collision with root package name */
    private final String f55643a;

    /* renamed from: b  reason: collision with root package name */
    private final String f55644b;

    /* renamed from: c  reason: collision with root package name */
    private final List f55645c;

    public h(String text, String regexPattern, List regexOptions) {
        Intrinsics.checkNotNullParameter(text, "text");
        Intrinsics.checkNotNullParameter(regexPattern, "regexPattern");
        Intrinsics.checkNotNullParameter(regexOptions, "regexOptions");
        this.f55643a = text;
        this.f55644b = regexPattern;
        this.f55645c = regexOptions;
    }

    public final List a() {
        return this.f55645c;
    }

    public final String b() {
        return this.f55644b;
    }

    public final String c() {
        return this.f55643a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof h)) {
            return false;
        }
        h hVar = (h) obj;
        if (Intrinsics.areEqual(this.f55643a, hVar.f55643a) && Intrinsics.areEqual(this.f55644b, hVar.f55644b) && Intrinsics.areEqual(this.f55645c, hVar.f55645c)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((this.f55643a.hashCode() * 31) + this.f55644b.hashCode()) * 31) + this.f55645c.hashCode();
    }

    public String toString() {
        String str = this.f55643a;
        String str2 = this.f55644b;
        List list = this.f55645c;
        return "MatchArguments(text=" + str + ", regexPattern=" + str2 + ", regexOptions=" + list + ")";
    }
}
