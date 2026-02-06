package androidx.fragment.app;

import android.view.View;
import androidx.core.app.SharedElementCallback;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class m0 {

    /* renamed from: a  reason: collision with root package name */
    public static final m0 f4755a;

    /* renamed from: b  reason: collision with root package name */
    public static final o0 f4756b;

    /* renamed from: c  reason: collision with root package name */
    public static final o0 f4757c;

    static {
        m0 m0Var = new m0();
        f4755a = m0Var;
        f4756b = new n0();
        f4757c = m0Var.c();
    }

    private m0() {
    }

    public static final void a(Fragment inFragment, Fragment outFragment, boolean z10, u0.a sharedElements, boolean z11) {
        SharedElementCallback enterTransitionCallback;
        Intrinsics.checkNotNullParameter(inFragment, "inFragment");
        Intrinsics.checkNotNullParameter(outFragment, "outFragment");
        Intrinsics.checkNotNullParameter(sharedElements, "sharedElements");
        if (z10) {
            enterTransitionCallback = outFragment.getEnterTransitionCallback();
        } else {
            enterTransitionCallback = inFragment.getEnterTransitionCallback();
        }
        if (enterTransitionCallback != null) {
            ArrayList arrayList = new ArrayList(sharedElements.size());
            for (Map.Entry entry : sharedElements.entrySet()) {
                arrayList.add((View) entry.getValue());
            }
            ArrayList arrayList2 = new ArrayList(sharedElements.size());
            for (Map.Entry entry2 : sharedElements.entrySet()) {
                arrayList2.add((String) entry2.getKey());
            }
            if (z11) {
                enterTransitionCallback.g(arrayList2, arrayList, null);
            } else {
                enterTransitionCallback.f(arrayList2, arrayList, null);
            }
        }
    }

    public static final String b(u0.a aVar, String value) {
        Intrinsics.checkNotNullParameter(aVar, "<this>");
        Intrinsics.checkNotNullParameter(value, "value");
        LinkedHashMap linkedHashMap = new LinkedHashMap();
        for (Map.Entry entry : aVar.entrySet()) {
            if (Intrinsics.areEqual(entry.getValue(), value)) {
                linkedHashMap.put(entry.getKey(), entry.getValue());
            }
        }
        ArrayList arrayList = new ArrayList(linkedHashMap.size());
        for (Map.Entry entry2 : linkedHashMap.entrySet()) {
            arrayList.add((String) entry2.getKey());
        }
        return (String) CollectionsKt.firstOrNull(arrayList);
    }

    private final o0 c() {
        try {
            Intrinsics.checkNotNull(androidx.transition.g.class, "null cannot be cast to non-null type java.lang.Class<androidx.fragment.app.FragmentTransitionImpl>");
            return (o0) androidx.transition.g.class.getDeclaredConstructor(null).newInstance(null);
        } catch (Exception unused) {
            return null;
        }
    }

    public static final void d(u0.a aVar, u0.a namedViews) {
        Intrinsics.checkNotNullParameter(aVar, "<this>");
        Intrinsics.checkNotNullParameter(namedViews, "namedViews");
        int size = aVar.size();
        while (true) {
            size--;
            if (-1 < size) {
                if (!namedViews.containsKey((String) aVar.j(size))) {
                    aVar.h(size);
                }
            } else {
                return;
            }
        }
    }

    public static final void e(List views, int i10) {
        Intrinsics.checkNotNullParameter(views, "views");
        Iterator it = views.iterator();
        while (it.hasNext()) {
            ((View) it.next()).setVisibility(i10);
        }
    }
}
