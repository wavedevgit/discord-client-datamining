package defpackage;

import defpackage.g;
import java.util.Map;
import kotlin.Result;
import kotlin.c;
import kotlin.jvm.internal.Intrinsics;
/* renamed from: a  reason: default package */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a implements e {

    /* renamed from: a  reason: collision with root package name */
    private final h f3a;

    public a(h evaluator) {
        Intrinsics.checkNotNullParameter(evaluator, "evaluator");
        this.f3a = evaluator;
    }

    private final g b(Map map, Object obj) {
        Object b10;
        try {
            Result.a aVar = Result.f33295e;
            b10 = Result.b(this.f3a.a(map, obj));
        } catch (Throwable th2) {
            Result.a aVar2 = Result.f33295e;
            b10 = Result.b(c.a(th2));
        }
        if (Result.e(b10) == null) {
            return c(b10);
        }
        return g.a.b.f25535a;
    }

    private final g c(Object obj) {
        if (obj != null) {
            return new g.b(d(obj));
        }
        return g.a.c.f25536a;
    }

    private final Object d(Object obj) {
        if (obj instanceof Double) {
            Number number = (Number) obj;
            double doubleValue = number.doubleValue() % 1.0d;
            if (doubleValue != 0.0d && Math.signum(doubleValue) != Math.signum(1.0d)) {
                doubleValue += 1.0d;
            }
            if (doubleValue == 0.0d) {
                return Long.valueOf((long) number.doubleValue());
            }
            return obj;
        }
        return obj;
    }

    @Override // defpackage.e
    public g a(Map expression, Object obj) {
        Map map;
        g b10;
        Intrinsics.checkNotNullParameter(expression, "expression");
        if (!expression.isEmpty()) {
            map = expression;
        } else {
            map = null;
        }
        if (map != null && (b10 = b(expression, obj)) != null) {
            return b10;
        }
        return g.a.C0332a.f25534a;
    }
}
