package ov;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class r {

    /* renamed from: a  reason: collision with root package name */
    private final String f44821a;

    /* renamed from: b  reason: collision with root package name */
    private final char f44822b;

    /* renamed from: c  reason: collision with root package name */
    private final s f44823c;

    public r(String text, char c10, s mode) {
        Intrinsics.checkNotNullParameter(text, "text");
        Intrinsics.checkNotNullParameter(mode, "mode");
        this.f44821a = text;
        this.f44822b = c10;
        this.f44823c = mode;
    }

    public final char a() {
        return this.f44822b;
    }

    public final s b() {
        return this.f44823c;
    }

    public final String c() {
        return this.f44821a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof r)) {
            return false;
        }
        r rVar = (r) obj;
        if (Intrinsics.areEqual(this.f44821a, rVar.f44821a) && this.f44822b == rVar.f44822b && Intrinsics.areEqual(this.f44823c, rVar.f44823c)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((this.f44821a.hashCode() * 31) + Character.hashCode(this.f44822b)) * 31) + this.f44823c.hashCode();
    }

    public String toString() {
        String str = this.f44821a;
        char c10 = this.f44822b;
        s sVar = this.f44823c;
        return "TrimArguments(text=" + str + ", char=" + c10 + ", mode=" + sVar + ")";
    }
}
