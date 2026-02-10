package com.swmansion.rnscreens.utils;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class b {

    /* renamed from: a  reason: collision with root package name */
    private final int f18501a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f18502b;

    public b(int i10, boolean z10) {
        this.f18501a = i10;
        this.f18502b = z10;
    }

    public final int a() {
        return this.f18501a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof b) {
            b bVar = (b) obj;
            return this.f18501a == bVar.f18501a && this.f18502b == bVar.f18502b;
        }
        return false;
    }

    public int hashCode() {
        return (Integer.hashCode(this.f18501a) * 31) + Boolean.hashCode(this.f18502b);
    }

    public String toString() {
        int i10 = this.f18501a;
        boolean z10 = this.f18502b;
        return "CacheKey(fontSize=" + i10 + ", isTitleEmpty=" + z10 + ")";
    }
}
