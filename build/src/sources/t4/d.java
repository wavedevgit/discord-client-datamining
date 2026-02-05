package t4;

import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class d {

    /* renamed from: a  reason: collision with root package name */
    private final List f50314a;

    /* renamed from: b  reason: collision with root package name */
    private final String f50315b;

    /* renamed from: c  reason: collision with root package name */
    private final String f50316c;

    /* renamed from: d  reason: collision with root package name */
    private final String f50317d;

    /* renamed from: e  reason: collision with root package name */
    private final int f50318e;

    /* renamed from: f  reason: collision with root package name */
    private final String f50319f;

    public d(List elementsToJoin, String separator, String prefix, String postfix, int i10, String truncated) {
        Intrinsics.checkNotNullParameter(elementsToJoin, "elementsToJoin");
        Intrinsics.checkNotNullParameter(separator, "separator");
        Intrinsics.checkNotNullParameter(prefix, "prefix");
        Intrinsics.checkNotNullParameter(postfix, "postfix");
        Intrinsics.checkNotNullParameter(truncated, "truncated");
        this.f50314a = elementsToJoin;
        this.f50315b = separator;
        this.f50316c = prefix;
        this.f50317d = postfix;
        this.f50318e = i10;
        this.f50319f = truncated;
    }

    public final List a() {
        return this.f50314a;
    }

    public final int b() {
        return this.f50318e;
    }

    public final String c() {
        return this.f50317d;
    }

    public final String d() {
        return this.f50316c;
    }

    public final String e() {
        return this.f50315b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof d)) {
            return false;
        }
        d dVar = (d) obj;
        if (Intrinsics.areEqual(this.f50314a, dVar.f50314a) && Intrinsics.areEqual(this.f50315b, dVar.f50315b) && Intrinsics.areEqual(this.f50316c, dVar.f50316c) && Intrinsics.areEqual(this.f50317d, dVar.f50317d) && this.f50318e == dVar.f50318e && Intrinsics.areEqual(this.f50319f, dVar.f50319f)) {
            return true;
        }
        return false;
    }

    public final String f() {
        return this.f50319f;
    }

    public int hashCode() {
        return (((((((((this.f50314a.hashCode() * 31) + this.f50315b.hashCode()) * 31) + this.f50316c.hashCode()) * 31) + this.f50317d.hashCode()) * 31) + Integer.hashCode(this.f50318e)) * 31) + this.f50319f.hashCode();
    }

    public String toString() {
        List list = this.f50314a;
        String str = this.f50315b;
        String str2 = this.f50316c;
        String str3 = this.f50317d;
        int i10 = this.f50318e;
        String str4 = this.f50319f;
        return "JoinToStringArguments(elementsToJoin=" + list + ", separator=" + str + ", prefix=" + str2 + ", postfix=" + str3 + ", limit=" + i10 + ", truncated=" + str4 + ")";
    }
}
