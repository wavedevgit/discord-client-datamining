package lv;

import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class n {

    /* renamed from: a  reason: collision with root package name */
    private String f37762a;

    /* renamed from: b  reason: collision with root package name */
    private final List f37763b;

    public n(String text, List delimiters) {
        Intrinsics.checkNotNullParameter(text, "text");
        Intrinsics.checkNotNullParameter(delimiters, "delimiters");
        this.f37762a = text;
        this.f37763b = delimiters;
    }

    public final List a() {
        return this.f37763b;
    }

    public final String b() {
        return this.f37762a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof n)) {
            return false;
        }
        n nVar = (n) obj;
        if (Intrinsics.areEqual(this.f37762a, nVar.f37762a) && Intrinsics.areEqual(this.f37763b, nVar.f37763b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f37762a.hashCode() * 31) + this.f37763b.hashCode();
    }

    public String toString() {
        String str = this.f37762a;
        List list = this.f37763b;
        return "SplitArguments(text=" + str + ", delimiters=" + list + ")";
    }
}
