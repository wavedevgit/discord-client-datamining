package wm;

import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface a {

    /* renamed from: wm.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0700a {
        public static /* synthetic */ Object a(a aVar, q qVar, Object obj, String str, Function1 function1, int i10, Object obj2) {
            if (obj2 == null) {
                if ((i10 & 4) != 0) {
                    str = "";
                }
                return aVar.b(qVar, obj, str, function1);
            }
            throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: renderChild");
        }
    }

    void a(String str, Function2 function2);

    Object b(q qVar, Object obj, String str, Function1 function1);

    h c();
}
