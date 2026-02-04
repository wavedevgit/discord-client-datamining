package t4;

import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class d {

    /* renamed from: a  reason: collision with root package name */
    private final List f49709a;

    /* renamed from: b  reason: collision with root package name */
    private final String f49710b;

    /* renamed from: c  reason: collision with root package name */
    private final String f49711c;

    /* renamed from: d  reason: collision with root package name */
    private final String f49712d;

    /* renamed from: e  reason: collision with root package name */
    private final int f49713e;

    /* renamed from: f  reason: collision with root package name */
    private final String f49714f;

    public d(List elementsToJoin, String separator, String prefix, String postfix, int i10, String truncated) {
        Intrinsics.checkNotNullParameter(elementsToJoin, "elementsToJoin");
        Intrinsics.checkNotNullParameter(separator, "separator");
        Intrinsics.checkNotNullParameter(prefix, "prefix");
        Intrinsics.checkNotNullParameter(postfix, "postfix");
        Intrinsics.checkNotNullParameter(truncated, "truncated");
        this.f49709a = elementsToJoin;
        this.f49710b = separator;
        this.f49711c = prefix;
        this.f49712d = postfix;
        this.f49713e = i10;
        this.f49714f = truncated;
    }

    public final List a() {
        return this.f49709a;
    }

    public final int b() {
        return this.f49713e;
    }

    public final String c() {
        return this.f49712d;
    }

    public final String d() {
        return this.f49711c;
    }

    public final String e() {
        return this.f49710b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof d)) {
            return false;
        }
        d dVar = (d) obj;
        if (Intrinsics.areEqual(this.f49709a, dVar.f49709a) && Intrinsics.areEqual(this.f49710b, dVar.f49710b) && Intrinsics.areEqual(this.f49711c, dVar.f49711c) && Intrinsics.areEqual(this.f49712d, dVar.f49712d) && this.f49713e == dVar.f49713e && Intrinsics.areEqual(this.f49714f, dVar.f49714f)) {
            return true;
        }
        return false;
    }

    public final String f() {
        return this.f49714f;
    }

    public int hashCode() {
        return (((((((((this.f49709a.hashCode() * 31) + this.f49710b.hashCode()) * 31) + this.f49711c.hashCode()) * 31) + this.f49712d.hashCode()) * 31) + Integer.hashCode(this.f49713e)) * 31) + this.f49714f.hashCode();
    }

    public String toString() {
        List list = this.f49709a;
        String str = this.f49710b;
        String str2 = this.f49711c;
        String str3 = this.f49712d;
        int i10 = this.f49713e;
        String str4 = this.f49714f;
        return "JoinToStringArguments(elementsToJoin=" + list + ", separator=" + str + ", prefix=" + str2 + ", postfix=" + str3 + ", limit=" + i10 + ", truncated=" + str4 + ")";
    }
}
