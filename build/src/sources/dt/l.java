package dt;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class l {

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final Object f21158a;

        /* renamed from: b  reason: collision with root package name */
        private final q f21159b;

        /* renamed from: c  reason: collision with root package name */
        private final int f21160c;

        public a(Object obj, q parserStructure, int i10) {
            Intrinsics.checkNotNullParameter(parserStructure, "parserStructure");
            this.f21158a = obj;
            this.f21159b = parserStructure;
            this.f21160c = i10;
        }

        public final int a() {
            return this.f21160c;
        }

        public final Object b() {
            return this.f21158a;
        }

        public final q c() {
            return this.f21159b;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b implements Comparator {
        @Override // java.util.Comparator
        public final int compare(Object obj, Object obj2) {
            return tr.a.d(Integer.valueOf(((i) obj2).b()), Integer.valueOf(((i) obj).b()));
        }
    }

    public static q a(q commands) {
        Intrinsics.checkNotNullParameter(commands, "commands");
        return commands;
    }

    public static final c b(q qVar, CharSequence input, c initialContainer, int i10) {
        Intrinsics.checkNotNullParameter(input, "input");
        Intrinsics.checkNotNullParameter(initialContainer, "initialContainer");
        ArrayList arrayList = new ArrayList();
        List r10 = CollectionsKt.r(new a(initialContainer, qVar, i10));
        while (true) {
            a aVar = (a) CollectionsKt.M(r10);
            if (aVar == null) {
                if (arrayList.size() > 1) {
                    CollectionsKt.A(arrayList, new b());
                }
                throw new j(arrayList);
            }
            c cVar = (c) ((c) aVar.b()).copy();
            int a10 = aVar.a();
            q c10 = aVar.c();
            int size = c10.b().size();
            int i11 = 0;
            while (true) {
                if (i11 < size) {
                    Object a11 = ((o) c10.b().get(i11)).a(cVar, input, a10);
                    if (a11 instanceof Integer) {
                        a10 = ((Number) a11).intValue();
                        i11++;
                    } else if (a11 instanceof i) {
                        arrayList.add((i) a11);
                    } else {
                        throw new IllegalStateException(("Unexpected parse result: " + a11).toString());
                    }
                } else if (c10.a().isEmpty()) {
                    if (a10 == input.length()) {
                        return cVar;
                    }
                    arrayList.add(new i(a10, m.f21161d));
                } else {
                    int size2 = c10.a().size() - 1;
                    if (size2 >= 0) {
                        while (true) {
                            int i12 = size2 - 1;
                            r10.add(new a(cVar, (q) c10.a().get(size2), a10));
                            if (i12 < 0) {
                                break;
                            }
                            size2 = i12;
                        }
                    }
                }
            }
        }
    }

    public static /* synthetic */ c c(q qVar, CharSequence charSequence, c cVar, int i10, int i11, Object obj) {
        if ((i11 & 4) != 0) {
            i10 = 0;
        }
        return b(qVar, charSequence, cVar, i10);
    }
}
