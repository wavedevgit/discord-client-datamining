package t4;

import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class d {

    /* renamed from: a  reason: collision with root package name */
    private final List f49229a;

    /* renamed from: b  reason: collision with root package name */
    private final String f49230b;

    /* renamed from: c  reason: collision with root package name */
    private final String f49231c;

    /* renamed from: d  reason: collision with root package name */
    private final String f49232d;

    /* renamed from: e  reason: collision with root package name */
    private final int f49233e;

    /* renamed from: f  reason: collision with root package name */
    private final String f49234f;

    public d(List elementsToJoin, String separator, String prefix, String postfix, int i10, String truncated) {
        Intrinsics.checkNotNullParameter(elementsToJoin, "elementsToJoin");
        Intrinsics.checkNotNullParameter(separator, "separator");
        Intrinsics.checkNotNullParameter(prefix, "prefix");
        Intrinsics.checkNotNullParameter(postfix, "postfix");
        Intrinsics.checkNotNullParameter(truncated, "truncated");
        this.f49229a = elementsToJoin;
        this.f49230b = separator;
        this.f49231c = prefix;
        this.f49232d = postfix;
        this.f49233e = i10;
        this.f49234f = truncated;
    }

    public final List a() {
        return this.f49229a;
    }

    public final int b() {
        return this.f49233e;
    }

    public final String c() {
        return this.f49232d;
    }

    public final String d() {
        return this.f49231c;
    }

    public final String e() {
        return this.f49230b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof d)) {
            return false;
        }
        d dVar = (d) obj;
        if (Intrinsics.areEqual(this.f49229a, dVar.f49229a) && Intrinsics.areEqual(this.f49230b, dVar.f49230b) && Intrinsics.areEqual(this.f49231c, dVar.f49231c) && Intrinsics.areEqual(this.f49232d, dVar.f49232d) && this.f49233e == dVar.f49233e && Intrinsics.areEqual(this.f49234f, dVar.f49234f)) {
            return true;
        }
        return false;
    }

    public final String f() {
        return this.f49234f;
    }

    public int hashCode() {
        return (((((((((this.f49229a.hashCode() * 31) + this.f49230b.hashCode()) * 31) + this.f49231c.hashCode()) * 31) + this.f49232d.hashCode()) * 31) + Integer.hashCode(this.f49233e)) * 31) + this.f49234f.hashCode();
    }

    public String toString() {
        List list = this.f49229a;
        String str = this.f49230b;
        String str2 = this.f49231c;
        String str3 = this.f49232d;
        int i10 = this.f49233e;
        String str4 = this.f49234f;
        return "JoinToStringArguments(elementsToJoin=" + list + ", separator=" + str + ", prefix=" + str2 + ", postfix=" + str3 + ", limit=" + i10 + ", truncated=" + str4 + ")";
    }
}
