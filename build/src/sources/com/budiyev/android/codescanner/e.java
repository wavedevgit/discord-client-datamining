package com.budiyev.android.codescanner;

import com.google.zxing.Result;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class e {

    /* renamed from: a  reason: collision with root package name */
    private final byte[] f9084a;

    /* renamed from: b  reason: collision with root package name */
    private final i f9085b;

    /* renamed from: c  reason: collision with root package name */
    private final i f9086c;

    /* renamed from: d  reason: collision with root package name */
    private final i f9087d;

    /* renamed from: e  reason: collision with root package name */
    private final l f9088e;

    /* renamed from: f  reason: collision with root package name */
    private final int f9089f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f9090g;

    public e(byte[] bArr, i iVar, i iVar2, i iVar3, l lVar, int i10, boolean z10) {
        this.f9084a = bArr;
        this.f9085b = iVar;
        this.f9086c = iVar2;
        this.f9087d = iVar3;
        this.f9088e = lVar;
        this.f9089f = i10;
        this.f9090g = z10;
    }

    public Result a(ck.j jVar) {
        int i10;
        int i11;
        int a10 = this.f9085b.a();
        int b10 = this.f9085b.b();
        int i12 = this.f9089f;
        byte[] q10 = n.q(this.f9084a, a10, b10, i12);
        if (i12 != 90 && i12 != 270) {
            i11 = a10;
            i10 = b10;
        } else {
            i10 = a10;
            i11 = b10;
        }
        l m10 = n.m(i11, i10, this.f9088e, this.f9086c, this.f9087d);
        int h10 = m10.h();
        int d10 = m10.d();
        if (h10 >= 1 && d10 >= 1) {
            return n.h(jVar, new ck.l(q10, i11, i10, m10.e(), m10.g(), h10, d10, this.f9090g));
        }
        return null;
    }
}
