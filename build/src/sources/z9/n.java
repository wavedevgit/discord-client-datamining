package z9;

import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n {

    /* renamed from: e  reason: collision with root package name */
    public static final a f56003e;

    /* renamed from: i  reason: collision with root package name */
    private static final n[] f56004i;

    /* renamed from: o  reason: collision with root package name */
    public static final n f56005o = new n("UNKNOWN", 0, -1);

    /* renamed from: p  reason: collision with root package name */
    public static final n f56006p = new n("VISIBLE", 1, 1);

    /* renamed from: q  reason: collision with root package name */
    public static final n f56007q = new n("INVISIBLE", 2, 2);

    /* renamed from: r  reason: collision with root package name */
    private static final /* synthetic */ n[] f56008r;

    /* renamed from: s  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f56009s;

    /* renamed from: d  reason: collision with root package name */
    private final int f56010d;

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
        f56008r = a10;
        f56009s = xr.a.a(a10);
        f56003e = new a(null);
        f56004i = values();
    }

    private n(String str, int i10, int i11) {
        this.f56010d = i11;
    }

    private static final /* synthetic */ n[] a() {
        return new n[]{f56005o, f56006p, f56007q};
    }

    public static n valueOf(String str) {
        return (n) Enum.valueOf(n.class, str);
    }

    public static n[] values() {
        return (n[]) f56008r.clone();
    }
}
