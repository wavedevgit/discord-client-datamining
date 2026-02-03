package androidx.core.util;

import b2.d;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class Pools$SimplePool implements d {

    /* renamed from: a  reason: collision with root package name */
    private final Object[] f3255a;

    /* renamed from: b  reason: collision with root package name */
    private int f3256b;

    public Pools$SimplePool(int i10) {
        if (i10 > 0) {
            this.f3255a = new Object[i10];
            return;
        }
        throw new IllegalArgumentException("The max pool size must be > 0");
    }

    private final boolean a(Object obj) {
        int i10 = this.f3256b;
        for (int i11 = 0; i11 < i10; i11++) {
            if (this.f3255a[i11] == obj) {
                return true;
            }
        }
        return false;
    }

    @Override // b2.d
    public Object acquire() {
        int i10 = this.f3256b;
        if (i10 <= 0) {
            return null;
        }
        int i11 = i10 - 1;
        Object obj = this.f3255a[i11];
        Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type T of androidx.core.util.Pools.SimplePool");
        this.f3255a[i11] = null;
        this.f3256b--;
        return obj;
    }

    @Override // b2.d
    public boolean release(Object instance) {
        Intrinsics.checkNotNullParameter(instance, "instance");
        if (!a(instance)) {
            int i10 = this.f3256b;
            Object[] objArr = this.f3255a;
            if (i10 < objArr.length) {
                objArr[i10] = instance;
                this.f3256b = i10 + 1;
                return true;
            }
            return false;
        }
        throw new IllegalStateException("Already in the pool!");
    }
}
