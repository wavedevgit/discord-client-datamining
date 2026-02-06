package bn;

import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.reflect.KClass;
import kotlin.reflect.KType;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract /* synthetic */ class c0 {

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class a extends FunctionReferenceImpl implements Function0 {
        a(Object obj) {
            super(0, obj, c.class, "describeRealIdentifier", "describeRealIdentifier()Ljava/lang/String;", 0);
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final String invoke() {
            return ((c) this.receiver).a();
        }
    }

    public static final s a(q qVar) {
        c cVar;
        s c10;
        Intrinsics.checkNotNullParameter(qVar, "<this>");
        a aVar = null;
        if (qVar instanceof c) {
            cVar = (c) qVar;
        } else {
            cVar = null;
        }
        KClass orCreateKotlinClass = Reflection.getOrCreateKotlinClass(qVar.getClass());
        if (cVar == null) {
            c10 = null;
        } else {
            c10 = cVar.c();
        }
        if (cVar != null) {
            aVar = new a(cVar);
        }
        return new s(orCreateKotlinClass, c10, aVar);
    }

    public static final s b(KType type) {
        Intrinsics.checkNotNullParameter(type, "type");
        return new s(type, null, null, 6, null);
    }
}
