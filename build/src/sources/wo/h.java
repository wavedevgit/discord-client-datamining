package wo;

import kotlin.jvm.internal.Intrinsics;
import to.c4;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h {

    /* renamed from: a  reason: collision with root package name */
    private final String f52957a;

    /* renamed from: b  reason: collision with root package name */
    private final String f52958b;

    /* renamed from: c  reason: collision with root package name */
    private final String f52959c;

    /* renamed from: d  reason: collision with root package name */
    private final String f52960d;

    /* renamed from: e  reason: collision with root package name */
    private final String f52961e;

    /* renamed from: f  reason: collision with root package name */
    private final c4.e f52962f;

    public h(String helpButtonText, String title, String prompt, String tips, String buttonText, c4.e side) {
        Intrinsics.checkNotNullParameter(helpButtonText, "helpButtonText");
        Intrinsics.checkNotNullParameter(title, "title");
        Intrinsics.checkNotNullParameter(prompt, "prompt");
        Intrinsics.checkNotNullParameter(tips, "tips");
        Intrinsics.checkNotNullParameter(buttonText, "buttonText");
        Intrinsics.checkNotNullParameter(side, "side");
        this.f52957a = helpButtonText;
        this.f52958b = title;
        this.f52959c = prompt;
        this.f52960d = tips;
        this.f52961e = buttonText;
        this.f52962f = side;
    }

    public final String a() {
        return this.f52961e;
    }

    public final String b() {
        return this.f52957a;
    }

    public final String c() {
        return this.f52959c;
    }

    public final c4.e d() {
        return this.f52962f;
    }

    public final String e() {
        return this.f52960d;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof h)) {
            return false;
        }
        h hVar = (h) obj;
        if (Intrinsics.areEqual(this.f52957a, hVar.f52957a) && Intrinsics.areEqual(this.f52958b, hVar.f52958b) && Intrinsics.areEqual(this.f52959c, hVar.f52959c) && Intrinsics.areEqual(this.f52960d, hVar.f52960d) && Intrinsics.areEqual(this.f52961e, hVar.f52961e) && this.f52962f == hVar.f52962f) {
            return true;
        }
        return false;
    }

    public final String f() {
        return this.f52958b;
    }

    public int hashCode() {
        return (((((((((this.f52957a.hashCode() * 31) + this.f52958b.hashCode()) * 31) + this.f52959c.hashCode()) * 31) + this.f52960d.hashCode()) * 31) + this.f52961e.hashCode()) * 31) + this.f52962f.hashCode();
    }

    public String toString() {
        String str = this.f52957a;
        String str2 = this.f52958b;
        String str3 = this.f52959c;
        String str4 = this.f52960d;
        String str5 = this.f52961e;
        c4.e eVar = this.f52962f;
        return "CaptureTipsViewModel(helpButtonText=" + str + ", title=" + str2 + ", prompt=" + str3 + ", tips=" + str4 + ", buttonText=" + str5 + ", side=" + eVar + ")";
    }
}
