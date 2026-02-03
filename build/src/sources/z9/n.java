package z9;

import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n {

    /* renamed from: e  reason: collision with root package name */
    public static final a f55686e;

    /* renamed from: i  reason: collision with root package name */
    private static final n[] f55687i;

    /* renamed from: o  reason: collision with root package name */
    public static final n f55688o = new n("UNKNOWN", 0, -1);

    /* renamed from: p  reason: collision with root package name */
    public static final n f55689p = new n("VISIBLE", 1, 1);

    /* renamed from: q  reason: collision with root package name */
    public static final n f55690q = new n("INVISIBLE", 2, 2);

    /* renamed from: r  reason: collision with root package name */
    private static final /* synthetic */ n[] f55691r;

    /* renamed from: s  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f55692s;

    /* renamed from: d  reason: collision with root package name */
    private final int f55693d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    static {
        n[] a10 = a();
        f55691r = a10;
        f55692s = sr.a.a(a10);
        f55686e = new a(null);
        f55687i = values();
    }

    private n(String str, int i10, int i11) {
        this.f55693d = i11;
    }

    private static final /* synthetic */ n[] a() {
        return new n[]{f55688o, f55689p, f55690q};
    }

    public static n valueOf(String str) {
        return (n) Enum.valueOf(n.class, str);
    }

    public static n[] values() {
        return (n[]) f55691r.clone();
    }
}
