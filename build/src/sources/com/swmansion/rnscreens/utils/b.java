package com.swmansion.rnscreens.utils;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class b {

    /* renamed from: a  reason: collision with root package name */
    private final int f18361a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f18362b;

    public b(int i10, boolean z10) {
        this.f18361a = i10;
        this.f18362b = z10;
    }

    public final int a() {
        return this.f18361a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof b) {
            b bVar = (b) obj;
            return this.f18361a == bVar.f18361a && this.f18362b == bVar.f18362b;
        }
        return false;
    }

    public int hashCode() {
        return (Integer.hashCode(this.f18361a) * 31) + Boolean.hashCode(this.f18362b);
    }

    public String toString() {
        int i10 = this.f18361a;
        boolean z10 = this.f18362b;
        return "CacheKey(fontSize=" + i10 + ", isTitleEmpty=" + z10 + ")";
    }
}
