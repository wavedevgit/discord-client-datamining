package ho;

import eo.c4;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h {

    /* renamed from: a  reason: collision with root package name */
    private final String f27125a;

    /* renamed from: b  reason: collision with root package name */
    private final String f27126b;

    /* renamed from: c  reason: collision with root package name */
    private final String f27127c;

    /* renamed from: d  reason: collision with root package name */
    private final String f27128d;

    /* renamed from: e  reason: collision with root package name */
    private final String f27129e;

    /* renamed from: f  reason: collision with root package name */
    private final c4.e f27130f;

    public h(String helpButtonText, String title, String prompt, String tips, String buttonText, c4.e side) {
        Intrinsics.checkNotNullParameter(helpButtonText, "helpButtonText");
        Intrinsics.checkNotNullParameter(title, "title");
        Intrinsics.checkNotNullParameter(prompt, "prompt");
        Intrinsics.checkNotNullParameter(tips, "tips");
        Intrinsics.checkNotNullParameter(buttonText, "buttonText");
        Intrinsics.checkNotNullParameter(side, "side");
        this.f27125a = helpButtonText;
        this.f27126b = title;
        this.f27127c = prompt;
        this.f27128d = tips;
        this.f27129e = buttonText;
        this.f27130f = side;
    }

    public final String a() {
        return this.f27129e;
    }

    public final String b() {
        return this.f27125a;
    }

    public final String c() {
        return this.f27127c;
    }

    public final c4.e d() {
        return this.f27130f;
    }

    public final String e() {
        return this.f27128d;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof h)) {
            return false;
        }
        h hVar = (h) obj;
        if (Intrinsics.areEqual(this.f27125a, hVar.f27125a) && Intrinsics.areEqual(this.f27126b, hVar.f27126b) && Intrinsics.areEqual(this.f27127c, hVar.f27127c) && Intrinsics.areEqual(this.f27128d, hVar.f27128d) && Intrinsics.areEqual(this.f27129e, hVar.f27129e) && this.f27130f == hVar.f27130f) {
            return true;
        }
        return false;
    }

    public final String f() {
        return this.f27126b;
    }

    public int hashCode() {
        return (((((((((this.f27125a.hashCode() * 31) + this.f27126b.hashCode()) * 31) + this.f27127c.hashCode()) * 31) + this.f27128d.hashCode()) * 31) + this.f27129e.hashCode()) * 31) + this.f27130f.hashCode();
    }

    public String toString() {
        String str = this.f27125a;
        String str2 = this.f27126b;
        String str3 = this.f27127c;
        String str4 = this.f27128d;
        String str5 = this.f27129e;
        c4.e eVar = this.f27130f;
        return "CaptureTipsViewModel(helpButtonText=" + str + ", title=" + str2 + ", prompt=" + str3 + ", tips=" + str4 + ", buttonText=" + str5 + ", side=" + eVar + ")";
    }
}
