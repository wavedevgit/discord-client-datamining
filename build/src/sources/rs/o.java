package rs;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class o {

    /* renamed from: d  reason: collision with root package name */
    public static final o f49104d = new o("SUCCESSFUL", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final o f49105e = new o("REREGISTER", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final o f49106i = new o("CANCELLED", 2);

    /* renamed from: o  reason: collision with root package name */
    public static final o f49107o = new o("ALREADY_SELECTED", 3);

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ o[] f49108p;

    /* renamed from: q  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f49109q;

    static {
        o[] a10 = a();
        f49108p = a10;
        f49109q = sr.a.a(a10);
    }

    private o(String str, int i10) {
    }

    private static final /* synthetic */ o[] a() {
        return new o[]{f49104d, f49105e, f49106i, f49107o};
    }

    public static o valueOf(String str) {
        return (o) Enum.valueOf(o.class, str);
    }

    public static o[] values() {
        return (o[]) f49108p.clone();
    }
}
