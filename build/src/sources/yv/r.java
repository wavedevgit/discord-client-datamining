package yv;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class r {

    /* renamed from: a  reason: collision with root package name */
    private final String f55656a;

    /* renamed from: b  reason: collision with root package name */
    private final char f55657b;

    /* renamed from: c  reason: collision with root package name */
    private final s f55658c;

    public r(String text, char c10, s mode) {
        Intrinsics.checkNotNullParameter(text, "text");
        Intrinsics.checkNotNullParameter(mode, "mode");
        this.f55656a = text;
        this.f55657b = c10;
        this.f55658c = mode;
    }

    public final char a() {
        return this.f55657b;
    }

    public final s b() {
        return this.f55658c;
    }

    public final String c() {
        return this.f55656a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof r)) {
            return false;
        }
        r rVar = (r) obj;
        if (Intrinsics.areEqual(this.f55656a, rVar.f55656a) && this.f55657b == rVar.f55657b && Intrinsics.areEqual(this.f55658c, rVar.f55658c)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((this.f55656a.hashCode() * 31) + Character.hashCode(this.f55657b)) * 31) + this.f55658c.hashCode();
    }

    public String toString() {
        String str = this.f55656a;
        char c10 = this.f55657b;
        s sVar = this.f55658c;
        return "TrimArguments(text=" + str + ", char=" + c10 + ", mode=" + sVar + ")";
    }
}
