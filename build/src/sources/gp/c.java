package gp;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: d  reason: collision with root package name */
    public static final c f25437d = new c("Dg1", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final c f25438e = new c("Dg2", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final c f25439i = new c("Dg14", 2);

    /* renamed from: o  reason: collision with root package name */
    public static final c f25440o = new c("Sod", 3);

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ c[] f25441p;

    /* renamed from: q  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f25442q;

    static {
        c[] a10 = a();
        f25441p = a10;
        f25442q = xr.a.a(a10);
    }

    private c(String str, int i10) {
    }

    private static final /* synthetic */ c[] a() {
        return new c[]{f25437d, f25438e, f25439i, f25440o};
    }

    public static c valueOf(String str) {
        return (c) Enum.valueOf(c.class, str);
    }

    public static c[] values() {
        return (c[]) f25441p.clone();
    }
}
