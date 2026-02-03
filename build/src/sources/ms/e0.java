package ms;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class e0 {

    /* renamed from: d  reason: collision with root package name */
    public static final e0 f39155d = new e0("START", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final e0 f39156e = new e0("STOP", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final e0 f39157i = new e0("STOP_AND_RESET_REPLAY_CACHE", 2);

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ e0[] f39158o;

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f39159p;

    static {
        e0[] a10 = a();
        f39158o = a10;
        f39159p = sr.a.a(a10);
    }

    private e0(String str, int i10) {
    }

    private static final /* synthetic */ e0[] a() {
        return new e0[]{f39155d, f39156e, f39157i};
    }

    public static e0 valueOf(String str) {
        return (e0) Enum.valueOf(e0.class, str);
    }

    public static e0[] values() {
        return (e0[]) f39158o.clone();
    }
}
