package iw;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class r {

    /* renamed from: a  reason: collision with root package name */
    private final String f30466a;

    /* renamed from: b  reason: collision with root package name */
    private final char f30467b;

    /* renamed from: c  reason: collision with root package name */
    private final s f30468c;

    public r(String text, char c10, s mode) {
        Intrinsics.checkNotNullParameter(text, "text");
        Intrinsics.checkNotNullParameter(mode, "mode");
        this.f30466a = text;
        this.f30467b = c10;
        this.f30468c = mode;
    }

    public final char a() {
        return this.f30467b;
    }

    public final s b() {
        return this.f30468c;
    }

    public final String c() {
        return this.f30466a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof r)) {
            return false;
        }
        r rVar = (r) obj;
        if (Intrinsics.areEqual(this.f30466a, rVar.f30466a) && this.f30467b == rVar.f30467b && Intrinsics.areEqual(this.f30468c, rVar.f30468c)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((this.f30466a.hashCode() * 31) + Character.hashCode(this.f30467b)) * 31) + this.f30468c.hashCode();
    }

    public String toString() {
        String str = this.f30466a;
        char c10 = this.f30467b;
        s sVar = this.f30468c;
        return "TrimArguments(text=" + str + ", char=" + c10 + ", mode=" + sVar + ")";
    }
}
