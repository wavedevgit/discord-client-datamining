package rv;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class r {

    /* renamed from: a  reason: collision with root package name */
    private final String f49270a;

    /* renamed from: b  reason: collision with root package name */
    private final char f49271b;

    /* renamed from: c  reason: collision with root package name */
    private final s f49272c;

    public r(String text, char c10, s mode) {
        Intrinsics.checkNotNullParameter(text, "text");
        Intrinsics.checkNotNullParameter(mode, "mode");
        this.f49270a = text;
        this.f49271b = c10;
        this.f49272c = mode;
    }

    public final char a() {
        return this.f49271b;
    }

    public final s b() {
        return this.f49272c;
    }

    public final String c() {
        return this.f49270a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof r)) {
            return false;
        }
        r rVar = (r) obj;
        if (Intrinsics.areEqual(this.f49270a, rVar.f49270a) && this.f49271b == rVar.f49271b && Intrinsics.areEqual(this.f49272c, rVar.f49272c)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((this.f49270a.hashCode() * 31) + Character.hashCode(this.f49271b)) * 31) + this.f49272c.hashCode();
    }

    public String toString() {
        String str = this.f49270a;
        char c10 = this.f49271b;
        s sVar = this.f49272c;
        return "TrimArguments(text=" + str + ", char=" + c10 + ", mode=" + sVar + ")";
    }
}
