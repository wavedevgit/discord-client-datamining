package mo;

import jo.c4;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h {

    /* renamed from: a  reason: collision with root package name */
    private final String f37274a;

    /* renamed from: b  reason: collision with root package name */
    private final String f37275b;

    /* renamed from: c  reason: collision with root package name */
    private final String f37276c;

    /* renamed from: d  reason: collision with root package name */
    private final String f37277d;

    /* renamed from: e  reason: collision with root package name */
    private final String f37278e;

    /* renamed from: f  reason: collision with root package name */
    private final c4.e f37279f;

    public h(String helpButtonText, String title, String prompt, String tips, String buttonText, c4.e side) {
        Intrinsics.checkNotNullParameter(helpButtonText, "helpButtonText");
        Intrinsics.checkNotNullParameter(title, "title");
        Intrinsics.checkNotNullParameter(prompt, "prompt");
        Intrinsics.checkNotNullParameter(tips, "tips");
        Intrinsics.checkNotNullParameter(buttonText, "buttonText");
        Intrinsics.checkNotNullParameter(side, "side");
        this.f37274a = helpButtonText;
        this.f37275b = title;
        this.f37276c = prompt;
        this.f37277d = tips;
        this.f37278e = buttonText;
        this.f37279f = side;
    }

    public final String a() {
        return this.f37278e;
    }

    public final String b() {
        return this.f37274a;
    }

    public final String c() {
        return this.f37276c;
    }

    public final c4.e d() {
        return this.f37279f;
    }

    public final String e() {
        return this.f37277d;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof h)) {
            return false;
        }
        h hVar = (h) obj;
        if (Intrinsics.areEqual(this.f37274a, hVar.f37274a) && Intrinsics.areEqual(this.f37275b, hVar.f37275b) && Intrinsics.areEqual(this.f37276c, hVar.f37276c) && Intrinsics.areEqual(this.f37277d, hVar.f37277d) && Intrinsics.areEqual(this.f37278e, hVar.f37278e) && this.f37279f == hVar.f37279f) {
            return true;
        }
        return false;
    }

    public final String f() {
        return this.f37275b;
    }

    public int hashCode() {
        return (((((((((this.f37274a.hashCode() * 31) + this.f37275b.hashCode()) * 31) + this.f37276c.hashCode()) * 31) + this.f37277d.hashCode()) * 31) + this.f37278e.hashCode()) * 31) + this.f37279f.hashCode();
    }

    public String toString() {
        String str = this.f37274a;
        String str2 = this.f37275b;
        String str3 = this.f37276c;
        String str4 = this.f37277d;
        String str5 = this.f37278e;
        c4.e eVar = this.f37279f;
        return "CaptureTipsViewModel(helpButtonText=" + str + ", title=" + str2 + ", prompt=" + str3 + ", tips=" + str4 + ", buttonText=" + str5 + ", side=" + eVar + ")";
    }
}
