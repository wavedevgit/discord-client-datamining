package yv;

import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class n {

    /* renamed from: a  reason: collision with root package name */
    private String f55700a;

    /* renamed from: b  reason: collision with root package name */
    private final List f55701b;

    public n(String text, List delimiters) {
        Intrinsics.checkNotNullParameter(text, "text");
        Intrinsics.checkNotNullParameter(delimiters, "delimiters");
        this.f55700a = text;
        this.f55701b = delimiters;
    }

    public final List a() {
        return this.f55701b;
    }

    public final String b() {
        return this.f55700a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof n)) {
            return false;
        }
        n nVar = (n) obj;
        if (Intrinsics.areEqual(this.f55700a, nVar.f55700a) && Intrinsics.areEqual(this.f55701b, nVar.f55701b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f55700a.hashCode() * 31) + this.f55701b.hashCode();
    }

    public String toString() {
        String str = this.f55700a;
        List list = this.f55701b;
        return "SplitArguments(text=" + str + ", delimiters=" + list + ")";
    }
}
