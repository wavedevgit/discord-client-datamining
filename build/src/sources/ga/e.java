package ga;

import as.l;
import as.o;
import ga.c;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;
import kotlin.Lazy;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import p8.n;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e {

    /* renamed from: e  reason: collision with root package name */
    public static final a f25401e = new a(null);

    /* renamed from: f  reason: collision with root package name */
    private static final Lazy f25402f = l.a(o.f6081d, new Function0() { // from class: ga.d
        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            e f10;
            f10 = e.f();
            return f10;
        }
    });

    /* renamed from: a  reason: collision with root package name */
    private int f25403a;

    /* renamed from: b  reason: collision with root package name */
    private List f25404b;

    /* renamed from: c  reason: collision with root package name */
    private final ga.a f25405c = new ga.a();

    /* renamed from: d  reason: collision with root package name */
    private boolean f25406d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final int e(int i10, InputStream inputStream, byte[] bArr) {
            if (bArr.length >= i10) {
                if (inputStream.markSupported()) {
                    try {
                        inputStream.mark(i10);
                        return p8.a.b(inputStream, bArr, 0, i10);
                    } finally {
                        inputStream.reset();
                    }
                }
                return p8.a.b(inputStream, bArr, 0, i10);
            }
            throw new IllegalStateException("Check failed.");
        }

        public final c b(InputStream is2) {
            Intrinsics.checkNotNullParameter(is2, "is");
            return d().c(is2);
        }

        public final c c(InputStream is2) {
            Intrinsics.checkNotNullParameter(is2, "is");
            try {
                return b(is2);
            } catch (IOException e10) {
                throw n.a(e10);
            }
        }

        public final e d() {
            return (e) e.f25402f.getValue();
        }

        private a() {
        }
    }

    private e() {
        h();
    }

    public static final c d(InputStream inputStream) {
        return f25401e.c(inputStream);
    }

    public static final e e() {
        return f25401e.d();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final e f() {
        return new e();
    }

    private final void h() {
        this.f25403a = this.f25405c.b();
        List<c.b> list = this.f25404b;
        if (list != null) {
            Intrinsics.checkNotNull(list);
            for (c.b bVar : list) {
                this.f25403a = Math.max(this.f25403a, bVar.b());
            }
        }
    }

    public final c c(InputStream is2) {
        Intrinsics.checkNotNullParameter(is2, "is");
        int i10 = this.f25403a;
        byte[] bArr = new byte[i10];
        int e10 = f25401e.e(i10, is2, bArr);
        c a10 = this.f25405c.a(bArr, e10);
        if (Intrinsics.areEqual(a10, b.f25394n) && !this.f25406d) {
            a10 = c.f25398d;
        }
        if (a10 != c.f25398d) {
            return a10;
        }
        List<c.b> list = this.f25404b;
        if (list != null) {
            for (c.b bVar : list) {
                c a11 = bVar.a(bArr, e10);
                if (a11 != c.f25398d) {
                    return a11;
                }
            }
        }
        return c.f25398d;
    }

    public final e g(boolean z10) {
        this.f25406d = z10;
        return this;
    }
}
