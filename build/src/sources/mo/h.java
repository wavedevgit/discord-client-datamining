package mo;

import jo.c4;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h {

    /* renamed from: a  reason: collision with root package name */
    private final String f37322a;

    /* renamed from: b  reason: collision with root package name */
    private final String f37323b;

    /* renamed from: c  reason: collision with root package name */
    private final String f37324c;

    /* renamed from: d  reason: collision with root package name */
    private final String f37325d;

    /* renamed from: e  reason: collision with root package name */
    private final String f37326e;

    /* renamed from: f  reason: collision with root package name */
    private final c4.e f37327f;

    public h(String helpButtonText, String title, String prompt, String tips, String buttonText, c4.e side) {
        Intrinsics.checkNotNullParameter(helpButtonText, "helpButtonText");
        Intrinsics.checkNotNullParameter(title, "title");
        Intrinsics.checkNotNullParameter(prompt, "prompt");
        Intrinsics.checkNotNullParameter(tips, "tips");
        Intrinsics.checkNotNullParameter(buttonText, "buttonText");
        Intrinsics.checkNotNullParameter(side, "side");
        this.f37322a = helpButtonText;
        this.f37323b = title;
        this.f37324c = prompt;
        this.f37325d = tips;
        this.f37326e = buttonText;
        this.f37327f = side;
    }

    public final String a() {
        return this.f37326e;
    }

    public final String b() {
        return this.f37322a;
    }

    public final String c() {
        return this.f37324c;
    }

    public final c4.e d() {
        return this.f37327f;
    }

    public final String e() {
        return this.f37325d;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof h)) {
            return false;
        }
        h hVar = (h) obj;
        if (Intrinsics.areEqual(this.f37322a, hVar.f37322a) && Intrinsics.areEqual(this.f37323b, hVar.f37323b) && Intrinsics.areEqual(this.f37324c, hVar.f37324c) && Intrinsics.areEqual(this.f37325d, hVar.f37325d) && Intrinsics.areEqual(this.f37326e, hVar.f37326e) && this.f37327f == hVar.f37327f) {
            return true;
        }
        return false;
    }

    public final String f() {
        return this.f37323b;
    }

    public int hashCode() {
        return (((((((((this.f37322a.hashCode() * 31) + this.f37323b.hashCode()) * 31) + this.f37324c.hashCode()) * 31) + this.f37325d.hashCode()) * 31) + this.f37326e.hashCode()) * 31) + this.f37327f.hashCode();
    }

    public String toString() {
        String str = this.f37322a;
        String str2 = this.f37323b;
        String str3 = this.f37324c;
        String str4 = this.f37325d;
        String str5 = this.f37326e;
        c4.e eVar = this.f37327f;
        return "CaptureTipsViewModel(helpButtonText=" + str + ", title=" + str2 + ", prompt=" + str3 + ", tips=" + str4 + ", buttonText=" + str5 + ", side=" + eVar + ")";
    }
}
