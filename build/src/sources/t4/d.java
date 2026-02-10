package t4;

import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class d {

    /* renamed from: a  reason: collision with root package name */
    private final List f48470a;

    /* renamed from: b  reason: collision with root package name */
    private final String f48471b;

    /* renamed from: c  reason: collision with root package name */
    private final String f48472c;

    /* renamed from: d  reason: collision with root package name */
    private final String f48473d;

    /* renamed from: e  reason: collision with root package name */
    private final int f48474e;

    /* renamed from: f  reason: collision with root package name */
    private final String f48475f;

    public d(List elementsToJoin, String separator, String prefix, String postfix, int i10, String truncated) {
        Intrinsics.checkNotNullParameter(elementsToJoin, "elementsToJoin");
        Intrinsics.checkNotNullParameter(separator, "separator");
        Intrinsics.checkNotNullParameter(prefix, "prefix");
        Intrinsics.checkNotNullParameter(postfix, "postfix");
        Intrinsics.checkNotNullParameter(truncated, "truncated");
        this.f48470a = elementsToJoin;
        this.f48471b = separator;
        this.f48472c = prefix;
        this.f48473d = postfix;
        this.f48474e = i10;
        this.f48475f = truncated;
    }

    public final List a() {
        return this.f48470a;
    }

    public final int b() {
        return this.f48474e;
    }

    public final String c() {
        return this.f48473d;
    }

    public final String d() {
        return this.f48472c;
    }

    public final String e() {
        return this.f48471b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof d)) {
            return false;
        }
        d dVar = (d) obj;
        if (Intrinsics.areEqual(this.f48470a, dVar.f48470a) && Intrinsics.areEqual(this.f48471b, dVar.f48471b) && Intrinsics.areEqual(this.f48472c, dVar.f48472c) && Intrinsics.areEqual(this.f48473d, dVar.f48473d) && this.f48474e == dVar.f48474e && Intrinsics.areEqual(this.f48475f, dVar.f48475f)) {
            return true;
        }
        return false;
    }

    public final String f() {
        return this.f48475f;
    }

    public int hashCode() {
        return (((((((((this.f48470a.hashCode() * 31) + this.f48471b.hashCode()) * 31) + this.f48472c.hashCode()) * 31) + this.f48473d.hashCode()) * 31) + Integer.hashCode(this.f48474e)) * 31) + this.f48475f.hashCode();
    }

    public String toString() {
        List list = this.f48470a;
        String str = this.f48471b;
        String str2 = this.f48472c;
        String str3 = this.f48473d;
        int i10 = this.f48474e;
        String str4 = this.f48475f;
        return "JoinToStringArguments(elementsToJoin=" + list + ", separator=" + str + ", prefix=" + str2 + ", postfix=" + str3 + ", limit=" + i10 + ", truncated=" + str4 + ")";
    }
}
