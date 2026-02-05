package rv;

import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class n {

    /* renamed from: a  reason: collision with root package name */
    private String f49266a;

    /* renamed from: b  reason: collision with root package name */
    private final List f49267b;

    public n(String text, List delimiters) {
        Intrinsics.checkNotNullParameter(text, "text");
        Intrinsics.checkNotNullParameter(delimiters, "delimiters");
        this.f49266a = text;
        this.f49267b = delimiters;
    }

    public final List a() {
        return this.f49267b;
    }

    public final String b() {
        return this.f49266a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof n)) {
            return false;
        }
        n nVar = (n) obj;
        if (Intrinsics.areEqual(this.f49266a, nVar.f49266a) && Intrinsics.areEqual(this.f49267b, nVar.f49267b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f49266a.hashCode() * 31) + this.f49267b.hashCode();
    }

    public String toString() {
        String str = this.f49266a;
        List list = this.f49267b;
        return "SplitArguments(text=" + str + ", delimiters=" + list + ")";
    }
}
