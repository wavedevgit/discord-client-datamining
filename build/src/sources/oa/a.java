package oa;

import android.util.Log;
import com.facebook.common.references.CloseableReference;
import java.io.Closeable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class a {

    /* renamed from: a  reason: collision with root package name */
    private final CloseableReference.c f38656a;

    /* renamed from: oa.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class C0546a implements CloseableReference.c {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ qa.a f38657a;

        C0546a(qa.a aVar) {
            this.f38657a = aVar;
        }

        @Override // com.facebook.common.references.CloseableReference.c
        public void a(t8.d dVar, Throwable th2) {
            String str;
            this.f38657a.a(dVar, th2);
            Object f10 = dVar.f();
            if (f10 != null) {
                str = f10.getClass().getName();
            } else {
                str = "<value is null>";
            }
            q8.a.L("Fresco", "Finalized without closing: %x %x (type = %s).\nStack:\n%s", Integer.valueOf(System.identityHashCode(this)), Integer.valueOf(System.identityHashCode(dVar)), str, a.d(th2));
        }

        @Override // com.facebook.common.references.CloseableReference.c
        public boolean b() {
            return this.f38657a.b();
        }
    }

    public a(qa.a aVar) {
        this.f38656a = new C0546a(aVar);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static String d(Throwable th2) {
        if (th2 == null) {
            return "";
        }
        return Log.getStackTraceString(th2);
    }

    public CloseableReference b(Closeable closeable) {
        return CloseableReference.F0(closeable, this.f38656a);
    }

    public CloseableReference c(Object obj, t8.c cVar) {
        return CloseableReference.H0(obj, cVar, this.f38656a);
    }
}
