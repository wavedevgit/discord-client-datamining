package iw;

import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class n {

    /* renamed from: a  reason: collision with root package name */
    private String f31031a;

    /* renamed from: b  reason: collision with root package name */
    private final List f31032b;

    public n(String text, List delimiters) {
        Intrinsics.checkNotNullParameter(text, "text");
        Intrinsics.checkNotNullParameter(delimiters, "delimiters");
        this.f31031a = text;
        this.f31032b = delimiters;
    }

    public final List a() {
        return this.f31032b;
    }

    public final String b() {
        return this.f31031a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof n)) {
            return false;
        }
        n nVar = (n) obj;
        if (Intrinsics.areEqual(this.f31031a, nVar.f31031a) && Intrinsics.areEqual(this.f31032b, nVar.f31032b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f31031a.hashCode() * 31) + this.f31032b.hashCode();
    }

    public String toString() {
        String str = this.f31031a;
        List list = this.f31032b;
        return "SplitArguments(text=" + str + ", delimiters=" + list + ")";
    }
}
