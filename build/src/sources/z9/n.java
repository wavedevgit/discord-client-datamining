package z9;

import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n {

    /* renamed from: e  reason: collision with root package name */
    public static final a f56051e;

    /* renamed from: i  reason: collision with root package name */
    private static final n[] f56052i;

    /* renamed from: o  reason: collision with root package name */
    public static final n f56053o = new n("UNKNOWN", 0, -1);

    /* renamed from: p  reason: collision with root package name */
    public static final n f56054p = new n("VISIBLE", 1, 1);

    /* renamed from: q  reason: collision with root package name */
    public static final n f56055q = new n("INVISIBLE", 2, 2);

    /* renamed from: r  reason: collision with root package name */
    private static final /* synthetic */ n[] f56056r;

    /* renamed from: s  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f56057s;

    /* renamed from: d  reason: collision with root package name */
    private final int f56058d;

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
        f56056r = a10;
        f56057s = xr.a.a(a10);
        f56051e = new a(null);
        f56052i = values();
    }

    private n(String str, int i10, int i11) {
        this.f56058d = i11;
    }

    private static final /* synthetic */ n[] a() {
        return new n[]{f56053o, f56054p, f56055q};
    }

    public static n valueOf(String str) {
        return (n) Enum.valueOf(n.class, str);
    }

    public static n[] values() {
        return (n[]) f56056r.clone();
    }
}
