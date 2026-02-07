package z9;

import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e {

    /* renamed from: e  reason: collision with root package name */
    public static final a f55979e;

    /* renamed from: i  reason: collision with root package name */
    private static final e[] f55980i;

    /* renamed from: o  reason: collision with root package name */
    public static final e f55981o = new e("UNKNOWN", 0, -1);

    /* renamed from: p  reason: collision with root package name */
    public static final e f55982p = new e("REQUESTED", 1, 0);

    /* renamed from: q  reason: collision with root package name */
    public static final e f55983q = new e("INTERMEDIATE_AVAILABLE", 2, 2);

    /* renamed from: r  reason: collision with root package name */
    public static final e f55984r = new e("SUCCESS", 3, 3);

    /* renamed from: s  reason: collision with root package name */
    public static final e f55985s = new e("ERROR", 4, 5);

    /* renamed from: t  reason: collision with root package name */
    public static final e f55986t = new e("EMPTY_EVENT", 5, 7);

    /* renamed from: u  reason: collision with root package name */
    public static final e f55987u = new e("RELEASED", 6, 8);

    /* renamed from: v  reason: collision with root package name */
    private static final /* synthetic */ e[] f55988v;

    /* renamed from: w  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f55989w;

    /* renamed from: d  reason: collision with root package name */
    private final int f55990d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public /* synthetic */ class b {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f55991a;

        static {
            int[] iArr = new int[e.values().length];
            try {
                iArr[e.f55982p.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[e.f55984r.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[e.f55983q.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[e.f55985s.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr[e.f55987u.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            f55991a = iArr;
        }
    }

    static {
        e[] a10 = a();
        f55988v = a10;
        f55989w = xr.a.a(a10);
        f55979e = new a(null);
        f55980i = values();
    }

    private e(String str, int i10, int i11) {
        this.f55990d = i11;
    }

    private static final /* synthetic */ e[] a() {
        return new e[]{f55981o, f55982p, f55983q, f55984r, f55985s, f55986t, f55987u};
    }

    public static e valueOf(String str) {
        return (e) Enum.valueOf(e.class, str);
    }

    public static e[] values() {
        return (e[]) f55988v.clone();
    }

    @Override // java.lang.Enum
    public String toString() {
        int i10 = b.f55991a[ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    if (i10 != 4) {
                        if (i10 != 5) {
                            return "unknown";
                        }
                        return "released";
                    }
                    return "error";
                }
                return "intermediate_available";
            }
            return "success";
        }
        return "requested";
    }
}
