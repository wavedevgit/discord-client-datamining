package mv;

import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class n {

    /* renamed from: a  reason: collision with root package name */
    private String f39462a;

    /* renamed from: b  reason: collision with root package name */
    private final List f39463b;

    public n(String text, List delimiters) {
        Intrinsics.checkNotNullParameter(text, "text");
        Intrinsics.checkNotNullParameter(delimiters, "delimiters");
        this.f39462a = text;
        this.f39463b = delimiters;
    }

    public final List a() {
        return this.f39463b;
    }

    public final String b() {
        return this.f39462a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof n)) {
            return false;
        }
        n nVar = (n) obj;
        if (Intrinsics.areEqual(this.f39462a, nVar.f39462a) && Intrinsics.areEqual(this.f39463b, nVar.f39463b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f39462a.hashCode() * 31) + this.f39463b.hashCode();
    }

    public String toString() {
        String str = this.f39462a;
        List list = this.f39463b;
        return "SplitArguments(text=" + str + ", delimiters=" + list + ")";
    }
}
