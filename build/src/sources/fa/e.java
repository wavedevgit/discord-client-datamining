package fa;

import fa.c;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;
import kotlin.Lazy;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import o8.n;
import qr.l;
import qr.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e {

    /* renamed from: e  reason: collision with root package name */
    public static final a f23016e = new a(null);

    /* renamed from: f  reason: collision with root package name */
    private static final Lazy f23017f = l.b(o.f48091d, new Function0() { // from class: fa.d
        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            e f10;
            f10 = e.f();
            return f10;
        }
    });

    /* renamed from: a  reason: collision with root package name */
    private int f23018a;

    /* renamed from: b  reason: collision with root package name */
    private List f23019b;

    /* renamed from: c  reason: collision with root package name */
    private final fa.a f23020c = new fa.a();

    /* renamed from: d  reason: collision with root package name */
    private boolean f23021d;

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
                        return o8.a.b(inputStream, bArr, 0, i10);
                    } finally {
                        inputStream.reset();
                    }
                }
                return o8.a.b(inputStream, bArr, 0, i10);
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
            return (e) e.f23017f.getValue();
        }

        private a() {
        }
    }

    private e() {
        h();
    }

    public static final c d(InputStream inputStream) {
        return f23016e.c(inputStream);
    }

    public static final e e() {
        return f23016e.d();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final e f() {
        return new e();
    }

    private final void h() {
        this.f23018a = this.f23020c.b();
        List<c.b> list = this.f23019b;
        if (list != null) {
            Intrinsics.checkNotNull(list);
            for (c.b bVar : list) {
                this.f23018a = Math.max(this.f23018a, bVar.b());
            }
        }
    }

    public final c c(InputStream is2) {
        Intrinsics.checkNotNullParameter(is2, "is");
        int i10 = this.f23018a;
        byte[] bArr = new byte[i10];
        int e10 = f23016e.e(i10, is2, bArr);
        c a10 = this.f23020c.a(bArr, e10);
        if (Intrinsics.areEqual(a10, b.f23009n) && !this.f23021d) {
            a10 = c.f23013d;
        }
        if (a10 != c.f23013d) {
            return a10;
        }
        List<c.b> list = this.f23019b;
        if (list != null) {
            for (c.b bVar : list) {
                c a11 = bVar.a(bArr, e10);
                if (a11 != c.f23013d) {
                    return a11;
                }
            }
        }
        return c.f23013d;
    }

    public final e g(boolean z10) {
        this.f23021d = z10;
        return this;
    }
}
