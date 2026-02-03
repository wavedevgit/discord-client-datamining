package com.google.android.gms.internal.fido;

import java.io.Serializable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class w1 extends s1 implements Serializable {

    /* renamed from: d  reason: collision with root package name */
    static final w1 f13748d = new w1();

    private w1() {
    }

    @Override // com.google.android.gms.internal.fido.s1
    public final s1 a() {
        return q1.f13695d;
    }

    @Override // com.google.android.gms.internal.fido.s1, java.util.Comparator
    public final /* bridge */ /* synthetic */ int compare(Object obj, Object obj2) {
        Comparable comparable = (Comparable) obj;
        Comparable comparable2 = (Comparable) obj2;
        comparable.getClass();
        if (comparable == comparable2) {
            return 0;
        }
        return comparable2.compareTo(comparable);
    }

    public final String toString() {
        return "Ordering.natural().reverse()";
    }
}
