package gf;

import android.app.PendingIntent;
import android.os.Looper;
import android.os.Message;
import android.util.Log;
import java.util.Objects;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class x0 extends hg.p {

    /* renamed from: b  reason: collision with root package name */
    final /* synthetic */ c f25159b;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public x0(c cVar, Looper looper) {
        super(looper);
        Objects.requireNonNull(cVar);
        this.f25159b = cVar;
    }

    private static final void a(Message message) {
        y0 y0Var = (y0) message.obj;
        if (y0Var != null) {
            y0Var.c();
        }
    }

    private static final boolean b(Message message) {
        int i10 = message.what;
        if (i10 == 2 || i10 == 1 || i10 == 7) {
            return true;
        }
        return false;
    }

    @Override // android.os.Handler
    public final void handleMessage(Message message) {
        com.google.android.gms.common.b bVar;
        com.google.android.gms.common.b bVar2;
        c cVar = this.f25159b;
        if (cVar.N.get() != message.arg1) {
            if (b(message)) {
                a(message);
                return;
            }
            return;
        }
        int i10 = message.what;
        if ((i10 != 1 && i10 != 7 && ((i10 != 4 || cVar.s()) && message.what != 5)) || cVar.c()) {
            int i11 = message.what;
            PendingIntent pendingIntent = null;
            if (i11 == 4) {
                cVar.e0(new com.google.android.gms.common.b(message.arg2));
                if (cVar.X() && !cVar.f0()) {
                    cVar.U(3, null);
                    return;
                }
                if (cVar.d0() != null) {
                    bVar2 = cVar.d0();
                } else {
                    bVar2 = new com.google.android.gms.common.b(8);
                }
                cVar.A.a(bVar2);
                cVar.K(bVar2);
                return;
            } else if (i11 == 5) {
                if (cVar.d0() != null) {
                    bVar = cVar.d0();
                } else {
                    bVar = new com.google.android.gms.common.b(8);
                }
                cVar.A.a(bVar);
                cVar.K(bVar);
                return;
            } else if (i11 == 3) {
                Object obj = message.obj;
                if (obj instanceof PendingIntent) {
                    pendingIntent = (PendingIntent) obj;
                }
                com.google.android.gms.common.b bVar3 = new com.google.android.gms.common.b(message.arg2, pendingIntent);
                cVar.A.a(bVar3);
                cVar.K(bVar3);
                return;
            } else if (i11 == 6) {
                cVar.U(5, null);
                if (cVar.b0() != null) {
                    cVar.b0().f(message.arg2);
                }
                cVar.L(message.arg2);
                cVar.V(5, 1, null);
                return;
            } else if (i11 == 2 && !cVar.a()) {
                a(message);
                return;
            } else if (b(message)) {
                ((y0) message.obj).b();
                return;
            } else {
                int i12 = message.what;
                StringBuilder sb2 = new StringBuilder(String.valueOf(i12).length() + 34);
                sb2.append("Don't know how to handle message: ");
                sb2.append(i12);
                Log.wtf("GmsClient", sb2.toString(), new Exception());
                return;
            }
        }
        a(message);
    }
}
