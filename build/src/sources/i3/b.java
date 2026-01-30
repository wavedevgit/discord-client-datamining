package i3;

import androidx.lifecycle.LifecycleOwner;
import w0.w;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class b {

    /* renamed from: a  reason: collision with root package name */
    private static final w f28377a;

    /* JADX WARN: Code restructure failed: missing block: B:7:0x0026, code lost:
        r1 = null;
     */
    static {
        /*
            r0 = 0
            kotlin.Result$a r1 = kotlin.Result.f33295e     // Catch: java.lang.Throwable -> L2b
            java.lang.Class<androidx.lifecycle.LifecycleOwner> r1 = androidx.lifecycle.LifecycleOwner.class
            java.lang.ClassLoader r1 = r1.getClassLoader()     // Catch: java.lang.Throwable -> L2b
            kotlin.jvm.internal.Intrinsics.checkNotNull(r1)     // Catch: java.lang.Throwable -> L2b
            java.lang.String r2 = "androidx.compose.ui.platform.AndroidCompositionLocals_androidKt"
            java.lang.String r3 = "getLocalLifecycleOwner"
            java.lang.Class r1 = r1.loadClass(r2)     // Catch: java.lang.Throwable -> L2b
            java.lang.reflect.Method r1 = r1.getMethod(r3, r0)     // Catch: java.lang.Throwable -> L2b
            java.lang.annotation.Annotation[] r2 = r1.getAnnotations()     // Catch: java.lang.Throwable -> L2b
            int r3 = r2.length     // Catch: java.lang.Throwable -> L2b
            r4 = 0
        L1e:
            if (r4 >= r3) goto L2d
            r5 = r2[r4]     // Catch: java.lang.Throwable -> L2b
            boolean r5 = r5 instanceof ir.c     // Catch: java.lang.Throwable -> L2b
            if (r5 == 0) goto L28
        L26:
            r1 = r0
            goto L37
        L28:
            int r4 = r4 + 1
            goto L1e
        L2b:
            r1 = move-exception
            goto L3c
        L2d:
            java.lang.Object r1 = r1.invoke(r0, r0)     // Catch: java.lang.Throwable -> L2b
            boolean r2 = r1 instanceof w0.w     // Catch: java.lang.Throwable -> L2b
            if (r2 == 0) goto L26
            w0.w r1 = (w0.w) r1     // Catch: java.lang.Throwable -> L2b
        L37:
            java.lang.Object r1 = kotlin.Result.b(r1)     // Catch: java.lang.Throwable -> L2b
            goto L46
        L3c:
            kotlin.Result$a r2 = kotlin.Result.f33295e
            java.lang.Object r1 = kotlin.c.a(r1)
            java.lang.Object r1 = kotlin.Result.b(r1)
        L46:
            boolean r2 = kotlin.Result.g(r1)
            if (r2 == 0) goto L4d
            goto L4e
        L4d:
            r0 = r1
        L4e:
            w0.w r0 = (w0.w) r0
            if (r0 != 0) goto L5b
            i3.a r0 = new i3.a
            r0.<init>()
            w0.w r0 = w0.e.a(r0)
        L5b:
            i3.b.f28377a = r0
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: i3.b.<clinit>():void");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final LifecycleOwner b() {
        throw new IllegalStateException("CompositionLocal LocalLifecycleOwner not present");
    }

    public static final w c() {
        return f28377a;
    }
}
