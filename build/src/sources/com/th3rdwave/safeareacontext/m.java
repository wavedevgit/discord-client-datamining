package com.th3rdwave.safeareacontext;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m {

    /* renamed from: a  reason: collision with root package name */
    private final l f18463a;

    /* renamed from: b  reason: collision with root package name */
    private final l f18464b;

    /* renamed from: c  reason: collision with root package name */
    private final l f18465c;

    /* renamed from: d  reason: collision with root package name */
    private final l f18466d;

    public m(l top, l right, l bottom, l left) {
        Intrinsics.checkNotNullParameter(top, "top");
        Intrinsics.checkNotNullParameter(right, "right");
        Intrinsics.checkNotNullParameter(bottom, "bottom");
        Intrinsics.checkNotNullParameter(left, "left");
        this.f18463a = top;
        this.f18464b = right;
        this.f18465c = bottom;
        this.f18466d = left;
    }

    public final l a() {
        return this.f18465c;
    }

    public final l b() {
        return this.f18466d;
    }

    public final l c() {
        return this.f18464b;
    }

    public final l d() {
        return this.f18463a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof m) {
            m mVar = (m) obj;
            return this.f18463a == mVar.f18463a && this.f18464b == mVar.f18464b && this.f18465c == mVar.f18465c && this.f18466d == mVar.f18466d;
        }
        return false;
    }

    public int hashCode() {
        return (((((this.f18463a.hashCode() * 31) + this.f18464b.hashCode()) * 31) + this.f18465c.hashCode()) * 31) + this.f18466d.hashCode();
    }

    public String toString() {
        l lVar = this.f18463a;
        l lVar2 = this.f18464b;
        l lVar3 = this.f18465c;
        l lVar4 = this.f18466d;
        return "SafeAreaViewEdges(top=" + lVar + ", right=" + lVar2 + ", bottom=" + lVar3 + ", left=" + lVar4 + ")";
    }
}
