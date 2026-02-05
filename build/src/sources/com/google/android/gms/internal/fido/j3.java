package com.google.android.gms.internal.fido;

import java.lang.reflect.Field;
import java.security.AccessController;
import java.security.PrivilegedActionException;
import java.security.PrivilegedExceptionAction;
import sun.misc.Unsafe;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class j3 extends c3 {

    /* renamed from: a  reason: collision with root package name */
    static final Unsafe f14026a;

    /* renamed from: b  reason: collision with root package name */
    static final long f14027b;

    /* renamed from: c  reason: collision with root package name */
    static final long f14028c;

    /* renamed from: d  reason: collision with root package name */
    static final long f14029d;

    /* renamed from: e  reason: collision with root package name */
    static final long f14030e;

    /* renamed from: f  reason: collision with root package name */
    static final long f14031f;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements PrivilegedExceptionAction {
        a() {
        }

        @Override // java.security.PrivilegedExceptionAction
        public final /* bridge */ /* synthetic */ Object run() {
            Field[] declaredFields;
            for (Field field : Unsafe.class.getDeclaredFields()) {
                field.setAccessible(true);
                Object obj = field.get(null);
                if (Unsafe.class.isInstance(obj)) {
                    return (Unsafe) Unsafe.class.cast(obj);
                }
            }
            throw new NoSuchFieldError("the Unsafe");
        }
    }

    static {
        Unsafe unsafe;
        try {
            try {
                unsafe = Unsafe.getUnsafe();
            } catch (PrivilegedActionException e10) {
                throw new RuntimeException("Could not initialize intrinsics", e10.getCause());
            }
        } catch (SecurityException unused) {
            unsafe = (Unsafe) AccessController.doPrivileged(new a());
        }
        try {
            f14028c = unsafe.objectFieldOffset(l3.class.getDeclaredField("i"));
            f14027b = unsafe.objectFieldOffset(l3.class.getDeclaredField("e"));
            f14029d = unsafe.objectFieldOffset(l3.class.getDeclaredField("d"));
            f14030e = unsafe.objectFieldOffset(k3.class.getDeclaredField("a"));
            f14031f = unsafe.objectFieldOffset(k3.class.getDeclaredField("b"));
            f14026a = unsafe;
        } catch (NoSuchFieldException e11) {
            throw new RuntimeException(e11);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ j3(p3 p3Var) {
        super(null);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.gms.internal.fido.c3
    public final g3 a(l3 l3Var, g3 g3Var) {
        g3 g3Var2;
        while (true) {
            g3Var2 = l3Var.f14054e;
            if (g3Var == g3Var2) {
                break;
            }
            l3 l3Var2 = l3Var;
            g3 g3Var3 = g3Var;
            if (o3.a(f14026a, l3Var2, f14027b, g3Var2, g3Var3)) {
                break;
            }
            l3Var = l3Var2;
            g3Var = g3Var3;
        }
        return g3Var2;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.gms.internal.fido.c3
    public final k3 b(l3 l3Var, k3 k3Var) {
        k3 k3Var2;
        do {
            k3Var2 = l3Var.f14055i;
            if (k3Var == k3Var2) {
                break;
            }
        } while (!f(l3Var, k3Var2, k3Var));
        return k3Var2;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.gms.internal.fido.c3
    public final void c(k3 k3Var, k3 k3Var2) {
        f14026a.putObject(k3Var, f14031f, k3Var2);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.gms.internal.fido.c3
    public final void d(k3 k3Var, Thread thread) {
        f14026a.putObject(k3Var, f14030e, thread);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.gms.internal.fido.c3
    public final boolean e(l3 l3Var, Object obj, Object obj2) {
        return o3.a(f14026a, l3Var, f14029d, obj, obj2);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.gms.internal.fido.c3
    public final boolean f(l3 l3Var, k3 k3Var, k3 k3Var2) {
        return o3.a(f14026a, l3Var, f14028c, k3Var, k3Var2);
    }
}
