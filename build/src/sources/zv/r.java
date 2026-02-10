package zv;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class r {

    /* renamed from: a  reason: collision with root package name */
    private final String f56729a;

    /* renamed from: b  reason: collision with root package name */
    private final char f56730b;

    /* renamed from: c  reason: collision with root package name */
    private final s f56731c;

    public r(String text, char c10, s mode) {
        Intrinsics.checkNotNullParameter(text, "text");
        Intrinsics.checkNotNullParameter(mode, "mode");
        this.f56729a = text;
        this.f56730b = c10;
        this.f56731c = mode;
    }

    public final char a() {
        return this.f56730b;
    }

    public final s b() {
        return this.f56731c;
    }

    public final String c() {
        return this.f56729a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof r)) {
            return false;
        }
        r rVar = (r) obj;
        if (Intrinsics.areEqual(this.f56729a, rVar.f56729a) && this.f56730b == rVar.f56730b && Intrinsics.areEqual(this.f56731c, rVar.f56731c)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((this.f56729a.hashCode() * 31) + Character.hashCode(this.f56730b)) * 31) + this.f56731c.hashCode();
    }

    public String toString() {
        String str = this.f56729a;
        char c10 = this.f56730b;
        s sVar = this.f56731c;
        return "TrimArguments(text=" + str + ", char=" + c10 + ", mode=" + sVar + ")";
    }
}
