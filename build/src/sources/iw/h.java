package iw;

import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class h {

    /* renamed from: a  reason: collision with root package name */
    private final String f30454a;

    /* renamed from: b  reason: collision with root package name */
    private final String f30455b;

    /* renamed from: c  reason: collision with root package name */
    private final List f30456c;

    public h(String text, String regexPattern, List regexOptions) {
        Intrinsics.checkNotNullParameter(text, "text");
        Intrinsics.checkNotNullParameter(regexPattern, "regexPattern");
        Intrinsics.checkNotNullParameter(regexOptions, "regexOptions");
        this.f30454a = text;
        this.f30455b = regexPattern;
        this.f30456c = regexOptions;
    }

    public final List a() {
        return this.f30456c;
    }

    public final String b() {
        return this.f30455b;
    }

    public final String c() {
        return this.f30454a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof h)) {
            return false;
        }
        h hVar = (h) obj;
        if (Intrinsics.areEqual(this.f30454a, hVar.f30454a) && Intrinsics.areEqual(this.f30455b, hVar.f30455b) && Intrinsics.areEqual(this.f30456c, hVar.f30456c)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((this.f30454a.hashCode() * 31) + this.f30455b.hashCode()) * 31) + this.f30456c.hashCode();
    }

    public String toString() {
        String str = this.f30454a;
        String str2 = this.f30455b;
        List list = this.f30456c;
        return "MatchArguments(text=" + str + ", regexPattern=" + str2 + ", regexOptions=" + list + ")";
    }
}
