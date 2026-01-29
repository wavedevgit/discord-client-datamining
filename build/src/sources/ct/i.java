package ct;

import kotlin.Unit;
import kotlin.collections.ArrayDeque;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class i {

    /* renamed from: a  reason: collision with root package name */
    private final ArrayDeque f21353a = new ArrayDeque();

    /* renamed from: b  reason: collision with root package name */
    private int f21354b;

    /* JADX INFO: Access modifiers changed from: protected */
    public final void a(char[] array) {
        int i10;
        Intrinsics.checkNotNullParameter(array, "array");
        synchronized (this) {
            try {
                int length = this.f21354b + array.length;
                i10 = e.f21338a;
                if (length < i10) {
                    this.f21354b += array.length;
                    this.f21353a.addLast(array);
                }
                Unit unit = Unit.f33282a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final char[] b(int i10) {
        char[] cArr;
        synchronized (this) {
            cArr = (char[]) this.f21353a.o();
            if (cArr != null) {
                this.f21354b -= cArr.length;
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
