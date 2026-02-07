package yv;

import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class h {

    /* renamed from: a  reason: collision with root package name */
    private final String f55691a;

    /* renamed from: b  reason: collision with root package name */
    private final String f55692b;

    /* renamed from: c  reason: collision with root package name */
    private final List f55693c;

    public h(String text, String regexPattern, List regexOptions) {
        Intrinsics.checkNotNullParameter(text, "text");
        Intrinsics.checkNotNullParameter(regexPattern, "regexPattern");
        Intrinsics.checkNotNullParameter(regexOptions, "regexOptions");
        this.f55691a = text;
        this.f55692b = regexPattern;
        this.f55693c = regexOptions;
    }

    public final List a() {
        return this.f55693c;
    }

    public final String b() {
        return this.f55692b;
    }

    public final String c() {
        return this.f55691a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof h)) {
            return false;
        }
        h hVar = (h) obj;
        if (Intrinsics.areEqual(this.f55691a, hVar.f55691a) && Intrinsics.areEqual(this.f55692b, hVar.f55692b) && Intrinsics.areEqual(this.f55693c, hVar.f55693c)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((this.f55691a.hashCode() * 31) + this.f55692b.hashCode()) * 31) + this.f55693c.hashCode();
    }

    public String toString() {
        String str = this.f55691a;
        String str2 = this.f55692b;
        List list = this.f55693c;
        return "MatchArguments(text=" + str + ", regexPattern=" + str2 + ", regexOptions=" + list + ")";
    }
}
