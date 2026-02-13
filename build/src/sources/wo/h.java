package wo;

import kotlin.jvm.internal.Intrinsics;
import to.c4;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h {

    /* renamed from: a  reason: collision with root package name */
    private final String f53526a;

    /* renamed from: b  reason: collision with root package name */
    private final String f53527b;

    /* renamed from: c  reason: collision with root package name */
    private final String f53528c;

    /* renamed from: d  reason: collision with root package name */
    private final String f53529d;

    /* renamed from: e  reason: collision with root package name */
    private final String f53530e;

    /* renamed from: f  reason: collision with root package name */
    private final c4.e f53531f;

    public h(String helpButtonText, String title, String prompt, String tips, String buttonText, c4.e side) {
        Intrinsics.checkNotNullParameter(helpButtonText, "helpButtonText");
        Intrinsics.checkNotNullParameter(title, "title");
        Intrinsics.checkNotNullParameter(prompt, "prompt");
        Intrinsics.checkNotNullParameter(tips, "tips");
        Intrinsics.checkNotNullParameter(buttonText, "buttonText");
        Intrinsics.checkNotNullParameter(side, "side");
        this.f53526a = helpButtonText;
        this.f53527b = title;
        this.f53528c = prompt;
        this.f53529d = tips;
        this.f53530e = buttonText;
        this.f53531f = side;
    }

    public final String a() {
        return this.f53530e;
    }

    public final String b() {
        return this.f53526a;
    }

    public final String c() {
        return this.f53528c;
    }

    public final c4.e d() {
        return this.f53531f;
    }

    public final String e() {
        return this.f53529d;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof h)) {
            return false;
        }
        h hVar = (h) obj;
        if (Intrinsics.areEqual(this.f53526a, hVar.f53526a) && Intrinsics.areEqual(this.f53527b, hVar.f53527b) && Intrinsics.areEqual(this.f53528c, hVar.f53528c) && Intrinsics.areEqual(this.f53529d, hVar.f53529d) && Intrinsics.areEqual(this.f53530e, hVar.f53530e) && this.f53531f == hVar.f53531f) {
            return true;
        }
        return false;
    }

    public final String f() {
        return this.f53527b;
    }

    public int hashCode() {
        return (((((((((this.f53526a.hashCode() * 31) + this.f53527b.hashCode()) * 31) + this.f53528c.hashCode()) * 31) + this.f53529d.hashCode()) * 31) + this.f53530e.hashCode()) * 31) + this.f53531f.hashCode();
    }

    public String toString() {
        String str = this.f53526a;
        String str2 = this.f53527b;
        String str3 = this.f53528c;
        String str4 = this.f53529d;
        String str5 = this.f53530e;
        c4.e eVar = this.f53531f;
        return "CaptureTipsViewModel(helpButtonText=" + str + ", title=" + str2 + ", prompt=" + str3 + ", tips=" + str4 + ", buttonText=" + str5 + ", side=" + eVar + ")";
    }
}
