package mv;

import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class h {

    /* renamed from: a  reason: collision with root package name */
    private final String f39453a;

    /* renamed from: b  reason: collision with root package name */
    private final String f39454b;

    /* renamed from: c  reason: collision with root package name */
    private final List f39455c;

    public h(String text, String regexPattern, List regexOptions) {
        Intrinsics.checkNotNullParameter(text, "text");
        Intrinsics.checkNotNullParameter(regexPattern, "regexPattern");
        Intrinsics.checkNotNullParameter(regexOptions, "regexOptions");
        this.f39453a = text;
        this.f39454b = regexPattern;
        this.f39455c = regexOptions;
    }

    public final List a() {
        return this.f39455c;
    }

    public final String b() {
        return this.f39454b;
    }

    public final String c() {
        return this.f39453a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof h)) {
            return false;
        }
        h hVar = (h) obj;
        if (Intrinsics.areEqual(this.f39453a, hVar.f39453a) && Intrinsics.areEqual(this.f39454b, hVar.f39454b) && Intrinsics.areEqual(this.f39455c, hVar.f39455c)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((this.f39453a.hashCode() * 31) + this.f39454b.hashCode()) * 31) + this.f39455c.hashCode();
    }

    public String toString() {
        String str = this.f39453a;
        String str2 = this.f39454b;
        List list = this.f39455c;
        return "MatchArguments(text=" + str + ", regexPattern=" + str2 + ", regexOptions=" + list + ")";
    }
}
