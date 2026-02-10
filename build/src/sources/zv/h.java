package zv;

import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class h {

    /* renamed from: a  reason: collision with root package name */
    private final String f56716a;

    /* renamed from: b  reason: collision with root package name */
    private final String f56717b;

    /* renamed from: c  reason: collision with root package name */
    private final List f56718c;

    public h(String text, String regexPattern, List regexOptions) {
        Intrinsics.checkNotNullParameter(text, "text");
        Intrinsics.checkNotNullParameter(regexPattern, "regexPattern");
        Intrinsics.checkNotNullParameter(regexOptions, "regexOptions");
        this.f56716a = text;
        this.f56717b = regexPattern;
        this.f56718c = regexOptions;
    }

    public final List a() {
        return this.f56718c;
    }

    public final String b() {
        return this.f56717b;
    }

    public final String c() {
        return this.f56716a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof h)) {
            return false;
        }
        h hVar = (h) obj;
        if (Intrinsics.areEqual(this.f56716a, hVar.f56716a) && Intrinsics.areEqual(this.f56717b, hVar.f56717b) && Intrinsics.areEqual(this.f56718c, hVar.f56718c)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((this.f56716a.hashCode() * 31) + this.f56717b.hashCode()) * 31) + this.f56718c.hashCode();
    }

    public String toString() {
        String str = this.f56716a;
        String str2 = this.f56717b;
        List list = this.f56718c;
        return "MatchArguments(text=" + str + ", regexPattern=" + str2 + ", regexOptions=" + list + ")";
    }
}
