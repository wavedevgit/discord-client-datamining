package up;

import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: d  reason: collision with root package name */
    public static final a f51451d = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private boolean f51452a;

    /* renamed from: b  reason: collision with root package name */
    private b f51453b = b.f51457e;

    /* renamed from: c  reason: collision with root package name */
    private boolean f51454c = true;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: up.c$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public /* synthetic */ class C0700a {

            /* renamed from: a  reason: collision with root package name */
            public static final /* synthetic */ int[] f51455a;

            static {
                int[] iArr = new int[b.values().length];
                try {
                    iArr[b.f51456d.ordinal()] = 1;
                } catch (NoSuchFieldError unused) {
                }
                try {
                    iArr[b.f51457e.ordinal()] = 2;
                } catch (NoSuchFieldError unused2) {
                }
                f51455a = iArr;
            }
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final String a(b bVar) {
            Intrinsics.checkNotNullParameter(bVar, "<this>");
            int i10 = C0700a.f51455a[bVar.ordinal()];
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
        public static final b f51456d = new b("Failed", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final b f51457e = new b("Passed", 1);

        /* renamed from: i  reason: collision with root package name */
        private static final /* synthetic */ b[] f51458i;

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f51459o;

        static {
            b[] a10 = a();
            f51458i = a10;
            f51459o = hs.a.a(a10);
        }

        private b(String str, int i10) {
        }

        private static final /* synthetic */ b[] a() {
            return new b[]{f51456d, f51457e};
        }

        public static b valueOf(String str) {
            return (b) Enum.valueOf(b.class, str);
        }

        public static b[] values() {
            return (b[]) f51458i.clone();
        }
    }

    /* renamed from: up.c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class C0701c {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f51460a;

        static {
            int[] iArr = new int[b.values().length];
            try {
                iArr[b.f51456d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[b.f51457e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            f51460a = iArr;
        }
    }

    public final b a() {
        return this.f51453b;
    }

    public final boolean b() {
        if (this.f51452a && this.f51454c) {
            return true;
        }
        return false;
    }

    public final boolean c() {
        return this.f51452a;
    }

    public final void d(boolean z10) {
        this.f51452a = z10;
    }

    public final void e(boolean z10) {
        this.f51454c = z10;
    }

    public final void f() {
        b bVar;
        int i10 = C0701c.f51460a[this.f51453b.ordinal()];
        if (i10 != 1) {
            if (i10 == 2) {
                bVar = b.f51456d;
            } else {
                throw new as.p();
            }
        } else {
            bVar = b.f51457e;
        }
        this.f51453b = bVar;
    }
}
