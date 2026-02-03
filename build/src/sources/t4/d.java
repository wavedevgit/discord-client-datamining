package t4;

import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class d {

    /* renamed from: a  reason: collision with root package name */
    private final List f49501a;

    /* renamed from: b  reason: collision with root package name */
    private final String f49502b;

    /* renamed from: c  reason: collision with root package name */
    private final String f49503c;

    /* renamed from: d  reason: collision with root package name */
    private final String f49504d;

    /* renamed from: e  reason: collision with root package name */
    private final int f49505e;

    /* renamed from: f  reason: collision with root package name */
    private final String f49506f;

    public d(List elementsToJoin, String separator, String prefix, String postfix, int i10, String truncated) {
        Intrinsics.checkNotNullParameter(elementsToJoin, "elementsToJoin");
        Intrinsics.checkNotNullParameter(separator, "separator");
        Intrinsics.checkNotNullParameter(prefix, "prefix");
        Intrinsics.checkNotNullParameter(postfix, "postfix");
        Intrinsics.checkNotNullParameter(truncated, "truncated");
        this.f49501a = elementsToJoin;
        this.f49502b = separator;
        this.f49503c = prefix;
        this.f49504d = postfix;
        this.f49505e = i10;
        this.f49506f = truncated;
    }

    public final List a() {
        return this.f49501a;
    }

    public final int b() {
        return this.f49505e;
    }

    public final String c() {
        return this.f49504d;
    }

    public final String d() {
        return this.f49503c;
    }

    public final String e() {
        return this.f49502b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof d)) {
            return false;
        }
        d dVar = (d) obj;
        if (Intrinsics.areEqual(this.f49501a, dVar.f49501a) && Intrinsics.areEqual(this.f49502b, dVar.f49502b) && Intrinsics.areEqual(this.f49503c, dVar.f49503c) && Intrinsics.areEqual(this.f49504d, dVar.f49504d) && this.f49505e == dVar.f49505e && Intrinsics.areEqual(this.f49506f, dVar.f49506f)) {
            return true;
        }
        return false;
    }

    public final String f() {
        return this.f49506f;
    }

    public int hashCode() {
        return (((((((((this.f49501a.hashCode() * 31) + this.f49502b.hashCode()) * 31) + this.f49503c.hashCode()) * 31) + this.f49504d.hashCode()) * 31) + Integer.hashCode(this.f49505e)) * 31) + this.f49506f.hashCode();
    }

    public String toString() {
        List list = this.f49501a;
        String str = this.f49502b;
        String str2 = this.f49503c;
        String str3 = this.f49504d;
        int i10 = this.f49505e;
        String str4 = this.f49506f;
        return "JoinToStringArguments(elementsToJoin=" + list + ", separator=" + str + ", prefix=" + str2 + ", postfix=" + str3 + ", limit=" + i10 + ", truncated=" + str4 + ")";
    }
}
