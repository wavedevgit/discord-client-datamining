package com.swmansion.rnscreens.utils;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class b {

    /* renamed from: a  reason: collision with root package name */
    private final int f19388a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f19389b;

    public b(int i10, boolean z10) {
        this.f19388a = i10;
        this.f19389b = z10;
    }

    public final int a() {
        return this.f19388a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof b) {
            b bVar = (b) obj;
            return this.f19388a == bVar.f19388a && this.f19389b == bVar.f19389b;
        }
        return false;
    }

    public int hashCode() {
        return (Integer.hashCode(this.f19388a) * 31) + Boolean.hashCode(this.f19389b);
    }

    public String toString() {
        int i10 = this.f19388a;
        boolean z10 = this.f19389b;
        return "CacheKey(fontSize=" + i10 + ", isTitleEmpty=" + z10 + ")";
    }
}
