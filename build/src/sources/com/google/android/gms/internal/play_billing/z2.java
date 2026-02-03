package com.google.android.gms.internal.play_billing;

import java.util.Iterator;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class z2 implements g3 {

    /* renamed from: a  reason: collision with root package name */
    private final v2 f14032a;

    /* renamed from: b  reason: collision with root package name */
    private final w3 f14033b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f14034c;

    /* renamed from: d  reason: collision with root package name */
    private final f1 f14035d;

    private z2(w3 w3Var, f1 f1Var, v2 v2Var) {
        this.f14033b = w3Var;
        this.f14034c = f1Var.f(v2Var);
        this.f14035d = f1Var;
        this.f14032a = v2Var;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static z2 i(w3 w3Var, f1 f1Var, v2 v2Var) {
        return new z2(w3Var, f1Var, v2Var);
    }

    @Override // com.google.android.gms.internal.play_billing.g3
    public final Object B() {
        v2 v2Var = this.f14032a;
        if (v2Var instanceof q1) {
            return ((q1) v2Var).k();
        }
        return v2Var.a().n();
    }

    @Override // com.google.android.gms.internal.play_billing.g3
    public final int a(Object obj) {
        w3 w3Var = this.f14033b;
        int b10 = w3Var.b(w3Var.d(obj));
        if (this.f14034c) {
            return b10 + this.f14035d.b(obj).c();
        }
        return b10;
    }

    @Override // com.google.android.gms.internal.play_billing.g3
    public final void b(Object obj) {
        this.f14033b.g(obj);
        this.f14035d.d(obj);
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
        int hashCode = this.f14033b.d(obj).hashCode();
        if (this.f14034c) {
            return (hashCode * 53) + this.f14035d.b(obj).f13863a.hashCode();
        }
        return hashCode;
    }

    @Override // com.google.android.gms.internal.play_billing.g3
    public final void e(Object obj, Object obj2) {
        i3.x(this.f14033b, obj, obj2);
        if (this.f14034c) {
            i3.w(this.f14035d, obj, obj2);
        }
    }

    @Override // com.google.android.gms.internal.play_billing.g3
    public final boolean f(Object obj, Object obj2) {
        w3 w3Var = this.f14033b;
        if (!w3Var.d(obj).equals(w3Var.d(obj2))) {
            return false;
        }
        if (this.f14034c) {
            return this.f14035d.b(obj).equals(this.f14035d.b(obj2));
        }
        return true;
    }

    @Override // com.google.android.gms.internal.play_billing.g3
    public final void g(Object obj, o4 o4Var) {
        Iterator d10 = this.f14035d.b(obj).d();
        if (!d10.hasNext()) {
            w3 w3Var = this.f14033b;
            w3Var.i(w3Var.d(obj), o4Var);
            return;
        }
        android.support.v4.media.session.b.a(((Map.Entry) d10.next()).getKey());
        throw null;
    }

    @Override // com.google.android.gms.internal.play_billing.g3
    public final boolean h(Object obj) {
        return this.f14035d.b(obj).h();
    }
}
