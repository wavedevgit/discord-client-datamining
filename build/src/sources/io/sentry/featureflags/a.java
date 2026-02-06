package io.sentry.featureflags;

import io.sentry.k7;
import io.sentry.protocol.g;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.concurrent.CopyOnWriteArrayList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a implements b {

    /* renamed from: a  reason: collision with root package name */
    private volatile CopyOnWriteArrayList f28135a;

    /* renamed from: b  reason: collision with root package name */
    private final io.sentry.util.a f28136b;

    /* renamed from: c  reason: collision with root package name */
    private int f28137c;

    private a(int i10) {
        this.f28136b = new io.sentry.util.a();
        this.f28137c = i10;
        this.f28135a = new CopyOnWriteArrayList();
    }

    public static b a(k7 k7Var) {
        int maxFeatureFlags = k7Var.getMaxFeatureFlags();
        if (maxFeatureFlags > 0) {
            return new a(maxFeatureFlags);
        }
        return c.a();
    }

    private static b b(int i10, a aVar, a aVar2, a aVar3) {
        CopyOnWriteArrayList copyOnWriteArrayList;
        CopyOnWriteArrayList copyOnWriteArrayList2;
        int size;
        int size2;
        CopyOnWriteArrayList copyOnWriteArrayList3 = null;
        if (aVar == null) {
            copyOnWriteArrayList = null;
        } else {
            copyOnWriteArrayList = aVar.f28135a;
        }
        if (aVar2 == null) {
            copyOnWriteArrayList2 = null;
        } else {
            copyOnWriteArrayList2 = aVar2.f28135a;
        }
        if (aVar3 != null) {
            copyOnWriteArrayList3 = aVar3.f28135a;
        }
        int i11 = 0;
        if (copyOnWriteArrayList == null) {
            size = 0;
        } else {
            size = copyOnWriteArrayList.size();
        }
        if (copyOnWriteArrayList2 == null) {
            size2 = 0;
        } else {
            size2 = copyOnWriteArrayList2.size();
        }
        if (copyOnWriteArrayList3 != null) {
            i11 = copyOnWriteArrayList3.size();
        }
        if (size == 0 && size2 == 0 && i11 == 0) {
            return c.a();
        }
        int i12 = size - 1;
        int i13 = size2 - 1;
        int i14 = i11 - 1;
        if (copyOnWriteArrayList != null && i12 >= 0) {
            android.support.v4.media.session.b.a(copyOnWriteArrayList.get(i12));
        }
        if (copyOnWriteArrayList2 != null && i13 >= 0) {
            android.support.v4.media.session.b.a(copyOnWriteArrayList2.get(i13));
        }
        if (copyOnWriteArrayList3 != null && i14 >= 0) {
            android.support.v4.media.session.b.a(copyOnWriteArrayList3.get(i14));
        }
        LinkedHashMap linkedHashMap = new LinkedHashMap(i10);
        linkedHashMap.size();
        ArrayList arrayList = new ArrayList(linkedHashMap.values());
        Collections.reverse(arrayList);
        return new a(i10, new CopyOnWriteArrayList(arrayList));
    }

    public static b c(k7 k7Var, b bVar, b bVar2, b bVar3) {
        a aVar;
        a aVar2;
        int maxFeatureFlags = k7Var.getMaxFeatureFlags();
        if (maxFeatureFlags <= 0) {
            return c.a();
        }
        a aVar3 = null;
        if (bVar instanceof a) {
            aVar = (a) bVar;
        } else {
            aVar = null;
        }
        if (bVar2 instanceof a) {
            aVar2 = (a) bVar2;
        } else {
            aVar2 = null;
        }
        if (bVar3 instanceof a) {
            aVar3 = (a) bVar3;
        }
        return b(maxFeatureFlags, aVar, aVar2, aVar3);
    }

    @Override // io.sentry.featureflags.b
    public g o() {
        ArrayList arrayList = new ArrayList();
        Iterator it = this.f28135a.iterator();
        if (!it.hasNext()) {
            return new g(arrayList);
        }
        android.support.v4.media.session.b.a(it.next());
        throw null;
    }

    @Override // io.sentry.featureflags.b
    /* renamed from: clone */
    public b m1182clone() {
        return new a(this);
    }

    private a(int i10, CopyOnWriteArrayList copyOnWriteArrayList) {
        this.f28136b = new io.sentry.util.a();
        this.f28137c = i10;
        this.f28135a = copyOnWriteArrayList;
    }

    private a(a aVar) {
        this.f28136b = new io.sentry.util.a();
        this.f28137c = aVar.f28137c;
        this.f28135a = new CopyOnWriteArrayList(aVar.f28135a);
    }
}
