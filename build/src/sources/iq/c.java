package iq;

import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private Function0 f29630a = new Function0() { // from class: iq.b
        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            Unit d10;
            d10 = c.d();
            return d10;
        }
    };

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit d() {
        return Unit.f31765a;
    }

    public final Function0 b() {
        return this.f29630a;
    }

    public final void c(Function0 function0) {
        Intrinsics.checkNotNullParameter(function0, "<set-?>");
        this.f29630a = function0;
    }
}
