package com.google.android.gms.internal.play_billing;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class y3 extends w3 {
    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.gms.internal.play_billing.w3
    public final /* synthetic */ int a(Object obj) {
        return ((x3) obj).a();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.gms.internal.play_billing.w3
    public final /* synthetic */ int b(Object obj) {
        return ((x3) obj).b();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.gms.internal.play_billing.w3
    public final /* bridge */ /* synthetic */ Object c(Object obj) {
        q1 q1Var = (q1) obj;
        x3 x3Var = q1Var.zzc;
        if (x3Var == x3.c()) {
            x3 f10 = x3.f();
            q1Var.zzc = f10;
            return f10;
        }
        return x3Var;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.gms.internal.play_billing.w3
    public final /* synthetic */ Object d(Object obj) {
        return ((q1) obj).zzc;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.gms.internal.play_billing.w3
    public final /* bridge */ /* synthetic */ Object e(Object obj, Object obj2) {
        if (!x3.c().equals(obj2)) {
            if (x3.c().equals(obj)) {
                return x3.e((x3) obj, (x3) obj2);
            }
            ((x3) obj).d((x3) obj2);
        }
        return obj;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.gms.internal.play_billing.w3
    public final /* bridge */ /* synthetic */ void f(Object obj, int i10, long j10) {
        ((x3) obj).j(i10 << 3, Long.valueOf(j10));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.gms.internal.play_billing.w3
    public final void g(Object obj) {
        ((q1) obj).zzc.h();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.gms.internal.play_billing.w3
    public final /* synthetic */ void h(Object obj, Object obj2) {
        ((q1) obj).zzc = (x3) obj2;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.gms.internal.play_billing.w3
    public final /* synthetic */ void i(Object obj, o4 o4Var) {
        ((x3) obj).k(o4Var);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.gms.internal.play_billing.w3
    public final /* synthetic */ void j(Object obj, o4 o4Var) {
        ((x3) obj).l(o4Var);
    }
}
