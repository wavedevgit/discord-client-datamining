package aa;

import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e {

    /* renamed from: e  reason: collision with root package name */
    public static final a f447e;

    /* renamed from: i  reason: collision with root package name */
    private static final e[] f448i;

    /* renamed from: o  reason: collision with root package name */
    public static final e f449o = new e("UNKNOWN", 0, -1);

    /* renamed from: p  reason: collision with root package name */
    public static final e f450p = new e("REQUESTED", 1, 0);

    /* renamed from: q  reason: collision with root package name */
    public static final e f451q = new e("INTERMEDIATE_AVAILABLE", 2, 2);

    /* renamed from: r  reason: collision with root package name */
    public static final e f452r = new e("SUCCESS", 3, 3);

    /* renamed from: s  reason: collision with root package name */
    public static final e f453s = new e("ERROR", 4, 5);

    /* renamed from: t  reason: collision with root package name */
    public static final e f454t = new e("EMPTY_EVENT", 5, 7);

    /* renamed from: u  reason: collision with root package name */
    public static final e f455u = new e("RELEASED", 6, 8);

    /* renamed from: v  reason: collision with root package name */
    private static final /* synthetic */ e[] f456v;

    /* renamed from: w  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f457w;

    /* renamed from: d  reason: collision with root package name */
    private final int f458d;

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
        public static final /* synthetic */ int[] f459a;

        static {
            int[] iArr = new int[e.values().length];
            try {
                iArr[e.f450p.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[e.f452r.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[e.f451q.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[e.f453s.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr[e.f455u.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            f459a = iArr;
        }
    }

    static {
        e[] a10 = a();
        f456v = a10;
        f457w = yr.a.a(a10);
        f447e = new a(null);
        f448i = values();
    }

    private e(String str, int i10, int i11) {
        this.f458d = i11;
    }

    private static final /* synthetic */ e[] a() {
        return new e[]{f449o, f450p, f451q, f452r, f453s, f454t, f455u};
    }

    public static e valueOf(String str) {
        return (e) Enum.valueOf(e.class, str);
    }

    public static e[] values() {
        return (e[]) f456v.clone();
    }

    @Override // java.lang.Enum
    public String toString() {
        int i10 = b.f459a[ordinal()];
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
