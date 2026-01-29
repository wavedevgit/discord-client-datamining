package com.google.android.gms.internal.play_billing;

import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class l {

    /* renamed from: a  reason: collision with root package name */
    Object[] f15305a = new Object[8];

    /* renamed from: b  reason: collision with root package name */
    int f15306b = 0;

    /* renamed from: c  reason: collision with root package name */
    k f15307c;

    public final l a(Object obj, Object obj2) {
        int i10 = this.f15306b + 1;
        Object[] objArr = this.f15305a;
        int length = objArr.length;
        int i11 = i10 + i10;
        if (i11 > length) {
            int i12 = length + (length >> 1) + 1;
            if (i12 < i11) {
                int highestOneBit = Integer.highestOneBit(i11 - 1);
                i12 = highestOneBit + highestOneBit;
            }
            if (i12 < 0) {
                i12 = Integer.MAX_VALUE;
            }
            this.f15305a = Arrays.copyOf(objArr, i12);
        }
        e.a(obj, obj2);
        Object[] objArr2 = this.f15305a;
        int i13 = this.f15306b;
        int i14 = i13 + i13;
        objArr2[i14] = obj;
        objArr2[i14 + 1] = obj2;
        this.f15306b = i13 + 1;
        return this;
    }

    public final m b() {
        k kVar = this.f15307c;
        if (kVar == null) {
            u g10 = u.g(this.f15306b, this.f15305a, this);
            k kVar2 = this.f15307c;
            if (kVar2 == null) {
                return g10;
            }
            throw kVar2.a();
        }
        throw kVar.a();
    }
}
