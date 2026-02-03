package nr;

import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a {

    /* renamed from: nr.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0533a extends Thread {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Function0 f42332d;

        C0533a(Function0 function0) {
            this.f42332d = function0;
        }

        @Override // java.lang.Thread, java.lang.Runnable
        public void run() {
            this.f42332d.invoke();
        }
    }

    public static final Thread a(boolean z10, boolean z11, ClassLoader classLoader, String str, int i10, Function0 block) {
        Intrinsics.checkNotNullParameter(block, "block");
        C0533a c0533a = new C0533a(block);
        if (z11) {
            c0533a.setDaemon(true);
        }
        if (i10 > 0) {
            c0533a.setPriority(i10);
        }
        if (str != null) {
            c0533a.setName(str);
        }
        if (classLoader != null) {
            c0533a.setContextClassLoader(classLoader);
        }
        if (z10) {
            c0533a.start();
        }
        return c0533a;
    }

    public static /* synthetic */ Thread b(boolean z10, boolean z11, ClassLoader classLoader, String str, int i10, Function0 function0, int i11, Object obj) {
        if ((i11 & 1) != 0) {
            z10 = true;
        }
        if ((i11 & 2) != 0) {
            z11 = false;
        }
        if ((i11 & 4) != 0) {
            classLoader = null;
        }
        if ((i11 & 8) != 0) {
            str = null;
        }
        if ((i11 & 16) != 0) {
            i10 = -1;
        }
        int i12 = i10;
        String str2 = str;
        return a(z10, z11, classLoader, str2, i12, function0);
    }
}
