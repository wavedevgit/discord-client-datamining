package androidx.savedstate;

import android.os.Bundle;
import androidx.lifecycle.Lifecycle;
import androidx.lifecycle.LifecycleOwner;
import androidx.lifecycle.m;
import androidx.savedstate.SavedStateRegistry;
import ir.v;
import java.lang.reflect.Constructor;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import kotlin.Pair;
import kotlin.collections.CollectionsKt;
import kotlin.collections.o0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import u3.f;
import u3.g;
import w1.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class a implements m {

    /* renamed from: e  reason: collision with root package name */
    public static final C0066a f5050e = new C0066a(null);

    /* renamed from: d  reason: collision with root package name */
    private final f f5051d;

    /* renamed from: androidx.savedstate.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0066a {
        public /* synthetic */ C0066a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private C0066a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b implements SavedStateRegistry.b {

        /* renamed from: a  reason: collision with root package name */
        private final Set f5052a;

        public b(SavedStateRegistry registry) {
            Intrinsics.checkNotNullParameter(registry, "registry");
            this.f5052a = new LinkedHashSet();
            registry.c("androidx.savedstate.Restarter", this);
        }

        @Override // androidx.savedstate.SavedStateRegistry.b
        public Bundle a() {
            Pair[] pairArr;
            Map i10 = o0.i();
            if (i10.isEmpty()) {
                pairArr = new Pair[0];
            } else {
                ArrayList arrayList = new ArrayList(i10.size());
                for (Map.Entry entry : i10.entrySet()) {
                    arrayList.add(v.a((String) entry.getKey(), entry.getValue()));
                }
                pairArr = (Pair[]) arrayList.toArray(new Pair[0]);
            }
            Bundle a10 = c.a((Pair[]) Arrays.copyOf(pairArr, pairArr.length));
            g.d(g.a(a10), "classes_to_restore", CollectionsKt.h1(this.f5052a));
            return a10;
        }

        public final void b(String className) {
            Intrinsics.checkNotNullParameter(className, "className");
            this.f5052a.add(className);
        }
    }

    public a(f owner) {
        Intrinsics.checkNotNullParameter(owner, "owner");
        this.f5051d = owner;
    }

    private final void a(String str) {
        try {
            Class<? extends U> asSubclass = Class.forName(str, false, a.class.getClassLoader()).asSubclass(SavedStateRegistry.a.class);
            Intrinsics.checkNotNull(asSubclass);
            try {
                Constructor declaredConstructor = asSubclass.getDeclaredConstructor(null);
                declaredConstructor.setAccessible(true);
                try {
                    Object newInstance = declaredConstructor.newInstance(null);
                    Intrinsics.checkNotNull(newInstance);
                    ((SavedStateRegistry.a) newInstance).a(this.f5051d);
                } catch (Exception e10) {
                    throw new RuntimeException("Failed to instantiate " + str, e10);
                }
            } catch (NoSuchMethodException e11) {
                throw new IllegalStateException("Class " + asSubclass.getSimpleName() + " must have default constructor in order to be automatically recreated", e11);
            }
        } catch (ClassNotFoundException e12) {
            throw new RuntimeException("Class " + str + " wasn't found", e12);
        }
    }

    @Override // androidx.lifecycle.m
    public void h(LifecycleOwner source, Lifecycle.a event) {
        Intrinsics.checkNotNullParameter(source, "source");
        Intrinsics.checkNotNullParameter(event, "event");
        if (event == Lifecycle.a.ON_CREATE) {
            source.getLifecycle().d(this);
            Bundle a10 = this.f5051d.getSavedStateRegistry().a("androidx.savedstate.Restarter");
            if (a10 != null) {
                List<String> e10 = u3.b.e(u3.b.a(a10), "classes_to_restore");
                if (e10 != null) {
                    for (String str : e10) {
                        a(str);
                    }
                    return;
                }
                throw new IllegalStateException("SavedState with restored state for the component \"androidx.savedstate.Restarter\" must contain list of strings by the key \"classes_to_restore\"");
            }
            return;
        }
        throw new AssertionError("Next event must be ON_CREATE");
    }
}
