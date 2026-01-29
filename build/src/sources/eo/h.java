package eo;

import ao.c4;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h {

    /* renamed from: a  reason: collision with root package name */
    private final String f22999a;

    /* renamed from: b  reason: collision with root package name */
    private final String f23000b;

    /* renamed from: c  reason: collision with root package name */
    private final String f23001c;

    /* renamed from: d  reason: collision with root package name */
    private final String f23002d;

    /* renamed from: e  reason: collision with root package name */
    private final String f23003e;

    /* renamed from: f  reason: collision with root package name */
    private final c4.e f23004f;

    public h(String helpButtonText, String title, String prompt, String tips, String buttonText, c4.e side) {
        Intrinsics.checkNotNullParameter(helpButtonText, "helpButtonText");
        Intrinsics.checkNotNullParameter(title, "title");
        Intrinsics.checkNotNullParameter(prompt, "prompt");
        Intrinsics.checkNotNullParameter(tips, "tips");
        Intrinsics.checkNotNullParameter(buttonText, "buttonText");
        Intrinsics.checkNotNullParameter(side, "side");
        this.f22999a = helpButtonText;
        this.f23000b = title;
        this.f23001c = prompt;
        this.f23002d = tips;
        this.f23003e = buttonText;
        this.f23004f = side;
    }

    public final String a() {
        return this.f23003e;
    }

    public final String b() {
        return this.f22999a;
    }

    public final String c() {
        return this.f23001c;
    }

    public final c4.e d() {
        return this.f23004f;
    }

    public final String e() {
        return this.f23002d;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof h)) {
            return false;
        }
        h hVar = (h) obj;
        if (Intrinsics.areEqual(this.f22999a, hVar.f22999a) && Intrinsics.areEqual(this.f23000b, hVar.f23000b) && Intrinsics.areEqual(this.f23001c, hVar.f23001c) && Intrinsics.areEqual(this.f23002d, hVar.f23002d) && Intrinsics.areEqual(this.f23003e, hVar.f23003e) && this.f23004f == hVar.f23004f) {
            return true;
        }
        return false;
    }

    public final String f() {
        return this.f23000b;
    }

    public int hashCode() {
        return (((((((((this.f22999a.hashCode() * 31) + this.f23000b.hashCode()) * 31) + this.f23001c.hashCode()) * 31) + this.f23002d.hashCode()) * 31) + this.f23003e.hashCode()) * 31) + this.f23004f.hashCode();
    }

    public String toString() {
        String str = this.f22999a;
        String str2 = this.f23000b;
        String str3 = this.f23001c;
        String str4 = this.f23002d;
        String str5 = this.f23003e;
        c4.e eVar = this.f23004f;
        return "CaptureTipsViewModel(helpButtonText=" + str + ", title=" + str2 + ", prompt=" + str3 + ", tips=" + str4 + ", buttonText=" + str5 + ", side=" + eVar + ")";
    }
}
