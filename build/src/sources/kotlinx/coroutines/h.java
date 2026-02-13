package kotlinx.coroutines;

import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class h {

    /* renamed from: a  reason: collision with root package name */
    public final Object f35606a;

    /* renamed from: b  reason: collision with root package name */
    public final d f35607b;

    /* renamed from: c  reason: collision with root package name */
    public final Function3 f35608c;

    /* renamed from: d  reason: collision with root package name */
    public final Object f35609d;

    /* renamed from: e  reason: collision with root package name */
    public final Throwable f35610e;

    public h(Object obj, d dVar, Function3 function3, Object obj2, Throwable th2) {
        this.f35606a = obj;
        this.f35607b = dVar;
        this.f35608c = function3;
        this.f35609d = obj2;
        this.f35610e = th2;
    }

    public static /* synthetic */ h b(h hVar, Object obj, d dVar, Function3 function3, Object obj2, Throwable th2, int i10, Object obj3) {
        if ((i10 & 1) != 0) {
            obj = hVar.f35606a;
        }
        if ((i10 & 2) != 0) {
            dVar = hVar.f35607b;
        }
        if ((i10 & 4) != 0) {
            function3 = hVar.f35608c;
        }
        if ((i10 & 8) != 0) {
            obj2 = hVar.f35609d;
        }
        if ((i10 & 16) != 0) {
            th2 = hVar.f35610e;
        }
        Throwable th3 = th2;
        Function3 function32 = function3;
        return hVar.a(obj, dVar, function32, obj2, th3);
    }

    public final h a(Object obj, d dVar, Function3 function3, Object obj2, Throwable th2) {
        return new h(obj, dVar, function3, obj2, th2);
    }

    public final boolean c() {
        if (this.f35610e != null) {
            return true;
        }
        return false;
    }

    public final void d(e eVar, Throwable th2) {
        d dVar = this.f35607b;
        if (dVar != null) {
            eVar.o(dVar, th2);
        }
        Function3 function3 = this.f35608c;
        if (function3 != null) {
            eVar.p(function3, th2, this.f35606a);
        }
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof h) {
            h hVar = (h) obj;
            return Intrinsics.areEqual(this.f35606a, hVar.f35606a) && Intrinsics.areEqual(this.f35607b, hVar.f35607b) && Intrinsics.areEqual(this.f35608c, hVar.f35608c) && Intrinsics.areEqual(this.f35609d, hVar.f35609d) && Intrinsics.areEqual(this.f35610e, hVar.f35610e);
        }
        return false;
    }

    public int hashCode() {
        Object obj = this.f35606a;
        int hashCode = (obj == null ? 0 : obj.hashCode()) * 31;
        d dVar = this.f35607b;
        int hashCode2 = (hashCode + (dVar == null ? 0 : dVar.hashCode())) * 31;
        Function3 function3 = this.f35608c;
        int hashCode3 = (hashCode2 + (function3 == null ? 0 : function3.hashCode())) * 31;
        Object obj2 = this.f35609d;
        int hashCode4 = (hashCode3 + (obj2 == null ? 0 : obj2.hashCode())) * 31;
        Throwable th2 = this.f35610e;
        return hashCode4 + (th2 != null ? th2.hashCode() : 0);
    }

    public String toString() {
        return "CompletedContinuation(result=" + this.f35606a + ", cancelHandler=" + this.f35607b + ", onCancellation=" + this.f35608c + ", idempotentResume=" + this.f35609d + ", cancelCause=" + this.f35610e + ')';
    }

    public /* synthetic */ h(Object obj, d dVar, Function3 function3, Object obj2, Throwable th2, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(obj, (i10 & 2) != 0 ? null : dVar, (i10 & 4) != 0 ? null : function3, (i10 & 8) != 0 ? null : obj2, (i10 & 16) != 0 ? null : th2);
    }
}
