package com.google.android.gms.internal.play_billing;

import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class n extends g implements Set {

    /* renamed from: e  reason: collision with root package name */
    private transient j f15004e;

    @Override // com.google.android.gms.internal.play_billing.g
    public j e() {
        j jVar = this.f15004e;
        if (jVar == null) {
            j i10 = i();
            this.f15004e = i10;
            return i10;
        }
        return jVar;
    }

    @Override // java.util.Collection, java.util.Set
    public final boolean equals(Object obj) {
        if (obj == this || obj == this) {
            return true;
        }
        if (obj instanceof Set) {
            Set set = (Set) obj;
            try {
                if (size() == set.size()) {
                    if (containsAll(set)) {
                        return true;
                    }
                    return false;
                }
            } catch (ClassCastException | NullPointerException unused) {
            }
        }
        return false;
    }

    @Override // java.util.Collection, java.util.Set
    public final int hashCode() {
        return v.a(this);
    }

    j i() {
        Object[] array = toArray();
        int i10 = j.f14936i;
        return j.j(array, array.length);
    }
}
