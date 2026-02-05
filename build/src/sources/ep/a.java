package ep;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: d  reason: collision with root package name */
    public static final a f21673d = new a("NotRequested", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final a f21674e = new a("NotSupported", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final a f21675i = new a("Failed", 2);

    /* renamed from: o  reason: collision with root package name */
    public static final a f21676o = new a("Success", 3);

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ a[] f21677p;

    /* renamed from: q  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f21678q;

    static {
        a[] a10 = a();
        f21677p = a10;
        f21678q = vr.a.a(a10);
    }

    private a(String str, int i10) {
    }

    private static final /* synthetic */ a[] a() {
        return new a[]{f21673d, f21674e, f21675i, f21676o};
    }

    public static a valueOf(String str) {
        return (a) Enum.valueOf(a.class, str);
    }

    public static a[] values() {
        return (a[]) f21677p.clone();
    }
}
