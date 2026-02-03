package com.budiyev.android.codescanner;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class i {

    /* renamed from: a  reason: collision with root package name */
    private final int f9116a;

    /* renamed from: b  reason: collision with root package name */
    private final int f9117b;

    public i(int i10, int i11) {
        this.f9116a = i10;
        this.f9117b = i11;
    }

    public int a() {
        return this.f9116a;
    }

    public int b() {
        return this.f9117b;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof i) {
            i iVar = (i) obj;
            if (this.f9116a == iVar.f9116a && this.f9117b == iVar.f9117b) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10 = this.f9116a;
        int i11 = this.f9117b;
        return i10 ^ ((i11 >>> 16) | (i11 << 16));
    }

    public String toString() {
        return "(" + this.f9116a + "; " + this.f9117b + ")";
    }
}
