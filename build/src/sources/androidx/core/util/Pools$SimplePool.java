package androidx.core.util;

import b2.d;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class Pools$SimplePool implements d {

    /* renamed from: a  reason: collision with root package name */
    private final Object[] f3665a;

    /* renamed from: b  reason: collision with root package name */
    private int f3666b;

    public Pools$SimplePool(int i10) {
        if (i10 > 0) {
            this.f3665a = new Object[i10];
            return;
        }
        throw new IllegalArgumentException("The max pool size must be > 0");
    }

    private final boolean a(Object obj) {
        int i10 = this.f3666b;
        for (int i11 = 0; i11 < i10; i11++) {
            if (this.f3665a[i11] == obj) {
                return true;
            }
        }
        return false;
    }

    @Override // b2.d
    public Object acquire() {
        int i10 = this.f3666b;
        if (i10 <= 0) {
            return null;
        }
        int i11 = i10 - 1;
        Object obj = this.f3665a[i11];
        Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type T of androidx.core.util.Pools.SimplePool");
        this.f3665a[i11] = null;
        this.f3666b--;
        return obj;
    }

    @Override // b2.d
    public boolean release(Object instance) {
        Intrinsics.checkNotNullParameter(instance, "instance");
        if (!a(instance)) {
            int i10 = this.f3666b;
            Object[] objArr = this.f3665a;
            if (i10 < objArr.length) {
                objArr[i10] = instance;
                this.f3666b = i10 + 1;
                return true;
            }
            return false;
        }
        throw new IllegalStateException("Already in the pool!");
    }
}
