package t4;

import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class d {

    /* renamed from: a  reason: collision with root package name */
    private final List f49213a;

    /* renamed from: b  reason: collision with root package name */
    private final String f49214b;

    /* renamed from: c  reason: collision with root package name */
    private final String f49215c;

    /* renamed from: d  reason: collision with root package name */
    private final String f49216d;

    /* renamed from: e  reason: collision with root package name */
    private final int f49217e;

    /* renamed from: f  reason: collision with root package name */
    private final String f49218f;

    public d(List elementsToJoin, String separator, String prefix, String postfix, int i10, String truncated) {
        Intrinsics.checkNotNullParameter(elementsToJoin, "elementsToJoin");
        Intrinsics.checkNotNullParameter(separator, "separator");
        Intrinsics.checkNotNullParameter(prefix, "prefix");
        Intrinsics.checkNotNullParameter(postfix, "postfix");
        Intrinsics.checkNotNullParameter(truncated, "truncated");
        this.f49213a = elementsToJoin;
        this.f49214b = separator;
        this.f49215c = prefix;
        this.f49216d = postfix;
        this.f49217e = i10;
        this.f49218f = truncated;
    }

    public final List a() {
        return this.f49213a;
    }

    public final int b() {
        return this.f49217e;
    }

    public final String c() {
        return this.f49216d;
    }

    public final String d() {
        return this.f49215c;
    }

    public final String e() {
        return this.f49214b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof d)) {
            return false;
        }
        d dVar = (d) obj;
        if (Intrinsics.areEqual(this.f49213a, dVar.f49213a) && Intrinsics.areEqual(this.f49214b, dVar.f49214b) && Intrinsics.areEqual(this.f49215c, dVar.f49215c) && Intrinsics.areEqual(this.f49216d, dVar.f49216d) && this.f49217e == dVar.f49217e && Intrinsics.areEqual(this.f49218f, dVar.f49218f)) {
            return true;
        }
        return false;
    }

    public final String f() {
        return this.f49218f;
    }

    public int hashCode() {
        return (((((((((this.f49213a.hashCode() * 31) + this.f49214b.hashCode()) * 31) + this.f49215c.hashCode()) * 31) + this.f49216d.hashCode()) * 31) + Integer.hashCode(this.f49217e)) * 31) + this.f49218f.hashCode();
    }

    public String toString() {
        List list = this.f49213a;
        String str = this.f49214b;
        String str2 = this.f49215c;
        String str3 = this.f49216d;
        int i10 = this.f49217e;
        String str4 = this.f49218f;
        return "JoinToStringArguments(elementsToJoin=" + list + ", separator=" + str + ", prefix=" + str2 + ", postfix=" + str3 + ", limit=" + i10 + ", truncated=" + str4 + ")";
    }
}
