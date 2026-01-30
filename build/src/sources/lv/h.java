package lv;

import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class h {

    /* renamed from: a  reason: collision with root package name */
    private final String f37753a;

    /* renamed from: b  reason: collision with root package name */
    private final String f37754b;

    /* renamed from: c  reason: collision with root package name */
    private final List f37755c;

    public h(String text, String regexPattern, List regexOptions) {
        Intrinsics.checkNotNullParameter(text, "text");
        Intrinsics.checkNotNullParameter(regexPattern, "regexPattern");
        Intrinsics.checkNotNullParameter(regexOptions, "regexOptions");
        this.f37753a = text;
        this.f37754b = regexPattern;
        this.f37755c = regexOptions;
    }

    public final List a() {
        return this.f37755c;
    }

    public final String b() {
        return this.f37754b;
    }

    public final String c() {
        return this.f37753a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof h)) {
            return false;
        }
        h hVar = (h) obj;
        if (Intrinsics.areEqual(this.f37753a, hVar.f37753a) && Intrinsics.areEqual(this.f37754b, hVar.f37754b) && Intrinsics.areEqual(this.f37755c, hVar.f37755c)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((this.f37753a.hashCode() * 31) + this.f37754b.hashCode()) * 31) + this.f37755c.hashCode();
    }

    public String toString() {
        String str = this.f37753a;
        String str2 = this.f37754b;
        List list = this.f37755c;
        return "MatchArguments(text=" + str + ", regexPattern=" + str2 + ", regexOptions=" + list + ")";
    }
}
