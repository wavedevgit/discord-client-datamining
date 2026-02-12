package com.budiyev.android.codescanner;

import com.google.zxing.Result;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class e {

    /* renamed from: a  reason: collision with root package name */
    private final byte[] f9054a;

    /* renamed from: b  reason: collision with root package name */
    private final i f9055b;

    /* renamed from: c  reason: collision with root package name */
    private final i f9056c;

    /* renamed from: d  reason: collision with root package name */
    private final i f9057d;

    /* renamed from: e  reason: collision with root package name */
    private final l f9058e;

    /* renamed from: f  reason: collision with root package name */
    private final int f9059f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f9060g;

    public e(byte[] bArr, i iVar, i iVar2, i iVar3, l lVar, int i10, boolean z10) {
        this.f9054a = bArr;
        this.f9055b = iVar;
        this.f9056c = iVar2;
        this.f9057d = iVar3;
        this.f9058e = lVar;
        this.f9059f = i10;
        this.f9060g = z10;
    }

    public Result a(kk.j jVar) {
        int i10;
        int i11;
        int a10 = this.f9055b.a();
        int b10 = this.f9055b.b();
        int i12 = this.f9059f;
        byte[] q10 = n.q(this.f9054a, a10, b10, i12);
        if (i12 != 90 && i12 != 270) {
            i11 = a10;
            i10 = b10;
        } else {
            i10 = a10;
            i11 = b10;
        }
        l m10 = n.m(i11, i10, this.f9058e, this.f9056c, this.f9057d);
        int h10 = m10.h();
        int d10 = m10.d();
        if (h10 >= 1 && d10 >= 1) {
            return n.h(jVar, new kk.l(q10, i11, i10, m10.e(), m10.g(), h10, d10, this.f9060g));
        }
        return null;
    }
}
