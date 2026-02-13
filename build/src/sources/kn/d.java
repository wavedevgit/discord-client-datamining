package kn;

import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements f {

    /* renamed from: b  reason: collision with root package name */
    private final Object f32506b;

    /* renamed from: c  reason: collision with root package name */
    private final List f32507c;

    public d(Object beneathModals, List modals) {
        Intrinsics.checkNotNullParameter(beneathModals, "beneathModals");
        Intrinsics.checkNotNullParameter(modals, "modals");
        this.f32506b = beneathModals;
        this.f32507c = modals;
    }

    @Override // kn.f
    public List a() {
        return this.f32507c;
    }

    @Override // kn.f
    public Object b() {
        return this.f32506b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof d)) {
            return false;
        }
        d dVar = (d) obj;
        if (Intrinsics.areEqual(b(), dVar.b()) && Intrinsics.areEqual(a(), dVar.a())) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (b().hashCode() * 31) + a().hashCode();
    }

    public String toString() {
        return "AlertContainerScreen(beneathModals=" + b() + ", modals=" + a() + ')';
    }

    public /* synthetic */ d(Object obj, List list, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(obj, (i10 & 2) != 0 ? CollectionsKt.l() : list);
    }
}
