package com.budiyev.android.codescanner;

import com.google.zxing.Result;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class e {

    /* renamed from: a  reason: collision with root package name */
    private final byte[] f8052a;

    /* renamed from: b  reason: collision with root package name */
    private final i f8053b;

    /* renamed from: c  reason: collision with root package name */
    private final i f8054c;

    /* renamed from: d  reason: collision with root package name */
    private final i f8055d;

    /* renamed from: e  reason: collision with root package name */
    private final l f8056e;

    /* renamed from: f  reason: collision with root package name */
    private final int f8057f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f8058g;

    public e(byte[] bArr, i iVar, i iVar2, i iVar3, l lVar, int i10, boolean z10) {
        this.f8052a = bArr;
        this.f8053b = iVar;
        this.f8054c = iVar2;
        this.f8055d = iVar3;
        this.f8056e = lVar;
        this.f8057f = i10;
        this.f8058g = z10;
    }

    public Result a(ck.j jVar) {
        int i10;
        int i11;
        int a10 = this.f8053b.a();
        int b10 = this.f8053b.b();
        int i12 = this.f8057f;
        byte[] q10 = n.q(this.f8052a, a10, b10, i12);
        if (i12 != 90 && i12 != 270) {
            i11 = a10;
            i10 = b10;
        } else {
            i10 = a10;
            i11 = b10;
        }
        l m10 = n.m(i11, i10, this.f8056e, this.f8054c, this.f8055d);
        int h10 = m10.h();
        int d10 = m10.d();
        if (h10 >= 1 && d10 >= 1) {
            return n.h(jVar, new ck.l(q10, i11, i10, m10.e(), m10.g(), h10, d10, this.f8058g));
        }
        return null;
    }
}
