package androidx.activity;

import android.content.res.Resources;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b0 {

    /* renamed from: e  reason: collision with root package name */
    public static final a f956e = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final int f957a;

    /* renamed from: b  reason: collision with root package name */
    private final int f958b;

    /* renamed from: c  reason: collision with root package name */
    private final int f959c;

    /* renamed from: d  reason: collision with root package name */
    private final Function1 f960d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: androidx.activity.b0$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class C0014a extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final C0014a f961d = new C0014a();

            C0014a() {
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
            public static final b f962d = new b();

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
            public static final c f963d = new c();

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
                function1 = C0014a.f961d;
            }
            return aVar.a(i10, i11, function1);
        }

        public final b0 a(int i10, int i11, Function1 detectDarkMode) {
            Intrinsics.checkNotNullParameter(detectDarkMode, "detectDarkMode");
            return new b0(i10, i11, 0, detectDarkMode, null);
        }

        public final b0 c(int i10) {
            return new b0(i10, i10, 2, b.f962d, null);
        }

        public final b0 d(int i10, int i11) {
            return new b0(i10, i11, 1, c.f963d, null);
        }

        private a() {
        }
    }

    public /* synthetic */ b0(int i10, int i11, int i12, Function1 function1, DefaultConstructorMarker defaultConstructorMarker) {
        this(i10, i11, i12, function1);
    }

    public static final b0 a(int i10) {
        return f956e.c(i10);
    }

    public static final b0 g(int i10, int i11) {
        return f956e.d(i10, i11);
    }

    public final int b() {
        return this.f958b;
    }

    public final Function1 c() {
        return this.f960d;
    }

    public final int d() {
        return this.f959c;
    }

    public final int e(boolean z10) {
        if (z10) {
            return this.f958b;
        }
        return this.f957a;
    }

    public final int f(boolean z10) {
        if (this.f959c == 0) {
            return 0;
        }
        if (z10) {
            return this.f958b;
        }
        return this.f957a;
    }

    private b0(int i10, int i11, int i12, Function1 function1) {
        this.f957a = i10;
        this.f958b = i11;
        this.f959c = i12;
        this.f960d = function1;
    }
}
