package iw;

import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class h {

    /* renamed from: a  reason: collision with root package name */
    private final String f31022a;

    /* renamed from: b  reason: collision with root package name */
    private final String f31023b;

    /* renamed from: c  reason: collision with root package name */
    private final List f31024c;

    public h(String text, String regexPattern, List regexOptions) {
        Intrinsics.checkNotNullParameter(text, "text");
        Intrinsics.checkNotNullParameter(regexPattern, "regexPattern");
        Intrinsics.checkNotNullParameter(regexOptions, "regexOptions");
        this.f31022a = text;
        this.f31023b = regexPattern;
        this.f31024c = regexOptions;
    }

    public final List a() {
        return this.f31024c;
    }

    public final String b() {
        return this.f31023b;
    }

    public final String c() {
        return this.f31022a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof h)) {
            return false;
        }
        h hVar = (h) obj;
        if (Intrinsics.areEqual(this.f31022a, hVar.f31022a) && Intrinsics.areEqual(this.f31023b, hVar.f31023b) && Intrinsics.areEqual(this.f31024c, hVar.f31024c)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((this.f31022a.hashCode() * 31) + this.f31023b.hashCode()) * 31) + this.f31024c.hashCode();
    }

    public String toString() {
        String str = this.f31022a;
        String str2 = this.f31023b;
        List list = this.f31024c;
        return "MatchArguments(text=" + str + ", regexPattern=" + str2 + ", regexOptions=" + list + ")";
    }
}
