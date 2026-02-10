package oa;

import android.util.Log;
import com.facebook.common.references.CloseableReference;
import java.io.Closeable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class a {

    /* renamed from: a  reason: collision with root package name */
    private final CloseableReference.c f40329a;

    /* renamed from: oa.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class C0584a implements CloseableReference.c {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ qa.a f40330a;

        C0584a(qa.a aVar) {
            this.f40330a = aVar;
        }

        @Override // com.facebook.common.references.CloseableReference.c
        public void a(t8.d dVar, Throwable th2) {
            String str;
            this.f40330a.a(dVar, th2);
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
            return this.f40330a.b();
        }
    }

    public a(qa.a aVar) {
        this.f40329a = new C0584a(aVar);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static String d(Throwable th2) {
        if (th2 == null) {
            return "";
        }
        return Log.getStackTraceString(th2);
    }

    public CloseableReference b(Closeable closeable) {
        return CloseableReference.O0(closeable, this.f40329a);
    }

    public CloseableReference c(Object obj, t8.c cVar) {
        return CloseableReference.V0(obj, cVar, this.f40329a);
    }
}
