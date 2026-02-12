package iw;

import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class n {

    /* renamed from: a  reason: collision with root package name */
    private String f30463a;

    /* renamed from: b  reason: collision with root package name */
    private final List f30464b;

    public n(String text, List delimiters) {
        Intrinsics.checkNotNullParameter(text, "text");
        Intrinsics.checkNotNullParameter(delimiters, "delimiters");
        this.f30463a = text;
        this.f30464b = delimiters;
    }

    public final List a() {
        return this.f30464b;
    }

    public final String b() {
        return this.f30463a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof n)) {
            return false;
        }
        n nVar = (n) obj;
        if (Intrinsics.areEqual(this.f30463a, nVar.f30463a) && Intrinsics.areEqual(this.f30464b, nVar.f30464b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f30463a.hashCode() * 31) + this.f30464b.hashCode();
    }

    public String toString() {
        String str = this.f30463a;
        List list = this.f30464b;
        return "SplitArguments(text=" + str + ", delimiters=" + list + ")";
    }
}
