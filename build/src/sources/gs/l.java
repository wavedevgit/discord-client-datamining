package gs;

import gs.h;
import java.lang.reflect.Member;
import java.lang.reflect.Type;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class l implements h {

    /* renamed from: a  reason: collision with root package name */
    public static final l f26597a = new l();

    private l() {
    }

    @Override // gs.h
    public List a() {
        return CollectionsKt.l();
    }

    @Override // gs.h
    public /* bridge */ /* synthetic */ Member b() {
        return (Member) d();
    }

    @Override // gs.h
    public boolean c() {
        return h.a.b(this);
    }

    @Override // gs.h
    public Object call(Object[] args) {
        Intrinsics.checkNotNullParameter(args, "args");
        throw new UnsupportedOperationException("call/callBy are not supported for this declaration.");
    }

    public Void d() {
        return null;
    }

    @Override // gs.h
    public Type getReturnType() {
        Class TYPE = Void.TYPE;
        Intrinsics.checkNotNullExpressionValue(TYPE, "TYPE");
        return TYPE;
    }
}
