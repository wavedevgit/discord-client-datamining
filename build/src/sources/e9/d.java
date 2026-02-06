package e9;

import android.content.Context;
import com.facebook.drawee.backends.pipeline.PipelineDraweeControllerBuilder;
import com.facebook.drawee.view.SimpleDraweeView;
import com.facebook.imagepipeline.core.ImagePipeline;
import com.facebook.imagepipeline.core.ImagePipelineConfig;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class d {

    /* renamed from: a  reason: collision with root package name */
    private static final Class f21384a = d.class;

    /* renamed from: b  reason: collision with root package name */
    private static e f21385b = null;

    /* renamed from: c  reason: collision with root package name */
    private static volatile boolean f21386c = false;

    public static ImagePipeline a() {
        return b().j();
    }

    public static com.facebook.imagepipeline.core.b b() {
        return com.facebook.imagepipeline.core.b.l();
    }

    public static void c(Context context, ImagePipelineConfig imagePipelineConfig) {
        d(context, imagePipelineConfig, null);
    }

    public static void d(Context context, ImagePipelineConfig imagePipelineConfig, b bVar) {
        e(context, imagePipelineConfig, bVar, true);
    }

    /* JADX WARN: Code restructure failed: missing block: B:16:0x004c, code lost:
        if (ya.b.d() != false) goto L16;
     */
    /* JADX WARN: Code restructure failed: missing block: B:17:0x004e, code lost:
        ya.b.b();
     */
    /* JADX WARN: Code restructure failed: missing block: B:20:0x005e, code lost:
        if (ya.b.d() == false) goto L17;
     */
    /* JADX WARN: Code restructure failed: missing block: B:24:0x006d, code lost:
        if (ya.b.d() == false) goto L17;
     */
    /* JADX WARN: Code restructure failed: missing block: B:28:0x007c, code lost:
        if (ya.b.d() == false) goto L17;
     */
    /* JADX WARN: Code restructure failed: missing block: B:32:0x008b, code lost:
        if (ya.b.d() == false) goto L17;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public static void e(android.content.Context r2, com.facebook.imagepipeline.core.ImagePipelineConfig r3, e9.b r4, boolean r5) {
        /*
            boolean r0 = ya.b.d()
            if (r0 == 0) goto Lb
            java.lang.String r0 = "Fresco#initialize"
            ya.b.a(r0)
        Lb:
            boolean r0 = e9.d.f21386c
            if (r0 == 0) goto L17
            java.lang.Class r0 = e9.d.f21384a
            java.lang.String r1 = "Fresco has already been initialized! `Fresco.initialize(...)` should only be called 1 single time to avoid memory leaks!"
            p8.a.F(r0, r1)
            goto L1a
        L17:
            r0 = 1
            e9.d.f21386c = r0
        L1a:
            na.u.b(r5)
            boolean r5 = nb.a.c()
            if (r5 != 0) goto L99
            boolean r5 = ya.b.d()
            if (r5 == 0) goto L2e
            java.lang.String r5 = "Fresco.initialize->SoLoader.init"
            ya.b.a(r5)
        L2e:
            java.lang.String r5 = "com.facebook.imagepipeline.nativecode.NativeCodeInitializer"
            java.lang.Class r5 = java.lang.Class.forName(r5)     // Catch: java.lang.NoSuchMethodException -> L52 java.lang.reflect.InvocationTargetException -> L61 java.lang.IllegalAccessException -> L70 java.lang.ClassNotFoundException -> L7f java.lang.Throwable -> L8e
            java.lang.String r0 = "init"
            java.lang.Class<android.content.Context> r1 = android.content.Context.class
            java.lang.Class[] r1 = new java.lang.Class[]{r1}     // Catch: java.lang.NoSuchMethodException -> L52 java.lang.reflect.InvocationTargetException -> L61 java.lang.IllegalAccessException -> L70 java.lang.ClassNotFoundException -> L7f java.lang.Throwable -> L8e
            java.lang.reflect.Method r5 = r5.getMethod(r0, r1)     // Catch: java.lang.NoSuchMethodException -> L52 java.lang.reflect.InvocationTargetException -> L61 java.lang.IllegalAccessException -> L70 java.lang.ClassNotFoundException -> L7f java.lang.Throwable -> L8e
            java.lang.Object[] r0 = new java.lang.Object[]{r2}     // Catch: java.lang.NoSuchMethodException -> L52 java.lang.reflect.InvocationTargetException -> L61 java.lang.IllegalAccessException -> L70 java.lang.ClassNotFoundException -> L7f java.lang.Throwable -> L8e
            r1 = 0
            r5.invoke(r1, r0)     // Catch: java.lang.NoSuchMethodException -> L52 java.lang.reflect.InvocationTargetException -> L61 java.lang.IllegalAccessException -> L70 java.lang.ClassNotFoundException -> L7f java.lang.Throwable -> L8e
            boolean r5 = ya.b.d()
            if (r5 == 0) goto L99
        L4e:
            ya.b.b()
            goto L99
        L52:
            nb.c r5 = new nb.c     // Catch: java.lang.Throwable -> L8e
            r5.<init>()     // Catch: java.lang.Throwable -> L8e
            nb.a.b(r5)     // Catch: java.lang.Throwable -> L8e
            boolean r5 = ya.b.d()
            if (r5 == 0) goto L99
            goto L4e
        L61:
            nb.c r5 = new nb.c     // Catch: java.lang.Throwable -> L8e
            r5.<init>()     // Catch: java.lang.Throwable -> L8e
            nb.a.b(r5)     // Catch: java.lang.Throwable -> L8e
            boolean r5 = ya.b.d()
            if (r5 == 0) goto L99
            goto L4e
        L70:
            nb.c r5 = new nb.c     // Catch: java.lang.Throwable -> L8e
            r5.<init>()     // Catch: java.lang.Throwable -> L8e
            nb.a.b(r5)     // Catch: java.lang.Throwable -> L8e
            boolean r5 = ya.b.d()
            if (r5 == 0) goto L99
            goto L4e
        L7f:
            nb.c r5 = new nb.c     // Catch: java.lang.Throwable -> L8e
            r5.<init>()     // Catch: java.lang.Throwable -> L8e
            nb.a.b(r5)     // Catch: java.lang.Throwable -> L8e
            boolean r5 = ya.b.d()
            if (r5 == 0) goto L99
            goto L4e
        L8e:
            r2 = move-exception
            boolean r3 = ya.b.d()
            if (r3 == 0) goto L98
            ya.b.b()
        L98:
            throw r2
        L99:
            android.content.Context r2 = r2.getApplicationContext()
            if (r3 != 0) goto La3
            com.facebook.imagepipeline.core.b.s(r2)
            goto La6
        La3:
            com.facebook.imagepipeline.core.b.t(r3)
        La6:
            f(r2, r4)
            boolean r2 = ya.b.d()
            if (r2 == 0) goto Lb2
            ya.b.b()
        Lb2:
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: e9.d.e(android.content.Context, com.facebook.imagepipeline.core.ImagePipelineConfig, e9.b, boolean):void");
    }

    private static void f(Context context, b bVar) {
        if (ya.b.d()) {
            ya.b.a("Fresco.initializeDrawee");
        }
        e eVar = new e(context, bVar);
        f21385b = eVar;
        SimpleDraweeView.initialize(eVar);
        if (ya.b.d()) {
            ya.b.b();
        }
    }

    public static PipelineDraweeControllerBuilder g() {
        return f21385b.get();
    }
}
