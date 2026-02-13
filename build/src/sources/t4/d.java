package t4;

import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class d {

    /* renamed from: a  reason: collision with root package name */
    private final List f49039a;

    /* renamed from: b  reason: collision with root package name */
    private final String f49040b;

    /* renamed from: c  reason: collision with root package name */
    private final String f49041c;

    /* renamed from: d  reason: collision with root package name */
    private final String f49042d;

    /* renamed from: e  reason: collision with root package name */
    private final int f49043e;

    /* renamed from: f  reason: collision with root package name */
    private final String f49044f;

    public d(List elementsToJoin, String separator, String prefix, String postfix, int i10, String truncated) {
        Intrinsics.checkNotNullParameter(elementsToJoin, "elementsToJoin");
        Intrinsics.checkNotNullParameter(separator, "separator");
        Intrinsics.checkNotNullParameter(prefix, "prefix");
        Intrinsics.checkNotNullParameter(postfix, "postfix");
        Intrinsics.checkNotNullParameter(truncated, "truncated");
        this.f49039a = elementsToJoin;
        this.f49040b = separator;
        this.f49041c = prefix;
        this.f49042d = postfix;
        this.f49043e = i10;
        this.f49044f = truncated;
    }

    public final List a() {
        return this.f49039a;
    }

    public final int b() {
        return this.f49043e;
    }

    public final String c() {
        return this.f49042d;
    }

    public final String d() {
        return this.f49041c;
    }

    public final String e() {
        return this.f49040b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof d)) {
            return false;
        }
        d dVar = (d) obj;
        if (Intrinsics.areEqual(this.f49039a, dVar.f49039a) && Intrinsics.areEqual(this.f49040b, dVar.f49040b) && Intrinsics.areEqual(this.f49041c, dVar.f49041c) && Intrinsics.areEqual(this.f49042d, dVar.f49042d) && this.f49043e == dVar.f49043e && Intrinsics.areEqual(this.f49044f, dVar.f49044f)) {
            return true;
        }
        return false;
    }

    public final String f() {
        return this.f49044f;
    }

    public int hashCode() {
        return (((((((((this.f49039a.hashCode() * 31) + this.f49040b.hashCode()) * 31) + this.f49041c.hashCode()) * 31) + this.f49042d.hashCode()) * 31) + Integer.hashCode(this.f49043e)) * 31) + this.f49044f.hashCode();
    }

    public String toString() {
        List list = this.f49039a;
        String str = this.f49040b;
        String str2 = this.f49041c;
        String str3 = this.f49042d;
        int i10 = this.f49043e;
        String str4 = this.f49044f;
        return "JoinToStringArguments(elementsToJoin=" + list + ", separator=" + str + ", prefix=" + str2 + ", postfix=" + str3 + ", limit=" + i10 + ", truncated=" + str4 + ")";
    }
}
