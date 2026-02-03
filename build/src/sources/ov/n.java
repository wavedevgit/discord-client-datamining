package ov;

import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class n {

    /* renamed from: a  reason: collision with root package name */
    private String f44817a;

    /* renamed from: b  reason: collision with root package name */
    private final List f44818b;

    public n(String text, List delimiters) {
        Intrinsics.checkNotNullParameter(text, "text");
        Intrinsics.checkNotNullParameter(delimiters, "delimiters");
        this.f44817a = text;
        this.f44818b = delimiters;
    }

    public final List a() {
        return this.f44818b;
    }

    public final String b() {
        return this.f44817a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof n)) {
            return false;
        }
        n nVar = (n) obj;
        if (Intrinsics.areEqual(this.f44817a, nVar.f44817a) && Intrinsics.areEqual(this.f44818b, nVar.f44818b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f44817a.hashCode() * 31) + this.f44818b.hashCode();
    }

    public String toString() {
        String str = this.f44817a;
        List list = this.f44818b;
        return "SplitArguments(text=" + str + ", delimiters=" + list + ")";
    }
}
