package gf;

import android.app.PendingIntent;
import android.os.Looper;
import android.os.Message;
import android.util.Log;
import gf.c;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class z0 extends hg.g {

    /* renamed from: b  reason: collision with root package name */
    final /* synthetic */ c f26215b;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public z0(c cVar, Looper looper) {
        super(looper);
        this.f26215b = cVar;
    }

    private static final void a(Message message) {
        a1 a1Var = (a1) message.obj;
        a1Var.b();
        a1Var.e();
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
        c.a aVar;
        c.a aVar2;
        com.google.android.gms.common.b bVar;
        com.google.android.gms.common.b bVar2;
        com.google.android.gms.common.b bVar3;
        com.google.android.gms.common.b bVar4;
        boolean z10;
        if (this.f26215b.N.get() != message.arg1) {
            if (b(message)) {
                a(message);
                return;
            }
            return;
        }
        int i10 = message.what;
        if ((i10 != 1 && i10 != 7 && ((i10 != 4 || this.f26215b.s()) && message.what != 5)) || this.f26215b.c()) {
            int i11 = message.what;
            PendingIntent pendingIntent = null;
            if (i11 == 4) {
                this.f26215b.K = new com.google.android.gms.common.b(message.arg2);
                if (c.f0(this.f26215b)) {
                    c cVar = this.f26215b;
                    z10 = cVar.L;
                    if (!z10) {
                        cVar.g0(3, null);
                        return;
                    }
                }
                c cVar2 = this.f26215b;
                bVar3 = cVar2.K;
                if (bVar3 != null) {
                    bVar4 = cVar2.K;
                } else {
                    bVar4 = new com.google.android.gms.common.b(8);
                }
                this.f26215b.A.a(bVar4);
                this.f26215b.K(bVar4);
                return;
            } else if (i11 == 5) {
                c cVar3 = this.f26215b;
                bVar = cVar3.K;
                if (bVar != null) {
                    bVar2 = cVar3.K;
                } else {
                    bVar2 = new com.google.android.gms.common.b(8);
                }
                this.f26215b.A.a(bVar2);
                this.f26215b.K(bVar2);
                return;
            } else if (i11 == 3) {
                Object obj = message.obj;
                if (obj instanceof PendingIntent) {
                    pendingIntent = (PendingIntent) obj;
                }
                com.google.android.gms.common.b bVar5 = new com.google.android.gms.common.b(message.arg2, pendingIntent);
                this.f26215b.A.a(bVar5);
                this.f26215b.K(bVar5);
                return;
            } else if (i11 == 6) {
                this.f26215b.g0(5, null);
                c cVar4 = this.f26215b;
                aVar = cVar4.F;
                if (aVar != null) {
                    aVar2 = cVar4.F;
                    aVar2.f(message.arg2);
                }
                this.f26215b.L(message.arg2);
                c.e0(this.f26215b, 5, 1, null);
                return;
            } else if (i11 == 2 && !this.f26215b.a()) {
                a(message);
                return;
            } else if (b(message)) {
                ((a1) message.obj).c();
                return;
            } else {
                int i12 = message.what;
                Log.wtf("GmsClient", "Don't know how to handle message: " + i12, new Exception());
                return;
            }
        }
        a(message);
    }
}
