package ft;

import kotlin.Unit;
import kotlin.collections.ArrayDeque;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class i {

    /* renamed from: a  reason: collision with root package name */
    private final ArrayDeque f24730a = new ArrayDeque();

    /* renamed from: b  reason: collision with root package name */
    private int f24731b;

    /* JADX INFO: Access modifiers changed from: protected */
    public final void a(char[] array) {
        Intrinsics.checkNotNullParameter(array, "array");
        synchronized (this) {
            try {
                if (this.f24731b + array.length < e.f24715a) {
                    this.f24731b += array.length;
                    this.f24730a.addLast(array);
                }
                Unit unit = Unit.f32464a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final char[] b(int i10) {
        char[] cArr;
        synchronized (this) {
            cArr = (char[]) this.f24730a.o();
            if (cArr != null) {
                this.f24731b -= cArr.length;
            } else {
                cArr = null;
            }
        }
        if (cArr == null) {
            return new char[i10];
        }
        return cArr;
    }
}
