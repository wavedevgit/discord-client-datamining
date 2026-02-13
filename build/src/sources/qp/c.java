package qp;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: d  reason: collision with root package name */
    public static final c f46106d = new c("Dg1", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final c f46107e = new c("Dg2", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final c f46108i = new c("Dg14", 2);

    /* renamed from: o  reason: collision with root package name */
    public static final c f46109o = new c("Sod", 3);

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ c[] f46110p;

    /* renamed from: q  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f46111q;

    static {
        c[] a10 = a();
        f46110p = a10;
        f46111q = hs.a.a(a10);
    }

    private c(String str, int i10) {
    }

    private static final /* synthetic */ c[] a() {
        return new c[]{f46106d, f46107e, f46108i, f46109o};
    }

    public static c valueOf(String str) {
        return (c) Enum.valueOf(c.class, str);
    }

    public static c[] values() {
        return (c[]) f46110p.clone();
    }
}
