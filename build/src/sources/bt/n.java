package bt;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.ListIterator;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class n {

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        public static final a f7246d = new a();

        a() {
            super(1);
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final CharSequence invoke(i it) {
            Intrinsics.checkNotNullParameter(it, "it");
            return "position " + it.b() + ": '" + ((String) it.a().invoke()) + '\'';
        }
    }

    public static final q b(List list) {
        Intrinsics.checkNotNullParameter(list, "<this>");
        q qVar = new q(CollectionsKt.l(), CollectionsKt.l());
        if (!list.isEmpty()) {
            ListIterator listIterator = list.listIterator(list.size());
            while (listIterator.hasPrevious()) {
                qVar = c((q) listIterator.previous(), qVar);
            }
        }
        return d(qVar, CollectionsKt.l());
    }

    private static final q c(q qVar, q qVar2) {
        if (qVar.a().isEmpty()) {
            return new q(CollectionsKt.L0(qVar.b(), qVar2.b()), qVar2.a());
        }
        List b10 = qVar.b();
        List<q> a10 = qVar.a();
        ArrayList arrayList = new ArrayList(CollectionsKt.w(a10, 10));
        for (q qVar3 : a10) {
            arrayList.add(c(qVar3, qVar2));
        }
        return new q(b10, arrayList);
    }

    private static final q d(q qVar, List list) {
        q qVar2;
        List e10;
        ArrayList arrayList = new ArrayList();
        List j12 = CollectionsKt.j1(list);
        List list2 = null;
        for (o oVar : qVar.b()) {
            if (oVar instanceof h) {
                if (list2 != null) {
                    list2.addAll(((h) oVar).c());
                } else {
                    list2 = CollectionsKt.j1(((h) oVar).c());
                }
            } else if (oVar instanceof u) {
                j12.add(oVar);
            } else {
                if (list2 != null) {
                    arrayList.add(new h(list2));
                    list2 = null;
                }
                arrayList.add(oVar);
            }
        }
        List arrayList2 = new ArrayList();
        for (q qVar3 : qVar.a()) {
            q d10 = d(qVar3, j12);
            if (d10.b().isEmpty()) {
                List a10 = d10.a();
                if (a10.isEmpty()) {
                    a10 = CollectionsKt.e(d10);
                }
                e10 = a10;
            } else {
                e10 = CollectionsKt.e(d10);
            }
            CollectionsKt.B(arrayList2, e10);
        }
        if (arrayList2.isEmpty()) {
            arrayList2 = CollectionsKt.e(new q(j12, CollectionsKt.l()));
        }
        List list3 = arrayList2;
        if (list2 == null) {
            return new q(arrayList, list3);
        }
        List<q> list4 = list3;
        if (!(list4 instanceof Collection) || !list4.isEmpty()) {
            for (q qVar4 : list4) {
                o oVar2 = (o) CollectionsKt.firstOrNull(qVar4.b());
                if (oVar2 != null && (oVar2 instanceof h)) {
                    ArrayList arrayList3 = new ArrayList(CollectionsKt.w(list4, 10));
                    for (q qVar5 : list4) {
                        o oVar3 = (o) CollectionsKt.firstOrNull(qVar5.b());
                        if (oVar3 instanceof h) {
                            qVar2 = new q(CollectionsKt.L0(CollectionsKt.e(new h(CollectionsKt.L0(list2, ((h) oVar3).c()))), CollectionsKt.f0(qVar5.b(), 1)), qVar5.a());
                        } else if (oVar3 == null) {
                            qVar2 = new q(CollectionsKt.e(new h(list2)), qVar5.a());
                        } else {
                            qVar2 = new q(CollectionsKt.L0(CollectionsKt.e(new h(list2)), qVar5.b()), qVar5.a());
                        }
                        arrayList3.add(qVar2);
                    }
                    return new q(arrayList, arrayList3);
                }
            }
        }
        arrayList.add(new h(list2));
        return new q(arrayList, list3);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final String e(List list) {
        if (list.size() == 1) {
            return "Position " + ((i) list.get(0)).b() + ": " + ((String) ((i) list.get(0)).a().invoke());
        }
        String sb2 = ((StringBuilder) CollectionsKt.v0(list, new StringBuilder(list.size() * 33), ", ", "Errors: ", null, 0, null, a.f7246d, 56, null)).toString();
        Intrinsics.checkNotNullExpressionValue(sb2, "toString(...)");
        return sb2;
    }
}
