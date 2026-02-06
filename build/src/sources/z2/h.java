package z2;

import androidx.datastore.preferences.protobuf.w;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.List;
import java.util.Map;
import java.util.Set;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.coroutines.Continuation;
import kotlin.jvm.internal.Intrinsics;
import qr.p;
import w2.k;
import y2.d;
import y2.f;
import z2.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class h implements k {

    /* renamed from: a  reason: collision with root package name */
    public static final h f55886a = new h();

    /* renamed from: b  reason: collision with root package name */
    private static final String f55887b = "preferences_pb";

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f55888a;

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
            f55888a = iArr;
        }
    }

    private h() {
    }

    private final void d(String str, y2.f fVar, z2.a aVar) {
        int i10;
        f.b T = fVar.T();
        if (T == null) {
            i10 = -1;
        } else {
            i10 = a.f55888a[T.ordinal()];
        }
        switch (i10) {
            case -1:
                throw new w2.a("Value case is null.", null, 2, null);
            case 0:
            default:
                throw new p();
            case 1:
                aVar.i(f.a(str), Boolean.valueOf(fVar.K()));
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
                aVar.i(f.e(str), Long.valueOf(fVar.Q()));
                return;
            case 6:
                d.a f10 = f.f(str);
                String R = fVar.R();
                Intrinsics.checkNotNullExpressionValue(R, "value.string");
                aVar.i(f10, R);
                return;
            case 7:
                d.a g10 = f.g(str);
                List H = fVar.S().H();
                Intrinsics.checkNotNullExpressionValue(H, "value.stringSet.stringsList");
                aVar.i(g10, CollectionsKt.l1(H));
                return;
            case 8:
                throw new w2.a("Value not set.", null, 2, null);
        }
    }

    private final y2.f g(Object obj) {
        if (obj instanceof Boolean) {
            w h10 = y2.f.U().q(((Boolean) obj).booleanValue()).h();
            Intrinsics.checkNotNullExpressionValue(h10, "newBuilder().setBoolean(value).build()");
            return (y2.f) h10;
        } else if (obj instanceof Float) {
            w h11 = y2.f.U().t(((Number) obj).floatValue()).h();
            Intrinsics.checkNotNullExpressionValue(h11, "newBuilder().setFloat(value).build()");
            return (y2.f) h11;
        } else if (obj instanceof Double) {
            w h12 = y2.f.U().r(((Number) obj).doubleValue()).h();
            Intrinsics.checkNotNullExpressionValue(h12, "newBuilder().setDouble(value).build()");
            return (y2.f) h12;
        } else if (obj instanceof Integer) {
            w h13 = y2.f.U().u(((Number) obj).intValue()).h();
            Intrinsics.checkNotNullExpressionValue(h13, "newBuilder().setInteger(value).build()");
            return (y2.f) h13;
        } else if (obj instanceof Long) {
            w h14 = y2.f.U().v(((Number) obj).longValue()).h();
            Intrinsics.checkNotNullExpressionValue(h14, "newBuilder().setLong(value).build()");
            return (y2.f) h14;
        } else if (obj instanceof String) {
            w h15 = y2.f.U().w((String) obj).h();
            Intrinsics.checkNotNullExpressionValue(h15, "newBuilder().setString(value).build()");
            return (y2.f) h15;
        } else if (obj instanceof Set) {
            w h16 = y2.f.U().x(y2.e.I().q((Set) obj)).h();
            Intrinsics.checkNotNullExpressionValue(h16, "newBuilder().setStringSet(\n                    StringSet.newBuilder().addAllStrings(value as Set<String>)\n                ).build()");
            return (y2.f) h16;
        } else {
            throw new IllegalStateException(Intrinsics.stringPlus("PreferencesSerializer does not support type: ", obj.getClass().getName()));
        }
    }

    @Override // w2.k
    public Object c(InputStream inputStream, Continuation continuation) {
        y2.d a10 = y2.b.f54877a.a(inputStream);
        z2.a b10 = e.b(new d.b[0]);
        Map F = a10.F();
        Intrinsics.checkNotNullExpressionValue(F, "preferencesProto.preferencesMap");
        for (Map.Entry entry : F.entrySet()) {
            String name = (String) entry.getKey();
            y2.f value = (y2.f) entry.getValue();
            h hVar = f55886a;
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
        return f55887b;
    }

    @Override // w2.k
    /* renamed from: h */
    public Object b(d dVar, OutputStream outputStream, Continuation continuation) {
        Map a10 = dVar.a();
        d.a I = y2.d.I();
        for (Map.Entry entry : a10.entrySet()) {
            I.q(((d.a) entry.getKey()).a(), g(entry.getValue()));
        }
        ((y2.d) I.h()).g(outputStream);
        return Unit.f32008a;
    }
}
