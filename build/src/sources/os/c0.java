package os;

import kotlin.coroutines.Continuation;
import kotlin.enums.EnumEntries;
import kotlin.jvm.functions.Function2;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class c0 {

    /* renamed from: d  reason: collision with root package name */
    public static final c0 f43491d = new c0("DEFAULT", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final c0 f43492e = new c0("LAZY", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final c0 f43493i = new c0("ATOMIC", 2);

    /* renamed from: o  reason: collision with root package name */
    public static final c0 f43494o = new c0("UNDISPATCHED", 3);

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ c0[] f43495p;

    /* renamed from: q  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f43496q;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f43497a;

        static {
            int[] iArr = new int[c0.values().length];
            try {
                iArr[c0.f43491d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[c0.f43493i.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[c0.f43494o.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[c0.f43492e.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            f43497a = iArr;
        }
    }

    static {
        c0[] a10 = a();
        f43495p = a10;
        f43496q = xr.a.a(a10);
    }

    private c0(String str, int i10) {
    }

    private static final /* synthetic */ c0[] a() {
        return new c0[]{f43491d, f43492e, f43493i, f43494o};
    }

    public static c0 valueOf(String str) {
        return (c0) Enum.valueOf(c0.class, str);
    }

    public static c0[] values() {
        return (c0[]) f43495p.clone();
    }

    public final void d(Function2 function2, Object obj, Continuation continuation) {
        int i10 = a.f43497a[ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    if (i10 == 4) {
                        return;
                    }
                    throw new qr.p();
                }
                us.b.c(function2, obj, continuation);
                return;
            }
            vr.b.a(function2, obj, continuation);
            return;
        }
        us.a.c(function2, obj, continuation);
    }

    public final boolean e() {
        if (this == f43492e) {
            return true;
        }
        return false;
    }
}
