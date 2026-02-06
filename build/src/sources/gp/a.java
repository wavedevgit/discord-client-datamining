package gp;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: d  reason: collision with root package name */
    public static final a f25428d = new a("NotRequested", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final a f25429e = new a("NotSupported", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final a f25430i = new a("Failed", 2);

    /* renamed from: o  reason: collision with root package name */
    public static final a f25431o = new a("Success", 3);

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ a[] f25432p;

    /* renamed from: q  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f25433q;

    static {
        a[] a10 = a();
        f25432p = a10;
        f25433q = xr.a.a(a10);
    }

    private a(String str, int i10) {
    }

    private static final /* synthetic */ a[] a() {
        return new a[]{f25428d, f25429e, f25430i, f25431o};
    }

    public static a valueOf(String str) {
        return (a) Enum.valueOf(a.class, str);
    }

    public static a[] values() {
        return (a[]) f25432p.clone();
    }
}
