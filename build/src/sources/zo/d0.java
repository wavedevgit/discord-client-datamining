package zo;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d0 {

    /* renamed from: d  reason: collision with root package name */
    public static final d0 f55909d = new d0("Camera", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final d0 f55910e = new d0("RecordAudio", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final d0 f55911i = new d0("RoughLocation", 2);

    /* renamed from: o  reason: collision with root package name */
    public static final d0 f55912o = new d0("PreciseLocation", 3);

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ d0[] f55913p;

    /* renamed from: q  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f55914q;

    static {
        d0[] a10 = a();
        f55913p = a10;
        f55914q = pr.a.a(a10);
    }

    private d0(String str, int i10) {
    }

    private static final /* synthetic */ d0[] a() {
        return new d0[]{f55909d, f55910e, f55911i, f55912o};
    }

    public static d0 valueOf(String str) {
        return (d0) Enum.valueOf(d0.class, str);
    }

    public static d0[] values() {
        return (d0[]) f55913p.clone();
    }
}
