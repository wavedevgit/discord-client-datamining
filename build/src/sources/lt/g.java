package lt;

import kotlin.Unit;
import kotlin.collections.ArrayDeque;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class g {

    /* renamed from: a  reason: collision with root package name */
    private final ArrayDeque f36659a = new ArrayDeque();

    /* renamed from: b  reason: collision with root package name */
    private int f36660b;

    /* JADX INFO: Access modifiers changed from: protected */
    public final void a(byte[] array) {
        Intrinsics.checkNotNullParameter(array, "array");
        synchronized (this) {
            try {
                if (this.f36660b + array.length < e.a()) {
                    this.f36660b += array.length / 2;
                    this.f36659a.addLast(array);
                }
                Unit unit = Unit.f32008a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final byte[] b(int i10) {
        byte[] bArr;
        synchronized (this) {
            bArr = (byte[]) this.f36659a.q();
            if (bArr != null) {
                this.f36660b -= bArr.length / 2;
            } else {
                bArr = null;
            }
        }
        if (bArr == null) {
            return new byte[i10];
        }
        return bArr;
    }
}
