package qb;

import com.facebook.systrace.TraceListener;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    public static final a f47320a = new a();

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* renamed from: qb.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class EnumC0577a {

        /* renamed from: e  reason: collision with root package name */
        public static final EnumC0577a f47321e = new EnumC0577a("THREAD", 0, 't');

        /* renamed from: i  reason: collision with root package name */
        public static final EnumC0577a f47322i = new EnumC0577a("PROCESS", 1, 'p');

        /* renamed from: o  reason: collision with root package name */
        public static final EnumC0577a f47323o = new EnumC0577a("GLOBAL", 2, 'g');

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ EnumC0577a[] f47324p;

        /* renamed from: q  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f47325q;

        /* renamed from: d  reason: collision with root package name */
        private final char f47326d;

        static {
            EnumC0577a[] a10 = a();
            f47324p = a10;
            f47325q = qr.a.a(a10);
        }

        private EnumC0577a(String str, int i10, char c10) {
            this.f47326d = c10;
        }

        private static final /* synthetic */ EnumC0577a[] a() {
            return new EnumC0577a[]{f47321e, f47322i, f47323o};
        }

        public static EnumC0577a valueOf(String str) {
            return (EnumC0577a) Enum.valueOf(EnumC0577a.class, str);
        }

        public static EnumC0577a[] values() {
            return (EnumC0577a[]) f47324p.clone();
        }
    }

    private a() {
    }

    public static final void a(long j10, String sectionName, int i10) {
        Intrinsics.checkNotNullParameter(sectionName, "sectionName");
        c4.a.a(sectionName, i10);
    }

    public static final void b(long j10, String sectionName, int i10, long j11) {
        Intrinsics.checkNotNullParameter(sectionName, "sectionName");
        a(j10, sectionName, i10);
    }

    public static final void c(long j10, String sectionName) {
        Intrinsics.checkNotNullParameter(sectionName, "sectionName");
        c4.a.c(sectionName);
    }

    public static final void d(long j10, String sectionName, String[] args, int i10) {
        Intrinsics.checkNotNullParameter(sectionName, "sectionName");
        Intrinsics.checkNotNullParameter(args, "args");
        String e10 = f47320a.e(args, i10);
        c4.a.c(sectionName + "|" + e10);
    }

    private final String e(String[] strArr, int i10) {
        StringBuilder sb2 = new StringBuilder();
        for (int i11 = 1; i11 < i10; i11 += 2) {
            String str = strArr[i11 - 1];
            String str2 = strArr[i11];
            sb2.append(str);
            sb2.append('=');
            sb2.append(str2);
            if (i11 < i10 - 1) {
                sb2.append(';');
            }
        }
        String sb3 = sb2.toString();
        Intrinsics.checkNotNullExpressionValue(sb3, "toString(...)");
        return sb3;
    }

    public static final void f(long j10, String sectionName, int i10) {
        Intrinsics.checkNotNullParameter(sectionName, "sectionName");
        g(j10, sectionName, i10);
    }

    public static final void g(long j10, String sectionName, int i10) {
        Intrinsics.checkNotNullParameter(sectionName, "sectionName");
        c4.a.d(sectionName, i10);
    }

    public static final void h(long j10, String sectionName, int i10, long j11) {
        Intrinsics.checkNotNullParameter(sectionName, "sectionName");
        g(j10, sectionName, i10);
    }

    public static final void i(long j10) {
        c4.a.f();
    }

    public static final boolean j(long j10) {
        return false;
    }

    public static final void l(long j10, String sectionName, int i10) {
        Intrinsics.checkNotNullParameter(sectionName, "sectionName");
        a(j10, sectionName, i10);
    }

    public static final void m(long j10, String counterName, int i10) {
        Intrinsics.checkNotNullParameter(counterName, "counterName");
        c4.a.j(counterName, i10);
    }

    public static final void o(long j10, String sectionName, Runnable block) {
        Intrinsics.checkNotNullParameter(sectionName, "sectionName");
        Intrinsics.checkNotNullParameter(block, "block");
        c(j10, sectionName);
        try {
            block.run();
        } finally {
            i(j10);
        }
    }

    public static final void k(TraceListener traceListener) {
    }

    public static final void p(TraceListener traceListener) {
    }

    public static final void n(long j10, String str, EnumC0577a enumC0577a) {
    }
}
