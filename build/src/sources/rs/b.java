package rs;

import java.util.NoSuchElementException;
import kotlin.collections.m0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b extends m0 {

    /* renamed from: d  reason: collision with root package name */
    private final int f47744d;

    /* renamed from: e  reason: collision with root package name */
    private final int f47745e;

    /* renamed from: i  reason: collision with root package name */
    private boolean f47746i;

    /* renamed from: o  reason: collision with root package name */
    private int f47747o;

    public b(int i10, int i11, int i12) {
        this.f47744d = i12;
        this.f47745e = i11;
        boolean z10 = false;
        if (i12 <= 0 ? i10 >= i11 : i10 <= i11) {
            z10 = true;
        }
        this.f47746i = z10;
        this.f47747o = z10 ? i10 : i11;
    }

    @Override // java.util.Iterator
    public boolean hasNext() {
        return this.f47746i;
    }

    @Override // kotlin.collections.m0
    public int nextInt() {
        int i10 = this.f47747o;
        if (i10 == this.f47745e) {
            if (this.f47746i) {
                this.f47746i = false;
                return i10;
            }
            throw new NoSuchElementException();
        }
        this.f47747o = this.f47744d + i10;
        return i10;
    }
}
