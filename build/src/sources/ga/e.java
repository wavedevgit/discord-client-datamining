package ga;

import ga.c;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;
import kotlin.Lazy;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import p8.n;
import rr.l;
import rr.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e {

    /* renamed from: e  reason: collision with root package name */
    public static final a f24101e = new a(null);

    /* renamed from: f  reason: collision with root package name */
    private static final Lazy f24102f = l.b(o.f49209d, new Function0() { // from class: ga.d
        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            e f10;
            f10 = e.f();
            return f10;
        }
    });

    /* renamed from: a  reason: collision with root package name */
    private int f24103a;

    /* renamed from: b  reason: collision with root package name */
    private List f24104b;

    /* renamed from: c  reason: collision with root package name */
    private final ga.a f24105c = new ga.a();

    /* renamed from: d  reason: collision with root package name */
    private boolean f24106d;

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
            return (e) e.f24102f.getValue();
        }

        private a() {
        }
    }

    private e() {
        h();
    }

    public static final c d(InputStream inputStream) {
        return f24101e.c(inputStream);
    }

    public static final e e() {
        return f24101e.d();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final e f() {
        return new e();
    }

    private final void h() {
        this.f24103a = this.f24105c.b();
        List<c.b> list = this.f24104b;
        if (list != null) {
            Intrinsics.checkNotNull(list);
            for (c.b bVar : list) {
                this.f24103a = Math.max(this.f24103a, bVar.b());
            }
        }
    }

    public final c c(InputStream is2) {
        Intrinsics.checkNotNullParameter(is2, "is");
        int i10 = this.f24103a;
        byte[] bArr = new byte[i10];
        int e10 = f24101e.e(i10, is2, bArr);
        c a10 = this.f24105c.a(bArr, e10);
        if (Intrinsics.areEqual(a10, b.f24094n) && !this.f24106d) {
            a10 = c.f24098d;
        }
        if (a10 != c.f24098d) {
            return a10;
        }
        List<c.b> list = this.f24104b;
        if (list != null) {
            for (c.b bVar : list) {
                c a11 = bVar.a(bArr, e10);
                if (a11 != c.f24098d) {
                    return a11;
                }
            }
        }
        return c.f24098d;
    }

    public final e g(boolean z10) {
        this.f24106d = z10;
        return this;
    }
}
