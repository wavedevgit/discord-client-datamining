package yv;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class r {

    /* renamed from: a  reason: collision with root package name */
    private final String f55704a;

    /* renamed from: b  reason: collision with root package name */
    private final char f55705b;

    /* renamed from: c  reason: collision with root package name */
    private final s f55706c;

    public r(String text, char c10, s mode) {
        Intrinsics.checkNotNullParameter(text, "text");
        Intrinsics.checkNotNullParameter(mode, "mode");
        this.f55704a = text;
        this.f55705b = c10;
        this.f55706c = mode;
    }

    public final char a() {
        return this.f55705b;
    }

    public final s b() {
        return this.f55706c;
    }

    public final String c() {
        return this.f55704a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof r)) {
            return false;
        }
        r rVar = (r) obj;
        if (Intrinsics.areEqual(this.f55704a, rVar.f55704a) && this.f55705b == rVar.f55705b && Intrinsics.areEqual(this.f55706c, rVar.f55706c)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((this.f55704a.hashCode() * 31) + Character.hashCode(this.f55705b)) * 31) + this.f55706c.hashCode();
    }

    public String toString() {
        String str = this.f55704a;
        char c10 = this.f55705b;
        s sVar = this.f55706c;
        return "TrimArguments(text=" + str + ", char=" + c10 + ", mode=" + sVar + ")";
    }
}
