package is;

import java.util.NoSuchElementException;
import kotlin.collections.m0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b extends m0 {

    /* renamed from: d  reason: collision with root package name */
    private final int f29638d;

    /* renamed from: e  reason: collision with root package name */
    private final int f29639e;

    /* renamed from: i  reason: collision with root package name */
    private boolean f29640i;

    /* renamed from: o  reason: collision with root package name */
    private int f29641o;

    public b(int i10, int i11, int i12) {
        this.f29638d = i12;
        this.f29639e = i11;
        boolean z10 = false;
        if (i12 <= 0 ? i10 >= i11 : i10 <= i11) {
            z10 = true;
        }
        this.f29640i = z10;
        this.f29641o = z10 ? i10 : i11;
    }

    @Override // java.util.Iterator
    public boolean hasNext() {
        return this.f29640i;
    }

    @Override // kotlin.collections.m0
    public int nextInt() {
        int i10 = this.f29641o;
        if (i10 == this.f29639e) {
            if (this.f29640i) {
                this.f29640i = false;
                return i10;
            }
            throw new NoSuchElementException();
        }
        this.f29641o = this.f29638d + i10;
        return i10;
    }
}
