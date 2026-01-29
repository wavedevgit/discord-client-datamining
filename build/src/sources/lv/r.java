package lv;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class r {

    /* renamed from: a  reason: collision with root package name */
    private final String f37750a;

    /* renamed from: b  reason: collision with root package name */
    private final char f37751b;

    /* renamed from: c  reason: collision with root package name */
    private final s f37752c;

    public r(String text, char c10, s mode) {
        Intrinsics.checkNotNullParameter(text, "text");
        Intrinsics.checkNotNullParameter(mode, "mode");
        this.f37750a = text;
        this.f37751b = c10;
        this.f37752c = mode;
    }

    public final char a() {
        return this.f37751b;
    }

    public final s b() {
        return this.f37752c;
    }

    public final String c() {
        return this.f37750a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof r)) {
            return false;
        }
        r rVar = (r) obj;
        if (Intrinsics.areEqual(this.f37750a, rVar.f37750a) && this.f37751b == rVar.f37751b && Intrinsics.areEqual(this.f37752c, rVar.f37752c)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((this.f37750a.hashCode() * 31) + Character.hashCode(this.f37751b)) * 31) + this.f37752c.hashCode();
    }

    public String toString() {
        String str = this.f37750a;
        char c10 = this.f37751b;
        s sVar = this.f37752c;
        return "TrimArguments(text=" + str + ", char=" + c10 + ", mode=" + sVar + ")";
    }
}
