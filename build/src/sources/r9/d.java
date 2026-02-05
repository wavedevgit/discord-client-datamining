package r9;

import com.facebook.common.references.CloseableReference;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import r9.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d implements a {

    /* renamed from: a  reason: collision with root package name */
    private final int f48616a;

    /* renamed from: b  reason: collision with root package name */
    private final Class f48617b = d.class;

    public d(int i10) {
        this.f48616a = i10;
    }

    @Override // r9.a
    public void a(int i10, int i11, Function0 function0) {
        a.C0620a.d(this, i10, i11, function0);
    }

    @Override // r9.a
    public void b() {
        a.C0620a.c(this);
    }

    @Override // r9.a
    public CloseableReference c(int i10, int i11, int i12) {
        return a.C0620a.b(this, i10, i11, i12);
    }

    @Override // r9.a
    public void d() {
        a.C0620a.a(this);
    }

    @Override // r9.a
    public void e(b bitmapFramePreparer, p9.b bitmapFrameCache, o9.a animationBackend, int i10, Function0 function0) {
        Intrinsics.checkNotNullParameter(bitmapFramePreparer, "bitmapFramePreparer");
        Intrinsics.checkNotNullParameter(bitmapFrameCache, "bitmapFrameCache");
        Intrinsics.checkNotNullParameter(animationBackend, "animationBackend");
        int i11 = this.f48616a;
        int i12 = 1;
        if (1 <= i11) {
            while (true) {
                int a10 = (i10 + i12) % animationBackend.a();
                if (p8.a.w(2)) {
                    p8.a.A(this.f48617b, "Preparing frame %d, last drawn: %d", Integer.valueOf(a10), Integer.valueOf(i10));
                }
                if (bitmapFramePreparer.a(bitmapFrameCache, animationBackend, a10)) {
                    if (i12 == i11) {
                        break;
                    }
                    i12++;
                } else {
                    return;
                }
            }
        }
        if (function0 != null) {
            function0.invoke();
        }
    }
}
