package t4;

import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class d {

    /* renamed from: a  reason: collision with root package name */
    private final List f50338a;

    /* renamed from: b  reason: collision with root package name */
    private final String f50339b;

    /* renamed from: c  reason: collision with root package name */
    private final String f50340c;

    /* renamed from: d  reason: collision with root package name */
    private final String f50341d;

    /* renamed from: e  reason: collision with root package name */
    private final int f50342e;

    /* renamed from: f  reason: collision with root package name */
    private final String f50343f;

    public d(List elementsToJoin, String separator, String prefix, String postfix, int i10, String truncated) {
        Intrinsics.checkNotNullParameter(elementsToJoin, "elementsToJoin");
        Intrinsics.checkNotNullParameter(separator, "separator");
        Intrinsics.checkNotNullParameter(prefix, "prefix");
        Intrinsics.checkNotNullParameter(postfix, "postfix");
        Intrinsics.checkNotNullParameter(truncated, "truncated");
        this.f50338a = elementsToJoin;
        this.f50339b = separator;
        this.f50340c = prefix;
        this.f50341d = postfix;
        this.f50342e = i10;
        this.f50343f = truncated;
    }

    public final List a() {
        return this.f50338a;
    }

    public final int b() {
        return this.f50342e;
    }

    public final String c() {
        return this.f50341d;
    }

    public final String d() {
        return this.f50340c;
    }

    public final String e() {
        return this.f50339b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof d)) {
            return false;
        }
        d dVar = (d) obj;
        if (Intrinsics.areEqual(this.f50338a, dVar.f50338a) && Intrinsics.areEqual(this.f50339b, dVar.f50339b) && Intrinsics.areEqual(this.f50340c, dVar.f50340c) && Intrinsics.areEqual(this.f50341d, dVar.f50341d) && this.f50342e == dVar.f50342e && Intrinsics.areEqual(this.f50343f, dVar.f50343f)) {
            return true;
        }
        return false;
    }

    public final String f() {
        return this.f50343f;
    }

    public int hashCode() {
        return (((((((((this.f50338a.hashCode() * 31) + this.f50339b.hashCode()) * 31) + this.f50340c.hashCode()) * 31) + this.f50341d.hashCode()) * 31) + Integer.hashCode(this.f50342e)) * 31) + this.f50343f.hashCode();
    }

    public String toString() {
        List list = this.f50338a;
        String str = this.f50339b;
        String str2 = this.f50340c;
        String str3 = this.f50341d;
        int i10 = this.f50342e;
        String str4 = this.f50343f;
        return "JoinToStringArguments(elementsToJoin=" + list + ", separator=" + str + ", prefix=" + str2 + ", postfix=" + str3 + ", limit=" + i10 + ", truncated=" + str4 + ")";
    }
}
