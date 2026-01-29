package lv;

import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class h {

    /* renamed from: a  reason: collision with root package name */
    private final String f37737a;

    /* renamed from: b  reason: collision with root package name */
    private final String f37738b;

    /* renamed from: c  reason: collision with root package name */
    private final List f37739c;

    public h(String text, String regexPattern, List regexOptions) {
        Intrinsics.checkNotNullParameter(text, "text");
        Intrinsics.checkNotNullParameter(regexPattern, "regexPattern");
        Intrinsics.checkNotNullParameter(regexOptions, "regexOptions");
        this.f37737a = text;
        this.f37738b = regexPattern;
        this.f37739c = regexOptions;
    }

    public final List a() {
        return this.f37739c;
    }

    public final String b() {
        return this.f37738b;
    }

    public final String c() {
        return this.f37737a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof h)) {
            return false;
        }
        h hVar = (h) obj;
        if (Intrinsics.areEqual(this.f37737a, hVar.f37737a) && Intrinsics.areEqual(this.f37738b, hVar.f37738b) && Intrinsics.areEqual(this.f37739c, hVar.f37739c)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((this.f37737a.hashCode() * 31) + this.f37738b.hashCode()) * 31) + this.f37739c.hashCode();
    }

    public String toString() {
        String str = this.f37737a;
        String str2 = this.f37738b;
        List list = this.f37739c;
        return "MatchArguments(text=" + str + ", regexPattern=" + str2 + ", regexOptions=" + list + ")";
    }
}
