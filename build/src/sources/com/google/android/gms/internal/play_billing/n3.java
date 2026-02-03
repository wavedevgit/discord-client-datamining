package com.google.android.gms.internal.play_billing;

import java.util.Map;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n3 implements Map.Entry, Comparable {

    /* renamed from: d  reason: collision with root package name */
    private final Comparable f13932d;

    /* renamed from: e  reason: collision with root package name */
    private Object f13933e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ t3 f13934i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public n3(t3 t3Var, Comparable comparable, Object obj) {
        this.f13934i = t3Var;
        this.f13932d = comparable;
        this.f13933e = obj;
    }

    private static final boolean d(Object obj, Object obj2) {
        if (obj == null) {
            if (obj2 != null) {
                return false;
            }
            return true;
        }
        return obj.equals(obj2);
    }

    public final Comparable a() {
        return this.f13932d;
    }

    @Override // java.lang.Comparable
    public final /* bridge */ /* synthetic */ int compareTo(Object obj) {
        return this.f13932d.compareTo(((n3) obj).f13932d);
    }

    @Override // java.util.Map.Entry
    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof Map.Entry)) {
            return false;
        }
        Map.Entry entry = (Map.Entry) obj;
        if (d(this.f13932d, entry.getKey()) && d(this.f13933e, entry.getValue())) {
            return true;
        }
        return false;
    }

    @Override // java.util.Map.Entry
    public final /* synthetic */ Object getKey() {
        return this.f13932d;
    }

    @Override // java.util.Map.Entry
    public final Object getValue() {
        return this.f13933e;
    }

    @Override // java.util.Map.Entry
    public final int hashCode() {
        int hashCode;
        Comparable comparable = this.f13932d;
        int i10 = 0;
        if (comparable == null) {
            hashCode = 0;
        } else {
            hashCode = comparable.hashCode();
        }
        Object obj = this.f13933e;
        if (obj != null) {
            i10 = obj.hashCode();
        }
        return hashCode ^ i10;
    }

    @Override // java.util.Map.Entry
    public final Object setValue(Object obj) {
        this.f13934i.n();
        Object obj2 = this.f13933e;
        this.f13933e = obj;
        return obj2;
    }

    public final String toString() {
        String valueOf = String.valueOf(this.f13932d);
        String valueOf2 = String.valueOf(this.f13933e);
        return valueOf + "=" + valueOf2;
    }
}
