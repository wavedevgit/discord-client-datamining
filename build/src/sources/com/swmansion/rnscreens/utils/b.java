package com.swmansion.rnscreens.utils;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class b {

    /* renamed from: a  reason: collision with root package name */
    private final int f18993a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f18994b;

    public b(int i10, boolean z10) {
        this.f18993a = i10;
        this.f18994b = z10;
    }

    public final int a() {
        return this.f18993a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof b) {
            b bVar = (b) obj;
            return this.f18993a == bVar.f18993a && this.f18994b == bVar.f18994b;
        }
        return false;
    }

    public int hashCode() {
        return (Integer.hashCode(this.f18993a) * 31) + Boolean.hashCode(this.f18994b);
    }

    public String toString() {
        int i10 = this.f18993a;
        boolean z10 = this.f18994b;
        return "CacheKey(fontSize=" + i10 + ", isTitleEmpty=" + z10 + ")";
    }
}
