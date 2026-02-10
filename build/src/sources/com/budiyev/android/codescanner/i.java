package com.budiyev.android.codescanner;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class i {

    /* renamed from: a  reason: collision with root package name */
    private final int f9085a;

    /* renamed from: b  reason: collision with root package name */
    private final int f9086b;

    public i(int i10, int i11) {
        this.f9085a = i10;
        this.f9086b = i11;
    }

    public int a() {
        return this.f9085a;
    }

    public int b() {
        return this.f9086b;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof i) {
            i iVar = (i) obj;
            if (this.f9085a == iVar.f9085a && this.f9086b == iVar.f9086b) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10 = this.f9085a;
        int i11 = this.f9086b;
        return i10 ^ ((i11 >>> 16) | (i11 << 16));
    }

    public String toString() {
        return "(" + this.f9085a + "; " + this.f9086b + ")";
    }
}
