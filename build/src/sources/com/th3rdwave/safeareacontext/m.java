package com.th3rdwave.safeareacontext;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m {

    /* renamed from: a  reason: collision with root package name */
    private final l f19464a;

    /* renamed from: b  reason: collision with root package name */
    private final l f19465b;

    /* renamed from: c  reason: collision with root package name */
    private final l f19466c;

    /* renamed from: d  reason: collision with root package name */
    private final l f19467d;

    public m(l top, l right, l bottom, l left) {
        Intrinsics.checkNotNullParameter(top, "top");
        Intrinsics.checkNotNullParameter(right, "right");
        Intrinsics.checkNotNullParameter(bottom, "bottom");
        Intrinsics.checkNotNullParameter(left, "left");
        this.f19464a = top;
        this.f19465b = right;
        this.f19466c = bottom;
        this.f19467d = left;
    }

    public final l a() {
        return this.f19466c;
    }

    public final l b() {
        return this.f19467d;
    }

    public final l c() {
        return this.f19465b;
    }

    public final l d() {
        return this.f19464a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof m) {
            m mVar = (m) obj;
            return this.f19464a == mVar.f19464a && this.f19465b == mVar.f19465b && this.f19466c == mVar.f19466c && this.f19467d == mVar.f19467d;
        }
        return false;
    }

    public int hashCode() {
        return (((((this.f19464a.hashCode() * 31) + this.f19465b.hashCode()) * 31) + this.f19466c.hashCode()) * 31) + this.f19467d.hashCode();
    }

    public String toString() {
        l lVar = this.f19464a;
        l lVar2 = this.f19465b;
        l lVar3 = this.f19466c;
        l lVar4 = this.f19467d;
        return "SafeAreaViewEdges(top=" + lVar + ", right=" + lVar2 + ", bottom=" + lVar3 + ", left=" + lVar4 + ")";
    }
}
