package com.google.android.gms.internal.fido;

import java.io.Serializable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class q1 extends s1 implements Serializable {

    /* renamed from: d  reason: collision with root package name */
    static final q1 f13695d = new q1();

    private q1() {
    }

    @Override // com.google.android.gms.internal.fido.s1
    public final s1 a() {
        return w1.f13748d;
    }

    @Override // com.google.android.gms.internal.fido.s1, java.util.Comparator
    public final /* bridge */ /* synthetic */ int compare(Object obj, Object obj2) {
        Comparable comparable = (Comparable) obj;
        Comparable comparable2 = (Comparable) obj2;
        comparable.getClass();
        comparable2.getClass();
        return comparable.compareTo(comparable2);
    }

    public final String toString() {
        return "Ordering.natural()";
    }
}
