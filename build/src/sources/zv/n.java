package zv;

import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class n {

    /* renamed from: a  reason: collision with root package name */
    private String f56725a;

    /* renamed from: b  reason: collision with root package name */
    private final List f56726b;

    public n(String text, List delimiters) {
        Intrinsics.checkNotNullParameter(text, "text");
        Intrinsics.checkNotNullParameter(delimiters, "delimiters");
        this.f56725a = text;
        this.f56726b = delimiters;
    }

    public final List a() {
        return this.f56726b;
    }

    public final String b() {
        return this.f56725a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof n)) {
            return false;
        }
        n nVar = (n) obj;
        if (Intrinsics.areEqual(this.f56725a, nVar.f56725a) && Intrinsics.areEqual(this.f56726b, nVar.f56726b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f56725a.hashCode() * 31) + this.f56726b.hashCode();
    }

    public String toString() {
        String str = this.f56725a;
        List list = this.f56726b;
        return "SplitArguments(text=" + str + ", delimiters=" + list + ")";
    }
}
