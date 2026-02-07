package qr;

import kotlin.Lazy;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class m {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f48090a;

        static {
            int[] iArr = new int[o.values().length];
            try {
                iArr[o.f48091d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[o.f48092e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[o.f48093i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            f48090a = iArr;
        }
    }

    public static Lazy a(Function0 initializer) {
        Intrinsics.checkNotNullParameter(initializer, "initializer");
        return new t(initializer, null, 2, null);
    }

    public static Lazy b(o mode, Function0 initializer) {
        Intrinsics.checkNotNullParameter(mode, "mode");
        Intrinsics.checkNotNullParameter(initializer, "initializer");
        int i10 = a.f48090a[mode.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 == 3) {
                    return new h0(initializer);
                }
                throw new p();
            }
            return new s(initializer);
        }
        return new t(initializer, null, 2, null);
    }
}
