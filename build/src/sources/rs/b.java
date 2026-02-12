package rs;

import java.util.NoSuchElementException;
import kotlin.collections.m0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b extends m0 {

    /* renamed from: d  reason: collision with root package name */
    private final int f47745d;

    /* renamed from: e  reason: collision with root package name */
    private final int f47746e;

    /* renamed from: i  reason: collision with root package name */
    private boolean f47747i;

    /* renamed from: o  reason: collision with root package name */
    private int f47748o;

    public b(int i10, int i11, int i12) {
        this.f47745d = i12;
        this.f47746e = i11;
        boolean z10 = false;
        if (i12 <= 0 ? i10 >= i11 : i10 <= i11) {
            z10 = true;
        }
        this.f47747i = z10;
        this.f47748o = z10 ? i10 : i11;
    }

    @Override // java.util.Iterator
    public boolean hasNext() {
        return this.f47747i;
    }

    @Override // kotlin.collections.m0
    public int nextInt() {
        int i10 = this.f47748o;
        if (i10 == this.f47746e) {
            if (this.f47747i) {
                this.f47747i = false;
                return i10;
            }
            throw new NoSuchElementException();
        }
        this.f47748o = this.f47745d + i10;
        return i10;
    }
}
