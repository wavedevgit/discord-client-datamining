package cb;

import java.io.InputStream;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class i {

    /* renamed from: a  reason: collision with root package name */
    public static final i f7027a = new i();

    /* renamed from: b  reason: collision with root package name */
    private static final Class f7028b = i.class;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private boolean f7029a;

        /* renamed from: b  reason: collision with root package name */
        private int f7030b;

        /* renamed from: c  reason: collision with root package name */
        private int f7031c;

        public final int a() {
            return this.f7030b;
        }

        public final int b() {
            return this.f7031c;
        }

        public final boolean c() {
            return this.f7029a;
        }

        public final void d(int i10) {
            this.f7030b = i10;
        }

        public final void e(int i10) {
            this.f7031c = i10;
        }

        public final void f(boolean z10) {
            this.f7029a = z10;
        }
    }

    private i() {
    }

    public static final int a(int i10) {
        if (i10 == 0 || i10 == 1) {
            return 0;
        }
        if (i10 != 3) {
            if (i10 != 6) {
                if (i10 != 8) {
                    return 0;
                }
                return 270;
            }
            return 90;
        }
        return 180;
    }

    private final int b(InputStream inputStream, int i10, boolean z10) {
        if (i10 < 10 || h.a(inputStream, 2, z10) != 3 || h.a(inputStream, 4, z10) != 1) {
            return 0;
        }
        return h.a(inputStream, 2, z10);
    }

    private final int c(InputStream inputStream, int i10, boolean z10, int i11) {
        if (i10 < 14) {
            return 0;
        }
        int a10 = h.a(inputStream, 2, z10);
        int i12 = i10 - 2;
        while (true) {
            int i13 = a10 - 1;
            if (a10 <= 0 || i12 < 12) {
                break;
            }
            int i14 = i12 - 2;
            if (h.a(inputStream, 2, z10) == i11) {
                return i14;
            }
            inputStream.skip(10L);
            i12 -= 12;
            a10 = i13;
        }
        return 0;
    }

    public static final int d(InputStream stream, int i10) {
        Intrinsics.checkNotNullParameter(stream, "stream");
        a aVar = new a();
        i iVar = f7027a;
        int e10 = iVar.e(stream, i10, aVar);
        int b10 = aVar.b() - 8;
        if (e10 != 0 && b10 <= e10) {
            stream.skip(b10);
            return iVar.b(stream, iVar.c(stream, e10 - b10, aVar.c(), 274), aVar.c());
        }
        return 0;
    }

    private final int e(InputStream inputStream, int i10, a aVar) {
        boolean z10;
        if (i10 <= 8) {
            return 0;
        }
        aVar.d(h.a(inputStream, 4, false));
        if (aVar.a() != 1229531648 && aVar.a() != 1296891946) {
            p8.a.i(f7028b, "Invalid TIFF header");
            return 0;
        }
        if (aVar.a() == 1229531648) {
            z10 = true;
        } else {
            z10 = false;
        }
        aVar.f(z10);
        aVar.e(h.a(inputStream, 4, aVar.c()));
        int i11 = i10 - 8;
        if (aVar.b() >= 8 && aVar.b() - 8 <= i11) {
            return i11;
        }
        p8.a.i(f7028b, "Invalid offset");
        return 0;
    }
}
