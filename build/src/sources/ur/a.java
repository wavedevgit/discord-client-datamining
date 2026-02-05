package ur;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: d  reason: collision with root package name */
    public static final a f51654d = new a("COROUTINE_SUSPENDED", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final a f51655e = new a("UNDECIDED", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final a f51656i = new a("RESUMED", 2);

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ a[] f51657o;

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f51658p;

    static {
        a[] a10 = a();
        f51657o = a10;
        f51658p = vr.a.a(a10);
    }

    private a(String str, int i10) {
    }

    private static final /* synthetic */ a[] a() {
        return new a[]{f51654d, f51655e, f51656i};
    }

    public static a valueOf(String str) {
        return (a) Enum.valueOf(a.class, str);
    }

    public static a[] values() {
        return (a[]) f51657o.clone();
    }
}
