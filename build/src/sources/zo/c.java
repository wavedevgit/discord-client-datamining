package zo;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: d  reason: collision with root package name */
    public static final c f55942d = new c("Dg1", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final c f55943e = new c("Dg2", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final c f55944i = new c("Dg14", 2);

    /* renamed from: o  reason: collision with root package name */
    public static final c f55945o = new c("Sod", 3);

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ c[] f55946p;

    /* renamed from: q  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f55947q;

    static {
        c[] a10 = a();
        f55946p = a10;
        f55947q = qr.a.a(a10);
    }

    private c(String str, int i10) {
    }

    private static final /* synthetic */ c[] a() {
        return new c[]{f55942d, f55943e, f55944i, f55945o};
    }

    public static c valueOf(String str) {
        return (c) Enum.valueOf(c.class, str);
    }

    public static c[] values() {
        return (c[]) f55946p.clone();
    }
}
