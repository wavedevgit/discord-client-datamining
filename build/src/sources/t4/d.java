package t4;

import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class d {

    /* renamed from: a  reason: collision with root package name */
    private final List f48471a;

    /* renamed from: b  reason: collision with root package name */
    private final String f48472b;

    /* renamed from: c  reason: collision with root package name */
    private final String f48473c;

    /* renamed from: d  reason: collision with root package name */
    private final String f48474d;

    /* renamed from: e  reason: collision with root package name */
    private final int f48475e;

    /* renamed from: f  reason: collision with root package name */
    private final String f48476f;

    public d(List elementsToJoin, String separator, String prefix, String postfix, int i10, String truncated) {
        Intrinsics.checkNotNullParameter(elementsToJoin, "elementsToJoin");
        Intrinsics.checkNotNullParameter(separator, "separator");
        Intrinsics.checkNotNullParameter(prefix, "prefix");
        Intrinsics.checkNotNullParameter(postfix, "postfix");
        Intrinsics.checkNotNullParameter(truncated, "truncated");
        this.f48471a = elementsToJoin;
        this.f48472b = separator;
        this.f48473c = prefix;
        this.f48474d = postfix;
        this.f48475e = i10;
        this.f48476f = truncated;
    }

    public final List a() {
        return this.f48471a;
    }

    public final int b() {
        return this.f48475e;
    }

    public final String c() {
        return this.f48474d;
    }

    public final String d() {
        return this.f48473c;
    }

    public final String e() {
        return this.f48472b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof d)) {
            return false;
        }
        d dVar = (d) obj;
        if (Intrinsics.areEqual(this.f48471a, dVar.f48471a) && Intrinsics.areEqual(this.f48472b, dVar.f48472b) && Intrinsics.areEqual(this.f48473c, dVar.f48473c) && Intrinsics.areEqual(this.f48474d, dVar.f48474d) && this.f48475e == dVar.f48475e && Intrinsics.areEqual(this.f48476f, dVar.f48476f)) {
            return true;
        }
        return false;
    }

    public final String f() {
        return this.f48476f;
    }

    public int hashCode() {
        return (((((((((this.f48471a.hashCode() * 31) + this.f48472b.hashCode()) * 31) + this.f48473c.hashCode()) * 31) + this.f48474d.hashCode()) * 31) + Integer.hashCode(this.f48475e)) * 31) + this.f48476f.hashCode();
    }

    public String toString() {
        List list = this.f48471a;
        String str = this.f48472b;
        String str2 = this.f48473c;
        String str3 = this.f48474d;
        int i10 = this.f48475e;
        String str4 = this.f48476f;
        return "JoinToStringArguments(elementsToJoin=" + list + ", separator=" + str + ", prefix=" + str2 + ", postfix=" + str3 + ", limit=" + i10 + ", truncated=" + str4 + ")";
    }
}
