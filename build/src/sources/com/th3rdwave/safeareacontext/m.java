package com.th3rdwave.safeareacontext;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m {

    /* renamed from: a  reason: collision with root package name */
    private final l f19463a;

    /* renamed from: b  reason: collision with root package name */
    private final l f19464b;

    /* renamed from: c  reason: collision with root package name */
    private final l f19465c;

    /* renamed from: d  reason: collision with root package name */
    private final l f19466d;

    public m(l top, l right, l bottom, l left) {
        Intrinsics.checkNotNullParameter(top, "top");
        Intrinsics.checkNotNullParameter(right, "right");
        Intrinsics.checkNotNullParameter(bottom, "bottom");
        Intrinsics.checkNotNullParameter(left, "left");
        this.f19463a = top;
        this.f19464b = right;
        this.f19465c = bottom;
        this.f19466d = left;
    }

    public final l a() {
        return this.f19465c;
    }

    public final l b() {
        return this.f19466d;
    }

    public final l c() {
        return this.f19464b;
    }

    public final l d() {
        return this.f19463a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof m) {
            m mVar = (m) obj;
            return this.f19463a == mVar.f19463a && this.f19464b == mVar.f19464b && this.f19465c == mVar.f19465c && this.f19466d == mVar.f19466d;
        }
        return false;
    }

    public int hashCode() {
        return (((((this.f19463a.hashCode() * 31) + this.f19464b.hashCode()) * 31) + this.f19465c.hashCode()) * 31) + this.f19466d.hashCode();
    }

    public String toString() {
        l lVar = this.f19463a;
        l lVar2 = this.f19464b;
        l lVar3 = this.f19465c;
        l lVar4 = this.f19466d;
        return "SafeAreaViewEdges(top=" + lVar + ", right=" + lVar2 + ", bottom=" + lVar3 + ", left=" + lVar4 + ")";
    }
}
