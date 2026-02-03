package mv;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class r {

    /* renamed from: a  reason: collision with root package name */
    private final String f39466a;

    /* renamed from: b  reason: collision with root package name */
    private final char f39467b;

    /* renamed from: c  reason: collision with root package name */
    private final s f39468c;

    public r(String text, char c10, s mode) {
        Intrinsics.checkNotNullParameter(text, "text");
        Intrinsics.checkNotNullParameter(mode, "mode");
        this.f39466a = text;
        this.f39467b = c10;
        this.f39468c = mode;
    }

    public final char a() {
        return this.f39467b;
    }

    public final s b() {
        return this.f39468c;
    }

    public final String c() {
        return this.f39466a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof r)) {
            return false;
        }
        r rVar = (r) obj;
        if (Intrinsics.areEqual(this.f39466a, rVar.f39466a) && this.f39467b == rVar.f39467b && Intrinsics.areEqual(this.f39468c, rVar.f39468c)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((this.f39466a.hashCode() * 31) + Character.hashCode(this.f39467b)) * 31) + this.f39468c.hashCode();
    }

    public String toString() {
        String str = this.f39466a;
        char c10 = this.f39467b;
        s sVar = this.f39468c;
        return "TrimArguments(text=" + str + ", char=" + c10 + ", mode=" + sVar + ")";
    }
}
