package wo;

import kotlin.jvm.internal.Intrinsics;
import to.c4;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h {

    /* renamed from: a  reason: collision with root package name */
    private final String f52958a;

    /* renamed from: b  reason: collision with root package name */
    private final String f52959b;

    /* renamed from: c  reason: collision with root package name */
    private final String f52960c;

    /* renamed from: d  reason: collision with root package name */
    private final String f52961d;

    /* renamed from: e  reason: collision with root package name */
    private final String f52962e;

    /* renamed from: f  reason: collision with root package name */
    private final c4.e f52963f;

    public h(String helpButtonText, String title, String prompt, String tips, String buttonText, c4.e side) {
        Intrinsics.checkNotNullParameter(helpButtonText, "helpButtonText");
        Intrinsics.checkNotNullParameter(title, "title");
        Intrinsics.checkNotNullParameter(prompt, "prompt");
        Intrinsics.checkNotNullParameter(tips, "tips");
        Intrinsics.checkNotNullParameter(buttonText, "buttonText");
        Intrinsics.checkNotNullParameter(side, "side");
        this.f52958a = helpButtonText;
        this.f52959b = title;
        this.f52960c = prompt;
        this.f52961d = tips;
        this.f52962e = buttonText;
        this.f52963f = side;
    }

    public final String a() {
        return this.f52962e;
    }

    public final String b() {
        return this.f52958a;
    }

    public final String c() {
        return this.f52960c;
    }

    public final c4.e d() {
        return this.f52963f;
    }

    public final String e() {
        return this.f52961d;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof h)) {
            return false;
        }
        h hVar = (h) obj;
        if (Intrinsics.areEqual(this.f52958a, hVar.f52958a) && Intrinsics.areEqual(this.f52959b, hVar.f52959b) && Intrinsics.areEqual(this.f52960c, hVar.f52960c) && Intrinsics.areEqual(this.f52961d, hVar.f52961d) && Intrinsics.areEqual(this.f52962e, hVar.f52962e) && this.f52963f == hVar.f52963f) {
            return true;
        }
        return false;
    }

    public final String f() {
        return this.f52959b;
    }

    public int hashCode() {
        return (((((((((this.f52958a.hashCode() * 31) + this.f52959b.hashCode()) * 31) + this.f52960c.hashCode()) * 31) + this.f52961d.hashCode()) * 31) + this.f52962e.hashCode()) * 31) + this.f52963f.hashCode();
    }

    public String toString() {
        String str = this.f52958a;
        String str2 = this.f52959b;
        String str3 = this.f52960c;
        String str4 = this.f52961d;
        String str5 = this.f52962e;
        c4.e eVar = this.f52963f;
        return "CaptureTipsViewModel(helpButtonText=" + str + ", title=" + str2 + ", prompt=" + str3 + ", tips=" + str4 + ", buttonText=" + str5 + ", side=" + eVar + ")";
    }
}
