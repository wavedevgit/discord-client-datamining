package ms;

import kotlin.coroutines.Continuation;
import kotlin.enums.EnumEntries;
import kotlin.jvm.functions.Function2;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class c0 {

    /* renamed from: d  reason: collision with root package name */
    public static final c0 f38909d = new c0("DEFAULT", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final c0 f38910e = new c0("LAZY", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final c0 f38911i = new c0("ATOMIC", 2);

    /* renamed from: o  reason: collision with root package name */
    public static final c0 f38912o = new c0("UNDISPATCHED", 3);

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ c0[] f38913p;

    /* renamed from: q  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f38914q;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f38915a;

        static {
            int[] iArr = new int[c0.values().length];
            try {
                iArr[c0.f38909d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[c0.f38911i.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[c0.f38912o.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[c0.f38910e.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            f38915a = iArr;
        }
    }

    static {
        c0[] a10 = a();
        f38913p = a10;
        f38914q = vr.a.a(a10);
    }

    private c0(String str, int i10) {
    }

    private static final /* synthetic */ c0[] a() {
        return new c0[]{f38909d, f38910e, f38911i, f38912o};
    }

    public static c0 valueOf(String str) {
        return (c0) Enum.valueOf(c0.class, str);
    }

    public static c0[] values() {
        return (c0[]) f38913p.clone();
    }

    public final void d(Function2 function2, Object obj, Continuation continuation) {
        int i10 = a.f38915a[ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    if (i10 == 4) {
                        return;
                    }
                    throw new or.p();
                }
                ss.b.c(function2, obj, continuation);
                return;
            }
            tr.b.a(function2, obj, continuation);
            return;
        }
        ss.a.c(function2, obj, continuation);
    }

    public final boolean e() {
        if (this == f38910e) {
            return true;
        }
        return false;
    }
}
