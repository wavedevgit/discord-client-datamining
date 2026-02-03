package na;

import android.util.Log;
import com.facebook.common.references.CloseableReference;
import java.io.Closeable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class a {

    /* renamed from: a  reason: collision with root package name */
    private final CloseableReference.c f39776a;

    /* renamed from: na.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class C0520a implements CloseableReference.c {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ pa.a f39777a;

        C0520a(pa.a aVar) {
            this.f39777a = aVar;
        }

        @Override // com.facebook.common.references.CloseableReference.c
        public boolean a() {
            return this.f39777a.b();
        }

        @Override // com.facebook.common.references.CloseableReference.c
        public void b(s8.d dVar, Throwable th2) {
            String str;
            this.f39777a.a(dVar, th2);
            Object f10 = dVar.f();
            if (f10 != null) {
                str = f10.getClass().getName();
            } else {
                str = "<value is null>";
            }
            p8.a.L("Fresco", "Finalized without closing: %x %x (type = %s).\nStack:\n%s", Integer.valueOf(System.identityHashCode(this)), Integer.valueOf(System.identityHashCode(dVar)), str, a.d(th2));
        }
    }

    public a(pa.a aVar) {
        this.f39776a = new C0520a(aVar);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static String d(Throwable th2) {
        if (th2 == null) {
            return "";
        }
        return Log.getStackTraceString(th2);
    }

    public CloseableReference b(Closeable closeable) {
        return CloseableReference.O0(closeable, this.f39776a);
    }

    public CloseableReference c(Object obj, s8.c cVar) {
        return CloseableReference.Y0(obj, cVar, this.f39776a);
    }
}
