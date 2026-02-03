package androidx.lifecycle;

import android.os.Bundle;
import androidx.savedstate.SavedStateRegistry;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Map;
import kotlin.Lazy;
import kotlin.Pair;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class h0 implements SavedStateRegistry.b {

    /* renamed from: a  reason: collision with root package name */
    private final SavedStateRegistry f4529a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f4530b;

    /* renamed from: c  reason: collision with root package name */
    private Bundle f4531c;

    /* renamed from: d  reason: collision with root package name */
    private final Lazy f4532d;

    public h0(SavedStateRegistry savedStateRegistry, final q0 viewModelStoreOwner) {
        Intrinsics.checkNotNullParameter(savedStateRegistry, "savedStateRegistry");
        Intrinsics.checkNotNullParameter(viewModelStoreOwner, "viewModelStoreOwner");
        this.f4529a = savedStateRegistry;
        this.f4532d = jr.l.b(new Function0() { // from class: androidx.lifecycle.g0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                i0 f10;
                f10 = h0.f(q0.this);
                return f10;
            }
        });
    }

    private final i0 d() {
        return (i0) this.f4532d.getValue();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final i0 f(q0 q0Var) {
        return e0.e(q0Var);
    }

    @Override // androidx.savedstate.SavedStateRegistry.b
    public Bundle a() {
        Pair[] pairArr;
        Map i10 = kotlin.collections.o0.i();
        if (i10.isEmpty()) {
            pairArr = new Pair[0];
        } else {
            ArrayList arrayList = new ArrayList(i10.size());
            for (Map.Entry entry : i10.entrySet()) {
                arrayList.add(jr.v.a((String) entry.getKey(), entry.getValue()));
            }
            pairArr = (Pair[]) arrayList.toArray(new Pair[0]);
        }
        Bundle a10 = w1.c.a((Pair[]) Arrays.copyOf(pairArr, pairArr.length));
        Bundle a11 = u3.g.a(a10);
        Bundle bundle = this.f4531c;
        if (bundle != null) {
            u3.g.b(a11, bundle);
        }
        for (Map.Entry entry2 : d().e().entrySet()) {
            String str = (String) entry2.getKey();
            Bundle a12 = ((b0) entry2.getValue()).g().a();
            if (!u3.b.f(u3.b.a(a12))) {
                u3.g.c(a11, str, a12);
            }
        }
        this.f4530b = false;
        return a10;
    }

    public final Bundle c(String key) {
        Pair[] pairArr;
        Intrinsics.checkNotNullParameter(key, "key");
        e();
        Bundle bundle = this.f4531c;
        if (bundle == null || !u3.b.b(u3.b.a(bundle), key)) {
            return null;
        }
        Bundle d10 = u3.b.d(u3.b.a(bundle), key);
        if (d10 == null) {
            Map i10 = kotlin.collections.o0.i();
            if (i10.isEmpty()) {
                pairArr = new Pair[0];
            } else {
                ArrayList arrayList = new ArrayList(i10.size());
                for (Map.Entry entry : i10.entrySet()) {
                    arrayList.add(jr.v.a((String) entry.getKey(), entry.getValue()));
                }
                pairArr = (Pair[]) arrayList.toArray(new Pair[0]);
            }
            d10 = w1.c.a((Pair[]) Arrays.copyOf(pairArr, pairArr.length));
            u3.g.a(d10);
        }
        u3.g.e(u3.g.a(bundle), key);
        if (u3.b.f(u3.b.a(bundle))) {
            this.f4531c = null;
        }
        return d10;
    }

    public final void e() {
        Pair[] pairArr;
        if (!this.f4530b) {
            Bundle a10 = this.f4529a.a("androidx.lifecycle.internal.SavedStateHandlesProvider");
            Map i10 = kotlin.collections.o0.i();
            if (i10.isEmpty()) {
                pairArr = new Pair[0];
            } else {
                ArrayList arrayList = new ArrayList(i10.size());
                for (Map.Entry entry : i10.entrySet()) {
                    arrayList.add(jr.v.a((String) entry.getKey(), entry.getValue()));
                }
                pairArr = (Pair[]) arrayList.toArray(new Pair[0]);
            }
            Bundle a11 = w1.c.a((Pair[]) Arrays.copyOf(pairArr, pairArr.length));
            Bundle a12 = u3.g.a(a11);
            Bundle bundle = this.f4531c;
            if (bundle != null) {
                u3.g.b(a12, bundle);
            }
            if (a10 != null) {
                u3.g.b(a12, a10);
            }
            this.f4531c = a11;
            this.f4530b = true;
            d();
        }
    }
}
