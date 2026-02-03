package dq;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class p {

    /* renamed from: d  reason: collision with root package name */
    public static final p f22117d = new p("BASE", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final p f22118e = new p("ACTIVE", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final p f22119i = new p("DISABLED", 2);

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ p[] f22120o;

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f22121p;

    static {
        p[] a10 = a();
        f22120o = a10;
        f22121p = qr.a.a(a10);
    }

    private p(String str, int i10) {
    }

    private static final /* synthetic */ p[] a() {
        return new p[]{f22117d, f22118e, f22119i};
    }

    public static p valueOf(String str) {
        return (p) Enum.valueOf(p.class, str);
    }

    public static p[] values() {
        return (p[]) f22120o.clone();
    }
}
