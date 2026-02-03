package as;

import java.util.NoSuchElementException;
import kotlin.collections.m0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b extends m0 {

    /* renamed from: d  reason: collision with root package name */
    private final int f6050d;

    /* renamed from: e  reason: collision with root package name */
    private final int f6051e;

    /* renamed from: i  reason: collision with root package name */
    private boolean f6052i;

    /* renamed from: o  reason: collision with root package name */
    private int f6053o;

    public b(int i10, int i11, int i12) {
        this.f6050d = i12;
        this.f6051e = i11;
        boolean z10 = false;
        if (i12 <= 0 ? i10 >= i11 : i10 <= i11) {
            z10 = true;
        }
        this.f6052i = z10;
        this.f6053o = z10 ? i10 : i11;
    }

    @Override // java.util.Iterator
    public boolean hasNext() {
        return this.f6052i;
    }

    @Override // kotlin.collections.m0
    public int nextInt() {
        int i10 = this.f6053o;
        if (i10 == this.f6051e) {
            if (this.f6052i) {
                this.f6052i = false;
                return i10;
            }
            throw new NoSuchElementException();
        }
        this.f6053o = this.f6050d + i10;
        return i10;
    }
}
