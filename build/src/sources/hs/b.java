package hs;

import java.util.NoSuchElementException;
import kotlin.collections.m0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b extends m0 {

    /* renamed from: d  reason: collision with root package name */
    private final int f26498d;

    /* renamed from: e  reason: collision with root package name */
    private final int f26499e;

    /* renamed from: i  reason: collision with root package name */
    private boolean f26500i;

    /* renamed from: o  reason: collision with root package name */
    private int f26501o;

    public b(int i10, int i11, int i12) {
        this.f26498d = i12;
        this.f26499e = i11;
        boolean z10 = false;
        if (i12 <= 0 ? i10 >= i11 : i10 <= i11) {
            z10 = true;
        }
        this.f26500i = z10;
        this.f26501o = z10 ? i10 : i11;
    }

    @Override // java.util.Iterator
    public boolean hasNext() {
        return this.f26500i;
    }

    @Override // kotlin.collections.m0
    public int nextInt() {
        int i10 = this.f26501o;
        if (i10 == this.f26499e) {
            if (this.f26500i) {
                this.f26500i = false;
                return i10;
            }
            throw new NoSuchElementException();
        }
        this.f26501o = this.f26498d + i10;
        return i10;
    }
}
