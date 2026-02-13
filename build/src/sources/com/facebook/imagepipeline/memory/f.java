package com.facebook.imagepipeline.memory;

import android.util.SparseIntArray;
import com.facebook.imagepipeline.memory.a;
import p8.j;
import wa.a0;
import wa.q;
import wa.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class f extends a {

    /* renamed from: k  reason: collision with root package name */
    private final int[] f11251k;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(s8.d dVar, z zVar, a0 a0Var) {
        super(dVar, zVar, a0Var);
        SparseIntArray sparseIntArray = (SparseIntArray) j.g(zVar.f53036c);
        this.f11251k = new int[sparseIntArray.size()];
        int i10 = 0;
        while (true) {
            int[] iArr = this.f11251k;
            if (i10 < iArr.length) {
                iArr[i10] = sparseIntArray.keyAt(i10);
                i10++;
            } else {
                s();
                return;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.imagepipeline.memory.a
    /* renamed from: A */
    public void k(q qVar) {
        j.g(qVar);
        qVar.close();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.imagepipeline.memory.a
    /* renamed from: B */
    public int o(q qVar) {
        j.g(qVar);
        return qVar.getSize();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int C() {
        return this.f11251k[0];
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.imagepipeline.memory.a
    /* renamed from: D */
    public boolean u(q qVar) {
        j.g(qVar);
        return !qVar.isClosed();
    }

    @Override // com.facebook.imagepipeline.memory.a
    protected int n(int i10) {
        int[] iArr;
        if (i10 > 0) {
            for (int i11 : this.f11251k) {
                if (i11 >= i10) {
                    return i11;
                }
            }
            return i10;
        }
        throw new a.b(Integer.valueOf(i10));
    }

    @Override // com.facebook.imagepipeline.memory.a
    protected int p(int i10) {
        return i10;
    }
}
