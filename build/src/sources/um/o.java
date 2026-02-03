package um;

import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.reflect.KType;
import kotlinx.coroutines.flow.Flow;
@Metadata(d1 = {"\u0000\u001a\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u0003\bf\u0018\u0000 \b*\u0006\b\u0000\u0010\u0001 \u00012\u00020\u0002:\u0001\bJ\u0015\u0010\u0004\u001a\b\u0012\u0004\u0012\u00028\u00000\u0003H&¢\u0006\u0004\b\u0004\u0010\u0005J\u001b\u0010\b\u001a\u00020\u00072\n\u0010\u0006\u001a\u0006\u0012\u0002\b\u00030\u0000H\u0016¢\u0006\u0004\b\b\u0010\t¨\u0006\n"}, d2 = {"Lum/o;", "OutputT", "", "Lkotlinx/coroutines/flow/Flow;", "run", "()Lkotlinx/coroutines/flow/Flow;", "otherWorker", "", "a", "(Lum/o;)Z", "wf1-workflow-core"}, k = 1, mv = {1, 6, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface o<OutputT> {

    /* renamed from: a  reason: collision with root package name */
    public static final a f50500a = a.f50501a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ a f50501a = new a();

        /* renamed from: b  reason: collision with root package name */
        private static final KType f50502b = Reflection.typeOf(Void.class);

        private a() {
        }

        public static /* synthetic */ o b(a aVar, long j10, String str, int i10, Object obj) {
            if ((i10 & 2) != 0) {
                str = "";
            }
            return aVar.a(j10, str);
        }

        public final o a(long j10, String key) {
            Intrinsics.checkNotNullParameter(key, "key");
            return new l(j10, key);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {
        public static boolean a(o oVar, o otherWorker) {
            Intrinsics.checkNotNullParameter(oVar, "this");
            Intrinsics.checkNotNullParameter(otherWorker, "otherWorker");
            return Intrinsics.areEqual(Reflection.getOrCreateKotlinClass(otherWorker.getClass()), Reflection.getOrCreateKotlinClass(oVar.getClass()));
        }
    }

    boolean a(o oVar);

    Flow run();
}
