package t4;

import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class d {

    /* renamed from: a  reason: collision with root package name */
    private final List f50290a;

    /* renamed from: b  reason: collision with root package name */
    private final String f50291b;

    /* renamed from: c  reason: collision with root package name */
    private final String f50292c;

    /* renamed from: d  reason: collision with root package name */
    private final String f50293d;

    /* renamed from: e  reason: collision with root package name */
    private final int f50294e;

    /* renamed from: f  reason: collision with root package name */
    private final String f50295f;

    public d(List elementsToJoin, String separator, String prefix, String postfix, int i10, String truncated) {
        Intrinsics.checkNotNullParameter(elementsToJoin, "elementsToJoin");
        Intrinsics.checkNotNullParameter(separator, "separator");
        Intrinsics.checkNotNullParameter(prefix, "prefix");
        Intrinsics.checkNotNullParameter(postfix, "postfix");
        Intrinsics.checkNotNullParameter(truncated, "truncated");
        this.f50290a = elementsToJoin;
        this.f50291b = separator;
        this.f50292c = prefix;
        this.f50293d = postfix;
        this.f50294e = i10;
        this.f50295f = truncated;
    }

    public final List a() {
        return this.f50290a;
    }

    public final int b() {
        return this.f50294e;
    }

    public final String c() {
        return this.f50293d;
    }

    public final String d() {
        return this.f50292c;
    }

    public final String e() {
        return this.f50291b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof d)) {
            return false;
        }
        d dVar = (d) obj;
        if (Intrinsics.areEqual(this.f50290a, dVar.f50290a) && Intrinsics.areEqual(this.f50291b, dVar.f50291b) && Intrinsics.areEqual(this.f50292c, dVar.f50292c) && Intrinsics.areEqual(this.f50293d, dVar.f50293d) && this.f50294e == dVar.f50294e && Intrinsics.areEqual(this.f50295f, dVar.f50295f)) {
            return true;
        }
        return false;
    }

    public final String f() {
        return this.f50295f;
    }

    public int hashCode() {
        return (((((((((this.f50290a.hashCode() * 31) + this.f50291b.hashCode()) * 31) + this.f50292c.hashCode()) * 31) + this.f50293d.hashCode()) * 31) + Integer.hashCode(this.f50294e)) * 31) + this.f50295f.hashCode();
    }

    public String toString() {
        List list = this.f50290a;
        String str = this.f50291b;
        String str2 = this.f50292c;
        String str3 = this.f50293d;
        int i10 = this.f50294e;
        String str4 = this.f50295f;
        return "JoinToStringArguments(elementsToJoin=" + list + ", separator=" + str + ", prefix=" + str2 + ", postfix=" + str3 + ", limit=" + i10 + ", truncated=" + str4 + ")";
    }
}
