package com.budiyev.android.codescanner;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class i {

    /* renamed from: a  reason: collision with root package name */
    private final int f8368a;

    /* renamed from: b  reason: collision with root package name */
    private final int f8369b;

    public i(int i10, int i11) {
        this.f8368a = i10;
        this.f8369b = i11;
    }

    public int a() {
        return this.f8368a;
    }

    public int b() {
        return this.f8369b;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof i) {
            i iVar = (i) obj;
            if (this.f8368a == iVar.f8368a && this.f8369b == iVar.f8369b) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10 = this.f8368a;
        int i11 = this.f8369b;
        return i10 ^ ((i11 >>> 16) | (i11 << 16));
    }

    public String toString() {
        return "(" + this.f8368a + "; " + this.f8369b + ")";
    }
}
