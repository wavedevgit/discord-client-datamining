package rv;

import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class h {

    /* renamed from: a  reason: collision with root package name */
    private final String f49257a;

    /* renamed from: b  reason: collision with root package name */
    private final String f49258b;

    /* renamed from: c  reason: collision with root package name */
    private final List f49259c;

    public h(String text, String regexPattern, List regexOptions) {
        Intrinsics.checkNotNullParameter(text, "text");
        Intrinsics.checkNotNullParameter(regexPattern, "regexPattern");
        Intrinsics.checkNotNullParameter(regexOptions, "regexOptions");
        this.f49257a = text;
        this.f49258b = regexPattern;
        this.f49259c = regexOptions;
    }

    public final List a() {
        return this.f49259c;
    }

    public final String b() {
        return this.f49258b;
    }

    public final String c() {
        return this.f49257a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof h)) {
            return false;
        }
        h hVar = (h) obj;
        if (Intrinsics.areEqual(this.f49257a, hVar.f49257a) && Intrinsics.areEqual(this.f49258b, hVar.f49258b) && Intrinsics.areEqual(this.f49259c, hVar.f49259c)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((this.f49257a.hashCode() * 31) + this.f49258b.hashCode()) * 31) + this.f49259c.hashCode();
    }

    public String toString() {
        String str = this.f49257a;
        String str2 = this.f49258b;
        List list = this.f49259c;
        return "MatchArguments(text=" + str + ", regexPattern=" + str2 + ", regexOptions=" + list + ")";
    }
}
