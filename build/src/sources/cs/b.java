package cs;

import java.util.NoSuchElementException;
import kotlin.collections.m0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b extends m0 {

    /* renamed from: d  reason: collision with root package name */
    private final int f19814d;

    /* renamed from: e  reason: collision with root package name */
    private final int f19815e;

    /* renamed from: i  reason: collision with root package name */
    private boolean f19816i;

    /* renamed from: o  reason: collision with root package name */
    private int f19817o;

    public b(int i10, int i11, int i12) {
        this.f19814d = i12;
        this.f19815e = i11;
        boolean z10 = false;
        if (i12 <= 0 ? i10 >= i11 : i10 <= i11) {
            z10 = true;
        }
        this.f19816i = z10;
        this.f19817o = z10 ? i10 : i11;
    }

    @Override // java.util.Iterator
    public boolean hasNext() {
        return this.f19816i;
    }

    @Override // kotlin.collections.m0
    public int nextInt() {
        int i10 = this.f19817o;
        if (i10 == this.f19815e) {
            if (this.f19816i) {
                this.f19816i = false;
                return i10;
            }
            throw new NoSuchElementException();
        }
        this.f19817o = this.f19814d + i10;
        return i10;
    }
}
