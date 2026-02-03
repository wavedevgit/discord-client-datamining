package kotlinx.coroutines;

import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class h {

    /* renamed from: a  reason: collision with root package name */
    public final Object f35514a;

    /* renamed from: b  reason: collision with root package name */
    public final d f35515b;

    /* renamed from: c  reason: collision with root package name */
    public final Function3 f35516c;

    /* renamed from: d  reason: collision with root package name */
    public final Object f35517d;

    /* renamed from: e  reason: collision with root package name */
    public final Throwable f35518e;

    public h(Object obj, d dVar, Function3 function3, Object obj2, Throwable th2) {
        this.f35514a = obj;
        this.f35515b = dVar;
        this.f35516c = function3;
        this.f35517d = obj2;
        this.f35518e = th2;
    }

    public static /* synthetic */ h b(h hVar, Object obj, d dVar, Function3 function3, Object obj2, Throwable th2, int i10, Object obj3) {
        if ((i10 & 1) != 0) {
            obj = hVar.f35514a;
        }
        if ((i10 & 2) != 0) {
            dVar = hVar.f35515b;
        }
        if ((i10 & 4) != 0) {
            function3 = hVar.f35516c;
        }
        if ((i10 & 8) != 0) {
            obj2 = hVar.f35517d;
        }
        if ((i10 & 16) != 0) {
            th2 = hVar.f35518e;
        }
        Throwable th3 = th2;
        Function3 function32 = function3;
        return hVar.a(obj, dVar, function32, obj2, th3);
    }

    public final h a(Object obj, d dVar, Function3 function3, Object obj2, Throwable th2) {
        return new h(obj, dVar, function3, obj2, th2);
    }

    public final boolean c() {
        if (this.f35518e != null) {
            return true;
        }
        return false;
    }

    public final void d(e eVar, Throwable th2) {
        d dVar = this.f35515b;
        if (dVar != null) {
            eVar.o(dVar, th2);
        }
        Function3 function3 = this.f35516c;
        if (function3 != null) {
            eVar.r(function3, th2, this.f35514a);
        }
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof h) {
            h hVar = (h) obj;
            return Intrinsics.areEqual(this.f35514a, hVar.f35514a) && Intrinsics.areEqual(this.f35515b, hVar.f35515b) && Intrinsics.areEqual(this.f35516c, hVar.f35516c) && Intrinsics.areEqual(this.f35517d, hVar.f35517d) && Intrinsics.areEqual(this.f35518e, hVar.f35518e);
        }
        return false;
    }

    public int hashCode() {
        Object obj = this.f35514a;
        int hashCode = (obj == null ? 0 : obj.hashCode()) * 31;
        d dVar = this.f35515b;
        int hashCode2 = (hashCode + (dVar == null ? 0 : dVar.hashCode())) * 31;
        Function3 function3 = this.f35516c;
        int hashCode3 = (hashCode2 + (function3 == null ? 0 : function3.hashCode())) * 31;
        Object obj2 = this.f35517d;
        int hashCode4 = (hashCode3 + (obj2 == null ? 0 : obj2.hashCode())) * 31;
        Throwable th2 = this.f35518e;
        return hashCode4 + (th2 != null ? th2.hashCode() : 0);
    }

    public String toString() {
        return "CompletedContinuation(result=" + this.f35514a + ", cancelHandler=" + this.f35515b + ", onCancellation=" + this.f35516c + ", idempotentResume=" + this.f35517d + ", cancelCause=" + this.f35518e + ')';
    }

    public /* synthetic */ h(Object obj, d dVar, Function3 function3, Object obj2, Throwable th2, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(obj, (i10 & 2) != 0 ? null : dVar, (i10 & 4) != 0 ? null : function3, (i10 & 8) != 0 ? null : obj2, (i10 & 16) != 0 ? null : th2);
    }
}
