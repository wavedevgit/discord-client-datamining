package t4;

import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class d {

    /* renamed from: a  reason: collision with root package name */
    private final List f49712a;

    /* renamed from: b  reason: collision with root package name */
    private final String f49713b;

    /* renamed from: c  reason: collision with root package name */
    private final String f49714c;

    /* renamed from: d  reason: collision with root package name */
    private final String f49715d;

    /* renamed from: e  reason: collision with root package name */
    private final int f49716e;

    /* renamed from: f  reason: collision with root package name */
    private final String f49717f;

    public d(List elementsToJoin, String separator, String prefix, String postfix, int i10, String truncated) {
        Intrinsics.checkNotNullParameter(elementsToJoin, "elementsToJoin");
        Intrinsics.checkNotNullParameter(separator, "separator");
        Intrinsics.checkNotNullParameter(prefix, "prefix");
        Intrinsics.checkNotNullParameter(postfix, "postfix");
        Intrinsics.checkNotNullParameter(truncated, "truncated");
        this.f49712a = elementsToJoin;
        this.f49713b = separator;
        this.f49714c = prefix;
        this.f49715d = postfix;
        this.f49716e = i10;
        this.f49717f = truncated;
    }

    public final List a() {
        return this.f49712a;
    }

    public final int b() {
        return this.f49716e;
    }

    public final String c() {
        return this.f49715d;
    }

    public final String d() {
        return this.f49714c;
    }

    public final String e() {
        return this.f49713b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof d)) {
            return false;
        }
        d dVar = (d) obj;
        if (Intrinsics.areEqual(this.f49712a, dVar.f49712a) && Intrinsics.areEqual(this.f49713b, dVar.f49713b) && Intrinsics.areEqual(this.f49714c, dVar.f49714c) && Intrinsics.areEqual(this.f49715d, dVar.f49715d) && this.f49716e == dVar.f49716e && Intrinsics.areEqual(this.f49717f, dVar.f49717f)) {
            return true;
        }
        return false;
    }

    public final String f() {
        return this.f49717f;
    }

    public int hashCode() {
        return (((((((((this.f49712a.hashCode() * 31) + this.f49713b.hashCode()) * 31) + this.f49714c.hashCode()) * 31) + this.f49715d.hashCode()) * 31) + Integer.hashCode(this.f49716e)) * 31) + this.f49717f.hashCode();
    }

    public String toString() {
        List list = this.f49712a;
        String str = this.f49713b;
        String str2 = this.f49714c;
        String str3 = this.f49715d;
        int i10 = this.f49716e;
        String str4 = this.f49717f;
        return "JoinToStringArguments(elementsToJoin=" + list + ", separator=" + str + ", prefix=" + str2 + ", postfix=" + str3 + ", limit=" + i10 + ", truncated=" + str4 + ")";
    }
}
