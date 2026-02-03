package js;

import kotlin.jvm.functions.Function1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class j {
    public static final g a(int i10, a aVar, Function1 function1) {
        if (i10 != -2) {
            if (i10 != -1) {
                if (i10 != 0) {
                    if (i10 != Integer.MAX_VALUE) {
                        if (aVar == a.f32204d) {
                            return new e(i10, function1);
                        }
                        return new r(i10, aVar, function1);
                    }
                    return new e(Integer.MAX_VALUE, function1);
                } else if (aVar == a.f32204d) {
                    return new e(0, function1);
                } else {
                    return new r(1, aVar, function1);
                }
            } else if (aVar == a.f32204d) {
                return new r(1, a.f32205e, function1);
            } else {
                throw new IllegalArgumentException("CONFLATED capacity cannot be used with non-default onBufferOverflow");
            }
        } else if (aVar == a.f32204d) {
            return new e(g.f32264g.a(), function1);
        } else {
            return new r(1, aVar, function1);
        }
    }

    public static /* synthetic */ g b(int i10, a aVar, Function1 function1, int i11, Object obj) {
        if ((i11 & 1) != 0) {
            i10 = 0;
        }
        if ((i11 & 2) != 0) {
            aVar = a.f32204d;
        }
        if ((i11 & 4) != 0) {
            function1 = null;
        }
        return a(i10, aVar, function1);
    }
}
