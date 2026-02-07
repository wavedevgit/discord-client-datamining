package rs;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class e0 {

    /* renamed from: d  reason: collision with root package name */
    public static final e0 f49301d = new e0("START", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final e0 f49302e = new e0("STOP", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final e0 f49303i = new e0("STOP_AND_RESET_REPLAY_CACHE", 2);

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ e0[] f49304o;

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f49305p;

    static {
        e0[] a10 = a();
        f49304o = a10;
        f49305p = xr.a.a(a10);
    }

    private e0(String str, int i10) {
    }

    private static final /* synthetic */ e0[] a() {
        return new e0[]{f49301d, f49302e, f49303i};
    }

    public static e0 valueOf(String str) {
        return (e0) Enum.valueOf(e0.class, str);
    }

    public static e0[] values() {
        return (e0[]) f49304o.clone();
    }
}
