package yv;

import com.facebook.react.uimanager.ViewProps;
import java.util.List;
import kotlin.Result;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
import yv.s;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class q implements su.b, o {

    /* renamed from: a  reason: collision with root package name */
    public static final q f55703a = new q();

    private q() {
    }

    private final String a(r rVar) {
        s b10 = rVar.b();
        if (Intrinsics.areEqual(b10, s.c.f55709a)) {
            return StringsKt.n1(rVar.c(), rVar.a());
        }
        if (Intrinsics.areEqual(b10, s.b.f55708a)) {
            return StringsKt.m1(rVar.c(), rVar.a());
        }
        if (Intrinsics.areEqual(b10, s.a.f55707a)) {
            return StringsKt.l1(rVar.c(), rVar.a());
        }
        throw new qr.p();
    }

    private final r b(List list) {
        Object b10;
        try {
            Result.a aVar = Result.f32053e;
            Object obj = list.get(0);
            Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type kotlin.String");
            Object obj2 = list.get(1);
            Intrinsics.checkNotNull(obj2, "null cannot be cast to non-null type kotlin.String");
            char w12 = StringsKt.w1((String) obj2);
            q qVar = f55703a;
            Object obj3 = list.get(2);
            Intrinsics.checkNotNull(obj3, "null cannot be cast to non-null type kotlin.String");
            b10 = Result.b(new r((String) obj, w12, qVar.c((String) obj3)));
        } catch (Throwable th2) {
            Result.a aVar2 = Result.f32053e;
            b10 = Result.b(kotlin.c.a(th2));
        }
        if (Result.e(b10) == null) {
            return (r) b10;
        }
        return null;
    }

    private final s c(String str) {
        if (str != null) {
            int hashCode = str.hashCode();
            if (hashCode != 100571) {
                if (hashCode != 109757538) {
                    if (hashCode == 2144573977 && str.equals("bothEnds")) {
                        return s.a.f55707a;
                    }
                } else if (str.equals(ViewProps.START)) {
                    return s.c.f55709a;
                }
            } else if (str.equals(ViewProps.END)) {
                return s.b.f55708a;
            }
        }
        throw new IllegalStateException("Invalid TrimMode value");
    }

    @Override // su.b
    public Object f(Object obj, Object obj2) {
        r b10 = b(cw.a.c(obj));
        if (b10 != null) {
            return a(b10);
        }
        return null;
    }
}
