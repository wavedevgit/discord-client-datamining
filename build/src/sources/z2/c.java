package z2;

import bs.j;
import java.io.File;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.i;
import os.j1;
import os.m0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    public static final c f55880a = new c();

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Function0 f55881d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(Function0 function0) {
            super(0);
            this.f55881d = function0;
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final File invoke() {
            File file = (File) this.f55881d.invoke();
            String s10 = j.s(file);
            h hVar = h.f55886a;
            if (Intrinsics.areEqual(s10, hVar.f())) {
                return file;
            }
            throw new IllegalStateException(("File extension for file: " + file + " does not match required extension for Preferences file: " + hVar.f()).toString());
        }
    }

    private c() {
    }

    public static /* synthetic */ w2.f b(c cVar, x2.b bVar, List list, CoroutineScope coroutineScope, Function0 function0, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            bVar = null;
        }
        if ((i10 & 2) != 0) {
            list = CollectionsKt.l();
        }
        if ((i10 & 4) != 0) {
            coroutineScope = i.a(m0.b().Y0(j1.b(null, 1, null)));
        }
        return cVar.a(bVar, list, coroutineScope, function0);
    }

    public final w2.f a(x2.b bVar, List migrations, CoroutineScope scope, Function0 produceFile) {
        Intrinsics.checkNotNullParameter(migrations, "migrations");
        Intrinsics.checkNotNullParameter(scope, "scope");
        Intrinsics.checkNotNullParameter(produceFile, "produceFile");
        return new b(w2.g.f53295a.a(h.f55886a, bVar, migrations, scope, new a(produceFile)));
    }
}
