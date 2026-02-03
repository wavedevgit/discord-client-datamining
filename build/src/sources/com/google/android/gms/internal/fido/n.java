package com.google.android.gms.internal.fido;

import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;
import java.util.concurrent.atomic.AtomicReference;
import java.util.function.Function;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n {

    /* renamed from: a  reason: collision with root package name */
    private final ConcurrentMap f14697a = new ConcurrentHashMap();

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ n(o oVar) {
    }

    /* JADX WARN: Multi-variable type inference failed */
    public final p a(final f fVar, String str, String str2, boolean z10, boolean z11, final boolean z12, boolean z13, final Set set) {
        p[] pVarArr;
        int length;
        n0 a10 = s0.a(new n0(fVar, "com.google.android.gms.fido", "", false, false, z12, false, set) { // from class: com.google.android.gms.internal.fido.l
            @Override // com.google.android.gms.internal.fido.n0
            public final Object zza() {
                throw null;
            }
        });
        AtomicReference atomicReference = (AtomicReference) this.f14697a.computeIfAbsent("com.google.android.gms.fido", new Function() { // from class: com.google.android.gms.internal.fido.m
            @Override // java.util.function.Function
            public final Object apply(Object obj) {
                String str3 = (String) obj;
                return new AtomicReference();
            }
        });
        loop0: while (true) {
            p[] pVarArr2 = (p[]) atomicReference.get();
            if (pVarArr2 != null && (length = pVarArr2.length) != 0) {
                p pVar = pVarArr2[0];
                if (!p.d(null).equals("")) {
                    android.support.v4.media.session.b.a(a10.zza());
                    pVarArr = new p[length + 1];
                    pVarArr[0] = null;
                    System.arraycopy(pVarArr2, 0, pVarArr, 1, length);
                } else {
                    pVarArr = null;
                }
            } else {
                android.support.v4.media.session.b.a(a10.zza());
                pVarArr = new p[]{null};
            }
            if (pVarArr == null) {
                break;
            }
            while (!p0.d.a(atomicReference, pVarArr2, pVarArr)) {
                if (atomicReference.get() != pVarArr2) {
                    break;
                }
            }
            break loop0;
        }
        if (pVarArr == null) {
            p.e(null);
            return null;
        }
        throw null;
    }
}
