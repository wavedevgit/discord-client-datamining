package t9;

import com.facebook.common.references.CloseableReference;
import java.io.Closeable;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a implements Closeable {

    /* renamed from: d  reason: collision with root package name */
    private int f50417d;

    /* renamed from: e  reason: collision with root package name */
    private final CloseableReference f50418e;

    public a(int i10, CloseableReference bitmap) {
        Intrinsics.checkNotNullParameter(bitmap, "bitmap");
        this.f50417d = i10;
        this.f50418e = bitmap;
    }

    public final CloseableReference a() {
        return this.f50418e;
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f50418e.close();
    }

    public final int h() {
        return this.f50417d;
    }
}
