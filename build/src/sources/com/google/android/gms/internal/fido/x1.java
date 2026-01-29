package com.google.android.gms.internal.fido;

import java.io.Serializable;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class x1 extends s1 implements Serializable {

    /* renamed from: d  reason: collision with root package name */
    final s1 f15156d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public x1(s1 s1Var) {
        this.f15156d = s1Var;
    }

    @Override // com.google.android.gms.internal.fido.s1
    public final s1 a() {
        return this.f15156d;
    }

    @Override // com.google.android.gms.internal.fido.s1, java.util.Comparator
    public final int compare(Object obj, Object obj2) {
        return this.f15156d.compare(obj2, obj);
    }

    @Override // java.util.Comparator
    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof x1) {
            return this.f15156d.equals(((x1) obj).f15156d);
        }
        return false;
    }

    public final int hashCode() {
        return -this.f15156d.hashCode();
    }

    public final String toString() {
        return this.f15156d.toString().concat(".reverse()");
    }
}
