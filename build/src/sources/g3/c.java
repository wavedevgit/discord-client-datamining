package g3;

import android.os.Handler;
import android.os.Looper;
import android.util.Log;
import android.view.ViewGroup;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentManager;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Set;
import kotlin.collections.CollectionsKt;
import kotlin.collections.o0;
import kotlin.collections.x0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    public static final c f25733a = new c();

    /* renamed from: b  reason: collision with root package name */
    private static C0349c f25734b = C0349c.f25746d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public enum a {
        PENALTY_LOG,
        PENALTY_DEATH,
        DETECT_FRAGMENT_REUSE,
        DETECT_FRAGMENT_TAG_USAGE,
        DETECT_WRONG_NESTED_HIERARCHY,
        DETECT_RETAIN_INSTANCE_USAGE,
        DETECT_SET_USER_VISIBLE_HINT,
        DETECT_TARGET_FRAGMENT_USAGE,
        DETECT_WRONG_FRAGMENT_CONTAINER
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface b {
    }

    /* renamed from: g3.c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0349c {

        /* renamed from: c  reason: collision with root package name */
        public static final a f25745c = new a(null);

        /* renamed from: d  reason: collision with root package name */
        public static final C0349c f25746d = new C0349c(x0.d(), null, o0.i());

        /* renamed from: a  reason: collision with root package name */
        private final Set f25747a;

        /* renamed from: b  reason: collision with root package name */
        private final Map f25748b;

        /* renamed from: g3.c$c$a */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class a {
            public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            private a() {
            }
        }

        public C0349c(Set flags, b bVar, Map allowedViolations) {
            Intrinsics.checkNotNullParameter(flags, "flags");
            Intrinsics.checkNotNullParameter(allowedViolations, "allowedViolations");
            this.f25747a = flags;
            LinkedHashMap linkedHashMap = new LinkedHashMap();
            for (Map.Entry entry : allowedViolations.entrySet()) {
                linkedHashMap.put((String) entry.getKey(), (Set) entry.getValue());
            }
            this.f25748b = linkedHashMap;
        }

        public final Set a() {
            return this.f25747a;
        }

        public final b b() {
            return null;
        }

        public final Map c() {
            return this.f25748b;
        }
    }

    private c() {
    }

    private final C0349c b(Fragment fragment) {
        while (fragment != null) {
            if (fragment.isAdded()) {
                FragmentManager parentFragmentManager = fragment.getParentFragmentManager();
                Intrinsics.checkNotNullExpressionValue(parentFragmentManager, "declaringFragment.parentFragmentManager");
                if (parentFragmentManager.H0() != null) {
                    C0349c H0 = parentFragmentManager.H0();
                    Intrinsics.checkNotNull(H0);
                    return H0;
                }
            }
            fragment = fragment.getParentFragment();
        }
        return f25734b;
    }

    private final void c(C0349c c0349c, final m mVar) {
        Fragment a10 = mVar.a();
        final String name = a10.getClass().getName();
        if (c0349c.a().contains(a.PENALTY_LOG)) {
            Log.d("FragmentStrictMode", "Policy violation in " + name, mVar);
        }
        c0349c.b();
        if (c0349c.a().contains(a.PENALTY_DEATH)) {
            p(a10, new Runnable() { // from class: g3.b
                @Override // java.lang.Runnable
                public final void run() {
                    c.d(name, mVar);
                }
            });
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void d(String str, m violation) {
        Intrinsics.checkNotNullParameter(violation, "$violation");
        Log.e("FragmentStrictMode", "Policy violation with PENALTY_DEATH in " + str, violation);
        throw violation;
    }

    private final void e(m mVar) {
        if (FragmentManager.O0(3)) {
            Log.d("FragmentManager", "StrictMode violation in " + mVar.a().getClass().getName(), mVar);
        }
    }

    public static final void f(Fragment fragment, String previousFragmentId) {
        Intrinsics.checkNotNullParameter(fragment, "fragment");
        Intrinsics.checkNotNullParameter(previousFragmentId, "previousFragmentId");
        g3.a aVar = new g3.a(fragment, previousFragmentId);
        c cVar = f25733a;
        cVar.e(aVar);
        C0349c b10 = cVar.b(fragment);
        if (b10.a().contains(a.DETECT_FRAGMENT_REUSE) && cVar.q(b10, fragment.getClass(), aVar.getClass())) {
            cVar.c(b10, aVar);
        }
    }

    public static final void g(Fragment fragment, ViewGroup viewGroup) {
        Intrinsics.checkNotNullParameter(fragment, "fragment");
        d dVar = new d(fragment, viewGroup);
        c cVar = f25733a;
        cVar.e(dVar);
        C0349c b10 = cVar.b(fragment);
        if (b10.a().contains(a.DETECT_FRAGMENT_TAG_USAGE) && cVar.q(b10, fragment.getClass(), dVar.getClass())) {
            cVar.c(b10, dVar);
        }
    }

    public static final void h(Fragment fragment) {
        Intrinsics.checkNotNullParameter(fragment, "fragment");
        e eVar = new e(fragment);
        c cVar = f25733a;
        cVar.e(eVar);
        C0349c b10 = cVar.b(fragment);
        if (b10.a().contains(a.DETECT_RETAIN_INSTANCE_USAGE) && cVar.q(b10, fragment.getClass(), eVar.getClass())) {
            cVar.c(b10, eVar);
        }
    }

    public static final void i(Fragment fragment) {
        Intrinsics.checkNotNullParameter(fragment, "fragment");
        f fVar = new f(fragment);
        c cVar = f25733a;
        cVar.e(fVar);
        C0349c b10 = cVar.b(fragment);
        if (b10.a().contains(a.DETECT_TARGET_FRAGMENT_USAGE) && cVar.q(b10, fragment.getClass(), fVar.getClass())) {
            cVar.c(b10, fVar);
        }
    }

    public static final void j(Fragment fragment) {
        Intrinsics.checkNotNullParameter(fragment, "fragment");
        g gVar = new g(fragment);
        c cVar = f25733a;
        cVar.e(gVar);
        C0349c b10 = cVar.b(fragment);
        if (b10.a().contains(a.DETECT_TARGET_FRAGMENT_USAGE) && cVar.q(b10, fragment.getClass(), gVar.getClass())) {
            cVar.c(b10, gVar);
        }
    }

    public static final void k(Fragment fragment) {
        Intrinsics.checkNotNullParameter(fragment, "fragment");
        i iVar = new i(fragment);
        c cVar = f25733a;
        cVar.e(iVar);
        C0349c b10 = cVar.b(fragment);
        if (b10.a().contains(a.DETECT_RETAIN_INSTANCE_USAGE) && cVar.q(b10, fragment.getClass(), iVar.getClass())) {
            cVar.c(b10, iVar);
        }
    }

    public static final void l(Fragment violatingFragment, Fragment targetFragment, int i10) {
        Intrinsics.checkNotNullParameter(violatingFragment, "violatingFragment");
        Intrinsics.checkNotNullParameter(targetFragment, "targetFragment");
        j jVar = new j(violatingFragment, targetFragment, i10);
        c cVar = f25733a;
        cVar.e(jVar);
        C0349c b10 = cVar.b(violatingFragment);
        if (b10.a().contains(a.DETECT_TARGET_FRAGMENT_USAGE) && cVar.q(b10, violatingFragment.getClass(), jVar.getClass())) {
            cVar.c(b10, jVar);
        }
    }

    public static final void m(Fragment fragment, boolean z10) {
        Intrinsics.checkNotNullParameter(fragment, "fragment");
        k kVar = new k(fragment, z10);
        c cVar = f25733a;
        cVar.e(kVar);
        C0349c b10 = cVar.b(fragment);
        if (b10.a().contains(a.DETECT_SET_USER_VISIBLE_HINT) && cVar.q(b10, fragment.getClass(), kVar.getClass())) {
            cVar.c(b10, kVar);
        }
    }

    public static final void n(Fragment fragment, ViewGroup container) {
        Intrinsics.checkNotNullParameter(fragment, "fragment");
        Intrinsics.checkNotNullParameter(container, "container");
        n nVar = new n(fragment, container);
        c cVar = f25733a;
        cVar.e(nVar);
        C0349c b10 = cVar.b(fragment);
        if (b10.a().contains(a.DETECT_WRONG_FRAGMENT_CONTAINER) && cVar.q(b10, fragment.getClass(), nVar.getClass())) {
            cVar.c(b10, nVar);
        }
    }

    public static final void o(Fragment fragment, Fragment expectedParentFragment, int i10) {
        Intrinsics.checkNotNullParameter(fragment, "fragment");
        Intrinsics.checkNotNullParameter(expectedParentFragment, "expectedParentFragment");
        o oVar = new o(fragment, expectedParentFragment, i10);
        c cVar = f25733a;
        cVar.e(oVar);
        C0349c b10 = cVar.b(fragment);
        if (b10.a().contains(a.DETECT_WRONG_NESTED_HIERARCHY) && cVar.q(b10, fragment.getClass(), oVar.getClass())) {
            cVar.c(b10, oVar);
        }
    }

    private final void p(Fragment fragment, Runnable runnable) {
        if (fragment.isAdded()) {
            Handler i10 = fragment.getParentFragmentManager().B0().i();
            if (Intrinsics.areEqual(i10.getLooper(), Looper.myLooper())) {
                runnable.run();
                return;
            } else {
                i10.post(runnable);
                return;
            }
        }
        runnable.run();
    }

    private final boolean q(C0349c c0349c, Class cls, Class cls2) {
        Set set = (Set) c0349c.c().get(cls.getName());
        if (set == null) {
            return true;
        }
        if (!Intrinsics.areEqual(cls2.getSuperclass(), m.class) && CollectionsKt.d0(set, cls2.getSuperclass())) {
            return false;
        }
        return !set.contains(cls2);
    }
}
