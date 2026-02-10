package com.swmansion.rnscreens.utils;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class b {

    /* renamed from: a  reason: collision with root package name */
    private final int f19387a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f19388b;

    public b(int i10, boolean z10) {
        this.f19387a = i10;
        this.f19388b = z10;
    }

    public final int a() {
        return this.f19387a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof b) {
            b bVar = (b) obj;
            return this.f19387a == bVar.f19387a && this.f19388b == bVar.f19388b;
        }
        return false;
    }

    public int hashCode() {
        return (Integer.hashCode(this.f19387a) * 31) + Boolean.hashCode(this.f19388b);
    }

    public String toString() {
        int i10 = this.f19387a;
        boolean z10 = this.f19388b;
        return "CacheKey(fontSize=" + i10 + ", isTitleEmpty=" + z10 + ")";
    }
}
