package com.facebook.imagepipeline.memory;

import android.util.SparseIntArray;
import com.facebook.imagepipeline.memory.a;
import kotlin.jvm.internal.Intrinsics;
import va.a0;
import va.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class e extends a implements r8.a {

    /* renamed from: k  reason: collision with root package name */
    private final int[] f10633k;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public e(r8.d memoryTrimmableRegistry, z poolParams, a0 poolStatsTracker) {
        super(memoryTrimmableRegistry, poolParams, poolStatsTracker);
        Intrinsics.checkNotNullParameter(memoryTrimmableRegistry, "memoryTrimmableRegistry");
        Intrinsics.checkNotNullParameter(poolParams, "poolParams");
        Intrinsics.checkNotNullParameter(poolStatsTracker, "poolStatsTracker");
        SparseIntArray sparseIntArray = poolParams.f51998c;
        if (sparseIntArray != null) {
            this.f10633k = new int[sparseIntArray.size()];
            int size = sparseIntArray.size();
            for (int i10 = 0; i10 < size; i10++) {
                this.f10633k[i10] = sparseIntArray.keyAt(i10);
            }
        } else {
            this.f10633k = new int[0];
        }
        s();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.imagepipeline.memory.a
    /* renamed from: A */
    public byte[] g(int i10) {
        return new byte[i10];
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.imagepipeline.memory.a
    /* renamed from: B */
    public void k(byte[] value) {
        Intrinsics.checkNotNullParameter(value, "value");
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.imagepipeline.memory.a
    /* renamed from: C */
    public int o(byte[] value) {
        Intrinsics.checkNotNullParameter(value, "value");
        return value.length;
    }

    @Override // com.facebook.imagepipeline.memory.a
    protected int n(int i10) {
        int[] iArr;
        if (i10 > 0) {
            for (int i11 : this.f10633k) {
                if (i11 >= i10) {
                    return i11;
                }
            }
            return i10;
        }
        throw new a.b(Integer.valueOf(i10));
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.imagepipeline.memory.a
    public int p(int i10) {
        return i10;
    }
}
