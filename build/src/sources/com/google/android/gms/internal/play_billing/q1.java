package com.google.android.gms.internal.play_billing;

import java.io.IOException;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class q1 extends z {
    private static final Map zzb = new ConcurrentHashMap();
    private int zzd = -1;
    protected x3 zzc = x3.c();

    private static q1 A(q1 q1Var, byte[] bArr, int i10, int i11, e1 e1Var) {
        if (i11 == 0) {
            return q1Var;
        }
        q1 k10 = q1Var.k();
        try {
            g3 b10 = d3.a().b(k10.getClass());
            b10.c(k10, bArr, 0, i11, new d0(e1Var));
            b10.b(k10);
            return k10;
        } catch (a2 e10) {
            e10.f(k10);
            throw e10;
        } catch (v3 e11) {
            a2 a10 = e11.a();
            a10.f(k10);
            throw a10;
        } catch (IOException e12) {
            if (e12.getCause() instanceof a2) {
                throw ((a2) e12.getCause());
            }
            a2 a2Var = new a2(e12);
            a2Var.f(k10);
            throw a2Var;
        } catch (IndexOutOfBoundsException unused) {
            a2 g10 = a2.g();
            g10.f(k10);
            throw g10;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static q1 i(Class cls) {
        Map map = zzb;
        q1 q1Var = (q1) map.get(cls);
        if (q1Var == null) {
            try {
                Class.forName(cls.getName(), true, cls.getClassLoader());
                q1Var = (q1) map.get(cls);
            } catch (ClassNotFoundException e10) {
                throw new IllegalStateException("Class initialization cannot fail.", e10);
            }
        }
        if (q1Var == null) {
            q1 q1Var2 = (q1) ((q1) g4.j(cls)).y(6, null, null);
            if (q1Var2 != null) {
                map.put(cls, q1Var2);
                return q1Var2;
            }
            throw new IllegalStateException();
        }
        return q1Var;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public static q1 l(q1 q1Var, byte[] bArr, e1 e1Var) {
        q1 A = A(q1Var, bArr, 0, bArr.length, e1Var);
        if (A != null && !A.j()) {
            a2 a10 = new v3(A).a();
            a10.f(A);
            throw a10;
        }
        return A;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public static v1 m() {
        return r1.d();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public static x1 o() {
        return e3.c();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Object q(Method method, Object obj, Object... objArr) {
        try {
            return method.invoke(obj, objArr);
        } catch (IllegalAccessException e10) {
            throw new RuntimeException("Couldn't use Java reflection to implement protocol message reflection.", e10);
        } catch (InvocationTargetException e11) {
            Throwable cause = e11.getCause();
            if (!(cause instanceof RuntimeException)) {
                if (cause instanceof Error) {
                    throw ((Error) cause);
                }
                throw new RuntimeException("Unexpected exception thrown by generated accessor method.", cause);
            }
            throw ((RuntimeException) cause);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public static Object r(v2 v2Var, String str, Object[] objArr) {
        return new f3(v2Var, str, objArr);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public static void u(Class cls, q1 q1Var) {
        q1Var.t();
        zzb.put(cls, q1Var);
    }

    protected static final boolean w(q1 q1Var, boolean z10) {
        Object obj;
        byte byteValue = ((Byte) q1Var.y(1, null, null)).byteValue();
        if (byteValue == 1) {
            return true;
        }
        if (byteValue == 0) {
            return false;
        }
        boolean h10 = d3.a().b(q1Var.getClass()).h(q1Var);
        if (z10) {
            if (true != h10) {
                obj = null;
            } else {
                obj = q1Var;
            }
            q1Var.y(2, obj, null);
        }
        return h10;
    }

    private final int z(g3 g3Var) {
        return d3.a().b(getClass()).a(this);
    }

    @Override // com.google.android.gms.internal.play_billing.v2
    public final /* synthetic */ u2 a() {
        return (o1) y(5, null, null);
    }

    @Override // com.google.android.gms.internal.play_billing.v2
    public final void b(z0 z0Var) {
        d3.a().b(getClass()).g(this, a1.L(z0Var));
    }

    @Override // com.google.android.gms.internal.play_billing.v2
    public final int c() {
        if (x()) {
            int z10 = z(null);
            if (z10 >= 0) {
                return z10;
            }
            throw new IllegalStateException("serialized size must be non-negative, was " + z10);
        }
        int i10 = this.zzd & Integer.MAX_VALUE;
        if (i10 != Integer.MAX_VALUE) {
            return i10;
        }
        int z11 = z(null);
        if (z11 >= 0) {
            this.zzd = (this.zzd & Integer.MIN_VALUE) | z11;
            return z11;
        }
        throw new IllegalStateException("serialized size must be non-negative, was " + z11);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.gms.internal.play_billing.z
    public final int d(g3 g3Var) {
        if (x()) {
            int a10 = g3Var.a(this);
            if (a10 >= 0) {
                return a10;
            }
            throw new IllegalStateException("serialized size must be non-negative, was " + a10);
        }
        int i10 = this.zzd & Integer.MAX_VALUE;
        if (i10 == Integer.MAX_VALUE) {
            int a11 = g3Var.a(this);
            if (a11 >= 0) {
                this.zzd = (this.zzd & Integer.MIN_VALUE) | a11;
                return a11;
            }
            throw new IllegalStateException("serialized size must be non-negative, was " + a11);
        }
        return i10;
    }

    public final boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || getClass() != obj.getClass()) {
            return false;
        }
        return d3.a().b(getClass()).f(this, (q1) obj);
    }

    final int f() {
        return d3.a().b(getClass()).d(this);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final o1 g() {
        return (o1) y(5, null, null);
    }

    public final o1 h() {
        o1 o1Var = (o1) y(5, null, null);
        o1Var.e(this);
        return o1Var;
    }

    public final int hashCode() {
        if (!x()) {
            int i10 = this.zza;
            if (i10 == 0) {
                int f10 = f();
                this.zza = f10;
                return f10;
            }
            return i10;
        }
        return f();
    }

    public final boolean j() {
        return w(this, true);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final q1 k() {
        return (q1) y(4, null, null);
    }

    @Override // com.google.android.gms.internal.play_billing.w2
    public final /* synthetic */ v2 n() {
        return (q1) y(6, null, null);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void s() {
        d3.a().b(getClass()).b(this);
        t();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void t() {
        this.zzd &= Integer.MAX_VALUE;
    }

    public final String toString() {
        return x2.a(this, super.toString());
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void v(int i10) {
        this.zzd = (this.zzd & Integer.MIN_VALUE) | Integer.MAX_VALUE;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final boolean x() {
        return (this.zzd & Integer.MIN_VALUE) != 0;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public abstract Object y(int i10, Object obj, Object obj2);
}
