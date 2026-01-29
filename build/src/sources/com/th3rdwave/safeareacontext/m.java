package com.th3rdwave.safeareacontext;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m {

    /* renamed from: a  reason: collision with root package name */
    private final l f19442a;

    /* renamed from: b  reason: collision with root package name */
    private final l f19443b;

    /* renamed from: c  reason: collision with root package name */
    private final l f19444c;

    /* renamed from: d  reason: collision with root package name */
    private final l f19445d;

    public m(l top, l right, l bottom, l left) {
        Intrinsics.checkNotNullParameter(top, "top");
        Intrinsics.checkNotNullParameter(right, "right");
        Intrinsics.checkNotNullParameter(bottom, "bottom");
        Intrinsics.checkNotNullParameter(left, "left");
        this.f19442a = top;
        this.f19443b = right;
        this.f19444c = bottom;
        this.f19445d = left;
    }

    public final l a() {
        return this.f19444c;
    }

    public final l b() {
        return this.f19445d;
    }

    public final l c() {
        return this.f19443b;
    }

    public final l d() {
        return this.f19442a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof m) {
            m mVar = (m) obj;
            return this.f19442a == mVar.f19442a && this.f19443b == mVar.f19443b && this.f19444c == mVar.f19444c && this.f19445d == mVar.f19445d;
        }
        return false;
    }

    public int hashCode() {
        return (((((this.f19442a.hashCode() * 31) + this.f19443b.hashCode()) * 31) + this.f19444c.hashCode()) * 31) + this.f19445d.hashCode();
    }

    public String toString() {
        l lVar = this.f19442a;
        l lVar2 = this.f19443b;
        l lVar3 = this.f19444c;
        l lVar4 = this.f19445d;
        return "SafeAreaViewEdges(top=" + lVar + ", right=" + lVar2 + ", bottom=" + lVar3 + ", left=" + lVar4 + ")";
    }
}
