package jr;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d {

    /* renamed from: d  reason: collision with root package name */
    public static final d f32159d = new d("WARNING", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final d f32160e = new d("ERROR", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final d f32161i = new d("HIDDEN", 2);

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ d[] f32162o;

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f32163p;

    static {
        d[] a10 = a();
        f32162o = a10;
        f32163p = qr.a.a(a10);
    }

    private d(String str, int i10) {
    }

    private static final /* synthetic */ d[] a() {
        return new d[]{f32159d, f32160e, f32161i};
    }

    public static d valueOf(String str) {
        return (d) Enum.valueOf(d.class, str);
    }

    public static d[] values() {
        return (d[]) f32162o.clone();
    }
}
