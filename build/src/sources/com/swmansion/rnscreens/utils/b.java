package com.swmansion.rnscreens.utils;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class b {

    /* renamed from: a  reason: collision with root package name */
    private final int f17975a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f17976b;

    public b(int i10, boolean z10) {
        this.f17975a = i10;
        this.f17976b = z10;
    }

    public final int a() {
        return this.f17975a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof b) {
            b bVar = (b) obj;
            return this.f17975a == bVar.f17975a && this.f17976b == bVar.f17976b;
        }
        return false;
    }

    public int hashCode() {
        return (Integer.hashCode(this.f17975a) * 31) + Boolean.hashCode(this.f17976b);
    }

    public String toString() {
        int i10 = this.f17975a;
        boolean z10 = this.f17976b;
        return "CacheKey(fontSize=" + i10 + ", isTitleEmpty=" + z10 + ")";
    }
}
