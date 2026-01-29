package com.swmansion.rnscreens.utils;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class b {

    /* renamed from: a  reason: collision with root package name */
    private final int f19360a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f19361b;

    public b(int i10, boolean z10) {
        this.f19360a = i10;
        this.f19361b = z10;
    }

    public final int a() {
        return this.f19360a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof b) {
            b bVar = (b) obj;
            return this.f19360a == bVar.f19360a && this.f19361b == bVar.f19361b;
        }
        return false;
    }

    public int hashCode() {
        return (Integer.hashCode(this.f19360a) * 31) + Boolean.hashCode(this.f19361b);
    }

    public String toString() {
        int i10 = this.f19360a;
        boolean z10 = this.f19361b;
        return "CacheKey(fontSize=" + i10 + ", isTitleEmpty=" + z10 + ")";
    }
}
