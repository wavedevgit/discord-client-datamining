package kotlin.sequences;

import java.util.Iterator;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class l {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a implements Sequence {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Function2 f35354a;

        public a(Function2 function2) {
            this.f35354a = function2;
        }

        @Override // kotlin.sequences.Sequence
        public Iterator iterator() {
            return l.a(this.f35354a);
        }
    }

    public static Iterator a(Function2 block) {
        Intrinsics.checkNotNullParameter(block, "block");
        i iVar = new i();
        iVar.k(rr.b.a(block, iVar, iVar));
        return iVar;
    }

    public static Sequence b(Function2 block) {
        Intrinsics.checkNotNullParameter(block, "block");
        return new a(block);
    }
}
