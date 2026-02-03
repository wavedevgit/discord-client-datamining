package com.google.android.gms.internal.play_billing;

import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class n extends g implements Set {

    /* renamed from: e  reason: collision with root package name */
    private transient j f13929e;

    @Override // com.google.android.gms.internal.play_billing.g
    public j e() {
        j jVar = this.f13929e;
        if (jVar == null) {
            j h10 = h();
            this.f13929e = h10;
            return h10;
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

    j h() {
        Object[] array = toArray();
        int i10 = j.f13861i;
        return j.i(array, array.length);
    }

    @Override // java.util.Collection, java.util.Set
    public final int hashCode() {
        return v.a(this);
    }
}
