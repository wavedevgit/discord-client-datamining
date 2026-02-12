package up;

import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: d  reason: collision with root package name */
    public static final a f50883d = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private boolean f50884a;

    /* renamed from: b  reason: collision with root package name */
    private b f50885b = b.f50889e;

    /* renamed from: c  reason: collision with root package name */
    private boolean f50886c = true;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: up.c$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public /* synthetic */ class C0700a {

            /* renamed from: a  reason: collision with root package name */
            public static final /* synthetic */ int[] f50887a;

            static {
                int[] iArr = new int[b.values().length];
                try {
                    iArr[b.f50888d.ordinal()] = 1;
                } catch (NoSuchFieldError unused) {
                }
                try {
                    iArr[b.f50889e.ordinal()] = 2;
                } catch (NoSuchFieldError unused2) {
                }
                f50887a = iArr;
            }
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final String a(b bVar) {
            Intrinsics.checkNotNullParameter(bVar, "<this>");
            int i10 = C0700a.f50887a[bVar.ordinal()];
            if (i10 != 1) {
                if (i10 == 2) {
                    return "passed";
                }
                throw new as.p();
            }
            return "failed";
        }

        private a() {
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {

        /* renamed from: d  reason: collision with root package name */
        public static final b f50888d = new b("Failed", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final b f50889e = new b("Passed", 1);

        /* renamed from: i  reason: collision with root package name */
        private static final /* synthetic */ b[] f50890i;

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f50891o;

        static {
            b[] a10 = a();
            f50890i = a10;
            f50891o = hs.a.a(a10);
        }

        private b(String str, int i10) {
        }

        private static final /* synthetic */ b[] a() {
            return new b[]{f50888d, f50889e};
        }

        public static b valueOf(String str) {
            return (b) Enum.valueOf(b.class, str);
        }

        public static b[] values() {
            return (b[]) f50890i.clone();
        }
    }

    /* renamed from: up.c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class C0701c {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f50892a;

        static {
            int[] iArr = new int[b.values().length];
            try {
                iArr[b.f50888d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[b.f50889e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            f50892a = iArr;
        }
    }

    public final b a() {
        return this.f50885b;
    }

    public final boolean b() {
        if (this.f50884a && this.f50886c) {
            return true;
        }
        return false;
    }

    public final boolean c() {
        return this.f50884a;
    }

    public final void d(boolean z10) {
        this.f50884a = z10;
    }

    public final void e(boolean z10) {
        this.f50886c = z10;
    }

    public final void f() {
        b bVar;
        int i10 = C0701c.f50892a[this.f50885b.ordinal()];
        if (i10 != 1) {
            if (i10 == 2) {
                bVar = b.f50888d;
            } else {
                throw new as.p();
            }
        } else {
            bVar = b.f50889e;
        }
        this.f50885b = bVar;
    }
}
