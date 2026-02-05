package ko;

import ho.c4;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h {

    /* renamed from: a  reason: collision with root package name */
    private final String f31977a;

    /* renamed from: b  reason: collision with root package name */
    private final String f31978b;

    /* renamed from: c  reason: collision with root package name */
    private final String f31979c;

    /* renamed from: d  reason: collision with root package name */
    private final String f31980d;

    /* renamed from: e  reason: collision with root package name */
    private final String f31981e;

    /* renamed from: f  reason: collision with root package name */
    private final c4.e f31982f;

    public h(String helpButtonText, String title, String prompt, String tips, String buttonText, c4.e side) {
        Intrinsics.checkNotNullParameter(helpButtonText, "helpButtonText");
        Intrinsics.checkNotNullParameter(title, "title");
        Intrinsics.checkNotNullParameter(prompt, "prompt");
        Intrinsics.checkNotNullParameter(tips, "tips");
        Intrinsics.checkNotNullParameter(buttonText, "buttonText");
        Intrinsics.checkNotNullParameter(side, "side");
        this.f31977a = helpButtonText;
        this.f31978b = title;
        this.f31979c = prompt;
        this.f31980d = tips;
        this.f31981e = buttonText;
        this.f31982f = side;
    }

    public final String a() {
        return this.f31981e;
    }

    public final String b() {
        return this.f31977a;
    }

    public final String c() {
        return this.f31979c;
    }

    public final c4.e d() {
        return this.f31982f;
    }

    public final String e() {
        return this.f31980d;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof h)) {
            return false;
        }
        h hVar = (h) obj;
        if (Intrinsics.areEqual(this.f31977a, hVar.f31977a) && Intrinsics.areEqual(this.f31978b, hVar.f31978b) && Intrinsics.areEqual(this.f31979c, hVar.f31979c) && Intrinsics.areEqual(this.f31980d, hVar.f31980d) && Intrinsics.areEqual(this.f31981e, hVar.f31981e) && this.f31982f == hVar.f31982f) {
            return true;
        }
        return false;
    }

    public final String f() {
        return this.f31978b;
    }

    public int hashCode() {
        return (((((((((this.f31977a.hashCode() * 31) + this.f31978b.hashCode()) * 31) + this.f31979c.hashCode()) * 31) + this.f31980d.hashCode()) * 31) + this.f31981e.hashCode()) * 31) + this.f31982f.hashCode();
    }

    public String toString() {
        String str = this.f31977a;
        String str2 = this.f31978b;
        String str3 = this.f31979c;
        String str4 = this.f31980d;
        String str5 = this.f31981e;
        c4.e eVar = this.f31982f;
        return "CaptureTipsViewModel(helpButtonText=" + str + ", title=" + str2 + ", prompt=" + str3 + ", tips=" + str4 + ", buttonText=" + str5 + ", side=" + eVar + ")";
    }
}
