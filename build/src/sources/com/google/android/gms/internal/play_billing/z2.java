package com.google.android.gms.internal.play_billing;

import java.util.Iterator;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class z2 implements g3 {

    /* renamed from: a  reason: collision with root package name */
    private final v2 f15435a;

    /* renamed from: b  reason: collision with root package name */
    private final w3 f15436b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f15437c;

    /* renamed from: d  reason: collision with root package name */
    private final f1 f15438d;

    private z2(w3 w3Var, f1 f1Var, v2 v2Var) {
        this.f15436b = w3Var;
        this.f15437c = f1Var.f(v2Var);
        this.f15438d = f1Var;
        this.f15435a = v2Var;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static z2 i(w3 w3Var, f1 f1Var, v2 v2Var) {
        return new z2(w3Var, f1Var, v2Var);
    }

    @Override // com.google.android.gms.internal.play_billing.g3
    public final Object B() {
        v2 v2Var = this.f15435a;
        if (v2Var instanceof q1) {
            return ((q1) v2Var).k();
        }
        return v2Var.a().n();
    }

    @Override // com.google.android.gms.internal.play_billing.g3
    public final int a(Object obj) {
        w3 w3Var = this.f15436b;
        int b10 = w3Var.b(w3Var.d(obj));
        if (this.f15437c) {
            return b10 + this.f15438d.b(obj).c();
        }
        return b10;
    }

    @Override // com.google.android.gms.internal.play_billing.g3
    public final void b(Object obj) {
        this.f15436b.g(obj);
        this.f15438d.d(obj);
    }

    @Override // com.google.android.gms.internal.play_billing.g3
    public final void c(Object obj, byte[] bArr, int i10, int i11, d0 d0Var) {
        q1 q1Var = (q1) obj;
        if (q1Var.zzc == x3.c()) {
            q1Var.zzc = x3.f();
        }
        android.support.v4.media.session.b.a(obj);
        throw null;
    }

    @Override // com.google.android.gms.internal.play_billing.g3
    public final int d(Object obj) {
        int hashCode = this.f15436b.d(obj).hashCode();
        if (this.f15437c) {
            return (hashCode * 53) + this.f15438d.b(obj).f15266a.hashCode();
        }
        return hashCode;
    }

    @Override // com.google.android.gms.internal.play_billing.g3
    public final void e(Object obj, Object obj2) {
        i3.x(this.f15436b, obj, obj2);
        if (this.f15437c) {
            i3.w(this.f15438d, obj, obj2);
        }
    }

    @Override // com.google.android.gms.internal.play_billing.g3
    public final boolean f(Object obj, Object obj2) {
        w3 w3Var = this.f15436b;
        if (!w3Var.d(obj).equals(w3Var.d(obj2))) {
            return false;
        }
        if (this.f15437c) {
            return this.f15438d.b(obj).equals(this.f15438d.b(obj2));
        }
        return true;
    }

    @Override // com.google.android.gms.internal.play_billing.g3
    public final void g(Object obj, o4 o4Var) {
        Iterator d10 = this.f15438d.b(obj).d();
        if (!d10.hasNext()) {
            w3 w3Var = this.f15436b;
            w3Var.i(w3Var.d(obj), o4Var);
            return;
        }
        android.support.v4.media.session.b.a(((Map.Entry) d10.next()).getKey());
        throw null;
    }

    @Override // com.google.android.gms.internal.play_billing.g3
    public final boolean h(Object obj) {
        return this.f15438d.b(obj).h();
    }
}
