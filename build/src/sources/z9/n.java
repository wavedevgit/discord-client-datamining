package z9;

import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n {

    /* renamed from: e  reason: collision with root package name */
    public static final a f55272e;

    /* renamed from: i  reason: collision with root package name */
    private static final n[] f55273i;

    /* renamed from: o  reason: collision with root package name */
    public static final n f55274o = new n("UNKNOWN", 0, -1);

    /* renamed from: p  reason: collision with root package name */
    public static final n f55275p = new n("VISIBLE", 1, 1);

    /* renamed from: q  reason: collision with root package name */
    public static final n f55276q = new n("INVISIBLE", 2, 2);

    /* renamed from: r  reason: collision with root package name */
    private static final /* synthetic */ n[] f55277r;

    /* renamed from: s  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f55278s;

    /* renamed from: d  reason: collision with root package name */
    private final int f55279d;

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
        f55277r = a10;
        f55278s = vr.a.a(a10);
        f55272e = new a(null);
        f55273i = values();
    }

    private n(String str, int i10, int i11) {
        this.f55279d = i11;
    }

    private static final /* synthetic */ n[] a() {
        return new n[]{f55274o, f55275p, f55276q};
    }

    public static n valueOf(String str) {
        return (n) Enum.valueOf(n.class, str);
    }

    public static n[] values() {
        return (n[]) f55277r.clone();
    }
}
