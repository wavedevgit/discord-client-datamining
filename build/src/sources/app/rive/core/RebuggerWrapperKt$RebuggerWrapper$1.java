package app.rive.core;

import android.support.v4.media.session.b;
import java.util.Map;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Lambda;
import w0.a;
import w0.x;
@Metadata(k = 3, mv = {1, 9, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class RebuggerWrapperKt$RebuggerWrapper$1 extends Lambda implements Function2<a, Integer, Unit> {
    final /* synthetic */ int $$changed;
    final /* synthetic */ Map<String, Object> $trackMap;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    RebuggerWrapperKt$RebuggerWrapper$1(Map<String, ? extends Object> map, int i10) {
        super(2);
        this.$trackMap = map;
        this.$$changed = i10;
    }

    @Override // kotlin.jvm.functions.Function2
    public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2) {
        b.a(obj);
        invoke((a) null, ((Number) obj2).intValue());
        return Unit.f33074a;
    }

    public final void invoke(a aVar, int i10) {
        RebuggerWrapperKt.RebuggerWrapper(this.$trackMap, aVar, x.a(this.$$changed | 1));
    }
}
