package com.google.android.gms.internal.play_billing;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class g2 extends k2 {

    /* renamed from: c  reason: collision with root package name */
    private static final Class f15240c = Collections.unmodifiableList(Collections.EMPTY_LIST).getClass();

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ g2(f2 f2Var) {
        super(null);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.gms.internal.play_billing.k2
    public final void a(Object obj, long j10) {
        Object unmodifiableList;
        List list = (List) g4.k(obj, j10);
        if (list instanceof e2) {
            unmodifiableList = ((e2) list).B();
        } else if (!f15240c.isAssignableFrom(list.getClass())) {
            if ((list instanceof c3) && (list instanceof x1)) {
                x1 x1Var = (x1) list;
                if (x1Var.a()) {
                    x1Var.zzb();
                    return;
                }
                return;
            }
            unmodifiableList = Collections.unmodifiableList(list);
        } else {
            return;
        }
        g4.x(obj, j10, unmodifiableList);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: Multi-variable type inference failed */
    @Override // com.google.android.gms.internal.play_billing.k2
    public final void b(Object obj, Object obj2, long j10) {
        d2 d2Var;
        List list = (List) g4.k(obj2, j10);
        int size = list.size();
        List list2 = (List) g4.k(obj, j10);
        if (list2.isEmpty()) {
            if (list2 instanceof e2) {
                list2 = new d2(size);
            } else if ((list2 instanceof c3) && (list2 instanceof x1)) {
                list2 = ((x1) list2).F(size);
            } else {
                list2 = new ArrayList(size);
            }
            g4.x(obj, j10, list2);
        } else {
            if (f15240c.isAssignableFrom(list2.getClass())) {
                ArrayList arrayList = new ArrayList(list2.size() + size);
                arrayList.addAll(list2);
                g4.x(obj, j10, arrayList);
                d2Var = arrayList;
            } else if (list2 instanceof b4) {
                d2 d2Var2 = new d2(list2.size() + size);
                d2Var2.addAll(d2Var2.size(), (b4) list2);
                g4.x(obj, j10, d2Var2);
                d2Var = d2Var2;
            } else if ((list2 instanceof c3) && (list2 instanceof x1)) {
                x1 x1Var = (x1) list2;
                if (!x1Var.a()) {
                    list2 = x1Var.F(list2.size() + size);
                    g4.x(obj, j10, list2);
                }
            }
            list2 = d2Var;
        }
        int size2 = list2.size();
        int size3 = list.size();
        if (size2 > 0 && size3 > 0) {
            list2.addAll(list);
        }
        if (size2 > 0) {
            list = list2;
        }
        g4.x(obj, j10, list);
    }
}
