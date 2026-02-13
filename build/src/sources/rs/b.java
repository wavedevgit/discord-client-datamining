package rs;

import java.util.NoSuchElementException;
import kotlin.collections.m0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b extends m0 {

    /* renamed from: d  reason: collision with root package name */
    private final int f48313d;

    /* renamed from: e  reason: collision with root package name */
    private final int f48314e;

    /* renamed from: i  reason: collision with root package name */
    private boolean f48315i;

    /* renamed from: o  reason: collision with root package name */
    private int f48316o;

    public b(int i10, int i11, int i12) {
        this.f48313d = i12;
        this.f48314e = i11;
        boolean z10 = false;
        if (i12 <= 0 ? i10 >= i11 : i10 <= i11) {
            z10 = true;
        }
        this.f48315i = z10;
        this.f48316o = z10 ? i10 : i11;
    }

    @Override // java.util.Iterator
    public boolean hasNext() {
        return this.f48315i;
    }

    @Override // kotlin.collections.m0
    public int nextInt() {
        int i10 = this.f48316o;
        if (i10 == this.f48314e) {
            if (this.f48315i) {
                this.f48315i = false;
                return i10;
            }
            throw new NoSuchElementException();
        }
        this.f48316o = this.f48313d + i10;
        return i10;
    }
}
