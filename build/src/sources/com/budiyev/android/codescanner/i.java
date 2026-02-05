package com.budiyev.android.codescanner;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class i {

    /* renamed from: a  reason: collision with root package name */
    private final int f8469a;

    /* renamed from: b  reason: collision with root package name */
    private final int f8470b;

    public i(int i10, int i11) {
        this.f8469a = i10;
        this.f8470b = i11;
    }

    public int a() {
        return this.f8469a;
    }

    public int b() {
        return this.f8470b;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof i) {
            i iVar = (i) obj;
            if (this.f8469a == iVar.f8469a && this.f8470b == iVar.f8470b) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10 = this.f8469a;
        int i11 = this.f8470b;
        return i10 ^ ((i11 >>> 16) | (i11 << 16));
    }

    public String toString() {
        return "(" + this.f8469a + "; " + this.f8470b + ")";
    }
}
