package com.google.android.gms.internal.fido;

import java.io.Serializable;
import java.util.Comparator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class w0 extends s1 implements Serializable {

    /* renamed from: d  reason: collision with root package name */
    final Comparator f14141d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public w0(Comparator comparator) {
        comparator.getClass();
        this.f14141d = comparator;
    }

    @Override // com.google.android.gms.internal.fido.s1, java.util.Comparator
    public final int compare(Object obj, Object obj2) {
        return this.f14141d.compare(obj, obj2);
    }

    @Override // java.util.Comparator
    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof w0) {
            return this.f14141d.equals(((w0) obj).f14141d);
        }
        return false;
    }

    public final int hashCode() {
        return this.f14141d.hashCode();
    }

    public final String toString() {
        return this.f14141d.toString();
    }
}
