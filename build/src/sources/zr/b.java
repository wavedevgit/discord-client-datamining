package zr;

import java.util.NoSuchElementException;
import kotlin.collections.m0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b extends m0 {

    /* renamed from: d  reason: collision with root package name */
    private final int f56063d;

    /* renamed from: e  reason: collision with root package name */
    private final int f56064e;

    /* renamed from: i  reason: collision with root package name */
    private boolean f56065i;

    /* renamed from: o  reason: collision with root package name */
    private int f56066o;

    public b(int i10, int i11, int i12) {
        this.f56063d = i12;
        this.f56064e = i11;
        boolean z10 = false;
        if (i12 <= 0 ? i10 >= i11 : i10 <= i11) {
            z10 = true;
        }
        this.f56065i = z10;
        this.f56066o = z10 ? i10 : i11;
    }

    @Override // java.util.Iterator
    public boolean hasNext() {
        return this.f56065i;
    }

    @Override // kotlin.collections.m0
    public int nextInt() {
        int i10 = this.f56066o;
        if (i10 == this.f56064e) {
            if (this.f56065i) {
                this.f56065i = false;
                return i10;
            }
            throw new NoSuchElementException();
        }
        this.f56066o = this.f56063d + i10;
        return i10;
    }
}
