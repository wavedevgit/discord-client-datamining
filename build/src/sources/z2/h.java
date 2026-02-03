package z2;

import androidx.datastore.preferences.protobuf.w;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.List;
import java.util.Map;
import java.util.Set;
import jr.p;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.coroutines.Continuation;
import kotlin.jvm.internal.Intrinsics;
import w2.k;
import y2.d;
import y2.f;
import z2.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class h implements k {

    /* renamed from: a  reason: collision with root package name */
    public static final h f55431a = new h();

    /* renamed from: b  reason: collision with root package name */
    private static final String f55432b = "preferences_pb";

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f55433a;

        static {
            int[] iArr = new int[f.b.values().length];
            iArr[f.b.BOOLEAN.ordinal()] = 1;
            iArr[f.b.FLOAT.ordinal()] = 2;
            iArr[f.b.DOUBLE.ordinal()] = 3;
            iArr[f.b.INTEGER.ordinal()] = 4;
            iArr[f.b.LONG.ordinal()] = 5;
            iArr[f.b.STRING.ordinal()] = 6;
            iArr[f.b.STRING_SET.ordinal()] = 7;
            iArr[f.b.VALUE_NOT_SET.ordinal()] = 8;
            f55433a = iArr;
        }
    }

    private h() {
    }

    private final void d(String str, y2.f fVar, z2.a aVar) {
        int i10;
        f.b S = fVar.S();
        if (S == null) {
            i10 = -1;
        } else {
            i10 = a.f55433a[S.ordinal()];
        }
        switch (i10) {
            case -1:
                throw new w2.a("Value case is null.", null, 2, null);
            case 0:
            default:
                throw new p();
            case 1:
                aVar.i(f.a(str), Boolean.valueOf(fVar.J()));
                return;
            case 2:
                aVar.i(f.c(str), Float.valueOf(fVar.N()));
                return;
            case 3:
                aVar.i(f.b(str), Double.valueOf(fVar.M()));
                return;
            case 4:
                aVar.i(f.d(str), Integer.valueOf(fVar.O()));
                return;
            case 5:
                aVar.i(f.e(str), Long.valueOf(fVar.P()));
                return;
            case 6:
                d.a f10 = f.f(str);
                String Q = fVar.Q();
                Intrinsics.checkNotNullExpressionValue(Q, "value.string");
                aVar.i(f10, Q);
                return;
            case 7:
                d.a g10 = f.g(str);
                List G = fVar.R().G();
                Intrinsics.checkNotNullExpressionValue(G, "value.stringSet.stringsList");
                aVar.i(g10, CollectionsKt.l1(G));
                return;
            case 8:
                throw new w2.a("Value not set.", null, 2, null);
        }
    }

    private final y2.f g(Object obj) {
        if (obj instanceof Boolean) {
            w g10 = y2.f.T().q(((Boolean) obj).booleanValue()).g();
            Intrinsics.checkNotNullExpressionValue(g10, "newBuilder().setBoolean(value).build()");
            return (y2.f) g10;
        } else if (obj instanceof Float) {
            w g11 = y2.f.T().s(((Number) obj).floatValue()).g();
            Intrinsics.checkNotNullExpressionValue(g11, "newBuilder().setFloat(value).build()");
            return (y2.f) g11;
        } else if (obj instanceof Double) {
            w g12 = y2.f.T().r(((Number) obj).doubleValue()).g();
            Intrinsics.checkNotNullExpressionValue(g12, "newBuilder().setDouble(value).build()");
            return (y2.f) g12;
        } else if (obj instanceof Integer) {
            w g13 = y2.f.T().t(((Number) obj).intValue()).g();
            Intrinsics.checkNotNullExpressionValue(g13, "newBuilder().setInteger(value).build()");
            return (y2.f) g13;
        } else if (obj instanceof Long) {
            w g14 = y2.f.T().u(((Number) obj).longValue()).g();
            Intrinsics.checkNotNullExpressionValue(g14, "newBuilder().setLong(value).build()");
            return (y2.f) g14;
        } else if (obj instanceof String) {
            w g15 = y2.f.T().v((String) obj).g();
            Intrinsics.checkNotNullExpressionValue(g15, "newBuilder().setString(value).build()");
            return (y2.f) g15;
        } else if (obj instanceof Set) {
            w g16 = y2.f.T().w(y2.e.H().q((Set) obj)).g();
            Intrinsics.checkNotNullExpressionValue(g16, "newBuilder().setStringSet(\n                    StringSet.newBuilder().addAllStrings(value as Set<String>)\n                ).build()");
            return (y2.f) g16;
        } else {
            throw new IllegalStateException(Intrinsics.stringPlus("PreferencesSerializer does not support type: ", obj.getClass().getName()));
        }
    }

    @Override // w2.k
    public Object c(InputStream inputStream, Continuation continuation) {
        y2.d a10 = y2.b.f53882a.a(inputStream);
        z2.a b10 = e.b(new d.b[0]);
        Map E = a10.E();
        Intrinsics.checkNotNullExpressionValue(E, "preferencesProto.preferencesMap");
        for (Map.Entry entry : E.entrySet()) {
            String name = (String) entry.getKey();
            y2.f value = (y2.f) entry.getValue();
            h hVar = f55431a;
            Intrinsics.checkNotNullExpressionValue(name, "name");
            Intrinsics.checkNotNullExpressionValue(value, "value");
            hVar.d(name, value, b10);
        }
        return b10.d();
    }

    @Override // w2.k
    /* renamed from: e */
    public d a() {
        return e.a();
    }

    public final String f() {
        return f55432b;
    }

    @Override // w2.k
    /* renamed from: h */
    public Object b(d dVar, OutputStream outputStream, Continuation continuation) {
        Map a10 = dVar.a();
        d.a H = y2.d.H();
        for (Map.Entry entry : a10.entrySet()) {
            H.q(((d.a) entry.getKey()).a(), g(entry.getValue()));
        }
        ((y2.d) H.g()).g(outputStream);
        return Unit.f33074a;
    }
}
