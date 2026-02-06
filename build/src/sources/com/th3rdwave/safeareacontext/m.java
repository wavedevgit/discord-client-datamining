package com.th3rdwave.safeareacontext;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m {

    /* renamed from: a  reason: collision with root package name */
    private final l f18443a;

    /* renamed from: b  reason: collision with root package name */
    private final l f18444b;

    /* renamed from: c  reason: collision with root package name */
    private final l f18445c;

    /* renamed from: d  reason: collision with root package name */
    private final l f18446d;

    public m(l top, l right, l bottom, l left) {
        Intrinsics.checkNotNullParameter(top, "top");
        Intrinsics.checkNotNullParameter(right, "right");
        Intrinsics.checkNotNullParameter(bottom, "bottom");
        Intrinsics.checkNotNullParameter(left, "left");
        this.f18443a = top;
        this.f18444b = right;
        this.f18445c = bottom;
        this.f18446d = left;
    }

    public final l a() {
        return this.f18445c;
    }

    public final l b() {
        return this.f18446d;
    }

    public final l c() {
        return this.f18444b;
    }

    public final l d() {
        return this.f18443a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof m) {
            m mVar = (m) obj;
            return this.f18443a == mVar.f18443a && this.f18444b == mVar.f18444b && this.f18445c == mVar.f18445c && this.f18446d == mVar.f18446d;
        }
        return false;
    }

    public int hashCode() {
        return (((((this.f18443a.hashCode() * 31) + this.f18444b.hashCode()) * 31) + this.f18445c.hashCode()) * 31) + this.f18446d.hashCode();
    }

    public String toString() {
        l lVar = this.f18443a;
        l lVar2 = this.f18444b;
        l lVar3 = this.f18445c;
        l lVar4 = this.f18446d;
        return "SafeAreaViewEdges(top=" + lVar + ", right=" + lVar2 + ", bottom=" + lVar3 + ", left=" + lVar4 + ")";
    }
}
