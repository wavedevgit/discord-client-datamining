package hp;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: d  reason: collision with root package name */
    public static final a f26387d = new a("NotRequested", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final a f26388e = new a("NotSupported", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final a f26389i = new a("Failed", 2);

    /* renamed from: o  reason: collision with root package name */
    public static final a f26390o = new a("Success", 3);

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ a[] f26391p;

    /* renamed from: q  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f26392q;

    static {
        a[] a10 = a();
        f26391p = a10;
        f26392q = yr.a.a(a10);
    }

    private a(String str, int i10) {
    }

    private static final /* synthetic */ a[] a() {
        return new a[]{f26387d, f26388e, f26389i, f26390o};
    }

    public static a valueOf(String str) {
        return (a) Enum.valueOf(a.class, str);
    }

    public static a[] values() {
        return (a[]) f26391p.clone();
    }
}
