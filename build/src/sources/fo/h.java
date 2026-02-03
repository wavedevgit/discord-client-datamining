package fo;

import bo.c4;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h {

    /* renamed from: a  reason: collision with root package name */
    private final String f24530a;

    /* renamed from: b  reason: collision with root package name */
    private final String f24531b;

    /* renamed from: c  reason: collision with root package name */
    private final String f24532c;

    /* renamed from: d  reason: collision with root package name */
    private final String f24533d;

    /* renamed from: e  reason: collision with root package name */
    private final String f24534e;

    /* renamed from: f  reason: collision with root package name */
    private final c4.e f24535f;

    public h(String helpButtonText, String title, String prompt, String tips, String buttonText, c4.e side) {
        Intrinsics.checkNotNullParameter(helpButtonText, "helpButtonText");
        Intrinsics.checkNotNullParameter(title, "title");
        Intrinsics.checkNotNullParameter(prompt, "prompt");
        Intrinsics.checkNotNullParameter(tips, "tips");
        Intrinsics.checkNotNullParameter(buttonText, "buttonText");
        Intrinsics.checkNotNullParameter(side, "side");
        this.f24530a = helpButtonText;
        this.f24531b = title;
        this.f24532c = prompt;
        this.f24533d = tips;
        this.f24534e = buttonText;
        this.f24535f = side;
    }

    public final String a() {
        return this.f24534e;
    }

    public final String b() {
        return this.f24530a;
    }

    public final String c() {
        return this.f24532c;
    }

    public final c4.e d() {
        return this.f24535f;
    }

    public final String e() {
        return this.f24533d;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof h)) {
            return false;
        }
        h hVar = (h) obj;
        if (Intrinsics.areEqual(this.f24530a, hVar.f24530a) && Intrinsics.areEqual(this.f24531b, hVar.f24531b) && Intrinsics.areEqual(this.f24532c, hVar.f24532c) && Intrinsics.areEqual(this.f24533d, hVar.f24533d) && Intrinsics.areEqual(this.f24534e, hVar.f24534e) && this.f24535f == hVar.f24535f) {
            return true;
        }
        return false;
    }

    public final String f() {
        return this.f24531b;
    }

    public int hashCode() {
        return (((((((((this.f24530a.hashCode() * 31) + this.f24531b.hashCode()) * 31) + this.f24532c.hashCode()) * 31) + this.f24533d.hashCode()) * 31) + this.f24534e.hashCode()) * 31) + this.f24535f.hashCode();
    }

    public String toString() {
        String str = this.f24530a;
        String str2 = this.f24531b;
        String str3 = this.f24532c;
        String str4 = this.f24533d;
        String str5 = this.f24534e;
        c4.e eVar = this.f24535f;
        return "CaptureTipsViewModel(helpButtonText=" + str + ", title=" + str2 + ", prompt=" + str3 + ", tips=" + str4 + ", buttonText=" + str5 + ", side=" + eVar + ")";
    }
}
