package t4;

import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class d {

    /* renamed from: a  reason: collision with root package name */
    private final List f50538a;

    /* renamed from: b  reason: collision with root package name */
    private final String f50539b;

    /* renamed from: c  reason: collision with root package name */
    private final String f50540c;

    /* renamed from: d  reason: collision with root package name */
    private final String f50541d;

    /* renamed from: e  reason: collision with root package name */
    private final int f50542e;

    /* renamed from: f  reason: collision with root package name */
    private final String f50543f;

    public d(List elementsToJoin, String separator, String prefix, String postfix, int i10, String truncated) {
        Intrinsics.checkNotNullParameter(elementsToJoin, "elementsToJoin");
        Intrinsics.checkNotNullParameter(separator, "separator");
        Intrinsics.checkNotNullParameter(prefix, "prefix");
        Intrinsics.checkNotNullParameter(postfix, "postfix");
        Intrinsics.checkNotNullParameter(truncated, "truncated");
        this.f50538a = elementsToJoin;
        this.f50539b = separator;
        this.f50540c = prefix;
        this.f50541d = postfix;
        this.f50542e = i10;
        this.f50543f = truncated;
    }

    public final List a() {
        return this.f50538a;
    }

    public final int b() {
        return this.f50542e;
    }

    public final String c() {
        return this.f50541d;
    }

    public final String d() {
        return this.f50540c;
    }

    public final String e() {
        return this.f50539b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof d)) {
            return false;
        }
        d dVar = (d) obj;
        if (Intrinsics.areEqual(this.f50538a, dVar.f50538a) && Intrinsics.areEqual(this.f50539b, dVar.f50539b) && Intrinsics.areEqual(this.f50540c, dVar.f50540c) && Intrinsics.areEqual(this.f50541d, dVar.f50541d) && this.f50542e == dVar.f50542e && Intrinsics.areEqual(this.f50543f, dVar.f50543f)) {
            return true;
        }
        return false;
    }

    public final String f() {
        return this.f50543f;
    }

    public int hashCode() {
        return (((((((((this.f50538a.hashCode() * 31) + this.f50539b.hashCode()) * 31) + this.f50540c.hashCode()) * 31) + this.f50541d.hashCode()) * 31) + Integer.hashCode(this.f50542e)) * 31) + this.f50543f.hashCode();
    }

    public String toString() {
        List list = this.f50538a;
        String str = this.f50539b;
        String str2 = this.f50540c;
        String str3 = this.f50541d;
        int i10 = this.f50542e;
        String str4 = this.f50543f;
        return "JoinToStringArguments(elementsToJoin=" + list + ", separator=" + str + ", prefix=" + str2 + ", postfix=" + str3 + ", limit=" + i10 + ", truncated=" + str4 + ")";
    }
}
