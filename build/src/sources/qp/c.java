package qp;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: d  reason: collision with root package name */
    public static final c f45538d = new c("Dg1", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final c f45539e = new c("Dg2", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final c f45540i = new c("Dg14", 2);

    /* renamed from: o  reason: collision with root package name */
    public static final c f45541o = new c("Sod", 3);

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ c[] f45542p;

    /* renamed from: q  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f45543q;

    static {
        c[] a10 = a();
        f45542p = a10;
        f45543q = hs.a.a(a10);
    }

    private c(String str, int i10) {
    }

    private static final /* synthetic */ c[] a() {
        return new c[]{f45538d, f45539e, f45540i, f45541o};
    }

    public static c valueOf(String str) {
        return (c) Enum.valueOf(c.class, str);
    }

    public static c[] values() {
        return (c[]) f45542p.clone();
    }
}
