package androidx.activity.result;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import androidx.activity.result.ActivityResultRegistry;
import androidx.activity.result.contract.ActivityResultContract;
import androidx.lifecycle.Lifecycle;
import androidx.lifecycle.LifecycleOwner;
import androidx.lifecycle.m;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import kotlin.jvm.internal.TypeIntrinsics;
import kotlin.sequences.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class ActivityResultRegistry {

    /* renamed from: h  reason: collision with root package name */
    private static final b f1315h = new b(null);

    /* renamed from: a  reason: collision with root package name */
    private final Map f1316a = new LinkedHashMap();

    /* renamed from: b  reason: collision with root package name */
    private final Map f1317b = new LinkedHashMap();

    /* renamed from: c  reason: collision with root package name */
    private final Map f1318c = new LinkedHashMap();

    /* renamed from: d  reason: collision with root package name */
    private final List f1319d = new ArrayList();

    /* renamed from: e  reason: collision with root package name */
    private final transient Map f1320e = new LinkedHashMap();

    /* renamed from: f  reason: collision with root package name */
    private final Map f1321f = new LinkedHashMap();

    /* renamed from: g  reason: collision with root package name */
    private final Bundle f1322g = new Bundle();

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final ActivityResultCallback f1323a;

        /* renamed from: b  reason: collision with root package name */
        private final ActivityResultContract f1324b;

        public a(ActivityResultCallback callback, ActivityResultContract contract) {
            Intrinsics.checkNotNullParameter(callback, "callback");
            Intrinsics.checkNotNullParameter(contract, "contract");
            this.f1323a = callback;
            this.f1324b = contract;
        }

        public final ActivityResultCallback a() {
            return this.f1323a;
        }

        public final ActivityResultContract b() {
            return this.f1324b;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static final class b {
        public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private b() {
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class c {

        /* renamed from: a  reason: collision with root package name */
        private final Lifecycle f1325a;

        /* renamed from: b  reason: collision with root package name */
        private final List f1326b;

        public c(Lifecycle lifecycle) {
            Intrinsics.checkNotNullParameter(lifecycle, "lifecycle");
            this.f1325a = lifecycle;
            this.f1326b = new ArrayList();
        }

        public final void a(m observer) {
            Intrinsics.checkNotNullParameter(observer, "observer");
            this.f1325a.a(observer);
            this.f1326b.add(observer);
        }

        public final void b() {
            for (m mVar : this.f1326b) {
                this.f1325a.d(mVar);
            }
            this.f1326b.clear();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class d extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        public static final d f1327d = new d();

        d() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final Integer invoke() {
            return Integer.valueOf(kotlin.random.c.f32146d.e(2147418112) + 65536);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class e extends ActivityResultLauncher {

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ String f1329b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ ActivityResultContract f1330c;

        e(String str, ActivityResultContract activityResultContract) {
            this.f1329b = str;
            this.f1330c = activityResultContract;
        }

        @Override // androidx.activity.result.ActivityResultLauncher
        public ActivityResultContract a() {
            return this.f1330c;
        }

        @Override // androidx.activity.result.ActivityResultLauncher
        public void c(Object obj, androidx.core.app.d dVar) {
            Object obj2 = ActivityResultRegistry.this.f1317b.get(this.f1329b);
            ActivityResultContract activityResultContract = this.f1330c;
            if (obj2 != null) {
                int intValue = ((Number) obj2).intValue();
                ActivityResultRegistry.this.f1319d.add(this.f1329b);
                try {
                    ActivityResultRegistry.this.i(intValue, this.f1330c, obj, dVar);
                    return;
                } catch (Exception e10) {
                    ActivityResultRegistry.this.f1319d.remove(this.f1329b);
                    throw e10;
                }
            }
            throw new IllegalStateException(("Attempting to launch an unregistered ActivityResultLauncher with contract " + activityResultContract + " and input " + obj + ". You must ensure the ActivityResultLauncher is registered before calling launch().").toString());
        }

        @Override // androidx.activity.result.ActivityResultLauncher
        public void d() {
            ActivityResultRegistry.this.p(this.f1329b);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class f extends ActivityResultLauncher {

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ String f1332b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ ActivityResultContract f1333c;

        f(String str, ActivityResultContract activityResultContract) {
            this.f1332b = str;
            this.f1333c = activityResultContract;
        }

        @Override // androidx.activity.result.ActivityResultLauncher
        public ActivityResultContract a() {
            return this.f1333c;
        }

        @Override // androidx.activity.result.ActivityResultLauncher
        public void c(Object obj, androidx.core.app.d dVar) {
            Object obj2 = ActivityResultRegistry.this.f1317b.get(this.f1332b);
            ActivityResultContract activityResultContract = this.f1333c;
            if (obj2 != null) {
                int intValue = ((Number) obj2).intValue();
                ActivityResultRegistry.this.f1319d.add(this.f1332b);
                try {
                    ActivityResultRegistry.this.i(intValue, this.f1333c, obj, dVar);
                    return;
                } catch (Exception e10) {
                    ActivityResultRegistry.this.f1319d.remove(this.f1332b);
                    throw e10;
                }
            }
            throw new IllegalStateException(("Attempting to launch an unregistered ActivityResultLauncher with contract " + activityResultContract + " and input " + obj + ". You must ensure the ActivityResultLauncher is registered before calling launch().").toString());
        }

        @Override // androidx.activity.result.ActivityResultLauncher
        public void d() {
            ActivityResultRegistry.this.p(this.f1332b);
        }
    }

    private final void d(int i10, String str) {
        this.f1316a.put(Integer.valueOf(i10), str);
        this.f1317b.put(str, Integer.valueOf(i10));
    }

    private final void g(String str, int i10, Intent intent, a aVar) {
        ActivityResultCallback activityResultCallback;
        if (aVar != null) {
            activityResultCallback = aVar.a();
        } else {
            activityResultCallback = null;
        }
        if (activityResultCallback != null && this.f1319d.contains(str)) {
            aVar.a().a(aVar.b().parseResult(i10, intent));
            this.f1319d.remove(str);
            return;
        }
        this.f1321f.remove(str);
        this.f1322g.putParcelable(str, new d.a(i10, intent));
    }

    private final int h() {
        for (Number number : k.r(d.f1327d)) {
            if (!this.f1316a.containsKey(Integer.valueOf(number.intValue()))) {
                return number.intValue();
            }
        }
        throw new NoSuchElementException("Sequence contains no element matching the predicate.");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void n(ActivityResultRegistry activityResultRegistry, String str, ActivityResultCallback activityResultCallback, ActivityResultContract activityResultContract, LifecycleOwner lifecycleOwner, Lifecycle.a event) {
        Intrinsics.checkNotNullParameter(lifecycleOwner, "<anonymous parameter 0>");
        Intrinsics.checkNotNullParameter(event, "event");
        if (Lifecycle.a.ON_START == event) {
            activityResultRegistry.f1320e.put(str, new a(activityResultCallback, activityResultContract));
            if (activityResultRegistry.f1321f.containsKey(str)) {
                Object obj = activityResultRegistry.f1321f.get(str);
                activityResultRegistry.f1321f.remove(str);
                activityResultCallback.a(obj);
            }
            d.a aVar = (d.a) w1.b.a(activityResultRegistry.f1322g, str, d.a.class);
            if (aVar != null) {
                activityResultRegistry.f1322g.remove(str);
                activityResultCallback.a(activityResultContract.parseResult(aVar.b(), aVar.a()));
            }
        } else if (Lifecycle.a.ON_STOP == event) {
            activityResultRegistry.f1320e.remove(str);
        } else if (Lifecycle.a.ON_DESTROY == event) {
            activityResultRegistry.p(str);
        }
    }

    private final void o(String str) {
        if (((Integer) this.f1317b.get(str)) != null) {
            return;
        }
        d(h(), str);
    }

    public final boolean e(int i10, int i11, Intent intent) {
        String str = (String) this.f1316a.get(Integer.valueOf(i10));
        if (str == null) {
            return false;
        }
        g(str, i11, intent, (a) this.f1320e.get(str));
        return true;
    }

    public final boolean f(int i10, Object obj) {
        ActivityResultCallback activityResultCallback;
        String str = (String) this.f1316a.get(Integer.valueOf(i10));
        if (str == null) {
            return false;
        }
        a aVar = (a) this.f1320e.get(str);
        if (aVar != null) {
            activityResultCallback = aVar.a();
        } else {
            activityResultCallback = null;
        }
        if (activityResultCallback == null) {
            this.f1322g.remove(str);
            this.f1321f.put(str, obj);
            return true;
        }
        ActivityResultCallback a10 = aVar.a();
        Intrinsics.checkNotNull(a10, "null cannot be cast to non-null type androidx.activity.result.ActivityResultCallback<O of androidx.activity.result.ActivityResultRegistry.dispatchResult>");
        if (this.f1319d.remove(str)) {
            a10.a(obj);
            return true;
        }
        return true;
    }

    public abstract void i(int i10, ActivityResultContract activityResultContract, Object obj, androidx.core.app.d dVar);

    public final void j(Bundle bundle) {
        if (bundle != null) {
            ArrayList<Integer> integerArrayList = bundle.getIntegerArrayList("KEY_COMPONENT_ACTIVITY_REGISTERED_RCS");
            ArrayList<String> stringArrayList = bundle.getStringArrayList("KEY_COMPONENT_ACTIVITY_REGISTERED_KEYS");
            if (stringArrayList != null && integerArrayList != null) {
                ArrayList<String> stringArrayList2 = bundle.getStringArrayList("KEY_COMPONENT_ACTIVITY_LAUNCHED_KEYS");
                if (stringArrayList2 != null) {
                    this.f1319d.addAll(stringArrayList2);
                }
                Bundle bundle2 = bundle.getBundle("KEY_COMPONENT_ACTIVITY_PENDING_RESULT");
                if (bundle2 != null) {
                    this.f1322g.putAll(bundle2);
                }
                int size = stringArrayList.size();
                for (int i10 = 0; i10 < size; i10++) {
                    String str = stringArrayList.get(i10);
                    if (this.f1317b.containsKey(str)) {
                        Integer num = (Integer) this.f1317b.remove(str);
                        if (!this.f1322g.containsKey(str)) {
                            TypeIntrinsics.asMutableMap(this.f1316a).remove(num);
                        }
                    }
                    Integer num2 = integerArrayList.get(i10);
                    Intrinsics.checkNotNullExpressionValue(num2, "rcs[i]");
                    int intValue = num2.intValue();
                    String str2 = stringArrayList.get(i10);
                    Intrinsics.checkNotNullExpressionValue(str2, "keys[i]");
                    d(intValue, str2);
                }
            }
        }
    }

    public final void k(Bundle outState) {
        Intrinsics.checkNotNullParameter(outState, "outState");
        outState.putIntegerArrayList("KEY_COMPONENT_ACTIVITY_REGISTERED_RCS", new ArrayList<>(this.f1317b.values()));
        outState.putStringArrayList("KEY_COMPONENT_ACTIVITY_REGISTERED_KEYS", new ArrayList<>(this.f1317b.keySet()));
        outState.putStringArrayList("KEY_COMPONENT_ACTIVITY_LAUNCHED_KEYS", new ArrayList<>(this.f1319d));
        outState.putBundle("KEY_COMPONENT_ACTIVITY_PENDING_RESULT", new Bundle(this.f1322g));
    }

    public final ActivityResultLauncher l(String key, ActivityResultContract contract, ActivityResultCallback callback) {
        Intrinsics.checkNotNullParameter(key, "key");
        Intrinsics.checkNotNullParameter(contract, "contract");
        Intrinsics.checkNotNullParameter(callback, "callback");
        o(key);
        this.f1320e.put(key, new a(callback, contract));
        if (this.f1321f.containsKey(key)) {
            Object obj = this.f1321f.get(key);
            this.f1321f.remove(key);
            callback.a(obj);
        }
        d.a aVar = (d.a) w1.b.a(this.f1322g, key, d.a.class);
        if (aVar != null) {
            this.f1322g.remove(key);
            callback.a(contract.parseResult(aVar.b(), aVar.a()));
        }
        return new f(key, contract);
    }

    public final ActivityResultLauncher m(final String key, LifecycleOwner lifecycleOwner, final ActivityResultContract contract, final ActivityResultCallback callback) {
        Intrinsics.checkNotNullParameter(key, "key");
        Intrinsics.checkNotNullParameter(lifecycleOwner, "lifecycleOwner");
        Intrinsics.checkNotNullParameter(contract, "contract");
        Intrinsics.checkNotNullParameter(callback, "callback");
        Lifecycle lifecycle = lifecycleOwner.getLifecycle();
        if (!lifecycle.b().d(Lifecycle.State.f4849o)) {
            o(key);
            c cVar = (c) this.f1318c.get(key);
            if (cVar == null) {
                cVar = new c(lifecycle);
            }
            cVar.a(new m() { // from class: d.c
                @Override // androidx.lifecycle.m
                public final void k(LifecycleOwner lifecycleOwner2, Lifecycle.a aVar) {
                    ActivityResultRegistry.n(ActivityResultRegistry.this, key, callback, contract, lifecycleOwner2, aVar);
                }
            });
            this.f1318c.put(key, cVar);
            return new e(key, contract);
        }
        throw new IllegalStateException(("LifecycleOwner " + lifecycleOwner + " is attempting to register while current state is " + lifecycle.b() + ". LifecycleOwners must call register before they are STARTED.").toString());
    }

    public final void p(String key) {
        Integer num;
        Intrinsics.checkNotNullParameter(key, "key");
        if (!this.f1319d.contains(key) && (num = (Integer) this.f1317b.remove(key)) != null) {
            this.f1316a.remove(num);
        }
        this.f1320e.remove(key);
        if (this.f1321f.containsKey(key)) {
            Log.w("ActivityResultRegistry", "Dropping pending result for request " + key + ": " + this.f1321f.get(key));
            this.f1321f.remove(key);
        }
        if (this.f1322g.containsKey(key)) {
            Log.w("ActivityResultRegistry", "Dropping pending result for request " + key + ": " + ((d.a) w1.b.a(this.f1322g, key, d.a.class)));
            this.f1322g.remove(key);
        }
        c cVar = (c) this.f1318c.get(key);
        if (cVar != null) {
            cVar.b();
            this.f1318c.remove(key);
        }
    }
}
