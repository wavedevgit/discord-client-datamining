package iw;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class r {

    /* renamed from: a  reason: collision with root package name */
    private final String f30467a;

    /* renamed from: b  reason: collision with root package name */
    private final char f30468b;

    /* renamed from: c  reason: collision with root package name */
    private final s f30469c;

    public r(String text, char c10, s mode) {
        Intrinsics.checkNotNullParameter(text, "text");
        Intrinsics.checkNotNullParameter(mode, "mode");
        this.f30467a = text;
        this.f30468b = c10;
        this.f30469c = mode;
    }

    public final char a() {
        return this.f30468b;
    }

    public final s b() {
        return this.f30469c;
    }

    public final String c() {
        return this.f30467a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof r)) {
            return false;
        }
        r rVar = (r) obj;
        if (Intrinsics.areEqual(this.f30467a, rVar.f30467a) && this.f30468b == rVar.f30468b && Intrinsics.areEqual(this.f30469c, rVar.f30469c)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((this.f30467a.hashCode() * 31) + Character.hashCode(this.f30468b)) * 31) + this.f30469c.hashCode();
    }

    public String toString() {
        String str = this.f30467a;
        char c10 = this.f30468b;
        s sVar = this.f30469c;
        return "TrimArguments(text=" + str + ", char=" + c10 + ", mode=" + sVar + ")";
    }
}
