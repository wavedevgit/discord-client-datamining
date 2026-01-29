package androidx.work.impl.background.systemalarm;

import android.content.Context;
import android.content.Intent;
import androidx.work.impl.background.systemalarm.g;
import java.util.ArrayList;
import java.util.List;
import k4.m;
import p4.u;
import p4.x;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class c {

    /* renamed from: f  reason: collision with root package name */
    private static final String f5537f = m.i("ConstraintsCmdHandler");

    /* renamed from: a  reason: collision with root package name */
    private final Context f5538a;

    /* renamed from: b  reason: collision with root package name */
    private final k4.b f5539b;

    /* renamed from: c  reason: collision with root package name */
    private final int f5540c;

    /* renamed from: d  reason: collision with root package name */
    private final g f5541d;

    /* renamed from: e  reason: collision with root package name */
    private final m4.e f5542e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c(Context context, k4.b bVar, int i10, g gVar) {
        this.f5538a = context;
        this.f5539b = bVar;
        this.f5540c = i10;
        this.f5541d = gVar;
        this.f5542e = new m4.e(gVar.g().o());
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void a() {
        List<u> f10 = this.f5541d.g().p().H().f();
        ConstraintProxy.a(this.f5538a, f10);
        ArrayList<u> arrayList = new ArrayList(f10.size());
        long a10 = this.f5539b.a();
        for (u uVar : f10) {
            if (a10 >= uVar.c() && (!uVar.k() || this.f5542e.a(uVar))) {
                arrayList.add(uVar);
            }
        }
        for (u uVar2 : arrayList) {
            String str = uVar2.f44910a;
            Intent c10 = b.c(this.f5538a, x.a(uVar2));
            m e10 = m.e();
            String str2 = f5537f;
            e10.a(str2, "Creating a delay_met command for workSpec with id (" + str + ")");
            this.f5541d.f().a().execute(new g.b(this.f5541d, c10, this.f5540c));
        }
    }
}
