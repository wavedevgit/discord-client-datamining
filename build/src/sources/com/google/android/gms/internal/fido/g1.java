package com.google.android.gms.internal.fido;

import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class g1 extends h1 {
    @Override // com.google.android.gms.internal.fido.z0, java.util.AbstractCollection, java.util.Collection, java.util.List
    public final boolean contains(Object obj) {
        if (obj instanceof Map.Entry) {
            Map.Entry entry = (Map.Entry) obj;
            Object obj2 = q().get(entry.getKey());
            if (obj2 != null && obj2.equals(entry.getValue())) {
                return true;
            }
        }
        return false;
    }

    @Override // com.google.android.gms.internal.fido.h1
    final boolean h() {
        return false;
    }

    @Override // com.google.android.gms.internal.fido.h1, java.util.Collection, java.util.Set
    public final int hashCode() {
        return y1.a(q().c());
    }

    abstract f1 q();

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
    public final int size() {
        return q().size();
    }
}
