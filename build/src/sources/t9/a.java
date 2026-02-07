package t9;

import com.facebook.common.references.CloseableReference;
import java.io.Closeable;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a implements Closeable {

    /* renamed from: d  reason: collision with root package name */
    private int f50441d;

    /* renamed from: e  reason: collision with root package name */
    private final CloseableReference f50442e;

    public a(int i10, CloseableReference bitmap) {
        Intrinsics.checkNotNullParameter(bitmap, "bitmap");
        this.f50441d = i10;
        this.f50442e = bitmap;
    }

    public final CloseableReference a() {
        return this.f50442e;
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f50442e.close();
    }

    public final int g() {
        return this.f50441d;
    }
}
