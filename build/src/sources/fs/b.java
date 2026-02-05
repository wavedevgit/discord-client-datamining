package fs;

import java.util.NoSuchElementException;
import kotlin.collections.m0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b extends m0 {

    /* renamed from: d  reason: collision with root package name */
    private final int f23455d;

    /* renamed from: e  reason: collision with root package name */
    private final int f23456e;

    /* renamed from: i  reason: collision with root package name */
    private boolean f23457i;

    /* renamed from: o  reason: collision with root package name */
    private int f23458o;

    public b(int i10, int i11, int i12) {
        this.f23455d = i12;
        this.f23456e = i11;
        boolean z10 = false;
        if (i12 <= 0 ? i10 >= i11 : i10 <= i11) {
            z10 = true;
        }
        this.f23457i = z10;
        this.f23458o = z10 ? i10 : i11;
    }

    @Override // java.util.Iterator
    public boolean hasNext() {
        return this.f23457i;
    }

    @Override // kotlin.collections.m0
    public int nextInt() {
        int i10 = this.f23458o;
        if (i10 == this.f23456e) {
            if (this.f23457i) {
                this.f23457i = false;
                return i10;
            }
            throw new NoSuchElementException();
        }
        this.f23458o = this.f23455d + i10;
        return i10;
    }
}
