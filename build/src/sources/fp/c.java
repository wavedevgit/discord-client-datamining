package fp;

import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: d  reason: collision with root package name */
    public static final a f24327d = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private boolean f24328a;

    /* renamed from: b  reason: collision with root package name */
    private b f24329b = b.f24333e;

    /* renamed from: c  reason: collision with root package name */
    private boolean f24330c = true;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: fp.c$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public /* synthetic */ class C0322a {

            /* renamed from: a  reason: collision with root package name */
            public static final /* synthetic */ int[] f24331a;

            static {
                int[] iArr = new int[b.values().length];
                try {
                    iArr[b.f24332d.ordinal()] = 1;
                } catch (NoSuchFieldError unused) {
                }
                try {
                    iArr[b.f24333e.ordinal()] = 2;
                } catch (NoSuchFieldError unused2) {
                }
                f24331a = iArr;
            }
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final String a(b bVar) {
            Intrinsics.checkNotNullParameter(bVar, "<this>");
            int i10 = C0322a.f24331a[bVar.ordinal()];
            if (i10 != 1) {
                if (i10 == 2) {
                    return "passed";
                }
                throw new lr.p();
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
        public static final b f24332d = new b("Failed", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final b f24333e = new b("Passed", 1);

        /* renamed from: i  reason: collision with root package name */
        private static final /* synthetic */ b[] f24334i;

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f24335o;

        static {
            b[] a10 = a();
            f24334i = a10;
            f24335o = sr.a.a(a10);
        }

        private b(String str, int i10) {
        }

        private static final /* synthetic */ b[] a() {
            return new b[]{f24332d, f24333e};
        }

        public static b valueOf(String str) {
            return (b) Enum.valueOf(b.class, str);
        }

        public static b[] values() {
            return (b[]) f24334i.clone();
        }
    }

    /* renamed from: fp.c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class C0323c {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f24336a;

        static {
            int[] iArr = new int[b.values().length];
            try {
                iArr[b.f24332d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[b.f24333e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            f24336a = iArr;
        }
    }

    public final b a() {
        return this.f24329b;
    }

    public final boolean b() {
        if (this.f24328a && this.f24330c) {
            return true;
        }
        return false;
    }

    public final boolean c() {
        return this.f24328a;
    }

    public final void d(boolean z10) {
        this.f24328a = z10;
    }

    public final void e(boolean z10) {
        this.f24330c = z10;
    }

    public final void f() {
        b bVar;
        int i10 = C0323c.f24336a[this.f24329b.ordinal()];
        if (i10 != 1) {
            if (i10 == 2) {
                bVar = b.f24332d;
            } else {
                throw new lr.p();
            }
        } else {
            bVar = b.f24333e;
        }
        this.f24329b = bVar;
    }
}
