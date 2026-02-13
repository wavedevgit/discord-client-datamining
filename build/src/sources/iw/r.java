package iw;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class r {

    /* renamed from: a  reason: collision with root package name */
    private final String f31035a;

    /* renamed from: b  reason: collision with root package name */
    private final char f31036b;

    /* renamed from: c  reason: collision with root package name */
    private final s f31037c;

    public r(String text, char c10, s mode) {
        Intrinsics.checkNotNullParameter(text, "text");
        Intrinsics.checkNotNullParameter(mode, "mode");
        this.f31035a = text;
        this.f31036b = c10;
        this.f31037c = mode;
    }

    public final char a() {
        return this.f31036b;
    }

    public final s b() {
        return this.f31037c;
    }

    public final String c() {
        return this.f31035a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof r)) {
            return false;
        }
        r rVar = (r) obj;
        if (Intrinsics.areEqual(this.f31035a, rVar.f31035a) && this.f31036b == rVar.f31036b && Intrinsics.areEqual(this.f31037c, rVar.f31037c)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((this.f31035a.hashCode() * 31) + Character.hashCode(this.f31036b)) * 31) + this.f31037c.hashCode();
    }

    public String toString() {
        String str = this.f31035a;
        char c10 = this.f31036b;
        s sVar = this.f31037c;
        return "TrimArguments(text=" + str + ", char=" + c10 + ", mode=" + sVar + ")";
    }
}
