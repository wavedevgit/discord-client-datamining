package hs;

import java.util.NoSuchElementException;
import kotlin.collections.m0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b extends m0 {

    /* renamed from: d  reason: collision with root package name */
    private final int f26450d;

    /* renamed from: e  reason: collision with root package name */
    private final int f26451e;

    /* renamed from: i  reason: collision with root package name */
    private boolean f26452i;

    /* renamed from: o  reason: collision with root package name */
    private int f26453o;

    public b(int i10, int i11, int i12) {
        this.f26450d = i12;
        this.f26451e = i11;
        boolean z10 = false;
        if (i12 <= 0 ? i10 >= i11 : i10 <= i11) {
            z10 = true;
        }
        this.f26452i = z10;
        this.f26453o = z10 ? i10 : i11;
    }

    @Override // java.util.Iterator
    public boolean hasNext() {
        return this.f26452i;
    }

    @Override // kotlin.collections.m0
    public int nextInt() {
        int i10 = this.f26453o;
        if (i10 == this.f26451e) {
            if (this.f26452i) {
                this.f26452i = false;
                return i10;
            }
            throw new NoSuchElementException();
        }
        this.f26453o = this.f26450d + i10;
        return i10;
    }
}
