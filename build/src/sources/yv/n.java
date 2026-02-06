package yv;

import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class n {

    /* renamed from: a  reason: collision with root package name */
    private String f55652a;

    /* renamed from: b  reason: collision with root package name */
    private final List f55653b;

    public n(String text, List delimiters) {
        Intrinsics.checkNotNullParameter(text, "text");
        Intrinsics.checkNotNullParameter(delimiters, "delimiters");
        this.f55652a = text;
        this.f55653b = delimiters;
    }

    public final List a() {
        return this.f55653b;
    }

    public final String b() {
        return this.f55652a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof n)) {
            return false;
        }
        n nVar = (n) obj;
        if (Intrinsics.areEqual(this.f55652a, nVar.f55652a) && Intrinsics.areEqual(this.f55653b, nVar.f55653b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f55652a.hashCode() * 31) + this.f55653b.hashCode();
    }

    public String toString() {
        String str = this.f55652a;
        List list = this.f55653b;
        return "SplitArguments(text=" + str + ", delimiters=" + list + ")";
    }
}
