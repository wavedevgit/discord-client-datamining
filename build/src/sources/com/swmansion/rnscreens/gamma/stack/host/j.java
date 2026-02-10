package com.swmansion.rnscreens.gamma.stack.host;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import kotlin.Pair;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j {

    /* renamed from: a  reason: collision with root package name */
    private final List f19183a = new ArrayList();

    /* renamed from: b  reason: collision with root package name */
    private final List f19184b = new ArrayList();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Comparator {
        @Override // java.util.Comparator
        public final int compare(Object obj, Object obj2) {
            return ds.a.d((Integer) ((Pair) obj).c(), (Integer) ((Pair) obj2).c());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements Comparator {
        @Override // java.util.Comparator
        public final int compare(Object obj, Object obj2) {
            return ds.a.d((Integer) ((Pair) obj).c(), (Integer) ((Pair) obj2).c());
        }
    }

    private final boolean d() {
        if (this.f19183a.isEmpty() && this.f19184b.isEmpty()) {
            return false;
        }
        return true;
    }

    public final void a(com.swmansion.rnscreens.gamma.stack.screen.a stackScreen) {
        Intrinsics.checkNotNullParameter(stackScreen, "stackScreen");
        this.f19184b.add(new e(stackScreen));
    }

    public final void b(com.swmansion.rnscreens.gamma.stack.screen.a stackScreen) {
        Intrinsics.checkNotNullParameter(stackScreen, "stackScreen");
        this.f19183a.add(new f(stackScreen));
    }

    public final void c(h container, List renderedScreens) {
        Intrinsics.checkNotNullParameter(container, "container");
        Intrinsics.checkNotNullParameter(renderedScreens, "renderedScreens");
        if (!d()) {
            return;
        }
        List<e> list = this.f19184b;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(list, 10));
        for (e eVar : list) {
            arrayList.add(new Pair(Integer.valueOf(renderedScreens.indexOf(eVar.a())), eVar));
        }
        for (Pair pair : CollectionsKt.S(CollectionsKt.W0(arrayList, new a()))) {
            container.c0(((e) pair.b()).a());
        }
        List<f> list2 = this.f19183a;
        ArrayList arrayList2 = new ArrayList(CollectionsKt.w(list2, 10));
        for (f fVar : list2) {
            arrayList2.add(new Pair(Integer.valueOf(renderedScreens.indexOf(fVar.a())), fVar));
        }
        for (Pair pair2 : CollectionsKt.W0(arrayList2, new b())) {
            container.d0(((f) pair2.b()).a());
        }
        container.f0();
        this.f19184b.clear();
        this.f19183a.clear();
    }
}
