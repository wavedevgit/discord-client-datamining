package mt;

import kotlin.Unit;
import kotlin.collections.ArrayDeque;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class g {

    /* renamed from: a  reason: collision with root package name */
    private final ArrayDeque f37537a = new ArrayDeque();

    /* renamed from: b  reason: collision with root package name */
    private int f37538b;

    /* JADX INFO: Access modifiers changed from: protected */
    public final void a(byte[] array) {
        Intrinsics.checkNotNullParameter(array, "array");
        synchronized (this) {
            try {
                if (this.f37538b + array.length < e.a()) {
                    this.f37538b += array.length / 2;
                    this.f37537a.addLast(array);
                }
                Unit unit = Unit.f31765a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final byte[] b(int i10) {
        byte[] bArr;
        synchronized (this) {
            bArr = (byte[]) this.f37537a.q();
            if (bArr != null) {
                this.f37538b -= bArr.length / 2;
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
