package iw;

import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class h {

    /* renamed from: a  reason: collision with root package name */
    private final String f30453a;

    /* renamed from: b  reason: collision with root package name */
    private final String f30454b;

    /* renamed from: c  reason: collision with root package name */
    private final List f30455c;

    public h(String text, String regexPattern, List regexOptions) {
        Intrinsics.checkNotNullParameter(text, "text");
        Intrinsics.checkNotNullParameter(regexPattern, "regexPattern");
        Intrinsics.checkNotNullParameter(regexOptions, "regexOptions");
        this.f30453a = text;
        this.f30454b = regexPattern;
        this.f30455c = regexOptions;
    }

    public final List a() {
        return this.f30455c;
    }

    public final String b() {
        return this.f30454b;
    }

    public final String c() {
        return this.f30453a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof h)) {
            return false;
        }
        h hVar = (h) obj;
        if (Intrinsics.areEqual(this.f30453a, hVar.f30453a) && Intrinsics.areEqual(this.f30454b, hVar.f30454b) && Intrinsics.areEqual(this.f30455c, hVar.f30455c)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((this.f30453a.hashCode() * 31) + this.f30454b.hashCode()) * 31) + this.f30455c.hashCode();
    }

    public String toString() {
        String str = this.f30453a;
        String str2 = this.f30454b;
        List list = this.f30455c;
        return "MatchArguments(text=" + str + ", regexPattern=" + str2 + ", regexOptions=" + list + ")";
    }
}
