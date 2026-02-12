package com.google.android.gms.internal.fido;

import java.util.concurrent.atomic.AtomicReferenceFieldUpdater;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class d3 extends c3 {

    /* renamed from: a  reason: collision with root package name */
    private static final AtomicReferenceFieldUpdater f14658a = AtomicReferenceFieldUpdater.newUpdater(k3.class, Thread.class, "a");

    /* renamed from: b  reason: collision with root package name */
    private static final AtomicReferenceFieldUpdater f14659b = AtomicReferenceFieldUpdater.newUpdater(k3.class, k3.class, "b");

    /* renamed from: c  reason: collision with root package name */
    private static final AtomicReferenceFieldUpdater f14660c;

    /* renamed from: d  reason: collision with root package name */
    private static final AtomicReferenceFieldUpdater f14661d;

    /* renamed from: e  reason: collision with root package name */
    private static final AtomicReferenceFieldUpdater f14662e;

    static {
        boolean z10 = l3.f14730o;
        f14660c = AtomicReferenceFieldUpdater.newUpdater(l3.class, k3.class, "i");
        f14661d = AtomicReferenceFieldUpdater.newUpdater(l3.class, g3.class, "e");
        f14662e = AtomicReferenceFieldUpdater.newUpdater(l3.class, Object.class, "d");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ d3(p3 p3Var) {
        super(null);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.gms.internal.fido.c3
    public final g3 a(l3 l3Var, g3 g3Var) {
        return (g3) f14661d.getAndSet(l3Var, g3Var);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.gms.internal.fido.c3
    public final k3 b(l3 l3Var, k3 k3Var) {
        return (k3) f14660c.getAndSet(l3Var, k3Var);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.gms.internal.fido.c3
    public final void c(k3 k3Var, k3 k3Var2) {
        f14659b.lazySet(k3Var, k3Var2);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.gms.internal.fido.c3
    public final void d(k3 k3Var, Thread thread) {
        f14658a.lazySet(k3Var, thread);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.gms.internal.fido.c3
    public final boolean e(l3 l3Var, Object obj, Object obj2) {
        return m3.a(f14662e, l3Var, obj, obj2);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.gms.internal.fido.c3
    public final boolean f(l3 l3Var, k3 k3Var, k3 k3Var2) {
        return m3.a(f14660c, l3Var, k3Var, k3Var2);
    }
}
