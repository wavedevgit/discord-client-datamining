package lv;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class r {

    /* renamed from: a  reason: collision with root package name */
    private final String f37766a;

    /* renamed from: b  reason: collision with root package name */
    private final char f37767b;

    /* renamed from: c  reason: collision with root package name */
    private final s f37768c;

    public r(String text, char c10, s mode) {
        Intrinsics.checkNotNullParameter(text, "text");
        Intrinsics.checkNotNullParameter(mode, "mode");
        this.f37766a = text;
        this.f37767b = c10;
        this.f37768c = mode;
    }

    public final char a() {
        return this.f37767b;
    }

    public final s b() {
        return this.f37768c;
    }

    public final String c() {
        return this.f37766a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof r)) {
            return false;
        }
        r rVar = (r) obj;
        if (Intrinsics.areEqual(this.f37766a, rVar.f37766a) && this.f37767b == rVar.f37767b && Intrinsics.areEqual(this.f37768c, rVar.f37768c)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((this.f37766a.hashCode() * 31) + Character.hashCode(this.f37767b)) * 31) + this.f37768c.hashCode();
    }

    public String toString() {
        String str = this.f37766a;
        char c10 = this.f37767b;
        s sVar = this.f37768c;
        return "TrimArguments(text=" + str + ", char=" + c10 + ", mode=" + sVar + ")";
    }
}
