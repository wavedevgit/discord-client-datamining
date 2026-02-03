package androidx.savedstate;

import android.os.Bundle;
import androidx.savedstate.a;
import kotlin.jvm.internal.Intrinsics;
import u3.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class SavedStateRegistry {

    /* renamed from: a  reason: collision with root package name */
    private final v3.b f5058a;

    /* renamed from: b  reason: collision with root package name */
    private a.b f5059b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface a {
        void a(f fVar);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface b {
        Bundle a();
    }

    public SavedStateRegistry(v3.b impl) {
        Intrinsics.checkNotNullParameter(impl, "impl");
        this.f5058a = impl;
    }

    public final Bundle a(String key) {
        Intrinsics.checkNotNullParameter(key, "key");
        return this.f5058a.c(key);
    }

    public final b b(String key) {
        Intrinsics.checkNotNullParameter(key, "key");
        return this.f5058a.d(key);
    }

    public final void c(String key, b provider) {
        Intrinsics.checkNotNullParameter(key, "key");
        Intrinsics.checkNotNullParameter(provider, "provider");
        this.f5058a.j(key, provider);
    }

    public final void d(Class clazz) {
        Intrinsics.checkNotNullParameter(clazz, "clazz");
        if (this.f5058a.e()) {
            a.b bVar = this.f5059b;
            if (bVar == null) {
                bVar = new a.b(this);
            }
            this.f5059b = bVar;
            try {
                clazz.getDeclaredConstructor(null);
                a.b bVar2 = this.f5059b;
                if (bVar2 != null) {
                    String name = clazz.getName();
                    Intrinsics.checkNotNullExpressionValue(name, "getName(...)");
                    bVar2.b(name);
                    return;
                }
                return;
            } catch (NoSuchMethodException e10) {
                throw new IllegalArgumentException("Class " + clazz.getSimpleName() + " must have default constructor in order to be automatically recreated", e10);
            }
        }
        throw new IllegalStateException("Can not perform this action after onSaveInstanceState");
    }

    public final void e(String key) {
        Intrinsics.checkNotNullParameter(key, "key");
        this.f5058a.k(key);
    }
}
