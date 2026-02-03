package ov;

import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class h {

    /* renamed from: a  reason: collision with root package name */
    private final String f44808a;

    /* renamed from: b  reason: collision with root package name */
    private final String f44809b;

    /* renamed from: c  reason: collision with root package name */
    private final List f44810c;

    public h(String text, String regexPattern, List regexOptions) {
        Intrinsics.checkNotNullParameter(text, "text");
        Intrinsics.checkNotNullParameter(regexPattern, "regexPattern");
        Intrinsics.checkNotNullParameter(regexOptions, "regexOptions");
        this.f44808a = text;
        this.f44809b = regexPattern;
        this.f44810c = regexOptions;
    }

    public final List a() {
        return this.f44810c;
    }

    public final String b() {
        return this.f44809b;
    }

    public final String c() {
        return this.f44808a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof h)) {
            return false;
        }
        h hVar = (h) obj;
        if (Intrinsics.areEqual(this.f44808a, hVar.f44808a) && Intrinsics.areEqual(this.f44809b, hVar.f44809b) && Intrinsics.areEqual(this.f44810c, hVar.f44810c)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((this.f44808a.hashCode() * 31) + this.f44809b.hashCode()) * 31) + this.f44810c.hashCode();
    }

    public String toString() {
        String str = this.f44808a;
        String str2 = this.f44809b;
        List list = this.f44810c;
        return "MatchArguments(text=" + str + ", regexPattern=" + str2 + ", regexOptions=" + list + ")";
    }
}
