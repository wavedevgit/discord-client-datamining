package rs;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g {

    /* renamed from: d  reason: collision with root package name */
    public static final g f48485d = new g("AM", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final g f48486e = new g("PM", 1);

    /* renamed from: i  reason: collision with root package name */
    private static final /* synthetic */ g[] f48487i;

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f48488o;

    static {
        g[] a10 = a();
        f48487i = a10;
        f48488o = pr.a.a(a10);
    }

    private g(String str, int i10) {
    }

    private static final /* synthetic */ g[] a() {
        return new g[]{f48485d, f48486e};
    }

    public static g valueOf(String str) {
        return (g) Enum.valueOf(g.class, str);
    }

    public static g[] values() {
        return (g[]) f48487i.clone();
    }
}
