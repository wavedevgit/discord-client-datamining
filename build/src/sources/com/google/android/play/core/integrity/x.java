package com.google.android.play.core.integrity;

import com.google.android.gms.tasks.Task;
import com.google.android.play.core.integrity.c;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class x implements c {

    /* renamed from: a  reason: collision with root package name */
    private final j0 f16240a;

    /* renamed from: b  reason: collision with root package name */
    private final p0 f16241b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public x(j0 j0Var, p0 p0Var) {
        this.f16240a = j0Var;
        this.f16241b = p0Var;
    }

    @Override // com.google.android.play.core.integrity.c
    public final Task a(final c.a aVar) {
        long b10 = aVar.b();
        aVar.a();
        return this.f16240a.d(b10, 0).r(new xg.j() { // from class: com.google.android.play.core.integrity.w
            @Override // xg.j
            public final Task a(Object obj) {
                return x.this.b(aVar, (Long) obj);
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ Task b(c.a aVar, Long l10) {
        final long b10 = aVar.b();
        final long longValue = l10.longValue();
        aVar.a();
        final p0 p0Var = this.f16241b;
        return xg.m.f(new c.InterfaceC0191c(b10, longValue, 0) { // from class: com.google.android.play.core.integrity.o0

            /* renamed from: b  reason: collision with root package name */
            public final /* synthetic */ long f16220b;

            /* renamed from: c  reason: collision with root package name */
            public final /* synthetic */ long f16221c;

            @Override // com.google.android.play.core.integrity.c.InterfaceC0191c
            public final Task a(c.d dVar) {
                return p0.this.a(this.f16220b, this.f16221c, 0, dVar);
            }
        });
    }
}
