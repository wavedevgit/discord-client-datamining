package androidx.activity;

import android.content.res.Resources;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b0 {

    /* renamed from: e  reason: collision with root package name */
    public static final a f1285e = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final int f1286a;

    /* renamed from: b  reason: collision with root package name */
    private final int f1287b;

    /* renamed from: c  reason: collision with root package name */
    private final int f1288c;

    /* renamed from: d  reason: collision with root package name */
    private final Function1 f1289d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: androidx.activity.b0$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class C0012a extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final C0012a f1290d = new C0012a();

            C0012a() {
                super(1);
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public final Boolean invoke(Resources resources) {
                boolean z10;
                Intrinsics.checkNotNullParameter(resources, "resources");
                if ((resources.getConfiguration().uiMode & 48) == 32) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                return Boolean.valueOf(z10);
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class b extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final b f1291d = new b();

            b() {
                super(1);
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public final Boolean invoke(Resources resources) {
                Intrinsics.checkNotNullParameter(resources, "<anonymous parameter 0>");
                return Boolean.TRUE;
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class c extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final c f1292d = new c();

            c() {
                super(1);
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public final Boolean invoke(Resources resources) {
                Intrinsics.checkNotNullParameter(resources, "<anonymous parameter 0>");
                return Boolean.FALSE;
            }
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public static /* synthetic */ b0 b(a aVar, int i10, int i11, Function1 function1, int i12, Object obj) {
            if ((i12 & 4) != 0) {
                function1 = C0012a.f1290d;
            }
            return aVar.a(i10, i11, function1);
        }

        public final b0 a(int i10, int i11, Function1 detectDarkMode) {
            Intrinsics.checkNotNullParameter(detectDarkMode, "detectDarkMode");
            return new b0(i10, i11, 0, detectDarkMode, null);
        }

        public final b0 c(int i10) {
            return new b0(i10, i10, 2, b.f1291d, null);
        }

        public final b0 d(int i10, int i11) {
            return new b0(i10, i11, 1, c.f1292d, null);
        }

        private a() {
        }
    }

    public /* synthetic */ b0(int i10, int i11, int i12, Function1 function1, DefaultConstructorMarker defaultConstructorMarker) {
        this(i10, i11, i12, function1);
    }

    public static final b0 a(int i10) {
        return f1285e.c(i10);
    }

    public static final b0 g(int i10, int i11) {
        return f1285e.d(i10, i11);
    }

    public final int b() {
        return this.f1287b;
    }

    public final Function1 c() {
        return this.f1289d;
    }

    public final int d() {
        return this.f1288c;
    }

    public final int e(boolean z10) {
        if (z10) {
            return this.f1287b;
        }
        return this.f1286a;
    }

    public final int f(boolean z10) {
        if (this.f1288c == 0) {
            return 0;
        }
        if (z10) {
            return this.f1287b;
        }
        return this.f1286a;
    }

    private b0(int i10, int i11, int i12, Function1 function1) {
        this.f1286a = i10;
        this.f1287b = i11;
        this.f1288c = i12;
        this.f1289d = function1;
    }
}
