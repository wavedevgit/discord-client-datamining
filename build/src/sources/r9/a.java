package r9;

import com.facebook.common.references.CloseableReference;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface a {
    void a(int i10, int i11, Function0 function0);

    void b();

    CloseableReference c(int i10, int i11, int i12);

    void d();

    void e(b bVar, p9.b bVar2, o9.a aVar, int i10, Function0 function0);

    /* renamed from: r9.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0595a {
        public static CloseableReference b(a aVar, int i10, int i11, int i12) {
            return null;
        }

        public static void e(a aVar, b bitmapFramePreparer, p9.b bitmapFrameCache, o9.a animationBackend, int i10, Function0 function0) {
            Intrinsics.checkNotNullParameter(bitmapFramePreparer, "bitmapFramePreparer");
            Intrinsics.checkNotNullParameter(bitmapFrameCache, "bitmapFrameCache");
            Intrinsics.checkNotNullParameter(animationBackend, "animationBackend");
        }

        public static /* synthetic */ void f(a aVar, b bVar, p9.b bVar2, o9.a aVar2, int i10, Function0 function0, int i11, Object obj) {
            if (obj == null) {
                if ((i11 & 16) != 0) {
                    function0 = null;
                }
                aVar.e(bVar, bVar2, aVar2, i10, function0);
                return;
            }
            throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: prepareFrames");
        }

        public static void a(a aVar) {
        }

        public static void c(a aVar) {
        }

        public static void d(a aVar, int i10, int i11, Function0 function0) {
        }
    }
}
