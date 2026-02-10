package vt;

import kotlin.Unit;
import kotlin.collections.ArrayDeque;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class i {

    /* renamed from: a  reason: collision with root package name */
    private final ArrayDeque f51902a = new ArrayDeque();

    /* renamed from: b  reason: collision with root package name */
    private int f51903b;

    /* JADX INFO: Access modifiers changed from: protected */
    public final void a(char[] array) {
        int i10;
        Intrinsics.checkNotNullParameter(array, "array");
        synchronized (this) {
            try {
                int length = this.f51903b + array.length;
                i10 = e.f51887a;
                if (length < i10) {
                    this.f51903b += array.length;
                    this.f51902a.addLast(array);
                }
                Unit unit = Unit.f31987a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final char[] b(int i10) {
        char[] cArr;
        synchronized (this) {
            cArr = (char[]) this.f51902a.q();
            if (cArr != null) {
                this.f51903b -= cArr.length;
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
