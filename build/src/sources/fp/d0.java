package fp;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d0 {

    /* renamed from: d  reason: collision with root package name */
    public static final d0 f23255d = new d0("Camera", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final d0 f23256e = new d0("RecordAudio", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final d0 f23257i = new d0("RoughLocation", 2);

    /* renamed from: o  reason: collision with root package name */
    public static final d0 f23258o = new d0("PreciseLocation", 3);

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ d0[] f23259p;

    /* renamed from: q  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f23260q;

    static {
        d0[] a10 = a();
        f23259p = a10;
        f23260q = vr.a.a(a10);
    }

    private d0(String str, int i10) {
    }

    private static final /* synthetic */ d0[] a() {
        return new d0[]{f23255d, f23256e, f23257i, f23258o};
    }

    public static d0 valueOf(String str) {
        return (d0) Enum.valueOf(d0.class, str);
    }

    public static d0[] values() {
        return (d0[]) f23259p.clone();
    }
}
